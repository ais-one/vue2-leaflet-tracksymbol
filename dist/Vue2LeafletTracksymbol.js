module.exports=function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var o={};return e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=1)}([function(t,e,o){"use strict";var n=o(4),i=o.n(n),s=o(5),r=(o.n(s),o(6)),a=o(7),c=["click","dblclick","mousedown","mouseover","mouseout","contextmenu","add","remove","popupopen","popupclose","tooltipopen","tooltipclose"],p={latlng:{type:[Object,Array]},options:{type:Object},visible:{type:Boolean,custom:!0,default:!0}};e.a={props:p,mounted:function(){var t={};t.trackId=this.options.trackId||0,t.fill=this.options.fill||!0,t.fillColor=this.options.fillColor||"#0000ff",t.fillOpacity=this.options.fillOpacity||1,t.stroke=this.options.stroke||!0,t.color=this.options.color||"#000000",t.opacity=this.options.opacity||1,t.weight=this.options.weight||1,t.speed=this.options.speed||0,t.course=this.options.course||0,t.heading=this.options.heading||0,t.defaultSymbol=this.options.defaultSymbol||[.75,0,-.25,.3,-.25,-.3],t.noHeadingSymbol=t.noHeadingSymbol||[.3,0,0,.3,-.3,0,0,-.3],t.silouetteSymbol=t.silouetteSymbol||[1,.5,.75,1,0,1,0,0,.75,0],t.gpsRefPos=this.options.gpsRefPos||void 0,t.minSilouetteZoom=this.options.minSilouetteZoom||14,t.leaderTime=this.options.leaderTime||60,t.size=this.options.size||24,t.data=this.options.data||{},this.mapObject=i.a.trackSymbol(this.latlng,t),Object(r.a)(this,this.mapObject,c),Object(a.a)(this,this.mapObject,p),this.$parent._isMounted&&this.deferredMountedTo(this.$parent.mapObject)},beforeDestroy:function(){this.setVisible(!1)},methods:{deferredMountedTo:function(t){this.parent=t;for(var e=this.mapObject,o=0;o<this.$children.length;o++)this.$children[o].deferredMountedTo(e);this.visible&&this.mapObject.addTo(t)},setVisible:function(t,e){t!==e&&this.mapObject&&(t?this.mapObject.addTo(this.parent):this.parent.removeLayer(this.mapObject))}}}},function(t,e,o){t.exports=o(2)},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(0),i=o(8),s=o(3),r=s(n.a,i.a,!1,null,null,null);e.default=r.exports},function(t,e){t.exports=function(t,e,o,n,i,s){var r,a=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(r=t,a=t.default);var p="function"==typeof a?a.options:a;e&&(p.render=e.render,p.staticRenderFns=e.staticRenderFns,p._compiled=!0),o&&(p.functional=!0),i&&(p._scopeId=i);var l;if(s?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},p._ssrRegister=l):n&&(l=n),l){var u=p.functional,f=u?p.render:p.beforeCreate;u?(p._injectStyles=l,p.render=function(t,e){return l.call(e),f(t,e)}):p.beforeCreate=f?[].concat(f,l):[l]}return{esModule:r,exports:a,options:p}}},function(t,e){t.exports=require("leaflet")},function(t,e){t.exports=require("leaflet-tracksymbol")},function(t,e,o){"use strict";e.a=function(t,e,o){for(var n=0;n<o.length;n++)(function(){var i="l-"+o[n],s=o[n];e.on(s,function(e){t.$emit(i,e)})})()}},function(t,e,o){"use strict";function n(t){return t.charAt(0).toUpperCase()+t.slice(1)}e.a=function(t,e,o,i){for(var s=Object.keys(o),r=0;r<s.length;r++)(function(){var i=s[r],a="set"+n(i),c=o[i].type===Object||o[i].type===Array||Array.isArray(o[i].type);o[i].custom?t.$watch(i,function(e,o){t[a](e,o)},{deep:c}):"setOptions"==a?t.$watch(i,function(t,o){L.setOptions(e,t)},{deep:c}):t.$watch(i,function(t,o){e[a](t)},{deep:c})})()}},function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._t("default")],2)},i=[],s={render:n,staticRenderFns:i};e.a=s}]);