const cacheName = 'webproject-cache-v1';
const assets = [
  './',
  './Mainfolder/index.html',
  './Mainfolder/login.css',
  './Mainfolder/login.js',
  './home.html',
  './home.css',
  './home.js',
  './manifest.json',
  './certficate1.jpeg',

  // icons
  './Icons/icon-192.png',
  './Icons/icon-512.png',

  // images (jpeg)
  './Images/img1.jpeg',
  './Images/img2.jpeg',
  './Images/img3.jpeg',
  './Images/img4.jpeg',
  './Images/img5.jpeg',
  './Images/img6.jpeg',
  './Images/img7.jpeg',
  './Images/img8.jpeg',
  './Images/img9.jpeg',
  './Images/img10.jpeg',
  './Images/img11.jpeg',
  './Images/img12.jpeg',
  './Images/img13.jpeg',
];

// ✅ Install event – cache all files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('Caching all assets...');
      return cache.addAll(assets);
    })
  );
});

// ✅ Fetch event – offline support
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // Agar cache mein mil gaya to wahi return karo
      // warna network se fetch karo
      return response || fetch(event.request);
    })
  );
});

// ✅ Activate event – purane cache delete
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== cacheName)
            .map(key => caches.delete(key))
      );
    })
  );
});