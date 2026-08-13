let form = document.querySelector('.js-form')
let field = document.querySelectorAll('.js-field')

form.addEventListener('submit', function sendData(event){
    event.preventDefault()

    let name = field[0].value
    let birthDay = field[1].value

    console.log(name)
    console.log(birthDay);
})