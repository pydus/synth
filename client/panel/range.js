var following;

class Range {
  constructor(element, value, min, max, negative, distance, clickMode) {
    this.element = element;
    this.min = min || 0;
    this.max = max || 1;
    this.setValue(value || this.min);
    this.negative = negative;
    this.distance = distance;
    this.clickMode = clickMode;
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
    var rect     = following.element.getBoundingClientRect(),
        distance = following.distance || rect.height,
        dy       = event.clientY - following.clientY;

    var ratio;

    if (following.clickMode)
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
