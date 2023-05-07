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
  let button = document.querySelector("button");
  let img = document.querySelector("img");
  const text = document.getElementById("text-to-speak");
  button.addEventListener("click", (event) => {
    img.src = "assets/images/smiling-open.png";
    let utterThis = new SpeechSynthesisUtterance(text.value);
    utterThis.voice = voices[document.getElementById("voice-select").value];
    window.speechSynthesis.speak(utterThis);
    utterThis.addEventListener('end', (event) => {
      img.src = "assets/images/smiling.png";
    });
  });
}