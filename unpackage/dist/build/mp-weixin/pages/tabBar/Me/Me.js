(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/Me/Me"],{"3db6":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u})},"6e95":function(t,n,e){"use strict";var a=e("7f4b"),u=e.n(a);u.a},"7f4b":function(t,n,e){},"9ae0":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{}},onLoad:function(){},onReady:function(){},onNavigationBarButtonTap:function(n){t.navigateTo({url:"/pages/about/about"})},methods:{triggerCollapse:function(t){if(this.lists[t].pages)for(var n=0;n<this.lists.length;++n)this.lists[n].open=t===n&&!this.lists[t].open;else this.goDetailPage(this.lists[t].url)},goDetailPage:function(n){var e=n.url?n.url:n,a=~e.indexOf("platform")?e:"/pages/template/"+e+"/"+e;return t.navigateTo({url:a}),!1}}};n.default=e}).call(this,e("543d")["default"])},b4ad:function(t,n,e){"use strict";e.r(n);var a=e("9ae0"),u=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=u.a},c384:function(t,n,e){"use strict";e.r(n);var a=e("3db6"),u=e("b4ad");for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);e("6e95");var i=e("2877"),r=Object(i["a"])(u["default"],a["a"],a["b"],!1,null,null,null);n["default"]=r.exports}},[["69ab","common/runtime","common/vendor"]]]);