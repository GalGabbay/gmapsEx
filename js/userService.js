'use strict'

var user = {

    txtColor: '#050505',
    bgColor: '',
    birthDate: ''

}

var USER_DB = 'userData'

 loadUserData()


function loadUserData() {
    user = loadFromStorage(USER_DB)

    const elbody = document.querySelector('body')
    elbody.style.backgroundColor = user.bgColor
    elbody.style.color = user.txtColor
    
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
    console.log(elDob)
    const elH2SpanBod = document.querySelector('.user-bod')
    console.log(elH2SpanBod)
    elH2SpanBod.innerText = elDob



    

    _saveUserPrefs()

}





function _saveUserPrefs() {

    saveToStorage(USER_DB, user)
}



