const INTERVAL  = Math.pow(2, 1 / 12),
      A         = 440;

class Oscillator {
  constructor(waveform, gain, audioContext) {
    this.setWaveform(waveform);
    this.gain = gain;
    this.context = audioContext;
  }

  connect(output) {
    this.output = output;
  }

  setWaveform(waveform) {
    this.waveform = waveform;
  }

  play(semitone) {
    this.osc = this.context.createOscillator();
    this.osc.type = this.waveform;
    this.osc.frequency.value = Oscillator.getFrequency(semitone);
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
