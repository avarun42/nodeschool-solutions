var fs = require('fs');

let filePath = process.argv[2];
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    let numLines = data.split('\n').length - 1;
    console.log(numLines);
});