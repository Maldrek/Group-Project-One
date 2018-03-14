// -------------------------------- Sound Call ---------------------------------- //
$(document).ready(function () {
    let audio = new Audio("../sounds/Fireplace1.mp3");
    audio.loop = true;
    audio.volume = 0.4;
    audio.play();
});