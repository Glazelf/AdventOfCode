const fs = require("fs");
eval(fs.readFileSync("./input.js", "utf8"));

let calorieData = {};
let calorieTotals = [];
let calorieIndex = 0;
for (calorie of input) {
    if (calorie == null) {
        calorieIndex += 1;
        continue;
    } else {
        if (!calorieData[calorieIndex]) calorieData[calorieIndex] = [];
        calorieData[calorieIndex].push(calorie);
    };
};
for (calories of Object.values(calorieData)) {
    calorieTotals.push(parseInt(Object.values(calories).reduce((a, b) => a + b)));
};
calorieTotals = calorieTotals.sort((a, b) => b - a);
console.log(`Part 1: ${calorieTotals[0]}`);
console.log(`Part 2: ${calorieTotals[0] + calorieTotals[1] + calorieTotals[2]}`);