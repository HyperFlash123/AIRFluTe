import{S as g,i as v,s as h,p as w,e as b,b as u,d as _,f as C,u as q,q as S,r as j,j as k,k as y,n as z}from"./index.06d85743.js";import{c as r}from"./styles.ed3b21b5.js";function A(i){let e,t,m,f;const o=i[7].default,a=w(o,i,i[6],null);return{c(){e=b("div"),a&&a.c(),u(e,"id",i[2]),u(e,"class",t="overflow-hidden flex flex-col relative col "+r(i[5])),u(e,"style",m=`min-width: min(${i[1]}px, 100%); flex-grow: ${i[0]}`),_(e,"gap-4",i[5].gap!==!1),_(e,"gr-compact",i[4]==="compact"),_(e,"gr-panel",i[4]==="panel"),_(e,"!hidden",!i[3])},m(l,s){C(l,e,s),a&&a.m(e,null),f=!0},p(l,[s]){a&&a.p&&(!f||s&64)&&q(a,o,l,l[6],f?j(o,l[6],s,null):S(l[6]),null),(!f||s&4)&&u(e,"id",l[2]),(!f||s&32&&t!==(t="overflow-hidden flex flex-col relative col "+r(l[5])))&&u(e,"class",t),(!f||s&3&&m!==(m=`min-width: min(${l[1]}px, 100%); flex-grow: ${l[0]}`))&&u(e,"style",m),s&32&&_(e,"gap-4",l[5].gap!==!1),s&48&&_(e,"gr-compact",l[4]==="compact"),s&48&&_(e,"gr-panel",l[4]==="panel"),s&40&&_(e,"!hidden",!l[3])},i(l){f||(k(a,l),f=!0)},o(l){y(a,l),f=!1},d(l){l&&z(e),a&&a.d(l)}}}function B(i,e,t){let{$$slots:m={},$$scope:f}=e,{scale:o=1}=e,{min_width:a=0}=e,{elem_id:l=""}=e,{visible:s=!0}=e,{variant:c="default"}=e,{style:d={}}=e;return i.$$set=n=>{"scale"in n&&t(0,o=n.scale),"min_width"in n&&t(1,a=n.min_width),"elem_id"in n&&t(2,l=n.elem_id),"visible"in n&&t(3,s=n.visible),"variant"in n&&t(4,c=n.variant),"style"in n&&t(5,d=n.style),"$$scope"in n&&t(6,f=n.$$scope)},[o,a,l,s,c,d,f,m]}class D extends g{constructor(e){super(),v(this,e,B,A,h,{scale:0,min_width:1,elem_id:2,visible:3,variant:4,style:5})}}var G=D;export{G as C};