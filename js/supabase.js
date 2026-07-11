/* ============================================================
   Her Lib — Firebase Auth (REST API) + localStorage
   无限用户免费，无需 SDK，纯 JS 调用
   ============================================================ */

// ⚠️ 替换为你的 Firebase API Key
var FIREBASE_API_KEY = 'AIzaSyAgzOqUP1c6IknNvntrjE6iDJvOy2l0sbs';
var FIREBASE_AUTH_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:';

window._currentUser = null;
window.useDemo = false;

// 初始化
function initAuth() {
  if (FIREBASE_API_KEY.indexOf('YOUR_') < 0) {
    window.useDemo = false;
    checkSavedSession();
  } else {
    window.useDemo = true;
  }
  updateAllNavUI();
}

function checkSavedSession() {
  var saved = localStorage.getItem('herlib-firebase-user');
  if (saved) {
    try { window._currentUser = JSON.parse(saved); } catch(e) {}
  }
  // 也检查演示模式
  if (!window._currentUser) {
    var demo = localStorage.getItem('herlib-demo-user');
    if (demo) window._currentUser = { id: 'demo-' + demo, email: demo };
  }
}

// 自动更新所有页面的导航栏登录状态
function updateAllNavUI() {
  var user = window._currentUser;
  var navArea = document.getElementById('navUserArea');
  if (!navArea) return;

  if (user && user.email) {
    var initial = user.email[0].toUpperCase();
    navArea.innerHTML = '<div style=\"position:relative;display:flex;align-items:center;gap:8px;cursor:pointer\" id=\"navUserMenu\">' +
      '<span style=\"font-size:0.75rem;color:var(--color-text-secondary);max-width:100px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap\">' + user.email + '</span>' +
      '<div class=\"nav-user-avatar\">' + initial + '</div>' +
      '<div class=\"nav-dropdown\" id=\"userDropdown\" style=\"top:100%;right:0\">' +
      '<a href=\"profile.html\">👤 个人中心</a><div class=\"divider\"></div>' +
      '<a href=\"#\" id=\"logoutLink\">🚪 退出登录</a></div></div>';

    // 下拉菜单
    setTimeout(function() {
      var menu = document.getElementById('navUserMenu');
      var dropdown = document.getElementById('userDropdown');
      if (menu && dropdown) {
        menu.addEventListener('click', function(e) { e.stopPropagation(); dropdown.classList.toggle('active'); });
        document.addEventListener('click', function() { dropdown.classList.remove('active'); });
      }
      var logout = document.getElementById('logoutLink');
      if (logout) logout.addEventListener('click', function(e) {
        e.preventDefault();
        window._currentUser = null;
        localStorage.removeItem('herlib-firebase-user');
        localStorage.removeItem('herlib-demo-user');
        window.location.reload();
      });
    }, 200);
  } else {
    navArea.innerHTML = '<a href=\"login.html\" class=\"nav-login-btn\">登录</a>';
  }
}

document.addEventListener('DOMContentLoaded', initAuth);

// === 用户认证 ===

async function firebaseSignUp(email, password) {
  try {
    var res = await fetch(FIREBASE_AUTH_URL + 'signUp?key=' + FIREBASE_API_KEY, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email: email, password: password, returnSecureToken: true})
    });
    var data = await res.json();
    if (data.error) return { error: { message: data.error.message } };
    var user = { id: data.localId, email: data.email, token: data.idToken };
    window._currentUser = user;
    localStorage.setItem('herlib-firebase-user', JSON.stringify(user));
    return { data: { user: user }, error: null };
  } catch(e) { return { error: { message: e.message } }; }
}

async function firebaseSignIn(email, password) {
  try {
    var res = await fetch(FIREBASE_AUTH_URL + 'signInWithPassword?key=' + FIREBASE_API_KEY, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email: email, password: password, returnSecureToken: true})
    });
    var data = await res.json();
    if (data.error) return { error: { message: data.error.message } };
    var user = { id: data.localId, email: data.email, token: data.idToken };
    window._currentUser = user;
    localStorage.setItem('herlib-firebase-user', JSON.stringify(user));
    return { data: { user: user }, error: null };
  } catch(e) { return { error: { message: e.message } }; }
}

