const taskForm = document.getElementById('task-form');
const btnAddTask = document.getElementById('saveTask');
const tasksDiv = document.getElementById('tasks');
// const doneTask = document.getElementsById('task-done')
// const deleteTask = document.getElementById('delete-task');

//создание сообщения ошибки
const addError = (errorMessage) => {
  let msg = document.createElement('div');
  msg.className = 'alert alert-danger';
  msg.innerHTML = errorMessage;

  document.getElementById('errors').append(msg);
};


//создание записи
btnAddTask.addEventListener('click', e => {
  e.preventDefault();

  const _taskTitle = taskForm.querySelector('[name=task-title]').value
  const _taskDescription = taskForm.querySelector('[name=task-description]').value

  document.getElementById('errors').innerHTML = '';

  //валидация заголовка
  if (_taskTitle.length === '') {
    addError('Укажите заголовок')
  } 

  let $task = document.createElement('div');

    $task.classList.add('task-item');

    $task.innerHTML = `
    <div class='task-content'>
    <h3>${_taskTitle}</h3>
    <p>${_taskDescription}</p>
    </div>
    <div class='task-icon'>
    <i class='icon-check' id='task-done'></i>
    <i class='delete-task' id='delete-task'></i>
    </div>
    `

    tasksDiv.prepend($task);

  // taskForm.reset();

  
 
});

// перечеркивание записи
// doneTask.addEventListener('click', e => {
//  e.target.closest('item-task).remove()



// удаление записи
// deleteTask.addEventListener('click', e => {
//   e.target.closest('item-task).remove()


//   console.log(deleteTask)

// });

