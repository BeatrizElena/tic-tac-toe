'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', 'green')
  console.log(`signUpSuccess ran. Data is: ${data}`)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').css('background-color', 'green')
  console.log(`signInSuccess ran. Data is: ${data}`)
}

module.exports = {
  signUpSuccess,
  signInSuccess
}
