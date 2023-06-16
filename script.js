function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`.key[data-key="${e.code}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("active");
}

function removeActive(e) {
    const key = document.querySelector(`.key[data-key="${e.code}"]`);
    key.classList.remove("active");
}

window.addEventListener('keydown', playSound);
window.addEventListener('keyup', removeActive);
