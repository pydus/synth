'use strict';

const keyBindings = require('./key-bindings');

let isClicking      = false,
    lastKeySemitone = undefined,
    mouseSemitone   = undefined;

const keys            = document.getElementsByClassName('key'),
      pressWatchers   = [],
      releaseWatchers = [],
      onPress         = fn => pressWatchers.push(fn),
      onRelease       = fn => releaseWatchers.push(fn);

const informWatchers = (watchers, semitone) => {
  for (let i = 0; i < watchers.length; i++) {
    if (typeof watchers[i] === 'function') {
      watchers[i](semitone);
    }
  }
};

const informPressWatchers = semitone => informWatchers(pressWatchers, semitone);
const informReleaseWatchers = semitone => informWatchers(releaseWatchers, semitone);

const pressVisuals = (key) => {
  key.classList.add('pressed');
  key.classList.remove('not-active');
};

const releaseVisuals = (key) => {
  key.classList.add('not-active');
  key.classList.remove('pressed');
};

const press = (key, mouse) => {
  const semitone = key.getAttribute('id');
  if (mouse) {
    mouseSemitone = semitone;
  }
  informPressWatchers(semitone);
  pressVisuals(key);
};

const release = (key) => {
  const semitone = key.getAttribute('id');
  informReleaseWatchers(semitone);
  releaseVisuals(key);
};

const addMouseListeners = () => {
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    key.addEventListener('mousedown', (event) => {
      isClicking = true;
      press(key, true);
    });

    key.addEventListener('mouseover', (event) => {
      if (isClicking) press(key, true);
    });

    key.addEventListener('mouseout', (event) => {
      if (isClicking) release(key);
    });

    key.addEventListener('mouseup', (event) => {
      releaseVisuals(key);
    });
  }

  document.addEventListener('mouseup', (event) => {
    isClicking = false;
    informReleaseWatchers(mouseSemitone);
  });
};

const addKeyListeners = () => {
  document.addEventListener('keydown', (event) => {
    const semitone = keyBindings[event.key];
    if (semitone !== lastKeySemitone) {
      lastKeySemitone = semitone;
      if (typeof semitone !== 'undefined') {
        const key = document.getElementById(semitone);
        press(key);
      }
    }
  });

  document.addEventListener('keyup', (event) => {
    lastKeySemitone = undefined;
    const semitone = keyBindings[event.key];
    if (typeof semitone !== 'undefined') {
      const key = document.getElementById(semitone);
      release(key);
    }
  });
};

const initialize = () => {
  addMouseListeners();
  addKeyListeners();
};

module.exports = {
  initialize: initialize,
  onPress: onPress,
  onRelease: onRelease
};
