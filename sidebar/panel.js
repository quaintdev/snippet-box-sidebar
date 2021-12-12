
window.addEventListener('load', (event) => {
    browser.storage.sync.get("url").then((item) => {
        if (item.url == "") {
            browser.sidebarAction.setPanel({ panel: browser.runtime.getURL("/internal/options.html") })
        } else {
            browser.sidebarAction.setPanel({ panel: browser.runtime.getURL(item.url) });
        }
    }, (error) => {
        console.log(error)
    });
});


