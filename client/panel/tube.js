'use strict';

const Range = require('./range');

const Tube = (element, value, unit, min, max) => {
  const tube = Range(element, value, unit, min, max, false);

  tube.updateVisuals = (ratio) => {
    element.children[0].style.transform = `translate(0, -${ratio * 100}%)`;
  };

  return tube;
};

module.exports = Tube;
