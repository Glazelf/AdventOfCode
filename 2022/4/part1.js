const fs = require("fs");
eval(fs.readFileSync("./input.js", "utf8"));

let score = 0;
for (pair of input) {
    let pair1low = parseInt(pair[0].split("-")[0]);
    let pair1high = parseInt(pair[0].split("-")[1]);
    let pair2low = parseInt(pair[1].split("-")[0]);
    let pair2high = parseInt(pair[1].split("-")[1]);
    let range1 = [];
    let range2 = [];
    for (let i = pair1low; i <= pair1high; i++) {
        range1.push(i);
    };
    for (let i = pair2low; i <= pair2high; i++) {
        range2.push(i);
    };
    if (range1.every(i => range2.includes(i)) || range2.every(i => range1.includes(i))) score += 1;
};
console.log(score); // Final score