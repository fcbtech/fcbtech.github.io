(window.webpackJsonp=window.webpackJsonp||[]).push([[25,6,7,8,12,14,18],{352:function(e,t,r){var content=r(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(54).default)("1c587328",content,!0,{sourceMap:!1})},353:function(e,t,r){"use strict";r(352)},354:function(e,t,r){var n=r(53),l=r(171),o=r(355),c=r(356),d=n(!1),m=l(o),h=l(c);d.push([e.i,"@media (min-width:768px){.newsletter-background{background-image:url("+m+"),url("+h+")!important;background-repeat:no-repeat!important;background-position-x:right,left!important;background-position-y:center!important;background-color:#fff;background-size:contain!important}}",""]),e.exports=d},355:function(e,t,r){e.exports=r.p+"img/logo-half-right.3ab5408.png"},356:function(e,t,r){e.exports=r.p+"img/logo-half-left.4e1d5ca.png"},357:function(e,t,r){"use strict";r.r(t);var n=r(21),l=(r(60),{data:function(){return{current_path:this.$route.path,email:"",referral:this.$route.query.utm_referral||""}},methods:{submitEmailForm:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.preventDefault(),n={request:"email_form",current_path:t.$route.path,email:t.email,referral:t.referral},r.next=4,t.$axios.$post("/cloudfunction/leads-collection",n).catch((function(e){t.$bvToast.toast(e,{title:"Error",variant:"danger",solid:!0})}));case 4:(data=r.sent).success?(t.current_path=t.$route.path,t.email="",t.referral=t.$route.query.utm_referral||"",t.$bvToast.toast(data.message,{title:"Success",variant:"success",solid:!0})):t.$bvToast.toast(data.message,{title:"Error",variant:"danger",solid:!0});case 6:case"end":return r.stop()}}),r)})))()}}}),o=(r(353),r(38)),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"space--xs"},[r("div",{staticClass:"container"},[r("nuxt-img",{staticClass:"hidden-xs",staticStyle:{"margin-bottom":"-4.5rem","margin-left":"-2.5rem"},attrs:{alt:"Image",src:"Repeat Grid 10.png"}}),e._v(" "),r("div",{staticClass:"boxed boxed--lg boxed--border box-shadow newsletter-background"},[e._m(0),e._v(" "),r("div",{staticClass:"row justify-content-center my-sm-4"},[r("div",{staticClass:"col-lg-8"},[r("form",{staticClass:"form-email",attrs:{id:"newsletter_form"},on:{submit:e.submitEmailForm}},[r("div",{staticClass:"row justify-content-center"},[r("input",{attrs:{id:"request",type:"hidden",name:"request",value:"email_form"}}),e._v(" "),r("div",{staticClass:"col-md-6"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"validate-required validate-email",attrs:{type:"email",name:"Email",placeholder:"Email Address"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),e._m(1)]),e._v(" "),e._m(2)])])])])],1)])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row justify-content-center text-center my-sm-4"},[r("div",{staticClass:"col-lg-8"},[r("h1",{staticClass:"color--primary"},[r("strong",[e._v("Your digital transformation starts here :)")])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-lg-5 col-md-6"},[r("button",{staticClass:"btn btn-lg btn-primary type--uppercase",attrs:{type:"submit"}},[r("span",{staticClass:"btn__text"},[e._v("Get Started for Free")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{position:"absolute",left:"-5000px"},attrs:{"aria-hidden":"true"}},[t("input",{attrs:{type:"text",name:"b_77142ece814d3cff52058a51f_f300c9cce8",tabindex:"-1",value:""}})])}],!1,null,null,null);t.default=component.exports},358:function(e,t,r){"use strict";r.r(t);var n={props:{classes:{type:String,default:"",required:!1},preHeadLine:{type:String,default:"",required:!1},headLine:{type:String,default:null,required:!0},subHeadLine:{type:String,default:null,required:!1},ctaText:{type:String,default:null,required:!1},image:{type:String,default:null,required:!1}}},l=r(38),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"switchable cover",class:""+e.classes},[r("b-container",{staticClass:"pos-vertical-top"},[r("b-row",{attrs:{"align-h":"between","align-v":"center"}},[e.image?r("b-col",{attrs:{cols:"12",lg:"6",md:"4"}},[r("nuxt-img",{attrs:{alt:"image",src:""+e.image,format:"webp"}})],1):e._e(),e._v(" "),r("b-col",{attrs:{cols:"",lg:"6",md:"8"}},[r("div",{staticClass:"switchable__text"},[e.preHeadLine?r("h4",{staticClass:"mb-0"},[e._v("\n            "+e._s(e.preHeadLine)+"\n          ")]):e._e(),e._v(" "),r("h1",{staticClass:"h1--large font-weight-bold color--primary"},[e._v("\n            "+e._s(e.headLine)+"\n          ")]),e._v(" "),e.subHeadLine?r("p",{staticClass:"lead"},[e._v("\n            "+e._s(e.subHeadLine)+"\n          ")]):e._e(),e._v(" "),e.ctaText?r("a",{staticClass:"btn btn-primary type--uppercase",attrs:{rel:"keep-params",href:"https://app.letstranzact.com/v2/signup"},on:{click:function(t){return e.signUpRedirect(e.label=e.ctaText,e.category="cover")}}},[r("span",{staticClass:"btn__text"},[e._v("\n              "+e._s(e.ctaText)+"\n            ")])]):e._e()])])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},363:function(e,t,r){"use strict";r.r(t);var n={props:{title:{type:String,default:null,required:!0},classes:{type:String,default:null,required:!0}}},l=r(38),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{class:e.classes},[r("b-container",[r("b-row",[r("b-col",{attrs:{cols:"",md:"12"}},[r("h2",{staticClass:"color--primary font-weight-bold"},[e._v("\n          "+e._s(e.title)+"\n        ")])])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},364:function(e,t,r){"use strict";r.r(t);r(1),r(3);var n={props:{allTheText:{type:Array,default:function(){return[]}}},render:function(){var e=this.$createElement,t=[];return this.allTheText.forEach((function(r){if(r.tick){var n=[];r.text.forEach((function(t){n.push(e("li",{},[e("span",{class:"color--primary"},[e("strong",{},"✓ ")]),t]))})),t.push(e("ul",{},n))}else t.push(e("p",{class:"lead"},r.text))})),e("div",{},t)}},l=r(38),component=Object(l.a)(n,undefined,undefined,!1,null,null,null);t.default=component.exports},365:function(e,t,r){"use strict";r.r(t);var n={props:{industry:{type:String,required:!0},location:{type:String,required:!0},challenges:{type:Array,required:!0},features:{type:Array,required:!0},challengeDesciptions:{type:Array,required:!0},enterTranzact:{type:Array,required:!0},results:{type:Array,required:!0}}},l=r(38),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{},[r("b-container",[r("b-row",{attrs:{"align-h":"between"}},[r("b-col",{attrs:{cols:"",md:"4",lg:"3"}},[r("div",{staticClass:"boxed boxed--border boxed--rounded bg--primary"},[r("div",{staticClass:"text-block"},[r("h5",[e._v("INDUSTRY")]),e._v(" "),r("p",[e._v("\n              "+e._s(e.industry)+"\n            ")])]),e._v(" "),r("div",{staticClass:"text-block"},[r("h5",[e._v("LOCATION")]),e._v(" "),r("p",[e._v("\n              "+e._s(e.location)+"\n            ")])]),e._v(" "),r("div",{staticClass:"text-block"},[r("h5",[e._v("CHALLENGES")]),e._v(" "),r("ul",e._l(e.challenges,(function(t){return r("li",{key:t._id},[e._v("\n                ▪ "+e._s(t)+"\n              ")])})),0)]),e._v(" "),r("div",{staticClass:"text-block"},[r("h5",[e._v("FAVORITE FEATURES")]),e._v(" "),r("ul",e._l(e.features,(function(t){return r("li",{key:t._id},[e._v("\n                ▪ "+e._s(t)+"\n              ")])})),0)])])]),e._v(" "),r("b-col",{attrs:{cols:"",md:"8",lg:"9"}},[r("h2",{staticClass:"color--primary "},[r("strong",[e._v("CHALLENGE")])]),e._v(" "),e._l(e.challengeDesciptions,(function(t){return r("p",{key:t._id,staticClass:"lead"},[e._v("\n          "+e._s(t)+"\n        ")])})),e._v(" "),r("hr"),e._v(" "),r("h2",[e._v("ENTER "),r("span",{staticClass:"color--primary"},[e._v("TRANZACT")])]),e._v(" "),r("ParagraphAndList",{attrs:{"all-the-text":e.enterTranzact}}),e._v(" "),r("hr"),e._v(" "),r("h2",{staticClass:"color--primary"},[r("strong",[e._v("Results")])]),e._v(" "),r("ParagraphAndList",{attrs:{"all-the-text":e.results}})],2)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ParagraphAndList:r(364).default})},366:function(e,t,r){"use strict";r.r(t);var n={props:{caseStudies:{type:Array,required:!0,default:function(){return[]}}}},l=r(38),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"text-center bg--secondary"},[r("b-container",[r("b-row",e._l(e.caseStudies,(function(t){return r("b-col",{key:t._id,attrs:{cols:"",md:"4"}},[r("div",{staticClass:"feature feature-1"},[r("nuxt-img",{attrs:{alt:t.title,src:t.image,format:"webp"}}),e._v(" "),r("div",{staticClass:"feature__body boxed boxed--lg boxed--border"},[r("h3",[e._v(e._s(t.title))]),e._v(" "),r("p",{staticClass:"lead"},[e._v("\n              "+e._s(t.description)+"\n            ")]),e._v(" "),r("NuxtLink",{attrs:{rel:"keep-params",to:"/"+t.link}},[e._v("\n              Read More\n            ")])],1)],1)])})),1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},400:function(e,t,r){"use strict";r.r(t);r(4),r(55);var n={data:function(){return{title:"Industries | Industrial Machinery and Supplies | TranZact",description:"TranZact oiled the wheels of Cesare Bonetti’s manufacturing process by streamlining their material management",image:this.$img("industries-bonetti-landing.png",{format:"webp"}),caseStudies:[{title:"Mechanical Tools & Supplies",image:"blog-image-01.png",description:"Mesco Springs swears by TranZact as the platform streamlined their entire business.",link:"industries-mechanical-tools-and-supplies"},{title:"Electrical & Electronics",image:"blog-image-02.png",description:"Atomberg Technologies saw their multi-location inventory management transform with TranZact.",link:"industries-electrical-and-electronics"},{title:"Packaging Machines & Materials",image:"blog-image-03.png",description:"Handling multi-level BOM became a breeze for Taurus Packaging with TranZact",link:"industries-packaging-machines-and-materials"}],challenges:["Stringent regulatory requirements","Monitoring transactions","Timely accounting & bookkeeping"],features:["Customer relationship management","Supply chain management","BI & Reporting"],challengeDesciptions:["Founded in 1905, Cesare Bonetti has been producing high-quality valves for steam and high-pressure applications for over 100 years. While maintaining optimized level of inventory and effective purchase schedules are of utmost importance, Cesare Bonetti found it extremely challenging to perform these two tasks and smoothen their manufacturing process. In such a situation, our client needed a solution that would optimize operations, reduce cost, and help them plan purchasing activities and delivery schedules."],enterTranzact:[{tick:!1,text:"Cesare Bonetti then used our cloud-based Material Requirement Planning (MRP) Engine on TranZact to bring about a huge transformation in their manufacturing and material purchasing processes, from start to finish. Material requirement planning has been in use for over three decades now, but we revolutionized the methodology to a huge extent, helping Cesare Bonetti keep pace with recent times."},{tick:!1,text:"Our MRP solution uses information from the bill of materials (a list of all the raw materials, subassemblies and other components needed to produce a product, along with their quantities), inventory data and the master production schedule to determine WHAT kind of materials are required and WHEN they will be needed during the production process. Our team wanted to ensure that all raw materials and components are available when needed in the production process and that manufacturing takes place on schedule in an optimized manner."}],results:[{tick:!1,text:"Our client Cesare Bonetti could materialize remarkable results after they implemented our cloud-based MRP solution. Their overall manufacturing process underwent a significant change as production managers were able to manage inventory and optimize the process to a great extent."},{tick:!1,text:"After using our MRP solution, Cesare Bonnetti could ensure that materials are available for production and final products are available for delivery to customers on time. By knowing how much of the finished goods will be available in the future, our client could plan their purchasing activities, delivery schedules, and ultimately their sales. TranZact’s MRP also enabled our client to maintain the lowest possible material and product levels in store to preserve capital and use working capital more efficiently. By preventing their cash from being stuck in inventory, our client was able to maintain their liquidity and allocate the funds to a range of other activities, like expanding their operations, investing in new production lines or organizing additional marketing campaigns."}]}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:image:width",property:"og:image:width",content:"797"},{hid:"og:image:height",property:"og:image:height",content:"758"},{hid:"twitter:title",property:"twitter:title",content:this.title},{hid:"twitter:description",property:"twitter:description",content:this.description},{hid:"twitter:image",property:"twitter:image",content:this.image}]}}},l=r(38),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("CoverMain",{attrs:{classes:"space--sm unpad--top","head-line":"Streamlining Cesare Bonetti’s manufacturing process by improved Material Management",image:"industries-bonetti-landing-01.png"}}),e._v(" "),r("BlocksIndustriesMainBody",{attrs:{industry:"Industrial",location:"Igatpuri, Maharashtra",challenges:e.challenges,features:e.features,"challenge-desciptions":e.challengeDesciptions,"enter-tranzact":e.enterTranzact,results:e.results}}),e._v(" "),r("TitlesSimpleSingle",{attrs:{classes:"text-center bg--secondary",title:"OTHER CASE STUDY"}}),e._v(" "),r("BlocksIndustriesCaseStudy",{attrs:{"case-studies":e.caseStudies}}),e._v(" "),r("BlocksFormSubscribeNewsletter")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CoverMain:r(358).default,BlocksIndustriesMainBody:r(365).default,TitlesSimpleSingle:r(363).default,BlocksIndustriesCaseStudy:r(366).default,BlocksFormSubscribeNewsletter:r(357).default})}}]);