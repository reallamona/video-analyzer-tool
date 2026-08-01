/* =========================
   Screenshot Module
========================= */

let canvas;
let ctx;
let captureBtn;
let screenshots;

let savedScreenshots = [];



function initializeScreenshots() {


    canvas = document.getElementById("canvas");

    ctx = canvas.getContext("2d");


    captureBtn = document.getElementById("captureBtn");

    screenshots =
        document.getElementById("screenshots");



    savedScreenshots =
        JSON.parse(
            localStorage.getItem("screenshots")
        ) || [];



    captureBtn.addEventListener(
        "click",
        captureFrame
    );


    renderScreenshots();

}



/* =========================
   Capture Frame
========================= */

function captureFrame() {


    if (!video.videoWidth) return;



    canvas.width =
        video.videoWidth;


    canvas.height =
        video.videoHeight;



    ctx.drawImage(
        video,
        0,
        0
    );



    const image =
        canvas.toDataURL(
            "image/png"
        );



    savedScreenshots.push({

        image: image,

        time: video.currentTime

    });



    saveScreenshots();


    renderScreenshots();

}



/* =========================
   Save Screenshots
========================= */

function saveScreenshots() {

    localStorage.setItem(
        "screenshots",
        JSON.stringify(savedScreenshots)
    );

}



/* =========================
   Display Screenshots
========================= */

function renderScreenshots() {


    screenshots.innerHTML = "";



    savedScreenshots.forEach(
        (shot, index) => {


        const container =
            document.createElement("div");



        const img =
            document.createElement("img");


        img.src =
            shot.image;



        const label =
            document.createElement("p");


        label.textContent =
            formatTime(shot.time);



        const download =
            document.createElement("a");



        download.href =
            shot.image;


        download.download =
            `frame-${Math.floor(shot.time)}.png`;


        download.textContent =
            "Download Screenshot";



        const deleteBtn =
            document.createElement("button");



        deleteBtn.textContent =
            "Delete";



        deleteBtn.onclick = () => {


            savedScreenshots.splice(
                index,
                1
            );


            saveScreenshots();


            renderScreenshots();


        };



        container.appendChild(img);

        container.appendChild(label);

        container.appendChild(download);

        container.appendChild(deleteBtn);



        screenshots.prepend(container);


    });

}
