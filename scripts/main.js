let form = document.querySelector('.js-form')
let btnSend = document.querySelector('.js-btn-send')
let fieldName = document.querySelector('.js-field-name')
let fieldBirthday = document.querySelector('.js-field-birthday')

let editingIndex = null

function formatToBR(isoDate) {
  if (!isoDate) return ''
  const [year, month, day] = isoDate.split('-')
  return `${day}/${month}/${year}`
}

function formatToUSA(isoDate){
  if (!isoDate) return ''
  const [day, month, year] = isoDate.split('/')
  return `${year}-${month}-${day}`
}

function renderTable() {
  const persons = JSON.parse(localStorage.getItem('persons')) || []
  const tableBody = document.querySelector('.js-table')

  
  if (!tableBody) return
  
  tableBody.innerHTML = ''
  
  persons.forEach((person, index) => {
    const row = document.createElement('tr')
    const btnEdit = document.createElement('button')
    const actions = document.createElement('td')
    const btnDelete = document.createElement('button')

    
    btnEdit.textContent = 'Editar'
    btnEdit.classList.add('btn-edit')

    btnDelete.textContent = 'Excluir'
    btnDelete.classList.add('btn-delete')

    btnEdit.addEventListener('click', function () {
      const person = persons[index]

      fieldName.value = person.name
      fieldBirthday.value = formatToUSA(person.birthDay)
      editingIndex = index

      btnSend.textContent = 'Salvar edição'
    })

    btnDelete.addEventListener('click', function () {
      persons.splice(index, 1)
      localStorage.setItem('persons', JSON.stringify(persons))
      renderTable()
    })

    row.innerHTML = `
      <td>${person.name}</td>
      <td>${person.birthDay}</td>
    `
    actions.appendChild(btnEdit)
    actions.appendChild(btnDelete)

    row.appendChild(actions)
    
    tableBody.appendChild(row)

  })
}

form.addEventListener('submit', function sendData(event) {
  event.preventDefault()

  let name = fieldName.value
  let birthDay = formatToBR(fieldBirthday.value)
  
  if (!name.trim() || !birthDay) return

  let persons = JSON.parse(localStorage.getItem('persons')) || []

  if (editingIndex !== null) {
    persons[editingIndex] = {
      name,
      birthDay
    }

    editingIndex = null
  } else {
    persons.push({ name, birthDay })
  }
  
  localStorage.setItem('persons', JSON.stringify(persons))

  form.reset()
  btnSend.textContent = 'Cadastrar'
  renderTable()
})

renderTable()