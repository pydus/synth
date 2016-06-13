const context    = new (window.AudioContext || window.webkitAudioContext)(),
      panel      = require('./panel/panel'),
      keys       = require('./keys'),
      Oscillator = require('./oscillator');

var gainNode = context.createGain();
var merger = context.createChannelMerger(1);

panel.initialize();
keys.initialize();

var osc1 = new Oscillator(panel.osc1.waveform.value, panel.osc1.gain.value, context);
var osc2 = new Oscillator(panel.osc2.waveform.value, panel.osc2.gain.value, context);

panel.osc1.watchState(state => osc1.setState(state));
panel.osc2.watchState(state => osc2.setState(state));
panel.osc1.waveform.watch(value => osc1.setWaveform(value));
panel.osc2.waveform.watch(value => osc2.setWaveform(value));
panel.osc1.detune.watch(value => osc1.setDetune(value));
panel.osc2.detune.watch(value => osc2.setDetune(value));
panel.osc1.gain.watch(value => osc1.setGain(value));
panel.osc2.gain.watch(value => osc2.setGain(value));
panel.amp.gain.watch(value => gainNode.gain.value = value);

keys.onPress(semitone => {
  osc1.play(semitone);
  osc2.play(semitone);
});

keys.onRelease(semitone => {
  osc1.stop(semitone);
  osc2.stop(semitone);
});

osc1.connect(merger);
osc2.connect(merger);
merger.connect(gainNode);
gainNode.connect(context.destination);
