// explore.js

window.addEventListener("DOMContentLoaded", init);

let availableVoices;

function init() {
  // Populate the voice list
  window.speechSynthesis.onvoiceschanged = function(event) {
    availableVoices = speechSynthesis.getVoices();
    const voiceSelect = document.getElementById("voice-select");
    availableVoices.forEach((voice, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.add(option);
    });
  };

  // Set up the talk button
  const talkButton = document.querySelector("button");
  talkButton.addEventListener("click", event => {
    const textInput = document.getElementById("text-to-speak");
    const faceImage = document.querySelector("img");
    faceImage.src = "assets/images/smiling-open.png";
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    utterance.voice = availableVoices[document.getElementById("voice-select").value];
    speechSynthesis.speak(utterance);
    utterance.addEventListener("end", event => {
      faceImage.src = "assets/images/smiling.png";
    });
  });
}