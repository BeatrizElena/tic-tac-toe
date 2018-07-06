'use strict'

const generateTable = function () {
  // get the reference for the html element where the table will go
  const game = document.querySelector('#game-div')
  console.log(game)
  console.log("Generate table!")

  // create table and tbody elements
  const table = document.createElement('table')
  const tableBody = document.createElement('tbody')

  // create id counter that translates coordinates into an id
  let id = -1
  // create cells
  for (let i = 0; i < 3; i++) {
  // create table row
    const row = document.createElement('tr')
    for (let j = 0; j < 3; j++) {
    // create a td element and a text node
    // make the text node the contents of the td
    // put the td at the end of the table row
      const cell = document.createElement('td')
      // const cellText = document.createTextNode(i, j)
      // const position = 'R' + i + 'C' + j
      const position = [i, j]
      id++
      const cellText = document.createTextNode(id)
      cell.appendChild(cellText)
      row.appendChild(cell)
      cell.setAttribute('border', '2')
    }
    // add row to the end of the table
    tableBody.appendChild(row)
  }
  // put the tbody in the table
  table.appendChild(tableBody)

  // append table to div with id 'game-div'
  const gameDivId = document.getElementById('game-div')
  game.appendChild(table)
  gameDivId.appendChild(table)
  // let moves = 0
  // $('table').on('click', function () {
  //   const square = position // target square
  //   if ($(`#${square}`).text() === '') {
  //     moves % 2 === 0 ? $(`#${square}`).document.createTextNode('X').css('color', 'red') : $(`#${square}`).document.createTextNode('O').css('color', 'yellow')
  //     moves++
  //   } else if ($(`#${square}`).text() !== '') {
  //     $(`#${square}`).off()
  //   }

  // table.setAttribute('border', '2')
// }
}


module.exports = {
  generateTable
}
