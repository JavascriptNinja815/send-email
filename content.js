chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.data !== undefined) {
    var id = JSON.parse(msg.data);
    chrome.runtime.sendMessage({
      'detected_email': document.getElementById(id).getElementsByTagName('input')[0].value
    });
  }
});

