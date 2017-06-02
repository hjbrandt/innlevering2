var SCENE_APP = {

	$sound: null,
	$audio: null,
	$video: null,
	$animation: null,

	$keyA: null,
	$keyS: null,
	$keyD: null,
	$keyF: null,
	$keyG: null,
	$keyH: null,
	$keyJ: null,
	$keyK: null,
	$keyL: null,


	init: function() {

		var SA = SCENE_APP;
		var setHTMLObjects = function() {
			SA.$audio = $('#audio');
			SA.$sound = $('#sound');
			SA.$video = $('#video');
			SA.$animation = $('#animation');

			SA.$keyA = $('#a');
			SA.$keyS = $('#s');
			SA.$keyD = $('#d');
			SA.$keyF = $('#f');
			SA.$keyG = $('#g');
			SA.$keyH = $('#h');
			SA.$keyJ = $('#j');
			SA.$keyK = $('#k');
			SA.$keyL = $('#l');

		}();

		var setAttributes = function() {
			SA.$soundSource = SCENE_MODULE.getScene().sound;
			sound = SA.$soundSource;
			SA.$sound.attr('src', sound);

			SA.$animationSource = SCENE_MODULE.getScene().animation;
			animation = SA.$animationSource;
			SA.$animation.attr('src', animation);

			SA.$audio[0].load();
			SA.$video[0].load();

			SA.$audio[0].currentTime = 0;
			SA.$video[0].currentTime = 0;

			SA.$audio[0].play();
			SA.$video[0].play();

			SA.$keyASource = SCENE_MODULE.getScene().keyA;
			keyA = SA.$keyASource;
			SA.$keyA.attr('src', keyA);

			SA.$keySSource = SCENE_MODULE.getScene().keyS;
			keyS = SA.$keySSource;
			SA.$keyS.attr('src', keyS);

			SA.$keyDSource = SCENE_MODULE.getScene().keyD;
			keyD = SA.$keyDSource;
			SA.$keyD.attr('src', keyD);

			SA.$keyFSource = SCENE_MODULE.getScene().keyF;
			keyF = SA.$keyFSource;
			SA.$keyF.attr('src', keyF);

			SA.$keyGSource = SCENE_MODULE.getScene().keyG;
			keyG = SA.$keyGSource;
			SA.$keyG.attr('src', keyG);

			SA.$keyHSource = SCENE_MODULE.getScene().keyH;
			keyH = SA.$keyHSource;
			SA.$keyH.attr('src', keyH);

			SA.$keyJSource = SCENE_MODULE.getScene().keyJ;
			keyJ = SA.$keyJSource;
			SA.$keyJ.attr('src', keyJ);

			SA.$keyKSource = SCENE_MODULE.getScene().keyK;
			keyK = SA.$keyKSource;
			SA.$keyK.attr('src', keyK);

			SA.$keyLSource = SCENE_MODULE.getScene().keyL;
			keyL = SA.$keyLSource;
			SA.$keyL.attr('src', keyL);

		}();

	}
};
