
var SCROLL_MODULE = (function(){

	var total = 0;
	var newPosition = 0;
	var increment = 1;

	var scroll = function() {

	$(window).on('scroll', function() {

		total += increment;
		var position = window.scrollY;

		console.log(total);

		if (position < newPosition) {

			newPosition = position;

		} else {

			newPosition = position;
		}

		});

		var getScroll = function(){

			return scroll();
		};

		return {

			getScroll: getScroll

		};

	}();
	// body...
}());
