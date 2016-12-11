'use strict';

const voiceComponents = require('./voice-components');

class Oscillator {
  constructor(waveform, cutoff, gain, envelope) {
    this.oscillators = [];
    this.gains = [];
    this.filters = [];
    this.waveform = waveform;
    this.cutoff = cutoff;
    this.gain = gain || 0.3;
    this.detune = 0;
    this.envelope = envelope;
    this.running = true;
  }

  get running() { return this._running; }
  get waveform() { return this._waveform; }
  get detune() { return this._detune; }
  get cutoff() { return this._cutoff; }
  get gain() { return this._gain; }

  set running(value) {
    this._running = value;
    if (value) {
      this.unMute();
    } else {
      this.mute();
    }
  }

  set waveform(waveform) {
    this._waveform = waveform;
    this.oscillators.forEach(osc => osc.type = waveform);
  }

  set detune(value) {
    this._detune = value;
    this.oscillators.forEach(osc => osc.detune.value = value);
  }

  set cutoff(value) {
    this._cutoff = value;
    this.filters.forEach(filter => filter.frequency.value = value);
  }

  set gain(value) {
    this._gain = value;
    this.addGains();
  }

  addGains() {
    this.gains.forEach(gainNode => gainNode.gain.value = this.gain);
  }

  connect(output) {
    this.output = output;
  }

  play(semitone) {
    this.stop(semitone);

    let osc    = voiceComponents.createOscillator(semitone, this.detune, this.waveform),
        gain   = voiceComponents.createGain(this.gain),
        filter = voiceComponents.createFilter('lowpass', this.cutoff);

    osc.connect(filter);
    this.envelope.run(gain);
    filter.connect(gain);

    if (this.running)
      gain.connect(this.output);

    this.oscillators.push(osc);
    this.filters.push(filter);
    this.gains.push(gain);
  }

  stop(semitone) {
    for (let i = 0; i < this.oscillators.length; i++) {
      if (this.oscillators[i].semitone !== semitone) {
        continue;
      }

      const osc    = this.oscillators[i],
            filter = this.filters[i],
            gain   = this.gains[i];

      const fn = () => {
        osc.stop();
        osc.disconnect();
        filter.disconnect();
        gain.disconnect();
        osc.isUsed = true;
        filter.isUsed = true;
        gain.isUsed = true;
        this.clean()
      };

      this.envelope.releaseNow(gain, fn);
    }
  }

  clean() {
    this.oscillators = this.oscillators.filter(osc => !osc.isUsed);
    this.filters = this.filters.filter(fil => !fil.isUsed);
    this.gains = this.gains.filter(gain => !gain.isUsed);
  }

  unMute() {
    this.gains.forEach(gainNode => gainNode.connect(this.output));
  }

  mute() {
    this.gains.forEach(gainNode => gainNode.disconnect());
  }
}

module.exports = Oscillator;
