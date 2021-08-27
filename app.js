// selected element asign them in a variable
let addTask = document.querySelector('#new-task')
let form = document.querySelector('form')
let todoUl = document.querySelector('#items')
let completUl = document.querySelector('.complete-list ul')

// functions
const createTask = task => {
  let listItem = document.createElement('li')
  let checkbox = document.createElement('input')
  let lebel = document.createElement('lebel')

  lebel.innerText = task
  checkbox.type = 'checkbox'

  listItem.appendChild(checkbox)
  listItem.appendChild(lebel)

  return listItem
}
