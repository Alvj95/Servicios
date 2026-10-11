// Servicios a bordo — necesario para poder instalarla en el móvil.
// No guarda nada en caché: siempre se carga la última versión publicada.
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(){});
