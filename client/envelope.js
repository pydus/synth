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
    this.connectedEnvelope = undefined;
  }

  connectEnvelope(envelope) {
    this.connectedEnvelope = envelope;
  }

  run(node) {
    var now = node.context.currentTime;
    var param = node.gain;
    const paramValue = param.value;

    var connectedAttack  = this.connectedEnvelope ? this.connectedEnvelope.attack : 0,
        connectedDecay   = this.connectedEnvelope ? this.connectedEnvelope.decay : 0,
        connectedSustain = this.connectedEnvelope ? this.connectedEnvelope.sustain : 0;

    var attack  = this.attack + connectedAttack,
        decay   = this.decay + connectedDecay,
        sustain = this.sustain + connectedSustain;

    param.cancelScheduledValues(now);
    param.setValueAtTime(0, now);
    param.linearRampToValueAtTime(paramValue, now + attack);
    param.linearRampToValueAtTime(sustain, now + attack + decay);
  }

  releaseNow(node, cb) {
    var now = node.context.currentTime;
    var param = node.gain;
    var connectedRelease = this.connectedEnvelope ? this.connectedEnvelope.release : 0;
    var release = this.release + connectedRelease;

    param.cancelScheduledValues(now);
    param.setValueAtTime(param.value, now);
    param.linearRampToValueAtTime(0, now + release);
    setTimeout(cb, release * 1000);
  }
}

module.exports = Envelope;
