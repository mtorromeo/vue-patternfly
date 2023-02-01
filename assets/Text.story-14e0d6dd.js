import{e as _,r as x,a as p,o as m,c as d,w as t,b as e,g as o,t as r,d as c}from"./index-add4cce3.js";const u=c("div",{class:"markdown pf-c-content"},[c("h2",{class:"pf-c-title"},"Examples")],-1),h=c("br",null,null,-1),g=_({__name:"Text.story",setup(k){const l=x("Title text");return(V,v)=>{const s=p("component-title"),n=p("pf-text"),a=p("story-canvas"),f=p("pf-text-content"),i=p("doc-page");return m(),d(i,{title:"Text"},{default:t(()=>[e(s,{name:"pf-text"}),u,e(a,{title:"Text",source:"<pf-text>{{ sample_title }}</pf-text>"},{default:t(()=>[e(n,null,{default:t(()=>[o(r(l.value),1)]),_:1})]),_:1}),e(a,{title:"Text visited",source:`<pf-text-content>
  <pf-text component="h3">Visited link example</pf-text>
  <pf-text component="p">
    <pf-text component="a" href="#">
      Visited link
    </pf-text>
  </pf-text>
</pf-text-content>
<br>
<pf-text-content visited>
  <pf-text component="h3">Visited content example</pf-text>
  <pf-text component="p">
    <pf-text component="a" href="#">
      content link 1
    </pf-text>
  </pf-text>
  <pf-text component="p">
    <pf-text component="a" href="#">
      content link 2
    </pf-text>
  </pf-text>
  <pf-text component="p">
    <pf-text component="a" href="#">
      content link 3
    </pf-text>
  </pf-text>
</pf-text-content>`},{default:t(()=>[e(f,null,{default:t(()=>[e(n,{component:"h3"},{default:t(()=>[o("Visited link example")]),_:1}),e(n,{component:"p"},{default:t(()=>[e(n,{component:"a",href:"#"},{default:t(()=>[o(" Visited link ")]),_:1})]),_:1})]),_:1}),h,e(f,{visited:""},{default:t(()=>[e(n,{component:"h3"},{default:t(()=>[o("Visited content example")]),_:1}),e(n,{component:"p"},{default:t(()=>[e(n,{component:"a",href:"#"},{default:t(()=>[o(" content link 1 ")]),_:1})]),_:1}),e(n,{component:"p"},{default:t(()=>[e(n,{component:"a",href:"#"},{default:t(()=>[o(" content link 2 ")]),_:1})]),_:1}),e(n,{component:"p"},{default:t(()=>[e(n,{component:"a",href:"#"},{default:t(()=>[o(" content link 3 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{g as default};
