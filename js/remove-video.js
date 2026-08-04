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


            // Remove YouTube player
            if (typeof player !== "undefined" && player) {

                player.destroy();

                player = null;

            }


            // Remove local video
            if (typeof video !== "undefined" && video) {

                video.pause();

                video.removeAttribute(
                    "src"
                );

                video.load();

            }


            // Clear upload input
            if (videoUpload) {

                videoUpload.value = "";

            }


            // Clear YouTube container
            if (youtubePlayer) {

                youtubePlayer.innerHTML = "";

            }


            // Reset video display
            const container =
                document.querySelector(
                    ".video-container"
                );


            if (container) {

                container.innerHTML = `

                    <div class="video-placeholder">
                        No video loaded
                    </div>

                `;

            }


            // Reset time
            if (currentTimeText) {

                currentTimeText.textContent =
                    "00:00:00:000";

            }


            if (durationText) {

                durationText.textContent =
                    "00:00:00:000";

            }


            console.log(
                "Video removed"
            );

        }
    );

}
