self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('pezzalistack-cache').then(cache => {
      return cache.addAll([
        'index.html',
        'style.css',
        'dashboard.js',
        'manifest.json',
        'index.json',
        'icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});