class OscillatorPanel {
  constructor(waveform, detune, gain) {
    this.waveform = waveform;
    this.detune = detune;
    this.gain = gain;
    this.running = true;
    this.stateWatchers = [];
  }

  watchState(fn) {
    this.stateWatchers.push(fn);
  }

  toggleState() {
    if (this.running)
      this.turnOff();
    else this.turnOn();
  }

  turnOn() {
    this.running = true;
    this.stateWatchers.forEach(watcher => watcher(true));
  }

  turnOff() {
    this.running = false;
    this.stateWatchers.forEach(watcher => watcher(false));
  }
}

module.exports = OscillatorPanel;
