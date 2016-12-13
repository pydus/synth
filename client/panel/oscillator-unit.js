'use strict';

const Unit = require('./unit');

const OscillatorUnit = (waveform, detune, cutoff, gain, envelopeUnit) => {
  const oscillatorUnit = Unit();

  const _waveform         = waveform,
        _detune           = detune,
        _cutoff           = cutoff,
        _gain             = gain,
        _envelope         = envelopeUnit,
        _runningWatchers  = [];

  oscillatorUnit.initialize = () => {
    _waveform.initialize();
    _detune.initialize();
    _cutoff.initialize();
    _gain.initialize();
    _envelope.initialize();
  };

  oscillatorUnit.updateVisuals = () => {
    if (!oscillatorUnit.running) {
      _waveform.element.parentNode.parentNode.classList.add('off');
    } else {
      _waveform.element.parentNode.parentNode.classList.remove('off');
    }
  };

  return Object.assign(oscillatorUnit, {
    get waveform() { return _waveform; },
    get detune() { return _detune; },
    get cutoff() { return _cutoff; },
    get gain() { return _gain; },
    get envelope() { return _envelope; }
  });
};

module.exports = OscillatorUnit;
