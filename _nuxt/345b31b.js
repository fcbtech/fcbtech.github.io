(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{358:function(t,e,n){var content=n(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("43070142",content,!0,{sourceMap:!1})},359:function(t,e,n){"use strict";n(358)},360:function(t,e,n){var l=n(53)(!1);l.push([t.i,'ul.ticked-list{position:relative;list-style:none;margin-left:0;padding-left:1.2em}ul.ticked-list li:before{content:"✓";position:absolute;left:0;color:#05b384;font-weight:700;font-size:larger}',""]),t.exports=l},361:function(t,e,n){"use strict";n.r(e);var l={props:{classes:{type:String,default:"",required:!1},headLine:{type:String,default:null,required:!1},image:{type:String,default:null,required:!0},link:{type:Object,default:function(){return{url:"",text:""}},required:!1},quote:{type:Object,default:function(){return{classes:"",text:""}},required:!1},points:{type:Array,default:function(){return[]},required:!1},tickList:{type:Array,default:function(){return[]},required:!1},objectList:{type:Array,default:function(){return[]},required:!1}}},r=(n(359),n(38)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"feature-large",class:t.classes},[n("b-container",[n("b-row",{attrs:{"align-v":"center","align-h":"between"}},[n("b-col",{attrs:{cols:"",md:"6",lg:"5"}},[n("div",{staticClass:"switchable__text"},[t.headLine?n("h2",[n("b",{domProps:{innerHTML:t._s(t.headLine)}})]):t._e(),t._v(" "),t.points?n("p",{staticClass:"lead"},t._l(t.points,(function(e,l){return n("span",{key:e._id},[e.tick?n("span",{staticClass:"color--primary"},[t._v("✓")]):t._e(),t._v("\n              "+t._s(e.text)+"\n              "),l!=t.points.length-1?n("br"):t._e()])})),0):t._e(),t._v(" "),t.tickList?n("div",{staticClass:"text-block"},[n("ul",{staticClass:"list-unstyled ticked-list"},t._l(t.tickList,(function(text){return n("li",{key:text._id},[n("h4",[t._v(t._s(text))])])})),0)]):t._e(),t._v(" "),t.objectList?n("div",t._l(t.objectList,(function(object){return n("div",{key:object._id,staticClass:"text-block"},[n("h5",{staticClass:"font-weight-bold"},[t._v("\n                "+t._s(object.title)+"\n              ")]),t._v(" "),n("p",[t._v(t._s(object.description))])])})),0):t._e(),t._v(" "),t.quote.text?n("hr",{staticClass:"short"}):t._e(),t._v(" "),t.quote.text?n("p",{class:t.quote.classes},[t._v("\n            "+t._s(t.quote.text)+"\n          ")]):t._e(),t._v(" "),t.link&&t.link.url.indexOf("http")>-1?n("a",{attrs:{rel:"keep-params",href:""+t.link.url}},[t._v("\n            "+t._s(t.link.text)+"\n          ")]):t.link?n("NuxtLink",{attrs:{rel:"keep-params",to:"/"+t.link.url}},[t._v("\n            "+t._s(t.link.text)+"\n          ")]):t._e()],1)]),t._v(" "),n("b-col",{attrs:{cols:"",md:"6"}},[n("nuxt-img",{attrs:{alt:"Feature Image",src:"/"+t.image,format:"webp"}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);