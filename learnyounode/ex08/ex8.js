const http = require('http');

http.get(process.argv[2], (response) => {
    response.setEncoding('utf8');
    let output = '';

    response.on('data', (data) => {
        output += data; 
    });
    response.on('end', () => {
        console.log(output.length);
        console.log(output);
    })
});