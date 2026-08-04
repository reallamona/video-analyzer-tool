/* =========================
   Remove Video
========================= */

function initializeRemoveVideo() {

    const removeVideoBtn =
        document.getElementById(
            "removeVideoBtn"
        );


    const videoUpload =
        document.getElementById(
            "videoUpload"
        );


    const youtubePlayer =
        document.getElementById(
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


            // Remove YouTube

            if (player) {

                player.destroy();

                player = null;

            }


            if (youtubePlayer) {

                youtubePlayer.innerHTML = "";

                youtubePlayer.style.display =
                    "none";

            }


            // Remove local video

            if (video) {

                video.pause();

                video.removeAttribute(
                    "src"
                );

                video.load();

                video.style.display =
                    "block";

            }


            // Reset upload input

            if (videoUpload) {

                videoUpload.value = "";

            }


            // Reset time display

            if (currentTimeText) {

                currentTimeText.textContent =
                    "00:00:00.000";

            }


            if (durationText) {

                durationText.textContent =
                    "00:00:00.000";

            }


            console.log(
                "Video removed"
            );

        }
    );

}
