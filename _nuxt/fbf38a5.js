(window.webpackJsonp=window.webpackJsonp||[]).push([[25,5,6,7,12,16],{298:function(t,e,r){var content=r(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(52).default)("1c587328",content,!0,{sourceMap:!1})},299:function(t,e,r){"use strict";r(298)},300:function(t,e,r){var n=r(51),o=r(160),l=r(301),c=r(302),d=n(!1),m=o(l),h=o(c);d.push([t.i,"@media (min-width:768px){.newsletter-background{background-image:url("+m+"),url("+h+")!important;background-repeat:no-repeat!important;background-position-x:right,left!important;background-position-y:center!important;background-color:#fff;background-size:contain!important}}",""]),t.exports=d},301:function(t,e,r){t.exports=r.p+"img/logo-half-right.3ab5408.png"},302:function(t,e,r){t.exports=r.p+"img/logo-half-left.4e1d5ca.png"},303:function(t,e,r){"use strict";r.r(e);var n={},o=(r(299),r(35)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"space--xs"},[r("div",{staticClass:"container"},[r("nuxt-img",{staticClass:"hidden-xs",staticStyle:{"margin-bottom":"-4.5rem","margin-left":"-2.5rem"},attrs:{alt:"Image",src:"Repeat Grid 10.png"}}),t._v(" "),t._m(0)],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"boxed boxed--lg boxed--border box-shadow newsletter-background"},[r("div",{staticClass:"row justify-content-center text-center my-sm-4"},[r("div",{staticClass:"col-lg-8"},[r("h1",{staticClass:"color--primary"},[r("strong",[t._v("Your digital transformation starts here :)")])])])]),t._v(" "),r("div",{staticClass:"row justify-content-center my-sm-4"},[r("div",{staticClass:"col-lg-8"},[r("form",{staticClass:"form-email",attrs:{id:"newsletter_form","data-success":"Thanks for booking a free demo, You will shortly receive a call from us"}},[r("div",{staticClass:"row justify-content-center"},[r("input",{attrs:{id:"request",type:"hidden",name:"request",value:"email_form"}}),t._v(" "),r("div",{staticClass:"col-md-6"},[r("input",{staticClass:"validate-required validate-email",attrs:{type:"email",name:"Email",placeholder:"Email Address"}})]),t._v(" "),r("div",{staticClass:"col-lg-5 col-md-6"},[r("button",{staticClass:"btn btn-lg btn-primary type--uppercase",attrs:{type:"submit"}},[r("span",{staticClass:"btn__text"},[t._v("Get Started for Free")])])])]),t._v(" "),r("div",{staticStyle:{position:"absolute",left:"-5000px"},attrs:{"aria-hidden":"true"}},[r("input",{attrs:{type:"text",name:"b_77142ece814d3cff52058a51f_f300c9cce8",tabindex:"-1",value:""}})])])])])])}],!1,null,null,null);e.default=component.exports},308:function(t,e,r){"use strict";r.r(e);var n={props:{title:{type:String,default:null,required:!0},classes:{type:String,default:null,required:!0}}},o=r(35),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{class:t.classes},[r("b-container",[r("b-row",[r("b-col",{attrs:{cols:"",md:"12"}},[r("h2",{staticClass:"color--primary font-weight-bold"},[t._v("\n          "+t._s(t.title)+"\n        ")])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},309:function(t,e,r){"use strict";r.r(e);r(1),r(3);var n={props:{allTheText:{type:Array,default:function(){return[]}}},render:function(){var t=this.$createElement,e=[];return this.allTheText.forEach((function(r){if(r.tick){var n=[];r.text.forEach((function(e){n.push(t("li",{},[t("span",{class:"color--primary"},[t("strong",{},"✓ ")]),e]))})),e.push(t("ul",{},n))}else e.push(t("p",{class:"lead"},r.text))})),t("div",{},e)}},o=r(35),component=Object(o.a)(n,undefined,undefined,!1,null,null,null);e.default=component.exports},310:function(t,e,r){"use strict";r.r(e);var n={props:{industry:{type:String,required:!0},location:{type:String,required:!0},challenges:{type:Array,required:!0},features:{type:Array,required:!0},challengeDesciptions:{type:Array,required:!0},enterTranzact:{type:Array,required:!0},results:{type:Array,required:!0}}},o=r(35),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{},[r("b-container",[r("b-row",{attrs:{"align-h":"between"}},[r("b-col",{attrs:{cols:"",md:"4",lg:"3"}},[r("div",{staticClass:"boxed boxed--border boxed--rounded bg--primary"},[r("div",{staticClass:"text-block"},[r("h5",[t._v("INDUSTRY")]),t._v(" "),r("p",[t._v("\n              "+t._s(t.industry)+"\n            ")])]),t._v(" "),r("div",{staticClass:"text-block"},[r("h5",[t._v("LOCATION")]),t._v(" "),r("p",[t._v("\n              "+t._s(t.location)+"\n            ")])]),t._v(" "),r("div",{staticClass:"text-block"},[r("h5",[t._v("CHALLENGES")]),t._v(" "),r("ul",t._l(t.challenges,(function(e){return r("li",{key:e._id},[t._v("\n                ▪ "+t._s(e)+"\n              ")])})),0)]),t._v(" "),r("div",{staticClass:"text-block"},[r("h5",[t._v("FAVORITE FEATURES")]),t._v(" "),r("ul",t._l(t.features,(function(e){return r("li",{key:e._id},[t._v("\n                ▪ "+t._s(e)+"\n              ")])})),0)])])]),t._v(" "),r("b-col",{attrs:{cols:"",md:"8",lg:"9"}},[r("h2",{staticClass:"color--primary "},[r("strong",[t._v("CHALLENGE")])]),t._v(" "),t._l(t.challengeDesciptions,(function(e){return r("p",{key:e._id,staticClass:"lead"},[t._v("\n          "+t._s(e)+"\n        ")])})),t._v(" "),r("hr"),t._v(" "),r("h2",[t._v("ENTER "),r("span",{staticClass:"color--primary"},[t._v("TRANZACT")])]),t._v(" "),r("ParagraphAndList",{attrs:{"all-the-text":t.enterTranzact}}),t._v(" "),r("hr"),t._v(" "),r("h2",{staticClass:"color--primary"},[r("strong",[t._v("Results")])]),t._v(" "),r("ParagraphAndList",{attrs:{"all-the-text":t.results}})],2)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ParagraphAndList:r(309).default})},311:function(t,e,r){"use strict";r.r(e);var n={props:{caseStudies:{type:Array,required:!0,default:function(){return[]}}}},o=r(35),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"text-center bg--secondary"},[r("b-container",[r("b-row",t._l(t.caseStudies,(function(e){return r("b-col",{key:e._id,attrs:{cols:"",md:"4"}},[r("div",{staticClass:"feature feature-1"},[r("nuxt-img",{attrs:{alt:e.title,src:e.image,format:"webp"}}),t._v(" "),r("div",{staticClass:"feature__body boxed boxed--lg boxed--border"},[r("h3",[t._v(t._s(e.title))]),t._v(" "),r("p",{staticClass:"lead"},[t._v("\n              "+t._s(e.description)+"\n            ")]),t._v(" "),r("NuxtLink",{attrs:{rel:"keep-params",to:e.link}},[t._v("\n              Read More\n            ")])],1)],1)])})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},334:function(t,e,r){"use strict";r.r(e);r(4),r(63);var n={data:function(){return{title:"Industries | Others - Chemical | TranZact",description:"Setco Chemicals followed batch manufacturing, with TranZact, they were able to manage their inventory more efficiently.",image:this.$img("industries-setco-landing.png",{format:"webp"}),caseStudies:[{title:"Industrial Machinery & Supplies",image:"blog-image-01.png",description:"TranZact oiled the wheels of Cesare Bonetti’s manufacturing process by streamlining their material management.",link:"industries-industrial-machinery-and-supplies"},{title:"Mechanical Tools & Supplies",image:"blog-image-02.png",description:"Mesco Springs swears by TranZact as the platform streamlined their entire business.",link:"industries-mechanical-tools-and-supplies"},{title:"Electrical & Electronics",image:"blog-image-03.png",description:"Atomberg Technologies saw their multi-location inventory management transform with TranZact.",link:"industries-electrical-and-electronics"}],challenges:["Batch production management","Stringent regulatory norms","Maintaining factory-level visibility"],features:["Production tracking","Inventory management","Barcoding system"],challengeDesciptions:["Ever since their inception in 1994, Setco Chemicals has been maintaining two manufacturing plants for printing inks, resins, paints, and adhesives. Handling the nitty-gritty of batch production of these items and adhering to regulatory and customer norms are challenges that have always loomed over the chemical manufacturer. All that our trustful client needed was an integrated SaaS solution to overcome their production and raw material worries right at the factory level."],enterTranzact:[{tick:!1,text:"Setco Chemicals then leveraged our cloud-based enterprise solutions on TranZact to bring about a huge transformation in their production and inventory management processes, end to end. What clicked them the most about our solution is its advanced barcoding system, which would streamline their batch production process and handle raw materials in an easy, accurate, and efficient manner."},{tick:!1,text:"Under our system, a unique product or an assembly of identical products exiting the same production site represents the batch numbers. They are usually identified by barcodes put on the products. The batch is marked with a supplier number or our clients’ own company numbers. We decided to sync Setco Chemicals’ existing database with TranZact and enable them to track their production and inventory status on their factory premises in real-time. Our team sought to usher in a double-entry management approach to handling lots and maintaining stocks that would empower our clients with advanced traceability. We wanted to ensure that our client is able to capture the correct product data and handle them in a universally compliant manner."}],results:[{tick:!1,text:"It didn’t take long for Setco Chemicals to achieve remarkable results after they implemented our cloud-based solution. Their overall manufacturing process underwent a significant change as production managers on both sites produced accurate reports using precise production data. Our client witnessed significant saving in time and cost as work got done faster and product recalls reduced. The barcoding system improved traceability by helping our clients to promptly detect issues related to quality, warranty, or safety while minimizing gaps in production. Our solutions enabled Setco Chemicals to adhere to regulatory requirements and maintain required secrecy of their chemical formulations in this highly knowledge-driven and competitive industry."}]}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:image:width",property:"og:image:width",content:"797"},{hid:"og:image:height",property:"og:image:height",content:"758"},{hid:"twitter:title",property:"twitter:title",content:this.title},{hid:"twitter:description",property:"twitter:description",content:this.description},{hid:"twitter:image",property:"twitter:image",content:this.image}]}}},o=r(35),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"switchable cover space--sm unpad--top"},[r("b-container",{staticClass:"pos-vertical-top"},[r("b-row",{attrs:{"align-h":"between","align-v":"center"}},[r("b-col",{staticClass:"mt-4 mt-md-0",attrs:{cols:"",lg:"6",md:"4"}},[r("nuxt-img",{attrs:{alt:"image",src:"industries-setco-landing.png",format:"webp"}})],1),t._v(" "),r("b-col",{attrs:{cols:"",lg:"6",md:"8"}},[r("div",{staticClass:"switchable__text"},[r("h1",{staticClass:"h1--large color--primary"},[r("strong",[t._v("Setco Chemicals followed batch manufacturing, with TranZact, they were able to manage their inventory more efficiently.")])])])])],1)],1)],1),t._v(" "),r("BlocksIndustriesMainBody",{attrs:{industry:"Chemical & Polymer",location:"Waliv, Maharashtra",challenges:t.challenges,features:t.features,"challenge-desciptions":t.challengeDesciptions,"enter-tranzact":t.enterTranzact,results:t.results}}),t._v(" "),r("TitlesSimpleSingle",{attrs:{classes:"text-center bg--secondary",title:"OTHER CASE STUDY"}}),t._v(" "),r("BlocksIndustriesCaseStudy",{attrs:{"case-studies":t.caseStudies}}),t._v(" "),r("BlocksFormSubscribeNewsletter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlocksIndustriesMainBody:r(310).default,TitlesSimpleSingle:r(308).default,BlocksIndustriesCaseStudy:r(311).default,BlocksFormSubscribeNewsletter:r(303).default})}}]);