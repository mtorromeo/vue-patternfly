import{f,a as s,o as b,c as m,w as t,b as l,d as e,e as n}from"./index-9IxByHgl.js";const h=n("b",null,"panel",-1),M=n("div",{class:"markdown pf-v5-c-content"},[n("h2",{class:"pf-v5-c-title"},"Examples")],-1),y=n("br",null,null,-1),P=n("br",null,null,-1),v=n("br",null,null,-1),g=n("br",null,null,-1),F=n("br",null,null,-1),N=n("br",null,null,-1),k=n("br",null,null,-1),x=n("br",null,null,-1),H=n("br",null,null,-1),w=n("br",null,null,-1),B=n("br",null,null,-1),q=n("br",null,null,-1),C=n("br",null,null,-1),T=n("br",null,null,-1),V=n("br",null,null,-1),S=n("br",null,null,-1),A=n("br",null,null,-1),E=n("br",null,null,-1),I=n("br",null,null,-1),R=n("br",null,null,-1),j=n("br",null,null,-1),z=n("br",null,null,-1),D=n("br",null,null,-1),G=n("br",null,null,-1),J=n("br",null,null,-1),K=n("br",null,null,-1),L=n("br",null,null,-1),O=n("br",null,null,-1),Q=n("br",null,null,-1),U=n("br",null,null,-1),W=n("br",null,null,-1),X=n("br",null,null,-1),Y=n("br",null,null,-1),Z=n("br",null,null,-1),$=n("br",null,null,-1),nn=n("br",null,null,-1),en=n("br",null,null,-1),ln=n("br",null,null,-1),tn=n("br",null,null,-1),an=n("br",null,null,-1),on=n("br",null,null,-1),cn=n("br",null,null,-1),sn=n("br",null,null,-1),rn=n("br",null,null,-1),un=n("br",null,null,-1),pn=n("br",null,null,-1),dn=n("br",null,null,-1),_n=n("br",null,null,-1),fn=n("br",null,null,-1),bn=n("br",null,null,-1),mn=n("br",null,null,-1),hn=n("br",null,null,-1),Mn=n("br",null,null,-1),yn=n("br",null,null,-1),Pn=n("br",null,null,-1),vn=n("br",null,null,-1),xn=f({__name:"Panel.story",setup(gn){return(Fn,Nn)=>{const i=s("component-info"),r=s("pf-panel-main-body"),a=s("pf-panel-main"),o=s("pf-panel"),c=s("story-canvas"),u=s("pf-panel-header"),p=s("pf-divider"),d=s("pf-panel-footer"),_=s("doc-page");return b(),m(_,{title:"Panel"},{description:t(()=>[l("The "),h,l(" component is a container that supports flexible content layouts. It can be used to house other components such as fields, forms, videos, buttons, and more. The panel should not be confused with the drawer component, which allows you to surface information via a collapsable container.")]),apidocs:t(()=>[e(i,{src:"packages/core/src/components/Panel/Panel.vue",doc:{name:"PfPanel",exportName:"default",displayName:"Panel",description:"",tags:{},props:[{name:"variant",description:"Adds panel variant styles",required:!1,type:{name:"union",elements:[{name:'"raised"'},{name:'"bordered"'}]}},{name:"scrollable",description:"Flag to add scrollable styling to the panel",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Panel/Panel.vue"]}},null,8,["doc"]),e(i,{src:"packages/core/src/components/Panel/PanelFooter.vue",doc:{name:"PfPanelFooter",exportName:"default",displayName:"PanelFooter",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Panel/PanelFooter.vue"]}},null,8,["doc"]),e(i,{src:"packages/core/src/components/Panel/PanelHeader.vue",doc:{name:"PfPanelHeader",exportName:"default",displayName:"PanelHeader",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Panel/PanelHeader.vue"]}},null,8,["doc"]),e(i,{src:"packages/core/src/components/Panel/PanelMain.vue",doc:{name:"PfPanelMain",exportName:"default",displayName:"PanelMain",description:"",tags:{},props:[{name:"maxHeight",description:"Max height of the panel main div as a string with the value and unit",required:!1,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Panel/PanelMain.vue"]}},null,8,["doc"]),e(i,{src:"packages/core/src/components/Panel/PanelMainBody.vue",doc:{name:"PfPanelMainBody",exportName:"default",displayName:"PanelMainBody",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Panel/PanelMainBody.vue"]}},null,8,["doc"])]),default:t(()=>[M,e(c,{title:"Basic",source:`<pf-panel>
  <pf-panel-main>
    <pf-panel-main-body>Main content</pf-panel-main-body>
  </pf-panel-main>
</pf-panel>`},{default:t(()=>[e(o,null,{default:t(()=>[e(a,null,{default:t(()=>[e(r,null,{default:t(()=>[l("Main content")]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{title:"Header",source:`<pf-panel>
  <pf-panel-header>Header content</pf-panel-header>
  <pf-divider />
  <pf-panel-main>
    <pf-panel-main-body>Main content</pf-panel-main-body>
  </pf-panel-main>
</pf-panel>`},{default:t(()=>[e(o,null,{default:t(()=>[e(u,null,{default:t(()=>[l("Header content")]),_:1}),e(p),e(a,null,{default:t(()=>[e(r,null,{default:t(()=>[l("Main content")]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{title:"Footer",source:`<pf-panel>
  <pf-panel-main>
    <pf-panel-main-body>Main content</pf-panel-main-body>
  </pf-panel-main>
  <pf-panel-footer>Footer content</pf-panel-footer>
</pf-panel>`},{default:t(()=>[e(o,null,{default:t(()=>[e(a,null,{default:t(()=>[e(r,null,{default:t(()=>[l("Main content")]),_:1})]),_:1}),e(d,null,{default:t(()=>[l("Footer content")]),_:1})]),_:1})]),_:1}),e(c,{title:"Header and footer",source:`<pf-panel>
  <pf-panel-header>Header content</pf-panel-header>
  <pf-divider />
  <pf-panel-main>
    <pf-panel-main-body>Main content</pf-panel-main-body>
  </pf-panel-main>
  <pf-panel-footer>Footer content</pf-panel-footer>
</pf-panel>`},{default:t(()=>[e(o,null,{default:t(()=>[e(u,null,{default:t(()=>[l("Header content")]),_:1}),e(p),e(a,null,{default:t(()=>[e(r,null,{default:t(()=>[l("Main content")]),_:1})]),_:1}),e(d,null,{default:t(()=>[l("Footer content")]),_:1})]),_:1})]),_:1}),e(c,{title:"No body",source:`<pf-panel>
  <pf-panel-main>Main content</pf-panel-main>
</pf-panel>`},{default:t(()=>[e(o,null,{default:t(()=>[e(a,null,{default:t(()=>[l("Main content")]),_:1})]),_:1})]),_:1}),e(c,{title:"Raised",source:`<pf-panel variant="raised">
  <pf-panel-main>
    <pf-panel-main-body>Main content</pf-panel-main-body>
  </pf-panel-main>
</pf-panel>`},{default:t(()=>[e(o,{variant:"raised"},{default:t(()=>[e(a,null,{default:t(()=>[e(r,null,{default:t(()=>[l("Main content")]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{title:"Bordered",source:`<pf-panel variant="bordered">
  <pf-panel-main>
    <pf-panel-main-body>Main content</pf-panel-main-body>
  </pf-panel-main>
</pf-panel>`},{default:t(()=>[e(o,{variant:"bordered"},{default:t(()=>[e(a,null,{default:t(()=>[e(r,null,{default:t(()=>[l("Main content")]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{title:"Scrollable",source:`<pf-panel scrollable>
  <pf-panel-main>
    <pf-panel-main-body>
      Main content
      <br>
      <br>
      Main content
      <br>
      <br>
      Main content
      <br>
      <br>
      Main content
      <br>
      <br>
      Main content
      <br>
      <br>
      Main content
      <br>
      <br>
      Main content
      <br>
      <br>
      Main content
      <br>
      <br>
      Main content
      <br>
      <br>
      Main content
      <br>
      <br>
      Main content
      <br>
      <br>
      Main content
      <br>
      <br>
      Main content
      <br>
      <br>
      Main content
      <br>
      <br>
      Main content
    </pf-panel-main-body>
  </pf-panel-main>
</pf-panel>`},{default:t(()=>[e(o,{scrollable:""},{default:t(()=>[e(a,null,{default:t(()=>[e(r,null,{default:t(()=>[l(" Main content "),y,P,l(" Main content "),v,g,l(" Main content "),F,N,l(" Main content "),k,x,l(" Main content "),H,w,l(" Main content "),B,q,l(" Main content "),C,T,l(" Main content "),V,S,l(" Main content "),A,E,l(" Main content "),I,R,l(" Main content "),j,z,l(" Main content "),D,G,l(" Main content "),J,K,l(" Main content "),L,O,l(" Main content ")]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{title:"Scrollable with header and footer",source:`<pf-panel scrollable>
  <pf-panel-header>Header content</pf-panel-header>
  <pf-divider />
  <pf-panel-main>
    <pf-panel-main-body>
      Main content
      <br>
      <br>
      Main content
      <br>
      <br>
      Main content
      <br>
      <br>
      Main content
      <br>
      <br>
      Main content
      <br>
      <br>
      Main content
      <br>
      <br>
      Main content
      <br>
      <br>
      Main content
      <br>
      <br>
      Main content
      <br>
      <br>
      Main content
      <br>
      <br>
      Main content
      <br>
      <br>
      Main content
      <br>
      <br>
      Main content
      <br>
      <br>
      Main content
      <br>
      <br>
      Main content
    </pf-panel-main-body>
  </pf-panel-main>
  <pf-panel-footer>Footer content</pf-panel-footer>
</pf-panel>`},{default:t(()=>[e(o,{scrollable:""},{default:t(()=>[e(u,null,{default:t(()=>[l("Header content")]),_:1}),e(p),e(a,null,{default:t(()=>[e(r,null,{default:t(()=>[l(" Main content "),Q,U,l(" Main content "),W,X,l(" Main content "),Y,Z,l(" Main content "),$,nn,l(" Main content "),en,ln,l(" Main content "),tn,an,l(" Main content "),on,cn,l(" Main content "),sn,rn,l(" Main content "),un,pn,l(" Main content "),dn,_n,l(" Main content "),fn,bn,l(" Main content "),mn,hn,l(" Main content "),Mn,yn,l(" Main content "),Pn,vn,l(" Main content ")]),_:1})]),_:1}),e(d,null,{default:t(()=>[l("Footer content")]),_:1})]),_:1})]),_:1})]),_:1})}}});export{xn as default};
