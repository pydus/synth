!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";n(1),n(5)},function(e,t,n){var i=n(2);"string"==typeof i&&(i=[[e.id,i,""]]);n(4)(i,{});i.locals&&(e.exports=i.locals)},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700,300);",""]),t.push([e.id,"body,html{font:12px Roboto,sans-serif;margin:0;padding:0}.wrapper{position:absolute;background:linear-gradient(0deg,#e8e8ff,#f0f0ff);width:100%;height:100%;perspective:400px;overflow-y:hidden}.synth{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:linear-gradient(90deg,#92a6eb,#ff7385);height:420px;margin:10% auto 0;border-radius:8px;cursor:default}.synth,.synth .panel{width:1300px;overflow:hidden}.synth .panel{position:relative;background:linear-gradient(90deg,#818cea,#f15984);height:198px;box-sizing:border-box;margin-bottom:6px;padding:0 20px}.synth .panel>div{position:relative;display:inline-block;vertical-align:top;margin:8px 5px}.synth .panel h1{font-size:13px;margin:0;padding:10px 0}.synth .panel h1,.synth .panel h2{text-align:center;color:#f8f8f8;font-weight:400}.synth .panel h2{height:0!important;background:none!important;font-size:9px}.synth .panel .info{visibility:hidden;opacity:0;transition:visibility .1s,opacity .1s ease-out;position:absolute;top:20px;right:0;bottom:0;left:0;padding:40px;margin:auto;background:hsla(0,0%,100%,.88);text-align:center;width:150px;height:13px;overflow:hidden;border-radius:5px}.synth .panel .info h1{color:#444;font-size:15px;padding:0}.synth .panel .oscillator.off{opacity:.34}.synth .panel .oscillator h1{cursor:pointer}.synth .panel .oscillator .main,.synth .panel .oscillator .quadbutton{display:inline-block;width:100px;overflow:hidden}.synth .panel .oscillator .quadbutton{border-radius:4px;height:100px;color:#eee}.synth .panel .oscillator .quadbutton .button{width:50px;height:50px;display:block;float:left;transition:background .15s ease-out;background:hsla(0,0%,100%,.3)}.synth .panel .oscillator .quadbutton .button:hover{background:hsla(0,0%,100%,.35)}.synth .panel .oscillator .quadbutton .button.pressed{background:hsla(0,0%,100%,.15)!important}.synth .panel .oscillator .vertical{display:inline-block;position:relative;top:-4px;margin-left:13px;width:40px}.synth .panel .oscillator .vertical h2{position:relative;right:3px}.synth .panel .oscillator .vertical .knob{margin-top:2px;margin-bottom:0}.synth .panel .knobs{width:100px;overflow:hidden}.synth .panel .knob{cursor:ns-resize}.synth .panel .knob.hidden{visibility:hidden!important}.synth .panel .knob,.synth .panel h2{display:inline-block;margin:4px 4px 0 8px;width:21px;height:21px;border-radius:50%;background:hsla(0,0%,100%,.3);transition:background .15s ease-out}.synth .panel .knob:hover,.synth .panel h2:hover{background:hsla(0,0%,100%,.35)}.synth .panel .knob:not(.synth .panel .knob:nth-child(3n),.synth .panel h2:nth-child),.synth .panel h2:not(.synth .panel .knob:nth-child(3n),.synth .panel h2:nth-child){margin-right:16px}.synth .panel .knob:active:not(h2):before,.synth .panel h2:active:not(h2):before{content:'';display:block;position:absolute;top:0;left:0;right:0;bottom:0;cursor:ns-resize;z-index:3}.synth .panel .knob .liquid,.synth .panel h2 .liquid{background:hsla(0,0%,100%,.35);width:21px;height:21px;border-radius:50%}.synth .panel .knob .liquid.negative,.synth .panel h2 .liquid.negative{background:rgba(0,0,0,.35)}.synth .panel .tube{position:relative;overflow:hidden;height:130px;width:18px;background:hsla(0,0%,100%,.3);border-radius:2px;transition:width .06s ease-in-out}.synth .panel .tube:hover{width:22px}.synth .panel .tube .liquid{position:absolute;top:100%;bottom:0;left:0;right:0;height:100%;background:hsla(0,0%,100%,.35);border-radius:4px;border-top:4px solid hsla(0,0%,100%,.35)}.synth .panel .volume{display:inline-block;float:right;width:50px;height:178.2px;border-radius:2px}.synth .panel .volume .tube{margin:auto}.synth .panel .amp .knobs,.synth .panel .effects .knobs{margin:0 5px;width:90px}.synth .panel .amp .knob:nth-child(2n-1),.synth .panel .amp h2:nth-child(2n-1),.synth .panel .effects .knob:nth-child(2n-1),.synth .panel .effects h2:nth-child(2n-1){margin-right:16px}@keyframes sink{0%{transform:translateZ(0)}to{transform:translateZ(-3px)}}.synth .keys{position:relative;top:6px;left:130px;margin-bottom:0;overflow:hidden}.synth .keys .octave{display:inline-block}.synth .keys .octave .hidden{display:none!important}.synth .keys .octave .white.key{z-index:1;display:inline-block;margin:0 1px;border-radius:2px;background-color:rgba(244,244,249,.92);width:38px;height:200px}.synth .keys .octave .white.key:hover{background-color:hsla(0,0%,100%,.92)}.synth .keys .octave .white.key.pressed,.synth .keys .octave .white.key:active:not(.not-active){background-color:rgba(231,231,242,.92);animation:sink .08s 0s normal forwards}.synth .keys .octave .black.key{z-index:2;display:inline-block;position:relative;vertical-align:top;border-radius:2px;margin:-9.5px;background-color:#141422;width:19px;height:140px}.synth .keys .octave .black.key:hover{background-color:#1c1c2f}.synth .keys .octave .black.key.pressed,.synth .keys .octave .black.key:active:not(.not-active){background-color:#0c0c15;animation:sink .08s 0s normal forwards}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function i(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=p[i.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](i.parts[r]);for(;r<i.parts.length;r++)o.parts.push(c(i.parts[r],t))}else{for(var a=[],r=0;r<i.parts.length;r++)a.push(c(i.parts[r],t));p[i.id]={id:i.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},i=0;i<e.length;i++){var o=e[i],r=o[0],a=o[1],s=o[2],u=o[3],c={css:a,media:s,sourceMap:u};n[r]?n[r].parts.push(c):t.push(n[r]={id:r,parts:[c]})}return t}function r(e,t){var n=y(),i=b[b.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",r(e,t),t}function c(e,t){var n,i,o;if(t.singleton){var r=g++;n=m||(m=s(t)),i=l.bind(null,n,r,!1),o=l.bind(null,n,r,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),i=f.bind(null,n),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),i=h.bind(null,n),o=function(){a(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}function l(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var r=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function h(e,t){var n=t.css,i=t.media;if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t){var n=t.css,i=t.sourceMap;i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([n],{type:"text/css"}),r=e.href;e.href=URL.createObjectURL(o),r&&URL.revokeObjectURL(r)}var p={},d=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},v=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),y=d(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,g=0,b=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=v()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return i(n,t),function(e){for(var r=[],a=0;a<n.length;a++){var s=n[a],u=p[s.id];u.refs--,r.push(u)}if(e){var c=o(e);i(c,t)}for(var a=0;a<r.length;a++){var u=r[a];if(0===u.refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete p[u.id]}}}};var w=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){"use strict";var i=new(window.AudioContext||window.webkitAudioContext),o=n(6),r=n(14),a=n(16),s=n(17);o.initialize(),r.initialize();var u=[],c=i.createChannelMerger(1),l=i.createGain(),h=i.createDynamicsCompressor(),f=new a(o.amp.envelope.attack.value,o.amp.envelope.decay.value,o.amp.envelope.sustain.value,o.amp.envelope.release.value);o.amp.gain.watch(function(e){return u.forEach(function(t){return t.ampGain=e})}),o.amp.envelope.attack.watch(function(e){return f.attack=e}),o.amp.envelope.decay.watch(function(e){return f.decay=e}),o.amp.envelope.sustain.watch(function(e){return f.sustain=e}),o.amp.envelope.release.watch(function(e){return f.release=e}),h.threshold.value=-30,h.knee.value=40,h.ratio.value=12,h.reduction.value=-20,h.attack.value=0,h.release.value=.25,l.gain.value=o.gain.value,o.gain.watch(function(e){return l.gain.value=e});for(var p=function(){var e=o["osc"+(d+1)],t=new a(e.envelope.attack.value,e.envelope.decay.value,e.envelope.sustain.value,e.envelope.release.value),n=new s(e.waveform.value,e.cutoff.value,e.gain.value,t,o.amp.gain.value,f,i);e.envelope.attack.watch(function(e){return t.attack=e}),e.envelope.decay.watch(function(e){return t.decay=e}),e.envelope.sustain.watch(function(e){return t.sustain=e}),e.envelope.release.watch(function(e){return t.release=e}),n.running=e.running,e.watchRunning(function(e){return n.running=e}),e.waveform.watch(function(e){return n.waveform=e}),e.detune.watch(function(e){return n.detune=e}),e.cutoff.watch(function(e){return n.cutoff=e}),e.gain.watch(function(e){return n.gain=e}),u.push(n)},d=0;d<o.nOscillators;d++)p();r.onPress(function(e){return u.forEach(function(t){return t.play(e)})}),r.onRelease(function(e){return u.forEach(function(t){return t.stop(e)})}),u.forEach(function(e){return e.connect(c)}),c.connect(l),l.connect(h),h.connect(i.destination)},function(e,t,n){"use strict";for(var i=n(7),o=n(9),r=n(10),a=n(11),s=n(13),u=.15,c=.5,l=document.querySelectorAll(".oscillator .main h1"),h=document.getElementsByClassName("quadbutton"),f=document.querySelectorAll(".oscillator .main .knob"),p=document.getElementsByClassName("tube"),d=document.getElementsByClassName("vertical"),v=document.querySelector(".amp .knobs"),y=6,m=[],g=new s(v.children[2],1,"%",0,1),b=new s(v.children[6],0,"s",0,1),w=new s(v.children[7],0,"s",0,1),k=new s(v.children[10],1*c,"%",0,c),x=new s(v.children[11],.1,"s",0,1),E=new o(b,w,k,x),O=new a(p[0],.8*u,"%",0,u),L=function(){for(var e=function(){var e=t+1;l[t].addEventListener("click",function(t){return z["osc"+e].toggleRunning()})},t=0;t<l.length;t++)e()},j=function(){m.forEach(function(e){return e.initialize()}),E.initialize(),O.initialize(),g.initialize(),L()},z={initialize:j,nOscillators:y,amp:{gain:g,envelope:E},gain:O},_=0;y>_;_++){var R=new r(h[_],"sine"),C=new s(f[3*_],0,"cents",0,1200,!0),T=new s(f[3*_+1],8e3,"Hz",0,1e4),P=new s(f[3*_+2],.5*c,"%",0,c),b=new s(d[_].children[1],0,"s",0,1),w=new s(d[_].children[3],.5,"s",0,1),k=new s(d[_].children[5],.5*c,"%",0,c),x=new s(d[_].children[7],0,"s",0,1),q=new o(b,w,k,x),U=new i(R,C,T,P,q);_>3&&(U.running=!1),z["osc"+(_+1)]=U,m.push(U)}e.exports=z},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(8),u=function(e){function t(e,n,r,a,s){i(this,t);var u=o(this,Object.getPrototypeOf(t).call(this));return u.waveform=e,u.detune=n,u.cutoff=r,u.gain=a,u.envelope=s,u.running=!0,u.runningWatchers=[],u}return r(t,e),a(t,[{key:"initialize",value:function(){this.waveform.initialize(),this.detune.initialize(),this.cutoff.initialize(),this.gain.initialize(),this.envelope.initialize()}},{key:"updateVisuals",value:function(){this.running?this.waveform.element.parentNode.parentNode.classList.remove("off"):this.waveform.element.parentNode.parentNode.classList.add("off")}}]),t}(s);e.exports=u},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(){n(this,e),this._running=!0,this.runningWatchers=[]}return i(e,[{key:"initialize",value:function(){}},{key:"watchRunning",value:function(e){this.runningWatchers.push(e)}},{key:"toggleRunning",value:function(){this.running=!this.running}},{key:"updateVisuals",value:function(){}},{key:"running",get:function(){return this._running},set:function(e){this._running=e,this.runningWatchers.forEach(function(t){return t(e)}),this.updateVisuals()}}]),e}();e.exports=o},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(8),u=function(e){function t(e,n,r,a){i(this,t);var s=o(this,Object.getPrototypeOf(t).call(this));return s.attack=e,s.decay=n,s.sustain=r,s.release=a,s}return r(t,e),a(t,[{key:"initialize",value:function(){this.attack.initialize(),this.decay.initialize(),this.sustain.initialize(),this.release.initialize()}}]),t}(s);e.exports=u},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(t,i){n(this,e),this.element=t,this.value=i,this.size=4}return i(e,[{key:"initialize",value:function(){for(var e,t=0;t<this.size;t++)e=this.element.children[t],e.id===this.value&&e.classList.add("pressed"),this.addListener(e)}},{key:"addListener",value:function(e){var t=this;e.addEventListener("click",function(e){t.clear(),this.classList.add("pressed"),t.value=this.id})}},{key:"watch",value:function(e){this.watcher=e}},{key:"clear",value:function(){for(var e=0;e<this.size;e++)this.element.children[e].classList.remove("pressed")}},{key:"value",get:function(){return this._value},set:function(e){this._value=e,"function"==typeof this.watcher&&this.watcher(e)}}]),e}();e.exports=o},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(12),u=function(e){function t(e,n,r,a,s){return i(this,t),o(this,Object.getPrototypeOf(t).call(this,e,n,r,a,s,!1))}return r(t,e),a(t,[{key:"updateVisuals",value:function(e){this.element.children[0].style.transform="translate(0, -"+100*e+"%)"}}]),t}(s);e.exports=u},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=!1,a=document.querySelector(".panel .info"),s=function(){function e(t,i,o,r,a,s,u){n(this,e),this.element=t,this.min=r||0,this.max=a||1,this["default"]=i||this.min,this.value=this["default"],e.hideInfo(),this.unit=o,this.negative=s,this.distance=u,this.step=this.max>1?1:.01}return o(e,[{key:"reset",value:function(){this.value=this["default"]}},{key:"initialize",value:function(){var t=this,n=this;this.element.addEventListener("mousedown",function(t){t.altKey?n.reset():(n.clientY=t.clientY,n.startRatio=n.ratio,e.follow(n),e.followEvent(t))}),this.element.addEventListener("wheel",function(e){t.value=t.value-t.step*e.deltaY/Math.abs(e.deltaY)}),this.element.addEventListener("dblclick",function(e){t.reset()}),this.element.addEventListener("mouseover",function(e){t.updateInfo(),r=!0}),this.element.addEventListener("mouseout",function(t){e.hideInfo(),r=!1})}},{key:"updateInfo",value:function(){var t;t="%"===this.unit?(100*this.value/this.max).toFixed(2)+"%":this.value.toFixed(2)+" "+this.unit,e.showInfo(t)}},{key:"updateVisuals",value:function(e){}},{key:"watch",value:function(e){this.watcher=e}},{key:"value",get:function(){return this._value},set:function(e){this._value=e,this.value<this.min&&!this.negative?this.value=this.min:this.value>this.max?this.value=this.max:this.value<-this.max&&(this.value=-this.max),"function"==typeof this.watcher&&this.watcher(e),this.updateVisuals(this.ratio),this.updateInfo()}},{key:"ratio",get:function(){return(this.value-this.min)/(this.max-this.min)}}],[{key:"showInfo",value:function(e){a.innerHTML=e,a.style.visibility="visible",a.style.opacity=1}},{key:"hideInfo",value:function(){a.style.visibility="hidden",a.style.opacity=0}},{key:"followEvent",value:function(e){var t,n=i.element.getBoundingClientRect(),o=i.distance||n.height,r=e.clientY-i.clientY;t=i.distance?i.startRatio-r/o:(n.top-(e.clientY-n.height))/n.height,0>t&&!i.negative?t=0:t>1?t=1:-1>t&&(t=-1);var a=t*(i.max-i.min)+i.min;i.value=a}},{key:"follow",value:function(t){i=t,document.addEventListener("mousemove",e.followEvent)}},{key:"unfollow",value:function(){document.removeEventListener("mousemove",e.followEvent),r||e.hideInfo()}}]),e}();document.addEventListener("mouseup",s.unfollow),e.exports=s},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(12),u=200,c=function(e){function t(e,n,r,a,s,c){return i(this,t),o(this,Object.getPrototypeOf(t).call(this,e,n,r,a,s,c,u))}return r(t,e),a(t,[{key:"updateVisuals",value:function(e){var t=this.element.children[0];t.style.transform="scale("+e+", "+e+")",0>e?t.classList.add("negative"):t.classList.remove("negative")}}]),t}(s);e.exports=c},function(e,t,n){"use strict";var i=n(15),o=!1,r=void 0,a=void 0,s=document.getElementsByClassName("key"),u=[],c=[],l=function(e){return u.push(e)},h=function(e){return c.push(e)},f=function(e,t){for(var n=0;n<e.length;n++)"function"==typeof e[n]&&e[n](t)},p=function(e){return f(u,e)},d=function(e){return f(c,e)},v=function(e){e.classList.add("pressed"),e.classList.remove("not-active")},y=function(e){e.classList.add("not-active"),e.classList.remove("pressed")},m=function(e,t){var n=e.getAttribute("id");t&&(a=n),p(n),v(e)},g=function(e){var t=e.getAttribute("id");d(t),y(e)},b=function(){for(var e=function(){var e=s[t];e.addEventListener("mousedown",function(t){o=!0,m(e,!0)}),e.addEventListener("mouseover",function(t){o&&m(e,!0)}),e.addEventListener("mouseout",function(t){o&&g(e)}),e.addEventListener("mouseup",function(t){y(e)})},t=0;t<s.length;t++)e();document.addEventListener("mouseup",function(e){o=!1,d(a)})},w=function(){document.addEventListener("keydown",function(e){var t=i[e.key];if(t!==r&&(r=t,"undefined"!=typeof t)){var n=document.getElementById(t);m(n)}}),document.addEventListener("keyup",function(e){r=void 0;var t=i[e.key];if("undefined"!=typeof t){var n=document.getElementById(t);g(n)}})},k=function(){b(),w()};e.exports={initialize:k,onPress:l,onRelease:h}},function(e,t){"use strict";e.exports={z:-9,s:-8,x:-7,d:-6,c:-5,v:-4,g:-3,b:-2,h:-1,n:0,j:1,m:2,",":3,l:4,".":5}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(t,i,o,r){n(this,e),this.attack=t,this.decay=i,this.sustain=o,this.release=r,this.lastNode=void 0}return i(e,[{key:"connect",value:function(e){var t=e.context.currentTime,n=e.gain,i=n.value;n.cancelScheduledValues(t),n.setValueAtTime(0,t),n.linearRampToValueAtTime(i,t+this.attack),n.linearRampToValueAtTime(this.sustain,t+this.attack+this.decay)}},{key:"releaseNow",value:function(e,t){var n=e.context.currentTime,i=e.gain;i.cancelScheduledValues(n),i.setValueAtTime(i.value,n),i.linearRampToValueAtTime(0,n+this.release),setTimeout(t,1e3*this.release)}}]),e}();e.exports=o},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=Math.pow(2,1/12),r=440,a=function(){function e(t,i,o,r,a,s,u){n(this,e),this.oscillators=[],this.gains=[],this.ampGains=[],this.filters=[],this.waveform=t,this.cutoff=i,this.gain=o||.3,this.detune=0,this.envelope=r,this.ampEnvelope=s,this.ampGain=a,this.context=u,this.running=!0}return i(e,[{key:"connect",value:function(e){this.output=e}},{key:"createOscillator",value:function(t){var n=this.context.createOscillator();return n.type=this.waveform,n.semitone=t,n.frequency.value=e.getFrequency(t),n.detune.value=this.detune,n.start(),n}},{key:"createFilter",value:function(e){var t=this.context.createBiquadFilter();return t.type=e,t.frequency.value=this.cutoff,t}},{key:"createGain",value:function(e){var t=this.context.createGain();return t.gain.value=e,t}},{key:"play",value:function(e){this.stop(e);var t=this.createOscillator(e),n=this.createGain(this.gain),i=this.createGain(this.ampGain),o=this.createFilter("lowpass");t.connect(o),this.envelope.connect(n),this.ampEnvelope.connect(i),o.connect(n),n.connect(i),this.running&&i.connect(this.output),this.oscillators.push(t),this.filters.push(o),this.gains.push(n),this.ampGains.push(i)}},{key:"stop",value:function(e){for(var t=this,n=function(){if(t.oscillators[i].semitone!==e)return"continue";var n=t.oscillators[i],o=t.filters[i],r=t.gains[i],a=t.ampGains[i],s=function(){n.stop(),n.isUsed=!0,o.isUsed=!0,r.isUsed=!0,a.isUsed=!0,t.clean()};t.envelope.release>t.ampEnvelope.release?t.envelope.releaseNow(r,s):t.ampEnvelope.releaseNow(a,s)},i=0;i<this.oscillators.length;i++){n()}}},{key:"clean",value:function(){var e=[],t=[],n=[],i=[];this.oscillators.forEach(function(t){t.isUsed||e.push(t)}),this.filters.forEach(function(e){e.isUsed||t.push(e)}),this.gains.forEach(function(e){e.isUsed||n.push(e)}),this.ampGains.forEach(function(e){e.isUsed||i.push(e)}),this.oscillators=e,this.filters=t,this.gains=n,this.ampGains=i}},{key:"unMute",value:function(){var e=this;this.gains.forEach(function(t){return t.connect(e.output)})}},{key:"mute",value:function(){this.gains.forEach(function(e){return e.disconnect()})}},{key:"running",get:function(){return this._running},set:function(e){this._running=e,e?this.unMute():this.mute()}},{key:"waveform",get:function(){return this._waveform},set:function(e){this._waveform=e,this.oscillators.forEach(function(t){return t.type=e})}},{key:"detune",get:function(){return this._detune},set:function(e){this._detune=e,this.oscillators.forEach(function(t){return t.detune.value=e})}},{key:"cutoff",get:function(){return this._cutoff},set:function(e){this._cutoff=e,this.filters.forEach(function(t){return t.frequency.value=e})}},{key:"gain",get:function(){return this._gain},set:function(e){this._gain=e,this.gains.forEach(function(t){return t.gain.value=e})}},{key:"ampGain",get:function(){return this._ampGain},set:function(e){this._ampGain=e,this.ampGains.forEach(function(t){return t.gain.value=e})}}],[{key:"getFrequency",value:function(e){return r*Math.pow(o,e)}}]),e}();e.exports=a}]);