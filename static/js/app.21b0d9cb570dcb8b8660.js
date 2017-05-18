webpackJsonp([0],[,,function(t,e,s){"use strict";var o="https://api.douban.com",a={hot:o+"/v2/movie/in_theaters",comingsoon:o+"/v2/movie/coming_soon",top250:o+"/v2/movie/top250",new:o+"/v2/movie/new_movies",usbox:o+"/v2/movie/us_box",detail:o+"/v2/movie/subject/"};e.a=a},function(t,e,s){"use strict";var o=s(1),a=s(36),i=s(25),n=s.n(i),r=s(26),c=s.n(r),l=s(23),u=s.n(l),m=s(27),d=s.n(m),v=s(28),h=s.n(v),p=s(24),_=s.n(p);o.default.use(a.a),e.a=new a.a({scrollBehavior:function(t,e,s){return s||{x:0,y:0}},routes:[{path:"/",name:"Home",component:n.a},{path:"/hot/:id",name:"hot",component:c.a},{path:"/top250",name:"top250",component:d.a},{path:"/comingsoon",name:"comingsoon",component:u.a},{path:"/usbox",name:"usbox",component:h.a},{path:"/detail/:id",name:"detail",component:_.a}]})},function(t,e){},,function(t,e,s){s(22);var o=s(0)(s(8),s(35),null,null);t.exports=o.exports},,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{bottomNav:"movies",bottomNavColor:"movies"}},methods:{handleChange:function(t){this.bottomNav=t}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"comingsoon",data:function(){return{}},created:function(){this.getComingSonn()},methods:{getComingSonn:function(){console.info("加载中...",new Date)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"detail",data:function(){return{detailItem:{}}},created:function(){this.getDetail()},watch:{$route:"getDetail"},methods:{getDetail:function(){console.info(this.$route.params.id),this.$http.jsonp(this.$api.detail+this.$route.params.id).then(function(t){this.detailItem=t.data,console.log(this.detailItem)},function(){})}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"home",data:function(){return{showProgress:!1,start:0,count:5,hotReady:[!0,!1],comingsoonReady:[!0,!1],usboxReady:[!0,!1],top250Ready:[!0,!1],hotItem:[],comingsoonItem:[],usboxItem:[],top250Item:[]}},created:function(){this.getHot(),this.getComingSoon(),this.getUsbox(),this.getTop250()},methods:{getHot:function(){this.$http.jsonp(this.$api.hot).then(function(t){var e=t.data.subjects;this.hotItem=e,0!=this.hotItem.length&&(this.hotReady[0]=!1,console.info("hot",this.hotItem))},function(){this.hotReady[1]=!0,console.log("error")})},getComingSoon:function(){this.$http.jsonp(this.$api.comingsoon).then(function(t){var e=t.data.subjects;this.comingsoonItem=e,0!=this.comingsoonItem.length&&(this.comingsoonReady[0]=!1,console.info("comingsoonReady",this.comingsoonItem))},function(){this.comingsoonReady[1]=!0,console.log("error")})},getUsbox:function(){this.$http.jsonp(this.$api.usbox).then(function(t){var e=t.data.subjects;this.usboxItem=e,0!=this.usboxItem.length&&(this.usboxReady[0]=!1,console.log("usboxReady",this.usboxItem))},function(){this.usboxReady[1]=!0,console.log("error")})},getTop250:function(){this.$http.jsonp(this.$api.top250).then(function(t){var e=t.data.subjects;this.top250Item=e,0!=this.top250Item.length&&(this.top250Ready[0]=!1,console.info("top250Ready",this.top250Item))},function(){this.top250Ready[1]=!0,console.log("error")})}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"top250",data:function(){return{}},created:function(){this.getHot()},methods:{getHot:function(){}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"top250",data:function(){return{}},created:function(){this.getTop250()},methods:{getTop250:function(){}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"usbox",data:function(){return{}},created:function(){this.getUsbox()},methods:{getUsbox:function(){}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(1),a=s(6),i=s.n(a),n=s(3),r=s(7),c=s(2),l=s(5),u=s.n(l),m=s(4);s.n(m);o.default.use(u.a),o.default.use(r.a),o.default.config.productionTip=!1,o.default.prototype.$api=c.a,new o.default({el:"#app",router:n.a,template:"<App/>",components:{App:i.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,s){s(21);var o=s(0)(s(9),s(34),null,null);t.exports=o.exports},function(t,e,s){s(20);var o=s(0)(s(10),s(33),null,null);t.exports=o.exports},function(t,e,s){s(16);var o=s(0)(s(11),s(29),"data-v-259c73de",null);t.exports=o.exports},function(t,e,s){s(19);var o=s(0)(s(12),s(32),null,null);t.exports=o.exports},function(t,e,s){s(18);var o=s(0)(s(13),s(31),null,null);t.exports=o.exports},function(t,e,s){s(17);var o=s(0)(s(14),s(30),null,null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("mu-flexbox",{staticClass:"mt8",attrs:{orient:"vertical"}},[s("mu-flexbox-item",{staticClass:"item",attrs:{order:"2"}},[s("div",[s("span",{staticClass:"title"},[t._v("影院热映")]),t._v(" "),s("router-link",{staticClass:"more",attrs:{to:"/hot"}},[t._v("更多")])],1),t._v(" "),s("mu-circular-progress",{directives:[{name:"show",rawName:"v-show",value:t.hotReady[0],expression:"hotReady[0]"}],staticClass:"circle",attrs:{size:60}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.hotReady[1],expression:"hotReady[1]"}],staticStyle:{"text-align":"center"}},[t._v("TMD没有数据")]),t._v(" "),s("mu-row",{attrs:{gutter:""}},t._l(t.hotItem,function(e){return s("mu-col",{key:e.id,staticClass:"list-item",attrs:{width:"50",tablet:"25",desktop:"25"}},[s("router-link",{attrs:{to:{name:"detail",params:{id:e.id}}}},[s("img",{staticStyle:{width:"100%",height:"20rem"},attrs:{src:e.images.large,alt:e.alt}})]),t._v(" "),s("p",[t._v(t._s(e.title))]),t._v(" "),s("p",[t._v("评分："+t._s(e.rating.average))])],1)}))],1),t._v(" "),s("mu-flexbox-item",{staticClass:"item",attrs:{order:"2"}},[s("div",[s("span",{staticClass:"title"},[t._v("新片速递")]),t._v(" "),s("router-link",{staticClass:"more",attrs:{to:"/comingsoon"}},[t._v("更多")])],1),t._v(" "),s("mu-circular-progress",{directives:[{name:"show",rawName:"v-show",value:t.comingsoonReady[0],expression:"comingsoonReady[0]"}],staticClass:"circle",attrs:{size:60}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.hotReady[1],expression:"hotReady[1]"}],staticStyle:{"text-align":"center"}},[t._v("TMD没有数据")]),t._v(" "),s("mu-row",{attrs:{gutter:""}},t._l(t.comingsoonItem,function(e){return s("mu-col",{key:e.id,staticClass:"list-item",attrs:{width:"50",tablet:"25",desktop:"25"}},[s("router-link",{attrs:{to:{name:"detail",params:{id:e.id}}}},[s("img",{staticStyle:{width:"100%",height:"20rem"},attrs:{src:e.images.large,alt:e.alt}})]),t._v(" "),s("p",[t._v(t._s(e.title))]),t._v(" "),s("p",[t._v("评分："+t._s(e.rating.average))])],1)}))],1),t._v(" "),s("mu-flexbox-item",{staticClass:"item",attrs:{order:"2"}},[s("div",[s("span",{staticClass:"title"},[t._v("北美票房")]),t._v(" "),s("router-link",{staticClass:"more",attrs:{to:"/usbox"}},[t._v("更多")])],1),t._v(" "),s("mu-circular-progress",{directives:[{name:"show",rawName:"v-show",value:t.usboxReady[0],expression:"usboxReady[0]"}],staticClass:"circle",attrs:{size:60}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.hotReady[1],expression:"hotReady[1]"}],staticStyle:{"text-align":"center"}},[t._v("TMD没有数据")]),t._v("\n             "+t._s(t.usboxItem.subject)+"\n              "),s("mu-row",{attrs:{gutter:""}},t._l(t.usboxItem,function(e){return s("mu-col",{key:e.id,staticClass:"list-item",attrs:{width:"50",tablet:"25",desktop:"25"}},[s("router-link",{attrs:{to:{name:"detail",params:{id:e.subject.id}}}},[s("img",{staticStyle:{width:"100%",height:"20rem"},attrs:{src:e.subject.images.large,alt:e.subject.alt}})]),t._v(" "),s("p",[t._v(t._s(e.subject.title))]),t._v(" "),s("p",[t._v("评分："+t._s(e.subject.rating.average))])],1)}))],1),t._v(" "),s("mu-flexbox-item",{staticClass:"item",attrs:{order:"2"}},[s("div",[s("span",{staticClass:"title"},[t._v("经典电影")]),t._v(" "),s("router-link",{staticClass:"more",attrs:{to:"/top250"}},[t._v("更多")])],1),t._v(" "),s("mu-circular-progress",{directives:[{name:"show",rawName:"v-show",value:t.top250Ready[0],expression:"top250Ready[0]"}],staticClass:"circle",attrs:{size:60}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.hotReady[1],expression:"hotReady[1]"}],staticStyle:{"text-align":"center"}},[t._v("TMD没有数据")]),t._v(" "),s("mu-row",{attrs:{gutter:""}},t._l(t.top250Item,function(e){return s("mu-col",{key:e.id,staticClass:"list-item",attrs:{width:"50",tablet:"25",desktop:"25"}},[s("router-link",{attrs:{to:{name:"detail",params:{id:e.id}}}},[s("img",{staticStyle:{width:"100%",height:"20rem"},attrs:{src:e.images.large,alt:e.alt}})]),t._v(" "),s("p",[t._v(t._s(e.title))]),t._v(" "),s("p",[t._v("评分："+t._s(e.rating.average))])],1)}))],1)],1),t._v(" "),s("mu-circular-progress",{directives:[{name:"show",rawName:"v-show",value:t.showProgress,expression:"showProgress"}],attrs:{size:40}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n   努力开发中...\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n       努力开发中...\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n     努力开发中...\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"detail"},[s("img",{staticStyle:{display:"block",margin:"auto"},attrs:{src:t.detailItem.images.large,alt:"",height:"350px",width:"250px"}}),t._v(" "),s("p",[t._v(t._s(t.detailItem.title))]),t._v(" "),s("p",[t._v("评分："+t._s(t.detailItem.rating.average)+" "),s("span",{staticClass:"ratingcounts"},[t._v(t._s(t.detailItem.ratings_count)+"人评价")])]),t._v(" "),s("div",[s("p",{staticClass:"title"},[t._v("剧情简介")]),t._v(" "),s("p",[t._v(t._s(t.detailItem.summary))])]),t._v(" "),s("div",[s("p",{staticClass:"title"},[t._v("导演")]),t._v(" "),s("mu-row",{attrs:{gutter:""}},[s("mu-col",{attrs:{width:"100",tablet:"50",desktop:"33"}},[s("a",{attrs:{href:t.detailItem.directors[0].alt}},[s("img",{attrs:{src:t.detailItem.directors[0].avatars.medium,alt:""}})]),t._v(" "),s("p",[t._v(t._s(t.detailItem.directors[0].name))])])],1)],1),t._v(" "),s("div",[s("p",{staticClass:"title"},[t._v("演员")]),t._v(" "),s("mu-row",{attrs:{gutter:""}},t._l(t.detailItem.casts,function(e){return s("mu-col",{key:e.id,attrs:{width:"50",tablet:"25",desktop:"25"}},[s("a",{attrs:{href:e.alt}},[s("img",{attrs:{src:e.avatars.medium,alt:""}})]),t._v(" "),s("p",[t._v(t._s(e.name))])])}))],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n 努力开发中。。。\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[s("keep-alive",[s("router-view",{staticClass:"child-view"})],1)],1),t._v(" "),s("footer",{staticClass:"foot",attrs:{id:"foot"}},[s("mu-paper",[s("mu-bottom-nav",{attrs:{value:t.bottomNav,shift:""},on:{change:t.handleChange}},[s("mu-bottom-nav-item",{attrs:{value:"movies",title:"Movies",icon:"ondemand_video",to:"/"}})],1)],1)],1)],1)},staticRenderFns:[]}},,,,function(t,e){}],[15]);