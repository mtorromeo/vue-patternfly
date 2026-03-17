import{H as e,N as t,c as n,h as r,k as i,m as a,p as o,s}from"./runtime-core.esm-bundler-BYNplpMz.js";var c=r({__name:`Panel.story`,setup(r){return(r,c)=>{let l=t(`component-info`),u=t(`pf-panel-main-body`),d=t(`pf-panel-main`),f=t(`pf-panel`),p=t(`story-canvas`),m=t(`pf-panel-header`),h=t(`pf-divider`),g=t(`pf-panel-footer`),_=t(`doc-page`);return i(),n(_,{name:`Components/Panel.story.vue`,title:`Panel`},{description:e(()=>[...c[0]||=[o(`The `,-1),s(`b`,null,`panel`,-1),o(` component is a container that supports flexible content layouts. It can be used to house other components such as fields, forms, videos, buttons, and more. The panel should not be confused with the drawer component, which allows you to surface information via a collapsable container.`,-1)]]),apidocs:e(()=>[a(l,{name:`PfPanel`,doc:{name:`PfPanel`,exportName:`PfPanel`,displayName:`Panel`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`variant`,description:`Adds panel variant styles`,required:!1,type:{name:`union`,elements:[{name:`"raised"`},{name:`"bordered"`}]}},{name:`scrollable`,description:`Flag to add scrollable styling to the panel`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Panel/Panel.vue`]}}),a(l,{name:`PfPanelFooter`,doc:{name:`PfPanelFooter`,exportName:`PfPanelFooter`,displayName:`PanelFooter`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Panel/PanelFooter.vue`]}}),a(l,{name:`PfPanelHeader`,doc:{name:`PfPanelHeader`,exportName:`PfPanelHeader`,displayName:`PanelHeader`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Panel/PanelHeader.vue`]}}),a(l,{name:`PfPanelMain`,doc:{name:`PfPanelMain`,exportName:`PfPanelMain`,displayName:`PanelMain`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`maxHeight`,description:`Max height of the panel main div as a string with the value and unit`,required:!1,type:{name:`string`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Panel/PanelMain.vue`]}}),a(l,{name:`PfPanelMainBody`,doc:{name:`PfPanelMainBody`,exportName:`PfPanelMainBody`,displayName:`PanelMainBody`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Panel/PanelMainBody.vue`]}})]),default:e(()=>[c[16]||=s(`div`,{class:`markdown pf-v6-c-content`},[s(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),a(p,{title:`Basic`,source:`<pf-panel>
  <pf-panel-main>
    <pf-panel-main-body>Main content</pf-panel-main-body>
  </pf-panel-main>
</pf-panel>`},{default:e(()=>[a(f,null,{default:e(()=>[a(d,null,{default:e(()=>[a(u,null,{default:e(()=>[...c[1]||=[o(`Main content`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(p,{title:`Header`,source:`<pf-panel>
  <pf-panel-header>Header content</pf-panel-header>
  <pf-divider />
  <pf-panel-main>
    <pf-panel-main-body>Main content</pf-panel-main-body>
  </pf-panel-main>
</pf-panel>`},{default:e(()=>[a(f,null,{default:e(()=>[a(m,null,{default:e(()=>[...c[2]||=[o(`Header content`,-1)]]),_:1}),a(h),a(d,null,{default:e(()=>[a(u,null,{default:e(()=>[...c[3]||=[o(`Main content`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(p,{title:`Footer`,source:`<pf-panel>
  <pf-panel-main>
    <pf-panel-main-body>Main content</pf-panel-main-body>
  </pf-panel-main>
  <pf-panel-footer>Footer content</pf-panel-footer>
</pf-panel>`},{default:e(()=>[a(f,null,{default:e(()=>[a(d,null,{default:e(()=>[a(u,null,{default:e(()=>[...c[4]||=[o(`Main content`,-1)]]),_:1})]),_:1}),a(g,null,{default:e(()=>[...c[5]||=[o(`Footer content`,-1)]]),_:1})]),_:1})]),_:1}),a(p,{title:`Header and footer`,source:`<pf-panel>
  <pf-panel-header>Header content</pf-panel-header>
  <pf-divider />
  <pf-panel-main>
    <pf-panel-main-body>Main content</pf-panel-main-body>
  </pf-panel-main>
  <pf-panel-footer>Footer content</pf-panel-footer>
</pf-panel>`},{default:e(()=>[a(f,null,{default:e(()=>[a(m,null,{default:e(()=>[...c[6]||=[o(`Header content`,-1)]]),_:1}),a(h),a(d,null,{default:e(()=>[a(u,null,{default:e(()=>[...c[7]||=[o(`Main content`,-1)]]),_:1})]),_:1}),a(g,null,{default:e(()=>[...c[8]||=[o(`Footer content`,-1)]]),_:1})]),_:1})]),_:1}),a(p,{title:`No body`,source:`<pf-panel>
  <pf-panel-main>Main content</pf-panel-main>
</pf-panel>`},{default:e(()=>[a(f,null,{default:e(()=>[a(d,null,{default:e(()=>[...c[9]||=[o(`Main content`,-1)]]),_:1})]),_:1})]),_:1}),a(p,{title:`Raised`,source:`<pf-panel variant="raised">
  <pf-panel-main>
    <pf-panel-main-body>Main content</pf-panel-main-body>
  </pf-panel-main>
</pf-panel>`},{default:e(()=>[a(f,{variant:`raised`},{default:e(()=>[a(d,null,{default:e(()=>[a(u,null,{default:e(()=>[...c[10]||=[o(`Main content`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(p,{title:`Bordered`,source:`<pf-panel variant="bordered">
  <pf-panel-main>
    <pf-panel-main-body>Main content</pf-panel-main-body>
  </pf-panel-main>
</pf-panel>`},{default:e(()=>[a(f,{variant:`bordered`},{default:e(()=>[a(d,null,{default:e(()=>[a(u,null,{default:e(()=>[...c[11]||=[o(`Main content`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(p,{title:`Scrollable`,source:`<pf-panel scrollable>
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
</pf-panel>`},{default:e(()=>[a(f,{scrollable:``},{default:e(()=>[a(d,null,{default:e(()=>[a(u,null,{default:e(()=>[...c[12]||=[o(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),o(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),o(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),o(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),o(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),o(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),o(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),o(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),o(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),o(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),o(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),o(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),o(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),o(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),o(` Main content `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(p,{title:`Scrollable with header and footer`,source:`<pf-panel scrollable>
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
</pf-panel>`},{default:e(()=>[a(f,{scrollable:``},{default:e(()=>[a(m,null,{default:e(()=>[...c[13]||=[o(`Header content`,-1)]]),_:1}),a(h),a(d,null,{default:e(()=>[a(u,null,{default:e(()=>[...c[14]||=[o(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),o(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),o(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),o(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),o(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),o(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),o(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),o(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),o(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),o(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),o(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),o(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),o(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),o(` Main content `,-1),s(`br`,null,null,-1),s(`br`,null,null,-1),o(` Main content `,-1)]]),_:1})]),_:1}),a(g,null,{default:e(()=>[...c[15]||=[o(`Footer content`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})}}});export{c as default};