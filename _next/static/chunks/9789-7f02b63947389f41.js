"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9789],{18967:function(e,s){s.Z={src:"/shopping-website/_next/static/media/size-chart.94777219.jpg",height:580,width:580,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAq4P/xAAbEAAABwEAAAAAAAAAAAAAAAAAAQQTFDGT4f/aAAgBAQABPwBg6kqtOD//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:8,blurHeight:8}},26235:function(e,s,a){var n=a(85893);a(67294);s.Z=function(e){var s=e.link,a=e.title,i=e.service,l=e.marijuana,r=e.lastChild;return(0,n.jsxs)("div",{className:"".concat(l?"":"media"," ").concat(r?"border-0 m-0":""),children:[(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:s}}),(0,n.jsxs)("div",{className:"media-body",children:[(0,n.jsx)("h4",{children:a}),(0,n.jsx)("p",{children:i})]})]})}},65995:function(e,s,a){var n=a(85893),i=a(67294),l=a(98130);s.Z=function(){var e=function(){return(0,n.jsx)("span",{children:"You are good to go!"})},s=new Date,a=s.getFullYear(),r=s.getMonth(),c=s.getDate(),t=new Date(a,r,c+10).getTime();return(0,n.jsx)(i.Fragment,{children:(0,n.jsx)(l.ZP,{date:t,renderer:function(s){var a=s.days,i=s.hours,l=s.minutes,r=s.seconds;return s.completed?(0,n.jsx)(e,{}):(0,n.jsx)("div",{className:"timer-box",children:(0,n.jsx)("div",{className:"timer",children:(0,n.jsxs)("div",{className:"timer-p",id:"demo",children:[(0,n.jsxs)("span",{children:[a,(0,n.jsx)("span",{className:"padding-l",children:":"}),(0,n.jsx)("span",{className:"timer-cal",children:"Days"})]}),(0,n.jsxs)("span",{children:[i,(0,n.jsx)("span",{className:"padding-l",children:":"}),(0,n.jsx)("span",{className:"timer-cal",children:"Hrs"})]}),(0,n.jsxs)("span",{children:[l,(0,n.jsx)("span",{className:"padding-l",children:":"}),(0,n.jsx)("span",{className:"timer-cal",children:"Min"})]}),(0,n.jsxs)("span",{children:[r,(0,n.jsx)("span",{className:"timer-cal",children:"Sec"})]})]})})})}})})}},8551:function(e,s,a){a.r(s);var n=a(85893),i=a(67294),l=a(41664),r=a.n(l),c=a(18967),t=a(56571),d=a(32701),o=a(10684),u=a(34726),h=a(609),m=a(40196),x=a(9614),j=a(65995),f=a(29259);s.default=function(e){var s=e.item,a=e.stickyClass,l=e.changeColorVar,A=(0,i.useState)(!1),p=A[0],g=A[1],v=(0,i.useContext)(m.$R).state.symbol,N=function(){return g(!p)},b=s,k=(0,i.useContext)(x.Z),Z=k.stock,w=k.plusQty,y=k.minusQty,C=k.quantity,E=[],Q=[];return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"product-right ".concat(a),children:[(0,n.jsxs)("h2",{children:[" ",b.title," "]}),(0,n.jsxs)("h4",{children:[(0,n.jsxs)("del",{children:[v,b.price]}),(0,n.jsxs)("span",{children:[b.discount,"% off"]})]}),(0,n.jsxs)("h3",{children:[v,b.price-b.price*b.discount/100]}),b.variants.map((function(e){E.find((function(s){return s.color===e.color}))||E.push(e),Q.find((function(s){return s===e.size}))||Q.push(e.size)})),void 0===l?(0,n.jsx)(n.Fragment,{children:E?(0,n.jsx)("ul",{className:"color-variant",children:E.map((function(e,s){return(0,n.jsx)("li",{className:e.color,title:e.color},s)}))}):""}):(0,n.jsx)(n.Fragment,{children:E?(0,n.jsx)("ul",{className:"color-variant",children:E.map((function(e,s){return(0,n.jsx)("li",{className:e.color,title:e.color,onClick:function(){return l(s)}},s)}))}):""}),(0,n.jsxs)("div",{className:"product-description border-product",children:[b.variants?(0,n.jsxs)("div",{children:[(0,n.jsxs)("h6",{className:"product-title size-text",children:["select size",(0,n.jsx)("span",{children:(0,n.jsx)("a",{href:null,"data-toggle":"modal","data-target":"#sizemodal",onClick:N,children:"size chart"})})]}),(0,n.jsxs)(t.Z,{isOpen:p,toggle:N,centered:!0,children:[(0,n.jsx)(d.Z,{toggle:N,children:"Sheer Straight Kurta"}),(0,n.jsx)(o.Z,{children:(0,n.jsx)(u.Z,{src:c.Z.src,alt:"size",className:"img-fluid"})})]}),(0,n.jsx)("div",{className:"size-box",children:(0,n.jsx)("ul",{children:Q.map((function(e,s){return(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:null,children:e})},s)}))})})]}):"",(0,n.jsx)("span",{className:"instock-cls",children:Z}),(0,n.jsx)("h6",{className:"product-title",children:"quantity"}),(0,n.jsx)("div",{className:"qty-box",children:(0,n.jsxs)("div",{className:"input-group",children:[(0,n.jsx)("span",{className:"input-group-prepend",children:(0,n.jsx)("button",{type:"button",className:"btn quantity-left-minus",onClick:y,"data-type":"minus","data-field":"",children:(0,n.jsx)("i",{className:"fa fa-angle-left"})})}),(0,n.jsx)(h.Z,{type:"text",name:"quantity",value:C,onChange:function(e){setQuantity(parseInt(e.target.value))},className:"form-control input-number"}),(0,n.jsx)("span",{className:"input-group-prepend",children:(0,n.jsx)("button",{type:"button",className:"btn quantity-right-plus",onClick:function(){return w(b)},"data-type":"plus","data-field":"",children:(0,n.jsx)("i",{className:"fa fa-angle-right"})})})]})})]}),(0,n.jsxs)("div",{className:"product-buttons",children:[(0,n.jsx)("a",{href:null,className:"btn btn-solid",onClick:function(){return k.addToCart(b,C)},children:"add to cart"}),(0,n.jsx)(r(),{href:"/page/account/checkout",children:(0,n.jsx)("a",{className:"btn btn-solid",children:"buy now"})})]}),(0,n.jsxs)("div",{className:"border-product",children:[(0,n.jsx)("h6",{className:"product-title",children:"product details"}),(0,n.jsx)("p",{children:b.description})]}),(0,n.jsxs)("div",{className:"border-product",children:[(0,n.jsx)("h6",{className:"product-title",children:"share it"}),(0,n.jsx)("div",{className:"product-icon",children:(0,n.jsx)(f.default,{})})]}),(0,n.jsxs)("div",{className:"border-product",children:[(0,n.jsx)("h6",{className:"product-title",children:"Time Reminder"}),(0,n.jsx)(j.Z,{})]})]})})}},82745:function(e,s,a){a.r(s);var n=a(85893),i=a(67294),l=a(20627);s.default=function(){var e=(0,i.useState)(!0),s=e[0],a=e[1];return(0,n.jsxs)("div",{className:"collection-filter-block creative-card creative-inner",children:[(0,n.jsx)("div",{className:"collection-mobile-back",onClick:function(){document.getElementById("filter").style.left="-365px"},children:(0,n.jsxs)("span",{className:"filter-back",children:[(0,n.jsx)("i",{className:"fa fa-angle-left","aria-hidden":"true"}),"back"]})}),(0,n.jsxs)("div",{className:"collection-collapse-block border-0 open",children:[(0,n.jsx)("h3",{className:"collapse-block-title",onClick:function(){return a(!s)},children:"brand"}),(0,n.jsx)(l.Z,{isOpen:s,children:(0,n.jsx)("div",{className:"collection-collapse-block-content",children:(0,n.jsx)("div",{className:"collection-brand-filter",children:(0,n.jsxs)("ul",{className:"category-list",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:null,children:"clothing"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:null,children:"bags"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:null,children:"footwear"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:null,children:"watches"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:null,children:"accessories"})})]})})})})]})]})}},88463:function(e,s,a){a.r(s);var n=a(85893),i=(a(67294),a(34726));s.default=function(e){var s=e.image;return(0,n.jsx)(i.Z,{src:"".concat(s.src),alt:s.alt,className:"img-fluid image_zoom_cls-0"})}},29259:function(e,s,a){a.r(s);var n=a(85893);a(67294);s.default=function(){return(0,n.jsxs)("ul",{className:"product-social",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://www.facebook.com",target:"_blank",children:(0,n.jsx)("i",{className:"fa fa-facebook"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://plus.google.com",target:"_blank",children:(0,n.jsx)("i",{className:"fa fa-google-plus"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://twitter.com",target:"_blank",children:(0,n.jsx)("i",{className:"fa fa-twitter"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://www.instagram.com",target:"_blank",children:(0,n.jsx)("i",{className:"fa fa-instagram"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://rss.com",target:"_blank",children:(0,n.jsx)("i",{className:"fa fa-rss"})})})]})}},87219:function(e,s,a){a.r(s);var n=a(85893),i=a(67294),l=a(98595),r=a(10267),c=a(51252),t=a(77243),d=a(53999),o=a(98008),u=a(9393),h=a(18829);s.default=function(){var e=(0,i.useState)("1"),s=e[0],a=e[1];return(0,n.jsx)("section",{className:"tab-product m-0",children:(0,n.jsx)(l.Z,{children:(0,n.jsx)(r.Z,{children:(0,n.jsx)(c.Z,{sm:"12",lg:"12",children:(0,n.jsxs)(r.Z,{className:"product-page-main m-0",children:[(0,n.jsx)(t.Z,{tabs:!0,className:"nav-material",children:(0,n.jsx)(d.Z,{className:"nav nav-tabs",id:"myTab",role:"tablist",children:(0,n.jsx)(o.Z,{className:"1"===s?"active":"",onClick:function(){return a("1")},children:"\u5546\u54c1\u8cc7\u8a0a"})})}),(0,n.jsx)(u.Z,{activeTab:s,className:"nav-material",children:(0,n.jsx)(h.Z,{tabId:"1",children:(0,n.jsx)("p",{className:"mb-0 pb-0",children:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'})})})]})})})})})}},37134:function(e,s,a){a.r(s);var n=a(85893),i=(a(67294),a(26235)),l=a(79011),r=[{link:l.cD,title:"free shipping",service:"free shipping world wide"},{link:l.zY,title:"24 X 7 service",service:"online service for 24 x 7"},{link:l.C2,title:"festival offer",service:"new online special festival offer"},{link:l.sA,title:"online payment",service:"new online special festival offer",lastChild:!0}];s.default=function(){return(0,n.jsx)("div",{className:"collection-filter-block",children:(0,n.jsx)("div",{className:"product-service",children:r.map((function(e,s){return(0,n.jsx)(i.Z,{link:e.link,title:e.title,service:e.service,lastChild:e.lastChild},s)}))})})}},39789:function(e,s,a){a.r(s);var n=a(26042),i=a(69396),l=a(7297),r=a(85893),c=a(67294),t=a(87219),d=a(37134),o=a(45195),u=a(46066),h=a(55850),m=a(17283),x=a(88463),j=a(8551),f=a(82745),A=a(98595),p=a(10267),g=a(51252),v=a(34726);function N(){var e=(0,l.Z)(["\n  query product($id: Int!) {\n    product(id: $id) {\n      id\n      title\n      description\n      type\n      brand\n      category\n      price\n      new\n      sale\n      discount\n      stock\n      variants {\n        id\n        sku\n        size\n        color\n        image_id\n      }\n      images {\n        alt\n        src\n      }\n    }\n  }\n"]);return N=function(){return e},e}var b=(0,m.Ps)(N());s.default=function(){var e=(0,c.useState)({nav1:null,nav2:null}),s=e[0],a=e[1],l=(0,c.useRef)(),m=(0,c.useRef)(),N=(0,h.a)(b,{variables:{id:1}}),k=N.loading,Z=N.data;(0,c.useEffect)((function(){a({nav1:l.current,nav2:m.current})}),[Z]);var w=s.nav1,y=s.nav2;return(0,r.jsx)("section",{className:"",children:(0,r.jsx)("div",{className:"collection-wrapper",children:(0,r.jsx)(A.Z,{children:(0,r.jsxs)(p.Z,{children:[(0,r.jsxs)(g.Z,{lg:"9",sm:"12",xs:"12",children:[(0,r.jsxs)("div",{className:"container-fluid",children:[(0,r.jsx)(p.Z,{children:(0,r.jsx)(g.Z,{xl:"12",className:"filter-col",children:(0,r.jsx)("div",{className:"filter-main-btn mb-2",children:(0,r.jsxs)("span",{onClick:function(){document.getElementById("filter").style.left="-15px"},className:"filter-btn",children:[(0,r.jsx)("i",{className:"fa fa-filter","aria-hidden":"true"})," ","filter"]})})})}),Z&&Z.product&&0!==Z.product.length&&!k?(0,r.jsxs)(p.Z,{children:[(0,r.jsxs)(g.Z,{lg:"6",className:"product-thumbnail",children:[(0,r.jsx)(u.Z,(0,i.Z)((0,n.Z)({},{slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!0,fade:!0}),{asNavFor:y,ref:function(e){return l.current=e},className:"product-slick",children:Z.product.images.map((function(e,s){return(0,r.jsx)("div",{children:(0,r.jsx)(x.default,{image:e})},s)}))})),(0,r.jsx)(u.Z,(0,i.Z)((0,n.Z)({className:"slider-nav"},{slidesToShow:3,swipeToSlide:!0,arrows:!1,dots:!1,focusOnSelect:!0}),{asNavFor:w,ref:function(e){return m.current=e},children:Z.product.variants?Z.product.images.map((function(e,s){return(0,r.jsx)("div",{children:(0,r.jsx)(v.Z,{src:"".concat(e.src),alt:e.alt,className:"img-fluid"},s)},s)})):""}))]}),(0,r.jsx)(g.Z,{lg:"6",className:"rtl-text",children:(0,r.jsx)(j.default,{changeColorVar:function(e){m.current.slickGoTo(e)},item:Z.product})})]}):"loading"]}),(0,r.jsx)(t.default,{})]}),(0,r.jsxs)(g.Z,{sm:"3",className:"collection-filter",id:"filter",children:[(0,r.jsx)(f.default,{}),(0,r.jsx)(d.default,{}),(0,r.jsx)(o.default,{})]})]})})})})}},45195:function(e,s,a){a.r(s);var n=a(7297),i=a(85893),l=a(67294),r=a(55850),c=a(17283),t=a(34726),d=a(46066),o=a(40196);function u(){var e=(0,n.Z)(["\n  query newProducts($type: String!) {\n    newProducts(type: $type) {\n      title\n      price\n      images {\n        alt\n        src\n      }\n    }\n  }\n"]);return u=function(){return e},e}var h=(0,c.Ps)(u());s.default=function(){var e=(0,l.useContext)(o.$R).state.symbol,s=(0,r.a)(h,{variables:{type:"fashion"}}),a=s.loading,n=s.data;return(0,i.jsxs)("div",{className:"theme-card",children:[(0,i.jsx)("h5",{className:"title-border",children:"new product"}),(0,i.jsxs)(d.Z,{className:"offer-slider slide-1",children:[(0,i.jsx)("div",{children:n&&n.newProducts&&0!==n.newProducts.length&&!a?(0,i.jsx)(i.Fragment,{children:n&&n.newProducts.slice(0,3).map((function(s,a){return(0,i.jsxs)("div",{className:"media",children:[(0,i.jsx)("a",{href:"",children:(0,i.jsx)(t.Z,{className:"img-fluid blur-up lazyload",src:s.images[0].src,alt:s.images[0].alt})}),(0,i.jsxs)("div",{className:"media-body align-self-center",children:[(0,i.jsxs)("div",{className:"rating",children:[(0,i.jsx)("i",{className:"fa fa-star"})," ",(0,i.jsx)("i",{className:"fa fa-star"})," ",(0,i.jsx)("i",{className:"fa fa-star"})," ",(0,i.jsx)("i",{className:"fa fa-star"})," ",(0,i.jsx)("i",{className:"fa fa-star"})]}),(0,i.jsx)("a",{href:null,children:(0,i.jsx)("h6",{children:s.title})}),(0,i.jsxs)("h4",{children:[e,s.price]})]})]},a)}))}):"loading"}),(0,i.jsx)("div",{children:n&&n.newProducts&&0!==n.newProducts.length&&!a?(0,i.jsx)(i.Fragment,{children:n&&n.newProducts.slice(4,7).map((function(s,a){return(0,i.jsxs)("div",{className:"media",children:[(0,i.jsx)("a",{href:"",children:(0,i.jsx)(t.Z,{className:"img-fluid blur-up lazyload",src:s.images[0].src,alt:s.images[0].alt})}),(0,i.jsxs)("div",{className:"media-body align-self-center",children:[(0,i.jsxs)("div",{className:"rating",children:[(0,i.jsx)("i",{className:"fa fa-star"})," ",(0,i.jsx)("i",{className:"fa fa-star"})," ",(0,i.jsx)("i",{className:"fa fa-star"})," ",(0,i.jsx)("i",{className:"fa fa-star"})," ",(0,i.jsx)("i",{className:"fa fa-star"})]}),(0,i.jsx)("a",{href:null,children:(0,i.jsx)("h6",{children:s.title})}),(0,i.jsxs)("h4",{children:[e,s.price]})]})]},a)}))}):"loading"})]})]})}}}]);