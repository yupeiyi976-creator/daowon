/* ============================================================
   Her Lib — 首页逻辑
   功能：栏目卡片、精选横滑、榜单、阅读计划、月度随笔、
         搜索、悬浮向导、深浅色模式、回到顶部、导航滚动等
   ============================================================ */

function waitForData(callback, retries) {
  retries = retries || 50;
  if (window.books && window.books.length > 0) { callback(); }
  else if (retries > 0) { setTimeout(function() { waitForData(callback, retries - 1); }, 100); }
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initFontSize();
  initMinimalMode();
  initNavScroll();
  initMobileMenu();
  initHeroSearch();
  initCategoryCards();
  initFloatingGuide();
  initBackToTop();
  initFooterQuote();
  initOfflineDetection();
  initAuthUI();
  initFirstVisitGuide();
  initFeedbackForm();
  updateAuthUI();
  // 数据驱动的内容等到数据加载后再渲染
  waitForData(function() {
    initFeaturedBooks();
    initMonthlyQuote();
    initRankings();
    initReadingPlan();
  });
});

/* ---- 主题 ---- */
function initTheme() {
  const saved = localStorage.getItem('herlib-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);

  document.getElementById('themeToggle').addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('herlib-theme', next);
    updateThemeIcon(next);
  });
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('themeIcon');
  if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

/* ---- 字号缩放 ---- */
function initFontSize() {
  const sizes = ['standard', 'large', 'small'];
  let idx = sizes.indexOf(localStorage.getItem('herlib-fontsize') || 'standard');
  if (idx === -1) idx = 0;
  document.documentElement.setAttribute('data-font-size', sizes[idx]);

  document.getElementById('fontSizeToggle').addEventListener('click', () => {
    idx = (idx + 1) % sizes.length;
    document.documentElement.setAttribute('data-font-size', sizes[idx]);
    localStorage.setItem('herlib-fontsize', sizes[idx]);
  });
}

/* ---- 极简阅读模式 ---- */
function initMinimalMode() {
  const saved = localStorage.getItem('herlib-minimal') === 'true';
  if (saved) document.documentElement.setAttribute('data-minimal', 'true');
  updateMinimalIcon(saved);

  document.getElementById('minimalToggle').addEventListener('click', () => {
    const isMinimal = document.documentElement.getAttribute('data-minimal') === 'true';
    const next = !isMinimal;
    document.documentElement.setAttribute('data-minimal', next ? 'true' : 'false');
    localStorage.setItem('herlib-minimal', next);
    updateMinimalIcon(next);
  });
}

function updateMinimalIcon(isMinimal) {
  const icon = document.getElementById('minimalIcon');
  if (icon) icon.textContent = isMinimal ? '📝' : '📄';
}

/* ---- 导航栏滚动 ---- */
function initNavScroll() {
  const nav = document.getElementById('navbar');
  let lastScrollY = 0;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScrollY = scrollY;
  }, { passive: true });
}

/* ---- 移动端菜单 ---- */
function initMobileMenu() {
  const toggle = document.getElementById('mobileMenuToggle');
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileMenuOverlay');
  const closeBtn = document.getElementById('mobileMenuClose');

  function open() { menu.classList.add('active'); overlay.classList.add('active'); }
  function close() { menu.classList.remove('active'); overlay.classList.remove('active'); }

  toggle.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', close);
}

/* ---- Hero 搜索 ---- */
function initHeroSearch() {
  const input = document.getElementById('heroSearch');
  const btn = document.getElementById('heroSearchBtn');

  function doSearch() {
    const query = input.value.trim();
    if (query) {
      window.location.href = 'category.html?search=' + encodeURIComponent(query);
    }
  }

  btn.addEventListener('click', doSearch);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') doSearch();
  });
}

/* ---- 栏目卡片 ---- */
function initCategoryCards() {
  const container = document.getElementById('categoryCards');
  if (!container) return;

  const categories = [
    { key: 'thought', name: '思潮漫步', desc: '系统搭建女性认知底层框架', icon: '📚' },
    { key: 'origin', name: '与原生和解', desc: '理解来处，安放自我', icon: '🏠' },
    { key: 'workplace', name: '职场她力量', desc: '看见不平等，找回主动权', icon: '💼' },
    { key: 'motherhood', name: '母职观察', desc: '反思生育与照护的性别政治', icon: '👩‍👧' },
    { key: 'local', name: '本土她故事', desc: '听见东亚女性的真实声音', icon: '🌸' }
  ];

  categories.forEach(cat => {
    const card = document.createElement('a');
    card.href = 'category.html?category=' + cat.key;
    card.className = 'category-card';
    card.innerHTML = `
      <div class="cat-icon">${cat.icon}</div>
      <div class="cat-name">${cat.name}</div>
      <div class="cat-desc">${cat.desc}</div>
    `;
    container.appendChild(card);
  });
}

