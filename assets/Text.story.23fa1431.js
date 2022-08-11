import{e as i,r as x,a as p,c as d,w as t,o as m,b as e,j as o,t as r,d as c}from"./index.697aafd2.js";const u=c("div",{class:"markdown pf-c-content"},[c("h2",{class:"pf-c-title"},"Examples")],-1),h=o("Visited link example"),k=o(" Visited link "),V=c("br",null,null,-1),v=o("Visited content example"),T=o(" content link 1 "),y=o(" content link 2 "),b=o(" content link 3 "),N=i({__name:"Text.story",setup(g){const f=x("Title text");return(w,B)=>{const l=p("component-title"),n=p("pf-text"),a=p("story-canvas"),s=p("pf-text-content"),_=p("doc-page");return m(),d(_,{title:"Text"},{default:t(()=>[e(l,{name:"pf-text"}),u,e(a,{title:"Text",source:"<pf-text>{{ sample_title }}</pf-text>"},{default:t(()=>[e(n,null,{default:t(()=>[o(r(f.value),1)]),_:1})]),_:1}),e(a,{title:"Text visited",source:`<pf-text-content>
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
</pf-text-content>`},{default:t(()=>[e(s,null,{default:t(()=>[e(n,{component:"h3"},{default:t(()=>[h]),_:1}),e(n,{component:"p"},{default:t(()=>[e(n,{component:"a",href:"#"},{default:t(()=>[k]),_:1})]),_:1})]),_:1}),V,e(s,{visited:""},{default:t(()=>[e(n,{component:"h3"},{default:t(()=>[v]),_:1}),e(n,{component:"p"},{default:t(()=>[e(n,{component:"a",href:"#"},{default:t(()=>[T]),_:1})]),_:1}),e(n,{component:"p"},{default:t(()=>[e(n,{component:"a",href:"#"},{default:t(()=>[y]),_:1})]),_:1}),e(n,{component:"p"},{default:t(()=>[e(n,{component:"a",href:"#"},{default:t(()=>[b]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{N as default};
