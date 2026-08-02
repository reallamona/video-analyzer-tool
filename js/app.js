/* =========================
   Video Analyzer App
========================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        console.log(
            "Video Analyzer loaded"
        );


        initializePlayer();
        initializeNotes();
        initializeScreenshots();
        initializeFrames();
        initializeURLImport();

    }
);
