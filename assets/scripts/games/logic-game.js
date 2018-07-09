const api = require('./game-api')
const user_events = require('../auth/ui')

const size = 3
let moves = 0
let data = {}
let game = {}

let score_x = 0,
    score_o = 0,
    tie = 0

const printBoard = () => {
    //resetGame();
    game = {};
    data = {};
    moves = 0;
    // create game in database and in client
    api.create()
        .then((result) => {
            game = result;
            console.log(result)
            let parent = document.querySelector('.col-md-8')
            // separate div for game that can be independly manipulated to show and hide
            let board = parent.querySelector('.board')
            // start creation of table
            let table = '<table>';
            // create rows with outer loop. After each row is created, 
            // the inner loop creates 3 td's (cells) in the row.
            for (let i = 0; i < size; i++) {
                table += '<tr>'
                for (let j = 0; j < size; j++) {
                    table += '<td row="' + i + '" column="' + j + '"></td>'
                }
                table += '</tr>'
            }
            // in div with class .board, render table
            board.innerHTML = table;
            // add event listener to each td element (i.e. each cell)
            let columns = board.getElementsByTagName('td');
            for (let i = 0; i < columns.length; i++) {
                columns[i].addEventListener('click', mark);

            }
        })
        .catch((err) => {
            $("#message").text('There is an error ' + err);
        })

}

const mark = () => {
    let td = event.target;

    if (td.innerHTML) {
        return;
    }

    // gettings attributes
    let row = td.getAttribute('row');
    let column = td.getAttribute('column');

    let current_mark = moves % 2 === 0 ? 'X' : 'O';

    td.innerHTML = current_mark;
    data[row + '' + column] = current_mark;
    moves++;

    let index = setCellValue(row, column, current_mark, game);

    // calling update function
    updateCell(game, index, current_mark, false)

    if (checkForWin(current_mark, size)) {
        if (current_mark === 'X') {
            score_x += 1;
            $("#score_x").text(score_x);
        } else {
            score_o += 1;
            $("#score_o").text(score_o);
        }

        $("#message").text(`Player ${current_mark} won`);
        updateCell(game, index, current_mark, true)
        resetMessage();
        resetGame();
    } else if (moves === Math.pow(size, 2)) {
        tie += 1;
        $("#tie-games").text(tie);
        $("#message").text('It is a Tie');
        updateCell(game, index, current_mark, true)
        resetMessage();
        resetGame();
    }

}
// update cells in database
const updateCell = (game, index, value, over) => {

    api.update(game, index, value, over)
        .then((result) => {
            console.log('Game updated ', result)
        })
        .catch((err) => {
            $("#message").text('There is an error ' + err);
        })

}
const setCellValue = (row, column, current_mark, gamedata) => {

    let index = null;

    if (row == 0 && column == 0) {
        index = 0;
        gamedata.game.cells.splice(0, 1, current_mark);

    } else if (row == 0 && column == 1) {
        index = 1;
        gamedata.game.cells.splice(1, 1, current_mark);

    } else if (row == 0 && column == 2) {
        index = 2;
        gamedata.game.cells.splice(2, 1, current_mark);

    } else if (row == 1 && column == 0) {
        index = 3;
        gamedata.game.cells.splice(3, 1, current_mark);

    } else if (row == 1 && column == 1) {
        index = 4;
        gamedata.game.cells.splice(4, 1, current_mark);

    } else if (row == 1 && column == 2) {
        index = 5;
        gamedata.game.cells.splice(5, 1, current_mark);

    } else if (row == 2 && column == 0) {
        index = 6;
        gamedata.game.cells.splice(6, 1, current_mark);

    } else if (row == 2 && column == 1) {
        index = 7;
        gamedata.game.cells.splice(7, 1, current_mark);

    } else if (row == 2 && column == 2) {
        index = 8;
        gamedata.game.cells.splice(8, 1, current_mark);

    }

    return index;
}
const checkForWin = (mark, size) => {
    let vertical_count = 0,
        horizontal_count = 0,
        right_to_left_count = 0,
        left_to_right_count = 0;

    for (let i = 0; i < size; i++) {

        vertical_count = 0;
        horizontal_count = 0;

        for (let j = 0; j < size; j++) {

            if (data[i + '' + j] == mark) {
                horizontal_count++;
            }

            if (data[j + '' + i] == mark) {
                vertical_count++;
            }
        }

        if (data[i + '' + i] == mark) {
            left_to_right_count++;
        }

        if (data[(size - 1 - i) + '' + i] == mark) {
            right_to_left_count++;
        }

        if (horizontal_count == size || vertical_count == size) {
            return true;
        }

    }

    if (left_to_right_count == size || right_to_left_count == size) {
        return true;
    }

    return false;
}
const resetGame = () => {
    game = {};
    data = {};
    moves = 0;
    setTimeout(function () {
        $('.board').empty();
    }, 3000);

}

const resetMessage = () => {
    game = {};
    data = {};
    moves = 0;
    setTimeout(function () {
        $('#message').empty();
    }, 2000);
}

const resetSignInMessage = () => {
    setTimeout(function () {
        $('.initial-view').empty();
    }, 500);
}

// const backToGame = () => {
//     $(".initial-view").load(location.href + " .initial-view")
//     // $('#sign-up').on('submit', user_events.onSignUp)
//     // $('#sign-in').on('submit', user_events.onSignIn)
// }

module.exports = {
    printBoard,
    resetGame,
    resetMessage,
    resetSignInMessage
}