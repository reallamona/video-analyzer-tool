/* =========================
   Notes Module
========================= */

let notes = [];

let noteInput;
let addNoteBtn;
let notesList;


function initializeNotes() {

    noteInput = document.getElementById("noteInput");
    addNoteBtn = document.getElementById("addNoteBtn");
    notesList = document.getElementById("notesList");


    addNoteBtn.addEventListener("click", addNote);

}


/* =========================
   Add Note
========================= */

function addNote() {

    const text = noteInput.value.trim();

    if (text === "") return;


    notes.push({

        time: video.currentTime,
        text: text

    });


    renderNotes();

    noteInput.value = "";

}


/* =========================
   Display Notes
========================= */

function renderNotes() {

    notesList.innerHTML = "";


    notes.forEach(note => {


        const item = document.createElement("li");


        item.innerHTML = `

            <strong>${formatTime(note.time)}</strong>
            <br>
            ${note.text}

        `;


        item.onclick = () => {

            video.currentTime = note.time;
            video.play();

        };


        notesList.appendChild(item);


    });

}
