$(document).ready(function() {

    playMusic();

    function playMusic() {
        var cantinaband1 = document.createElement("audio");
        var cantinaband2 = document.createElement("audio");
        cantinaband1.setAttribute("src", "assets/audio/cantinaband1.mp3");
        cantinaband2.setAttribute("src", "assets/audio/cantinaband2.mp3");
        var setList = [cantinaband1, cantinaband2];
        cantinaband1.play();
    };

    // var audioSource = new Array();
    // audioSource[0] = "assets/audio/cantinaband1.mp3";
    // audioSource[1] = "assets/audio/cantinaband2.mp3";
    // var audioCount = audioSource.length;

    
});