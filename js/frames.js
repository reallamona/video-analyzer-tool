/* =========================
   Frame Controller
========================= */

let fps = 60;

let previousFrameBtn;
let nextFrameBtn;

let back5Btn;
let back10Btn;

let forward5Btn;
let forward10Btn;

let frameNumberText;


/* =========================
   Initialize
========================= */

function initializeFrames() {

    previousFrameBtn =
        document.getElementById("previousFrame");

    nextFrameBtn =
        document.getElementById("nextFrame");


    back5Btn =
        document.getElementById("back5");

    back10Btn =
        document.getElementById("back10");


    forward5Btn =
        document.getElementById("forward5");

    forward10Btn =
        document.getElementById("forward10");


    frameNumberText =
        document.getElementById("frameNumber");



    nextFrameBtn.addEventListener(
        "click",
        () => moveFrames(1)
    );


    previousFrameBtn.addEventListener(
        "click",
        () => moveFrames(-1)
    );


    forward5Btn.addEventListener(
        "click",
        () => moveFrames(5)
    );


    back5Btn.addEventListener(
        "click",
        () => moveFrames(-5)
    );


    forward10Btn.addEventListener(
        "click",
        () => moveFrames(10)
    );


    back10Btn.addEventListener(
        "click",
        () => moveFrames(-10)
    );


    video.addEventListener(
        "timeupdate",
        updateFrameNumber
    );

}



/* =========================
   Move Frames
========================= */

function moveFrames(amount) {

    video.pause();

    video.currentTime += amount / fps;

}



/* =========================
   Update Frame Number
========================= */

function updateFrameNumber() {

    const frame =
        Math.floor(video.currentTime * fps);


    frameNumberText.textContent = frame;

}
