import{d as e,r as a,A as s,b as t,e as o,w as l,p as n,q as c,F as i,f as d,m as r,s as u,v as f,g as h,t as p,B as v,i as g,x as m,_ as k}from"./index-62c93e24.js";import{_}from"./topic_active.201d76ca.js";import{a as j}from"./uni-app.es.ba5b2566.js";const y=k(e({__name:"project-goods",setup(e){const k=a([]);function y(){var e;if(k.value.length){const a=null==(e=k.value.filter((e=>e.checked)))?void 0:e.map((e=>e.id));if(a&&a.length){if(a.length<2)return void u({title:"请至少选择两个题目~",icon:"none"});if(a.length>2)return void u({title:"最多选择两个题目~",icon:"none"});f({url:`/pages/project-goods/project-goods-play?ids=${JSON.stringify(a)}`})}}}return j((e=>{var a;a=e.id,s(a).then((e=>{var a;console.log(e),200===e.code&&((null==(a=null==e?void 0:e.data)?void 0:a.length)&&e.data.forEach((e=>{e.checked=!1})),k.value=e.data)}))})),(e,a)=>{const s=g,f=m,j=h;return t(),o(j,{class:"items"},{default:l((()=>[(t(!0),n(i,null,c(k.value,(e=>(t(),o(j,{class:"items-list",key:e.id,onClick:a=>function(e){const a=k.value.filter((e=>e.checked));e.checked?e.checked=!1:a.length<2?e.checked=!0:u({title:"最多选择两项~",icon:"none"})}(e)},{default:l((()=>[d(s,{src:e.icon,mode:""},null,8,["src"]),d(f,null,{default:l((()=>[r(p(e.name),1)])),_:2},1024),e.checked?(t(),o(j,{key:0,class:"list-active"},{default:l((()=>[d(s,{src:_,mode:""})])),_:1})):v("",!0)])),_:2},1032,["onClick"])))),128)),d(j,{style:{height:"230rpx"}}),d(j,{class:"footer-btn",onClick:y},{default:l((()=>[r(" 开始训练 ")])),_:1})])),_:1})}}}),[["__scopeId","data-v-5569dd06"]]);export{y as default};
