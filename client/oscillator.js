const INTERVAL = Math.pow(2, 1 / 12),
      A        = 440;

class Oscillator {
  constructor(waveform, cutoff, gain, envelope, audioContext) {
    this.oscillators = [];
    this.gainNodes = [];
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
    this.oscillators.forEach(osc => {
      osc.type = waveform;
    });
  }

  set detune(value) {
    this._detune = value;
    this.oscillators.forEach(osc => {
      osc.detune.value = value;
    });
  }

  set cutoff(value) {
    this._cutoff = value;
    this.filters.forEach(filter => {
      filter.frequency.value = value;
    });
  }

  set gain(value) {
    this._gain = value;
    this.gainNodes.forEach(gainNode => {
      gainNode.gain.value = value;
    });
  }

  connect(output) {
    this.output = output;
  }

  play(semitone) {
    this.stop(semitone);

    var osc      = this.context.createOscillator(),
        gainNode = this.context.createGain(),
        filter   = this.context.createBiquadFilter();

    osc.type = this._waveform;
    osc.semitone = semitone;
    osc.frequency.value = Oscillator.getFrequency(semitone);
    osc.detune.value = this._detune;
    osc.start();

    filter.type = 'lowpass';
    filter.frequency.value = this._cutoff;

    gainNode.gain.value = this._gain;

    osc.connect(filter);
    filter.connect(gainNode);

    if (this.running)
      gainNode.connect(this.output);

    this.oscillators.push(osc);
    this.filters.push(filter);
    this.gainNodes.push(gainNode);
  }

  stop(semitone) {
    for (var i = 0; i < this.oscillators.length; i++) {
      if (this.oscillators[i].semitone !== semitone)
        continue;
      this.oscillators[i].stop();
      this.oscillators.splice(i, 1);
      this.filters.splice(i, 1);
      this.gainNodes.splice(i, 1);
    }
  }

  unMute() {
    this.gainNodes.forEach(gainNode => gainNode.connect(this.output));
  }

  mute() {
    this.gainNodes.forEach(gainNode => gainNode.disconnect());
  }

  static getFrequency(semitone) {
    return A * Math.pow(INTERVAL, semitone);
  }
}

module.exports = Oscillator;
