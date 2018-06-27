'use strict'

const store = require('./store.js')

const win = function () {
  const x1 = $('#0, #1, #2').text()
  console.log(x1)
  const x2 = $('#3, #4, #5').text()
  const x3 = $('#6, #7, #8').text()
  console.log(x3)
  const x4 = $('#0, #3, #6').text()
  const x5 = $('#1, #4, #7').text()
  const x6 = $('#2, #5, #8').text()
  const x7 = $('#0, #4, #8').text()
  const x8 = $('#2, #4, #6').text()
  if (x1 === 'XXX' || x2 === 'XXX' || x3 === 'XXX' || x4 === 'XXX' || x5 === 'XXX' || x6 === 'XXX' || x7 === 'XXX' || x8 === 'XXX') {
    $('#message').html('X, you win!').css('color', 'red')
    $('.box').off('click')
  } else if (x1 === 'OOO' || x2 === 'OOO' || x3 === 'OOO' || x4 === 'OOO' || x5 === 'OOO' || x6 === 'OOO' || x7 === 'OOO' || x8 === 'OOO') {
    $('#message').html('O, you win!').css('color', 'green')
    $('.box').off('click')
  }
}

// when moves = 0, modulo is 0 or player one.
// moves increases by 1, so modulo is 1 or player 2

const switchPlayer = function () {
  console.log(store)
  if (!store.user) {
    $('.box').off('click')
    $('#message').html('Please sign in!').css('color', 'green')
  } else {
    let moves = 0
    $('.box').on('click', function (event) {
      const square = event.target.id // target square
      if ($(`#${square}`).text() === '') {
        moves % 2 === 0 ? $(`#${square}`).html('X').css('color', 'red') : $(`#${square}`).html('O').css('color', 'yellow')
        moves++
      } else if ($(`#${square}`).text() !== '') {
        $(`#${square}`).off()
      }
      win()
    })
  }
}

// const start = function () {
//     $(#game-create').on('click', function (event) {
//      { switchPlayer() }
//   })
// }

module.exports = {
  switchPlayer
}

// const ticTacToeWin =
//   {
//     ttt1: [0, 1, 2],
//     ttt2: [3, 4, 5],
//     ttt3: [6, 7, 8],
//     ttt4: [0, 3, 6],
//     ttt5: [1, 4, 7],
//     ttt6: [2, 5, 8],
//     ttt7: [0, 4, 8],
//     ttt8: [2, 4, 6]
//   }
