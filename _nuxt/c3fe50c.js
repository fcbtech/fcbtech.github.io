(window.webpackJsonp=window.webpackJsonp||[]).push([[19,3,5,12],{298:function(t,e,r){var content=r(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(52).default)("1c587328",content,!0,{sourceMap:!1})},299:function(t,e,r){"use strict";r(298)},300:function(t,e,r){var o=r(51),n=r(160),l=r(301),c=r(302),d=o(!1),m=n(l),f=n(c);d.push([t.i,"@media (min-width:768px){.newsletter-background{background-image:url("+m+"),url("+f+")!important;background-repeat:no-repeat!important;background-position-x:right,left!important;background-position-y:center!important;background-color:#fff;background-size:contain!important}}",""]),t.exports=d},301:function(t,e,r){t.exports=r.p+"img/logo-half-right.3ab5408.png"},302:function(t,e,r){t.exports=r.p+"img/logo-half-left.4e1d5ca.png"},303:function(t,e,r){"use strict";r.r(e);var o={},n=(r(299),r(35)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"space--xs"},[r("div",{staticClass:"container"},[r("nuxt-img",{staticClass:"hidden-xs",staticStyle:{"margin-bottom":"-4.5rem","margin-left":"-2.5rem"},attrs:{alt:"Image",src:"Repeat Grid 10.png"}}),t._v(" "),t._m(0)],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"boxed boxed--lg boxed--border box-shadow newsletter-background"},[r("div",{staticClass:"row justify-content-center text-center my-sm-4"},[r("div",{staticClass:"col-lg-8"},[r("h1",{staticClass:"color--primary"},[r("strong",[t._v("Your digital transformation starts here :)")])])])]),t._v(" "),r("div",{staticClass:"row justify-content-center my-sm-4"},[r("div",{staticClass:"col-lg-8"},[r("form",{staticClass:"form-email",attrs:{id:"newsletter_form",action:"/classes/request_demo_submit.php","data-success":"Thanks for booking a free demo, You will shortly receive a call from us"}},[r("div",{staticClass:"row justify-content-center"},[r("input",{attrs:{id:"request",type:"hidden",name:"request",value:"email_form"}}),t._v(" "),r("div",{staticClass:"col-md-6"},[r("input",{staticClass:"validate-required validate-email",attrs:{type:"email",name:"Email",placeholder:"Email Address"}})]),t._v(" "),r("div",{staticClass:"col-lg-5 col-md-6"},[r("button",{staticClass:"btn btn--lg btn-primary type--uppercase",attrs:{type:"submit"}},[r("span",{staticClass:"btn__text"},[t._v("Get Started for Free")])])])]),t._v(" "),r("div",{staticStyle:{position:"absolute",left:"-5000px"},attrs:{"aria-hidden":"true"}},[r("input",{attrs:{type:"text",name:"b_77142ece814d3cff52058a51f_f300c9cce8",tabindex:"-1",value:""}})])])])])])}],!1,null,null,null);e.default=component.exports},304:function(t,e,r){"use strict";r.r(e);var o={props:{featureData:{type:Object,default:null,required:!0}}},n=r(35),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"feature-large",class:t.featureData.classes},[r("b-container",[r("b-row",{attrs:{"align-v":"center","align-h":"between"}},[r("b-col",{attrs:{cols:"",md:"6",lg:"5"}},[r("div",{staticClass:"switchable__text"},[r("h2",[r("b",{domProps:{innerHTML:t._s(t.featureData.headline)}})]),t._v(" "),r("p",{staticClass:"lead"},t._l(t.featureData.points,(function(e,o){return r("span",{key:e._id},[e.tick?r("span",{staticClass:"color--primary"},[t._v("✓")]):t._e(),t._v("\n              "+t._s(e.text)+"\n              "),o!=t.featureData.points.length-1?r("br"):t._e()])})),0),t._v(" "),t.featureData.qoute?r("hr",{staticClass:"short"}):t._e(),t._v(" "),t.featureData.qoute?r("p",{class:t.featureData.qoute.classes},[t._v("\n            "+t._s(t.featureData.qoute.text)+"\n          ")]):t._e(),t._v(" "),t.featureData.link&&t.featureData.link.url.indexOf("http")>-1?r("a",{attrs:{rel:"keep-params",href:""+t.featureData.link.url}},[t._v("\n            "+t._s(t.featureData.link.text)+"\n          ")]):t.featureData.link?r("NuxtLink",{attrs:{rel:"keep-params",to:""+t.featureData.link.url}},[t._v("\n            "+t._s(t.featureData.link.text)+"\n          ")]):t._e()],1)]),t._v(" "),r("b-col",{attrs:{cols:"",md:"6"}},[r("nuxt-img",{attrs:{alt:"Feature Image",src:"/"+t.featureData.image,format:"webp"}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},310:function(t,e,r){"use strict";r.r(e);var o={props:{title:{type:String,default:null,required:!0}}},n=r(35),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"elements-title space--xxs text-center"},[r("b-container",[r("b-row",[r("b-col",{attrs:{cols:"",md:"12"}},[r("h2",{staticClass:"color--primary font-weight-bold"},[t._v("\n          "+t._s(t.title)+"\n        ")])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},325:function(t,e,r){"use strict";r.r(e);r(4),r(63);var o={data:function(){return{title:"Why is TranZact Free Forever | TranZact",description:"It's probably not what you think..",image:this.$img("/why-free-landing.png",{format:"webp"}),featureFirst:{classes:"mb-md-0",points:[{tick:!1,text:"We want every Indian SME to use our product without having to think over silly amounts of money. But, just being free will NOT be enough. Our product needs to add immense value to our customers with a commitment towards absolutely delighting them. This maximizes the duration that our customers spend with us and after finding value in the free version, they upgrade to the paid plans at their convenience."}],image:"why-free-02.png",qoute:{classes:"color--primary",text:"“A customer will pay for a feature for a month or two, but will pay for benefits for a lifetime.”"}},featureSecond:{classes:"switchable mb-md-0",points:[{tick:!1,text:"We have seen the best product companies in the world are known for their amazing customer support."},{tick:!1,text:"This separates the best from the rest. We believe in this and by staying close to our customers we get continuous feedback for our overall development. Software implemention is like a marriage and we understand that its success depends on the both of us, not just YOU!"}],image:"why-free-03.png",qoute:{classes:"color--primary",text:'"It takes months to find a customer, but only seconds to lose one because of bad support.”'}},featureThird:{classes:"mb-md-0",points:[{tick:!1,text:"We do have paid plans and out of 10,000+ customers using TranZact, over 30% have converted into paid users within 3 months of free usage. However, we are strong advocates of starting out with our free plans, find value in our product and then only upgrade whenever you're ready in terms of people, processes and money. And ya, we don't mind you using our free plan for lifetime :)"}],image:"why-free-04.png",qoute:{classes:"color--primary",text:'"Business is more about creating impact, rather than just money.”'}},featureFourth:{classes:"switchable mb-md-0",points:[{tick:!1,text:"The core functions of any manufacturing SME are Sales, Purchase, Inventory and Production. Our free tool helps you to take this first step towards digitization by streamlining your Sales, Purchase and Inventory which covers 80% of your core operations. After working with 10,000+ SMEs, we strongly advocate in taking this first step successfully, then only digitize the more complex operations of Production"}],image:"why-free-05.png",qoute:{classes:"color--primary",text:'"If you can offer a valuable product for free, it will naturally spread your product much more rapidly.”'}}}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:image:width",property:"og:image:width",content:"663"},{hid:"og:image:height",property:"og:image:height",content:"819"},{hid:"twitter:title",property:"twitter:title",content:this.title},{hid:"twitter:description",property:"twitter:description",content:this.description},{hid:"twitter:image",property:"twitter:image",content:this.image}]}}},n=r(35),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"cover"},[r("b-container",{staticClass:"pos-vertical-top"},[r("b-row",{attrs:{"align-h":"between","align-v":"center"}},[r("b-col",{attrs:{cols:"",lg:"6",md:"8"}},[r("div",{staticClass:"switchable__text"},[r("h1",{staticClass:"h1--large font-weight-bold color--primary"},[t._v("\n              Why is TranZact FREE FOREVER?\n            ")]),t._v(" "),r("p",{staticClass:"lead"},[t._v("\n              It's probably not what you think..\n            ")])])]),t._v(" "),r("b-col",{attrs:{cols:"12",lg:"5",md:"4"}},[r("nuxt-img",{attrs:{alt:"image",src:"why-free-landing.png",format:"webp"}})],1)],1)],1)],1),t._v(" "),r("TitlesSimpleSingle",{attrs:{title:"I'm Ritesh, TranZact's founder, I'll help to answer your obvoius questions:"}}),t._v(" "),r("section",{staticClass:"feature-large switchable switchable--switch mb-0"},[r("b-container",[r("b-row",{attrs:{"align-h":"between","align-v":"center"}},[r("b-col",{attrs:{cols:"",lg:"6",md:"6"}},[r("nuxt-img",{attrs:{alt:"Image",src:"why-free-01.png",format:"webp"}})],1),t._v(" "),r("b-col",{attrs:{cols:"",lg:"5",md:"6"}},[r("h4"),t._v(" "),r("h4",[r("strong",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Why are you offering a free product?")])]),t._v(" "),r("h4",[r("strong",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Will I get proper Support?")])]),t._v(" "),r("h4",[r("strong",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Are there any hidden terms and conditions?")])]),t._v(" "),r("h4",[r("strong",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" When will I need to pay and how much?")])]),t._v(" "),r("h4",[r("strong",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" How does TranZact make money?")])]),t._v(" "),r("h4",[r("strong",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Will this free product add value?")])])])],1)],1)],1),t._v(" "),r("TitlesSimpleSingle",{attrs:{title:"Why are we offering a free product?"}}),t._v(" "),r("BlocksFeaturesLarge",{attrs:{"feature-data":t.featureFirst}}),t._v(" "),r("TitlesSimpleSingle",{attrs:{title:"Will we provide you proper on-boarding and support?"}}),t._v(" "),r("BlocksFeaturesLarge",{attrs:{"feature-data":t.featureSecond}}),t._v(" "),r("TitlesSimpleSingle",{attrs:{title:"If we are giving a free product, then how do we make money?"}}),t._v(" "),r("BlocksFeaturesLarge",{attrs:{"feature-data":t.featureThird}}),t._v(" "),r("TitlesSimpleSingle",{attrs:{title:"Will this free product add value?"}}),t._v(" "),r("BlocksFeaturesLarge",{attrs:{"feature-data":t.featureFourth}}),t._v(" "),r("BlocksFormSubscribeNewsletter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TitlesSimpleSingle:r(310).default,BlocksFeaturesLarge:r(304).default,BlocksFormSubscribeNewsletter:r(303).default})}}]);