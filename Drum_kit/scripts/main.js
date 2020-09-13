function playSound_showTransition(e) {
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!sound) return;

    sound.currentTime = 0;
    sound.play();

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName != 'transform') return;
    this.classList.remove('playing');
}
    
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener("keydown", playSound_showTransition);

