const Unit = require('./unit');

class OscillatorUnit extends Unit {
  constructor(waveform, detune, cutoff, gain, envelopeUnit) {
    super();
    this.waveform = waveform;
    this.detune = detune;
    this.cutoff = cutoff;
    this.gain = gain;
    this.envelope = envelopeUnit;
    this.running = true;
    this.runningWatchers = [];
  }

  initialize() {
    this.waveform.initialize();
    this.detune.initialize();
    this.cutoff.initialize();
    this.gain.initialize();
    this.envelope.initialize();
  }

  updateVisuals() {
    if (!this.running) {
      this.waveform.element.parentNode.parentNode.classList.add('off');
    } else {
      this.waveform.element.parentNode.parentNode.classList.remove('off');
    }
  }
}

module.exports = OscillatorUnit;
