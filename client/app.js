require('./thing')();
require('./style.sass');

const audioCtx   = new (window.AudioContext || window.webkitAudioContext)(),
      oscillator = audioCtx.createOscillator(),
      keys       = document.getElementsByClassName('key'),
      a          = Math.pow(2, 1 / 12);

const getFrequency = semitone => {
  return 440 * Math.pow(a, semitone);
};

var isPressingKey = false;

oscillator.type = 'sawtooth';
oscillator.start();

for (var i = 0; i < keys.length; i++) {
  const key      = keys[i],
        semitone = key.getAttribute('id');

  key.addEventListener('mousedown', event => {
    isPressingKey = true;
    oscillator.frequency.value = getFrequency(semitone);
    oscillator.connect(audioCtx.destination);
  });

  key.addEventListener('mouseover', event => {
    if (isPressingKey) {
      oscillator.frequency.value = getFrequency(semitone);
      oscillator.connect(audioCtx.destination);
    }
  });

  key.addEventListener('mouseout', event => {
    oscillator.disconnect();
  });
}

document.addEventListener('mouseup', event => {
  isPressingKey = false;
  oscillator.disconnect();
});
