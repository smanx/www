(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["app/banana/views/minList"],{"18e2":function(t,n,e){"use strict";e.r(n);var i=e("7611"),o=e("7c1c");for(var c in o)"default"!==c&&function(t){e.d(n,t,(function(){return o[t]}))}(c);e("b78d");var a,u=e("f0c5"),r=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"1fa8f84a",null,!1,i["a"],a);n["default"]=r.exports},"1d45":function(t,n,e){"use strict";(function(t){e("6cdc"),e("921b");i(e("66fd"));var n=i(e("18e2"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},7611:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return i}));var o=function(){var t=this,n=t.$createElement;t._self._c},c=[]},"7c1c":function(t,n,e){"use strict";e.r(n);var i=e("c91c"),o=e.n(i);for(var c in i)"default"!==c&&function(t){e.d(n,t,(function(){return i[t]}))}(c);n["default"]=o.a},8281:function(t,n,e){},b78d:function(t,n,e){"use strict";var i=e("8281"),o=e.n(i);o.a},c91c:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(e("8565"));function o(t){return t&&t.__esModule?t:{default:t}}var c=function(){e.e("node-modules/@dcloudio/uni-ui/lib/uni-segmented-control/uni-segmented-control").then(function(){return resolve(e("2c00"))}.bind(null,e)).catch(e.oe)},a=function(){e.e("app/banana/components/list").then(function(){return resolve(e("e929"))}.bind(null,e)).catch(e.oe)},u={components:{uniSegmentedControl:c,list:a},data:function(){return{list:[{title:"点赞",items:[],src:"/minivod/topzan-0-0-0-0-0-0-0-0-0-0-",page:1},{title:"评论",items:[],src:"/minivod/topcomment-0-0-0-0-0-0-0-0-0-0-",page:1},{title:"播放",items:[],src:"/minivod/topplay-0-0-0-0-0-0-0-0-0-0-",page:1},{title:"最新",items:[],src:"/minivod/topnew-0-0-0-0-0-0-0-0-0-0-",page:1},{title:"投币",items:[],src:"/minivod/topcoin-0-0-0-0-0-0-0-0-0-0-",page:1}],current:0,vodid:""}},onLoad:function(t){},created:function(){this.loadData(1)},computed:{items:function(){return this.list.map((function(t){return t.title}))},isH5:function(){return!!window}},methods:{onClickItem:function(t){this.current!==t.currentIndex&&(this.current=t.currentIndex,0==this.list[this.current].items.length&&this.loadData(1))},loadData:function(n){var e=this,o=i.default.origin+this.list[this.current].src+n,c=n,a=this.current;t.request({url:o,success:function(n){if(t.hideLoading(),0==n.data.retcode){var i=n.data.data.vodrows;e.list[a].items=1==c?i:e.list[a].items.concat(i),e.list[a].page=c,t.stopPullDownRefresh()}else t.showToast({title:n.data.errmsg,icon:"none"})},fail:function(){t.hideLoading()}})}},onPullDownRefresh:function(){this.loadData(1)},onReachBottom:function(){console.log("onReachBottom"),t.showLoading({title:"loading"}),this.loadData(this.list[this.current].page+1)}};n.default=u}).call(this,e("543d")["default"])}},[["1d45","common/runtime","common/vendor"]]]);