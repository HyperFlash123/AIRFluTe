import{S as be,i as pe,s as ye,v as R,b as d,f as M,g as S,w as Y,n as N,e as T,t as H,Y as B,ab as zt,ae as Ct,h as U,a as X,B as J,A as te,M as qt,x as Ht,E as yt,aa as It,a3 as xe,c as G,m as V,j as C,k as q,o as Z,O as Bt,X as Ft,P as Ot,Q as Dt,R as Ut,T as Xt,C as xt,D as vt}from"./index.06d85743.js";import{U as Yt}from"./Upload.10acfeba.js";import{M as Gt}from"./ModifyUpload.fd98232b.js";import{B as Vt}from"./Block.324ba9b6.js";import{B as Zt}from"./BlockLabel.23fe9ed2.js";import{g as Qt}from"./color.23aee221.js";import{a as Wt}from"./csv.27f5436c.js";import"./styles.ed3b21b5.js";import"./dsv.7fe76a93.js";function Jt(e){let t,n,r;return{c(){t=R("svg"),n=R("path"),r=R("path"),d(n,"d","M28.828 3.172a4.094 4.094 0 0 0-5.656 0L4.05 22.292A6.954 6.954 0 0 0 2 27.242V30h2.756a6.952 6.952 0 0 0 4.95-2.05L28.828 8.829a3.999 3.999 0 0 0 0-5.657zM10.91 18.26l2.829 2.829l-2.122 2.121l-2.828-2.828zm-2.619 8.276A4.966 4.966 0 0 1 4.756 28H4v-.759a4.967 4.967 0 0 1 1.464-3.535l1.91-1.91l2.829 2.828zM27.415 7.414l-12.261 12.26l-2.829-2.828l12.262-12.26a2.047 2.047 0 0 1 2.828 0a2 2 0 0 1 0 2.828z"),d(n,"fill","currentColor"),d(r,"d","M6.5 15a3.5 3.5 0 0 1-2.475-5.974l3.5-3.5a1.502 1.502 0 0 0 0-2.121a1.537 1.537 0 0 0-2.121 0L3.415 5.394L2 3.98l1.99-1.988a3.585 3.585 0 0 1 4.95 0a3.504 3.504 0 0 1 0 4.949L5.439 10.44a1.502 1.502 0 0 0 0 2.121a1.537 1.537 0 0 0 2.122 0l4.024-4.024L13 9.95l-4.025 4.024A3.475 3.475 0 0 1 6.5 15z"),d(r,"fill","currentColor"),d(t,"width","1em"),d(t,"height","1em"),d(t,"viewBox","0 0 32 32")},m(i,l){M(i,t,l),S(t,n),S(t,r)},p:Y,i:Y,o:Y,d(i){i&&N(t)}}}class wt extends be{constructor(t){super(),pe(this,t,null,Jt,ye,{})}}function Me(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function kt(e){let t=e,n=e,r=e;e.length!==2&&(t=(f,o)=>e(f)-o,n=Me,r=(f,o)=>Me(e(f),o));function i(f,o,u=0,h=f.length){if(u<h){if(n(o,o)!==0)return h;do{const s=u+h>>>1;r(f[s],o)<0?u=s+1:h=s}while(u<h)}return u}function l(f,o,u=0,h=f.length){if(u<h){if(n(o,o)!==0)return h;do{const s=u+h>>>1;r(f[s],o)<=0?u=s+1:h=s}while(u<h)}return u}function a(f,o,u=0,h=f.length){const s=i(f,o,u,h-1);return s>u&&t(f[s-1],o)>-t(f[s],o)?s-1:s}return{left:i,center:a,right:l}}function Kt(e){return e===null?NaN:+e}const $t=kt(Me),en=$t.right;kt(Kt).center;var tn=en,Ne=Math.sqrt(50),Ae=Math.sqrt(10),Ee=Math.sqrt(2);function nn(e,t,n){var r,i=-1,l,a,f;if(t=+t,e=+e,n=+n,e===t&&n>0)return[e];if((r=t<e)&&(l=e,e=t,t=l),(f=Mt(e,t,n))===0||!isFinite(f))return[];if(f>0){let o=Math.round(e/f),u=Math.round(t/f);for(o*f<e&&++o,u*f>t&&--u,a=new Array(l=u-o+1);++i<l;)a[i]=(o+i)*f}else{f=-f;let o=Math.round(e*f),u=Math.round(t*f);for(o/f<e&&++o,u/f>t&&--u,a=new Array(l=u-o+1);++i<l;)a[i]=(o+i)/f}return r&&a.reverse(),a}function Mt(e,t,n){var r=(t-e)/Math.max(0,n),i=Math.floor(Math.log(r)/Math.LN10),l=r/Math.pow(10,i);return i>=0?(l>=Ne?10:l>=Ae?5:l>=Ee?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(l>=Ne?10:l>=Ae?5:l>=Ee?2:1)}function rn(e,t,n){var r=Math.abs(t-e)/Math.max(0,n),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),l=r/i;return l>=Ne?i*=10:l>=Ae?i*=5:l>=Ee&&(i*=2),t<e?-i:i}function ln(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function qe(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function Nt(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function fe(){}var ie=.7,de=1/ie,ne="\\s*([+-]?\\d+)\\s*",le="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",O="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",an=/^#([0-9a-f]{3,8})$/,fn=new RegExp("^rgb\\("+[ne,ne,ne]+"\\)$"),on=new RegExp("^rgb\\("+[O,O,O]+"\\)$"),sn=new RegExp("^rgba\\("+[ne,ne,ne,le]+"\\)$"),un=new RegExp("^rgba\\("+[O,O,O,le]+"\\)$"),cn=new RegExp("^hsl\\("+[le,O,O]+"\\)$"),hn=new RegExp("^hsla\\("+[le,O,O,le]+"\\)$"),Oe={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};qe(fe,ae,{copy:function(e){return Object.assign(new this.constructor,this,e)},displayable:function(){return this.rgb().displayable()},hex:De,formatHex:De,formatHsl:dn,formatRgb:Ue,toString:Ue});function De(){return this.rgb().formatHex()}function dn(){return At(this).formatHsl()}function Ue(){return this.rgb().formatRgb()}function ae(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=an.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?Xe(t):n===3?new P(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?ce(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?ce(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=fn.exec(e))?new P(t[1],t[2],t[3],1):(t=on.exec(e))?new P(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=sn.exec(e))?ce(t[1],t[2],t[3],t[4]):(t=un.exec(e))?ce(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=cn.exec(e))?Ve(t[1],t[2]/100,t[3]/100,1):(t=hn.exec(e))?Ve(t[1],t[2]/100,t[3]/100,t[4]):Oe.hasOwnProperty(e)?Xe(Oe[e]):e==="transparent"?new P(NaN,NaN,NaN,0):null}function Xe(e){return new P(e>>16&255,e>>8&255,e&255,1)}function ce(e,t,n,r){return r<=0&&(e=t=n=NaN),new P(e,t,n,r)}function mn(e){return e instanceof fe||(e=ae(e)),e?(e=e.rgb(),new P(e.r,e.g,e.b,e.opacity)):new P}function Se(e,t,n,r){return arguments.length===1?mn(e):new P(e,t,n,r??1)}function P(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}qe(P,Se,Nt(fe,{brighter:function(e){return e=e==null?de:Math.pow(de,e),new P(this.r*e,this.g*e,this.b*e,this.opacity)},darker:function(e){return e=e==null?ie:Math.pow(ie,e),new P(this.r*e,this.g*e,this.b*e,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Ye,formatHex:Ye,formatRgb:Ge,toString:Ge}));function Ye(){return"#"+ve(this.r)+ve(this.g)+ve(this.b)}function Ge(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(e===1?")":", "+e+")")}function ve(e){return e=Math.max(0,Math.min(255,Math.round(e)||0)),(e<16?"0":"")+e.toString(16)}function Ve(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new F(e,t,n,r)}function At(e){if(e instanceof F)return new F(e.h,e.s,e.l,e.opacity);if(e instanceof fe||(e=ae(e)),!e)return new F;if(e instanceof F)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),l=Math.max(t,n,r),a=NaN,f=l-i,o=(l+i)/2;return f?(t===l?a=(n-r)/f+(n<r)*6:n===l?a=(r-t)/f+2:a=(t-n)/f+4,f/=o<.5?l+i:2-l-i,a*=60):f=o>0&&o<1?0:a,new F(a,f,o,e.opacity)}function _n(e,t,n,r){return arguments.length===1?At(e):new F(e,t,n,r??1)}function F(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}qe(F,_n,Nt(fe,{brighter:function(e){return e=e==null?de:Math.pow(de,e),new F(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?ie:Math.pow(ie,e),new F(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new P(we(e>=240?e-240:e+120,i,r),we(e,i,r),we(e<120?e+240:e-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"hsl(":"hsla(")+(this.h||0)+", "+(this.s||0)*100+"%, "+(this.l||0)*100+"%"+(e===1?")":", "+e+")")}}));function we(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}var He=e=>()=>e;function gn(e,t){return function(n){return e+n*t}}function bn(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function pn(e){return(e=+e)==1?Et:function(t,n){return n-t?bn(t,n,e):He(isNaN(t)?n:t)}}function Et(e,t){var n=t-e;return n?gn(e,n):He(isNaN(e)?t:e)}var Ze=function e(t){var n=pn(t);function r(i,l){var a=n((i=Se(i)).r,(l=Se(l)).r),f=n(i.g,l.g),o=n(i.b,l.b),u=Et(i.opacity,l.opacity);return function(h){return i.r=a(h),i.g=f(h),i.b=o(h),i.opacity=u(h),i+""}}return r.gamma=e,r}(1);function yn(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,r=t.slice(),i;return function(l){for(i=0;i<n;++i)r[i]=e[i]*(1-l)+t[i]*l;return r}}function xn(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function vn(e,t){var n=t?t.length:0,r=e?Math.min(n,e.length):0,i=new Array(r),l=new Array(n),a;for(a=0;a<r;++a)i[a]=Ie(e[a],t[a]);for(;a<n;++a)l[a]=t[a];return function(f){for(a=0;a<r;++a)l[a]=i[a](f);return l}}function wn(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function me(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function kn(e,t){var n={},r={},i;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(i in t)i in e?n[i]=Ie(e[i],t[i]):r[i]=t[i];return function(l){for(i in n)r[i]=n[i](l);return r}}var je=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ke=new RegExp(je.source,"g");function Mn(e){return function(){return e}}function Nn(e){return function(t){return e(t)+""}}function An(e,t){var n=je.lastIndex=ke.lastIndex=0,r,i,l,a=-1,f=[],o=[];for(e=e+"",t=t+"";(r=je.exec(e))&&(i=ke.exec(t));)(l=i.index)>n&&(l=t.slice(n,l),f[a]?f[a]+=l:f[++a]=l),(r=r[0])===(i=i[0])?f[a]?f[a]+=i:f[++a]=i:(f[++a]=null,o.push({i:a,x:me(r,i)})),n=ke.lastIndex;return n<t.length&&(l=t.slice(n),f[a]?f[a]+=l:f[++a]=l),f.length<2?o[0]?Nn(o[0].x):Mn(t):(t=o.length,function(u){for(var h=0,s;h<t;++h)f[(s=o[h]).i]=s.x(u);return f.join("")})}function Ie(e,t){var n=typeof t,r;return t==null||n==="boolean"?He(t):(n==="number"?me:n==="string"?(r=ae(t))?(t=r,Ze):An:t instanceof ae?Ze:t instanceof Date?wn:xn(t)?yn:Array.isArray(t)?vn:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?kn:me)(e,t)}function En(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}function Sn(e){return function(){return e}}function jn(e){return+e}var Qe=[0,1];function ee(e){return e}function Le(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:Sn(isNaN(t)?NaN:.5)}function Ln(e,t){var n;return e>t&&(n=e,e=t,t=n),function(r){return Math.max(e,Math.min(t,r))}}function Rn(e,t,n){var r=e[0],i=e[1],l=t[0],a=t[1];return i<r?(r=Le(i,r),l=n(a,l)):(r=Le(r,i),l=n(l,a)),function(f){return l(r(f))}}function Pn(e,t,n){var r=Math.min(e.length,t.length)-1,i=new Array(r),l=new Array(r),a=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++a<r;)i[a]=Le(e[a],e[a+1]),l[a]=n(t[a],t[a+1]);return function(f){var o=tn(e,f,1,r)-1;return l[o](i[o](f))}}function Tn(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function zn(){var e=Qe,t=Qe,n=Ie,r,i,l,a=ee,f,o,u;function h(){var c=Math.min(e.length,t.length);return a!==ee&&(a=Ln(e[0],e[c-1])),f=c>2?Pn:Rn,o=u=null,s}function s(c){return c==null||isNaN(c=+c)?l:(o||(o=f(e.map(r),t,n)))(r(a(c)))}return s.invert=function(c){return a(i((u||(u=f(t,e.map(r),me)))(c)))},s.domain=function(c){return arguments.length?(e=Array.from(c,jn),h()):e.slice()},s.range=function(c){return arguments.length?(t=Array.from(c),h()):t.slice()},s.rangeRound=function(c){return t=Array.from(c),n=En,h()},s.clamp=function(c){return arguments.length?(a=c?!0:ee,h()):a!==ee},s.interpolate=function(c){return arguments.length?(n=c,h()):n},s.unknown=function(c){return arguments.length?(l=c,s):l},function(c,b){return r=c,i=b,h()}}function Cn(){return zn()(ee,ee)}function qn(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function _e(e,t){if((n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null;var n,r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function re(e){return e=_e(Math.abs(e)),e?e[1]:NaN}function Hn(e,t){return function(n,r){for(var i=n.length,l=[],a=0,f=e[0],o=0;i>0&&f>0&&(o+f+1>r&&(f=Math.max(1,r-o)),l.push(n.substring(i-=f,i+f)),!((o+=f+1)>r));)f=e[a=(a+1)%e.length];return l.reverse().join(t)}}function In(e){return function(t){return t.replace(/[0-9]/g,function(n){return e[+n]})}}var Bn=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function ge(e){if(!(t=Bn.exec(e)))throw new Error("invalid format: "+e);var t;return new Be({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}ge.prototype=Be.prototype;function Be(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}Be.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Fn(e){e:for(var t=e.length,n=1,r=-1,i;n<t;++n)switch(e[n]){case".":r=i=n;break;case"0":r===0&&(r=n),i=n;break;default:if(!+e[n])break e;r>0&&(r=0);break}return r>0?e.slice(0,r)+e.slice(i+1):e}var St;function On(e,t){var n=_e(e,t);if(!n)return e+"";var r=n[0],i=n[1],l=i-(St=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,a=r.length;return l===a?r:l>a?r+new Array(l-a+1).join("0"):l>0?r.slice(0,l)+"."+r.slice(l):"0."+new Array(1-l).join("0")+_e(e,Math.max(0,t+l-1))[0]}function We(e,t){var n=_e(e,t);if(!n)return e+"";var r=n[0],i=n[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}var Je={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:qn,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>We(e*100,t),r:We,s:On,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function Ke(e){return e}var $e=Array.prototype.map,et=["y","z","a","f","p","n","\xB5","m","","k","M","G","T","P","E","Z","Y"];function Dn(e){var t=e.grouping===void 0||e.thousands===void 0?Ke:Hn($e.call(e.grouping,Number),e.thousands+""),n=e.currency===void 0?"":e.currency[0]+"",r=e.currency===void 0?"":e.currency[1]+"",i=e.decimal===void 0?".":e.decimal+"",l=e.numerals===void 0?Ke:In($e.call(e.numerals,String)),a=e.percent===void 0?"%":e.percent+"",f=e.minus===void 0?"\u2212":e.minus+"",o=e.nan===void 0?"NaN":e.nan+"";function u(s){s=ge(s);var c=s.fill,b=s.align,m=s.sign,w=s.symbol,v=s.zero,j=s.width,A=s.comma,x=s.precision,E=s.trim,k=s.type;k==="n"?(A=!0,k="g"):Je[k]||(x===void 0&&(x=12),E=!0,k="g"),(v||c==="0"&&b==="=")&&(v=!0,c="0",b="=");var I=w==="$"?n:w==="#"&&/[boxX]/.test(k)?"0"+k.toLowerCase():"",p=w==="$"?r:/[%p]/.test(k)?a:"",g=Je[k],L=/[defgprs%]/.test(k);x=x===void 0?6:/[gprs]/.test(k)?Math.max(1,Math.min(21,x)):Math.max(0,Math.min(20,x));function _(y){var Q=I,z=p,K,Fe,oe;if(k==="c")z=g(y)+z,y="";else{y=+y;var se=y<0||1/y<0;if(y=isNaN(y)?o:g(Math.abs(y),x),E&&(y=Fn(y)),se&&+y==0&&m!=="+"&&(se=!1),Q=(se?m==="("?m:f:m==="-"||m==="("?"":m)+Q,z=(k==="s"?et[8+St/3]:"")+z+(se&&m==="("?")":""),L){for(K=-1,Fe=y.length;++K<Fe;)if(oe=y.charCodeAt(K),48>oe||oe>57){z=(oe===46?i+y.slice(K+1):y.slice(K))+z,y=y.slice(0,K);break}}}A&&!v&&(y=t(y,1/0));var ue=Q.length+y.length+z.length,D=ue<j?new Array(j-ue+1).join(c):"";switch(A&&v&&(y=t(D+y,D.length?j-z.length:1/0),D=""),b){case"<":y=Q+y+z+D;break;case"=":y=Q+D+y+z;break;case"^":y=D.slice(0,ue=D.length>>1)+Q+y+z+D.slice(ue);break;default:y=D+Q+y+z;break}return l(y)}return _.toString=function(){return s+""},_}function h(s,c){var b=u((s=ge(s),s.type="f",s)),m=Math.max(-8,Math.min(8,Math.floor(re(c)/3)))*3,w=Math.pow(10,-m),v=et[8+m/3];return function(j){return b(w*j)+v}}return{format:u,formatPrefix:h}}var he,jt,Lt;Un({thousands:",",grouping:[3],currency:["$",""]});function Un(e){return he=Dn(e),jt=he.format,Lt=he.formatPrefix,he}function Xn(e){return Math.max(0,-re(Math.abs(e)))}function Yn(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(re(t)/3)))*3-re(Math.abs(e)))}function Gn(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,re(t)-re(e))+1}function Vn(e,t,n,r){var i=rn(e,t,n),l;switch(r=ge(r??",f"),r.type){case"s":{var a=Math.max(Math.abs(e),Math.abs(t));return r.precision==null&&!isNaN(l=Yn(i,a))&&(r.precision=l),Lt(r,a)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(l=Gn(i,Math.max(Math.abs(e),Math.abs(t))))&&(r.precision=l-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(l=Xn(i))&&(r.precision=l-(r.type==="%")*2);break}}return jt(r)}function Zn(e){var t=e.domain;return e.ticks=function(n){var r=t();return nn(r[0],r[r.length-1],n??10)},e.tickFormat=function(n,r){var i=t();return Vn(i[0],i[i.length-1],n??10,r)},e.nice=function(n){n==null&&(n=10);var r=t(),i=0,l=r.length-1,a=r[i],f=r[l],o,u,h=10;for(f<a&&(u=a,a=f,f=u,u=i,i=l,l=u);h-- >0;){if(u=Mt(a,f,n),u===o)return r[i]=a,r[l]=f,t(r);if(u>0)a=Math.floor(a/u)*u,f=Math.ceil(f/u)*u;else if(u<0)a=Math.ceil(a*u)/u,f=Math.floor(f*u)/u;else break;o=u}return e},e}function Re(){var e=Cn();return e.copy=function(){return Tn(e,Re())},ln.apply(e,arguments),Zn(e)}const Pe=Math.PI,Te=2*Pe,W=1e-6,Qn=Te-W;function ze(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function Rt(){return new ze}ze.prototype=Rt.prototype={constructor:ze,moveTo:function(e,t){this._+="M"+(this._x0=this._x1=+e)+","+(this._y0=this._y1=+t)},closePath:function(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(e,t){this._+="L"+(this._x1=+e)+","+(this._y1=+t)},quadraticCurveTo:function(e,t,n,r){this._+="Q"+ +e+","+ +t+","+(this._x1=+n)+","+(this._y1=+r)},bezierCurveTo:function(e,t,n,r,i,l){this._+="C"+ +e+","+ +t+","+ +n+","+ +r+","+(this._x1=+i)+","+(this._y1=+l)},arcTo:function(e,t,n,r,i){e=+e,t=+t,n=+n,r=+r,i=+i;var l=this._x1,a=this._y1,f=n-e,o=r-t,u=l-e,h=a-t,s=u*u+h*h;if(i<0)throw new Error("negative radius: "+i);if(this._x1===null)this._+="M"+(this._x1=e)+","+(this._y1=t);else if(s>W)if(!(Math.abs(h*f-o*u)>W)||!i)this._+="L"+(this._x1=e)+","+(this._y1=t);else{var c=n-l,b=r-a,m=f*f+o*o,w=c*c+b*b,v=Math.sqrt(m),j=Math.sqrt(s),A=i*Math.tan((Pe-Math.acos((m+s-w)/(2*v*j)))/2),x=A/j,E=A/v;Math.abs(x-1)>W&&(this._+="L"+(e+x*u)+","+(t+x*h)),this._+="A"+i+","+i+",0,0,"+ +(h*c>u*b)+","+(this._x1=e+E*f)+","+(this._y1=t+E*o)}},arc:function(e,t,n,r,i,l){e=+e,t=+t,n=+n,l=!!l;var a=n*Math.cos(r),f=n*Math.sin(r),o=e+a,u=t+f,h=1^l,s=l?r-i:i-r;if(n<0)throw new Error("negative radius: "+n);this._x1===null?this._+="M"+o+","+u:(Math.abs(this._x1-o)>W||Math.abs(this._y1-u)>W)&&(this._+="L"+o+","+u),n&&(s<0&&(s=s%Te+Te),s>Qn?this._+="A"+n+","+n+",0,1,"+h+","+(e-a)+","+(t-f)+"A"+n+","+n+",0,1,"+h+","+(this._x1=o)+","+(this._y1=u):s>W&&(this._+="A"+n+","+n+",0,"+ +(s>=Pe)+","+h+","+(this._x1=e+n*Math.cos(i))+","+(this._y1=t+n*Math.sin(i))))},rect:function(e,t,n,r){this._+="M"+(this._x0=this._x1=+e)+","+(this._y0=this._y1=+t)+"h"+ +n+"v"+ +r+"h"+-n+"Z"},toString:function(){return this._}};function $(e){return function(){return e}}function Wn(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Pt(e){this._context=e}Pt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function Ce(e){return new Pt(e)}function Jn(e){return e[0]}function Kn(e){return e[1]}function tt(e,t){var n=$(!0),r=null,i=Ce,l=null;e=typeof e=="function"?e:e===void 0?Jn:$(e),t=typeof t=="function"?t:t===void 0?Kn:$(t);function a(f){var o,u=(f=Wn(f)).length,h,s=!1,c;for(r==null&&(l=i(c=Rt())),o=0;o<=u;++o)!(o<u&&n(h=f[o],o,f))===s&&((s=!s)?l.lineStart():l.lineEnd()),s&&l.point(+e(h,o,f),+t(h,o,f));if(c)return l=null,c+""||null}return a.x=function(f){return arguments.length?(e=typeof f=="function"?f:$(+f),a):e},a.y=function(f){return arguments.length?(t=typeof f=="function"?f:$(+f),a):t},a.defined=function(f){return arguments.length?(n=typeof f=="function"?f:$(!!f),a):n},a.curve=function(f){return arguments.length?(i=f,r!=null&&(l=i(r)),a):i},a.context=function(f){return arguments.length?(f==null?r=l=null:l=i(r=f),a):r},a}function nt(e){let t;return Array.isArray(e)?t=e.reduce((n,{values:r})=>[...n,...r.map(({y:i})=>i)],[]):t=e.values,[Math.min(...t),Math.max(...t)]}function rt(e,t,n){const r=Object.entries(e[0]).reduce((i,l,a)=>(!t&&a===0||t&&l[0]===t?i.x.name=l[0]:(!n||n&&n.includes(l[0]))&&i.y.push({name:l[0],values:[]}),i),{x:{name:"",values:[]},y:[]});for(let i=0;i<e.length;i++){const l=Object.entries(e[i]);for(let a=0;a<l.length;a++){let[f,o]=l[a];f===r.x.name?r.x.values.push(parseFloat(o)):r.y[a-1].values.push({y:parseFloat(l[a][1]),x:parseFloat(l[0][1])})}}return r}function $n(e){let t,n,r,i;return{c(){t=T("div"),n=T("span"),r=H(e[0]),d(n,"class","inline-block w-3 h-3 mr-1 rounded-sm"),B(n,"background",e[3]),d(t,"class","bg-black bg-opacity-80 text-white py-1 px-[0.4rem] absolute text-xs flex items-center justify-center rounded"),B(t,"top",e[2]-e[5]/2+"px"),B(t,"left",e[1]-e[4]-7+"px"),zt(()=>e[6].call(t))},m(l,a){M(l,t,a),S(t,n),S(t,r),i=Ct(t,e[6].bind(t))},p(l,[a]){a&8&&B(n,"background",l[3]),a&1&&U(r,l[0]),a&36&&B(t,"top",l[2]-l[5]/2+"px"),a&18&&B(t,"left",l[1]-l[4]-7+"px")},i:Y,o:Y,d(l){l&&N(t),i()}}}function er(e,t,n){let{text:r}=t,{x:i}=t,{y:l}=t,{color:a}=t,f,o;function u(){f=this.offsetWidth,o=this.offsetHeight,n(4,f),n(5,o)}return e.$$set=h=>{"text"in h&&n(0,r=h.text),"x"in h&&n(1,i=h.x),"y"in h&&n(2,l=h.y),"color"in h&&n(3,a=h.color)},[r,i,l,a,f,o,u]}class tr extends be{constructor(t){super(),pe(this,t,er,$n,ye,{text:0,x:1,y:2,color:3})}}function nr(e,{color:t,text:n}){let r;function i(o){return r=new tr({props:{text:n,x:o.pageX,y:o.pageY,color:t},target:document.body}),o}function l(o){r.$set({x:o.pageX,y:o.pageY})}function a(){r.$destroy()}const f=e;return f.addEventListener("mouseover",i),f.addEventListener("mouseleave",a),f.addEventListener("mousemove",l),{destroy(){f.removeEventListener("mouseover",i),f.removeEventListener("mouseleave",a),f.removeEventListener("mousemove",l)}}}function it(e,t,n){const r=e.slice();r[16]=t[n].name,r[17]=t[n].values;const i=r[8][r[16]];return r[18]=i,r}function lt(e,t,n){const r=e.slice();return r[0]=t[n].x,r[1]=t[n].y,r}function at(e,t,n){const r=e.slice();r[16]=t[n].name,r[17]=t[n].values;const i=r[8][r[16]];return r[18]=i,r}function ft(e,t,n){const r=e.slice();return r[0]=t[n].x,r[1]=t[n].y,r}function ot(e,t,n){const r=e.slice();return r[27]=t[n],r}function st(e,t,n){const r=e.slice();return r[27]=t[n],r}function ut(e,t,n){const r=e.slice();return r[16]=t[n].name,r}function ct(e){let t,n,r,i=e[16]+"",l,a;return{c(){t=T("div"),n=T("span"),r=X(),l=H(i),a=X(),d(n,"class","inline-block w-[12px] h-[12px] rounded-sm "),B(n,"background-color",e[8][e[16]]),d(t,"class","mx-2 flex gap-1 items-center")},m(f,o){M(f,t,o),S(t,n),S(t,r),S(t,l),S(t,a)},p(f,o){o[0]&260&&B(n,"background-color",f[8][f[16]]),o[0]&4&&i!==(i=f[16]+"")&&U(l,i)},d(f){f&&N(t)}}}function ht(e){let t,n,r,i,l,a,f=e[27]+"",o,u,h;return{c(){t=R("line"),a=R("text"),o=H(f),d(t,"stroke-width","0.5"),d(t,"x1",n=e[5](e[27])),d(t,"x2",r=e[5](e[27])),d(t,"y1",i=e[4](e[9][0]<e[6][0]?e[9][0]:e[6][0])+10),d(t,"y2",l=e[4](e[6][1]>e[9][e[9].length-1]?e[6][1]:e[9][e[9].length-1])),d(t,"stroke","#aaa"),d(a,"class","font-mono text-xs dark:fill-slate-200"),d(a,"text-anchor","middle"),d(a,"x",u=e[5](e[27])),d(a,"y",h=e[4](e[9][0])+30)},m(s,c){M(s,t,c),M(s,a,c),S(a,o)},p(s,c){c[0]&1056&&n!==(n=s[5](s[27]))&&d(t,"x1",n),c[0]&1056&&r!==(r=s[5](s[27]))&&d(t,"x2",r),c[0]&592&&i!==(i=s[4](s[9][0]<s[6][0]?s[9][0]:s[6][0])+10)&&d(t,"y1",i),c[0]&592&&l!==(l=s[4](s[6][1]>s[9][s[9].length-1]?s[6][1]:s[9][s[9].length-1]))&&d(t,"y2",l),c[0]&1024&&f!==(f=s[27]+"")&&U(o,f),c[0]&1056&&u!==(u=s[5](s[27]))&&d(a,"x",u),c[0]&528&&h!==(h=s[4](s[9][0])+30)&&d(a,"y",h)},d(s){s&&N(t),s&&N(a)}}}function dt(e){let t,n,r,i,l,a,f=e[27]+"",o,u,h;return{c(){t=R("line"),a=R("text"),o=H(f),d(t,"stroke-width","0.5"),d(t,"y1",n=e[4](e[27])),d(t,"y2",r=e[4](e[27])),d(t,"x1",i=e[5](e[10][0]<e[7][0]?e[10][0]:e[7][0])-10),d(t,"x2",l=e[5](e[7][1]>e[10][e[10].length-1]?e[7][1]:e[10][e[10].length-1])),d(t,"stroke","#aaa"),d(a,"class","font-mono text-xs dark:fill-slate-200"),d(a,"text-anchor","end"),d(a,"y",u=e[4](e[27])+4),d(a,"x",h=e[5](e[10][0])-20)},m(s,c){M(s,t,c),M(s,a,c),S(a,o)},p(s,c){c[0]&528&&n!==(n=s[4](s[27]))&&d(t,"y1",n),c[0]&528&&r!==(r=s[4](s[27]))&&d(t,"y2",r),c[0]&1184&&i!==(i=s[5](s[10][0]<s[7][0]?s[10][0]:s[7][0])-10)&&d(t,"x1",i),c[0]&1184&&l!==(l=s[5](s[7][1]>s[10][s[10].length-1]?s[7][1]:s[10][s[10].length-1]))&&d(t,"x2",l),c[0]&512&&f!==(f=s[27]+"")&&U(o,f),c[0]&528&&u!==(u=s[4](s[27])+4)&&d(a,"y",u),c[0]&1056&&h!==(h=s[5](s[10][0])-20)&&d(a,"x",h)},d(s){s&&N(t),s&&N(a)}}}function mt(e){let t,n,r,i,l,a,f=e[6][1]+"",o,u,h;return{c(){t=R("line"),a=R("text"),o=H(f),d(t,"stroke-width","0.5"),d(t,"y1",n=e[4](e[6][1])),d(t,"y2",r=e[4](e[6][1])),d(t,"x1",i=e[5](e[10][0])),d(t,"x2",l=e[5](e[7][1])),d(t,"stroke","#aaa"),d(a,"class","font-mono text-xs dark:fill-slate-200"),d(a,"text-anchor","end"),d(a,"y",u=e[4](e[6][1])+4),d(a,"x",h=e[5](e[10][0])-20)},m(s,c){M(s,t,c),M(s,a,c),S(a,o)},p(s,c){c[0]&80&&n!==(n=s[4](s[6][1]))&&d(t,"y1",n),c[0]&80&&r!==(r=s[4](s[6][1]))&&d(t,"y2",r),c[0]&1056&&i!==(i=s[5](s[10][0]))&&d(t,"x1",i),c[0]&160&&l!==(l=s[5](s[7][1]))&&d(t,"x2",l),c[0]&64&&f!==(f=s[6][1]+"")&&U(o,f),c[0]&80&&u!==(u=s[4](s[6][1])+4)&&d(a,"y",u),c[0]&1056&&h!==(h=s[5](s[10][0])-20)&&d(a,"x",h)},d(s){s&&N(t),s&&N(a)}}}function _t(e){let t,n,r,i;return{c(){t=R("circle"),d(t,"r","3.5"),d(t,"cx",n=e[5](e[0])),d(t,"cy",r=e[4](e[1])),d(t,"stroke-width","1.5"),d(t,"stroke",i=e[18]),d(t,"fill","none")},m(l,a){M(l,t,a)},p(l,a){a[0]&36&&n!==(n=l[5](l[0]))&&d(t,"cx",n),a[0]&20&&r!==(r=l[4](l[1]))&&d(t,"cy",r),a[0]&260&&i!==(i=l[18])&&d(t,"stroke",i)},d(l){l&&N(t)}}}function gt(e){let t,n,r,i=e[17],l=[];for(let a=0;a<i.length;a+=1)l[a]=_t(ft(e,i,a));return{c(){for(let a=0;a<l.length;a+=1)l[a].c();t=R("path"),d(t,"d",n=tt().curve(Ce)(e[17].map(e[13]))),d(t,"fill","none"),d(t,"stroke",r=e[18]),d(t,"stroke-width","3")},m(a,f){for(let o=0;o<l.length;o+=1)l[o].m(a,f);M(a,t,f)},p(a,f){if(f[0]&308){i=a[17];let o;for(o=0;o<i.length;o+=1){const u=ft(a,i,o);l[o]?l[o].p(u,f):(l[o]=_t(u),l[o].c(),l[o].m(t.parentNode,t))}for(;o<l.length;o+=1)l[o].d(1);l.length=i.length}f[0]&52&&n!==(n=tt().curve(Ce)(a[17].map(a[13])))&&d(t,"d",n),f[0]&260&&r!==(r=a[18])&&d(t,"stroke",r)},d(a){J(l,a),a&&N(t)}}}function bt(e){let t,n,r,i,l,a;return{c(){t=R("circle"),d(t,"r","7"),d(t,"cx",n=e[5](e[0])),d(t,"cy",r=e[4](e[1])),d(t,"stroke","black"),d(t,"fill","black"),B(t,"cursor","pointer"),B(t,"opacity","0")},m(f,o){M(f,t,o),l||(a=qt(i=nr.call(null,t,{color:e[18],text:`(${e[0]}, ${e[1]})`})),l=!0)},p(f,o){e=f,o[0]&36&&n!==(n=e[5](e[0]))&&d(t,"cx",n),o[0]&20&&r!==(r=e[4](e[1]))&&d(t,"cy",r),i&&Ht(i.update)&&o[0]&260&&i.update.call(null,{color:e[18],text:`(${e[0]}, ${e[1]})`})},d(f){f&&N(t),l=!1,a()}}}function pt(e){let t,n=e[17],r=[];for(let i=0;i<n.length;i+=1)r[i]=bt(lt(e,n,i));return{c(){for(let i=0;i<r.length;i+=1)r[i].c();t=te()},m(i,l){for(let a=0;a<r.length;a+=1)r[a].m(i,l);M(i,t,l)},p(i,l){if(l[0]&308){n=i[17];let a;for(a=0;a<n.length;a+=1){const f=lt(i,n,a);r[a]?r[a].p(f,l):(r[a]=bt(f),r[a].c(),r[a].m(t.parentNode,t))}for(;a<r.length;a+=1)r[a].d(1);r.length=n.length}},d(i){J(r,i),i&&N(t)}}}function rr(e){let t,n,r,i,l,a,f,o,u,h,s=e[3].name+"",c,b=e[2],m=[];for(let g=0;g<b.length;g+=1)m[g]=ct(ut(e,b,g));let w=e[10],v=[];for(let g=0;g<w.length;g+=1)v[g]=ht(st(e,w,g));let j=e[9],A=[];for(let g=0;g<j.length;g+=1)A[g]=dt(ot(e,j,g));let x=e[6][1]>e[9][e[9].length-1]&&mt(e),E=e[2],k=[];for(let g=0;g<E.length;g+=1)k[g]=gt(at(e,E,g));let I=e[2],p=[];for(let g=0;g<I.length;g+=1)p[g]=pt(it(e,I,g));return{c(){t=T("div"),n=T("div");for(let g=0;g<m.length;g+=1)m[g].c();r=X(),i=R("svg"),l=R("g");for(let g=0;g<v.length;g+=1)v[g].c();a=te();for(let g=0;g<A.length;g+=1)A[g].c();f=te(),x&&x.c();for(let g=0;g<k.length;g+=1)k[g].c();o=te();for(let g=0;g<p.length;g+=1)p[g].c();u=X(),h=T("div"),c=H(s),d(n,"class","flex justify-center items-center text-sm dark:text-slate-200"),d(i,"class","w-full"),d(i,"viewBox","-70 -20 700 420"),d(h,"class","flex justify-center align-items-center text-sm dark:text-slate-200"),d(t,"class","mt-3")},m(g,L){M(g,t,L),S(t,n);for(let _=0;_<m.length;_+=1)m[_].m(n,null);S(t,r),S(t,i),S(i,l);for(let _=0;_<v.length;_+=1)v[_].m(l,null);S(l,a);for(let _=0;_<A.length;_+=1)A[_].m(l,null);S(l,f),x&&x.m(l,null);for(let _=0;_<k.length;_+=1)k[_].m(i,null);S(i,o);for(let _=0;_<p.length;_+=1)p[_].m(i,null);S(t,u),S(t,h),S(h,c)},p(g,L){if(L[0]&260){b=g[2];let _;for(_=0;_<b.length;_+=1){const y=ut(g,b,_);m[_]?m[_].p(y,L):(m[_]=ct(y),m[_].c(),m[_].m(n,null))}for(;_<m.length;_+=1)m[_].d(1);m.length=b.length}if(L[0]&1648){w=g[10];let _;for(_=0;_<w.length;_+=1){const y=st(g,w,_);v[_]?v[_].p(y,L):(v[_]=ht(y),v[_].c(),v[_].m(l,a))}for(;_<v.length;_+=1)v[_].d(1);v.length=w.length}if(L[0]&1712){j=g[9];let _;for(_=0;_<j.length;_+=1){const y=ot(g,j,_);A[_]?A[_].p(y,L):(A[_]=dt(y),A[_].c(),A[_].m(l,f))}for(;_<A.length;_+=1)A[_].d(1);A.length=j.length}if(g[6][1]>g[9][g[9].length-1]?x?x.p(g,L):(x=mt(g),x.c(),x.m(l,null)):x&&(x.d(1),x=null),L[0]&308){E=g[2];let _;for(_=0;_<E.length;_+=1){const y=at(g,E,_);k[_]?k[_].p(y,L):(k[_]=gt(y),k[_].c(),k[_].m(i,o))}for(;_<k.length;_+=1)k[_].d(1);k.length=E.length}if(L[0]&308){I=g[2];let _;for(_=0;_<I.length;_+=1){const y=it(g,I,_);p[_]?p[_].p(y,L):(p[_]=pt(y),p[_].c(),p[_].m(i,null))}for(;_<p.length;_+=1)p[_].d(1);p.length=I.length}L[0]&8&&s!==(s=g[3].name+"")&&U(c,s)},i:Y,o:Y,d(g){g&&N(t),J(m,g),J(v,g),J(A,g),x&&x.d(),J(k,g),J(p,g)}}}function ir(e,t,n){let r,i,l,a,f,o,u,h,{value:s}=t,{x:c=void 0}=t,{y:b=void 0}=t,{colors:m=[]}=t;const w=yt();let v;function j(x){let E=m[x%m.length];return E&&E in xe?xe[E]?.primary:E||xe[Qt(x)].primary}It(()=>{w("process",{x:r,y:i})});const A=({x,y:E})=>[f(x),o(E)];return e.$$set=x=>{"value"in x&&n(11,s=x.value),"x"in x&&n(0,c=x.x),"y"in x&&n(1,b=x.y),"colors"in x&&n(12,m=x.colors)},e.$$.update=()=>{e.$$.dirty[0]&2051&&n(3,{x:r,y:i}=rt(typeof s=="string"?Wt(s):s,c,b),r,(n(2,i),n(11,s),n(0,c),n(1,b))),e.$$.dirty[0]&8&&n(7,l=nt(r)),e.$$.dirty[0]&4&&n(6,a=nt(i)),e.$$.dirty[0]&128&&n(5,f=Re(l,[0,600]).nice()),e.$$.dirty[0]&64&&n(4,o=Re(a,[350,0]).nice()),e.$$.dirty[0]&32&&n(10,u=f.ticks(8)),e.$$.dirty[0]&16&&n(9,h=o.ticks(8)),e.$$.dirty[0]&4&&n(8,v=i.reduce((x,E,k)=>({...x,[E.name]:j(k)}),{}))},[c,b,i,r,o,f,a,l,v,h,u,s,m,A]}class Tt extends be{constructor(t){super(),pe(this,t,ir,rr,ye,{value:11,x:0,y:1,colors:12},null,[-1,-1])}}function lr(e){let t,n,r;return n=new Yt({props:{filetype:"text/csv",include_file_metadata:!1,$$slots:{default:[or]},$$scope:{ctx:e}}}),n.$on("load",e[16]),{c(){t=T("div"),G(n.$$.fragment),d(t,"class","h-full min-h-[8rem]")},m(i,l){M(i,t,l),V(n,t,null),r=!0},p(i,l){const a={};l&1052672&&(a.$$scope={dirty:l,ctx:i}),n.$set(a)},i(i){r||(C(n.$$.fragment,i),r=!0)},o(i){q(n.$$.fragment,i),r=!1},d(i){i&&N(t),Z(n)}}}function ar(e){let t,n,r,i,l;return n=new Gt({}),n.$on("clear",e[14]),i=new Tt({props:{value:e[10],y:e[3],x:e[4],colors:e[8]}}),i.$on("process",e[15]),{c(){t=T("div"),G(n.$$.fragment),r=X(),G(i.$$.fragment),d(t,"class","input-model w-full h-60 flex justify-center items-center bg-gray-200 dark:bg-gray-600 relative")},m(a,f){M(a,t,f),V(n,t,null),S(t,r),V(i,t,null),l=!0},p(a,f){const o={};f&1024&&(o.value=a[10]),f&8&&(o.y=a[3]),f&16&&(o.x=a[4]),f&256&&(o.colors=a[8]),i.$set(o)},i(a){l||(C(n.$$.fragment,a),C(i.$$.fragment,a),l=!0)},o(a){q(n.$$.fragment,a),q(i.$$.fragment,a),l=!1},d(a){a&&N(t),Z(n),Z(i)}}}function fr(e){let t,n,r,i;const l=[ur,sr],a=[];function f(o,u){return o[11]?0:1}return t=f(e),n=a[t]=l[t](e),{c(){n.c(),r=te()},m(o,u){a[t].m(o,u),M(o,r,u),i=!0},p(o,u){let h=t;t=f(o),t===h?a[t].p(o,u):(xt(),q(a[h],1,1,()=>{a[h]=null}),vt(),n=a[t],n?n.p(o,u):(n=a[t]=l[t](o),n.c()),C(n,1),n.m(r.parentNode,r))},i(o){i||(C(n),i=!0)},o(o){q(n),i=!1},d(o){a[t].d(o),o&&N(r)}}}function or(e){let t=e[12]("interface.drop_csv")+"",n,r,i,l,a=e[12]("or")+"",f,o,u,h,s=e[12]("interface.click_to_upload")+"",c;return{c(){n=H(t),r=X(),i=T("br"),l=H("- "),f=H(a),o=H(" -"),u=T("br"),h=X(),c=H(s)},m(b,m){M(b,n,m),M(b,r,m),M(b,i,m),M(b,l,m),M(b,f,m),M(b,o,m),M(b,u,m),M(b,h,m),M(b,c,m)},p(b,m){m&4096&&t!==(t=b[12]("interface.drop_csv")+"")&&U(n,t),m&4096&&a!==(a=b[12]("or")+"")&&U(f,a),m&4096&&s!==(s=b[12]("interface.click_to_upload")+"")&&U(c,s)},d(b){b&&N(n),b&&N(r),b&&N(i),b&&N(l),b&&N(f),b&&N(o),b&&N(u),b&&N(h),b&&N(c)}}}function sr(e){let t,n,r,i;return r=new wt({}),{c(){t=T("div"),n=T("div"),G(r.$$.fragment),d(n,"class","h-5 dark:text-white opacity-50"),d(t,"class","h-full min-h-[15rem] flex justify-center items-center")},m(l,a){M(l,t,a),S(t,n),V(r,n,null),i=!0},p:Y,i(l){i||(C(r.$$.fragment,l),i=!0)},o(l){q(r.$$.fragment,l),i=!1},d(l){l&&N(t),Z(r)}}}function ur(e){let t,n;return t=new Tt({props:{value:e[11],colors:e[8]}}),{c(){G(t.$$.fragment)},m(r,i){V(t,r,i),n=!0},p(r,i){const l={};i&2048&&(l.value=r[11]),i&256&&(l.colors=r[8]),t.$set(l)},i(r){n||(C(t.$$.fragment,r),n=!0)},o(r){q(t.$$.fragment,r),n=!1},d(r){Z(t,r)}}}function cr(e){let t,n,r,i,l,a,f,o;t=new Zt({props:{show_label:e[7],Icon:wt,label:e[6]||"TimeSeries"}});const u=[e[9]];let h={};for(let m=0;m<u.length;m+=1)h=Ot(h,u[m]);r=new Dt({props:h});const s=[fr,ar,lr],c=[];function b(m,w){return m[5]==="static"?0:m[10]?1:m[0]===void 0||m[0]===null?2:-1}return~(l=b(e))&&(a=c[l]=s[l](e)),{c(){G(t.$$.fragment),n=X(),G(r.$$.fragment),i=X(),a&&a.c(),f=te()},m(m,w){V(t,m,w),M(m,n,w),V(r,m,w),M(m,i,w),~l&&c[l].m(m,w),M(m,f,w),o=!0},p(m,w){const v={};w&128&&(v.show_label=m[7]),w&64&&(v.label=m[6]||"TimeSeries"),t.$set(v);const j=w&512?Ut(u,[Xt(m[9])]):{};r.$set(j);let A=l;l=b(m),l===A?~l&&c[l].p(m,w):(a&&(xt(),q(c[A],1,1,()=>{c[A]=null}),vt()),~l?(a=c[l],a?a.p(m,w):(a=c[l]=s[l](m),a.c()),C(a,1),a.m(f.parentNode,f)):a=null)},i(m){o||(C(t.$$.fragment,m),C(r.$$.fragment,m),C(a),o=!0)},o(m){q(t.$$.fragment,m),q(r.$$.fragment,m),q(a),o=!1},d(m){Z(t,m),m&&N(n),Z(r,m),m&&N(i),~l&&c[l].d(m),m&&N(f)}}}function hr(e){let t,n;return t=new Vt({props:{visible:e[2],variant:e[5]==="dynamic"&&!e[10]?"dashed":"solid",color:"grey",padding:!1,elem_id:e[1],$$slots:{default:[cr]},$$scope:{ctx:e}}}),{c(){G(t.$$.fragment)},m(r,i){V(t,r,i),n=!0},p(r,[i]){const l={};i&4&&(l.visible=r[2]),i&1056&&(l.variant=r[5]==="dynamic"&&!r[10]?"dashed":"solid"),i&2&&(l.elem_id=r[1]),i&1056761&&(l.$$scope={dirty:i,ctx:r}),t.$set(l)},i(r){n||(C(t.$$.fragment,r),n=!0)},o(r){q(t.$$.fragment,r),n=!1},d(r){Z(t,r)}}}function dr(e){return e.data.map(t=>t.reduce((n,r,i)=>({...n,[e.headers[i]]:r}),{}))}function mr(e){const t=atob(e.split(",")[1]),n=e.split(",")[0].split(":")[1].split(";")[0],r=new ArrayBuffer(t.length),i=new Uint8Array(r);for(let l=0;l<t.length;l++)i[l]=t.charCodeAt(l);return new Blob([r],{type:n})}function _r(e,t){const n=[],r=[];n.push(e.name),t.forEach(({name:i})=>n.push(i));for(let i=0;i<e.values.length;i++){let l=[];l.push(e.values[i]),t.forEach(({values:a})=>l.push(a[i].y)),r.push(l)}return{headers:n,data:r}}function gr(e,t,n){let r,i;Bt(e,Ft,p=>n(12,i=p));const l=yt();let{elem_id:a=""}=t,{visible:f=!0}=t,{value:o}=t,{y:u}=t,{x:h}=t,{mode:s}=t,{label:c}=t,{show_label:b}=t,{colors:m}=t,{loading_status:w}=t,v;function j(p){const g=new FileReader;g.addEventListener("loadend",L=>{n(10,v=L.srcElement.result)}),g.readAsText(p)}function A(p){p.headers&&n(10,v=p.headers.join(",")),p.data.forEach(L=>{n(10,v=v+`
`),n(10,v=v+L.join(","))})}function x(p){return n(0,o={data:p}),p}function E({detail:p}){n(0,o=null),l("change"),l("clear")}const k=({detail:{x:p,y:g}})=>n(0,o=_r(p,g)),I=({detail:p})=>x(p);return e.$$set=p=>{"elem_id"in p&&n(1,a=p.elem_id),"visible"in p&&n(2,f=p.visible),"value"in p&&n(0,o=p.value),"y"in p&&n(3,u=p.y),"x"in p&&n(4,h=p.x),"mode"in p&&n(5,s=p.mode),"label"in p&&n(6,c=p.label),"show_label"in p&&n(7,b=p.show_label),"colors"in p&&n(8,m=p.colors),"loading_status"in p&&n(9,w=p.loading_status)},e.$$.update=()=>{e.$$.dirty&1&&(o&&o.data&&typeof o.data=="string"?o?j(mr(o.data)):n(10,v=null):o&&o.data&&typeof o.data!="string"&&(o||n(10,v=null),A(o))),e.$$.dirty&1025&&n(10,v=o==null?null:v),e.$$.dirty&33&&n(11,r=s==="static"&&o&&dr(o)),e.$$.dirty&1&&l("change")},[o,a,f,u,h,s,c,b,m,w,v,r,i,x,E,k,I]}class br extends be{constructor(t){super(),pe(this,t,gr,hr,ye,{elem_id:1,visible:2,value:0,y:3,x:4,mode:5,label:6,show_label:7,colors:8,loading_status:9})}}var Er=br;const Sr=["static","dynamic"];export{Er as Component,Sr as modes};
