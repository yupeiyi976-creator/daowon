/* ============================================================
   Her Lib — 书籍详情页逻辑（健壮版）
   ============================================================ */
(function() {
  'use strict';

  let currentBook = null;

  // 渐变色封面配色方案
  const coverColors = {
    thought:    ['#D4A78A','#C67B5C','#E8C8B0'],
    origin:     ['#B8A5C9','#9B8AB5','#D4C8E0'],
    workplace:  ['#B0BF9A','#8FA87A','#C8D6B8'],
    motherhood: ['#E0C0B0','#D4A090','#ECD5C8'],
    local:      ['#D4B896','#C49A6C','#E8D4B8']
  };

  function makeCoverHTML(book, size) {
    var colors = coverColors[book.category] || coverColors.thought;
    var isLarge = size === 'large';
    var fs = isLarge ? '1.8rem' : '1rem';
    var as = isLarge ? '0.95rem' : '0.7rem';
    var pad = isLarge ? '40px' : '16px';
    var topGap = isLarge ? '32px' : '20px';
    return '<div style="aspect-ratio:3/4;background:linear-gradient(135deg,'+colors[0]+' 0%,'+colors[1]+' 50%,'+colors[2]+' 100%);border-radius:var(--radius-lg);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:'+pad+';text-align:center;overflow:hidden;position:relative;box-shadow:var(--shadow-lg)">'+
      '<div style="position:absolute;top:12px;left:16px;right:16px;height:2px;background:rgba(255,255,255,0.3);border-radius:1px"></div>'+
      '<div style="position:absolute;top:20px;left:16px;right:16px;height:1px;background:rgba(255,255,255,0.15);border-radius:1px"></div>'+
      '<span style="position:absolute;top:'+topGap+';font-size:'+(isLarge?'0.8rem':'0.6rem')+';color:rgba(255,255,255,0.7);letter-spacing:2px">'+book.categoryLabel+'</span>'+
      '<div style="font-family:var(--font-heading);font-size:'+fs+';font-weight:700;color:#fff;line-height:1.3;margin-top:20px;text-shadow:0 2px 8px rgba(0,0,0,0.15);word-break:break-all">'+book.title+'</div>'+
      '<div style="font-size:'+as+';color:rgba(255,255,255,0.85);margin-top:12px">'+book.author+'</div>'+
      '<div style="position:absolute;bottom:12px;left:16px;right:16px;height:2px;background:rgba(255,255,255,0.3);border-radius:1px"></div>'+
      '<div style="position:absolute;bottom:20px;left:16px;right:16px;height:1px;background:rgba(255,255,255,0.15);border-radius:1px"></div>'+
      '<div style="position:absolute;left:0;top:0;bottom:0;width:8px;background:rgba(0,0,0,0.08);border-radius:var(--radius-lg) 0 0 var(--radius-lg)"></div>'+
      '</div>';
  }

  // 等待数据加载（处理异步加载情况）
  function waitForData(callback, retries) {
    retries = retries || 30;
    if (window.books && window.books.length > 0) {
      callback();
    } else if (retries > 0) {
      setTimeout(function() { waitForData(callback, retries - 1); }, 100);
    } else {
      showEmptyState('数据加载失败，请刷新页面重试');
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    // 恢复主题/字号/极简模式
    restoreSettings();
    // 等待数据
    waitForData(initPage);
  });

  function restoreSettings() {
    var theme = localStorage.getItem('herlib-theme') || 'light';
    document.documentElement.setAttribute('data-theme', theme);
    var icon = document.getElementById('themeIcon');
    if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';

    var fs = localStorage.getItem('herlib-fontsize') || 'standard';
    document.documentElement.setAttribute('data-font-size', fs);

    if (localStorage.getItem('herlib-minimal') === 'true') {
      document.documentElement.setAttribute('data-minimal', 'true');
      var mi = document.getElementById('minimalIcon');
      if (mi) mi.textContent = '📝';
    }
  }

  function initPage() {
    var params = new URLSearchParams(window.location.search);
    var bookId = params.get('id');

    if (!bookId) {
      showEmptyState('未指定书籍ID，请从首页或分类页选择一本书');
      return;
    }

    currentBook = window.books.find(function(b) { return b.id === bookId; });
    if (!currentBook) {
      showEmptyState('未找到该书，请检查链接是否正确');
      return;
    }

    try {
      renderDetail();
      updateSEO();
      initActions();
      renderSameAuthor();
      renderCompanionBooks();
      renderRelatedBooks();
      initComments();
      loadNotes();
      initBackToTop();
      initFloatingGuide();
      bindMobileMenu();
      addVisitedBook(bookId);
      bindGlobalButtons();
    } catch(e) {
      console.error('书籍详情页渲染错误:', e);
      showEmptyState('页面渲染出错，请刷新重试');
    }
  }

  function showEmptyState(msg) {
    var el = document.getElementById('detailLayout');
    if (!el) return;
    el.innerHTML = '<div class="empty-state" style="grid-column:1/-1">' +
      '<div class="empty-state-icon">📖</div>' +
      '<div class="empty-state-title">' + (msg || '未找到该书籍') + '</div>' +
      '<div class="empty-state-desc">请检查链接是否正确，或返回首页浏览其他书籍</div>' +
      '<a href="index.html" class="btn btn-primary">返回首页</a></div>';
  }

  function updateSEO() {
    if (!currentBook) return;
    document.title = '《' + currentBook.title + '》- ' + currentBook.author + ' | Her Lib 她的书库';
    var desc = document.querySelector('meta[name="description"]');
    if (desc && currentBook.guide) desc.setAttribute('content', currentBook.guide.substring(0, 160));
  }

  function renderDetail() {
    var b = currentBook;
    if (!b) return;

    // 封面：CSS渐变色代替外部图片，永远能加载
    var coverEl = document.getElementById('detailCover');
    if (coverEl) { coverEl.innerHTML = makeCoverHTML(b, 'large'); }

    // 面包屑
    var catMap = { thought:'思潮漫步', origin:'与原生和解', workplace:'职场她力量', motherhood:'母职观察', local:'本土她故事' };
    var bcCat = document.getElementById('breadcrumbCategory');
    if (bcCat) { bcCat.textContent = catMap[b.category] || '分类'; bcCat.href = 'category.html?category=' + b.category; }
    var bcTitle = document.getElementById('breadcrumbTitle');
    if (bcTitle) bcTitle.textContent = b.title;

    // 避雷
    var warningIcons = { psychology:'💔 心理创伤预警', viewpoint:'💡 观点局限预警', difficult:'📖 晦涩难读预警' };
    var warningIcon = warningIcons[b.triggerWarningType] || '';
    var isSafe = b.triggerWarningType === 'none';

    // 流派标签
    var schoolTags = (b.feminismSchoolLabel || []).map(function(s) { return '<span class="tag tag-school">' + s + '</span>'; }).join('');

    // 阅读链接区块（醒目大按钮，放在导读正下方）
    // 📖 多平台阅读链接 + 🎧 听书
    var lb = '';
    lb += '<div style="margin:24px 0;padding:20px 24px;background:var(--color-bg-warm);border-radius:var(--radius-lg);border:2px solid var(--color-accent);border-left:5px solid var(--color-accent)">';
    lb += '<div style="font-size:1rem;font-weight:700;color:var(--color-accent);margin-bottom:8px">📖 正版阅读渠道</div>';
    lb += '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px">';
    if (b.links && b.links.length > 0) {
      b.links.forEach(function(l) {
        var ico = l.label.indexOf('微信')>=0?'💬':l.label.indexOf('京东')>=0?'🛒':'📱';
        lb += '<a href="'+l.url+'" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:5px;padding:8px 16px;background:var(--color-accent);color:#fff;font-size:0.85rem;font-weight:600;border-radius:var(--radius-md);text-decoration:none">'+ico+' '+l.label+' →</a>';
      });
    }
    lb += '</div>';
    // 听书按钮
    if (b.hasAudio) {
      lb += '<div style="font-size:0.85rem;font-weight:700;color:#B0664A;margin-bottom:6px">🎧 有声版</div>';
      lb += '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:10px">';
      lb += '<a href="https://m.ximalaya.com/search/'+encodeURIComponent(b.title)+'" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:5px;padding:8px 14px;background:#F5E6D8;color:#8B5E3C;font-size:0.8rem;font-weight:600;border-radius:var(--radius-md);text-decoration:none">🎵 喜马拉雅 →</a>';
      lb += '<a href="https://weread.qq.com/web/search/books?keyword='+encodeURIComponent(b.title)+'" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:5px;padding:8px 14px;background:#F5E6D8;color:#8B5E3C;font-size:0.8rem;font-weight:600;border-radius:var(--radius-md);text-decoration:none">🎧 微信听书 →</a>';
      lb += '</div>';
      lb += '<div style="font-size:0.65rem;color:var(--color-text-muted);margin-bottom:6px">📱 支持后台播放、锁屏听书，可倍速/定时关闭</div>';
    }
    lb += '<div style="font-size:0.65rem;color:var(--color-text-muted);padding-top:8px;border-top:1px solid var(--color-border)">🔒 本站仅为书籍索引推荐，所有阅读链接跳转官方正版平台，不储存资源，版权归原作者及出版方所有。</div>';
    lb += '</div>';
    var linksBlockHTML = lb;

    // 理论脉络
    var contextHTML = '';
    if (b.waveLabel || (b.feminismSchoolLabel && b.feminismSchoolLabel.length > 0)) {
      contextHTML = '<div class="detail-context"><div class="context-label">📐 理论脉络</div><p style="margin:0">' +
        (b.waveLabel ? '本书属于 <strong>' + b.waveLabel + '</strong> 时期的著作。' : '') +
        (b.feminismSchoolLabel && b.feminismSchoolLabel.length > 0 ? '理论流派归属：<strong>' + b.feminismSchoolLabel.join('、') + '</strong>。' : '') +
        '可搭配同流派书籍构建完整知识脉络。</p></div>';
    }

    // 金句
    var quoteHTML = '';
    if (b.quote) {
      quoteHTML = '<div class="detail-quote"><blockquote>' + b.quote + '</blockquote><button class="btn btn-sm btn-ghost save-quote-btn" style="margin-top:var(--space-sm)">💬 收藏语录</button></div>';
    }

    // 构建信息区 HTML（用字符串拼接避免模板字符串兼容问题）
    var html = '';
    html += '<h1 class="detail-title">' + b.title + '</h1>';
    if (b.titleEn) html += '<p class="detail-title-en">' + b.titleEn + '</p>';
    var authorLink = b.authorId ? 'author.html?id=' + b.authorId : 'category.html?search=' + encodeURIComponent(b.author);
    html += '<p class="detail-author"><a href="' + authorLink + '" title="查看作者完整介绍与全部著作">' + b.author + '</a>' + (b.authorEn ? ' / ' + b.authorEn : '') + '</p>';

    // 标签行1：栏目+难度+地域+体裁+浪潮+流派
    html += '<div class="detail-tags">';
    html += '<span class="tag tag-category">' + b.categoryLabel + '</span>';
    html += '<span class="tag ' + (b.level === 'beginner' ? 'tag-beginner' : 'tag-advanced') + '">' + b.levelLabel + '</span>';
    html += '<span class="tag tag-region">' + b.region + '</span>';
    html += '<span class="tag tag-genre">' + b.genre + '</span>';
    if (b.waveLabel) html += '<span class="tag tag-wave">' + b.waveLabel + '</span>';
    html += schoolTags;
    html += '</div>';

    // 标签行2：关键词
    html += '<div class="detail-tags">' + b.tags.map(function(t) { return '<span class="tag tag-keyword">#' + t + '</span>'; }).join('') + '</div>';

    // 元信息
    html += '<div class="detail-meta">';
    html += '<div class="detail-meta-item"><strong>阅读时长</strong>预估 ' + (b.readingTime || '未知') + ' 小时</div>';
    html += '<div class="detail-meta-item"><strong>出版年份</strong>' + (b.publishYear || '未知') + '</div>';
    html += '<div class="detail-meta-item"><strong>适合人群</strong>' + (b.suitableFor || '女性主义读者') + '</div>';
    html += '</div>';

    // 导读（核心内容）
    html += '<div class="detail-guide">' + (b.guide || '暂无导读') + '</div>';

    // 🔥 醒目的阅读链接区块（导读正下方，最显眼位置）
    html += linksBlockHTML;

    // 版本备注
    if (b.versionNote) html += '<div class="detail-version-note">📝 ' + b.versionNote + '</div>';

    // 避雷提示
    html += '<div class="detail-warning ' + (isSafe ? 'safe' : '') + '">';
    html += '<span class="warning-icon">' + (isSafe ? '✨' : '⚠️') + '</span>';
    html += '<div class="warning-content">';
    if (isSafe) {
      html += '本书无特殊阅读避雷提示';
    } else {
      html += '<strong>' + warningIcon + '</strong><br>' + (b.triggerWarning || '');
    }
    html += '</div></div>';

    // 理论脉络
    html += contextHTML;

    // 金句
    html += quoteHTML;

    // 操作按钮
    html += '<div class="detail-actions">';
    html += '<button class="btn btn-outline btn-sm" id="readingStatusBtn">📖 未读</button>';
    html += '<button class="btn btn-outline btn-sm" id="starBtn">☆ 收藏</button>';
    html += '<button class="btn btn-outline btn-sm" id="topBtn">📌 置顶</button>';
    html += '<button class="btn btn-outline btn-sm" id="copyInfoBtn">📋 复制信息</button>';
    html += '<button class="btn btn-outline btn-sm" id="shareBtn">📤 分享</button>';
    html += '<button class="btn btn-ghost btn-sm" id="printBtn">🖨️ 打印导读</button>';
    html += '</div>';

    // 阅读链接
    // 读书笔记
    html += '<div style="margin-top:var(--space-lg)">';
    html += '<h4 style="margin-bottom:var(--space-sm);font-size:var(--text-sm)">📝 我的读书笔记</h4>';
    html += '<textarea class="form-textarea" id="bookNotes" placeholder="写下你的读书笔记…（仅保存在本地）" rows="3" style="min-height:80px"></textarea>';
    html += '<button class="btn btn-sm btn-ghost" id="saveNotesBtn" style="margin-top:var(--space-xs)">💾 保存笔记（仅本地）</button>';
    html += '</div>';

    // 写入 DOM
    var infoEl = document.getElementById('detailInfo');
    if (infoEl) infoEl.innerHTML = html;
  }

  function initActions() {
    // 先加载已有状态
    loadCollectionState();

    // 阅读状态循环
    var statusBtn = document.getElementById('readingStatusBtn');
    var statuses = ['📖 未读', '📖 在读', '📖 已读完'];
    var statusMap = ['unread', 'reading', 'finished'];
    var statusIdx = 0;
    if (statusBtn) statusBtn.addEventListener('click', function() {
      statusIdx = (statusIdx + 1) % 3;
      statusBtn.textContent = statuses[statusIdx];
      saveCollection('read_status', statusMap[statusIdx]);
    });

    // 收藏
    var starBtn = document.getElementById('starBtn');
    var isStarred = false;
    if (starBtn) starBtn.addEventListener('click', function() {
      isStarred = !isStarred;
      this.textContent = isStarred ? '⭐ 已收藏' : '☆ 收藏';
      if (isStarred) { saveCollection('star', true); }
      else { removeCollection(); }
    });

    // 置顶
    var topBtn = document.getElementById('topBtn');
    var isTopped = false;
    if (topBtn) topBtn.addEventListener('click', function() {
      isTopped = !isTopped;
      this.textContent = isTopped ? '📌 已置顶' : '📌 置顶';
      saveCollection('is_top', isTopped);
    });

    async function loadCollectionState() {
      var user = await window.getCurrentUser();
      if (!user) return;
      var cols = await window.getUserCollections(user.id);
      var col = cols.find(function(c) { return c.book_id === currentBook.id; });
      if (!col) return;
      if (col.read_status) {
        statusIdx = statusMap.indexOf(col.read_status);
        if (statusIdx >= 0 && statusBtn) statusBtn.textContent = statuses[statusIdx];
      }
      if (starBtn) { isStarred = true; starBtn.textContent = '⭐ 已收藏'; }
      if (col.is_top && topBtn) { isTopped = true; topBtn.textContent = '📌 已置顶'; }
    }

    async function saveCollection(field, value) {
      var user = await window.getCurrentUser();
      if (!user) { alert('请先登录'); return; }
      var cols = await window.getUserCollections(user.id);
      var exists = cols.find(function(c) { return c.book_id === currentBook.id; });
      var data = {}; data[field] = value;
      if (!exists) { data.book_id = currentBook.id; }
      await window.updateCollection(user.id, currentBook.id, data);
    }

    async function removeCollection() {
      var user = await window.getCurrentUser();
      if (!user) return;
      await window.removeCollection(user.id, currentBook.id);
    }

    // 复制信息
    var copyBtn = document.getElementById('copyInfoBtn');
    if (copyBtn) copyBtn.addEventListener('click', function() {
      if (!currentBook) return;
      var text = '《' + currentBook.title + '》/ ' + currentBook.author + ' / ' + currentBook.categoryLabel + ' / ' + (currentBook.guide || '').substring(0, 100) + '…';
      copyText(text);
    });

    // 分享
    var shareBtn = document.getElementById('shareBtn');
    if (shareBtn) shareBtn.addEventListener('click', function() {
      copyText(window.location.href || '');
    });

    // 打印
    var printBtn = document.getElementById('printBtn');
    if (printBtn) printBtn.addEventListener('click', function() { window.print(); });

    // 收藏语录
    var saveQuoteBtns = document.querySelectorAll('.save-quote-btn');
    saveQuoteBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        this.textContent = '✅ 已收藏';
        showToast('✅ 语录已收藏');
      });
    });

    // 笔记
    var saveNotesBtn = document.getElementById('saveNotesBtn');
    if (saveNotesBtn) saveNotesBtn.addEventListener('click', function() {
      var notesEl = document.getElementById('bookNotes');
      if (notesEl && currentBook) {
        localStorage.setItem('herlib-notes-' + currentBook.id, notesEl.value);
        showToast('✅ 笔记已保存（仅本地）');
      }
    });
  }

  function loadNotes() {
    if (!currentBook) return;
    try {
      var saved = localStorage.getItem('herlib-notes-' + currentBook.id);
      if (saved) {
        var notesEl = document.getElementById('bookNotes');
        if (notesEl) notesEl.value = saved;
      }
    } catch(e) {}
  }

  function renderSameAuthor() {
    if (!window.books || !currentBook) return;
    var same = window.books.filter(function(b) { return b.author === currentBook.author && b.id !== currentBook.id; });
    if (same.length === 0) return;
    var section = document.getElementById('sameAuthorSection');
    if (section) section.style.display = 'block';
    var container = document.getElementById('sameAuthorBooks');
    if (container) same.forEach(function(book) { container.appendChild(createMiniCard(book)); });
  }

  function renderCompanionBooks() {
    if (!currentBook || !currentBook.companionBooks || currentBook.companionBooks.length === 0) return;
    var companions = currentBook.companionBooks.map(function(id) { return window.books.find(function(b) { return b.id === id; }); }).filter(Boolean);
    if (companions.length === 0) return;
    var section = document.getElementById('companionSection');
    if (section) section.style.display = 'block';
    var container = document.getElementById('companionBooks');
    if (container) companions.forEach(function(book) { container.appendChild(createMiniCard(book)); });
  }

  function renderRelatedBooks() {
    if (!window.books || !currentBook) return;
    // 同标签 + 同栏目混合推荐
    var tagMatch = window.books.filter(function(b) {
      if (b.id === currentBook.id) return false;
      return b.tags.some(function(t) { return currentBook.tags.indexOf(t) >= 0; });
    }).slice(0, 4);
    var catMatch = window.books.filter(function(b) {
      return b.category === currentBook.category && b.id !== currentBook.id && tagMatch.indexOf(b) < 0;
    }).slice(0, 4);
    var all = tagMatch.concat(catMatch).slice(0, 8);
    var container = document.getElementById('relatedBooks');
    if (container) all.forEach(function(book) { container.appendChild(createMiniCard(book)); });
  }

  function createMiniCard(book) {
    var card = document.createElement('a');
    card.href = 'book.html?id=' + book.id;
    card.className = 'book-card';
    card.style.cssText = 'flex:0 0 160px;min-width:160px';
    card.innerHTML = '<div class="book-card-cover" style="background:var(--color-border-light);display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:2.5rem;min-height:200px;position:relative">📖' +
      '<div style="position:absolute;bottom:6px;right:6px;display:flex;gap:3px;font-size:0.8rem">' +
      (book.hasRead?'<span title=可在线读>📖</span>':'') +
      (book.hasAudio?'<span title=可听有声版>🎧</span>':'') +
      '</div></div>' +
      '<div class="book-card-body"><div class="book-card-title" style="font-size:var(--text-sm)">' + book.title + '</div>' +
      '<div class="book-card-author" style="font-size:var(--text-xs)">' + book.author + '</div></div>';
    return card;
  }

  function initComments() {
    // 检查登录状态，显示/隐藏评论表单
    window.getCurrentUser().then(function(user) {
      var form = document.getElementById('commentForm');
      if (form) form.style.display = user ? 'block' : 'none';
    });

    // 加载已有评论
    loadComments();

    var submitBtn = document.getElementById('submitComment');
    if (!submitBtn) return;
    submitBtn.addEventListener('click', function() {
      window.getCurrentUser().then(async function(user) {
        if (!user) { alert('请先登录再评论'); return; }
        var input = document.getElementById('commentInput');
        if (!input) return;
        var content = input.value.trim();
        if (!content) { alert('请输入评论内容'); return; }
        var ratingEl = document.getElementById('commentRating');
        var rating = ratingEl ? parseInt(ratingEl.value) : 5;
        await window.addComment(currentBook.id, user.id, content, rating);
        input.value = '';
        showToast('✅ 评论已发表');
        loadComments();
      });
    });
  }

  async function loadComments() {
    var list = document.getElementById('commentList');
    if (!list) return;
    var comments = await window.getComments(currentBook.id);
    if (!comments.length) {
      list.innerHTML = '<p style="color:var(--color-text-muted);font-size:var(--text-sm)">暂无评论，登录后发表第一条评论吧～</p>';
      return;
    }
    var curUser = localStorage.getItem('herlib-demo-user') || '';
    list.innerHTML = comments.map(function(c) {
      var isMine = curUser && c.user_email === curUser;
      return '<div class="comment-item" data-id="'+c.id+'"><div class="comment-header"><span class="comment-author">' + (c.user_email || '读者') + '</span><span class="comment-date">' + (c.created_at ? c.created_at.substring(0,10) : '') + '</span>' +
        (isMine ? '<button class="del-comment-btn" data-id="'+c.id+'" style="background:none;border:none;color:var(--color-error);cursor:pointer;font-size:0.75rem">🗑 删除</button>' : '') +
        '</div><div class="comment-body">' + '⭐'.repeat(c.rating || 5) + ' ' + c.content + '</div></div>';
    }).join('');

    // 绑定删除按钮
    list.querySelectorAll('.del-comment-btn').forEach(function(btn) {
      btn.addEventListener('click', async function() {
        if (!confirm('确定删除这条评论？')) return;
        await window.deleteComment(currentBook.id, this.dataset.id);
        showToast('🗑 已删除');
        loadComments();
      });
    });
  }

  function showToast(msg) {
    var toast = document.getElementById('copyToast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(function() { toast.classList.remove('show'); }, 2000);
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function() { showToast('✅ 已复制到剪贴板'); });
    } else {
      // 降级方案
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); showToast('✅ 已复制到剪贴板'); } catch(e) { alert('复制失败，请手动复制'); }
      document.body.removeChild(ta);
    }
  }

  function addVisitedBook(bookId) {
    try {
      var visited = JSON.parse(localStorage.getItem('herlib-visited-books') || '[]');
      visited = visited.filter(function(id) { return id !== bookId; });
      visited.unshift(bookId);
      visited = visited.slice(0, 10);
      localStorage.setItem('herlib-visited-books', JSON.stringify(visited));
    } catch(e) {}
  }

  function initBackToTop() {
    var btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', function() {
      btn.classList.toggle('visible', window.scrollY > window.innerHeight);
    }, { passive: true });
    btn.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }

  function initFloatingGuide() {
    var toggle = document.getElementById('guideToggle');
    var panel = document.getElementById('guidePanel');
    if (!toggle || !panel) return;
    toggle.addEventListener('click', function(e) { e.stopPropagation(); panel.classList.toggle('active'); });
    document.addEventListener('click', function(e) {
      if (!panel.contains(e.target) && e.target !== toggle) panel.classList.remove('active');
    });
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

  function bindGlobalButtons() {
    // 主题切换
    var themeBtn = document.getElementById('themeToggle');
    if (themeBtn) themeBtn.addEventListener('click', function() {
      var cur = document.documentElement.getAttribute('data-theme');
      var next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('herlib-theme', next);
      var icon = document.getElementById('themeIcon');
      if (icon) icon.textContent = next === 'dark' ? '☀️' : '🌙';
    });

    // 字号切换
    var fsBtn = document.getElementById('fontSizeToggle');
    if (fsBtn) {
      var sizes = ['standard', 'large', 'small'];
      var idx = sizes.indexOf(localStorage.getItem('herlib-fontsize') || 'standard');
      if (idx < 0) idx = 0;
      fsBtn.addEventListener('click', function() {
        idx = (idx + 1) % sizes.length;
        document.documentElement.setAttribute('data-font-size', sizes[idx]);
        localStorage.setItem('herlib-fontsize', sizes[idx]);
      });
    }

    // 极简模式
    var minBtn = document.getElementById('minimalToggle');
    if (minBtn) minBtn.addEventListener('click', function() {
      var isMin = document.documentElement.getAttribute('data-minimal') === 'true';
      document.documentElement.setAttribute('data-minimal', isMin ? 'false' : 'true');
      localStorage.setItem('herlib-minimal', !isMin);
      var mi = document.getElementById('minimalIcon');
      if (mi) mi.textContent = !isMin ? '📝' : '📄';
    });
  }
})();
