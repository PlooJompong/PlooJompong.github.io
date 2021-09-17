
// Selectors
const input = document.getElementById("input");
const addToList = document.getElementById("add-list");
const todoList = document.getElementById("todo-list");
const removeBtn = document.getElementById("remove-button")

// Events
addToList.addEventListener("click", newTodo);
addToList.addEventListener("click", newButton, { once: true });

// Functions
function newTodo(e) {
  e.preventDefault();

  // Add listitem
  const listItem = document.createElement("li");
  if (input.value != "") {
    listItem.innerText = input.value;
    todoList.appendChild(listItem);
  }
  input.value = "";
}

// Create Remove Button
function newButton() {
  const button = document.createElement("button");
  const i = document.createElement("i");
  removeBtn.appendChild(button);
  button.setAttribute("class", "btn");
  button.appendChild(i);
  i.setAttribute("class", "fas fa-minus-square");
}