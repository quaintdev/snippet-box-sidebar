
window.addEventListener('load', (event) => {
    browser.storage.sync.get("url").then((item) => {
        console.log(item)
        browser.sidebarAction.setPanel({ panel: browser.runtime.getURL(item.url) });
    }, (error) => {
        console.log(error)
    });
});


