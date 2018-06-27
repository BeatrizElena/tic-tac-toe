'use strict'
// let moves = 0
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

const win = function () {
  const message = $('#winner') // .html('')
  const x1 = $('#0, #1, #2').text()
  const x2 = $('#3, #4, #5').text()
  const x3 = $('#6, #7, #8').text()
  const x4 = $('#0, #3, #6').text()
  const x5 = $('#1, #4, #7').text()
  const x6 = $('#2, #5, #8').text()
  const x7 = $('#0, #4, #8').text()
  const x8 = $('#2, #4, #6').text()
  const o1 = $('#0, #1, #2').text()
  const o2 = $('#3, #4, #5').text()
  const o3 = $('#6, #7, #8').text()
  const o4 = $('#0, #3, #6').text()
  const o5 = $('#1, #4, #7').text()
  const o6 = $('#2, #5, #8').text()
  const o7 = $('#0, #4, #8').text()
  const o8 = $('#2, #4, #6').text()
  if (x1 === 'XXX' || x2 === 'XXX' || x3 === 'XXX' || x4 === 'XXX' || x5 === 'XXX' || x6 === 'XXX' || x7 === 'XXX' || x8 === 'XXX') {
    $(`#${message}`).html('X, you win!').css('color', 'yellow')
  } else if (o1 === 'OOO' || o2 === 'OOO' || o3 === 'OOO' || o4 === 'OOO' || o5 === 'OOO' || o6 === 'OOO' || o7 === 'OOO' || o8 === 'OOO') {
    $(`#${message}`).html('O, you win!').css('color', 'green')
  }
}

// when moves = 0, modulo is 0 or player one.
// moves increases by 1, so modulo is 1 or player 2

const switchPlayer = function () {
  let moves = 0
  $('.box').on('click', function (event) {
    const square = event.target.id // target square
    if ($(`#${square}`).text() === '') {
      moves % 2 === 0 ? $(`#${square}`).html('X').css('color', 'red') : $(`#${square}`).html('O').css('color', 'yellow')
      moves++
    } else if ($(`#${square}`).text() !== '') {
      $(`#${square}`).off()
    }
  }).win()
}

module.exports = {
  switchPlayer,
  win
}
