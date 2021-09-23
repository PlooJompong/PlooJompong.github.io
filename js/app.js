// Selectors
const input = document.getElementById("input");
const addBtn = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");
const angryFace = document.getElementById("angry-face");
let angry = false;

// EventListeners
addBtn.addEventListener("click", newTodo);
todoList.addEventListener("click", deleteTask);
todoList.addEventListener("click", changeColor);
angryFace.addEventListener("mouseenter", gladFace);

// Functions for EventListeners
// Add Todo
function newTodo(e) {
  e.preventDefault();
  if (input.value != "") {
    
    // CreateElements
    const div = document.createElement("div");
    const li = document.createElement("li");
    const span = document.createElement("span");
    
    li.innerText = input.value;
    
    // appendChild
    todoList.appendChild(div);
    div.appendChild(li);
    div.appendChild(span);
    span.innerHTML = '<i class="fas fa-trash-alt"></i>';
    
    // setAttribute
    div.setAttribute("id", "todo");
    li.setAttribute("class", "task");
    span.setAttribute("id", "remove-btn");
    span.setAttribute("class", "delete-btn btn");
  }
  input.value = "";
}

// Delete Button
function deleteTask(e) {
  const item = e.target;
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    todo.remove();
  }
}

// Change li.task Color
function changeColor(e) {
  const item = e.target;
  const list = document.getElementsByClassName("task");
  if (item.classList[0] === "task") {
    for (let i = 0; i < list.length; i++) {
      list[i].style.color = "gray";
    }
  }
}

// Angry && Gladface
function gladFace() {
  if (!angry) {
    angryFace.classList.add("fa-smile-beam");
    angry = true;
  } else if (angry){
    angryFace.classList.remove("fa-smile-beam");
    angry = false;
  }
}

// Try - Catch
try { 
  nonExistentFunction();
}
catch {
  console.error("function nonExistentFunction() finns inte");
}