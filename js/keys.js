function playKey(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //select audio element based on data-key
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //select key based on key class and data-key
  if (!audio) return; //stop the function from running if no sound
  audio.currentTime = 0; //rewind sound before playing
  audio.play(); //play sound
  key.classList.add('playing'); //add 'playing' to class TODO skriv om til jquery - key.addClass('playing')
}

function removeKey(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeKey));

window.addEventListener ('keydown', playKey);
