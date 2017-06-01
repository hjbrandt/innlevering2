var SCENE_APP = {

	$sound: null,
	$audio: null,
	$video: null,
	$animation: null,

	init: function() {

		var SA = SCENE_APP;
		var setHTMLObjects = function() {
			SA.$audio = $('#audio');
			SA.$sound = $('#sound');
			SA.$video = $('#video');
			SA.$animation = $('#animation');
		}();

		var setAttributes = function() {
			SA.$soundSource = SCENE_MODULE.getScene().sound;
			sound = SA.$soundSource;

			SA.$animationSource = SCENE_MODULE.getScene().animation;
			animation = SA.$animationSource;
			
			SA.$sound.attr('src', sound);
			SA.$animation.attr('src', animation);

			SA.$audio[0].load();
			SA.$video[0].load();

			SA.$audio[0].currentTime = 0;
			SA.$video[0].currentTime = 0;

			SA.$audio[0].play();
			SA.$video[0].play();
		}();

	}
};