async function getCurrentUser() {
  if (window._currentUser) return window._currentUser;
  var demo = localStorage.getItem('herlib-demo-user');
  if (demo) return { id: 'demo-' + demo, email: demo };
  return null;
}

async function isAdmin() {
  var user = await getCurrentUser();
  return user && user.email === '2935357829@qq.com';
}

async function signOut() {
  window._currentUser = null;
  localStorage.removeItem('herlib-firebase-user');
  localStorage.removeItem('herlib-demo-user');
}

// === localStorage 数据存储（按用户ID隔离）===

// 获取当前用户ID（从localStorage直接读取，确保一致性）
function getCurrentUserId() {
  var saved = localStorage.getItem('herlib-firebase-user');
  if (saved) { try { var u = JSON.parse(saved); return u.id || u.email; } catch(e) {} }
  var demo = localStorage.getItem('herlib-demo-user');
  if (demo) return 'demo-' + demo;
  return null;
}

function colKey() {
  var uid = getCurrentUserId() || 'anonymous';
  return 'herlib-col-' + uid;
}

// 同步收藏到云端
async function syncCollections(userId, data) {
  try {
    await fetch('/api/collections', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ userId: userId || getCurrentUserId(), data: data }) });
  } catch(e) {}
}

async function getUserCollections(userId) {
  var uid = userId || getCurrentUserId();
  var localData = [];
  try { localData = JSON.parse(localStorage.getItem(colKey()) || '[]'); } catch(e) {}

  // 尝试从 API 拉取云端数据
  var apiData = [];
  try {
    var resp = await fetch('/api/collections?userId=' + encodeURIComponent(uid));
    if (resp.ok) apiData = await resp.json();
  } catch(e) {}

  // 合并：云端优先，本地补充（按 book_id 去重）
  var merged = apiData.slice();
  var apiIds = {};
  merged.forEach(function(c) { apiIds[c.book_id] = true; });
  localData.forEach(function(c) {
    if (!apiIds[c.book_id]) { merged.push(c); apiIds[c.book_id] = true; }
  });

  // 存回本地和云端
  localStorage.setItem(colKey(), JSON.stringify(merged));
  if (apiData.length === 0 || merged.length !== apiData.length) {
    syncCollections(uid, merged);
  }
  return merged;
}

async function addCollection(userId, bookId, data) {
  var all = await getUserCollections(userId);
  all = all.filter(function(c) { return c.book_id !== bookId; });
  all.push(Object.assign({ id: 'col-' + Date.now(), user_id: userId || 'anon', book_id: bookId, is_top: false, read_status: 'unread', saved_quotes: [], created_at: new Date().toISOString() }, data || {}));
  localStorage.setItem(colKey(), JSON.stringify(all));
  syncCollections(userId, all);
  return { error: null };
}

async function removeCollection(userId, bookId) {
  var all = await getUserCollections(userId);
  all = all.filter(function(c) { return c.book_id !== bookId; });
  localStorage.setItem(colKey(), JSON.stringify(all));
  syncCollections(userId, all);
  return { error: null };
}

async function updateCollection(userId, bookId, data) {
  var all = await getUserCollections(userId);
  var found = false;
  all.forEach(function(c) { if (c.book_id === bookId) { Object.keys(data).forEach(function(k) { c[k] = data[k]; }); found = true; } });
  if (!found) { all.push(Object.assign({ id: 'col-' + Date.now(), user_id: userId, book_id: bookId, is_top: false, read_status: 'unread', saved_quotes: [], created_at: new Date().toISOString() }, data)); }
  localStorage.setItem(colKey(), JSON.stringify(all));
  syncCollections(userId, all);
  return { error: null };
}

async function getUserCollectedBookIds(userId) {
  var cols = await getUserCollections(userId);
  return new Set(cols.map(function(c) { return c.book_id; }));
}

