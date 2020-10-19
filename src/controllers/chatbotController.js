let test = (req, res) => {
  return res.send("Hello Again");
};

let getWebHook = (req, res) => {}

let postWebHook = (req, res) => {}

// Handles messages events
function handleMessage(sender_psid, received_message) {

}

// Handles messaging_postbacks events
function handlePostback(sender_psid, received_postback) {

}

// Sends response messages via the Send API
function callSendAPI(sender_psid, response) {
  
}

module.exports = {
  test: test,
  getWebHook: getWebHook,
  postWebHook: postWebHook
};
