import{d as a,r as s,U as e,b as l,e as t,w as i,f as u,g as n,t as o,x as d,i as c,j as r,F as v,l as p,v as m,A as f,k as g,_ as y}from"./index-be39c4e6.js";import{g as k}from"./index.03574bd1.js";import{a as _}from"./uni-app.es.b913e102.js";const x=y(a({__name:"project-oneDirection",setup(a){const y=s(1),x=s(null),h=s(null),j=s(0),T=s([]);return _((a=>{var s;s=a.id,e(s).then((a=>{var s,e;200==a.code&&(console.log(a.data),T.value=a.data,j.value=(null==(s=a.data)?void 0:s.length)>10?10:null==(e=a.data)?void 0:e.length,h.value=k(a.data),x.value=h.value.cardOptionsList)}))})),(a,s)=>{const e=p,_=g;return l(),t(e,{class:"box"},{default:i((()=>[u(e,{class:"identifying"},{default:i((()=>[h.value?(l(),t(e,{key:0,class:"identity-title"},{default:i((()=>[n(o(h.value.name),1)])),_:1})):d("",!0),x.value?(l(),t(e,{key:1,class:"identity-imgs"},{default:i((()=>[(l(!0),c(v,null,r(x.value,(a=>(l(),t(_,{onClick:s=>function(a){y.value<j.value?a.isRight?(uni.audioTipsSuccess.play(),m({title:"恭喜你,选对了~",mask:!0}),y.value++,h.value=k(T.value),x.value=h.value.cardOptionsList):(uni.audioTipsError.play(),m({title:"选错了,请重新选择",mask:!0,icon:"none"})):y.value==j.value&&(a.isRight?(uni.audioTipsSuccess.play(),m({title:"恭喜你,完成了~",mask:!0}),setTimeout((()=>{f({url:"/pages/game-pass/game-pass"})}),1e3)):(uni.audioTipsError.play(),m({title:"选错了,请重新选择",mask:!0,icon:"none"})))}(a),src:a.substance,key:a.id,mode:"aspectFit"},null,8,["onClick","src"])))),128))])),_:1})):d("",!0),u(e,{class:"identity-idx"},{default:i((()=>[n(" 第"+o(y.value)+"张,共"+o(j.value)+"张 ",1)])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-49896250"]]);export{x as default};
