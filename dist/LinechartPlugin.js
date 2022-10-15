import{ref as t,computed as n,openBlock as e,createElementBlock as r,normalizeStyle as i,unref as a,createCommentVNode as o,createElementVNode as u,Fragment as s,renderList as l,toDisplayString as h}from"vue";function c(t,n){return null==t||null==n?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function f(t,n){return null==t||null==n?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function g(t){let n,e,r;function i(t,r,i=0,a=t.length){if(i<a){if(0!==n(r,r))return a;do{const n=i+a>>>1;e(t[n],r)<0?i=n+1:a=n}while(i<a)}return i}return 2!==t.length?(n=c,e=(n,e)=>c(t(n),e),r=(n,e)=>t(n)-e):(n=t===c||t===f?t:d,e=t,r=t),{left:i,center:function(t,n,e=0,a=t.length){const o=i(t,n,e,a-1);return o>e&&r(t[o-1],n)>-r(t[o],n)?o-1:o},right:function(t,r,i=0,a=t.length){if(i<a){if(0!==n(r,r))return a;do{const n=i+a>>>1;e(t[n],r)<=0?i=n+1:a=n}while(i<a)}return i}}}function d(){return 0}const p=g(c).right;g((function(t){return null===t?NaN:+t})).center;var m=p;class y extends Map{constructor(t,n=b){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),null!=t)for(const[n,e]of t)this.set(n,e)}get(t){return super.get(v(this,t))}has(t){return super.has(v(this,t))}set(t,n){return super.set(function({_intern:t,_key:n},e){const r=n(e);return t.has(r)?t.get(r):(t.set(r,e),e)}(this,t),n)}delete(t){return super.delete(function({_intern:t,_key:n},e){const r=n(e);t.has(r)&&(e=t.get(r),t.delete(r));return e}(this,t))}}function v({_intern:t,_key:n},e){const r=n(e);return t.has(r)?t.get(r):e}function b(t){return null!==t&&"object"==typeof t?t.valueOf():t}var w=Math.sqrt(50),x=Math.sqrt(10),M=Math.sqrt(2);function k(t,n,e){var r=(n-t)/Math.max(0,e),i=Math.floor(Math.log(r)/Math.LN10),a=r/Math.pow(10,i);return i>=0?(a>=w?10:a>=x?5:a>=M?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(a>=w?10:a>=x?5:a>=M?2:1)}function _(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e;for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),a=new Array(i);++r<i;)a[r]=t+r*e;return a}function N(t,n){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(n).domain(t)}return this}const $=Symbol("implicit");function A(){var t=new y,n=[],e=[],r=$;function i(i){let a=t.get(i);if(void 0===a){if(r!==$)return r;t.set(i,a=n.push(i)-1)}return e[a%e.length]}return i.domain=function(e){if(!arguments.length)return n.slice();n=[],t=new y;for(const r of e)t.has(r)||t.set(r,n.push(r)-1);return i},i.range=function(t){return arguments.length?(e=Array.from(t),i):e.slice()},i.unknown=function(t){return arguments.length?(r=t,i):r},i.copy=function(){return A(n,e).unknown(r)},N.apply(i,arguments),i}function S(){var t,n,e=A().unknown(void 0),r=e.domain,i=e.range,a=0,o=1,u=!1,s=0,l=0,h=.5;function c(){var e=r().length,c=o<a,f=c?o:a,g=c?a:o;t=(g-f)/Math.max(1,e-s+2*l),u&&(t=Math.floor(t)),f+=(g-f-t*(e-s))*h,n=t*(1-s),u&&(f=Math.round(f),n=Math.round(n));var d=_(e).map((function(n){return f+t*n}));return i(c?d.reverse():d)}return delete e.unknown,e.domain=function(t){return arguments.length?(r(t),c()):r()},e.range=function(t){return arguments.length?([a,o]=t,a=+a,o=+o,c()):[a,o]},e.rangeRound=function(t){return[a,o]=t,a=+a,o=+o,u=!0,c()},e.bandwidth=function(){return n},e.step=function(){return t},e.round=function(t){return arguments.length?(u=!!t,c()):u},e.padding=function(t){return arguments.length?(s=Math.min(1,l=+t),c()):s},e.paddingInner=function(t){return arguments.length?(s=Math.min(1,t),c()):s},e.paddingOuter=function(t){return arguments.length?(l=+t,c()):l},e.align=function(t){return arguments.length?(h=Math.max(0,Math.min(1,t)),c()):h},e.copy=function(){return S(r(),[a,o]).round(u).paddingInner(s).paddingOuter(l).align(h)},N.apply(c(),arguments)}function E(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function j(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function q(){}var R=1/.7,P="\\s*([+-]?\\d+)\\s*",L="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",O="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",T=/^#([0-9a-f]{3,8})$/,z=new RegExp(`^rgb\\(${P},${P},${P}\\)$`),H=new RegExp(`^rgb\\(${O},${O},${O}\\)$`),C=new RegExp(`^rgba\\(${P},${P},${P},${L}\\)$`),I=new RegExp(`^rgba\\(${O},${O},${O},${L}\\)$`),F=new RegExp(`^hsl\\(${L},${O},${O}\\)$`),V=new RegExp(`^hsla\\(${L},${O},${O},${L}\\)$`),B={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function D(){return this.rgb().formatHex()}function Z(){return this.rgb().formatRgb()}function X(t){var n,e;return t=(t+"").trim().toLowerCase(),(n=T.exec(t))?(e=n[1].length,n=parseInt(n[1],16),6===e?G(n):3===e?new J(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):8===e?Q(n>>24&255,n>>16&255,n>>8&255,(255&n)/255):4===e?Q(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|240&n,((15&n)<<4|15&n)/255):null):(n=z.exec(t))?new J(n[1],n[2],n[3],1):(n=H.exec(t))?new J(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=C.exec(t))?Q(n[1],n[2],n[3],n[4]):(n=I.exec(t))?Q(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=F.exec(t))?rt(n[1],n[2]/100,n[3]/100,1):(n=V.exec(t))?rt(n[1],n[2]/100,n[3]/100,n[4]):B.hasOwnProperty(t)?G(B[t]):"transparent"===t?new J(NaN,NaN,NaN,0):null}function G(t){return new J(t>>16&255,t>>8&255,255&t,1)}function Q(t,n,e,r){return r<=0&&(t=n=e=NaN),new J(t,n,e,r)}function U(t){return t instanceof q||(t=X(t)),t?new J((t=t.rgb()).r,t.g,t.b,t.opacity):new J}function Y(t,n,e,r){return 1===arguments.length?U(t):new J(t,n,e,null==r?1:r)}function J(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function K(){return`#${et(this.r)}${et(this.g)}${et(this.b)}`}function W(){const t=tt(this.opacity);return`${1===t?"rgb(":"rgba("}${nt(this.r)}, ${nt(this.g)}, ${nt(this.b)}${1===t?")":`, ${t})`}`}function tt(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function nt(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function et(t){return((t=nt(t))<16?"0":"")+t.toString(16)}function rt(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new at(t,n,e,r)}function it(t){if(t instanceof at)return new at(t.h,t.s,t.l,t.opacity);if(t instanceof q||(t=X(t)),!t)return new at;if(t instanceof at)return t;var n=(t=t.rgb()).r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),a=Math.max(n,e,r),o=NaN,u=a-i,s=(a+i)/2;return u?(o=n===a?(e-r)/u+6*(e<r):e===a?(r-n)/u+2:(n-e)/u+4,u/=s<.5?a+i:2-a-i,o*=60):u=s>0&&s<1?0:o,new at(o,u,s,t.opacity)}function at(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function ot(t){return(t=(t||0)%360)<0?t+360:t}function ut(t){return Math.max(0,Math.min(1,t||0))}function st(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}E(q,X,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:D,formatHex:D,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return it(this).formatHsl()},formatRgb:Z,toString:Z}),E(J,Y,j(q,{brighter(t){return t=null==t?R:Math.pow(R,t),new J(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=null==t?.7:Math.pow(.7,t),new J(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new J(nt(this.r),nt(this.g),nt(this.b),tt(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:K,formatHex:K,formatHex8:function(){return`#${et(this.r)}${et(this.g)}${et(this.b)}${et(255*(isNaN(this.opacity)?1:this.opacity))}`},formatRgb:W,toString:W})),E(at,(function(t,n,e,r){return 1===arguments.length?it(t):new at(t,n,e,null==r?1:r)}),j(q,{brighter(t){return t=null==t?R:Math.pow(R,t),new at(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=null==t?.7:Math.pow(.7,t),new at(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new J(st(t>=240?t-240:t+120,i,r),st(t,i,r),st(t<120?t+240:t-120,i,r),this.opacity)},clamp(){return new at(ot(this.h),ut(this.s),ut(this.l),tt(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=tt(this.opacity);return`${1===t?"hsl(":"hsla("}${ot(this.h)}, ${100*ut(this.s)}%, ${100*ut(this.l)}%${1===t?")":`, ${t})`}`}}));var lt=t=>()=>t;function ht(t){return 1==(t=+t)?ct:function(n,e){return e-n?function(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}(n,e,t):lt(isNaN(n)?e:n)}}function ct(t,n){var e=n-t;return e?function(t,n){return function(e){return t+e*n}}(t,e):lt(isNaN(t)?n:t)}var ft=function t(n){var e=ht(n);function r(t,n){var r=e((t=Y(t)).r,(n=Y(n)).r),i=e(t.g,n.g),a=e(t.b,n.b),o=ct(t.opacity,n.opacity);return function(n){return t.r=r(n),t.g=i(n),t.b=a(n),t.opacity=o(n),t+""}}return r.gamma=t,r}(1);function gt(t,n){n||(n=[]);var e,r=t?Math.min(n.length,t.length):0,i=n.slice();return function(a){for(e=0;e<r;++e)i[e]=t[e]*(1-a)+n[e]*a;return i}}function dt(t,n){var e,r=n?n.length:0,i=t?Math.min(r,t.length):0,a=new Array(i),o=new Array(r);for(e=0;e<i;++e)a[e]=xt(t[e],n[e]);for(;e<r;++e)o[e]=n[e];return function(t){for(e=0;e<i;++e)o[e]=a[e](t);return o}}function pt(t,n){var e=new Date;return t=+t,n=+n,function(r){return e.setTime(t*(1-r)+n*r),e}}function mt(t,n){return t=+t,n=+n,function(e){return t*(1-e)+n*e}}function yt(t,n){var e,r={},i={};for(e in null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={}),n)e in t?r[e]=xt(t[e],n[e]):i[e]=n[e];return function(t){for(e in r)i[e]=r[e](t);return i}}var vt=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,bt=new RegExp(vt.source,"g");function wt(t,n){var e,r,i,a=vt.lastIndex=bt.lastIndex=0,o=-1,u=[],s=[];for(t+="",n+="";(e=vt.exec(t))&&(r=bt.exec(n));)(i=r.index)>a&&(i=n.slice(a,i),u[o]?u[o]+=i:u[++o]=i),(e=e[0])===(r=r[0])?u[o]?u[o]+=r:u[++o]=r:(u[++o]=null,s.push({i:o,x:mt(e,r)})),a=bt.lastIndex;return a<n.length&&(i=n.slice(a),u[o]?u[o]+=i:u[++o]=i),u.length<2?s[0]?function(t){return function(n){return t(n)+""}}(s[0].x):function(t){return function(){return t}}(n):(n=s.length,function(t){for(var e,r=0;r<n;++r)u[(e=s[r]).i]=e.x(t);return u.join("")})}function xt(t,n){var e,r=typeof n;return null==n||"boolean"===r?lt(n):("number"===r?mt:"string"===r?(e=X(n))?(n=e,ft):wt:n instanceof X?ft:n instanceof Date?pt:function(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}(n)?gt:Array.isArray(n)?dt:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?yt:mt)(t,n)}function Mt(t,n){return t=+t,n=+n,function(e){return Math.round(t*(1-e)+n*e)}}function kt(t){return+t}var _t=[0,1];function Nt(t){return t}function $t(t,n){return(n-=t=+t)?function(e){return(e-t)/n}:function(t){return function(){return t}}(isNaN(n)?NaN:.5)}function At(t,n,e){var r=t[0],i=t[1],a=n[0],o=n[1];return i<r?(r=$t(i,r),a=e(o,a)):(r=$t(r,i),a=e(a,o)),function(t){return a(r(t))}}function St(t,n,e){var r=Math.min(t.length,n.length)-1,i=new Array(r),a=new Array(r),o=-1;for(t[r]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++o<r;)i[o]=$t(t[o],t[o+1]),a[o]=e(n[o],n[o+1]);return function(n){var e=m(t,n,1,r)-1;return a[e](i[e](n))}}function Et(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function jt(){var t,n,e,r,i,a,o=_t,u=_t,s=xt,l=Nt;function h(){var t,n,e,s=Math.min(o.length,u.length);return l!==Nt&&(t=o[0],n=o[s-1],t>n&&(e=t,t=n,n=e),l=function(e){return Math.max(t,Math.min(n,e))}),r=s>2?St:At,i=a=null,c}function c(n){return null==n||isNaN(n=+n)?e:(i||(i=r(o.map(t),u,s)))(t(l(n)))}return c.invert=function(e){return l(n((a||(a=r(u,o.map(t),mt)))(e)))},c.domain=function(t){return arguments.length?(o=Array.from(t,kt),h()):o.slice()},c.range=function(t){return arguments.length?(u=Array.from(t),h()):u.slice()},c.rangeRound=function(t){return u=Array.from(t),s=Mt,h()},c.clamp=function(t){return arguments.length?(l=!!t||Nt,h()):l!==Nt},c.interpolate=function(t){return arguments.length?(s=t,h()):s},c.unknown=function(t){return arguments.length?(e=t,c):e},function(e,r){return t=e,n=r,h()}}function qt(){return jt()(Nt,Nt)}function Rt(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var e,r=t.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]}function Pt(t){return(t=Rt(Math.abs(t)))?t[1]:NaN}var Lt,Ot=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Tt(t){if(!(n=Ot.exec(t)))throw new Error("invalid format: "+t);var n;return new zt({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}function zt(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function Ht(t,n){var e=Rt(t,n);if(!e)return t+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}Tt.prototype=zt.prototype,zt.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var Ct={"%":(t,n)=>(100*t).toFixed(n),b:t=>Math.round(t).toString(2),c:t=>t+"",d:function(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)},e:(t,n)=>t.toExponential(n),f:(t,n)=>t.toFixed(n),g:(t,n)=>t.toPrecision(n),o:t=>Math.round(t).toString(8),p:(t,n)=>Ht(100*t,n),r:Ht,s:function(t,n){var e=Rt(t,n);if(!e)return t+"";var r=e[0],i=e[1],a=i-(Lt=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,o=r.length;return a===o?r:a>o?r+new Array(a-o+1).join("0"):a>0?r.slice(0,a)+"."+r.slice(a):"0."+new Array(1-a).join("0")+Rt(t,Math.max(0,n+a-1))[0]},X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function It(t){return t}var Ft,Vt,Bt,Dt=Array.prototype.map,Zt=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Xt(t){var n,e,r=void 0===t.grouping||void 0===t.thousands?It:(n=Dt.call(t.grouping,Number),e=t.thousands+"",function(t,r){for(var i=t.length,a=[],o=0,u=n[0],s=0;i>0&&u>0&&(s+u+1>r&&(u=Math.max(1,r-s)),a.push(t.substring(i-=u,i+u)),!((s+=u+1)>r));)u=n[o=(o+1)%n.length];return a.reverse().join(e)}),i=void 0===t.currency?"":t.currency[0]+"",a=void 0===t.currency?"":t.currency[1]+"",o=void 0===t.decimal?".":t.decimal+"",u=void 0===t.numerals?It:function(t){return function(n){return n.replace(/[0-9]/g,(function(n){return t[+n]}))}}(Dt.call(t.numerals,String)),s=void 0===t.percent?"%":t.percent+"",l=void 0===t.minus?"−":t.minus+"",h=void 0===t.nan?"NaN":t.nan+"";function c(t){var n=(t=Tt(t)).fill,e=t.align,c=t.sign,f=t.symbol,g=t.zero,d=t.width,p=t.comma,m=t.precision,y=t.trim,v=t.type;"n"===v?(p=!0,v="g"):Ct[v]||(void 0===m&&(m=12),y=!0,v="g"),(g||"0"===n&&"="===e)&&(g=!0,n="0",e="=");var b="$"===f?i:"#"===f&&/[boxX]/.test(v)?"0"+v.toLowerCase():"",w="$"===f?a:/[%p]/.test(v)?s:"",x=Ct[v],M=/[defgprs%]/.test(v);function k(t){var i,a,s,f=b,k=w;if("c"===v)k=x(t)+k,t="";else{var _=(t=+t)<0||1/t<0;if(t=isNaN(t)?h:x(Math.abs(t),m),y&&(t=function(t){t:for(var n,e=t.length,r=1,i=-1;r<e;++r)switch(t[r]){case".":i=n=r;break;case"0":0===i&&(i=r),n=r;break;default:if(!+t[r])break t;i>0&&(i=0)}return i>0?t.slice(0,i)+t.slice(n+1):t}(t)),_&&0==+t&&"+"!==c&&(_=!1),f=(_?"("===c?c:l:"-"===c||"("===c?"":c)+f,k=("s"===v?Zt[8+Lt/3]:"")+k+(_&&"("===c?")":""),M)for(i=-1,a=t.length;++i<a;)if(48>(s=t.charCodeAt(i))||s>57){k=(46===s?o+t.slice(i+1):t.slice(i))+k,t=t.slice(0,i);break}}p&&!g&&(t=r(t,1/0));var N=f.length+t.length+k.length,$=N<d?new Array(d-N+1).join(n):"";switch(p&&g&&(t=r($+t,$.length?d-k.length:1/0),$=""),e){case"<":t=f+t+k+$;break;case"=":t=f+$+t+k;break;case"^":t=$.slice(0,N=$.length>>1)+f+t+k+$.slice(N);break;default:t=$+f+t+k}return u(t)}return m=void 0===m?6:/[gprs]/.test(v)?Math.max(1,Math.min(21,m)):Math.max(0,Math.min(20,m)),k.toString=function(){return t+""},k}return{format:c,formatPrefix:function(t,n){var e=c(((t=Tt(t)).type="f",t)),r=3*Math.max(-8,Math.min(8,Math.floor(Pt(n)/3))),i=Math.pow(10,-r),a=Zt[8+r/3];return function(t){return e(i*t)+a}}}}function Gt(t,n,e,r){var i,a=function(t,n,e){var r=Math.abs(n-t)/Math.max(0,e),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),a=r/i;return a>=w?i*=10:a>=x?i*=5:a>=M&&(i*=2),n<t?-i:i}(t,n,e);switch((r=Tt(null==r?",f":r)).type){case"s":var o=Math.max(Math.abs(t),Math.abs(n));return null!=r.precision||isNaN(i=function(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Pt(n)/3)))-Pt(Math.abs(t)))}(a,o))||(r.precision=i),Bt(r,o);case"":case"e":case"g":case"p":case"r":null!=r.precision||isNaN(i=function(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,Pt(n)-Pt(t))+1}(a,Math.max(Math.abs(t),Math.abs(n))))||(r.precision=i-("e"===r.type));break;case"f":case"%":null!=r.precision||isNaN(i=function(t){return Math.max(0,-Pt(Math.abs(t)))}(a))||(r.precision=i-2*("%"===r.type))}return Vt(r)}function Qt(t){var n=t.domain;return t.ticks=function(t){var e=n();return function(t,n,e){var r,i,a,o,u=-1;if(e=+e,(t=+t)==(n=+n)&&e>0)return[t];if((r=n<t)&&(i=t,t=n,n=i),0===(o=k(t,n,e))||!isFinite(o))return[];if(o>0){let e=Math.round(t/o),r=Math.round(n/o);for(e*o<t&&++e,r*o>n&&--r,a=new Array(i=r-e+1);++u<i;)a[u]=(e+u)*o}else{o=-o;let e=Math.round(t*o),r=Math.round(n*o);for(e/o<t&&++e,r/o>n&&--r,a=new Array(i=r-e+1);++u<i;)a[u]=(e+u)/o}return r&&a.reverse(),a}(e[0],e[e.length-1],null==t?10:t)},t.tickFormat=function(t,e){var r=n();return Gt(r[0],r[r.length-1],null==t?10:t,e)},t.nice=function(e){null==e&&(e=10);var r,i,a=n(),o=0,u=a.length-1,s=a[o],l=a[u],h=10;for(l<s&&(i=s,s=l,l=i,i=o,o=u,u=i);h-- >0;){if((i=k(s,l,e))===r)return a[o]=s,a[u]=l,n(a);if(i>0)s=Math.floor(s/i)*i,l=Math.ceil(l/i)*i;else{if(!(i<0))break;s=Math.ceil(s*i)/i,l=Math.floor(l*i)/i}r=i}return t},t}function Ut(){var t=qt();return t.copy=function(){return Et(t,Ut())},N.apply(t,arguments),Qt(t)}Ft=Xt({thousands:",",grouping:[3],currency:["$",""]}),Vt=Ft.format,Bt=Ft.formatPrefix;const Yt=Math.PI,Jt=2*Yt,Kt=Jt-1e-6;function Wt(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function tn(){return new Wt}function nn(t){return function(){return t}}function en(t){this._context=t}function rn(t){return new en(t)}function an(t){return t[0]}function on(t){return t[1]}function un(t,n){var e=nn(!0),r=null,i=rn,a=null;function o(o){var u,s,l,h=(o=function(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}(o)).length,c=!1;for(null==r&&(a=i(l=tn())),u=0;u<=h;++u)!(u<h&&e(s=o[u],u,o))===c&&((c=!c)?a.lineStart():a.lineEnd()),c&&a.point(+t(s,u,o),+n(s,u,o));if(l)return a=null,l+""||null}return t="function"==typeof t?t:void 0===t?an:nn(t),n="function"==typeof n?n:void 0===n?on:nn(n),o.x=function(n){return arguments.length?(t="function"==typeof n?n:nn(+n),o):t},o.y=function(t){return arguments.length?(n="function"==typeof t?t:nn(+t),o):n},o.defined=function(t){return arguments.length?(e="function"==typeof t?t:nn(!!t),o):e},o.curve=function(t){return arguments.length?(i=t,null!=r&&(a=i(r)),o):i},o.context=function(t){return arguments.length?(null==t?r=a=null:a=i(r=t),o):r},o}Wt.prototype=tn.prototype={constructor:Wt,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,r){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(t,n,e,r,i,a){this._+="C"+ +t+","+ +n+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+a)},arcTo:function(t,n,e,r,i){t=+t,n=+n,e=+e,r=+r,i=+i;var a=this._x1,o=this._y1,u=e-t,s=r-n,l=a-t,h=o-n,c=l*l+h*h;if(i<0)throw new Error("negative radius: "+i);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(c>1e-6)if(Math.abs(h*u-s*l)>1e-6&&i){var f=e-a,g=r-o,d=u*u+s*s,p=f*f+g*g,m=Math.sqrt(d),y=Math.sqrt(c),v=i*Math.tan((Yt-Math.acos((d+c-p)/(2*m*y)))/2),b=v/y,w=v/m;Math.abs(b-1)>1e-6&&(this._+="L"+(t+b*l)+","+(n+b*h)),this._+="A"+i+","+i+",0,0,"+ +(h*f>l*g)+","+(this._x1=t+w*u)+","+(this._y1=n+w*s)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,e,r,i,a){t=+t,n=+n,a=!!a;var o=(e=+e)*Math.cos(r),u=e*Math.sin(r),s=t+o,l=n+u,h=1^a,c=a?r-i:i-r;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+s+","+l:(Math.abs(this._x1-s)>1e-6||Math.abs(this._y1-l)>1e-6)&&(this._+="L"+s+","+l),e&&(c<0&&(c=c%Jt+Jt),c>Kt?this._+="A"+e+","+e+",0,1,"+h+","+(t-o)+","+(n-u)+"A"+e+","+e+",0,1,"+h+","+(this._x1=s)+","+(this._y1=l):c>1e-6&&(this._+="A"+e+","+e+",0,"+ +(c>=Yt)+","+h+","+(this._x1=t+e*Math.cos(i))+","+(this._y1=n+e*Math.sin(i))))},rect:function(t,n,e,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}},en.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}};const sn={class:"gf_linechart_container"},ln=u("h1",null,null,-1),hn=["viewBox"],cn=["transform"],fn=["transform"],gn=["x2"],dn={y:"0",x:"-9","text-anchor":"end","alignment-baseline":"middle"},pn=["d"],mn=["transform"],yn=["transform"],vn={x:"0",y:"5","text-anchor":"middle","alignment-baseline":"hanging"},bn=["x1","x2"];var wn={__name:"LinechartView",props:{width:Number,height:Number,background:String,data:Array,margin:Object,color:String,barPadding:Number},setup(c){const f=c,g=t({top:10,right:10,bottom:50,left:50}),d=t(400),p=t(400);t(),t(),t();const m=t(.1),y=t("black"),v=t("white");t();const b=t(0),w=n((()=>f.width||p.value)),x=n((()=>f.height||d.value)),M=n((()=>f.background||v.value)),k=n((()=>f.margin||g.value));n((()=>f.color||y.value));const _=n((()=>f.barPadding||m.value)),N=n((()=>S().domain(f.data.map((t=>t.key))).range([k.value.left,w.value-k.value.right]).padding(_.value))),$=n((()=>{let t=f.data.map((t=>t.value)),n=[b.value,Math.max(...t)],e=[x.value-k.value.bottom,k.value.top];return Ut().domain(n).rangeRound(e)})),A=n((()=>un().x((t=>N.value(t.key)+N.value.bandwidth()/2)).y((t=>$.value(t.value))))),E=Vt(",");return(t,n)=>(e(),r("div",sn,[ln,(e(),r("svg",{ref:"svg",xmlns:"http://www.w3.org/2000/svg",style:i({background:a(M)}),version:"1.2",baseProfile:"tiny",width:"100%",height:"100%",viewBox:`0 0 ${a(w)} ${a(x)}`,"stroke-linecap":"round","stroke-linejoin":"round",class:"gf_linechart_svg"},[o(" yScaleAxis "),u("g",{transform:`translate(${a(k).left},0)`},[o(" ticks "),(e(!0),r(s,null,l(a($).ticks(),((t,n)=>(e(),r("g",{transform:`translate(0, ${a($)(t)})`,key:`y-tick-${n}`},[u("line",{x1:0,y1:"0",x2:a(w)-a(k).left-a(k).right,y2:"0",stroke:"grey","fill-opacity":.5},null,8,gn),u("text",dn,h(a(E)(t)),1)],8,fn)))),128)),o(" Axis "),o(' <line\n          :x1="0"\n          :y1="margin.top"\n          :x2="0"\n          :y2="height - margin.bottom"\n          stroke="black" /> ')],8,cn),o(' <rect\n        v-for="(d, i) of data"\n        :key="`bar-${i}`"\n        :width="xScale.bandwidth()"\n        :height="height - yScale(d.value) - margin.bottom"\n        :x="xScale(d.key)"\n        :y="yScale(d.value)"\n        class="gf_barchart_item"\n        :fill="color"></rect> '),(e(!0),r(s,null,l(c.data,((t,n)=>(e(),r("path",{key:`bar-${n}`,fill:"none",stroke:"red","stroke-width":1,"stroke-linejoin":"round","stroke-linecap":"round",d:a(A)(t)},null,8,pn)))),128)),o(" xScaleAxis "),u("g",{transform:`translate(0, ${a(x)-a(k).bottom})`},[o(" ticks "),(e(!0),r(s,null,l(a(N).domain(),((t,n)=>(e(),r("g",{transform:`translate(${a(N)(t)+a(N).bandwidth()/2}, 0)`,key:`x-tick-${n}`},[o(' <line x1="0" y1="0" x2="0" :y2="3" stroke="black" /> '),u("text",vn,h(t),1)],8,yn)))),128)),o(" Axis "),u("line",{x1:a(k).left,y1:"0",x2:a(w)-a(k).right,y2:"0",stroke:"black","stroke-width":"2"},null,8,bn)],8,mn)],12,hn))]))},__file:"src/LinechartView.vue"},xn={install:(t,n)=>{t.component("gf-linechart",wn)}};export{xn as default};
