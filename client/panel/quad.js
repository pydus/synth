'use strict';

const Quad = (element, value) => {
  let _element = element,
      _value   = value,
      _size    = 4,
      _watcher = undefined;

  const initialize = () => {
    let button;

    for (let i = 0; i < _size; i++) {
      button = _element.children[i];

      if (button.id === _value) {
        button.classList.add('pressed');
      }

      addListener(button);
    }
  };

  const addListener = (button) => {
    button.addEventListener('click', (event) => {
      clear();
      button.classList.add('pressed');
      setValue(button.id);
    });
  };

  const watch = (fn) => {
    _watcher = fn;
  };

  const setValue = (value) => {
    _value = value;
    if (typeof _watcher === 'function') {
      _watcher(value);
    }
  };

  const clear = () => {
    for (let i = 0; i < _size; i++) {
      _element.children[i].classList.remove('pressed');
    }
  };

  return {
    initialize: initialize,
    get element() { return _element; },
    get value() { return _value; },
    set value(value) { setValue(value); },
    watch: watch
  };
};

module.exports = Quad;
