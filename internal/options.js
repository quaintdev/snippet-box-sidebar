function saveOptions(e) {
    e.preventDefault();
    browser.storage.sync.set({
        url: document.querySelector("#instance-url").value
    });
    browser.sidebarAction.setPanel({ panel: browser.runtime.getURL(document.querySelector("#instance-url").value) });
}

function restoreOptions() {

    function setCurrentChoice(result) {
        document.querySelector("#instance-url").value = result.url;
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    let getting = browser.storage.sync.get("url");
    getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
