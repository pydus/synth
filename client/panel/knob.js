'use strict';

const Range = require('./range');

const DISTANCE = 200;

const Knob = (element, value, unit, min, max, negative) => {
  const knob = Range(element, value, unit, min, max, negative, DISTANCE);

  knob.updateVisuals = (ratio) => {
    const liquid = element.children[0];
    liquid.style.transform = `scale(${ratio}, ${ratio})`;
    if (ratio < 0) {
      liquid.classList.add('negative');
    } else {
      liquid.classList.remove('negative');
    }
  };

  return knob;
};

module.exports = Knob;
