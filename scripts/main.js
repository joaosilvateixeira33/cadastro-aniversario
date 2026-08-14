let form = document.querySelector('.js-form')
let field = document.querySelectorAll('.js-field')

function formatToBR(isoDate) {
  if (!isoDate) return ''
  const [year, month, day] = isoDate.split('-')
  return `${day}/${month}/${year}`
}

form.addEventListener('submit', function sendData(event){
    event.preventDefault()

    let name = field[0].value
    let birthDay = formatToBR(field[1].value)

    console.log(name)
    console.log(birthDay);
})