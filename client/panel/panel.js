const OscillatorUnit = require('./oscillator-unit'),
      EnvelopeUnit   = require('./envelope-unit'),
      Quad           = require('./quad'),
      Tube           = require('./tube'),
      Knob           = require('./knob'),
      MAX_AMP_GAIN   = 0.15,
      MAX_OSC_GAIN   = 0.5;

var headings  = document.querySelectorAll('.oscillator .main h1'),
    quads     = document.getElementsByClassName('quadbutton'),
    knobs     = document.querySelectorAll('.oscillator .main .knob'),
    tubes     = document.getElementsByClassName('tube'),
    verticals = document.getElementsByClassName('vertical');

var nOscillators    = 6,
    oscillatorUnits = [];

var ampGain = new Tube(tubes[0], 0.8 * MAX_AMP_GAIN, '%', 0, MAX_AMP_GAIN);

const initializeHeadings = () => {
  for (var i = 0; i < headings.length; i++) {
    const n = i + 1;
    headings[i].addEventListener('click', event => panel[`osc${n}`].toggleRunning());
  }
};

const initialize = () => {
  oscillatorUnits.forEach(osc => osc.initialize());
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
      detune   = new Knob(knobs[i * 3], 0, 'cents', 0, 1200, true),
      cutoff   = new Knob(knobs[i * 3 + 1], 8000, 'Hz', 0, 10000),
      gain     = new Knob(knobs[i * 3 + 2], MAX_OSC_GAIN / 2, '%', 0, MAX_OSC_GAIN),
      attack   = new Knob(verticals[i].children[1], 0, 's', 0, 1),
      decay    = new Knob(verticals[i].children[3], 0.5, 's', 0, 1),
      sustain  = new Knob(verticals[i].children[5], MAX_OSC_GAIN / 2, '%', 0, MAX_OSC_GAIN),
      release  = new Knob(verticals[i].children[7], 0, 's', 0, 1),
      envUnit  = new EnvelopeUnit(attack, decay, sustain, release),
      osc      = new OscillatorUnit(waveform, detune, cutoff, gain, envUnit);

  if (i > 3)
    osc.running = false;

  panel[`osc${i + 1}`] = osc;
  oscillatorUnits.push(osc);
}

module.exports = panel;
