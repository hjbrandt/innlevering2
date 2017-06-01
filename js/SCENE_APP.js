var SCENE_APP = {

	$sound: null,

	init: function() {

		var SA = SCENE_APP;
		var setHTMLObjects = function() {
			SA.$sound = $('#am1');
			console.log(SA.$sound);
			// body...
		}();
		var setAttributes = function() {
			SA.$soundSource = SCENE_MODULE.getScene().sound;
			// body...
		}();
		// body...
	}

	// body...
};