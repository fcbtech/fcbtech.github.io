(window.webpackJsonp=window.webpackJsonp||[]).push([[33,3,5,9,13],{320:function(t,e,n){var content=n(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("1c587328",content,!0,{sourceMap:!1})},321:function(t,e,n){"use strict";n(320)},322:function(t,e,n){var r=n(51),o=n(166),l=n(323),c=n(324),d=r(!1),m=o(l),h=o(c);d.push([t.i,"@media (min-width:768px){.newsletter-background{background-image:url("+m+"),url("+h+")!important;background-repeat:no-repeat!important;background-position-x:right,left!important;background-position-y:center!important;background-color:#fff;background-size:contain!important}}",""]),t.exports=d},323:function(t,e,n){t.exports=n.p+"img/logo-half-right.3ab5408.png"},324:function(t,e,n){t.exports=n.p+"img/logo-half-left.4e1d5ca.png"},325:function(t,e,n){"use strict";n.r(e);var r={},o=(n(321),n(37)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"space--xs"},[n("div",{staticClass:"container"},[n("nuxt-img",{staticClass:"hidden-xs",staticStyle:{"margin-bottom":"-4.5rem","margin-left":"-2.5rem"},attrs:{alt:"Image",src:"Repeat Grid 10.png"}}),t._v(" "),t._m(0)],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"boxed boxed--lg boxed--border box-shadow newsletter-background"},[n("div",{staticClass:"row justify-content-center text-center my-sm-4"},[n("div",{staticClass:"col-lg-8"},[n("h1",{staticClass:"color--primary"},[n("strong",[t._v("Your digital transformation starts here :)")])])])]),t._v(" "),n("div",{staticClass:"row justify-content-center my-sm-4"},[n("div",{staticClass:"col-lg-8"},[n("form",{staticClass:"form-email",attrs:{id:"newsletter_form","data-success":"Thanks for booking a free demo, You will shortly receive a call from us"}},[n("div",{staticClass:"row justify-content-center"},[n("input",{attrs:{id:"request",type:"hidden",name:"request",value:"email_form"}}),t._v(" "),n("div",{staticClass:"col-md-6"},[n("input",{staticClass:"validate-required validate-email",attrs:{type:"email",name:"Email",placeholder:"Email Address"}})]),t._v(" "),n("div",{staticClass:"col-lg-5 col-md-6"},[n("button",{staticClass:"btn btn-lg btn-primary type--uppercase",attrs:{type:"submit"}},[n("span",{staticClass:"btn__text"},[t._v("Get Started for Free")])])])]),t._v(" "),n("div",{staticStyle:{position:"absolute",left:"-5000px"},attrs:{"aria-hidden":"true"}},[n("input",{attrs:{type:"text",name:"b_77142ece814d3cff52058a51f_f300c9cce8",tabindex:"-1",value:""}})])])])])])}],!1,null,null,null);e.default=component.exports},326:function(t,e,n){var content=n(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("43070142",content,!0,{sourceMap:!1})},327:function(t,e,n){"use strict";n(326)},328:function(t,e,n){var r=n(51)(!1);r.push([t.i,'ul.ticked-list{position:relative;list-style:none;margin-left:0;padding-left:1.2em}ul.ticked-list li:before{content:"✓";position:absolute;left:0;color:#05b384;font-weight:700;font-size:larger}',""]),t.exports=r},329:function(t,e,n){"use strict";n.r(e);var r={props:{classes:{type:String,default:"",required:!1},headLine:{type:String,default:null,required:!0},image:{type:String,default:null,required:!0},link:{type:Object,default:function(){return{url:"",text:""}},required:!1},quote:{type:Object,default:function(){return{classes:"",text:""}},required:!1},points:{type:Array,default:function(){return[]},required:!1},tickList:{type:Array,default:function(){return[]},required:!1},objectList:{type:Array,default:function(){return[]},required:!1}}},o=(n(327),n(37)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"feature-large",class:t.classes},[n("b-container",[n("b-row",{attrs:{"align-v":"center","align-h":"between"}},[n("b-col",{attrs:{cols:"",md:"6",lg:"5"}},[n("div",{staticClass:"switchable__text"},[n("h2",[n("b",{domProps:{innerHTML:t._s(t.headLine)}})]),t._v(" "),t.points?n("p",{staticClass:"lead"},t._l(t.points,(function(e,r){return n("span",{key:e._id},[e.tick?n("span",{staticClass:"color--primary"},[t._v("✓")]):t._e(),t._v("\n              "+t._s(e.text)+"\n              "),r!=t.points.length-1?n("br"):t._e()])})),0):t._e(),t._v(" "),t.tickList?n("div",{staticClass:"text-block"},[n("ul",{staticClass:"list-unstyled ticked-list"},t._l(t.tickList,(function(text){return n("li",{key:text._id},[n("h4",[t._v(t._s(text))])])})),0)]):t._e(),t._v(" "),t.objectList?n("div",t._l(t.objectList,(function(object){return n("div",{key:object._id,staticClass:"text-block"},[n("h5",{staticClass:"font-weight-bold"},[t._v("\n                "+t._s(object.title)+"\n              ")]),t._v(" "),n("p",[t._v(t._s(object.description))])])})),0):t._e(),t._v(" "),t.quote.text?n("hr",{staticClass:"short"}):t._e(),t._v(" "),t.quote.text?n("p",{class:t.quote.classes},[t._v("\n            "+t._s(t.quote.text)+"\n          ")]):t._e(),t._v(" "),t.link&&t.link.url.indexOf("http")>-1?n("a",{attrs:{rel:"keep-params",href:""+t.link.url}},[t._v("\n            "+t._s(t.link.text)+"\n          ")]):t.link?n("NuxtLink",{attrs:{rel:"keep-params",to:"/"+t.link.url}},[t._v("\n            "+t._s(t.link.text)+"\n          ")]):t._e()],1)]),t._v(" "),n("b-col",{attrs:{cols:"",md:"6"}},[n("nuxt-img",{attrs:{alt:"Feature Image",src:"/"+t.image,format:"webp"}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},334:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{testimonial:{title:"Trusted by over 10,000+ SME manufacturers",images:["04-1.jpg","15.jpg","02.jpg","14.jpg","07.jpg","05.jpg"]}}}},o=n(37),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"testimonials-1 space--sm"},[n("b-container",[n("b-row",[n("b-col",{staticClass:"text-md-left text-center",attrs:{cols:"",md:"2",order:"first"}},[n("p",{staticClass:"h4 lead"},[t._v("\n          "+t._s(t.testimonial.title)+"\n        ")])]),t._v(" "),n("b-col",{attrs:{cols:"",md:"10",order:"last"}},[n("ul",{staticClass:"list-inline social-list"},t._l(t.testimonial.images,(function(image){return n("li",{key:image,staticClass:"list-inline-item mr-0"},[n("nuxt-img",{staticClass:"image--sm",attrs:{src:"/client/"+image,format:"webp"}})],1)})),0)])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},336:function(t,e,n){"use strict";n.r(e);var r={props:{coverData:{type:Object,required:!0,default:function(){return{headTitle:"TRANZACT FOR FAMILY BUSINESS MANUFACTURERS",mainTitle:"Now it's your turn to think different",description:"The way business happens is now changing—and your business needs to be a part of it. That’s why family owned businesses need to be flexible. Whether you’re running on legacy systems or undergoing a complete digital transformation, we can help.",buttonText:"TRACK YOUR BUSINESS",firstBox:{name:"Chetan Jain, Taurus",testimonial:'"Implementing a software is like a marriage, and I am gald it\'s with TranZact"',link:"customer"},secondBox:{name:"Nilesh Shah, MESCO",testimonial:'"The real time business dashboard is now my best friend"',link:"customer"},thirdBox:{name:"Sagar Bangera, Truefit",testimonial:'"I now have digitally streamlined processes with data-backed decision making"',link:"customer"}}}}}},o=n(37),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"space--sm"},[n("b-container",[n("b-row",{staticClass:"mb-5",attrs:{"align-h":"between","align-v":"center"}},[n("b-col",{attrs:{cols:"",md:"6",lg:"5"}},[n("h4",{staticClass:"mb-0"},[t._v("\n          "+t._s(t.coverData.headTitle)+"\n        ")]),t._v(" "),n("h1",{staticClass:"color--primary h1--large font-weight-bold"},[t._v("\n          "+t._s(t.coverData.mainTitle)+"\n        ")]),t._v(" "),n("p",{staticClass:"lead"},[t._v("\n          "+t._s(t.coverData.description)+"\n        ")]),t._v(" "),n("a",{staticClass:"btn btn-primary type--uppercase mb-5 mb-md-0",attrs:{rel:"keep-params",href:"https://app.letstranzact.com/v2/signup"},on:{click:function(e){return t.signUpRedirect(t.label=t.coverData.buttonText,t.category="cover.")}}},[n("span",{staticClass:"btn__text"},[t._v("\n            "+t._s(t.coverData.buttonText)+"\n          ")])])]),t._v(" "),n("b-col",{attrs:{cols:"",md:"5"}},[n("b-row",[n("b-col",[n("div",{staticClass:"feature feature-1 boxed boxed--border box-shadow bg--primary"},[n("p",[t._v("\n                "+t._s(t.coverData.firstBox.testimonial)+"\n              ")]),t._v(" "),n("h5",[t._v(t._s(t.coverData.firstBox.name))]),t._v(" "),n("NuxtLink",{attrs:{to:"/"+t.coverData.firstBox.link}},[n("u",[t._v("Read more stories")])])],1)])],1),t._v(" "),n("b-row",[n("b-col",[n("div",{staticClass:"feature feature-1 boxed boxed--border box-shadow bg--twitter bg--dark"},[n("p",[t._v("\n                "+t._s(t.coverData.secondBox.testimonial)+"\n              ")]),t._v(" "),n("h5",[t._v(t._s(t.coverData.secondBox.name))]),t._v(" "),n("NuxtLink",{attrs:{to:"/"+t.coverData.secondBox.link}},[n("u",[t._v("Read more stories")])])],1)])],1),t._v(" "),n("b-row",[n("b-col",[n("div",{staticClass:"feature feature--featured feature-1 boxed boxed--border box-shadow bg--secondary"},[n("p",[t._v("\n                "+t._s(t.coverData.thirdBox.testimonial)+"\n              ")]),t._v(" "),n("h5",[t._v(t._s(t.coverData.thirdBox.name))]),t._v(" "),n("NuxtLink",{attrs:{to:"/"+t.coverData.thirdBox.link}},[n("u",[t._v("Read more stories")])])],1)])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},376:function(t,e,n){"use strict";n.r(e);n(4),n(57);var r={data:function(){return{title:"Family Owned Business | SME Manufacturers | TranZact",description:"The way business happens is now changing—and your business needs to be a part of it. That’s why family owned businesses need to be flexible. Whether you’re running on legacy systems or undergoing a complete digital transformation, we can help.",image:this.$img("SME_FamilyOwned_01.png",{format:"webp"}),coverData:{headTitle:"TRANZACT FOR FAMILY BUSINESS MANUFACTURERS",mainTitle:"Now it's your turn to think different",description:"The way business happens is now changing—and your business needs to be a part of it. That’s why family owned businesses need to be flexible. Whether you’re running on legacy systems or undergoing a complete digital transformation, we can help.",buttonText:"TRACK YOUR BUSINESS",firstBox:{name:"Chetan Jain, Taurus",testimonial:'"Implementing a software is like a marriage, and I am gald it\'s with TranZact"',link:"customer"},secondBox:{name:"Nilesh Shah, MESCO",testimonial:'"The real time business dashboard is now my best friend"',link:"customer"},thirdBox:{name:"Sagar Bangera, Truefit",testimonial:'"I now have digitally streamlined processes with data-backed decision making"',link:"customer"}},featureFirst:{headLine:'The TranZact approach to <span class="color--primary">Family owned business</span>',objectList:[{title:"Stepwise implementation for 100% success",description:"We know its hard to change established processes and overcome user inertia overnight. Hence we discovered the two-phased implementation concept which ensures 100% success in transition."},{title:"Specifically designed for Family owned SMEs",description:"Family owned business have unstructured workflows across multiple departments. With TranZact, you are able to structure your entire business process which allows your team to work together on a single platform."},{title:"Easy Integrations with your current system",description:"Established businesses have an experienced team which generally is comfortable with current tools like Tally and excel. TranZact easily integrates with them across all departments for smoother interactions and less miscommunications."}]},featureSecond:{headLine:'We are always there for you - <span class="color--primary">Always</span>',tickList:["Upskill your team with unlimited free online training from TranZact academy","Be self sustainable over time with always evolving knowledge centre","Get lifetime support for you and your team 24x7 - 365 days"]},featureThird:{headLine:'<span class="color--primary">Easy integration</span> with your current systems',tickList:["Single-click setup to integrate with your existing Tally","Automated data transfer to reduce accounting errors","Easily connect with google sheets & excel for customized reports"]}}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:image:width",property:"og:image:width",content:"797"},{hid:"og:image:height",property:"og:image:height",content:"758"},{hid:"twitter:title",property:"twitter:title",content:this.title},{hid:"twitter:description",property:"twitter:description",content:this.description},{hid:"twitter:image",property:"twitter:image",content:this.image}]}}},o=n(37),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("BlocksSMELandingCover",{attrs:{"cover-data":t.coverData}}),t._v(" "),n("BlocksFeaturesLarge",{attrs:{image:"SME_FamilyOwned_011.png","head-line":t.featureFirst.headLine,"object-list":t.featureFirst.objectList}}),t._v(" "),n("BlocksFeaturesLarge",{attrs:{classes:"switchable",image:"SME_FamilyOwned_02.png","head-line":t.featureSecond.headLine,"tick-list":t.featureSecond.tickList}}),t._v(" "),n("BlocksFeaturesLarge",{attrs:{image:"SME_FamilyOwned_03.png","head-line":t.featureThird.headLine,"tick-list":t.featureThird.tickList}}),t._v(" "),n("TestimonialImageSlider"),t._v(" "),n("BlocksFormSubscribeNewsletter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlocksSMELandingCover:n(336).default,BlocksFeaturesLarge:n(329).default,TestimonialImageSlider:n(334).default,BlocksFormSubscribeNewsletter:n(325).default})}}]);