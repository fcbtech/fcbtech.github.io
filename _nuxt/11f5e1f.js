(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{441:function(e,t,r){var content=r(456);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(72).default)("22576025",content,!0,{sourceMap:!1})},455:function(e,t,r){"use strict";r(441)},456:function(e,t,r){var n=r(71)(!1);n.push([e.i,"input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}",""]),e.exports=n},460:function(e,t,r){"use strict";r.r(t);var n=r(24),o=(r(73),r(11),r(1374)),l=r(1375),c=r(1376),m=r(208),d={components:{BForm:o.a,BFormGroup:l.a,BFormInput:c.a,BButton:m.a},data:function(){return{loading:!1,current_path:this.$route.fullPath,mobile_no:"",referral:this.$route.query.utm_referral||""}},methods:{submitForm:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,l,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.preventDefault(),n={request:"mobile_form",current_path:t.$route.fullPath,mobile_no:t.mobile_no,referral:t.referral},o={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)},t.loading=!0,r.next=6,fetch("https://main-website-leads-api-i6xwiarxdq-el.a.run.app",o).catch((function(e){t.$bvToast.toast(e,{title:"Error",variant:"danger",solid:!0})}));case 6:if(l=r.sent,t.loading=!1,!l.ok){r.next=15;break}return r.next=11,l.json();case 11:if((data=r.sent).success){t.$bvModal.hide("form-modal"),t.$bvToast.toast(data.message,{title:"Success",variant:"success",solid:!0});try{window.Moengage&&(window.Moengage.add_first_name(t.first_name),window.Moengage.add_last_name(t.last_name),window.Moengage.add_mobile(t.mobile_no),window.Moengage.track_event("Blog Subscription Lead",{lead_id:data.enquireId,mobile_no:t.mobile_no,referral:t.referral}))}catch(e){}finally{t.current_path=t.$route.fullPath,t.mobile_no="",t.referral=t.$route.query.utm_referral||"",t.loading=!1}}else t.$bvToast.toast(data.message,{title:"Error",variant:"danger",solid:!0});r.next=16;break;case 15:t.$bvToast.toast("Failed submitting your request",{title:"Error",variant:"danger",solid:!0});case 16:case"end":return r.stop()}}),r)})))()}}},f=(r(455),r(33)),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;return t("b-modal",{attrs:{id:"form-modal",size:"md",centered:"","hide-header":"","hide-footer":"",title:"Please fill in the below details to get a call from our technical expert."}},[t("b-container",[t("b-button",{staticStyle:{right:"0.1em",top:"0.1em",position:"absolute",margin:"0px","z-index":"9999"},attrs:{variant:"outline-danger",squared:"",size:"sm"},on:{click:function(t){return e.$bvModal.hide("form-modal")}}},[e._v("\n      X\n    ")]),e._v(" "),t("b-row",{attrs:{"align-v":"center"}},[t("b-col",[t("b-form",{ref:"contact_form",on:{submit:e.submitForm}},[t("b-form-row",[t("b-col",{attrs:{sm:"10"}},[t("h3",[e._v("Join 30,000+ SME Businesses")])]),e._v(" "),t("b-col",{attrs:{sm:"2"}})],1),e._v(" "),t("b-form-row",[t("div",{staticClass:"text-block"},[t("p",[e._v("\n                Get expert insights straight to your inbox, and become a better SME business. Subscribe to TranZact Blog below.\n              ")])])]),e._v(" "),t("b-form-row",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.current_path,expression:"current_path"}],attrs:{name:"current_path",type:"hidden"},domProps:{value:e.current_path},on:{input:function(t){t.target.composing||(e.current_path=t.target.value)}}}),e._v(" "),t("b-col",{attrs:{sm:"12"}},[t("b-form-group",{attrs:{label:"Mobile no.*:","label-for":"footer_mobile_no"}},[t("b-form-input",{staticClass:"validate-required validate-number-dash",attrs:{id:"footer_mobile_no",type:"number",min:"5555555555",max:"9999999999",required:""},model:{value:e.mobile_no,callback:function(t){e.mobile_no=t},expression:"mobile_no"}})],1)],1)],1),e._v(" "),t("b-form-row",[t("b-col",[t("span",{staticClass:"type--fine-print"},[e._v("You agree to the\n                "),t("NuxtLink",{attrs:{target:"_blank",rel:"keep-params",to:{name:"terms-and-agreement",query:e.$route.query}}},[e._v("Terms of Service")])],1)])],1),e._v(" "),t("b-button",{class:{"btn--loading":e.loading},attrs:{type:"submit",variant:"primary",size:"lg",block:""}},[e._v("\n            Submit\n          ")]),e._v(" "),t("b-form-row",{staticClass:"my-3 text-center"},[t("b-col",{attrs:{sm:"12"}},[t("span",[e._v("\n                Not using\n                "),t("a",{attrs:{target:"_blank",rel:"keep-params",href:"https://app.letstranzact.com/v2/signup".concat(e.queryObjectToString(e.$route.query))},on:{click:function(t){return e.signUpRedirect(void 0,e.label="blogs",e.category="subscription-form")}}},[e._v("TranZact")]),e._v("\n                yet?\n              ")])])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);