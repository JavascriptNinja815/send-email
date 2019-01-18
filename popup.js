function onPageDetailsReceived(pageDetails)  { 
  document.getElementById('detected_email').value = pageDetails.detected_email;
}
function detect_hidden_email() {
  var id = document.getElementById('detect_for').value;
  chrome.tabs.query({
      active: true,
      currentWindow: true
  }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
          data: JSON.stringify(id)
      });
  });
  chrome.runtime.getBackgroundPage(function(eventPage) {
    eventPage.getPageDetails(onPageDetailsReceived);
  });
}
window.addEventListener('load', function(evt) {
  document.getElementById('detect_for').addEventListener('change', detect_hidden_email);
})