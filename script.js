const inputEl = document.querySelector("#text-input");
const notesContent = document.querySelector("#notes");

const addBtn = document.querySelector("#add");

function renderNotes(){
  const notes = JSON.parse(localStorage.getItem("notes")) || [];

  notesContent.innerHTML = "";

  notes.forEach((notesEl, index) => {
    let html = `
      <div class="notes" data-index="${index}">
        <p class="input-text-value">${notesEl}</p>
        <button class="delete-btn">Delete</button>
      </div>
    `
    notesContent.innerHTML += html;
    
  });
}
if (inputEl.value === "") {
  document.querySelector("#clear-all").disabled = true;
}

addBtn.addEventListener("click", function(){
  document.querySelector("#clear-all").disabled = false;

  let inputText = inputEl.value;
  
  if (!inputText) {
    return
  }else if (inputText.length > 40) {
    alert("Exceeded the characters limit!");
    return
  }

  const upperCaseFirstChar = inputText.charAt(0).toUpperCase() + inputText.slice(1);
  
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  console.log(notes.length);
  
  notes.push(upperCaseFirstChar);
  localStorage.setItem("notes", JSON.stringify(notes));

  renderNotes()
  inputEl.value = "";
})
renderNotes()


notesContent.addEventListener("click", function(e){

  if (e.target.classList.contains("delete-btn")) {
    
    const noteDiv = e.target.closest(".notes");
    const index = noteDiv.dataset.index;

    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index, 1)

    localStorage.setItem("notes", JSON.stringify(notes))

  }
  renderNotes();

})

document.querySelector("#clear-all").addEventListener("click", function(){
  localStorage.removeItem("notes");
  notesContent.innerHTML = "";
})