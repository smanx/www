(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app-banana-views-minList"],{"0cc2":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"segmented-control",class:["text"===t.styleType?"segmented-control--text":"segmented-control--button"],style:{borderColor:"text"===t.styleType?"":t.activeColor}},t._l(t.values,(function(e,n){return i("v-uni-view",{key:n,staticClass:"segmented-control__item",class:["text"===t.styleType?"segmented-control__item--text":"segmented-control__item--button",n===t.currentIndex&&"button"===t.styleType?"segmented-control__item--button--active":"",0===n&&"button"===t.styleType?"segmented-control__item--button--first":"",n===t.values.length-1&&"button"===t.styleType?"segmented-control__item--button--last":""],style:{backgroundColor:n===t.currentIndex&&"button"===t.styleType?t.activeColor:"",borderColor:n===t.currentIndex&&"text"===t.styleType||"button"===t.styleType?t.activeColor:"transparent"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._onClick(n)}}},[i("v-uni-text",{staticClass:"segmented-control__text",style:{color:n===t.currentIndex?"text"===t.styleType?t.activeColor:"#fff":"text"===t.styleType?"#000":t.activeColor}},[t._v(t._s(e))])],1)})),1)},o=[]},"12d6":function(t,e,i){var n=i("86e3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("5783e26c",n,!0,{sourceMap:!1,shadowMode:!1})},"13b1":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.segmented-control[data-v-38c7be82]{display:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:36px;overflow:hidden}.segmented-control__item[data-v-38c7be82]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;box-sizing:border-box;position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.segmented-control__item--button[data-v-38c7be82]{border-style:solid;border-top-width:1px;border-bottom-width:1px;border-right-width:1px;border-left-width:0}.segmented-control__item--button--first[data-v-38c7be82]{border-left-width:1px;border-top-left-radius:5px;border-bottom-left-radius:5px}.segmented-control__item--button--last[data-v-38c7be82]{border-top-right-radius:5px;border-bottom-right-radius:5px}.segmented-control__item--text[data-v-38c7be82]{border-bottom-style:solid;border-bottom-width:3px}.segmented-control__text[data-v-38c7be82]{font-size:16px;line-height:20px;text-align:center}',""]),t.exports=e},"18e2":function(t,e,i){"use strict";i.r(e);var n=i("b21b"),a=i("7c1c");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("68b5");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"1dafc81c",null,!1,n["a"],s);e["default"]=c.exports},"2c00":function(t,e,i){"use strict";i.r(e);var n=i("0cc2"),a=i("b8d8");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("ef02");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"38c7be82",null,!1,n["a"],s);e["default"]=c.exports},"49cd":function(t,e,i){var n=i("77d5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("2e31b524",n,!0,{sourceMap:!1,shadowMode:!1})},"4c08":function(t,e,i){"use strict";var n=i("49cd"),a=i.n(n);a.a},"68b5":function(t,e,i){"use strict";var n=i("12d6"),a=i.n(n);a.a},"6fa0":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniSegmentedControl",props:{current:{type:Number,default:0},values:{type:Array,default:function(){return[]}},activeColor:{type:String,default:"#007aff"},styleType:{type:String,default:"button"}},data:function(){return{currentIndex:0}},watch:{current:function(t){t!==this.currentIndex&&(this.currentIndex=t)}},created:function(){this.currentIndex=this.current},methods:{_onClick:function(t){this.currentIndex!==t&&(this.currentIndex=t,this.$emit("clickItem",{currentIndex:t}))}}};e.default=n},"71aa":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"list"},[t.title?i("v-uni-view",{staticClass:"header",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.headerClick.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"title"},[t._v(t._s(t.title))]),i("v-uni-text",{staticClass:"more"},[t._v("更多")])],1):t._e(),i("v-uni-view",{staticClass:"items"},t._l(t.dataList,(function(e,n){return i("v-uni-view",{key:e.vodid,staticClass:"item",class:{itemMin:t.isMin},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.itemClick(e)}}},[t.vodid==e.vodid&&t.videoUrl?i("v-uni-video",{staticClass:"video",class:{videoMin:t.isMin},attrs:{autoplay:!0,title:e.title,poster:e.coverpic,"picture-in-picture-mode":["push","pop"],src:t.videoUrl}}):i("img",{staticClass:"image",class:{imagemMin:t.isMin},attrs:{src:e.coverpic,mode:"aspectFit"}}),i("v-uni-text",[t._v(t._s(e.title||e.catename))]),i("v-uni-view",{staticClass:"tips"},[1==e.isvip?i("v-uni-text",{staticClass:"isvip"},[t._v(t._s(1==e.isvip?"vip":""))]):t._e(),e.definition>0?i("v-uni-text",{staticClass:"definition"},[t._v(t._s(e.definition))]):t._e(),t.isMin?t._e():i("v-uni-text",{staticClass:"updatetime"},[t._v(t._s(e.updatetime))]),i("v-uni-text",{staticClass:"upnum"},[t._v(t._s(e.upnum))]),i("v-uni-text",{staticClass:"scorenum"},[t._v(t._s(e.scorenum))]),i("v-uni-text",{staticClass:"duration"},[t._v(t._s(e.duration))])],1)],1)})),1)],1)},o=[]},7433:function(t,e,i){"use strict";i.r(e);var n=i("9d3f"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"77d5":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".list[data-v-5b2abf36]{margin:10px 0}.list .header[data-v-5b2abf36]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin:3px 10px}.list .items[data-v-5b2abf36]{display:-webkit-box;display:-webkit-flex;display:flex;padding:5px;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.list .items .item[data-v-5b2abf36]{margin:5px;margin-top:5px;font-size:14px;width:320px;position:relative;box-shadow:#aaa 0 0 14px 0}.list .items .item.itemMin[data-v-5b2abf36]{width:162px}.list .items .item .image[data-v-5b2abf36]{width:100%;height:180px}.list .items .item .image.imagemMin[data-v-5b2abf36]{height:288px}.list .items .item .video[data-v-5b2abf36]{width:100%;height:180px}.list .items .item .video.videoMin[data-v-5b2abf36]{height:288px}.list .items .item .tips[data-v-5b2abf36]{padding:5px;background-color:#000;color:#fff;opacity:.5;position:absolute;top:0;right:0}.list .items .item .definition[data-v-5b2abf36]{margin:0 5px}.list .items .item .isvip[data-v-5b2abf36]{margin:0 5px}.list .items .item .scorenum[data-v-5b2abf36]{margin:0 5px}.list .items .item .duration[data-v-5b2abf36]{margin:0 5px}",""]),t.exports=e},"7c1c":function(t,e,i){"use strict";i.r(e);var n=i("bcd7"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},8554:function(t,e,i){var n=i("13b1");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("49e9c072",n,!0,{sourceMap:!1,shadowMode:!1})},8565:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n="https:",a="6jwti3892pf605m004mn.lagoapps.com",o=n+"//"+a,s={device:"iPhone 7 13.4 1.0",s_device_id:"374B5729-7F3F-4C8F-B6DE-80FF0A333633",s_os_version:"13.4",s_platform:"ios",_t:"1587401036000"},r={protocol:n,host:a,origin:o,home:o+"/index",query:function(){return Object.assign(s,{_t:(new Date).valueOf()})}};e.default=r},"86e3":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".segmented[data-v-1dafc81c]{position:-webkit-sticky;position:sticky;top:44px;padding:5px 10px;background-color:#fff;z-index:100;border-bottom:1px solid #f2f2f2}.segmented_top[data-v-1dafc81c]{top:0}.items[data-v-1dafc81c]{display:-webkit-box;display:-webkit-flex;display:flex;padding:5px;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.items .item[data-v-1dafc81c]{margin:5px;margin-top:5px;font-size:14px;width:320px}.items .item .image[data-v-1dafc81c]{width:100%;height:180px}.items .item .video[data-v-1dafc81c]{width:100%;height:180px}",""]),t.exports=e},"9d3f":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("8565")),o={props:{dataList:{default:function(){return[]}},info:{default:function(){return{}}},title:{default:""},isMin:{default:!1}},data:function(){return{vodid:"",videoUrl:""}},methods:{headerClick:function(){this.info.spid?(this.$store.commit("detail",this.info),uni.navigateTo({url:"/app/banana/views/detail"})):uni.navigateTo({url:"/app/banana/views/class"})},itemClick:function(t){var e=this;t.vodid!=this.vodid&&(uni.showLoading(),uni.request({url:a.default.origin+t.play_url,data:a.default.query(),success:function(i){uni.hideLoading(),console.log("success",i),i.data.data.httpurl?(e.videoUrl=i.data.data.httpurl,e.vodid=t.vodid):i.data.data.httpurl_preview?(e.videoUrl=i.data.data.httpurl_preview,e.vodid=t.vodid):uni.showToast({title:i.data.errmsg,icon:"none"}),document&&(document.title=t.title)},fail:function(){uni.hideLoading(),uni.showToast({title:"fail"})}}))}}};e.default=o},b21b:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"segmented",class:{segmented_top:!t.isH5}},[i("uni-segmented-control",{attrs:{current:t.current,values:t.items,"style-type":"button","active-color":"#4cd964"},on:{clickItem:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickItem.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"items"},[i("list",{attrs:{dataList:t.list[t.current].items,isMin:!0}})],1)],1)},o=[]},b8d8:function(t,e,i){"use strict";i.r(e);var n=i("6fa0"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},bcd7:function(t,e,i){"use strict";var n=i("4ea4");i("99af"),i("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("2c00")),o=n(i("8565")),s=n(i("e929")),r={components:{uniSegmentedControl:a.default,list:s.default},data:function(){return{list:[{title:"点赞",items:[],src:"/minivod/topzan-0-0-0-0-0-0-0-0-0-0-",page:1},{title:"评论",items:[],src:"/minivod/topcomment-0-0-0-0-0-0-0-0-0-0-",page:1},{title:"播放",items:[],src:"/minivod/topplay-0-0-0-0-0-0-0-0-0-0-",page:1},{title:"最新",items:[],src:"/minivod/topnew-0-0-0-0-0-0-0-0-0-0-",page:1},{title:"投币",items:[],src:"/minivod/topcoin-0-0-0-0-0-0-0-0-0-0-",page:1}],current:0,vodid:""}},onLoad:function(t){},created:function(){this.loadData(1)},computed:{items:function(){return this.list.map((function(t){return t.title}))},isH5:function(){return!!window}},methods:{onClickItem:function(t){this.current!==t.currentIndex&&(this.current=t.currentIndex,0==this.list[this.current].items.length&&this.loadData(1))},loadData:function(t){var e=this,i=o.default.origin+this.list[this.current].src+t,n=t,a=this.current;uni.request({url:i,success:function(t){if(uni.hideLoading(),0==t.data.retcode){var i=t.data.data.vodrows;e.list[a].items=1==n?i:e.list[a].items.concat(i),e.list[a].page=n,uni.stopPullDownRefresh()}else uni.showToast({title:t.data.errmsg,icon:"none"})},fail:function(){uni.hideLoading()}})}},onPullDownRefresh:function(){this.loadData(1)},onReachBottom:function(){console.log("onReachBottom"),uni.showLoading({title:"loading"}),this.loadData(this.list[this.current].page+1)}};e.default=r},e929:function(t,e,i){"use strict";i.r(e);var n=i("71aa"),a=i("7433");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("4c08");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"5b2abf36",null,!1,n["a"],s);e["default"]=c.exports},ef02:function(t,e,i){"use strict";var n=i("8554"),a=i.n(n);a.a}}]);