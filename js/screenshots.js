/* =========================
   Screenshot Module
========================= */

let canvas;
let ctx;
let captureBtn;
let screenshots;


function initializeScreenshots() {


    canvas = document.getElementById("canvas");

    ctx = canvas.getContext("2d");


    captureBtn = document.getElementById("captureBtn");

    screenshots = document.getElementById("screenshots");


    captureBtn.addEventListener(
        "click",
        captureFrame
    );

}


/* =========================
   Capture Frame
========================= */

function captureFrame() {


    if (!video.videoWidth) return;


    canvas.width = video.videoWidth;

    canvas.height = video.videoHeight;


    ctx.drawImage(video, 0, 0);


    const image =
        canvas.toDataURL("image/png");


    const container =
        document.createElement("div");


    const img =
        document.createElement("img");


    img.src = image;


    const label =
        document.createElement("p");


    label.textContent =
        formatTime(video.currentTime);


    const download =
        document.createElement("a");


    download.href = image;

    download.download =
        `frame-${Math.floor(video.currentTime)}.png`;

    download.textContent =
        "Download Screenshot";


    container.appendChild(img);

    container.appendChild(label);

    container.appendChild(download);


    screenshots.prepend(container);

}
