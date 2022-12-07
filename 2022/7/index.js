const fs = require("fs");
eval(fs.readFileSync("./input.js", "utf8"));
// Part 1
let inputArray = input.split("\n");
let totalSize = 0;
let directorySizes = {};
let root = "/";
let pwd = [root];
for (let line of inputArray) {
    let lineParts = line.split(" ");
    let commandBool = lineParts[0] == "$";
    let cdBool = commandBool && lineParts[1] == "cd";
    if (cdBool && lineParts[2] == "..") {
        pwd.pop();
    } else if (cdBool && lineParts[2] != "/") {
        pwd.push(lineParts[2]);
    } else if (!commandBool && lineParts[0] != "dir") {
        let size = parseInt(lineParts[0]);
        let tmp = [...pwd];
        while (tmp.length > 0) {
            let key = tmp.join(".");
            if (!(key in directorySizes)) {
                directorySizes[key] = 0;
            };
            directorySizes[key] += size;
            tmp.pop();
        };
        totalSize += size;
    };
};
let smallDirectories = Object.values(directorySizes).filter(size => size <= 100000);
let smallDirectoriesSize = smallDirectories.reduce((acc, elem) => acc + elem, 0);
console.log(`Part 1: ${smallDirectoriesSize}`);
// Part 2
let storageUsage = directorySizes[root];
let storageCapacity = 70000000;
let freeStorageGoal = 30000000;
let minimumSizeToDelete = freeStorageGoal + storageUsage - storageCapacity;
let deletedFiles = Object.values(directorySizes).filter(size => size >= minimumSizeToDelete);
let directorySize = Math.min(...deletedFiles);
console.log(`Part 2: ${directorySize}`);