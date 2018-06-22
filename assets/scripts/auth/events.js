'use strict'

const getFormFields = require('../../../lib/get-form-fields')

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


const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
}


module.exports = {
  addHandlers
}
