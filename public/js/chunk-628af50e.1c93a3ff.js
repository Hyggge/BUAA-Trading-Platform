(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-628af50e"],{4133:function(t,e,r){"use strict";var a=r("aea8"),n=r("0e5a"),o=r("6d91"),i=r("d165"),s=r("feb6"),l=r("2ab8"),c=RangeError,u=String,p=Math.floor,m=n(s),d=n("".slice),g=n(1..toFixed),f=function(t,e,r){return 0===e?r:e%2===1?f(t,e-1,r*t):f(t*t,e/2,r)},h=function(t){var e=0,r=t;while(r>=4096)e+=12,r/=4096;while(r>=2)e+=1,r/=2;return e},y=function(t,e,r){var a=-1,n=r;while(++a<6)n+=e*t[a],t[a]=n%1e7,n=p(n/1e7)},_=function(t,e){var r=6,a=0;while(--r>=0)a+=t[r],t[r]=p(a/e),a=a%e*1e7},b=function(t){var e=6,r="";while(--e>=0)if(""!==r||0===e||0!==t[e]){var a=u(t[e]);r=""===r?a:r+m("0",7-a.length)+a}return r},w=l((function(){return"0.000"!==g(8e-5,3)||"1"!==g(.9,0)||"1.25"!==g(1.255,2)||"1000000000000000128"!==g(0xde0b6b3a7640080,0)}))||!l((function(){g({})}));a({target:"Number",proto:!0,forced:w},{toFixed:function(t){var e,r,a,n,s=i(this),l=o(t),p=[0,0,0,0,0,0],g="",w="0";if(l<0||l>20)throw c("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return u(s);if(s<0&&(g="-",s=-s),s>1e-21)if(e=h(s*f(2,69,1))-69,r=e<0?s*f(2,-e,1):s/f(2,e,1),r*=4503599627370496,e=52-e,e>0){y(p,0,r),a=l;while(a>=7)y(p,1e7,0),a-=7;y(p,f(10,a,1),0),a=e-1;while(a>=23)_(p,1<<23),a-=23;_(p,1<<a),y(p,1,1),_(p,2),w=b(p)}else y(p,0,r),y(p,1<<-e,0),w=b(p)+m("0",l);return l>0?(n=w.length,w=g+(n<=l?"0."+m("0",l-n)+w:d(w,0,n-l)+"."+d(w,n-l))):w=g+w,w}})},ba82:function(t,e,r){"use strict";r.r(e);r("2482"),r("8cd1"),r("2445"),r("89b9");var a=function(){var t=this,e=t._self._c;return e("d2-container",{scopedSlots:t._u([{key:"header",fn:function(){return[e("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px"}},[e("el-form-item",{staticStyle:{height:"10px"},attrs:{label:"请选择店铺"}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.curShopId,callback:function(e){t.curShopId=e},expression:"curShopId"}},t._l(t.shopList,(function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1),e("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:t.goToCreateCommodity}},[t._v(" 增加商品 ")])],1)],1)]},proxy:!0}])},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.curCommodityList,border:""}},[e("el-table-column",{attrs:{prop:"picture",label:"商品图片",align:"center",width:"80"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("img",{staticStyle:{width:"100%",height:"80px"},attrs:{src:t.row.image_url}})]}}])}),e("el-table-column",{attrs:{prop:"name",label:"商品名",align:"center",width:"120"}}),e("el-table-column",{attrs:{prop:"price",label:"价格",align:"center",width:"120"}}),e("el-table-column",{attrs:{prop:"method",label:"交易方式",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(r){return[0===r.row.method?e("el-tag",{attrs:{type:"success",effect:"plain"}},[e("strong",[t._v("线上交易")])]):t._e(),1===r.row.method?e("el-tag",{attrs:{type:"primary",effect:"plain"}},[e("strong",[t._v("线下自取")])]):t._e(),2===r.row.method?e("el-tag",{attrs:{type:"warning",effect:"plain"}},[e("strong",[t._v("送货上门")])]):t._e()]}}])}),e("el-table-column",{attrs:{prop:"status",label:"商品状态",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(r){return[0===r.row.status?e("el-tag",{attrs:{type:"primary"}},[e("strong",[t._v("未生效")])]):t._e(),1===r.row.status?e("el-tag",{attrs:{type:"warning"}},[e("strong",[t._v("预售中")])]):t._e(),2===r.row.status?e("el-tag",{attrs:{type:"success"}},[e("strong",[t._v("售卖中")])]):t._e(),3===r.row.status?e("el-tag",{attrs:{type:"info"}},[e("strong",[t._v("已下架")])]):t._e(),e("el-popover",{attrs:{placement:"top-start",title:"请选择新的商品状态",width:"200",trigger:"click"}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.newStatus,callback:function(e){t.newStatus=e},expression:"newStatus"}},[e("el-option",{attrs:{label:"未生效",value:0}}),e("el-option",{attrs:{label:"预售中",value:1}}),e("el-option",{attrs:{label:"售卖中",value:2}}),e("el-option",{attrs:{label:"已下架",value:3}})],1),e("div",{staticStyle:{"text-align":"center"}},[e("el-button",{staticStyle:{"margin-top":"10px"},attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.changeStatus(r.row.id)}}},[t._v("提交")])],1),e("el-link",{staticStyle:{"margin-left":"3px"},attrs:{slot:"reference",icon:"el-icon-edit"},slot:"reference"})],1)]}}])}),e("el-table-column",{attrs:{prop:"sale",label:"销量",align:"center",width:"120"}}),e("el-table-column",{attrs:{prop:"left",label:"余量",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.total-e.row.sale)+" ")]}}])}),e("el-table-column",{attrs:{prop:"other",label:"",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(r){return[e("el-row",{staticStyle:{"text-align":"center"}},[e("el-button",{attrs:{round:"",type:"primary",size:"small"},on:{click:function(e){return t.getCommodityDetails(r.row.id)}}},[t._v("查看详情")])],1),e("el-row",{staticStyle:{"text-align":"center","margin-top":"10px"}},[e("el-button",{attrs:{round:"",type:"danger",size:"small"},on:{click:function(e){return t.deleteCommodity(r.row.id)}}},[t._v("删除商品")])],1)]}}])})],1),e("div",{staticClass:"block",staticStyle:{"margin-top":"10px"}},[e("el-pagination",{staticStyle:{"text-align":"center"},attrs:{hi:"",background:"",layout:"prev, pager, next,jumper, ->, total, slot",total:t.filterTotalCnt,"current-page":t.currentPage,"page-size":10},on:{"current-change":t.handleCurrentChange}})],1),e("el-drawer",{attrs:{title:"商品详情",visible:t.drawer,direction:"rtl"},on:{"update:visible":function(e){t.drawer=e}}},[e("img",{staticStyle:{width:"100%"},attrs:{src:t.curCommodityDetails.image_url,alt:""}}),e("h3",{staticStyle:{"margin-left":"10px"}},[t._v("商品介绍")]),e("br"),e("div",{staticStyle:{"margin-bottom":"10px","margin-left":"10px"}},[t._v(" "+t._s(t.curCommodityDetails.introduction)+" ")]),e("h3",{staticStyle:{"margin-left":"10px","margin-top":"50px"}},[t._v("商品详情")]),e("br"),e("el-descriptions",{attrs:{column:2,border:""}},[e("el-descriptions-item",{attrs:{span:2}},[e("template",{slot:"label"},[t._v(" 商品名称 ")]),t._v(" "+t._s(t.curCommodityDetails.name)+" ")],2),e("el-descriptions-item",[e("template",{slot:"label"},[t._v(" 价格 ")]),t._v(" "+t._s("¥ "+t.curCommodityDetails.price)+" ")],2),e("el-descriptions-item",[e("template",{slot:"label"},[t._v(" 总量 ")]),t._v(" "+t._s(t.curCommodityDetails.total)+" ")],2),e("el-descriptions-item",[e("template",{slot:"label"},[t._v(" 销量 ")]),t._v(" "+t._s(t.curCommodityDetails.sale)+" ")],2),e("el-descriptions-item",[e("template",{slot:"label"},[t._v(" 余量 ")]),t._v(" "+t._s(t.curCommodityDetails.total-t.curCommodityDetails.sale)+" ")],2),e("el-descriptions-item",[e("template",{slot:"label"},[t._v(" 交易方式 ")]),0===t.curCommodityDetails.method?e("el-tag",{attrs:{type:"success",effect:"plain"}},[e("strong",[t._v("线上交易")])]):t._e(),1===t.curCommodityDetails.method?e("el-tag",{attrs:{type:"primary",effect:"plain"}},[e("strong",[t._v("线下自取")])]):t._e(),2===t.curCommodityDetails.method?e("el-tag",{attrs:{type:"warning",effect:"plain"}},[e("strong",[t._v("送货上门")])]):t._e()],2),e("el-descriptions-item",[e("template",{slot:"label"},[t._v(" 商品状态 ")]),0===t.curCommodityDetails.status?e("el-tag",{attrs:{type:"primary"}},[e("strong",[t._v("未生效")])]):t._e(),1===t.curCommodityDetails.status?e("el-tag",{attrs:{type:"warning"}},[e("strong",[t._v("预售中")])]):t._e(),2===t.curCommodityDetails.status?e("el-tag",{attrs:{type:"success"}},[e("strong",[t._v("售卖中")])]):t._e(),3===t.curCommodityDetails.status?e("el-tag",{attrs:{type:"info"}},[e("strong",[t._v("已下架")])]):t._e()],2)],1),e("br"),e("br"),t.curCommodityDetails.params&&0!==t.curCommodityDetails.params.length?[e("h3",{staticStyle:{"margin-left":"10px"}},[t._v("商品参数")]),e("br"),e("el-descriptions",{attrs:{column:1,border:""}},t._l(t.curCommodityDetails.params,(function(r){return e("el-descriptions-item",{key:r.id},[e("template",{slot:"label"},[t._v(" "+t._s(r.name)+" ")]),t._l(r.options,(function(r,a){return e("el-tag",{key:r.id,staticStyle:{"margin-right":"10px"},attrs:{type:t.tagTypes[a%4]}},[t._v(" "+t._s("".concat(r.description,"(¥").concat(t.formatPrice(t.curCommodityDetails.price,r.add),")"))+" ")])}))],2)})),1)]:t._e()],2)],1)},n=[],o=r("d18b"),i=r("da3e"),s=(r("b141"),r("4133"),r("365c")),l={name:"shop-goods",data:function(){return{newStatus:"",newDiscount:"",tagTypes:["success","primary","warning","danger"],drawer:!1,select:0,userId:this.$store.state.d2admin.user.info.id,shopList:[],curShopId:0,curCommodityList:[],curCommodityDetails:{},filterTotalCnt:0,currentPage:1}},methods:{getShopList:function(){var t=this;return Object(i["a"])(Object(o["a"])().mark((function e(){var r;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].GET_USER_SHOP_LIST(t.userId);case 2:r=e.sent,t.shopList=r.owning_shops.concat(r.managing_shops);case 4:case"end":return e.stop()}}),e)})))()},getCommodityList:function(){var t=this;return Object(i["a"])(Object(o["a"])().mark((function e(){var r,a;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={page:t.currentPage,keyword:""},e.next=3,s["a"].GET_COMMODITY_LIST_FOR_SHOP(t.curShopId,r);case 3:a=e.sent,t.curCommodityList=a.data,t.filterTotalCnt=a.tot_count,console.log(t.curCommodityList);case 7:case"end":return e.stop()}}),e)})))()},handleCurrentChange:function(t){this.currentPage=t,this.getCommodityList()},getCommodityDetails:function(t){var e=this;return Object(i["a"])(Object(o["a"])().mark((function r(){var a;return Object(o["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,s["a"].GET_COMMODITY_DETAILS(t);case 2:a=r.sent,console.log(a),e.curCommodityDetails=a,e.drawer=!0;case 6:case"end":return r.stop()}}),r)})))()},deleteCommodity:function(t){var e=this;return Object(i["a"])(Object(o["a"])().mark((function r(){return Object(o["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$confirm("此操作将永久删除该商品, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});case 2:return r.next=4,s["a"].DELETE_COMMODITY(t);case 4:return r.next=6,e.getCommodityList();case 6:e.$Message.success("删除成功！");case 7:case"end":return r.stop()}}),r)})))()},goToCreateCommodity:function(){this.$router.push({name:"commodity-create",query:{shopId:this.curShopId}})},goToUpdateCommodity:function(){this.$router.push({name:"commodity-update",query:{shopId:this.curShopId}})},changeStatus:function(t){var e=this;return Object(i["a"])(Object(o["a"])().mark((function r(){return Object(o["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,s["a"].UPDATE_COMMODITY_DETAILS(t,{status:e.newStatus});case 2:return r.next=4,e.getCommodityList();case 4:e.$Message.success("修改成功！");case 5:case"end":return r.stop()}}),r)})))()},formatPrice:function(t,e){return(parseFloat(t)+parseFloat(e)).toFixed(2)}},watch:{curShopId:{handler:function(t){this.getCommodityList()}}},mounted:function(){var t=this;return Object(i["a"])(Object(o["a"])().mark((function e(){return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getShopList();case 2:if(0!==t.shopList.length){e.next=8;break}return e.next=5,t.$router.push({path:"/shop/create"});case 5:t.$Message.warning("您还没有创建店铺!"),e.next=9;break;case 8:t.curShopId=t.shopList[0].id;case 9:case"end":return e.stop()}}),e)})))()}},c=l,u=r("e607"),p=Object(u["a"])(c,a,n,!1,null,"410ab27a",null);e["default"]=p.exports},feb6:function(t,e,r){"use strict";var a=r("6d91"),n=r("06dc"),o=r("a1c8"),i=RangeError;t.exports=function(t){var e=n(o(this)),r="",s=a(t);if(s<0||s==1/0)throw i("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(e+=e))1&s&&(r+=e);return r}}}]);