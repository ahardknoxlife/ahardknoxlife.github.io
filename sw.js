var CACHE_NAME = 'ahardknoxlife-cache';
var urlsToCache = [
	'/'
];

self.addEventListener('install', function (event) {
	event.waitUntil(
		caches.open(CACHE_NAME).then(function (cache) {
			console.log('Opened cache');
			return cache.addAll(urlsToCache);
		}).catch(function () {
		})
	);
});

self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.open(CACHE_NAME).then(function (cache) {
			return fetch(event.request).then(function (response) {
				if (!caches.match(event.request)) {
					cache.put(event.request, response.clone());
				}
				return response;
			}).catch(function () {
				return caches.match(event.request);
			})
		})
	);
});
