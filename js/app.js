/* =========================
   Elements
========================= */

const videoUpload = document.getElementById("videoUpload");
const video = document.getElementById("video");

const currentTimeText = document.getElementById("currentTime");
const durationText = document.getElementById("duration");

const noteInput = document.getElementById("noteInput");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesList = document.getElementById("notesList");

const captureBtn = document.getElementById("captureBtn");
const screenshots = document.getElementById("screenshots");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/* =========================
   Data
========================= */

const notes = [];

/* =========================
   Helpers
========================= */

function formatTime(seconds) {

    seconds = Math.floor(seconds);

    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

}

/* =========================
   Upload Video
========================= */

videoUpload.addEventListener("change", (event) => {

    const file = event.target.files[0];

    if (!file) return;

    video.src = URL.createObjectURL(file);

});

/* =========================
   Metadata
========================= */

video.addEventListener("loadedmetadata", () => {

    durationText.textContent = formatTime(video.duration);

});

/* =========================
   Update Current Time
========================= */

video.addEventListener("timeupdate", () => {

    currentTimeText.textContent = formatTime(video.currentTime);

});

/* =========================
   Add Note
========================= */

addNoteBtn.addEventListener("click", () => {

    const text = noteInput.value.trim();

    if (text === "") return;

    const note = {
        time: video.currentTime,
        text: text
    };

    notes.push(note);

    renderNotes();

    noteInput.value = "";

});

/* =========================
   Render Notes
========================= */

function renderNotes() {

    notesList.innerHTML = "";

    notes.forEach(note => {

        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${formatTime(note.time)}</strong><br>
            ${note.text}
        `;

        li.addEventListener("click", () => {

            video.currentTime = note.time;

            video.play();

        });

        notesList.appendChild(li);

    });

}

/* =========================
   Capture Screenshot
========================= */

captureBtn.addEventListener("click", () => {

    if (!video.videoWidth) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    ctx.drawImage(video, 0, 0);

    const image = canvas.toDataURL("image/png");

    const container = document.createElement("div");

    container.style.marginBottom = "20px";

    const img = document.createElement("img");
    img.src = image;

    const label = document.createElement("p");
    label.textContent = formatTime(video.currentTime);

    const download = document.createElement("a");
    download.href = image;
    download.download = `frame-${Math.floor(video.currentTime)}.png`;
    download.textContent = "Download Screenshot";

    container.appendChild(img);
    container.appendChild(label);
    container.appendChild(download);

    screenshots.prepend(container);

});
