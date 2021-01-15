var eventType = document.querySelector("#event-type"); 
var keyEventsEl = document.querySelector("#key-events");

function keydownAction(event) {
  // TODO: Complete keydown function\
  console.log(event);
  document.querySelector("#status").textContent = "KEYDOWN Event";
  document.querySelector("#key").textContent = event.key;
  document.querySelector("#code").textContent = event.code;
}
function keyupAction(event) {
  document.querySelector("#status").textContent = "KEYUP Event";
  document.querySelector("#key").textContent = event.key;
  document.querySelector("#code").textContent = event.code;
 }

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);

  
