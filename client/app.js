require('./style.sass');

const panel      = require('./panel'),
      audioCtx   = new (window.AudioContext || window.webkitAudioContext)(),
      oscillator = audioCtx.createOscillator(),
      keys       = document.getElementsByClassName('key'),
      a          = Math.pow(2, 1 / 12);

const getFrequency = semitone => {
  return 440 * Math.pow(a, semitone);
};

const play = semitone => {
  oscillator.frequency.value = getFrequency(semitone);
  oscillator.type = panel.waveform;
  oscillator.connect(audioCtx.destination);
};

var isPressingKey = false;

oscillator.start();

for (var i = 0; i < keys.length; i++) {
  const key      = keys[i],
        semitone = key.getAttribute('id');

  key.addEventListener('mousedown', event => {
    isPressingKey = true;
    play(semitone);
    key.classList.remove('not-active');
  });

  key.addEventListener('mouseover', event => {
    if (isPressingKey) {
      play(semitone);
      key.classList.add('pressed');
      key.classList.remove('not-active');
    }
  });

  key.addEventListener('mouseout', event => {
    oscillator.disconnect();
    key.classList.add('not-active');
    key.classList.remove('pressed');
  });

  key.addEventListener('mouseup', event => {
    key.classList.remove('pressed');
  });
}

document.addEventListener('mouseup', event => {
  oscillator.disconnect();
  isPressingKey = false;
});
