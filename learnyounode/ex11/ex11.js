const fs = require('fs');
const http = require('http');

let server = http.createServer((req, res) => {
    let file = fs.createReadStream(process.argv[3]);
    file.pipe(res);
});

server.listen(process.argv[2]);