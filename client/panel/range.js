'use strict';

let following,
    hovering = false,
    info     = document.querySelector('.panel .info');

class Range {
  /**
   * Creates an object with a value that can be set within a range, and is controlled by a DOM element.
   * @param  {Element} element    The DOM element that will control the value.
   * @param  {Number} value       Initial value.
   * @param  {String} unit        Unit of value. If set to '%', the percentage will be shown in the
   *                              info box instead of the value.
   * @param  {Number} min         Value when the DOM visuals are set to zero.
   * @param  {Number} max         Maximum value.
   * @param  {Boolean} negative   If true, the range can be controlled past min to negative max.
   *                              If false, the min parameter controls the minimum value.
   * @param  {Number} distance    The distance in pixels the mouse pointer has to travel vertically
   *                              when clicking and dragging in order to go through the whole range.
   *                              If not set, click and drag is disabled.
   * @return {undefined}
   */
  constructor(element, value, unit, min, max, negative, distance) {
    this.element = element;
    this.min = min || 0;
    this.max = max || 1;
    this.default = value || this.min;
    this.value = this.default;
    Range.hideInfo();
    this.unit = unit;
    this.negative = negative;
    this.distance = distance;
    this.step = 0.01;
  }

  reset() {
    this.value = this.default;
  }

  initialize() {
    let self = this;

    this.element.addEventListener('mousedown', function(event) {
      if (event.altKey) {
        self.reset();
      } else {
        self.clientY = event.clientY;
        self.startRatio = self.ratio;
        Range.follow(self);
        Range.followEvent(event);
      }
    });

    this.addListeners();
  }

  addListeners() {
    this.element.addEventListener('wheel', event => {
      this.value = this.value - this.step * event.deltaY / Math.abs(event.deltaY);
    });

    this.element.addEventListener('dblclick', event => {
      this.reset();
    });

    this.element.addEventListener('mouseover', event => {
      this.updateInfo();
      hovering = true;
    });

    this.element.addEventListener('mouseout', event => {
      Range.hideInfo();
      hovering = false;
    });
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;

    if (this.value < this.min && !this.negative)
      this.value = this.min;
    else if (this.value > this.max)
      this.value = this.max;
    else if (this.value < -this.max)
      this.value = -this.max;

    if (typeof this.watcher === 'function')
      this.watcher(this.value);
    this.updateVisuals(this.ratio);
    this.updateInfo();
  }

  updateInfo() {
    let text;

    if (this.unit === '%')
      text = `${(100 * this.value / this.max).toFixed(2)}%`;
    else text = `${this.value.toFixed(2)} ${this.unit}`;

    Range.showInfo(text);
  }

  updateVisuals(ratio) { }

  watch(fn) {
    this.watcher = fn;
  }

  get ratio() {
    return (this.value - this.min) / (this.max - this.min);
  }

  static showInfo(text) {
    info.innerHTML = text;
    info.style.visibility = 'visible';
    info.style.opacity = 1;
  }

  static hideInfo() {
    info.style.visibility = 'hidden';
    info.style.opacity = 0;
  }

  static followEvent(event) {
    let rect     = following.element.getBoundingClientRect(),
        distance = following.distance || rect.height,
        dy       = event.clientY - following.clientY;

    let ratio;

    if (!following.distance)
      ratio = (rect.top - (event.clientY - rect.height)) / rect.height;
    else ratio = following.startRatio - dy / distance;

    if (ratio < 0 && !following.negative) ratio = 0;
    else if (ratio > 1) ratio = 1;
    else if (ratio < -1) ratio = -1;

    let value = ratio * (following.max - following.min) + following.min;

    following.value = value;
  }

  static follow(range) {
    following = range;
    document.addEventListener('mousemove', Range.followEvent);
  }

  static unfollow() {
    document.removeEventListener('mousemove', Range.followEvent);
    if (!hovering)
      Range.hideInfo();
  }
}

document.addEventListener('mouseup', Range.unfollow);

module.exports = Range;
