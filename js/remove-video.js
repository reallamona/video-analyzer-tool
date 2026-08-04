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


        // Remove local video
        if (video) {

            video.pause();

            video.removeAttribute("src");

            video.load();

            video.style.display = "none";

        }


        // Clear uploaded file input
        if (videoUpload) {

            videoUpload.value = "";

        }


        // Remove YouTube video
        if (youtubePlayer) {

            youtubePlayer.innerHTML = "";

            youtubePlayer.style.display = "none";

        }


        // Reset video data
        window.currentVideo = null;
        window.currentVideoFile = null;


        // Reset timeline
        const timeline = document.getElementById(
            "timeline"
        );

        if (timeline) {

            timeline.value = 0;

        }


        // Reset time display
        const videoTime = document.getElementById(
            "videoTime"
        );

        if (videoTime) {

            videoTime.textContent = "00:00";

        }


        console.log(
            "Video removed"
        );

    });

}
