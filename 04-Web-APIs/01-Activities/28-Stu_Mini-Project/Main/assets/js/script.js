//javascript code goes here

var button = document.querySelector(".start-button");
var timer = document.querySelector(".timer-count");
var winLose = document.querySelector(".word-blanks");
var loser = parseInt(document.querySelector(".lose").innerHTML);

button.addEventListener("click", function(event) {
    event.preventDefault();
    startTimer();
});
var secondsLeft = 10;

function startTimer(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft ;
        
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
         
          // Calls function to create and append image
        document.querySelector(".word-blanks").innerHTML = "You Lose!!!";
        document.querySelector(".lose").innerHTML = loser += 1;
        
      }
    
      }, 1000);
    };
function wordGuess(event){
    var keyPress = event.key;
    console.log(event);
  document.querySelector(".word-blanks").textContent = "KEYDOWN Event";
  document.querySelector(".word-guess").textContent = event.key;
  document.querySelector("#code").textContent = event.code;
};
