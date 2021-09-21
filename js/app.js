// Selectors
const input = document.getElementById("input");
const addBtn = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");
// const removeBtn = document.getElementById("remove-btn")
const angryFace = document.getElementById("angry-face");

// EventListeners
addBtn.addEventListener("click", newTodo);
// removeBtn.addEventListener("click", removeTask);
angryFace.addEventListener("mouseenter", gladFace);

// Functions for EventListener
function newTodo(e) {
  e.preventDefault();

  // Add listitem
  const li = document.createElement("li");
  const span = document.createElement("span");
  const div = document.createElement("div");
  const icon = document.createElement("i");
  if (input.value != "") {
    li.innerText = input.value;

    // appendChild
    todoList.appendChild(div);
    div.appendChild(li);
    div.appendChild(span);
    span.appendChild(icon);

    // setAttribute
    div.setAttribute("class", "todo");
    li.setAttribute("class", "task");
    span.setAttribute("id", "remove-btn");
    span.setAttribute("class", "delete btn");
    icon.setAttribute("class", "fas fa-trash-alt");
  }
  input.value = "";
}

// Remove Button !!!
/*
function removeTask() {
  console.log("hej");
}
*/

// FIX GladeFace Funtion !!!!

function gladFace() {
  if (!angryFace.hasAttribute("fa-angry")) {
    angryFace.classList.remove("fa-angry");
    angryFace.classList.add("fa-smile-beam");
  } else {
    angryFace.classList.remove("fa-smile-beam");
    angryFace.classList.add("fa-angry");
  }
}