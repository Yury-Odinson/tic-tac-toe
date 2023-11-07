import { buttonNewGame, game } from "./declaration.js";

const cells = document.querySelectorAll(".cell");

// variable, that shows the game is active or not
let isGame = true;
// current player who must be set item in cell
let player = "first";
// game field, where will be write player's move
let gameField = ["", "", "", "", "", "", "", ""];

// playerN - current player; cell - cell on the playing field
function playersMove(playerN, cell) {
    const arr = [...cells];
    const current = arr.indexOf(cell);
    if (playerN === "first") {
        cell.innerHTML = "X";
        gameField[current] = cell.innerHTML;
        checkWinner();
        return player = "second";
    } else {
        cell.innerHTML = "O";
        gameField[current] = cell.innerHTML;
        checkWinner();
        return player = "first";
    }
}

cells.forEach(element => {
    element.addEventListener("click", () => {
        if (isGame) {
            if (element.innerHTML === "") {
                playersMove(player, element);
            } else return;
        }
    })
})

function checkWinner() {
    // indexes in the field 
    const winCombination = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combination of winCombination) {
        const [a, b, c] = combination;
        // example: if gameField[indexes] 0===1===2  --> player win.  
        if (gameField[a] === gameField[b] && gameField[b] === gameField[c]) {
            if (gameField[c] !== "") {
                isGame = false;
                return console.log(`${gameField[c]} is winner`);
            }
        }
    }
}

buttonNewGame.addEventListener("click", () => {
    isGame = true;
    player = "first";
    gameField = gameField.map(() => "");
    cells.forEach(element => element.innerHTML = "");
});
