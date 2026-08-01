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


    return video.currentTime;

}



/* =========================
   Get Duration
========================= */

function getDuration() {


    if (isYouTube()) {

        return player.getDuration();

    }


    return video.duration;

}



/* =========================
   Seek Video
========================= */

function seekVideo(time) {


    if (isYouTube()) {


        player.seekTo(
            time,
            true
        );


        return;

    }



    video.currentTime =
        time;

}



/* =========================
   Move By Frames
========================= */

function moveByFrames(frames) {


    const seconds =
        frames / fps;


    seekVideo(
        getCurrentTime() + seconds
    );

}
