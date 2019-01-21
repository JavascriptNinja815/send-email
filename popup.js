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
function send_email(){

  event.preventDefault();

  var host = document.getElementById('host').value;
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var detected_email = document.getElementById('detected_email').value;
  var sender = document.getElementById('sender').value;
  var subject = document.getElementById('subject').value;
  
    Email.send({
      Host : host,
      Username : username,
      Password : password,
      To : detected_email,
      From : sender,
      Subject : subject,
      Body : "This is test message "
    }).then(
      message => alert(message)
    );
}
window.addEventListener('load', function(evt) {
  document.getElementById('detect_for').addEventListener('change', detect_hidden_email);
  document.getElementById('send_email').addEventListener('submit', send_email);
})