chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "grabParameters",
    title: "Grab Parameters",
    contexts: ["editable"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "grabParameters") {
    console.log("Context menu clicked, sending message"); // log
    chrome.tabs.sendMessage(tab.id, { action: "grabParameters" }, (response) => {
      if (chrome.runtime.lastError) {
        console.error("Error:", chrome.runtime.lastError);
      }
    });
  }
}); 