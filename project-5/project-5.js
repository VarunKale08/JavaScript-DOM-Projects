//variables

const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-conatiner');
const inputTask = document.getElementById('input-task');

// event listner for add button

addTask.addEventListener('click', function(){
     let task = document.createElement('div');
     task.classList.add('task');

     let li = document.createElement('li');
     li.innerText = `${inputTask.value}`;
     task.appendChild(li);

     let checkButton = document.createElement('button');
     checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
     checkButton.classList.add('checkTask');
     task.appendChild(checkButton);

     let deleteButton = document.createElement('button');
     deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
     deleteButton.classList.add('deleteTask');
     task.appendChild(deleteButton);

     if(inputTask.value === ""){
        alert("Please enter a task");
     } else {
        taskContainer.appendChild(task);
     }

     inputTask.value = "";

     // functionality of check button
     checkButton.addEventListener('click', function(){

        checkButton.parentElement.style.textDecoration ="line-through";
     });

     // functionality of delete button
     deleteButton.addEventListener('click', function(e){
            let target = e.target;
            //first parent element is the list element and the the task element i.e div
            target.parentElement.parentElement.remove();
     });
});