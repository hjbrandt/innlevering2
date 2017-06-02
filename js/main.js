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

      // reset scroll to create infinite scroll illusion
      if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        window.scrollTo(0, 1);
      }

      if ($(window).scrollTop() === 0) {
        window.scrollTo(0, 1000000);
      }

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

    // KEY PRESS
    function removeTransition(e) {
      if (e.propertyName !== 'transform')
        return;
      e.target.classList.remove('active'); //TODO fix feilmelding "Cannot read property"
    }

    var press = document.querySelector(`.key-press[data-key='${e.keyCode}']`);

    press.classList.add('active');

    var presser = Array.from(document.querySelectorAll('.key-press'));
    presser.forEach(press => press.addEventListener('transitionend', removeTransition));

    // KEY PLAY
    var key = document.querySelector(`.key[data-key='${e.keyCode}']`); // select key based on key class and data-key
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

    audio.onended = function() {
      $(key).removeClass('playing');
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

  // GET SCENE from scroll value
  function getScene() {

    if (total == 200) {
      $('#scene').removeClass("scene-1").addClass("scene-2");
      SCENE_APP.init();
    }
    if (total == 400) {
      $('#scene').removeClass("scene-2").addClass("scene-3");
      SCENE_APP.init();
    }
    if (total == 600) {
      $('#scene').removeClass("scene-3").addClass("scene-4");
      SCENE_APP.init();
    }
    if (total == 800) {
      $('#scene').removeClass("scene-4").addClass("scene-5");
      SCENE_APP.init();
    }
    if (total == 1000) {
      $('#scene').removeClass("scene-4").addClass("scene-5");
      SCENE_APP.init();
    }

  } // END getScene

}());
