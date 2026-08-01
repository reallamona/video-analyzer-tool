/* =========================
    Notes Module
========================= */

let notes = [];

let noteInput;
let addNoteBtn;
let notesList;



/* =========================
   Initialize
========================= */

function initializeNotes() {

    noteInput =
        document.getElementById("noteInput");


    addNoteBtn =
        document.getElementById("addNoteBtn");


    notesList =
        document.getElementById("notesList");



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

            <div class="item-header">


                <strong>
                    ${formatTime(note.time)}
                </strong>


                <button class="delete-btn">
                    Delete
                </button>


            </div>



            <p>
                ${note.text}
            </p>

        `;



        // Jump to timestamp

        item.onclick = (event) => {


            if (
                event.target.classList.contains(
                    "delete-btn"
                )
            ) {

                return;

            }



            video.currentTime =
                note.time;


            video.play();


        };



        // Delete note

        const deleteBtn =
            item.querySelector(
                ".delete-btn"
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
