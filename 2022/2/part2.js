const fs = require("fs");
eval(fs.readFileSync("./input.js", "utf8"));

let score = 0;
let rps = ["rock", "paper", "scissors"];
// Part 1
for (round of input) {
    let opponentInput = round[0];
    let roundResult = round[1];
    let roundResultInt = 0;
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
    let playerInput = rps.indexOf(opponentInput);
    switch (roundResult) {
        case "X":
            roundResult = "loss";
            playerInput = playerInput - 1;
            break;
        case "Y":
            score += 3;
            roundResult = "draw";
            break;
        case "Z":
            score += 6;
            roundResult = "win";
            playerInput += 1;
            break;
    };
    if (playerInput < 0) {
        playerInput = 2;
    } else if (playerInput > 2) {
        playerInput = 0;
    };
    score = score + playerInput + 1;
    playerInput = rps[playerInput];
    console.log(`${playerInput} vs. ${opponentInput}: ${roundResult}`);
};
console.log(score); // Final score