$(function() {
  SCENE_APP.init();

  // SCROLL FUNCTION
  var total = 0;
  var newPosition = 0;
  var increment = 1;

  // SCROLL FUNCTIONS

  var scroll = function() {

    $(window).on('scroll', function() {

      total += increment;
      var position = window.scrollY;

      // reset scroll to create infinite scroll illusion
      if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        window.scrollTo(0, 1);
      }

      if ($(window).scrollTop() === 0) {
        window.scrollTo(0, $(document).height()); //TODO fix looping bug
      }

      if (total == 1000) {
        total = 0;
      }

      if (position < newPosition) {

        newPosition = position;
        moveUp();
        getScene();

      } else {

        newPosition = position;
        getScene();
        moveDown();

      }

      function moveUp() {
        $('.gui');
        console.log("animate UP here");
      }

      function moveDown() {
        $('.gui');
        console.log("animate DOWN here");
      }

    });
  }(); // END SCROLL

  // KEY FUNCTIONS
  $('body').on('keydown', function(e) {

    // KEY PRESS
    function removeTransition(e) {
      if (e.propertyName !== 'transform')
        return;
      e.target.classList.remove('active');
    }


    // START getRandonNumber()

      // var getNumber = function(min, max){
      //     if(min < 0 ){
      //         min = 0;
      //     }
      //     if(max > 100){
      //         max = 100;
      //     }
      //     max = max - min;         
          
      //     return (Math.floor(Math.random() * max) + min);
      // };

    // END getRandonNumber();

    // function addPosition() {
    //   var X = getNumber();
    //   var Y = getNumber();

    //   $('.playing').css('left', X);
    //   console.log("position values");
    //   $('.playing').css('top', Y);
    // }();

    var press = document.querySelector(`.key-press[data-key='${e.keyCode}']`);

    if (!press) return; // stop if no value

    press.classList.add('active');

    var pressed = Array.from(document.querySelectorAll('.key-press'));
    pressed.forEach(press => press.addEventListener('transitionend', removeTransition));

    // KEY PLAY SOUND & VIDEO
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
      console.log('addClass key');

    audio.onended = function() {
      $(key).removeClass('playing');
      console.log('removeClass key');
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

    var $gui = $('#gui');
    $gui.find('.gui');

    // scene change breakpoints
    if (total == 200) {
      $gui.hide();
      $('#scene').removeClass("scene-1").addClass("scene-2");
      SCENE_APP.init();
      $gui.fadeIn('slow');
    }
    if (total == 400) {
      $gui.hide();
      $('#scene').removeClass("scene-2").addClass("scene-3");
      SCENE_APP.init();
      $gui.fadeIn('slow');
    }
    if (total == 600) {
      $gui.hide();
      $('#scene').removeClass("scene-3").addClass("scene-4");
      SCENE_APP.init();
      $gui.fadeIn('slow');
    }
    if (total == 800) {
      $gui.hide();
      $('#scene').removeClass("scene-4").addClass("scene-1");
      SCENE_APP.init();
      $gui.fadeIn('slow');
      total = 0;
    } // END scene change breakpoint

  } // END --getScene()

  // START Gui controls
  $('.controls input').on('mousemove', function(e) {

    var data = this.dataset.sizing || ''; // makes the function scalable to other units

    $('.gui').css({'opacity': this.value + data });
  });

  // // START js UI
  // $(function() {
  //   $('#slider').slider();
  //   slider.slider({
  //     range: "min",
  //     valaue: 50,
  // });
  //   });

    // $(function() {
     
    //   var slider = $('#slider'),
    //     tooltip = $('.tooltip');
     
    //   tooltip.show();
     
    //   slider.slider({
    //     range: "min",
    //     min: 1,
    //     value: 35,
     
    //     start: function(event,ui) {
    //       tooltip.fadeIn('fast');
    //     },
     
    //     slide: function(event, ui) {
     
    //       var value = slider.slider('value'),
    //         volume = $('.volume');
     
    //       tooltip.css('left', value).text(ui.value);
     
    //       if(value <= 5) { 
    //         volume.css('background-position', '0 0');
    //       } 
    //       else if (value <= 25) {
    //         volume.css('background-position', '0 -25px');
    //       } 
    //       else if (value <= 75) {
    //         volume.css('background-position', '0 -50px');
    //       } 
    //       else {
    //         volume.css('background-position', '0 -75px');
    //       };
     
    //     },
     
    //     stop: function(event,ui) {
    //       tooltip.fadeOut('fast');
    //     },
    //   });
     
    // });



}());
