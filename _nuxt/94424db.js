(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5,6],{222:function(e,t,n){var content=n(229);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(46).default)("1930a9a0",content,!0,{sourceMap:!1})},223:function(e,t,n){var content=n(231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(46).default)("564393a2",content,!0,{sourceMap:!1})},227:function(e,t,n){"use strict";n.r(t);n(228);var o=n(29),component=Object(o.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("nuxt-link",{attrs:{to:{path:"/"}}},[t("img",{staticClass:"NuxtLogo",attrs:{src:"images/logo.svg"}})])}),[],!1,null,null,null);t.default=component.exports},228:function(e,t,n){"use strict";n(222)},229:function(e,t,n){var o=n(45)(!1);o.push([e.i,".NuxtLogo{-webkit-animation:appear 1s;animation:appear 1s;margin:20px;height:80px}@-webkit-keyframes appear{0%{opacity:0}}@keyframes appear{0%{opacity:0}}@media screen and (max-width:860px){.NuxtLogo{height:40px;margin:10px}}",""]),e.exports=o},230:function(e,t,n){"use strict";n(223)},231:function(e,t,n){var o=n(45)(!1);o.push([e.i,".menu[data-v-2a01e430]{height:100%;cursor:pointer}.menu-list[data-v-2a01e430]{list-style-type:none;display:flex;font-weight:500;margin-right:240px;padding:0;height:100%;z-index:999}.menu-list li[data-v-2a01e430],.menu-list li a[data-v-2a01e430]{display:flex;align-items:center;justify-content:center}.menu-list li a[data-v-2a01e430]{text-transform:uppercase;color:inherit;text-decoration:none;width:100%;height:100%;padding:0 40px;color:#fafafa;transition:all .4s ease-in-out;cursor:pointer;letter-spacing:1.5px}.menu-list li a.nuxt-link-active[data-v-2a01e430],.menu-list li a[data-v-2a01e430]:hover{background-color:#1f2029;color:#ffaa06}.menu-list li.link-button[data-v-2a01e430]{margin-left:60px}.menu-list li.link-button a[data-v-2a01e430]{border-radius:5px;color:#1f2029;background-color:#ffaa06;height:40px;margin:auto}.menu-list li.link-button a.nuxt-link-active[data-v-2a01e430],.menu-list li.link-button a[data-v-2a01e430]:hover{color:#fafafa;background-color:#cf8a00}.menu-toggle[data-v-2a01e430]{display:none;padding-top:17px;margin-right:10px;position:relative;width:34px;height:100%}.menu-toggle__bar[data-v-2a01e430]{display:block;width:34px;height:2px;background-color:#ffaa06;margin:5px 0;transform-origin:center center;transition:transform .2s linear}@media screen and (max-width:860px){.menu-list[data-v-2a01e430]{margin-right:10px}}@media screen and (max-width:720px){.menu-list[data-v-2a01e430]{position:absolute;height:0;overflow:hidden;width:100%;top:60px;left:0;display:block;background-color:#2d303b;transition:height .2s linear}.menu.opened .menu-list[data-v-2a01e430]{height:180px}.menu.menu.opened .menu-toggle[data-v-2a01e430]{margin-top:28px}.menu.opened .menu-toggle__bar[data-v-2a01e430]{margin:0;position:absolute;top:0;left:0}.menu.opened .menu-toggle .menu-toggle__bar[data-v-2a01e430]:first-child{transform:rotate(-45deg)}.menu.opened .menu-toggle .menu-toggle__bar[data-v-2a01e430]:nth-child(2){transform:rotate(45deg)}.menu.opened .menu-toggle .menu-toggle__bar[data-v-2a01e430]:nth-child(3){display:none}.menu-list li[data-v-2a01e430]{width:100%;height:60px;border-bottom:1px solid #3b3e50}.menu-list li[data-v-2a01e430],.menu-list li a[data-v-2a01e430]{justify-content:flex-start}.menu-toggle[data-v-2a01e430]{display:block}}",""]),e.exports=o},232:function(e,t,n){var content=n(251);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(46).default)("d3221814",content,!0,{sourceMap:!1})},245:function(e,t,n){"use strict";n.r(t);var o=n(227),l=n(248),r={components:{Logo:o.default,Menu:l.default},methods:{onScroll:function(){window.pageYOffset>0?document.querySelector(".page-container").classList.add("sticky"):document.querySelector(".page-container").classList.remove("sticky")}},mounted:function(){window.onscroll=this.onScroll}},c=(n(250),n(29)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{ref:"header"},[n("div",{staticClass:"header-content"},[n("Logo"),e._v(" "),n("Menu")],1)])}),[],!1,null,"1814908a",null);t.default=component.exports;installComponents(component,{Logo:n(227).default,Header:n(245).default})},248:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{clicked:!1}},methods:{toggleMenu:function(){window.matchMedia("(max-width: 720px)").matches&&(this.clicked=!1)}}},l=(n(230),n(29)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu",class:e.clicked?"opened":""},[n("ul",{staticClass:"menu-list"},[n("li",{on:{click:e.toggleMenu}},[n("nuxt-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#onas"},expression:"{ el: '#onas' }"}],attrs:{to:{path:"/",hash:"onas"}}},[e._v("O Nas")])],1),e._v(" "),n("li",{on:{click:e.toggleMenu}},[n("nuxt-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#realizacje"},expression:"{ el: '#realizacje' }"}],attrs:{to:{path:"/",hash:"realizacje"}}},[e._v("Realizacje")])],1),e._v(" "),n("li",{on:{click:e.toggleMenu}},[n("nuxt-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#kontakt"},expression:"{ el: '#kontakt' }"}],attrs:{to:{path:"/",hash:"kontakt"}}},[e._v("Kontakt")])],1)]),e._v(" "),n("span",{staticClass:"menu-toggle",on:{click:function(t){e.clicked=!e.clicked}}},[n("span",{staticClass:"menu-toggle__bar"}),e._v(" "),n("span",{staticClass:"menu-toggle__bar"}),e._v(" "),n("span",{staticClass:"menu-toggle__bar"})])])}),[],!1,null,"2a01e430",null);t.default=component.exports},250:function(e,t,n){"use strict";n(232)},251:function(e,t,n){var o=n(45)(!1);o.push([e.i,"header[data-v-1814908a]{height:120px;width:100%;background-color:#333645;z-index:9999}.header-content[data-v-1814908a]{display:flex;justify-content:space-between;max-width:1920px;margin:0 auto;height:100%}.break[data-v-1814908a]{display:none}@media screen and (max-width:860px){header[data-v-1814908a]{height:60px}}",""]),e.exports=o}}]);