'use strict'

function generateTable () {
  // get the reference for the html element where the table will go
  const game = document.querySelector('#game-div')

  // create table and tbody elements
  const table = document.createElement('table')
  const tableBody = document.createElement('tbody')

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
      const position = 'R' + i + 'C' + j
      const cellText = document.createTextNode(position)
      cell.appendChild(cellText)
      row.appendChild(cell)
      cell.setAttribute('border', '2')
    }
    // add row to the end of the table
    tableBody.appendChild(row)
  }
  // put the tbody in the table
  table.appendChild(tableBody)

  // append table into body[0]
  const gameDivId = document.getElementById('game')
  game.appendChild(table)
  gameDivId.appendChild(table)

  // sets the border attibute of table to 2
  table.setAttribute('border', '2')
}

module.exports = {
  generateTable
}
