(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-051cbfb6"],{3547:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-login"},[n("div",{staticClass:"page-login--layer page-login--layer-area"},[n("ul",{staticClass:"circles"},t._l(10,(function(t){return n("li",{key:t})})),0)]),n("div",{staticClass:"page-login--layer page-login--layer-time",attrs:{flex:"main:center cross:center"}},[t._v(" "+t._s(t.time)+" ")]),n("div",{staticClass:"page-login--layer"},[n("div",{staticClass:"page-login--content",attrs:{flex:"dir:top main:justify cross:stretch box:justify"}},[t._m(0),n("div",{staticClass:"page-login--content-main",attrs:{flex:"dir:top main:center cross:center"}},[n("div",{staticClass:"page-login--form"},[n("el-card",{attrs:{shadow:"never"}},[n("el-form",{ref:"loginForm",attrs:{"label-position":"top",rules:t.rules,model:t.formLogin,size:"default"}},[n("el-form-item",{attrs:{prop:"tenantPhone"}},[n("el-input",{attrs:{type:"text",placeholder:"用户名"},model:{value:t.formLogin.tenantPhone,callback:function(e){t.$set(t.formLogin,"tenantPhone",e)},expression:"formLogin.tenantPhone"}},[n("i",{staticClass:"fa fa-user-circle-o",attrs:{slot:"prepend"},slot:"prepend"})])],1),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:t.formLogin.password,callback:function(e){t.$set(t.formLogin,"password",e)},expression:"formLogin.password"}},[n("i",{staticClass:"fa fa-keyboard-o",attrs:{slot:"prepend"},slot:"prepend"})])],1),n("el-button",{staticClass:"button-login",attrs:{size:"default",type:"primary"},on:{click:t.submit}},[t._v(" 登录 ")])],1)],1)],1)]),n("div",{staticClass:"page-login--content-footer"})])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-login--content-header"},[n("p",{staticClass:"page-login--content-header-motto"},[t._v(" 助力菜鸟裹裹快递分配 ")])])}],a=n("1c03"),i=(n("2769"),n("0756"),n("6e85")),r=n.n(i),l=n("5880"),c=(n("a5c9"),n("2621"),{methods:{onChangeLocale:function(t){this.$i18n.locale=t;var e="当前语言：".concat(this.$t("_name")," [ ").concat(this.$i18n.locale," ]");"PREVIEW"===Object({NODE_ENV:"production",VUE_APP_API:"/api/",VUE_APP_BUILD_TIME:"2021-7-15 13:54:54",VUE_APP_ELEMENT_COLOR:"#409EFF",VUE_APP_I18N_FALLBACK_LOCALE:"en",VUE_APP_I18N_LOCALE:"zh-chs",VUE_APP_REPO:"https://github.com/d2-projects/d2-admin-start-kit",VUE_APP_TITLE:"菜鸟助手",VUE_APP_VERSION:"1.20.1",BASE_URL:"/"}).VUE_APP_BUILD_MODE&&(e=["当前语言：".concat(this.$t("_name")," [ ").concat(this.$i18n.locale," ]"),"仅提供切换功能，没有配置具体的语言数据 ",'文档参考：<a class="el-link el-link--primary is-underline" target="_blank" href="https://d2.pub/zh/doc/d2-admin/locales">《国际化 | D2Admin》</a>'].join("<br/>")),this.$notify({title:"语言变更",dangerouslyUseHTMLString:!0,message:e})}}}),p=n("c276"),u={mixins:[c],data:function(){return{timeInterval:null,time:r()().format("HH:mm:ss"),formLogin:{tenantPhone:p["a"].cookies.get("phone"),password:"",code:""},rules:{tenantPhone:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},mounted:function(){var t=this;this.timeInterval=setInterval((function(){t.refreshTime()}),1e3)},beforeDestroy:function(){clearInterval(this.timeInterval)},methods:Object(a["a"])(Object(a["a"])({},Object(l["mapActions"])("d2admin/account",["login"])),{},{refreshTime:function(){this.time=r()().format("HH:mm:ss")},submit:function(){var t=this;this.$refs.loginForm.validate((function(e){e?t.login({tenantPhone:t.formLogin.tenantPhone,password:t.formLogin.password}).then((function(){t.$router.replace(t.$route.query.redirect||"/")})):t.$message.error("表单校验失败，请检查")}))},onForgetPW:function(){this.$router.push("/forget-pass-wrod")},onRegister:function(){this.$router.push("/register")}})},d=u,m=(n("60d0"),n("4ac2")),f=Object(m["a"])(d,s,o,!1,null,null,null);e["default"]=f.exports},"60d0":function(t,e,n){"use strict";n("e6c9")},e6c9:function(t,e,n){}}]);