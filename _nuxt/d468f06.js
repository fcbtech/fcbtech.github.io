(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{416:function(e,t,r){var content=r(422);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(72).default)("b2e0b9e8",content,!0,{sourceMap:!1})},418:function(e,t,r){e.exports=r.p+"img/logo-half-right.3ab5408.png"},421:function(e,t,r){"use strict";r(416)},422:function(e,t,r){var n=r(71),o=r(215),l=r(418),c=n(!1),d=o(l);c.push([e.i,"@media (min-width:768px){.newsletter-background[data-v-7e82bd3a]{background-image:url("+d+")!important;background-repeat:no-repeat!important;background-position-x:right,left!important;background-position-y:center!important;background-color:hsla(0,0%,100%,.6);background-blend-mode:lighten}}input[data-v-7e82bd3a]::-webkit-inner-spin-button,input[data-v-7e82bd3a]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number][data-v-7e82bd3a]{-moz-appearance:textfield}",""]),e.exports=c},424:function(e,t,r){"use strict";r.r(t);var n=r(24),o=(r(73),r(11),{data:function(){return{current_path:this.$route.fullPath,mobile_no:"",referral:this.$route.query.utm_referral||"",loading:!1}},methods:{submitEmailForm:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,l,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.preventDefault(),""!==t.mobile_no&&10===t.mobile_no.length){r.next=5;break}t.$bvToast.toast("Please enter valid mobile number",{title:"Error",variant:"danger",solid:!0}),r.next=20;break;case 5:return t.loading=!0,n={request:"mobile_form",current_path:t.$route.fullPath,mobile_no:t.mobile_no,referral:t.referral},o={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)},r.next=10,fetch("https://main-website-leads-api-i6xwiarxdq-el.a.run.app",o).catch((function(e){t.$bvToast.toast(e,{title:"Error",variant:"danger",solid:!0})}));case 10:if(l=r.sent,t.loading=!1,!l.ok){r.next=19;break}return r.next=15,l.json();case 15:if((data=r.sent).success){t.$bvToast.toast(data.message,{title:"Success",variant:"success",solid:!0});try{window.Moengage&&(window.Moengage.add_mobile(t.mobile_no),window.Moengage.track_event("Mobile Lead",{lead_id:data.enquireId,mobile_no:t.mobile_no,referral:t.referral}))}catch(e){}finally{t.current_path=t.$route.fullPath,t.mobile_no="",t.referral=t.$route.query.utm_referral||"",t.loading=!1}}else t.$bvToast.toast(data.message,{title:"Error",variant:"danger",solid:!0});r.next=20;break;case 19:t.$bvToast.toast("Failed submitting your request",{title:"Error",variant:"danger",solid:!0});case 20:case"end":return r.stop()}}),r)})))()}}}),l=(r(421),r(33)),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"space--xs"},[t("div",{staticClass:"container"},[t("div",{staticClass:"boxed boxed--lg boxed--border box-shadow newsletter-background"},[t("div",{staticClass:"row my-sm-4 align-items-center"},[e._m(0),e._v(" "),t("div",{staticClass:"col-lg-6"},[t("form",{staticClass:"form-email",attrs:{id:"newsletter_form"},on:{submit:e.submitEmailForm}},[t("div",{staticClass:"row justify-content-center"},[t("input",{attrs:{id:"request",type:"hidden",name:"request",value:"mobile_form"}}),e._v(" "),t("div",{staticClass:"col-md-6"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile_no,expression:"mobile_no"}],staticClass:"validate-required validate-number-dash",attrs:{type:"number",name:"mobile_no",placeholder:"Mobile no."},domProps:{value:e.mobile_no},on:{input:function(t){t.target.composing||(e.mobile_no=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"col-lg-5 col-md-6"},[t("button",{staticClass:"btn btn-lg btn-primary type--uppercase",class:{"btn--loading":e.loading},attrs:{type:"submit"}},[e._v("\n                  Get Started\n                ")])])]),e._v(" "),e._m(1)])])])])])])}),[function(){var e=this._self._c;return e("div",{staticClass:"col-lg-6"},[e("span",{staticClass:"h2 mb-0"},[e("strong",[this._v("Sit back & relax, as we digitize you to become extraordinary!")])])])},function(){var e=this._self._c;return e("div",{staticStyle:{position:"absolute",left:"-5000px"},attrs:{"aria-hidden":"true"}},[e("input",{attrs:{type:"text",name:"b_77142ece814d3cff52058a51f_f300c9cce8",tabindex:"-1",value:""}})])}],!1,null,"7e82bd3a",null);t.default=component.exports}}]);