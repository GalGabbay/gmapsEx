'use strict'

function onInit (){
    const user = loadUserData()
    console.log(user)
    const elBody = document.querySelector('body')
    console.log(elBody)
    elBody.style.backgroundColor = user.bgColor
}

