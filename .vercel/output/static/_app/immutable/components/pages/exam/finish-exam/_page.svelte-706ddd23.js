import{S as q,i as y,s as E,a as v,k as P,x as p,a8 as z,h as m,c as x,l as C,m as D,y as _,b as c,z as d,G as A,f as h,t as g,A as j,q as k,r as b}from"../../../../chunks/index-7bccd38b.js";import"../../../../chunks/Indicator.svelte_svelte_type_style_lang-3c3a1caf.js";import{A as G}from"../../../../chunks/A-27fa96dd.js";import{H as I}from"../../../../chunks/Heading-1d6903e1.js";import{P as H}from"../../../../chunks/P-6119d5a1.js";function U(i){let t;return{c(){t=k("Selamat!")},l(e){t=b(e,"Selamat!")},m(e,n){c(e,t,n)},d(e){e&&m(t)}}}function V(i){let t;return{c(){t=k("Anda telah menyelesaikan ujian ini")},l(e){t=b(e,"Anda telah menyelesaikan ujian ini")},m(e,n){c(e,t,n)},d(e){e&&m(t)}}}function B(i){let t;return{c(){t=k("hasil ujian")},l(e){t=b(e,"hasil ujian")},m(e,n){c(e,t,n)},d(e){e&&m(t)}}}function F(i){let t,e,n;return e=new G({props:{href:"/exam/result",$$slots:{default:[B]},$$scope:{ctx:i}}}),{c(){t=k("Hasil ujian akan diberitahukan di halaman "),p(e.$$.fragment)},l(s){t=b(s,"Hasil ujian akan diberitahukan di halaman "),_(e.$$.fragment,s)},m(s,l){c(s,t,l),d(e,s,l),n=!0},p(s,l){const f={};l&1&&(f.$$scope={dirty:l,ctx:s}),e.$set(f)},i(s){n||(h(e.$$.fragment,s),n=!0)},o(s){g(e.$$.fragment,s),n=!1},d(s){s&&m(t),j(e,s)}}}function J(i){let t,e,n,s,l,f,$,u;return n=new I({props:{tag:"h2",class:"mb-6",$$slots:{default:[U]},$$scope:{ctx:i}}}),l=new H({props:{class:"mb-6",$$slots:{default:[V]},$$scope:{ctx:i}}}),$=new H({props:{class:"mb-6",$$slots:{default:[F]},$$scope:{ctx:i}}}),{c(){t=v(),e=P("div"),p(n.$$.fragment),s=v(),p(l.$$.fragment),f=v(),p($.$$.fragment),this.h()},l(a){z("svelte-1y9qh5y",document.head).forEach(m),t=x(a),e=C(a,"DIV",{});var o=D(e);_(n.$$.fragment,o),s=x(o),_(l.$$.fragment,o),f=x(o),_($.$$.fragment,o),o.forEach(m),this.h()},h(){document.title="Selesai Ujian"},m(a,r){c(a,t,r),c(a,e,r),d(n,e,null),A(e,s),d(l,e,null),A(e,f),d($,e,null),u=!0},p(a,[r]){const o={};r&1&&(o.$$scope={dirty:r,ctx:a}),n.$set(o);const S={};r&1&&(S.$$scope={dirty:r,ctx:a}),l.$set(S);const w={};r&1&&(w.$$scope={dirty:r,ctx:a}),$.$set(w)},i(a){u||(h(n.$$.fragment,a),h(l.$$.fragment,a),h($.$$.fragment,a),u=!0)},o(a){g(n.$$.fragment,a),g(l.$$.fragment,a),g($.$$.fragment,a),u=!1},d(a){a&&m(t),a&&m(e),j(n),j(l),j($)}}}class Q extends q{constructor(t){super(),y(this,t,null,J,E,{})}}export{Q as default};
