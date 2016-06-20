var fs = require('fs');

let filePath = process.argv[2];
let file = fs.readFileSync(filePath);

let numLines = file.toString().split('\n').length - 1;
console.log(numLines);