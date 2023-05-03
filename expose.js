// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
    // image
    const horn = document.getElementById("horn-select");
}

function hornChange() {
    var img = document.querySelector('img');
    var audio = document.querySelector('audio');    
    horn.addEventListener("change", (event) => {
            img.src = "assets/images/" + event.target.value + ".svg";
            audio.src = "assets/audio/" + event.target.value + ".mp3";
    });
}