import{f as a,_ as l,o as i,c as _,p as u,d as m,a as n,i as d,r as h,g as f,F as $}from"./index.ed5cc35c.js";const g=()=>{const o=t=>new Promise((e,c)=>{setTimeout(()=>{try{if(t)throw new Error("timeout");e("pass")}catch(r){console.error(r),c("timeout")}},1e3)}),s=new Promise((t,e)=>{setTimeout(()=>{e("timeout")},1100)});return{delayPromise:o,timeoutPromise:s}},P=a({});const k=o=>(u("data-v-e516bb96"),o=o(),m(),o),b={class:"skeleton"},v=k(()=>n("div",{class:"skeleton--card"},[n("h2",null,"title"),n("p",null,"content : skeleton UI")],-1)),w=[v];function x(o,s,t,e,c,r){return i(),_("section",b,w)}const y=l(P,[["render",x],["__scopeId","data-v-e516bb96"]]),I=a({components:{SkeletonUi:y},setup(){const{delayPromise:o,timeoutPromise:s}=g();d(()=>{let t=o;console.log("---promise start : true---"),t(!0).then(e=>{console.log(e)}).catch(e=>{console.error(e)}),console.log("---promise start : false---"),t(!1).then(e=>{console.log(e)}).catch(e=>{console.error(e)}),Promise.race([s,t(!1)]).then(e=>{console.log("success",e)}).catch(e=>{console.error("error:timeout",e)})})}}),S=n("h1",null,"Test Page",-1);function T(o,s,t,e,c,r){const p=h("skeleton-ui");return i(),_($,null,[S,f(p)],64)}const U=l(I,[["render",T]]);export{U as default};
