$(function() {
  'use strict';
  console.log('KEY.js is loaded');

  $('body').on('keydown', function(e) {

    var key = document.querySelector(`.key[data-key='${e.keyCode}']`); // select key based on key class and data-key
    var audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    var video = document.querySelector(`video[data-key='${e.keyCode}']`);

    if (!audio || !video) return; // stop the function from running if no audio or video on key
    audio.currentTime = 0; // rewind before playing
    audio.play();

    video.currentTime = 0;
    video.play();

    $(key).addClass('playing'); // adds display block

    audio.onended = function() {
      $(key).removeClass('playing'); // removes display block
    };

  });

});