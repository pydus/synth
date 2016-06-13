const context    = new (window.AudioContext || window.webkitAudioContext)(),
      panel      = require('./panel/panel'),
      keys       = require('./keys'),
      Oscillator = require('./oscillator');

panel.initialize();
keys.initialize();

var oscillators = [],
    merger      = context.createChannelMerger(1),
    gainNode    = context.createGain(),
    compressor  = context.createDynamicsCompressor();

compressor.threshold.value = -50;
compressor.knee.value = 40;
compressor.ratio.value = 12;
compressor.reduction.value = -20;
compressor.attack.value = 0;
compressor.release.value = 0.25;

gainNode.gain.value = panel.amp.gain.value;
panel.amp.gain.watch(value => gainNode.gain.value = value);

for (var i = 0; i < panel.nOscillators; i++) {
  const oscPanel = panel[`osc${i + 1}`],
        osc      = new Oscillator(oscPanel.waveform.value, oscPanel.gain.value, context);
  osc.setRunning(oscPanel.running);
  oscPanel.watchRunning(value => osc.setRunning(value));
  oscPanel.waveform.watch(value => osc.setWaveform(value));
  oscPanel.detune.watch(value => osc.setDetune(value));
  oscPanel.gain.watch(value => osc.setGain(value));
  oscillators.push(osc);
}

keys.onPress(semitone => oscillators.forEach(osc => osc.play(semitone)));
keys.onRelease(semitone => oscillators.forEach(osc => osc.stop(semitone)));

oscillators.forEach(osc => osc.connect(merger));
merger.connect(gainNode);
gainNode.connect(compressor);
compressor.connect(context.destination);
