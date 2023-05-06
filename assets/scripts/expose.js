// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // Select the horn
  hornChange();
  // Set up the 'Play Sound' button
  playButton();
  // Adjust the volume slider
  volumeChange();
} 

//The confetti animation
const confetti = new JSConfetti()

// Set the image and the corresponding sound to the horn that is selected
function hornChange() {
       const hornSelect = document.getElementById('horn-select').addEventListener('change', (event)=> {
        document.getElementsByTagName('img')[0].src = 'assets/images/' + event.target.value + '.svg';
        document.getElementsByTagName('audio')[0].src = 'assets/audio/' + event.target.value + '.mp3';
   });
}

// 'Play Sound' button function: play sound when click on the button, and shoot out confetti animation if the Party Horn is selected 
function playButton() {
  const selectedAudio = document.getElementsByClassName('hidden')[0];
  const play = document.querySelector('button').addEventListener('click', () => {
    selectedAudio.play();
    if(document.getElementById('horn-select').value == 'party-horn'){
        confetti.addConfetti({
          confettiRadius: 6,
          confettiNumber: 500,
        });
      }
    });
  }


// Turn up/down the volume level and the corresponding icon when the slider is adjusted
function volumeChange() {
    const volumeSlider = document.getElementById("volume");
    const audio = document.getElementsByTagName('audio')[0];
    volumeSlider.addEventListener('change', () => {
      const soundIcon = document.querySelector('#volume-controls>img');
      const volumeLevel = parseInt(volumeSlider.value);
  
      switch (true) {
        case (volumeLevel === 0):
          soundIcon.src = "assets/icons/volume-level-0.svg";
          break;
        case (volumeLevel < 33):
          soundIcon.src = "assets/icons/volume-level-1.svg";
          break;
        case (volumeLevel < 67):
          soundIcon.src = "assets/icons/volume-level-2.svg";
          break;
        default:
          soundIcon.src = "assets/icons/volume-level-3.svg";
          break;
      }
        audio.volume = volumeSlider.value / 100;
    });
  }  

