'use strict'

const config = require('../config.js')

const index = function () {
  return $.ajax({
    url: config.apiUrls + '/games[?over=]',
    method: 'GET'
  })
}

const show = function (id) {
  return $.ajax({
    url: config.apiUrls + '/games/' + id,
    method: 'GET'
  })
}

const destroy = function (id) {
  return $.ajax({
    url: config.apiUrls + '/games/' + id,
    method: 'DELETE'
  })
}

const update = function (data) {
  return $.ajax({
    url: config.apiUrls + '/games/' + data.games.id,
    method: 'PATCH',
    data
  })
}

const create = function (data) {
  return $.ajax({
    url: config.apiUrls + '/games/', // can also do: `${config.apiOrigin}/books/`
    method: 'POST',
    data
  })
}

module.exports = {
  index,
  show,
  destroy,
  update,
  create
}
