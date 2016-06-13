const INTERVAL  = Math.pow(2, 1 / 12),
      A         = 440;

class Oscillator {
  constructor(waveform, gain, audioContext) {
    this.setWaveform(waveform);
    this.gain = gain || 0.3;
    this.detune = 0;
    this.context = audioContext;
  }

  setDetune(value) {
    this.detune = value;
  }

  setGain(value) {
    this.gain = value;
  }

  connect(output) {
    this.output = output;
  }

  setWaveform(waveform) {
    this.waveform = waveform;
  }

  play(semitone) {
    this.stop();

    this.osc = this.context.createOscillator();
    this.osc.type = this.waveform;
    this.osc.frequency.value = Oscillator.getFrequency(semitone);
    this.osc.detune.value = this.detune;
    this.osc.start();

    this.gainNode = this.context.createGain();
    this.gainNode.gain.value = this.gain;

    this.osc.connect(this.gainNode);
    this.gainNode.connect(this.output);
  }

  stop() {
    if (!this.osc) return;
    this.osc.stop();
    this.osc = null;
  }

  static getFrequency(semitone) {
    return A * Math.pow(INTERVAL, semitone);
  }
}

module.exports = Oscillator;
