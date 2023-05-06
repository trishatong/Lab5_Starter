// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Populate voice dropdown
  populateVoiceList();
  // Text is read aloud
  talk();
}

function populateVoiceList() {
    voices = window.SpeechSynthesis.getVoices();
    for (let i = 0; i < voices.length; i++) { 
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      document.getElementById("voiceSelect").appendChild(option);
    }
}
function talk() {
  //
}