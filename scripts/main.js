const form = document.querySelector('.js-form')
const btnSend = document.querySelector('.js-btn-send')
const fieldName = document.querySelector('.js-field-name')
const fieldBirthday = document.querySelector('.js-field-birthday')
const tableBody = document.querySelector('.js-table')

let editingIndex = null

function formatToBR(isoDate) {
  if (!isoDate) return ''
  const [year, month, day] = isoDate.split('-')
  return `${day}/${month}/${year}`
}

function formatToUSA(brDate) {
  if (!brDate) return ''
  const [day, month, year] = brDate.split('/')
  return `${year}-${month}-${day}`
}

function resetFormState() {
  form.reset()
  editingIndex = null
  btnSend.textContent = 'Cadastrar'
  btnSend.classList.remove('btn-success')
  btnSend.classList.add('btn-primary')
}

function renderTable() {
  const persons = JSON.parse(localStorage.getItem('persons')) || []
  if (!tableBody) return

  tableBody.innerHTML = ''

  if (persons.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="3" class="text-center text-muted py-3">
          Nenhuma pessoa cadastrada no momento.
        </td>
      </tr>
    `
    return
  }

  persons.forEach((person, index) => {
    const row = document.createElement('tr')

    // Botão Editar
    const btnEdit = document.createElement('button')
    btnEdit.type = 'button'
    btnEdit.textContent = 'Editar'
    btnEdit.className = 'btn btn-sm btn-outline-warning'

    btnEdit.addEventListener('click', () => {
      fieldName.value = person.name
      fieldBirthday.value = formatToUSA(person.birthDay)
      editingIndex = index

      btnSend.textContent = 'Salvar Edição'
      btnSend.classList.remove('btn-primary')
      btnSend.classList.add('btn-success')
      fieldName.focus()
    })

    // Botão Excluir
    const btnDelete = document.createElement('button')
    btnDelete.type = 'button'
    btnDelete.textContent = 'Excluir'
    btnDelete.className = 'btn btn-sm btn-outline-danger'

    btnDelete.addEventListener('click', () => {
      persons.splice(index, 1)
      localStorage.setItem('persons', JSON.stringify(persons))
      
      // Se estiver editando o item excluído, reseta o formulário
      if (editingIndex === index) {
        resetFormState()
      }
      
      renderTable()
    })

    // Célula de Ações com flexbox e espaçamento do Bootstrap
    const actions = document.createElement('td')
    actions.className = 'text-center'

    const actionContainer = document.createElement('div')
    actionContainer.className = 'd-flex justify-content-center gap-2'
    actionContainer.appendChild(btnEdit)
    actionContainer.appendChild(btnDelete)

    actions.appendChild(actionContainer)

    row.innerHTML = `
      <td class="fw-medium">${person.name}</td>
      <td>${person.birthDay}</td>
    `
    row.appendChild(actions)
    tableBody.appendChild(row)
  })
}

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const name = fieldName.value.trim()
  const birthDay = formatToBR(fieldBirthday.value)

  if (!name || !birthDay) return

  const persons = JSON.parse(localStorage.getItem('persons')) || []

  if (editingIndex !== null) {
    persons[editingIndex] = { name, birthDay }
  } else {
    persons.push({ name, birthDay })
  }

  localStorage.setItem('persons', JSON.stringify(persons))
  resetFormState()
  renderTable()
})

renderTable()