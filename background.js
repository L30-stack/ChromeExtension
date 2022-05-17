chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    console.log("opened: ", tab);
});

chrome.tabs.onActivated.addListener(function (obj) {
    Promise.resolve(chrome.tabs.get(obj.tabId)).then(r => {
        console.log("changed to: ", r);
    });
});