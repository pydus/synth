class Envelope {
  constructor(attack, decay, sustain, release, context) {
    this.attack = attack;
    this.decay = decay;
    this.sustain = sustain;
    this.release = release;
    this.context = context;
  }

  connect(gain) {
    var now = this.context.currentTime;
    const gainValue = gain.value;
    gain.cancelScheduledValues(now);
    gain.setValueAtTime(0, now);
    gain.linearRampToValueAtTime(gainValue, now + this.attack);
    gain.linearRampToValueAtTime(this.sustain, now + this.attack + this.decay);
  }

  releaseNow(gain, cb) {
    var now = this.context.currentTime;
    gain.cancelScheduledValues(now);
    gain.setValueAtTime(gain.value, now);
    gain.linearRampToValueAtTime(0, now + this.release);
    setTimeout(cb, this.release * 1000);
  }
}

module.exports = Envelope;
