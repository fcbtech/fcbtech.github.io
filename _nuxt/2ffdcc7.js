(window.webpackJsonp=window.webpackJsonp||[]).push([[40,3,5,11,17],{320:function(t,e,r){var content=r(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(52).default)("1c587328",content,!0,{sourceMap:!1})},321:function(t,e,r){"use strict";r(320)},322:function(t,e,r){var n=r(51),o=r(166),l=r(323),c=r(324),d=n(!1),f=o(l),m=o(c);d.push([t.i,"@media (min-width:768px){.newsletter-background{background-image:url("+f+"),url("+m+")!important;background-repeat:no-repeat!important;background-position-x:right,left!important;background-position-y:center!important;background-color:#fff;background-size:contain!important}}",""]),t.exports=d},323:function(t,e,r){t.exports=r.p+"img/logo-half-right.3ab5408.png"},324:function(t,e,r){t.exports=r.p+"img/logo-half-left.4e1d5ca.png"},325:function(t,e,r){"use strict";r.r(e);var n={},o=(r(321),r(37)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"space--xs"},[r("div",{staticClass:"container"},[r("nuxt-img",{staticClass:"hidden-xs",staticStyle:{"margin-bottom":"-4.5rem","margin-left":"-2.5rem"},attrs:{alt:"Image",src:"Repeat Grid 10.png"}}),t._v(" "),t._m(0)],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"boxed boxed--lg boxed--border box-shadow newsletter-background"},[r("div",{staticClass:"row justify-content-center text-center my-sm-4"},[r("div",{staticClass:"col-lg-8"},[r("h1",{staticClass:"color--primary"},[r("strong",[t._v("Your digital transformation starts here :)")])])])]),t._v(" "),r("div",{staticClass:"row justify-content-center my-sm-4"},[r("div",{staticClass:"col-lg-8"},[r("form",{staticClass:"form-email",attrs:{id:"newsletter_form","data-success":"Thanks for booking a free demo, You will shortly receive a call from us"}},[r("div",{staticClass:"row justify-content-center"},[r("input",{attrs:{id:"request",type:"hidden",name:"request",value:"email_form"}}),t._v(" "),r("div",{staticClass:"col-md-6"},[r("input",{staticClass:"validate-required validate-email",attrs:{type:"email",name:"Email",placeholder:"Email Address"}})]),t._v(" "),r("div",{staticClass:"col-lg-5 col-md-6"},[r("button",{staticClass:"btn btn-lg btn-primary type--uppercase",attrs:{type:"submit"}},[r("span",{staticClass:"btn__text"},[t._v("Get Started for Free")])])])]),t._v(" "),r("div",{staticStyle:{position:"absolute",left:"-5000px"},attrs:{"aria-hidden":"true"}},[r("input",{attrs:{type:"text",name:"b_77142ece814d3cff52058a51f_f300c9cce8",tabindex:"-1",value:""}})])])])])])}],!1,null,null,null);e.default=component.exports},326:function(t,e,r){"use strict";r.r(e);var n={props:{classes:{type:String,default:"",required:!1},preHeadLine:{type:String,default:"",required:!1},headLine:{type:String,default:null,required:!0},subHeadLine:{type:String,default:null,required:!1},ctaText:{type:String,default:null,required:!1},image:{type:String,default:null,required:!1}}},o=r(37),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"switchable cover",class:""+t.classes},[r("b-container",{staticClass:"pos-vertical-top"},[r("b-row",{attrs:{"align-h":"between","align-v":"center"}},[t.image?r("b-col",{attrs:{cols:"12",lg:"6",md:"4"}},[r("nuxt-img",{attrs:{alt:"image",src:""+t.image,format:"webp"}})],1):t._e(),t._v(" "),r("b-col",{attrs:{cols:"",lg:"6",md:"8"}},[r("div",{staticClass:"switchable__text"},[t.preHeadLine?r("h4",{staticClass:"mb-0"},[t._v("\n            "+t._s(t.preHeadLine)+"\n          ")]):t._e(),t._v(" "),r("h1",{staticClass:"h1--large font-weight-bold color--primary"},[t._v("\n            "+t._s(t.headLine)+"\n          ")]),t._v(" "),t.subHeadLine?r("p",{staticClass:"lead"},[t._v("\n            "+t._s(t.subHeadLine)+"\n          ")]):t._e(),t._v(" "),t.ctaText?r("a",{staticClass:"btn btn-primary type--uppercase",attrs:{rel:"keep-params",href:"https://app.letstranzact.com/v2/signup"},on:{click:function(e){return t.signUpRedirect(t.label=t.ctaText,t.category="cover")}}},[r("span",{staticClass:"btn__text"},[t._v("\n              "+t._s(t.ctaText)+"\n            ")])]):t._e()])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},327:function(t,e,r){var content=r(329);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(52).default)("43070142",content,!0,{sourceMap:!1})},328:function(t,e,r){"use strict";r(327)},329:function(t,e,r){var n=r(51)(!1);n.push([t.i,'ul.ticked-list{position:relative;list-style:none;margin-left:0;padding-left:1.2em}ul.ticked-list li:before{content:"✓";position:absolute;left:0;color:#05b384;font-weight:700;font-size:larger}',""]),t.exports=n},330:function(t,e,r){"use strict";r.r(e);var n={props:{classes:{type:String,default:"",required:!1},headLine:{type:String,default:null,required:!0},image:{type:String,default:null,required:!0},link:{type:Object,default:function(){return{url:"",text:""}},required:!1},quote:{type:Object,default:function(){return{classes:"",text:""}},required:!1},points:{type:Array,default:function(){return[]},required:!1},tickList:{type:Array,default:function(){return[]},required:!1},objectList:{type:Array,default:function(){return[]},required:!1}}},o=(r(328),r(37)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"feature-large",class:t.classes},[r("b-container",[r("b-row",{attrs:{"align-v":"center","align-h":"between"}},[r("b-col",{attrs:{cols:"",md:"6",lg:"5"}},[r("div",{staticClass:"switchable__text"},[r("h2",[r("b",{domProps:{innerHTML:t._s(t.headLine)}})]),t._v(" "),t.points?r("p",{staticClass:"lead"},t._l(t.points,(function(e,n){return r("span",{key:e._id},[e.tick?r("span",{staticClass:"color--primary"},[t._v("✓")]):t._e(),t._v("\n              "+t._s(e.text)+"\n              "),n!=t.points.length-1?r("br"):t._e()])})),0):t._e(),t._v(" "),t.tickList?r("div",{staticClass:"text-block"},[r("ul",{staticClass:"list-unstyled ticked-list"},t._l(t.tickList,(function(text){return r("li",{key:text._id},[r("h4",[t._v(t._s(text))])])})),0)]):t._e(),t._v(" "),t.objectList?r("div",t._l(t.objectList,(function(object){return r("div",{key:object._id,staticClass:"text-block"},[r("h5",{staticClass:"font-weight-bold"},[t._v("\n                "+t._s(object.title)+"\n              ")]),t._v(" "),r("p",[t._v(t._s(object.description))])])})),0):t._e(),t._v(" "),t.quote.text?r("hr",{staticClass:"short"}):t._e(),t._v(" "),t.quote.text?r("p",{class:t.quote.classes},[t._v("\n            "+t._s(t.quote.text)+"\n          ")]):t._e(),t._v(" "),t.link&&t.link.url.indexOf("http")>-1?r("a",{attrs:{rel:"keep-params",href:""+t.link.url}},[t._v("\n            "+t._s(t.link.text)+"\n          ")]):t.link?r("NuxtLink",{attrs:{rel:"keep-params",to:"/"+t.link.url}},[t._v("\n            "+t._s(t.link.text)+"\n          ")]):t._e()],1)]),t._v(" "),r("b-col",{attrs:{cols:"",md:"6"}},[r("nuxt-img",{attrs:{alt:"Feature Image",src:"/"+t.image,format:"webp"}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},331:function(t,e,r){"use strict";r.r(e);var n={props:{title:{type:String,default:null,required:!0},classes:{type:String,default:null,required:!0}}},o=r(37),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{class:t.classes},[r("b-container",[r("b-row",[r("b-col",{attrs:{cols:"",md:"12"}},[r("h2",{staticClass:"color--primary font-weight-bold"},[t._v("\n          "+t._s(t.title)+"\n        ")])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},382:function(t,e,r){"use strict";r.r(e);r(4),r(57);var n={data:function(){return{title:"Why is TranZact Free Forever | TranZact",description:"It's probably not what you think..",image:this.$img("/why-free-landing.png",{format:"webp"}),featureFirst:{points:[{tick:!1,text:"We want every Indian SME to use our product without having to think over silly amounts of money. But, just being free will NOT be enough. Our product needs to add immense value to our customers with a commitment towards absolutely delighting them. This maximizes the duration that our customers spend with us and after finding value in the free version, they upgrade to the paid plans at their convenience."}],quote:{classes:"color--primary",text:"“A customer will pay for a feature for a month or two, but will pay for benefits for a lifetime.”"}},featureSecond:{points:[{tick:!1,text:"We have seen the best product companies in the world are known for their amazing customer support."},{tick:!1,text:"This separates the best from the rest. We believe in this and by staying close to our customers we get continuous feedback for our overall development. Software implemention is like a marriage and we understand that its success depends on the both of us, not just YOU!"}],quote:{classes:"color--primary",text:'"It takes months to find a customer, but only seconds to lose one because of bad support.”'}},featureThird:{points:[{tick:!1,text:"We do have paid plans and out of 10,000+ customers using TranZact, over 30% have converted into paid users within 3 months of free usage. However, we are strong advocates of starting out with our free plans, find value in our product and then only upgrade whenever you're ready in terms of people, processes and money. And ya, we don't mind you using our free plan for lifetime :)"}],quote:{classes:"color--primary",text:'"Business is more about creating impact, rather than just money.”'}},featureFourth:{points:[{tick:!1,text:"The core functions of any manufacturing SME are Sales, Purchase, Inventory and Production. Our free tool helps you to take this first step towards digitization by streamlining your Sales, Purchase and Inventory which covers 80% of your core operations. After working with 10,000+ SMEs, we strongly advocate in taking this first step successfully, then only digitize the more complex operations of Production"}],quote:{classes:"color--primary",text:'"If you can offer a valuable product for free, it will naturally spread your product much more rapidly.”'}}}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:image:width",property:"og:image:width",content:"663"},{hid:"og:image:height",property:"og:image:height",content:"819"},{hid:"twitter:title",property:"twitter:title",content:this.title},{hid:"twitter:description",property:"twitter:description",content:this.description},{hid:"twitter:image",property:"twitter:image",content:this.image}]}}},o=r(37),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("CoverMain",{attrs:{"head-line":"Why is TranZact FREE FOREVER?","sub-head-line":"It's probably not what you think..",image:"why-free-landing.png"}}),t._v(" "),r("TitlesSimpleSingle",{attrs:{classes:"elements-title space--xxs text-center",title:"I'm Ritesh, TranZact's founder, I'll help to answer your obvoius questions:"}}),t._v(" "),r("section",{staticClass:"feature-large switchable switchable--switch mb-0"},[r("b-container",[r("b-row",{attrs:{"align-h":"between","align-v":"center"}},[r("b-col",{attrs:{cols:"",lg:"6",md:"6"}},[r("nuxt-img",{attrs:{alt:"Image",src:"why-free-01.png",format:"webp"}})],1),t._v(" "),r("b-col",{attrs:{cols:"",lg:"5",md:"6"}},[r("h4"),t._v(" "),r("h4",[r("strong",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Why are you offering a free product?")])]),t._v(" "),r("h4",[r("strong",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Will I get proper Support?")])]),t._v(" "),r("h4",[r("strong",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Are there any hidden terms and conditions?")])]),t._v(" "),r("h4",[r("strong",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" When will I need to pay and how much?")])]),t._v(" "),r("h4",[r("strong",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" How does TranZact make money?")])]),t._v(" "),r("h4",[r("strong",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Will this free product add value?")])])])],1)],1)],1),t._v(" "),r("TitlesSimpleSingle",{attrs:{classes:"elements-title space--xxs text-center",title:"Why are we offering a free product?"}}),t._v(" "),r("BlocksFeaturesLarge",{attrs:{classes:"mb-md-0",image:"why-free-02.png",points:t.featureFirst.points,quote:t.featureFirst.quote}}),t._v(" "),r("TitlesSimpleSingle",{attrs:{classes:"elements-title space--xxs text-center",title:"Will we provide you proper on-boarding and support?"}}),t._v(" "),r("BlocksFeaturesLarge",{attrs:{classes:"switchable mb-md-0",image:"why-free-03.png",points:t.featureSecond.points,quote:t.featureSecond.quote}}),t._v(" "),r("TitlesSimpleSingle",{attrs:{classes:"elements-title space--xxs text-center",title:"If we are giving a free product, then how do we make money?"}}),t._v(" "),r("BlocksFeaturesLarge",{attrs:{classes:"mb-md-0",image:"why-free-04.png",points:t.featureThird.points,quote:t.featureThird.quote}}),t._v(" "),r("TitlesSimpleSingle",{attrs:{classes:"elements-title space--xxs text-center",title:"Will this free product add value?"}}),t._v(" "),r("BlocksFeaturesLarge",{attrs:{classes:"switchable mb-md-0",image:"why-free-05.png",points:t.featureFourth.points,quote:t.featureFourth.quote}}),t._v(" "),r("BlocksFormSubscribeNewsletter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CoverMain:r(326).default,TitlesSimpleSingle:r(331).default,BlocksFeaturesLarge:r(330).default,BlocksFormSubscribeNewsletter:r(325).default})}}]);