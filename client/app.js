require('./thing')();
require('./style.sass');

const audioCtx   = new (window.AudioContext || window.webkitAudioContext)(),
      oscillator = audioCtx.createOscillator(),
      keys       = document.getElementsByClassName('key'),
      a          = Math.pow(2, 1 / 12);

const getFrequency = semitone => {
  return 440 * Math.pow(a, semitone);
};

oscillator.type = 'sawtooth';
oscillator.start();

for (var i = 0; i < keys.length; i++) {
  const key = keys[i];
  key.addEventListener('click', event => {
    const semitone = key.getAttribute('id');
    oscillator.frequency.value = getFrequency(semitone);
    oscillator.connect(audioCtx.destination);
    setTimeout(() => oscillator.disconnect(), 400);
  });
}
