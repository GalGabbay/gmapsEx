'use strict'

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
    gUser.birthDate = elDob

    const elH2BirthTime = document.getElementById('birthtime').value
    gUser.birthTime = elH2BirthTime

    const elEmail = document.getElementById('email').value
    gUser.email = elEmail

    _saveUserPrefs(gUser)
}

function showAge(newVal) {
    document.getElementById('sAge').innerHTML = newVal
    gUser.age = newVal
}

function showColor(newVal) {
    document.getElementById('bgcolor').innerHTML = newVal
    gUser.age = newVal
}