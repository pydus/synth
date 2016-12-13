'use strict';

const panel = require('./panel/panel');
const master = panel.envelope;

const Envelope = (attack, decay, sustain, release) => {
  let _attack  = attack,
      _decay   = decay,
      _sustain = sustain,
      _release = release;

  const run = (node) => {
    const now = node.context.currentTime;
    const gain = node.gain;

    const attack = _attack > master.attack.value ?
            _attack : master.attack.value,
          decay = _decay < master.decay.value ?
            _decay : master.decay.value,
          sustain = _sustain * master.sustain.value;

    gain.cancelScheduledValues(now);
    gain.setValueAtTime(0, now);
    gain.linearRampToValueAtTime(gain.value, now + attack);
    gain.linearRampToValueAtTime(gain.value * sustain, now + attack + decay);
  };

  const releaseNow = (node, cb) => {
    const now = node.context.currentTime;
    const gain = node.gain;
    const release = _release + master.release.value;

    gain.cancelScheduledValues(now);
    gain.setValueAtTime(gain.value, now);
    gain.linearRampToValueAtTime(0, now + release);
    setTimeout(cb, release * 1000);
  };

  return {
    run: run,
    releaseNow: releaseNow,

    get attack() { return _attack; },
    get decay() { return _decay; },
    get sustain() { return _sustain; },
    get release() { return _release; },

    set attack(value) { _attack = value; },
    set decay(value) { _decay = value; },
    set sustain(value) { _sustain = value; },
    set release(value) { _release = value; },

    attackDefault: attack,
    decayDefault: decay,
    sustainDefault: sustain,
    releaseDefault: release
  };
};

module.exports = Envelope;
