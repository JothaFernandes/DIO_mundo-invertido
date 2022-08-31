import { subscribeToHellfireClube } from "./Firebase/hellfire-clube.js"

const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

const btnSubscribe = document.getElementById('btnSubscribe')
const txtmodal = document.getElementById('txtmodal')
var elem

btnSubscribe.addEventListener('click', async () => {

    if (txtName.value == "") {
        modalShow('alert')
        txtmodal.innerHTML = 'Digite seu nome'
        elem = txtName
        return false;
    }
    if (txtEmail.value == '') {
        modalShow('alert')
        txtmodal.innerHTML ='Digite um endereço de email'
        elem = txtEmail;
        return false;
    }

    if (txtEmail.value.indexOf('@', 0) < 0) {
        modalShow('alert')
        txtmodal.innerHTML ='Digite um endereço de email valido'
        elem = txtEmail;
        return false;
    }

    if (txtEmail.value.indexOf('.', 0) < 0) {
        modalShow('alert')
        txtmodal.innerHTML ='Digite um endereço de email valido'
        elem = txtEmail
        return false
    }

    if (txtLevel.value == '') {
        modalShow('alert')
        txtmodal.innerHTML ='Digite o seu level'
        elem =txtLevel
        return false
    }

    if (txtCharacter.value == '') {
        modalShow('alert')
        txtmodal.innerHTML ='Digite o seu personagem'
        elem = txtCharacter
        return false
    }

    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

    const subscriptionId = await subscribeToHellfireClube(subscription)
    modalShow('alert')
    txtmodal.innerHTML = 'Inscrito com sucesso'
    txtName.value = ""
    txtEmail.value = ""
    txtLevel.value = ""
    txtCharacter.value = ""
})

function modalShow(modalID) {
    const modal = document.getElementById(modalID)
    modal.classList.add('modal-show')
    var span = document.getElementsByClassName("close")[0]
    span.onclick = function () {
        modal.classList.remove('modal-show')
        ffocus(elem)
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.classList.remove('modal-show')
            ffocus(elem)
        }
    }
}

function ffocus(elem){
    elem.focus()
}