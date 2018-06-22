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
  store.user = data.user
}

const signOutSuccess = function (data) {
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', 'green')
  console.log(`signOutSuccess ran.`)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess
}
