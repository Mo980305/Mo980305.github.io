(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e2e7968"],{"21b3":function(t,a,e){"use strict";var n=e("8eab"),s=e.n(n);s.a},4369:function(t,a,e){"use strict";e.d(a,"b",(function(){return r})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return c})),e.d(a,"d",(function(){return o}));e("d3b7");var n=e("be3b");function s(t,a){return new Promise((function(e,s){n["a"].get(t,{params:a}).then((function(t){e(t.data)})).catch((function(t){s(t.data)}))}))}var r=function(t){return s("api/app/courseClassify",t)},i=function(t){return s("api/app/courseBasis",t)},c=function(t){return s("api/app/courseInfo/basis_id="+t)},o=function(t){return s("api/app/courseBasis",t)}},"8eab":function(t,a,e){},aff7:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("van-nav-bar",{attrs:{title:"课程详情","left-arrow":""},on:{"click-left":t.onClickLeft},scopedSlots:t._u([{key:"right",fn:function(){return[e("van-icon",{attrs:{name:"share-o",size:"18"}})]},proxy:!0}])}),e("div",{staticClass:"info"},[e("div",{staticClass:"top"},[e("p",[t._v(t._s(t.data.title))]),e("p",[t._v(t._s(0==t.data.price?"免费":"￥"+t.data.price))]),e("p",[t._v("共"+t._s(t.data.total_periods)+"课时 | "+t._s(t.data.sales_num)+"人已报名")]),e("p",[t._v(" 开课时间 "+t._s(new Date(1e3*t.data.created_at).toLocaleDateString())+" ")])]),e("div",{staticClass:"box"},[e("p",[t._v("教学团队")]),e("div",{staticClass:"address"},[e("img",{attrs:{src:t.data.cover_img}}),e("p",[t._v(t._s(void 0==t.data.address?"团队":t.data.address))])])]),e("div",{staticClass:"box"},[e("p",[t._v("课程介绍")]),e("div",{staticClass:"connect"},[t._v(" "+t._s(t.data.course_statement)+" ")])]),e("div",{staticClass:"box"},[e("p",[t._v("课程大纲")]),t._l(10,(function(a){return e("div",{key:a,staticClass:"li"},[e("span",{staticClass:"dian"},[t._v("·")]),e("van-tag",{attrs:{type:"warning"}},[t._v("回放")]),e("span",{staticClass:"title"},[t._v("第一讲第一课时")]),e("p",[t._v(" "+t._s(void 0==t.data.address?"团队":t.data.address)+" "+t._s(new Date(1e3*t.data.created_at).toLocaleDateString())+" - "+t._s(new Date(1e3*t.data.created_at).toLocaleDateString())+" ")])],1)}))],2)]),e("div",{staticClass:"btn"},[e("van-button",{staticClass:"btn_n",attrs:{type:"default"}},[t._v("立即学习")])],1)],1)},s=[],r=(e("96cf"),e("1da1")),i=e("4369"),c={name:"",props:[],components:{},data:function(){return{data:""}},computed:{},watch:{},methods:{getdata:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(i["a"])(t.$route.query.con.id);case 2:e=a.sent,t.data=e.data.info,console.log(t.data);case 5:case"end":return a.stop()}}),a)})))()},onClickLeft:function(){this.$router.go(-1)}},created:function(){},mounted:function(){new Date,this.getdata()}},o=c,d=(e("21b3"),e("2877")),u=Object(d["a"])(o,n,s,!1,null,"0ce2c34c",null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-5e2e7968.c26c2e80.js.map