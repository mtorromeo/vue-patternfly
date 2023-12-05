import{f,r as d,a as s,o as m,c as x,w as t,b as o,d as e,t as u,e as a}from"./index-PTSgYYYm.js";const _=a("b",null,"PfText",-1),T=a("b",null,"PfTextList",-1),h=a("b",null,"PfTextContent",-1),v=a("div",{class:"markdown pf-v5-c-content"},[a("h2",{class:"pf-v5-c-title"},"Examples")],-1),k=a("br",null,null,-1),L=f({__name:"Text.story",setup(g){const i=d("Title text");return(y,V)=>{const c=s("component-info"),n=s("pf-text"),p=s("story-canvas"),l=s("pf-text-content"),r=s("doc-page");return m(),x(r,{name:"Components/Text.story.vue",title:"Text"},{description:t(()=>[_,o(" and "),T,o(" components are always wrapped in "),h,o(" and provide correct formatting to a number of standard HTML tags.")]),apidocs:t(()=>[e(c,{src:"packages/core/src/components/Text/Text.vue",doc:{name:"PfText",exportName:"default",displayName:"Text",description:"",tags:{},props:[{name:"component",required:!1,type:{name:"TextVariants"},defaultValue:{func:!1,value:"'p'"}},{name:"visited",description:"Flag to indicate the link has visited styles applied if the browser determines the link has been visited",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Text/Text.vue"]}},null,8,["doc"]),e(c,{src:"packages/core/src/components/Text/TextContent.vue",doc:{name:"PfTextContent",exportName:"default",displayName:"TextContent",description:"",tags:{},props:[{name:"visited",description:"Flag to indicate the all links in a the content block have visited styles applied if the browser determines the link has been visited",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Text/TextContent.vue"]}},null,8,["doc"]),e(c,{src:"packages/core/src/components/Text/TextList.vue",doc:{name:"PfTextList",exportName:"default",displayName:"TextList",description:"",tags:{},props:[{name:"component",required:!1,type:{name:"TextListVariants"},defaultValue:{func:!1,value:"'ul'"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Text/TextList.vue"]}},null,8,["doc"]),e(c,{src:"packages/core/src/components/Text/TextListItem.vue",doc:{name:"PfTextListItem",exportName:"default",displayName:"TextListItem",description:"",tags:{},props:[{name:"component",required:!1,type:{name:"TextListItemVariants"},defaultValue:{func:!1,value:"'li'"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Text/TextListItem.vue"]}},null,8,["doc"])]),default:t(()=>[v,e(p,{title:"Text",source:"<pf-text>{{ sample_title }}</pf-text>"},{default:t(()=>[e(n,null,{default:t(()=>[o(u(i.value),1)]),_:1})]),_:1}),e(p,{title:"Text visited",source:`<pf-text-content>
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
</pf-text-content>`},{default:t(()=>[e(l,null,{default:t(()=>[e(n,{component:"h3"},{default:t(()=>[o("Visited link example")]),_:1}),e(n,{component:"p"},{default:t(()=>[e(n,{component:"a",href:"#"},{default:t(()=>[o(" Visited link ")]),_:1})]),_:1})]),_:1}),k,e(l,{visited:""},{default:t(()=>[e(n,{component:"h3"},{default:t(()=>[o("Visited content example")]),_:1}),e(n,{component:"p"},{default:t(()=>[e(n,{component:"a",href:"#"},{default:t(()=>[o(" content link 1 ")]),_:1})]),_:1}),e(n,{component:"p"},{default:t(()=>[e(n,{component:"a",href:"#"},{default:t(()=>[o(" content link 2 ")]),_:1})]),_:1}),e(n,{component:"p"},{default:t(()=>[e(n,{component:"a",href:"#"},{default:t(()=>[o(" content link 3 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["name"])}}});export{L as default};
