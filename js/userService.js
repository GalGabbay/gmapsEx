'use strict'

var user = {

    txtColor: '',
    bgColor: '',
    birthDate: '',
    email: '',
    age:'',
    birthTime:'',

}

var USER_DB = 'userData'

 loadUserData()


function loadUserData() {
    user = loadFromStorage(USER_DB)

    const elbody = document.querySelector('body')
    elbody.style.backgroundColor = user.bgColor
    elbody.style.color = user.txtColor

    // const elH2SpanBod = document.querySelector('.user-bod')
    // elH2SpanBod.innerText = user.birthDate

    
}






function AddUserPref(ev) {
    ev.preventDefault()


    const elColor = document.getElementById('color').value
    const elBgColor = document.getElementById('bgcolor').value

    user.bgColor = elBgColor
    user.txtColor = elColor
    
    const elbody = document.querySelector('body')
    elbody.style.backgroundColor = user.bgColor
    elbody.style.color = user.txtColor

    const elDob = document.getElementById('dob').value
    const elH2SpanBod = document.querySelector('.user-bod')
    elH2SpanBod.innerText = elDob 
    user.birthDate = elDob

    // const elEmail = document.getElementById('email').value
    // user.email = elEmail

    const elH2BirthTime = document.getElementById('birthtime').value
    const elH2SpanBirthTime = document.querySelector('.user-birthtime')

     elH2SpanBirthTime.innerText = elH2BirthTime 
    user.birthDate = elH2BirthTime


    _saveUserPrefs()

}




function showAge(newVal) {
    document.getElementById('sAge').innerHTML = newVal
    user.age = newVal
}

function showColor(newVal) {
    document.getElementById('bgcolor').innerHTML = newVal
    // user.age = newVal
}



function _saveUserPrefs() {

    saveToStorage(USER_DB, user)
}



