const fs = require("fs");
eval(fs.readFileSync("./input.js", "utf8"));

let score = 0;
let alphabet = "abcdefghijklmnopqrstuvwxyz";
for (rucksack of input) {
    let compartment1 = Array.from(rucksack.substring(0, rucksack.length / 2));
    let compartment2 = Array.from(rucksack.substring(rucksack.length / 2, rucksack.length));
    let shared = compartment1.filter(element => compartment2.includes(element));
    shared = [...new Set(shared)]; // Remove duplicates
    for (match of shared) {
        score += alphabet.indexOf(match.toLowerCase());
        score += 1; // Account for indexing
        if (match == match.toUpperCase()) score += 26;
    };
};
console.log(score); // Final score