(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["app/love/chat"],{5075:function(t,a,n){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=n("8a79"),o=function(){n.e("components/zy-search/zy-search").then(function(){return resolve(n("f101"))}.bind(null,n)).catch(n.oe)},c={components:{zySearch:o},data:function(){return{list:[],catId:"",catName:"",page:1,hasMore:!1}},onLoad:function(t){console.log("onLoad",t),this.catId=t.catId,this.catName=t.catName},created:function(){this.loadData(1)},methods:{loadData:function(a){var n=this,o=this.catId?"getChatList":"chat";(0,e.request)({fun:o,params:this.catId?{isFirst:!1,catId:this.catId,page:a}:{content:this.catName,page:a}}).then((function(e){t.stopPullDownRefresh(),t.hideLoading(),e.data.data=e.data.data.map((function(t){return t.content=JSON.parse(t.content),t})),console.log(o,e),n.list=1==a?e.data.data:n.list.concat(e.data.data),n.hasMore=e.data.hasMore,n.page=a}))},setClipboardData:function(t){}},onPullDownRefresh:function(){this.loadData(1)},onReachBottom:function(){console.log("onReachBottom"),t.showLoading({title:"loading"}),this.hasMore?this.loadData(this.page+1):t.showToast({title:"到底了",icon:"none"})}};a.default=c}).call(this,n("c11b")["default"])},"935a":function(t,a,n){"use strict";n.r(a);var e=n("c363"),o=n("da33");for(var c in o)"default"!==c&&function(t){n.d(a,t,(function(){return o[t]}))}(c);n("bacd");var i,u=n("f0c5"),r=Object(u["a"])(o["default"],e["b"],e["c"],!1,null,"12717398",null,!1,e["a"],i);a["default"]=r.exports},"9af2":function(t,a,n){},bacd:function(t,a,n){"use strict";var e=n("9af2"),o=n.n(e);o.a},c363:function(t,a,n){"use strict";var e;n.d(a,"b",(function(){return o})),n.d(a,"c",(function(){return c})),n.d(a,"a",(function(){return e}));var o=function(){var t=this,a=t.$createElement;t._self._c},c=[]},cd5c:function(t,a,n){"use strict";(function(t){n("6cdc"),n("921b");e(n("66fd"));var a=e(n("935a"));function e(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,n("c11b")["createPage"])},da33:function(t,a,n){"use strict";n.r(a);var e=n("5075"),o=n.n(e);for(var c in e)"default"!==c&&function(t){n.d(a,t,(function(){return e[t]}))}(c);a["default"]=o.a}},[["cd5c","common/runtime","common/vendor"]]]);