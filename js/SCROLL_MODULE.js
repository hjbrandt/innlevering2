
var SCROLL_MODULE = (function(){

	var total = 0;
	var newPosition = 0;
	var increment = 1;

	var scroll = function() {

	$(window).on('scroll', function() {
		
		total += increment;
		var position = window.scrollY;

		if (position < newPosition) {

			newPosition = position;
			console.log("you are scrolling UP");

		} else {

			newPosition = position;
			console.log("you are scrolling DOWN");
		}

		// console.log(scrollMove);
		// console.log(scene1);
		console.log(total);
		console.log(position);
		
		});

		var getScroll = function(){
			console.log(scroll);
			return scroll();
		};

		return {

			getScroll: getScroll

		};

	}();
	// body...
}());