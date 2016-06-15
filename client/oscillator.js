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
    this.detune = 0;
    this.envelope = envelope;
    this.ampEnvelope = ampEnvelope;
    this.ampGain = ampGain;
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
    this.gains.forEach(gainNode => gainNode.gain.value = value);
  }

  set ampGain(value) {
    this._ampGain = value;
    this.ampGains.forEach(gainNode => gainNode.gain.value = value);
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

    var osc     = this.createOscillator(semitone),
        gain    = this.createGain(this.gain),
        ampGain = this.createGain(this.ampGain),
        filter  = this.createFilter('lowpass');

    osc.connect(filter);
    this.envelope.connect(gain);
    this.ampEnvelope.connect(ampGain);
    filter.connect(gain);
    gain.connect(ampGain);

    if (this.running)
      ampGain.connect(this.output);

    this.oscillators.push(osc);
    this.filters.push(filter);
    this.gains.push(gain);
    this.ampGains.push(ampGain);
  }

  stop(semitone) {
    for (var i = 0; i < this.oscillators.length; i++) {
      if (this.oscillators[i].semitone !== semitone)
        continue;

      const osc     = this.oscillators[i],
            filter  = this.filters[i],
            gain    = this.gains[i],
            ampGain = this.ampGains[i];

      const fn = () => {
        osc.stop();
        osc.disconnect();
        filter.disconnect();
        gain.disconnect();
        ampGain.disconnect();
        osc.isUsed = true;
        filter.isUsed = true;
        gain.isUsed = true;
        ampGain.isUsed = true;
        this.clean()
      };

      if (this.envelope.release > this.ampEnvelope.release)
        this.envelope.releaseNow(gain, fn);
      else this.ampEnvelope.releaseNow(ampGain, fn);
    }
  }

  clean() {
    var newOscillators = [],
        newFilters     = [],
        newGains       = [],
        newAmpGains    = [];

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

    this.ampGains.forEach(ampGain => {
      if (!ampGain.isUsed)
        newAmpGains.push(ampGain);
    });

    this.oscillators = newOscillators;
    this.filters = newFilters;
    this.gains = newGains;
    this.ampGains = newAmpGains;
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
