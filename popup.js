function onPageDetailsReceived(pageDetails)  { 
  document.getElementById('title').value = pageDetails.title; 
}
window.addEventListener('load', function(evt) {
  chrome.runtime.getBackgroundPage(function(eventPage) {
    eventPage.getPageDetails(onPageDetailsReceived);
  });
})