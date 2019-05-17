(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-badge/uni-badge"],{"204e":function(t,e,n){"use strict";n.r(e);var u=n("5f3c"),i=n.n(u);for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);e["default"]=i.a},"32c6":function(t,e,n){"use strict";n.r(e);var u=n("5959"),i=n("204e");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("6673");var r=n("2877"),o=Object(r["a"])(i["default"],u["a"],u["b"],!1,null,null,null);e["default"]=o.exports},5959:function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return i})},"5f3c":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"uni-badge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:String,default:""},size:{type:String,default:"normal"}},computed:{setClass:function(){var t=["uni-badge-"+this.type,"uni-badge--"+this.size];return!0===this.inverted&&t.push("uni-badge-inverted"),t.join(" ")}},methods:{onClick:function(){this.$emit("click")}}};e.default=u},6673:function(t,e,n){"use strict";var u=n("870e"),i=n.n(u);i.a},"870e":function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-badge/uni-badge-create-component',
    {
        'components/uni-badge/uni-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("32c6"))
        })
    },
    [['components/uni-badge/uni-badge-create-component']]
]);                
