(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{423:function(t,e,r){"use strict";var n=r(13),o=r(425);n({target:"String",proto:!0,forced:r(426)("link")},{link:function(t){return o(this,"a","href",t)}})},425:function(t,e,r){var n=r(19),o=r(59),c=r(43),l=/"/g,d=n("".replace);t.exports=function(t,e,r,n){var f=c(o(t)),v="<"+e;return""!==r&&(v+=" "+r+'="'+d(c(n),l,"&quot;")+'"'),v+">"+f+"</"+e+">"}},426:function(t,e,r){var n=r(15);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},462:function(t,e,r){"use strict";r.r(e);r(21),r(92),r(423);var n={props:{caseStudies:{type:Array,required:!0,default:function(){return[]}}}},o=r(33),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"text-center bg--secondary"},[e("b-container",[e("b-row",t._l(t.caseStudies,(function(r){return e("b-col",{key:r._id,attrs:{cols:"",md:"4"}},[e("div",{staticClass:"feature feature-1"},[e("nuxt-img",{attrs:{loading:"lazy",alt:r.title,src:r.image,format:"webp"}}),t._v(" "),e("div",{staticClass:"feature__body boxed boxed--lg boxed--border"},[e("h3",[t._v(t._s(r.title))]),t._v(" "),e("p",{staticClass:"lead"},[t._v("\n              "+t._s(r.description)+"\n            ")]),t._v(" "),e("NuxtLink",{attrs:{rel:"keep-params",to:{name:r.link,query:t.$route.query}}},[t._v("\n              Read More\n            ")])],1)],1)])})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);