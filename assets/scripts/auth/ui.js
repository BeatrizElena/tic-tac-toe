'use strict'

const store = require('../store')
// const game = require('../game.js')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', 'green')
  console.log(`signUpSuccess ran. Data is: ${data}`)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').css('background-color', 'green')
  // console.log(`signInSuccess ran. Data is: ${data}`)
  store.user = data.user
  console.log('signInSuccess ran. store.user is: ')
  console.log(store.user)
  // game.table()
  // game.startGameButton()
  // game.playGame()
}

const signOutSuccess = function (data) {
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', 'green')
  console.log(`signOutSuccess ran.`)
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed password successfully')
  $('#message').css('background-color', 'green')
  console.log(`changePasswordSuccess ran.`)
}

const signUpFailure = function (error) {
  $('#message').text('Error on Sign-up')
  $('#message').css('background-color', 'red')
  console.log(`signUpFailure ran. Error is: ${error}`)
}

const signInFailure = function (error) {
  $('#message').text('Error on Sign-In')
  $('#message').css('background-color', 'red')
  console.log(`signInFailure ran. Error is: `)
  console.log(error)
}

const changePasswordFailure = function (error) {
  $('#message').text('Error changing password')
  $('#message').css('background-color', 'red')
  console.log(`changePasswordFailure ran. Error is: `)
  console.log(error)
}

const signOutFailure = function (error) {
  $('#message').text('Error on Sign-out')
  $('#message').css('background-color', 'red')
  console.log(`signOutFailure ran. Error is: `)
  console.log(error)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  signUpFailure,
  signInFailure,
  changePasswordFailure,
  signOutFailure
}
