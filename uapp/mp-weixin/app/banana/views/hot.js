(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["app/banana/views/hot"],{"0332":function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return o}));var i=function(){var t=this,n=t.$createElement;t._self._c},u=[]},1522:function(t,n,e){"use strict";e.r(n);var o=e("e82e"),i=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);n["default"]=i.a},"84ff":function(t,n,e){"use strict";var o=e("d75d"),i=e.n(o);i.a},be18:function(t,n,e){"use strict";e.r(n);var o=e("0332"),i=e("1522");for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);e("84ff");var a,r=e("f0c5"),c=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"a35fc200",null,!1,o["a"],a);n["default"]=c.exports},d75d:function(t,n,e){},de98:function(t,n,e){"use strict";(function(t){e("6cdc"),e("921b");o(e("66fd"));var n=o(e("be18"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},e82e:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(e("8565"));function i(t){return t&&t.__esModule?t:{default:t}}var u=function(){e.e("node-modules/@dcloudio/uni-ui/lib/uni-segmented-control/uni-segmented-control").then(function(){return resolve(e("2c00"))}.bind(null,e)).catch(e.oe)},a=function(){e.e("app/banana/components/list").then(function(){return resolve(e("e929"))}.bind(null,e)).catch(e.oe)},r={components:{uniSegmentedControl:u,list:a},data:function(){return{list:[{title:"推荐",items:[],src:"/vod/recommend-0-0-0-0-0-0-0-0-0-",page:1},{title:"热点",items:[],src:"/vod/hot-0-0-0-0-0-0-0-0-0-",page:1},{title:"发现",items:[],src:"/vod/latest-0-0-0-0-0-0-0-0-0-",page:1}],current:1,vodid:""}},onLoad:function(t){},created:function(){this.loadData(1)},computed:{items:function(){return this.list.map((function(t){return t.title}))},isH5:function(){return!!window}},methods:{onClickItem:function(t){this.current!==t.currentIndex&&(this.current=t.currentIndex,0==this.list[this.current].items.length&&this.loadData(1))},loadData:function(n){var e=this,i=o.default.origin+this.list[this.current].src+n,u=n,a=this.current;t.request({url:i,success:function(n){if(t.hideLoading(),0==n.data.retcode){var o=n.data.data.vodrows;e.list[a].items=1==u?o:e.list[a].items.concat(o),e.list[a].page=u,t.stopPullDownRefresh()}else t.showToast({title:n.data.errmsg,icon:"none"})},fail:function(){t.hideLoading()}})}},onPullDownRefresh:function(){this.loadData(1)},onReachBottom:function(){console.log("onReachBottom"),t.showLoading({title:"loading"}),this.loadData(this.list[this.current].page+1)}};n.default=r}).call(this,e("543d")["default"])}},[["de98","common/runtime","common/vendor"]]]);