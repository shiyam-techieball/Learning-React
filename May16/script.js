const mainContainer = document.getElementById("mainContainer");
const addBtn = document.getElementById("addBtn");

const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");
const submitBtn = document.getElementById("submitBtn");

const todoContainer = document.getElementById("todoContainer");

const todoInput = document.getElementById("todoInput");
const userInputPriority = document.getElementById("userInputPriority");

const todoList = document.getElementById("todoList");
const progressList = document.getElementById("progressList");
const doneList = document.getElementById("doneList");

const todoCount = document.getElementById("todoCount");
const progresscount = document.getElementById("progresscount");
const doneCount = document.getElementById("doneCount");

const searchInput = document.getElementById("searchInput");

//search
searchInput.addEventListener("keyup", () => {
  const searchValue = searchInput.value.toLowerCase();

  const allElement = document.querySelectorAll("li");
  const taskArray = [...allElement];

  taskArray.filter((li) => {
    const taskText = li.firstChild.textContent.toLowerCase();
    if (taskText.includes(searchValue)) {
      li.style.display = "block";
    } else {
      li.style.display = "none";
    }
  });
});

function updateCounts() {
  todoCount.textContent = todoList.children.length;
  progresscount.textContent = progressList.children.length;
  doneCount.textContent = doneList.children.length;
}

// Open popup
addBtn.addEventListener("click", () => {
  popup.classList.add("show");
  mainContainer.classList.add("blur");
});

// Close popup
closeBtn.addEventListener("click", () => {
  popup.classList.remove("show");
  mainContainer.classList.remove("blur");
});

// Submit popup
submitBtn.addEventListener("click", () => {
  const inputValue = todoInput.value;
  const inputPriorityValue = userInputPriority.value;

  const li = document.createElement("li");
  li.textContent = inputValue;
  todoList.appendChild(li);

  // Input Priority
  const priorityText = document.createElement("p");
  priorityText.textContent = inputPriorityValue;
  priorityText.classList.add("priority");
  li.appendChild(priorityText);

  // left button
  const leftBtn = document.createElement("button");
  leftBtn.textContent = "<-";
  leftBtn.classList.add("move-btn");

  // right button
  const rightBtn = document.createElement("button");
  rightBtn.textContent = "->";
  rightBtn.classList.add("move-btn");

  // todo count
  todoList.appendChild(li);
  updateCounts();

  //move right
  rightBtn.addEventListener("click", () => {
    if (li.parentElement === todoList) {
      progressList.appendChild(li);
    } else if (li.parentElement === progressList) {
      doneList.appendChild(li);
    }
    updateCounts();
  });

  //move left
  leftBtn.addEventListener("click", () => {
    if (li.parentElement === doneList) {
      progressList.appendChild(li);
    } else if (li.parentElement === progressList) {
      todoList.appendChild(li);
    }
    updateCounts();
  });

  li.appendChild(leftBtn);
  li.appendChild(rightBtn);

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";

  deleteBtn.addEventListener("click", () => {
    li.remove();
    updateCounts();
  });
  li.appendChild(deleteBtn);

  todoInput.value = "";
  popup.classList.remove("show");
  mainContainer.classList.remove("blur");
});
