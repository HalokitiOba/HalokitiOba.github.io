webpackJsonp([0],[,,function(t,e,s){"use strict";var a="http://api.douban.com",i={hot:a+"/v2/movie/in_theaters",comingsoon:a+"/v2/movie/coming_soon",top250:a+"/v2/movie/top250",new:a+"/v2/movie/new_movies",usbox:a+"/v2/movie/us_box",detail:a+"/v2/movie/subject/"};e.a=i},function(t,e,s){"use strict";var a=s(1),i=s(36),o=s(25),n=s.n(o),r=s(26),c=s.n(r),u=s(23),l=s.n(u),m=s(27),d=s.n(m),v=s(28),p=s.n(v),f=s(24),h=s.n(f);a.default.use(i.a),e.a=new i.a({mode:"history",routes:[{path:"/",name:"Home",component:n.a},{path:"/hot/:id",name:"hot",component:c.a},{path:"/top250",name:"top250",component:d.a},{path:"/comingsoon",name:"comingsoon",component:l.a},{path:"/usbox",name:"usbox",component:p.a},{path:"/detail/:id",name:"detail",component:h.a}]})},function(t,e){},,function(t,e,s){s(22);var a=s(0)(s(8),s(35),null,null);t.exports=a.exports},,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{bottomNav:"movies",bottomNavColor:"movies"}},methods:{handleChange:function(t){this.bottomNav=t}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"comingsoon",data:function(){return{}},created:function(){this.getComingSonn()},methods:{getComingSonn:function(){console.info("加载中...",new Date)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"detail",data:function(){return{detailItem:{}}},created:function(){this.getDetail()},methods:{getDetail:function(){console.info(this.$route.params.id),this.$http.jsonp(this.$api.detail+this.$route.params.id).then(function(t){this.detailItem=t.data,console.log(this.detailItem)},function(){})}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"home",data:function(){return{showProgress:!1,start:0,count:5,hotReady:!0,comingsoonReady:!0,usboxReady:!0,top250Ready:!0,hotItems:[],comingsoonItem:[],usboxItem:[],top250Item:[]}},created:function(){this.getHot(),this.getComingSoon(),this.getUsbox(),this.getTop250()},methods:{getHot:function(){this.$http.jsonp(this.$api.hot).then(function(t){var e=t.data.subjects;this.hotItems=e,this.hotReady=!1},function(){})},getComingSoon:function(){this.$http.jsonp(this.$api.comingsoon).then(function(t){var e=t.data.subjects;this.comingsoonItem=e,this.comingsoonReady=!1},function(){})},getUsbox:function(){this.$http.jsonp(this.$api.usbox).then(function(t){var e=t.data.subjects;this.usboxItem=e,this.usboxReady=!1},function(){})},getTop250:function(){this.$http.jsonp(this.$api.top250).then(function(t){var e=t.data.subjects;this.top250Item=e,this.top250Ready=!1},function(){})}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"top250",data:function(){return{}},created:function(){this.getHot()},methods:{getHot:function(){}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"top250",data:function(){return{}},created:function(){this.getTop250()},methods:{getTop250:function(){}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"usbox",data:function(){return{}},created:function(){this.getUsbox()},methods:{getUsbox:function(){}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(1),i=s(6),o=s.n(i),n=s(3),r=s(7),c=s(2),u=s(5),l=s.n(u),m=s(4);s.n(m);a.default.use(l.a),a.default.use(r.a),a.default.config.productionTip=!1,a.default.prototype.$api=c.a,new a.default({el:"#app",router:n.a,template:"<App/>",components:{App:o.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,s){s(21);var a=s(0)(s(9),s(34),null,null);t.exports=a.exports},function(t,e,s){s(20);var a=s(0)(s(10),s(33),null,null);t.exports=a.exports},function(t,e,s){s(16);var a=s(0)(s(11),s(29),"data-v-259c73de",null);t.exports=a.exports},function(t,e,s){s(19);var a=s(0)(s(12),s(32),null,null);t.exports=a.exports},function(t,e,s){s(18);var a=s(0)(s(13),s(31),null,null);t.exports=a.exports},function(t,e,s){s(17);var a=s(0)(s(14),s(30),null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("mu-flexbox",{staticClass:"mt8",attrs:{orient:"vertical"}},[s("mu-flexbox-item",{staticClass:"item",attrs:{order:"2"}},[s("div",[s("span",{staticClass:"title"},[t._v("影院热映")]),t._v(" "),s("router-link",{staticClass:"more",attrs:{to:"/hot"}},[t._v("更多")])],1),t._v(" "),s("mu-circular-progress",{directives:[{name:"show",rawName:"v-show",value:t.hotReady,expression:"hotReady"}],staticClass:"circle",attrs:{size:60}}),t._v(" "),s("mu-row",{attrs:{gutter:""}},t._l(t.hotItems,function(e){return s("mu-col",{key:"item.id",staticClass:"list-item",attrs:{width:"50",tablet:"25",desktop:"25"}},[s("router-link",{attrs:{to:{name:"detail",params:{id:e.id}}}},[s("img",{staticStyle:{width:"100%",height:"20rem"},attrs:{src:e.images.large,alt:e.alt}})]),t._v(" "),s("p",[t._v(t._s(e.title))]),t._v(" "),s("p",[t._v("评分："+t._s(e.rating.average))])],1)}))],1),t._v(" "),s("mu-flexbox-item",{staticClass:"item",attrs:{order:"2"}},[s("div",[s("span",{staticClass:"title"},[t._v("新片速递")]),t._v(" "),s("router-link",{staticClass:"more",attrs:{to:"/comingsoon"}},[t._v("更多")])],1),t._v(" "),s("mu-circular-progress",{directives:[{name:"show",rawName:"v-show",value:t.comingsoonReady,expression:"comingsoonReady"}],staticClass:"circle",attrs:{size:60}}),t._v(" "),s("mu-row",{attrs:{gutter:""}},t._l(t.comingsoonItem,function(e){return s("mu-col",{key:"item.id",staticClass:"list-item",attrs:{width:"50",tablet:"25",desktop:"25"}},[s("router-link",{attrs:{to:{name:"detail",params:{id:e.id}}}},[s("img",{staticStyle:{width:"100%",height:"20rem"},attrs:{src:e.images.large,alt:e.alt}})]),t._v(" "),s("p",[t._v(t._s(e.title))]),t._v(" "),s("p",[t._v("评分："+t._s(e.rating.average))])],1)}))],1),t._v(" "),s("mu-flexbox-item",{staticClass:"item",attrs:{order:"2"}},[s("div",[s("span",{staticClass:"title"},[t._v("北美票房")]),t._v(" "),s("router-link",{staticClass:"more",attrs:{to:"/usbox"}},[t._v("更多")])],1),t._v(" "),s("mu-circular-progress",{directives:[{name:"show",rawName:"v-show",value:t.usboxReady,expression:"usboxReady"}],staticClass:"circle",attrs:{size:60}}),t._v(" "),s("mu-row",{attrs:{gutter:""}},t._l(t.usboxItem,function(e){return s("mu-col",{key:"item.id",staticClass:"list-item",attrs:{width:"50",tablet:"25",desktop:"25"}},[s("router-link",{attrs:{to:{name:"detail",params:{id:e.id}}}},[s("img",{staticStyle:{width:"100%",height:"20rem"},attrs:{src:e.images.large,alt:e.alt}})]),t._v(" "),s("p",[t._v(t._s(e.title))]),t._v(" "),s("p",[t._v("评分："+t._s(e.rating.average))])],1)}))],1),t._v(" "),s("mu-flexbox-item",{staticClass:"item",attrs:{order:"2"}},[s("div",[s("span",{staticClass:"title"},[t._v("经典电影")]),t._v(" "),s("router-link",{staticClass:"more",attrs:{to:"/top250"}},[t._v("更多")])],1),t._v(" "),s("mu-circular-progress",{directives:[{name:"show",rawName:"v-show",value:t.top250Ready,expression:"top250Ready"}],staticClass:"circle",attrs:{size:60}}),t._v(" "),s("mu-row",{attrs:{gutter:""}},t._l(t.top250Item,function(e){return s("mu-col",{key:"item.id",staticClass:"list-item",attrs:{width:"50",tablet:"25",desktop:"25"}},[s("router-link",{attrs:{to:{name:"detail",params:{id:e.id}}}},[s("img",{staticStyle:{width:"100%",height:"20rem"},attrs:{src:e.images.large,alt:e.alt}})]),t._v(" "),s("p",[t._v(t._s(e.title))]),t._v(" "),s("p",[t._v("评分："+t._s(e.rating.average))])],1)}))],1)],1),t._v(" "),s("mu-circular-progress",{directives:[{name:"show",rawName:"v-show",value:t.showProgress,expression:"showProgress"}],attrs:{size:40}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n   努力开发中...\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n       努力开发中...\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n     努力开发中...\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"detail"},[s("img",{staticStyle:{display:"block",margin:"auto"},attrs:{src:t.detailItem.images.large,alt:"",height:"350px",width:"250px"}}),t._v(" "),s("p",[t._v(t._s(t.detailItem.title))]),t._v(" "),s("p",[t._v("评分："+t._s(t.detailItem.rating.average)+" "),s("span",{staticClass:"ratingcounts"},[t._v(t._s(t.detailItem.ratings_count)+"人评价")])]),t._v(" "),s("div",[s("p",{staticClass:"title"},[t._v("剧情简介")]),t._v(" "),s("p",[t._v(t._s(t.detailItem.summary))])]),t._v(" "),s("div",[s("p",{staticClass:"title"},[t._v("导演")]),t._v(" "),s("mu-row",{attrs:{gutter:""}},[s("mu-col",{attrs:{width:"100",tablet:"50",desktop:"33"}},[s("a",{attrs:{href:t.detailItem.directors[0].alt}},[s("img",{attrs:{src:t.detailItem.directors[0].avatars.medium,alt:""}})]),t._v(" "),s("p",[t._v(t._s(t.detailItem.directors[0].name))])])],1)],1),t._v(" "),s("div",[s("p",{staticClass:"title"},[t._v("演员")]),t._v(" "),s("mu-row",{attrs:{gutter:""}},t._l(t.detailItem.casts,function(e){return s("mu-col",{key:e.id,attrs:{width:"50",tablet:"50",desktop:"33"}},[s("a",{attrs:{href:e.alt}},[s("img",{attrs:{src:e.avatars.medium,alt:""}})]),t._v(" "),s("p",[t._v(t._s(e.name))])])}))],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n 努力开发中。。。\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated fadeInRight","leave-active-class":"animated fadeOutLeft"}},[s("keep-alive",[s("router-view",{staticClass:"child-view"})],1)],1),t._v(" "),s("footer",{staticClass:"foot",attrs:{id:"foot"}},[s("mu-paper",[s("mu-bottom-nav",{attrs:{value:t.bottomNav,shift:""},on:{change:t.handleChange}},[s("mu-bottom-nav-item",{attrs:{value:"movies",title:"Movies",icon:"ondemand_video",to:"/"}})],1)],1)],1)],1)},staticRenderFns:[]}},,,,function(t,e){}],[15]);
//# sourceMappingURL=app.f76d2b4c9a18aac6c6fa.js.map