var SCENE_APP = {


	$sound: null,

	init: function() {

		var SA = SCENE_APP;
		var setHTMLObjects = function() {
			SA.$sound = $('#sound');
			console.log(SA.$sound);
			// body...
		}();
		var setAttributes = function() {
			SA.$soundSource = SCENE_MODULE.getScene().sound;
			SA.$soundSource = sound;

			SA.$sound.Attr('src', sound);
			// body...
		}();
		// body...
	}

	// body...
};