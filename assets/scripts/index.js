'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// game-events.js has:
// $('#game-create').on('submit', onCreateBoard) ===> generates table
// $('#game-create').on('submit', onCreateGame)
// $('#game-index').on('submit', onIndexGame)
// $('#game-show').on('submit', onShowGame)
// $('#game-update').on('submit', onUpdateGame)

const authUsers = require('./auth/events')
const gameEvents = require('./games/game-events')

$(() => {
  authUsers.addHandlers()
  gameEvents.addHandlers()
})
