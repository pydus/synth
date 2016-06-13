const Range = require('./range');

const DISTANCE = 120;

class Knob extends Range {
  constructor(element, value, min, max, negative) {
    super(element, value, min, max, negative, DISTANCE);
  }

  updateVisuals(ratio) {
    var liquid = this.element.children[0];
    liquid.style.transform = `scale(${ratio}, ${ratio})`;
    if (ratio < 0)
      liquid.classList.add('negative');
    else liquid.classList.remove('negative');
  }
}

module.exports = Knob;
