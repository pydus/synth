'use strict';

const OscillatorUnit  = require('./oscillator-unit'),
      EnvelopeUnit    = require('./envelope-unit'),
      Quad            = require('./quad'),
      Tube            = require('./tube'),
      Knob            = require('./knob'),
      MAX_MASTER_GAIN = 0.15,
      MAX_OSC_GAIN    = 0.5;

const headings    = document.querySelectorAll('.oscillator .main h1'),
      quads       = document.getElementsByClassName('quadbutton'),
      knobs       = document.querySelectorAll('.oscillator .main .knob'),
      tubes       = document.getElementsByClassName('tube'),
      verticals   = document.getElementsByClassName('vertical'),
      ampKnobs    = document.querySelector('.amp .knobs'),
      matrixKnobs = document.querySelectorAll('.matrix .knob');

const attack     = Knob(ampKnobs.children[2], 0, 's', 0, 20),
      decay      = Knob(ampKnobs.children[3], 20, 's', 0, 20),
      sustain    = Knob(ampKnobs.children[6], 1, '%', 0, 1),
      release    = Knob(ampKnobs.children[7], 0.1, 's', 0, 10),
      envelope   = EnvelopeUnit(attack, decay, sustain, release),
      masterGain = Tube(tubes[0], 0.8 * MAX_MASTER_GAIN, '%', 0, MAX_MASTER_GAIN);

const RUNNING_OSCILLATORS_ON_STARTUP = 4,
      nOscillators = 6,
      oscillatorUnits = [],
      matrix = [];

const initializeHeadings = () => {
  for (let i = 0; i < headings.length; i++) {
    const n = i + 1;
    headings[i].addEventListener('click', event => panel[`osc${n}`].toggleRunning());
  }
};

const initializeMatrix = () => {
  for (let i = 0; i < Math.pow(nOscillators, 2); i++) {
    const knob = Knob(matrixKnobs[i], 0, '%', 0, 1);
    knob.initialize();
    matrix.push(knob);
  }
};

const initializeOscillators = () => {
  for (let i = 0; i < nOscillators; i++) {
    const waveform = Quad(quads[i], 'sine'),
          detune   = Knob(knobs[i * 3], 0, 'cents', 0, 1200, true),
          cutoff   = Knob(knobs[i * 3 + 1], 8000, 'Hz', 0, 10000),
          gain     = Knob(knobs[i * 3 + 2], 0.5 * MAX_OSC_GAIN, '%', 0, MAX_OSC_GAIN),
          attack   = Knob(verticals[i].children[1], 0, 's', 0, 20),
          decay    = Knob(verticals[i].children[3], 20, 's', 0, 20),
          sustain  = Knob(verticals[i].children[5], 1, '%', 0, 1),
          release  = Knob(verticals[i].children[7], 0, 's', 0, 10),
          envUnit  = EnvelopeUnit(attack, decay, sustain, release),
          osc      = OscillatorUnit(waveform, detune, cutoff, gain, envUnit);

    if (i > RUNNING_OSCILLATORS_ON_STARTUP - 1) {
      osc.running = false;
    }

    panel[`osc${i + 1}`] = osc;
    osc.initialize();
    oscillatorUnits.push(osc);
  }
};

const initialize = () => {
  initializeOscillators();
  envelope.initialize();
  masterGain.initialize();
  initializeHeadings();
  //initializeMatrix();
};

const panel = {
  initialize: initialize,
  nOscillators: nOscillators,
  matrix: matrix,
  envelope: envelope,
  gain: masterGain
};

module.exports = panel;
