const inputEl = document.querySelector("#text-input");
const notesContent = document.querySelector("#notes");

const addBtn = document.querySelector("#add");


addBtn.addEventListener("click", function(){
  let inputText = inputEl.value;

  const upperCaseFirstChar = inputText.charAt(0).toUpperCase() + inputText.slice(1);

  let html = `
    <div class="notes">
      <p class="input-text-value">${upperCaseFirstChar}</p>
      <button class="delete-btn">Delete</button>
    </div>
  `

  notesContent.innerHTML += html;

  inputEl.value = "";
})