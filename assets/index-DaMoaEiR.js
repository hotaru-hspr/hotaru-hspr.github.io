var Ot=Object.defineProperty;var At=(e,t,n)=>t in e?Ot(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var dt=(e,t,n)=>At(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const k of l.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&r(k)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function m(){}function Ft(e){return e()}function Et(){return Object.create(null)}function q(e){e.forEach(Ft)}function Lt(e){return typeof e=="function"}function K(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Nt(e){return Object.keys(e).length===0}function f(e,t){e.appendChild(t)}function h(e,t,n){e.insertBefore(t,n||null)}function g(e){e.parentNode&&e.parentNode.removeChild(e)}function c(e){return document.createElement(e)}function $(e){return document.createTextNode(e)}function w(){return $(" ")}function C(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function s(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Rt(e){return Array.from(e.childNodes)}function d(e,t,n){e.classList.toggle(t,!!n)}let X;function G(e){X=e}function Ht(){if(!X)throw new Error("Function called outside component initialization");return X}function Tt(e){Ht().$$.on_mount.push(e)}const U=[],Pt=[];let z=[];const St=[],Mt=Promise.resolve();let gt=!1;function Qt(){gt||(gt=!0,Mt.then(Ct))}function bt(e){z.push(e)}const mt=new Set;let Q=0;function Ct(){if(Q!==0)return;const e=X;do{try{for(;Q<U.length;){const t=U[Q];Q++,G(t),Ut(t.$$)}}catch(t){throw U.length=0,Q=0,t}for(G(null),U.length=0,Q=0;Pt.length;)Pt.pop()();for(let t=0;t<z.length;t+=1){const n=z[t];mt.has(n)||(mt.add(n),n())}z.length=0}while(U.length);for(;St.length;)St.pop()();gt=!1,mt.clear(),G(e)}function Ut(e){if(e.fragment!==null){e.update(),q(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(bt)}}function zt(e){const t=[],n=[];z.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),z=t}const st=new Set;let A;function Dt(){A={r:0,c:[],p:A}}function Wt(){A.r||q(A.c),A=A.p}function N(e,t){e&&e.i&&(st.delete(e),e.i(t))}function D(e,t,n,r){if(e&&e.o){if(st.has(e))return;st.add(e),A.c.push(()=>{st.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function ut(e){e&&e.c()}function V(e,t,n){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),bt(()=>{const l=e.$$.on_mount.map(Ft).filter(Lt);e.$$.on_destroy?e.$$.on_destroy.push(...l):q(l),e.$$.on_mount=[]}),o.forEach(bt)}function J(e,t){const n=e.$$;n.fragment!==null&&(zt(n.after_update),q(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Gt(e,t){e.$$.dirty[0]===-1&&(U.push(e),Qt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Y(e,t,n,r,o,l,k=null,y=[-1]){const x=X;G(e);const a=e.$$={fragment:null,ctx:[],props:l,update:m,not_equal:o,bound:Et(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(x?x.$$.context:[])),callbacks:Et(),dirty:y,skip_bound:!1,root:t.target||x.$$.root};k&&k(a.root);let P=!1;if(a.ctx=n?n(e,t.props||{},(_,p,...u)=>{const b=u.length?u[0]:p;return a.ctx&&o(a.ctx[_],a.ctx[_]=b)&&(!a.skip_bound&&a.bound[_]&&a.bound[_](b),P&&Gt(e,_)),p}):[],a.update(),P=!0,q(a.before_update),a.fragment=r?r(a.ctx):!1,t.target){if(t.hydrate){const _=Rt(t.target);a.fragment&&a.fragment.l(_),_.forEach(g)}else a.fragment&&a.fragment.c();t.intro&&N(e.$$.fragment),V(e,t.target,t.anchor),Ct()}G(x)}class Z{constructor(){dt(this,"$$");dt(this,"$$set")}$destroy(){J(this,1),this.$destroy=m}$on(t,n){if(!Lt(n))return m;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!Nt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Xt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Xt);function qt(e){let t,n,r,o,l,k,y,x,a,P,_,p;return{c(){t=c("main"),n=c("div"),r=c("span"),o=$("Hello, I’m "),l=c("span"),l.textContent="Prajesh",k=$(`, an undergrad student at Shiv Nadar University Chennai, pursuing my\r
      Bachelors in Computer Science.`),y=w(),x=c("div"),a=c("span"),a.textContent=`I’m a developer, currently focused on Full Stack Development and picking\r
      up Game Development for something I’ve planned in the long run.`,P=w(),_=c("div"),p=c("span"),p.textContent=`With my love for art and design, combined with my lifelong interest in\r
      development, I love to identify problems and create solutions that are\r
      visually appealing, highly functional and accessible to people.`,s(l,"class","font-bold"),d(l,"text-[#1B4965]",e[0]),d(l,"text-pink-500",!e[0]),s(r,"class","text-2xl bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-no-repeat transition-all duration-1500 ease-out"),d(r,"bg-[length:0%_30px]",e[0]),d(r,"bg-[length:100%_30px]",!e[0]),d(r,"text-black",e[0]),d(r,"text-pink-500",!e[0]),s(n,"class","py-4 group transition-all duration-800"),s(a,"class","text-2xl bg-right-bottom bg-gradient-to-l from-pink-500 to-pink-500 bg-no-repeat transition-all duration-1500 ease-out"),d(a,"bg-[length:0%_30px]",e[1]),d(a,"bg-[length:100%_30px]",!e[1]),d(a,"text-black",e[1]),d(a,"text-pink-500",!e[1]),s(x,"class","py-4 group transition-all duration-800"),s(p,"class","text-2xl bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-no-repeat transition-all duration-1500 ease-out"),d(p,"bg-[length:0%_30px]",e[2]),d(p,"bg-[length:100%_30px]",!e[2]),d(p,"text-black",e[2]),d(p,"text-pink-500",!e[2]),s(_,"class","py-4 group transition-all duration-800"),s(t,"class","sm:w-1/2 w-full md:mt-8 ml-8 pr-8 transition-opacity duration-500 ease-in-out min-w-screen")},m(u,b){h(u,t,b),f(t,n),f(n,r),f(r,o),f(r,l),f(r,k),f(t,y),f(t,x),f(x,a),f(t,P),f(t,_),f(_,p)},p(u,[b]){b&1&&d(l,"text-[#1B4965]",u[0]),b&1&&d(l,"text-pink-500",!u[0]),b&1&&d(r,"bg-[length:0%_30px]",u[0]),b&1&&d(r,"bg-[length:100%_30px]",!u[0]),b&1&&d(r,"text-black",u[0]),b&1&&d(r,"text-pink-500",!u[0]),b&2&&d(a,"bg-[length:0%_30px]",u[1]),b&2&&d(a,"bg-[length:100%_30px]",!u[1]),b&2&&d(a,"text-black",u[1]),b&2&&d(a,"text-pink-500",!u[1]),b&4&&d(p,"bg-[length:0%_30px]",u[2]),b&4&&d(p,"bg-[length:100%_30px]",!u[2]),b&4&&d(p,"text-black",u[2]),b&4&&d(p,"text-pink-500",!u[2])},i:m,o:m,d(u){u&&g(t)}}}function Kt(e,t,n){let{status:r=!1}=t,o=!1,l=!1,k=!1;return r==!0?(o=!0,l=!0,k=!0):Tt(()=>{setTimeout(()=>{n(0,o=!0)},1e3),setTimeout(()=>{n(1,l=!0)},1400),setTimeout(()=>{n(2,k=!0)},1800)}),e.$$set=y=>{"status"in y&&n(3,r=y.status)},[o,l,k,r]}class Vt extends Z{constructor(t){super(),Y(this,t,Kt,qt,K,{status:3})}}function Jt(e){let t;return{c(){t=c("main"),t.innerHTML=`<span class="text-2xl">I’m a <span class="text-[#1B4965] font-bold">Full Stack Developer</span> and
    a proficient <span class="text-[#1B4965] font-bold">UI/UX designer</span>,
    focusing on balancing functionality, design, usability and aesthetics from
    the user’s perspective.
  </span><br/><br/> <span class="text-2xl">I work primarily with Svelte and have used React and Next.js extensively in
    my other projects. I make UI mockups and concepts on Figma.
  </span><br/><br/> <span class="text-2xl">I’ve worked with Python and FastAPI for backend, which I’m still exploring
    as part of my migration from Frontend to Full Stack Development.
  </span><br/><br/> <span class="text-2xl">I’ve dabbled <span class="italic">(and still occasionally dabble)</span> in graphic
    design, animation and digital art over the years.
  </span><br/><br/> <span class="text-2xl">I’m also learning Game Development (Unreal Engine &amp; Blender) for something
    I’ve planned in the long run, a magnum opus of sorts.</span>`,s(t,"class","sm:w-1/2 w-full md:mt-8 pr-8 mb-32 ml-8 transition-opacity duration-500 ease-in-out min-w-screen")},m(n,r){h(n,t,r)},p:m,i:m,o:m,d(n){n&&g(t)}}}class Yt extends Z{constructor(t){super(),Y(this,t,null,Jt,K,{})}}function Zt(e){let t;return{c(){t=c("main"),t.innerHTML=`<div><div class="text-2xl py-4">Here are some of my
      <span class="text-[#1B4965] font-bold">Projects:</span></div> <div class="mt-8"><a class="group transition-all duration-400" href="https://github.com/hotaru-hspr/hotaru-hspr.github.io" target="_blank" rel="noopener noreferrer"><span class="text-2xl py-4 hover:text-[#1B4965] hover:font-bold bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-400 ease-out">[ This website <span class="italic">(duh)</span> ] - WIP</span></a></div> <div class="mt-12"><a class="group transition-all duration-400" href="https://github.com/hotaru-hspr/Starboard" target="_blank" rel="noopener noreferrer"><span class="text-2xl py-4 hover:text-[#1B4965] hover:font-bold bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-400 ease-out">[ Starboard (Private) ] - WIP</span></a></div> <div class="mt-12"><a class="group transition-all duration-400" href="https://github.com/Shivsrijit/PhiTector" target="_blank" rel="noopener noreferrer"><span class="text-2xl py-4 hover:text-[#1B4965] hover:font-bold bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-400 ease-out">[ PhiTector ]</span></a></div> <div class="mt-12"><a class="group transition-all duration-400" href="https://skibidigpt.vercel.app/" target="_blank" rel="noopener noreferrer"><span class="text-2xl py-4 hover:text-[#1B4965] hover:font-bold bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-400 ease-out">[ SkibidiGPT ]</span></a></div> <div class="mt-12"><a class="group transition-all duration-400" href="https://github.com/EditaCTF/Envithon-EcoQuests" target="_blank" rel="noopener noreferrer"><span class="text-2xl py-4 hover:text-[#1B4965] hover:font-bold bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-400 ease-out">[ EcoQuests ]</span></a></div></div>`,s(t,"class","sm:w-1/2 w-full md:mt-8 ml-8 transition-opacity duration-500 ease-in-out min-w-screen")},m(n,r){h(n,t,r)},p:m,i:m,o:m,d(n){n&&g(t)}}}class te extends Z{constructor(t){super(),Y(this,t,null,Zt,K,{})}}function ee(e){let t;return{c(){t=c("main"),t.innerHTML='<span class="text-2xl py-4">I’m open to <span class="sm:hidden block"></span> <span class="text-[#1B4965] font-bold">projects and internships</span>,<br/> and to reach out to me:</span> <div><div class="mt-8"><a class="group transition-all duration-400" href="https://linkedin.com/in/prajesh-raam" target="_blank" rel="noopener noreferrer"><span class="text-2xl p-1 hover:text-[#1B4965] hover:font-bold bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-400 ease-out">[ LinkedIn ]</span></a></div> <div class="mt-12"><a class="group transition-all duration-400" href="mailto:stu.prajeshraam@gmail.com" target="_blank" rel="noopener noreferrer"><span class="text-2xl p-1 hover:text-[#1B4965] hover:font-bold bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-400 ease-out">[ E-mail ]</span></a></div> <div class="mt-12"><a class="group transition-all duration-400" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer"><span class="text-2xl p-1 hover:text-[#1B4965] hover:font-bold bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-400 ease-out">[ Resume ]</span></a></div></div>',s(t,"class","sm:w-1/2 w-full md:mt-8 ml-8 transition-opacity duration-500 ease-in-out min-w-screen")},m(n,r){h(n,t,r)},p:m,i:m,o:m,d(n){n&&g(t)}}}class ne extends Z{constructor(t){super(),Y(this,t,null,ee,K,{})}}function re(e){let t;return{c(){t=$("Reach out")},m(n,r){h(n,t,r)},d(n){n&&g(t)}}}function oe(e){let t;return{c(){t=$("Projects")},m(n,r){h(n,t,r)},d(n){n&&g(t)}}}function le(e){let t;return{c(){t=$("Skills")},m(n,r){h(n,t,r)},d(n){n&&g(t)}}}function ie(e){let t;return{c(){t=$("About me")},m(n,r){h(n,t,r)},d(n){n&&g(t)}}}function ae(e){let t,n,r;return{c(){t=c("button"),s(t,"class","arrow-left mt-1 transition border-black")},m(o,l){h(o,t,l),n||(r=C(t,"click",e[3]),n=!0)},p:m,d(o){o&&g(t),n=!1,r()}}}function se(e){let t,n,r;return{c(){t=c("button"),s(t,"class","arrow-left mt-1 border-gray-400 cursor-default")},m(o,l){h(o,t,l),n||(r=C(t,"click",e[3]),n=!0)},p:m,d(o){o&&g(t),n=!1,r()}}}function ue(e){let t,n,r;return{c(){t=c("button"),s(t,"class","arrow-right mt-1 transition border-black ml-4")},m(o,l){h(o,t,l),n||(r=C(t,"click",e[4]),n=!0)},p:m,d(o){o&&g(t),n=!1,r()}}}function ce(e){let t,n,r;return{c(){t=c("button"),s(t,"class","arrow-right mt-1 transition border-gray-400 cursor-default ml-4")},m(o,l){h(o,t,l),n||(r=C(t,"click",e[4]),n=!0)},p:m,d(o){o&&g(t),n=!1,r()}}}function fe(e){let t,n;return t=new ne({}),{c(){ut(t.$$.fragment)},m(r,o){V(t,r,o),n=!0},p:m,i(r){n||(N(t.$$.fragment,r),n=!0)},o(r){D(t.$$.fragment,r),n=!1},d(r){J(t,r)}}}function pe(e){let t,n;return t=new te({}),{c(){ut(t.$$.fragment)},m(r,o){V(t,r,o),n=!0},p:m,i(r){n||(N(t.$$.fragment,r),n=!0)},o(r){D(t.$$.fragment,r),n=!1},d(r){J(t,r)}}}function de(e){let t,n;return t=new Yt({}),{c(){ut(t.$$.fragment)},m(r,o){V(t,r,o),n=!0},p:m,i(r){n||(N(t.$$.fragment,r),n=!0)},o(r){D(t.$$.fragment,r),n=!1},d(r){J(t,r)}}}function me(e){let t,n;return t=new Vt({props:{status:e[0]}}),{c(){ut(t.$$.fragment)},m(r,o){V(t,r,o),n=!0},p(r,o){const l={};o&1&&(l.status=r[0]),t.$set(l)},i(r){n||(N(t.$$.fragment,r),n=!0)},o(r){D(t.$$.fragment,r),n=!1},d(r){J(t,r)}}}function ge(e){let t;return{c(){t=$("Reach out")},m(n,r){h(n,t,r)},d(n){n&&g(t)}}}function be(e){let t;return{c(){t=$("Projects")},m(n,r){h(n,t,r)},d(n){n&&g(t)}}}function he(e){let t;return{c(){t=$("Skills")},m(n,r){h(n,t,r)},d(n){n&&g(t)}}}function _e(e){let t;return{c(){t=$("About me")},m(n,r){h(n,t,r)},d(n){n&&g(t)}}}function ke(e){let t,n,r;return{c(){t=c("button"),s(t,"class","arrow-up mt-3 transition border-black")},m(o,l){h(o,t,l),n||(r=C(t,"click",e[3]),n=!0)},p:m,d(o){o&&g(t),n=!1,r()}}}function ve(e){let t,n,r;return{c(){t=c("button"),s(t,"class","arrow-up mt-3 border-gray-400 cursor-default")},m(o,l){h(o,t,l),n||(r=C(t,"click",e[3]),n=!0)},p:m,d(o){o&&g(t),n=!1,r()}}}function xe(e){let t,n,r;return{c(){t=c("button"),s(t,"class","arrow-down mt-2 transition border-black")},m(o,l){h(o,t,l),n||(r=C(t,"click",e[4]),n=!0)},p:m,d(o){o&&g(t),n=!1,r()}}}function ye(e){let t,n,r;return{c(){t=c("button"),s(t,"class","arrow-down mt-2 transition border-gray-400 cursor-default")},m(o,l){h(o,t,l),n||(r=C(t,"click",e[4]),n=!0)},p:m,d(o){o&&g(t),n=!1,r()}}}function we(e){let t,n,r,o,l,k,y,x,a,P,_,p,u,b,O,ct,ht,R,tt,_t,H,W,kt,S,ft,et,M;function vt(i,v){return i[2]==1?ie:i[2]==2?le:i[2]==3?oe:re}let nt=vt(e),F=nt(e);function xt(i,v){return i[2]==1?se:ae}let rt=xt(e),j=rt(e);function yt(i,v){return i[2]==4?ce:ue}let ot=yt(e),I=ot(e);const wt=[me,de,pe,fe],L=[];function $t(i,v){return i[2]==1?0:i[2]==2?1:i[2]==3?2:3}p=$t(e),u=L[p]=wt[p](e);function jt(i,v){return i[2]==1?_e:i[2]==2?he:i[2]==3?be:ge}let lt=jt(e),T=lt(e);function It(i,v){return i[2]==1?ve:ke}let it=It(e),B=it(e);function Bt(i,v){return i[2]==4?ye:xe}let at=Bt(e),E=at(e);return{c(){t=c("header"),n=c("div"),r=c("h1"),F.c(),o=w(),l=c("div"),j.c(),k=w(),I.c(),y=w(),x=c("div"),P=w(),_=c("div"),u.c(),b=w(),O=c("footer"),ct=c("div"),ht=w(),R=c("div"),tt=c("div"),tt.innerHTML='<div class="pr-8 sm:pr-8"><a class="group transition-all duration-150" href="https://github.com/hotaru-hspr" target="_blank" rel="noopener noreferrer"><span class="p-1 hover:text-[#1B4965] hover:font-bold bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200 ease-out">GitHub</span></a></div> <div class="pr-8 sm:pr-8"><a class="group transition-all duration-200" href="https://linkedin.com/in/prajesh-raam" target="_blank" rel="noopener noreferrer"><span class="p-1 hover:text-[#1B4965] hover:font-bold bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200 ease-out">LinkedIn</span></a></div> <div class="pr-8 sm:pr-8"><a class="group transition-all duration-200" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer"><span class="p-1 hover:text-[#1B4965] hover:font-bold bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200 ease-out">Resume</span></a></div> <div class="pr-8 sm:pr-8"><a class="group transition-all duration-200" href="mailto:stu.prajeshraam@gmail.com" target="_blank" rel="noopener noreferrer"><span class="p-1 hover:text-[#1B4965] hover:font-bold bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200 ease-out">E-mail</span></a></div>',_t=w(),H=c("div"),W=c("h1"),T.c(),kt=w(),S=c("div"),B.c(),ft=w(),E.c(),s(r,"class","text-2xl m-2"),s(l,"class","flex"),s(n,"class","flex items-center justify-between w-full px-4"),s(x,"class","w-full bg-black h-0.5 my-4 mx-2"),s(t,"class",a=`bg-[#f4f4f4] md:hidden flex flex-col my-4 sticky top-0 z-50 transition-opacity duration-700 ease-in-out ${e[1]?"opacity-100":"opacity-0 invisible"}`),s(ct,"class","bg-black h-0.5 m-2"),s(tt,"class","flex flex-wrap items-center justify-center sm:justify-start w-full sm:w-auto"),s(W,"class","text-3xl my-4"),s(S,"class","flex flex-col pl-8"),s(H,"class","hidden md:flex items-center ml-auto mr-16"),s(R,"class","flex flex-wrap items-center justify-center sm:justify-between w-full sm:m-2 sm:mb-4 m-4 mb-4 md:mt-6 md:mx-8"),s(O,"class",et=`bg-[#F4F4F4] fixed bottom-0 left-0 w-full z-50 md:px-8 md:py-2 transition-opacity duration-700 ease-in-out ${e[1]?"opacity-100":"opacity-0 invisible"}`),s(_,"class","bg-[#F4F4F4] flex flex-col h-full w-full justify-between items-center md:items-start md:pl-0")},m(i,v){h(i,t,v),f(t,n),f(n,r),F.m(r,null),f(n,o),f(n,l),j.m(l,null),f(l,k),I.m(l,null),f(t,y),f(t,x),h(i,P,v),h(i,_,v),L[p].m(_,null),f(_,b),f(_,O),f(O,ct),f(O,ht),f(O,R),f(R,tt),f(R,_t),f(R,H),f(H,W),T.m(W,null),f(H,kt),f(H,S),B.m(S,null),f(S,ft),E.m(S,null),M=!0},p(i,[v]){nt!==(nt=vt(i))&&(F.d(1),F=nt(i),F&&(F.c(),F.m(r,null))),rt===(rt=xt(i))&&j?j.p(i,v):(j.d(1),j=rt(i),j&&(j.c(),j.m(l,k))),ot===(ot=yt(i))&&I?I.p(i,v):(I.d(1),I=ot(i),I&&(I.c(),I.m(l,null))),(!M||v&2&&a!==(a=`bg-[#f4f4f4] md:hidden flex flex-col my-4 sticky top-0 z-50 transition-opacity duration-700 ease-in-out ${i[1]?"opacity-100":"opacity-0 invisible"}`))&&s(t,"class",a);let pt=p;p=$t(i),p===pt?L[p].p(i,v):(Dt(),D(L[pt],1,1,()=>{L[pt]=null}),Wt(),u=L[p],u?u.p(i,v):(u=L[p]=wt[p](i),u.c()),N(u,1),u.m(_,b)),lt!==(lt=jt(i))&&(T.d(1),T=lt(i),T&&(T.c(),T.m(W,null))),it===(it=It(i))&&B?B.p(i,v):(B.d(1),B=it(i),B&&(B.c(),B.m(S,ft))),at===(at=Bt(i))&&E?E.p(i,v):(E.d(1),E=at(i),E&&(E.c(),E.m(S,null))),(!M||v&2&&et!==(et=`bg-[#F4F4F4] fixed bottom-0 left-0 w-full z-50 md:px-8 md:py-2 transition-opacity duration-700 ease-in-out ${i[1]?"opacity-100":"opacity-0 invisible"}`))&&s(O,"class",et)},i(i){M||(N(u),M=!0)},o(i){D(u),M=!1},d(i){i&&(g(t),g(P),g(_)),F.d(),j.d(),I.d(),L[p].d(),T.d(),B.d(),E.d()}}}function $e(e,t,n){let r=!1,o=!1,l=1;function k(){l>1&&n(2,l-=1)}function y(){l<4&&n(2,l+=1)}return Tt(()=>{setTimeout(()=>{n(1,o=!0),n(0,r=!0)},2500)}),[r,o,l,k,y]}class je extends Z{constructor(t){super(),Y(this,t,$e,we,K,{})}}new je({target:document.getElementById("app")});
