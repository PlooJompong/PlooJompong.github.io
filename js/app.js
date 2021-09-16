// 
const input = document.getElementById("input");
const addList = document.getElementById("add-list");
const todoList = document.getElementById("todo-list");
const clear = document.getElementById("clear")

// Events
addList.addEventListener("click", newTodo);
clear.addEventListener("click", remove);

// Functions
function newTodo(e) {
  e.preventDefault();

  // Added list item
  const listItem = document.createElement("li");
  listItem.innerText = input.value;
  todoList.appendChild(listItem);
  input.value = "";
}

// Remove the listitem
function remove() {
  listItem.className = "li-hidden";
}
