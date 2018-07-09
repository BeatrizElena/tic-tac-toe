'use strict'

const store = require('../store')
const logic = require('../games/logic-game')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('color', 'white')
  logic.resetMessage()
  console.log(`signUpSuccess ran. Data is: ${data}`)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').css('color', 'white')
  // console.log(`signInSuccess ran. Data is: ${data}`)
  store.user = data.user
  logic.resetSignInMessage()
  logic.resetMessage()
  // console.log('signInSuccess ran. store.user is: ')
  // console.log(store.user)
}

const signOutSuccess = function (data) {
  $('#message').text('Signed out successfully')
  $('#message').css('color', 'white')
  $('.signout-message').text('')
  $('.signout').trigger('reset')
  $('.signout').hide()
  $('.dropdown').hide()
  $('.wrapper').hide()
  $('#user-email').text(''), store.user = null
  // $('.initial-view').fadeIn()
  $(".initial-view").load(location.href + " .initial-view")
  console.log(`signOutSuccess ran.`)
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed password successfully')
  $('#message').css('color', 'white')
  logic.resetMessage()
  // console.log(`changePasswordSuccess ran.`)
}

const signUpFailure = function (error) {
  $('#message').text('Error on Sign-up')
  $('#message').css('background-color', 'red')
  logic.resetMessage()
  // console.log(`signUpFailure ran. Error is: ${error}`)
}

const signInFailure = function (error) {
  $('#message').text('Error on Sign-In')
  $('#message').css('background-color', 'red')
  logic.resetMessage()
  // console.log(`signInFailure ran. Error is: `)
  // console.log(error)
}

const changePasswordFailure = function (error) {
  $('#message').text('Error changing password')
  $('#message').css('background-color', 'red')
  logic.resetMessage()
  // console.log(`changePasswordFailure ran. Error is: `)
  // console.log(error)
}

const signOutFailure = function (error) {
  $('#message').text('Error on Sign-out')
  $('#message').css('background-color', 'red')
  logic.resetMessage()
  // console.log(`signOutFailure ran. Error is: `)
  // console.log(error)
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
