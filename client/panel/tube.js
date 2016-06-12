var following;

class Tube {
  constructor(element, value, min, max) {
    this.element = element;
    this.min = min || 0;
    this.max = max || 1;
    this.setValue(value || this.min);
  }

  initialize() {
    var self = this;
    this.element.addEventListener('mousedown', function(event) {
      Tube.follow(self);
      Tube.followEvent(event);
    });
    document.addEventListener('mouseup', Tube.unfollow);
  }

  setValue(value) {
    this.value = value;
    if (typeof this.watcher === 'function')
      this.watcher(value);
    this.setHeightPercentage(this.percentage);
  }

  setHeightPercentage(percentage) {
    this.element.children[0].style.height = `${percentage}%`;
  }

  watch(fn) {
    this.watcher = fn;
  }

  get percentage() {
    return (this.value - this.min) / (0.01 * (this.max - this.min));
  }

  static followEvent(event) {
    var mouseY     = event.clientY,
        rect       = following.element.getBoundingClientRect(),
        percentage = 100 * (rect.height - (mouseY - rect.top)) / rect.height;

    if (percentage < 0) percentage = 0;
    else if (percentage > 100) percentage = 100;

    var value = 0.01 * percentage * (following.max - following.min) + following.min;

    following.setValue(value);
  }

  static follow(tube) {
    following = tube;
    document.addEventListener('mousemove', Tube.followEvent);
  }

  static unfollow() {
    document.removeEventListener('mousemove', Tube.followEvent);
  }
}

module.exports = Tube;