/* ---- 精选推荐 ---- */
function initFeaturedBooks() {
  const container = document.getElementById('featuredBooks');
  if (!container || !window.books) return;

  const featured = window.books.filter(b => b.featured).slice(0, 8);
  featured.forEach(book => {
    const card = createBookCard(book);
    container.appendChild(card);
  });
}

/* ---- 月度随笔 ---- */
function initMonthlyQuote() {
  const container = document.getElementById('monthlyQuote');
  if (!container || !window.monthlyQuotes) return;

  const now = new Date();
  const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  const quote = window.monthlyQuotes.find(q => q.month === currentMonth)
    || window.monthlyQuotes[window.monthlyQuotes.length - 1];

  container.innerHTML = `
    <blockquote>${quote.text}</blockquote>
    <p style="margin-top:var(--space-md);font-size:var(--text-sm);color:var(--color-text-muted)">
      —— ${quote.author}${quote.book ? '《' + quote.book + '》' : ''}
    </p>
  `;
}

/* ---- 全站自动榜单 ---- */
function initRankings() {
  if (!window.books) return;

  // 月度种子：每月1号自动换排序
  var now = new Date();
  var seed = now.getFullYear() * 100 + (now.getMonth() + 1);
  function monthlyRandom() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  }

  // 热门收藏榜：精选优先+月度随机扰动
  var hot = window.books.slice().sort(function(a, b) {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return monthlyRandom() - 0.5;
  }).slice(0, 10);

  // 高评论榜：月度随机排序
  var commented = window.books.slice().sort(function() {
    return monthlyRandom() - 0.5;
  }).slice(0, 10);

  // 新手友好榜：入门级别+阅读时长短优先
  var beginner = window.books.filter(function(b) { return b.level === 'beginner'; })
    .sort(function(a, b) { return (a.readingTime || 10) - (b.readingTime || 10); })
    .slice(0, 10);

  renderRankingList('hotRankingList', hot);
  renderRankingList('commentRankingList', commented);
  renderRankingList('beginnerRankingList', beginner);
}

function renderRankingList(id, books) {
  const el = document.getElementById(id);
  if (!el) return;

  el.innerHTML = books.map((b, i) => `
    <div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--color-border-light);font-size:var(--text-sm)">
      <span style="font-weight:700;color:var(--color-accent);min-width:20px">${i + 1}</span>
      <a href="book.html?id=${b.id}" style="flex:1;color:var(--color-text);text-align:left;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${b.title}</a>
      <span style="color:var(--color-text-muted);font-size:var(--text-xs)">${b.author}</span>
    </div>
  `).join('');
}

/* ---- 年度阅读计划 ---- */
function initReadingPlan() {
  var container = document.getElementById('readingPlan');
  if (!container || !window.books) return;

  var months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
  // 每月精配书单（主题+难度严格匹配）
  var monthlyBookIds = {
    0: ['t19','t08','t09'], 1: ['t20','t24','t34'], 2: ['o01','l06','o15'],
    3: ['w01','w08','w04'], 4: ['m01','m04','m05'], 5: ['o02','o12','o23'],
    6: ['l09','l21','o10'], 7: ['t31','l13','w26'], 8: ['w21','w24','t14'],
    9: ['t01','t05','t22'], 10: ['l05','l10','l23'], 11: ['o31','o24','l32']
  };
  var allPlanBooks = [];

  months.forEach(function(month, i) {
    var ids = monthlyBookIds[i];
    var b1 = window.books.find(function(x) { return x.id === ids[0]; });
    var b2 = window.books.find(function(x) { return x.id === ids[1]; });
    var b3 = window.books.find(function(x) { return x.id === ids[2]; });
    if (!b1 || !b2 || !b3) return;
    allPlanBooks = allPlanBooks.concat([b1, b2, b3]);
    var ids = [b1.id, b2.id, b3.id];

    var card = document.createElement('a');
    var monthNum = String(i + 1).padStart(2, '0');
    card.href = 'month-plan-' + monthNum + '.html?ids=' + ids.join(',');
    card.className = 'plan-month-card';
    card.style.textDecoration = 'none';
    card.innerHTML =
      '<div class="plan-month">' + month + '</div>' +
      '<div class="plan-books">🌱 ' + b1.title + '<br>🌱 ' + b2.title + '<br>🌳 ' + b3.title + '</div>';
    container.appendChild(card);
  });

  // 一键批量收藏
  document.getElementById('planBatchCollect')?.addEventListener('click', async function() {
    var user = await window.getCurrentUser();
    if (!user) { alert('请先登录再使用收藏功能'); window.location.href = 'login.html'; return; }
    var count = 0;
    for (var i = 0; i < allPlanBooks.length; i++) {
      await window.updateCollection(user.id, allPlanBooks[i].id, { book_id: allPlanBooks[i].id });
      count++;
    }
    alert('✅ 已将 ' + count + ' 本年度计划书籍加入收藏！');
  });
}

