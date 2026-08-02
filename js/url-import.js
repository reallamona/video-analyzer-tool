/* =========================
   URL Import
========================= */

let player = null;

let videoURL;
let loadURLBtn;


/* =========================
   Initialize
========================= */

function initializeURLImport() {

    videoURL =
        document.getElementById("videoURL");


    loadURLBtn =
        document.getElementById("loadURLBtn");


    loadURLBtn.addEventListener(
        "click",
        loadURLVideo
    );

}


/* =========================
   Load URL
========================= */

function loadURLVideo() {

    const url =
        videoURL.value.trim();


    if (url === "") return;


    if (
        url.includes("youtube.com") ||
        url.includes("youtu.be")
    ) {

        loadYouTube(url);

        return;

    }


    video.src = url;

}


/* =========================
   Load YouTube
========================= */

function loadYouTube(url) {

    const id =
        getYouTubeID(url);


    if (!id) {

        console.log("Invalid YouTube URL");

        return;

    }


    video.style.display =
        "none";


    document.getElementById(
        "youtubePlayer"
    ).style.display =
        "block";


    if (player) {

        player.destroy();

    }


    player =
        new YT.Player(
            "youtubePlayer",
            {

                width: "100%",

                height: "600",

                videoId: id,

                playerVars: {
                    controls: 1
                },

                events: {
                    onReady: youtubeReady
                }

            }
        );

}


/* =========================
   YouTube Ready
========================= */

function youtubeReady() {

    console.log(
        "YouTube Player Ready"
    );


    updateYouTubeDuration();

}


/* =========================
   Update Time
========================= */

function updateYouTubeTime() {

    if (!player) return;


    document.getElementById(
        "currentTime"
    ).textContent =
        formatTime(
            player.getCurrentTime()
        );

}


/* =========================
   Update Duration
========================= */

function updateYouTubeDuration() {

    if (!player) return;


    document.getElementById(
        "duration"
    ).textContent =
        formatTime(
            player.getDuration()
        );

}


/* =========================
   Extract ID
========================= */

function getYouTubeID(url) {

    const regex =
        /(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([^?&\/]+)/;


    const match =
        url.match(regex);


    return match
        ? match[1]
        : null;

}
