import{i as n,_ as a,o as l,c as i}from"./index.e5ae0a4f.js";const m=()=>{const t=o=>new Promise((e,r)=>{setTimeout(()=>{try{if(o)throw new Error("timeout");e("pass")}catch(c){console.error(c),r("timeout")}},1e3)}),s=new Promise((o,e)=>{setTimeout(()=>{e("timeout")},1100)});return{delayPromise:t,timeoutPromise:s}},u={setup(){const{delayPromise:t,timeoutPromise:s}=m();n(()=>{let o=t;console.log("---promise start : true---"),o(!0).then(e=>{console.log(e)}).catch(e=>{console.error(e)}),console.log("---promise start : false---"),o(!1).then(e=>{console.log(e)}).catch(e=>{console.error(e)}),Promise.race([s,o(!1)]).then(e=>{console.log("success",e)}).catch(e=>{console.error("error:timeout",e)})})}};function p(t,s,o,e,r,c){return l(),i("h1",null,"Test Page")}const h=a(u,[["render",p]]);export{h as default};
