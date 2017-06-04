$(function() {
	'use strict';
	SCENE_APP.init();

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

	  }); // END window on scroll
	}();


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
	}
});