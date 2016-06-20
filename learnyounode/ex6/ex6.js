const filterFiles = require('./filterFiles');

const dirPath = process.argv[2];
const fileExt = process.argv[3];

filterFiles(dirPath, fileExt, (err, fileList) => {
    if (err) return console.error(err);

    fileList.forEach(file => {
        console.log(file);
    })
});