(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7782],{8789:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product-details/thumbnail_left",function(){return n(90721)}])},4382:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(85893),i=(n(67294),n(25921)),r=n(98595),s=n(10267),o=n(51252),c=n(41664),l=n.n(c),u=function(e){var t=e.title,n=e.parent,i=e.subTitle;return(0,a.jsx)("div",{className:"breadcrumb-section",children:(0,a.jsx)(r.Z,{children:(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(o.Z,{sm:"6",children:(0,a.jsx)("div",{className:"page-title",children:(0,a.jsx)("h2",{children:t})})}),(0,a.jsx)(o.Z,{sm:"6",children:(0,a.jsx)("nav",{"aria-label":"breadcrumb",className:"theme-breadcrumb",children:(0,a.jsxs)("ol",{className:"breadcrumb",children:[(0,a.jsx)("li",{className:"breadcrumb-item",children:(0,a.jsx)(l(),{href:"/",children:n})}),(0,a.jsx)("li",{className:"breadcrumb-item","aria-current":"page",children:t}),void 0===i?"":(0,a.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:i})]})})})]})})})},d=n(63272),p=function(e){var t=e.children,n=e.title,r=e.parent,s=e.subTitle;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{noTopBar:!0,topClass:"top-header",logoName:"logo.png"}),(0,a.jsx)(u,{title:n,parent:r,subTitle:s}),(0,a.jsx)(a.Fragment,{children:t}),(0,a.jsx)(d.Z,{footerClass:"footer-light ",footerLayOut:"light-layout upper-footer",footerSection:"small-section border-section border-top-0",belowSection:"section-b-space light-layout",newLatter:!0})]})}},87219:function(e,t,n){"use strict";n.r(t);var a=n(85893),i=n(67294),r=n(98595),s=n(10267),o=n(51252),c=n(77243),l=n(53999),u=n(98008),d=n(9393),p=n(18829);t.default=function(){var e=(0,i.useState)("1"),t=e[0],n=e[1];return(0,a.jsx)("section",{className:"tab-product m-0",children:(0,a.jsx)(r.Z,{children:(0,a.jsx)(s.Z,{children:(0,a.jsx)(o.Z,{sm:"12",lg:"12",children:(0,a.jsxs)(s.Z,{className:"product-page-main m-0",children:[(0,a.jsx)(c.Z,{tabs:!0,className:"nav-material",children:(0,a.jsx)(l.Z,{className:"nav nav-tabs",id:"myTab",role:"tablist",children:(0,a.jsx)(u.Z,{className:"1"===t?"active":"",onClick:function(){return n("1")},children:"\u5546\u54c1\u8cc7\u8a0a"})})}),(0,a.jsx)(d.Z,{activeTab:t,className:"nav-material",children:(0,a.jsx)(p.Z,{tabId:"1",children:(0,a.jsx)("p",{className:"mb-0 pb-0",children:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'})})})]})})})})})}},90721:function(e,t,n){"use strict";n.r(t);var a=n(85893),i=(n(67294),n(4382)),r=n(89193),s=n(87219),o=n(32108);t.default=function(){return(0,a.jsxs)(i.Z,{parent:"home",title:"product",children:[(0,a.jsx)(r.default,{}),(0,a.jsx)(s.default,{}),(0,a.jsx)(o.default,{})]})}},20627:function(e,t,n){"use strict";var a,i=n(87462),r=n(63366),s=n(97326),o=n(94578),c=n(4942),l=n(67294),u=n(45697),d=n.n(u),p=n(94184),f=n.n(p),h=n(64317),b=n(23663),m=["tag","isOpen","className","navbar","cssModule","children","innerRef"];function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=g(g({},h.Transition.propTypes),{},{isOpen:d().bool,children:d().oneOfType([d().arrayOf(d().node),d().node]),tag:b.iC,className:d().node,navbar:d().bool,cssModule:d().object,innerRef:d().oneOfType([d().func,d().string,d().object])}),j=g(g({},h.Transition.defaultProps),{},{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:b.wF.Collapse}),E=((a={})[b.E5.ENTERING]="collapsing",a[b.E5.ENTERED]="collapse show",a[b.E5.EXITING]="collapsing",a[b.E5.EXITED]="collapse",a);function N(e){return e.scrollHeight}var Z=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){n[e]=n[e].bind((0,s.Z)(n))})),n}(0,o.Z)(t,e);var n=t.prototype;return n.onEntering=function(e,t){this.setState({height:N(e)}),this.props.onEntering(e,t)},n.onEntered=function(e,t){this.setState({height:null}),this.props.onEntered(e,t)},n.onExit=function(e){this.setState({height:N(e)}),this.props.onExit(e)},n.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},n.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},n.render=function(){var e=this,t=this.props,n=t.tag,a=t.isOpen,s=t.className,o=t.navbar,c=t.cssModule,u=t.children,d=(t.innerRef,(0,r.Z)(t,m)),p=this.state.height,v=(0,b.ei)(d,b.rb),x=(0,b.CE)(d,b.rb);return l.createElement(h.Transition,(0,i.Z)({},v,{in:a,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(t){var a=function(e){return E[e]||"collapse"}(t),r=(0,b.mx)(f()(s,a,o&&"navbar-collapse"),c),d=null===p?null:{height:p};return l.createElement(n,(0,i.Z)({},x,{style:g(g({},x.style),d),className:r,ref:e.props.innerRef}),u)}))},t}(l.Component);Z.propTypes=x,Z.defaultProps=j,t.Z=Z},77243:function(e,t,n){"use strict";var a=n(87462),i=n(63366),r=n(67294),s=n(45697),o=n.n(s),c=n(94184),l=n.n(c),u=n(23663),d=["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"],p={tabs:o().bool,pills:o().bool,vertical:o().oneOfType([o().bool,o().string]),horizontal:o().string,justified:o().bool,fill:o().bool,navbar:o().bool,card:o().bool,tag:u.iC,className:o().string,cssModule:o().object},f=function(e){var t=e.className,n=e.cssModule,s=e.tabs,o=e.pills,c=e.vertical,p=e.horizontal,f=e.justified,h=e.fill,b=e.navbar,m=e.card,v=e.tag,g=(0,i.Z)(e,d),x=(0,u.mx)(l()(t,b?"navbar-nav":"nav",!!p&&"justify-content-"+p,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(c),{"nav-tabs":s,"card-header-tabs":m&&s,"nav-pills":o,"card-header-pills":m&&o,"nav-justified":f,"nav-fill":h}),n);return r.createElement(v,(0,a.Z)({},g,{className:x}))};f.propTypes=p,f.defaultProps={tag:"ul",vertical:!1},t.Z=f},53999:function(e,t,n){"use strict";var a=n(87462),i=n(63366),r=n(67294),s=n(45697),o=n.n(s),c=n(94184),l=n.n(c),u=n(23663),d=["className","cssModule","active","tag"],p={tag:u.iC,active:o().bool,className:o().string,cssModule:o().object},f=function(e){var t=e.className,n=e.cssModule,s=e.active,o=e.tag,c=(0,i.Z)(e,d),p=(0,u.mx)(l()(t,"nav-item",!!s&&"active"),n);return r.createElement(o,(0,a.Z)({},c,{className:p}))};f.propTypes=p,f.defaultProps={tag:"li"},t.Z=f},98008:function(e,t,n){"use strict";var a=n(87462),i=n(63366),r=n(97326),s=n(94578),o=n(67294),c=n(45697),l=n.n(c),u=n(94184),d=n.n(u),p=n(23663),f=["className","cssModule","active","tag","innerRef"],h={tag:p.iC,innerRef:l().oneOfType([l().object,l().func,l().string]),disabled:l().bool,active:l().bool,className:l().string,cssModule:l().object,onClick:l().func,href:l().any},b=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind((0,r.Z)(n)),n}(0,s.Z)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,r=e.active,s=e.tag,c=e.innerRef,l=(0,i.Z)(e,f),u=(0,p.mx)(d()(t,"nav-link",{disabled:l.disabled,active:r}),n);return o.createElement(s,(0,a.Z)({},l,{ref:c,onClick:this.onClick,className:u}))},t}(o.Component);b.propTypes=h,b.defaultProps={tag:"a"},t.Z=b},9393:function(e,t,n){"use strict";var a=n(87462),i=n(94578),r=n(67294),s=n(45697),o=n.n(s),c=n(94184),l=n.n(c),u=n(70635),d=n(23663),p={tag:d.iC,activeTab:o().any,className:o().string,cssModule:o().object},f=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={activeTab:n.props.activeTab},n}return(0,i.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return t.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},t.prototype.render=function(){var e=this.props,t=e.className,n=e.cssModule,i=e.tag,s=(0,d.CE)(this.props,Object.keys(p)),o=(0,d.mx)(l()("tab-content",t),n);return r.createElement(u.q.Provider,{value:{activeTabId:this.state.activeTab}},r.createElement(i,(0,a.Z)({},s,{className:o})))},t}(r.Component);t.Z=f,f.propTypes=p,f.defaultProps={tag:"div"}},70635:function(e,t,n){"use strict";n.d(t,{q:function(){return a}});var a=n(67294).createContext({})},18829:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var a=n(87462),i=n(63366),r=n(67294),s=n(45697),o=n.n(s),c=n(94184),l=n.n(c),u=n(70635),d=n(23663),p=["className","cssModule","tabId","tag"],f={tag:d.iC,className:o().string,cssModule:o().object,tabId:o().any};function h(e){var t=e.className,n=e.cssModule,s=e.tabId,o=e.tag,c=(0,i.Z)(e,p),f=function(e){return(0,d.mx)(l()("tab-pane",t,{active:s===e}),n)};return r.createElement(u.q.Consumer,null,(function(e){var t=e.activeTabId;return r.createElement(o,(0,a.Z)({},c,{className:f(t)}))}))}h.propTypes=f,h.defaultProps={tag:"div"}}},function(e){e.O(0,[2016,3590,1559,3443,7076,6066,6941,6160,3893,5254,1549,4751,3272,5921,2108,9193,9774,2888,179],(function(){return t=8789,e(e.s=t);var t}));var t=e.O();_N_E=t}]);