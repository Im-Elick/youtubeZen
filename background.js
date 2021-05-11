function setYoutubeTheaterMode(){
  chrome.cookies.set({
    url: "https://www.youtube.com",
    domain: ".youtube.com",
    path: "/",
    name: "wide",
    value: "1"
  });
}

chrome.runtime.onInstalled.addListener(setYoutubeTheaterMode);
chrome.runtime.onStartup.addListener(setYoutubeTheaterMode);