var Range = require('./range');

const DISTANCE = 150;

class Knob extends Range {
  constructor(element, value, min, max, negative) {
    super(element, value, min, max, negative, DISTANCE, false);
  }

  updateVisuals(ratio) {
    this.element.children[0].style.transform = `scale(${ratio}, ${ratio})`;
    if (ratio < 0)
      this.element.children[0].classList.add('negative');
    else this.element.children[0].classList.remove('negative');
  }
}

module.exports = Knob;
