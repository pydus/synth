var following;

class Range {
  /**
   * Creates an object with a value that can be set within a range, and is controlled by a DOM element.
   * @param  {Element} element   The DOM element that will control the value.
   * @param  {Number} value      Initial value.
   * @param  {Number} min        Value when the DOM visuals are set to zero.
   * @param  {Number} max        Maximum value.
   * @param  {Boolean} negative  If true, the range can be controlled past min to negative max.
   *                             If false, the min parameter controls the minimum value.
   * @param  {Number} distance   The distance in pixels the mouse pointer has to travel vertically
   *                             when clicking and dragging in order to go through the whole range.
   *                             If not set, click and drag is disabled.
   * @return {undefined}
   */
  constructor(element, value, min, max, negative, distance) {
    this.element = element;
    this.min = min || 0;
    this.max = max || 1;
    this.setValue(value || this.min);
    this.negative = negative;
    this.distance = distance;
  }

  reset() {
    this.setValue();
  }

  initialize() {
    var self = this;
    this.element.addEventListener('mousedown', function(event) {
      self.clientY = event.clientY;
      self.startRatio = self.ratio;
      Range.follow(self);
      Range.followEvent(event);
    });
    document.addEventListener('mouseup', Range.unfollow);
  }

  setValue(value) {
    this.value = value;
    if (typeof this.watcher === 'function')
      this.watcher(value);
    this.updateVisuals(this.ratio);
  }

  updateVisuals(ratio) { }

  watch(fn) {
    this.watcher = fn;
  }

  get ratio() {
    return (this.value - this.min) / (this.max - this.min);
  }

  static followEvent(event) {
    var rect      = following.element.getBoundingClientRect(),
        distance  = following.distance || rect.height,
        dy        = event.clientY - following.clientY;

    var ratio;

    if (!following.distance)
      ratio = (rect.top - (event.clientY - rect.height)) / rect.height;
    else ratio = following.startRatio - dy / distance;

    if (ratio < 0 && !following.negative) ratio = 0;
    else if (ratio > 1) ratio = 1;
    else if (ratio < -1) ratio = -1;

    var value = ratio * (following.max - following.min) + following.min;

    following.setValue(value);
  }

  static follow(range) {
    following = range;
    document.addEventListener('mousemove', Range.followEvent);
  }

  static unfollow() {
    document.removeEventListener('mousemove', Range.followEvent);
  }
}

module.exports = Range;
