const fs = require("fs");
eval(fs.readFileSync("./input.js", "utf8"));

let markerSize = 14; // Part 1 = 4, Part 2 = 14
let firstMarker = null;
for (let i = 0; i < input.length; i++) {
    let recent4 = input.substring(i, i + markerSize);
    let recent4Array = [...new Set(Array.from(recent4))];
    if (recent4Array.length == markerSize && !firstMarker) firstMarker = i + markerSize;
};
console.log(firstMarker);