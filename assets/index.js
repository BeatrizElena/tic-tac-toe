'use strict'

const games = {
  ticTacToeWin: [
    {
      ttt1: [0, 1, 2]
    },
    {
      ttt2: [3, 4, 5]
    },
    {
      ttt3: [6, 7, 8]
    },
    {
      ttt4: [0, 3, 6]
    },
    {
      ttt5: [1, 4, 7]
    },
    {ttt6: [2, 5, 8]
    },
    {
      ttt7: [0, 4, 8]
    },
    {
      ttt8: [2, 4, 6]
    }
  ],
  playerX: {
    id: 1,
    player_o: 'O',
    email: 'x@example.com'
  },
  playerO: {
    id: 2,
    player_o: 'O',
    email: 'o@example.com'
  },
  play: function (player, tileChosen) {
    if (tileChosen === '1') {
      $(#one)
    }

  }
}

console.log(games.play(1, 5))
// let printO = 'O'
// for (let i = 0; i < this.grid.length; i++) {
//   if (tileChosen === this.grid[i] && player === this.player1) {
//     printOnBoard = this.grid[i].key
//   }
// }
// return test

// module.exports = {
//   play
// }
