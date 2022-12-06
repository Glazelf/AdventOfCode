const fs = require("fs");
eval(fs.readFileSync("./input.js", "utf8"));

let firstMarker4 = null;
let firstMarker14 = null;
for (let i = 0; i < input.length; i++) {
    let recent4 = input.substring(i, i + 4);
    let recent4Array = [...new Set(Array.from(recent4))];
    if (recent4Array.length == 4 && !firstMarker4) firstMarker4 = i + 4;
    let recent14 = input.substring(i, i + 14);
    let recent14Array = [...new Set(Array.from(recent14))];
    if (recent14Array.length == 14 && !firstMarker14) firstMarker14 = i + 14;
};
console.log(`Part 1: ${firstMarker4}`);
console.log(`Part 2: ${firstMarker14}`);