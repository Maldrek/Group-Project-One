// -------------------------------- Sound Call ---------------------------------- //
$(document).ready(function () {
    let audio = new Audio("..assets/media/Rain.mp3");
    audio.loop = true;
    audio.volume = 0.8;
    audio.play();
});