import{S as m,i as b,s as g,H as p,N as h,c as v,m as T,K as k,j as u,k as f,o as q,E as C,p as E,u as S,q as j,r as w,J as D}from"./index.06d85743.js";import{T as H}from"./Tabs.56bc6ee6.js";import"./Column.87f48faf.js";import"./styles.ed3b21b5.js";function J(s){let e;const i=s[3].default,t=E(i,s,s[6],null);return{c(){t&&t.c()},m(n,_){t&&t.m(n,_),e=!0},p(n,_){t&&t.p&&(!e||_&64)&&S(t,i,n,n[6],e?w(i,n[6],_,null):j(n[6]),null)},i(n){e||(u(t,n),e=!0)},o(n){f(t,n),e=!1},d(n){t&&t.d(n)}}}function K(s){let e,i,t;function n(a){s[4](a)}let _={visible:s[1],elem_id:s[2],$$slots:{default:[J]},$$scope:{ctx:s}};return s[0]!==void 0&&(_.selected=s[0]),e=new H({props:_}),p.push(()=>h(e,"selected",n)),e.$on("change",s[5]),{c(){v(e.$$.fragment)},m(a,c){T(e,a,c),t=!0},p(a,[c]){const o={};c&2&&(o.visible=a[1]),c&4&&(o.elem_id=a[2]),c&64&&(o.$$scope={dirty:c,ctx:a}),!i&&c&1&&(i=!0,o.selected=a[0],k(()=>i=!1)),e.$set(o)},i(a){t||(u(e.$$.fragment,a),t=!0)},o(a){f(e.$$.fragment,a),t=!1},d(a){q(e,a)}}}function N(s,e,i){let{$$slots:t={},$$scope:n}=e;const _=C();let{visible:a=!0}=e,{elem_id:c=""}=e,{selected:o}=e;function r(l){o=l,i(0,o)}function d(l){D.call(this,s,l)}return s.$$set=l=>{"visible"in l&&i(1,a=l.visible),"elem_id"in l&&i(2,c=l.elem_id),"selected"in l&&i(0,o=l.selected),"$$scope"in l&&i(6,n=l.$$scope)},s.$$.update=()=>{s.$$.dirty&1&&_("prop_change",{selected:o})},[o,a,c,t,r,d,n]}class z extends m{constructor(e){super(),b(this,e,N,K,g,{visible:1,elem_id:2,selected:0})}}var I=z;const L=["static"];export{I as Component,L as modes};
