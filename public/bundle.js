!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";n(1),n(5)},function(e,t,n){var i=n(2);"string"==typeof i&&(i=[[e.id,i,""]]);n(4)(i,{});i.locals&&(e.exports=i.locals)},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700,300);",""]),t.push([e.id,"body,html{font:12px Roboto,sans-serif;margin:0;padding:0}.wrapper{position:absolute;background:linear-gradient(0deg,#e8e8ff,#f0f0ff);width:100%;height:100%;perspective:400px;overflow-y:hidden}.synth{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:linear-gradient(90deg,#92a6eb,#ff7385);height:420px;margin:10% auto 0;border-radius:8px;cursor:default}.synth,.synth .panel{width:1300px;overflow:hidden}.synth .panel{position:relative;background:linear-gradient(90deg,#818cea,#f15984);height:198px;margin-bottom:6px}.synth .panel>div{margin:8px 18px}.synth .panel h1{font-size:13px;margin:0;padding:10px 0}.synth .panel h1,.synth .panel h2{text-align:center;color:#f8f8f8;font-weight:400}.synth .panel h2{height:0!important;background:none!important;font-size:9px}.synth .panel .info{visibility:hidden;opacity:0;transition:visibility .1s,opacity .1s ease-out;position:absolute;top:20px;right:0;bottom:0;left:0;padding:40px;margin:auto;background:hsla(0,0%,100%,.88);text-align:center;width:150px;height:13px;overflow:hidden;border-radius:5px}.synth .panel .info h1{color:#444;font-size:15px;padding:0}.synth .panel .oscillator{display:inline-block}.synth .panel .oscillator.off{opacity:.34}.synth .panel .oscillator h1{cursor:pointer}.synth .panel .oscillator .quadbutton{overflow:hidden;border-radius:4px;width:100px;height:100px;display:inline-block;color:#eee}.synth .panel .oscillator .quadbutton .button{width:50px;height:50px;display:block;float:left;transition:background .15s ease-out;background:hsla(0,0%,100%,.3)}.synth .panel .oscillator .quadbutton .button:hover{background:hsla(0,0%,100%,.35)}.synth .panel .oscillator .quadbutton .button.pressed{background:hsla(0,0%,100%,.15)!important}.synth .panel .knobs{width:100px;overflow:hidden}.synth .panel .knobs .knob{cursor:ns-resize}.synth .panel .knobs .knob,.synth .panel .knobs h2{display:inline-block;margin:4px 0 0 12px;width:26px;height:26px;border-radius:50%;background:hsla(0,0%,100%,.3);transition:background .15s ease-out}.synth .panel .knobs .knob:hover,.synth .panel .knobs h2:hover{background:hsla(0,0%,100%,.35)}.synth .panel .knobs .knob:nth-child(2n-1),.synth .panel .knobs h2:nth-child(2n-1){margin-right:14px}.synth .panel .knobs .knob:active:not(h2):before,.synth .panel .knobs h2:active:not(h2):before{content:'';display:block;position:absolute;top:0;left:0;right:0;bottom:0;cursor:ns-resize;z-index:3}.synth .panel .knobs .knob .liquid,.synth .panel .knobs h2 .liquid{background:hsla(0,0%,100%,.35);width:26px;height:26px;border-radius:50%}.synth .panel .knobs .knob .liquid.negative,.synth .panel .knobs h2 .liquid.negative{background:rgba(0,0,0,.35)}.synth .panel .tube{position:relative;overflow:hidden;height:120px;width:18px;background:hsla(0,0%,100%,.3);border-radius:2px;transition:width .06s ease-in-out}.synth .panel .tube:hover{width:22px}.synth .panel .tube .liquid{position:absolute;top:100%;bottom:0;left:0;right:0;height:100%;background:hsla(0,0%,100%,.35);border-radius:4px;border-top:4px solid hsla(0,0%,100%,.35)}.synth .panel .amp{display:inline-block;float:right;width:50px;height:178.2px;border-radius:2px}.synth .panel .amp .tube{margin:auto}@keyframes sink{0%{transform:translateZ(0)}to{transform:translateZ(-3px)}}.synth .keys{position:relative;top:6px;left:130px;margin-bottom:0;overflow:hidden}.synth .keys .octave{display:inline-block}.synth .keys .octave .hidden{display:none!important}.synth .keys .octave .white.key{z-index:1;display:inline-block;margin:0 1px;border-radius:2px;background-color:rgba(244,244,249,.92);width:38px;height:200px}.synth .keys .octave .white.key:hover{background-color:hsla(0,0%,100%,.92)}.synth .keys .octave .white.key.pressed,.synth .keys .octave .white.key:active:not(.not-active){background-color:rgba(231,231,242,.92);animation:sink .08s 0s normal forwards}.synth .keys .octave .black.key{z-index:2;display:inline-block;position:relative;vertical-align:top;border-radius:2px;margin:-9.5px;background-color:#141422;width:19px;height:140px}.synth .keys .octave .black.key:hover{background-color:#1c1c2f}.synth .keys .octave .black.key.pressed,.synth .keys .octave .black.key:active:not(.not-active){background-color:#0c0c15;animation:sink .08s 0s normal forwards}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function i(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=d[i.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](i.parts[r]);for(;r<i.parts.length;r++)o.parts.push(l(i.parts[r],t))}else{for(var a=[],r=0;r<i.parts.length;r++)a.push(l(i.parts[r],t));d[i.id]={id:i.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},i=0;i<e.length;i++){var o=e[i],r=o[0],a=o[1],s=o[2],u=o[3],l={css:a,media:s,sourceMap:u};n[r]?n[r].parts.push(l):t.push(n[r]={id:r,parts:[l]})}return t}function r(e,t){var n=y(),i=m[m.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),m.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=m.indexOf(e);t>=0&&m.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",r(e,t),t}function l(e,t){var n,i,o;if(t.singleton){var r=g++;n=b||(b=s(t)),i=c.bind(null,n,r,!1),o=c.bind(null,n,r,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),i=h.bind(null,n),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),i=f.bind(null,n),o=function(){a(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}function c(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=k(t,o);else{var r=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function f(e,t){var n=t.css,i=t.media;if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function h(e,t){var n=t.css,i=t.sourceMap;i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([n],{type:"text/css"}),r=e.href;e.href=URL.createObjectURL(o),r&&URL.revokeObjectURL(r)}var d={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},v=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),y=p(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,g=0,m=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=v()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return i(n,t),function(e){for(var r=[],a=0;a<n.length;a++){var s=n[a],u=d[s.id];u.refs--,r.push(u)}if(e){var l=o(e);i(l,t)}for(var a=0;a<r.length;a++){var u=r[a];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete d[u.id]}}}};var k=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){"use strict";var i=new(window.AudioContext||window.webkitAudioContext),o=n(6),r=n(12),a=n(14);o.initialize(),r.initialize();var s=[],u=i.createChannelMerger(1),l=i.createGain(),c=i.createDynamicsCompressor();c.threshold.value=-30,c.knee.value=40,c.ratio.value=12,c.reduction.value=-20,c.attack.value=0,c.release.value=.25,l.gain.value=o.amp.gain.value,o.amp.gain.watch(function(e){return l.gain.value=e});for(var f=function(){var e=o["osc"+(h+1)],t=new a(e.waveform.value,e.gain.value,i);t.setRunning(e.running),e.watchRunning(function(e){return t.setRunning(e)}),e.waveform.watch(function(e){return t.setWaveform(e)}),e.detune.watch(function(e){return t.setDetune(e)}),e.gain.watch(function(e){return t.setGain(e)}),s.push(t)},h=0;h<o.nOscillators;h++)f();r.onPress(function(e){return s.forEach(function(t){return t.play(e)})}),r.onRelease(function(e){return s.forEach(function(t){return t.stop(e)})}),s.forEach(function(e){return e.connect(u)}),u.connect(l),l.connect(c),c.connect(i.destination)},function(e,t,n){"use strict";for(var i=n(7),o=n(8),r=n(9),a=n(11),s=.15,u=document.querySelectorAll(".oscillator h1"),l=document.getElementsByClassName("quadbutton"),c=document.querySelectorAll(".oscillator .knob"),f=document.getElementsByClassName("tube"),h=6,d=[],p=new r(f[0],s/2,"%",0,s),v=function(){for(var e=function(){var e=t+1;u[t].addEventListener("click",function(t){return b["osc"+e].toggleRunning()})},t=0;t<u.length;t++)e()},y=function(){d.forEach(function(e){return e.initialize()}),p.initialize(),v()},b={initialize:y,nOscillators:h,amp:{gain:p}},g=0;h>g;g++){var m=new o(l[g],"sine"),k=new a(c[2*g],0,"cents",0,1200,!0),w=new a(c[2*g+1],.5,"%",0,.5),x=new i(m,k,w);g>1&&x.setRunning(!1),b["osc"+(g+1)]=x,d.push(x)}e.exports=b},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(t,i,o){n(this,e),this.waveform=t,this.detune=i,this.gain=o,this.running=!0,this.runningWatchers=[]}return i(e,[{key:"initialize",value:function(){this.waveform.initialize(),this.detune.initialize(),this.gain.initialize()}},{key:"watchRunning",value:function(e){this.runningWatchers.push(e)}},{key:"toggleRunning",value:function(){this.setRunning(!this.running)}},{key:"setRunning",value:function(e){this.running=e,this.runningWatchers.forEach(function(t){return t(e)}),this.updateVisuals()}},{key:"updateVisuals",value:function(){this.running?this.waveform.element.parentNode.classList.remove("off"):this.waveform.element.parentNode.classList.add("off")}}]),e}();e.exports=o},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(t,i){n(this,e),this.element=t,this.value=i,this.size=4}return i(e,[{key:"initialize",value:function(){for(var e,t=0;t<this.size;t++)e=this.element.children[t],e.id===this.value&&e.classList.add("pressed"),this.addListener(e)}},{key:"addListener",value:function(e){var t=this;e.addEventListener("click",function(e){t.clear(),this.classList.add("pressed"),t.setValue(this.id)})}},{key:"watch",value:function(e){this.watcher=e}},{key:"setValue",value:function(e){this.value=e,"function"==typeof this.watcher&&this.watcher(e)}},{key:"clear",value:function(){for(var e=0;e<this.size;e++)this.element.children[e].classList.remove("pressed")}}]),e}();e.exports=o},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(10),u=function(e){function t(e,n,r,a,s){return i(this,t),o(this,Object.getPrototypeOf(t).call(this,e,n,r,a,s,!1))}return r(t,e),a(t,[{key:"updateVisuals",value:function(e){this.element.children[0].style.transform="translate(0, -"+100*e+"%)"}}]),t}(s);e.exports=u},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=!1,a=document.querySelector(".panel .info"),s=function(){function e(t,i,o,r,a,s,u){n(this,e),this.element=t,this.min=r||0,this.max=a||1,this["default"]=i||this.min,this.setValue(this["default"]),e.hideInfo(),this.unit=o,this.negative=s,this.distance=u,this.step=this.max>1?1:.01}return o(e,[{key:"reset",value:function(){this.setValue(this["default"])}},{key:"initialize",value:function(){var t=this,n=this;this.element.addEventListener("mousedown",function(t){t.altKey?n.reset():(n.clientY=t.clientY,n.startRatio=n.ratio,e.follow(n),e.followEvent(t))}),this.element.addEventListener("wheel",function(e){t.setValue(t.value-t.step*e.deltaY/100)}),this.element.addEventListener("dblclick",function(e){t.reset()}),this.element.addEventListener("mouseover",function(e){t.updateInfo(),r=!0}),this.element.addEventListener("mouseout",function(t){e.hideInfo(),r=!1})}},{key:"setValue",value:function(e){this.value=e,"function"==typeof this.watcher&&this.watcher(e),this.updateVisuals(this.ratio),this.updateInfo()}},{key:"updateInfo",value:function(){var e;e="%"===this.unit?(100*this.value/this.max).toFixed(2)+"%":this.value.toFixed(2)+" "+this.unit,a.innerHTML=e,a.style.visibility="visible",a.style.opacity=1}},{key:"updateVisuals",value:function(e){}},{key:"watch",value:function(e){this.watcher=e}},{key:"ratio",get:function(){return(this.value-this.min)/(this.max-this.min)}}],[{key:"hideInfo",value:function(){a.style.visibility="hidden",a.style.opacity=0}},{key:"followEvent",value:function(e){var t,n=i.element.getBoundingClientRect(),o=i.distance||n.height,r=e.clientY-i.clientY;t=i.distance?i.startRatio-r/o:(n.top-(e.clientY-n.height))/n.height,0>t&&!i.negative?t=0:t>1?t=1:-1>t&&(t=-1);var a=t*(i.max-i.min)+i.min;i.setValue(a)}},{key:"follow",value:function(t){i=t,document.addEventListener("mousemove",e.followEvent)}},{key:"unfollow",value:function(){document.removeEventListener("mousemove",e.followEvent),r||e.hideInfo()}}]),e}();document.addEventListener("mouseup",s.unfollow),e.exports=s},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(10),u=200,l=function(e){function t(e,n,r,a,s,l){return i(this,t),o(this,Object.getPrototypeOf(t).call(this,e,n,r,a,s,l,u))}return r(t,e),a(t,[{key:"updateVisuals",value:function(e){var t=this.element.children[0];t.style.transform="scale("+e+", "+e+")",0>e?t.classList.add("negative"):t.classList.remove("negative")}}]),t}(s);e.exports=l},function(e,t,n){"use strict";var i=n(13),o=!1,r=void 0,a=void 0,s=document.getElementsByClassName("key"),u=[],l=[],c=function(e){return u.push(e)},f=function(e){return l.push(e)},h=function(e,t){for(var n=0;n<e.length;n++)"function"==typeof e[n]&&e[n](t)},d=function(e){return h(u,e)},p=function(e){return h(l,e)},v=function(e){e.classList.add("pressed"),e.classList.remove("not-active")},y=function(e){e.classList.add("not-active"),e.classList.remove("pressed")},b=function(e,t){var n=e.getAttribute("id");t&&(a=n),d(n),v(e)},g=function(e){var t=e.getAttribute("id");p(t),y(e)},m=function(){for(var e=function(){var e=s[t];e.addEventListener("mousedown",function(t){o=!0,b(e,!0)}),e.addEventListener("mouseover",function(t){o&&b(e,!0)}),e.addEventListener("mouseout",function(t){o&&g(e)}),e.addEventListener("mouseup",function(t){y(e)})},t=0;t<s.length;t++)e();document.addEventListener("mouseup",function(e){o=!1,p(a)})},k=function(){document.addEventListener("keydown",function(e){var t=i[e.key];if(t!==r&&(r=t,"undefined"!=typeof t)){var n=document.getElementById(t);b(n)}}),document.addEventListener("keyup",function(e){r=void 0;var t=i[e.key];if("undefined"!=typeof t){var n=document.getElementById(t);g(n)}})},w=function(){m(),k()};e.exports={initialize:w,onPress:c,onRelease:f}},function(e,t){"use strict";e.exports={z:-9,s:-8,x:-7,d:-6,c:-5,v:-4,g:-3,b:-2,h:-1,n:0,j:1,m:2,",":3,l:4,".":5}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=Math.pow(2,1/12),r=440,a=function(){function e(t,i,o){n(this,e),this.oscillators=[],this.gainNodes=[],this.setWaveform(t),this.gain=i||.3,this.detune=0,this.context=o,this.running=!0}return i(e,[{key:"setRunning",value:function(e){this.running=e,e?this.unMute():this.mute()}},{key:"setDetune",value:function(e){this.detune=e,this.oscillators.forEach(function(t){t.detune.value=e})}},{key:"setGain",value:function(e){this.gain=e,this.gainNodes.forEach(function(t){t.gain.value=e})}},{key:"connect",value:function(e){this.output=e}},{key:"setWaveform",value:function(e){this.waveform=e,this.oscillators.forEach(function(t){t.type=e})}},{key:"play",value:function(t){this.stop(t);var n=this.context.createOscillator();n.type=this.waveform,n.semitone=t,n.frequency.value=e.getFrequency(t),n.detune.value=this.detune,n.start();var i=this.context.createGain();i.gain.value=this.gain,n.connect(i),this.running&&i.connect(this.output),this.oscillators.push(n),this.gainNodes.push(i)}},{key:"stop",value:function(e){for(var t=0;t<this.oscillators.length;t++)this.oscillators[t].semitone===e&&(this.oscillators[t].stop(),this.oscillators.splice(t,1))}},{key:"unMute",value:function(){var e=this;this.gainNodes.forEach(function(t){return t.connect(e.output)})}},{key:"mute",value:function(){this.gainNodes.forEach(function(e){return e.disconnect()})}}],[{key:"getFrequency",value:function(e){return r*Math.pow(o,e)}}]),e}();e.exports=a}]);