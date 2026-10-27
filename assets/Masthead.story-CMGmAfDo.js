import{F as e,K as t,c as n,g as r,h as i,j as a,l as o,m as s,pt as c}from"./runtime-core.esm-bundler-DO1530YC.js";import{t as l}from"./PF-HorizontalLogo-Color-Wh7jwEKx.js";var u=r({__name:`Masthead.story`,setup(r){return(r,u)=>{let d=e(`component-info`),f=e(`pf-button`),p=e(`pf-masthead-toggle`),m=e(`pf-masthead-logo`),h=e(`pf-masthead-brand`),g=e(`pf-masthead-main`),_=e(`pf-masthead-content`),v=e(`pf-masthead`),y=e(`story-canvas`),b=e(`pf-flex-item`),x=e(`pf-flex`),S=e(`pf-brand`),C=e(`doc-page`);return a(),o(C,{name:`Components/Masthead.story.vue`,title:`Masthead`},{description:t(()=>[...u[0]||=[s(`A `,-1),n(`b`,null,`masthead`,-1),s(` contains global properties such as logotype, navigation and settings in an organized fashion and it is accessible from all parts of the application. All pages should share a common masthead.`,-1)]]),apidocs:t(()=>[i(d,{name:`PfMasthead`,doc:{name:`PfMasthead`,exportName:`PfMasthead`,displayName:`Masthead`,description:``,tags:{},props:[{name:`inset2xl`,required:!1,type:{name:`union`,elements:[{name:`"none"`},{name:`"xs"`},{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`"xl"`},{name:`"2xl"`},{name:`"3xl"`}]}},{name:`insetXl`,required:!1,type:{name:`union`,elements:[{name:`"none"`},{name:`"xs"`},{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`"xl"`},{name:`"2xl"`},{name:`"3xl"`}]}},{name:`insetLg`,required:!1,type:{name:`union`,elements:[{name:`"none"`},{name:`"xs"`},{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`"xl"`},{name:`"2xl"`},{name:`"3xl"`}]}},{name:`insetMd`,required:!1,type:{name:`union`,elements:[{name:`"none"`},{name:`"xs"`},{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`"xl"`},{name:`"2xl"`},{name:`"3xl"`}]}},{name:`insetSm`,required:!1,type:{name:`union`,elements:[{name:`"none"`},{name:`"xs"`},{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`"xl"`},{name:`"2xl"`},{name:`"3xl"`}]}},{name:`inset`,required:!1,type:{name:`union`,elements:[{name:`"none"`},{name:`"xs"`},{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`"xl"`},{name:`"2xl"`},{name:`"3xl"`}]}},{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`display`,description:`Display type at various breakpoints. Without display props, it is inline from the md breakpoint.`,required:!1,type:{name:`union`,elements:[{name:`"inline"`},{name:`"stack"`}]}},{name:`displaySm`,required:!1,type:{name:`union`,elements:[{name:`"inline"`},{name:`"stack"`}]}},{name:`displayMd`,required:!1,type:{name:`union`,elements:[{name:`"inline"`},{name:`"stack"`}]}},{name:`displayLg`,required:!1,type:{name:`union`,elements:[{name:`"inline"`},{name:`"stack"`}]}},{name:`displayXl`,required:!1,type:{name:`union`,elements:[{name:`"inline"`},{name:`"stack"`}]}},{name:`display2xl`,required:!1,type:{name:`union`,elements:[{name:`"inline"`},{name:`"stack"`}]}},{name:`variant`,description:`Indicates the variant of the masthead. Use docked for the content of the dock of a docked page.`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"docked"`}]}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Masthead/Masthead.vue`]}}),i(d,{name:`PfMastheadBrand`,doc:{name:`PfMastheadBrand`,exportName:`PfMastheadBrand`,displayName:`MastheadBrand`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`,description:`The masthead logo, typically a pf-masthead-logo`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Masthead/MastheadBrand.vue`]}}),i(d,{name:`PfMastheadContent`,doc:{name:`PfMastheadContent`,exportName:`PfMastheadContent`,displayName:`MastheadContent`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Masthead/MastheadContent.vue`]}}),i(d,{name:`PfMastheadLogo`,doc:{name:`PfMastheadLogo`,exportName:`PfMastheadLogo`,displayName:`MastheadLogo`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`component`,description:`Component type of the masthead logo. Defaults to an anchor with href or to, a span otherwise.`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Component`}]}},{name:`href`,description:`Href of the logo link`,required:!1,type:{name:`string`}},{name:`to`,description:`vue-router destination, rendering the logo as a router link`,required:!1,type:{name:`RouteLocationRaw`}},{name:`replace`,description:`Replaces the current navigation entry when navigating with to`,required:!1,type:{name:`boolean`}},{name:`compact`,tags:{beta:[{description:`Flag indicating the logo is a compact variant. Used in docked layouts.`,title:`beta`}]},required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Masthead/MastheadLogo.vue`]}}),i(d,{name:`PfMastheadMain`,doc:{name:`PfMastheadMain`,exportName:`PfMastheadMain`,displayName:`MastheadMain`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Masthead/MastheadMain.vue`]}}),i(d,{name:`PfMastheadToggle`,doc:{name:`PfMastheadToggle`,exportName:`PfMastheadToggle`,displayName:`MastheadToggle`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Masthead/MastheadToggle.vue`]}})]),default:t(()=>[u[18]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),n(`ul`,null,[n(`li`,null,[s(`The `),n(`code`,null,`display`),s(` and `),n(`code`,null,`inset`),s(` breakpoint objects are replaced by the `),n(`code`,null,`display`),s(`, `),n(`code`,null,`display-sm`),s(`, … and `),n(`code`,null,`inset`),s(`, `),n(`code`,null,`inset-sm`),s(`, … props.`)]),n(`li`,null,[n(`code`,null,`pf-masthead-logo`),s(` renders a vue-router link with the `),n(`code`,null,`to`),s(` prop. See `),n(`a`,{href:`#/`},`common differences from patternfly-react`),s(`.`)])]),n(`h2`,{class:`pf-v6-c-title`},`Examples`),n(`p`,null,[s(`To maintain proper layout and formatting, a `),n(`code`,null,`pf-masthead`),s(` should contain both a `),n(`code`,null,`pf-masthead-main`),s(` and `),n(`code`,null,`pf-masthead-content`),s(` component.`)]),n(`p`,null,[s(`Mastheads contain the `),n(`code`,null,`pf-masthead-main`),s(` that wraps a `),n(`code`,null,`pf-page-toggle-button`),s(` and `),n(`code`,null,`pf-masthead-brand`),s(`. The `),n(`code`,null,`pf-masthead-brand`),s(` wraps `),n(`code`,null,`pf-masthead-logo`),s(`. The masthead also contains the page's header toolbar within `),n(`code`,null,`pf-masthead-content`),s(`.`)])],-1),i(y,{title:`Basic`,source:`<pf-masthead id="basic-example">
  <pf-masthead-main>
    <pf-masthead-toggle>
      <pf-button variant="plain" hamburger aria-label="Global navigation" />
    </pf-masthead-toggle>
    <pf-masthead-brand>
      <pf-masthead-logo component="a">Logo</pf-masthead-logo>
    </pf-masthead-brand>
  </pf-masthead-main>
  <pf-masthead-content>
    <span>Content</span>
  </pf-masthead-content>
</pf-masthead>`},{default:t(()=>[i(v,{id:`basic-example`},{default:t(()=>[i(g,null,{default:t(()=>[i(p,null,{default:t(()=>[i(f,{variant:`plain`,hamburger:``,"aria-label":`Global navigation`})]),_:1}),i(h,null,{default:t(()=>[i(m,{component:`a`},{default:t(()=>[...u[1]||=[s(`Logo`,-1)]]),_:1})]),_:1})]),_:1}),i(_,null,{default:t(()=>[...u[2]||=[n(`span`,null,`Content`,-1)]]),_:1})]),_:1})]),_:1}),i(y,{title:`Basic with mixed content`,source:`<pf-masthead id="basic-mixed">
  <pf-masthead-main>
    <pf-masthead-toggle>
      <pf-button variant="plain" hamburger aria-label="Global navigation" />
    </pf-masthead-toggle>
    <pf-masthead-brand>
      <pf-masthead-logo component="a">Logo</pf-masthead-logo>
    </pf-masthead-brand>
  </pf-masthead-main>
  <pf-masthead-content>
    <pf-flex>
      <span>Content</span>
      <pf-button>Primary</pf-button>
      <pf-flex-item align-self="flex-end">
        <pf-button variant="secondary">Secondary</pf-button>
      </pf-flex-item>
      <pf-flex-item align-self="flex-end">
        <pf-button variant="tertiary">Tertiary</pf-button>
      </pf-flex-item>
    </pf-flex>
  </pf-masthead-content>
</pf-masthead>`},{default:t(()=>[i(v,{id:`basic-mixed`},{default:t(()=>[i(g,null,{default:t(()=>[i(p,null,{default:t(()=>[i(f,{variant:`plain`,hamburger:``,"aria-label":`Global navigation`})]),_:1}),i(h,null,{default:t(()=>[i(m,{component:`a`},{default:t(()=>[...u[3]||=[s(`Logo`,-1)]]),_:1})]),_:1})]),_:1}),i(_,null,{default:t(()=>[i(x,null,{default:t(()=>[u[7]||=n(`span`,null,`Content`,-1),i(f,null,{default:t(()=>[...u[4]||=[s(`Primary`,-1)]]),_:1}),i(b,{"align-self":`flex-end`},{default:t(()=>[i(f,{variant:`secondary`},{default:t(()=>[...u[5]||=[s(`Secondary`,-1)]]),_:1})]),_:1}),i(b,{"align-self":`flex-end`},{default:t(()=>[i(f,{variant:`tertiary`},{default:t(()=>[...u[6]||=[s(`Tertiary`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),i(y,{title:`Display inline`,source:`<pf-masthead id="inline-masthead" display="inline">
  <pf-masthead-main>
    <pf-masthead-toggle>
      <pf-button variant="plain" hamburger aria-label="Global navigation" />
    </pf-masthead-toggle>
    <pf-masthead-brand>
      <pf-masthead-logo component="a">Logo</pf-masthead-logo>
    </pf-masthead-brand>
  </pf-masthead-main>
  <pf-masthead-content>
    <span>Content</span>
  </pf-masthead-content>
</pf-masthead>`},{default:t(()=>[i(v,{id:`inline-masthead`,display:`inline`},{default:t(()=>[i(g,null,{default:t(()=>[i(p,null,{default:t(()=>[i(f,{variant:`plain`,hamburger:``,"aria-label":`Global navigation`})]),_:1}),i(h,null,{default:t(()=>[i(m,{component:`a`},{default:t(()=>[...u[8]||=[s(`Logo`,-1)]]),_:1})]),_:1})]),_:1}),i(_,null,{default:t(()=>[...u[9]||=[n(`span`,null,`Content`,-1)]]),_:1})]),_:1})]),_:1}),i(y,{title:`Display stack`,source:`<pf-masthead id="stack-masthead" display="stack">
  <pf-masthead-main>
    <pf-masthead-toggle>
      <pf-button variant="plain" hamburger aria-label="Global navigation" />
    </pf-masthead-toggle>
    <pf-masthead-brand>
      <pf-masthead-logo component="a">Logo</pf-masthead-logo>
    </pf-masthead-brand>
  </pf-masthead-main>
  <pf-masthead-content>
    <span>Content</span>
  </pf-masthead-content>
</pf-masthead>`},{default:t(()=>[i(v,{id:`stack-masthead`,display:`stack`},{default:t(()=>[i(g,null,{default:t(()=>[i(p,null,{default:t(()=>[i(f,{variant:`plain`,hamburger:``,"aria-label":`Global navigation`})]),_:1}),i(h,null,{default:t(()=>[i(m,{component:`a`},{default:t(()=>[...u[10]||=[s(`Logo`,-1)]]),_:1})]),_:1})]),_:1}),i(_,null,{default:t(()=>[...u[11]||=[n(`span`,null,`Content`,-1)]]),_:1})]),_:1})]),_:1}),i(y,{title:`Display stack, display inline responsive`,source:`<pf-masthead id="stack-inline-masthead" display="inline" display-lg="stack" display-2xl="inline">
  <pf-masthead-main>
    <pf-masthead-toggle>
      <pf-button variant="plain" hamburger aria-label="Global navigation" />
    </pf-masthead-toggle>
    <pf-masthead-brand>
      <pf-masthead-logo component="a">Logo</pf-masthead-logo>
    </pf-masthead-brand>
  </pf-masthead-main>
  <pf-masthead-content>
    <span>Content</span>
  </pf-masthead-content>
</pf-masthead>`},{default:t(()=>[i(v,{id:`stack-inline-masthead`,display:`inline`,"display-lg":`stack`,"display-2xl":`inline`},{default:t(()=>[i(g,null,{default:t(()=>[i(p,null,{default:t(()=>[i(f,{variant:`plain`,hamburger:``,"aria-label":`Global navigation`})]),_:1}),i(h,null,{default:t(()=>[i(m,{component:`a`},{default:t(()=>[...u[12]||=[s(`Logo`,-1)]]),_:1})]),_:1})]),_:1}),i(_,null,{default:t(()=>[...u[13]||=[n(`span`,null,`Content`,-1)]]),_:1})]),_:1})]),_:1}),i(y,{title:`Inset`,source:`<pf-masthead id="inset-masthead" inset="sm">
  <pf-masthead-main>
    <pf-masthead-toggle>
      <pf-button variant="plain" hamburger aria-label="Global navigation" />
    </pf-masthead-toggle>
    <pf-masthead-brand>
      <pf-masthead-logo component="a">Logo</pf-masthead-logo>
    </pf-masthead-brand>
  </pf-masthead-main>
  <pf-masthead-content>
    <span>Content</span>
  </pf-masthead-content>
</pf-masthead>`},{default:t(()=>[i(v,{id:`inset-masthead`,inset:`sm`},{default:t(()=>[i(g,null,{default:t(()=>[i(p,null,{default:t(()=>[i(f,{variant:`plain`,hamburger:``,"aria-label":`Global navigation`})]),_:1}),i(h,null,{default:t(()=>[i(m,{component:`a`},{default:t(()=>[...u[14]||=[s(`Logo`,-1)]]),_:1})]),_:1})]),_:1}),i(_,null,{default:t(()=>[...u[15]||=[n(`span`,null,`Content`,-1)]]),_:1})]),_:1})]),_:1}),i(y,{title:`Custom logo component`,source:`<pf-masthead id="icon-router-link">
  <pf-masthead-main>
    <pf-masthead-toggle>
      <pf-button variant="plain" hamburger aria-label="Global navigation" />
    </pf-masthead-toggle>
    <pf-masthead-brand>
      <pf-masthead-logo to="/">
        <pf-brand :src="pfLogo" alt="PatternFly" height="36px" />
      </pf-masthead-logo>
    </pf-masthead-brand>
  </pf-masthead-main>
  <pf-masthead-content>
    <span>Content</span>
  </pf-masthead-content>
</pf-masthead>`},{intro:t(()=>[...u[16]||=[n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[n(`code`,null,`pf-masthead-logo`),s(` renders an anchor with `),n(`code`,null,`href`),s(`, and a vue-router link with `),n(`code`,null,`to`),s(`, for in-app linking without reloading the page. Any other element or component can be passed to its `),n(`code`,null,`component`),s(` prop.`)])],-1)]]),default:t(()=>[i(v,{id:`icon-router-link`},{default:t(()=>[i(g,null,{default:t(()=>[i(p,null,{default:t(()=>[i(f,{variant:`plain`,hamburger:``,"aria-label":`Global navigation`})]),_:1}),i(h,null,{default:t(()=>[i(m,{to:`/`},{default:t(()=>[i(S,{src:c(l),alt:`PatternFly`,height:`36px`},null,8,[`src`])]),_:1})]),_:1})]),_:1}),i(_,null,{default:t(()=>[...u[17]||=[n(`span`,null,`Content`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})}}});export{u as default};