
self.addEventListener('install', function (e) {
    console.log('[Service Worker] Install');
    self.skipWaiting();
});

self.addEventListener('activate', function (e) {
    console.log('[Service Worker] Activate');
    e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (e) {
    // Простая обработка fetch событий
    e.respondWith(fetch(e.request));
});

