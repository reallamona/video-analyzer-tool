/* =========================
   Capture Frame
========================= */

function captureFrame() {


    if (isYouTube()) {


        const videoId =
            player.getVideoData().video_id;


        const image =
            `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;



        savedScreenshots.push({

            image: image,

            time:
                getCurrentTime()

        });



        saveScreenshots();

        renderScreenshots();


        return;

    }



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

        time:
            getCurrentTime()

    });



    saveScreenshots();


    renderScreenshots();

}
