(window.webpackJsonp=window.webpackJsonp||[]).push([[18,3,4,5,8,15],{320:function(t,e,r){var content=r(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(52).default)("1c587328",content,!0,{sourceMap:!1})},321:function(t,e,r){"use strict";r(320)},322:function(t,e,r){var n=r(51),o=r(166),l=r(323),c=r(324),d=n(!1),m=o(l),h=o(c);d.push([t.i,"@media (min-width:768px){.newsletter-background{background-image:url("+m+"),url("+h+")!important;background-repeat:no-repeat!important;background-position-x:right,left!important;background-position-y:center!important;background-color:#fff;background-size:contain!important}}",""]),t.exports=d},323:function(t,e,r){t.exports=r.p+"img/logo-half-right.3ab5408.png"},324:function(t,e,r){t.exports=r.p+"img/logo-half-left.4e1d5ca.png"},325:function(t,e,r){"use strict";r.r(e);var n={},o=(r(321),r(37)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"space--xs"},[r("div",{staticClass:"container"},[r("nuxt-img",{staticClass:"hidden-xs",staticStyle:{"margin-bottom":"-4.5rem","margin-left":"-2.5rem"},attrs:{alt:"Image",src:"Repeat Grid 10.png"}}),t._v(" "),t._m(0)],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"boxed boxed--lg boxed--border box-shadow newsletter-background"},[r("div",{staticClass:"row justify-content-center text-center my-sm-4"},[r("div",{staticClass:"col-lg-8"},[r("h1",{staticClass:"color--primary"},[r("strong",[t._v("Your digital transformation starts here :)")])])])]),t._v(" "),r("div",{staticClass:"row justify-content-center my-sm-4"},[r("div",{staticClass:"col-lg-8"},[r("form",{staticClass:"form-email",attrs:{id:"newsletter_form","data-success":"Thanks for booking a free demo, You will shortly receive a call from us"}},[r("div",{staticClass:"row justify-content-center"},[r("input",{attrs:{id:"request",type:"hidden",name:"request",value:"email_form"}}),t._v(" "),r("div",{staticClass:"col-md-6"},[r("input",{staticClass:"validate-required validate-email",attrs:{type:"email",name:"Email",placeholder:"Email Address"}})]),t._v(" "),r("div",{staticClass:"col-lg-5 col-md-6"},[r("button",{staticClass:"btn btn-lg btn-primary type--uppercase",attrs:{type:"submit"}},[r("span",{staticClass:"btn__text"},[t._v("Get Started for Free")])])])]),t._v(" "),r("div",{staticStyle:{position:"absolute",left:"-5000px"},attrs:{"aria-hidden":"true"}},[r("input",{attrs:{type:"text",name:"b_77142ece814d3cff52058a51f_f300c9cce8",tabindex:"-1",value:""}})])])])])])}],!1,null,null,null);e.default=component.exports},326:function(t,e,r){var content=r(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(52).default)("43070142",content,!0,{sourceMap:!1})},327:function(t,e,r){"use strict";r(326)},328:function(t,e,r){var n=r(51)(!1);n.push([t.i,'ul.ticked-list{position:relative;list-style:none;margin-left:0;padding-left:1.2em}ul.ticked-list li:before{content:"✓";position:absolute;left:0;color:#05b384;font-weight:700;font-size:larger}',""]),t.exports=n},329:function(t,e,r){"use strict";r.r(e);var n={props:{classes:{type:String,default:"",required:!1},headLine:{type:String,default:null,required:!0},image:{type:String,default:null,required:!0},link:{type:Object,default:function(){return{url:"",text:""}},required:!1},quote:{type:Object,default:function(){return{classes:"",text:""}},required:!1},points:{type:Array,default:function(){return[]},required:!1},tickList:{type:Array,default:function(){return[]},required:!1},objectList:{type:Array,default:function(){return[]},required:!1}}},o=(r(327),r(37)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"feature-large",class:t.classes},[r("b-container",[r("b-row",{attrs:{"align-v":"center","align-h":"between"}},[r("b-col",{attrs:{cols:"",md:"6",lg:"5"}},[r("div",{staticClass:"switchable__text"},[r("h2",[r("b",{domProps:{innerHTML:t._s(t.headLine)}})]),t._v(" "),t.points?r("p",{staticClass:"lead"},t._l(t.points,(function(e,n){return r("span",{key:e._id},[e.tick?r("span",{staticClass:"color--primary"},[t._v("✓")]):t._e(),t._v("\n              "+t._s(e.text)+"\n              "),n!=t.points.length-1?r("br"):t._e()])})),0):t._e(),t._v(" "),t.tickList?r("div",{staticClass:"text-block"},[r("ul",{staticClass:"list-unstyled ticked-list"},t._l(t.tickList,(function(text){return r("li",{key:text._id},[r("h4",[t._v(t._s(text))])])})),0)]):t._e(),t._v(" "),t.objectList?r("div",t._l(t.objectList,(function(object){return r("div",{key:object._id,staticClass:"text-block"},[r("h5",{staticClass:"font-weight-bold"},[t._v("\n                "+t._s(object.title)+"\n              ")]),t._v(" "),r("p",[t._v(t._s(object.description))])])})),0):t._e(),t._v(" "),t.quote.text?r("hr",{staticClass:"short"}):t._e(),t._v(" "),t.quote.text?r("p",{class:t.quote.classes},[t._v("\n            "+t._s(t.quote.text)+"\n          ")]):t._e(),t._v(" "),t.link&&t.link.url.indexOf("http")>-1?r("a",{attrs:{rel:"keep-params",href:""+t.link.url}},[t._v("\n            "+t._s(t.link.text)+"\n          ")]):t.link?r("NuxtLink",{attrs:{rel:"keep-params",to:"/"+t.link.url}},[t._v("\n            "+t._s(t.link.text)+"\n          ")]):t._e()],1)]),t._v(" "),r("b-col",{attrs:{cols:"",md:"6"}},[r("nuxt-img",{attrs:{alt:"Feature Image",src:"/"+t.image,format:"webp"}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},335:function(t,e,r){"use strict";r.r(e);var n={props:{featureData:{type:Object,required:!0,default:null}}},o=r(37),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"text-center space--xs"},[r("b-container",[t.featureData.bacground1?r("nuxt-img",{staticClass:"hidden-xs",staticStyle:{"margin-bottom":"-17rem","margin-right":"-85rem"},attrs:{alt:"Image",src:"pattern-1.png",format:"webp"}}):t._e(),t._v(" "),t.featureData.headLine||t.featureData.subHeadline?r("b-row",{staticClass:"mb-5"},[r("div",{staticClass:"col-lg-8 col-md-11"},[t.featureData.headLine?r("h2",{staticClass:"color--primary"},[t._v("\n          "+t._s(t.featureData.headLine)+"\n        ")]):t._e(),t._v(" "),t.featureData.subHeadline?r("p",{staticClass:"lead"},[t._v("\n          "+t._s(t.featureData.subHeadline)+"\n        ")]):t._e()])]):t._e(),t._v(" "),r("b-row",t._l(t.featureData.cards,(function(e){return r("b-col",{key:e.image,attrs:{cols:"",md:"4"}},[r("div",{staticClass:"feature boxed boxed--lg boxed--border",class:e.classes},[r("nuxt-img",{attrs:{alt:"Feature Image",src:"/"+e.image,format:"webp"}}),t._v(" "),r("h4",[t._v(t._s(e.title))]),t._v(" "),r("p",[t._v(t._s(e.message))]),t._v(" "),e.link&&e.link.indexOf("http")>-1?r("a",{staticClass:"btn btn-primary",attrs:{rel:"keep-params",href:""+e.link}},[r("span",{staticClass:"btn__text"},[t._v("\n              Learn More\n            ")])]):e.link?r("NuxtLink",{staticClass:"btn btn-primary",attrs:{to:"/"+e.link}},[r("span",{staticClass:"btn__text"},[t._v("\n              Learn More\n            ")])]):t._e()],1)])})),1),t._v(" "),t.featureData.bacground2?r("nuxt-img",{staticClass:"hidden-xs",staticStyle:{"margin-top":"-12rem","margin-left":"-90rem"},attrs:{alt:"Image",src:"pattern-2.png",format:"webp"}}):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports},337:function(t,e,r){"use strict";r.r(e);var n={props:{titleData:{type:Object,required:!0,default:null}}},o=r(37),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"text-center"},[r("b-container",[r("b-row",[r("b-col",{attrs:{cols:"",lg:"8",md:"10"}},[t.titleData.headLine?r("h2",{staticClass:"color--primary font-weight-bold"},[t._v("\n          "+t._s(t.titleData.headLine)+"\n        ")]):t._e(),t._v(" "),t.titleData.subHeadline?r("p",{staticClass:"lead"},[t._v("\n          "+t._s(t.titleData.subHeadline)+"\n        ")]):t._e()])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},338:function(t,e,r){"use strict";r.r(e);var n={props:{teamData:{type:Array,required:!0,default:null}}},o=r(37),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"text-center"},[r("b-container",[r("b-row",t._l(t.teamData,(function(e){return r("b-col",{key:e._id,attrs:{cols:"",md:"4"}},[r("div",{staticClass:"feature feature-8"},[r("nuxt-img",{staticClass:"rounded-circle",attrs:{alt:"Image",src:""+e.image,format:"webp"}}),t._v(" "),r("h5",[t._v("\n            "+t._s(e.name)+"\n          ")]),t._v(" "),r("span",[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),r("h5",[r("a",{attrs:{href:""+e.linkedin,target:"_blank"}},[r("i",{staticClass:"socicon socicon-linkedin icon icon--xs"})])])],1)])})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},362:function(t,e,r){"use strict";r.r(e);r(4),r(57);var n={data:function(){return{title:"About TranZact | Our Mission | Our Story | Why Free Forever",description:"Digitizing millions of Indian SMEs so they can grow better",image:this.$img("/about-us-hero.png",{format:"webp"}),featureFirst:{points:[{tick:!1,text:"There is a notion that to successfully go digital, you need to invest a lot of money, time and people on complex ERPs. But we know, there is a simpler way to achieve this digital transformation. One which not only empowers you to take critical data driven decisions but also your team to take decisions on daily business operations. We believe small teams succeed with a soul that they can easily adapt to this change. That's why we have created a tool which unifies simplicity, evolving technology and the power of data  to help businesses grow better every second."}]},featureSecond:{points:[{tick:!1,text:"As fellow graduate students from IIT in 2010, Ritesh, Sharad and Rohan noticed a shift in the way small businesses looked at the ongoing digital transformation. Owners were no longer happy with manual processes - in fact, they'd gotten really, really serious in getting rid of them."},{tick:!1,text:"But the only option available for them were complex ERPs which are more suitable for large organizations."},{tick:!1,text:'Hence, a company was born: TranZact. It was founded on "simple digital transformation", the notion that this transformation should be a stepwise journey rather than a direct jump from manual processes to ERPs.'},{tick:!1,text:"Today, TranZact is empowering over 10,000+ SME owners in becoming an important pillar in the digital India movement."}],headLine:'<span class="color--primary">Our Story</span>'},featureThird:{points:[{tick:!1,text:"It's probably not what you think; I'm Ritesh, TranZact's founder, I'll help to clarify this."},{tick:!1,text:"We want everyone Indian SME to use our software product without having to think over silly amounts of money i.e. truly free. But, just being free will NOT be enough. Our product needs to add immense value to our customers and our support has to be available 24×7–365, with a commitment towards absolutely delighting our users. Then only ever we look to monetize at that junction where our customers derive value and benefit."},{tick:!1,text:"This maximises the duration that our customers spend with us and after finding value in the free verison, they upgrade to the paid plans as per their convenience."}],headLine:'<span class="color--primary">Why Free?</span>',quote:{text:'"A customer will pay for a feature for a month or two, but will pay for benefits for a lifetime."'}},featureRow:{cards:[{image:"about-us-feature-01.png",title:"Zero Upfront Cost",message:"Pay only if you grow with TranZact",link:"how-it-works"},{image:"about-us-feature-02.png",title:"1 Week Go-Live",message:"Start seeing results in just 5 Days",link:"how-it-works"},{image:"about-us-feature-03.png",title:"24x7 Lifetime Support",message:"It's 100% Free and will always be",link:"how-it-works"}]},featureFourth:{points:[{tick:!1,text:"10,000+ Indian SMEs trust TranZact and have taken their first step towardas the digital transformation of their business"}],headLine:'<span class="color--primary">Our customers. Their stories.</span>',link:{text:"Read customer stories »",url:"customer"}},firstTitle:{headLine:"Our Team",subHeadline:"Meet our founders whose vision, perseverance and values, drive us to keep hustling on our journey towards disrupting the traditional digital technology for Indian SMEs"},teamData:[{image:"team/ritesh_new.jpg",name:"Ritesh Kumar",title:"Co-Founder & Director",linkedin:"https://www.linkedin.com/in/riteshk1502/"},{image:"team/sharad.jpg",name:"Sharad Sen Sharma",title:"Co-Founder & Director",linkedin:"https://www.linkedin.com/in/sharadsensharma/"},{image:"team/rohan.jpg",name:"Rohan Sen Sharma",title:"Co-Founder & Director",linkedin:"https://www.linkedin.com/in/rohan-sen-sharma/"}],titleSecond:{headLine:"Our Belief",subHeadline:'"Technology should always be easily available to those who seek for it"'}}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:image:width",property:"og:image:width",content:"556"},{hid:"og:image:height",property:"og:image:height",content:"375"},{hid:"twitter:title",property:"twitter:title",content:this.title},{hid:"twitter:description",property:"twitter:description",content:this.description},{hid:"twitter:image",property:"twitter:image",content:this.image}]}}},o=r(37),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"cover height-100"},[r("b-container",{staticClass:"pos-vertical-top"},[r("b-row",{attrs:{"align-h":"between","align-v":"center"}},[r("b-col",{attrs:{cols:"",lg:"6",md:"8"}},[r("div",{staticClass:"switchable__text"},[r("h1",{staticClass:"h1--large font-weight-bold color--primary"},[t._v("\n              Digitizing millions of Indian SMEs so they can grow better\n            ")])])]),t._v(" "),r("b-col",{attrs:{cols:"12",lg:"6",md:"4"}},[r("nuxt-img",{attrs:{alt:"image",src:"about-us-hero.png",format:"webp"}})],1)],1)],1)],1),t._v(" "),r("BlocksFeaturesLarge",{attrs:{classes:"switchable","head-line":'<span class="color--primary">Our Mission</span>',points:t.featureFirst.points,image:"about-us-01.png"}}),t._v(" "),r("BlocksFeaturesLarge",{attrs:{"head-line":t.featureSecond.headLine,points:t.featureSecond.points,image:"about-us-02.png"}}),t._v(" "),r("BlocksFeaturesLarge",{attrs:{classes:"switchable","head-line":t.featureThird.headLine,image:"about-us-03.png",points:t.featureThird.points,quote:t.featureThird.quote}}),t._v(" "),r("BlocksFeaturesSmall",{attrs:{"feature-data":t.featureRow}}),t._v(" "),r("BlocksFeaturesLarge",{attrs:{"head-line":t.featureFourth.headLine,image:"about-us-customer.png",points:t.featureFourth.points,link:t.featureFourth.link}}),t._v(" "),r("section",[r("b-container",[r("b-row",[r("b-col",{attrs:{cols:"",md:"6"}},[r("div",{staticClass:"feature feature-5 boxed boxed--lg boxed--border"},[r("i",{staticClass:"icon icon--lg"},[r("nuxt-img",{attrs:{alt:"Image",src:"client/04-1.jpg",format:"webp"}})],1),t._v(" "),r("div",{staticClass:"feature__body"},[r("h4",[t._v("Cesare Bonetti")]),t._v(" "),r("p",[t._v("“TranZact is a great software and it’s helping us to streamline our production smoothly. The ability to manage and monitor everything in a single place has a significant impact on our daily productivity.”"),r("br"),r("br")]),t._v(" "),r("NuxtLink",{attrs:{rel:"keep-params",to:"/customer"}},[t._v("\n                Learn More\n              ")])],1)])]),t._v(" "),r("b-col",{attrs:{cols:"",md:"6"}},[r("div",{staticClass:"feature feature--featured feature-5 boxed boxed--lg boxed--border"},[r("i",{staticClass:"icon icon--lg"},[r("nuxt-img",{attrs:{alt:"Image",src:"client/08.jpg",format:"webp"}})],1),t._v(" "),r("div",{staticClass:"feature__body"},[r("h4",[t._v("MESCO")]),t._v(" "),r("p",[t._v("“It's almost 3 years that we have been using TranZact for everything related to business; I’m still amazed how it has simplified our workflows that save time. I highly recommend TranZact if you are looking for more than just an ERP software.” ")]),t._v(" "),r("NuxtLink",{attrs:{rel:"keep-params",to:"/customer"}},[t._v("\n                Learn More\n              ")])],1)])])],1)],1)],1),t._v(" "),r("TitlesSimpleCentered",{attrs:{"title-data":t.firstTitle}}),t._v(" "),r("BlocksOurTeam",{attrs:{"team-data":t.teamData}}),t._v(" "),r("TitlesSimpleCentered",{attrs:{"title-data":t.titleSecond}}),t._v(" "),r("section",{staticClass:"features-small-14 text-center"},[r("b-container",[r("b-row",[r("b-col",{attrs:{cols:"",lg:"9",md:"8"}},[r("b-row",{attrs:{"align-h":"center"}},[r("b-col",{attrs:{cols:"",md:"4"}},[r("div",{staticClass:"text-block"},[r("nuxt-img",{attrs:{src:"about-us-solving.svg",height:"80",format:"webp"}}),t._v(" "),r("h4",[t._v("Always solve for the user")])],1)]),t._v(" "),r("b-col",{attrs:{cols:"",md:"4"}},[r("div",{staticClass:"text-block"},[r("nuxt-img",{attrs:{src:"about-us-impact.svg",height:"80",format:"webp"}}),t._v(" "),r("h4",[t._v("Build for large impact")])],1)]),t._v(" "),r("b-col",{attrs:{cols:"",md:"4"}},[r("div",{staticClass:"text-block"},[r("nuxt-img",{attrs:{src:"about-us-checked.svg",height:"80",format:"webp"}}),t._v(" "),r("h4",[t._v("Think. Learn. Grow. Repeat.")])],1)]),t._v(" "),r("b-col",{attrs:{cols:"",md:"4"}},[r("div",{staticClass:"text-block"},[r("nuxt-img",{attrs:{src:"about-us-favorites.svg",height:"80",format:"webp"}}),t._v(" "),r("h4",[t._v("Power of Simplicity")])],1)]),t._v(" "),r("b-col",{attrs:{cols:"",md:"4"}},[r("div",{staticClass:"text-block"},[r("nuxt-img",{attrs:{src:"about-us-laptop.svg",height:"80",format:"webp"}}),t._v(" "),r("h4",[t._v("In technology we trust")])],1)]),t._v(" "),r("b-col",{attrs:{cols:"",md:"4"}},[r("div",{staticClass:"text-block"},[r("nuxt-img",{attrs:{src:"about-us-flexible.svg",height:"80",format:"webp"}}),t._v(" "),r("h4",[t._v("Be flexible and agile")])],1)])],1)],1)],1)],1)],1),t._v(" "),r("BlocksFormSubscribeNewsletter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlocksFeaturesLarge:r(329).default,BlocksFeaturesSmall:r(335).default,TitlesSimpleCentered:r(337).default,BlocksOurTeam:r(338).default,BlocksFormSubscribeNewsletter:r(325).default})}}]);