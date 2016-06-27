const http = require('http');
const url = require('url');

let server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        return res.end('Invalid request type.');
    }

    let parsed = url.parse(req.url, true);
    let response = {}

    if (parsed.pathname === '/api/parsetime') {
        let date = new Date(parsed.query.iso);
        response.hour = date.getHours();
        response.minute = date.getMinutes();
        response.second = date.getSeconds();
    }
    else if (parsed.pathname === '/api/unixtime') {
        let date = new Date(parsed.query.iso);
        response.unixtime = date.getTime();
    }
    else {
        return res.end('Invalid route.');
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
});

server.listen(process.argv[2]);