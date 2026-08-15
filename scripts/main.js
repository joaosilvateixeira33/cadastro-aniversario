let form = document.querySelector('.js-form')
let btnSend = document.querySelector('.js-btn-send')
let fieldName = document.querySelector('.js-field-name')
let fieldBirthday = document.querySelector('.js-field-birthday')

function formatToBR(isoDate) {
  if (!isoDate) return ''
  const [year, month, day] = isoDate.split('-')
  return `${day}/${month}/${year}`
}

function renderTable() {
  const persons = JSON.parse(localStorage.getItem('persons')) || []
  const tableBody = document.querySelector('.js-table')

  if (!tableBody) return

  tableBody.innerHTML = ''

  persons.forEach(person => {
    const row = document.createElement('tr')
    row.innerHTML = `
      <td>${person.name}</td>
      <td>${person.birthDay}</td>
    `
    tableBody.appendChild(row)
  })
}

form.addEventListener('submit', function sendData(event) {
  event.preventDefault()

  let name = fieldName.value
  let birthDay = formatToBR(fieldBirthday.value)
  
  if (!name.trim() || !birthDay) return

  let persons = JSON.parse(localStorage.getItem('persons')) || []
  persons.push({ name, birthDay })
  localStorage.setItem('persons', JSON.stringify(persons))

  form.reset()
  renderTable()
})

renderTable()