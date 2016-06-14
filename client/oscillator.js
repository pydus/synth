const INTERVAL = Math.pow(2, 1 / 12),
      A        = 440;

class Oscillator {
  constructor(waveform, cutoff, gain, envelope, audioContext) {
    this.oscillators = [];
    this.gains = [];
    this.filters = [];
    this.waveform = waveform;
    this.cutoff = cutoff;
    this.gain = gain || 0.3;
    this.detune = 0;
    this.envelope = envelope;
    this.context = audioContext;
    this.running = true;
  }

  get running() { return this._running; }
  get waveform() { return this._waveform; }
  get detune() { return this._detune; }
  get cutoff() { return this._cutoff; }
  get gain() { return this._gain; }

  set running(value) {
    this._running = value;
    if (value) this.unMute();
    else this.mute();
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
    this.gains.forEach(gainNode => gainNode.gain.value = value);
  }

  connect(output) {
    this.output = output;
  }

  createOscillator(semitone) {
    var osc = this.context.createOscillator();
    osc.type = this._waveform;
    osc.semitone = semitone;
    osc.frequency.value = Oscillator.getFrequency(semitone);
    osc.detune.value = this._detune;
    osc.start();
    return osc;
  }

  createFilter() {
    var filter = this.context.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = this._cutoff;
    return filter;
  }

  createGain() {
    var gainNode = this.context.createGain();
    gainNode.gain.value = this._gain;
    return gainNode;
  }

  play(semitone) {
    this.stop(semitone);

    var osc    = this.createOscillator(semitone),
        gain   = this.createGain(),
        filter = this.createFilter();

    osc.connect(filter);
    this.envelope.connect(gain.gain);
    filter.connect(gain);

    if (this.running)
      gain.connect(this.output);

    this.oscillators.push(osc);
    this.filters.push(filter);
    this.gains.push(gain);
  }

  stop(semitone) {
    for (var i = 0; i < this.oscillators.length; i++) {
      if (this.oscillators[i].semitone !== semitone)
        continue;

      const osc    = this.oscillators[i],
            filter = this.filters[i],
            gain   = this.gains[i];

      this.envelope.releaseNow(gain.gain, () => {
        osc.stop();
        osc.isUsed = true;
        filter.isUsed = true;
        gain.isUsed = true;
        this.clean();
      });
    }
  }

  clean() {
    var newOscillators = [],
        newFilters     = [],
        newGains       = [];

    this.oscillators.forEach(osc => {
      if (!osc.isUsed)
        newOscillators.push(osc);
    });

    this.filters.forEach(filter => {
      if (!filter.isUsed)
        newFilters.push(filter);
    });

    this.gains.forEach(gain => {
      if (!gain.isUsed)
        newGains.push(gain);
    });

    this.oscillators = newOscillators;
    this.filters = newFilters;
    this.gains = newGains;
  }

  unMute() {
    this.gains.forEach(gainNode => gainNode.connect(this.output));
  }

  mute() {
    this.gains.forEach(gainNode => gainNode.disconnect());
  }

  static getFrequency(semitone) {
    return A * Math.pow(INTERVAL, semitone);
  }
}

module.exports = Oscillator;
