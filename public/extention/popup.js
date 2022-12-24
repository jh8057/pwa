// find 'youtube' url on tab list
chrome.tabs.query({}, function (tabs) {
  console.log("======");
  tabs.forEach(function (tab) {
    console.log(tab.url);
    if (tab.url && tab.url.indexOf("youtube") !== -1) {
      let YOUTUBE = new Date();

      const ele = document.getElementById("url__youtube");
      ele.innerHTML = YOUTUBE;
    }
  });
});

// run when tab is updated
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == "complete" && tab.active) {
    // do your things
    alert("heell");
    console.log("TTT");
  }
});
