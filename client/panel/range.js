'use strict';

const follow = require('./follow');
const info = require('./info');

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
const Range = (element, value, unit, min, max, negative, distance) => {
  let _element  = element,
      _min      = min || 0,
      _max      = max || 1,
      _default  = value || _min,
      _value    = _default,
      _unit     = unit,
      _negative = negative,
      _distance = distance,
      _step     = max > 100 ? 1 : 0.01,
      _watcher  = undefined;

  const reset = () => {
    setValue(_default);
  };

  const initialize = () => {
    _element.addEventListener('mousedown', (event) => {
      if (event.altKey) {
        reset();
      } else {
        range.clientY = event.clientY;
        range.startRatio = getRatio();
        follow.follow(range, event);
      }
    });

    addListeners();
    setValue(_default);
    info.hide();
  };

  const addListeners = () => {
    _element.addEventListener('wheel', (event) => {
      setValue(_value - _step * event.deltaY / Math.abs(event.deltaY));
    });

    _element.addEventListener('dblclick', (event) => {
      reset();
    });

    _element.addEventListener('mouseover', (event) => {
      updateInfo();
      follow.hovering = true;
    });

    _element.addEventListener('mouseout', (event) => {
      info.hide();
      follow.hovering = false;
    });
  };

  const setValue = (value) => {
    _value = value;

    if (_value < _min && !_negative) {
      _value = _min;
    } else if (_value > _max) {
      _value = _max;
    } else if (_value < -_max) {
      _value = -_max;
    }

    if (typeof _watcher === 'function') {
      _watcher(_value);
    }

    range.updateVisuals(getRatio());
    updateInfo();
  };

  const updateInfo = () => {
    let text;

    if (_unit === '%') {
      text = `${(100 * _value / _max).toFixed(2)}%`;
    } else {
      text = `${_value.toFixed(2)} ${_unit}`;
    }

    info.show(text);
  };

  const watch = fn => _watcher = fn;

  const getRatio = () => (_value - _min) / (_max - _min);

  const range =  {
    initialize: initialize,
    watch: watch,
    get value() { return _value; },
    set value(value) { setValue(value); },
    get element() { return _element; },
    get distance() { return _distance; },
    get max() { return _max; },
    get min() { return _min; },
    get negative() { return _negative; },
    updateVisuals: ratio => {}
  };

  return range;
};

module.exports = Range;
