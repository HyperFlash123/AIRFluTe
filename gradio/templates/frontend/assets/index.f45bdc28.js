import{S as M,i as T,s as j,v as B,b as u,f as b,g as v,w as p,n as d,e as k,t as S,a as w,h as z,B as U,E as V,a1 as q,a2 as A,H as I,a3 as D,c as y,m as C,j as h,k as g,o as H,P as J,Q as N,R as O,T as P,C as Q,D as Y,J as Z}from"./index.06d85743.js";import{B as F}from"./Block.324ba9b6.js";import{B as G}from"./BlockLabel.23fe9ed2.js";import"./styles.ed3b21b5.js";function K(o){let e,a,t;return{c(){e=B("svg"),a=B("path"),t=B("path"),u(a,"fill","currentColor"),u(a,"d","M17.74 30L16 29l4-7h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9v2H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4.84Z"),u(t,"fill","currentColor"),u(t,"d","M8 10h16v2H8zm0 6h10v2H8z"),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),u(e,"aria-hidden","true"),u(e,"role","img"),u(e,"class","iconify iconify--carbon"),u(e,"width","100%"),u(e,"height","100%"),u(e,"preserveAspectRatio","xMidYMid meet"),u(e,"viewBox","0 0 32 32")},m(l,s){b(l,e,s),v(e,a),v(e,t)},p,i:p,o:p,d(l){l&&d(e)}}}class W extends M{constructor(e){super(),T(this,e,null,K,j,{})}}function E(o,e,a){const t=o.slice();return t[9]=e[a],t}function L(o){let e,a=o[9][0]+"",t,l,s,r,c=o[9][1]+"",f,i,_;return{c(){e=k("div"),t=S(a),s=w(),r=k("div"),f=S(c),i=w(),u(e,"data-testid","user"),u(e,"class","px-3 py-2 rounded-[22px] rounded-br-none text-white text-sm"),u(e,"style",l="background-color:"+o[2][0]),u(r,"data-testid","bot"),u(r,"class","px-3 py-2 rounded-[22px] rounded-bl-none place-self-start text-white text-sm"),u(r,"style",_="background-color:"+o[2][1])},m(m,n){b(m,e,n),v(e,t),b(m,s,n),b(m,r,n),v(r,f),v(r,i)},p(m,n){n&1&&a!==(a=m[9][0]+"")&&z(t,a),n&4&&l!==(l="background-color:"+m[2][0])&&u(e,"style",l),n&1&&c!==(c=m[9][1]+"")&&z(f,c),n&4&&_!==(_="background-color:"+m[2][1])&&u(r,"style",_)},d(m){m&&d(e),m&&d(s),m&&d(r)}}}function X(o){let e,a,t=o[0],l=[];for(let s=0;s<t.length;s+=1)l[s]=L(E(o,t,s));return{c(){e=k("div"),a=k("div");for(let s=0;s<l.length;s+=1)l[s].c();u(a,"class","flex flex-col items-end space-y-4 p-3"),u(e,"class","overflow-y-auto h-[40vh]")},m(s,r){b(s,e,r),v(e,a);for(let c=0;c<l.length;c+=1)l[c].m(a,null);o[4](e)},p(s,[r]){if(r&5){t=s[0];let c;for(c=0;c<t.length;c+=1){const f=E(s,t,c);l[c]?l[c].p(f,r):(l[c]=L(f),l[c].c(),l[c].m(a,null))}for(;c<l.length;c+=1)l[c].d(1);l.length=t.length}},i:p,o:p,d(s){s&&d(e),U(l,s),o[4](null)}}}function x(o,e,a){let t,{value:l}=e,{style:s={}}=e,r,c;const f=V();q(()=>{c=r&&r.offsetHeight+r.scrollTop>r.scrollHeight-20}),A(()=>{c&&r.scrollTo(0,r.scrollHeight)});function i(n){return n in D?D[n].primary:n}function _(){return s.color_map?[i(s.color_map[0]),i(s.color_map[1])]:["#fb923c","#9ca3af"]}function m(n){I[n?"unshift":"push"](()=>{r=n,a(1,r)})}return o.$$set=n=>{"value"in n&&a(0,l=n.value),"style"in n&&a(3,s=n.style)},o.$$.update=()=>{o.$$.dirty&1&&l&&f("change")},a(2,t=_()),[l,r,t,s,m]}class $ extends M{constructor(e){super(),T(this,e,x,X,j,{value:0,style:3})}}function R(o){let e,a;return e=new G({props:{show_label:o[5],Icon:W,label:o[4]||"Chatbot",disable:typeof o[0].container=="boolean"&&!o[0].container}}),{c(){y(e.$$.fragment)},m(t,l){C(e,t,l),a=!0},p(t,l){const s={};l&32&&(s.show_label=t[5]),l&16&&(s.label=t[4]||"Chatbot"),l&1&&(s.disable=typeof t[0].container=="boolean"&&!t[0].container),e.$set(s)},i(t){a||(h(e.$$.fragment,t),a=!0)},o(t){g(e.$$.fragment,t),a=!1},d(t){H(e,t)}}}function ee(o){let e,a,t,l,s;const r=[o[6]];let c={};for(let i=0;i<r.length;i+=1)c=J(c,r[i]);e=new N({props:c});let f=o[5]&&R(o);return l=new $({props:{style:o[0],value:o[3]}}),l.$on("change",o[8]),{c(){y(e.$$.fragment),a=w(),f&&f.c(),t=w(),y(l.$$.fragment)},m(i,_){C(e,i,_),b(i,a,_),f&&f.m(i,_),b(i,t,_),C(l,i,_),s=!0},p(i,_){const m=_&64?O(r,[P(i[6])]):{};e.$set(m),i[5]?f?(f.p(i,_),_&32&&h(f,1)):(f=R(i),f.c(),h(f,1),f.m(t.parentNode,t)):f&&(Q(),g(f,1,1,()=>{f=null}),Y());const n={};_&1&&(n.style=i[0]),_&8&&(n.value=i[3]),l.$set(n)},i(i){s||(h(e.$$.fragment,i),h(f),h(l.$$.fragment,i),s=!0)},o(i){g(e.$$.fragment,i),g(f),g(l.$$.fragment,i),s=!1},d(i){H(e,i),i&&d(a),f&&f.d(i),i&&d(t),H(l,i)}}}function te(o){let e,a;return e=new F({props:{padding:!1,elem_id:o[1],visible:o[2],$$slots:{default:[ee]},$$scope:{ctx:o}}}),{c(){y(e.$$.fragment)},m(t,l){C(e,t,l),a=!0},p(t,[l]){const s={};l&2&&(s.elem_id=t[1]),l&4&&(s.visible=t[2]),l&633&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){a||(h(e.$$.fragment,t),a=!0)},o(t){g(e.$$.fragment,t),a=!1},d(t){H(e,t)}}}function le(o,e,a){let{elem_id:t=""}=e,{visible:l=!0}=e,{value:s=[]}=e,{style:r={}}=e,{label:c}=e,{show_label:f=!0}=e,{color_map:i={}}=e,{loading_status:_}=e;function m(n){Z.call(this,o,n)}return o.$$set=n=>{"elem_id"in n&&a(1,t=n.elem_id),"visible"in n&&a(2,l=n.visible),"value"in n&&a(3,s=n.value),"style"in n&&a(0,r=n.style),"label"in n&&a(4,c=n.label),"show_label"in n&&a(5,f=n.show_label),"color_map"in n&&a(7,i=n.color_map),"loading_status"in n&&a(6,_=n.loading_status)},o.$$.update=()=>{o.$$.dirty&129&&!r.color_map&&Object.keys(i).length&&a(0,r.color_map=i,r)},[r,t,l,s,c,f,_,i,m]}class ae extends M{constructor(e){super(),T(this,e,le,te,j,{elem_id:1,visible:2,value:3,style:0,label:4,show_label:5,color_map:7,loading_status:6})}}var re=ae;const ce=["static"];export{re as Component,ce as modes};
