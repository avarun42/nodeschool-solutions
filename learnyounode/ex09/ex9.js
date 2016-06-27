const http = require('http');
const onComplete = require('./onComplete');

let streamResults = [null, null, null]

Array(3).fill().map((_, i) => {
    http.get(process.argv[i+2], (response) => {
        response.setEncoding('utf8');
        let output = '';

        response.on('data', (data) => {
            output += data; 
        });
        response.on('end', () => {
            streamResults[i] = output;
            onComplete(streamResults, 3);
        })
    });
});