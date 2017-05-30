$(function() {
  'use strict';
  console.log('gui.js is loaded');

// CLOCK
  const secondHand = document.querySelector('.second-hand'); // TODO skriv om til jquery?
  const minuteHand = document.querySelector('.minutes-hand'); // TODO skriv om til jquery?
  const hourHand = document.querySelector('.hour-hand'); // TODO skriv om til jquery?

  function setDate () {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // TODO skriv om til jquery?
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`; // TODO skriv om til jquery?
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`; // TODO skriv om til jquery?
  }
  setInterval(setDate, 1000);
// END CLOCK

// Mouse move function
  const inputs = document.querySelectorAll('#overlay');

  function mouseMove() {
    console.log(this.value);
  }

// Play key and show animation
  function playKey (e) {

    const key = document.querySelector(`.key[data-key='${e.keyCode}']`); // select key based on key class and data-key
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`); // select audio element based on data-key
    const video = document.querySelector(`video[data-key='${e.keyCode}']`);  // TODO skriv om til jquery?

	  if (!video || !audio) return; // stop the function from running if no sound or video on key
	  audio.currentTime = 0; // rewind before playing
    video.currentTime = 0;
    $(key).addClass('playing'); // adds display block
	  audio.play();
    video.play();

    audio.onended = function () {
      $(key).removeClass('playing'); // removes display block
    };
  }

  function removeKey (e) {
	  
  }
// END Play key

// Event listeners
  inputs.forEach(input => input.addEventListener('mouse', mouseMove));

  const keys = document.querySelectorAll('.key'); // TODO skriv om til jquery?
  keys.forEach(key => key.addEventListener('transitionend', removeKey));

  window.addEventListener('keydown', playKey);
// END Event linsteners

});