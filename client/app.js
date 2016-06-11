require('./thing')();
require('./style.sass');

const audioCtx   = new (window.AudioContext || window.webkitAudioContext)(),
      oscillator = audioCtx.createOscillator(),
      keys       = document.getElementsByClassName('key');

oscillator.type = 'sawtooth';
oscillator.start();

for (var i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', event => {
    oscillator.frequency.value = 440;
    oscillator.connect(audioCtx.destination);
    setTimeout(() => oscillator.disconnect(), 200);
  });
}
