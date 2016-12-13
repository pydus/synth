'use strict';

const Unit = () => {
  let _running = true;
  const _runningWatchers = [];

  const watchRunning = (fn) => {
    _runningWatchers.push(fn);
  };

  const setRunning = (value) => {
    _running = value;
    _runningWatchers.forEach(watcher => watcher(value));
    unit.updateVisuals();
  };

  const toggleRunning = () => {
    setRunning(!_running);
  };

  const unit = {
    initialize: () => {},
    updateVisuals: () => {},
    get running() { return _running; },
    set running(value) { setRunning(value); },
    watchRunning: watchRunning,
    toggleRunning: toggleRunning
  };

  return unit;
};

module.exports = Unit;
