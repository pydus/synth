const OscillatorPanel = require('./oscillator-panel'),
      Quad            = require('./quad'),
      Tube            = require('./tube'),
      Knob            = require('./knob');

var headings = document.querySelectorAll('.oscillator h1'),
    quads    = document.getElementsByClassName('quadbutton'),
    knobs    = document.querySelectorAll('.oscillator .knob'),
    tubes    = document.getElementsByClassName('tube');

var nOscillators     = 4,
    oscillatorPanels = [];

var ampGain = new Tube(tubes[0], 0.2, 0, 1);

const initializeHeadings = () => {
  for (var i = 0; i < headings.length; i++) {
    const n = i + 1;
    headings[i].addEventListener('click', event => panel[`osc${n}`].toggleRunning());
  }
};

const initialize = () => {
  oscillatorPanels.forEach(osc => osc.initialize());
  ampGain.initialize();
  initializeHeadings();
};

var panel = {
  initialize: initialize,
  nOscillators: nOscillators,
  amp: {
    gain: ampGain
  }
};

for (var i = 0; i < nOscillators; i++) {
  var waveform = new Quad(quads[i], 'sine'),
      detune   = new Knob(knobs[i * 2], 0, 0, 1200, true),
      gain     = new Knob(knobs[i * 2 + 1], 0.5, 0, 1),
      osc      = new OscillatorPanel(waveform, detune, gain);
  if (i > 1)
    osc.setRunning(false);
  panel[`osc${i + 1}`] = osc;
  oscillatorPanels.push(osc);
}

module.exports = panel;
