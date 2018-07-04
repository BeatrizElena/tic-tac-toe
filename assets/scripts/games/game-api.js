'use strict'

const config = require('../config')
const store = require('../store')

// get game
const create = function (data) {
  // console.log('data: ', data)
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
    // data: data
  })
}

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const show = function (game) {
  return $.ajax({
    url: config.apiUrl + '/games/' + game.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const update = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + data.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
    // data: data
  })
}

module.exports = {
  create,
  index,
  show,
  update
}
