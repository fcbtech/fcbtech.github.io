(window.webpackJsonp=window.webpackJsonp||[]).push([[32,5,6],{352:function(t,e,r){var content=r(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(54).default)("1c587328",content,!0,{sourceMap:!1})},353:function(t,e,r){"use strict";r(352)},354:function(t,e,r){var n=r(53),o=r(171),c=r(355),l=r(356),v=n(!1),_=o(c),m=o(l);v.push([t.i,"@media (min-width:768px){.newsletter-background{background-image:url("+_+"),url("+m+")!important;background-repeat:no-repeat!important;background-position-x:right,left!important;background-position-y:center!important;background-color:#fff;background-size:contain!important}}",""]),t.exports=v},355:function(t,e,r){t.exports=r.p+"img/logo-half-right.3ab5408.png"},356:function(t,e,r){t.exports=r.p+"img/logo-half-left.4e1d5ca.png"},357:function(t,e,r){"use strict";r.r(e);var n=r(21),o=(r(60),{data:function(){return{current_path:this.$route.path,email:"",referral:this.$route.query.utm_referral||""}},methods:{submitEmailForm:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),n={request:"email_form",current_path:e.$route.path,email:e.email,referral:e.referral},r.next=4,e.$axios.$post("/cloudfunction/leads-collection",n).catch((function(t){e.$bvToast.toast(t,{title:"Error",variant:"danger",solid:!0})}));case 4:(data=r.sent).success?(e.current_path=e.$route.path,e.email="",e.referral=e.$route.query.utm_referral||"",e.$bvToast.toast(data.message,{title:"Success",variant:"success",solid:!0})):e.$bvToast.toast(data.message,{title:"Error",variant:"danger",solid:!0});case 6:case"end":return r.stop()}}),r)})))()}}}),c=(r(353),r(38)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"space--xs"},[r("div",{staticClass:"container"},[r("nuxt-img",{staticClass:"hidden-xs",staticStyle:{"margin-bottom":"-4.5rem","margin-left":"-2.5rem"},attrs:{alt:"Image",src:"Repeat Grid 10.png"}}),t._v(" "),r("div",{staticClass:"boxed boxed--lg boxed--border box-shadow newsletter-background"},[t._m(0),t._v(" "),r("div",{staticClass:"row justify-content-center my-sm-4"},[r("div",{staticClass:"col-lg-8"},[r("form",{staticClass:"form-email",attrs:{id:"newsletter_form"},on:{submit:t.submitEmailForm}},[r("div",{staticClass:"row justify-content-center"},[r("input",{attrs:{id:"request",type:"hidden",name:"request",value:"email_form"}}),t._v(" "),r("div",{staticClass:"col-md-6"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"validate-required validate-email",attrs:{type:"email",name:"Email",placeholder:"Email Address"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),t._m(1)]),t._v(" "),t._m(2)])])])])],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row justify-content-center text-center my-sm-4"},[r("div",{staticClass:"col-lg-8"},[r("h1",{staticClass:"color--primary"},[r("strong",[t._v("Your digital transformation starts here :)")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-5 col-md-6"},[r("button",{staticClass:"btn btn-lg btn-primary type--uppercase",attrs:{type:"submit"}},[r("span",{staticClass:"btn__text"},[t._v("Get Started for Free")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{position:"absolute",left:"-5000px"},attrs:{"aria-hidden":"true"}},[e("input",{attrs:{type:"text",name:"b_77142ece814d3cff52058a51f_f300c9cce8",tabindex:"-1",value:""}})])}],!1,null,null,null);e.default=component.exports},374:function(t,e,r){var content=r(380);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(54).default)("f3b2cacc",content,!0,{sourceMap:!1})},377:function(t,e,r){"use strict";r.r(e);var n=r(21),o=(r(60),{data:function(){return{current_path:this.$route.path,first_name:"",last_name:"",company:"",website:"",contact_no:null,email:"",comment:"",referral:this.$route.query.utm_referral||"",selected:null,options:[{value:null,text:"Select..."},{value:"Inventory Management",text:"Inventory Management"},{value:"Easy Documentation",text:"Easy Documentation"},{value:"Realtime Analytics",text:"Realtime Analytics"},{value:"Streamline Processes",text:"Streamline Processes"},{value:"Streamline Production",text:"Production with MRP"}]}},methods:{submitForm:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),n={request:"full_form",current_path:e.$route.path,first_name:e.first_name,last_name:e.last_name,company:e.company,website:e.website,contact_no:e.contact_no,email:e.email,comment:e.comment,referral:e.referral,reason:e.selected},r.next=4,e.$axios.$post("/cloudfunction/leads-collection",n).catch((function(t){e.$bvToast.toast(t,{title:"Error",variant:"danger",solid:!0})}));case 4:(data=r.sent).success?(e.current_path=e.$route.path,e.first_name="",e.last_name="",e.company="",e.website="",e.contact_no=null,e.email="",e.comment="",e.referral=e.$route.query.utm_referral||"",e.selected=null,e.$bvModal.hide("form-modal"),e.$bvToast.toast(data.message,{title:"Success",variant:"success",solid:!0})):e.$bvToast.toast(data.message,{title:"Error",variant:"danger",solid:!0});case 6:case"end":return r.stop()}}),r)})))()}}}),c=r(38),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-modal",{attrs:{id:"form-modal",size:"lg",centered:"","hide-header":"","hide-footer":"",title:"Please fill in the below details to get a call from our technical expert."}},[r("b-container",[r("b-row",{attrs:{"align-v":"center"}},[r("b-col",{attrs:{md:"7",lg:"12"}},[r("div",{staticClass:"feature feature-1"},[r("div",{staticClass:"feature__body boxed boxed--lg"},[r("b-button",{staticStyle:{right:"1em",top:"1em",position:"absolute"},attrs:{variant:"outline-danger",squared:"",size:"sm"},on:{click:function(e){return t.$bvModal.hide("form-modal")}}},[t._v("\n              X\n            ")]),t._v(" "),r("div",{staticClass:"text-block"},[r("p",[t._v("\n                Please fill in the below details to get a call from our technical expert.\n              ")])]),t._v(" "),r("b-form",{ref:"contact_form",on:{submit:t.submitForm}},[r("b-form-row",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.current_path,expression:"current_path"}],attrs:{name:"current_path",type:"hidden"},domProps:{value:t.current_path},on:{input:function(e){e.target.composing||(t.current_path=e.target.value)}}}),t._v(" "),r("b-col",{attrs:{sm:"12",md:"6"}},[r("b-form-group",{attrs:{label:"First Name*:","label-for":"fname"}},[r("b-form-input",{staticClass:"validate-required",attrs:{id:"fname",type:"text",required:""},model:{value:t.first_name,callback:function(e){t.first_name=e},expression:"first_name"}})],1)],1),t._v(" "),r("b-col",{attrs:{sm:"12",md:"6"}},[r("b-form-group",{attrs:{label:"Last Name:","label-for":"lname"}},[r("b-form-input",{attrs:{id:"lname",type:"text"},model:{value:t.last_name,callback:function(e){t.last_name=e},expression:"last_name"}})],1)],1)],1),t._v(" "),r("b-form-row",[r("b-col",{attrs:{sm:"12",md:"6"}},[r("b-form-group",{attrs:{label:"Company*:","label-for":"company"}},[r("b-form-input",{staticClass:"validate-required",attrs:{id:"company",type:"text",required:""},model:{value:t.company,callback:function(e){t.company=e},expression:"company"}})],1)],1),t._v(" "),r("b-col",{attrs:{sm:"12",md:"6"}},[r("b-form-group",{attrs:{label:"Website*:","label-for":"website"}},[r("b-form-input",{staticClass:"validate-required",attrs:{id:"website",type:"text",required:""},model:{value:t.website,callback:function(e){t.website=e},expression:"website"}})],1)],1)],1),t._v(" "),r("b-form-row",[r("b-col",{attrs:{sm:"12",md:"6"}},[r("b-form-group",{attrs:{label:"Mobile No*:","label-for":"mobile_no"}},[r("b-form-input",{staticClass:"validate-required validate-number-dash",attrs:{id:"mobile_no",max:"9999999999",min:"6666666666",type:"number",required:""},model:{value:t.contact_no,callback:function(e){t.contact_no=e},expression:"contact_no"}})],1)],1),t._v(" "),r("b-col",{attrs:{sm:"12",md:"6"}},[r("b-form-group",{attrs:{label:"Email*:","label-for":"footer_email"}},[r("b-form-input",{staticClass:"validate-required validate-email",attrs:{id:"footer_email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1)],1),t._v(" "),r("b-form-row",[r("b-col",{attrs:{sm:"12",md:"6"}},[r("b-form-group",{attrs:{label:"Referral code to get exciting offers :","label-for":"referral"}},[r("b-form-input",{attrs:{id:"referral",name:"referral",type:"text"},model:{value:t.referral,callback:function(e){t.referral=e},expression:"referral"}})],1)],1),t._v(" "),r("b-col",{attrs:{sm:"12",md:"6"}},[r("b-form-group",{attrs:{label:"Select you want to achieve with TranZact*:","label-for":"reason"}},[r("b-form-select",{attrs:{id:"reason",name:"reason",options:t.options,required:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1)],1),t._v(" "),r("b-form-row",[r("b-col",[r("b-form-group",{attrs:{label:"Details of Problem you want to solve with TranZact:","label-for":"comment"}},[r("b-form-textarea",{attrs:{id:"comment",rows:"4",required:""},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1)],1)],1),t._v(" "),r("b-form-row",[r("b-col",[r("span",{staticClass:"type--fine-print"},[t._v("You agree to the\n                    "),r("NuxtLink",{attrs:{target:"_blank",rel:"keep-params",to:"/terms-and-agreement"}},[t._v("Terms of Service")])],1)])],1),t._v(" "),r("b-button",{attrs:{type:"submit",variant:"primary",size:"lg",block:""}},[t._v("\n                Submit\n              ")])],1)],1)])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},379:function(t,e,r){"use strict";r(374)},380:function(t,e,r){var n=r(53)(!1);n.push([t.i,".pricing ul li{line-height:2.5rem}",""]),t.exports=n},407:function(t,e,r){"use strict";r.r(e);r(4),r(55);var n={data:function(){return{title:"Pricing | Flexible Plans | Free Forever | TranZact",description:"Start with Free Forever, Upgrade only once you are ready.",image:this.$img("logo_black.png",{format:"webp"})}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:image:width",property:"og:image:width",content:"797"},{hid:"og:image:height",property:"og:image:height",content:"758"},{hid:"twitter:title",property:"twitter:title",content:this.title},{hid:"twitter:description",property:"twitter:description",content:this.description},{hid:"twitter:image",property:"twitter:image",content:this.image}]}}},o=(r(379),r(38)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("section",[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"pricing pricing-1 boxed boxed--lg boxed--border text-center"},[t._m(1),t._v(" "),r("hr"),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),r("a",{staticClass:"btn btn-primary type--uppercase",attrs:{rel:"keep-params",target:"_blank",href:"https://app.letstranzact.com/v2/signup"},on:{click:function(e){return t.signUpRedirect(t.label="Signup for Free",t.category="firstFold")}}},[r("span",{staticClass:"btn__text"},[t._v("\n                Sign Up for Free\n              ")])]),t._v(" "),r("hr"),t._v(" "),t._m(5),t._v(" "),r("ul",{staticClass:"accordion accordion-2 text-left mt-3"},[r("li",[r("div",{staticClass:"accordion__title",on:{click:function(e){return t.toggleAccordion(e)}}},[r("span",{staticClass:"h4 strong mb-0"},[t._v("Quotation Tracking")])]),t._v(" "),t._m(6)]),t._v(" "),r("li",[r("div",{staticClass:"accordion__title",on:{click:function(e){return t.toggleAccordion(e)}}},[r("span",{staticClass:"h4 strong mb-0"},[t._v("Transactions")])]),t._v(" "),t._m(7)]),t._v(" "),r("li",[r("div",{staticClass:"accordion__title",on:{click:function(e){return t.toggleAccordion(e)}}},[r("span",{staticClass:"h4 strong mb-0"},[t._v("Inventory")])]),t._v(" "),t._m(8)]),t._v(" "),r("li",[r("div",{staticClass:"accordion__title",on:{click:function(e){return t.toggleAccordion(e)}}},[r("span",{staticClass:"h4 strong mb-0"},[t._v("Payments")])]),t._v(" "),t._m(9)]),t._v(" "),r("li",[r("div",{staticClass:"accordion__title",on:{click:function(e){return t.toggleAccordion(e)}}},[r("span",{staticClass:"h4 strong mb-0"},[t._v("Analysis")])]),t._v(" "),t._m(10)]),t._v(" "),r("li",[r("div",{staticClass:"accordion__title",on:{click:function(e){return t.toggleAccordion(e)}}},[r("span",{staticClass:"h4 strong mb-0"},[t._v("Onboarding & Support")])]),t._v(" "),t._m(11)]),t._v(" "),r("li",[r("div",{staticClass:"accordion__title",on:{click:function(e){return t.toggleAccordion(e)}}},[r("span",{staticClass:"h4 strong mb-0"},[t._v("Integration")])]),t._v(" "),t._m(12)]),t._v(" "),r("li",[r("div",{staticClass:"accordion__title",on:{click:function(e){return t.toggleAccordion(e)}}},[r("span",{staticClass:"h4 strong mb-0"},[t._v("Other Features")])]),t._v(" "),t._m(13)])]),t._v(" "),r("a",{staticClass:"btn btn-primary sign-up-redirect",attrs:{rel:"keep-params",target:"_blank",href:"https://app.letstranzact.com/v2/signup"},on:{click:function(e){return t.signUpRedirect(t.label="Signup for Free",t.category="secondFold")}}},[r("span",{staticClass:"btn__text"},[t._v("\n                Sign Up for Free\n              ")])])])]),t._v(" "),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"pricing pricing-1 boxed boxed--lg boxed--border text-center"},[t._m(14),t._v(" "),r("hr"),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),r("a",{staticClass:"btn btn--secondary type--uppercase inner-link",on:{click:function(e){return t.$bvModal.show("form-modal")}}},[r("span",{staticClass:"btn__text"},[t._v("\n                Contact us\n              ")])]),t._v(" "),r("hr"),t._v(" "),t._m(18),t._v(" "),r("ul",{staticClass:"accordion accordion-2 text-left mt-3"},[r("li",[r("div",{staticClass:"accordion__title",on:{click:function(e){return t.toggleAccordion(e)}}},[r("span",{staticClass:"h4 strong mb-0"},[t._v("Production")])]),t._v(" "),t._m(19)]),t._v(" "),r("li",[r("div",{staticClass:"accordion__title",on:{click:function(e){return t.toggleAccordion(e)}}},[r("span",{staticClass:"h4 strong mb-0"},[t._v("Analysis")])]),t._v(" "),t._m(20)]),t._v(" "),r("li",[r("div",{staticClass:"accordion__title",on:{click:function(e){return t.toggleAccordion(e)}}},[r("span",{staticClass:"h4 strong mb-0"},[t._v("Onboarding & Support")])]),t._v(" "),t._m(21)]),t._v(" "),r("li",[r("div",{staticClass:"accordion__title",on:{click:function(e){return t.toggleAccordion(e)}}},[r("span",{staticClass:"h4 strong mb-0"},[t._v("Integration")])]),t._v(" "),t._m(22)]),t._v(" "),r("li",[r("div",{staticClass:"accordion__title",on:{click:function(e){return t.toggleAccordion(e)}}},[r("span",{staticClass:"h4 strong mb-0"},[t._v("Other Features")])]),t._v(" "),t._m(23)])]),t._v(" "),r("a",{staticClass:"btn btn--secondary inner-link",on:{click:function(e){return t.$bvModal.show("form-modal")}}},[r("span",{staticClass:"btn__text"},[t._v("\n                Contact us\n              ")])])])]),t._v(" "),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"pricing pricing-1 boxed boxed--lg boxed--border text-center"},[t._m(24),t._v(" "),r("hr"),t._v(" "),r("span",{staticClass:"h4",staticStyle:{"margin-bottom":"1.75em"}},[t._v("\n              Please contact our team to get price estimate\n            ")]),t._v(" "),r("a",{staticClass:"btn btn--secondary type--uppercase inner-link",on:{click:function(e){return t.$bvModal.show("form-modal")}}},[r("span",{staticClass:"btn__text"},[t._v("\n                Contact us\n              ")])]),t._v(" "),r("hr"),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),r("a",{staticClass:"btn btn--secondary inner-link",on:{click:function(e){return t.$bvModal.show("form-modal")}}},[r("span",{staticClass:"btn__text"},[t._v("\n                Contact us\n              ")])])])])])])]),t._v(" "),t._m(27),t._v(" "),r("section",[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 col-lg-3"},[r("div",{staticClass:"testimonial testimonial-2"},[r("div",{staticClass:"testimonial__body boxed boxed--border bg--secondary"},[r("p",[t._v("\n                The remarkable thing about TranZact is, it has removed the communication gap among the different departments, miscommunication between our counter-parties, and has made production planning simple.\n              ")]),t._v(" "),r("div",{staticClass:"testimonial__image"},[r("nuxt-img",{attrs:{alt:"Image",src:"client/09-2.jpg",format:"webp"}}),t._v(" "),r("h5",[t._v("Mr. Ankit Mathur")]),t._v(" "),r("span",[t._v("Greenway")])],1)])])]),t._v(" "),r("div",{staticClass:"col-md-6 col-lg-3"},[r("div",{staticClass:"testimonial testimonial-2"},[r("div",{staticClass:"testimonial__body boxed boxed--border bg--secondary"},[r("p",[t._v("\n                I would definitely recommend TranZact. From our very first interaction through to our hassle-free onboarding and now with their support team, it's always a great experience. It’s an excellent software and I’m glad we chose TranZact.\n              ")]),t._v(" "),r("div",{staticClass:"testimonial__image"},[r("nuxt-img",{attrs:{alt:"Image",src:"client/14-2.jpg",format:"webp"}}),t._v(" "),r("h5",[t._v("Mr. Shibam Das")]),t._v(" "),r("span",[t._v("Atomberg")])],1)])])]),t._v(" "),r("div",{staticClass:"col-md-6 col-lg-3"},[r("div",{staticClass:"testimonial testimonial-2"},[r("div",{staticClass:"testimonial__body boxed boxed--border bg--secondary"},[r("p",[t._v("\n                I find TranZact as the one-stop solution product to run the business smoothly. It is an intuitive and easy-to-use software, even my team uses on a daily basis to monitor business activities. Happy to use TranZact.\n              ")]),r("br",{staticClass:"hidden-xs hidden-sm"}),t._v(" "),r("div",{staticClass:"testimonial__image"},[r("nuxt-img",{attrs:{alt:"Image",src:"client/11-2.jpg",format:"webp"}}),t._v(" "),r("h5",[t._v("Mr. Chandru Motwani")]),t._v(" "),r("span",[t._v("Entech")])],1)])])]),t._v(" "),r("div",{staticClass:"col-md-6 col-lg-3"},[r("div",{staticClass:"testimonial testimonial-2"},[r("div",{staticClass:"testimonial__body boxed boxed--border bg--secondary"},[r("p",[t._v("\n                It's almost 3 years that we have been using TranZact for everything related to business; I’m still amazed how it has simplified our workflows that save time. I highly recommend TranZact if you are looking for more than just an ERP software.\n              ")]),t._v(" "),r("div",{staticClass:"testimonial__image"},[r("nuxt-img",{attrs:{alt:"Image",src:"client/08.jpg",format:"webp"}}),t._v(" "),r("h5",[t._v("Mr. Nilesh Shah")]),t._v(" "),r("span",[t._v("MESCO")])],1)])])])])])]),t._v(" "),t._m(28),t._v(" "),r("BlocksFormContactFullForm"),t._v(" "),r("BlocksFormSubscribeNewsletter")],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"text-center space--xs"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-md-10 col-lg-8"},[r("div",{staticClass:"cta"},[r("h1",{staticClass:"h1--large font-weight-bold"},[t._v("\n              Start with "),r("span",{staticClass:"color--primary"},[t._v("Free Forever")]),t._v(", Upgrade only once you are ready\n            ")]),t._v(" "),r("p",{staticClass:"lead"},[t._v("\n              Pay as you Grow, cancel at any time if you don’t get value\n            ")])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h3",[t._v("Lifetime Free"),r("br"),t._v("(For small teams)")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"h2"},[r("strong",[t._v("₹0")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"type--fine-print"},[r("strong",[t._v("Unlimited users.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("br")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("em",[t._v("Includes")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"accordion__content"},[r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Request for Quotation")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" RFQ Comparison")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Sales Quotation")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Quotation to Order Conversion")]),r("br"),r("br")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"accordion__content"},[r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Order Confirmation / Sales Order")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Purchase Order")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Inward & Quality Inspection Register")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" GST Invoices (B2B / B2C)")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" E-Way Bill")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Packing List")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Service Transactions")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Transaction Tags")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Unique Transaction Timeline")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Internal and Extrenal Communication")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Credit / Debit Note")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Document Delivery / Open Status")]),r("br"),r("br")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"accordion__content"},[r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Inventory History")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Mutiple Stores")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Minimum Stock Level")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Maximum Stock Level")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Multiple UOM")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Physical Stock Reconciliation")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Inventory Valuation (FIFO, Average)")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Inventory Rejected / Dead Stock")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Barcode (Back Tracking)")]),r("br"),r("br")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"accordion__content"},[r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Account Receivable")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Account Payable")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Debtor / Creditor Ageing Report")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Counter Party Ledger")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Advance Reciept")]),r("br"),r("br")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"accordion__content"},[r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Business Intelligence")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Reports")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Insights (Auto Mailer)")]),r("br"),r("br")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"accordion__content"},[r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Knowledge Centre Access")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Live Chat")]),r("br"),r("br")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"accordion__content"},[r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Tally Integration")]),r("br"),r("br")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"accordion__content"},[r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Access Management")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Document Flex Fields")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Multiple Document Series")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Dispatch Details")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Auto Payment Reciept")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Notification (Email / System / FCM)")]),r("br"),r("br")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h3",[t._v("Advanced"),r("br"),t._v("(For advanced users)")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"h2"},[r("strong",[t._v("₹9,999")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"type--fine-print"},[r("strong",[t._v("Per Year, Unlimited Users.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("br")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"mb-2"},[r("em",[t._v("Includes everything in Free, plus")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"accordion__content"},[r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Multi-Level Bill of Materials (BOM)")]),t._v(" "),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" BOM Costing (FIFO, Avg, Latest, Default)")]),t._v(" "),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Process Routing")]),t._v(" "),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Scrap Tracking")]),t._v(" "),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Work Order")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Finished Goods Testing")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Line Rejection Tracking")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Outsourcing / Sub-Contract")]),r("br"),r("br")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"accordion__content"},[r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Material Resource Planning")]),r("br"),r("br")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"accordion__content"},[r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Dedicated Customer Success Manager")]),r("br"),r("br")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"accordion__content"},[r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Google Sheet Integration")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Aftership Integration")]),r("br"),r("br")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"accordion__content"},[r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Reminders")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Document Approvals")]),r("br"),t._v(" "),r("span",[r("span",{staticClass:"color--primary"},[t._v("✓")]),t._v(" Store Approvals")]),r("br"),r("br")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h3",[t._v("Ultimate"),r("br"),t._v("(For large teams)")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("em",[t._v("Includes everything in Advanced, plus")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"text-left mt-3"},[r("li",[r("h4")]),t._v(" "),r("li",[r("h4",[t._v("Personalised Onboarding")])]),t._v(" "),r("li",[r("h4")]),t._v(" "),r("li",[r("h4",[t._v("Advanced Analytics")])]),t._v(" "),r("li",[r("h4")]),t._v(" "),r("li",[r("h4",[t._v("Custom Integrations")])]),t._v(" "),r("li",[r("h4")]),t._v(" "),r("li",[r("h4",[t._v("Early Access to All New Features")])]),t._v(" "),r("li",[r("h4")]),t._v(" "),r("li",[r("h4",[t._v("Call Support even outside working hours")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"text-center space--xs"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("h2",[t._v("What do customers think of TranZact?")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"bg--secondary"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-4"},[r("div",{staticClass:"text-block"},[r("h4",[t._v("Frequently Asked Questions")])])]),t._v(" "),r("div",{staticClass:"col-lg-4"},[r("div",{staticClass:"text-block"},[r("h5",[t._v("Why Free Forever?")]),t._v(" "),r("p",[t._v("\n              We believe in realizing ROI; Once achieved you’ll definitely love to explore our paid version.\n            ")])]),t._v(" "),r("div",{staticClass:"text-block"},[r("h5",[t._v("Once upgraded, can I downgrade, if not satisfied?")]),t._v(" "),r("p",[t._v('\n              We have a very clear refund policy which works as "pay per use". Any pending amount will be refunded\n            ')])]),t._v(" "),r("div",{staticClass:"text-block"},[r("h5",[t._v("When do I need to upgrade?")]),t._v(" "),r("p",[t._v("\n              You should only upgrade once you are ready in terms of team, process and money. We will never push you\n            ")])])]),t._v(" "),r("div",{staticClass:"col-lg-4"},[r("div",{staticClass:"text-block"},[r("h5",[t._v("Will Free Forever plan get proper support?")]),t._v(" "),r("p",[t._v("\n              We offer 1 week onboarding support and live chat support for lifetime for free to all our customers\n            ")])]),t._v(" "),r("div",{staticClass:"text-block"},[r("h5",[t._v("What are my payment options?")]),t._v(" "),r("p",[t._v("\n              We usually accept payments through NEFT/RTGS and eNACH.\n            ")])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 text-center"},[r("br"),t._v(" "),r("h4",[t._v("Get more info on billing by writing at "),r("a",{attrs:{href:"mailto:contactus@letstranzact.com"}},[t._v("contactus@letstranzact.com")])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{BlocksFormContactFullForm:r(377).default,BlocksFormSubscribeNewsletter:r(357).default})}}]);