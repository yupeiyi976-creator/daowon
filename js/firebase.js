/* ============================================================
   Her Lib — Firebase Firestore 后端
   收藏/评论存云端，榜单基于真实全站数据
   保留 localStorage 作为离线兜底
   ============================================================ */

var FIREBASE_API_KEY = 'AIzaSyAgzOqUP1c6IknNvntrjE6iDJvOy2l0sbs';
var FIREBASE_PROJECT_ID = 'herlib';

// 初始化
var db = null;
var firebaseReady = false;

(function initFirebase() {
  // 加载 Firebase SDK
  var script1 = document.createElement('script');
  script1.src = 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js';
  script1.onload = function() {
    var script2 = document.createElement('script');
    script2.src = 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore-compat.js';
    script2.onload = function() {
      try {
        firebase.initializeApp({
          apiKey: FIREBASE_API_KEY,
          projectId: FIREBASE_PROJECT_ID
        });
        db = firebase.firestore();
        firebaseReady = true;
        console.log('🟢 Firestore 已连接');
      } catch(e) {
        console.log('🔶 Firestore 不可用，使用本地模式');
      }
    };
    document.head.appendChild(script2);
  };
  script1.onerror = function() {
    console.log('🔶 Firebase SDK 加载失败，使用本地模式');
  };
  document.head.appendChild(script1);
})();

// === 云端收藏操作 ===

async function cloudAddCollection(userId, bookId, data) {
  if (!firebaseReady || !db) return null;
  try {
    await db.collection('collections').doc(userId + '_' + bookId).set(Object.assign({
      userId: userId, bookId: bookId, isTop: false, readStatus: 'unread', createdAt: new Date().toISOString()
    }, data || {}));
    return { ok: true };
  } catch(e) { return null; }
}

async function cloudRemoveCollection(userId, bookId) {
  if (!firebaseReady || !db) return null;
  try {
    await db.collection('collections').doc(userId + '_' + bookId).delete();
    return { ok: true };
  } catch(e) { return null; }
}

async function cloudUpdateCollection(userId, bookId, data) {
  if (!firebaseReady || !db) return null;
  try {
    await db.collection('collections').doc(userId + '_' + bookId).set(data, { merge: true });
    return { ok: true };
  } catch(e) { return null; }
}

// === 云端评论 ===

async function cloudAddComment(bookId, userId, userEmail, content, rating) {
  if (!firebaseReady || !db) return null;
  try {
    await db.collection('comments').add({
      bookId: bookId, userId: userId, userEmail: userEmail, content: content,
      rating: rating || 5, createdAt: new Date().toISOString()
    });
    return { ok: true };
  } catch(e) { return null; }
}

// === 全站统计（榜单数据源）===

async function getGlobalStats() {
  if (!firebaseReady || !db) return null;
  try {
    // 统计每本书的收藏数
    var snap = await db.collection('collections').get();
    var counts = {};
    snap.forEach(function(doc) {
      var d = doc.data();
      counts[d.bookId] = (counts[d.bookId] || 0) + 1;
    });
    // 统计每本书的评论数
    var commentSnap = await db.collection('comments').get();
    var commentCounts = {};
    commentSnap.forEach(function(doc) {
      var d = doc.data();
      commentCounts[d.bookId] = (commentCounts[d.bookId] || 0) + 1;
    });
    return { collectionCounts: counts, commentCounts: commentCounts };
  } catch(e) { return null; }
}

window.cloudAddCollection = cloudAddCollection;
window.cloudRemoveCollection = cloudRemoveCollection;
window.cloudUpdateCollection = cloudUpdateCollection;
window.cloudAddComment = cloudAddComment;
window.getGlobalStats = getGlobalStats;
window.firebaseReady = firebaseReady;
