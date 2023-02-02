(window.webpackJsonp=window.webpackJsonp||[]).push([[54,21,24,31],{1416:function(e,t,r){"use strict";r.r(t);var o=r(24),n=(r(73),r(16),r(11),r(49),r(21),r(92),{asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,n,c,l,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$content,o=e.params,n=e.error,t.next=3,r("blogs").only(["title","description","coverImage","categories","tags","path","slug","readingTime"]).where({"tags.slug":{$contains:o.slug}}).sortBy("createdAt","desc").fetch();case 3:if(!((c=t.sent).length>0)){t.next=10;break}return l=c[0].tags.filter((function(e){return e.slug===o.slug})),d=l[0],t.abrupt("return",{allBlogs:c,title:d.meta_title?d.meta_title:"".concat(d.name," - Blog and Articles for SME | TranZact"),tagName:d.name,description:d.meta_description?d.meta_description:"Discover all you need to learn about ".concat(d.name," with the following articles from TranZact. An ERP software for SMEs with inventory management"),page_description:d.page_description?d.page_description:"Discover all you need to learn about ".concat(d.name," with the following articles from TranZact. An ERP software for SMEs with inventory management")});case 10:n({statusCode:404,message:"Not Found"});case 11:case"end":return t.stop()}}),t)})))()},data:function(){return{title:"Home - Blog and Articles for SME | TranZact",description:"Helping SME Owners in Business Growth, Easy-to-Use Cloud-based Business Software.",image:this.$img("logo-black-sm.png",{format:"png"}),page_description:"",selectedCategory:null,allFilterClasses:[],tagName:"",allBlogs:[],showBlogs:8,modalOpen:!1,mouseMove:0}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:"https://fcbtech.github.io"+this.image},{hid:"twitter:title",property:"twitter:title",content:this.title},{hid:"twitter:description",property:"twitter:description",content:this.description},{hid:"twitter:image",property:"twitter:image",content:"https://fcbtech.github.io"+this.image}]}},destroyed:function(){this.mouseMove=0,this.modalOpen=!1},methods:{mouseLeaveEvent:function(){this.mouseMove>50&&!this.modalOpen&&(this.modalOpen=!0,this.$bvModal.show("form-modal"))},loadMore:function(){this.showBlogs>this.allBlogs.length||(this.showBlogs=this.showBlogs+6)}}}),c=r(33),component=Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("div",{on:{mouseleave:function(t){return e.mouseLeaveEvent()},mousewheel:function(t){e.mouseMove++}}},[t("section",{staticClass:"space--sm"},[t("b-container",[t("b-row",[t("b-col",{attrs:{cols:"",md:"12"}},[t("div",{staticClass:"masonry"},[t("NuxtLink",{attrs:{to:"/blogs"}},[e._v("\n              Blogs Home\n            ")]),e._v(" "),t("h1",[e._v(e._s(e.tagName))]),e._v(" "),t("p",[e._v(e._s(e.page_description))]),e._v(" "),t("hr"),e._v(" "),t("b-row",{staticClass:"masonry__container masonry--active"},e._l(e.allBlogs,(function(r,o){return t("div",{key:r._id,staticClass:"masonry__item col-lg-4 col-md-6",class:{hidden:!(o<=e.showBlogs)},attrs:{"data-masonry-filter":"Marketing"}},[t("BlogCardSimple",{attrs:{"blog-path":r.path,"blog-slug":r.slug,"blog-cover-image":r.coverImage,"blog-title":r.title,"blog-categories":r.categories,"blog-reading-time":r.readingTime}})],1)})),0)],1)])],1),e._v(" "),t("b-row",[t("b-col",{staticClass:"text-center"},[t("button",{staticClass:"btn btn-lg btn-primary type--uppercase",class:{"d-none":e.showBlogs>e.allBlogs.length},on:{click:e.loadMore}},[e._v("\n            Load More\n          ")])])],1)],1)],1),e._v(" "),t("BlocksFormSubscribeNewsletterBlog"),e._v(" "),t("BlocksFormContactFullFormBlog")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BlogCardSimple:r(446).default,BlocksFormSubscribeNewsletterBlog:r(476).default,BlocksFormContactFullFormBlog:r(460).default})},418:function(e,t,r){e.exports=r.p+"img/logo-half-right.3ab5408.png"},441:function(e,t,r){var content=r(456);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(72).default)("22576025",content,!0,{sourceMap:!1})},446:function(e,t,r){"use strict";r.r(t);r(49),r(217);var o={props:{blogPath:{type:String,default:null,required:!0},blogSlug:{type:String,default:null,required:!0},blogTitle:{type:String,default:null,required:!0},blogCoverImage:{type:String,default:null,required:!0},blogCoverImageAltText:{type:String,default:null,required:!1},blogCategories:{type:Array,default:null,required:!1},blogReadingTime:{type:Number,default:null,required:!1}}},n=r(33),component=Object(n.a)(o,(function(){var e=this,t=e._self._c;return t("article",{staticClass:"feature feature-1"},[t("NuxtLink",{staticClass:"block",attrs:{to:{path:e.blogPath,query:e.$route.query}}},[t("nuxt-img",{attrs:{alt:e.blogCoverImageAltText,src:e.blogCoverImage,format:"webp",height:"245",width:"370",fit:"fill"}})],1),e._v(" "),t("div",{staticClass:"feature__body boxed boxed--border"},[e.blogCategories?t("div",e._l(e.blogCategories,(function(r,o){return t("span",{key:r._id},[o>0?t("span",[e._v(",")]):e._e(),e._v(" "),t("NuxtLink",{attrs:{to:{path:"/blogs/categories/"+r.slug,query:e.$route.query}}},[e._v(e._s(r.name))])],1)})),0):e._e(),e._v(" "),t("h5",[e._v(e._s(e.blogTitle))]),e._v(" "),t("NuxtLink",{attrs:{to:{path:e.blogPath,query:e.$route.query}}},[e._v("\n      Read More\n    ")]),e._v(" "),e.blogReadingTime?t("span",[e._v(" | "+e._s(e.blogReadingTime)+" MIN READ")]):e._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports},454:function(e,t,r){var content=r(472);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(72).default)("7c04dec0",content,!0,{sourceMap:!1})},455:function(e,t,r){"use strict";r(441)},456:function(e,t,r){var o=r(71)(!1);o.push([e.i,"input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}",""]),e.exports=o},460:function(e,t,r){"use strict";r.r(t);var o=r(24),n=(r(73),r(11),r(1374)),c=r(1375),l=r(1376),d=r(208),m={components:{BForm:n.a,BFormGroup:c.a,BFormInput:l.a,BButton:d.a},data:function(){return{loading:!1,current_path:this.$route.fullPath,mobile_no:"",referral:this.$route.query.utm_referral||""}},methods:{submitForm:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,n,c,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.preventDefault(),o={request:"mobile_form",current_path:t.$route.fullPath,mobile_no:t.mobile_no,referral:t.referral},n={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(o)},t.loading=!0,r.next=6,fetch("https://main-website-leads-api-i6xwiarxdq-el.a.run.app",n).catch((function(e){t.$bvToast.toast(e,{title:"Error",variant:"danger",solid:!0})}));case 6:if(c=r.sent,t.loading=!1,!c.ok){r.next=15;break}return r.next=11,c.json();case 11:if((data=r.sent).success){t.$bvModal.hide("form-modal"),t.$bvToast.toast(data.message,{title:"Success",variant:"success",solid:!0});try{window.Moengage&&(window.Moengage.add_first_name(t.first_name),window.Moengage.add_last_name(t.last_name),window.Moengage.add_mobile(t.mobile_no),window.Moengage.track_event("Blog Subscription Lead",{lead_id:data.enquireId,mobile_no:t.mobile_no,referral:t.referral}))}catch(e){}finally{t.current_path=t.$route.fullPath,t.mobile_no="",t.referral=t.$route.query.utm_referral||"",t.loading=!1}}else t.$bvToast.toast(data.message,{title:"Error",variant:"danger",solid:!0});r.next=16;break;case 15:t.$bvToast.toast("Failed submitting your request",{title:"Error",variant:"danger",solid:!0});case 16:case"end":return r.stop()}}),r)})))()}}},h=(r(455),r(33)),component=Object(h.a)(m,(function(){var e=this,t=e._self._c;return t("b-modal",{attrs:{id:"form-modal",size:"md",centered:"","hide-header":"","hide-footer":"",title:"Please fill in the below details to get a call from our technical expert."}},[t("b-container",[t("b-button",{staticStyle:{right:"0.1em",top:"0.1em",position:"absolute",margin:"0px","z-index":"9999"},attrs:{variant:"outline-danger",squared:"",size:"sm"},on:{click:function(t){return e.$bvModal.hide("form-modal")}}},[e._v("\n      X\n    ")]),e._v(" "),t("b-row",{attrs:{"align-v":"center"}},[t("b-col",[t("b-form",{ref:"contact_form",on:{submit:e.submitForm}},[t("b-form-row",[t("b-col",{attrs:{sm:"10"}},[t("h3",[e._v("Join 30,000+ SME Businesses")])]),e._v(" "),t("b-col",{attrs:{sm:"2"}})],1),e._v(" "),t("b-form-row",[t("div",{staticClass:"text-block"},[t("p",[e._v("\n                Get expert insights straight to your inbox, and become a better SME business. Subscribe to TranZact Blog below.\n              ")])])]),e._v(" "),t("b-form-row",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.current_path,expression:"current_path"}],attrs:{name:"current_path",type:"hidden"},domProps:{value:e.current_path},on:{input:function(t){t.target.composing||(e.current_path=t.target.value)}}}),e._v(" "),t("b-col",{attrs:{sm:"12"}},[t("b-form-group",{attrs:{label:"Mobile no.*:","label-for":"footer_mobile_no"}},[t("b-form-input",{staticClass:"validate-required validate-number-dash",attrs:{id:"footer_mobile_no",type:"number",min:"5555555555",max:"9999999999",required:""},model:{value:e.mobile_no,callback:function(t){e.mobile_no=t},expression:"mobile_no"}})],1)],1)],1),e._v(" "),t("b-form-row",[t("b-col",[t("span",{staticClass:"type--fine-print"},[e._v("You agree to the\n                "),t("NuxtLink",{attrs:{target:"_blank",rel:"keep-params",to:{name:"terms-and-agreement",query:e.$route.query}}},[e._v("Terms of Service")])],1)])],1),e._v(" "),t("b-button",{class:{"btn--loading":e.loading},attrs:{type:"submit",variant:"primary",size:"lg",block:""}},[e._v("\n            Submit\n          ")]),e._v(" "),t("b-form-row",{staticClass:"my-3 text-center"},[t("b-col",{attrs:{sm:"12"}},[t("span",[e._v("\n                Not using\n                "),t("a",{attrs:{target:"_blank",rel:"keep-params",href:"https://app.letstranzact.com/v2/signup".concat(e.queryObjectToString(e.$route.query))},on:{click:function(t){return e.signUpRedirect(void 0,e.label="blogs",e.category="subscription-form")}}},[e._v("TranZact")]),e._v("\n                yet?\n              ")])])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},470:function(e,t,r){e.exports=r.p+"img/logo-half-left.4e1d5ca.png"},471:function(e,t,r){"use strict";r(454)},472:function(e,t,r){var o=r(71),n=r(215),c=r(418),l=r(470),d=o(!1),m=n(c),h=n(l);d.push([e.i,"@media (min-width:768px){.newsletter-background[data-v-fef27840]{background-image:linear-gradient(hsla(0,0%,100%,.9),hsla(0,0%,100%,.9)),url("+m+"),url("+h+")!important;background-repeat:no-repeat!important;background-position-x:center,right,left!important;background-position-y:center!important;background-color:#fff;background-size:contain!important}}",""]),e.exports=d},476:function(e,t,r){"use strict";r.r(t);r(42),r(65);var o=r(24),n=(r(73),r(51),r(11),{data:function(){return{current_path:this.$route.fullPath,email:"",checked:[],referral:this.$route.query.utm_referral||"",loading:!1}},methods:{submitEmailForm:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,n,c,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.preventDefault(),""!==t.email){r.next=5;break}t.$bvToast.toast("Please enter your email address",{title:"Error",variant:"danger",solid:!0}),r.next=20;break;case 5:return t.loading=!0,o={request:"blog_email_form",current_path:t.$route.fullPath,email:t.email,category:t.checked.join(","),referral:t.referral},n={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(o)},r.next=10,fetch("https://main-website-leads-api-i6xwiarxdq-el.a.run.app",n).catch((function(e){t.$bvToast.toast(e,{title:"Error",variant:"danger",solid:!0})}));case 10:if(c=r.sent,t.loading=!1,!c.ok){r.next=19;break}return r.next=15,c.json();case 15:if((data=r.sent).success){t.$bvToast.toast(data.message,{title:"Success",variant:"success",solid:!0});try{window.Moengage&&(window.Moengage.add_email(t.email),window.Moengage.track_event("Email Lead",{lead_id:data.enquireId,email:t.email,referral:t.referral}))}catch(e){}finally{t.current_path=t.$route.fullPath,t.email="",t.referral=t.$route.query.utm_referral||"",t.loading=!1}}else t.$bvToast.toast(data.message,{title:"Error",variant:"danger",solid:!0});r.next=20;break;case 19:t.$bvToast.toast("Failed submitting your request",{title:"Error",variant:"danger",solid:!0});case 20:case"end":return r.stop()}}),r)})))()}}}),c=(r(471),r(33)),component=Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"space--xs"},[t("div",{staticClass:"container"},[t("nuxt-img",{staticClass:"hidden-xs",staticStyle:{"margin-bottom":"-4.5rem","margin-left":"-2.5rem"},attrs:{alt:"Image",src:"Repeat Grid 10.png"}}),e._v(" "),t("div",{staticClass:"boxed boxed--lg boxed--border box-shadow newsletter-background"},[t("div",{staticClass:"row justify-content-center text-center"},[e._m(0),e._v(" "),t("div",{staticClass:"col-md-6 my-auto"},[t("div",{staticClass:"bg--secondary boxed boxed--border boxed--lg my-sm-4"},[t("form",{staticClass:"form-email form--active",attrs:{id:"newsletter_form",novalidate:"true"},on:{submit:e.submitEmailForm}},[t("h4",[e._v("\n                I want the latest in...\n              ")]),e._v(" "),t("div",{staticClass:"row text-left"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"input-checkbox"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{id:"checkbox1",type:"checkbox",name:"category",value:"management"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,"management")>-1:e.checked},on:{change:function(t){var r=e.checked,o=t.target,n=!!o.checked;if(Array.isArray(r)){var c="management",l=e._i(r,c);o.checked?l<0&&(e.checked=r.concat([c])):l>-1&&(e.checked=r.slice(0,l).concat(r.slice(l+1)))}else e.checked=n}}}),e._v(" "),t("label",{attrs:{for:"checkbox1"}})]),e._v(" "),t("span",[e._v("Management")])]),e._v(" "),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"input-checkbox"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{id:"checkbox2",type:"checkbox",name:"category",value:"purchase_production"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,"purchase_production")>-1:e.checked},on:{change:function(t){var r=e.checked,o=t.target,n=!!o.checked;if(Array.isArray(r)){var c="purchase_production",l=e._i(r,c);o.checked?l<0&&(e.checked=r.concat([c])):l>-1&&(e.checked=r.slice(0,l).concat(r.slice(l+1)))}else e.checked=n}}}),e._v(" "),t("label",{attrs:{for:"checkbox2"}})]),e._v(" "),t("span",[e._v("Purchase and Production")])]),e._v(" "),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"input-checkbox"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{id:"checkbox3",type:"checkbox",name:"category",value:"sales_accounts"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,"sales_accounts")>-1:e.checked},on:{change:function(t){var r=e.checked,o=t.target,n=!!o.checked;if(Array.isArray(r)){var c="sales_accounts",l=e._i(r,c);o.checked?l<0&&(e.checked=r.concat([c])):l>-1&&(e.checked=r.slice(0,l).concat(r.slice(l+1)))}else e.checked=n}}}),e._v(" "),t("label",{attrs:{for:"checkbox3"}})]),e._v(" "),t("span",[e._v("Sales and Accounts")])]),e._v(" "),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"input-checkbox"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{id:"checkbox4",type:"checkbox",name:"category",value:"quality_store"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,"quality_store")>-1:e.checked},on:{change:function(t){var r=e.checked,o=t.target,n=!!o.checked;if(Array.isArray(r)){var c="quality_store",l=e._i(r,c);o.checked?l<0&&(e.checked=r.concat([c])):l>-1&&(e.checked=r.slice(0,l).concat(r.slice(l+1)))}else e.checked=n}}}),e._v(" "),t("label",{attrs:{for:"checkbox4"}})]),e._v(" "),t("span",[e._v("Quality and Store")])])]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"validate-required validate-email",attrs:{type:"email",name:"Email",placeholder:"Email Address"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),t("button",{staticClass:"btn btn-lg btn-primary type--uppercase",class:{"btn--loading":e.loading},attrs:{type:"submit"}},[e._v("\n                Subscribe\n              ")])])])])])])],1)])}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"col-md-6 col-lg-5 my-auto"},[t("div",{staticClass:"switchable__text text-center my-sm-4"},[t("h2",{staticClass:"color--primary"},[t("strong",[e._v("Subscribe to Our Blog")])]),e._v(" "),t("p",{staticClass:"lead"},[e._v("\n              Stay up to date with the latest business tips and news for Indian SMEs.\n            ")])])])}],!1,null,"fef27840",null);t.default=component.exports}}]);