'use strict'

const store = require('./store.js')

// const notAllowPlay = function () {
//   // console.log(store)
//   if (!store.user) {
//     $('.box').off('click')
//     $('#game-create').off('click')
//     $('#message').html('Please sign in!').css('color', 'rgb(54, 66, 78)')
//   } else {
//     playGame()
//   }
// }

const signInPrompt = function () {
  // console.log(store)
  if (!store.user) {
    // $('.box').off('click')
    // $('#game-create').off('click')
    $('#message').html('Please sign in!').css('color', 'rgb(54, 66, 78)')
  }
}

const playGame = function () {
  let moves = 0
  $('table').on('click', function (event) {
    const square = event.target.id // target square
    if (square.text() === '') {
      moves % 2 === 0 ? (square).html('X').css('color', 'red') : (square).html('O').css('color', 'yellow')
      moves++
    } else if ((square).text() !== '') {
      (square).off()
    }
    win()
    // updateGame.update()
  })
}

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

module.exports = {
  signInPrompt,
  // startGameButton,
  // notAllowPlay
  playGame
}

// const win = function () {
//   const x1 = $('#0, #1, #2').text()
//   console.log(x1)
//   const x2 = $('#3, #4, #5').text()
//   console.log(x2)
//   const x3 = $('#6, #7, #8').text()
//   console.log(x3)
//   const x4 = $('#0, #3, #6').text()
//   const x5 = $('#1, #4, #7').text()
//   const x6 = $('#2, #5, #8').text()
//   const x7 = $('#0, #4, #8').text()
//   const x8 = $('#2, #4, #6').text()
//   if (x1 === 'XXX' || x2 === 'XXX' || x3 === 'XXX' || x4 === 'XXX' || x5 === 'XXX' || x6 === 'XXX' || x7 === 'XXX' || x8 === 'XXX') {
//     $('#message').html('X, you win!').css('color', 'red')
//     $('.box').off('click')
//   } else if (x1 === 'OOO' || x2 === 'OOO' || x3 === 'OOO' || x4 === 'OOO' || x5 === 'OOO' || x6 === 'OOO' || x7 === 'OOO' || x8 === 'OOO') {
//     $('#message').html('O, you win!').css('color', 'green')
//     $('.box').off('click')
//   }
// }

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

// // Code idea from https://stats.seandolinar.com/make-a-html-table-with-jquery/
// Table not rendering as of 7/1 am
// const BuildTable = function Table () {
//   // set table attributes
//   this.data = []
//   this.tableClass = ''
// }
//
// // Setter Methods (allow Table object to have its attibutes set and have the data set)
// BuildTable.prototype.setData = function (data) {
//   // sets the data from the api
//   this.data = data
//   return this
// }
//
// BuildTable.prototype.setTableClass = function (tableClass) {
//   // sets the table class name
//   this.tableClass = tableClass
//   return this
// }
//
// // build table
// BuildTable.prototype.build = function (container) {
//   // selector
//   container = container || '.table-container' || '.game'
//
//   // create table
//   const table = $('<table></table>').addClass(this.tableClass)
//   // create row
//   const tr = $('<tr></tr>')
//   //  create table cells
//   const td = $('<td></td>')
//
//   // Create
//   const tbody = $('<tbody></tbody>')
//
//   //  fill out tabl table body
//   this.data.forEach(function (d) {
//     d.forEach(function (e, j) {
//       // fill in the row
//       tr.append(td.clone().text(e))
//     })
//     // put row in the body
//     tbody.append(tr)
//   })
//   // put table in container
//   $(container).append(table.append(tbody))
//   return this
// }
//
// const table = function () {
//   if (store.user === true) {
//     BuildTable()
//     table
//       .setData(gameApi.data.games.cells)
//       .setTableClass('game2')
//       .build()
//   }
// }
