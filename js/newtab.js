chrome.browserAction.onClicked.addListener(function(activeTab){
var newURL = "https://github.com/kimain050401/lightning-api-tester/blob/main/README.md";
    chrome.tabs.create({ url: newURL });
});