const quads = document.getElementsByClassName('quadbutton');

var panel = {
  waveform: 'sine'
};

var quad, button;
for (var i = 0; i < quads.length; i++) {
  quad = quads[i];

  for (var j = 0; j < 4; j++) {
    button = quad.children[j];

    if (button.id === panel.waveform)
      button.classList.add('pressed');

    button.addEventListener('click', function(event) {
      for (var k = 0; k < 4; k++)
        quad.children[k].classList.remove('pressed');
      this.classList.add('pressed');
      panel.waveform = this.id;
    });
  }
}

module.exports = panel;
