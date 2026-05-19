const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearBtn");
// Add
addBtn.addEventListener("click", () => {
  const taskValue = taskInput.value.trim();
  if (taskValue === "") {
    alert("Please enter name");
    return;
  }
  const li = document.createElement("li");
  li.innerHTML = `<span class="task">${taskValue}</span>
<div>
<button class="edit-btn">Edit</button>
<button class="delete-btn">Delete</button>
</div>`;
  taskList.appendChild(li);
  taskInput.value = "";

  // Edit
  const editBtn = li.querySelector(".edit-btn");
  const taskSpan = li.querySelector(".task");
  editBtn.addEventListener("click", () => {
    taskInput.value = taskSpan.textContent;
    li.remove();
  });

  // Delete the single value
  const deleteBtn = li.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
});

// Search
searchInput.addEventListener("keyup", () => {
  const searchValue = searchInput.value.toLowerCase();
  const tasks = document.querySelectorAll("li");
  tasks.forEach((task) => {
    const taskText = task.innerText.toLowerCase();
    if (taskText.includes(searchValue)) {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  });
});
// Clear All
clearBtn.addEventListener("click", () => {
  taskList.innerHTML = "";
});
