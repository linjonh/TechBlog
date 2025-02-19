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
  let origin_request = event.request;

  if (origin_request.headers.has('range')) {
    return;
  }
  if (origin_request.url.includes('csdnimg.cn')) {
    // 设置代理 URL
    const proxyUrl = 'https://api.allorigins.win/raw?url=';
    const originalUrl = origin_request.url;
    const modifiedUrl = proxyUrl + encodeURIComponent(originalUrl);

    // 创建新的请求对象，使用修改后的 URL
    const modifiedRequest = new Request(modifiedUrl, {
      method: origin_request.method,
      headers: origin_request.headers,
      body: origin_request.body,
      mode: origin_request.mode,
      credentials: origin_request.credentials,
      cache: origin_request.cache,
      redirect: origin_request.redirect,
      referrer: origin_request.referrer,
      integrity: origin_request.integrity
    });

    cacheOrFetch(event, modifiedRequest);
    // 打印headers
    console.log('Request Headers:', [...modifiedRequest.headers.entries()]);
  } else {
    cacheOrFetch(event, origin_request);
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
