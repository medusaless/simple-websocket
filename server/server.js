var WebSocketServer = require('ws').Server;

var port = 8181;

var server = new WebSocketServer({
    port
});

server.on('connection', function (socket) {
    socket.on('message', function (message) {
        server.clients.forEach(function (conn) {
            conn.send(message);
        });
    });
});