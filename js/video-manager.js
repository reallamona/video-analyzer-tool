/* =========================
   Video Manager
========================= */

const VideoManager = {

    video: null,

    youtubePlayer: null,

    type: null,


    initialize() {

        this.video =
            document.getElementById("video");


        console.log(
            "Video Manager Initialized"
        );

    }

};
