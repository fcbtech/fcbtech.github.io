(window.webpackJsonp=window.webpackJsonp||[]).push([[51,21,22,31,33,34],{1418:function(t,e,r){"use strict";r.r(e);r(49),r(21),r(92);var o=r(24),n=(r(50),r(73),{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,o=t.params,e.next=3,r("blogs",o.slug).fetch();case 3:if(n=e.sent,!(l=n.relatedArticles)){e.next=9;break}return e.next=8,r("blogs").only(["title","description","coverImage","coverImageAltText","categories","path","slug","readingTime"]).where({slug:{$in:l}}).fetch();case 8:n.relatedArticles=e.sent;case 9:return e.abrupt("return",{theBlog:n});case 10:case"end":return e.stop()}}),e)})))()},data:function(){return{blogurl:"https://fcbtech.github.io"+this.$route.path,modalOpen:!1,mouseMove:0}},head:function(){return{title:this.theBlog.title+" | TranZact",meta:[{hid:"description",name:"description",content:this.theBlog.description},{hid:"og:title",property:"og:title",content:this.theBlog.title+" | TranZact"},{hid:"og:description",property:"og:description",content:this.theBlog.description},{hid:"og:image",property:"og:image",content:"https://fcbtech.github.io"+this.$img(this.theBlog.coverImage,{format:"png"})},{hid:"og:type",property:"og:type",content:"article"},{hid:"article:publisher",property:"article:publisher",content:"https://facebook.com/letstranzact/"},{hid:"article:published_time",property:"article:published_time",content:this.theBlog.date},{hid:"twitter:title",property:"twitter:title",content:this.theBlog.title+" | TranZact"},{hid:"twitter:description",property:"twitter:description",content:this.theBlog.description},{hid:"twitter:image",property:"twitter:image",content:"https://fcbtech.github.io"+this.$img(this.theBlog.coverImage,{format:"png"})}],script:[{hid:"blogSchema",type:"application/ld+json",json:{"@context":"https://schema.org","@graph":this.formatedGoogleSchema()}}]}},destroyed:function(){this.mouseMove=0,this.modalOpen=!1},methods:{mouseLeaveEvent:function(){this.mouseMove>50&&!this.modalOpen&&(this.modalOpen=!0,this.$bvModal.show("form-modal"))},formatedGoogleSchema:function(){var t=[{"@type":"BlogPosting","@id":"https://fcbtech.github.io"+this.$route.path+"#BlogPosting",mainEntityOfPage:{"@type":"WebPage","@id":"https://fcbtech.github.io"+this.$route.path},headline:this.theBlog.title,name:this.theBlog.title,description:this.theBlog.description,datePublished:this.convertDate(this.theBlog.createdAt),dateModified:this.convertDate(this.theBlog.createdAt),image:{"@type":"ImageObject","@id":"https://fcbtech.github.io"+this.$img(this.theBlog.coverImage,{format:"png"}),url:"https://fcbtech.github.io"+this.$img(this.theBlog.coverImage,{format:"png"})},author:{"@type":"Organization","@id":"https://fcbtech.github.io",name:"TranZact",url:"https://fcbtech.github.io"},publisher:{"@type":"Organization","@id":"https://fcbtech.github.io",name:"TranZact",logo:{"@type":"ImageObject",url:"https://letstranzact.com/logo_white.png"}},url:"https://fcbtech.github.io"+this.$route.path,isPartOf:{"@type":"Blog","@id":"https://fcbtech.github.io/blogs",name:"TranZact Blogs",publisher:{"@type":"Organization","@id":"https://fcbtech.github.io",name:"TranZact",logo:{"@type":"ImageObject",url:"https://letstranzact.com/logo_white.png"}}},wordCount:this.theBlog.wordCount,keywords:this.theBlog.keywords}];return this.theBlog.faq&&t.push({"@type":"FAQPage",mainEntity:this.theBlog.faq.map((function(t){return{"@type":"Question",name:t.question,acceptedAnswer:{"@type":"Answer",text:t.answer}}}))}),t}}}),l=r(33),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{on:{mouseleave:function(e){return t.mouseLeaveEvent()},mousewheel:function(e){t.mouseMove++}}},[e("section",{staticClass:"unpad"},[e("b-container",{staticClass:"px-0",attrs:{fluid:""}},[e("nuxt-img",{staticStyle:{width:"100%"},attrs:{alt:t.theBlog.coverImageAltText?t.theBlog.coverImageAltText:t.theBlog.slug,src:t.theBlog.coverImage,format:"webp"}})],1)],1),t._v(" "),e("section",{staticClass:"space--xxs"},[e("b-container",{attrs:{fluid:"lg"}},[e("b-row",{attrs:{"align-h":"center"}},[e("b-col",{attrs:{cols:"",lg:"8",md:"8",sm:"12"}},[e("article",[e("div",{staticClass:"article__title"},[e("b-row",{staticClass:"my-3"},[e("b-col",{attrs:{col:""}},t._l(t.theBlog.categories,(function(r){return e("span",{key:r._id},[e("NuxtLink",{staticClass:"btn btn-sm btn-secondary rounded-pill",attrs:{to:{path:"/blogs/categories/"+r.slug,query:t.$route.query}}},[e("span",{staticClass:"btn__text"},[t._v(t._s(r.name))])])],1)})),0)],1),t._v(" "),e("h1",{staticClass:"font-weight-bold"},[t._v("\n                "+t._s(t.theBlog.title)+"\n              ")]),t._v(" "),e("span",[t._v("By Team TranZact | Published on "+t._s(t.convertDate(t.theBlog.createdAt)))])],1),t._v(" "),e("div",{staticClass:"article__body"},[e("nuxt-content",{attrs:{document:t.theBlog}})],1),t._v(" "),e("hr"),t._v(" "),t.theBlog.tags?e("div",{staticClass:"article__footer"},[e("span",[t._v("Tags:")]),t._v(" "),t._l(t.theBlog.tags,(function(r,o){return e("span",{key:r._id},[o>0?e("span",[t._v(",")]):t._e(),t._v(" "),e("span",[t._v(t._s(r))])])}))],2):t._e()])]),t._v(" "),e("b-col",{attrs:{cols:"",lg:"4",md:"4",sm:"6"}},[e("b-row",{staticClass:"mt-5 mb-5 d-flex justify-content-center"},[e("BlogNewShare",{attrs:{"article-url":t.blogurl,"article-quote":"Hey checkout this blog from Let's Tranzact","article-title":t.theBlog.title,"article-summary":t.theBlog.description,"article-source":"letstranzact.com"}}),t._v(" "),e("b-col",{staticClass:"text-center hidden-xs",attrs:{sm:"12",lg:"12",md:"12"}},[e("div",{staticClass:"boxed boxed--sm box-shadow bg--primary"},[e("h4",{staticClass:"text-center font-weight-bold"},[t._v("\n                  Grow Your Business With TranZact.\n                ")]),t._v(" "),e("h6",{staticClass:"text-center"},[t._v("\n                  It's trusted by\n                  10,000+ Indian SMEs.\n                ")]),t._v(" "),e("a",{staticClass:"btn btn--white btn-sm",attrs:{rel:"keep-params",target:"_blank",href:"https://app.letstranzact.com/v2/signup".concat(t.queryObjectToString(t.$route.query))},on:{click:function(e){return t.signUpRedirect(void 0,t.label="Get Started For Free",t.category="blogs")}}},[e("span",{staticClass:"btn__text"},[t._v("Get Started For Free")])])])])],1)],1)],1)],1)],1),t._v(" "),e("BlocksFormSubscribeNewsBlog"),t._v(" "),t.theBlog.relatedArticles?e("BlogRelatedSection",{attrs:{"section-classes":"space--xs","blog-list":t.theBlog.relatedArticles,"head-line":"Related Blogs"}}):t._e(),t._v(" "),e("BlocksFormContactFullFormBlog")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogNewShare:r(535).default,BlocksFormSubscribeNewsBlog:r(536).default,BlogRelatedSection:r(478).default,BlocksFormContactFullFormBlog:r(460).default})},438:function(t,e,r){var content=r(442);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("46f7ed82",content,!0,{sourceMap:!1})},441:function(t,e,r){var content=r(456);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("22576025",content,!0,{sourceMap:!1})},442:function(t,e,r){var o=r(71)(!1);o.push([t.i,'@charset "UTF-8";@font-face{font-family:"slick";src:url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAATsAA0AAAAAB2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAE0AAAABoAAAAcdIcYB0dERUYAAAS0AAAAHAAAAB4AJwANT1MvMgAAAZwAAABRAAAAYFAQ/45jbWFwAAACAAAAAFcAAAFiIhFFt2dhc3AAAASsAAAACAAAAAj//wADZ2x5ZgAAAmgAAAE1AAACLD+btmBoZWFkAAABMAAAAC8AAAA2AAEx+2hoZWEAAAFgAAAAHAAAACQD5QIFaG10eAAAAfAAAAAQAAAAFgZKAEpsb2NhAAACWAAAABAAAAAQATYBoG1heHAAAAF8AAAAHQAAACAASwBHbmFtZQAAA6AAAADcAAABbgUngcJwb3N0AAAEfAAAAC4AAABFOXjBpHjaY2BkYGAA4vMGfuHx/DZfGbiZGEDgfGFFPZxWZVBlvM14G8jlYABLAwAT1QnNAHjaY2BkYGC8zcDAoMfEAAJANiMDKmABADBkAe942mNgZGBgYGdwYWBiAAEQycgAEnMA8xkACcgAkwAAAHjaY2BmYmCcwMDKwMDow5jGwMDgDqW/MkgytDAwMDGwcjKAQQNQCZBSYICCgDTXFAYHhkTFSYwP/j9g0GO8/f82A0QNA+NtsBIFBkYANHMN4wAAAHjaY2KAACYIVoVAAALCAJt42mNgYGBmgGAZBkYGEIgB8hjBfBYGByDNw8DBwARkMzAkKigpTlCc9P8/WB0S7/+i+4/uld4rgZoAB4xsDHAhRiYgwcSApoCBcsBMBTNYGGgGAEdEDyUAAAAAAAAAAAAAZgCKANABFnjadZBdToNAEMd3CrtAl5TQLtS0LCoN0A8SGkBI+mAfPET75B1896HppfQcvnII4w3cLYpW6k4ymdn9z8xvBwEKUQg11OgBIXAYWUEQR1uIZoFGpLGxKy3PqrIq8+waXIfJ+5mQSSvkvXwRqqocu1D39QMl2JgvN9zzhsyk1GRDz+OBfzMioCqx0rtdLYo0SiZTZttsOkmidBkveKibFF4Oep9SI46bqk3Twhp4iihUemrMWFPy2NRbthfqKkHi/PxlJLITZdAiSj6ouZ+tn9eZz78DuD9LZYB6bZ8rlCAUVuVdkULjxV4sIEysIc/KSyPmnJDdjhCOdQ0fCTliTX/tjH3ysWao+71qaNjHQjcQwrcuyl+WLZQthCMotJP/h+Xjazz+hfTeRWmG4zOiSyif/q1OtAAAAHjabY49asNAEIU/2ZJDfkiRIvXapUFCEqpcptABUrg3ZhEiQoKVfY9UqVLlGDlADpAT5e16IUWysMz3hjfzBrjjjQT/EjKpCy+4YhN5yZoxcirPe+SMWz4jr6S+5UzSa3VuwpTnBfc8RF7yxDZyKs9r5IxHPiKv1P9iZqDnyAvMQ39UecbScVb/gJO03Xk4CFom3XYK1clhMdQUlKo7/d9NF13RkIdfy+MV7TSe2sl11tRFaXYmJKpWTd7kdVnJ8veevZKc+n3I93t9Jnvr5n4aTVWU/0z9AI2qMkV42mNgYkAGjAzogB0sysTgwtDOyMTIzJlYVJRfnpOaVsIFZhVlpmeUAABuKQkSAAAAAAAB//8AAnjaY2BkYGDgAWIxIGZiYARCNiBmAfMYAAPgADV42mNgYGBkAIKrS9Q5QPT5wop6GA0APf8GGAAA) format("woff")}.slick-next,.slick-prev{font-size:0;line-height:0;position:absolute;top:50%;display:block;width:20px;height:20px;padding:0;transform:translateY(-50%);cursor:pointer;border:none}.slick-next,.slick-next:focus,.slick-next:hover,.slick-prev,.slick-prev:focus,.slick-prev:hover{color:transparent;outline:none;background:transparent}.slick-next:focus:before,.slick-next:hover:before,.slick-prev:focus:before,.slick-prev:hover:before{opacity:1}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.25}.slick-next:before,.slick-prev:before{font-family:"slick";font-size:20px;line-height:1;opacity:.75;color:#fff;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.slick-prev{left:-25px}[dir=rtl] .slick-prev{right:-25px;left:auto}.slick-prev:before{content:"←"}[dir=rtl] .slick-prev:before{content:"→"}.slick-next{right:-25px}[dir=rtl] .slick-next{right:auto;left:-25px}.slick-next:before{content:"→"}[dir=rtl] .slick-next:before{content:"←"}.slick-dotted.slick-slider{margin-bottom:30px}.slick-dots{position:absolute;bottom:-25px;display:block;width:100%;padding:0;margin:0;list-style:none;text-align:center}.slick-dots li{position:relative;display:inline-block;margin:0 5px;padding:0}.slick-dots li,.slick-dots li button{width:20px;height:20px;cursor:pointer}.slick-dots li button{font-size:0;line-height:0;display:block;padding:5px;color:transparent;border:0;outline:none;background:transparent}.slick-dots li button:focus,.slick-dots li button:hover{outline:none}.slick-dots li button:focus:before,.slick-dots li button:hover:before{opacity:1}.slick-dots li button:before{font-family:"slick";font-size:6px;line-height:20px;position:absolute;top:0;left:0;width:20px;height:20px;content:"•";text-align:center;opacity:.25;color:#000;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.slick-dots li.slick-active button:before{opacity:.75;color:#000}',""]),t.exports=o},446:function(t,e,r){"use strict";r.r(e);r(49),r(217);var o={props:{blogPath:{type:String,default:null,required:!0},blogSlug:{type:String,default:null,required:!0},blogTitle:{type:String,default:null,required:!0},blogCoverImage:{type:String,default:null,required:!0},blogCoverImageAltText:{type:String,default:null,required:!1},blogCategories:{type:Array,default:null,required:!1},blogReadingTime:{type:Number,default:null,required:!1}}},n=r(33),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("article",{staticClass:"feature feature-1"},[e("NuxtLink",{staticClass:"block",attrs:{to:{path:t.blogPath,query:t.$route.query}}},[e("nuxt-img",{attrs:{alt:t.blogCoverImageAltText,src:t.blogCoverImage,format:"webp",height:"245",width:"370",fit:"fill"}})],1),t._v(" "),e("div",{staticClass:"feature__body boxed boxed--border"},[t.blogCategories?e("div",t._l(t.blogCategories,(function(r,o){return e("span",{key:r._id},[o>0?e("span",[t._v(",")]):t._e(),t._v(" "),e("NuxtLink",{attrs:{to:{path:"/blogs/categories/"+r.slug,query:t.$route.query}}},[t._v(t._s(r.name))])],1)})),0):t._e(),t._v(" "),e("h5",[t._v(t._s(t.blogTitle))]),t._v(" "),e("NuxtLink",{attrs:{to:{path:t.blogPath,query:t.$route.query}}},[t._v("\n      Read More\n    ")]),t._v(" "),t.blogReadingTime?e("span",[t._v(" | "+t._s(t.blogReadingTime)+" MIN READ")]):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports},455:function(t,e,r){"use strict";r(441)},456:function(t,e,r){var o=r(71)(!1);o.push([t.i,"input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}",""]),t.exports=o},459:function(t,e,r){var content=r(475);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("0e91e5cb",content,!0,{sourceMap:!1})},460:function(t,e,r){"use strict";r.r(e);var o=r(24),n=(r(73),r(11),r(1374)),l=r(1375),c=r(1376),d=r(208),h={components:{BForm:n.a,BFormGroup:l.a,BFormInput:c.a,BButton:d.a},data:function(){return{loading:!1,current_path:this.$route.fullPath,mobile_no:"",referral:this.$route.query.utm_referral||""}},methods:{submitForm:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,n,l,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),o={request:"mobile_form",current_path:e.$route.fullPath,mobile_no:e.mobile_no,referral:e.referral},n={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(o)},e.loading=!0,r.next=6,fetch("https://main-website-leads-api-i6xwiarxdq-el.a.run.app",n).catch((function(t){e.$bvToast.toast(t,{title:"Error",variant:"danger",solid:!0})}));case 6:if(l=r.sent,e.loading=!1,!l.ok){r.next=15;break}return r.next=11,l.json();case 11:if((data=r.sent).success){e.$bvModal.hide("form-modal"),e.$bvToast.toast(data.message,{title:"Success",variant:"success",solid:!0});try{window.Moengage&&(window.Moengage.add_first_name(e.first_name),window.Moengage.add_last_name(e.last_name),window.Moengage.add_mobile(e.mobile_no),window.Moengage.track_event("Blog Subscription Lead",{lead_id:data.enquireId,mobile_no:e.mobile_no,referral:e.referral}))}catch(t){}finally{e.current_path=e.$route.fullPath,e.mobile_no="",e.referral=e.$route.query.utm_referral||"",e.loading=!1}}else e.$bvToast.toast(data.message,{title:"Error",variant:"danger",solid:!0});r.next=16;break;case 15:e.$bvToast.toast("Failed submitting your request",{title:"Error",variant:"danger",solid:!0});case 16:case"end":return r.stop()}}),r)})))()}}},m=(r(455),r(33)),component=Object(m.a)(h,(function(){var t=this,e=t._self._c;return e("b-modal",{attrs:{id:"form-modal",size:"md",centered:"","hide-header":"","hide-footer":"",title:"Please fill in the below details to get a call from our technical expert."}},[e("b-container",[e("b-button",{staticStyle:{right:"0.1em",top:"0.1em",position:"absolute",margin:"0px","z-index":"9999"},attrs:{variant:"outline-danger",squared:"",size:"sm"},on:{click:function(e){return t.$bvModal.hide("form-modal")}}},[t._v("\n      X\n    ")]),t._v(" "),e("b-row",{attrs:{"align-v":"center"}},[e("b-col",[e("b-form",{ref:"contact_form",on:{submit:t.submitForm}},[e("b-form-row",[e("b-col",{attrs:{sm:"10"}},[e("h3",[t._v("Join 30,000+ SME Businesses")])]),t._v(" "),e("b-col",{attrs:{sm:"2"}})],1),t._v(" "),e("b-form-row",[e("div",{staticClass:"text-block"},[e("p",[t._v("\n                Get expert insights straight to your inbox, and become a better SME business. Subscribe to TranZact Blog below.\n              ")])])]),t._v(" "),e("b-form-row",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.current_path,expression:"current_path"}],attrs:{name:"current_path",type:"hidden"},domProps:{value:t.current_path},on:{input:function(e){e.target.composing||(t.current_path=e.target.value)}}}),t._v(" "),e("b-col",{attrs:{sm:"12"}},[e("b-form-group",{attrs:{label:"Mobile no.*:","label-for":"footer_mobile_no"}},[e("b-form-input",{staticClass:"validate-required validate-number-dash",attrs:{id:"footer_mobile_no",type:"number",min:"5555555555",max:"9999999999",required:""},model:{value:t.mobile_no,callback:function(e){t.mobile_no=e},expression:"mobile_no"}})],1)],1)],1),t._v(" "),e("b-form-row",[e("b-col",[e("span",{staticClass:"type--fine-print"},[t._v("You agree to the\n                "),e("NuxtLink",{attrs:{target:"_blank",rel:"keep-params",to:{name:"terms-and-agreement",query:t.$route.query}}},[t._v("Terms of Service")])],1)])],1),t._v(" "),e("b-button",{class:{"btn--loading":t.loading},attrs:{type:"submit",variant:"primary",size:"lg",block:""}},[t._v("\n            Submit\n          ")]),t._v(" "),e("b-form-row",{staticClass:"my-3 text-center"},[e("b-col",{attrs:{sm:"12"}},[e("span",[t._v("\n                Not using\n                "),e("a",{attrs:{target:"_blank",rel:"keep-params",href:"https://app.letstranzact.com/v2/signup".concat(t.queryObjectToString(t.$route.query))},on:{click:function(e){return t.signUpRedirect(void 0,t.label="blogs",t.category="subscription-form")}}},[t._v("TranZact")]),t._v("\n                yet?\n              ")])])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},474:function(t,e,r){"use strict";r(459)},475:function(t,e,r){var o=r(71)(!1);o.push([t.i,".custom-dot-class li button:before{color:#05b384!important}",""]),t.exports=o},478:function(t,e,r){"use strict";r.r(e);var o=r(437),n=r.n(o),l=(r(438),{components:{VueSlickCarousel:n.a},props:{sectionClasses:{type:String,default:null,required:!1},headLine:{type:String,default:null,required:!1},blogList:{type:Array,required:!0,default:function(){return["barcode-inventory-system","production-management-system","material-requirements-planning"]}}},data:function(){return{slickOptions:{slidesToShow:3,slidesToScroll:3,arrows:!1,dots:!0,dotsClass:"slick-dots custom-dot-class",autoplay:!0,autoplaySpeed:4e3,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}}}}),c=(r(474),r(33)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("section",{class:t.sectionClasses},[e("b-container",[t.headLine?e("b-row",{staticClass:"mb-5"},[e("div",{staticClass:"col-lg-12 col-md-12 text-center"},[e("h2",{staticClass:"font-weight-bold"},[t._v("\n          "+t._s(t.headLine)+"\n        ")])])]):t._e(),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("VueSlickCarousel",t._b({},"VueSlickCarousel",t.slickOptions,!1),t._l(t.blogList,(function(t){return e("div",{key:t._id,staticClass:"col"},[e("BlogCardSimple",{attrs:{"blog-path":t.path,"blog-slug":t.slug,"blog-cover-image":t.coverImage,"blog-cover-image-alt-text":t.coverImageAltText?t.coverImageAltText:t.slug,"blog-title":t.title}})],1)})),0)],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogCardSimple:r(446).default})},482:function(t,e,r){var content=r(499);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("e2fdc4f4",content,!0,{sourceMap:!1})},483:function(t,e,r){var content=r(501);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("d5a45102",content,!0,{sourceMap:!1})},498:function(t,e,r){"use strict";r(482)},499:function(t,e,r){var o=r(71)(!1);o.push([t.i,".btn[data-v-130271b8]{border-radius:200px;background-color:#f5f5f5;border:none}@media only screen and (max-width:960px){.table-size[data-v-130271b8]{overflow-x:scroll}}.table-size table[data-v-130271b8]{width:718px;height:43rem}.media-link[data-v-130271b8]{display:flex;align-items:center;justify-content:space-around;grid-gap:40px;gap:40px;margin-top:18px;border-bottom:2px solid #f0f0f0;padding-bottom:2rem}",""]),t.exports=o},500:function(t,e,r){"use strict";r(483)},501:function(t,e,r){var o=r(71)(!1);o.push([t.i,".newsBlog-background{background:linear-gradient(92.93deg,#ebfce4,#ecfffe)}.blog-box{padding:40px 80px}",""]),t.exports=o},535:function(t,e,r){"use strict";r.r(e);var o={props:{articleUrl:{type:String,default:null,required:!0},articleQuote:{type:String,default:null,required:!0},articleTitle:{type:String,default:null,required:!0},articleSummary:{type:String,default:null,required:!0},articleSource:{type:String,default:null,required:!0}}},n=(r(498),r(33)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("b-row",{staticClass:"mt-5 mb-5"},[e("b-col",{attrs:{sm:"12",lg:"12",md:"12"}},[t._v("\n    Share this blog:\n    "),e("div",{staticClass:"media-link"},[e("a",{attrs:{target:"_blank","data-action":"share/whatsapp/share",href:"https://api.whatsapp.com/send?text=Hey checkout this blog from Tranzact "+encodeURI(t.articleUrl)}},[e("nuxt-img",{attrs:{src:"blog-whatsapp.svg"}})],1),t._v(" "),e("a",{attrs:{target:"_blank",href:"https://www.facebook.com/sharer/sharer.php?u="+encodeURI(t.articleUrl)+"&quote="+encodeURI(t.articleQuote)}},[e("nuxt-img",{attrs:{src:"blog-fb.svg"}})],1),t._v(" "),e("a",{attrs:{target:"_blank",href:"https://twitter.com/intent/tweet?via=letstranzact&text=Hey checkout this blog from Tranzact "+encodeURI(t.articleUrl)}},[e("nuxt-img",{attrs:{src:"blog-twitter.svg"}})],1),t._v(" "),e("a",{attrs:{target:"_blank",href:"https://www.linkedin.com/shareArticle?mini=true&url="+encodeURI(t.articleUrl)+"&title="+encodeURI(t.articleTitle)+"&summary="+encodeURI(t.articleSummary)+"&source="+encodeURI(t.articleSource)}},[e("nuxt-img",{attrs:{src:"blog-linkdin.svg"}})],1)])])],1)}),[],!1,null,"130271b8",null);e.default=component.exports},536:function(t,e,r){"use strict";r.r(e);r(42),r(65);var o=r(24),n=(r(73),r(51),r(11),{data:function(){return{current_path:this.$route.fullPath,email:"",checked:[],referral:this.$route.query.utm_referral||"",loading:!1}},methods:{submitEmailForm:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,n,l,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.preventDefault(),""!==e.email){r.next=5;break}e.$bvToast.toast("Please enter your email address",{title:"Error",variant:"danger",solid:!0}),r.next=20;break;case 5:return e.loading=!0,o={request:"blog_email_form",current_path:e.$route.fullPath,email:e.email,category:e.checked.join(","),referral:e.referral},n={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(o)},r.next=10,fetch("https://main-website-leads-api-i6xwiarxdq-el.a.run.app",n).catch((function(t){e.$bvToast.toast(t,{title:"Error",variant:"danger",solid:!0})}));case 10:if(l=r.sent,e.loading=!1,!l.ok){r.next=19;break}return r.next=15,l.json();case 15:if((data=r.sent).success){e.$bvToast.toast(data.message,{title:"Success",variant:"success",solid:!0});try{window.Moengage&&(window.Moengage.add_email(e.email),window.Moengage.track_event("Email Lead",{lead_id:data.enquireId,email:e.email,referral:e.referral}))}catch(t){}finally{e.current_path=e.$route.fullPath,e.email="",e.referral=e.$route.query.utm_referral||"",e.loading=!1}}else e.$bvToast.toast(data.message,{title:"Error",variant:"danger",solid:!0});r.next=20;break;case 19:e.$bvToast.toast("Failed submitting your request",{title:"Error",variant:"danger",solid:!0});case 20:case"end":return r.stop()}}),r)})))()}}}),l=(r(500),r(33)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"space--xs"},[e("div",{staticClass:"container-fluid newsBlog-background"},[e("div",{staticClass:"blog-box"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-7 col-lg-7 col-sm-12 my-auto"},[e("div",{staticClass:"switchable__text my-sm-4"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("form",{staticClass:"form-email form--active",attrs:{id:"newsletter_form",novalidate:"true"},on:{submit:t.submitEmailForm}},[e("h4",[t._v("\n                Pick the blog emails you want to receive\n              ")]),t._v(" "),e("div",{staticClass:"row text-left"},[e("div",{staticClass:"col-md-4 col-sm-3"},[e("div",{staticClass:"input-checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],attrs:{id:"checkbox1",type:"checkbox",name:"category",value:"purchase_management"},domProps:{checked:Array.isArray(t.checked)?t._i(t.checked,"purchase_management")>-1:t.checked},on:{change:function(e){var r=t.checked,o=e.target,n=!!o.checked;if(Array.isArray(r)){var l="purchase_management",c=t._i(r,l);o.checked?c<0&&(t.checked=r.concat([l])):c>-1&&(t.checked=r.slice(0,c).concat(r.slice(c+1)))}else t.checked=n}}}),t._v(" "),e("label",{attrs:{for:"checkbox1"}})]),t._v(" "),e("span",[t._v("Inventory")])]),t._v(" "),e("div",{staticClass:"col-md-4 col-sm-3"},[e("div",{staticClass:"input-checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],attrs:{id:"checkbox2",type:"checkbox",name:"category",value:"purchase_production"},domProps:{checked:Array.isArray(t.checked)?t._i(t.checked,"purchase_production")>-1:t.checked},on:{change:function(e){var r=t.checked,o=e.target,n=!!o.checked;if(Array.isArray(r)){var l="purchase_production",c=t._i(r,l);o.checked?c<0&&(t.checked=r.concat([l])):c>-1&&(t.checked=r.slice(0,c).concat(r.slice(c+1)))}else t.checked=n}}}),t._v(" "),e("label",{attrs:{for:"checkbox2"}})]),t._v(" "),e("span",[t._v("Production")])]),t._v(" "),e("div",{staticClass:"col-md-4 col-sm-3"},[e("div",{staticClass:"input-checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],attrs:{id:"checkbox4",type:"checkbox",name:"category",value:"quality_store"},domProps:{checked:Array.isArray(t.checked)?t._i(t.checked,"quality_store")>-1:t.checked},on:{change:function(e){var r=t.checked,o=e.target,n=!!o.checked;if(Array.isArray(r)){var l="quality_store",c=t._i(r,l);o.checked?c<0&&(t.checked=r.concat([l])):c>-1&&(t.checked=r.slice(0,c).concat(r.slice(c+1)))}else t.checked=n}}}),t._v(" "),e("label",{attrs:{for:"checkbox4"}})]),t._v(" "),e("span",[t._v("Documents")])]),t._v(" "),e("div",{staticClass:"col-md-4 col-sm-3"},[e("div",{staticClass:"input-checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],attrs:{id:"checkbox5",type:"checkbox",name:"category",value:"digital_store"},domProps:{checked:Array.isArray(t.checked)?t._i(t.checked,"digital_store")>-1:t.checked},on:{change:function(e){var r=t.checked,o=e.target,n=!!o.checked;if(Array.isArray(r)){var l="digital_store",c=t._i(r,l);o.checked?c<0&&(t.checked=r.concat([l])):c>-1&&(t.checked=r.slice(0,c).concat(r.slice(c+1)))}else t.checked=n}}}),t._v(" "),e("label",{attrs:{for:"checkbox5"}})]),t._v(" "),e("span",[t._v("Digitization")])]),t._v(" "),e("div",{staticClass:"col-md-4 col-sm-4"},[e("div",{staticClass:"input-checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],attrs:{id:"checkbox3",type:"checkbox",name:"category",value:"purchase_erp"},domProps:{checked:Array.isArray(t.checked)?t._i(t.checked,"purchase_erp")>-1:t.checked},on:{change:function(e){var r=t.checked,o=e.target,n=!!o.checked;if(Array.isArray(r)){var l="purchase_erp",c=t._i(r,l);o.checked?c<0&&(t.checked=r.concat([l])):c>-1&&(t.checked=r.slice(0,c).concat(r.slice(c+1)))}else t.checked=n}}}),t._v(" "),e("label",{attrs:{for:"checkbox3"}})]),t._v(" "),e("span",[t._v("Manufacturing ERP")])])]),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"row text-left"},[e("div",{staticClass:"col-lg-8"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"validate-required validate-email",attrs:{type:"email",name:"Email",placeholder:"Email Address"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-lg-4"},[e("button",{staticClass:"btn btn-primary type--uppercase",class:{"btn--loading":t.loading},attrs:{type:"submit"}},[t._v("\n                    Subscribe\n                  ")])])])])])]),t._v(" "),e("div",{staticClass:"col-md-5 col-lg-5 col-sm-12 my-auto hidden-xs"},[e("nuxt-img",{attrs:{src:"bolgs-news-bg.svg",height:"100%"}})],1)])])])])}),[function(){var t=this._self._c;return t("h4",{staticClass:"color--primary font-weight-bold"},[t("strong",[this._v("TranZact Blogs")])])},function(){var t=this._self._c;return t("h2",{staticClass:"color--secondary"},[t("strong",[this._v("Subscribe to Our Blog")])])},function(){var t=this._self._c;return t("div",{staticClass:"row text-left"},[t("div",{staticClass:"col-lg-12 mt-3"},[t("h4",{staticClass:"font-weight-bold"},[this._v("\n                    Email Address\n                  ")])])])}],!1,null,null,null);e.default=component.exports}}]);