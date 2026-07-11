/* ============================================================
   Her Lib — 分类列表页逻辑（自包含版）
   不依赖 main.js，所有功能内聚
   ============================================================ */
(function() {
  'use strict';

  var coverColors = { thought:['#D4A78A','#C67B5C','#E8C8B0'], origin:['#B8A5C9','#9B8AB5','#D4C8E0'], workplace:['#B0BF9A','#8FA87A','#C8D6B8'], motherhood:['#E0C0B0','#D4A090','#ECD5C8'], local:['#D4B896','#C49A6C','#E8D4B8'] };

  function makeCoverSmall(book) {
    var c = coverColors[book.category] || coverColors.thought;
    return '<div style="aspect-ratio:3/4;background:linear-gradient(135deg,'+c[0]+','+c[1]+','+c[2]+');display:flex;flex-direction:column;align-items:center;justify-content:center;padding:12px;text-align:center;overflow:hidden;position:relative">'+
      '<div style="position:absolute;top:8px;left:10px;right:10px;height:1px;background:rgba(255,255,255,0.3)"></div>'+
      '<div style="font-family:var(--font-heading);font-size:0.85rem;font-weight:700;color:#fff;line-height:1.3;text-shadow:0 1px 4px rgba(0,0,0,0.15)">'+book.title+'</div>'+
      '<div style="font-size:0.6rem;color:rgba(255,255,255,0.8);margin-top:6px">'+book.author+'</div>'+
      '<div style="position:absolute;bottom:8px;left:10px;right:10px;height:1px;background:rgba(255,255,255,0.3)"></div>'+
      '<div style="position:absolute;left:0;top:0;bottom:0;width:5px;background:rgba(0,0,0,0.06)"></div>'+
      '</div>';
  }

  var currentFilters = { search:'', category:'all', level:'all', region:'all', genre:'all', era:'all', school:'all', wave:'all', sort:'default', hideWarning:false, ids:'' };
  var visibleBooks = [];
  var displayedCount = 0;
  var PAGE_SIZE = 20;

  function waitForData(callback, retries) {
    retries = retries || 50;
    if (window.books && window.books.length > 0) { callback(); }
    else if (retries > 0) { setTimeout(function() { waitForData(callback, retries - 1); }, 100); }
  }

  document.addEventListener('DOMContentLoaded', function() {
    restoreSettings();
    waitForData(initPage);
  });

  function restoreSettings() {
    var theme = localStorage.getItem('herlib-theme') || 'light';
    document.documentElement.setAttribute('data-theme', theme);
    var ti = document.getElementById('themeIcon');
    if (ti) ti.textContent = theme === 'dark' ? '☀️' : '🌙';

    var fs = localStorage.getItem('herlib-fontsize') || 'standard';
    document.documentElement.setAttribute('data-font-size', fs);

    if (localStorage.getItem('herlib-minimal') === 'true') {
      document.documentElement.setAttribute('data-minimal', 'true');
      var mi = document.getElementById('minimalIcon');
      if (mi) mi.textContent = '📝';
    }

    // 恢复筛选状态
    try {
      var saved = JSON.parse(localStorage.getItem('herlib-filter-state'));
      if (saved) {
        Object.keys(currentFilters).forEach(function(k) {
          if (saved[k] !== undefined) currentFilters[k] = saved[k];
        });
        var si = document.getElementById('searchInput');
        if (si && currentFilters.search) si.value = currentFilters.search;
        var fc = document.getElementById('filterCategory');
        if (fc) fc.value = currentFilters.category;
        var fl = document.getElementById('filterLevel');
        if (fl) fl.value = currentFilters.level;
        var fh = document.getElementById('hideWarning');
        if (fh) fh.checked = currentFilters.hideWarning;
      }
    } catch(e) {}
  }

  function initPage() {
    parseURLParams();
    bindThemeToggle();
    bindFontSizeToggle();
    bindMinimalToggle();
    bindNavScroll();
    bindMobileMenu();
    bindFilterEvents();
    initHotTags();
    initWaveInfo();
    initClearFilters();
    applyAllFilters();
    initLoadMore();
    initSidebarRanking();
    bindBackToTop();
    bindFloatingGuide();
    initSearchHistory();
    initMobileGuide();
    bindAdminUI();
  }

  /* ---- URL 参数 ---- */
  function parseURLParams() {
    var params = new URLSearchParams(window.location.search);
    if (params.get('search')) currentFilters.search = params.get('search');
    if (params.get('category')) currentFilters.category = params.get('category');
    if (params.get('level')) currentFilters.level = params.get('level');
    if (params.get('ids')) currentFilters.ids = params.get('ids');
    if (params.get('view') === 'school' || params.get('view') === 'wave') {
      currentFilters.category = 'thought';
      var tt = document.getElementById('thoughtToggle');
      if (tt) tt.style.display = 'grid';
    }

    var si = document.getElementById('searchInput');
    if (si) si.value = currentFilters.search || '';
    var fc = document.getElementById('filterCategory');
    if (fc) fc.value = currentFilters.category;
    var fl = document.getElementById('filterLevel');
    if (fl) fl.value = currentFilters.level;

    if (currentFilters.category === 'thought') {
      var tt = document.getElementById('thoughtToggle');
      if (tt) tt.style.display = 'grid';
    }
  }

  /* ---- 筛选事件 ---- */
  function bindFilterEvents() {
    var si = document.getElementById('searchInput');
    if (si) {
      var timer;
      si.addEventListener('input', function() {
        clearTimeout(timer);
        var self = this;
        timer = setTimeout(function() {
          currentFilters.search = self.value.trim();
          saveSearchHistory(currentFilters.search);
          applyAllFilters();
        }, 300);
      });
    }

    var fc = document.getElementById('filterCategory');
    if (fc) fc.addEventListener('change', function() {
      currentFilters.category = this.value;
      var tt = document.getElementById('thoughtToggle');
      if (tt) tt.style.display = this.value === 'thought' ? 'grid' : 'none';
      applyAllFilters();
    });

    var fl = document.getElementById('filterLevel');
    if (fl) fl.addEventListener('change', function() { currentFilters.level = this.value; applyAllFilters(); });

    var fs = document.getElementById('filterSort');
    if (fs) fs.addEventListener('change', function() { currentFilters.sort = this.value; applyAllFilters(); });

    // Chip 筛选
    document.querySelectorAll('.filter-chip').forEach(function(chip) {
      chip.addEventListener('click', function() {
        var filterType = this.dataset.filter;
        var value = this.dataset.value;
        var parent = this.parentElement;
        if (parent) parent.querySelectorAll('.filter-chip').forEach(function(c) { c.classList.remove('active'); });
        this.classList.add('active');
        currentFilters[filterType] = value === 'all' ? 'all' : value;
        applyAllFilters();
      });
    });

    // 浪潮筛选
    document.querySelectorAll('.wave-filter-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var parent = this.parentElement;
        if (parent) parent.querySelectorAll('.wave-filter-btn').forEach(function(b) { b.classList.remove('active'); });
        this.classList.add('active');
        currentFilters.wave = this.dataset.wave;
        applyAllFilters();
      });
    });

    var hw = document.getElementById('hideWarning');
    if (hw) hw.addEventListener('change', function() { currentFilters.hideWarning = this.checked; applyAllFilters(); });

    // 思潮漫步内部分流
    document.querySelectorAll('.view-toggle-card').forEach(function(card) {
      card.addEventListener('click', function() {
        var parent = this.parentElement;
        if (parent) parent.querySelectorAll('.view-toggle-card').forEach(function(c) { c.classList.remove('active'); });
        this.classList.add('active');
      });
    });

    var rb = document.getElementById('resetFiltersBtn');
    if (rb) rb.addEventListener('click', function() { resetAllFilters(); applyAllFilters(); });
  }

  /* ---- 热门标签 ---- */
  function initHotTags() {
    if (!window.books) return;
    var tagCount = {};
    window.books.forEach(function(b) {
      b.tags.forEach(function(t) { tagCount[t] = (tagCount[t] || 0) + 1; });
    });
    var topTags = Object.entries(tagCount).sort(function(a, b) { return b[1] - a[1]; }).slice(0, 8).map(function(e) { return e[0]; });

    var row = document.getElementById('hotTagsRow');
    if (!row) return;
    topTags.forEach(function(tag) {
      var chip = document.createElement('span');
      chip.className = 'filter-chip hot';
      chip.textContent = '#' + tag;
      chip.addEventListener('click', function() {
        currentFilters.search = tag;
        var si = document.getElementById('searchInput');
        if (si) si.value = tag;
        applyAllFilters();
      });
      row.appendChild(chip);
    });
  }

  /* ---- 浪潮科普 ---- */
  function initWaveInfo() {
    var btn = document.getElementById('waveInfoBtn');
    var modal = document.getElementById('waveModal');
    var close = document.getElementById('waveModalClose');
    var body = document.getElementById('waveModalBody');
    if (!btn || !modal || !close || !body) return;

    btn.addEventListener('click', function() {
      body.innerHTML = '<h4>第一波（19世纪末-20世纪初）</h4><p>核心诉求：女性选举权、受教育权和基本法律权利。</p><p style="font-size:var(--text-xs);color:var(--color-accent)">📚《女权辩护》《一间自己的房间》</p><hr style="border-color:var(--color-border-light)">' +
        '<h4>第二波（1960s-1980s）</h4><p>核心诉求：批判父权制度、家庭性别分工和职场歧视。「个人的即政治的」。</p><p style="font-size:var(--text-xs);color:var(--color-accent)">📚《第二性》《厌女》《女性的奥秘》</p><hr style="border-color:var(--color-border-light)">' +
        '<h4>第三波（1990s至今）</h4><p>核心诉求：多元性别认同、交叉性、身体自主权、酷儿理论。</p><p style="font-size:var(--text-xs);color:var(--color-accent)">📚《性别麻烦》《看不见的女性》</p>';
      modal.style.display = 'flex';
    });
    close.addEventListener('click', function() { modal.style.display = 'none'; });
    modal.addEventListener('click', function(e) { if (e.target === modal) modal.style.display = 'none'; });
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') modal.style.display = 'none'; });
  }

  /* ---- 筛选逻辑 ---- */
  function applyAllFilters() {
    if (!window.books) return;
    var filtered = window.books.slice();

    if (currentFilters.search) {
      var q = currentFilters.search.toLowerCase();
      filtered = filtered.filter(function(b) {
        return b.title.toLowerCase().indexOf(q) >= 0 ||
          b.author.toLowerCase().indexOf(q) >= 0 ||
          b.tags.some(function(t) { return t.toLowerCase().indexOf(q) >= 0; }) ||
          b.guide.toLowerCase().indexOf(q) >= 0 ||
          (b.quote && b.quote.toLowerCase().indexOf(q) >= 0) ||
          (b.feminismSchoolLabel && b.feminismSchoolLabel.some(function(s) { return s.toLowerCase().indexOf(q) >= 0; }));
      });
    }

    if (currentFilters.category !== 'all') filtered = filtered.filter(function(b) { return b.category === currentFilters.category; });
    if (currentFilters.level !== 'all') filtered = filtered.filter(function(b) { return b.level === currentFilters.level; });
    if (currentFilters.region !== 'all') filtered = filtered.filter(function(b) { return b.region === currentFilters.region; });
    if (currentFilters.genre !== 'all') filtered = filtered.filter(function(b) { return b.genre === currentFilters.genre; });
    if (currentFilters.school !== 'all') filtered = filtered.filter(function(b) { return b.feminismSchool && b.feminismSchool.indexOf(currentFilters.school) >= 0; });
    if (currentFilters.wave !== 'all') filtered = filtered.filter(function(b) { return b.wave && b.wave.toString() === currentFilters.wave; });
    if (currentFilters.era !== 'all') {
      var now = 2026;
      if (currentFilters.era === '5year') filtered = filtered.filter(function(b) { return b.publishYear >= now - 5; });
      else if (currentFilters.era === '10year') filtered = filtered.filter(function(b) { return b.publishYear >= now - 10; });
      else if (currentFilters.era === 'classic') filtered = filtered.filter(function(b) { return b.publishYear < now - 10; });
    }
    if (currentFilters.ids) { var idList = currentFilters.ids.split(','); filtered = filtered.filter(function(b) { return idList.indexOf(b.id) >= 0; }); }
    if (currentFilters.hideWarning) filtered = filtered.filter(function(b) { return b.triggerWarningType === 'none'; });

    // 排序
    if (currentFilters.sort === 'classic') filtered.sort(function(a, b) { return a.publishYear - b.publishYear; });
    else if (currentFilters.sort === 'beginner') filtered.sort(function(a, b) { return a.level === 'beginner' ? -1 : 1; });
    else if (currentFilters.sort === 'advanced') filtered.sort(function(a, b) { return a.level === 'advanced' ? -1 : 1; });
    else if (currentFilters.sort === 'short') filtered.sort(function(a, b) { return (a.readingTime || 10) - (b.readingTime || 10); });

    visibleBooks = filtered;
    displayedCount = 0;
    renderBooks();
    updateResultCount();
    updateAuthorGroup();
    saveFilterState();
  }

  function renderBooks() {
    var grid = document.getElementById('bookGrid');
    var noResult = document.getElementById('noResult');
    var loadMoreHint = document.getElementById('loadMoreHint');
    if (!grid) return;

    if (visibleBooks.length === 0) {
      grid.innerHTML = '';
      if (noResult) noResult.style.display = 'block';
      if (loadMoreHint) loadMoreHint.style.display = 'none';
      renderHotRecommend();
      return;
    }

    if (noResult) noResult.style.display = 'none';
    if (loadMoreHint) loadMoreHint.style.display = 'block';

    displayedCount = Math.min(displayedCount + PAGE_SIZE, visibleBooks.length);
    var slice = visibleBooks.slice(0, displayedCount);
    grid.innerHTML = '';

    var visited = getVisitedBooks();
    slice.forEach(function(book) {
      grid.appendChild(createBookCard(book, visited));
    });

    var lmt = document.getElementById('loadMoreText');
    if (lmt) {
      lmt.textContent = displayedCount >= visibleBooks.length ? '已查看全部书籍 📚' : '已显示 ' + displayedCount + ' / ' + visibleBooks.length + ' 本，滚动加载更多…';
    }
  }

  /* ---- 书籍卡片（完全自包含） ---- */
  function createBookCard(book, visited) {
    var card = document.createElement('a');
    card.href = 'book.html?id=' + book.id;
    card.className = 'book-card';
    if (book.triggerWarningType && book.triggerWarningType !== 'none') card.classList.add('warning-card');
    if (visited && visited.indexOf(book.id) >= 0) card.classList.add('visited');

    // 封面：渐变色代替外部图片
    var coverHTML = makeCoverSmall(book);

    card.innerHTML = '<div class="book-card-cover">' + coverHTML +
      (book.isNew ? '<span class="tag tag-new" style="position:absolute;top:8px;right:8px;z-index:3">新书</span>' : '') +
      '</div>' +
      '<div class="book-card-body">' +
      '<div class="book-card-title">' + book.title + '</div>' +
      '<div class="book-card-author"><a href="' + (book.authorId ? 'author.html?id=' + book.authorId : '?search=' + encodeURIComponent(book.author)) + '" onclick="event.stopPropagation()">' + book.author + '</a></div>' +
      '<div class="book-card-tags">' +
      '<span class="tag tag-category">' + book.categoryLabel + '</span>' +
      '<span class="tag ' + (book.level === 'beginner' ? 'tag-beginner' : 'tag-advanced') + '">' + book.levelLabel + '</span>' +
      book.tags.slice(0, 2).map(function(t) { return '<span class="tag tag-keyword">#' + t + '</span>'; }).join('') +
      '</div>' +
      '<div class="book-card-guide">' + (book.guide || '') + '</div>' +
      '</div>' +
      (book.triggerWarningType && book.triggerWarningType !== 'none' ? '<div class="warning-badge">⚠ 阅读预警</div>' : '');

    // 预警 tooltip：仅在鼠标悬停在预警角标上时显示，离开角标或滚动时消失
    var warningBadge = card.querySelector('.warning-badge');
    if (warningBadge && book.triggerWarningType && book.triggerWarningType !== 'none') {
      var tooltipTimer = null;
      warningBadge.addEventListener('mouseenter', function(e) {
        e.stopPropagation();
        clearTimeout(tooltipTimer);
        var t = document.getElementById('activeTooltip');
        if (t) t.remove();
        t = document.createElement('div');
        t.className = 'tooltip visible';
        t.textContent = book.triggerWarning;
        t.style.cssText = 'position:fixed;z-index:9999;left:' + (e.clientX + 14) + 'px;top:' + (e.clientY - 36) + 'px;max-width:260px;pointer-events:none';
        t.id = 'activeTooltip';
        document.body.appendChild(t);
      });
      warningBadge.addEventListener('mouseleave', function() {
        clearTimeout(tooltipTimer);
        tooltipTimer = setTimeout(function() {
          var t = document.getElementById('activeTooltip');
          if (t) t.remove();
        }, 200);
      });
      // 滚动时立即移除 tooltip
      window.addEventListener('scroll', function() {
        var t = document.getElementById('activeTooltip');
        if (t) t.remove();
      }, { passive: true });
    }

    // 点击记录浏览
    card.addEventListener('click', function() { addVisitedBook(book.id); });

    return card;
  }

  function updateResultCount() {
    var el = document.getElementById('resultCount');
    if (el) el.innerHTML = '共 <strong>' + visibleBooks.length + '</strong> 本符合条件';

    // 筛选提醒：有筛选条件且结果少于全站总数时显示
    var reminder = document.getElementById('filterReminder');
    var totalCount = document.getElementById('totalBookCount');
    if (reminder) {
      var hasFilter = (currentFilters.category !== 'all' || currentFilters.level !== 'all' ||
        currentFilters.region !== 'all' || currentFilters.genre !== 'all' ||
        currentFilters.school !== 'all' || currentFilters.wave !== 'all' ||
        currentFilters.era !== 'all' || currentFilters.search || currentFilters.hideWarning || currentFilters.ids);
      if (hasFilter) {
        reminder.style.display = 'block';
        if (totalCount && window.books) totalCount.textContent = window.books.length;
      } else {
        reminder.style.display = 'none';
      }
    }
  }

  function updateAuthorGroup() {
    var header = document.getElementById('authorGroupHeader');
    var title = document.getElementById('authorGroupTitle');
    if (!header || !title) return;
    if (currentFilters.search && visibleBooks.length > 1) {
      var firstAuthor = visibleBooks[0].author;
      var allSame = visibleBooks.every(function(b) { return b.author === firstAuthor; });
      if (allSame) {
        header.style.display = 'flex';
        title.textContent = '共 ' + visibleBooks.length + ' 本【' + firstAuthor + '】收录作品';
        return;
      }
    }
    header.style.display = 'none';
  }

  function renderHotRecommend() {
    var grid = document.getElementById('hotRecommendGrid');
    if (!grid || !window.books) return;
    var hot = window.books.slice().sort(function(a, b) { return (b.featured ? 1 : 0) - (a.featured ? 1 : 0); }).slice(0, 3);
    grid.innerHTML = '';
    hot.forEach(function(book) { grid.appendChild(createBookCard(book, [])); });
  }

  function initLoadMore() {
    window.addEventListener('scroll', function() {
      if (displayedCount < visibleBooks.length && (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 600) {
        renderBooks();
      }
    }, { passive: true });
  }

  function initSidebarRanking() {
    if (!window.books) return;
    var el = document.getElementById('sidebarRanking');
    if (!el) return;
    var list = window.books.slice().sort(function() { return Math.random() - 0.5; }).slice(0, 5);
    el.innerHTML = list.map(function(b, i) {
      return '<div style="display:flex;align-items:center;gap:6px;padding:4px 0;font-size:var(--text-xs)">' +
        '<span style="font-weight:700;color:var(--color-accent)">' + (i+1) + '.</span>' +
        '<a href="book.html?id=' + b.id + '" style="color:var(--color-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + b.title + '</a></div>';
    }).join('');
  }

  function initClearFilters() {
    var btn = document.getElementById('clearAllFilters');
    if (btn) btn.addEventListener('click', function() { resetAllFilters(); applyAllFilters(); });
  }

  function resetAllFilters() {
    currentFilters = { search:'', category:'all', level:'all', region:'all', genre:'all', era:'all', school:'all', wave:'all', sort:'default', hideWarning:false, ids:'' };
    var si = document.getElementById('searchInput'); if (si) si.value = '';
    var fc = document.getElementById('filterCategory'); if (fc) fc.value = 'all';
    var fl = document.getElementById('filterLevel'); if (fl) fl.value = 'all';
    var fs = document.getElementById('filterSort'); if (fs) fs.value = 'default';
    var hw = document.getElementById('hideWarning'); if (hw) hw.checked = false;
    var tt = document.getElementById('thoughtToggle'); if (tt) tt.style.display = 'none';
    document.querySelectorAll('.filter-chip[data-value="all"]').forEach(function(c) { c.classList.add('active'); });
    document.querySelectorAll('.wave-filter-btn[data-wave="all"]').forEach(function(b) { b.classList.add('active'); });
    document.querySelectorAll('.wave-filter-btn:not([data-wave="all"])').forEach(function(b) { b.classList.remove('active'); });
  }

  /* ---- 搜索历史 ---- */
  function initSearchHistory() {
    var input = document.getElementById('searchInput');
    var historyDiv = document.getElementById('searchHistory');
    if (!input || !historyDiv) return;

    input.addEventListener('focus', function() {
      var history = getSearchHistory();
      if (history.length > 0) {
        historyDiv.classList.add('active');
        historyDiv.innerHTML = history.map(function(h, i) {
          return '<div class="search-history-item" data-term="' + h + '"><span>' + h + '</span><button class="remove-history" data-idx="' + i + '">✕</button></div>';
        }).join('');
        historyDiv.querySelectorAll('.search-history-item').forEach(function(item) {
          item.addEventListener('click', function(e) {
            if (e.target.classList.contains('remove-history')) return;
            var term = this.dataset.term;
            input.value = term;
            currentFilters.search = term;
            applyAllFilters();
            historyDiv.classList.remove('active');
          });
        });
      }
    });

    document.addEventListener('click', function(e) {
      if (!input.contains(e.target) && !historyDiv.contains(e.target)) historyDiv.classList.remove('active');
    });
  }

  function getSearchHistory() {
    try { return JSON.parse(localStorage.getItem('herlib-search-history') || '[]'); } catch(e) { return []; }
  }

  function saveSearchHistory(term) {
    if (!term) return;
    var history = getSearchHistory();
    history = history.filter(function(h) { return h !== term; });
    history.unshift(term);
    history = history.slice(0, 10);
    localStorage.setItem('herlib-search-history', JSON.stringify(history));
  }

  function getVisitedBooks() {
    try { return JSON.parse(localStorage.getItem('herlib-visited-books') || '[]'); } catch(e) { return []; }
  }

  function addVisitedBook(bookId) {
    try {
      var visited = getVisitedBooks();
      visited = visited.filter(function(id) { return id !== bookId; });
      visited.unshift(bookId);
      visited = visited.slice(0, 50);
      localStorage.setItem('herlib-visited-books', JSON.stringify(visited));
    } catch(e) {}
  }

  function saveFilterState() {
    localStorage.setItem('herlib-filter-state', JSON.stringify(currentFilters));
  }

  /* ---- 通用UI绑定 ---- */
  function bindThemeToggle() {
    var btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.addEventListener('click', function() {
      var cur = document.documentElement.getAttribute('data-theme');
      var next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('herlib-theme', next);
      var icon = document.getElementById('themeIcon');
      if (icon) icon.textContent = next === 'dark' ? '☀️' : '🌙';
    });
  }

  function bindFontSizeToggle() {
    var sizes = ['standard', 'large', 'small'];
    var idx = sizes.indexOf(localStorage.getItem('herlib-fontsize') || 'standard');
    if (idx < 0) idx = 0;
    var btn = document.getElementById('fontSizeToggle');
    if (btn) btn.addEventListener('click', function() {
      idx = (idx + 1) % sizes.length;
      document.documentElement.setAttribute('data-font-size', sizes[idx]);
      localStorage.setItem('herlib-fontsize', sizes[idx]);
    });
  }

  function bindMinimalToggle() {
    var btn = document.getElementById('minimalToggle');
    if (!btn) return;
    btn.addEventListener('click', function() {
      var isMin = document.documentElement.getAttribute('data-minimal') === 'true';
      document.documentElement.setAttribute('data-minimal', isMin ? 'false' : 'true');
      localStorage.setItem('herlib-minimal', !isMin);
      var mi = document.getElementById('minimalIcon');
      if (mi) mi.textContent = !isMin ? '📝' : '📄';
    });
  }

  function bindNavScroll() {
    var nav = document.getElementById('navbar');
    if (!nav) return;
    window.addEventListener('scroll', function() {
      nav.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  function bindMobileMenu() {
    var toggle = document.getElementById('mobileMenuToggle');
    var close = document.getElementById('mobileMenuClose');
    var overlay = document.getElementById('mobileMenuOverlay');
    var menu = document.getElementById('mobileMenu');
    if (!toggle || !menu) return;
    toggle.addEventListener('click', function() { menu.classList.add('active'); if (overlay) overlay.classList.add('active'); });
    if (close) close.addEventListener('click', function() { menu.classList.remove('active'); if (overlay) overlay.classList.remove('active'); });
    if (overlay) overlay.addEventListener('click', function() { menu.classList.remove('active'); overlay.classList.remove('active'); });
  }

  function bindBackToTop() {
    var btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', function() { btn.classList.toggle('visible', window.scrollY > window.innerHeight); }, { passive: true });
    btn.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }

  function bindFloatingGuide() {
    var toggle = document.getElementById('guideToggle');
    var panel = document.getElementById('guidePanel');
    if (!toggle || !panel) return;
    toggle.addEventListener('click', function(e) { e.stopPropagation(); panel.classList.toggle('active'); });
    document.addEventListener('click', function(e) {
      if (!panel.contains(e.target) && e.target !== toggle) panel.classList.remove('active');
    });
  }

  function initMobileGuide() {
    var trigger = document.getElementById('mobileGuideTrigger');
    var panel = document.getElementById('guidePanel');
    if (!trigger || !panel) return;
    trigger.addEventListener('click', function(e) {
      e.preventDefault();
      panel.classList.toggle('active');
    });
  }

  function bindAdminUI() {
    if (window.updateAuthUI) window.updateAuthUI();
  }
})();
