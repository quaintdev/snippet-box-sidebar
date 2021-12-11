browser.browserAction.onClicked.addListener(openPage);
function openPage() {
    browser.sidebarAction.open();
}

