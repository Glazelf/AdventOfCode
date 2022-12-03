const fs = require("fs");
eval(fs.readFileSync("./input.js", "utf8"));

let score = 0;
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let groupSize = 3;
for (let i = 0; i < input.length; i += groupSize) {
    let group = input.slice(i, i + groupSize);
    let badge = Array.from(group[0]).filter(value => group[1].includes(value) && group[2].includes(value))[0];
    score += alphabet.indexOf(badge.toLowerCase());
    score += 1; // Account for indexing
    if (badge == badge.toUpperCase()) score += 26;
};
console.log(score); // Final score