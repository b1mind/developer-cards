function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let a;function c(t,n){return a||(a=document.createElement("a")),a.href=n,t===a.href}let l,s=!1;function u(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function f(t,n){if(s){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let e=0;e<n.length;e++){const o=n[e];void 0!==o.claim_order&&t.push(o)}n=t}const e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const t=n[l].claim_order,i=(r>0&&n[e[r]].claim_order<=t?r+1:u(1,r,(t=>n[e[t]].claim_order),t))-1;o[l]=e[i]+1;const a=i+1;e[a]=l,r=Math.max(a,r)}const i=[],a=[];let c=n.length-1;for(let l=e[r]+1;0!=l;l=o[l-1]){for(i.push(n[l-1]);c>=l;c--)a.push(n[c]);c--}for(;c>=0;c--)a.push(n[c]);i.reverse(),a.sort(((t,n)=>t.claim_order-n.claim_order));for(let l=0,s=0;l<a.length;l++){for(;s<i.length&&a[l].claim_order>=i[s].claim_order;)s++;const n=s<i.length?i[s]:null;t.insertBefore(a[l],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?void 0===n.claim_order&&n.parentNode===t||t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else n.parentNode===t&&null===n.nextSibling||t.appendChild(n)}function d(t,n,e){s&&!e?f(t,n):n.parentNode===t&&n.nextSibling==e||t.insertBefore(n,e||null)}function h(t){t.parentNode.removeChild(t)}function _(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function m(t){return document.createElement(t)}function p(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function g(t){return document.createTextNode(t)}function $(){return g(" ")}function x(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function b(t){return Array.from(t.childNodes)}function y(t,n,e,o,r=!1){!function(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}(t);const i=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r||(t.claim_info.last_index=o),i}}for(let o=t.claim_info.last_index-1;o>=0;o--){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r?void 0===n&&t.claim_info.last_index--:t.claim_info.last_index=o,i}}return o()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function v(t,n,e,o){return y(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o?p(n):m(n)))}function w(t,n){return y(t,(t=>3===t.nodeType),(t=>{const e=""+n;if(t.data.startsWith(e)){if(t.data.length!==e.length)return t.splitText(e.length)}else t.data=e}),(()=>g(n)),!0)}function E(t){return w(t," ")}function N(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function k(t){l=t}const A=[],S=[],j=[],T=[],B=Promise.resolve();let C=!1;function O(t){j.push(t)}let q=!1;const I=new Set;function M(){if(!q){q=!0;do{for(let t=0;t<A.length;t+=1){const n=A[t];k(n),z(n.$$)}for(k(null),A.length=0;S.length;)S.pop()();for(let t=0;t<j.length;t+=1){const n=j[t];I.has(n)||(I.add(n),n())}j.length=0}while(A.length);for(;T.length;)T.pop()();C=!1,q=!1,I.clear()}}function z(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}const D=new Set;let H;function P(){H={r:0,c:[],p:H}}function W(){H.r||o(H.c),H=H.p}function F(t,n){t&&t.i&&(D.delete(t),t.i(n))}function G(t,n,e,o){if(t&&t.o){if(D.has(t))return;D.add(t),H.c.push((()=>{D.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function J(t){t&&t.c()}function K(t,n){t&&t.l(n)}function L(t,e,i,a){const{fragment:c,on_mount:l,on_destroy:s,after_update:u}=t.$$;c&&c.m(e,i),a||O((()=>{const e=l.map(n).filter(r);s?s.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(O)}function Q(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function R(t,n){-1===t.$$.dirty[0]&&(A.push(t),C||(C=!0,B.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function U(n,r,i,a,c,u,f,d=[-1]){const _=l;k(n);const m=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(_?_.$$.context:r.context||[]),callbacks:e(),dirty:d,skip_bound:!1,root:r.target||_.$$.root};f&&f(m.root);let p=!1;if(m.ctx=i?i(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return m.ctx&&c(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),p&&R(n,t)),e})):[],m.update(),p=!0,o(m.before_update),m.fragment=!!a&&a(m.ctx),r.target){if(r.hydrate){s=!0;const t=b(r.target);m.fragment&&m.fragment.l(t),t.forEach(h)}else m.fragment&&m.fragment.c();r.intro&&F(n.$$.fragment),L(n,r.target,r.anchor,r.customElement),s=!1,M()}k(_)}class V{$destroy(){Q(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{V as S,p as a,$ as b,v as c,b as d,h as e,E as f,x as g,d as h,U as i,f as j,m as k,w as l,N as m,t as n,J as o,K as p,c as q,L as r,i as s,g as t,F as u,G as v,_ as w,Q as x,W as y,P as z};
