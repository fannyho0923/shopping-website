(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8938],{50310:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/layouts/Christmas",function(){return t(91376)}])},3081:function(e,s){"use strict";s.Z={src:"/_next/static/media/empty-search.e480c619.jpg",height:190,width:268,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAsQP/xAAYEAADAQEAAAAAAAAAAAAAAAABAhEAEv/aAAgBAQABPwDl6Wo3/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:6}},2607:function(e,s,t){"use strict";var n=t(26042),i=t(69396),a=t(7297),r=t(85893),l=t(67294),c=t(46066),o=t(55850),d=t(17283),A=t(13228),m=t(98595),u=t(10267),h=t(51252),x=t(9614),g=t(92097),p=t(3038),j=t(86040);t(3081);function f(){var e=(0,a.Z)(["\n  query products($type: _CategoryType!, $indexFrom: Int!, $limit: Int!) {\n    products(type: $type, indexFrom: $indexFrom, limit: $limit) {\n      items {\n        id\n        title\n        description\n        type\n        brand\n        category\n        price\n        new\n        stock\n        sale\n        discount\n        variants {\n          id\n          sku\n          size\n          color\n          image_id\n        }\n        images {\n          image_id\n          id\n          alt\n          src\n        }\n      }\n    }\n  }\n"]);return f=function(){return e},e}var b=(0,d.Ps)(f());s.Z=function(e){var s=e.type,t=e.title,a=e.subtitle,d=e.designClass,f=e.noSlider,v=e.cartClass,C=e.productSlider,N=e.titleClass,E=e.noTitle,y=e.innerClass,Z=e.inner,w=e.backImage,I=(0,l.useContext)(x.Z),k=(0,l.useContext)(g.jv),B=(0,l.useContext)(j.Dh),Q=I.quantity,O=(0,l.useState)(!0),P=O[0],T=O[1],D=(0,o.a)(b,{variables:{type:s,indexFrom:0,limit:8}}),F=D.loading,S=D.data;return(0,l.useEffect)((function(){setTimeout((function(){T(!1)}),1)}),[P]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("section",{className:d,children:f?(0,r.jsx)(m.Z,{children:(0,r.jsx)(u.Z,{children:(0,r.jsxs)(h.Z,{children:["null"===E?"":(0,r.jsxs)("div",{className:y,children:[a?(0,r.jsx)("h4",{children:a}):"",(0,r.jsx)("h2",{className:Z,children:t}),N?(0,r.jsx)("hr",{role:"tournament6"}):(0,r.jsx)("div",{className:"line",children:(0,r.jsx)("span",{})})]}),P?(0,r.jsxs)("div",{className:"row mx-0 margin-default",children:[(0,r.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,r.jsx)(p.Z,{})}),(0,r.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,r.jsx)(p.Z,{})}),(0,r.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,r.jsx)(p.Z,{})}),(0,r.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,r.jsx)(p.Z,{})})]}):(0,r.jsx)(c.Z,(0,i.Z)((0,n.Z)({},C),{className:"product-m no-arrow",children:S&&S.products.items.map((function(e,s){return(0,r.jsx)("div",{children:(0,r.jsx)(A.Z,{product:e,title:t,addWishlist:function(){return k.addToWish(e)},addCart:function(){return I.addToCart(e,Q)},addCompare:function(){return B.addToCompare(e)},cartClass:v,backImage:w})},s)}))}))]})})}):(0,r.jsxs)(r.Fragment,{children:[t?(0,r.jsxs)("div",{className:"title1 title-gradient section-t-space",children:[(0,r.jsx)("h4",{children:a}),(0,r.jsx)("h2",{className:"title-inner1",children:t}),(0,r.jsx)("hr",{role:"tournament6"})]}):"",(0,r.jsx)(m.Z,{children:(0,r.jsx)(u.Z,{className:"margin-default",children:S&&S.products&&S.products.items&&0!==!S.products.items.length&&!F?S&&S.products.items.slice(0,8).map((function(e,s){return(0,r.jsx)(h.Z,{xl:"3",sm:"6",children:(0,r.jsx)("div",{children:(0,r.jsx)(A.Z,{product:e,backImage:w,addCompare:function(){return B.addToCompare(e)},addWishlist:function(){return k.addToWish(e)},title:t,cartClass:v,addCart:function(){return I.addToCart(e,Q)}},s)})},s)})):(0,r.jsxs)("div",{className:"row margin-default",children:[(0,r.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,r.jsx)(p.Z,{})}),(0,r.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,r.jsx)(p.Z,{})}),(0,r.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,r.jsx)(p.Z,{})}),(0,r.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,r.jsx)(p.Z,{})})]})})})]})})})}},20732:function(e,s,t){"use strict";var n=t(7297),i=t(85893),a=t(67294),r=t(78369),l=t(55850),c=t(17283),o=t(13228),d=t(9614),A=t(10267),m=t(51252),u=t(34726),h=t(98595),x=t(92097),g=t(3038),p=t(86040),j=t(40196),f=t(3081);function b(){var e=(0,n.Z)(["\n  query products($type: _CategoryType!, $indexFrom: Int!, $limit: Int!) {\n    products(type: $type, indexFrom: $indexFrom, limit: $limit) {\n      items {\n        id\n        title\n        description\n        type\n        brand\n        category\n        price\n        new\n        stock\n        sale\n        discount\n        variants {\n          id\n          sku\n          size\n          color\n          image_id\n        }\n        images {\n          image_id\n          id\n          alt\n          src\n        }\n      }\n    }\n  }\n"]);return b=function(){return e},e}var v=(0,c.Ps)(b()),C=function(e){var s=e.data,t=e.loading,n=e.startIndex,r=e.endIndex,l=e.cartClass,c=e.backImage,h=(0,a.useContext)(d.Z),b=(0,a.useContext)(x.jv),v=(0,a.useContext)(p.Dh),C=(0,a.useContext)(j.$R).state,N=h.quantity;return(0,i.jsx)(A.Z,{className:"no-slider",children:s&&s.products&&s.products.items&&0!==s.products.items.length&&!t?s&&s.products.items.slice(n,r).map((function(e,s){return(0,i.jsx)(o.Z,{product:e,symbol:C.symbol,addCompare:function(){return v.addToCompare(e)},addCart:function(){return h.addToCart(e,N)},addWishlist:function(){return b.addToWish(e)},cartClass:l,backImage:c},s)})):s&&s.products&&s.products.items&&0===s.products.items.length?(0,i.jsx)(m.Z,{xs:"12",children:(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"col-sm-12 empty-cart-cls text-center",children:[(0,i.jsx)(u.Z,{src:f.Z,className:"img-fluid mb-4 mx-auto",alt:""}),(0,i.jsx)("h3",{children:(0,i.jsx)("strong",{children:"Your Cart is Empty"})}),(0,i.jsx)("h4",{children:"Explore more shortlist some items."})]})})}):(0,i.jsxs)("div",{className:"row mx-0 margin-default",children:[(0,i.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,i.jsx)(g.Z,{})}),(0,i.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,i.jsx)(g.Z,{})}),(0,i.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,i.jsx)(g.Z,{})}),(0,i.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,i.jsx)(g.Z,{})})]})})};s.Z=function(e){var s=e.type,t=e.fluid,n=e.designClass,c=e.cartClass,o=(e.heading,e.noTitle),A=e.title,m=e.inner,u=e.line,g=e.hrClass,f=e.backImage,b=(0,a.useState)(s),N=b[0],E=b[1],y=(0,a.useContext)(d.Z),Z=((0,a.useContext)(x.jv),(0,a.useContext)(p.Dh),(0,a.useContext)(j.$R).state,y.quantity,(0,l.a)(v,{variables:{type:N,indexFrom:0,limit:8}})),w=Z.loading,I=Z.data;return(0,i.jsx)("div",{children:(0,i.jsx)("section",{className:n,children:(0,i.jsxs)(h.Z,{fluid:t,children:[o?"":(0,i.jsxs)("div",{className:A,children:[(0,i.jsx)("h4",{children:"exclusive products"}),(0,i.jsx)("h2",{className:m,children:"special products"}),u?(0,i.jsx)("div",{className:"line"}):g?(0,i.jsx)("hr",{role:"tournament6"}):""]}),(0,i.jsxs)(r.mQ,{className:"theme-tab",children:[(0,i.jsxs)(r.td,{className:"tabs tab-title",children:[(0,i.jsx)(r.OK,{className:N==s?"active":"",onClick:function(){return E(s)},children:"NEW ARRIVAL"}),(0,i.jsxs)(r.OK,{className:"furniture"==N?"active":"",onClick:function(){return E("furniture")},children:["FEATURED"," "]}),(0,i.jsx)(r.OK,{className:"furniture"==N?"active":"",onClick:function(){return E("furniture")},children:"SPECIAL"})]}),(0,i.jsx)(r.x4,{children:(0,i.jsx)(C,{data:I,loading:w,startIndex:0,endIndex:8,cartClass:c,backImage:f})}),(0,i.jsx)(r.x4,{children:(0,i.jsx)(C,{data:I,loading:w,startIndex:0,endIndex:8,cartClass:c,backImage:f})}),(0,i.jsx)(r.x4,{children:(0,i.jsx)(C,{data:I,loading:w,startIndex:0,endIndex:8,cartClass:c,backImage:f})})]})]})})})}},42410:function(e,s,t){"use strict";t.d(s,{Z:function(){return h}});var n=t(85893),i=t(67294),a=t(56571),r=t(10684),l=t(10267),c=t(51252),o=t(97975),d=t(34726),A=t(15538),m=t(609),u="/_next/static/media/Offer-banner.ff0b2a90.png",h=function(){var e=(0,i.useState)(!0),s=e[0],t=e[1],h=function(){return t(!s)};return(0,n.jsx)(a.Z,{isOpen:s,toggle:h,className:"theme-modal modal-lg",centered:!0,children:(0,n.jsx)("div",{children:(0,n.jsx)(r.Z,{className:"modal1",children:(0,n.jsx)(l.Z,{className:"compare-modal",children:(0,n.jsx)(c.Z,{lg:"12",children:(0,n.jsxs)("div",{className:"modal-bg",children:[(0,n.jsx)(o.Z,{type:"button",className:"btn-close","data-dismiss":"modal","aria-label":"Close",onClick:h}),(0,n.jsxs)("div",{className:"offer-content",children:[(0,n.jsx)(d.Z,{src:u,className:"img-fluid blur-up lazyload",alt:""}),(0,n.jsx)("h2",{children:"newsletter"}),(0,n.jsx)(A.Z,{action:"https://pixelstrap.us19.list-manage.com/subscribe/post?u=5a128856334b598b395f1fc9b&id=082f74cbda",className:"auth-form needs-validation",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",target:"_blank",children:(0,n.jsxs)("div",{className:"form-group mx-sm-3",children:[(0,n.jsx)(m.Z,{type:"text",className:"form-control",name:"EMAIL",id:"mce-EMAIL",placeholder:"Enter your email",required:"required"}),(0,n.jsx)(o.Z,{type:"submit",className:"btn btn-solid",id:"mc-submit",children:"subscribe"})]})})]})]})})})})})})}},3038:function(e,s,t){"use strict";var n=t(85893),i=(t(67294),t(24561));s.Z=function(){return(0,n.jsxs)(i.ZP,{className:"skeleton-svg",speed:10,children:[(0,n.jsx)("rect",{className:"skeleton-img",x:"2",y:"2",rx:"0",ry:"0"}),(0,n.jsx)("rect",{className:"skeleton-c1",x:"0",rx:"0",ry:"0"}),(0,n.jsx)("rect",{className:"skeleton-c2",x:"0",rx:"0",ry:"0"}),(0,n.jsx)("rect",{className:"skeleton-c3",x:"0",rx:"0",ry:"0"})]})}},53016:function(e,s,t){"use strict";var n=t(26042),i=t(69396),a=t(7297),r=t(85893),l=(t(67294),t(46066)),c=t(98595),o=t(10267),d=t(51252),A=t(55850),m=t(17283),u=t(79011);function h(){var e=(0,a.Z)(["\n  query instagram($type: String!) {\n    instagram(type: $type) {\n      img\n    }\n  }\n"]);return h=function(){return e},e}var x=(0,m.Ps)(h());s.Z=function(e){var s=e.type,t=(0,A.a)(x,{variables:{type:s}}).data;return(0,r.jsx)(c.Z,{children:(0,r.jsx)(o.Z,{children:(0,r.jsxs)(d.Z,{md:"12",children:[(0,r.jsx)("h2",{className:"title-borderless",children:"# instagram"}),(0,r.jsx)(l.Z,(0,i.Z)((0,n.Z)({},u.O9),{className:"slide-5 no-arrow slick-instagram",children:t&&t.instagram.map((function(e,s){return(0,r.jsx)("div",{children:(0,r.jsx)("a",{href:null,children:(0,r.jsxs)("div",{className:"instagram-box",children:[(0,r.jsx)("img",{src:e.img,className:"bg-img",alt:"Avatar",style:{width:"100%"}}),(0,r.jsx)("div",{className:"overlay",children:(0,r.jsx)("i",{className:"fa fa-instagram","aria-hidden":"true"})})]})})},s)}))}))]})})})}},10373:function(e,s,t){"use strict";var n=t(26042),i=t(69396),a=t(85893),r=(t(67294),t(46066)),l=t(79011),c=t(98595),o=t(10267),d=t(51252),A=t(34726);s.Z=function(e){var s=e.designClass;return(0,a.jsx)("section",{className:s,children:(0,a.jsx)(c.Z,{children:(0,a.jsx)(o.Z,{children:(0,a.jsx)(d.Z,{md:"12",children:(0,a.jsx)(r.Z,(0,i.Z)((0,n.Z)({},l.PQ),{className:"slide-6 no-arrow",children:["/assets/images/logos/1.png","/assets/images/logos/2.png","/assets/images/logos/3.png","/assets/images/logos/4.png","/assets/images/logos/5.png","/assets/images/logos/6.png","/assets/images/logos/7.png","/assets/images/logos/8.png"].map((function(e,s){return(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"logo-block",children:(0,a.jsx)("a",{href:null,children:(0,a.jsx)(A.Z,{src:e,alt:""})})})},s)}))}))})})})})}},651:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return N}});var n=t(26042),i=t(69396),a=t(7297),r=t(85893),l=(t(67294),t(46066)),c=t(34726),o=t(98595),d=t(10267),A=t(51252),m={src:"/_next/static/media/1.c6afe0cb.jpg",height:250,width:250,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAApgP/xAAVEAEBAAAAAAAAAAAAAAAAAAAAIf/aAAgBAQABPwCv/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:8},u="/_next/static/media/santa.0b978f5d.png",h=t(79011),x=t(17283),g=t(55850),p=t(41664),j=t.n(p);function f(){var e=(0,a.Z)(["\n  query blog($type: String!) {\n    blog(type: $type) {\n      img\n      link\n      title\n      desc\n      date\n    }\n  }\n"]);return f=function(){return e},e}var b=(0,x.Ps)(f()),v=[{img:m,name:"mark jecno",post:"designer",about:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration dummy text ."},{img:m,name:"mark jecno",post:"designer",about:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration dummy text ."}],C=function(e){var s=e.img,t=e.name,n=e.post,i=e.about;return(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"review-content",children:[(0,r.jsx)("div",{className:"avtar",children:(0,r.jsx)(c.Z,{src:s.src,alt:""})}),(0,r.jsx)("h5",{children:t}),(0,r.jsx)("h6",{children:n}),(0,r.jsx)("p",{children:i})]})})},N=function(e){var s=e.type,t=(0,g.a)(b,{variables:{type:s}}).data;return(0,r.jsx)("section",{className:"blog-section grey-bg section-b-space",children:(0,r.jsx)(o.Z,{children:(0,r.jsxs)(d.Z,{children:[(0,r.jsxs)(A.Z,{lg:"9",children:[(0,r.jsx)("div",{className:"title2 text-start",children:(0,r.jsx)("h2",{className:"title-inner1",children:"from the blog"})}),(0,r.jsx)(l.Z,(0,i.Z)((0,n.Z)({},h.y3),{className:"slide-3 no-arrow ",children:t&&t.blog.slice(0,7).map((function(e,s){return(0,r.jsxs)(A.Z,{children:[(0,r.jsx)(j(),{href:"/blogs/blog_detail",children:(0,r.jsxs)("div",{className:"classic-effect",children:[(0,r.jsx)(c.Z,{src:e.img,className:"img-fluid",alt:""}),(0,r.jsx)("span",{})]})}),(0,r.jsxs)("div",{className:"blog-details",children:[(0,r.jsx)("h4",{children:e.title}),(0,r.jsx)(j(),{href:"/blogs/blog_detail",children:(0,r.jsxs)("p",{children:[e.desc," "]})}),(0,r.jsx)("hr",{className:"style1"}),(0,r.jsxs)("h6",{children:["by: ",e.date]})]})]},s)}))}))]}),(0,r.jsx)(A.Z,{lg:"3",children:(0,r.jsxs)("div",{className:"review-box",children:[(0,r.jsx)(l.Z,{className:"slide-1",children:v.map((function(e,s){return(0,r.jsx)(C,{img:e.img,name:e.name,post:e.post,about:e.about},s)}))}),(0,r.jsx)("div",{className:"santa-img",children:(0,r.jsx)(c.Z,{src:u,alt:"",className:"img-fluid"})})]})})]})})})}},1670:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return d}});var n=t(85893),i=(t(67294),t(51252)),a=t(34726),r=t(98595),l=t(10267),c=[{img:{src:"/_next/static/media/sub-banner1.19d186d2.jpg",height:348,width:775,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAwEBAQAAAAAAAAAAAAAAAAAABQb/2gAMAwEAAhADEAAAAJAmz//EABoQAAICAwAAAAAAAAAAAAAAAAECETEAAyH/2gAIAQEAAT8A0sUdCIs2Jvmf/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAIx/9oACAECAQE/AFh//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAIDIf/aAAgBAwEBPwC+2c//2Q==",blurWidth:8,blurHeight:4},title:"Christmas",subTitle:"gift box",class:"p-left text-start"},{img:{src:"/_next/static/media/sub-banner2.0188b5c3.jpg",height:348,width:775,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAABf/aAAwDAQACEAMQAAAApQCx/8QAGhAAAgIDAAAAAAAAAAAAAAAAAQIAETFRwf/aAAgBAQABPwAgjLs17rk//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEDMv/aAAgBAgEBPwCm2f/EABcRAAMBAAAAAAAAAAAAAAAAAAABAjL/2gAIAQMBAT8AnKP/2Q==",blurWidth:8,blurHeight:4},title:"go christmas",subTitle:"chocolate",class:"p-right text-end"}],o=function(e){var s=e.img,t=e.title,r=e.subTitle,l=e.classes;return(0,n.jsx)(i.Z,{md:"6",children:(0,n.jsx)("a",{href:"#",children:(0,n.jsxs)("div",{className:"collection-banner christmas-banner  ".concat(l),children:[(0,n.jsx)("div",{className:"img-part",children:(0,n.jsx)(a.Z,{src:s,className:"img-fluid bg-img blur-up lazyload",alt:""})}),(0,n.jsx)("div",{className:"contain-banner",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("h4",{children:t}),(0,n.jsx)("h2",{children:r})]})})]})})})},d=function(){return(0,n.jsx)("section",{className:"pb-0 ratio_45",children:(0,n.jsx)(r.Z,{children:(0,n.jsx)(l.Z,{className:"row partition2",children:c.map((function(e,s){return(0,n.jsx)(o,{img:e.img.src,title:e.title,subTitle:e.subTitle,classes:e.class},s)}))})})})}},8905:function(e,s,t){"use strict";t.r(s);var n=t(85893),i=(t(67294),t(46066)),a=t(34726);s.default=function(){var e=function(e){var s=e.img;return(0,n.jsxs)("div",{children:[(0,n.jsx)(a.Z,{src:s,className:"img-fluid",alt:""}),(0,n.jsx)("div",{className:"slider-details",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"bring"}),(0,n.jsx)("h2",{children:"christmas"}),(0,n.jsx)("h1",{children:"sale"}),(0,n.jsx)("h4",{children:"upto - 50%"}),(0,n.jsx)("h4",{children:"OFF"}),(0,n.jsx)("a",{href:"#",className:"btn btn-white",tabIndex:"0",children:"shop now"})]})})]})};return(0,n.jsx)("section",{className:"p-0 snow-slider",children:(0,n.jsx)(i.Z,{className:"slide-1 home-slider",children:["/assets/images/christmas/home-banner/1.jpg","/assets/images/christmas/home-banner/2.jpg","/assets/images/christmas/home-banner/3.jpg"].map((function(s,t){return(0,n.jsx)(e,{img:s},t)}))})})}},75901:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return l}});var n=t(85893),i=(t(67294),t(34726)),a="/_next/static/media/santa.29891f59.png",r="/_next/static/media/parall.5f206abf.png",l=function(){return(0,n.jsx)("section",{className:"p-0 overflow-cls",children:(0,n.jsxs)("div",{className:"full-banner text-center p-center parallax-christmas",children:[(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col",children:(0,n.jsxs)("div",{className:"banner-contain christmas-contain",children:[(0,n.jsx)("h3",{children:"New Collection Of Awesome Gift"}),(0,n.jsxs)("h2",{children:["End Of The Year ",(0,n.jsx)("span",{children:"SALE"})]}),(0,n.jsxs)("h4",{children:["Get ",(0,n.jsx)("span",{children:"50%"})," Extra Off"]}),(0,n.jsx)("a",{href:null,className:"btn btn-solid",tabIndex:"0",children:"shop now"})]})})})}),(0,n.jsx)("div",{className:"santa-img",children:(0,n.jsx)(i.Z,{src:a,className:"img-fluid",alt:""})}),(0,n.jsx)("div",{className:"decor",children:(0,n.jsx)(i.Z,{src:r,className:"img-fluid",alt:""})})]})})}},10766:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return c}});var n=t(85893),i=(t(67294),"/_next/static/media/2.b951e1e1.jpg"),a=[{imgSrc:"../assets/images/christmas/f-p/1.png",title:"Flower",desc:"Fashion Has Been Creating Well-Designed"},{imgSrc:"../assets/images/christmas/f-p/2.png",title:"chocolate",desc:"Fashion Has Been Creating Well-Designed"},{imgSrc:"../assets/images/christmas/f-p/3.png",title:"gift cards",desc:"Fashion Has Been Creating Well-Designed"},{imgSrc:"../assets/images/christmas/f-p/4.png",title:"photo frame",desc:"Fashion Has Been Creating Well-Designed"},{imgSrc:"../assets/images/christmas/f-p/5.png",title:"watches",desc:"Fashion Has Been Creating Well-Designed"},{imgSrc:"../assets/images/christmas/f-p/6.png",title:"plants",desc:"Fashion Has Been Creating Well-Designed"}],r=function(e){var s=e.imgSrc,t=e.title,i=e.desc;return(0,n.jsx)("li",{children:(0,n.jsxs)("div",{className:"media",children:[(0,n.jsx)("div",{className:"media-body",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("h4",{children:t}),(0,n.jsx)("p",{children:i})]})}),(0,n.jsx)("img",{className:"img-fluid",src:s,alt:"Generic placeholder image"})]})})},l=function(e){var s=e.imgSrc,t=e.title,i=e.desc;return(0,n.jsx)("li",{children:(0,n.jsxs)("div",{className:"media",children:[(0,n.jsx)("img",{className:"img-fluid",src:s,alt:"Generic placeholder image"}),(0,n.jsx)("div",{className:"media-body",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("h4",{children:t}),(0,n.jsx)("p",{children:i})]})})]})})},c=function(){return(0,n.jsx)("section",{className:"p-0 overflow-cls",children:(0,n.jsxs)("div",{className:"full-banner feature-banner",style:{backgroundImage:"url('".concat(i,"')"),backgroundSize:"cover",backgroundPosition:"center center",display:"block"},children:[(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col",children:(0,n.jsx)("div",{className:"feature-text",children:(0,n.jsx)("h2",{children:"SEND GIFT YOUR LOVED ONE"})})})})}),(0,n.jsx)("div",{className:"container-fluid",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,n.jsx)("ul",{className:"feature-object",children:a.slice(0,3).map((function(e,s){return(0,n.jsx)(r,{imgSrc:e.imgSrc,title:e.title,desc:e.desc},s)}))})}),(0,n.jsx)("div",{className:"col-lg-4 col-sm-6 offset-lg-4",children:(0,n.jsx)("ul",{className:"feature-object-right",children:a.slice(3,6).map((function(e,s){return(0,n.jsx)(l,{imgSrc:e.imgSrc,title:e.title,desc:e.desc},s)}))})})]})}),(0,n.jsx)("div",{className:"center-img",children:(0,n.jsx)("img",{src:" ../assets/images/christmas/bg1.png",alt:"",className:"img-fluid"})}),(0,n.jsxs)("div",{className:"banner-decor",children:[(0,n.jsx)("div",{className:"left-img",children:(0,n.jsx)("img",{src:"../assets/images/christmas/decor.png",className:"img-fluid",alt:""})}),(0,n.jsx)("div",{className:"right-img",children:(0,n.jsx)("img",{src:"../assets/images/christmas/decor.png",className:"img-fluid",alt:""})})]})]})})}},91376:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return F}});var n=t(85893),i=t(67294),a=t(42410),r=t(64593),l=t(25921),c=t(8905),o=t(1670),d=t(2607),A=t(79011),m=t(75901),u=t(20732),h=t(7297),x=t(78369),g=t(55850),p=t(17283),j=t(13228),f=t(9614),b=t(10267),v=t(51252),C=t(98595),N=t(92097),E=t(3038),y=t(86040),Z=t(40196);t(3081);function w(){var e=(0,h.Z)(["\n  query products($type: _CategoryType!, $indexFrom: Int!, $limit: Int!) {\n    products(type: $type, indexFrom: $indexFrom, limit: $limit) {\n      items {\n        id\n        title\n        description\n        type\n        brand\n        category\n        price\n        new\n        stock\n        sale\n        discount\n        variants {\n          id\n          sku\n          size\n          color\n          image_id\n        }\n        images {\n          image_id\n          id\n          alt\n          src\n        }\n      }\n    }\n  }\n"]);return w=function(){return e},e}var I=(0,p.Ps)(w()),k=function(e){var s=e.data,t=e.backImage,a=e.startIndex,r=e.endIndex,l=e.cartClass,c=e.loading,o=(0,i.useContext)(f.Z),d=(0,i.useContext)(N.jv),A=(0,i.useContext)(y.Dh),m=(0,i.useContext)(Z.$R).state,u=o.quantity;return(0,n.jsx)(b.Z,{className:"no-slider",children:s&&s.products&&s.products.items&&0!==s.products.items.length&&!c?s&&s.products.items.slice(a,r).map((function(e,s){return(0,n.jsx)(j.Z,{product:e,symbol:m.symbol,addCompare:function(){return A.addToCompare(e)},addCart:function(){return o.addToCart(e,u)},addWishlist:function(){return d.addToWish(e)},cartClass:l,backImage:t},s)})):s&&s.products&&s.products.items&&0===s.products.items.length?(0,n.jsx)(v.Z,{xs:"12",children:(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"col-sm-12 empty-cart-cls text-center",children:[(0,n.jsx)("img",{src:"/static/images/empty-search.jpg",className:"img-fluid mb-4 mx-auto",alt:""}),(0,n.jsx)("h3",{children:(0,n.jsx)("strong",{children:"Your Cart is Empty"})}),(0,n.jsx)("h4",{children:"Explore more shortlist some items."})]})})}):(0,n.jsxs)("div",{className:"row mx-0 margin-default",children:[(0,n.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,n.jsx)(E.Z,{})}),(0,n.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,n.jsx)(E.Z,{})}),(0,n.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,n.jsx)(E.Z,{})}),(0,n.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,n.jsx)(E.Z,{})})]})})},B=function(e){var s=e.type,t=e.fluid,a=e.designClass,r=e.cartClass,l=e.noTitle,c=e.title,o=e.inner,d=e.line,A=e.hrClass,m=e.backImage,u=(0,i.useState)(s),h=u[0],p=u[1],j=(0,g.a)(I,{variables:{type:h,indexFrom:0,limit:20}}),f=j.loading,b=j.data;return(0,n.jsx)("div",{children:(0,n.jsx)("section",{className:a,children:(0,n.jsxs)(C.Z,{fluid:t,children:[l?"":(0,n.jsxs)("div",{className:c,children:[(0,n.jsx)("h2",{className:o,children:"Top category"}),d?(0,n.jsx)("div",{className:"line"}):A?(0,n.jsx)("hr",{role:"tournament6"}):""]}),(0,n.jsxs)(x.mQ,{className:"theme-tab",children:[(0,n.jsxs)(x.td,{className:"tabs tab-title",children:[(0,n.jsx)(x.OK,{className:h==s?"active":"",onClick:function(){return p(s)},children:"Christmas"}),(0,n.jsx)(x.OK,{className:h==s?"active":"",onClick:function(){return p(s)},children:"Flower"}),(0,n.jsx)(x.OK,{className:h==s?"active":"",onClick:function(){return p(s)},children:"Gift card"}),(0,n.jsx)(x.OK,{className:h==s?"active":"",onClick:function(){return p(s)},children:"kids"})]}),(0,n.jsx)(x.x4,{children:(0,n.jsx)(k,{data:b,loading:f,startIndex:0,endIndex:4,backImage:m,cartClass:r})}),(0,n.jsx)(x.x4,{children:(0,n.jsx)(k,{data:b,loading:f,startIndex:4,endIndex:8,backImage:m,cartClass:r})}),(0,n.jsx)(x.x4,{children:(0,n.jsx)(k,{data:b,loading:f,startIndex:0,endIndex:8,backImage:m,cartClass:r})}),(0,n.jsx)(x.x4,{children:(0,n.jsx)(k,{data:b,loading:f,startIndex:8,endIndex:12,backImage:m,cartClass:r})})]})]})})})},Q=t(10766),O=t(651),P=t(53016),T=t(10373),D=t(63272),F=function(){return(0,i.useEffect)((function(){document.documentElement.style.setProperty("--theme-deafult","#ff4c3b"),document.body.classList.add("christmas")})),(0,n.jsx)(i.Fragment,{children:(0,n.jsxs)("div",{className:"christmas",children:[(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/assets/images/favicon/1.png"})]}),(0,n.jsx)(a.Z,{}),(0,n.jsx)(l.Z,{noTopBar:!0,logoName:"logo/f5.png",topClass:"top-header",headerClass:"header-christmas video-header"}),(0,n.jsx)(c.default,{}),(0,n.jsx)(o.default,{}),(0,n.jsx)(d.Z,{innerClass:"title1",backImage:!0,inner:"title-inner1",type:"christmas",title:"top collection",subtitle:"special offer",productSlider:A.XG,designClass:"product-4 product-christmas section-b-space product-m no-arrow slick-initialized slick-slider",noSlider:"true",cartClass:"cart-info cart-wrap"}),(0,n.jsx)(m.default,{}),(0,n.jsx)(u.Z,{type:"christmas",backImage:!0,line:!0,title:"title1 section-t-space",heading:"exclusive title",inner:"title-inner1",designClass:"section-b-space product-christmas p-t-0",noSlider:"true",cartClass:"cart-info cart-wrap"}),(0,n.jsx)(Q.default,{}),(0,n.jsx)(B,{type:"christmas",backImage:!0,productSlider:A.XG,line:!0,title:"title1 section-t-space margin-add",inner:"title-inner1",designClass:"section-b-space product-christmas p-t-0",noSlider:"true",cartClass:"cart-info cart-wrap"}),(0,n.jsx)(O.default,{type:"christmas"}),(0,n.jsx)("section",{className:"instagram ratio_square",children:(0,n.jsx)(P.Z,{type:"christmas"})}),(0,n.jsx)("div",{className:"section-b-space",children:(0,n.jsx)(T.Z,{})}),(0,n.jsx)(D.Z,{footerClass:"footer-light footer-christmas bg-size",footerLayOut:"light-layout upper-footer",footerSection:"small-section border-section border-top-0",belowSection:"section-b-space light-layout",newLatter:!0,logoName:"logo/f5.png"})]})})}},24561:function(e,s,t){"use strict";var n=t(67294),i=function(){return i=Object.assign||function(e){for(var s,t=1,n=arguments.length;t<n;t++)for(var i in s=arguments[t])Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);return e},i.apply(this,arguments)};var a=function(e){var s=e.animate,t=e.animateBegin,a=e.backgroundColor,r=e.backgroundOpacity,l=e.baseUrl,c=e.children,o=e.foregroundColor,d=e.foregroundOpacity,A=e.gradientRatio,m=e.gradientDirection,u=e.uniqueKey,h=e.interval,x=e.rtl,g=e.speed,p=e.style,j=e.title,f=e.beforeMask,b=function(e,s){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&s.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)s.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),v=u||Math.random().toString(36).substring(6),C=v+"-diff",N=v+"-animated-diff",E=v+"-aria",y=x?{transform:"scaleX(-1)"}:null,Z="0; "+h+"; 1",w=g+"s",I="top-bottom"===m?"rotate(90)":void 0;return(0,n.createElement)("svg",i({"aria-labelledby":E,role:"img",style:i(i({},p),y)},b),j?(0,n.createElement)("title",{id:E},j):null,f&&(0,n.isValidElement)(f)?f:null,(0,n.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+l+"#"+C+")",style:{fill:"url("+l+"#"+N+")"}}),(0,n.createElement)("defs",null,(0,n.createElement)("clipPath",{id:C},c),(0,n.createElement)("linearGradient",{id:N,gradientTransform:I},(0,n.createElement)("stop",{offset:"0%",stopColor:a,stopOpacity:r},s&&(0,n.createElement)("animate",{attributeName:"offset",values:-A+"; "+-A+"; 1",keyTimes:Z,dur:w,repeatCount:"indefinite",begin:t})),(0,n.createElement)("stop",{offset:"50%",stopColor:o,stopOpacity:d},s&&(0,n.createElement)("animate",{attributeName:"offset",values:-A/2+"; "+-A/2+"; "+(1+A/2),keyTimes:Z,dur:w,repeatCount:"indefinite",begin:t})),(0,n.createElement)("stop",{offset:"100%",stopColor:a,stopOpacity:r},s&&(0,n.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+A),keyTimes:Z,dur:w,repeatCount:"indefinite",begin:t})))))};a.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,gradientDirection:"left-right",id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading...",beforeMask:null};var r=function(e){return e.children?(0,n.createElement)(a,i({},e)):(0,n.createElement)(l,i({},e))},l=function(e){return(0,n.createElement)(r,i({viewBox:"0 0 476 124"},e),(0,n.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,n.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};s.ZP=r},20627:function(e,s,t){"use strict";var n,i=t(87462),a=t(63366),r=t(97326),l=t(94578),c=t(4942),o=t(67294),d=t(45697),A=t.n(d),m=t(94184),u=t.n(m),h=t(64317),x=t(23663),g=["tag","isOpen","className","navbar","cssModule","children","innerRef"];function p(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?p(Object(t),!0).forEach((function(s){(0,c.Z)(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}var f=j(j({},h.Transition.propTypes),{},{isOpen:A().bool,children:A().oneOfType([A().arrayOf(A().node),A().node]),tag:x.iC,className:A().node,navbar:A().bool,cssModule:A().object,innerRef:A().oneOfType([A().func,A().string,A().object])}),b=j(j({},h.Transition.defaultProps),{},{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:x.wF.Collapse}),v=((n={})[x.E5.ENTERING]="collapsing",n[x.E5.ENTERED]="collapse show",n[x.E5.EXITING]="collapsing",n[x.E5.EXITED]="collapse",n);function C(e){return e.scrollHeight}var N=function(e){function s(s){var t;return(t=e.call(this,s)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){t[e]=t[e].bind((0,r.Z)(t))})),t}(0,l.Z)(s,e);var t=s.prototype;return t.onEntering=function(e,s){this.setState({height:C(e)}),this.props.onEntering(e,s)},t.onEntered=function(e,s){this.setState({height:null}),this.props.onEntered(e,s)},t.onExit=function(e){this.setState({height:C(e)}),this.props.onExit(e)},t.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},t.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},t.render=function(){var e=this,s=this.props,t=s.tag,n=s.isOpen,r=s.className,l=s.navbar,c=s.cssModule,d=s.children,A=(s.innerRef,(0,a.Z)(s,g)),m=this.state.height,p=(0,x.ei)(A,x.rb),f=(0,x.CE)(A,x.rb);return o.createElement(h.Transition,(0,i.Z)({},p,{in:n,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(s){var n=function(e){return v[e]||"collapse"}(s),a=(0,x.mx)(u()(r,n,l&&"navbar-collapse"),c),A=null===m?null:{height:m};return o.createElement(t,(0,i.Z)({},f,{style:j(j({},f.style),A),className:a,ref:e.props.innerRef}),d)}))},s}(o.Component);N.propTypes=f,N.defaultProps=b,s.Z=N},10684:function(e,s,t){"use strict";var n=t(87462),i=t(63366),a=t(67294),r=t(45697),l=t.n(r),c=t(94184),o=t.n(c),d=t(23663),A=["className","cssModule","tag"],m={tag:d.iC,className:l().string,cssModule:l().object},u=function(e){var s=e.className,t=e.cssModule,r=e.tag,l=(0,i.Z)(e,A),c=(0,d.mx)(o()(s,"modal-body"),t);return a.createElement(r,(0,n.Z)({},l,{className:c}))};u.propTypes=m,u.defaultProps={tag:"div"},s.Z=u}},function(e){e.O(0,[2016,3590,1559,3443,7076,6066,6941,6160,8369,5254,1549,4751,3272,5921,9011,3228,9774,2888,179],(function(){return s=50310,e(e.s=s);var s}));var s=e.O();_N_E=s}]);