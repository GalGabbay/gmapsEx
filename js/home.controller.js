'use strict'

function onInit (){
    const user = loadUserData()
    console.log(user)
    const elBody = document.querySelector('body')
    console.log(elBody)
    elBody.style.backgroundColor = user.bgColor
    document.querySelector('.user-bod').innerText ='Your birth of Date is: ' + user.birthDate
    document.querySelector('.user-birthtime').innerText = 'Your birth Time is: ' + user.birthTime
}