/* ---- 悬浮书页向导 ---- */
function initFloatingGuide() {
  // 点击页面任意位置关闭面板
  document.addEventListener('click', function(e) {
    var panel = document.getElementById('guidePanel');
    var toggle = document.getElementById('guideToggle');
    if (panel && toggle && !panel.contains(e.target) && e.target !== toggle) {
      panel.classList.remove('active');
    }
  });

  // 移动端底部导航触发器
  document.getElementById('mobileGuideTrigger')?.addEventListener('click', (e) => {
    e.preventDefault();
    panel.classList.toggle('active');
    // 页面主体偏移
    if (panel.classList.contains('active') && window.innerWidth <= 768) {
      document.body.style.transform = 'translateY(-60px)';
    } else {
      document.body.style.transform = '';
    }
  });
}

/* ---- 回到顶部 ---- */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---- Footer 随机引言 ---- */
function initFooterQuote() {
  const el = document.getElementById('footerQuote');
  if (!el || !window.footerQuotes) return;
  const idx = Math.floor(Math.random() * window.footerQuotes.length);
  el.textContent = window.footerQuotes[idx];
}

/* ---- 离线检测 ---- */
function initOfflineDetection() {
  const banner = document.getElementById('offlineBanner');
  if (!banner) return;

  function update() {
    if (!navigator.onLine) {
      banner.classList.add('visible');
    } else {
      banner.classList.remove('visible');
    }
  }

  window.addEventListener('online', update);
  window.addEventListener('offline', update);
  update();
}

/* ---- 登录状态 UI ---- */
function initAuthUI() {
  // Supabase 模式
  if (!window.useDemo && window.supabase) {
    window.supabase.auth.onAuthStateChange(function(event, session) {
      window._currentUser = (session && session.user) || null;
      updateAuthUI();
    });
    window.supabase.auth.getUser().then(function(result) {
      window._currentUser = (result.data && result.data.user) || null;
      updateAuthUI();
    });
  }
  // 演示模式：从 localStorage 读取
  if (window.useDemo) {
    window.getCurrentUser().then(function(user) {
      window._currentUser = user;
      updateAuthUI();
    });
  }
}

function updateAuthUI() {
  const user = window._currentUser;
  const navArea = document.getElementById('navUserArea');
  const authOnlyEls = document.querySelectorAll('.auth-only');
  const adminOnlyEls = document.querySelectorAll('.admin-only');

  if (user) {
    if (navArea) {
      const initial = (user.email || 'U')[0].toUpperCase();
      navArea.innerHTML = `
        <div style="position:relative;display:flex;align-items:center;gap:8px">
          <span style="font-size:var(--text-xs);color:var(--color-text-secondary);max-width:100px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${user.email}</span>
          <div class="nav-user-avatar" id="userAvatar">${initial}</div>
          <div class="nav-dropdown" id="userDropdown">
            <a href="profile.html">👤 个人中心</a>
            <div class="divider"></div>
            <button id="logoutBtn">🚪 退出登录</button>
          </div>
        </div>
      `;
      // 下拉菜单
      setTimeout(() => {
        document.getElementById('userAvatar')?.addEventListener('click', (e) => {
          e.stopPropagation();
          document.getElementById('userDropdown')?.classList.toggle('active');
        });
        document.getElementById('logoutBtn')?.addEventListener('click', async () => {
          await window.signOut();
          window._currentUser = null;
          window.location.reload();
        });
        document.addEventListener('click', () => {
          document.getElementById('userDropdown')?.classList.remove('active');
        });
      }, 100);
    }
    authOnlyEls.forEach(el => el.classList.remove('hidden'));
    // 检查管理员
    if (user.user_metadata?.role === 'admin') {
      adminOnlyEls.forEach(el => el.classList.remove('hidden'));
    }
  } else {
    if (navArea) {
      navArea.innerHTML = '<a href="login.html" class="nav-login-btn">登录</a>';
    }
    authOnlyEls.forEach(el => el.classList.add('hidden'));
    adminOnlyEls.forEach(el => el.classList.add('hidden'));
  }
}

