importScripts('./assets/js/data/swconf.js');

const purge = swconf.purge;
const interceptor = swconf.interceptor;

function verifyUrl(url) {
  const requestUrl = new URL(url);
  const requestPath = requestUrl.pathname;

  if (!requestUrl.protocol.startsWith('http')) {
    return false;
  }

  for (const prefix of interceptor.urlPrefixes) {
    if (requestUrl.href.startsWith(prefix)) {
      return false;
    }
  }

  for (const path of interceptor.paths) {
    if (requestPath.startsWith(path)) {
      return false;
    }
  }
  return true;
}

self.addEventListener('install', (event) => {
  if (purge) {
    return;
  }

  event.waitUntil(
    caches.open(swconf.cacheName).then((cache) => {
      return cache.addAll(swconf.resources);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (purge) {
            return caches.delete(key);
          } else {
            if (key !== swconf.cacheName) {
              return caches.delete(key);
            }
          }
        })
      );
    })
  );
});

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  if (event.request.headers.has('range')) {
    return;
  }
  if (event.request.url.includes('csdnimg.cn')) {
    const newHeaders = new Headers(event.request.headers);
    newHeaders.set('Referer', 'null');
    newHeaders.set('Origin', 'null');

    const modifiedRequest = new Request(event.request, {
      headers: newHeaders
    });

    cacheOrFetch(event, modifiedRequest);
    // 打印headers
    console.log('Request Headers:', [...event.request.headers.entries()]);

    //打印referer和origin
    console.log('Referer and Origin headers have been set to null');
  } else {
    let request = event.request.clone();
    cacheOrFetch(event, request);
  }
});

function cacheOrFetch(event, request) {
  event.respondWith(
    caches.match(request).then((response) => {
      if (response) {
        return response;
      }

      return fetch(request).then((response) => {
        const url = request.url;

        if (purge || request.method !== 'GET' || !verifyUrl(url)) {
          return response;
        }

        // See: <https://developers.google.com/web/fundamentals/primers/service-workers#cache_and_return_requests>
        let responseToCache = response.clone();

        caches.open(swconf.cacheName).then((cache) => {
          cache.put(request, responseToCache);
        });
        return response;
      });
    })
  );
}
