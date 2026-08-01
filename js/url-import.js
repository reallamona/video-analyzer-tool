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
