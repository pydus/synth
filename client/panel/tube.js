const Range = require('./range');

class Tube extends Range {
  constructor(element, value, min, max) {
    super(element, value, min, max, false);
  }

  updateVisuals(ratio) {
    this.element.children[0].style.transform = `translate(0, -${ratio * 100}%)`;
  }
}

module.exports = Tube;
