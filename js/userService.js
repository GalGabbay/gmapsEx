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

    // const elbody = document.querySelector('body')
    // elbody.style.backgroundColor = gUser.bgColor
    // elbody.style.color = gUser.txtColor

    // const elH2SpanBod = document.querySelector('.user-bod')
    // elH2SpanBod.innerText = gUser.birthDate

    // document.getElementById('age').value = gUser.age
    // showAge(gUser.age)

    return gUser
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



