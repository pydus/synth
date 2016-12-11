'use strict';

const Unit = require('./unit');

class EnvelopeUnit extends Unit {
  constructor(attack, decay, sustain, release) {
    super();
    this.attack = attack;
    this.decay = decay;
    this.sustain = sustain;
    this.release = release;
  }

  initialize() {
    this.attack.initialize();
    this.decay.initialize();
    this.sustain.initialize();
    this.release.initialize();
  }
}

module.exports = EnvelopeUnit;
