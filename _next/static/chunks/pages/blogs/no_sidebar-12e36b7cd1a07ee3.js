(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[598],{35381:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/no_sidebar",function(){return t(13446)}])},4382:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var r=t(85893),i=(t(67294),t(25921)),s=t(98595),o=t(10267),a=t(51252),l=t(41664),c=t.n(l),h=function(e){var n=e.title,t=e.parent,i=e.subTitle;return(0,r.jsx)("div",{className:"breadcrumb-section",children:(0,r.jsx)(s.Z,{children:(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(a.Z,{sm:"6",children:(0,r.jsx)("div",{className:"page-title",children:(0,r.jsx)("h2",{children:n})})}),(0,r.jsx)(a.Z,{sm:"6",children:(0,r.jsx)("nav",{"aria-label":"breadcrumb",className:"theme-breadcrumb",children:(0,r.jsxs)("ol",{className:"breadcrumb",children:[(0,r.jsx)("li",{className:"breadcrumb-item",children:(0,r.jsx)(c(),{href:"/",children:t})}),(0,r.jsx)("li",{className:"breadcrumb-item","aria-current":"page",children:n}),void 0===i?"":(0,r.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:i})]})})})]})})})},u=t(63272),d=function(e){var n=e.children,t=e.title,s=e.parent,o=e.subTitle;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{noTopBar:!0,topClass:"top-header",logoName:"logo.png"}),(0,r.jsx)(h,{title:t,parent:s,subTitle:o}),(0,r.jsx)(r.Fragment,{children:n}),(0,r.jsx)(u.Z,{footerClass:"footer-light ",footerLayOut:"light-layout upper-footer",footerSection:"small-section border-section border-top-0",belowSection:"section-b-space light-layout",newLatter:!0})]})}},82137:function(e,n,t){"use strict";t.r(n);var r=t(7297),i=t(85893),s=(t(67294),t(10267)),o=t(51252),a=t(34726),l=t(17283),c=t(55850);function h(){var e=(0,r.Z)(["\n  query blog($type: String!) {\n    blog(type: $type) {\n      img\n      link\n      title\n      desc\n      date\n      longDesc\n      shortDesc\n    }\n  }\n"]);return h=function(){return e},e}var u=(0,l.Ps)(h());n.default=function(){var e=(0,c.a)(u,{variables:{type:"fashion"}}).data;return(0,i.jsx)(i.Fragment,{children:e&&e.blog.map((function(e,n){return(0,i.jsxs)(s.Z,{className:"blog-media",children:[(0,i.jsx)(o.Z,{xl:"6",children:(0,i.jsx)("div",{className:"blog-left",children:(0,i.jsx)("a",{href:"#",children:(0,i.jsx)(a.Z,{src:e.img,className:"img-fluid blur-up lazyload bg-img",alt:""})})})}),(0,i.jsx)(o.Z,{xl:"6",children:(0,i.jsx)("div",{className:"blog-right",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("h6",{children:e.title}),(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("h4",{children:e.shortDesc})}),(0,i.jsxs)("ul",{className:"post-social",children:[(0,i.jsx)("li",{children:"Posted By : Admin Admin"}),(0,i.jsxs)("li",{children:[(0,i.jsx)("i",{className:"fa fa-heart"})," 5 Hits"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("i",{className:"fa fa-comments"})," 10 Comment"]})]}),(0,i.jsx)("p",{children:e.longDesc})]})})})]},n)}))})}},13446:function(e,n,t){"use strict";t.r(n);var r=t(85893),i=(t(67294),t(98595)),s=t(10267),o=t(51252),a=t(4382),l=t(82137);n.default=function(){return(0,r.jsx)(a.Z,{parent:"home",title:"blog",children:(0,r.jsx)("section",{className:"section-b-space blog-page ratio2_3 no-sidebar",children:(0,r.jsx)(i.Z,{children:(0,r.jsx)(s.Z,{children:(0,r.jsx)(o.Z,{children:(0,r.jsx)(l.default,{})})})})})})}},20627:function(e,n,t){"use strict";var r,i=t(87462),s=t(63366),o=t(97326),a=t(94578),l=t(4942),c=t(67294),h=t(45697),u=t.n(h),d=t(94184),p=t.n(d),f=t(64317),g=t(23663),b=["tag","isOpen","className","navbar","cssModule","children","innerRef"];function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var j=m(m({},f.Transition.propTypes),{},{isOpen:u().bool,children:u().oneOfType([u().arrayOf(u().node),u().node]),tag:g.iC,className:u().node,navbar:u().bool,cssModule:u().object,innerRef:u().oneOfType([u().func,u().string,u().object])}),E=m(m({},f.Transition.defaultProps),{},{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:g.wF.Collapse}),v=((r={})[g.E5.ENTERING]="collapsing",r[g.E5.ENTERED]="collapse show",r[g.E5.EXITING]="collapsing",r[g.E5.EXITED]="collapse",r);function y(e){return e.scrollHeight}var N=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){t[e]=t[e].bind((0,o.Z)(t))})),t}(0,a.Z)(n,e);var t=n.prototype;return t.onEntering=function(e,n){this.setState({height:y(e)}),this.props.onEntering(e,n)},t.onEntered=function(e,n){this.setState({height:null}),this.props.onEntered(e,n)},t.onExit=function(e){this.setState({height:y(e)}),this.props.onExit(e)},t.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},t.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},t.render=function(){var e=this,n=this.props,t=n.tag,r=n.isOpen,o=n.className,a=n.navbar,l=n.cssModule,h=n.children,u=(n.innerRef,(0,s.Z)(n,b)),d=this.state.height,x=(0,g.ei)(u,g.rb),j=(0,g.CE)(u,g.rb);return c.createElement(f.Transition,(0,i.Z)({},x,{in:r,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(n){var r=function(e){return v[e]||"collapse"}(n),s=(0,g.mx)(p()(o,r,a&&"navbar-collapse"),l),u=null===d?null:{height:d};return c.createElement(t,(0,i.Z)({},j,{style:m(m({},j.style),u),className:s,ref:e.props.innerRef}),h)}))},n}(c.Component);N.propTypes=j,N.defaultProps=E,n.Z=N}},function(e){e.O(0,[2016,3590,1559,3443,7076,6941,5254,1549,4751,3272,5921,9774,2888,179],(function(){return n=35381,e(e.s=n);var n}));var n=e.O();_N_E=n}]);