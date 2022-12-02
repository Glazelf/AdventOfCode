const fs = require("fs");
eval(fs.readFileSync("./input.js", "utf8"));

let score = 0;
let rps = ["rock", "paper", "scissors"];
// Part 1
for (round of input) {
    let opponentInput = round[0];
    let playerInput = round[1];
    switch (playerInput) {
        case "X":
            score += 1;
            playerInput = "rock";
            break;
        case "Y":
            score += 2;
            playerInput = "paper";
            break;
        case "Z":
            score += 3;
            playerInput = "scissors";
            break;
    };
    switch (opponentInput) {
        case "A":
            opponentInput = "rock";
            break;
        case "B":
            opponentInput = "paper";
            break;
        case "C":
            opponentInput = "scissors";
            break;
    };
    let rpsResult = (rps.length + rps.indexOf(playerInput) - rps.indexOf(opponentInput)) % rps.length;
    switch (rpsResult) {
        case 0: //  Tie
            score += 3;
            break;
        case 1: // Win
            score += 6;
            break;
    };
};
console.log(score); // Final score