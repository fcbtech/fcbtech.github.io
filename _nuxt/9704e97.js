(window.webpackJsonp=window.webpackJsonp||[]).push([[35,3,6,10,15],{352:function(t,e,r){var content=r(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(54).default)("1c587328",content,!0,{sourceMap:!1})},353:function(t,e,r){"use strict";r(352)},354:function(t,e,r){var n=r(53),o=r(171),l=r(355),c=r(356),d=n(!1),m=o(l),h=o(c);d.push([t.i,"@media (min-width:768px){.newsletter-background{background-image:url("+m+"),url("+h+")!important;background-repeat:no-repeat!important;background-position-x:right,left!important;background-position-y:center!important;background-color:#fff;background-size:contain!important}}",""]),t.exports=d},355:function(t,e,r){t.exports=r.p+"img/logo-half-right.3ab5408.png"},356:function(t,e,r){t.exports=r.p+"img/logo-half-left.4e1d5ca.png"},357:function(t,e,r){"use strict";r.r(e);var n=r(21),o=(r(60),{data:function(){return{current_path:this.$route.path,email:"",referral:this.$route.query.utm_referral||""}},methods:{submitEmailForm:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),n={request:"email_form",current_path:e.$route.path,email:e.email,referral:e.referral},r.next=4,e.$axios.$post("/cloudfunction/leads-collection",n).catch((function(t){e.$bvToast.toast(t,{title:"Error",variant:"danger",solid:!0})}));case 4:(data=r.sent).success?(e.current_path=e.$route.path,e.email="",e.referral=e.$route.query.utm_referral||"",e.$bvToast.toast(data.message,{title:"Success",variant:"success",solid:!0})):e.$bvToast.toast(data.message,{title:"Error",variant:"danger",solid:!0});case 6:case"end":return r.stop()}}),r)})))()}}}),l=(r(353),r(38)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"space--xs"},[r("div",{staticClass:"container"},[r("nuxt-img",{staticClass:"hidden-xs",staticStyle:{"margin-bottom":"-4.5rem","margin-left":"-2.5rem"},attrs:{alt:"Image",src:"Repeat Grid 10.png"}}),t._v(" "),r("div",{staticClass:"boxed boxed--lg boxed--border box-shadow newsletter-background"},[t._m(0),t._v(" "),r("div",{staticClass:"row justify-content-center my-sm-4"},[r("div",{staticClass:"col-lg-8"},[r("form",{staticClass:"form-email",attrs:{id:"newsletter_form"},on:{submit:t.submitEmailForm}},[r("div",{staticClass:"row justify-content-center"},[r("input",{attrs:{id:"request",type:"hidden",name:"request",value:"email_form"}}),t._v(" "),r("div",{staticClass:"col-md-6"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"validate-required validate-email",attrs:{type:"email",name:"Email",placeholder:"Email Address"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),t._m(1)]),t._v(" "),t._m(2)])])])])],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row justify-content-center text-center my-sm-4"},[r("div",{staticClass:"col-lg-8"},[r("h1",{staticClass:"color--primary"},[r("strong",[t._v("Your digital transformation starts here :)")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-5 col-md-6"},[r("button",{staticClass:"btn btn-lg btn-primary type--uppercase",attrs:{type:"submit"}},[r("span",{staticClass:"btn__text"},[t._v("Get Started for Free")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{position:"absolute",left:"-5000px"},attrs:{"aria-hidden":"true"}},[e("input",{attrs:{type:"text",name:"b_77142ece814d3cff52058a51f_f300c9cce8",tabindex:"-1",value:""}})])}],!1,null,null,null);e.default=component.exports},359:function(t,e,r){var content=r(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(54).default)("43070142",content,!0,{sourceMap:!1})},360:function(t,e,r){"use strict";r(359)},361:function(t,e,r){var n=r(53)(!1);n.push([t.i,'ul.ticked-list{position:relative;list-style:none;margin-left:0;padding-left:1.2em}ul.ticked-list li:before{content:"✓";position:absolute;left:0;color:#05b384;font-weight:700;font-size:larger}',""]),t.exports=n},362:function(t,e,r){"use strict";r.r(e);var n={props:{classes:{type:String,default:"",required:!1},headLine:{type:String,default:null,required:!1},image:{type:String,default:null,required:!0},link:{type:Object,default:function(){return{url:"",text:""}},required:!1},quote:{type:Object,default:function(){return{classes:"",text:""}},required:!1},points:{type:Array,default:function(){return[]},required:!1},tickList:{type:Array,default:function(){return[]},required:!1},objectList:{type:Array,default:function(){return[]},required:!1}}},o=(r(360),r(38)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"feature-large",class:t.classes},[r("b-container",[r("b-row",{attrs:{"align-v":"center","align-h":"between"}},[r("b-col",{attrs:{cols:"",md:"6",lg:"5"}},[r("div",{staticClass:"switchable__text"},[t.headLine?r("h2",[r("b",{domProps:{innerHTML:t._s(t.headLine)}})]):t._e(),t._v(" "),t.points?r("p",{staticClass:"lead"},t._l(t.points,(function(e,n){return r("span",{key:e._id},[e.tick?r("span",{staticClass:"color--primary"},[t._v("✓")]):t._e(),t._v("\n              "+t._s(e.text)+"\n              "),n!=t.points.length-1?r("br"):t._e()])})),0):t._e(),t._v(" "),t.tickList?r("div",{staticClass:"text-block"},[r("ul",{staticClass:"list-unstyled ticked-list"},t._l(t.tickList,(function(text){return r("li",{key:text._id},[r("h4",[t._v(t._s(text))])])})),0)]):t._e(),t._v(" "),t.objectList?r("div",t._l(t.objectList,(function(object){return r("div",{key:object._id,staticClass:"text-block"},[r("h5",{staticClass:"font-weight-bold"},[t._v("\n                "+t._s(object.title)+"\n              ")]),t._v(" "),r("p",[t._v(t._s(object.description))])])})),0):t._e(),t._v(" "),t.quote.text?r("hr",{staticClass:"short"}):t._e(),t._v(" "),t.quote.text?r("p",{class:t.quote.classes},[t._v("\n            "+t._s(t.quote.text)+"\n          ")]):t._e(),t._v(" "),t.link&&t.link.url.indexOf("http")>-1?r("a",{attrs:{rel:"keep-params",href:""+t.link.url}},[t._v("\n            "+t._s(t.link.text)+"\n          ")]):t.link?r("NuxtLink",{attrs:{rel:"keep-params",to:"/"+t.link.url}},[t._v("\n            "+t._s(t.link.text)+"\n          ")]):t._e()],1)]),t._v(" "),r("b-col",{attrs:{cols:"",md:"6"}},[r("nuxt-img",{attrs:{alt:"Feature Image",src:"/"+t.image,format:"webp"}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},367:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{testimonial:{title:"Trusted by over 10,000+ SME manufacturers",images:["04-1.jpg","15.jpg","02.jpg","14.jpg","07.jpg","05.jpg"]}}}},o=r(38),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"testimonials-1 space--sm"},[r("b-container",[r("b-row",[r("b-col",{staticClass:"text-md-left text-center",attrs:{cols:"",md:"2",order:"first"}},[r("p",{staticClass:"h4 lead"},[t._v("\n          "+t._s(t.testimonial.title)+"\n        ")])]),t._v(" "),r("b-col",{attrs:{cols:"",md:"10",order:"last"}},[r("ul",{staticClass:"list-inline social-list"},t._l(t.testimonial.images,(function(image){return r("li",{key:image,staticClass:"list-inline-item mr-0"},[r("nuxt-img",{staticClass:"image--sm",attrs:{src:"/client/"+image,format:"webp"}})],1)})),0)])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},369:function(t,e,r){"use strict";r.r(e);var n={props:{coverData:{type:Object,required:!0,default:function(){return{headTitle:"TRANZACT FOR FAMILY BUSINESS MANUFACTURERS",mainTitle:"Now it's your turn to think different",description:"The way business happens is now changing—and your business needs to be a part of it. That’s why family owned businesses need to be flexible. Whether you’re running on legacy systems or undergoing a complete digital transformation, we can help.",buttonText:"TRACK YOUR BUSINESS",firstBox:{name:"Chetan Jain, Taurus",testimonial:'"Implementing a software is like a marriage, and I am gald it\'s with TranZact"',link:"customer"},secondBox:{name:"Nilesh Shah, MESCO",testimonial:'"The real time business dashboard is now my best friend"',link:"customer"},thirdBox:{name:"Sagar Bangera, Truefit",testimonial:'"I now have digitally streamlined processes with data-backed decision making"',link:"customer"}}}}}},o=r(38),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"space--sm"},[r("b-container",[r("b-row",{staticClass:"mb-5",attrs:{"align-h":"between","align-v":"center"}},[r("b-col",{attrs:{cols:"",md:"6",lg:"5"}},[r("h4",{staticClass:"mb-0"},[t._v("\n          "+t._s(t.coverData.headTitle)+"\n        ")]),t._v(" "),r("h1",{staticClass:"color--primary h1--large font-weight-bold"},[t._v("\n          "+t._s(t.coverData.mainTitle)+"\n        ")]),t._v(" "),r("p",{staticClass:"lead"},[t._v("\n          "+t._s(t.coverData.description)+"\n        ")]),t._v(" "),r("a",{staticClass:"btn btn-primary type--uppercase mb-5 mb-md-0",attrs:{rel:"keep-params",href:"https://app.letstranzact.com/v2/signup"},on:{click:function(e){return t.signUpRedirect(t.label=t.coverData.buttonText,t.category="cover.")}}},[r("span",{staticClass:"btn__text"},[t._v("\n            "+t._s(t.coverData.buttonText)+"\n          ")])])]),t._v(" "),r("b-col",{attrs:{cols:"",md:"5"}},[r("b-row",[r("b-col",[r("div",{staticClass:"feature feature-1 boxed boxed--border box-shadow bg--primary"},[r("p",[t._v("\n                "+t._s(t.coverData.firstBox.testimonial)+"\n              ")]),t._v(" "),r("h5",[t._v(t._s(t.coverData.firstBox.name))]),t._v(" "),r("NuxtLink",{attrs:{to:"/"+t.coverData.firstBox.link}},[r("u",[t._v("Read more stories")])])],1)])],1),t._v(" "),r("b-row",[r("b-col",[r("div",{staticClass:"feature feature-1 boxed boxed--border box-shadow bg--twitter bg--dark"},[r("p",[t._v("\n                "+t._s(t.coverData.secondBox.testimonial)+"\n              ")]),t._v(" "),r("h5",[t._v(t._s(t.coverData.secondBox.name))]),t._v(" "),r("NuxtLink",{attrs:{to:"/"+t.coverData.secondBox.link}},[r("u",[t._v("Read more stories")])])],1)])],1),t._v(" "),r("b-row",[r("b-col",[r("div",{staticClass:"feature feature--featured feature-1 boxed boxed--border box-shadow bg--secondary"},[r("p",[t._v("\n                "+t._s(t.coverData.thirdBox.testimonial)+"\n              ")]),t._v(" "),r("h5",[t._v(t._s(t.coverData.thirdBox.name))]),t._v(" "),r("NuxtLink",{attrs:{to:"/"+t.coverData.thirdBox.link}},[r("u",[t._v("Read more stories")])])],1)])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},410:function(t,e,r){"use strict";r.r(e);r(4),r(55);var n={data:function(){return{title:"Family Owned Business | SME Manufacturers | TranZact",description:"The way business happens is now changing—and your business needs to be a part of it. That’s why family owned businesses need to be flexible. Whether you’re running on legacy systems or undergoing a complete digital transformation, we can help.",image:this.$img("SME_FamilyOwned_01.png",{format:"webp"}),coverData:{headTitle:"TRANZACT FOR FAMILY BUSINESS MANUFACTURERS",mainTitle:"Now it's your turn to think different",description:"The way business happens is now changing—and your business needs to be a part of it. That’s why family owned businesses need to be flexible. Whether you’re running on legacy systems or undergoing a complete digital transformation, we can help.",buttonText:"TRACK YOUR BUSINESS",firstBox:{name:"Chetan Jain, Taurus",testimonial:'"Implementing a software is like a marriage, and I am gald it\'s with TranZact"',link:"customer"},secondBox:{name:"Nilesh Shah, MESCO",testimonial:'"The real time business dashboard is now my best friend"',link:"customer"},thirdBox:{name:"Sagar Bangera, Truefit",testimonial:'"I now have digitally streamlined processes with data-backed decision making"',link:"customer"}},featureFirst:{headLine:'The TranZact approach to <span class="color--primary">Family owned business</span>',objectList:[{title:"Stepwise implementation for 100% success",description:"We know its hard to change established processes and overcome user inertia overnight. Hence we discovered the two-phased implementation concept which ensures 100% success in transition."},{title:"Specifically designed for Family owned SMEs",description:"Family owned business have unstructured workflows across multiple departments. With TranZact, you are able to structure your entire business process which allows your team to work together on a single platform."},{title:"Easy Integrations with your current system",description:"Established businesses have an experienced team which generally is comfortable with current tools like Tally and excel. TranZact easily integrates with them across all departments for smoother interactions and less miscommunications."}]},featureSecond:{headLine:'We are always there for you - <span class="color--primary">Always</span>',tickList:["Upskill your team with unlimited free online training from TranZact academy","Be self sustainable over time with always evolving knowledge centre","Get lifetime support for you and your team 24x7 - 365 days"]},featureThird:{headLine:'<span class="color--primary">Easy integration</span> with your current systems',tickList:["Single-click setup to integrate with your existing Tally","Automated data transfer to reduce accounting errors","Easily connect with google sheets & excel for customized reports"]}}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:image:width",property:"og:image:width",content:"797"},{hid:"og:image:height",property:"og:image:height",content:"758"},{hid:"twitter:title",property:"twitter:title",content:this.title},{hid:"twitter:description",property:"twitter:description",content:this.description},{hid:"twitter:image",property:"twitter:image",content:this.image}]}}},o=r(38),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("BlocksSMELandingCover",{attrs:{"cover-data":t.coverData}}),t._v(" "),r("BlocksFeaturesLarge",{attrs:{image:"SME_FamilyOwned_011.png","head-line":t.featureFirst.headLine,"object-list":t.featureFirst.objectList}}),t._v(" "),r("BlocksFeaturesLarge",{attrs:{classes:"switchable",image:"SME_FamilyOwned_02.png","head-line":t.featureSecond.headLine,"tick-list":t.featureSecond.tickList}}),t._v(" "),r("BlocksFeaturesLarge",{attrs:{image:"SME_FamilyOwned_03.png","head-line":t.featureThird.headLine,"tick-list":t.featureThird.tickList}}),t._v(" "),r("TestimonialImageSlider"),t._v(" "),r("BlocksFormSubscribeNewsletter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlocksSMELandingCover:r(369).default,BlocksFeaturesLarge:r(362).default,TestimonialImageSlider:r(367).default,BlocksFormSubscribeNewsletter:r(357).default})}}]);