async function addComment(bookId, userId, content, rating) {
  var commentUserEmail = (window._currentUser && window._currentUser.email) || localStorage.getItem('herlib-demo-user') || '匿名';
  var comment = { id: 'cmt-' + Date.now(), book_id: bookId, user_id: userId, user_email: commentUserEmail, content: content, rating: rating || 5, created_at: new Date().toISOString() };
  // 存本地
  var comments = JSON.parse(localStorage.getItem('herlib-comments') || '{}');
  if (!comments[bookId]) comments[bookId] = [];
  comments[bookId].push(comment);
  localStorage.setItem('herlib-comments', JSON.stringify(comments));
  // 同步云端
  fetch('/api/comments', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ bookId: bookId, userId: userId, userEmail: commentUserEmail, content: content, rating: rating || 5 }) }).catch(function() {});
  return { error: null };
}

async function getComments(bookId) {
  // 优先从 API 读取（能看到所有人的评论）
  try {
    var resp = await fetch('/api/comments?bookId=' + encodeURIComponent(bookId));
    if (resp.ok) {
      var apiComments = await resp.json();
      if (apiComments.length > 0) {
        // 合并到本地
        var local = JSON.parse(localStorage.getItem('herlib-comments') || '{}');
        local[bookId] = apiComments;
        localStorage.setItem('herlib-comments', JSON.stringify(local));
        return apiComments.sort(function(a, b) { return b.created_at.localeCompare(a.created_at); });
      }
    }
  } catch(e) {}
  // API 失败时用 localStorage
  var comments = JSON.parse(localStorage.getItem('herlib-comments') || '{}');
  return (comments[bookId] || []).sort(function(a, b) { return b.created_at.localeCompare(a.created_at); });
}

async function deleteComment(bookId, commentId) {
  // 从本地删除
  var comments = JSON.parse(localStorage.getItem('herlib-comments') || '{}');
  if (comments[bookId]) {
    comments[bookId] = comments[bookId].filter(function(c) { return c.id !== commentId; });
    localStorage.setItem('herlib-comments', JSON.stringify(comments));
  }
  // 从云端删除
  fetch('/api/comments/' + commentId, { method: 'DELETE' }).catch(function() {});
}

async function getAllUserComments(userEmail) {
  // 优先 API
  try {
    var resp = await fetch('/api/comments');
    if (resp.ok) {
      var all = await resp.json();
      // all is {bookId: [comments]}
      var result = [];
      Object.keys(all).forEach(function(bid) {
        (all[bid] || []).forEach(function(c) {
          if (c.user_email === userEmail) { c.book_id = bid; result.push(c); }
        });
      });
      if (result.length > 0) return result.sort(function(a, b) { return b.created_at.localeCompare(a.created_at); });
    }
  } catch(e) {}
  // 本地兜底
  var comments = JSON.parse(localStorage.getItem('herlib-comments') || '{}');
  var result = [];
  Object.keys(comments).forEach(function(bookId) {
    (comments[bookId] || []).forEach(function(c) {
      if (c.user_email === userEmail) { c.book_id = bookId; result.push(c); }
    });
  });
  return result.sort(function(a, b) { return b.created_at.localeCompare(a.created_at); });
}

// 演示模式
async function demoSignUp(email, password) {
  var users = JSON.parse(localStorage.getItem('herlib-users') || '{}');
  if (users[email]) return { error: { message: '该邮箱已注册' } };
  users[email] = { password: password };
  localStorage.setItem('herlib-users', JSON.stringify(users));
  localStorage.setItem('herlib-demo-user', email);
  return { error: null };
}

async function demoSignIn(email, password) {
  var users = JSON.parse(localStorage.getItem('herlib-users') || '{}');
  if (!users[email]) return { error: { message: '该邮箱未注册' } };
  if (users[email].password !== password) return { error: { message: '密码错误' } };
  localStorage.setItem('herlib-demo-user', email);
  return { error: null };
}

window.getCurrentUser = getCurrentUser;
window.isAdmin = isAdmin;
window.signOut = signOut;
window.getUserCollections = getUserCollections;
window.addCollection = addCollection;
window.removeCollection = removeCollection;
window.updateCollection = updateCollection;
window.getUserCollectedBookIds = getUserCollectedBookIds;
window.addComment = addComment;
window.getComments = getComments;
window.deleteComment = deleteComment;
window.getAllUserComments = getAllUserComments;
window.demoSignUp = demoSignUp;
window.demoSignIn = demoSignIn;
window.firebaseSignUp = firebaseSignUp;
window.firebaseSignIn = firebaseSignIn;
