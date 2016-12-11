'use strict';

class Unit {
  constructor() {
    this._running = true;
    this.runningWatchers = [];
  }

  initialize() { }

  watchRunning(fn) {
    this.runningWatchers.push(fn);
  }

  toggleRunning() {
    this.running = !this.running;
  }

  get running() {
    return this._running;
  }

  set running(value) {
    this._running = value;
    this.runningWatchers.forEach(watcher => watcher(value));
    this.updateVisuals();
  }

  updateVisuals() { }
}

module.exports = Unit;
