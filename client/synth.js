const context    = new (window.AudioContext || window.webkitAudioContext)(),
      panel      = require('./panel/panel'),
      keys       = require('./keys'),
      Oscillator = require('./oscillator');

var gainNode = context.createGain();
var merger = context.createChannelMerger(1);
var osc1 = new Oscillator(panel.osc1.waveform, panel.osc1.gain, context);
var osc2 = new Oscillator(panel.osc2.waveform, panel.osc2.gain, context);

panel.initialize();
keys.initialize();

panel.osc1.quad.watch(value => osc1.setWaveform(value));
panel.osc2.quad.watch(value => osc2.setWaveform(value));
panel.ampGain.watch(value => gainNode.gain.value = value);

keys.start(semitone => {
  osc1.play(semitone);
  osc2.play(semitone);
});

keys.stop(() => {
  osc1.stop();
  osc2.stop();
});

osc1.connect(merger);
osc2.connect(merger);
merger.connect(gainNode);
gainNode.connect(context.destination);
