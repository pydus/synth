'use strict';

const Range = require('./range');

const DISTANCE = 200;

class Knob extends Range {
  constructor(element, value, unit, min, max, negative) {
    super(element, value, unit, min, max, negative, DISTANCE);
  }

  updateVisuals(ratio) {
    const liquid = this.element.children[0];
    liquid.style.transform = `scale(${ratio}, ${ratio})`;
    if (ratio < 0) {
      liquid.classList.add('negative');
    } else {
      liquid.classList.remove('negative');
    }
  }
}

module.exports = Knob;
