'use strict'

function addUserPref(ev) {
    ev.preventDefault()
console.log('setting form')
    if(!gUser) {


    }


    const elColor = document.getElementById('color').value
    const elBgColor = document.getElementById('bgcolor').value

    console.log(elBgColor)
    
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

    const elEmail = document.getElementById('email').value
    gUser.email = elEmail

    const elH2BirthTime = document.getElementById('birthtime').value
    const elH2SpanBirthTime = document.querySelector('.user-birthtime')

    elH2SpanBirthTime.innerText = elH2BirthTime
    gUser.birthDate = elH2BirthTime


    _saveUserPrefs()

}