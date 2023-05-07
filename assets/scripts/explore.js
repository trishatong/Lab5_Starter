// explore.js

window.addEventListener('DOMContentLoaded', init);
var voices = [];
function init() {
  // Populate voice dropdown
  populateVoiceList();
  // Text is read aloud
  talk();
}

function populateVoiceList() {  
  let voices = window.speechSynthesis.getVoices();
    for (let i = 0; i < voices.length; i++) { 
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      document.querySelector("select").appendChild(option);
    }
}

if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

function talk() {
    // Set up the talk button
    const talkButton = document.querySelector("button");
    talkButton.addEventListener("click", event => {
      const textInput = document.getElementById("text-to-speak");
      const faceImage = document.querySelector("img");
      faceImage.src = "assets/images/smiling-open.png";
      const utterance = new SpeechSynthesisUtterance(textInput.value);
      utterance.voice = voices[document.getElementById("voice-select").value];
      speechSynthesis.speak(utterance);
      utterance.addEventListener("end", event => {
        faceImage.src = "assets/images/smiling.png";
      });
    });
}