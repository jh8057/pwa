console.log("background");

// background.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );

  if (request.action === "FINISH") {
    sendResponse({ farewell: "goodbye" });
  }
});

let YOUTUBE_START_TIME = 0;
let YOUTUBE_USE_TIME = 0;

chrome.tabs.onActivated.addListener(function () {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var currentURL = tabs[0].url;

    /**
     * TODO: exchange to includes function
     */
    if (currentURL === "https://www.youtube.com/") {
      YOUTUBE_START_TIME = new Date();
    } else {
      if (YOUTUBE_START_TIME) {
        if (YOUTUBE_USE_TIME > 0) {
          YOUTUBE_USE_TIME +=
            new Date().getTime() - YOUTUBE_START_TIME.getTime();
        } else {
          YOUTUBE_USE_TIME =
            new Date().getTime() - YOUTUBE_START_TIME.getTime();
        }
      }
      YOUTUBE_START_TIME = null;
    }
    console.log("YOUTUBE_USE", YOUTUBE_USE_TIME);
  });
});
