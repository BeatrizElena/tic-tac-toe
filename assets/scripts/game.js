'use strict'
let moves = 0
const ticTacToeWin =
  {
    ttt1: [0, 1, 2],
    ttt2: [3, 4, 5],
    ttt3: [6, 7, 8],
    ttt4: [0, 3, 6],
    ttt5: [1, 4, 7],
    ttt6: [2, 5, 8],
    ttt7: [0, 4, 8],
    ttt8: [2, 4, 6]
  }
const gamex = []
const gameo = []
// let square

const winner = function (event) {
  // const square =
  $('.box').on('click', function (event) {
    // console.log(event.target.id)
    const square = event.target.id
    const message = $('#winner') // .html('')
    if ($(`#${square}`).length >= 5) {
      if (gamex === ticTacToeWin.ttt0 || `#${square}` === ticTacToeWin.ttt1 || `#${square}` === ticTacToeWin.ttt2 || `#${square}` === ticTacToeWin.ttt3 || `#${square}` === ticTacToeWin.tt4 || `#${square}` === ticTacToeWin.ttt5 || `#${square}` === ticTacToeWin.ttt6 || `#${square}` === ticTacToeWin.ttt7 || `#${square}` === ticTacToeWin.ttt8) {
        // inside if
        $(`#${message}`).html('You win!').css('color', 'yellow')
      }
    }
  })
}

const gameBoard = function () {
  // target square
  $('.box').on('click', function (event) {
    // console.log(event.target.id)
    const square = event.target.id
    if ($(`#${square}`).text() === '') {
      // when moves = 0, modulo is 0 or player one.
      // moves increases by 1, so modulo is 1 or player 2
      moves % 2 === 0 ? $(`#${square}`).html('X').css('color', 'red') : $(`#${square}`).html('O').css('color', 'yellow')
      if ($(`#${square}`).text() === 'X') {
        gamex.push(`#${square}`)
      } else {
        gameo.push(`#${square}`)
      }
      moves++
    } else if ($(`#${square}`).text() !== '') {
      $(`#${square}`).off()
    }
  }).winner()
}

module.exports = gameBoard
