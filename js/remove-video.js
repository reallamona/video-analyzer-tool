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


            /*
                Remove YouTube
            */

            if (player) {

                player.destroy();

                player = null;

            }


            if (youtubePlayer) {

                youtubePlayer.innerHTML = "";

                youtubePlayer.style.display =
                    "none";

            }


           if (video) {
              
              video.style.display = "block";
           
           }
           

            /*
                Remove Local Video
            */

            if (video) {

                video.pause();

                video.removeAttribute(
                    "src"
                );

                video.load();

                video.style.display =
                    "block";

            }


            /*
                Reset Upload
            */

            if (videoUpload) {

                videoUpload.value = "";

            }


            /*
                Reset UI
            */

            if (currentTimeText) {

                currentTimeText.textContent =
                    "00:00:00:000";

            }


            if (durationText) {

                durationText.textContent =
                    "00:00:00:000";

            }


            /*
                Clear URL field
            */

            if (videoURL) {

                videoURL.value = "";

            }


            console.log(
                "Video removed"
            );

        }
    );

}
