$(function() {
  'use strict';
  console.log('scenes.js is loaded');

  // Play key and show animation
  function playKey(e) {

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
  }

  // END Play key

  // Event listeners
  var keys = document.querySelectorAll('.key');
  // keys.forEach(key => key.addEventListener('transitionend', playKey));
  keys.forEach(function(key) {
    key.addEventListener('', playKey);
  });
  window.addEventListener('keydown', playKey);
  // END Event linsteners

  // var now = Date();

  // console.log(now);


    // function scrollEvent () {
    //     var checkScene = 1;

    //     $( window ).scroll(function() {
    //         var viewportHeight = $(window).height();
    //         var container = $('body');
    //         var scrollTo = $('#scene'+checkScene);
    //         container.animate({
    //             scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
    //         });
    //         checkScene++;
    //     });
    // };

    // window.addEventListener("scroll", scrollEvent);
    // scrollEvent();

  var scene1 = {
    "sound" : "media/audio/sound1.mp3",
    "animation" : "media/img/scene1.webm",
    "keyQ" : "media/img/key1/ambulanse.webm",
    "keyW" : "media/img/key1/brems.webm",
    "keyE" : "media/img/key1/dor.webm",
    "keyA" : "media/img/key1/hund.webm",
    "keyS" : "media/img/key1/krake.webm",
    "keyD" : "media/img/key1/make.webme",
    "keyZ" : "media/img/key1/melding.webm",
    "keyX" : "media/img/key1/motorsykkel.webm",
    "keyC" : "media/img/key1/tut.webm",
  };

  var scene2 = {
    "sound" : "media/audio/sound2.mp3",
    "animation" : "media/img/scene2.webm",
    "keyQ" : "media/img/key2/ambulanse.webm",
    "keyW" : "media/img/key2/brems.webm",
    "keyE" : "media/img/key2/dor.webm",
    "keyA" : "media/img/key2/hund.webm",
    "keyS" : "media/img/key2/krake.webm",
    "keyD" : "media/img/key2/make.webme",
    "keyZ" : "media/img/key2/melding.webm",
    "keyX" : "media/img/key2/motorsykkel.webm",
    "keyC" : "media/img/key2/tut.webm",
  };

  var scene3 = {
    "sound" : "media/audio/sound3.mp3",
    "animation" : "media/img/scene3.webm",
    "keyQ" : "media/img/key3/ambulanse.webm",
    "keyW" : "media/img/key3/brems.webm",
    "keyE" : "media/img/key3/dor.webm",
    "keyA" : "media/img/key3/hund.webm",
    "keyS" : "media/img/key3/krake.webm",
    "keyD" : "media/img/key3/make.webme",
    "keyZ" : "media/img/key3/melding.webm",
    "keyX" : "media/img/key3/motorsykkel.webm",
    "keyC" : "media/img/key3/tut.webm",
  };

  var scene4 = {
    "sound" : "media/audio/sound4.mp3",
    "animation" : "media/img/scene4.webm",
    "keyQ" : "media/img/key4/ambulanse.webm",
    "keyW" : "media/img/key4/brems.webm",
    "keyE" : "media/img/key4/dor.webm",
    "keyA" : "media/img/key4/hund.webm",
    "keyS" : "media/img/key4/krake.webm",
    "keyD" : "media/img/key4/make.webme",
    "keyZ" : "media/img/key4/melding.webm",
    "keyX" : "media/img/key4/motorsykkel.webm",
    "keyC" : "media/img/key4/tut.webm",
  };

});