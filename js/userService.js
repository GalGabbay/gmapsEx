'use strict'

var USER_DB = 'userData'

var gUser = {
    txtColor: '#000000',
    bgColor: '#f7f7f7',
    birthDate: '',
    email: '',
    age: '',
    birthTime: '',
}

loadUserData()

function loadUserData() {
    var gUser = loadFromStorage(USER_DB) || gUser
    return gUser
}

function _saveUserPrefs(gUser) {
    saveToStorage(USER_DB, gUser)
}



