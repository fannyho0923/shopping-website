(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5067],{81343:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product-details/common/detail-price",function(){return t(8551)}])},18967:function(e,s){"use strict";s.Z={src:"/_next/static/media/size-chart.94777219.jpg",height:580,width:580,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAq4P/xAAbEAAABwEAAAAAAAAAAAAAAAAAAQQTFDGT4f/aAAgBAQABPwBg6kqtOD//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:8,blurHeight:8}},65995:function(e,s,t){"use strict";var i=t(85893),n=t(67294),a=t(98130);s.Z=function(){var e=function(){return(0,i.jsx)("span",{children:"You are good to go!"})},s=new Date,t=s.getFullYear(),r=s.getMonth(),l=s.getDate(),c=new Date(t,r,l+10).getTime();return(0,i.jsx)(n.Fragment,{children:(0,i.jsx)(a.ZP,{date:c,renderer:function(s){var t=s.days,n=s.hours,a=s.minutes,r=s.seconds;return s.completed?(0,i.jsx)(e,{}):(0,i.jsx)("div",{className:"timer-box",children:(0,i.jsx)("div",{className:"timer",children:(0,i.jsxs)("div",{className:"timer-p",id:"demo",children:[(0,i.jsxs)("span",{children:[t,(0,i.jsx)("span",{className:"padding-l",children:":"}),(0,i.jsx)("span",{className:"timer-cal",children:"Days"})]}),(0,i.jsxs)("span",{children:[n,(0,i.jsx)("span",{className:"padding-l",children:":"}),(0,i.jsx)("span",{className:"timer-cal",children:"Hrs"})]}),(0,i.jsxs)("span",{children:[a,(0,i.jsx)("span",{className:"padding-l",children:":"}),(0,i.jsx)("span",{className:"timer-cal",children:"Min"})]}),(0,i.jsxs)("span",{children:[r,(0,i.jsx)("span",{className:"timer-cal",children:"Sec"})]})]})})})}})})}},8551:function(e,s,t){"use strict";t.r(s);var i=t(85893),n=t(67294),a=t(41664),r=t.n(a),l=t(18967),c=t(56571),o=t(32701),d=t(10684),u=t(34726),A=t(609),h=t(40196),p=t(9614),m=t(65995),x=t(29259);s.default=function(e){var s=e.item,t=e.stickyClass,a=e.changeColorVar,f=(0,n.useState)(!1),j=f[0],g=f[1],b=(0,n.useContext)(h.$R).state.symbol,N=function(){return g(!j)},v=s,y=(0,n.useContext)(p.Z),C=y.stock,w=y.plusQty,E=y.minusQty,k=y.quantity,Q=[],z=[];return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"product-right ".concat(t),children:[(0,i.jsxs)("h2",{children:[" ",v.title," "]}),(0,i.jsxs)("h4",{children:[(0,i.jsxs)("del",{children:[b,v.price]}),(0,i.jsxs)("span",{children:[v.discount,"% off"]})]}),(0,i.jsxs)("h3",{children:[b,v.price-v.price*v.discount/100]}),v.variants.map((function(e){Q.find((function(s){return s.color===e.color}))||Q.push(e),z.find((function(s){return s===e.size}))||z.push(e.size)})),void 0===a?(0,i.jsx)(i.Fragment,{children:Q?(0,i.jsx)("ul",{className:"color-variant",children:Q.map((function(e,s){return(0,i.jsx)("li",{className:e.color,title:e.color},s)}))}):""}):(0,i.jsx)(i.Fragment,{children:Q?(0,i.jsx)("ul",{className:"color-variant",children:Q.map((function(e,s){return(0,i.jsx)("li",{className:e.color,title:e.color,onClick:function(){return a(s)}},s)}))}):""}),(0,i.jsxs)("div",{className:"product-description border-product",children:[v.variants?(0,i.jsxs)("div",{children:[(0,i.jsxs)("h6",{className:"product-title size-text",children:["select size",(0,i.jsx)("span",{children:(0,i.jsx)("a",{href:null,"data-toggle":"modal","data-target":"#sizemodal",onClick:N,children:"size chart"})})]}),(0,i.jsxs)(c.Z,{isOpen:j,toggle:N,centered:!0,children:[(0,i.jsx)(o.Z,{toggle:N,children:"Sheer Straight Kurta"}),(0,i.jsx)(d.Z,{children:(0,i.jsx)(u.Z,{src:l.Z.src,alt:"size",className:"img-fluid"})})]}),(0,i.jsx)("div",{className:"size-box",children:(0,i.jsx)("ul",{children:z.map((function(e,s){return(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:null,children:e})},s)}))})})]}):"",(0,i.jsx)("span",{className:"instock-cls",children:C}),(0,i.jsx)("h6",{className:"product-title",children:"quantity"}),(0,i.jsx)("div",{className:"qty-box",children:(0,i.jsxs)("div",{className:"input-group",children:[(0,i.jsx)("span",{className:"input-group-prepend",children:(0,i.jsx)("button",{type:"button",className:"btn quantity-left-minus",onClick:E,"data-type":"minus","data-field":"",children:(0,i.jsx)("i",{className:"fa fa-angle-left"})})}),(0,i.jsx)(A.Z,{type:"text",name:"quantity",value:k,onChange:function(e){setQuantity(parseInt(e.target.value))},className:"form-control input-number"}),(0,i.jsx)("span",{className:"input-group-prepend",children:(0,i.jsx)("button",{type:"button",className:"btn quantity-right-plus",onClick:function(){return w(v)},"data-type":"plus","data-field":"",children:(0,i.jsx)("i",{className:"fa fa-angle-right"})})})]})})]}),(0,i.jsxs)("div",{className:"product-buttons",children:[(0,i.jsx)("a",{href:null,className:"btn btn-solid",onClick:function(){return y.addToCart(v,k)},children:"add to cart"}),(0,i.jsx)(r(),{href:"/page/account/checkout",children:(0,i.jsx)("a",{className:"btn btn-solid",children:"buy now"})})]}),(0,i.jsxs)("div",{className:"border-product",children:[(0,i.jsx)("h6",{className:"product-title",children:"product details"}),(0,i.jsx)("p",{children:v.description})]}),(0,i.jsxs)("div",{className:"border-product",children:[(0,i.jsx)("h6",{className:"product-title",children:"share it"}),(0,i.jsx)("div",{className:"product-icon",children:(0,i.jsx)(x.default,{})})]}),(0,i.jsxs)("div",{className:"border-product",children:[(0,i.jsx)("h6",{className:"product-title",children:"Time Reminder"}),(0,i.jsx)(m.Z,{})]})]})})}},29259:function(e,s,t){"use strict";t.r(s);var i=t(85893);t(67294);s.default=function(){return(0,i.jsxs)("ul",{className:"product-social",children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://www.facebook.com",target:"_blank",children:(0,i.jsx)("i",{className:"fa fa-facebook"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://plus.google.com",target:"_blank",children:(0,i.jsx)("i",{className:"fa fa-google-plus"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://twitter.com",target:"_blank",children:(0,i.jsx)("i",{className:"fa fa-twitter"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://www.instagram.com",target:"_blank",children:(0,i.jsx)("i",{className:"fa fa-instagram"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://rss.com",target:"_blank",children:(0,i.jsx)("i",{className:"fa fa-rss"})})})]})}},609:function(e,s,t){"use strict";var i=t(87462),n=t(63366),a=t(97326),r=t(94578),l=t(67294),c=t(45697),o=t.n(c),d=t(94184),u=t.n(d),A=t(23663),h=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],p={children:o().node,type:o().string,size:o().oneOfType([o().number,o().string]),bsSize:o().string,valid:o().bool,invalid:o().bool,tag:A.iC,innerRef:o().oneOfType([o().object,o().func,o().string]),plaintext:o().bool,addon:o().bool,className:o().string,cssModule:o().object},m=function(e){function s(s){var t;return(t=e.call(this,s)||this).getRef=t.getRef.bind((0,a.Z)(t)),t.focus=t.focus.bind((0,a.Z)(t)),t}(0,r.Z)(s,e);var t=s.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,s=e.className,t=e.cssModule,a=e.type,r=e.bsSize,c=e.valid,o=e.invalid,d=e.tag,p=e.addon,m=e.plaintext,x=e.innerRef,f=(0,n.Z)(e,h),j=["radio","checkbox"].indexOf(a)>-1,g=new RegExp("\\D","g"),b=d||("select"===a||"textarea"===a?a:"input"),N="form-control";m?(N+="-plaintext",b=d||"input"):"file"===a?N+="-file":"range"===a?N+="-range":j&&(N=p?null:"form-check-input"),f.size&&g.test(f.size)&&((0,A.O4)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=f.size,delete f.size);var v=(0,A.mx)(u()(s,o&&"is-invalid",c&&"is-valid",!!r&&"form-control-"+r,N),t);return("input"===b||d&&"function"===typeof d)&&(f.type=a),f.children&&!m&&"select"!==a&&"string"===typeof b&&"select"!==b&&((0,A.O4)('Input with a type of "'+a+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete f.children),l.createElement(b,(0,i.Z)({},f,{ref:x,className:v,"aria-invalid":o}))},s}(l.Component);m.propTypes=p,m.defaultProps={type:"text"},s.Z=m},34726:function(e,s,t){"use strict";var i=t(87462),n=t(63366),a=t(67294),r=t(45697),l=t.n(r),c=t(94184),o=t.n(c),d=t(23663),u=["body","bottom","className","cssModule","heading","left","list","middle","object","right","tag","top"],A={body:l().bool,bottom:l().bool,children:l().node,className:l().string,cssModule:l().object,heading:l().bool,left:l().bool,list:l().bool,middle:l().bool,object:l().bool,right:l().bool,tag:d.iC,top:l().bool},h=function(e){var s,t=e.body,r=e.bottom,l=e.className,c=e.cssModule,A=e.heading,h=e.left,p=e.list,m=e.middle,x=e.object,f=e.right,j=e.tag,g=e.top,b=(0,n.Z)(e,u);s=A?"h4":b.href?"a":b.src||x?"img":p?"ul":"div";var N=j||s,v=(0,d.mx)(o()(l,{"media-body":t,"media-heading":A,"media-left":h,"media-right":f,"media-top":g,"media-bottom":r,"media-middle":m,"media-object":x,"media-list":p,media:!t&&!A&&!h&&!f&&!g&&!r&&!m&&!x&&!p}),c);return a.createElement(N,(0,i.Z)({},b,{className:v}))};h.propTypes=A,s.Z=h}},function(e){e.O(0,[3443,6160,3893,9774,2888,179],(function(){return s=81343,e(e.s=s);var s}));var s=e.O();_N_E=s}]);