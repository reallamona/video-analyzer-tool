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


    removeVideoBtn.addEventListener(
        "click",
        () => {

            console.log(
                "Removing video..."
            );


            // Stop video
            video.pause();


            // Clear video source
            video.removeAttribute(
                "src"
            );

            video.load();


            // Clear file upload
            if (videoUpload) {

                videoUpload.value = "";

            }


            // Remove YouTube content
            if (youtubePlayer) {

                youtubePlayer.innerHTML = "";

            }


            console.log(
                "Video removed"
            );

        }
    );

}
