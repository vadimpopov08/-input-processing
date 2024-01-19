const myForm = document.querySelector('#myForm')
let name = document.getElementById('name')
let gender = document.getElementById('gender')
const sendButton = document.querySelector('#sendButton');

sendButton.addEventListener('click', function (event) {
    if (name.value == 'Ксения') {
        delete name.value;
        console.log("Вы не можете вводить имя, так так оно сильно уродливое. Измените его сначала");
    }

    else {
        event.preventDefault();
        console.log(myForm.elements.lastName.value);
        console.log(myForm.elements.name.value);
        if (myForm.elements.gender.value == 'm') {
            console.log('Мужчина')
        }
        else {
            console.log('Женщина');
        }
        if (myForm.elements.auto.checked) {
            console.log('Есть автомобиль!')
        }
    }
})