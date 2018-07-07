'use strict'

const generateTable = function () {
  // get the reference for the html element where the table will go
  const game = document.querySelector('#game-div')

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
      // commenting out next two lines bc cells should be empty
      // const cellText = document.createTextNode(id)
      // cell.appendChild(cellText)
      row.appendChild(cell)
      cell.setAttribute('id', id) // trying to set id to cell
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
}

module.exports = {
  generateTable
}
