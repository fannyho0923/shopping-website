(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4693],{97297:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/layouts/Game/Component/Time-banner",function(){return n(17247)}])},65995:function(t,e,n){"use strict";var r=n(85893),o=n(67294),s=n(98130);e.Z=function(){var t=function(){return(0,r.jsx)("span",{children:"You are good to go!"})},e=new Date,n=e.getFullYear(),a=e.getMonth(),i=e.getDate(),c=new Date(n,a,i+10).getTime();return(0,r.jsx)(o.Fragment,{children:(0,r.jsx)(s.ZP,{date:c,renderer:function(e){var n=e.days,o=e.hours,s=e.minutes,a=e.seconds;return e.completed?(0,r.jsx)(t,{}):(0,r.jsx)("div",{className:"timer-box",children:(0,r.jsx)("div",{className:"timer",children:(0,r.jsxs)("div",{className:"timer-p",id:"demo",children:[(0,r.jsxs)("span",{children:[n,(0,r.jsx)("span",{className:"padding-l",children:":"}),(0,r.jsx)("span",{className:"timer-cal",children:"Days"})]}),(0,r.jsxs)("span",{children:[o,(0,r.jsx)("span",{className:"padding-l",children:":"}),(0,r.jsx)("span",{className:"timer-cal",children:"Hrs"})]}),(0,r.jsxs)("span",{children:[s,(0,r.jsx)("span",{className:"padding-l",children:":"}),(0,r.jsx)("span",{className:"timer-cal",children:"Min"})]}),(0,r.jsxs)("span",{children:[a,(0,r.jsx)("span",{className:"timer-cal",children:"Sec"})]})]})})})}})})}},17247:function(t,e,n){"use strict";n.r(e);var r=n(85893),o=(n(67294),n(98595)),s=n(10267),a=n(51252),i=n(65995);e.default=function(){return(0,r.jsx)("section",{className:"game-banner",children:(0,r.jsx)(o.Z,{children:(0,r.jsxs)(s.Z,{className:"banner-timer",children:[(0,r.jsx)(a.Z,{md:"6",children:(0,r.jsx)("div",{className:"banner-text",children:(0,r.jsxs)("h2",{children:["Save ",(0,r.jsx)("span",{children:"30% off"})," Digital Watch"]})})}),(0,r.jsx)(a.Z,{md:"6",children:(0,r.jsx)(i.Z,{})})]})})})}},98130:function(t,e,n){"use strict";var r=n(67294),o=n(45697);function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}function c(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}function l(t,e){return l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},l(t,e)}function m(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function f(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=String(t);if(0===e)return n;var r=n.match(/(.*?)([0-9]+)(.*)/),o=r?r[1]:"",s=r?r[3]:"",a=r?r[2]:n,i=a.length>=e?a:(f(Array(e)).map((function(){return"0"})).join("")+a).slice(-1*e);return"".concat(o).concat(i).concat(s)}var v={daysInHours:!1,zeroPadTime:2};function y(t,e){var n=t.days,r=t.hours,o=t.minutes,s=t.seconds,a=Object.assign(Object.assign({},v),e),i=a.daysInHours,c=a.zeroPadTime,u=a.zeroPadDays,l=void 0===u?c:u,m=Math.min(2,c),p=i?h(r+24*n,c):h(r,m);return{days:i?"":h(n,l),hours:p,minutes:h(o,m),seconds:h(s,m)}}var T=function(t){c(n,t);var e=p(n);function n(){var t;return s(this,n),(t=e.apply(this,arguments)).state={count:t.props.count||3},t.startCountdown=function(){t.interval=window.setInterval((function(){0===t.state.count-1?(t.stopCountdown(),t.props.onComplete&&t.props.onComplete()):t.setState((function(t){return{count:t.count-1}}))}),1e3)},t.stopCountdown=function(){clearInterval(t.interval)},t.addTime=function(e){t.stopCountdown(),t.setState((function(t){return{count:t.count+e}}),t.startCountdown)},t}return i(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?(0,r.cloneElement)(this.props.children,{count:this.state.count}):null}}]),n}(r.Component);T.propTypes={count:o.number,children:o.element,onComplete:o.func};var g=function(t){c(n,t);var e=p(n);function n(t){var o;if(s(this,n),(o=e.call(this,t)).mounted=!1,o.initialTimestamp=o.calcOffsetStartTimestamp(),o.offsetStartTimestamp=o.props.autoStart?0:o.initialTimestamp,o.offsetTime=0,o.legacyMode=!1,o.legacyCountdownRef=(0,r.createRef)(),o.tick=function(){var t=o.calcTimeDelta(),e=t.completed&&!o.props.overtime?void 0:o.props.onTick;o.setTimeDeltaState(t,void 0,e)},o.start=function(){if(!o.isStarted()){var t=o.offsetStartTimestamp;o.offsetStartTimestamp=0,o.offsetTime+=t?o.calcOffsetStartTimestamp()-t:0;var e=o.calcTimeDelta();o.setTimeDeltaState(e,"STARTED",o.props.onStart),o.props.controlled||e.completed&&!o.props.overtime||(o.clearTimer(),o.interval=window.setInterval(o.tick,o.props.intervalDelay))}},o.pause=function(){o.isPaused()||(o.clearTimer(),o.offsetStartTimestamp=o.calcOffsetStartTimestamp(),o.setTimeDeltaState(o.state.timeDelta,"PAUSED",o.props.onPause))},o.stop=function(){o.isStopped()||(o.clearTimer(),o.offsetStartTimestamp=o.calcOffsetStartTimestamp(),o.offsetTime=o.offsetStartTimestamp-o.initialTimestamp,o.setTimeDeltaState(o.calcTimeDelta(),"STOPPED",o.props.onStop))},o.isStarted=function(){return o.isStatus("STARTED")},o.isPaused=function(){return o.isStatus("PAUSED")},o.isStopped=function(){return o.isStatus("STOPPED")},o.isCompleted=function(){return o.isStatus("COMPLETED")},t.date){var a=o.calcTimeDelta();o.state={timeDelta:a,status:a.completed?"COMPLETED":"STOPPED"}}else o.legacyMode=!0;return o}return i(n,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(t){this.legacyMode||this.props.date!==t.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var t=this.props,e=t.date,n=t.now,r=t.precision,o=t.controlled,s=t.overtime;return function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.now,o=void 0===r?Date.now:r,s=n.precision,a=void 0===s?0:s,i=n.controlled,c=n.offsetTime,u=void 0===c?0:c,l=n.overtime;e="string"===typeof t?new Date(t).getTime():t instanceof Date?t.getTime():t,i||(e+=u);var m=i?e:e-o(),p=Math.min(20,Math.max(0,a)),f=Math.round(1e3*parseFloat(((l?m:Math.max(0,m))/1e3).toFixed(p))),d=Math.abs(f)/1e3;return{total:f,days:Math.floor(d/86400),hours:Math.floor(d/3600%24),minutes:Math.floor(d/60%60),seconds:Math.floor(d%60),milliseconds:Number((d%1*1e3).toFixed()),completed:f<=0}}(e,{now:n,precision:r,controlled:o,offsetTime:this.offsetTime,overtime:s})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(t){this.legacyCountdownRef.current.addTime(t)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(t){return this.state.status===t}},{key:"setTimeDeltaState",value:function(t,e,n){var r=this;if(this.mounted){var o=t.completed&&!this.state.timeDelta.completed,s=t.completed&&"STARTED"===e;o&&!this.props.overtime&&this.clearTimer();return this.setState((function(n){var o=e||n.status;return t.completed&&!r.props.overtime?o="COMPLETED":e||"COMPLETED"!==o||(o="STOPPED"),{timeDelta:t,status:o}}),(function(){n&&n(r.state.timeDelta),r.props.onComplete&&(o||s)&&r.props.onComplete(t,s)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var t=this.props,e=t.daysInHours,n=t.zeroPadTime,r=t.zeroPadDays,o=this.state.timeDelta;return Object.assign(Object.assign({},o),{api:this.getApi(),props:this.props,formatted:y(o,{daysInHours:e,zeroPadTime:n,zeroPadDays:r})})}},{key:"render",value:function(){if(this.legacyMode){var t=this.props,e=t.count,n=t.children,o=t.onComplete;return(0,r.createElement)(T,{ref:this.legacyCountdownRef,count:e,onComplete:o},n)}var s=this.props,a=s.className,i=s.overtime,c=s.children,u=s.renderer,l=this.getRenderProps();if(u)return u(l);if(c&&this.state.timeDelta.completed&&!i)return(0,r.cloneElement)(c,{countdown:l});var m=l.formatted,p=m.days,f=m.hours,d=m.minutes,h=m.seconds;return(0,r.createElement)("span",{className:a},l.total<0?"-":"",p,p?":":"",f,":",d,":",h)}}]),n}(r.Component);g.defaultProps=Object.assign(Object.assign({},v),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),g.propTypes={date:(0,o.oneOfType)([(0,o.instanceOf)(Date),o.string,o.number]),daysInHours:o.bool,zeroPadTime:o.number,zeroPadDays:o.number,controlled:o.bool,intervalDelay:o.number,precision:o.number,autoStart:o.bool,overtime:o.bool,className:o.string,children:o.element,renderer:o.func,now:o.func,onMount:o.func,onStart:o.func,onPause:o.func,onStop:o.func,onTick:o.func,onComplete:o.func},e.ZP=g},98595:function(t,e,n){"use strict";var r=n(87462),o=n(63366),s=n(67294),a=n(45697),i=n.n(a),c=n(94184),u=n.n(c),l=n(23663),m=["className","cssModule","fluid","tag"],p={tag:l.iC,fluid:i().oneOfType([i().bool,i().string]),className:i().string,cssModule:i().object},f=function(t){var e=t.className,n=t.cssModule,a=t.fluid,i=t.tag,c=(0,o.Z)(t,m),p="container";!0===a?p="container-fluid":a&&(p="container-"+a);var f=(0,l.mx)(u()(e,p),n);return s.createElement(i,(0,r.Z)({},c,{className:f}))};f.propTypes=p,f.defaultProps={tag:"div"},e.Z=f},10267:function(t,e,n){"use strict";var r=n(87462),o=n(63366),s=n(67294),a=n(45697),i=n.n(a),c=n(94184),u=n.n(c),l=n(23663),m=["className","cssModule","noGutters","tag","form","widths"],p=i().oneOfType([i().number,i().string]),f={tag:l.iC,noGutters:i().bool,className:i().string,cssModule:i().object,form:i().bool,xs:p,sm:p,md:p,lg:p,xl:p},d={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(t){var e=t.className,n=t.cssModule,a=t.noGutters,i=t.tag,c=t.form,p=t.widths,f=(0,o.Z)(t,m),d=[];p.forEach((function(e,n){var r=t[e];if(delete f[e],r){var o=!n;d.push(o?"row-cols-"+r:"row-cols-"+e+"-"+r)}}));var h=(0,l.mx)(u()(e,a?"no-gutters":null,c?"form-row":"row",d),n);return s.createElement(i,(0,r.Z)({},f,{className:h}))};h.propTypes=f,h.defaultProps=d,e.Z=h}},function(t){t.O(0,[9774,2888,179],(function(){return e=97297,t(t.s=e);var e}));var e=t.O();_N_E=e}]);