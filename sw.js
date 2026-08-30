// Service worker mínimo — habilita que el navegador ofrezca "Instalar app".
// No guarda nada en caché a propósito: como el sistema necesita internet para
// funcionar (Firestore + Cloudflare), no tiene sentido un modo sin conexión aquí.
// Si en el futuro se agrega un "modo offline" real, este es el lugar para hacerlo.

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // Deja pasar todas las peticiones normalmente (sin caché propio).
  event.respondWith(fetch(event.request));
});
