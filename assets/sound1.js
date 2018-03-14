// -------------------------------- Sound Call ---------------------------------- //
$(document).ready(function () {
    let audio = new Audio("../sounds/Rain.mp3");
    audio.loop = true;
    audio.volume = 0.8;
    audio.play();
});