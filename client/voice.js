'use strict';

const context = require('./context');
const music = require('./music');

const createOscillator = (semitone, detune, waveform) => {
  const osc = context.createOscillator();
  osc.type = waveform;
  osc.semitone = semitone;
  osc.frequency.value = music.getFrequency(semitone);
  osc.detune.value = detune;
  osc.start();
  return osc;
};

const createFilter = (type, cutoff) => {
  const filter = context.createBiquadFilter();
  filter.type = type;
  filter.frequency.value = cutoff;
  return filter;
};

const createGain = (value) => {
  const gainNode = context.createGain();
  gainNode.gain.value = value;
  return gainNode;
};

module.exports = {
  createOscillator: createOscillator,
  createFilter: createFilter,
  createGain: createGain
};
