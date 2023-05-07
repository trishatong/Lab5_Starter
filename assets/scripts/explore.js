// explore.js

window.addEventListener('DOMContentLoaded', init);

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
  populateVoiceList();
  let button = document.querySelector("button");
  button.addEventListener("click", (event) => {
    const text = document.getElementById("text-to-speak");
    let utterThis = new SpeechSynthesisUtterance(text.value);
    const selectedOption = document.querySelector("select").selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
  });
  window.speechSynthesis.speak(utterThis);
  document.querySelector("img").src = "assets/images/smiling-open.png";
}