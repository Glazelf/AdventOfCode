const fs = require("fs");
eval(fs.readFileSync("./input.js", "utf8"));

// Mutate datasets
let stacksObject = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [] };
let stacksSplit = stacks.split("\n");
stacksSplit.forEach(row => {
    let indexStack = 1;
    let items = row.split("[");
    items.forEach(item => {
        if (item[1] !== "]") return;
        if (stacksObject[5].length == 0) indexStack = 5; // Fuck you whoever made this input string
        parseInt(stacksObject[indexStack].push(item.split("]")[0]));
        if (indexStack < 9) {
            if (item.length > 3) indexStack += 2;
            if (item.length <= 3) indexStack += 1;
        };
    });
});
for (let i = 1; i < 10; i++) {
    stacksObject[i] = stacksObject[i].reverse();
};
let ordersArray = [];
orders.forEach(order => {
    order = order.substring(5).replace(" from ", "-").replace(" to ", "-");
    ordersArray.push(order.split("-"));
});
// Part1
let stacksResult1 = stacksObject;
ordersArray.forEach(order => {
    let amount = order[0];
    let originStack = order[1];
    let targetStack = order[2];
    for (let i = 0; i < amount; i++) stacksResult1[targetStack].push(stacksResult1[originStack].pop());
});
console.log(stacksObject);