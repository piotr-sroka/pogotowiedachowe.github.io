(window.webpackJsonp=window.webpackJsonp||[]).push([[1,9,10,11,12,13,14,15,16,17],{232:function(t,e,o){var content=o(245);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(32).default)("ff0f1016",content,!0,{sourceMap:!1})},235:function(t,e,o){var content=o(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(32).default)("4d407b4f",content,!0,{sourceMap:!1})},236:function(t,e,o){var content=o(257);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(32).default)("7a07d4ae",content,!0,{sourceMap:!1})},237:function(t,e,o){var content=o(260);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(32).default)("3734ac97",content,!0,{sourceMap:!1})},239:function(t,e,o){"use strict";o.r(e);var n={props:["item"],data:function(){return{currentDisplayedImage:0}},methods:{getRand:function(){return Math.random()},hideGallery:function(){this.$emit("hideGallery")},showImage:function(t){"prev"===t&&this.currentDisplayedImage--,"next"===t&&this.currentDisplayedImage++,this.currentDisplayedImage<0&&(this.currentDisplayedImage=this.item.images.length-1),this.currentDisplayedImage>this.item.images.length-1&&(this.currentDisplayedImage=0)}},mounted:function(){}},r=(o(244),o(33)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"gallery"},[o("div",{staticClass:"gallery-bg",on:{click:function(e){return e.stopPropagation(),t.hideGallery(e)}}}),t._v(" "),o("div",{staticClass:"gallery-content"},[o("div",{staticClass:"item-images"},[o("div",{staticClass:"item-image_container"},[o("transition",{attrs:{name:"imageShow"}},[o("img",{attrs:{src:t.item.images[t.currentDisplayedImage]+"?random="+t.getRand(),alt:""}})])],1)]),t._v(" "),t.item.images.length>1?o("div",{staticClass:"arrow arrow-left",on:{click:function(e){return t.showImage("prev")}}}):t._e(),t._v(" "),t.item.images.length>1?o("div",{staticClass:"arrow arrow-right",on:{click:function(e){return t.showImage("next")}}}):t._e(),t._v(" "),o("div",{staticClass:"item-copy"},[o("h5",{staticClass:"item-title"},[t._v(t._s(t.item.title))]),t._v(" "),o("perfect-scrollbar",[o("p",{staticClass:"item-description"},[t._v(t._s(t.item.description))])])],1)]),t._v(" "),o("button",{staticClass:"close-btn",on:{click:t.hideGallery}})])}),[],!1,null,"2b232e81",null);e.default=component.exports},244:function(t,e,o){"use strict";o(232)},245:function(t,e,o){var n=o(31)(!1);n.push([t.i,'.gallery[data-v-2b232e81]{position:fixed;background-color:rgba(0,0,0,.8);transition:all .35s ease-out}.gallery[data-v-2b232e81],.gallery-bg[data-v-2b232e81]{width:100%;height:100%;top:0;left:0}.close-btn[data-v-2b232e81],.gallery-bg[data-v-2b232e81]{position:absolute}.close-btn[data-v-2b232e81]{top:18px;right:18px;background-color:transparent;border:none;outline:none;cursor:pointer}.close-btn[data-v-2b232e81]:before{content:"\\2716";color:#ffaa06;font-size:24px;width:30px;height:30px;display:flex;justify-content:center;align-items:center;transform-origin:center center;transition:all .2s ease-out}.close-btn[data-v-2b232e81]:hover:before{transform:scale(1.4)}.item-copy[data-v-2b232e81]{width:100%;height:300px;position:absolute;bottom:0;display:flex;flex-direction:column;justify-content:flex-end;padding-bottom:22px;background-color:rgba(0,0,0,.8)}.item-description[data-v-2b232e81],.item-title[data-v-2b232e81]{max-width:960px;margin:0 auto;text-align:justify}.item-title[data-v-2b232e81]{font-size:16px;font-weight:700;height:60px;padding:14px;display:flex;align-items:center;color:#ffaa06}.item-description[data-v-2b232e81]{font-size:14px;min-height:60px;max-height:240px;padding:14px;color:#fafafa}.item-images[data-v-2b232e81]{position:absolute;width:100%;height:Calc(100% - 300px);pointer-events:none}.item-image_container[data-v-2b232e81]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:none}.item-image_container img[data-v-2b232e81]{max-width:100%;max-height:100%;padding:80px;pointer-events:all}.arrow[data-v-2b232e81]{position:absolute;width:80px;height:80px;background-color:rgba(0,0,0,.4);display:flex;justify-content:center;align-items:center;top:Calc(50% - 150px);cursor:pointer}.arrow-left[data-v-2b232e81]{left:10px}.arrow-right[data-v-2b232e81]{right:10px}.arrow[data-v-2b232e81]:after,.arrow[data-v-2b232e81]:before{color:#ffaa06;font-size:48px;text-align:center;transition:all .2s ease-out;position:absolute;opacity:0}.arrow[data-v-2b232e81]:after{color:#fafafa;opacity:.3}.arrow[data-v-2b232e81]:hover:before{transform:translateX(10px);opacity:1}.arrow.arrow-left[data-v-2b232e81]:hover:before{transform:translateX(-10px)}.arrow.arrow-left[data-v-2b232e81]:after,.arrow.arrow-left[data-v-2b232e81]:before{content:"\\2039"}.arrow.arrow-right[data-v-2b232e81]:after,.arrow.arrow-right[data-v-2b232e81]:before{content:"\\203A"}@media screen and (max-width:1280px){.item-image_container img[data-v-2b232e81]{padding:0}}.imageShow-enter-active[data-v-2b232e81],.imageShow-leave-active[data-v-2b232e81]{transition:opacity .5s}.imageShow-enter[data-v-2b232e81],.imageShow-leave-to[data-v-2b232e81]{opacity:0}',""]),t.exports=n},252:function(t,e,o){var content=o(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(32).default)("29b19257",content,!0,{sourceMap:!1})},253:function(t,e,o){"use strict";o(235)},254:function(t,e,o){var n=o(31)(!1);n.push([t.i,".stripe[data-v-5bd4496a]{width:100%;display:flex;justify-content:center;align-items:center}.stripe>div[data-v-5bd4496a]{padding:36px 60px;margin:24px 0}.stripe>div[data-v-5bd4496a]:first-of-type{border-right:1px solid #e0e0e0}.title[data-v-5bd4496a]{font-size:1em;font-weight:600;text-align:center;margin-bottom:8px}.title_yellow[data-v-5bd4496a]{color:#ffaa06}.description[data-v-5bd4496a]{font-size:1.4em;color:#525252;text-align:center;display:flex;align-items:center;justify-content:center}.description img[data-v-5bd4496a]{height:20px;margin-right:12px}@media screen and (max-width:720px){.stripe[data-v-5bd4496a]{flex-direction:column;padding:0 24px}.stripe>div[data-v-5bd4496a]{width:100%;padding:36px 60px;margin:0}.stripe>div[data-v-5bd4496a]:first-of-type{border-right:none;border-bottom:1px solid #e0e0e0}}@media screen and (max-width:360px){.stripe[data-v-5bd4496a]{padding:0 6px}}",""]),t.exports=n},255:function(t,e,o){var content=o(276);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(32).default)("43932030",content,!0,{sourceMap:!1})},256:function(t,e,o){"use strict";o(236)},257:function(t,e,o){var n=o(31)(!1);n.push([t.i,'.portfolio-item[data-v-ed724056]{flex:1;background-color:#1f2029;color:#fafafa;min-width:640px;max-width:100%;height:360px;position:relative;cursor:pointer;overflow:hidden}.item-image[data-v-ed724056]{-o-object-fit:cover;object-fit:cover}.item-copy[data-v-ed724056],.item-image[data-v-ed724056]{position:absolute;height:100%;width:100%}.item-copy[data-v-ed724056]{background-color:rgba(31,32,41,.8);bottom:Calc(-100% + 60px);transition:all .35s ease-out}.portfolio-item:hover .item-copy[data-v-ed724056]{bottom:0}.portfolio-item:hover .item-title[data-v-ed724056]{color:#ffaa06}.item-description[data-v-ed724056],.item-title[data-v-ed724056]{font-size:14px;padding:18px 100px 18px 18px;transition:all .2s ease-out}.item-title[data-v-ed724056]{font-weight:700;height:60px;display:flex;align-items:center}.item-description[data-v-ed724056]{height:300px;margin-bottom:-70px}.show-more-btn[data-v-ed724056]{border:none;outline:none;color:#fafafa;background-color:#ffaa06;position:absolute;right:18px;bottom:18px;padding:12px 24px;cursor:pointer;overflow:hidden}.show-more-btn[data-v-ed724056]:after{content:">";display:inline-block;font-size:smaller;margin-right:-24px;margin-left:0;opacity:0;width:24px;transition:all .2s ease-out}.show-more-btn[data-v-ed724056]:hover{padding-right:24px}.show-more-btn[data-v-ed724056]:hover:after{margin-right:0;margin-left:24px;opacity:1}@media screen and (max-width:1280px){.portfolio-item[data-v-ed724056]{min-width:320px}}',""]),t.exports=n},258:function(t,e,o){var content=o(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(32).default)("4afc3fd9",content,!0,{sourceMap:!1})},259:function(t,e,o){"use strict";o(237)},260:function(t,e,o){var n=o(31)(!1);n.push([t.i,'.references-item[data-v-530169e8]{flex:1;background-color:#1f2029;color:#fafafa;min-width:320px;max-width:25%;height:360px;position:relative;cursor:pointer;overflow:hidden}.item-image[data-v-530169e8]{-o-object-fit:cover;object-fit:cover}.item-copy[data-v-530169e8],.item-image[data-v-530169e8]{position:absolute;height:100%;width:100%}.item-copy[data-v-530169e8]{background-color:rgba(31,32,41,.8);bottom:Calc(-100% + 60px);transition:all .35s ease-out}.references-item:hover .item-copy[data-v-530169e8]{bottom:0}.references-item:hover .item-title[data-v-530169e8]{color:#ffaa06}.item-description[data-v-530169e8],.item-title[data-v-530169e8]{font-size:14px;padding:18px 100px 18px 18px;transition:all .2s ease-out}.item-title[data-v-530169e8]{font-weight:700;height:60px;display:flex;align-items:center}.item-description[data-v-530169e8]{height:300px;margin-bottom:-70px}.show-more-btn[data-v-530169e8]{border:none;outline:none;color:#fafafa;background-color:#ffaa06;position:absolute;right:18px;bottom:18px;padding:12px 24px;cursor:pointer;overflow:hidden}.show-more-btn[data-v-530169e8]:after{content:">";display:inline-block;font-size:smaller;margin-right:-24px;margin-left:0;opacity:0;width:24px;transition:all .2s ease-out}.show-more-btn[data-v-530169e8]:hover{padding-right:24px}.show-more-btn[data-v-530169e8]:hover:after{margin-right:0;margin-left:24px;opacity:1}@media screen and (max-width:1280px){.references-item[data-v-530169e8]{min-width:320px}}',""]),t.exports=n},261:function(t,e,o){var content=o(280);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(32).default)("0e202b60",content,!0,{sourceMap:!1})},262:function(t,e,o){var content=o(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(32).default)("00c4c160",content,!0,{sourceMap:!1})},266:function(t,e,o){"use strict";o.r(e);var n={},r=(o(253),o(33)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"stripe stripe-light_grey"},[o("div",[o("p",{staticClass:"description"},[o("a",{staticClass:"phone-button",attrs:{href:"tel:783-211-118"}},[o("img",{attrs:{src:"/images/contact.svg",alt:""}}),t._v(" "),o("span",[t._v("783-211-118")])])])]),t._v(" "),o("div",[o("p",{staticClass:"description"},[o("img",{attrs:{src:"/images/clock.svg",alt:""}}),t._v(" "),o("span",[t._v("7:00 – 17:00")])])])])}],!1,null,"5bd4496a",null);e.default=component.exports},268:function(t,e,o){"use strict";o.r(e);var n={props:["item"],methods:{getRand:function(){return Math.random()},onItemClick:function(){this.$emit("showGallery",this.item)}}},r=(o(256),o(33)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"portfolio-item"},[o("img",{staticClass:"item-image",attrs:{src:t.item.images[0]+"?random="+t.getRand(),alt:""}}),t._v(" "),o("div",{staticClass:"item-copy"},[o("h5",{staticClass:"item-title"},[t._v(t._s(t.item.title))]),t._v(" "),o("perfect-scrollbar",[o("p",{staticClass:"item-description"},[t._v(t._s(t.item.description))])]),t._v(" "),o("button",{staticClass:"show-more-btn",on:{click:t.onItemClick}},[t._v("Zobacz zdjęcia")])],1)])}),[],!1,null,"ed724056",null);e.default=component.exports},269:function(t,e,o){"use strict";o.r(e);var n={props:["item"],methods:{getRand:function(){return Math.random()},onItemClick:function(){this.$emit("showGallery",this.item)}}},r=(o(259),o(33)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"references-item"},[o("img",{staticClass:"item-image",attrs:{src:t.item.images[0]+"?random="+t.getRand(),alt:""}}),t._v(" "),o("div",{staticClass:"item-copy"},[o("h5",{staticClass:"item-title"},[t._v(t._s(t.item.title))]),t._v(" "),o("perfect-scrollbar",[o("p",{staticClass:"item-description"},[t._v(t._s(t.item.description))])]),t._v(" "),o("button",{staticClass:"show-more-btn",on:{click:t.onItemClick}},[t._v("Zobacz zdjęcia")])],1)])}),[],!1,null,"530169e8",null);e.default=component.exports},273:function(t,e,o){"use strict";o(252)},274:function(t,e,o){var n=o(31)(!1);n.push([t.i,".slider[data-v-5e0d9532]{background-color:#f8f8f8;height:600px;width:100%;position:relative}.slide[data-v-5e0d9532]{height:100%;background-size:cover;background-repeat:no-repeat;background-image:var(--slide-bg);background-position:50%;transition:opacity .4s ease-in-out;opacity:1;color:#f8f8f8;display:flex;justify-content:center;align-items:center;flex-direction:column}.slide.slide-changing[data-v-5e0d9532]{opacity:0}.slide.slide-changing .slide-headline[data-v-5e0d9532]{transform:translateY(-30px)}.slide.slide-changing .slide-description[data-v-5e0d9532]{transform:translateY(30px)}.slide-description[data-v-5e0d9532],.slide-headline[data-v-5e0d9532]{padding:12px 24px;max-width:720px;text-align:center;line-height:1.2;transition:transform .4s ease-in-out}.slide-headline[data-v-5e0d9532]{font-size:2em}.slide-description[data-v-5e0d9532]{font-size:1.2em}@media screen and (max-width:720px){.slider[data-v-5e0d9532]{height:440px;background-size:contain}}",""]),t.exports=n},275:function(t,e,o){"use strict";o(255)},276:function(t,e,o){var n=o(31)(!1);n.push([t.i,'.aboutus[data-v-00e8b0a0]{background-image:url(/images/about_bg.jpg);background-size:cover;background-position:50%;position:relative;padding-bottom:64px}.aboutus[data-v-00e8b0a0]:after{top:0;height:1px;border-top:1px solid #ffaa06}.aboutus[data-v-00e8b0a0]:after,.aboutus[data-v-00e8b0a0]:before{content:"";position:absolute;width:100%}.aboutus[data-v-00e8b0a0]:before{height:100%;background-color:hsla(0,0%,100%,.9);pointer-events:none;display:block}.aboutus-content[data-v-00e8b0a0]{position:relative;width:100%;height:100%;max-width:1280px;margin:0 auto}.aboutus-headline[data-v-00e8b0a0]{font-size:2em;margin:0 auto 24px;padding:24px 80px;border-bottom:1px solid #1f2029;max-width:480px;text-align:center}.aboutus-description[data-v-00e8b0a0]{font-size:1.2em;text-align:center;margin:0 auto;max-width:640px;padding:0 80px}.aboutus-content_boxes[data-v-00e8b0a0]{margin-top:64px;justify-content:space-between}.aboutus-content_boxes[data-v-00e8b0a0],.box[data-v-00e8b0a0]{display:flex;align-items:center}.box[data-v-00e8b0a0]{flex:1;max-width:28%;padding:40px 20px;background-color:#fff;color:#1f2029;text-align:center;justify-content:center;flex-direction:column}.box img[data-v-00e8b0a0]{max-height:100%;margin:auto}.box .icon[data-v-00e8b0a0]{width:48px;height:48px;margin:12px;position:relative;display:flex;justify-content:center}.box-headline[data-v-00e8b0a0]{margin:12px 0}.box.contact-box[data-v-00e8b0a0]{background-color:#1f2029;color:#fafafa;padding:60px 20px}@media screen and (max-width:720px){.aboutus[data-v-00e8b0a0]{padding-bottom:0}.aboutus-headline[data-v-00e8b0a0]{padding:24px 20px}.aboutus-description[data-v-00e8b0a0]{padding:0 20px}.aboutus-content_boxes[data-v-00e8b0a0]{flex-direction:column;padding:0}.box[data-v-00e8b0a0]{max-width:100%;width:100%}}',""]),t.exports=n},277:function(t,e,o){"use strict";o(258)},278:function(t,e,o){var n=o(31)(!1);n.push([t.i,'.portfolio[data-v-5b97d06f]{position:relative}.portfolio-content[data-v-5b97d06f]:after{content:"";position:absolute;top:0;width:100%;height:1px;border-top:1px solid #ffaa06}.portfolio-content[data-v-5b97d06f]{position:relative;display:flex;justify-content:center;align-items:center;flex-direction:column}.portfolio-content>div[data-v-5b97d06f]{width:100%}.portfolio-content>h4[data-v-5b97d06f]{font-size:2em;margin:0 auto 24px;padding:24px 80px;border-bottom:1px solid #1f2029;max-width:480px;text-align:center}.portfolio-items[data-v-5b97d06f]{display:flex;justify-content:center;flex-wrap:wrap}',""]),t.exports=n},279:function(t,e,o){"use strict";o(261)},280:function(t,e,o){var n=o(31)(!1);n.push([t.i,'.references[data-v-8cfa6d88]{position:relative}.references-content[data-v-8cfa6d88]:after{content:"";position:absolute;top:0;width:100%;height:1px;border-top:1px solid #ffaa06}.references-content[data-v-8cfa6d88]{position:relative;display:flex;justify-content:center;align-items:center;flex-direction:column}.references-content>div[data-v-8cfa6d88]{width:100%}.references-content>h4[data-v-8cfa6d88]{font-size:2em;margin:0 auto 24px;padding:24px 80px;border-bottom:1px solid #1f2029;max-width:480px;text-align:center}.references-items[data-v-8cfa6d88]{display:flex;justify-content:center;flex-wrap:wrap}',""]),t.exports=n},281:function(t,e,o){"use strict";o(262)},282:function(t,e,o){var n=o(31)(!1);n.push([t.i,'.contact[data-v-c75a669a]{background-image:url(/images/contact-map.png);background-position:50%;background-size:cover;position:relative;padding-bottom:64px}.contact[data-v-c75a669a]:after{height:1px;border-top:1px solid #ffaa06}.contact[data-v-c75a669a]:after,.contact[data-v-c75a669a]:before{content:"";position:absolute;top:0;width:100%}.contact[data-v-c75a669a]:before{height:100%;left:0;background-color:hsla(0,0%,100%,.96)}.contact-content[data-v-c75a669a]{position:relative;display:flex;justify-content:center;align-items:center;flex-direction:column;max-width:1280px;margin:0 auto}.contact-content>div[data-v-c75a669a]{width:100%}.contact-content h4[data-v-c75a669a]{font-size:2em;margin:0 auto 24px;padding:24px 80px;border-bottom:1px solid #1f2029;max-width:480px;text-align:center}.contact-address[data-v-c75a669a]{font-size:1.2em;text-align:center;margin-bottom:12px}.contact-map[data-v-c75a669a]{width:100%;max-height:360px;padding:0 20px}.icon[data-v-c75a669a]{height:20px}',""]),t.exports=n},288:function(t,e,o){"use strict";o.r(e);var n=o(296),r=o(266),l=o(297),c=o(298),d=o(299),f=o(300),m=o(239),h={props:["portfolio","references","slides","aboutus"],components:{Slider:n.default,ShortContact:r.default,AboutUs:l.default,Portfolio:c.default,References:d.default,Contact:f.default,Gallery:m.default},data:function(){return{itemToShow:null}},methods:{showGallery:function(t){this.itemToShow=t},hideGallery:function(){this.itemToShow=null}},mounted:function(){this.$on("showGallery",this.showGallery)},watch:{itemToShow:function(t,e){e?document.querySelector("body").classList.remove("noscroll"):document.querySelector("body").classList.add("noscroll")}}},v=(o(305),o(33)),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",[t.slides.length>0?o("Slider",{attrs:{slides:t.slides}}):t._e(),t._v(" "),o("AboutUs",{attrs:{aboutus:t.aboutus}}),t._v(" "),o("Portfolio",{attrs:{portfolio:t.portfolio},on:{showGallery:t.showGallery}}),t._v(" "),o("References",{attrs:{references:t.references},on:{showGallery:t.showGallery}}),t._v(" "),o("Contact"),t._v(" "),o("transition",{attrs:{name:"galleryShow"}},[t.itemToShow?o("Gallery",{attrs:{item:t.itemToShow},on:{hideGallery:t.hideGallery}}):t._e()],1)],1)}),[],!1,null,"33428cb0",null);e.default=component.exports;installComponents(component,{Main:o(288).default})},293:function(t,e,o){var content=o(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(32).default)("4f2adc2f",content,!0,{sourceMap:!1})},296:function(t,e,o){"use strict";o.r(e);o(50);var n={props:["slides"],data:function(){return{currentSlideNumber:0,sliderTimer:10,isChanging:!1}},computed:{currentSlide:function(){return this.slides[this.currentSlideNumber]},sliderStyle:function(){return{"--slide-bg":"url(".concat(this.currentSlide.images[0],")")}}},methods:{changeSlide:function(){var t=this;this.isChanging=!1,this.currentSlideNumber<this.slides.length-1?this.currentSlideNumber++:this.currentSlideNumber=0,setTimeout((function(){t.isChanging=!0}),1e3*this.sliderTimer),setTimeout((function(){t.changeSlide()}),1e3*this.sliderTimer+400)},addPortfolio:function(){this.$fire.firestore.collection("portfolio").add({title:"Title added to DB",description:"Description from DB",images:["https://picsum.photos/1920/1080"]}).then((function(t){console.log("ITEM SAVED ",t)})).catch((function(t){console.log(t)}))}},mounted:function(){var t=this;this.slides.length>1&&(setTimeout((function(){t.isChanging=!0}),1e3*this.sliderTimer),setTimeout(this.changeSlide,1e3*this.sliderTimer+400))}},r=(o(273),o(33)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"slider",style:t.sliderStyle},[o("div",{staticClass:"slide",class:t.isChanging?"slide-changing":""},[o("h3",{staticClass:"slide-headline"},[t._v("\n      "+t._s(t.currentSlide.title.replace(/-/gi,"‑"))+"\n    ")]),t._v(" "),o("p",{staticClass:"slide-description"},[t._v("\n      "+t._s(t.currentSlide.description.replace(/-/gi,"‑"))+"\n    ")])])])}),[],!1,null,"5e0d9532",null);e.default=component.exports},297:function(t,e,o){"use strict";o.r(e);var n={props:["aboutus"]},r=(o(275),o(33)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"aboutus",attrs:{id:"onas"}},[t._v("\n  "+t._s(t.aboutus)+"\n  "),o("div",{staticClass:"aboutus-content"},[o("h3",{staticClass:"aboutus-headline"},[t._v("O NAS")]),t._v(" "),o("p",{staticClass:"aboutus-description"},[t._v("\n      "+t._s(t.aboutus.description)+"\n    ")]),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"aboutus-content_boxes"},[o("div",{staticClass:"box"},[o("div",{staticClass:"icon"},[o("img",{attrs:{src:"/images/guarantee.svg",alt:""}})]),t._v(" "),o("h4",{staticClass:"box-headline"},[t._v("Gwarancja jakości")]),t._v(" "),o("p",{staticClass:"box-description"},[t._v("\n          Na wszystkie wykonane przez nas usługi udzielamy pisemną gwarancję.\n        ")])]),t._v(" "),o("div",{staticClass:"box contact-box"},[o("div",{staticClass:"icon"},[o("img",{attrs:{src:"/images/contact.svg",alt:""}})]),t._v(" "),o("h4",{staticClass:"box-headline"},[t._v("Kontakt")]),t._v(" "),o("p",{staticClass:"box-description"},[t._v("\n          Zapraszamy do kontaktu od poniedziałku do piątku w godzinach\n          7.00 – 17.00\n        ")])]),t._v(" "),o("div",{staticClass:"box"},[o("div",{staticClass:"icon"},[o("img",{attrs:{src:"/images/experience.svg",alt:""}})]),t._v(" "),o("h4",{staticClass:"box-headline"},[t._v("15 Lat Doświadczenia")]),t._v(" "),o("p",{staticClass:"box-description"},[t._v("\n          Wieloletnie doświadczenie, dziesiątki różnorodnych prac i napraw\n          dało nam nieocenioną wiedzę i umiejętności.\n        ")])])])}],!1,null,"00e8b0a0",null);e.default=component.exports},298:function(t,e,o){"use strict";o.r(e);var n=o(268),r=o(239),l={components:{PortfolioItem:n.default,Gallery:r.default},props:["portfolio"],methods:{showGallery:function(t){this.$emit("showGallery",t)}},mounted:function(){}},c=(o(277),o(33)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"portfolio",attrs:{id:"realizacje"}},[o("div",{staticClass:"portfolio-content"},[o("h4",[t._v("NASZE REALIZACJE")]),t._v(" "),o("div",{staticClass:"portfolio-items"},t._l(t.portfolio,(function(e){return o("PortfolioItem",{key:e.id,attrs:{item:e},on:{showGallery:t.showGallery}})})),1)])])}),[],!1,null,"5b97d06f",null);e.default=component.exports},299:function(t,e,o){"use strict";o.r(e);var n=o(269),r=o(239),l={components:{ReferencesItem:n.default,Gallery:r.default},props:["references"],methods:{showGallery:function(t){this.$emit("showGallery",t)}},mounted:function(){}},c=(o(279),o(33)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"references",attrs:{id:"referencje"}},[o("div",{staticClass:"references-content"},[o("h4",[t._v("REFERENCJE")]),t._v(" "),o("div",{staticClass:"references-items"},t._l(t.references,(function(e){return o("ReferencesItem",{key:e.id,attrs:{item:e},on:{showGallery:t.showGallery}})})),1)])])}),[],!1,null,"8cfa6d88",null);e.default=component.exports},300:function(t,e,o){"use strict";o.r(e);var n={components:{ShortContact:o(266).default}},r=(o(281),o(33)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"contact",attrs:{id:"kontakt"}},[o("div",{staticClass:"contact-content"},[o("h4",[t._v("KONTAKT")]),t._v(" "),o("ShortContact"),t._v(" "),t._m(0)],1)])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("p",{staticClass:"contact-address"},[t._v("ul. Bohaterów Westerplatte 29, 41-608 Świętochłowice")]),t._v(" "),o("iframe",{staticClass:"contact-map",staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2547.9104305071055!2d18.91010861572647!3d50.3122635794566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716d2bd9248f0bf%3A0x3df0ac64fb4cd4b8!2sBohater%C3%B3w%20Westerplatte%2029%2C%2041-608%20%C5%9Awi%C4%99toch%C5%82owice!5e0!3m2!1spl!2spl!4v1615215564240!5m2!1spl!2spl",width:"600",height:"450",allowfullscreen:"",loading:"lazy"}})])}],!1,null,"c75a669a",null);e.default=component.exports},305:function(t,e,o){"use strict";o(293)},306:function(t,e,o){var n=o(31)(!1);n.push([t.i,".galleryShow-enter-active[data-v-33428cb0],.galleryShow-leave-active[data-v-33428cb0]{transition:opacity .5s}.galleryShow-enter[data-v-33428cb0],.galleryShow-leave-to[data-v-33428cb0]{opacity:0}",""]),t.exports=n}}]);