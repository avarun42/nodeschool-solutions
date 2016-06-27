const fs = require('fs');
const path = require('path');

function filterFiles(dirPath, fileExt, callback) {
    fs.readdir(dirPath, (err, list) => {
        if (err) return callback(err);

        let fileList = list.filter(file => path.extname(file).endsWith(fileExt));
        callback(null, fileList);
    });
}

module.exports = filterFiles;