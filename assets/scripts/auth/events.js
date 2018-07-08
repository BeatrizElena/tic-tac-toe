'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('sign up ran!')

  const data = getFormFields(this)
  console.log(data) // for testing what 'this' is in parameter above
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('sign in ran!')

  const data = getFormFields(this)
  console.log(data) // for testing what 'this' is in parameter above
  api.signIn(data)
    .then(ui.signInSuccess, store.user = data.user, $('#signInModal, .modal-backdrop').hide(), $('#game-options').fadeIn())
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran!')

  const data = getFormFields(this)
  console.log(data) // for testing what 'this' is in parameter above
  api.changePassword(data)
    .then(ui.changePasswordSuccess, $('#message').fadeIn())
    .catch(ui.changePasswordFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers
}
