(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{343:function(t,n,e){},345:function(t,n,e){"use strict";e.d(n,"c",(function(){return r})),e.d(n,"d",(function(){return u})),e.d(n,"e",(function(){return l})),e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return f}));e(36),e(192),e(82);var i=/#.*$/,o=/\.(md|html)$/,c=/\/$/,s=/^(https?:|mailto:|tel:)/;function r(t){return s.test(t)}function u(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function a(t){if(r(t))return t;var n=t.match(i),e=n?n[0]:"",s=function(t){return decodeURI(t).replace(i,"").replace(o,"")}(t);return c.test(s)?t:s+".html"+e}function f(t,n,e){if(!t)return e;for(var i,o=n;(o=o.$parent)&&!i;)i=o.$refs[t];return i&&i.$el&&(i=i.$el),i||e}},349:function(t,n,e){"use strict";var i=e(343);e.n(i).a},351:function(t,n,e){"use strict";e.r(n);var i=e(345),o={props:["stick","tag"],data:function(){return{needFloat:!1,stickBottom:0}},watch:{stick:function(){this.unStick(),this.stickHandle()}},mounted:function(){this.stickHandle()},beforeDestroy:function(){this.unStick()},methods:{stickHandle:function(){var t=this;if(this.stick){var n=Object(i.b)(this.stick,this);n&&(this._stickerScroll=function(){var e=t.$el.getBoundingClientRect(),i=document.body.scrollTop+document.documentElement.scrollTop;t.needFloat=document.body.offsetHeight-i-e.height<n.offsetHeight,t.stickBottom=n.offsetHeight},this._stickerScroll(),window.addEventListener("scroll",this._stickerScroll))}},unStick:function(){this.needFloat=!1,this.stickBottom=0,window.removeEventListener("scroll",this._stickerScroll)}}},c=(e(349),e(8)),s=Object(c.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)(this.tag||"div",{tag:"component",staticClass:"sticker",class:this.needFloat?["stick-float"]:void 0,style:this.needFloat?{bottom:this.stickBottom+"px"}:void 0},[this._t("default")],2)}),[],!1,null,null,null);n.default=s.exports}}]);