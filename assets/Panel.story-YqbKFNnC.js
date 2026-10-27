import{F as e,K as t,N as n,c as r,d as i,h as a,j as o,l as s,m as c,n as l,u}from"./runtime-core.esm-bundler-DO1530YC.js";import{n as d}from"./index-CUsetNQE.js";var f={},p={style:{height:`200px`}};function m(d,f){let m=e(`component-info`),h=e(`pf-panel-main-body`),g=e(`pf-panel-main`),_=e(`pf-panel`),v=e(`story-canvas`),y=e(`pf-panel-header`),b=e(`pf-divider`),x=e(`pf-panel-footer`),S=e(`doc-page`);return o(),s(S,{name:`Components/Panel.story.vue`,title:`Panel`},{description:t(()=>[...f[0]||=[c(`The `,-1),r(`b`,null,`panel`,-1),c(` component is a container that supports flexible content layouts. It can be used to house other components such as fields, forms, videos, buttons, and more. The panel should not be confused with the drawer component, which allows you to surface information via a collapsable container.`,-1)]]),apidocs:t(()=>[a(m,{name:`PfPanel`,doc:{name:`PfPanel`,exportName:`PfPanel`,displayName:`Panel`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`variant`,description:`Adds panel variant styles`,required:!1,type:{name:`union`,elements:[{name:`"raised"`},{name:`"bordered"`},{name:`"secondary"`}]}},{name:`scrollable`,description:`Flag to add scrollable styling to the panel`,required:!1,type:{name:`boolean`}},{name:`autoHeight`,description:`When used with a scrollable panel, sets the panel to auto height`,required:!1,type:{name:`boolean`}},{name:`noBorder`,description:`Flag to remove the panel's border`,required:!1,type:{name:`boolean`}},{name:`fullHeight`,description:`Flag to make the panel fill the available height of its container`,required:!1,type:{name:`boolean`}},{name:`glass`,description:`Modifies the panel to use glass styling when the glass theme is enabled`,required:!1,type:{name:`boolean`}},{name:`pill`,description:`Uses pill (fully rounded) border radius for the panel`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Panel/Panel.vue`]}}),a(m,{name:`PfPanelMain`,doc:{name:`PfPanelMain`,exportName:`PfPanelMain`,displayName:`PanelMain`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`maxHeight`,description:`Max height of the panel main div as a string with the value and unit`,required:!1,type:{name:`string`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Panel/PanelMain.vue`]}}),a(m,{name:`PfPanelMainBody`,doc:{name:`PfPanelMainBody`,exportName:`PfPanelMainBody`,displayName:`PanelMainBody`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Panel/PanelMainBody.vue`]}}),a(m,{name:`PfPanelHeader`,doc:{name:`PfPanelHeader`,exportName:`PfPanelHeader`,displayName:`PanelHeader`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Panel/PanelHeader.vue`]}}),a(m,{name:`PfPanelFooter`,doc:{name:`PfPanelFooter`,exportName:`PfPanelFooter`,displayName:`PanelFooter`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Panel/PanelFooter.vue`]}})]),default:t(()=>[f[25]||=r(`div`,{class:`markdown pf-v6-c-content`},[r(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),r(`ul`,null,[r(`li`,null,[c(`Boolean props drop their prefix: `),r(`code`,null,`scrollable`),c(`, `),r(`code`,null,`auto-height`),c(`, `),r(`code`,null,`no-border`),c(`, `),r(`code`,null,`full-height`),c(`, `),r(`code`,null,`glass`),c(` and `),r(`code`,null,`pill`),c(`. See `),r(`a`,{href:`#/`},`common differences from patternfly-react`),c(`.`)])]),r(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),a(v,{title:`Basic`,source:`<pf-panel>
  <pf-panel-main>
    <pf-panel-main-body>Main content</pf-panel-main-body>
  </pf-panel-main>
</pf-panel>`},{default:t(()=>[a(_,null,{default:t(()=>[a(g,null,{default:t(()=>[a(h,null,{default:t(()=>[...f[1]||=[c(`Main content`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(v,{title:`Header`,source:`<pf-panel>
  <pf-panel-header>Header content</pf-panel-header>
  <pf-divider />
  <pf-panel-main>
    <pf-panel-main-body>Main content</pf-panel-main-body>
  </pf-panel-main>
</pf-panel>`},{default:t(()=>[a(_,null,{default:t(()=>[a(y,null,{default:t(()=>[...f[2]||=[c(`Header content`,-1)]]),_:1}),a(b),a(g,null,{default:t(()=>[a(h,null,{default:t(()=>[...f[3]||=[c(`Main content`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(v,{title:`Footer`,source:`<pf-panel>
  <pf-panel-main>
    <pf-panel-main-body>Main content</pf-panel-main-body>
  </pf-panel-main>
  <pf-panel-footer>Footer content</pf-panel-footer>
</pf-panel>`},{default:t(()=>[a(_,null,{default:t(()=>[a(g,null,{default:t(()=>[a(h,null,{default:t(()=>[...f[4]||=[c(`Main content`,-1)]]),_:1})]),_:1}),a(x,null,{default:t(()=>[...f[5]||=[c(`Footer content`,-1)]]),_:1})]),_:1})]),_:1}),a(v,{title:`Header and footer`,source:`<pf-panel>
  <pf-panel-header>Header content</pf-panel-header>
  <pf-divider />
  <pf-panel-main>
    <pf-panel-main-body>Main content</pf-panel-main-body>
  </pf-panel-main>
  <pf-panel-footer>Footer content</pf-panel-footer>
</pf-panel>`},{default:t(()=>[a(_,null,{default:t(()=>[a(y,null,{default:t(()=>[...f[6]||=[c(`Header content`,-1)]]),_:1}),a(b),a(g,null,{default:t(()=>[a(h,null,{default:t(()=>[...f[7]||=[c(`Main content`,-1)]]),_:1})]),_:1}),a(x,null,{default:t(()=>[...f[8]||=[c(`Footer content`,-1)]]),_:1})]),_:1})]),_:1}),a(v,{title:`No body`,source:`<pf-panel>
  <pf-panel-main>Main content</pf-panel-main>
</pf-panel>`},{default:t(()=>[a(_,null,{default:t(()=>[a(g,null,{default:t(()=>[...f[9]||=[c(`Main content`,-1)]]),_:1})]),_:1})]),_:1}),a(v,{title:`Raised`,source:`<pf-panel variant="raised">
  <pf-panel-main>
    <pf-panel-main-body>Main content</pf-panel-main-body>
  </pf-panel-main>
</pf-panel>`},{default:t(()=>[a(_,{variant:`raised`},{default:t(()=>[a(g,null,{default:t(()=>[a(h,null,{default:t(()=>[...f[10]||=[c(`Main content`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(v,{title:`Bordered`,source:`<pf-panel variant="bordered">
  <pf-panel-main>
    <pf-panel-main-body>Main content</pf-panel-main-body>
  </pf-panel-main>
</pf-panel>`},{default:t(()=>[a(_,{variant:`bordered`},{default:t(()=>[a(g,null,{default:t(()=>[a(h,null,{default:t(()=>[...f[11]||=[c(`Main content`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(v,{title:`Secondary variant`,source:`<pf-panel variant="secondary">
  <pf-panel-main>
    <pf-panel-main-body>Main content</pf-panel-main-body>
  </pf-panel-main>
</pf-panel>`},{default:t(()=>[a(_,{variant:`secondary`},{default:t(()=>[a(g,null,{default:t(()=>[a(h,null,{default:t(()=>[...f[12]||=[c(`Main content`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(v,{title:`Scrollable`,source:`<pf-panel scrollable>
  <pf-panel-main tabindex="0">
    <pf-panel-main-body>
      <template v-for="i in 9" :key="i">
        <template v-if="i > 1">
          <br>
          <br>
        </template>
        Main content
      </template>
    </pf-panel-main-body>
  </pf-panel-main>
</pf-panel>`},{default:t(()=>[a(_,{scrollable:``},{default:t(()=>[a(g,{tabindex:`0`},{default:t(()=>[a(h,null,{default:t(()=>[(o(),i(l,null,n(9,e=>(o(),i(l,{key:e},[e>1?(o(),i(l,{key:0},[f[13]||=r(`br`,null,null,-1),f[14]||=r(`br`,null,null,-1)],64)):u(``,!0),f[15]||=c(` Main content `,-1)],64))),64))]),_:1})]),_:1})]),_:1})]),_:1}),a(v,{title:`Scrollable with auto height`,source:`<div style="height: 200px">
  <pf-panel scrollable auto-height>
    <pf-panel-main tabindex="0">
      <pf-panel-main-body>
        <template v-for="i in 9" :key="i">
          <template v-if="i > 1">
            <br>
            <br>
          </template>
          Main content
        </template>
      </pf-panel-main-body>
    </pf-panel-main>
  </pf-panel>
</div>`},{default:t(()=>[r(`div`,p,[a(_,{scrollable:``,"auto-height":``},{default:t(()=>[a(g,{tabindex:`0`},{default:t(()=>[a(h,null,{default:t(()=>[(o(),i(l,null,n(9,e=>(o(),i(l,{key:e},[e>1?(o(),i(l,{key:0},[f[16]||=r(`br`,null,null,-1),f[17]||=r(`br`,null,null,-1)],64)):u(``,!0),f[18]||=c(` Main content `,-1)],64))),64))]),_:1})]),_:1})]),_:1})])]),_:1}),a(v,{title:`Scrollable with header and footer`,source:`<pf-panel scrollable>
  <pf-panel-header>Header content</pf-panel-header>
  <pf-divider />
  <pf-panel-main tabindex="0">
    <pf-panel-main-body>
      <template v-for="i in 9" :key="i">
        <template v-if="i > 1">
          <br>
          <br>
        </template>
        Main content
      </template>
    </pf-panel-main-body>
  </pf-panel-main>
  <pf-panel-footer>Footer content</pf-panel-footer>
</pf-panel>`},{default:t(()=>[a(_,{scrollable:``},{default:t(()=>[a(y,null,{default:t(()=>[...f[19]||=[c(`Header content`,-1)]]),_:1}),a(b),a(g,{tabindex:`0`},{default:t(()=>[a(h,null,{default:t(()=>[(o(),i(l,null,n(9,e=>(o(),i(l,{key:e},[e>1?(o(),i(l,{key:0},[f[20]||=r(`br`,null,null,-1),f[21]||=r(`br`,null,null,-1)],64)):u(``,!0),f[22]||=c(` Main content `,-1)],64))),64))]),_:1})]),_:1}),a(x,null,{default:t(()=>[...f[23]||=[c(`Footer content`,-1)]]),_:1})]),_:1})]),_:1}),a(v,{title:`Pill`,source:`<pf-panel pill>
  <pf-panel-main>
    <pf-panel-main-body>Main content</pf-panel-main-body>
  </pf-panel-main>
</pf-panel>`},{default:t(()=>[a(_,{pill:``},{default:t(()=>[a(g,null,{default:t(()=>[a(h,null,{default:t(()=>[...f[24]||=[c(`Main content`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}var h=d(f,[[`render`,m]]);export{h as default};