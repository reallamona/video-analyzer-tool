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

        video.pause();

        video.src = "";

        video.load();


        if (videoUpload) {
            videoUpload.value = "";
        }


        if (youtubePlayer) {
            youtubePlayer.innerHTML = "";
        }


        console.log("Video removed");

    });

}
