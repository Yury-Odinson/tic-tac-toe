import { player1Name, player2Name, inputPlayer1Name, inputPlayer2Name, player1WinCounter, player2WinCounter } from "./declaration.js";
import { player1Wins, player2Wins } from "./index.js";

player1Name.innerHTML = "First Player ";
player2Name.innerHTML = "Second Player ";

inputPlayer1Name.addEventListener("input", (e) => {
    player1Name.innerHTML = e.target.value;
})

inputPlayer2Name.addEventListener("input", (e) => {
    player2Name.innerHTML = e.target.value;
})

player1WinCounter.innerHTML = `has ${player1Wins} wins`;
player2WinCounter.innerHTML = `has ${player2Wins} wins`;
