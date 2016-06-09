const jade = require('jade'),
  fs = require('fs');

var watching = false;

const watch = () => {
  fs.watch('views', (event, filename) => {
    if (event !== 'change') return;
    generate();
  })
};

const generate = () => {
  var html = jade.renderFile('views/index.jade', {
    cdn: 'public/'
  });

  fs.writeFile('./index.html', html, (err) => {
    if (err) return console.log(err);
  });

  if (!watching) {
    watch();
    watching = true;
  }
};

module.exports = generate;
