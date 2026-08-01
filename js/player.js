/* =========================
   Video Player
========================= */

let video;
let videoUpload;
let currentTimeText;
let durationText;


function initializePlayer() {

    video = document.getElementById("video");
    videoUpload = document.getElementById("videoUpload");

    currentTimeText = document.getElementById("currentTime");
    durationText = document.getElementById("duration");


    videoUpload.addEventListener("change", loadVideo);


    video.addEventListener("loadedmetadata", () => {

        durationText.textContent = formatTime(video.duration);

    });


    video.addEventListener("timeupdate", () => {

        currentTimeText.textContent = formatTime(video.currentTime);

    });

}


/* =========================
   Load Video
========================= */

function loadVideo(event) {

    const file = event.target.files[0];

    if (!file) return;

    video.src = URL.createObjectURL(file);

}


/* =========================
   Time Formatter
========================= */

function formatTime(seconds) {

    seconds = Math.floor(seconds);

    const minutes = Math.floor(seconds / 60);

    const remainingSeconds = seconds % 60;


    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(remainingSeconds).padStart(2, "0")
    );

}
