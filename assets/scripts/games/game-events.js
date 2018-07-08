'use strict'

const api = require('./game-api')
const ui = require('./game-ui')
const getFormFields = require(`../../../lib/get-form-fields`)
const logic = require('./logic-game')

// creating table game and game in the database
const onCreateGame = function (event) {
  event.preventDefault()
  const data = {}
  $('#board-container').fadeIn()
  logic.printBoard()
}

const onIndexGame = function (event) {
  event.preventDefault()

  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onShowGame = function (event) {
  event.preventDefault()
  console.log('onShowGame ran!')

  const data = getFormFields(event.target)
  const game = data.game

  if (game.id.length !== 0) {
    api.show(game)
      .then(ui.onShowSuccess)
      .catch(ui.onShowFailure)
  } else {
    $('#message').html('<p>Please provide a game id!</p>')
    $('#message').css('background-color', 'red')
    console.log('Please enter a game id!')
  }
}

const onUpdateGame = function (event) {
  event.preventDefault()
  console.log('onUpdateGame ran!')

  const data = getFormFields(event.target)
  const game = data.game

  if (game.text === '') {
    $('#message').html('<p>Text is required</p>')
    $('#message').css('background-color', 'red')
    console.log('Text is required!')
    return false
  }
  if (game.id.length !== 0) {
    api.update(data)
      .then(ui.onUpdateSuccess)
      .catch(ui.onUpdateFailure)
  } else {
    $('#message').html('<p>Please provide a game id!</p>')
    $('#message').css('background-color', 'red')
    console.log('Please provide a game id!')
  }
}

const addHandlers = () => {
  $('#game-create').on('click', onCreateGame)
  $('#game-reset').on('click', logic.resetGame)
  $('#game-index').on('submit', onIndexGame)
  $('#game-show').on('submit', onShowGame)
  $('#game-update').on('submit', onUpdateGame)
}

module.exports = {
  addHandlers
}

// example code for clearing board:
/*
function clearBoard() {
$('.tile').removeClass('played');
$('.tile').removeClass('O-play');
$('.tile').removeClass('X-play');
$('.tile').html('');
$('.tile').addClass('free');
}
*/
