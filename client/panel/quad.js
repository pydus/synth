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

      if (button.id === this.value)
        button.classList.add('pressed');

      this.addListener(button);
    }
  }

  addListener(button) {
    let self = this;

    button.addEventListener('click', function(event) {
      self.clear();
      this.classList.add('pressed');
      self.value = this.id;
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
    if (typeof this.watcher === 'function')
      this.watcher(value);
  }

  clear() {
    for (let i = 0; i < this.size; i++)
      this.element.children[i].classList.remove('pressed');
  }
}

module.exports = Quad;
