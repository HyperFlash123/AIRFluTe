import{S as Z,i as A,s as D,v as R,b as _,f as g,g as b,w as B,n as h,A as F,e as v,a as j,t as N,Y as T,h as E,B as K,d as C,c as H,m as L,j as k,k as w,o as M,E as O,P as U,Q as W,R as X,T as $,C as V,D as Y}from"./index.ca80e38e.js";import{B as x}from"./Block.8c4ad70f.js";import{B as ee}from"./BlockLabel.92d27911.js";import"./styles.ed3b21b5.js";function le(a){let e,n;return{c(){e=R("svg"),n=R("path"),_(n,"fill","currentColor"),_(n,"d","M4 2H2v26a2 2 0 0 0 2 2h26v-2H4v-3h22v-8H4v-4h14V5H4Zm20 17v4H4v-4ZM16 7v4H4V7Z"),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),_(e,"aria-hidden","true"),_(e,"role","img"),_(e,"class","iconify iconify--carbon"),_(e,"width","100%"),_(e,"height","100%"),_(e,"preserveAspectRatio","xMidYMid meet"),_(e,"viewBox","0 0 32 32")},m(l,t){g(l,e,t),b(e,n)},p:B,i:B,o:B,d(l){l&&h(e)}}}class G extends Z{constructor(e){super(),A(this,e,null,le,D,{})}}function q(a,e,n){const l=a.slice();return l[2]=e[n],l}function I(a){let e,n=a[0].confidences,l=[];for(let t=0;t<n.length;t+=1)l[t]=Q(q(a,n,t));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=F()},m(t,i){for(let s=0;s<l.length;s+=1)l[s].m(t,i);g(t,e,i)},p(t,i){if(i&1){n=t[0].confidences;let s;for(s=0;s<n.length;s+=1){const o=q(t,n,s);l[s]?l[s].p(o,i):(l[s]=Q(o),l[s].c(),l[s].m(e.parentNode,e))}for(;s<l.length;s+=1)l[s].d(1);l.length=n.length}},d(t){K(l,t),t&&h(e)}}}function P(a){let e,n,l,t=Math.round(a[2].confidence*100)+"",i,s;return{c(){e=v("div"),n=j(),l=v("div"),i=N(t),s=N("%"),_(e,"class","flex-1 border border-dashed border-gray-100 px-4"),_(l,"class","text-right ml-auto")},m(o,c){g(o,e,c),g(o,n,c),g(o,l,c),b(l,i),b(l,s)},p(o,c){c&1&&t!==(t=Math.round(o[2].confidence*100)+"")&&E(i,t)},d(o){o&&h(e),o&&h(n),o&&h(l)}}}function Q(a){let e,n,l,t,i,s,o=a[2].label+"",c,p,u,r=a[0].confidences&&P(a);return{c(){e=v("div"),n=v("div"),l=v("div"),t=j(),i=v("div"),s=v("div"),c=N(o),p=j(),r&&r.c(),u=j(),_(l,"class","h-1 mb-1 rounded bg-gradient-to-r group-hover:from-orange-500 from-orange-400 to-orange-200 dark:from-orange-400 dark:to-orange-600"),T(l,"width",a[2].confidence*100+"%"),_(s,"class","leading-snug"),_(i,"class","flex items-baseline space-x-2 group-hover:text-orange-500"),_(n,"class","flex-1"),_(e,"class","flex items-start justify-between font-mono text-sm leading-none group mb-2 last:mb-0 dark:text-slate-300")},m(d,y){g(d,e,y),b(e,n),b(n,l),b(n,t),b(n,i),b(i,s),b(s,c),b(i,p),r&&r.m(i,null),b(e,u)},p(d,y){y&1&&T(l,"width",d[2].confidence*100+"%"),y&1&&o!==(o=d[2].label+"")&&E(c,o),d[0].confidences?r?r.p(d,y):(r=P(d),r.c(),r.m(i,null)):r&&(r.d(1),r=null)},d(d){d&&h(e),r&&r.d()}}}function te(a){let e,n,l=a[0].label+"",t,i,s=typeof a[0]=="object"&&a[0].confidences&&I(a);return{c(){e=v("div"),n=v("div"),t=N(l),i=j(),s&&s.c(),_(n,"class","output-class font-bold text-2xl py-6 px-4 flex-grow flex items-center justify-center dark:text-slate-200"),C(n,"sr-only",!a[1]),C(n,"no-confidence",!("confidences"in a[0])),_(e,"class","output-label")},m(o,c){g(o,e,c),b(e,n),b(n,t),b(e,i),s&&s.m(e,null)},p(o,[c]){c&1&&l!==(l=o[0].label+"")&&E(t,l),c&2&&C(n,"sr-only",!o[1]),c&1&&C(n,"no-confidence",!("confidences"in o[0])),typeof o[0]=="object"&&o[0].confidences?s?s.p(o,c):(s=I(o),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},i:B,o:B,d(o){o&&h(e),s&&s.d()}}}function ne(a,e,n){let{value:l}=e,{show_label:t}=e;return a.$$set=i=>{"value"in i&&n(0,l=i.value),"show_label"in i&&n(1,t=i.show_label)},[l,t]}class ie extends Z{constructor(e){super(),A(this,e,ne,te,D,{value:0,show_label:1})}}function z(a){let e,n;return e=new ee({props:{Icon:G,label:a[3],disable:typeof a[4].container=="boolean"&&!a[4].container}}),{c(){H(e.$$.fragment)},m(l,t){L(e,l,t),n=!0},p(l,t){const i={};t&8&&(i.label=l[3]),t&16&&(i.disable=typeof l[4].container=="boolean"&&!l[4].container),e.$set(i)},i(l){n||(k(e.$$.fragment,l),n=!0)},o(l){w(e.$$.fragment,l),n=!1},d(l){M(e,l)}}}function se(a){let e,n,l,t;return l=new G({}),{c(){e=v("div"),n=v("div"),H(l.$$.fragment),_(n,"class","h-5 dark:text-white opacity-50"),_(e,"class","h-full min-h-[6rem] flex justify-center items-center")},m(i,s){g(i,e,s),b(e,n),L(l,n,null),t=!0},p:B,i(i){t||(k(l.$$.fragment,i),t=!0)},o(i){w(l.$$.fragment,i),t=!1},d(i){i&&h(e),M(l)}}}function ae(a){let e,n;return e=new ie({props:{value:a[2],show_label:a[6]}}),{c(){H(e.$$.fragment)},m(l,t){L(e,l,t),n=!0},p(l,t){const i={};t&4&&(i.value=l[2]),t&64&&(i.show_label=l[6]),e.$set(i)},i(l){n||(k(e.$$.fragment,l),n=!0)},o(l){w(e.$$.fragment,l),n=!1},d(l){M(e,l)}}}function oe(a){let e,n,l,t,i,s,o;const c=[a[5]];let p={};for(let f=0;f<c.length;f+=1)p=U(p,c[f]);e=new W({props:p});let u=a[6]&&z(a);const r=[ae,se],d=[];function y(f,m){return typeof f[2]=="object"&&f[2]!==void 0&&f[2]!==null?0:1}return t=y(a),i=d[t]=r[t](a),{c(){H(e.$$.fragment),n=j(),u&&u.c(),l=j(),i.c(),s=F()},m(f,m){L(e,f,m),g(f,n,m),u&&u.m(f,m),g(f,l,m),d[t].m(f,m),g(f,s,m),o=!0},p(f,m){const J=m&32?X(c,[$(f[5])]):{};e.$set(J),f[6]?u?(u.p(f,m),m&64&&k(u,1)):(u=z(f),u.c(),k(u,1),u.m(l.parentNode,l)):u&&(V(),w(u,1,1,()=>{u=null}),Y());let S=t;t=y(f),t===S?d[t].p(f,m):(V(),w(d[S],1,1,()=>{d[S]=null}),Y(),i=d[t],i?i.p(f,m):(i=d[t]=r[t](f),i.c()),k(i,1),i.m(s.parentNode,s))},i(f){o||(k(e.$$.fragment,f),k(u),k(i),o=!0)},o(f){w(e.$$.fragment,f),w(u),w(i),o=!1},d(f){M(e,f),f&&h(n),u&&u.d(f),f&&h(l),d[t].d(f),f&&h(s)}}}function fe(a){let e,n;return e=new x({props:{test_id:"label",visible:a[1],elem_id:a[0],disable:typeof a[4].container=="boolean"&&!a[4].container,$$slots:{default:[oe]},$$scope:{ctx:a}}}),{c(){H(e.$$.fragment)},m(l,t){L(e,l,t),n=!0},p(l,[t]){const i={};t&2&&(i.visible=l[1]),t&1&&(i.elem_id=l[0]),t&16&&(i.disable=typeof l[4].container=="boolean"&&!l[4].container),t&380&&(i.$$scope={dirty:t,ctx:l}),e.$set(i)},i(l){n||(k(e.$$.fragment,l),n=!0)},o(l){w(e.$$.fragment,l),n=!1},d(l){M(e,l)}}}function re(a,e,n){let{elem_id:l=""}=e,{visible:t=!0}=e,{value:i}=e,{label:s="Label"}=e,{style:o={}}=e,{loading_status:c}=e,{show_label:p}=e;const u=O();return a.$$set=r=>{"elem_id"in r&&n(0,l=r.elem_id),"visible"in r&&n(1,t=r.visible),"value"in r&&n(2,i=r.value),"label"in r&&n(3,s=r.label),"style"in r&&n(4,o=r.style),"loading_status"in r&&n(5,c=r.loading_status),"show_label"in r&&n(6,p=r.show_label)},a.$$.update=()=>{a.$$.dirty&4&&u("change")},[l,t,i,s,o,c,p]}class ce extends Z{constructor(e){super(),A(this,e,re,fe,D,{elem_id:0,visible:1,value:2,label:3,style:4,loading_status:5,show_label:6})}}var me=ce;const ve=["static"];export{me as Component,ve as modes};
