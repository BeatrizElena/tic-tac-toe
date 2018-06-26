'use strict'
let moves = 0
const minMoves = 5
const ticTacToeWin = [
  {
    ttt1: [0, 1, 2]
  },
  {
    ttt2: [3, 4, 5]
  },
  {
    ttt3: [6, 7, 8]
  },
  {
    ttt4: [0, 3, 6]
  },
  {
    ttt5: [1, 4, 7]
  },
  {ttt6: [2, 5, 8]
  },
  {
    ttt7: [0, 4, 8]
  },
  {
    ttt8: [2, 4, 6]
  }
]
const game = []

const gameBoard = function () {
  // target square
  $('.box').on('click', function (event) {
    // console.log(event.target.id)
    const square = event.target.id
    if ($(`#${square}`).text() === '') {
      // when moves = 0, modulo is 0 or player one.
      // moves increases by 1, so modulo is 1 or player 2
      moves % 2 === 0 ? $(`#${square}`).html('X').css('color', 'red') : $(`#${square}`).html('O').css('color', 'yellow')
      game.push()
      moves++
    } else if ($(`#${square}`).text() !== '') {
      $(`#${square}`).off()
    }
  })
}

module.exports = gameBoard
