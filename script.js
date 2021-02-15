const taskForm = document.getElementById('task-form')
const btnAddTask = document.getElementById('saveTask')
const tasksDiv = document.getElementById('tasks')
const modalDeleteTask = document.getElementById('modalDeleteTask')
const modalForm = document.getElementById('form')
// let $task = document.createElement('div')
// const $taskTitle = $task.querySelector('h3')

//создание сообщения ошибки
const addError = errorMessage => {
  let msg = document.createElement('div')
  msg.className = 'alert alert-danger'
  msg.innerHTML = errorMessage
  document.getElementById('errors').append(msg)
}

btnAddTask.addEventListener('click', e => {
  e.preventDefault()

  const _taskTitle = taskForm.querySelector('[name=task-title]')
  const _taskDescription = taskForm.querySelector('[name=task-description]')

  document.getElementById('errors').innerHTML = ''

  //валидация заголовка
  if (_taskTitle.value === '') {
    addError('Укажите заголовок')
    return
  }

  // создание записи
  let $task = document.createElement('div')

  $task.classList.add('task-item')

  $task.innerHTML = `
    <div class="task-leftside">
    <div class='task-content'>
    <h3>${_taskTitle.value}</h3>
    <p>${_taskDescription.value}</p>
    </div>
    <span class="task-edit" id='task-edit'><i class='icon-edit' ></i> изменить</span>
    </div>
    <div class='task-icon'>
    <label class="checkbox-other"><input class="form-check-input" type="checkbox" id='checkbox'/><span></span></label>
    <i class='delete-task' id='delete-task'></i>
    </div>
    `
  tasksDiv.prepend($task)

  $('#createTaskModal').modal('hide')

  //  очищение полей модалки создания записи
  _taskTitle.value = ''
  _taskDescription.value = ''

  // очищение модалки при отмене создания записи

  document.getElementById('createTaskModal').addEventListener('hidden.bs.modal', () => {
    form.reset();
    msg.remove();
  });

  // скрипт для перечеркивания задачи
  let $checkBox = $task.querySelector('#checkbox')
  $checkBox.addEventListener('change', e => {
    const $checkTitle = $task.querySelector('h3')
    $checkTitle.style.textDecoration = 'line-through'
    $checkBox.checked
      ? ($checkTitle.style.textDecoration = 'line-through')
      : ($checkTitle.style.textDecoration = 'none')
  })

  // скрипт для удаления записи
  const deleteTask = $task.querySelector('#delete-task')
  deleteTask.addEventListener('click', e => {
    $('#deleteTaskModal').modal('show')
    modalDeleteTask.addEventListener('click', e => {
      $task.remove()
      $('#deleteTaskModal').modal('hide')
    })
  })

  //скрипт для изменение записи
  const editTask = $task.querySelector('#task-edit')
  editTask.addEventListener('click', e => {
    $('#editTaskModal').modal('show')

    const $modalEdit = document.querySelector('#editTaskModal')

    const $innerTitle = $modalEdit.querySelector('#edit-task-title')
    const $innerDescription = $modalEdit.querySelector('#task-description')

    const _editTitle = $task.querySelector('h3')
    const _editDescription = $task.querySelector('p')

    $innerTitle.value = _editTitle.innerText
    $innerDescription.value = _editDescription.innerText

    const btnSaveEditTask = $modalEdit.querySelector('#btnEditTask')

    btnSaveEditTask.addEventListener('click', e => {
      _editTitle.innerText = $innerTitle.value
      _editDescription.innerText = $innerDescription.value

      $('#editTaskModal').modal('hide')
    })
  })
})
