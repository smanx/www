(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app-love-index"],{"1e67":function(t,a,e){"use strict";e.r(a);var i=e("b1c6"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"232c":function(t,a,e){"use strict";var i=e("38dd"),n=e.n(i);n.a},2667:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("div",{staticClass:"title"},[t._v("聊天话术助手")]),e("div",{staticClass:"search"},[e("v-uni-input",{attrs:{type:"text",placeholder:t.initData.search.searchHint||"请输入要搜索内容"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.serach.apply(void 0,arguments)}}})],1),e("div",{staticClass:"scroll"},t._l(t.periods,(function(a){return e("div",{key:a.id,staticClass:"item",staticStyle:{display:"flex","flex-direction":"column"}},[e("v-uni-image",{staticStyle:{width:"50px",height:"50px",margin:"auto"},attrs:{src:a.img,mode:"aspectFill"}}),e("div",{staticStyle:{"font-size":"12px","margin-top":"3px"}},[t._v(t._s(a.stageName))])],1)})),0),e("div",{staticStyle:{margin:"10px","font-size":"13px",color:"#666"}},[t._v("百科")]),e("uni-collapse",{staticStyle:{"border-top":"1px solid #c8c7cc",margin:"10px 0"},attrs:{accordion:"true"}},t._l(t.stages,(function(a){return e("uni-collapse-item",{key:a.id,attrs:{title:a.stageName}},[e("v-uni-view",{staticStyle:{padding:"0 8px",display:"flex","flex-wrap":"wrap","justify-content":"space-evenly"}},t._l(a.articles,(function(a){return e("div",{key:a.id,staticStyle:{width:"48%","max-width":"200px",position:"relative"}},[e("v-uni-image",{staticStyle:{width:"100%","max-height":"120px","border-radius":"10px"},attrs:{src:a.coverImg,mode:"aspectFill"}}),e("div",{staticStyle:{color:"#fff",position:"absolute",width:"100%",top:"0px",padding:"5px 0","text-align":"center","background-color":"rgba(0,0,0,0.5)","font-size":"14px","border-radius":"10px 10px 0 0"}},[t._v(t._s(a.categoryName))]),e("div",{staticStyle:{"font-size":"14px","margin-bottom":"10px"}},[t._v(t._s(a.title))])],1)})),0)],1)})),1),e("div",{staticClass:"scroll"},t._l(t.initData.topicCategory,(function(a){return e("div",{key:a.id,staticClass:"item"},[e("div",{staticStyle:{"font-size":"13px"}},[t._v(t._s(a.topicName))]),e("div",{staticStyle:{"font-size":"12px"}},[t._v(t._s(a.topicDesc))])])})),0),e("div",{staticClass:"list"},t._l(t.indexData,(function(a){return e("div",{key:a.id,staticClass:"item"},[e("div",{staticClass:"name"},[t._v(t._s(a.name))]),e("div",{staticClass:"content"},t._l(a.list,(function(a){return e("div",{key:a.catId,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tagClick(a)}}},[t._v(t._s(a.catName))])})),0)])})),0),e("uni-collapse",{staticStyle:{"border-top":"1px solid #c8c7cc",margin:"10px 0"},attrs:{accordion:"true"}},[e("uni-collapse-item",{attrs:{title:"每日精选"}},[e("v-uni-view",{staticStyle:{padding:"0 8px"}},t._l(t.bestChoose,(function(t){return e("card",{key:t.id,attrs:{item:t}})})),1)],1),e("uni-collapse-item",{attrs:{title:"聊天教学"}},[e("v-uni-view",{staticStyle:{padding:"0 8px"}},t._l(t.webChat,(function(t){return e("card",{key:t.id,attrs:{item:t}})})),1)],1)],1)],1)},o=[]},"38dd":function(t,a,e){var i=e("b20d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("40e5f366",i,!0,{sourceMap:!1,shadowMode:!1})},"66a8":function(t,a,e){"use strict";e.r(a);var i=e("2667"),n=e("1e67");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("232c");var c,s=e("f0c5"),d=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"ddc725c4",null,!1,i["a"],c);a["default"]=d.exports},b1c6:function(t,a,e){"use strict";var i=e("4ea4");e("99af"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("2704")),o=i(e("aa49")),c=e("8a79"),s=i(e("9f81")),d={components:{uniCollapse:o.default,uniCollapseItem:n.default,card:s.default},data:function(){return{cases:[],initData:{scrollBarText:[],search:{searchHint:""}},indexData:[],bestChoose:[],webChat:[],periods:[],stages:[]}},created:function(){this.loadData()},methods:{loadData:function(){var t=this;(0,c.request)({fun:"init"}).then((function(a){t.initData=a.data})),(0,c.request)({fun:"index"}).then((function(a){t.indexData=a.data.data,uni.stopPullDownRefresh()})),(0,c.request)({fun:"schoolIndex"}).then((function(a){t.periods=a.data.periods,t.stages=a.data.stages})),this.loadV2Data()},loadV2Data:function(){var t=this;(0,c.request)({fun:"indexOld"}).then((function(a){console.log("indexOld",a),uni.hideLoading(),t.bestChoose=t.bestChoose.concat(a.data.bestChoose),t.webChat=t.webChat.concat(a.data.webChat)}))},tagClick:function(t){console.log("tagClick",t),uni.navigateTo({url:"./chat?catId=".concat(t.catId,"&catName=").concat(t.catName)})},serach:function(){uni.navigateTo({url:"./search"})},cellClick:function(t,a){console.log("cellClick",a,t.currentTarget.id),uni.navigateTo({url:"./detail?articleNo=".concat(t.currentTarget.id,"&title=").concat(a)})}},onPullDownRefresh:function(){this.bestChoose=[],this.webChat=[],this.loadData()},onReachBottom:function(){uni.showLoading({title:"loading"}),this.loadV2Data()}};a.default=d},b20d:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".home .title[data-v-ddc725c4]{background-color:#dd524d;padding:30px 0 0 0;width:100%;text-align:center;color:#fff}.home .search[data-v-ddc725c4]{position:-webkit-sticky;position:sticky;top:0;padding:10px 0 20px 0;width:100%;background-color:#dd524d;z-index:100}.home .search uni-input[data-v-ddc725c4]{height:38px;width:80%;border-radius:19px;margin:0 auto;background-color:#fff;padding:0 10px}.home .scroll[data-v-ddc725c4]{background-color:#f2f2f2;display:-webkit-box;display:-webkit-flex;display:flex;overflow-x:scroll;-webkit-flex-wrap:nowrap;flex-wrap:nowrap}.home .scroll .item[data-v-ddc725c4]{padding:10px;background-color:#fff;border-radius:8px;margin:15px 10px}.home .scroll .item div[data-v-ddc725c4]{word-break:keep-all;margin:auto 20px;text-align:center}.home .list[data-v-ddc725c4]{width:100%}.home .list .item .name[data-v-ddc725c4]{font-size:14px;margin:10px}.home .list .item .content[data-v-ddc725c4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.home .list .item .content div[data-v-ddc725c4]{font-size:12px;border:1px solid #ccc;border-radius:15px;margin:5px;word-break:keep-all;padding:5px 10px}",""]),t.exports=a}}]);