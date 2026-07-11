/* Her Lib Service Worker v4 — 安全离线 */
var CACHE = 'herlib-v4';
var ASSETS = [
  '/',
  '/index.html',
  '/category.html',
  '/book.html',
  '/disclaimer.html',
  '/submit.html',
  '/404.html',
  '/reading-channels.html',
  '/usage-guide.html',
  '/author.html',
  '/css/style.css',
  '/js/data.js',
  '/js/main.js',
  '/js/category.js',
  '/js/book.js',
  '/js/supabase.js',
  '/js/author.js',
  '/js/author-basic.js',
  '/images/icon-192.png',
  '/images/icon-512.png'
];

// 安装：预缓存
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return Promise.allSettled(ASSETS.map(function(url) {
        return cache.add(url).catch(function() {});
      }));
    })
  );
});

// 激活：清理旧版本
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.map(function(k) {
        if (k !== CACHE) return caches.delete(k);
      }));
    })
  );
});

// 请求拦截：只处理静态资源，不拦截页面导航
self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'GET') return;

  var url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  // 页面导航不拦截，交给浏览器正常处理
  if (event.request.mode === 'navigate') return;

  // 静态资源：缓存优先
  event.respondWith(
    caches.match(event.request).then(function(cached) {
      if (cached) {
        // 后台更新缓存
        fetch(event.request).then(function(resp) {
          if (resp.ok) caches.open(CACHE).then(function(c) { c.put(event.request, resp); });
        }).catch(function() {});
        return cached;
      }
      return fetch(event.request).then(function(resp) {
        if (resp.ok) {
          var clone = resp.clone();
          caches.open(CACHE).then(function(c) { c.put(event.request, clone); });
        }
        return resp;
      });
    })
  );
});
