// function getPageDetails(callback) { 
//   chrome.tabs.executeScript(null, { file: 'content.js' });
//   chrome.runtime.onMessage.addListener(function(message)  {
//       callback(message);
//   });
// };
window.open("popup.html", "extension_popup", "width=400,height=500,status=no,scrollbars=yes,resizable=no");