function inputactivity() {
    let user = document.querySelector("#inputb");
    let taskContainer = document.getElementById("taskContainer");
taskContainer.style.backgroundColor="yellow";

    if (user.value !== "") {
       
        let taskBox = document.createElement("div");
        taskBox.classList.add("task-box");

        
        let taskText = document.createElement("p");
        taskText.classList.add("task-text");
        taskText.textContent = user.value;
        taskText.style.backgroundColor="yellow";

        
        let doneButton = document.createElement("button");
        doneButton.classList.add("done-button");
        doneButton.textContent = "Done";
        
        

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "Delete";
        

      

        
        doneButton.addEventListener("click", function () {
            taskText.style.textDecoration = "line-through";
        });

        
        deleteButton.addEventListener("click", function () {
            taskContainer.removeChild(taskBox);
        });

        
        taskBox.appendChild(taskText);
        taskBox.appendChild(doneButton);
        taskBox.appendChild(deleteButton);

       
        taskContainer.appendChild(taskBox);

        user.value = ""; 
    }
}