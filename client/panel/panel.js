const OscillatorPanel = require('./oscillator-panel'),
      Quad            = require('./quad'),
      Tube            = require('./tube'),
      Knob            = require('./knob');

var headings = document.querySelectorAll('.oscillator h1'),
    quads    = document.getElementsByClassName('quadbutton'),
    knobs    = document.querySelectorAll('.oscillator .knob'),
    tubes    = document.getElementsByClassName('tube');

var ampGain = new Tube(tubes[0], 0.2, 0, 1);

var osc1Waveform = new Quad(quads[0], 'sine'),
    osc2Waveform = new Quad(quads[1], 'square');

var osc1Detune = new Knob(knobs[0], 0,   0, 1200, true);
var osc1Gain   = new Knob(knobs[1], 0.5, 0, 1);
var osc2Detune = new Knob(knobs[2], 0,   0, 1200, true);
var osc2Gain   = new Knob(knobs[3], 0.5, 0, 1);

var osc1 = new OscillatorPanel(osc1Waveform, osc1Detune, osc1Gain);
var osc2 = new OscillatorPanel(osc2Waveform, osc2Detune, osc2Gain);

const initializeHeadings = () => {
  for (var i = 0; i < headings.length; i++) {
    const n = i + 1;
    headings[i].addEventListener('click', function(event) {
      this.parentNode.classList.toggle('off');
      panel['osc' + n].toggleState();
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
  osc1: osc1,
  osc2: osc2,
  amp: {
    gain: ampGain
  }
};

module.exports = panel;
