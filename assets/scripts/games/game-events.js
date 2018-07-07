'use strict'

const signedInUser = require('../auth/ui')
const api = require('./game-api')
// const userUi = require('../auth/ui')
const ui = require('./game-ui')
const getFormFields = require(`../../../lib/get-form-fields`)
const game = require(`../game`)
const table = require(`../table`)
const logic = require('./logic-game')

// creating table game and game in the database
const onCreateGame = function (event) {
  event.preventDefault()
  const data = {}
  $('#board-container').fadeIn()

  logic.printBoard()

  // api.create(data)
  // // if (signedInUser.signInSuccess() === true) {
  // //   api.create(data)
  // //   ui.onCreateSuccess()
  // //   table.generateTable()
  // // } else {
  // //   game.signInPrompt()
  // // }
  // .then(ui.onCreateSuccess)
  // // .then(table.generateTable())
  // .catch(ui.onCreateFailure)
  // // .catch(game.signInPrompt())
}

const onIndexGame = function (event) {
  event.preventDefault()
  console.log('onIndexGame ran!')

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

const addHandlers = () => {
  console.log('events')
  // $('#board-create').on('click', onCreateBoard)
  $('#game-create').on('click', onCreateGame)
  $('#game-reset').on('click', logic.resetGame)
  // $('#show-games').on('click', logic.showGames)
  $('#game-index').on('submit', onIndexGame)
  $('#game-show').on('submit', onShowGame)
  $('#game-update').on('submit', onUpdateGame)
}

module.exports = {
  addHandlers
}
