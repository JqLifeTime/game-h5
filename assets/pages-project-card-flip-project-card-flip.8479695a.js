import{d as e,r as a,c as l,ab as u,R as s,b as t,i as n,f as i,w as r,g as c,t as d,e as v,x as o,h as f,F as p,j as m,v as _,A as h,l as k,m as g,p as y,z as b,k as w,_ as C}from"./index-be39c4e6.js";import{a as x,b as T}from"./uni-app.es.b913e102.js";import{s as E}from"./index.03574bd1.js";const I=C(e({__name:"project-card-flip",setup(e){let C=null;const I=a([]),j=a(0),D=a(!1),F=a("error"),M=a([]),N=l((()=>I.value[j.value])),O=a([]),R=a(0),S=a(0),z=a([]),A=a(!1),G=a(!1),L=a("00 : 03 : 00"),q=a(180),B=a(!1);function H(){G.value=!0,function(){if(A.value=!1,N.value){let e=[];for(let u=0;u<12;u++)e.push({isChecked:!1});const a=N.value.cardOptionsList[0];a.isChecked=!1;const l=[1,2].includes(S.value)?E(N.value.name.split("")):[];if(function(e){if(e>11)return void console.error("不能生成超过11个的数字");let a=[];for(;a.length<e;){const e=Math.floor(11*Math.random());console.log("randomNum",e),a.includes(e)||a.push(e)}return a}(1*a.isRight).forEach((l=>{e[l]={...a}})),[1,2].includes(S.value)){let a=0;e.forEach((e=>{e.id&&(e.word=[1,2].includes(S.value)?l[a]:null,a+=1)}))}M.value=e.filter((e=>e.id)),O.value=e,console.log("currentDoOptions",O.value),O.value.forEach((e=>{e.id&&(e.isChecked=!0)})),setTimeout((()=>{G.value=!1,setTimeout((()=>{A.value=!0,O.value.forEach((e=>{e.isChecked=!1})),3===S.value&&(L.value="00 : 03 : 00",q.value=180,clearInterval(C),C=setInterval((()=>{if(!B.value)if(q.value>0){q.value-=1;const e=parseInt(""+q.value/3600),a=parseInt(""+q.value/60%60),l=parseInt(""+q.value%60);let u=K(e)+" : "+K(a)+" : "+K(l);L.value=u}else J(),D.value=!0,F.value="error",uni.audioTipsError.play()}),1e3/60))}),2500)}),2500)}}()}function J(){clearInterval(C),C=null}function K(e){return e<10?"0"+e:""+e}function P(){j.value<I.value.length-1?(M.value=[],z.value=[],L.value="00 : 03 : 00",R.value=0,j.value+=1,D.value=!1,H()):(_({title:"已完成所有训练~",mask:!0}),setTimeout((()=>{h({url:"/pages/game-pass/game-pass"})}),1e3))}function Q(){L.value="00 : 03 : 00",D.value=!1,R.value=0,z.value=[],H()}return x((e=>{var a;e.name&&("闯关模式"===e.name?S.value=0:"单词模式"===e.name?S.value=1:"成语古诗"===e.name?S.value=2:"限时模式"===e.name&&(S.value=3)),a=e.id,u(a).then((e=>{200==e.code&&(I.value=e.data,s((()=>{H()})))}))})),T((()=>{B.value=!0,J()})),(e,a)=>{const l=k,u=g,s=w,_=y("TipsDesign");return t(),n(p,null,[i(l,{class:"card"},{default:r((()=>[i(l,{class:"card-title"},{default:r((()=>[i(l,{class:"card-title-item"},{default:r((()=>[c(" 完成进度： "+d(R.value)+"/"+d(M.value.length),1)])),_:1}),i(l,{class:"card-title-item"},{default:r((()=>[c(" 第 "+d(j.value+1)+" 题 ",1)])),_:1})])),_:1}),3===S.value?(t(),v(l,{key:0,class:"limited-time"},{default:r((()=>[c(" 限时："),i(u,null,{default:r((()=>[c(d(L.value),1)])),_:1})])),_:1})):o("",!0),i(l,{class:"card-center"},{default:r((()=>[f(N)?(t(),v(l,{key:0,class:"card-center-title"},{default:r((()=>[0===S.value?(t(),v(l,{key:0},{default:r((()=>[c("目标: "+d(f(N).name),1)])),_:1})):o("",!0),1===S.value?(t(),v(l,{key:1},{default:r((()=>[c("按单词 "),i(u,null,{default:r((()=>[c("【"+d(f(N).name)+"】",1)])),_:1}),c(" 顺序，抓到逃跑的 "),i(u,null,{default:r((()=>[c(d(M.value.length),1)])),_:1}),c(" 个小偷")])),_:1})):o("",!0),2===S.value?(t(),v(l,{key:2},{default:r((()=>[c("按文字 "),i(u,null,{default:r((()=>[c("【"+d(f(N).name)+"】",1)])),_:1}),c(" 顺序，抓到逃跑的 "),i(u,null,{default:r((()=>[c(d(M.value.length),1)])),_:1}),c(" 个小偷")])),_:1})):o("",!0),3===S.value?(t(),v(l,{key:3},{default:r((()=>[c("目标：请在3秒内抓到所有逃跑的小偷")])),_:1})):o("",!0)])),_:1})):o("",!0),i(l,{class:"card-center-box"},{default:r((()=>[(t(!0),n(p,null,m(O.value,((e,a)=>(t(),v(l,{class:b(["box-item",e.isChecked?"trans-flip-in":"trans-flip-out"]),key:a,onClick:a=>function(e){if(A.value)if(e.isChecked=!0,e.id){-1==z.value.findIndex((a=>a.word==e.word))&&z.value.push(e);const a=M.value.filter((e=>e.isChecked));if(R.value=a.length,[1,2].includes(S.value)){const e=z.value.map((e=>e.word)),a=N.value.name.split("");let l=0;for(let u=0;u<e.length;u++){if(e[u]!=a[u])return D.value=!0,F.value="error",void uni.audioTipsError.play();l+=1}l===a.length&&(uni.audioTipsSuccess.play(),D.value=!0,F.value="success")}else R.value===M.value.length&&(3===S.value&&J(),uni.audioTipsSuccess.play(),D.value=!0,F.value="success")}else D.value=!0,F.value="error",uni.audioTipsError.play()}(e)},{default:r((()=>[i(l,{class:"img-front"},{default:r((()=>[e.word?(t(),v(l,{key:0},{default:r((()=>[c(d(e.word),1)])),_:2},1024)):o("",!0),i(s,{src:e.substance?e.substance:"/static/index/flip_error.png",mode:"aspectFit"},null,8,["src"])])),_:2},1024),i(l,{class:"img-back"})])),_:2},1032,["class","onClick"])))),128))])),_:1})])),_:1}),i(l,{class:"card-btm",onClick:H},{default:r((()=>[c(" 重置关卡 ")])),_:1})])),_:1}),G.value?(t(),v(l,{key:0,class:"count-down"},{default:r((()=>[i(l,{class:"count-down-center"},{default:r((()=>[0===S.value?(t(),v(l,{key:0},{default:r((()=>[c("目标: "+d(f(N).name),1)])),_:1})):o("",!0),1===S.value?(t(),v(l,{key:1},{default:r((()=>[c("字母为"),i(u,null,{default:r((()=>[c("【"+d(f(N).name)+"】",1)])),_:1}),c("的袋子被小偷偷走了，请按字母顺序找到小偷吧")])),_:1})):o("",!0),2===S.value?(t(),v(l,{key:2},{default:r((()=>[c("文字为"),i(u,null,{default:r((()=>[c("【"+d(f(N).name)+"】",1)])),_:1}),c("的袋子被小偷偷走了，请按字母顺序找到小偷吧")])),_:1})):o("",!0),3===S.value?(t(),v(l,{key:3},{default:r((()=>[c("目标：请在3秒内抓到所有逃跑的小偷")])),_:1})):o("",!0)])),_:1})])),_:1})):o("",!0),i(_,{type:F.value,show:D.value,onNext:P},{default:r((()=>[i(l,{class:"cardtips"},{default:r((()=>[i(l,{class:"cardtips-btn",onClick:Q},{default:r((()=>[c(" 再来一次 ")])),_:1})])),_:1})])),_:1},8,["type","show"])],64)}}}),[["__scopeId","data-v-dac0b2bd"]]);export{I as default};
