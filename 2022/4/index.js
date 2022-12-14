const fs = require("fs");
eval(fs.readFileSync("./input.js", "utf8"));

let part1score = 0;
let part2score = 0;
for (pair of input) {
    let pair1 = [parseInt(pair[0].split("-")[0]), parseInt(pair[0].split("-")[1])];
    let pair2 = [parseInt(pair[1].split("-")[0]), parseInt(pair[1].split("-")[1])];
    let range1 = [];
    let range2 = [];
    for (let i = pair1[0]; i <= pair1[1]; i++) {
        range1.push(i);
    };
    for (let i = pair2[0]; i <= pair2[1]; i++) {
        range2.push(i);
    };
    if (range1.every(i => range2.includes(i)) || range2.every(i => range1.includes(i))) part1score += 1;
    if (range1.some(i => range2.includes(i)) && range2.some(i => range1.includes(i))) part2score += 1;
};
console.log(`Part 1: ${part1score}`);
console.log(`Part 2: ${part2score}`);