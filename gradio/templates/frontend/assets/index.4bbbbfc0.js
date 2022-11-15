import{S as C,i as D,s as q,e as T,c as d,a as z,b as v,f as E,m as h,g as j,a4 as y,l as N,ai as H,j as g,k,n as S,o as w,z as K,E as P,t as Q,h as R,a7 as A,P as F,Q as G,H as I,N as L,R as M,T as O,K as U,J as B}from"./index.06d85743.js";import{B as V}from"./Block.324ba9b6.js";import{B as W}from"./BlockTitle.2a6cdad3.js";import"./styles.ed3b21b5.js";function X(a){let e;return{c(){e=Q(a[2])},m(t,l){E(t,e,l)},p(t,l){l&4&&R(e,t[2])},d(t){t&&S(e)}}}function Y(a){let e,t,l,s,u,_,r;return t=new W({props:{show_label:a[3],$$slots:{default:[X]},$$scope:{ctx:a}}}),{c(){e=T("label"),d(t.$$.fragment),l=z(),s=T("input"),v(s,"type","number"),v(s,"class","gr-box gr-input w-full gr-text-input"),s.disabled=a[1],v(e,"class","block")},m(f,b){E(f,e,b),h(t,e,null),j(e,l),j(e,s),y(s,a[0]),u=!0,_||(r=[N(s,"input",a[6]),N(s,"keypress",a[4]),N(s,"blur",a[5])],_=!0)},p(f,[b]){const n={};b&8&&(n.show_label=f[3]),b&516&&(n.$$scope={dirty:b,ctx:f}),t.$set(n),(!u||b&2)&&(s.disabled=f[1]),b&1&&H(s.value)!==f[0]&&y(s,f[0])},i(f){u||(g(t.$$.fragment,f),u=!0)},o(f){k(t.$$.fragment,f),u=!1},d(f){f&&S(e),w(t),_=!1,K(r)}}}function Z(a,e,t){let{value:l=0}=e,{disabled:s=!1}=e,{label:u}=e,{show_label:_}=e;const r=P();function f(o){!isNaN(o)&&o!==null&&r("change",o)}async function b(o){await A(),o.key==="Enter"&&(o.preventDefault(),r("submit"))}function n(o){r("blur")}function m(){l=H(this.value),t(0,l)}return a.$$set=o=>{"value"in o&&t(0,l=o.value),"disabled"in o&&t(1,s=o.disabled),"label"in o&&t(2,u=o.label),"show_label"in o&&t(3,_=o.show_label)},a.$$.update=()=>{a.$$.dirty&1&&f(l)},[l,s,u,_,b,n,m]}class p extends C{constructor(e){super(),D(this,e,Z,Y,q,{value:0,disabled:1,label:2,show_label:3})}}function x(a){let e,t,l,s,u;const _=[a[6]];let r={};for(let n=0;n<_.length;n+=1)r=F(r,_[n]);e=new G({props:r});function f(n){a[8](n)}let b={label:a[1],show_label:a[5],disabled:a[7]==="static"};return a[0]!==void 0&&(b.value=a[0]),l=new p({props:b}),I.push(()=>L(l,"value",f)),l.$on("change",a[9]),l.$on("submit",a[10]),l.$on("blur",a[11]),{c(){d(e.$$.fragment),t=z(),d(l.$$.fragment)},m(n,m){h(e,n,m),E(n,t,m),h(l,n,m),u=!0},p(n,m){const o=m&64?M(_,[O(n[6])]):{};e.$set(o);const c={};m&2&&(c.label=n[1]),m&32&&(c.show_label=n[5]),m&128&&(c.disabled=n[7]==="static"),!s&&m&1&&(s=!0,c.value=n[0],U(()=>s=!1)),l.$set(c)},i(n){u||(g(e.$$.fragment,n),g(l.$$.fragment,n),u=!0)},o(n){k(e.$$.fragment,n),k(l.$$.fragment,n),u=!1},d(n){w(e,n),n&&S(t),w(l,n)}}}function $(a){let e,t;return e=new V({props:{visible:a[3],elem_id:a[2],disable:typeof a[4].container=="boolean"&&!a[4].container,$$slots:{default:[x]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},m(l,s){h(e,l,s),t=!0},p(l,[s]){const u={};s&8&&(u.visible=l[3]),s&4&&(u.elem_id=l[2]),s&16&&(u.disable=typeof l[4].container=="boolean"&&!l[4].container),s&4323&&(u.$$scope={dirty:s,ctx:l}),e.$set(u)},i(l){t||(g(e.$$.fragment,l),t=!0)},o(l){k(e.$$.fragment,l),t=!1},d(l){w(e,l)}}}function ee(a,e,t){let{label:l="Number"}=e,{elem_id:s=""}=e,{visible:u=!0}=e,{style:_={}}=e,{value:r=0}=e,{show_label:f}=e,{loading_status:b}=e,{mode:n}=e;function m(i){r=i,t(0,r)}function o(i){B.call(this,a,i)}function c(i){B.call(this,a,i)}function J(i){B.call(this,a,i)}return a.$$set=i=>{"label"in i&&t(1,l=i.label),"elem_id"in i&&t(2,s=i.elem_id),"visible"in i&&t(3,u=i.visible),"style"in i&&t(4,_=i.style),"value"in i&&t(0,r=i.value),"show_label"in i&&t(5,f=i.show_label),"loading_status"in i&&t(6,b=i.loading_status),"mode"in i&&t(7,n=i.mode)},[r,l,s,u,_,f,b,n,m,o,c,J]}class le extends C{constructor(e){super(),D(this,e,ee,$,q,{label:1,elem_id:2,visible:3,style:4,value:0,show_label:5,loading_status:6,mode:7})}}var ie=le;const ue=["static","dynamic"];export{ie as Component,ue as modes};
