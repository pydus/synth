const Quad = require('./quad'),
      Tube = require('./tube'),
      quads = document.getElementsByClassName('quadbutton'),
      tubes = document.getElementsByClassName('tube');

var osc1 = new Quad(quads[0], 'sine'),
    osc2 = new Quad(quads[1], 'square');

var ampGain = new Tube(tubes[0], 0.9, 0, 1);

const initialize = () => {
  osc1.initialize();
  osc2.initialize();
  ampGain.initialize();
};

var panel = {
  initialize: initialize,
  osc1: {
    quad: osc1,
    waveform: osc1.value,
    gain: 0.2
  },
  osc2: {
    quad: osc2,
    waveform: osc2.value,
    gain: 0.4
  },
  ampGain: ampGain
};

module.exports = panel;
