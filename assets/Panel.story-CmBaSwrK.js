import{D as e,E as t,I as n,N as r,O as i,S as a,j as o,x as s}from"./index-mFbvqZfx.js";var c=i({__name:`Panel.story`,setup(i){return(i,c)=>{let l=r(`component-info`),u=r(`pf-panel-main-body`),d=r(`pf-panel-main`),f=r(`pf-panel`),p=r(`story-canvas`),m=r(`pf-panel-header`),h=r(`pf-divider`),g=r(`pf-panel-footer`),_=r(`doc-page`);return o(),a(_,{name:`Components/Panel.story.vue`,title:`Panel`},{description:n(()=>[...c[0]||=[t(`The `,-1),s(`b`,null,`panel`,-1),t(` component is a container that supports flexible content layouts. It can be used to house other components such as fields, forms, videos, buttons, and more. The panel should not be confused with the drawer component, which allows you to surface information via a collapsable container.`,-1)]]),apidocs:n(()=>[e(l,{name:`PfPanel`,doc:{name:`PfPanel`,exportName:`PfPanel`,displayName:`Panel`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`variant`,description:`Adds panel variant styles`,required:!1,type:{name:`union`,elements:[{name:`"raised"`},{name:`"bordered"`}]}},{name:`scrollable`,description:`Flag to add scrollable styling to the panel`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Panel/Panel.vue`]}}),e(l,{name:`PfPanelFooter`,doc:{name:`PfPanelFooter`,exportName:`PfPanelFooter`,displayName:`PanelFooter`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Panel/PanelFooter.vue`]}}),e(l,{name:`PfPanelHeader`,doc:{name:`PfPanelHeader`,exportName:`PfPanelHeader`,displayName:`PanelHeader`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Panel/PanelHeader.vue`]}}),e(l,{name:`PfPanelMain`,doc:{name:`PfPanelMain`,exportName:`PfPanelMain`,displayName:`PanelMain`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`maxHeight`,description:`Max height of the panel main div as a string with the value and unit`,required:!1,type:{name:`string`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Panel/PanelMain.vue`]}}),e(l,{name:`PfPanelMainBody`,doc:{name:`PfPanelMainBody`,exportName:`PfPanelMainBody`,displayName:`PanelMainBody`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Panel/PanelMainBody.vue`]}})]),default:n(()=>[c[16]||=s(`div`,{class:`markdown pf-v6-c-content`},[s(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),e(p,{title:`Basic`,source:`<pf-panel>
  <pf-panel-main>
    <pf-panel-main-body>Main content</pf-panel-main-body>
  </pf-panel-main>
</pf-panel>`},{default:n(()=>[e(f,null,{default:n(()=>[e(d,null,{default:n(()=>[e(u,null,{default:n(()=>[...c[1]||=[t(`Main content`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),e(p,{title:`Header`,source:`<pf-panel>
  <pf-panel-header>Header content</pf-panel-header>
  <pf-divider />
  <pf-panel-main>
    <pf-panel-main-body>Main content</pf-panel-main-body>
  </pf-panel-main>
</pf-panel>`},{default:n(()=>[e(f,null,{default:n(()=>[e(m,null,{default:n(()=>[...c[2]||=[t(`Header content`,-1)]]),_:1}),e(h),e(d,null,{default:n(()=>[e(u,null,{default:n(()=>[...c[3]||=[t(`Main content`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),e(p,{title:`Footer`,source:`<pf-panel>
  <pf-panel-main>
    <pf-panel-main-body>Main content</pf-panel-main-body>
  </pf-panel-main>
  <pf-panel-footer>Footer content</pf-panel-footer>
</pf-panel>`},{default:n(()=>[e(f,null,{default:n(()=>[e(d,null,{default:n(()=>[e(u,null,{default:n(()=>[...c[4]||=[t(`Main content`,-1)]]),_:1})]),_:1}),e(g,null,{default:n(()=>[...c[5]||=[t(`Footer content`,-1)]]),_:1})]),_:1})]),_:1}),e(p,{title:`Header and footer`,source:`<pf-panel>
  <pf-panel-header>Header content</pf-panel-header>
  <pf-divider />
  <pf-panel-main>
    <pf-panel-main-body>Main content</pf-panel-main-body>
  </pf-panel-main>
  <pf-panel-footer>Footer content</pf-panel-footer>
</pf-panel>`},{default:n(()=>[e(f,null,{default:n(()=>[e(m,null,{default:n(()=>[...c[6]||=[t(`Header content`,-1)]]),_:1}),e(h),e(d,null,{default:n(()=>[e(u,null,{default:n(()=>[...c[7]||=[t(`Main content`,-1)]]),_:1})]),_:1}),e(g,null,{default:n(()=>[...c[8]||=[t(`Footer content`,-1)]]),_:1})]),_:1})]),_:1}),e(p,{title:`No body`,source:`<pf-panel>
  <pf-panel-main>Main content</pf-panel-main>
</pf-panel>`},{default:n(()=>[e(f,null,{default:n(()=>[e(d,null,{default:n(()=>[...c[9]||=[t(`Main content`,-1)]]),_:1})]),_:1})]),_:1}),e(p,{title:`Raised`,source:`<pf-panel variant="raised">
  <pf-panel-main>
    <pf-panel-main-body>Main content</pf-panel-main-body>
  </pf-panel-main>
</pf-panel>`},{default:n(()=>[e(f,{variant:`raised`},{default:n(()=>[e(d,null,{default:n(()=>[e(u,null,{default:n(()=>[...c[10]||=[t(`Main content`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),e(p,{title:`Bordered`,source:`<pf-panel variant="bordered">
  <pf-panel-main>
    <pf-panel-main-body>Main content</pf-panel-main-body>
  </pf-panel-main>
</pf-panel>`},{default:n(()=>[e(f,{variant:`bordered`},{default:n(()=>[e(d,null,{default:n(()=>[e(u,null,{default:n(()=>[...c[11]||=[t(`Main content`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),e(p,{title:`Scrollable`,source:`<pf-panel scrollable>
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
</pf-panel>`},{default:n(()=>[e(f,{scrollable:``},{default:n(()=>[e(d,null,{default:n(()=>[e(u,null,{default:n(()=>[...c[12]||=[t(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),t(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),t(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),t(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),t(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),t(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),t(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),t(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),t(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),t(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),t(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),t(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),t(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),t(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),t(` Main content `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),e(p,{title:`Scrollable with header and footer`,source:`<pf-panel scrollable>
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
</pf-panel>`},{default:n(()=>[e(f,{scrollable:``},{default:n(()=>[e(m,null,{default:n(()=>[...c[13]||=[t(`Header content`,-1)]]),_:1}),e(h),e(d,null,{default:n(()=>[e(u,null,{default:n(()=>[...c[14]||=[t(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),t(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),t(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),t(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),t(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),t(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),t(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),t(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),t(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),t(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),t(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),t(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),t(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),t(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),t(` Main content `,-1)]]),_:1})]),_:1}),e(g,null,{default:n(()=>[...c[15]||=[t(`Footer content`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})}}});export{c as default};