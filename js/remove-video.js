/* =========================
   Remove Video
========================= */

function initializeRemoveVideo() {

    const removeVideoBtn = document.getElementById(
        "removeVideoBtn"
    );

    const video = document.getElementById(
        "video"
    );

    const videoUpload = document.getElementById(
        "videoUpload"
    );

    const youtubePlayer = document.getElementById(
        "youtubePlayer"
    );


    if (!removeVideoBtn) {

        console.error(
            "Remove Video button not found"
        );

        return;
    }


    removeVideoBtn.addEventListener("click", () => {


        /*
            Remove Local Video
        */

        if (video) {

            video.pause();

            video.removeAttribute("src");

            video.load();

            video.style.display = "none";

        }


        /*
            Remove YouTube Video
        */

        if (youtubePlayer) {

            youtubePlayer.innerHTML = "";

            youtubePlayer.style.display = "none";

        }


        /*
            Reset Upload Input
        */

        if (videoUpload) {

            videoUpload.value = "";

        }


        /*
            Reset Player State
        */

        window.currentVideo = null;

        window.currentVideoFile = null;

        window.currentYoutubeVideo = null;


        /*
            Reset Timeline
        */

        const timeline = document.getElementById(
            "timeline"
        );

        if (timeline) {

            timeline.value = 0;

        }


        /*
            Reset Time Display
        */

        const videoTime = document.getElementById(
            "videoTime"
        );

        if (videoTime) {

            videoTime.textContent = "00:00";

        }


        /*
            Reset Title / Filename
        */

        const videoTitle = document.getElementById(
            "videoTitle"
        );

        if (videoTitle) {

            videoTitle.textContent = "No video loaded";

        }


        console.log(
            "Video removed"
        );

    });

}
