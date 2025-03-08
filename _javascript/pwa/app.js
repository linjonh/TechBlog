import Toast from 'bootstrap/js/src/toast';

if ('serviceWorker' in navigator) {
  // Get Jekyll config from URL parameters
  const src = new URL(document.currentScript.src);
  const register = src.searchParams.get('register');
  const baseUrl = src.searchParams.get('baseurl');
  if (register) {
    const swUrl = `${baseUrl}/sw.min.js`;

    // console.log(`swUrl=${swUrl}`)
    const notification = document.getElementById('notification');
    const btnRefresh = notification.querySelector('.toast-body>button');
    const popupWindow = Toast.getOrCreateInstance(notification);

    navigator.serviceWorker.register(swUrl, { scope: `${baseUrl}/` }).then((registration) => {
      // Restore the update window that was last manually closed by the user
      console.log("registration.waiting="+registration.waiting)
      
      if (registration.waiting) {
        console.log("popupWindow.show")
        popupWindow.show();
      }

      registration.addEventListener('updatefound', () => {
        registration.installing.addEventListener('statechange', () => {
        console.log("statechange="+registration.waiting)

          if (registration.waiting) {
            if (navigator.serviceWorker.controller) {
              console.log("statechange  popupWindow.show")
              popupWindow.show();
            }
          }
        });
      });

      btnRefresh.addEventListener('click', () => {
        console.log("click  SKIP_WAITING")

        if (registration.waiting) {
          registration.waiting.postMessage('SKIP_WAITING');
        }
        popupWindow.hide();
      });
    });

    let refreshing = false;

    // Detect controller change and refresh all the opened tabs
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!refreshing) {
        window.location.reload();
        refreshing = true;
      }
    });
  } else {
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
      for (let registration of registrations) {
        registration.unregister();
      }
    });
  }
}
