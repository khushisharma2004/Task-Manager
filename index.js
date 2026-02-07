const input = document.getElementById("TaskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
addBtn.addEventListener("click", function()  {
    if(input.value===""){
        alert("Please enter a Task");
        return;
    }
    const li=document.createElement("li");
    li.innerText=input.value;
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
    });

})