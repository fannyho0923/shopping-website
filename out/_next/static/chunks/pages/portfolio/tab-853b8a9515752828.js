(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[133],{75101:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio/tab",function(){return t(51421)}])},20732:function(e,s,t){"use strict";var n=t(7297),r=t(85893),a=t(67294),i=t(78369),c=t(55850),l=t(17283),o=t(13228),d=t(9614),u=t(10267),x=t(51252),m=t(34726),h=t(98595),j=t(92097),p=t(3038),f=t(86040),g=t(40196),b=t(3081);function v(){var e=(0,n.Z)(["\n  query products($type: _CategoryType!, $indexFrom: Int!, $limit: Int!) {\n    products(type: $type, indexFrom: $indexFrom, limit: $limit) {\n      items {\n        id\n        title\n        description\n        type\n        brand\n        category\n        price\n        new\n        stock\n        sale\n        discount\n        variants {\n          id\n          sku\n          size\n          color\n          image_id\n        }\n        images {\n          image_id\n          id\n          alt\n          src\n        }\n      }\n    }\n  }\n"]);return v=function(){return e},e}var N=(0,l.Ps)(v()),C=function(e){var s=e.data,t=e.loading,n=e.startIndex,i=e.endIndex,c=e.cartClass,l=e.backImage,h=(0,a.useContext)(d.Z),v=(0,a.useContext)(j.jv),N=(0,a.useContext)(f.Dh),C=(0,a.useContext)(g.$R).state,y=h.quantity;return(0,r.jsx)(u.Z,{className:"no-slider",children:s&&s.products&&s.products.items&&0!==s.products.items.length&&!t?s&&s.products.items.slice(n,i).map((function(e,s){return(0,r.jsx)(o.Z,{product:e,symbol:C.symbol,addCompare:function(){return N.addToCompare(e)},addCart:function(){return h.addToCart(e,y)},addWishlist:function(){return v.addToWish(e)},cartClass:c,backImage:l},s)})):s&&s.products&&s.products.items&&0===s.products.items.length?(0,r.jsx)(x.Z,{xs:"12",children:(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"col-sm-12 empty-cart-cls text-center",children:[(0,r.jsx)(m.Z,{src:b.Z,className:"img-fluid mb-4 mx-auto",alt:""}),(0,r.jsx)("h3",{children:(0,r.jsx)("strong",{children:"Your Cart is Empty"})}),(0,r.jsx)("h4",{children:"Explore more shortlist some items."})]})})}):(0,r.jsxs)("div",{className:"row mx-0 margin-default",children:[(0,r.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,r.jsx)(p.Z,{})}),(0,r.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,r.jsx)(p.Z,{})}),(0,r.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,r.jsx)(p.Z,{})}),(0,r.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,r.jsx)(p.Z,{})})]})})};s.Z=function(e){var s=e.type,t=e.fluid,n=e.designClass,l=e.cartClass,o=(e.heading,e.noTitle),u=e.title,x=e.inner,m=e.line,p=e.hrClass,b=e.backImage,v=(0,a.useState)(s),y=v[0],Z=v[1],k=(0,a.useContext)(d.Z),I=((0,a.useContext)(j.jv),(0,a.useContext)(f.Dh),(0,a.useContext)(g.$R).state,k.quantity,(0,c.a)(N,{variables:{type:y,indexFrom:0,limit:8}})),_=I.loading,w=I.data;return(0,r.jsx)("div",{children:(0,r.jsx)("section",{className:n,children:(0,r.jsxs)(h.Z,{fluid:t,children:[o?"":(0,r.jsxs)("div",{className:u,children:[(0,r.jsx)("h4",{children:"exclusive products"}),(0,r.jsx)("h2",{className:x,children:"special products"}),m?(0,r.jsx)("div",{className:"line"}):p?(0,r.jsx)("hr",{role:"tournament6"}):""]}),(0,r.jsxs)(i.mQ,{className:"theme-tab",children:[(0,r.jsxs)(i.td,{className:"tabs tab-title",children:[(0,r.jsx)(i.OK,{className:y==s?"active":"",onClick:function(){return Z(s)},children:"NEW ARRIVAL"}),(0,r.jsxs)(i.OK,{className:"furniture"==y?"active":"",onClick:function(){return Z("furniture")},children:["FEATURED"," "]}),(0,r.jsx)(i.OK,{className:"furniture"==y?"active":"",onClick:function(){return Z("furniture")},children:"SPECIAL"})]}),(0,r.jsx)(i.x4,{children:(0,r.jsx)(C,{data:w,loading:_,startIndex:0,endIndex:8,cartClass:l,backImage:b})}),(0,r.jsx)(i.x4,{children:(0,r.jsx)(C,{data:w,loading:_,startIndex:0,endIndex:8,cartClass:l,backImage:b})}),(0,r.jsx)(i.x4,{children:(0,r.jsx)(C,{data:w,loading:_,startIndex:0,endIndex:8,cartClass:l,backImage:b})})]})]})})})}},3038:function(e,s,t){"use strict";var n=t(85893),r=(t(67294),t(24561));s.Z=function(){return(0,n.jsxs)(r.ZP,{className:"skeleton-svg",speed:10,children:[(0,n.jsx)("rect",{className:"skeleton-img",x:"2",y:"2",rx:"0",ry:"0"}),(0,n.jsx)("rect",{className:"skeleton-c1",x:"0",rx:"0",ry:"0"}),(0,n.jsx)("rect",{className:"skeleton-c2",x:"0",rx:"0",ry:"0"}),(0,n.jsx)("rect",{className:"skeleton-c3",x:"0",rx:"0",ry:"0"})]})}},4382:function(e,s,t){"use strict";t.d(s,{Z:function(){return x}});var n=t(85893),r=(t(67294),t(25921)),a=t(98595),i=t(10267),c=t(51252),l=t(41664),o=t.n(l),d=function(e){var s=e.title,t=e.parent,r=e.subTitle;return(0,n.jsx)("div",{className:"breadcrumb-section",children:(0,n.jsx)(a.Z,{children:(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(c.Z,{sm:"6",children:(0,n.jsx)("div",{className:"page-title",children:(0,n.jsx)("h2",{children:s})})}),(0,n.jsx)(c.Z,{sm:"6",children:(0,n.jsx)("nav",{"aria-label":"breadcrumb",className:"theme-breadcrumb",children:(0,n.jsxs)("ol",{className:"breadcrumb",children:[(0,n.jsx)("li",{className:"breadcrumb-item",children:(0,n.jsx)(o(),{href:"/",children:t})}),(0,n.jsx)("li",{className:"breadcrumb-item","aria-current":"page",children:s}),void 0===r?"":(0,n.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:r})]})})})]})})})},u=t(63272),x=function(e){var s=e.children,t=e.title,a=e.parent,i=e.subTitle;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Z,{noTopBar:!0,topClass:"top-header",logoName:"logo.png"}),(0,n.jsx)(d,{title:t,parent:a,subTitle:i}),(0,n.jsx)(n.Fragment,{children:s}),(0,n.jsx)(u.Z,{footerClass:"footer-light ",footerLayOut:"light-layout upper-footer",footerSection:"small-section border-section border-top-0",belowSection:"section-b-space light-layout",newLatter:!0})]})}},51421:function(e,s,t){"use strict";t.r(s);var n=t(85893),r=(t(67294),t(4382)),a=t(20732),i=t(97397);s.default=function(){return(0,n.jsxs)(r.Z,{parent:"home",title:"Portfolio",subTitle:"tab",children:[(0,n.jsx)(a.Z,{heading:"without slider",title:"title1",inner:"title-inner1",type:"fashion",designClass:"section-b-space ratio_asos",noSlider:"true",cartClass:"cart-info cart-wrap"}),(0,n.jsx)(i.Z,{heading:"with slider",title:"title1",inner:"title-inner1",type:"fashion",designClass:"section-b-space pt-0 ratio_asos",noSlider:"true",cartClass:"cart-info cart-wrap"})]})}}},function(e){e.O(0,[2016,3590,1559,3443,7076,6066,6941,6160,8369,5254,1549,4751,3272,5921,9011,3228,6705,6492,9774,2888,179],(function(){return s=75101,e(e.s=s);var s}));var s=e.O();_N_E=s}]);