(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[3130],{67460:(e,t,n)=>{var r=n(33716),i=n(48059),o=n(89796),u=Math.max,c=Math.min;e.exports=function(e,t,n){var s,a,f,h,l,d,p=0,v=!1,y=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=s,r=a;return s=a=void 0,p=t,h=e.apply(r,n)}function _(e){return p=e,l=setTimeout(w,t),v?m(e):h}function g(e){var n=e-d;return void 0===d||n>=t||n<0||y&&e-p>=f}function w(){var e=i();if(g(e))return O(e);l=setTimeout(w,function(e){var n=t-(e-d);return y?c(n,f-(e-p)):n}(e))}function O(e){return l=void 0,b&&s?m(e):(s=a=void 0,h)}function E(){var e=i(),n=g(e);if(s=arguments,a=this,d=e,n){if(void 0===l)return _(d);if(y)return clearTimeout(l),l=setTimeout(w,t),m(d)}return void 0===l&&(l=setTimeout(w,t)),h}return t=o(t)||0,r(n)&&(v=!!n.leading,f=(y="maxWait"in n)?u(o(n.maxWait)||0,t):f,b="trailing"in n?!!n.trailing:b),E.cancel=function(){void 0!==l&&clearTimeout(l),p=0,s=d=a=l=void 0},E.flush=function(){return void 0===l?h:O(i())},E}},48059:(e,t,n)=>{var r=n(6583);e.exports=function(){return r.Date.now()}},90808:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(89122),i=n(59641),o=n(47422),u=Math.max,c=Math.min;const s=function(e,t,n){var s,a,f,h,l,d,p=0,v=!1,y=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=s,r=a;return s=a=void 0,p=t,h=e.apply(r,n)}function _(e){return p=e,l=setTimeout(w,t),v?m(e):h}function g(e){var n=e-d;return void 0===d||n>=t||n<0||y&&e-p>=f}function w(){var e=(0,i.Z)();if(g(e))return O(e);l=setTimeout(w,function(e){var n=t-(e-d);return y?c(n,f-(e-p)):n}(e))}function O(e){return l=void 0,b&&s?m(e):(s=a=void 0,h)}function E(){var e=(0,i.Z)(),n=g(e);if(s=arguments,a=this,d=e,n){if(void 0===l)return _(d);if(y)return clearTimeout(l),l=setTimeout(w,t),m(d)}return void 0===l&&(l=setTimeout(w,t)),h}return t=(0,o.Z)(t)||0,(0,r.Z)(n)&&(v=!!n.leading,f=(y="maxWait"in n)?u((0,o.Z)(n.maxWait)||0,t):f,b="trailing"in n?!!n.trailing:b),E.cancel=function(){void 0!==l&&clearTimeout(l),p=0,s=d=a=l=void 0},E.flush=function(){return void 0===l?h:O((0,i.Z)())},E}},89122:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},97828:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(59197),i=n(23195);const o=function(e){return"symbol"==typeof e||(0,i.Z)(e)&&"[object Symbol]"==(0,r.Z)(e)}},59641:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(53249);const i=function(){return r.Z.Date.now()}},58848:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(90808),i=n(89122);const o=function(e,t,n){var o=!0,u=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return(0,i.Z)(n)&&(o="leading"in n?!!n.leading:o,u="trailing"in n?!!n.trailing:u),(0,r.Z)(e,t,{leading:o,maxWait:t,trailing:u})}},47422:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(89122),i=n(97828),o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,a=parseInt;const f=function(e){if("number"==typeof e)return e;if((0,i.Z)(e))return NaN;if((0,r.Z)(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=(0,r.Z)(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=c.test(e);return n||s.test(e)?a(e.slice(2),n?2:8):u.test(e)?NaN:+e}},5729:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=function(e){var t=[],n=null,r=function(){for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];t=i,n||(n=requestAnimationFrame((function(){n=null,e.apply(void 0,t)})))};return r.cancel=function(){n&&(cancelAnimationFrame(n),n=null)},r}},33883:(e,t,n)=>{"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,{Z:()=>a});const a=function(e){function t(){return i(this,t),u(this,c(t).apply(this,arguments))}var n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return this.props.children}}])&&o(n.prototype,r),t}(n(67294).PureComponent)},55553:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(67294),i=n.n(r),o=n(73935),u=n(60544),c=n(5729),s=n(45697),a=n(59181),f=n(33883);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?p(e):t}(this,d(t).call(this,e)),y(p(n),"cancelHandler",(function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)})),y(p(n),"rafClean",(function(){n.raf&&n.raf.cancel&&(n.raf.cancel(),n.raf=null)})),y(p(n),"toggleObserver",(function(e){var t=n.getElement();t&&n.resizeObserver[e]&&n.resizeObserver[e](t)})),y(p(n),"getElement",(function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(!(0,a.yF)()){if(t)return document.querySelector(t);if(r&&(0,a.aY)(r))return r;var i=n.element&&(0,o.findDOMNode)(n.element);if(i)return i.parentElement}})),y(p(n),"createUpdater",(function(){return n.rafClean(),n.raf=(0,c.Z)((function(e){var t=e.width,r=e.height,i=n.props.onResize;(0,a.mf)(i)&&i(t,r),n.setState({width:t,height:r})})),n.raf})),y(p(n),"createResizeHandler",(function(e){var t=n.state,r=t.width,i=t.height,o=n.props,u=o.handleWidth,c=o.handleHeight;if(u||c){var s=n.createUpdater();e.forEach((function(e){var t=e&&e.contentRect||{},o=t.width,f=t.height,h=u&&r!==o||c&&i!==f;!n.skipOnMount&&h&&!(0,a.yF)()&&s({width:o,height:f}),n.skipOnMount=!1}))}})),y(p(n),"onRef",(function(e){n.element=e})),y(p(n),"getRenderType",(function(){var e=n.props,t=e.render,i=e.children;return(0,a.mf)(t)?"renderProp":(0,a.mf)(i)?"childFunction":(0,r.isValidElement)(i)?"child":Array.isArray(i)?"childArray":"parent"})),y(p(n),"getTargetComponent",(function(){var e=n.props,t=e.render,i=e.children,o=e.nodeType,u=n.state,c={width:u.width,height:u.height};switch(n.getRenderType()){case"renderProp":return(0,r.cloneElement)(t(c),{key:"resize-detector"});case"childFunction":return(0,r.cloneElement)(i(c));case"child":return(0,r.cloneElement)(i,c);case"childArray":return i.map((function(e){return!!e&&(0,r.cloneElement)(e,c)}));default:return(0,r.createElement)(o)}}));var i=e.skipOnMount,s=e.refreshMode,f=e.refreshRate,l=e.refreshOptions;n.state={width:void 0,height:void 0},n.skipOnMount=i,n.raf=null,n.element=null,n.unmounted=!1;var v=(0,a.xD)(s);return n.resizeHandler=v?v(n.createResizeHandler,f,l):n.createResizeHandler,n.resizeObserver=new u.Z(n.resizeHandler),n}var n,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,e),n=t,(s=[{key:"componentDidMount",value:function(){this.toggleObserver("observe")}},{key:"componentWillUnmount",value:function(){this.toggleObserver("unobserve"),this.rafClean(),this.cancelHandler(),this.unmounted=!0}},{key:"render",value:function(){return i().createElement(f.Z,{ref:this.onRef},this.getTargetComponent())}}])&&l(n.prototype,s),t}(r.PureComponent);b.propTypes={handleWidth:s.bool,handleHeight:s.bool,skipOnMount:s.bool,refreshRate:s.number,refreshMode:s.string,refreshOptions:(0,s.shape)({leading:s.bool,trailing:s.bool}),querySelector:s.string,targetDomEl:s.any,onResize:s.func,render:s.func,children:s.any,nodeType:s.node},b.defaultProps={handleWidth:!1,handleHeight:!1,skipOnMount:!1,refreshRate:1e3,refreshMode:void 0,refreshOptions:void 0,querySelector:null,targetDomEl:null,onResize:null,render:void 0,children:null,nodeType:"div"};const m=b},59181:(e,t,n)=>{"use strict";n.d(t,{xD:()=>u,mf:()=>c,yF:()=>s,aY:()=>a});var r=n(90808),i=n(58848),o={debounce:r.Z,throttle:i.Z},u=function(e){return o[e]},c=function(e){return"function"==typeof e},s=function(){return"undefined"==typeof window},a=function(e){return e instanceof Element||e instanceof HTMLDocument}},60544:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var r=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var n=-1;return e.some((function(e,r){return e[0]===t&&(n=r,!0)})),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];e.call(t,i[1],i[0])}},t}()}(),i="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,o=void 0!==n.g&&n.g.Math===Math?n.g:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),u="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(o):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)},c=["top","right","bottom","left","width","height","size","weight"],s="undefined"!=typeof MutationObserver,a=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&s()}function c(){u(o)}function s(){var e=Date.now();if(n){if(e-i<2)return;r=!0}else n=!0,r=!1,setTimeout(c,20);i=e}return s}(this.refresh.bind(this))}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){i&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),s?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){i&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;c.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),f=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},h=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||o},l=b(0,0,0,0);function d(e){return parseFloat(e)||0}function p(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(t,n){return t+d(e["border-"+n+"-width"])}),0)}var v="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof h(e).SVGGraphicsElement}:function(e){return e instanceof h(e).SVGElement&&"function"==typeof e.getBBox};function y(e){return i?v(e)?function(e){var t=e.getBBox();return b(0,0,t.width,t.height)}(e):function(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return l;var r=h(e).getComputedStyle(e),i=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=e["padding-"+i];t[i]=d(o)}return t}(r),o=i.left+i.right,u=i.top+i.bottom,c=d(r.width),s=d(r.height);if("border-box"===r.boxSizing&&(Math.round(c+o)!==t&&(c-=p(r,"left","right")+o),Math.round(s+u)!==n&&(s-=p(r,"top","bottom")+u)),!function(e){return e===h(e).document.documentElement}(e)){var a=Math.round(c+o)-t,f=Math.round(s+u)-n;1!==Math.abs(a)&&(c-=a),1!==Math.abs(f)&&(s-=f)}return b(i.left,i.top,c,s)}(e):l}function b(e,t,n,r){return{x:e,y:t,width:n,height:r}}var m=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=b(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=y(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),_=function(e,t){var n,r,i,o,u,c,s,a=(r=(n=t).x,i=n.y,o=n.width,u=n.height,c="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,s=Object.create(c.prototype),f(s,{x:r,y:i,width:o,height:u,top:i,right:r+o,bottom:u+i,left:r}),s);f(this,{target:e,contentRect:a})},g=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new r,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof h(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new m(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof h(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new _(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),w="undefined"!=typeof WeakMap?new WeakMap:new r,O=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=a.getInstance(),r=new g(t,n,this);w.set(this,r)};["observe","unobserve","disconnect"].forEach((function(e){O.prototype[e]=function(){var t;return(t=w.get(this))[e].apply(t,arguments)}}));const E=void 0!==o.ResizeObserver?o.ResizeObserver:O}}]);