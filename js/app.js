/* =========================
   Video Reviewer App
========================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        console.log(
            "Video Reviewer loaded"
        );


        initializePlayer();
        initializeNotes();
        initializeScreenshots();
        initializeFrames();
        initializeURLImport();
        initializeRemoveVideo();

    }
);
