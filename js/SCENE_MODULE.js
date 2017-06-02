var SCENE_MODULE = (function() {

	var scenesJSON =[

		{
			"scene" : "1",
			"sound" : "media/audio/sound1.mp3",
			"animation" : "media/img/scene1.webm",
			"keyA" : "media/img/key1/ambulanse.webm",
			"keyS" : "media/img/key1/brems.webm",
			"keyD" : "media/img/key1/dor.webm",
			"keyF" : "media/img/key1/bjeff.webm",
			"keyG" : "media/img/key1/krake.webm",
			"keyH" : "media/img/key1/make.webm",
			"keyJ" : "media/img/key1/melding.webm",
			"keyK" : "media/img/key1/motorsykkel.webm",
			"keyL" : "media/img/key1/tut.webm"
		},
		{
			"scene" : "2",
			"sound" : "media/audio/sound2.mp3",
			"animation" : "media/img/scene2.webm",
			"keyA" : "media/img/key2/ambulanse.webm",
			"keyS" : "media/img/key2/brems.webm",
			"keyD" : "media/img/key2/dor.webm",
			"keyF" : "media/img/key2/bjeff.webm",
			"keyG" : "media/img/key2/krake.webm",
			"keyH" : "media/img/key2/make.webm",
			"keyJ" : "media/img/key2/melding.webm",
			"keyK" : "media/img/key2/motorsykkel.webm",
			"keyL" : "media/img/key2/tut.webm"
		},
		{
			"scene" : "3",
			"sound" : "media/audio/sound3.mp3",
			"animation" : "media/img/scene3.webm",
			"keyA" : "media/img/key3/ambulanse.webm",
			"keyS" : "media/img/key3/brems.webm",
			"keyD" : "media/img/key3/dor.webm",
			"keyF" : "media/img/key3/bjeff.webm",
			"keyG" : "media/img/key3/krake.webm",
			"keyH" : "media/img/key3/make.webm",
			"keyJ" : "media/img/key3/melding.webm",
			"keyK" : "media/img/key3/motorsykkel.webm",
			"keyL" : "media/img/key3/tut.webm"
		},
		{
			"scene" : "4",
			"sound" : "media/audio/sound4.mp3",
			"animation" : "media/img/scene4.webm",
			"keyA" : "media/img/key4/ambulanse.webm",
			"keyS" : "media/img/key4/brems.webm",
			"keyD" : "media/img/key4/dor.webm",
			"keyF" : "media/img/key4/bjeff.webm",
			"keyG" : "media/img/key4/krake.webm",
			"keyH" : "media/img/key4/make.webm",
			"keyJ" : "media/img/key4/melding.webm",
			"keyK" : "media/img/key4/motorsykkel.webm",
			"keyL" : "media/img/key4/tut.webm"
		},
		{
			"scene" : "5",
			"sound" : "media/audio/sound5.mp3",
			"animation" : "media/img/scene5.webm",
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
		if($('#scene').hasClass('scene-5')) {
			return scenesJSON[4];
		}
	}; // END getScene

		return {
			getScene:getScene
		};// END getScene


}());
