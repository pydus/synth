'use strict';

class Quad {
  constructor(element, value) {
    this.element = element;
    this.value = value;
    this.size = 4;
  }

  initialize() {
    let button;

    for (let i = 0; i < this.size; i++) {
      button = this.element.children[i];

      if (button.id === this.value) {
        button.classList.add('pressed');
      }

      this.addListener(button);
    }
  }

  addListener(button) {
    button.addEventListener('click', (event) => {
      this.clear();
      button.classList.add('pressed');
      this.value = button.id;
    });
  }

  watch(fn) {
    this.watcher = fn;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
    if (typeof this.watcher === 'function') {
      this.watcher(value);
    }
  }

  clear() {
    for (let i = 0; i < this.size; i++) {
      this.element.children[i].classList.remove('pressed');
    }
  }
}

module.exports = Quad;
