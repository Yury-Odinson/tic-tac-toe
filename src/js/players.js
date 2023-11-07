import { firstPlayerName, secondPlayerName, inputPlayer1Name, inputPlayer2Name, player1WinCounter, player2WinCounter } from "./declaration.js";
import { player1Wins, player2Wins } from "./index.js";

firstPlayerName.innerHTML = "First Player ";
secondPlayerName.innerHTML = "Second Player ";

inputPlayer1Name.addEventListener("input", (e) => {
    firstPlayerName.innerHTML = e.target.value;
})

inputPlayer2Name.addEventListener("input", (e) => {
    secondPlayerName.innerHTML = e.target.value;
})

player1WinCounter.innerHTML = `has ${player1Wins} wins`;
player2WinCounter.innerHTML = `has ${player2Wins} wins`;
