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
// const proxyUrl = 'https://api.allorigins.win/raw?url=';
// const proxyHost = 'https://api.allorigins.win';
const proxyUrl = 'https://cors-proxy-rho-red.vercel.app/';
const proxyHost = 'https://cors-proxy-rho-red.vercel.app';
const cloudflare = 'https://www.cloudflare-terms-of-service-abuse.com/';
self.addEventListener('fetch', (event) => {
  let origin_request = event.request;

  if (origin_request.headers.has('range')) {
    return;
  }

  if (
    (origin_request.url.includes('csdnimg.cn') ||
      origin_request.url.includes(cloudflare)) &&
    !origin_request.url.includes(proxyHost)
  ) {
    // 设置代理 URL
    const originalUrl = origin_request.url;
    const modifiedUrl = proxyUrl + originalUrl;

    // 创建新的请求对象，使用修改后的 URL
    const modifiedRequest = new Request(modifiedUrl, {
      method: origin_request.method,
      headers: origin_request.headers,
      body: origin_request.body,
      mode: origin_request.mode,
      credentials: origin_request.credentials,
      cache: origin_request.cache,
      redirect: origin_request.redirect,
      referrer: proxyHost,
      integrity: origin_request.integrity
    });

    cacheOrFetch(event, modifiedRequest);
    // 打印headers
    // console.log('Request Headers:', [...modifiedRequest.headers.entries()]);
  } else if (
    origin_request.url.includes(proxyHost) &&
    origin_request.url.endsWith('.ts')
  ) {
    // 处理 ts 的代理
    getAllCacheEntries(event, origin_request);
  } else {
    cacheOrFetch(event, origin_request);
  }
});

function getAllCacheEntries(event, origin_request) {
  event.waitUntil(
    (async () => {
      const response = await caches.match(origin_request);
      if (response) {
        return response;
      }

      let ts_file_name = origin_request.url.replace(proxyHost + '/', '');
      // console.log('handle ts file：' + ts_file_name);

      const cacheNames = await caches.keys();
      for (const cacheName of cacheNames) {
        const cache = await caches.open(cacheName);
        const requests = await cache.keys();
        for (const request of requests) {
          const response = await cache.match(request);
          const m3u8Content = await response.text();
          let url = request.url;
          if (url.endsWith('.m3u8')) {
            // console.log('macth m3u8:' + url);
            if (m3u8Content.includes(ts_file_name)) {
              let m3u8Url = decodeURIComponent(url);
              // console.log('m3u8Url: ' + m3u8Url);
              m3u8Url = m3u8Url.replace(proxyUrl, '');
              let tsUrl = new URL(
                ts_file_name,
                m3u8Url.substring(0, m3u8Url.lastIndexOf('/') + 1)
              );
              tsUrl = proxyUrl + tsUrl.href;
              // console.log('tsUrl:' + tsUrl);
              const modifiedRequest = new Request(tsUrl, {
                method: origin_request.method,
                headers: origin_request.headers,
                body: origin_request.body,
                mode: origin_request.mode,
                credentials: origin_request.credentials,
                cache: origin_request.cache,
                redirect: origin_request.redirect,
                referrer: proxyHost,
                integrity: origin_request.integrity
              });
              // console.log(modifiedRequest);
              let response;
              const fetchResponse = await fetch(modifiedRequest);
              if (fetchResponse.redirected) {
                const finalUrl = proxyUrl + fetchResponse.url;
                response = await fetch(finalUrl);
                if (response.status === 200) {
                  // console.log('重定向的response：success,' + response.url);
                } else {
                  // console.log('重定向的response：failed' + response.url);
                }
              } else {
                response = fetchResponse;
              }
              const final_url = request.url;
              if (purge || request.method !== 'GET' || !verifyUrl(final_url)) {
                return response;
              }

              // See: <https://developers.google.com/web/fundamentals/primers/service-workers#cache_and_return_requests>
              let responseToCache = response.clone();

              const cache = await caches.open(swconf.cacheName);
              cache.put(request, responseToCache);

              return response;
            }
          }
        }
      }
      return fetch(origin_request);
    })()
  );
}

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
