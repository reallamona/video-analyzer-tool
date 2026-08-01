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


        <iframe

            width="100%"

            height="600"

            src="https://www.youtube.com/embed/${id}"

            frameborder="0"

            allowfullscreen>

        </iframe>


    `;

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
