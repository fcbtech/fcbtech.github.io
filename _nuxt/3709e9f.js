(window.webpackJsonp=window.webpackJsonp||[]).push([[25,6,7,12,16],{308:function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String,default:null,required:!0},classes:{type:String,default:null,required:!0}}},o=n(35),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{class:t.classes},[n("b-container",[n("b-row",[n("b-col",{attrs:{cols:"",md:"12"}},[n("h2",{staticClass:"color--primary font-weight-bold"},[t._v("\n          "+t._s(t.title)+"\n        ")])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},309:function(t,e,n){"use strict";n.r(e);n(1),n(3);var r={props:{allTheText:{type:Array,default:function(){return[]}}},render:function(){var t=this.$createElement,e=[];return this.allTheText.forEach((function(n){if(n.tick){var r=[];n.text.forEach((function(e){r.push(t("li",{},[t("span",{class:"color--primary"},[t("strong",{},"✓ ")]),e]))})),e.push(t("ul",{},r))}else e.push(t("p",{class:"lead"},n.text))})),t("div",{},e)}},o=n(35),component=Object(o.a)(r,undefined,undefined,!1,null,null,null);e.default=component.exports},310:function(t,e,n){"use strict";n.r(e);var r={props:{industry:{type:String,required:!0},location:{type:String,required:!0},challenges:{type:Array,required:!0},features:{type:Array,required:!0},challengeDesciptions:{type:Array,required:!0},enterTranzact:{type:Array,required:!0},results:{type:Array,required:!0}}},o=n(35),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{},[n("b-container",[n("b-row",{attrs:{"align-h":"between"}},[n("b-col",{attrs:{cols:"",md:"4",lg:"3"}},[n("div",{staticClass:"boxed boxed--border boxed--rounded bg--primary"},[n("div",{staticClass:"text-block"},[n("h5",[t._v("INDUSTRY")]),t._v(" "),n("p",[t._v("\n              "+t._s(t.industry)+"\n            ")])]),t._v(" "),n("div",{staticClass:"text-block"},[n("h5",[t._v("LOCATION")]),t._v(" "),n("p",[t._v("\n              "+t._s(t.location)+"\n            ")])]),t._v(" "),n("div",{staticClass:"text-block"},[n("h5",[t._v("CHALLENGES")]),t._v(" "),n("ul",t._l(t.challenges,(function(e){return n("li",{key:e._id},[t._v("\n                ▪ "+t._s(e)+"\n              ")])})),0)]),t._v(" "),n("div",{staticClass:"text-block"},[n("h5",[t._v("FAVORITE FEATURES")]),t._v(" "),n("ul",t._l(t.features,(function(e){return n("li",{key:e._id},[t._v("\n                ▪ "+t._s(e)+"\n              ")])})),0)])])]),t._v(" "),n("b-col",{attrs:{cols:"",md:"8",lg:"9"}},[n("h2",{staticClass:"color--primary "},[n("strong",[t._v("CHALLENGE")])]),t._v(" "),t._l(t.challengeDesciptions,(function(e){return n("p",{key:e._id,staticClass:"lead"},[t._v("\n          "+t._s(e)+"\n        ")])})),t._v(" "),n("hr"),t._v(" "),n("h2",[t._v("ENTER "),n("span",{staticClass:"color--primary"},[t._v("TRANZACT")])]),t._v(" "),n("ParagraphAndList",{attrs:{"all-the-text":t.enterTranzact}}),t._v(" "),n("hr"),t._v(" "),n("h2",{staticClass:"color--primary"},[n("strong",[t._v("Results")])]),t._v(" "),n("ParagraphAndList",{attrs:{"all-the-text":t.results}})],2)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ParagraphAndList:n(309).default})},311:function(t,e,n){"use strict";n.r(e);var r={props:{caseStudies:{type:Array,required:!0,default:function(){return[]}}}},o=n(35),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"text-center bg--secondary"},[n("b-container",[n("b-row",t._l(t.caseStudies,(function(e){return n("b-col",{key:e._id,attrs:{cols:"",md:"4"}},[n("div",{staticClass:"feature feature-1"},[n("nuxt-img",{attrs:{alt:e.title,src:e.image,format:"webp"}}),t._v(" "),n("div",{staticClass:"feature__body boxed boxed--lg boxed--border"},[n("h3",[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"lead"},[t._v("\n              "+t._s(e.description)+"\n            ")]),t._v(" "),n("NuxtLink",{attrs:{rel:"keep-params",to:e.link}},[t._v("\n              Read More\n            ")])],1)],1)])})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},334:function(t,e,n){"use strict";n.r(e);n(4),n(63);var r={data:function(){return{title:"Industries | Others - Chemical | TranZact",description:"Setco Chemicals followed batch manufacturing, with TranZact, they were able to manage their inventory more efficiently.",image:this.$img("industries-setco-landing.png",{format:"webp"}),caseStudies:[{title:"Industrial Machinery & Supplies",image:"blog-image-01.png",description:"TranZact oiled the wheels of Cesare Bonetti’s manufacturing process by streamlining their material management.",link:"industries-industrial-machinery-and-supplies"},{title:"Mechanical Tools & Supplies",image:"blog-image-02.png",description:"Mesco Springs swears by TranZact as the platform streamlined their entire business.",link:"industries-mechanical-tools-and-supplies"},{title:"Electrical & Electronics",image:"blog-image-03.png",description:"Atomberg Technologies saw their multi-location inventory management transform with TranZact.",link:"industries-electrical-and-electronics"}],challenges:["Batch production management","Stringent regulatory norms","Maintaining factory-level visibility"],features:["Production tracking","Inventory management","Barcoding system"],challengeDesciptions:["Ever since their inception in 1994, Setco Chemicals has been maintaining two manufacturing plants for printing inks, resins, paints, and adhesives. Handling the nitty-gritty of batch production of these items and adhering to regulatory and customer norms are challenges that have always loomed over the chemical manufacturer. All that our trustful client needed was an integrated SaaS solution to overcome their production and raw material worries right at the factory level."],enterTranzact:[{tick:!1,text:"Setco Chemicals then leveraged our cloud-based enterprise solutions on TranZact to bring about a huge transformation in their production and inventory management processes, end to end. What clicked them the most about our solution is its advanced barcoding system, which would streamline their batch production process and handle raw materials in an easy, accurate, and efficient manner."},{tick:!1,text:"Under our system, a unique product or an assembly of identical products exiting the same production site represents the batch numbers. They are usually identified by barcodes put on the products. The batch is marked with a supplier number or our clients’ own company numbers. We decided to sync Setco Chemicals’ existing database with TranZact and enable them to track their production and inventory status on their factory premises in real-time. Our team sought to usher in a double-entry management approach to handling lots and maintaining stocks that would empower our clients with advanced traceability. We wanted to ensure that our client is able to capture the correct product data and handle them in a universally compliant manner."}],results:[{tick:!1,text:"It didn’t take long for Setco Chemicals to achieve remarkable results after they implemented our cloud-based solution. Their overall manufacturing process underwent a significant change as production managers on both sites produced accurate reports using precise production data. Our client witnessed significant saving in time and cost as work got done faster and product recalls reduced. The barcoding system improved traceability by helping our clients to promptly detect issues related to quality, warranty, or safety while minimizing gaps in production. Our solutions enabled Setco Chemicals to adhere to regulatory requirements and maintain required secrecy of their chemical formulations in this highly knowledge-driven and competitive industry."}]}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:image:width",property:"og:image:width",content:"797"},{hid:"og:image:height",property:"og:image:height",content:"758"},{hid:"twitter:title",property:"twitter:title",content:this.title},{hid:"twitter:description",property:"twitter:description",content:this.description},{hid:"twitter:image",property:"twitter:image",content:this.image}]}}},o=n(35),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"switchable cover space--sm unpad--top"},[n("b-container",{staticClass:"pos-vertical-top"},[n("b-row",{attrs:{"align-h":"between","align-v":"center"}},[n("b-col",{staticClass:"mt-4 mt-md-0",attrs:{cols:"",lg:"6",md:"4"}},[n("nuxt-img",{attrs:{alt:"image",src:"industries-setco-landing.png",format:"webp"}})],1),t._v(" "),n("b-col",{attrs:{cols:"",lg:"6",md:"8"}},[n("div",{staticClass:"switchable__text"},[n("h1",{staticClass:"h1--large color--primary"},[n("strong",[t._v("Setco Chemicals followed batch manufacturing, with TranZact, they were able to manage their inventory more efficiently.")])])])])],1)],1)],1),t._v(" "),n("BlocksIndustriesMainBody",{attrs:{industry:"Chemical & Polymer",location:"Waliv, Maharashtra",challenges:t.challenges,features:t.features,"challenge-desciptions":t.challengeDesciptions,"enter-tranzact":t.enterTranzact,results:t.results}}),t._v(" "),n("TitlesSimpleSingle",{attrs:{classes:"text-center bg--secondary",title:"OTHER CASE STUDY"}}),t._v(" "),n("BlocksIndustriesCaseStudy",{attrs:{"case-studies":t.caseStudies}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlocksIndustriesMainBody:n(310).default,TitlesSimpleSingle:n(308).default,BlocksIndustriesCaseStudy:n(311).default})}}]);