import{_ as a,r as e,P as l,o as A,T as t,$ as u,b as s,e as i,w as o,f as n,C as d,D as r,x as c,R as g,V as v,W as m,l as p,k as B,d as Q,X as E,g as F,t as f,v as U,m as h,Y as y}from"./index-be39c4e6.js";import{a as C,b as D}from"./uni-app.es.b913e102.js";const k=a({__name:"free-audio",props:{url:String,activeColor:{type:String,default:"#FFFFFF"},startPic:String,endPic:String,audioId:[String,Number]},setup(a){const Q=a;let E=null;const F=e(0),f=e(0),U=e(!1);function h(a){let e=E.paused;E.pause(),E.seek(a.detail.value),e||E.play()}return l(Q.audioId,((a,e)=>{F.value=0}),{immediate:!0}),l(Q.url,((a,e)=>{a&&g((()=>{E.src=a}))}),{immediate:!0}),A((()=>{E=t(),E.autoplay=!1,E.src=Q.url,E.onTimeUpdate((()=>{console.log("onTimeUpdate"),Number.isFinite(E.duration)?(f.value=E.duration,F.value=E.currentTime):(f.value=E.currentTime+10,F.value=E.currentTime)})),E.onCanplay((()=>{console.log("onCanplay"),console.log(E.duration),setTimeout((()=>{f.value=E.duration}),1e3)})),E.onEnded((()=>{console.log("onEnded"),U.value=!1,F.value=0})),F.value=0,u("audioStop",(a=>{a&&a!=Q.audioId.value?(E.stop(),U.value=!1):a||(E.stop(),U.value=!1)}))})),(a,e)=>{const l=m,A=p,t=B;return Q.url?(s(),i(A,{key:0,class:"audio-box flex justify-between align-center"},{default:o((()=>[n(A,{class:"slider"},{default:o((()=>[n(l,{onChange:h,activeColor:Q.activeColor,"block-size":"4",min:0,max:f.value.toFixed(0),value:F.value.toFixed(0),step:.1},null,8,["activeColor","max","value","step"])])),_:1}),n(A,{onClick:e[0]||(e[0]=a=>{return e=Q.audioId,void(U.value?(E.pause(),U.value=!U.value):(v("audioStop",e),E.play(),U.value=!U.value));var e})},{default:o((()=>[d(n(t,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAztJREFUeF7tm41t3DAMhc1NmknaTNJmkiSTNJmkySTNJsw9QAIUnyVSFCXLORs44HDnH/HTIynKEi03ftCN27+cAE4F3DiB0wVGCYCZfy3L8jM878eyLPGDnz7CB9/f8Z2I3ka0rZsCmBkG/g6G/jEYAyiA8E5EL4brVZe4A0gMf1K1QHdShPFMRPjudrgB6GT42lAY/0JEz14EXAAw8+OlQZ49LtnnBqIZADP/u/gqAtwex1OrGswAguT/7mh8BA413FtjgwlAMP7/Hl2eeaYZQjWACY1vUoIFwJ4+L4kOA6g76aT0/yoAOwc8rV1Ikw/ak9UAdkh1Whu2zlNnhxoA3NKiwdeqXUEFgJmR7izj+cF2f3mcyhVEABNHfQkuUuODVFVqAByx9yMcUQUaAEfy/aviSUqLRQDMDL+HAjwO1PaQ5MfgYTSGydnJFQmAp/yvGhIAo5LE5Emv442I7nM3lwC4yf9StW0+a8A8QjElZgE4y1/MywEEhtk91JB1g2kAQKId1ZAdGZYAePq/qIDURzsEyWMBiDAc649sICwpwLPsrVLASg2YbkNbWg4TAMz4eAWkFgBoQ+vsU/b5JQVMASAEx9Z0bAIwiwt4BGOTC3g8OPpttQs4Z4JsUVRyAc+XHVUAHKO/WBVOBaDjaBBF2OYL1hIAj/SjdoEOvZ6mTRMAj/QjAgjrBhBvvFLu1XghV4jhRKka9MwEXwqSjuP+NYDirJAEwNUNLsDxWhuTE1g4Meptclb+GgV4ukHLULbl2rvSi1PNnKDneKDFEMu1LpOiR1ZBsfdFF0jK0iOqQOz9GgCHU0Ep9aW+JMaARAWeU+QWf665xv/laChLPeuDGoNqzi1Og69vpFZAAABXmGFdUA5IlfHqGJA+rWPBUtPLW+dWVZzxBlUKSOIBlNBrDt8CQvUmeOvGJgCJO8wAoVr2piywRW9gQePm801BMNeKzrX8pr97rRk2u8C6VQPVoM7xmmDiBmAVIHuUuyifX61LYnMw3AGsQMRdIpYFVnEXCYKc2/L4LjFAklpwj7hFZr1tBpdHY+NmCOwSOfaWGQnKLP93c4FZDJTacQKQCH33/08FfPceluz7BKU7b1DGto3PAAAAAElFTkSuQmCC",class:"icon"},null,512),[[r,!U.value]]),d(n(t,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAw9JREFUeF7tm41t3DAMhc1JkkySZJI2kySZpJdJmkySdhLWD7AKnSOJNMWzlJMNHHC4kyzz0yOpP9M0+EWD2z8dAA4FDE7gcIG9BMDMD9M03S/t3U7TFD746c/ywfcPfCei9z2e7WIKYGYY+GMx9KfBGEABhA8iOhnqq6q4A4gMf1E9ga5QgPFKRPjudrkBuJDha0Nh/ImIXr0IuABg5uf5gTx7XLLPDUQ1AGb+PfsqAlyL66VWDWYAi+R/NTQ+AIcaHq2xwQRgMf6zRZdn2jRD2AygQ+OrlGAB0NLnJdFhAHUnFYr/3wSgccDT2oU0+aQtrAbQINVpbUiVU2eHLQC45ol2rqt2BRUAZka6s4znd7b7rDmVK4gAOo76ElykxidpVqkB8B17P8ARVaABUOv7qdkbpsqpic76t1Q5qefj/8VYUATAzPB7KKDmggzP5vNzRklBxXD2/yKIo+ud3XdtiATAQ/6tAbwT0WOuByUAtfJHu60BFN0gC8BJ/j0AwDNk3WAUANmRYQmAh//3ooDhAWQDYUkBXtPe1kEQKjQBwIpP7UCkFxfIZoKSAoYHMLwLXFMWyE6KSi7gtdnRQxAcHsCXTghzg5ICsNuDOFB79aAAEwCkQI/Nj+YA5u2zbEdLs0GPTNAaQHFVSALg4QatAWTlD9+WAHi4QWsAd6WNU82aYO14AMthOPcTX6llNpwv+BsVupm/1545cFkU9VBBbSax1i/2vugCodWhN0YAwXGF1tqTm+uVUl98MzEGRCrwWCLfbIixgv/m6KIEr/mB0S5VteIy+PoOagVErtDDuaAciU3Gq4Ng3NoSDzBC9FgtUnWpspC4DZa6zyYFRPEAxvcEQbUT7AYgcoceIGyWvSkLpOjtdDy25AFVxptiQAbE3tmhn6Oyq7iA4/G143cp5qlzvHQjNwUkssQlQADsm/VIbA6GKQtoyC7xIbwlYjlgFd4igZ+7HY+vGghpDC8Ey/CKzPq1GVQJxobjNHhL5Hu/MmOFtXe9i7nA3oZY2zsAWMldS71DAdfSk1Y7/gEjo9tQO1Q8WAAAAABJRU5ErkJggg==",class:"icon"},null,512),[[r,U.value]])])),_:1})])),_:1})):c("",!0)}}},[["__scopeId","data-v-bc75dc29"]]),I=a(Q({__name:"project-hearingTrainingDetail",setup(a){const l=e(null),A=e(null),t=e(null);function u(){t.value==A.value.isRight?U({title:"恭喜你,答对了~",mask:!0}):U({title:"很遗憾,答错了",mask:!0,icon:"none"})}return e(""),C((a=>{var e;e=a.id,E(e).then((a=>{console.log(a.data),l.value=a.data,A.value=a.data.cardOptionsList[0]}))})),D((()=>{v("audioStop",`audio${l.value.id}`)})),(a,e)=>{const d=p,r=h,g=y;return s(),i(d,{class:"hearing"},{default:o((()=>[n(d,{class:"hearing-title"},{default:o((()=>[n(d,{class:"hearing-title-text"},{default:o((()=>[F(f(l.value&&l.value.name?l.value.name:"-"),1)])),_:1}),l.value&&l.value.material?(s(),i(d,{key:0,class:"hearing-audio"},{default:o((()=>[n(k,{audioId:`audio${l.value.id}`,url:l.value.material},null,8,["audioId","url"])])),_:1})):c("",!0)])),_:1}),n(d,{class:"hearing-btm"},{default:o((()=>[n(d,{class:"hearing-btm-title"},{default:o((()=>[F(" 请回答 ")])),_:1}),n(d,{class:"hearing-btm-text"},{default:o((()=>[n(r,null,{default:o((()=>[F(f(A.value.substance.split("_")[0]),1)])),_:1}),n(g,{style:{width:"140rpx",height:"60rpx","line-height":"60rpx","border-bottom":"1px solid #333","text-align":"center"},modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=a=>t.value=a),type:"number",placeholder:"填写答案","placeholder-style":"font-size: 26rpx;"},null,8,["modelValue"]),n(r,null,{default:o((()=>[F(f(A.value.substance.split("_")[1]),1)])),_:1})])),_:1})])),_:1}),n(d,{class:"btns",onClick:u},{default:o((()=>[F(" 提交 ")])),_:1})])),_:1})}}}),[["__scopeId","data-v-2b51c42f"]]);export{I as default};