/* ---- 新手引导 ---- */
function initFirstVisitGuide() {
  if (localStorage.getItem('herlib-guide-shown')) return;

  // 简单实现：3秒后显示提示
  setTimeout(() => {
    const guide = document.getElementById('floatingGuide');
    if (!guide) return;

    const bubble = document.createElement('div');
    bubble.className = 'guide-bubble arrow-bottom';
    bubble.style.cssText = 'bottom:80px;right:20px;';
    bubble.innerHTML = `
      <div class="bubble-step">👋 新手引导 1/3</div>
      <div class="bubble-title">欢迎来到 Her Lib 她的书库</div>
      <div class="bubble-text">点击顶部分类或使用搜索框，开始你的女性主义阅读之旅吧！</div>
      <div class="bubble-actions">
        <div class="bubble-dots"><span class="bubble-dot active"></span><span class="bubble-dot"></span><span class="bubble-dot"></span></div>
        <button class="btn btn-sm btn-primary" id="guideBubbleClose">知道了</button>
      </div>
    `;
    document.body.appendChild(bubble);

    bubble.querySelector('#guideBubbleClose').addEventListener('click', () => {
      bubble.remove();
      localStorage.setItem('herlib-guide-shown', 'true');
    });
  }, 2000);
}

/* ---- 反馈表单 ---- */
function initFeedbackForm() {
  const form = document.getElementById('feedbackForm');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const type = document.getElementById('feedbackType').value;
    const msg = document.getElementById('feedbackMsg').value.trim();
    if (!msg) { alert('请输入反馈内容'); return; }
    // 本地存储反馈（后续可接 Supabase）
    var feedbacks = JSON.parse(localStorage.getItem('herlib-feedbacks') || '[]');
    feedbacks.push({ type: type, message: msg, time: new Date().toISOString() });
    localStorage.setItem('herlib-feedbacks', JSON.stringify(feedbacks));
    document.getElementById('feedbackMsg').value = '';
    alert('✅ 反馈已收到！感谢你的建议～');
  });
}

/* ---- 通用：从 books 数据创建卡片 ---- */
function createBookCard(book) {
  const card = document.createElement('a');
  card.href = 'book.html?id=' + book.id;
  card.className = 'book-card';
  if (book.triggerWarningType && book.triggerWarningType !== 'none') {
    card.classList.add('warning-card');
  }

  // 渐变色封面
  const catColors = { thought:['#D4A78A','#C67B5C','#E8C8B0'], origin:['#B8A5C9','#9B8AB5','#D4C8E0'], workplace:['#B0BF9A','#8FA87A','#C8D6B8'], motherhood:['#E0C0B0','#D4A090','#ECD5C8'], local:['#D4B896','#C49A6C','#E8D4B8'] };
  const cc = catColors[book.category] || catColors.thought;
  const coverHTML = '<div style="aspect-ratio:3/4;background:linear-gradient(135deg,'+cc[0]+','+cc[1]+','+cc[2]+');display:flex;flex-direction:column;align-items:center;justify-content:center;padding:12px;text-align:center;overflow:hidden;position:relative">'+
    '<div style="position:absolute;top:8px;left:10px;right:10px;height:1px;background:rgba(255,255,255,0.3)"></div>'+
    '<div style="font-family:var(--font-heading);font-size:0.85rem;font-weight:700;color:#fff;line-height:1.3;text-shadow:0 1px 4px rgba(0,0,0,0.15)">'+book.title+'</div>'+
    '<div style="font-size:0.6rem;color:rgba(255,255,255,0.8);margin-top:6px">'+book.author+'</div>'+
    '<div style="position:absolute;bottom:8px;left:10px;right:10px;height:1px;background:rgba(255,255,255,0.3)"></div>'+
    '<div style="position:absolute;left:0;top:0;bottom:0;width:5px;background:rgba(0,0,0,0.06)"></div>'+
    '</div>';

  card.innerHTML = `
    <div class="book-card-cover">
      ${coverHTML}
      ${book.isNew ? '<span class="tag tag-new" style="position:absolute;top:8px;right:8px;z-index:3">新书</span>' : ''}
    </div>
    <div class="book-card-body">
      <div class="book-card-title">${book.title}</div>
      <div class="book-card-author">${book.author}</div>
      <div class="book-card-tags">
        <span class="tag tag-category">${book.categoryLabel}</span>
        <span class="tag ${book.level === 'beginner' ? 'tag-beginner' : 'tag-advanced'}">${book.levelLabel}</span>
        ${book.tags.slice(0, 2).map(t => `<span class="tag tag-keyword">#${t}</span>`).join('')}
      </div>
      <div class="book-card-guide">${book.guide}</div>
    </div>
    ${book.triggerWarningType && book.triggerWarningType !== 'none' ? `
      <div class="warning-badge">⚠ 阅读预警</div>
    ` : ''}
  `;

  return card;
}

// 导出到全局
window.createBookCard = createBookCard;
window.updateAuthUI = updateAuthUI;
