(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{A0le:function(W,N,i){"use strict";var U=i("W56v"),K=i("2+DO"),R=i("yDyU"),T=i.n(R),F=i("iczh"),H=i.n(F),Q=i("3CTf"),D=i("RVph"),z=i.n(D),f=i("s+0R");function m(){return m=Object.assign||function(c){for(var o=1;o<arguments.length;o++){var s=arguments[o];for(var u in s)Object.prototype.hasOwnProperty.call(s,u)&&(c[u]=s[u])}return c},m.apply(this,arguments)}function j(c,o){var s=Object.keys(c);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(c);o&&(u=u.filter(function(O){return Object.getOwnPropertyDescriptor(c,O).enumerable})),s.push.apply(s,u)}return s}function A(c){for(var o=1;o<arguments.length;o++){var s=arguments[o]!=null?arguments[o]:{};o%2?j(Object(s),!0).forEach(function(u){q(c,u,s[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(s)):j(Object(s)).forEach(function(u){Object.defineProperty(c,u,Object.getOwnPropertyDescriptor(s,u))})}return c}function q(c,o,s){return o in c?Object.defineProperty(c,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):c[o]=s,c}function $(c,o){if(c==null)return{};var s=B(c,o),u,O;if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(c);for(O=0;O<M.length;O++)u=M[O],!(o.indexOf(u)>=0)&&(!Object.prototype.propertyIsEnumerable.call(c,u)||(s[u]=c[u]))}return s}function B(c,o){if(c==null)return{};var s={},u=Object.keys(c),O,M;for(M=0;M<u.length;M++)O=u[M],!(o.indexOf(O)>=0)&&(s[O]=c[O]);return s}var Y=function(o){var s=o.children,u=o.className,O=o.extra,M=o.style,G=o.renderContent,J=$(o,["children","className","extra","style","renderContent"]),w=Object(R.useContext)(K.b.ConfigContext),ve=w.getPrefixCls,ee=o.prefixCls||ve("pro"),te="".concat(ee,"-footer-bar"),y=Object(R.useContext)(f.a),oe=Object(R.useMemo)(function(){var I=y.hasSiderMenu,ie=y.isMobile,se=y.siderWidth;if(!!I)return se?ie?"100%":"calc(100% - ".concat(se,"px)"):"100%"},[y.collapsed,y.hasSiderMenu,y.isMobile,y.siderWidth]),S=T.a.createElement(T.a.Fragment,null,T.a.createElement("div",{className:"".concat(te,"-left")},O),T.a.createElement("div",{className:"".concat(te,"-right")},s));return Object(R.useEffect)(function(){return!y||!(y==null?void 0:y.setHasFooterToolbar)?function(){}:(y==null||y.setHasFooterToolbar(!0),function(){var I;y==null||(I=y.setHasFooterToolbar)===null||I===void 0||I.call(y,!1)})},[]),T.a.createElement("div",m({className:H()(u,"".concat(te)),style:A({width:oe},M)},Object(Q.a)(J,["prefixCls"])),G?G(A(A(A({},o),y),{},{leftWidth:oe}),S):S)};N.a=Y},Nfp2:function(W,N,i){},QDT5:function(W,N,i){"use strict";var U=i("jnST"),K=i("Swvq"),R=i("hF+B"),T=i("fdbh"),F=i("MD6V"),H=i("rPbD"),Q=i("43jC"),D=i("qOUI"),z=i("u8ah"),f=i("yDyU"),m=i.n(f),j=i("iczh"),A=i.n(j),q=i("Rpuv"),$=i("bvih"),B=i("Wo0Y"),Y=i("WMiQ"),c=i("Fo+/");function o(n){var e,r=function(l){return function(){e=null,n.apply(void 0,Object(Y.a)(l))}},t=function(){if(e==null){for(var l=arguments.length,v=new Array(l),d=0;d<l;d++)v[d]=arguments[d];e=Object(c.a)(r(v))}};return t.cancel=function(){return c.a.cancel(e)},t}function s(){return function(e,r,t){var a=t.value,l=!1;return{configurable:!0,get:function(){if(l||this===e.prototype||this.hasOwnProperty(r))return a;var d=o(a.bind(this));return l=!0,Object.defineProperty(this,r,{value:d,configurable:!0,writable:!0}),l=!1,d}}}}var u=i("KNQl");function O(n){return n!==window?n.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function M(n,e,r){if(r!==void 0&&e.top>n.top-r)return r+e.top}function G(n,e,r){if(r!==void 0&&e.bottom<n.bottom+r){var t=window.innerHeight-e.bottom;return r+t}}var J=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],w=[];function ve(){return w}function ee(n,e){if(!!n){var r=w.find(function(t){return t.target===n});r?r.affixList.push(e):(r={target:n,affixList:[e],eventHandlers:{}},w.push(r),J.forEach(function(t){r.eventHandlers[t]=Object(u.a)(n,t,function(){r.affixList.forEach(function(a){a.lazyUpdatePosition()})})}))}}function te(n){var e=w.find(function(r){var t=r.affixList.some(function(a){return a===n});return t&&(r.affixList=r.affixList.filter(function(a){return a!==n})),t});e&&e.affixList.length===0&&(w=w.filter(function(r){return r!==e}),J.forEach(function(r){var t=e.eventHandlers[r];t&&t.remove&&t.remove()}))}var y=function(n,e,r,t){var a=arguments.length,l=a<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,r):t,v;if((typeof Reflect=="undefined"?"undefined":Object(z.a)(Reflect))==="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(n,e,r,t);else for(var d=n.length-1;d>=0;d--)(v=n[d])&&(l=(a<3?v(l):a>3?v(e,r,l):v(e,r))||l);return a>3&&l&&Object.defineProperty(e,r,l),l};function oe(){return typeof window!="undefined"?window:null}var S;(function(n){n[n.None=0]="None",n[n.Prepare=1]="Prepare"})(S||(S={}));var I=function(n){Object(Q.a)(r,n);var e=Object(D.a)(r);function r(){var t;return Object(F.a)(this,r),t=e.apply(this,arguments),t.state={status:S.None,lastAffix:!1,prevTarget:null},t.getOffsetTop=function(){var a=t.props.offsetBottom,l=t.props.offsetTop;return a===void 0&&l===void 0&&(l=0),l},t.getOffsetBottom=function(){return t.props.offsetBottom},t.savePlaceholderNode=function(a){t.placeholderNode=a},t.saveFixedNode=function(a){t.fixedNode=a},t.measure=function(){var a=t.state,l=a.status,v=a.lastAffix,d=t.props.onChange,g=t.getTargetFunc();if(!(l!==S.Prepare||!t.fixedNode||!t.placeholderNode||!g)){var h=t.getOffsetTop(),b=t.getOffsetBottom(),C=g();if(!!C){var p={status:S.None},P=O(C),x=O(t.placeholderNode),E=M(x,P,h),k=G(x,P,b);E!==void 0?(p.affixStyle={position:"fixed",top:E,width:x.width,height:x.height},p.placeholderStyle={width:x.width,height:x.height}):k!==void 0&&(p.affixStyle={position:"fixed",bottom:k,width:x.width,height:x.height},p.placeholderStyle={width:x.width,height:x.height}),p.lastAffix=!!p.affixStyle,d&&v!==p.lastAffix&&d(p.lastAffix),t.setState(p)}}},t.prepareMeasure=function(){if(t.setState({status:S.Prepare,affixStyle:void 0,placeholderStyle:void 0}),!1)var a},t.render=function(){var a=t.context.getPrefixCls,l=t.state,v=l.affixStyle,d=l.placeholderStyle,g=t.props,h=g.prefixCls,b=g.children,C=A()(Object(T.a)({},a("affix",h),v)),p=Object(q.a)(t.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return f.createElement($.a,{onResize:function(){t.updatePosition()}},f.createElement("div",Object(R.a)({},p,{ref:t.savePlaceholderNode}),v&&f.createElement("div",{style:d,"aria-hidden":"true"}),f.createElement("div",{className:C,ref:t.saveFixedNode,style:v},f.createElement($.a,{onResize:function(){t.updatePosition()}},b))))},t}return Object(H.a)(r,[{key:"getTargetFunc",value:function(){var a=this.context.getTargetContainer,l=this.props.target;return l!==void 0?l:a||oe}},{key:"componentDidMount",value:function(){var a=this,l=this.getTargetFunc();l&&(this.timeout=setTimeout(function(){ee(l(),a),a.updatePosition()}))}},{key:"componentDidUpdate",value:function(a){var l=this.state.prevTarget,v=this.getTargetFunc(),d=null;v&&(d=v()||null),l!==d&&(te(this),d&&(ee(d,this),this.updatePosition()),this.setState({prevTarget:d})),(a.offsetTop!==this.props.offsetTop||a.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),te(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var a=this.getTargetFunc(),l=this.state.affixStyle;if(a&&l){var v=this.getOffsetTop(),d=this.getOffsetBottom(),g=a();if(g&&this.placeholderNode){var h=O(g),b=O(this.placeholderNode),C=M(b,h,v),p=G(b,h,d);if(C!==void 0&&l.top===C||p!==void 0&&l.bottom===p)return}}this.prepareMeasure()}}]),r}(f.Component);I.contextType=B.b,y([s()],I.prototype,"updatePosition",null),y([s()],I.prototype,"lazyUpdatePosition",null);var ie=I,se=i("W56v"),Pe=i("2+DO"),Ee=i("RGIw"),Ce=i("Nfp2"),Ie=i("nS9m"),we=i("FmtU"),Le=i("KEAV"),xe=i("DREN"),De={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},Re=De,me=i("8mCa"),ge=function(e,r){return f.createElement(me.a,Object.assign({},e,{ref:r,icon:Re}))};ge.displayName="ArrowLeftOutlined";var je=f.forwardRef(ge),Te={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},Ne=Te,he=function(e,r){return f.createElement(me.a,Object.assign({},e,{ref:r,icon:Ne}))};he.displayName="ArrowRightOutlined";var We=f.forwardRef(he),Ue=i("zWIi"),Ke=i("ipEt"),Be=i("oqtq"),Fe=function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(r[t[a]]=n[t[a]]);return r},Me=function(e){var r=e.prefixCls,t=e.separator,a=t===void 0?"/":t,l=e.children,v=e.overlay,d=e.dropdownProps,g=Fe(e,["prefixCls","separator","children","overlay","dropdownProps"]),h=f.useContext(B.b),b=h.getPrefixCls,C=b("breadcrumb",r),p=function(E){return v?f.createElement(Be.a,Object(R.a)({overlay:v,placement:"bottomCenter"},d),f.createElement("span",{className:"".concat(C,"-overlay-link")},E,f.createElement(Ke.a,null))):E},P;return"href"in g?P=f.createElement("a",Object(R.a)({className:"".concat(C,"-link")},g),l):P=f.createElement("span",Object(R.a)({className:"".concat(C,"-link")},g),l),P=p(P),l?f.createElement("span",null,P,a&&a!==""&&f.createElement("span",{className:"".concat(C,"-separator")},a)):null};Me.__ANT_BREADCRUMB_ITEM=!0;var Ae=Me,pe=function(e){var r=e.children,t=f.useContext(B.b),a=t.getPrefixCls,l=a("breadcrumb");return f.createElement("span",{className:"".concat(l,"-separator")},r||"/")};pe.__ANT_BREADCRUMB_SEPARATOR=!0;var He=pe,Oe=i("HWmB"),le=i("aXpK"),Z=i("/7SN"),re=function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(r[t[a]]=n[t[a]]);return r};function ze(n,e){if(!n.breadcrumbName)return null;var r=Object.keys(e).join("|"),t=n.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),function(a,l){return e[l]||a});return t}function $e(n,e,r,t){var a=r.indexOf(n)===r.length-1,l=ze(n,e);return a?f.createElement("span",null,l):f.createElement("a",{href:"#/".concat(t.join("/"))},l)}var _e=function(e,r){return e=(e||"").replace(/^\//,""),Object.keys(r).forEach(function(t){e=e.replace(":".concat(t),r[t])}),e},Ge=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",t=arguments.length>2?arguments[2]:void 0,a=Object(Y.a)(e),l=_e(r,t);return l&&a.push(l),a},be=function(e){var r=e.prefixCls,t=e.separator,a=t===void 0?"/":t,l=e.style,v=e.className,d=e.routes,g=e.children,h=e.itemRender,b=h===void 0?$e:h,C=e.params,p=C===void 0?{}:C,P=re(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),x=f.useContext(B.b),E=x.getPrefixCls,k=x.direction,V,de=E("breadcrumb",r);if(d&&d.length>0){var ae=[];V=d.map(function(_){var ne=_e(_.path,p);ne&&ae.push(ne);var ye;return _.children&&_.children.length&&(ye=f.createElement(Oe.a,null,_.children.map(function(ue){return f.createElement(Oe.a.Item,{key:ue.path||ue.breadcrumbName},b(ue,p,d,Ge(ae,ue.path,p)))}))),f.createElement(Ae,{overlay:ye,separator:a,key:ne||_.breadcrumbName},b(_,p,d,ae))})}else g&&(V=Object(Ue.a)(g).map(function(_,ne){return _&&(Object(le.a)(_.type&&(_.type.__ANT_BREADCRUMB_ITEM===!0||_.type.__ANT_BREADCRUMB_SEPARATOR===!0),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(Z.a)(_,{separator:a,key:ne}))}));var L=A()(de,Object(T.a)({},"".concat(de,"-rtl"),k==="rtl"),v);return f.createElement("div",Object(R.a)({className:L,style:l},P),V)};be.Item=Ae,be.Separator=He;var Se=be,ce=Se,Xe=i("qp+d"),Ze=i("pEGN"),ke=i("BQkA"),qe=function(e,r,t){return!r||!t?null:f.createElement(ke.a,{componentName:"PageHeader"},function(a){var l=a.back;return f.createElement("div",{className:"".concat(e,"-back")},f.createElement(Ze.a,{onClick:function(d){t==null||t(d)},className:"".concat(e,"-back-button"),"aria-label":l},r))})},et=function(e){return f.createElement(ce,e)},tt=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:r==="rtl"?f.createElement(We,null):f.createElement(je,null)},rt=function(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",a=r.title,l=r.avatar,v=r.subTitle,d=r.tags,g=r.extra,h=r.onBack,b="".concat(e,"-heading"),C=a||v||d||g;if(!C)return null;var p=tt(r,t),P=qe(e,p,h),x=P||l||C;return f.createElement("div",{className:b},x&&f.createElement("div",{className:"".concat(b,"-left")},P,l&&f.createElement(Xe.a,l),a&&f.createElement("span",{className:"".concat(b,"-title"),title:typeof a=="string"?a:void 0},a),v&&f.createElement("span",{className:"".concat(b,"-sub-title"),title:typeof v=="string"?v:void 0},v),d&&f.createElement("span",{className:"".concat(b,"-tags")},d)),g&&f.createElement("span",{className:"".concat(b,"-extra")},g))},at=function(e,r){return r?f.createElement("div",{className:"".concat(e,"-footer")},r):null},nt=function(e,r){return f.createElement("div",{className:"".concat(e,"-content")},r)},ot=function(e){var r=f.useState(!1),t=Object(xe.a)(r,2),a=t[0],l=t[1],v=function(g){var h=g.width;l(h<768)};return f.createElement(B.a,null,function(d){var g,h=d.getPrefixCls,b=d.pageHeader,C=d.direction,p=e.prefixCls,P=e.style,x=e.footer,E=e.children,k=e.breadcrumb,V=e.breadcrumbRender,de=e.className,ae=!0;"ghost"in e?ae=e.ghost:b&&"ghost"in b&&(ae=b.ghost);var L=h("page-header",p),_=function(){var Ve;return((Ve=k)===null||Ve===void 0?void 0:Ve.routes)?et(k):null},ne=_(),ye=(V==null?void 0:V(e,ne))||ne,ue=A()(L,de,(g={"has-breadcrumb":ye,"has-footer":x},Object(T.a)(g,"".concat(L,"-ghost"),ae),Object(T.a)(g,"".concat(L,"-rtl"),C==="rtl"),Object(T.a)(g,"".concat(L,"-compact"),a),g));return f.createElement($.a,{onResize:v},f.createElement("div",{className:ue,style:P},ye,rt(L,e,C),E&&nt(L,E),at(L,x)))})},it=ot,Ot=i("loF4"),Qe=i("A33o"),lt=i("s+0R"),ct=i("ltX7"),st=i("A0le"),bt=i("xtl8"),ft=i("C3LV"),dt=i("tXpI");function Ye(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),r.push.apply(r,t)}return r}function X(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Ye(Object(r),!0).forEach(function(t){Je(n,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):Ye(Object(r)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))})}return n}function Je(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function ut(n,e){if(n==null)return{};var r=vt(n,e),t,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)t=l[a],!(e.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,t)||(r[t]=n[t]))}return r}function vt(n,e){if(n==null)return{};var r={},t=Object.keys(n),a,l;for(l=0;l<t.length;l++)a=t[l],!(e.indexOf(a)>=0)&&(r[a]=n[a]);return r}function fe(){return fe=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},fe.apply(this,arguments)}var mt=function(e){var r=e.tabList,t=e.tabActiveKey,a=e.onTabChange,l=e.tabBarExtraContent,v=e.tabProps,d=e.prefixedClassName;return r&&r.length?m.a.createElement(Qe.a,fe({className:"".concat(d,"-tabs"),activeKey:t,onChange:function(h){a&&a(h)},tabBarExtraContent:l},v),r.map(function(g,h){return m.a.createElement(Qe.a.TabPane,fe({},g,{tab:g.tab,key:g.key||h}))})):null},gt=function(e,r,t){return!e&&!r?null:m.a.createElement("div",{className:"".concat(t,"-detail")},m.a.createElement("div",{className:"".concat(t,"-main")},m.a.createElement("div",{className:"".concat(t,"-row")},e&&m.a.createElement("div",{className:"".concat(t,"-content")},e),r&&m.a.createElement("div",{className:"".concat(t,"-extraContent")},r))))},ht=function(e,r){var t,a,l,v=e.title,d=e.content,g=e.pageHeaderRender,h=e.header,b=e.extraContent,C=e.style,p=e.prefixCls,P=ut(e,["title","content","pageHeaderRender","header","extraContent","style","prefixCls"]);if(g===!1)return null;if(g)return g(X(X({},e),r));var x=v;!v&&v!==!1&&(x=r.title);var E=X(X(X({},r),{},{title:x},P),{},{footer:mt(X(X({},P),{},{prefixedClassName:r.prefixedClassName}))},h);return!E.title&&!E.subTitle&&!((t=E.breadcrumb)===null||t===void 0?void 0:t.itemRender)&&!((a=E.breadcrumb)===null||a===void 0||(l=a.routes)===null||l===void 0?void 0:l.length)&&!E.extra&&!E.tags&&!E.footer&&!E.avatar&&!E.backIcon&&!d&&!b?null:m.a.createElement(it,fe({},E,{breadcrumb:X(X({},E.breadcrumb),E.breadcrumbProps),prefixCls:p}),(h==null?void 0:h.children)||gt(d,b,r.prefixedClassName))},pt=function(e){var r=e.children,t=e.loading,a=e.style,l=e.footer,v=e.affixProps,d=e.ghost,g=e.fixedHeader,h=Object(f.useContext)(lt.a),b=Object(f.useContext)(Pe.b.ConfigContext),C=b.getPrefixCls,p=e.prefixCls||C("pro"),P="".concat(p,"-page-container"),x=A()(P,e.className,Je({},"".concat(p,"-page-container-ghost"),d)),E=r?m.a.createElement("div",null,m.a.createElement("div",{className:"".concat(P,"-children-content")},r),h.hasFooterToolbar&&m.a.createElement("div",{style:{height:48,marginTop:24}})):null,k=ht(e,X(X({},h),{},{prefixCls:void 0,prefixedClassName:P})),V=k?m.a.createElement("div",{className:"".concat(P,"-warp")},k):null,de=function(){var L=t?m.a.createElement(ft.a,null):E;return e.waterMarkProps||h.waterMarkProps?m.a.createElement(dt.a,e.waterMarkProps||h.waterMarkProps,L):L};return m.a.createElement("div",{style:a,className:x},g&&V?m.a.createElement(ie,fe({offsetTop:h.hasHeader&&h.fixedHeader?h.headerHeight:0},v),V):V,m.a.createElement(ct.a,null,de()),l&&m.a.createElement(st.a,{prefixCls:p},l))},yt=N.a=pt},RGIw:function(W,N,i){},RVph:function(W,N,i){},Swvq:function(W,N,i){},ltX7:function(W,N,i){"use strict";var U=i("W56v"),K=i("2+DO"),R=i("un3n"),T=i.n(R),F=i("yDyU"),H=i.n(F),Q=i("iczh"),D=i.n(Q),z=i("s+0R"),f=function(j){var A=Object(F.useContext)(z.a),q=j.children,$=j.contentWidth,B=j.className,Y=j.style,c=Object(F.useContext)(K.b.ConfigContext),o=c.getPrefixCls,s=j.prefixCls||o("pro"),u=$||A.contentWidth,O="".concat(s,"-grid-content");return H.a.createElement("div",{className:D()(O,B,{wide:u==="Fixed"}),style:Y},H.a.createElement("div",{className:"".concat(s,"-grid-content-children")},q))};N.a=f},pEGN:function(W,N,i){"use strict";var U=i("hF+B"),K=i("yDyU"),R=i.n(K),T=i("8CiR"),F=function(D,z){var f={};for(var m in D)Object.prototype.hasOwnProperty.call(D,m)&&z.indexOf(m)<0&&(f[m]=D[m]);if(D!=null&&typeof Object.getOwnPropertySymbols=="function")for(var j=0,m=Object.getOwnPropertySymbols(D);j<m.length;j++)z.indexOf(m[j])<0&&Object.prototype.propertyIsEnumerable.call(D,m[j])&&(f[m[j]]=D[m[j]]);return f},H={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},Q=K.forwardRef(function(D,z){var f=function(c){var o=c.keyCode;o===T.a.ENTER&&c.preventDefault()},m=function(c){var o=c.keyCode,s=D.onClick;o===T.a.ENTER&&s&&s()},j=D.style,A=D.noStyle,q=D.disabled,$=F(D,["style","noStyle","disabled"]),B={};return A||(B=Object(U.a)({},H)),q&&(B.pointerEvents="none"),B=Object(U.a)(Object(U.a)({},B),j),K.createElement("div",Object(U.a)({role:"button",tabIndex:0,ref:z},$,{onKeyDown:f,onKeyUp:m,style:B}))});N.a=Q},"s+0R":function(W,N,i){"use strict";var U=i("yDyU"),K=i.n(U),R=Object(U.createContext)({});N.a=R},tXpI:function(W,N,i){"use strict";var U=i("W56v"),K=i("2+DO"),R=i("yDyU"),T=i.n(R),F=i("iczh"),H=i.n(F);function Q(c,o){var s=Object.keys(c);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(c);o&&(u=u.filter(function(O){return Object.getOwnPropertyDescriptor(c,O).enumerable})),s.push.apply(s,u)}return s}function D(c){for(var o=1;o<arguments.length;o++){var s=arguments[o]!=null?arguments[o]:{};o%2?Q(Object(s),!0).forEach(function(u){z(c,u,s[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(s)):Q(Object(s)).forEach(function(u){Object.defineProperty(c,u,Object.getOwnPropertyDescriptor(s,u))})}return c}function z(c,o,s){return o in c?Object.defineProperty(c,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):c[o]=s,c}function f(c,o){return $(c)||q(c,o)||j(c,o)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(c,o){if(!!c){if(typeof c=="string")return A(c,o);var s=Object.prototype.toString.call(c).slice(8,-1);if(s==="Object"&&c.constructor&&(s=c.constructor.name),s==="Map"||s==="Set")return Array.from(c);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return A(c,o)}}function A(c,o){(o==null||o>c.length)&&(o=c.length);for(var s=0,u=new Array(o);s<o;s++)u[s]=c[s];return u}function q(c,o){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(c)))){var s=[],u=!0,O=!1,M=void 0;try{for(var G=c[Symbol.iterator](),J;!(u=(J=G.next()).done)&&(s.push(J.value),!(o&&s.length===o));u=!0);}catch(w){O=!0,M=w}finally{try{!u&&G.return!=null&&G.return()}finally{if(O)throw M}}return s}}function $(c){if(Array.isArray(c))return c}var B=function(o){if(!o)return 1;var s=o.backingStorePixelRatio||o.webkitBackingStorePixelRatio||o.mozBackingStorePixelRatio||o.msBackingStorePixelRatio||o.oBackingStorePixelRatio||o.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/s},Y=function(o){var s=o.children,u=o.style,O=o.className,M=o.markStyle,G=o.markClassName,J=o.zIndex,w=J===void 0?9:J,ve=o.gapX,ee=ve===void 0?212:ve,te=o.gapY,y=te===void 0?222:te,oe=o.width,S=oe===void 0?120:oe,I=o.height,ie=I===void 0?64:I,se=o.rotate,Pe=se===void 0?-22:se,Ee=o.image,Ce=o.content,Ie=o.offsetLeft,we=o.offsetTop,Le=o.fontStyle,xe=Le===void 0?"normal":Le,De=o.fontWeight,Re=De===void 0?"normal":De,me=o.fontColor,ge=me===void 0?"rgba(0,0,0,.15)":me,je=o.fontSize,Te=je===void 0?16:je,Ne=o.fontFamily,he=Ne===void 0?"sans-serif":Ne,We=o.prefixCls,Ue=Object(R.useContext)(K.b.ConfigContext),Ke=Ue.getPrefixCls,Be=Ke("pro-layout-watermark",We),Fe=H()("".concat(Be,"-wrapper"),O),Me=H()(Be,G),Ae=Object(R.useState)(""),pe=f(Ae,2),He=pe[0],Oe=pe[1];return Object(R.useEffect)(function(){var le=document.createElement("canvas"),Z=le.getContext("2d"),re=B(Z),ze="".concat((ee+S)*re,"px"),$e="".concat((y+ie)*re,"px"),_e=Ie||ee/2,Ge=we||y/2;if(le.setAttribute("width",ze),le.setAttribute("height",$e),Z){Z.translate(_e*re,Ge*re),Z.rotate(Math.PI/180*Number(Pe));var be=S*re,Se=ie*re;if(Ee){var ce=new Image;ce.crossOrigin="anonymous",ce.referrerPolicy="no-referrer",ce.src=Ee,ce.onload=function(){Z.drawImage(ce,0,0,be,Se),Oe(le.toDataURL())}}else if(Ce){var Xe=Number(Te)*re;Z.font="".concat(xe," normal ").concat(Re," ").concat(Xe,"px/").concat(Se,"px ").concat(he),Z.fillStyle=ge,Z.fillText(Ce,0,0),Oe(le.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[ee,y,Ie,we,Pe,xe,Re,S,ie,he,ge,Ee,Ce,Te]),T.a.createElement("div",{style:D({position:"relative"},u),className:Fe},s,T.a.createElement("div",{className:Me,style:D({zIndex:w,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(ee+S,"px"),pointerEvents:"none",backgroundRepeat:"repeat",backgroundImage:"url('".concat(He,"')")},M)}))};N.a=Y},un3n:function(W,N,i){},xtl8:function(W,N,i){}}]);
