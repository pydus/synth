const Quad     = require('./quad'),
      Tube     = require('./tube'),
      Knob     = require('./knob'),
      headings = document.querySelectorAll('.oscillator h1'),
      quads    = document.getElementsByClassName('quadbutton'),
      knobs    = document.querySelectorAll('.oscillator .knob'),
      tubes    = document.getElementsByClassName('tube');

var osc1Waveform = new Quad(quads[0], 'sine'),
    osc2Waveform = new Quad(quads[1], 'square');

var ampGain = new Tube(tubes[0], 0.4, 0, 1);

var osc1Detune = new Knob(knobs[0], 0,   0, 1000, true);
var osc1Gain   = new Knob(knobs[1], 0.5, 0, 1);
var osc2Detune = new Knob(knobs[2], 0,   0, 1000, true);
var osc2Gain   = new Knob(knobs[3], 0.5, 0, 1);

const initializeHeadings = () => {
  for (var i = 0; i < headings.length; i++) {
    headings[i].addEventListener('click', function(event) {
      this.parentNode.classList.toggle('off');
    });
  }
};

const initialize = () => {
  osc1Waveform.initialize();
  osc2Waveform.initialize();
  ampGain.initialize();
  osc1Detune.initialize();
  osc1Gain.initialize();
  osc2Detune.initialize();
  osc2Gain.initialize();
  initializeHeadings();
};

var panel = {
  initialize: initialize,
  osc1: {
    waveform: osc1Waveform,
    detune: osc1Detune,
    gain: osc1Gain
  },
  osc2: {
    waveform: osc2Waveform,
    detune: osc2Detune,
    gain: osc2Gain
  },
  amp: {
    gain: ampGain
  }
};

module.exports = panel;
