/* =========================
   Frame Controller
========================= */

let previousFrameBtn;
let nextFrameBtn;

let frameNumberText;
let fpsText;

let fps = 60;
let currentFrame = 0;


/* =========================
   Initialize
========================= */

function initializeFrames() {

    previousFrameBtn =
        document.getElementById("previousFrame");

    nextFrameBtn =
        document.getElementById("nextFrame");


    frameNumberText =
        document.getElementById("frameNumber");


    fpsText =
        document.getElementById("fps");


    previousFrameBtn.addEventListener(
        "click",
        previousFrame
    );


    nextFrameBtn.addEventListener(
        "click",
        nextFrame
    );


    video.addEventListener(
        "loadedmetadata",
        () => {

            fpsText.textContent = fps;

        }
    );


    video.addEventListener(
        "timeupdate",
        updateFrameNumber
    );

}


/* =========================
   Frame Movement
========================= */

function previousFrame() {

    video.pause();

    video.currentTime -= 1 / fps;

}


function nextFrame() {

    video.pause();

    video.currentTime += 1 / fps;

}


/* =========================
   Frame Counter
========================= */

function updateFrameNumber() {

    currentFrame =
        Math.floor(video.currentTime * fps);


    frameNumberText.textContent =
        currentFrame;

}
