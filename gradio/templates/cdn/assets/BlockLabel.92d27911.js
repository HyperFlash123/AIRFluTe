import{S as g,i as m,s as _,e as u,c as h,a as y,t as w,b as f,d as c,f as x,g as d,m as p,h as k,j as I,k as v,n as z,o as B}from"./index.ca80e38e.js";import{g as S}from"./styles.ed3b21b5.js";function j(a){let t,n,s,b,o,r,l;return s=new a[1]({}),{c(){t=u("div"),n=u("span"),h(s.$$.fragment),b=y(),o=w(a[0]),f(n,"class","mr-2 h-[12px] w-[12px] opacity-80"),f(t,"class",r="absolute left-0 top-0 py-1 px-2 rounded-br-lg shadow-sm text-xs text-gray-500 flex items-center pointer-events-none bg-white z-20 border-b border-r border-gray-100 dark:bg-gray-900 "+a[3]),c(t,"h-0",!a[2]),c(t,"sr-only",!a[2])},m(e,i){x(e,t,i),d(t,n),p(s,n,null),d(t,b),d(t,o),l=!0},p(e,[i]){(!l||i&1)&&k(o,e[0]),(!l||i&8&&r!==(r="absolute left-0 top-0 py-1 px-2 rounded-br-lg shadow-sm text-xs text-gray-500 flex items-center pointer-events-none bg-white z-20 border-b border-r border-gray-100 dark:bg-gray-900 "+e[3]))&&f(t,"class",r),i&12&&c(t,"h-0",!e[2]),i&12&&c(t,"sr-only",!e[2])},i(e){l||(I(s.$$.fragment,e),l=!0)},o(e){v(s.$$.fragment,e),l=!1},d(e){e&&z(t),B(s)}}}function q(a,t,n){let s,{label:b=null}=t,{Icon:o}=t,{show_label:r=!0}=t,{disable:l=!1}=t;return a.$$set=e=>{"label"in e&&n(0,b=e.label),"Icon"in e&&n(1,o=e.Icon),"show_label"in e&&n(2,r=e.show_label),"disable"in e&&n(4,l=e.disable)},a.$$.update=()=>{a.$$.dirty&16&&n(3,{classes:s}=S({label_container:!l},["label_container"]),s)},[b,o,r,s,l]}class A extends g{constructor(t){super(),m(this,t,q,j,_,{label:0,Icon:1,show_label:2,disable:4})}}export{A as B};
