(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[940],{99534:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(61365),o=n(56936);const i=(0,r.Z)(o.h_)},61365:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var r=n(67294),o=n.n(r),i=n(37275);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}const a=function(t){return function(e){return o().createElement(t,c({},e,{container:document.querySelector("."+(i.ZP.getConfigProp("themePrefix")||"ms2")+" > div")||document.body}))}}},56724:(t,e,n)=>{"use strict";n.d(e,{Z:()=>S});var r=n(67294),o=n.n(r),i=n(26656),c=n.n(i),a=n(45697),u=n.n(a),f=n(37101),s=n(86638),l=n(99534);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(){return(y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){j(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?g(t):e}function g(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}(u,t);var e,n,r,i,a=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=w(r);if(i){var n=w(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return h(this,t)});function u(){var t;d(this,u);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return j(g(t=a.call.apply(a,[this].concat(n))),"system",(function(){return t.refs.notify})),j(g(t),"updateNotifications",(function(e){var n=e.map((function(t){return t.uid})),r=t.system().state.notifications||[];r.forEach((function(e){n.indexOf(e.uid)<0&&t.system().removeNotification(e.uid)})),e.forEach((function(e){if(r.indexOf(e.uid)<0){var n,o=e.message,i=(0,s.S$)(t.context.messages,o);n=e.values?(0,t.props.intl.formatMessage)(n=(0,f.defineMessages)({id:o,defaultMessage:i}),e.values):i||o,t.system().addNotification(m(m({},e),{},{title:(0,s.S$)(t.context.messages,e.title)||e.title,message:n,action:e.action&&{label:(0,s.S$)(t.context.messages,e.action.label)||e.action.label,callback:e.action.dispatch?function(){t.props.onDispatch(e.action.dispatch)}:e.action.callback},onRemove:function(){t.props.onRemove(e.uid),e.onRemove&&e.onRemove()}}))}}))})),t}return e=u,(n=[{key:"componentDidMount",value:function(){this.updateNotifications(this.props.notifications)}},{key:"componentDidUpdate",value:function(){var t=(this.props||[]).notifications;this.updateNotifications(t)}},{key:"render",value:function(){var t=this.props,e=(t.notifications,t.onRemove,function(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}(t,["notifications","onRemove"]));return o().createElement(l.Z,null,o().createElement(c(),y({ref:"notify"},e)))}}])&&v(e.prototype,n),u}(o().Component);j(P,"propTypes",{notifications:u().array,intl:f.intlShape.isRequired,onRemove:u().func,onDispatch:u().func}),j(P,"contextTypes",{messages:u().object}),j(P,"defaultProps",{notifications:[],onRemove:function(){},onDispatch:function(){}});const S=(0,f.injectIntl)(P)},20301:(t,e,n)=>{"use strict";n.d(e,{R:()=>c});var r=n(89255),o=n(97395),i=n(75982),c=function(t){return t.ofType(i.nk).switchMap((function(){return r.Observable.of((0,o.ZH)())}))}},57355:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>a});var r=n(33664),o=n(97395),i=n(56724),c=n(20301);const a={NotificationsPlugin:(0,r.connect)((function(t){return{notifications:t&&t.notifications}}),{onRemove:o.Cp,onDispatch:o.Ce})(i.Z),reducers:{notifications:n(97080).Z},epics:{clearNotificationOnLocationChange:c.R}}},97080:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var r=n(97395);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function f(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}const s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(e.type){case r.e2:e.type;var n=f(e,["type"]);return[].concat(a(t),[i({},n)]);case r.Zz:return t.filter((function(t){return t.uid!==e.uid}));case r.wt:return[];default:return t}}},90874:(t,e,n)=>{"use strict";var r=n(95318);e.__esModule=!0,e.default=void 0;var o,i=r(n(50139)),c="clearTimeout",a=function(t){var e=(new Date).getTime(),n=Math.max(0,16-(e-f)),r=setTimeout(t,n);return f=e,r},u=function(t,e){return t+(t?e[0].toUpperCase()+e.substr(1):e)+"AnimationFrame"};i.default&&["","webkit","moz","o","ms"].some((function(t){var e=u(t,"request");if(e in window)return c=u(t,"cancel"),a=function(t){return window[e](t)}}));var f=(new Date).getTime();(o=function(t){return a(t)}).cancel=function(t){window[c]&&"function"==typeof window[c]&&window[c](t)};var s=o;e.default=s,t.exports=e.default}}]);