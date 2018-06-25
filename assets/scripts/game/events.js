'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onGetGame = function (event) {
  event.preventDefault()
  console.log('onGetGame ran!')

  // api code
}

const onGameOver = function (event) {
  event.preventDefault()
  console.log('onGameOver ran!')

  // api code
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('sign in ran!')

  const data = getFormFields(this)
  console.log(data) // for testing what 'this' is in parameter above
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onGetGame)
  $('#sign-up').on('submit', onGameOver)
  $('#sign-in').on('submit', onSignIn)
}

module.exports = {
  addHandlers
}
