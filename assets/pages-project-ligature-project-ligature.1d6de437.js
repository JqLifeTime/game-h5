import{d as e,a6 as a,r as l,o as t,J as u,a7 as s,R as n,b as i,i as o,f as v,w as r,h as c,z as d,F as h,j as g,g as f,v as p,A as x,l as w,a8 as y,p as m,e as T,_ as b}from"./index-be39c4e6.js";import{t as _}from"./index.03574bd1.js";import{a as X,b as Y}from"./uni-app.es.b913e102.js";const R=b(e({__name:"project-ligature",setup(e){let b=0,R=0,I=0,j=null,k=null;const S=16,A=a("ligature"),C=l({x:0,y:0}),E=l({x:0,y:0}),F=l(0),L=l(0),$=l(!1),z=l([]),G=l([]),J=l(0),N=l([]),O=l(!1);function P(){const e=N.value[L.value].cardOptionsList.map((e=>e.isRight));z.value=[],e.forEach((e=>{z.value.push({startX:j[e-1].left-S,startY:j[e-1].top-S,endX:j[e-1].left+j[e-1].width-S,endY:j[e-1].top+j[e-1].width-S,width:j[e-1].width})})),function(){$.value=!0,k&&clearInterval(k),A.clearRect(0,0,b,R);let e=0;k=setInterval((()=>{e<z.value.length?(G.value.push({x:z.value[e].startX+I/2,y:z.value[e].startY+I/2}),D("preview"),e+=1):(clearInterval(k),$.value=!1,A.clearRect(0,0,b,R),A.draw())}),800)}()}function W(e){if($.value)return;J.value=0;const a=e.touches[0];C.value.x=a.clientX-S,C.value.y=a.clientY-S;0==H(C.value)?(J.value++,G.value=[{x:z.value[0].startX+I/2,y:z.value[0].startY+I/2}]):(J.value=0,G.value=[])}X((e=>{var a;console.log(e),a=e.id,s(a).then((e=>{if(console.log(74,e),200==e.code){if(N.value=e.data,N.value.length){const e=parseInt(N.value[0].name.split("*")[0]);F.value=e*e,console.log(F.value)}n((()=>{u().selectAll(".ligature-box-item").boundingClientRect((e=>{I=e[0].width,j=e,P()})).exec()}))}}))})),t((()=>{u().select("#ligature-canvas").boundingClientRect((e=>{b=e.width,R=e.height})).exec()}));const q=_((function(e){if($.value)return;const a=e.touches[0];E.value.x=a.clientX-S,E.value.y=a.clientY-S,D(),function(){const e=H(E.value);if(e>0){J.value++;const a=z.value[e];G.value.push({x:a.startX+a.width/2,y:a.startY+a.width/2}),C.value.x=a.startX+a.width/2,C.value.y=a.startY+a.width/2}}()}),24);function B(){$.value||(J.value>=z.value.length-1?(J.value=0,uni.audioTipsSuccess.play(),O.value=!0):(p({title:"连的不对，再试试吧~",icon:"none"}),J.value=0,uni.audioTipsError.play()),G.value=[],A.clearRect(0,0,b,R),A.draw())}function D(e){if(A.setStrokeStyle("#FFAC02"),A.setLineWidth(6),A.clearRect(0,0,b,R),A.beginPath(),G.value.length>1){A.moveTo(G.value[0].x,G.value[0].y);for(let e=1;e<G.value.length;e++)A.lineTo(G.value[e].x,G.value[e].y);A.stroke()}e&&"preview"===e||(A.moveTo(C.value.x,C.value.y),A.lineTo(E.value.x,E.value.y),A.stroke()),A.draw()}function H(e){if(z.value&&z.value.length){const a=z.value.findIndex((a=>e.x>=a.startX&&e.x<=a.endX&&e.y>=a.startY&&e.y<=a.endY));return-1!==a&&a==J.value?a:0===a&&J.value===z.value.length-1?z.value.length-1:-1}return-1}function K(){L.value<N.value.length-1?(L.value+=1,P(),O.value=!1):(p({title:"恭喜您，已全部完成~"}),setTimeout((()=>{x({url:"/pages/game-pass/game-pass"})}),1e3))}return Y((()=>{k=null,clearInterval(k)})),(e,a)=>{const l=w,t=y,u=m("TipsSuccess");return i(),o(h,null,[v(l,{class:"box"},{default:r((()=>[v(l,{class:"ligature",onTouchstart:W,onTouchmove:c(q),onTouchend:B},{default:r((()=>[v(l,{class:d(["ligature-box",`grid${F.value}`])},{default:r((()=>[(i(!0),o(h,null,g(F.value,(e=>(i(),T(l,{class:"ligature-box-item",id:`box${e}`,key:e},{default:r((()=>[f("●")])),_:2},1032,["id"])))),128))])),_:1},8,["class"]),v(l,{class:"ligature-canvas-box"},{default:r((()=>[v(t,{"canvas-id":"ligature",id:"ligature-canvas",style:{width:"100%",height:"100%"}})])),_:1})])),_:1},8,["onTouchmove"])])),_:1}),v(l,{class:"tips"},{default:r((()=>[f(" 请按照提示画线顺序依次链接各个点 ")])),_:1}),v(u,{show:O.value,onNext:K},null,8,["show"])],64)}}}),[["__scopeId","data-v-24739766"]]);export{R as default};
