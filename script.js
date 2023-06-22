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

function clickPlaySound(e){
    const audio = new Audio();
    audio.src = `sounds/${e.target.id}.wav`;
    audio.play();
   // document.querySelector(`audio[src="${e.target.id}"`).play();
}

/*document.querySelectorAll('.key').forEach(key => key.addEventListener('click', e => {
    //document.querySelector(`audio[src="${e.target.id}"`).play();
}));
*/
document.querySelectorAll('.key').forEach(key => key.addEventListener('click', clickPlaySound, {
    capture: true
}));
window.addEventListener('keydown', playSound);
window.addEventListener('keyup', removeActive);
