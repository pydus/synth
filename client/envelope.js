class Envelope {
  constructor(attack, decay, sustain, release) {
    this.attack = attack;
    this.decay = decay;
    this.sustain = sustain;
    this.release = release;
  }

  connect(node) {
    var now = node.context.currentTime;
    var param = node.gain;
    const paramValue = param.value;
    param.cancelScheduledValues(now);
    param.setValueAtTime(0, now);
    param.linearRampToValueAtTime(paramValue, now + this.attack);
    param.linearRampToValueAtTime(this.sustain, now + this.attack + this.decay);
  }

  releaseNow(node, cb) {
    var now = node.context.currentTime;
    var param = node.gain;
    param.cancelScheduledValues(now);
    param.setValueAtTime(param.value, now);
    param.linearRampToValueAtTime(0, now + this.release);
    setTimeout(cb, this.release * 1000);
  }
}

module.exports = Envelope;
