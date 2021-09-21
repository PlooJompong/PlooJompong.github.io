// Selectors
const input = document.getElementById("input");
const addBtn = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");
const removeBtn = document.getElementById("remove-button")
const angryFace = document.getElementById("angry-face");
let buttonCreated = false;

// EventListeners
addBtn.addEventListener("click", newTodo);
angryFace.addEventListener("mouseenter", gladFace);

// Functions for EventListener
function newTodo(e) {
  e.preventDefault();

  // Add listitem
  const listItem = document.createElement("li");
  if (input.value != "") {
    listItem.innerText = input.value;
    todoList.appendChild(listItem);
    listItem.setAttribute("class", "task");

    // Check if remove button is created 
    if (!buttonCreated) {
      newButton();
      buttonCreated = true;
    }
  }
  input.value = "";
}

// Create remove button
function newButton() {
  const button = document.createElement("button");
  const i = document.createElement("i");
  removeBtn.appendChild(button);
  button.setAttribute("class", "btn btn-width");
  button.appendChild(i);
  i.setAttribute("class", "fas fa-minus-square");
}

function gladFace() {
  if (!angryFace.hasAttribute("fa-angry")) {
    angryFace.classList.remove("fa-angry");
    angryFace.classList.add("fa-smile-beam");
  } else {
    angryFace.classList.remove("fa-smile-beam");
    angryFace.classList.add("fa-angry");
  }
}
