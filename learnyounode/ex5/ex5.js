var fs = require('fs');
var path = require('path');

let dirPath = process.argv[2];
let fileExt = process.argv[3];

fs.readdir(dirPath, (err, list) => {
    if (err) throw err;
    
    list.forEach(file => {
        if (path.extname(file).endsWith(fileExt)) {
            console.log(file);
        }
    });
});