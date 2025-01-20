//Simple server that just responds with "Hello World" to all requests
var http = require('http');
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
});
server.listen(process.env.PORT || 3000, process.env.IP || "");