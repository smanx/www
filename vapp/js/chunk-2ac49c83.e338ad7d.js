(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ac49c83"],{"1af2":function(t,i,a){"use strict";var s=a("b381"),e=a.n(s);e.a},"1e06":function(t,i,a){},"210b":function(t,i,a){"use strict";a.r(i);var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"special"},[a("div",{staticClass:"weui-search-bar",class:{"weui-search-bar_focusing":t.isTyping},attrs:{id:"searchBar"}},[a("form",{staticClass:"weui-search-bar__form"},[a("div",{staticClass:"weui-search-bar__box"},[a("i",{staticClass:"weui-icon-search"}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputText,expression:"inputText"}],ref:"searchInput",staticClass:"weui-search-bar__input",attrs:{type:"search",id:"searchInput",placeholder:"搜索",required:""},domProps:{value:t.inputText},on:{keyup:function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"enter",13,i.key,"Enter")?null:t.search(i)},input:function(i){i.target.composing||(t.inputText=i.target.value)}}}),a("a",{staticClass:"weui-icon-clear",attrs:{href:"javascript:",id:"searchClear"},on:{click:function(i){t.inputText=""}}})]),a("label",{ref:"searchText",staticClass:"weui-search-bar__label",attrs:{id:"searchText"},on:{click:t.searchTextClick}},[a("i",{staticClass:"weui-icon-search"}),a("span",[t._v("搜索")])])]),a("a",{staticClass:"weui-search-bar__cancel-btn",attrs:{href:"javascript:",id:"searchCancel"},on:{click:function(i){t.isTyping=!1}}},[t._v("取消")])]),a("div",{staticClass:"items"},t._l(t.hotwords,(function(i,s){return a("div",{key:s,staticClass:"item",on:{click:function(a){return t.itemClick(i)}}},[t._v(t._s(i.dspwd))])})),0),a("list",{attrs:{dataList:t.vodrows.length>0?t.vodrows:t.hotrows}}),t.isSearch?a("infinite-loading",{ref:"infiniteLoading",on:{infinite:t.infinite}}):t._e()],1)},e=[],n=(a("99af"),a("f71c")),o=a("58ea"),c={components:{list:o["a"]},data:function(){return{hotwords:[],hotrows:[],vodrows:[],page:1,inputText:"",isTyping:!1,isSearch:!1}},computed:{},created:function(){},mounted:function(){this.loadData(1)},methods:{searchTextClick:function(){this.isTyping=!0,this.$refs.searchInput.focus()},search:function(t){console.log("search",t),this.loadData(1)},itemClick:function(t){this.inputText=t.dspwd,this.isTyping=!0,this.loadData(1)},infinite:function(t){console.log("onReachBottom"),this.loadData(this.page+1,t)},loadData:function(t,i){var a=this;console.log("config",n["a"],n["a"].query());var s=n["a"].query();s.page=t,this.inputText&&(s.wd=this.inputText,this.isSearch=!1,this.$nextTick((function(){a.isSearch=!0}))),this.$axios.request({url:n["a"].origin+"/search",params:n["a"].query()}).then((function(s){i&&i.loaded(),console.log("success",s),200==s.status&&0==s.data.retcode?(a.page=t,s.data.data.hotwords&&(a.hotwords=s.data.data.hotwords),s.data.data.hotrows?a.hotrows=s.data.data.hotrows:(1==a.page?a.vodrows=s.data.data.vodrows:a.vodrows=a.vodrows.concat(s.data.data.vodrows),0==s.data.data.vodrows.length&&(weui.topTips("没了"),i&&i.complete()))):weui.topTips(s.data.errmsg||s.statusCode||"fail")})).catch((function(t){i&&i.loaded(),weui.topTips(t.message||"fail")}))}},watch:{inputText:{handler:function(t,i){},immediate:!1}}},r=c,d=(a("1af2"),a("2877")),l=Object(d["a"])(r,s,e,!1,null,"3e147516",null);i["default"]=l.exports},"58ea":function(t,i,a){"use strict";var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"list"},[t.title?a("div",{staticClass:"header",on:{click:t.headerClick}},[a("span",{staticClass:"title"},[t._v(t._s(t.title))]),a("span",{staticClass:"more"},[t._v("更多")])]):t._e(),a("div",{staticClass:"items"},t._l(t.dataList,(function(i,s){return a("div",{key:s+i.vodid,staticClass:"item",class:{itemMin:t.isMin},on:{click:function(a){return t.itemClick(i,s)}}},[t.vodid==i.vodid&&t.videoUrl?a("video",{staticClass:"video",class:{videoMin:t.isMin},attrs:{controls:"controls",playsinline:"",autoplay:"",title:i.title,poster:i.coverpic,"picture-in-picture-mode":["push","pop"],src:t.videoUrl}}):a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.coverpic,expression:"item.coverpic"}],staticClass:"image",class:{imagemMin:t.isMin},attrs:{mode:"aspectFit"}}),a("span",[t._v(t._s(i.title||i.catename))]),a("div",{staticClass:"tips"},[1==i.isvip?a("span",{staticClass:"isvip"},[t._v(t._s(1==i.isvip?"vip":""))]):t._e(),i.definition>0?a("span",{staticClass:"definition"},[t._v(t._s(i.definition))]):t._e(),t.isMin?t._e():a("span",{staticClass:"updatetime"},[t._v(t._s(i.updatetime))]),a("span",{staticClass:"upnum"},[t._v(t._s(i.upnum))]),a("span",{staticClass:"scorenum"},[t._v(t._s(i.scorenum))]),a("span",{staticClass:"duration"},[t._v(t._s(i.duration))])])])})),0)])},e=[],n=a("f71c"),o={props:{dataList:{default:function(){return[]}},info:{default:function(){return{}}},title:{default:""},isMin:{default:!1}},data:function(){return{vodid:"",videoUrl:""}},methods:{headerClick:function(){this.info.spid?this.$router.push({path:"./detail?spid="+this.info.spid}):this.$router.push({path:"./class"})},itemClick:function(t){var i=this;t.vodid!=this.vodid&&this.$axios({url:n["a"].origin+t.play_url,params:n["a"].query()}).then((function(a){console.log("success",a),a.data.data.httpurl?(i.videoUrl=a.data.data.httpurl,i.vodid=t.vodid):a.data.data.httpurl_preview?(i.videoUrl=a.data.data.httpurl_preview,i.vodid=t.vodid):weui.topTips(a.data.errmsg||"fail"),document&&(document.title=t.title)})).catch((function(t){weui.topTips(t.message||"fail")}))}}},c=o,r=(a("a551"),a("2877")),d=Object(r["a"])(c,s,e,!1,null,"01709375",null);i["a"]=d.exports},a551:function(t,i,a){"use strict";var s=a("1e06"),e=a.n(s);e.a},b381:function(t,i,a){},f71c:function(t,i,a){"use strict";var s="https:",e="6jwti3892pf605m004mn.lagoapps.com",n=s+"//"+e,o={device:"iPhone 7 13.4 1.0",s_device_id:"374B5729-7F3F-4C8F-B6DE-80FF0A333633",s_os_version:"13.4",s_platform:"ios",_t:"1587401036000"};i["a"]={protocol:s,host:e,origin:n,home:n+"/index",query:function(){return Object.assign(o,{_t:(new Date).valueOf()})}}}}]);
//# sourceMappingURL=chunk-2ac49c83.e338ad7d.js.map