class OscillatorPanel {
  constructor(waveform, detune, gain) {
    this.waveform = waveform;
    this.detune = detune;
    this.gain = gain;
    this.running = true;
    this.runningWatchers = [];
  }

  initialize() {
    this.waveform.initialize();
    this.detune.initialize();
    this.gain.initialize();
  }

  watchRunning(fn) {
    this.runningWatchers.push(fn);
  }

  toggleRunning() {
    this.setRunning(!this.running);
  }

  setRunning(running) {
    this.running = running;
    this.runningWatchers.forEach(watcher => watcher(running));
    this.updateVisuals();
  }

  updateVisuals() {
    if (!this.running)
      this.waveform.element.parentNode.classList.add('off');
    else this.waveform.element.parentNode.classList.remove('off');
  }
}

module.exports = OscillatorPanel;
