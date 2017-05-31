$(function () {
	'use strict';
	console.log("scene.js is loaded");

	$("#am1").get(0).play();

	function debounce(func, wait = 20, immediate = true) {
	  var timeout;
	  return function() {
	    var context = this, args = arguments;
	    var later = function() {
	      timeout = null;
	      if (!immediate) func.apply(context, args);
	    };
	    var callNow = immediate && !timeout;
	    clearTimeout(timeout);
	    timeout = setTimeout(later, wait);
	    if (callNow) func.apply(context, args);
	  };
	}

	$(document).on('scroll', function checkScene(e) {
		
		var scenes = $('.scene').each(function(scene) {

			console.log(scene.height);
			
			var changeAt = (window.scrollY + window.innerHeight) - scene.height / 2;

			var sceneBottom = scene.offsetTop + scene.height;
			var halfShown = changeAt > scene.offsetTop;
			var notScrolledPast = window.scrollY < sceneBottom;
			if (halfShown && notScrolledPast) {
			$('.scene').addClass('active');
			} else {
				$('.scene').removeClass('active');
			}
		});

	});



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