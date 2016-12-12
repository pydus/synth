'use strict';

const panel = require('./panel/panel');
const master = panel.envelope;

class Envelope {
  constructor(attack, decay, sustain, release) {
    this.attack = attack;
    this.decay = decay;
    this.sustain = sustain;
    this.release = release;
    this.attackDefault = attack;
    this.decayDefault = decay;
    this.sustainDefault = sustain;
    this.releaseDefault = release;
  }

  run(node) {
    const now = node.context.currentTime;
    const gain = node.gain;

    const attack  = this.attack > master.attack.value ? this.attack : master.attack.value,
          decay   = this.decay < master.decay.value ? this.decay : master.decay.value,
          sustain = this.sustain * master.sustain.value;

    gain.cancelScheduledValues(now);
    gain.setValueAtTime(0, now);
    gain.linearRampToValueAtTime(gain.value, now + attack);
    gain.linearRampToValueAtTime(gain.value * sustain, now + attack + decay);
  }

  releaseNow(node, cb) {
    const now = node.context.currentTime;
    const gain = node.gain;
    const release = this.release + master.release.value;

    gain.cancelScheduledValues(now);
    gain.setValueAtTime(gain.value, now);
    gain.linearRampToValueAtTime(0, now + release);
    setTimeout(cb, release * 1000);
  }
}

module.exports = Envelope;
