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


        // Stop video
        if (video) {

            video.pause();

            video.removeAttribute("src");

            video.load();

        }


        // Clear uploaded file
        if (videoUpload) {

            videoUpload.value = "";

        }


        // Remove YouTube content
        if (youtubePlayer) {

            youtubePlayer.innerHTML = "";

        }


        // Reset global video state
        window.currentVideo = null;
        window.currentVideoFile = null;


        // Reset timeline if it exists
        const timeline = document.getElementById(
            "timeline"
        );

        if (timeline) {

            timeline.value = 0;

        }


        console.log(
            "Video removed"
        );

    });

}
