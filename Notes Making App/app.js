const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

const saveNotes = () => {
  const notes = document.querySelectorAll(".note textarea");
  const data = [];
  notes.forEach((note) => {
    data.push(note.value);
  });
  if (data.length === 0) {
    localStorage.removeItem("notes");
  } else {
    localStorage.setItem("notes", JSON.stringify(data));
  }
};

addBtn.addEventListener("click", function () {
  addNote();
});

const addNote = (text = "") => {
  const noteEl = document.createElement("div");
  noteEl.classList.add("note");
  noteEl.innerHTML = `
  <div class="tool">
  <i class=" save fa-solid fa-floppy-disk"></i>
  <i class=" trash fa-solid fa-trash"></i>
</div>
<textarea>${text}</textarea>
  `;

  noteEl.querySelector(".trash").addEventListener("click", function () {
    noteEl.remove();
    saveNotes();
  });

  noteEl.querySelector(".save").addEventListener("click", function () {
    saveNotes();
  });

  noteEl.querySelector("textarea").addEventListener("focusout", function () {
    saveNotes();
  });

  main.appendChild(noteEl);

  saveNotes();
};

(function () {
  const lsNotes = JSON.parse(localStorage.getItem("notes"));
  if (lsNotes === null) {
    addNote();
  } else {
    lsNotes.forEach((lsNote) => {
      addNote(lsNote);
    });
  }
})();
