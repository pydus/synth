'use strict';

const info = require('./info');

let _range;
let hovering = false;

const followEvent = (event) => {
  const rect     = _range.element.getBoundingClientRect(),
        distance = _range.distance || rect.height,
        dy       = event.clientY - _range.clientY;

  let ratio;

  if (!_range.distance) {
    ratio = (rect.top - (event.clientY - rect.height)) / rect.height;
  } else {
    ratio = _range.startRatio - dy / distance;
  }

  if (ratio < 0 && !_range.negative) {
    ratio = 0;
  } else if (ratio > 1) {
    ratio = 1;
  } else if (ratio < -1) {
    ratio = -1;
  }

  const value = ratio * (_range.max - _range.min) + _range.min;

  _range.value = value;
};

const follow = (range, event) => {
  _range = range;
  document.addEventListener('mousemove', followEvent);
  followEvent(event);
};

const unfollow = () => {
  document.removeEventListener('mousemove', followEvent);
  if (!hovering) {
    info.hide();
  }
};

document.addEventListener('mouseup', unfollow);

module.exports = {
  follow: follow,
  set hovering(value) { hovering = value; }
};
