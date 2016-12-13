'use strict';

const Unit = require('./unit');

const EnvelopeUnit = (attack, decay, sustain, release) => {
  const envelopeUnit = Unit();

  const _attack  = attack,
        _decay   = decay,
        _sustain = sustain,
        _release = release;

  envelopeUnit.initialize = () => {
    _attack.initialize();
    _decay.initialize();
    _sustain.initialize();
    _release.initialize();
  };

  return Object.assign(envelopeUnit, {
    get attack() { return _attack; },
    get decay() { return _decay; },
    get sustain() { return _sustain; },
    get release() { return _release; }
  });
};

module.exports = EnvelopeUnit;
