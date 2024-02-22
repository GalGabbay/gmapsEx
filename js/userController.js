'use strict'

var gUser = {

    txtColor: '#000000',
    bgColor: '#f7f7f7',
    birthDate: '',
    email: '',
    age: '',
    birthTime: '',

}

var USER_DB = 'userData'


loadUserData()

function loadUserData() {

    var gUser = loadFromStorage(USER_DB) || gUser

    const elbody = document.querySelector('body')
    elbody.style.backgroundColor = gUser.bgColor
    elbody.style.color = gUser.txtColor

    const elH2SpanBod = document.querySelector('.user-bod')
    elH2SpanBod.innerText = gUser.birthDate

    document.getElementById('age').value = gUser.age
    showAge(gUser.age)

}






function addUserPref(ev) {

    ev.preventDefault()


    const elColor = document.getElementById('color').value
    const elBgColor = document.getElementById('bgcolor').value

    gUser.bgColor = elBgColor
    gUser.txtColor = elColor

    const elbody = document.querySelector('body')
    elbody.style.backgroundColor = gUser.bgColor
    elbody.style.color = gUser.txtColor

    const elDob = document.getElementById('dob').value
    const elH2SpanBod = document.querySelector('.user-bod')
    elH2SpanBod.innerText = elDob
    gUser.birthDate = elDob
    console.log(elDob)
    // const elEmail = document.getElementById('email').value
    // user.email = elEmail

    const elH2BirthTime = document.getElementById('birthtime').value
    const elH2SpanBirthTime = document.querySelector('.user-birthtime')

    elH2SpanBirthTime.innerText = elH2BirthTime
    gUser.birthDate = elH2BirthTime


    _saveUserPrefs()

}




function showAge(newVal) {
    document.getElementById('sAge').innerHTML = newVal
    gUser.age = newVal
}

function showColor(newVal) {
    document.getElementById('bgcolor').innerHTML = newVal
    gUser.age = newVal
}



function _saveUserPrefs() {

    saveToStorage(USER_DB, gUser)
}



