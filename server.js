const http   = require('http'),
      app    = require('./app'),
      server = http.createServer(app);

server.listen(3000);
