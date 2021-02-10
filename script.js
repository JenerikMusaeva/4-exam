const taskForm = document.getElementById('task-form');
const btnAddTask = document.getElementById('saveTask');
const tasksDiv = document.getElementById('tasks');

// let addItem = (listElement) => {
//   return function (title, description) {
//     let $task = document.createElement('div');

//     $task.classList.add('task-item');

//     $task.innerHTML = `
//     <div class='task-content'>
//     <h3>${title}</h3>
//     <p>${description}</p>
//     </div>
//     <div class='task-icon'>
//     <i class='icon-check'></i>
//     <i class='delete-task' id='delete-task'></i>
//     </div>
//     `


//     listElement.prepend($task);
//   }
// }

// let addTask = addItem(tasksDiv); 

btnAddTask.addEventListener('click', e => {
  e.preventDefault();

  const _taskTitle = taskForm.querySelector('[name=task-title]').value
  const _taskDescription = taskForm.querySelector('[name=task-description]').value

  let $task = document.createElement('div');

    $task.classList.add('task-item');

    $task.innerHTML = `
    <div class='task-content'>
    <h3>${_taskTitle}</h3>
    <p>${_taskDescription}</p>
    </div>
    <div class='task-icon'>
    <i class='icon-check'></i>
    <i class='delete-task' id='delete-task'></i>
    </div>
    `

    tasksDiv.prepend($task);

  // taskForm.reset();
  
});

