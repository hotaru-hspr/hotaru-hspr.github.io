var ft=Object.defineProperty;var pt=(e,t,n)=>t in e?ft(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var K=(e,t,n)=>pt(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const v of a.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&r(v)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();function s(){}function lt(e){return e()}function nt(){return Object.create(null)}function T(e){e.forEach(lt)}function st(e){return typeof e=="function"}function A(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function dt(e){return Object.keys(e).length===0}function g(e,t){e.appendChild(t)}function _(e,t,n){e.insertBefore(t,n||null)}function m(e){e.parentNode&&e.parentNode.removeChild(e)}function p(e){return document.createElement(e)}function N(e){return document.createTextNode(e)}function F(){return N(" ")}function ct(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function d(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function gt(e){return Array.from(e.childNodes)}let Y;function O(e){Y=e}const j=[],rt=[];let E=[];const ot=[],mt=Promise.resolve();let z=!1;function ht(){z||(z=!0,mt.then(ut))}function J(e){E.push(e)}const V=new Set;let B=0;function ut(){if(B!==0)return;const e=Y;do{try{for(;B<j.length;){const t=j[B];B++,O(t),bt(t.$$)}}catch(t){throw j.length=0,B=0,t}for(O(null),j.length=0,B=0;rt.length;)rt.pop()();for(let t=0;t<E.length;t+=1){const n=E[t];V.has(n)||(V.add(n),n())}E.length=0}while(j.length);for(;ot.length;)ot.pop()();z=!1,V.clear(),O(e)}function bt(e){if(e.fragment!==null){e.update(),T(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(J)}}function _t(e){const t=[],n=[];E.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),E=t}const W=new Set;let $;function vt(){$={r:0,c:[],p:$}}function xt(){$.r||T($.c),$=$.p}function w(e,t){e&&e.i&&(W.delete(e),e.i(t))}function P(e,t,n,r){if(e&&e.o){if(W.has(e))return;W.add(e),$.c.push(()=>{W.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function G(e){e&&e.c()}function C(e,t,n){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),J(()=>{const a=e.$$.on_mount.map(lt).filter(st);e.$$.on_destroy?e.$$.on_destroy.push(...a):T(a),e.$$.on_mount=[]}),o.forEach(J)}function H(e,t){const n=e.$$;n.fragment!==null&&(_t(n.after_update),T(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function kt(e,t){e.$$.dirty[0]===-1&&(j.push(e),ht(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function M(e,t,n,r,o,a,v=null,Q=[-1]){const h=Y;O(e);const l=e.$$={fragment:null,ctx:[],props:a,update:s,not_equal:o,bound:nt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:nt(),dirty:Q,skip_bound:!1,root:t.target||h.$$.root};v&&v(l.root);let S=!1;if(l.ctx=n?n(e,t.props||{},(c,x,...L)=>{const b=L.length?L[0]:x;return l.ctx&&o(l.ctx[c],l.ctx[c]=b)&&(!l.skip_bound&&l.bound[c]&&l.bound[c](b),S&&kt(e,c)),x}):[],l.update(),S=!0,T(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const c=gt(t.target);l.fragment&&l.fragment.l(c),c.forEach(m)}else l.fragment&&l.fragment.c();t.intro&&w(e.$$.fragment),C(e,t.target,t.anchor),ut()}O(h)}class D{constructor(){K(this,"$$");K(this,"$$set")}$destroy(){H(this,1),this.$destroy=s}$on(t,n){if(!st(n))return s;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!dt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const yt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(yt);function $t(e){let t;return{c(){t=p("main"),t.innerHTML=`<p class="text-2xl p-4">Hello, I’m <span class="text-[#1B4965] font-bold">Prajesh</span>, going by
    hotaru <span class="text-sm">( ほたる )</span> online.</p> <p class="text-2xl p-4">I’m a developer, currently focused on Full Stack Development and picking up
    Game Development for something I’ve planned in the long run.</p> <p class="text-2xl p-4">With my love for art and design, combined with my lifelong interest in
    development, I love to identify problems and create solutions that are
    visually appealing, highly functional and accessible to people.</p> <p class="text-2xl p-4">I’m currently an undergrad student at Shiv Nadar University Chennai,
    pursuing my Bachelors in Artificial Intelligence and Data Science.</p>`,d(t,"class","w-1/2 mt-6 ml-8")},m(n,r){_(n,t,r)},p:s,i:s,o:s,d(n){n&&m(t)}}}class wt extends D{constructor(t){super(),M(this,t,null,$t,A,{})}}function It(e){let t;return{c(){t=p("main"),t.innerHTML=`<p class="text-2xl p-4">I’m a <span class="text-[#1B4965] font-bold">Full Stack Developer</span> and
    a proficient <span class="text-[#1B4965] font-bold">UI/UX designer</span>,
    focusing on balancing functionality, design, usability and aesthetics from
    the user’s perspective.</p> <p class="text-2xl p-4">I work primarily with Svelte and have used React and Next.js extensively in
    my other projects. I make UI mockups and concepts on Figma.</p> <p class="text-2xl p-4">I’ve worked with Python and FastAPI for backend, which I’m still exploring
    as part of my migration from Frontend to Full Stack Development.</p> <p class="text-2xl p-4">I’ve dabbled <span class="italic">(and still occasionally dabble)</span> in graphic
    design, animation and digital art over the years.</p> <p class="text-2xl p-4">I’m also learning Game Development (Unreal Engine &amp; Blender) for something
    I’ve planned in the long run, a magnum opus of sorts.</p>`,d(t,"class","w-1/2 mt-6 ml-8")},m(n,r){_(n,t,r)},p:s,i:s,o:s,d(n){n&&m(t)}}}class Bt extends D{constructor(t){super(),M(this,t,null,It,A,{})}}function jt(e){let t;return{c(){t=p("main"),t.innerHTML=`<div><div class="text-2xl p-4">Here are some of my
      <span class="text-[#1B4965] font-bold">Projects:</span></div> <div class="mt-8"><a class="group transition-all duration-400" href="https://github.com/hotaru-hspr/hotaru-hspr.github.io" target="_blank" rel="noopener noreferrer"><span class="text-2xl p-4 hover:text-[#1B4965] hover:font-bold bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-400 ease-out">[ This website <span class="italic">(duh)</span> ] - WIP</span></a></div> <div class="mt-12"><a class="group transition-all duration-400" href="https://github.com/hotaru-hspr/Starboard" target="_blank" rel="noopener noreferrer"><span class="text-2xl p-4 hover:text-[#1B4965] hover:font-bold bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-400 ease-out">[ Starboard (Private) ] - WIP</span></a></div> <div class="mt-12"><a class="group transition-all duration-400" href="https://github.com/Shivsrijit/PhiTector" target="_blank" rel="noopener noreferrer"><span class="text-2xl p-4 hover:text-[#1B4965] hover:font-bold bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-400 ease-out">[ PhiTector ]</span></a></div> <div class="mt-12"><a class="group transition-all duration-400" href="https://skibidigpt.vercel.app/" target="_blank" rel="noopener noreferrer"><span class="text-2xl p-4 hover:text-[#1B4965] hover:font-bold bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-400 ease-out">[ SkibidiGPT ]</span></a></div> <div class="mt-12"><a class="group transition-all duration-400" href="https://github.com/EditaCTF/Envithon-EcoQuests" target="_blank" rel="noopener noreferrer"><span class="text-2xl p-4 hover:text-[#1B4965] hover:font-bold bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-400 ease-out">[ EcoQuests ]</span></a></div></div>`,d(t,"class","flex w-1/2 mt-6 ml-8")},m(n,r){_(n,t,r)},p:s,i:s,o:s,d(n){n&&m(t)}}}class Et extends D{constructor(t){super(),M(this,t,null,jt,A,{})}}function Pt(e){let t;return{c(){t=p("main"),t.innerHTML='<p class="text-2xl p-4">I’m <span class="text-[#1B4965] font-bold">open to projects and internships</span>, and to reach out to me:</p> <div><div class="mt-8"><a class="group transition-all duration-400" href="https://linkedin.com/in/prajesh-raam" target="_blank" rel="noopener noreferrer"><span class="text-2xl ml-4 p-1 hover:text-[#1B4965] hover:font-bold bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-400 ease-out">[ LinkedIn ]</span></a></div> <div class="mt-12"><a class="group transition-all duration-400" href="mailto:stu.prajeshraam@gmail.com" target="_blank" rel="noopener noreferrer"><span class="text-2xl ml-4 p-1 hover:text-[#1B4965] hover:font-bold bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-400 ease-out">[ E-mail ]</span></a></div> <div class="mt-12"><a class="group transition-all duration-400" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer"><span class="text-2xl ml-4 p-1 hover:text-[#1B4965] hover:font-bold bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-400 ease-out">[ Resume ]</span></a></div></div>',d(t,"class","w-1/2 mt-6 ml-8")},m(n,r){_(n,t,r)},p:s,i:s,o:s,d(n){n&&m(t)}}}class St extends D{constructor(t){super(),M(this,t,null,Pt,A,{})}}function Lt(e){let t,n;return t=new St({}),{c(){G(t.$$.fragment)},m(r,o){C(t,r,o),n=!0},i(r){n||(w(t.$$.fragment,r),n=!0)},o(r){P(t.$$.fragment,r),n=!1},d(r){H(t,r)}}}function Ft(e){let t,n;return t=new Et({}),{c(){G(t.$$.fragment)},m(r,o){C(t,r,o),n=!0},i(r){n||(w(t.$$.fragment,r),n=!0)},o(r){P(t.$$.fragment,r),n=!1},d(r){H(t,r)}}}function Ot(e){let t,n;return t=new Bt({}),{c(){G(t.$$.fragment)},m(r,o){C(t,r,o),n=!0},i(r){n||(w(t.$$.fragment,r),n=!0)},o(r){P(t.$$.fragment,r),n=!1},d(r){H(t,r)}}}function Tt(e){let t,n;return t=new wt({}),{c(){G(t.$$.fragment)},m(r,o){C(t,r,o),n=!0},i(r){n||(w(t.$$.fragment,r),n=!0)},o(r){P(t.$$.fragment,r),n=!1},d(r){H(t,r)}}}function At(e){let t;return{c(){t=N("Reach out")},m(n,r){_(n,t,r)},d(n){n&&m(t)}}}function Nt(e){let t;return{c(){t=N("Projects")},m(n,r){_(n,t,r)},d(n){n&&m(t)}}}function Ct(e){let t;return{c(){t=N("Skills")},m(n,r){_(n,t,r)},d(n){n&&m(t)}}}function Ht(e){let t;return{c(){t=N("About me")},m(n,r){_(n,t,r)},d(n){n&&m(t)}}}function at(e){let t,n,r;return{c(){t=p("button"),d(t,"class","arrow up mt-3")},m(o,a){_(o,t,a),n||(r=ct(t,"click",e[1]),n=!0)},p:s,d(o){o&&m(t),n=!1,r()}}}function it(e){let t,n,r;return{c(){t=p("button"),d(t,"class","arrow down mt-2")},m(o,a){_(o,t,a),n||(r=ct(t,"click",e[2]),n=!0)},p:s,d(o){o&&m(t),n=!1,r()}}}function Mt(e){let t,n,r,o,a,v,Q,h,l,S,c,x,L,b,X,R;const Z=[Tt,Ot,Ft,Lt],y=[];function tt(i,I){return i[0]==1?0:i[0]==2?1:i[0]==3?2:3}n=tt(e),r=y[n]=Z[n](e);function et(i,I){return i[0]==1?Ht:i[0]==2?Ct:i[0]==3?Nt:At}let U=et(e),k=U(e),u=e[0]!=1&&at(e),f=e[0]!=4&&it(e);return{c(){t=p("div"),r.c(),o=F(),a=p("footer"),v=p("div"),Q=F(),h=p("div"),l=p("div"),l.innerHTML='<div><a class="group transition-all duration-150" href="https://github.com/hotaru-hspr" target="_blank" rel="noopener noreferrer"><span class="ml-8 p-1 hover:text-[#1B4965] hover:font-bold bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200 ease-out">GitHub</span></a></div> <div><a class="group transition-all duration-200" href="https://linkedin.com/in/prajesh-raam" target="_blank" rel="noopener noreferrer"><span class="ml-8 p-1 hover:text-[#1B4965] hover:font-bold bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200 ease-out">LinkedIn</span></a></div> <div><a class="group transition-all duration-200" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer"><span class="ml-8 p-1 hover:text-[#1B4965] hover:font-bold bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200 ease-out">Resume</span></a></div> <div><a class="group transition-all duration-200" href="mailto:stu.prajeshraam@gmail.com" target="_blank" rel="noopener noreferrer"><span class="ml-8 p-1 hover:text-[#1B4965] hover:font-bold bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200 ease-out">E-mail</span></a></div>',S=F(),c=p("div"),x=p("h1"),k.c(),L=F(),b=p("div"),u&&u.c(),X=F(),f&&f.c(),d(v,"class","bg-[#000000] h-0.5 m-8"),d(l,"class","flex"),d(x,"class","text-6xl my-4"),d(b,"class","ml-8 flex flex-col"),d(c,"class","ml-auto flex items-center justify-center mr-8"),d(h,"class","flex m-8 mb-10 items-center justify-center"),d(t,"class","bg-[#F4F4F4] flex flex-col min-h-screen justify-between")},m(i,I){_(i,t,I),y[n].m(t,null),g(t,o),g(t,a),g(a,v),g(a,Q),g(a,h),g(h,l),g(h,S),g(h,c),g(c,x),k.m(x,null),g(c,L),g(c,b),u&&u.m(b,null),g(b,X),f&&f.m(b,null),R=!0},p(i,[I]){let q=n;n=tt(i),n!==q&&(vt(),P(y[q],1,1,()=>{y[q]=null}),xt(),r=y[n],r||(r=y[n]=Z[n](i),r.c()),w(r,1),r.m(t,o)),U!==(U=et(i))&&(k.d(1),k=U(i),k&&(k.c(),k.m(x,null))),i[0]!=1?u?u.p(i,I):(u=at(i),u.c(),u.m(b,X)):u&&(u.d(1),u=null),i[0]!=4?f?f.p(i,I):(f=it(i),f.c(),f.m(b,null)):f&&(f.d(1),f=null)},i(i){R||(w(r),R=!0)},o(i){P(r),R=!1},d(i){i&&m(t),y[n].d(),k.d(),u&&u.d(),f&&f.d()}}}function Dt(e,t,n){let r=1;function o(){r>1&&n(0,r-=1)}function a(){r<4&&n(0,r+=1)}return[r,o,a]}class Qt extends D{constructor(t){super(),M(this,t,Dt,Mt,A,{})}}new Qt({target:document.getElementById("app")});
