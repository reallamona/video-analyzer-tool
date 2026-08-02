/* =========================
   Video Controller
========================= */

function isYouTube() {

    return player != null;

}


/* =========================
   Get Current Time
========================= */

function getCurrentTime() {

    if (isYouTube()) {

        return player.getCurrentTime();

    }


    if (video) {

        return video.currentTime;

    }


    return 0;

}
