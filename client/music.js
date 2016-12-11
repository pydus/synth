'use strict';

const INTERVAL = Math.pow(2, 1 / 12),
      A        = 440;

const getFrequency = (semitone) => {
  return A * Math.pow(INTERVAL, semitone);
};

module.exports = {
  getFrequency: getFrequency
};
