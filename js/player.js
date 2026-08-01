/* =========================
   Video Player Controls
========================= */

const video = document.getElementById("video");
const videoUpload = document.getElementById("videoUpload");

const currentTimeText = document.getElementById("currentTime");
const durationText = document.getElementById("duration");


/* =========================
   Load Video
========================= */

videoUpload.addEventListener("change", (event) => {

    const file = event.target.files[0];

    if (!file) return;

    video.src = URL.createObjectURL(file);

});


/* =========================
   Video Metadata
========================= */

video.addEventListener("loadedmetadata", () => {

    durationText.textContent = formatTime(video.duration);

});


/* =========================
   Time Updates
========================= */

video.addEventListener("timeupdate", () => {

    currentTimeText.textContent = formatTime(video.currentTime);

});


/* =========================
   Time Formatter
========================= */

function formatTime(seconds) {

    const minutes = Math.floor(seconds / 60);

    const remainingSeconds = Math.floor(seconds % 60);

    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(remainingSeconds).padStart(2, "0")
    );

}
