// Selectors
const input = document.getElementById("input");
const addToList = document.getElementById("add-list");
const todoList = document.getElementById("todo-list");
const removeBtn = document.getElementById("remove-button")
let buttonCreated = false;

// Events
addToList.addEventListener("click", newTodo);

// Functions for EventListener
function newTodo(e) {
  e.preventDefault();

  // Add listitem
  const listItem = document.createElement("li");
  if (input.value != "") {
    listItem.innerText = input.value;
    todoList.appendChild(listItem);

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
  button.setAttribute("class", "btn");
  button.appendChild(i);
  i.setAttribute("class", "fas fa-minus-square");
}