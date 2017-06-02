$(function() {
  SCENE_APP.init();

  // SCROLL FUNCTION
  var total = 0;
  var newPosition = 0;
  var increment = 1;
  var move = 0;

  // SCROLL
  var scroll = function() {

    $(window).on('scroll', function() {

      total += increment;
      var position = window.scrollY;

      if (position < newPosition) {

        move = 1;

        newPosition = position;
        getScene();
        // moveUp();
        console.log("you are scrolling UP!!!");

      } else {

        move = 2;

        newPosition = position;
        getScene();
        // moveDown();
        console.log("you are scrolling DOWN");
      }

    });

  }(); // END SCROLL

  // KEY
  $('body').on('keydown', function(e) {

    var key = document.querySelector(`.key[data-key='${e.keyCode}']`); // select key based on key class and data-key
    var audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    var video = document.querySelector(`video[data-key='${e.keyCode}']`);

    if (!audio || !video) return; // stop the function from running if no audio or video on key
    audio.currentTime = 0; // rewind before playing
    audio.volume = 0.5;
    audio.play();

    video.currentTime = 0;
    video.play();

    $(key).addClass('playing'); // adds display block

    audio.onended = function() {
      $(key).removeClass('playing'); // removes display block
    };

  }); // END KEY

  // CLOCK
  var secondHand = document.querySelector('.second-hand');
  var minuteHand = document.querySelector('.minutes-hand');
  var hourHand = document.querySelector('.hour-hand');

  function setDate() {
    var now = new Date();

    var seconds = now.getSeconds();
    var secondsDegrees = ((seconds / 60) * 360) + 90;

    var minutes = now.getMinutes();
    var minutesDegrees = ((minutes / 60) * 360) + 90;

    var hours = now.getHours();
    var hoursDegrees = ((hours / 12) * 360) + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  }
  setInterval(setDate, 1000);
  // END CLOCK

  // START GET SCENE
  function getScene() {

    if (total == 200) {
      $('#scene')
        .removeClass("scene-1")
        .addClass("scene-2");
        SCENE_APP.init();
    }
    if (total == 400) {
      $('#scene')
        .removeClass("scene-2")
        .addClass("scene-3");
        SCENE_APP.init();
    }
    if (total == 600) {
      $('#scene')
        .removeClass("scene-3")
        .addClass("scene-4");
        SCENE_APP.init();
    }
    if (total == 800) {
      $('#scene')
        .removeClass("scene-4")
        .addClass("scene-1");
      total = 0;
      SCENE_APP.init();
    }

  } // END getScene

}());
