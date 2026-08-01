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


    // Load saved notes

    notes =
        JSON.parse(
            localStorage.getItem("notes")
        ) || [];


    addNoteBtn.addEventListener(
        "click",
        addNote
    );


    renderNotes();

}



/* =========================
   Add Note
========================= */

function addNote() {

    const text =
        noteInput.value.trim();


    if (text === "") return;



    notes.push({

        time: video.currentTime,
        text: text

    });



    saveNotes();

    renderNotes();


    noteInput.value = "";

}



/* =========================
   Save Notes
========================= */

function saveNotes() {

    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );

}



/* =========================
   Display Notes
========================= */

function renderNotes() {

    notesList.innerHTML = "";



    notes.forEach((note, index) => {


        const item =
            document.createElement("li");



        item.innerHTML = `

            <strong>
                ${formatTime(note.time)}
            </strong>

            <br>

            ${note.text}


            <br>

            <button class="delete-note">
                Delete
            </button>

        `;



        // Jump to timestamp

        item.onclick = (event) => {

            if (
                event.target.classList.contains(
                    "delete-note"
                )
            ) {
                return;
            }


            video.currentTime =
                note.time;


            video.play();

        };



        // Delete button

        const deleteBtn =
            item.querySelector(
                ".delete-note"
            );



        deleteBtn.onclick = () => {

            notes.splice(
                index,
                1
            );


            saveNotes();

            renderNotes();

        };



        notesList.appendChild(item);


    });

}
