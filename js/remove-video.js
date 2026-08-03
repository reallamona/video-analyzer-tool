const removeVideoBtn = document.getElementById("removeVideoBtn");
const video = document.getElementById("video");
const videoUpload = document.getElementById("videoUpload");
const youtubePlayer = document.getElementById("youtubePlayer");


removeVideoBtn.addEventListener("click", () => {

    // Stop video playback
    video.pause();

    // Remove local video
    video.removeAttribute("src");
    video.load();

    // Clear file input
    videoUpload.value = "";

    // Remove YouTube video
    youtubePlayer.innerHTML = "";

    console.log("Video removed");

});
