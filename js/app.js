// Selectors
const input = document.getElementById("input");
const addBtn = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");
const angryFace = document.getElementById("angry-face");

// EventListeners
addBtn.addEventListener("click", newTodo);
todoList.addEventListener("click", deleteTask);
angryFace.addEventListener("mouseenter", gladFace);


// Functions for EventListener
function newTodo() {
  
  // Add listitem
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

// FIX GladeFace Funtion !!!!

function gladFace() {
  if (!angryFace.hasAttribute("fa-angry")) {
    angryFace.classList.remove("fa-angry");
    angryFace.classList.add("fa-smile-beam");
  } else {
      angryFace.classList.remove("fa-smile-beam");
    }
}