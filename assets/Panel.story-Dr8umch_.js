import{g as m,a as u,c as M,o as y,w as a,d as n,b as e,e as l}from"./index-Duu062da.js";const g=m({__name:"Panel.story",setup(_){return(v,t)=>{const s=u("component-info"),p=u("pf-panel-main-body"),o=u("pf-panel-main"),r=u("pf-panel"),i=u("story-canvas"),d=u("pf-panel-header"),f=u("pf-divider"),c=u("pf-panel-footer"),b=u("doc-page");return y(),M(b,{name:"Components/Panel.story.vue",title:"Panel"},{description:a(()=>[...t[0]||(t[0]=[l("The ",-1),n("b",null,"panel",-1),l(" component is a container that supports flexible content layouts. It can be used to house other components such as fields, forms, videos, buttons, and more. The panel should not be confused with the drawer component, which allows you to surface information via a collapsable container.",-1)])]),apidocs:a(()=>[e(s,{src:"packages/core/src/components/Panel/Panel.vue",doc:{name:"PfPanel",exportName:"default",displayName:"Panel",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"variant",description:"Adds panel variant styles",required:!1,type:{name:"union",elements:[{name:'"raised"'},{name:'"bordered"'}]}},{name:"scrollable",description:"Flag to add scrollable styling to the panel",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Panel/Panel.vue"]}}),e(s,{src:"packages/core/src/components/Panel/PanelFooter.vue",doc:{name:"PfPanelFooter",exportName:"default",displayName:"PanelFooter",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Panel/PanelFooter.vue"]}}),e(s,{src:"packages/core/src/components/Panel/PanelHeader.vue",doc:{name:"PfPanelHeader",exportName:"default",displayName:"PanelHeader",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Panel/PanelHeader.vue"]}}),e(s,{src:"packages/core/src/components/Panel/PanelMain.vue",doc:{name:"PfPanelMain",exportName:"default",displayName:"PanelMain",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"maxHeight",description:"Max height of the panel main div as a string with the value and unit",required:!1,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Panel/PanelMain.vue"]}}),e(s,{src:"packages/core/src/components/Panel/PanelMainBody.vue",doc:{name:"PfPanelMainBody",exportName:"default",displayName:"PanelMainBody",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Panel/PanelMainBody.vue"]}})]),default:a(()=>[t[16]||(t[16]=n("div",{class:"markdown pf-v6-c-content"},[n("h2",{class:"pf-v6-c-title"},"Examples")],-1)),e(i,{title:"Basic",source:`<pf-panel>
  <pf-panel-main>
    <pf-panel-main-body>Main content</pf-panel-main-body>
  </pf-panel-main>
</pf-panel>`},{default:a(()=>[e(r,null,{default:a(()=>[e(o,null,{default:a(()=>[e(p,null,{default:a(()=>[...t[1]||(t[1]=[l("Main content",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),e(i,{title:"Header",source:`<pf-panel>
  <pf-panel-header>Header content</pf-panel-header>
  <pf-divider />
  <pf-panel-main>
    <pf-panel-main-body>Main content</pf-panel-main-body>
  </pf-panel-main>
</pf-panel>`},{default:a(()=>[e(r,null,{default:a(()=>[e(d,null,{default:a(()=>[...t[2]||(t[2]=[l("Header content",-1)])]),_:1}),e(f),e(o,null,{default:a(()=>[e(p,null,{default:a(()=>[...t[3]||(t[3]=[l("Main content",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),e(i,{title:"Footer",source:`<pf-panel>
  <pf-panel-main>
    <pf-panel-main-body>Main content</pf-panel-main-body>
  </pf-panel-main>
  <pf-panel-footer>Footer content</pf-panel-footer>
</pf-panel>`},{default:a(()=>[e(r,null,{default:a(()=>[e(o,null,{default:a(()=>[e(p,null,{default:a(()=>[...t[4]||(t[4]=[l("Main content",-1)])]),_:1})]),_:1}),e(c,null,{default:a(()=>[...t[5]||(t[5]=[l("Footer content",-1)])]),_:1})]),_:1})]),_:1}),e(i,{title:"Header and footer",source:`<pf-panel>
  <pf-panel-header>Header content</pf-panel-header>
  <pf-divider />
  <pf-panel-main>
    <pf-panel-main-body>Main content</pf-panel-main-body>
  </pf-panel-main>
  <pf-panel-footer>Footer content</pf-panel-footer>
</pf-panel>`},{default:a(()=>[e(r,null,{default:a(()=>[e(d,null,{default:a(()=>[...t[6]||(t[6]=[l("Header content",-1)])]),_:1}),e(f),e(o,null,{default:a(()=>[e(p,null,{default:a(()=>[...t[7]||(t[7]=[l("Main content",-1)])]),_:1})]),_:1}),e(c,null,{default:a(()=>[...t[8]||(t[8]=[l("Footer content",-1)])]),_:1})]),_:1})]),_:1}),e(i,{title:"No body",source:`<pf-panel>
  <pf-panel-main>Main content</pf-panel-main>
</pf-panel>`},{default:a(()=>[e(r,null,{default:a(()=>[e(o,null,{default:a(()=>[...t[9]||(t[9]=[l("Main content",-1)])]),_:1})]),_:1})]),_:1}),e(i,{title:"Raised",source:`<pf-panel variant="raised">
  <pf-panel-main>
    <pf-panel-main-body>Main content</pf-panel-main-body>
  </pf-panel-main>
</pf-panel>`},{default:a(()=>[e(r,{variant:"raised"},{default:a(()=>[e(o,null,{default:a(()=>[e(p,null,{default:a(()=>[...t[10]||(t[10]=[l("Main content",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),e(i,{title:"Bordered",source:`<pf-panel variant="bordered">
  <pf-panel-main>
    <pf-panel-main-body>Main content</pf-panel-main-body>
  </pf-panel-main>
</pf-panel>`},{default:a(()=>[e(r,{variant:"bordered"},{default:a(()=>[e(o,null,{default:a(()=>[e(p,null,{default:a(()=>[...t[11]||(t[11]=[l("Main content",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),e(i,{title:"Scrollable",source:`<pf-panel scrollable>
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
</pf-panel>`},{default:a(()=>[e(r,{scrollable:""},{default:a(()=>[e(o,null,{default:a(()=>[e(p,null,{default:a(()=>[...t[12]||(t[12]=[l(" Main content ",-1),n("br",null,null,-1),n("br",null,null,-1),l(" Main content ",-1),n("br",null,null,-1),n("br",null,null,-1),l(" Main content ",-1),n("br",null,null,-1),n("br",null,null,-1),l(" Main content ",-1),n("br",null,null,-1),n("br",null,null,-1),l(" Main content ",-1),n("br",null,null,-1),n("br",null,null,-1),l(" Main content ",-1),n("br",null,null,-1),n("br",null,null,-1),l(" Main content ",-1),n("br",null,null,-1),n("br",null,null,-1),l(" Main content ",-1),n("br",null,null,-1),n("br",null,null,-1),l(" Main content ",-1),n("br",null,null,-1),n("br",null,null,-1),l(" Main content ",-1),n("br",null,null,-1),n("br",null,null,-1),l(" Main content ",-1),n("br",null,null,-1),n("br",null,null,-1),l(" Main content ",-1),n("br",null,null,-1),n("br",null,null,-1),l(" Main content ",-1),n("br",null,null,-1),n("br",null,null,-1),l(" Main content ",-1),n("br",null,null,-1),n("br",null,null,-1),l(" Main content ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),e(i,{title:"Scrollable with header and footer",source:`<pf-panel scrollable>
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
</pf-panel>`},{default:a(()=>[e(r,{scrollable:""},{default:a(()=>[e(d,null,{default:a(()=>[...t[13]||(t[13]=[l("Header content",-1)])]),_:1}),e(f),e(o,null,{default:a(()=>[e(p,null,{default:a(()=>[...t[14]||(t[14]=[l(" Main content ",-1),n("br",null,null,-1),n("br",null,null,-1),l(" Main content ",-1),n("br",null,null,-1),n("br",null,null,-1),l(" Main content ",-1),n("br",null,null,-1),n("br",null,null,-1),l(" Main content ",-1),n("br",null,null,-1),n("br",null,null,-1),l(" Main content ",-1),n("br",null,null,-1),n("br",null,null,-1),l(" Main content ",-1),n("br",null,null,-1),n("br",null,null,-1),l(" Main content ",-1),n("br",null,null,-1),n("br",null,null,-1),l(" Main content ",-1),n("br",null,null,-1),n("br",null,null,-1),l(" Main content ",-1),n("br",null,null,-1),n("br",null,null,-1),l(" Main content ",-1),n("br",null,null,-1),n("br",null,null,-1),l(" Main content ",-1),n("br",null,null,-1),n("br",null,null,-1),l(" Main content ",-1),n("br",null,null,-1),n("br",null,null,-1),l(" Main content ",-1),n("br",null,null,-1),n("br",null,null,-1),l(" Main content ",-1),n("br",null,null,-1),n("br",null,null,-1),l(" Main content ",-1)])]),_:1})]),_:1}),e(c,null,{default:a(()=>[...t[15]||(t[15]=[l("Footer content",-1)])]),_:1})]),_:1})]),_:1})]),_:1})}}});export{g as default};
