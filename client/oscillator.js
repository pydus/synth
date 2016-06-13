const INTERVAL = Math.pow(2, 1 / 12),
      A        = 440;

class Oscillator {
  constructor(waveform, gain, audioContext) {
    this.setWaveform(waveform);
    this.gain = gain || 0.3;
    this.detune = 0;
    this.context = audioContext;
    this.oscillators = [];
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
    this.stop(semitone);

    var osc = this.context.createOscillator();
    osc.type = this.waveform;
    osc.semitone = semitone;
    osc.frequency.value = Oscillator.getFrequency(semitone);
    osc.detune.value = this.detune;
    osc.start();

    var gainNode = this.context.createGain();
    gainNode.gain.value = this.gain;

    osc.connect(gainNode);
    gainNode.connect(this.output);

    this.oscillators.push(osc);
  }

  stop(semitone) {
    for (var i = 0; i < this.oscillators.length; i++) {
      if (this.oscillators[i].semitone !== semitone)
        continue;
      this.oscillators[i].stop();
      this.oscillators.splice(i, 1);
    }
  }

  static getFrequency(semitone) {
    return A * Math.pow(INTERVAL, semitone);
  }
}

module.exports = Oscillator;
