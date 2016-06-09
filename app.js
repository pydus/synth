const express = require('express'),
      app     = express(),
      path    = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('env', 'development')

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (req, res) => {
  res.render('index', {
    cdn: app.get('env') === 'development' ? 'http://localhost:8080/' : '/'
  });
});

module.exports = app;
