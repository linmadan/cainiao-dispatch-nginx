(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c419ae4"],{"0f4c":function(e,t,n){},"362c":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.flag,expression:"flag"}],staticClass:"d2-contextmenu",style:e.style},[e._t("default")],2)},s=[],o=(n("e1d4"),{name:"d2-contextmenu",props:{visible:{type:Boolean,default:!1},x:{type:Number,default:0},y:{type:Number,default:0}},computed:{flag:{get:function(){return this.visible&&window.addEventListener("mousedown",this.watchContextmenu),this.visible},set:function(e){this.$emit("update:visible",e)}},style:function(){return{left:this.x+"px",top:this.y+"px",display:this.visible?"block":"none "}}},methods:{watchContextmenu:function(e){this.$el.contains(e.target)&&0===e.button||(this.flag=!1),window.removeEventListener("mousedown",this.watchContextmenu)}},mounted:function(){document.querySelector("body").appendChild(this.$el)}}),u=o,a=(n("a887"),n("4ac2")),l=Object(a["a"])(u,i,s,!1,null,null,null);t["default"]=l.exports},a887:function(e,t,n){"use strict";n("0f4c")}}]);