'use strict';

const info = document.querySelector('.panel .info');

const show = (text) => {
  info.innerHTML = text;
  info.style.visibility = 'visible';
  info.style.opacity = 1;
};

const hide = () => {
  info.style.visibility = 'hidden';
  info.style.opacity = 0;
};

module.exports = {
  show: show,
  hide: hide
};
