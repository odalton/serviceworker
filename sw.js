// if the browser supports a sw
if (navigator.serviceWorker) {
    log("Browser supports Service Worker");
    if (navigator.serviceWorker.current) {
        log("Current Service Worker state: \\o/");
        log('Go to chrome://serviceworker-internals/ or about:serviceworkers to see Service Worker debug output');
    } else {
        log("No Service Worker active...");
    }
}
