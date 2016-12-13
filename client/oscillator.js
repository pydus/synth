'use strict';

const voice = require('./voice');

const Oscillator = (waveform, cutoff, gain, envelope) => {
  let _oscillators = [],
      _gains       = [],
      _filters     = [],
      _waveform    = waveform,
      _cutoff      = cutoff,
      _gain        = gain || 0.3,
      _envelope    = envelope,
      _detune      = 0,
      _running     = true,
      _output      = undefined;

  const play = (semitone) => {
    stop(semitone);

    const osc    = voice.createOscillator(semitone, _detune, _waveform),
          gain   = voice.createGain(_gain),
          filter = voice.createFilter('lowpass', _cutoff);

    osc.connect(filter);
    _envelope.run(gain);
    filter.connect(gain);

    if (_running) {
      gain.connect(_output);
    }

    _oscillators.push(osc);
    _filters.push(filter);
    _gains.push(gain);
  };

  const stop = (semitone) => {
    for (let i = 0; i < _oscillators.length; i++) {
      if (_oscillators[i].semitone !== semitone) {
        continue;
      }

      const osc    = _oscillators[i],
            filter = _filters[i],
            gain   = _gains[i];

      const fn = () => {
        osc.stop();
        osc.disconnect();
        filter.disconnect();
        gain.disconnect();
        osc.isUsed = true;
        filter.isUsed = true;
        gain.isUsed = true;
        clean();
      };

      _envelope.releaseNow(gain, fn);
    }
  };

  const addGains = () => {
    _gains.forEach(gainNode => gainNode.gain.value = gain);
  };

  const clean = () => {
    _oscillators = _oscillators.filter(osc => !osc.isUsed);
    _filters = _filters.filter(fil => !fil.isUsed);
    _gains = _gains.filter(gain => !gain.isUsed);
  };

  const unMute = () => {
    _gains.forEach(gainNode => gainNode.connect(_output));
  };

  const mute = () => {
    _gains.forEach(gainNode => gainNode.disconnect());
  };

  const setRunning = (value) => {
    _running = value;
    if (value) {
      unMute();
    } else {
      mute();
    }
  };

  const setWaveform = (waveform) => {
    _waveform = waveform;
    _oscillators.forEach(osc => osc.type = _waveform);
  };

  const setDetune = (value) => {
    _detune = value;
    _oscillators.forEach(osc => osc.detune.value = value);
  };

  const setCutoff = (value) => {
    _cutoff = value;
    _filters.forEach(filter => filter.frequency.value = value);
  };

  const setGain = (value) => {
    _gain = value;
    addGains();
  };

  const connect = (output) => {
    _output = output;
  };

  return {
    connect: connect,
    play: play,
    stop: stop,

    get running() { return _running; },
    get waveform() { return _waveform; },
    get detune() { return _detune; },
    get cutoff() { return _cutoff; },
    get gain() { return _gain; },

    set running(value) { setRunning(value); },
    set waveform(value) { setWaveform(value); },
    set detune(value) { setDetune(value); },
    set cutoff(value) { setCutoff(value); },
    set gain(value) { setGain(value); }
  };
};

module.exports = Oscillator;
