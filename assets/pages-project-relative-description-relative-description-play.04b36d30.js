import{d as a,r as s,c as e,G as l,b as t,i,f as n,w as u,F as d,j as o,h as c,g as r,t as f,v as p,A as g,l as v,m as h,p as m,e as _,k as y,_ as k}from"./index-be39c4e6.js";import{n as x}from"./index.03574bd1.js";import{a as j}from"./uni-app.es.b913e102.js";const T=k(a({__name:"relative-description-play",setup(a){const k=s([]),T=s(0),b=e((()=>k.value.length&&k.value[T.value])),w=s(!1);function C(){w.value=!1,T.value<k.value.length-1?T.value+=1:(p({title:"恭喜您全部完成！",mask:!0}),setTimeout((()=>{g({url:"/pages/game-pass/game-pass"})}),1e3))}return j((a=>{var s;s=a.id,l(s).then((a=>{console.log(44,a),200==a.code&&(k.value=a.data)}))})),(a,s)=>{const e=y,l=v,g=h,j=m("TipsSuccess");return t(),i(d,null,[n(l,{class:"box"},{default:u((()=>[n(l,{class:"identifying"},{default:u((()=>[n(l,{class:"identifying-left"},{default:u((()=>[(t(!0),i(d,null,o(c(b).cardOptionsList,(a=>(t(),_(l,{class:"left-item",key:a.id,onClick:s=>function(a){1===a.isRight?(uni.audioTipsSuccess.play(),w.value=!0):(uni.audioTipsError.play(),p({title:"这个不对，再看看吧~",mask:!0,icon:"none"}))}(a)},{default:u((()=>[n(e,{src:a.substance,mode:"aspectFit"},null,8,["src"])])),_:2},1032,["onClick"])))),128))])),_:1}),n(l,{class:"identifying-right"},{default:u((()=>[n(l,{class:"identifying-right-h3"},{default:u((()=>[r(" 第"+f(c(x)(T.value+1))+"题 ",1)])),_:1}),n(l,{class:"identifying-right-h4"},{default:u((()=>[r(f(c(b).name),1)])),_:1}),n(l,{class:"identifying-right-h3"},{default:u((()=>[r(" 共"),n(g,null,{default:u((()=>[r(f(k.value&&k.value.length?k.value.length:0),1)])),_:1}),r("题 ")])),_:1})])),_:1})])),_:1})])),_:1}),n(j,{show:w.value,onNext:C},null,8,["show"])],64)}}}),[["__scopeId","data-v-062addfa"]]);export{T as default};
