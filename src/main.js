const input = document.getElementById('input')
const form = document.getElementById('form')
const containerTasks = document.getElementById('container-tasks')
const emptyMessage = document.getElementById('empty-message')

const createTaskElement = () => {
  const li = document.createElement('li')
  li.className = 'container-tasks__task-item'

  li.innerHTML = `
    <label>
      <input type="checkbox" class="task-item__checkbox" />
      <strong class="task-item__text">${input.value}</strong>
    </label>
  `

  return li
}

const toggleEmptyMessage = () => {
  console.log(containerTasks.children.length)

  if (containerTasks.children.length === 1) {
    emptyMessage.style.display = 'block'
  } else {
    emptyMessage.style.display = 'none'
  }
}

const doneTask = () => {
  containerTasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('task-item__checkbox')) {
      const li = e.target.closest('li')
      li.classList.toggle('done')

      setTimeout(() => {
        li.remove()
        toggleEmptyMessage()
      }, 1000)
    }
  })
}

const addTask = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (input.value.trim() === '') return

    containerTasks.appendChild(createTaskElement())

    toggleEmptyMessage()
    form.reset()
  })
}

addTask()
doneTask()
