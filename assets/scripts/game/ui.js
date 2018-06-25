'use strict'

const onSuccess = function (data) {
  console.log('data is ', data)
  if (!data) {
    console.warn('Either you deleted something, or something went wrong.')
  } else if (data.book) {
    console.log(data.book)
  } else {
    console.table(data.books)
  }
}

const onError = function (response) {
  console.error(response)
}

const draftGame = function (player) {
  console.log('test')
  // clear square 1
  $('#one').html('')
  if (player === playerO) {
    $('#one').html('X')
  } else {
    $('#one').html('O')
  }
}


module.exports = {
  onSuccess,
  onError,
  draftGame
}
