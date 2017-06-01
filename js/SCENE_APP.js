var SCENE_APP = {

	$sound: null,
	$audio: null,

	init: function() {

		var SA = SCENE_APP;
		var setHTMLObjects = function() {
			SA.$sound = $('#sound');
			SA.$audio = $('#audio');
		}();

		var setAttributes = function() {
			SA.$soundSource = SCENE_MODULE.getScene().sound;
			sound = SA.$soundSource;

			SA.$sound.attr('src', sound);

			SA.$audio[0].load();
			SA.$audio[0].play();
		}();

	}
};