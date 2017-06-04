$(function() {
  'use strict';
  console.log('KEY.js is loaded');

  // KEY FUNCTIONS
  $('body').on('keydown', function(e) {

    // KEY PRESS
    function removeTransition(e) {
      if (e.propertyName !== 'transform')
        return;
      e.target.classList.remove('active');
    }

    var press = document.querySelector(`.key-press[data-key='${e.keyCode}']`);

    if (!press) return; // disables function from unbound keys

    press.classList.add('active');

    var pressed = Array.from(document.querySelectorAll('.key-press'));
    pressed.forEach(press => press.addEventListener('transitionend', removeTransition));

    // KEY PLAY SOUND & VIDEO
    var key = document.querySelector(`.key[data-key='${e.keyCode}']`); // ES6 syntax
    var audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    var video = document.querySelector(`video[data-key='${e.keyCode}']`);

    if (!audio || !video)
      return; // stop the function from running if no audio or video on key
    audio.currentTime = 0;
    audio.volume = 0.5;
    audio.play();

    video.currentTime = 0;
    video.play();

    $(key).addClass('playing');
    console.log('addClass key');

    audio.onended = function() {
      $(key).removeClass('playing');
      console.log('removeClass key');
    };

  }); // END KEY

});