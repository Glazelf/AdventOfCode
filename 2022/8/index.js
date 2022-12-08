const fs = require("fs");
eval(fs.readFileSync("./input.js", "utf8"));
input = input.split("\n").map((item) => {
    return item.split("");
});
// Solution isn't finished but I didn't have much time today and today's problem made me fucking livid.
// I looked up the question for part 2 and added some placeholder code for it, but because I can't access the question it goes untested :) ok thanks 
let visibleTrees = 0;
let highestScore = 0;
let forestWidth = input[0].length;
let forestHeight = input.length;
for (let y = 0; y < forestHeight; y++) {
    for (let x = 0; x < forestWidth; x++) {
        let currentScore = 0;
        // Edges are always visible
        let isVisibleBool = false;
        if (x == forestWidth - 1 || y == forestHeight - 1 || x == 0 || y == 0) isVisibleBool = true;
        // Left
        let leftCount = 0;
        for (let i = x - 1; i >= 0; i--) {
            leftCount++;
            if (input[y][i] >= input[y][x]) {
                isVisibleBool = true;
                console.log("Left");
                break;
            };
        };
        // Right
        let rightCount = 0;
        for (let i = x + 1; i < forestWidth; i++) {
            rightCount++;
            if (input[y][i] >= input[y][x]) {
                isVisibleBool = true;
                console.log("Right");
                break;
            };
        };
        // Up
        let upCount = 0;
        for (let i = y - 1; i >= 0; i--) {
            upCount++;
            if (input[i][x] >= input[y][x]) {
                isVisibleBool = true;
                console.log("Up");
                break;
            };
        };
        // Down
        let downCount = 0;
        for (let i = y + 1; i < forestHeight; i++) {
            downCount++;
            if (input[i][x] >= input[y][x]) {
                isVisibleBool = true;
                console.log("Down");
                break;
            };
        };
        console.log(isVisibleBool);
        if (isVisibleBool) visibleTrees++;
        currentScore = leftCount * rightCount * upCount * downCount;
        highestScore = Math.max(highestScore, currentScore);
    };
};
console.log(`Part 1: ${visibleTrees}`);
console.log(`Part 2: ${highestScore}`);