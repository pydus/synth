var http = require('http'),
    app  = require('./app');

var server = http.createServer(app);

server.listen(3000);
