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

let youtubeStartTime = 0;
let youtubeUseTime = 0;

chrome.tabs.onActivated.addListener(function () {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    if (tabs[0] && tabs[0].url) {
      const currentURL = tabs[0].url;
      /**
       * Calculate the amount of time spent on YouTube
       */

      if (currentURL.includes("https://www.youtube.com/")) {
        youtubeStartTime = new Date();
      } else {
        if (youtubeStartTime) {
          if (youtubeUseTime > 0) {
            youtubeUseTime += new Date().getTime() - youtubeStartTime.getTime();
          } else {
            youtubeUseTime = new Date().getTime() - youtubeStartTime.getTime();
          }
        }
        youtubeStartTime = null;
      }
      console.log("YOUTUBE_USE", youtubeUseTime);
    }
  });
});

// Called when the user clicks on the browser action.
chrome.action.onClicked.addListener((tab) => {
  console.log("START");
  chrome.tabs.create({ url: "https://www.youtube.com" });
});
