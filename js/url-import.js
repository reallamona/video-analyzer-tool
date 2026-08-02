/* =========================
   URL Import
========================= */

let player;

let videoURL;
let loadURLBtn;



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

function loadYouTube(url) {

    const id =
        getYouTubeID(url);


    if (!id) {

        console.log("Invalid YouTube URL");

        return;

    }


    const container =
        document.querySelector(".video-container");


    container.innerHTML = `
        <div id="youtubePlayer"></div>
    `;



    if (
        typeof YT === "undefined"
        ||
        !YT.Player
    ) {

        console.log("YouTube API not ready");

        return;

    }



    player =
        new YT.Player(
            "youtubePlayer",
            {

                height: "100%",

                width: "100%",


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
   YouTube Embed
========================= */

function loadYouTube(url) {


    const id =
        getYouTubeID(url);



    if (!id) return;



    document.querySelector(
        ".video-container"
    ).innerHTML = `

        <div id="youtubePlayer"></div>

    `;



    player =
        new YT.Player(
            "youtubePlayer",
            {

                height: "600",

                width: "100%",

                videoId: id,

                events: {

                    onReady: youtubeReady

                }

            }
        );

}



/* =========================
   YouTube Ready
========================= */

function youtubeReady(event) {


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



    const currentTime =
        player.getCurrentTime();



    document.getElementById(
        "currentTime"
    ).textContent =
        formatTime(currentTime);

}



/* =========================
   YouTube Duration Update
========================= */

function updateYouTubeDuration() {


    if (!player) return;



    const duration =
        player.getDuration();



    document.getElementById(
        "duration"
    ).textContent =
        formatTime(duration);

}


/* =========================
   Extract ID
========================= */

function getYouTubeID(url) {


    const regex =
        /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;



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
