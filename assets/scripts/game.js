'use strict'
let moves = 0
const gameBoard = function () {
  // target square
  $('.box').on('click', function (event) {
    // console.log(event.target.id)
    const square = event.target.id
    if ($(`#${square}`).text('')) {
      moves % 2 === 0 ? $(`#${square}`).html('X').css('color', 'red') : $(`#${square}`).html('O').css('color', 'yellow')
      moves++
    }
  })
}

module.exports = gameBoard

// const gameBoard = function () {
// target square
//   $('.box').on('click', function (event) {
//     console.log(event.target.id)
//     const square = event.target.id
//     let switchplayer = false
//     if ($(`#${square}`).text('')) {
//         switchplayer = !switchplayer
//       //let market = moves % 2 === 0 ? $(`#${square}`).html('X').css('color', 'red') : $(`#${square}`).html('O').css('color', 'yellow')
//       moves++
//       if (switchplayer) {
//         $(`#${square}`).html('X').css('color', 'red')
//       } else {
//         $(`#${square}`).html('O').css('color', 'yellow')
//       }
//     }
//   })
// }
