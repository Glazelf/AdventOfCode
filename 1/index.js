const fs = require("fs");
eval(fs.readFileSync("./input.js", "utf8"));

// Part 1
let calorieData = {};
let calorieTotals = [];
let calorieIndex = 0;
for (calorie of input) {
    if (calorie == null) {
        calorieIndex += 1;
        continue;
    } else {
        if (!calorieData[`i${calorieIndex}`]) calorieData[`i${calorieIndex}`] = [];
        calorieData[`i${calorieIndex}`].push(calorie);
    };
};
for (calories of Object.values(calorieData)) {
    calorieTotals.push(parseInt(Object.values(calories).reduce((a, b) => a + b)));
};
calorieTotals = calorieTotals.sort((a, b) => b - a);
console.log(calorieTotals[0]) // Part 1 answer