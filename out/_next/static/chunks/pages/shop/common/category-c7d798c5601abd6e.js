(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2075],{65118:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop/common/category",function(){return r(39782)}])},39782:function(n,e,r){"use strict";r.r(e);var i=r(85893),t=r(67294),l=r(20627),o=r(37486);e.default=function(){var n=(0,t.useContext)(o.Z),e=(0,t.useState)(!0),r=e[0],c=e[1],s=n.setSelectedCategory,u=(0,t.useState)(),a=(u[0],u[1],function(n){s(n)});return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"collection-collapse-block open",children:[(0,i.jsx)("h3",{className:"collapse-block-title",onClick:function(){return c(!r)},children:"Category"}),(0,i.jsx)(l.Z,{isOpen:r,children:(0,i.jsx)("div",{className:"collection-collapse-block-content",children:(0,i.jsx)("div",{className:"collection-brand-filter",children:(0,i.jsxs)("ul",{className:"category-list",children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:null,onClick:function(){return a("all")},children:"all products"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:null,onClick:function(){return a("fashion")},children:"fashion"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:null,onClick:function(){return a("electronics")},children:"electronics"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:null,onClick:function(){return a("vegetables")},children:"vegetables"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:null,onClick:function(){return a("furniture")},children:"furniture"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:null,onClick:function(){return a("jewellery")},children:"jewellery"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:null,onClick:function(){return a("beauty")},children:"beauty"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:null,onClick:function(){return a("flower")},children:"flower"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:null,onClick:function(){return a("tools")},children:"tools"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:null,onClick:function(){return a("watch")},children:"watch"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:null,onClick:function(){return a("metro")},children:"metro"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:null,onClick:function(){return a("shoes")},children:"shoes"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:null,onClick:function(){return a("bags")},children:"bags"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:null,onClick:function(){return a("kids")},children:"kids"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:null,onClick:function(){return a("pets")},children:"PETS"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:null,onClick:function(){return a("goggles")},children:"goggles"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:null,onClick:function(){return a("game")},children:"game"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:null,onClick:function(){return a("gym")},children:"gym"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:null,onClick:function(){return a("nursery")},children:"nursery"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:null,onClick:function(){return a("videoslider")},children:"videoslider"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:null,onClick:function(){return a("marketplace")},children:"marketplace"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:null,onClick:function(){return a("marijuana")},children:"marijuana"})})]})})})})]})})}},20627:function(n,e,r){"use strict";var i,t=r(87462),l=r(63366),o=r(97326),c=r(94578),s=r(4942),u=r(67294),a=r(45697),h=r.n(a),f=r(94184),d=r.n(f),p=r(64317),x=r(23663),j=["tag","isOpen","className","navbar","cssModule","children","innerRef"];function g(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,i)}return r}function E(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){(0,s.Z)(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}var b=E(E({},p.Transition.propTypes),{},{isOpen:h().bool,children:h().oneOfType([h().arrayOf(h().node),h().node]),tag:x.iC,className:h().node,navbar:h().bool,cssModule:h().object,innerRef:h().oneOfType([h().func,h().string,h().object])}),k=E(E({},p.Transition.defaultProps),{},{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:x.wF.Collapse}),C=((i={})[x.E5.ENTERING]="collapsing",i[x.E5.ENTERED]="collapse show",i[x.E5.EXITING]="collapsing",i[x.E5.EXITED]="collapse",i);function y(n){return n.scrollHeight}var m=function(n){function e(e){var r;return(r=n.call(this,e)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(n){r[n]=r[n].bind((0,o.Z)(r))})),r}(0,c.Z)(e,n);var r=e.prototype;return r.onEntering=function(n,e){this.setState({height:y(n)}),this.props.onEntering(n,e)},r.onEntered=function(n,e){this.setState({height:null}),this.props.onEntered(n,e)},r.onExit=function(n){this.setState({height:y(n)}),this.props.onExit(n)},r.onExiting=function(n){n.offsetHeight;this.setState({height:0}),this.props.onExiting(n)},r.onExited=function(n){this.setState({height:null}),this.props.onExited(n)},r.render=function(){var n=this,e=this.props,r=e.tag,i=e.isOpen,o=e.className,c=e.navbar,s=e.cssModule,a=e.children,h=(e.innerRef,(0,l.Z)(e,j)),f=this.state.height,g=(0,x.ei)(h,x.rb),b=(0,x.CE)(h,x.rb);return u.createElement(p.Transition,(0,t.Z)({},g,{in:i,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(e){var i=function(n){return C[n]||"collapse"}(e),l=(0,x.mx)(d()(o,i,c&&"navbar-collapse"),s),h=null===f?null:{height:f};return u.createElement(r,(0,t.Z)({},b,{style:E(E({},b.style),h),className:l,ref:n.props.innerRef}),a)}))},e}(u.Component);m.propTypes=b,m.defaultProps=k,e.Z=m}},function(n){n.O(0,[3443,9774,2888,179],(function(){return e=65118,n(n.s=e);var e}));var e=n.O();_N_E=e}]);