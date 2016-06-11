const express       = require('express'),
      app           = express(),
      path          = require('path'),
      webpackConfig = require('./webpack.config'),
      host          = webpackConfig.devServer.host || '127.0.0.1',
      generateIndex = require('./generate-index');

generateIndex(path.join(__dirname, ''));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (req, res) => {
  res.render('index', {
    cdn: app.get('env') === 'development' ? `http://${host}:8080/` : '/'
  });
});

module.exports = app;
