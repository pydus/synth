'use strict';

const context    = require('./context'),
      panel      = require('./panel/panel'),
      keys       = require('./keys');

const Envelope   = require('./envelope'),
      Oscillator = require('./oscillator');

panel.initialize();
keys.initialize();

const oscillators = [],
      merger      = context.createChannelMerger(1),
      gainNode    = context.createGain(),
      compressor  = context.createDynamicsCompressor();

compressor.threshold.value = -30;
compressor.knee.value = 40;
compressor.ratio.value = 12;
if (typeof compressor.reduction === 'object') {
  compressor.reduction.value = -20;
}
compressor.attack.value = 0;
compressor.release.value = 0.25;

gainNode.gain.value = panel.gain.value;
panel.gain.watch(value => gainNode.gain.value = value);

for (let i = 0; i < panel.nOscillators; i++) {
  const oscUnit = panel[`osc${i + 1}`];

  const envelope = Envelope(
    oscUnit.envelope.attack.value,
    oscUnit.envelope.decay.value,
    oscUnit.envelope.sustain.value,
    oscUnit.envelope.release.value
  );

  const osc = Oscillator(
    oscUnit.waveform.value,
    oscUnit.cutoff.value,
    oscUnit.gain.value,
    envelope
  );

  oscUnit.envelope.attack.watch(value => envelope.attack = value);
  oscUnit.envelope.decay.watch(value => envelope.decay = value);
  oscUnit.envelope.sustain.watch(value => envelope.sustain = value);
  oscUnit.envelope.release.watch(value => envelope.release = value);

  osc.running = oscUnit.running;
  oscUnit.watchRunning(value => osc.running = value);
  oscUnit.waveform.watch(value => osc.waveform = value);
  oscUnit.detune.watch(value => osc.detune = value);
  oscUnit.cutoff.watch(value => osc.cutoff = value);
  oscUnit.gain.watch(value => osc.gain = value);
  oscillators.push(osc);
}

keys.onPress(semitone => oscillators.forEach(osc => osc.play(semitone)));
keys.onRelease(semitone => oscillators.forEach(osc => osc.stop(semitone)));

oscillators.forEach(osc => osc.connect(merger));
merger.connect(gainNode);
gainNode.connect(compressor);
compressor.connect(context.destination);
