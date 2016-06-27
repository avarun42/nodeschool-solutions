const net = require('net');
const strftime = require('strftime');

let server = net.createServer(socket => {
    let timeStamp = strftime('%Y-%m-%d %H:%M') + '\n';
    socket.end(timeStamp);
});

server.listen(process.argv[2]);