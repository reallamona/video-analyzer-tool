/* =========================
   Screenshot Module
========================= */

let canvas;
let ctx;

let captureBtn;
let screenshots;

let savedScreenshots = [];



/* =========================
   Initialize
========================= */

function initializeScreenshots() {


    canvas =
        document.getElementById("canvas");


    ctx =
        canvas.getContext("2d");



    captureBtn =
        document.getElementById("captureBtn");



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


        container.className =
            "screenshot-item";



        container.innerHTML = `

            <img src="${shot.image}">


            <div class="item-header">


                <p>
                    ${formatTime(shot.time)}
                </p>



                <button class="delete-btn">
                    Delete
                </button>


            </div>



            <a
                href="${shot.image}"
                download="frame-${Math.floor(shot.time)}.png">

                Download Screenshot

            </a>

        `;



        const deleteBtn =
            container.querySelector(
                ".delete-btn"
            );



        deleteBtn.onclick = () => {


            savedScreenshots.splice(
                index,
                1
            );



            saveScreenshots();


            renderScreenshots();


        };



        screenshots.prepend(container);


    });

}
