const INTERVAL = Math.pow(2, 1 / 12),
      A        = 440;

class Oscillator {
  constructor(waveform, cutoff, gain, envelope,
      ampGain, ampEnvelope, audioContext) {
    this.oscillators = [];
    this.gains = [];
    this.ampGains = [];
    this.filters = [];
    this.waveform = waveform;
    this.cutoff = cutoff;
    this.gain = gain || 0.3;
    this.ampGain = ampGain;
    this.detune = 0;
    this.envelope = envelope;
    envelope.connectEnvelope(ampEnvelope);
    this.context = audioContext;
    this.running = true;
  }

  get running() { return this._running; }
  get waveform() { return this._waveform; }
  get detune() { return this._detune; }
  get cutoff() { return this._cutoff; }
  get gain() { return this._gain; }
  get ampGain() { return this._ampGain; }

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
    this.addGains();
  }

  set ampGain(value) {
    this._ampGain = value;
    this.addGains();
  }

  addGains() {
    this.gains.forEach(gainNode => gainNode.gain.value = this.gain + this.ampGain);
  }

  connect(output) {
    this.output = output;
  }

  createOscillator(semitone) {
    var osc = this.context.createOscillator();
    osc.type = this.waveform;
    osc.semitone = semitone;
    osc.frequency.value = Oscillator.getFrequency(semitone);
    osc.detune.value = this.detune;
    osc.start();
    return osc;
  }

  createFilter(type) {
    var filter = this.context.createBiquadFilter();
    filter.type = type;
    filter.frequency.value = this.cutoff;
    return filter;
  }

  createGain(value) {
    var gainNode = this.context.createGain();
    gainNode.gain.value = value;
    return gainNode;
  }

  play(semitone) {
    this.stop(semitone);

    var osc    = this.createOscillator(semitone),
        gain   = this.createGain(this.gain + this.ampGain),
        filter = this.createFilter('lowpass');

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
    for (var i = 0; i < this.oscillators.length; i++) {
      if (this.oscillators[i].semitone !== semitone)
        continue;

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
