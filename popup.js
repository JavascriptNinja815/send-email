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
      Body : '<!DOCTYPE HTML> \
      <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">\
        <head>\
          <style>\
            .multiline{\
              white-space: pre-wrap;\
            }\
      \
            .receipt {\
              width: 400px;\
              min-height: 256px;\
              font-size: 18px;\
              color: black !important;\
              font-family: Arial;\
            }\
            \
            .receipt-barcode{\
              padding-top: 16px;\
            }\
            \
            .receipt-footer{\
              padding-top: 16px;\
            }\
            \
            .full-height{\
              height: 100%;\
            }\
            \
            .full-width{\
              width: 100%;\
            }\
            \
            .lined-receipt-section{\
              padding-top: 16px;\
              padding-bottom: 16px;\
              border-top: 1px dotted;\
              border-bottom: 1px dotted;\
              width: 100%;\
              display: flex;\
              align-items: center;\
            }\
            \
            .receipt-body{\
              padding-top: 16px;\
            }\
            \
            .receipt-logo{\
              text-align: center;\
              margin-top: 24px;\
            }\
            \
            .receipt-summary{\
              border-bottom: 0px;\
            }\
            \
            .receipt-image{\
              max-height: 190px;\
              max-width: 380px;\
            \
              min-height: 80px;\
              min-width: 160px;\
            }\
            \
            .header-text-area{\
              margin-bottom: 16px;\
            }\
            \
            .receipt-main{\
              padding: 24px;\
            }\
            \
            .receipt table th{\
              font-weight:400;\
            }\
            \
            .receipt table td{\
              vertical-align: top;\
            }\
            \
            .receipt table{\
              text-align: left;\
            }\
            \
            .receipt-summary{\
              margin-top: 32px;\
            }\
            \
            .receipt-discount{\
              min-height: 46px;\
            }\
            .receipt-dc-section {\
              padding: 0;\
            }\
            \
            .receipt-barcode{\
              transform: scaley(0.6);\
            }\
            .receipt-customer{\
              display: block!important;\
              border-bottom: 0px;\
            }\
            \
            .receipt-budtender{\
              display: block;\
              border-top: 0px;\
            }\
            \
            .center-box{\
              display: flex;\
              flex-direction: column;\
              justify-content: center;\
              align-items: center;\
              text-align: center;\
            }\
      \
            .receipt-summary .reward-dollars {\
              position: relative;\
              left: 14px;\
            }\
      \
            .aligned{\
              display: flex;\
              align-items: center;\
            }\
            \
            .space-around{\
              display: flex;\
              justify-content: space-around;\
            }\
      \
            .space-between{\
              display: flex;\
              justify-content: space-between;\
            }\
      \
            .flex-end{\
              display: flex;\
              justify-content: flex-end;\
            }\
      \
            .flex-start{\
              display: flex;\
              justify-content: flex-start;\
            }\
      \
            ul {\
              list-style-type: none;\
              font-size: 18px;\
              line-height: 1.5;\
              padding-left: 24px;\
              padding-right: 24px;\
            }\
        </style>\
      </head>\
      <div data-reactroot=""><div class="receipt"><div class="receipt-logo"><img class="receipt-image" src="http://verification-string.com/usw/g1/v1/treez.png"/></div><div class="receipt-main"><div class="receipt-header"><div style="text-align:center;width:100%"><div class="receipt-bold"><b>testenv7</b></div><div class="receipt-bold">123 Treez Ave, City, CA 95000</div><br/><div> <!-- -->01/17/2019 9:57am<!-- --> </div><br/></div></div><div class="receipt-sub-header lined-receipt-section receipt-customer"><div>MARYJANE JERDE</div></div><div class="receipt-sub-header lined-receipt-section" style="width:100%;display:block"><div class="full-width space-between"><div> <b> RECEIPT # <!-- -->E9L8GG<!-- --> </b></div></div><div class="full-width space-between" style="margin-top:4px">Order Created: <!-- -->01/17/2019 9:56am</div></div><div class="receipt-body"><table class="full-width"><thead><tr><th> Qty. </th><th> Name </th><th> Price </th></tr></thead><tbody><tr class="receipt-ticket-line"><td>1</td><td><div><b> <!-- -->KING LOUIS XIII SAMPLE</b></div><div>FLOWER</div><div> <!-- -->1A4FF0300000023000000043<!-- --> </div>(0 Ounces)<div><b>* Original Price: </b>$40.00<!-- --> </div><div class="receipt-discount"><div><div class="discount-description"><div> * <!-- -->2ND VISIT DISCOUNT<!-- --> - <!-- -->$8.00</div><div>  </div></div></div></div><div class="receipt-item-spacer"></div></td><td>$32.00</td></tr><tr class="receipt-ticket-line"><td>1</td><td><div><b> <!-- -->CBD BODY BUTTER SAMPLE</b></div><div>TOPICAL</div><div> <!-- -->t5yu<!-- --> </div><div><b>* Original Price: </b>$50.00<!-- --> </div><div class="receipt-discount"><div><div class="discount-description"><div> * <!-- -->2ND VISIT DISCOUNT<!-- --> - <!-- -->$10.00</div><div>  </div></div></div></div><div class="receipt-item-spacer"></div></td><td>$40.00</td></tr><tr class="receipt-ticket-line"><td>1</td><td><div><b> <!-- -->KING LOUIS XIII SAMPLE</b></div><div>FLOWER</div><div> <!-- -->label2<!-- --> </div>(0 Ounces)<div><b>* Original Price: </b>$10.00<!-- --> </div><div class="receipt-discount"><div><div class="discount-description"><div> * <!-- -->2ND VISIT DISCOUNT<!-- --> - <!-- -->$2.00</div><div>  </div></div></div></div><div class="receipt-item-spacer"></div></td><td>$8.00</td></tr></tbody></table></div><div class="receipt-summary full-width lined-receipt-section"><table class="full-width"><tbody><tr><td> Original Price: </td><td class="right-aligned"> <!-- -->$100.00<!-- --> </td></tr><tr><td> Total Discounts: </td><td class="right-aligned"> <!-- -->-$20.00<!-- --> </td></tr><tr><td> Subtotal: </td><td class="right-aligned"> <!-- -->$80.00<!-- --> </td></tr><tr><td> <!-- -->Sales Tax<!-- -->:</td><td class="right-aligned"> <!-- -->$6.80<!-- --> </td></tr><tr><td> <!-- -->MBT<!-- -->:</td><td class="right-aligned"> <!-- -->$14.81<!-- --> </td></tr><tr><td> <!-- -->Excise Tax<!-- -->:</td><td class="right-aligned"> <!-- -->$61.28<!-- --> </td></tr><tr class="receipt-bold"><td> <b> Total: </b></td><td class="right-aligned"> <b> <!-- -->$162.89<!-- --> </b> </td></tr></tbody></table></div><div class="cash-and-change-section lined-receipt-section"><table class="full-width"><tbody><tr><td>Cash<!-- -->:</td><td class="right-aligned">$162.89</td></tr><tr><td>Total Paid:</td><td class="right-aligned">$162.89</td></tr><tr><td><b>CHANGE:</b></td><td class="right-aligned"><b>$0.00</b></td></tr></tbody></table></div><div class="rewards-section lined-receipt-section"><table class="full-width"><tbody><tr><td>Reward Dollars Earned:</td><td class="right-aligned">$0.80</td></tr><tr><td><b>Total Reward Dollars:</b></td><td class="right-aligned"><b>$0.80</b></td></tr></tbody></table></div><div class="receipt-sub-header lined-receipt-section receipt-budtender"><div>Budtended By<!-- -->: <!-- -->TREEZ SAMPLE<!-- --> </div><div>ON <!-- -->CD01</div><div>Order Completed: <!-- -->01/17/2019 9:57am</div></div><div></div><div class="receipt-footer full-width"><div class="center-box multiline" style="display:flex;justify-content:center;align-items:center;flex-direction:column"><div style="max-width:360px;font-size:20px;font-weight:bold;margin-bottom:24px;margin-top:16px"> <!-- -->Thank you for choosing Treez!<!-- --> </div></div><div class="center-box multiline" style="display:flex;justify-content:center;align-items:center;flex-direction:column"><div style="max-width:360px;font-size:14px"> <!-- --> </div></div><div class="center-box multiline" style="display:flex;justify-content:center;align-items:center;flex-direction:column"><div style="max-width:360px;font-size:20px;font-weight:bold;margin-bottom:24px;margin-top:16px"> <!-- -->Here is where you will put all that fun compliance language, maybe a return policy, or maybe a thankful message to your customers!\
\
<!-- --> </div></div></div><div class="receipt-barcode center-box" style="width:100%;text-align:center;margin:0"><img src="http://verification-string.com/usw/g1/v1/barcode.png"/></div><div class="powered-by-treez flex-end">\
  <img style="width:72px;margin-top:36px;height:26px;margin-right:-12px" src="http://verification-string.com/usw/g1/v1/powered_by_treez.jpg"/></div></div></div></div>'
    }).then(
      message => alert(message)
    );
}
window.addEventListener('load', function(evt) {
  document.getElementById('detect_for').addEventListener('change', detect_hidden_email);
  document.getElementById('send_email').addEventListener('submit', send_email);
})