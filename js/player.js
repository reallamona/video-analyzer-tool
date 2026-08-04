/* =========================
   Video Player
========================= */

let video;
let videoUpload;
let currentTimeText;
let durationText;


/* =========================
   Initialize Player
========================= */

function initializePlayer() {

    video =
        document.getElementById("video");

    videoUpload =
        document.getElementById("videoUpload");

    currentTimeText =
        document.getElementById("currentTime");

    durationText =
        document.getElementById("duration");


    videoUpload.addEventListener(
        "change",
        loadVideo
    );


    video.addEventListener(
        "loadedmetadata",
        () => {

            durationText.textContent =
                formatTime(video.duration);

        }
    );


    video.addEventListener(
        "timeupdate",
        () => {

            currentTimeText.textContent =
                formatTime(video.currentTime);

        }
    );

}


/* =========================
   Load Local Video
========================= */

function loadVideo(event) {

    const file =
        event.target.files[0];


    if (!file) return;


   if (typeof player !== "undefined" && player) {

    player.destroy();

    player = null;
   
   }


    const container =
        document.querySelector(
            ".video-container"
        );


    container.innerHTML = `

        <video
            id="video"
            controls>
        </video>

    `;


    video =
        document.getElementById("video");


    video.src =
        URL.createObjectURL(file);


    video.addEventListener(
        "loadedmetadata",
        () => {

            durationText.textContent =
                formatTime(video.duration);

        }
    );


    video.addEventListener(
        "timeupdate",
        () => {

            currentTimeText.textContent =
                formatTime(video.currentTime);

        }
    );

}


/* =========================
   Time Format
========================= */

function formatTime(seconds) {

    if (isNaN(seconds)) {

        return "00:00:00:000";

    }


    const hours =
        Math.floor(seconds / 3600);


    const minutes =
        Math.floor(
            (seconds % 3600) / 60
        );


    const secs =
        Math.floor(seconds % 60);


    const milliseconds =
        Math.floor(
            (seconds % 1) * 1000
        );


    return (
        String(hours).padStart(2, "0")
        + ":"
        +
        String(minutes).padStart(2, "0")
        + ":"
        +
        String(secs).padStart(2, "0")
        + ":"
        +
        String(milliseconds).padStart(3, "0")
    );

}
