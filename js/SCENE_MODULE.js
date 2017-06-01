var SCENE_MODULE = (function() {

	var scenesJSON =[

		{
			"scene" : "1",
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
			"keyC" : "media/img/key1/tut.webm"
		},
		{
			"scene" : "2",
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
			"keyC" : "media/img/key2/tut.webm"
		},
		{
			"scene" : "3",
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
			"keyC" : "media/img/key3/tut.webm"
		},
		{
			"scene" : "4",
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
			"keyC" : "media/img/key4/tut.webm"
		}
	];

	var getScene = function() {

		if($('#scene').hasClass('scene-1')) {
			return scenesJSON[0];
		}
		if($('#scene').hasClass('scene-2')) {
			return scenesJSON[1];
		}
		if($('#scene').hasClass('scene-3')) {
			return scenesJSON[2];
		}
		if($('#scene').hasClass('scene-4')) {
			return scenesJSON[3];
		}
	}; // END getScene

		return {
			getScene:getScene
		};// END getScene


}());