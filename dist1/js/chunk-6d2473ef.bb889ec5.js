(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d2473ef"],{"1da8":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lm_box"},[n("div",{staticClass:"header_container"},[n("div",{staticClass:"header_wrapper"},[n("div",{staticClass:"head_left"},[n("van-icon",{attrs:{name:"arrow-left"},on:{click:t.onClickLeft}})],1),n("div",{staticClass:"head_title"},[t._v("修改个人信息")]),n("div",{staticClass:"head_icon"},[n("p",{on:{click:function(e){return t.lm_save()}}},[t._v("保存")])])])]),n("div",{staticClass:"lm_info_box"},t._l(t.list,(function(e,i){return n("div",{key:i,staticClass:"box",on:{click:function(n){return t.setSex(e.text)}}},[n("p",[t._v(t._s(e.text))])])})),0)])},c=[],a={name:"",components:{},props:{},data:function(){return{list:[{text:"男"},{text:"女"}]}},created:function(){},mounted:function(){},activated:function(){},update:function(){},beforeRouteUpdate:function(t,e,n){n()},methods:{onClickLeft:function(){this.$router.back(1)},lm_save:function(){this.$router.back(1)},setSex:function(t){this.$store.commit("changeSex",t),this.$router.push("/lmSetMyInfo")}},filters:{},computed:{},watch:{}},s=a,o=(n("f79c"),n("2877")),r=Object(o["a"])(s,i,c,!1,null,"38d2a2c0",null);e["default"]=r.exports},"765a":function(t,e,n){},f79c:function(t,e,n){"use strict";var i=n("765a"),c=n.n(i);c.a}}]);
//# sourceMappingURL=chunk-6d2473ef.bb889ec5.js.map