// if the browser supports a sw
if (navigator.serviceWorker) {
    console.log("Browser supports Service Worker");
    if (navigator.serviceWorker.current) {
        console.log("Current Service Worker state: \\o/");
        console.log('Go to chrome://serviceworker-internals/ or about:serviceworkers to see Service Worker debug output');
    } else {
        console.log("No Service Worker active...");
    }
}
