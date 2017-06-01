$(function() {
	'use strict';
	SCENE_APP.init();

	// SCROLL FUNCTION
	var total = 0;
	var newPosition = 0;
	var increment = 1;
	var move = 0;

	// SCENE FUNCTION
	var scene1 = false;
	var scene2 = false;
	var scene3 = false;
	var scene4 = false;

	var scroll = function() {

	$(window).on('scroll', function() {
		
		total += increment;
		var position = window.scrollY;

		if (position < newPosition) {

			move = 1;

			newPosition = position;
			getScene();
			// moveUp();g
			console.log("you are scrolling UP");

		} else {

			move = 2;

			newPosition = position;
			getScene();
			// moveDown();
			console.log("you are scrolling DOWN");
		}

		console.log(move);
		console.log(total);

		});

	}(); // END var = scroll()

	function getScene() {

		if(total >= 200 && total < 400) {
			$('#scene')
				.removeClass("scene-1")
				.addClass("scene-2");
		}
		if(total >= 400 && total < 600) {
			$('#scene')
				.removeClass("scene-2")
				.addClass("scene-3");
		}
		if(total >= 600 && total < 800) {
			$('#scene')
				.removeClass("scene-3")
				.addClass("scene-4");
		}
		if(total >= 1000) {
			$('#scene')
				.removeClass("scene-4")
				.addClass("scene-1");
				total = 0;
		}

	} // END getScene

	// function moveUp() {
	// 	if(move == 1) {

	// 	}
	// }

	

});