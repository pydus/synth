const jade = require('jade'),
      fs   = require('fs');

var watching = false;

/**
 * Watches for changes in all views and generates a new index.html file when
 * a change is detected.
 * @param  {String} path The path at which index.html will be created.
 * @return {undefined}
 */
const watch = (path) => {
  fs.watch('views', (event, filename) => {
    if (event === 'change') {
      generate(path);
    }
  })
};

/**
 * Creates index.html file out of the index view and keeps it updated
 * when changes are made to the view.
 * @param  {string} path The path at which index.html will be created.
 * @return {undefined}
 */
const generate = (path) => {
  if (typeof path === 'undefined') {
    path = '.';
  }

  var html = jade.renderFile('views/index.jade', {
    cdn: 'public/'
  });

  fs.writeFile(`${path}/index.html`, html, (err) => {
    if (err) console.log(err);
  });

  if (!watching) {
    watch(path);
    watching = true;
  }
};

module.exports = generate;
