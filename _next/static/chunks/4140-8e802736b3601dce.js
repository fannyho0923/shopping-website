"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4140],{94140:function(e,s,a){var i=a(85893),t=a(67294),l=a(40196),n=a(34726),c=a(56571),r=a(10684),d=a(10267),o=a(51252),u=a(32701),h=a(41664),m=a.n(h),x=a(9614),j=a(11163),p=a(17146);s.Z=function(e){var s=e.product,a=e.addToComapre,h=e.addWishlist,f=e.addCart,N=(0,t.useContext)(l.$R).state,g=(0,t.useContext)(x.Z),v=g.plusQty,b=g.minusQty,C=g.quantity,y=g.setQuantity,k=(0,j.useRouter)(),Z=(0,t.useState)(!1),w=Z[0],q=Z[1],Q=(0,t.useState)(!1),_=Q[0],z=Q[1],V=function(){return z(!_)},I=function(){return q(!w)},E=[],F=function(){var e=s.title.split(" ").join("");k.push("/product-details/".concat(s.id)+"-"+"".concat(e))};return(0,i.jsx)(t.Fragment,{children:void 0!==s?(0,i.jsxs)("div",{className:"product-box",children:[(0,i.jsxs)("div",{className:"img-wrapper",children:[(0,i.jsx)("div",{className:"front",children:(0,i.jsx)("a",{href:null,children:void 0!==s.picture?(0,i.jsx)("div",{className:"market-bg".concat(s.picture)}):(0,i.jsx)("div",{className:"front",onClick:F,children:(0,i.jsx)(n.Z,{src:s.images[0].src,className:"img-fluid bg-img blur-up lazyload",alt:""})})})}),(0,i.jsxs)("div",{className:"cart-info cart-wrap",children:[(0,i.jsx)("a",{href:null,title:"Add to Wishlist",tabIndex:"0",onClick:h,children:(0,i.jsx)("i",{className:"fa fa-heart","aria-hidden":"true"})}),(0,i.jsx)("a",{href:null,title:"Quick View",onClick:V,children:(0,i.jsx)("i",{className:"fa fa-search","aria-hidden":"true"})}),(0,i.jsx)(c.Z,{isOpen:_,toggle:V,className:"modal-lg quickview-modal mt-4",children:(0,i.jsx)(r.Z,{children:(0,i.jsxs)(d.Z,{children:[(0,i.jsx)(o.Z,{lg:"6",xs:"12",children:(0,i.jsx)("div",{className:"quick-view-img",children:(0,i.jsx)(n.Z,{src:s.images[0].src,alt:"",className:"img-fluid"})})}),(0,i.jsx)(o.Z,{lg:"6",className:"rtl-text",children:(0,i.jsxs)("div",{className:"product-right",children:[(0,i.jsxs)("h2",{children:[" ",s.title," "]}),(0,i.jsxs)("h3",{children:[N.symbol,(s.price*N.value).toFixed(2)]}),s.variants?(0,i.jsx)("ul",{className:"color-variant",children:E?(0,i.jsx)("ul",{className:"color-variant",children:E.map((function(e,a){return(0,i.jsx)("li",{className:e.color,title:e.color,onClick:function(){return variantChangeByColor(e.image_id,s.images)}},a)}))}):""}):"",(0,i.jsxs)("div",{className:"border-product",children:[(0,i.jsx)("h6",{className:"product-title",children:"product details"}),(0,i.jsx)("p",{children:s.description})]}),(0,i.jsxs)("div",{className:"product-description border-product",children:[s.size?(0,i.jsx)("div",{className:"size-box",children:(0,i.jsx)("ul",{children:s.size.map((function(e,s){return(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:null,children:e})},s)}))})}):"",(0,i.jsx)("h6",{className:"product-title",children:"quantity"}),(0,i.jsx)("div",{className:"qty-box",children:(0,i.jsxs)("div",{className:"input-group",children:[(0,i.jsx)("span",{className:"input-group-prepend",children:(0,i.jsx)("button",{type:"button",className:"btn quantity-left-minus",onClick:b,"data-type":"minus","data-field":"",children:(0,i.jsx)("i",{className:"fa fa-angle-left"})})}),(0,i.jsx)("input",{type:"text",name:"quantity",value:C,onChange:function(e){y(parseInt(e.target.value))},className:"form-control input-number"}),(0,i.jsx)("span",{className:"input-group-prepend",children:(0,i.jsx)("button",{type:"button",className:"btn quantity-right-plus",onClick:function(){return v(s)},"data-type":"plus","data-field":"",children:(0,i.jsx)("i",{className:"fa fa-angle-right"})})})]})})]}),(0,i.jsxs)("div",{className:"product-buttons",children:[(0,i.jsx)("button",{className:"btn btn-solid",onClick:function(){return f(s,C)},children:"add to cart"}),(0,i.jsx)("button",{className:"btn btn-solid",onClick:F,children:"View detail"})]})]})})]})})}),(0,i.jsx)("a",{href:null,title:"Compare",onClick:I,children:(0,i.jsx)("i",{className:"fa fa-refresh","aria-hidden":"true"})}),(0,i.jsxs)(c.Z,{isOpen:w,toggle:I,className:"modal-content",centered:!0,children:[(0,i.jsx)(u.Z,{toggle:I,children:"Quick View"}),(0,i.jsx)(r.Z,{children:(0,i.jsx)(d.Z,{className:"compare-modal",children:(0,i.jsx)(o.Z,{lg:"12",children:(0,i.jsxs)("div",{className:"media",children:[(0,i.jsx)(n.Z,{src:s.images[0].src,alt:"",className:"img-fluid"}),(0,i.jsxs)("div",{className:"media-body align-self-center text-center",children:[(0,i.jsxs)("h5",{children:[(0,i.jsx)("i",{className:"fa fa-check"}),"Item"," ",(0,i.jsxs)("span",{children:[s.title," "]}),(0,i.jsx)("span",{children:" successfully added to your Compare list"})]}),(0,i.jsx)("div",{className:"buttons d-flex justify-content-center",children:(0,i.jsx)(m(),{href:"/page/compare",children:(0,i.jsx)("a",{href:null,className:"btn-sm btn-solid",onClick:a,children:"View Compare list"})})})]})]})})})})]})]}),(0,i.jsx)("div",{className:"add-button","data-toggle":"modal","data-target":"#addtocart",onClick:f,children:"add to cart"})]}),(0,i.jsx)(p.Z,{product:s,currency:N,uniqueTags:E})]}):""})}}}]);