(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7811],{84322:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/layouts/Nursery",function(){return n(36353)}])},31735:function(e,t){"use strict";t.Z={src:"/_next/static/media/cart.6f33eddb.png",height:23,width:23,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAdklEQVR42g2LSwqCYBSFz6y28X8jJ0FkRBBEELSCUinpMYp2kBPBx0TnuhBX6LkfFw7nIYkFFQV/apbIx5cdQiHmh8SdgZQ3H9IwkouJkp7O9FaTyJxHrE3ElYdI2No6h4vHGzKRE7Nn5cbB/xJHWm48TULDaQZXzxyCc/M7awAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},7383:function(e,t,n){"use strict";var r=n(26042),i=n(69396),s=n(7297),a=n(85893),l=(n(67294),n(46066)),o=n(98595),c=n(10267),d=n(51252),u=n(34726),h=n(55850);function p(){var e=(0,s.Z)(["\n  query instagram($type: String!) {\n    instagram(type: $type) {\n      img\n    }\n  }\n"]);return p=function(){return e},e}var f=(0,n(17283).Ps)(p()),m={dots:!1,infinite:!0,speed:300,slidesToShow:7,slidesToScroll:7,responsive:[{breakpoint:1367,settings:{slidesToShow:6,slidesToScroll:6}},{breakpoint:1024,settings:{slidesToShow:5,slidesToScroll:5,infinite:!0}},{breakpoint:600,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:480,settings:{slidesToShow:3,slidesToScroll:3}}]};t.Z=function(e){var t=e.type,n=(0,h.a)(f,{variables:{type:t}}).data;return(0,a.jsx)("section",{className:"instagram ratio_square",children:(0,a.jsx)(o.Z,{className:"".concat("nursery"==t||"bags"==t||"fashion"==t||"kids"==t||"christmas"==t||"fashion"==t||"marketplace"==t?"p-0":""),fluid:!0,children:(0,a.jsx)(c.Z,{children:(0,a.jsxs)(d.Z,{className:"pt-0",children:[(0,a.jsx)("h2",{className:"title-borderless",children:"# instagram"}),(0,a.jsx)("div",{className:"slide-7 no-arrow slick-instagram",children:(0,a.jsx)(l.Z,(0,i.Z)((0,r.Z)({},m),{children:n&&n.instagram.map((function(e,t){return(0,a.jsx)("div",{children:(0,a.jsx)("a",{href:null,children:(0,a.jsxs)("div",{className:"instagram-box",children:[(0,a.jsx)(u.Z,{alt:"",src:e.img,className:"bg-img",style:{width:"100%"}}),(0,a.jsx)("div",{className:"overlay",children:(0,a.jsx)("i",{className:"fa fa-instagram","aria-hidden":"true"})})]})})},t)}))}))})]})})})})}},71480:function(e,t,n){"use strict";var r=n(85893),i=(n(67294),n(98595)),s=n(10267),a=n(51252),l=n(41664),o=n.n(l),c=n(34427),d=n(11163);t.Z=function(e){var t=e.topClass,n=e.fluid,l=(0,d.useRouter)();return(0,r.jsx)("div",{className:t,children:(0,r.jsx)(i.Z,{fluid:n,children:(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(a.Z,{lg:"6",children:(0,r.jsx)("div",{className:"header-contact",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Welcome to Our store Multikart"}),(0,r.jsxs)("li",{children:[(0,r.jsx)("i",{className:"fa fa-phone text-white","aria-hidden":"true"}),"Call Us: 123 - 456 - 7890"]})]})})}),(0,r.jsx)(a.Z,{lg:"6",className:"text-end",children:(0,r.jsxs)("ul",{className:"header-dropdown",children:[(0,r.jsx)("li",{className:"mobile-wishlist",children:(0,r.jsx)(o(),{href:"/page/account/wishlist",children:(0,r.jsxs)("a",{children:[(0,r.jsx)("i",{className:"fa fa-heart","aria-hidden":"true"})," wishlist"]})})}),(0,r.jsxs)("li",{className:"onhover-dropdown mobile-account",children:[(0,r.jsx)("i",{className:"fa fa-user","aria-hidden":"true"})," My Account",(0,r.jsxs)("ul",{className:"onhover-show-div",children:[(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/page/account/login",children:(0,r.jsx)("a",{children:"Login"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/page/account/register",children:(0,r.jsx)("a",{children:"Register"})})}),(0,r.jsx)("li",{onClick:function(){return c.Ml.auth().signOut(),void l.push("/page/account/login-auth")},children:(0,r.jsx)("a",{children:"Logout"})})]})]})]})})]})})})}},34427:function(e,t,n){"use strict";n.d(t,{Ml:function(){return s},Os:function(){return l},Vv:function(){return a}});var r=n(1902),i=(n(68049),n(69102),n(55676)),s=r.Z.initializeApp({apiKey:i.firebase.apiKey,authDomain:i.firebase.authDomain,databaseURL:i.firebase.databaseURL,projectId:i.firebase.projectId,storageBucket:i.firebase.storageBucket,messagingSenderId:i.firebase.messagingSenderId,appId:i.firebase.appId}),a=new r.Z.auth.GoogleAuthProvider,l=new r.Z.auth.FacebookAuthProvider},64689:function(e,t,n){"use strict";n.r(t);var r=n(85893),i=n(41664),s=n.n(i),a=n(98595),l=n(10267),o=n(51252);t.default=function(e){var t=e.img,n=e.title,i=e.desc,c=e.link,d=e.classes,u=e.btn,h=e.btnClass;return(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"home ".concat(t," ").concat(d||"text-center"),children:(0,r.jsx)(a.Z,{children:(0,r.jsx)(l.Z,{children:(0,r.jsx)(o.Z,{children:(0,r.jsx)("div",{className:"slider-contain",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{children:n}),(0,r.jsx)("h1",{children:i}),(0,r.jsx)(s(),{href:c,children:(0,r.jsxs)("a",{className:"btn ".concat(h||"btn-solid"),children:[u||"Shop Now"," "]})})]})})})})})})})}},71680:function(e,t,n){"use strict";n.r(t);var r=n(85893),i=n(67294),s=n(46066),a=n(64689),l=[{img:"home33",title:"save upto 10%",desc:"plant collection",link:"#",classes:"p-left text-start"},{img:"home32",title:"save upto 20%",desc:"new collection",link:"#",classes:"p-right text-start"}];t.default=function(){return(0,r.jsx)(i.Fragment,{children:(0,r.jsx)("section",{className:"p-0",children:(0,r.jsx)(s.Z,{className:"slide-1 home-slider",children:l.map((function(e,t){return(0,r.jsx)(a.default,{img:e.img,link:e.link,title:e.title,desc:e.desc,classes:e.classes},t)}))})})})}},36353:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var r=n(85893),i=n(67294),s=n(71549),a=n(34751),l=n(71480),o=n(3942),c=n(98595),d=n(10267),u=n(51252),h=n(34726),p=n(91181),f="/_next/static/media/search.d0247636.png",m="/_next/static/media/setting.dafa9dd9.png",g=n(31735),x=n(3782),j=n(49905),b=function(e){var t=e.logoName;(0,i.useEffect)((function(){setTimeout((function(){document.querySelectorAll(".loader-wrapper").style="display:none"}),2e3)}),[]);var n=function(){document.getElementById("search-overlay").style.display="block"};return(0,r.jsxs)("header",{children:[(0,r.jsx)("div",{className:"mobile-fix-option"}),(0,r.jsx)(l.Z,{topClass:"top-header top-header-dark3"}),(0,r.jsx)(c.Z,{className:"layout3-menu",children:(0,r.jsx)(d.Z,{children:(0,r.jsx)(u.Z,{sm:"12",children:(0,r.jsxs)("div",{className:"main-menu row m-0",children:[(0,r.jsx)(u.Z,{className:"p-0",children:(0,r.jsxs)("div",{className:"menu-left around-border",children:[(0,r.jsxs)("div",{className:"navbar",children:[(0,r.jsx)("a",{href:null,onClick:function(){var e=document.getElementById("mySidenav");e&&e.classList.add("open-side")},children:(0,r.jsx)("div",{className:"bar-style",children:(0,r.jsx)("i",{className:"fa fa-bars sidebar-bar","aria-hidden":"true"})})}),(0,r.jsx)(a.Z,{})]}),(0,r.jsx)("div",{className:"main-menu-right",children:(0,r.jsx)(s.Z,{})})]})}),(0,r.jsx)("div",{className:"absolute-logo",children:(0,r.jsx)("div",{className:"brand-logo",children:(0,r.jsx)(o.Z,{logo:t})})}),(0,r.jsx)(u.Z,{lg:"2",xs:"4",children:(0,r.jsx)("div",{className:"menu-right pull-right",children:(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"icon-nav",children:(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{className:"onhover-div mobile-search",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(h.Z,{alt:"",src:f,onClick:n,className:"img-fluid blur-up lazyload"}),(0,r.jsx)("i",{className:"fa fa-search",onClick:n})]}),(0,r.jsx)(j.Z,{})]}),(0,r.jsx)(x.Z,{icon:m}),(0,r.jsx)(p.Z,{icon:g.Z.src})]})})})})})]})})})})]})},y=n(71680),v=n(26280),E=n(28183),N=n(7383),Z=n(83839),w=n(79011),O=n(42410),k=n(64593),C=n(21582),S=function(){return(0,i.useEffect)((function(){document.documentElement.style.setProperty("--theme-deafult","#81ba00")}),[]),(0,r.jsx)("div",{className:"layout-20",children:(0,r.jsxs)("div",{className:"bg-white",children:[(0,r.jsxs)(k.Z,{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/assets/images/favicon/11.png"})]}),(0,r.jsx)(O.Z,{}),(0,r.jsx)(b,{logoName:"logo/7.png"}),(0,r.jsx)(y.default,{}),(0,r.jsx)(v.Z,{titleClass:"title4",inner:"title-inner4",line:!0,type:"nursery",title:"trending products",productDetail:"text-center",productSlider:w.XG,designClass:"section-b-space ratio_square",noSlider:"true",cartClass:"cart-box"}),(0,r.jsx)(E.Z,{bgClass:"tab-bg tab-grey-bg",type:"nursery",productSlider:w.XG,designClass:"section-b-space ratio_square",noSlider:"true",cartClass:"cart-box"}),(0,r.jsx)(Z.Z,{type:"nursery",title:"title4",inner:"title-inner4"}),(0,r.jsx)(N.Z,{type:"nursery"}),(0,r.jsx)(C.Z,{footerSection:" border-b",footerLogoClass:"text-center",logoName:"logo/f2.png",logoImg:!0,myAccount:!0,layoutClass:"darker-subfooter"})]})})}},24561:function(e,t,n){"use strict";var r=n(67294),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)};var s=function(e){var t=e.animate,n=e.animateBegin,s=e.backgroundColor,a=e.backgroundOpacity,l=e.baseUrl,o=e.children,c=e.foregroundColor,d=e.foregroundOpacity,u=e.gradientRatio,h=e.gradientDirection,p=e.uniqueKey,f=e.interval,m=e.rtl,g=e.speed,x=e.style,j=e.title,b=e.beforeMask,y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),v=p||Math.random().toString(36).substring(6),E=v+"-diff",N=v+"-animated-diff",Z=v+"-aria",w=m?{transform:"scaleX(-1)"}:null,O="0; "+f+"; 1",k=g+"s",C="top-bottom"===h?"rotate(90)":void 0;return(0,r.createElement)("svg",i({"aria-labelledby":Z,role:"img",style:i(i({},x),w)},y),j?(0,r.createElement)("title",{id:Z},j):null,b&&(0,r.isValidElement)(b)?b:null,(0,r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+l+"#"+E+")",style:{fill:"url("+l+"#"+N+")"}}),(0,r.createElement)("defs",null,(0,r.createElement)("clipPath",{id:E},o),(0,r.createElement)("linearGradient",{id:N,gradientTransform:C},(0,r.createElement)("stop",{offset:"0%",stopColor:s,stopOpacity:a},t&&(0,r.createElement)("animate",{attributeName:"offset",values:-u+"; "+-u+"; 1",keyTimes:O,dur:k,repeatCount:"indefinite",begin:n})),(0,r.createElement)("stop",{offset:"50%",stopColor:c,stopOpacity:d},t&&(0,r.createElement)("animate",{attributeName:"offset",values:-u/2+"; "+-u/2+"; "+(1+u/2),keyTimes:O,dur:k,repeatCount:"indefinite",begin:n})),(0,r.createElement)("stop",{offset:"100%",stopColor:s,stopOpacity:a},t&&(0,r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+u),keyTimes:O,dur:k,repeatCount:"indefinite",begin:n})))))};s.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,gradientDirection:"left-right",id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading...",beforeMask:null};var a=function(e){return e.children?(0,r.createElement)(s,i({},e)):(0,r.createElement)(l,i({},e))},l=function(e){return(0,r.createElement)(a,i({viewBox:"0 0 476 124"},e),(0,r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.ZP=a},20627:function(e,t,n){"use strict";var r,i=n(87462),s=n(63366),a=n(97326),l=n(94578),o=n(4942),c=n(67294),d=n(45697),u=n.n(d),h=n(94184),p=n.n(h),f=n(64317),m=n(23663),g=["tag","isOpen","className","navbar","cssModule","children","innerRef"];function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=j(j({},f.Transition.propTypes),{},{isOpen:u().bool,children:u().oneOfType([u().arrayOf(u().node),u().node]),tag:m.iC,className:u().node,navbar:u().bool,cssModule:u().object,innerRef:u().oneOfType([u().func,u().string,u().object])}),y=j(j({},f.Transition.defaultProps),{},{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:m.wF.Collapse}),v=((r={})[m.E5.ENTERING]="collapsing",r[m.E5.ENTERED]="collapse show",r[m.E5.EXITING]="collapsing",r[m.E5.EXITED]="collapse",r);function E(e){return e.scrollHeight}var N=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){n[e]=n[e].bind((0,a.Z)(n))})),n}(0,l.Z)(t,e);var n=t.prototype;return n.onEntering=function(e,t){this.setState({height:E(e)}),this.props.onEntering(e,t)},n.onEntered=function(e,t){this.setState({height:null}),this.props.onEntered(e,t)},n.onExit=function(e){this.setState({height:E(e)}),this.props.onExit(e)},n.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},n.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},n.render=function(){var e=this,t=this.props,n=t.tag,r=t.isOpen,a=t.className,l=t.navbar,o=t.cssModule,d=t.children,u=(t.innerRef,(0,s.Z)(t,g)),h=this.state.height,x=(0,m.ei)(u,m.rb),b=(0,m.CE)(u,m.rb);return c.createElement(f.Transition,(0,i.Z)({},x,{in:r,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(t){var r=function(e){return v[e]||"collapse"}(t),s=(0,m.mx)(p()(a,r,l&&"navbar-collapse"),o),u=null===h?null:{height:h};return c.createElement(n,(0,i.Z)({},b,{style:j(j({},b.style),u),className:s,ref:e.props.innerRef}),d)}))},t}(c.Component);N.propTypes=b,N.defaultProps=y,t.Z=N},10684:function(e,t,n){"use strict";var r=n(87462),i=n(63366),s=n(67294),a=n(45697),l=n.n(a),o=n(94184),c=n.n(o),d=n(23663),u=["className","cssModule","tag"],h={tag:d.iC,className:l().string,cssModule:l().object},p=function(e){var t=e.className,n=e.cssModule,a=e.tag,l=(0,i.Z)(e,u),o=(0,d.mx)(c()(t,"modal-body"),n);return s.createElement(a,(0,r.Z)({},l,{className:o}))};p.propTypes=h,p.defaultProps={tag:"div"},t.Z=p},55676:function(e){"use strict";e.exports=JSON.parse('{"firebase":{"apiKey":"YourapiKey","authDomain":"YourauthDomain","projectId":"YourprojectId","storageBucket":"YourstorageBucket","messagingSenderId":"YourmessagingSenderId","appId":"YourappId","measurementId":"YourmeasurementId"}}')}},function(e){e.O(0,[2016,3590,1559,3443,7076,6066,6941,6160,8369,5254,1549,4751,9011,3228,2009,7519,9774,2888,179],(function(){return t=84322,e(e.s=t);var t}));var t=e.O();_N_E=t}]);