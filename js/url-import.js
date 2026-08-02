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
   YouTube Embed
========================= */

function loadYouTube(url) {


    const id =
        getYouTubeID(url);



    console.log(
        "YouTube ID:",
        id
    );



    if (!id) {

        console.log(
            "Invalid YouTube URL"
        );

        return;

    }



    if (
        typeof YT === "undefined" ||
        !YT.Player
    ) {

        console.log(
            "YouTube API not ready"
        );

        return;

    }



    // Hide local video

    video.style.display =
        "none";



    // Show YouTube player

    document.getElementById(
        "youtubePlayer"
    ).style.display =
        "block";



    // Remove old player

    if (player) {

        player.destroy();

    }



    player =
        new YT.Player(
            "youtubePlayer",
            {

                height: "600",

                width: "100%",


                videoId: id,


                playerVars: {

                    controls: 1

                },


                events: {

                    onReady:
                        youtubeReady

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



    setInterval(
        updateYouTubeTime,
        100
    );

}



/* =========================
   YouTube Time Update
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
   YouTube Duration
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



/* =========================
   Get Current Video Time
========================= */

function getCurrentVideoTime() {


    if (player) {

        return player.getCurrentTime();

    }


    if (video) {

        return video.currentTime;

    }


    return 0;

}
