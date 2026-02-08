let tasks=[];
const input = document.getElementById("TaskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
if(localStorage.getItem("tasks")){
    tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.forEach(task => addTaskToUI(task));
}
addBtn.addEventListener("click", function()  {
    if(input.value===""){
        alert("Please enter a Task");
        return;
    }
 tasks.push(input.value);   // array me add
    saveTasks();               // localStorage me save
    addTaskToUI(input.value);  // screen pe show

    input.value = "";
});

function addTaskToUI(taskText){
    const li = document.createElement("li");
    li.innerText = taskText;
   
     const delBtn = document.createElement("button");
    delBtn.innerText = "❌";

    li.appendChild(delBtn);
    taskList.appendChild(li);
input.value = "";
li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });
delBtn.addEventListener("click", function (e) {
    e.stopPropagation
        li.remove();
 tasks = tasks.filter(t => t !== taskText);
        saveTasks();
    });
}

/* STEP 5: Save to localStorage */
function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
