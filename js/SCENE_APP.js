var SCENE_APP = {

	$sound: null,
	$audio: null,
	$video: null,
	$animation: null,

	$videoA: null,
	$keyA: null,
	$videoS: null,
	$keyS: null,
	$videoD: null,
	$keyD: null,
	$videoF: null,
	$keyF: null,
	$videoG: null,
	$keyG: null,
	$videoH: null,
	$keyH: null,
	$videoJ: null,
	$keyJ: null,
	$videoK: null,
	$keyK: null,
	$videoL: null,
	$keyL: null,


	init: function() {

		var SA = SCENE_APP;
		var setHTMLObjects = function() {
			SA.$audio = $('#audio');
			SA.$sound = $('#sound');
			SA.$video = $('#video');
			SA.$animation = $('#animation');

			SA.$videoA = $('#videoA');
			SA.$keyA = $('#keyA');
			SA.$videoS = $('#videoS');
			SA.$keyS = $('#keyS');
			SA.$videoD = $('#videoD');
			SA.$keyD = $('#keyD');
			SA.$videoF = $('#videoF');
			SA.$keyF = $('#keyF');
			SA.$videoG = $('#videoG');
			SA.$keyG = $('#keyG');
			SA.$videoH = $('#videoH');
			SA.$keyH = $('#keyH');
			SA.$videoJ = $('#videoJ');
			SA.$keyJ = $('#keyJ');
			SA.$videoK = $('#videoK');
			SA.$keyK = $('#keyK');
			SA.$videoL = $('#videoL');
			SA.$keyL = $('#keyL');



		}();

		var setAttributes = function() {
			SA.$soundSource = SCENE_MODULE.getScene().sound;
			sound = SA.$soundSource;
			SA.$sound.attr('src', sound);

			SA.$animationSource = SCENE_MODULE.getScene().animation;
			animation = SA.$animationSource;
			SA.$animation.attr('src', animation);

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


			SA.$audio[0].load();
			SA.$video[0].load();

			SA.$videoA[0].load();
			SA.$videoS[0].load();
			SA.$videoD[0].load();
			SA.$videoF[0].load();
			SA.$videoG[0].load();
			SA.$videoH[0].load();
			SA.$videoJ[0].load();
			SA.$videoK[0].load();
			SA.$videoL[0].load();

			SA.$audio[0].currentTime = 0;
			SA.$video[0].currentTime = 0;

			SA.$audio[0].play();
			SA.$video[0].play();

		}();

	}
};
