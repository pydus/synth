const keys = document.getElementsByClassName('key');

var isPressingKey = false,
    startFn       = semitone => {},
    stopFn        = () => {},
    start         = fn => startFn = fn,
    stop          = fn => stopFn = fn;

const initialize = () => {
  for (var i = 0; i < keys.length; i++) {
    const key      = keys[i],
          semitone = key.getAttribute('id');

    key.addEventListener('mousedown', event => {
      isPressingKey = true;
      startFn(semitone);
      key.classList.remove('not-active');
    });

    key.addEventListener('mouseover', event => {
      if (isPressingKey) {
        startFn(semitone);
        key.classList.add('pressed');
        key.classList.remove('not-active');
      }
    });

    key.addEventListener('mouseout', event => {
      stopFn();
      key.classList.add('not-active');
      key.classList.remove('pressed');
    });

    key.addEventListener('mouseup', event => {
      key.classList.remove('pressed');
    });
  }

  document.addEventListener('mouseup', event => {
    stopFn();
    isPressingKey = false;
  });
};

module.exports = {
  initialize: initialize,
  start: start,
  stop: stop
};
