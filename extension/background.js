// Background script for Chrome extension

// TODO: Make this not a hack
const BASE_URL = "http://heaviside.parc.xerox.com:5000";

chrome.contextMenus.create({
  title: "PunKtuate!",
  contexts: ["selection"],
  onclick: (info) => {
    const selectedText = info.selectionText;
    // window.alert(selectedText);
    const newUrl = BASE_URL + "/?q=" + encodeURIComponent(selectedText);
    chrome.tabs.create({ url: newUrl });
  },
});
