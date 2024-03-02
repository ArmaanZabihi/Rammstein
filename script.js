// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

// Selects the audio element by id
var song = document.getElementById("song");

var secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image and play the song
      sendMessage();
    }

  }, 1000);
}


// Function to create and append colorsplosion image and play the song
function sendMessage() {
  timeEl.textContent = " DU HAST ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/rammstein.jpg");
  mainEl.appendChild(imgEl);
  
  
  // Plays the song
  song.play();
}

setTime();
document.addEventListener('DOMContentLoaded', function() {
  var hasClickedPlay = false; // Track if the play button has been clicked

  var playButton = document.getElementById('Play');
  playButton.addEventListener('click', function() {
      var song = document.getElementById('song');
      song.play();
      hasClickedPlay = true;
      alert("You choose wisely, let's Rock n Roll");
  });
});
