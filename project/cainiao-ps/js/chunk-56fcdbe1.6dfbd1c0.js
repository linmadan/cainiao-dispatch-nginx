(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56fcdbe1","chunk-37e905ec","chunk-3987c6e0","chunk-2d0af176"],{"0d9e":function(e,t,a){"use strict";a.r(t),a.d(t,"StatusOptions",(function(){return n}));var n=[{label:"等待处理",value:1,labelColor:"#FF6666"},{label:"不用调整",value:2,labelColor:"#000000"},{label:"等待确认",value:3,labelColor:"#CC3333"},{label:"人工调整",value:4,labelColor:"#003399"},{label:"人工恢复",value:5,labelColor:"#666666"},{label:"调整上传成功",value:6,labelColor:"#333300"},{label:"调整上传失败",value:7,labelColor:"#990033"},{label:"不用处理",value:8,labelColor:"#CC9966"}]},"5f18":function(e,t,a){"use strict";a("b33c")},6887:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a("2769"),a("0c98"),a("b1fa"),a("c5ce"),a("a5c9");var n=function(e){if(!e||e.match("0001-01-01T00:00:00Z"))return"-";var t=new Date(e),a=(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),Math.floor((t.getMonth()+3)/3),t.getMilliseconds(),"000".concat(t.getFullYear())),n="0".concat(t.getMonth()+1),o="0".concat(t.getDate()),r="0".concat(t.getHours()),l="0".concat(t.getMinutes());return"".concat(a.substr(a.length-4),"-").concat(n.substr(n.length-2),"-").concat(o.substr(o.length-2)," ").concat(r.substr(r.length-2),":").concat(l.substr(l.length-2)).toString()}},"6ad7":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("d2-container",{staticClass:"page",scopedSlots:e._u([{key:"footer",fn:function(){return[e.total?a("el-pagination",{staticClass:"pagination",attrs:{background:"",layout:"prev, pager, next",total:e.total,"current-page":e.currentPage},on:{"current-change":e.onPageChange}}):e._e()]},proxy:!0}])},[a("template",{slot:"header"},[a("div",{staticClass:"header"},[a("div",{staticClass:"title"},[e._v("调整不用处理的订单")]),a("div",{staticClass:"btns"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-sort-up"},on:{click:e.onConfirm}},[e._v("批量上传"+e._s(e.selectIds.length?"（"+e.selectIds.length+"）":""))])],1)])]),a("order-table",{attrs:{data:e.data,loading:e.loading,selectable:!0},on:{onSelectChange:e.onSelectChange,refreash:e.refreash}})],2)},o=[],r=(a("b1fa"),a("88ff")),l=a("365c"),i={components:{OrderTable:r["default"]},data:function(){return{data:[],total:0,currentPage:1,loading:!1,selectIds:[]}},methods:{onPageChange:function(e){this.currentPage=e,this.refreash()},refreash:function(){var e=this;this.selectIds=[],this.loading=!0,l["a"].TASK_LIST({offset:10*(this.currentPage-1),limit:10,statuses:[8]}).then((function(t){e.data=t.dispatchTasks,e.total=t.count})).finally((function(){e.loading=!1}))},onSelectChange:function(e){this.selectIds=e},onConfirm:function(){var e=this;this.selectIds.length?(this.showLoadingScreen(this),l["a"].TASK_WITHOUT_PROCESS_DISPATCH(this.selectIds).then((function(t){e.refreash()})).finally((function(){e.dismissLoading(e)}))):this.$message.error("请选择要上传的快递单")}},mounted:function(){this.refreash()}},s=i,c=(a("aa29"),a("4ac2")),u=Object(c["a"])(s,n,o,!1,null,"24eb8932",null);t["default"]=u.exports},"7a37":function(e,t,a){},"88ff":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.data},on:{"selection-change":e.handleSelectionChange}},[e.selectable?a("el-table-column",{attrs:{type:"selection",width:"55"}}):e._e(),a("el-table-column",{attrs:{prop:"externalNumber",label:"订单id"}}),a("el-table-column",{attrs:{prop:"courierPhone",label:"日期",width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v(" 接单时间："),a("br"),e._v(e._s(e._f("timeFormt")(t.row.externalTime))),a("br"),e._v(" 期望揽收："),a("br"),e._v(e._s(e._f("timeFormt")(t.row.externalExpectGotTime))+" ")])]}}])}),a("el-table-column",{attrs:{prop:"senderAddress",label:"客户地址",width:"220px"}}),a("el-table-column",{attrs:{prop:"areaName",label:"分派范围"}}),a("el-table-column",{attrs:{prop:"courierName",label:"快递员"}}),a("el-table-column",{attrs:{label:"智能分派"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.autoRecoveryCourierName?[a("div",[e._v(" 快递员："+e._s(t.row.autoRecoveryCourierName)),a("br"),e._v(" 揽收范围："+e._s(t.row.autoRecoveryAreaName)+" ")])]:a("div",[e._v("-")])]}}])}),a("el-table-column",{attrs:{prop:"autoRecoveryReason",label:"分派理由"}}),a("el-table-column",{attrs:{prop:"areaName",label:"人工调整"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.manualRecoveryCourierName?[a("div",[e._v(" 快递员："+e._s(t.row.manualRecoveryCourierName)),a("br"),e._v(" 揽收范围："+e._s(t.row.manualRecoveryAreaName)+" ")])]:a("div",[e._v("-")])]}}])}),a("el-table-column",{attrs:{label:"处理结果"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v(" "+e._s(e._f("statusFormat")(t.row.status))+" ")])]}}])}),a("el-table-column",{attrs:{prop:"areaName",label:"分派范围"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"box-option"},[-1!=Array.from([1,3,4,7,8]).indexOf(t.row.status)?a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.onRollbackClick(t.row)}}},[e._v(" 撤销调整 ")]):e._e(),-1!=Array.from([3,4,5,7,8]).indexOf(t.row.status)?a("el-button",{staticStyle:{"margin-left":"0"},attrs:{type:"text"},on:{click:function(a){return e.onManualClick(t.row)}}},[e._v(" 人工调整 ")]):e._e(),-1!=Array.from([3,4]).indexOf(t.row.status)?a("el-button",{staticStyle:{"margin-left":"0"},attrs:{type:"text"},on:{click:function(a){return e.onRollbackManualClick(t.row)}}},[e._v(" 撤销人工调整 ")]):e._e()],1)]}}])})],1),a("manual-ajust-dialog",{attrs:{couriers:e.couriers,areas:e.ares,visible:e.showManualdialog},on:{close:e.onClose,confirm:e.onConfirm}})],1)},o=[],r=(a("e1d4"),a("eb62"),a("b1fa"),a("6887")),l=a("0d9e"),i=a("8ca8"),s=a("365c"),c={components:{ManualAjustDialog:i["default"]},props:{data:Array,selectable:Boolean,totlal:Number,loading:Boolean},data:function(){return{showManualdialog:!1,couriers:[],ares:[]}},filters:{timeFormt:function(e){return e?Object(r["a"])(e):""},statusFormat:function(e){return l["StatusOptions"][e-1].label}},methods:{handleSelectionChange:function(e){var t=(e||[]).map((function(e){return e.areaId}));this.$emit("onSelectChange",t)},onRollbackClick:function(e){var t=this;this.showLoadingScreen(this),s["a"].TASK_MANUAL_WITHOUT_PROCESS_DISPATCH(e.dispatchTaskId).then((function(e){t.refreash()})).catch((function(e){})).finally((function(){t.dismissLoading(t)}))},onManualClick:function(e){this.currentTask=e,this.showManualdialog=!0},onRollbackManualClick:function(e){var t=this;this.showLoadingScreen(this),s["a"].TASK_REGAIN_DISPATCH(e.dispatchTaskId).then((function(e){t.refreash()})).catch((function(e){})).finally((function(){t.dismissLoading(t)}))},refreash:function(){this.$emit("refreash")},onClose:function(){this.showManualdialog=!1},onConfirm:function(e,t){var a=this;s["a"].TASK_RECOVERY_DISPATCH(this.currentTask.dispatchTaskId,{courierId:e,areaId:t}).then((function(e){a.refreash(),a.showManualdialog=!1})).catch((function(e){})).finally((function(){a.dismissLoading(a)}))}},mounted:function(){var e=this;s["a"].COURIER_LIST({offset:0,limit:-1}).then((function(t){e.couriers=t.couriers})),s["a"].AREA_LIST({offset:0,limit:-1}).then((function(t){e.ares=t.areas}))}},u=c,f=(a("fae8"),a("4ac2")),d=Object(f["a"])(u,n,o,!1,null,null,null);t["default"]=d.exports},"8ca8":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.visible,title:"手动调整",width:"600px"},on:{close:e.onClose}},[a("div",{staticClass:"center"},[a("el-select",{attrs:{placeholder:"请选择快递员"},model:{value:e.courier,callback:function(t){e.courier=t},expression:"courier"}},e._l(e.couriers,(function(t){return a("el-option",{key:t.courierId,attrs:{label:t.courierName,value:t.courierId}},[e._v(e._s(t.courierName))])})),1),a("el-select",{attrs:{placeholder:"请选择分派区域"},model:{value:e.area,callback:function(t){e.area=t},expression:"area"}},e._l(e.areas,(function(t){return a("el-option",{key:t.areaId,attrs:{label:t.areaName,value:t.areaId}},[e._v(e._s(t.areaName))])})),1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.onClose}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary",loading:e.dialogLoading},on:{click:e.onConfirm}},[e._v("确 定")])],1)])},o=[],r={props:{couriers:Array,areas:Array,visible:Boolean},data:function(){return{dialogLoading:!1,source:[],courier:null,area:null}},methods:{onConfirm:function(){this.courier&&this.area?(this.dialogLoading=!0,this.$emit("confirm",this.courier,this.area)):this.$message.error("请选择快递员和分派区域")},onClose:function(){this.$emit("close")},reset:function(){this.dialogLoading=!1,this.courier=null,this.area=null}},watch:{visible:function(e){e&&this.reset()}}},l=r,i=(a("5f18"),a("4ac2")),s=Object(i["a"])(l,n,o,!1,null,null,null);t["default"]=s.exports},aa29:function(e,t,a){"use strict";a("e4d3")},b33c:function(e,t,a){},c5ce:function(e,t,a){"use strict";var n=a("6c39"),o=a("9f69"),r=a("d50e"),l=a("f91c"),i="toString",s=RegExp.prototype,c=s[i],u=r((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),f=c.name!=i;(u||f)&&n(RegExp.prototype,i,(function(){var e=o(this),t=String(e.source),a=e.flags,n=String(void 0===a&&e instanceof RegExp&&!("flags"in s)?l.call(e):a);return"/"+t+"/"+n}),{unsafe:!0})},e4d3:function(e,t,a){},fae8:function(e,t,a){"use strict";a("7a37")}}]);