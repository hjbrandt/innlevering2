$(function(){
"use strict";

	console.log("now we are ready");

	function playKey(e) {
	  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`); //select audio element based on data-key
	  const key = document.querySelector(`.key[data-key='${e.keyCode}']`); //select key based on key class and data-key
	  if (!audio) return; //stop the function from running if no sound
	  audio.currentTime = 0; //rewind sound before playing
		$(key).addClass('playing'); //add 'playing' to class TODO skriv om til jquery - key.addClass('playing')
	  audio.play(); //play sound

		audio.onended = function() {
            $(key).removeClass('playing');
		};

	}

	function removeKey(e) {
	  if(e.propertyName !== 'transform') return;
	}

	const keys = document.querySelectorAll('.key');
	keys.forEach(key => key.addEventListener('transitionend', removeKey));

	window.addEventListener ('keydown', playKey);

});