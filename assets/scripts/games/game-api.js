'use strict'

const config = require('../config')
const store = require('../store')

// get game
const create = function () {
  // console.log('data: ', data)

  let data = {
    "game": {
      "cells": ["", "", "", "", "", "", "", "", ""],
      "over": false,
      "player_x": {
        "id": store.user.id,
        "email": store.user.email
      },
      "player_o": null
    }
  }

  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: JSON.stringify(data)
  });
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
const getGameById = function (id) {
  return $.ajax({
    url: config.apiUrl + '/games/' + id,
    method: 'GET',
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  });
}
const showGames = function (over) {

  let url = (over === false) ? config.apiUrl + '/games?over=false' : config.apiUrl + '/games?over=true';

  return $.ajax({
    url: url,
    method: 'GET',
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  });
}

const update = function (dataGame, index, value, over) {

  let data = {
    "game": {
      "cell": {
        "index": index,
        "value": value
      },
      "over": over
    }
  }

  return $.ajax({
    url: config.apiUrl + '/games/' + dataGame.game.id,
    method: 'PATCH',
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: JSON.stringify(data)
  })
}

module.exports = {
  create,
  index,
  showGames,
  update,
  getGameById
}
