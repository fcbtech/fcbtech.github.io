(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{530:function(t,e,r){"use strict";r.r(e);var n={props:{backgroudColor:{type:String,default:null,required:!1},backgroudImage:{type:String,default:null,required:!1},clientCompanyImage:{type:String,default:null,required:!0},clientCompanyName:{type:String,default:null,required:!0},clientName:{type:String,default:null,required:!0},url:{type:String,default:null,required:!1}}},l=r(33),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"boxed boxed--border imagebg text-center",style:{background:t.backgroudColor},attrs:{"data-overlay":"8"}},[t.backgroudImage?e("div",{staticClass:"background-image-holder",style:{background:"url('"+t.$img(t.backgroudImage,{format:"webp"})+"')",opacity:1}},[e("nuxt-img",{attrs:{loading:"lazy",alt:"background",src:"".concat(t.backgroudImage),format:"webp"}})],1):t._e(),t._v(" "),e("b-container",[e("b-row",[e("b-col",[e("h4",[e("nuxt-img",{attrs:{src:"".concat(t.clientCompanyImage),alt:"".concat(t.clientCompanyName),format:"webp"}})],1),t._v(" "),e("h4",{staticClass:"mb-1"},[t._v("\n          "+t._s(t.clientName)+"\n        ")]),t._v(" "),e("h5",[t._v(t._s(t.clientCompanyName))]),t._v(" "),t.url.indexOf("youtube")>-1?e("div",{staticClass:"modal-instance"},[e("a",{staticClass:"btn btn-primary type--uppercase modal-trigger",on:{click:function(e){return t.showYouTubeVideoFrame(t.url)}}},[e("span",{staticClass:"btn__text"},[t._v("\n              ▶ Watch Now\n            ")])])]):e("NuxtLink",{staticClass:"btn",attrs:{to:{path:t.url,query:t.$route.query}}},[e("span",{staticClass:"btn__text"},[t._v("\n            Read More\n          ")])])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);