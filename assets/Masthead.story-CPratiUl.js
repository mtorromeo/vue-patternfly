import{F as e,G as t,c as n,ft as r,g as i,h as a,j as o,l as s,m as c}from"./runtime-core.esm-bundler-DKmYt4j6.js";import{t as l}from"./PF-HorizontalLogo-Color-Wh7jwEKx.js";var u=i({__name:`Masthead.story`,setup(i){return(i,u)=>{let d=e(`component-info`),f=e(`pf-button`),p=e(`pf-masthead-toggle`),m=e(`pf-masthead-logo`),h=e(`pf-masthead-brand`),g=e(`pf-masthead-main`),_=e(`pf-masthead-content`),v=e(`pf-masthead`),y=e(`story-canvas`),b=e(`pf-flex-item`),x=e(`pf-flex`),S=e(`pf-brand`),C=e(`doc-page`);return o(),s(C,{name:`Components/Masthead.story.vue`,title:`Masthead`},{description:t(()=>[...u[0]||=[c(`A `,-1),n(`b`,null,`masthead`,-1),c(` contains global properties such as logotype, navigation and settings in an organized fashion and it is accessible from all parts of the application. All pages should share a common masthead.`,-1)]]),apidocs:t(()=>[a(d,{name:`PfMasthead`,doc:{name:`PfMasthead`,exportName:`PfMasthead`,displayName:`Masthead`,description:``,tags:{},props:[{name:`inset2xl`,required:!1,type:{name:`union`,elements:[{name:`"none"`},{name:`"xs"`},{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`"xl"`},{name:`"2xl"`},{name:`"3xl"`}]}},{name:`insetXl`,required:!1,type:{name:`union`,elements:[{name:`"none"`},{name:`"xs"`},{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`"xl"`},{name:`"2xl"`},{name:`"3xl"`}]}},{name:`insetLg`,required:!1,type:{name:`union`,elements:[{name:`"none"`},{name:`"xs"`},{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`"xl"`},{name:`"2xl"`},{name:`"3xl"`}]}},{name:`insetMd`,required:!1,type:{name:`union`,elements:[{name:`"none"`},{name:`"xs"`},{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`"xl"`},{name:`"2xl"`},{name:`"3xl"`}]}},{name:`insetSm`,required:!1,type:{name:`union`,elements:[{name:`"none"`},{name:`"xs"`},{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`"xl"`},{name:`"2xl"`},{name:`"3xl"`}]}},{name:`inset`,required:!1,type:{name:`union`,elements:[{name:`"none"`},{name:`"xs"`},{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`"xl"`},{name:`"2xl"`},{name:`"3xl"`}]}},{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`display`,description:`Display type at various breakpoints. Without display props, it is inline from the md breakpoint.`,required:!1,type:{name:`union`,elements:[{name:`"inline"`},{name:`"stack"`}]}},{name:`displaySm`,required:!1,type:{name:`union`,elements:[{name:`"inline"`},{name:`"stack"`}]}},{name:`displayMd`,required:!1,type:{name:`union`,elements:[{name:`"inline"`},{name:`"stack"`}]}},{name:`displayLg`,required:!1,type:{name:`union`,elements:[{name:`"inline"`},{name:`"stack"`}]}},{name:`displayXl`,required:!1,type:{name:`union`,elements:[{name:`"inline"`},{name:`"stack"`}]}},{name:`display2xl`,required:!1,type:{name:`union`,elements:[{name:`"inline"`},{name:`"stack"`}]}},{name:`variant`,description:`Indicates the variant of the masthead. Use docked for the content of the dock of a docked page.`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"docked"`}]}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Masthead/Masthead.vue`]}}),a(d,{name:`PfMastheadBrand`,doc:{name:`PfMastheadBrand`,exportName:`PfMastheadBrand`,displayName:`MastheadBrand`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`,description:`The masthead logo, typically a pf-masthead-logo`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Masthead/MastheadBrand.vue`]}}),a(d,{name:`PfMastheadContent`,doc:{name:`PfMastheadContent`,exportName:`PfMastheadContent`,displayName:`MastheadContent`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Masthead/MastheadContent.vue`]}}),a(d,{name:`PfMastheadLogo`,doc:{name:`PfMastheadLogo`,exportName:`PfMastheadLogo`,displayName:`MastheadLogo`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`component`,description:`Component type of the masthead logo. Defaults to an anchor with href or to, a span otherwise.`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Component`}]}},{name:`href`,description:`Href of the logo link`,required:!1,type:{name:`string`}},{name:`to`,description:`vue-router destination, rendering the logo as a router link`,required:!1,type:{name:`RouteLocationRaw`}},{name:`replace`,description:`Replaces the current navigation entry when navigating with to`,required:!1,type:{name:`boolean`}},{name:`compact`,tags:{beta:[{description:`Flag indicating the logo is a compact variant. Used in docked layouts.`,title:`beta`}]},required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Masthead/MastheadLogo.vue`]}}),a(d,{name:`PfMastheadMain`,doc:{name:`PfMastheadMain`,exportName:`PfMastheadMain`,displayName:`MastheadMain`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Masthead/MastheadMain.vue`]}}),a(d,{name:`PfMastheadToggle`,doc:{name:`PfMastheadToggle`,exportName:`PfMastheadToggle`,displayName:`MastheadToggle`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Masthead/MastheadToggle.vue`]}})]),default:t(()=>[u[18]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),n(`ul`,null,[n(`li`,null,[c(`The `),n(`code`,null,`display`),c(` and `),n(`code`,null,`inset`),c(` breakpoint objects are replaced by the `),n(`code`,null,`display`),c(`, `),n(`code`,null,`display-sm`),c(`, … and `),n(`code`,null,`inset`),c(`, `),n(`code`,null,`inset-sm`),c(`, … props.`)]),n(`li`,null,[n(`code`,null,`pf-masthead-logo`),c(` renders a vue-router link with the `),n(`code`,null,`to`),c(` prop. See `),n(`a`,{href:`#/`},`common differences from patternfly-react`),c(`.`)])]),n(`h2`,{class:`pf-v6-c-title`},`Examples`),n(`p`,null,[c(`To maintain proper layout and formatting, a `),n(`code`,null,`pf-masthead`),c(` should contain both a `),n(`code`,null,`pf-masthead-main`),c(` and `),n(`code`,null,`pf-masthead-content`),c(` component.`)]),n(`p`,null,[c(`Mastheads contain the `),n(`code`,null,`pf-masthead-main`),c(` that wraps a `),n(`code`,null,`pf-page-toggle-button`),c(` and `),n(`code`,null,`pf-masthead-brand`),c(`. The `),n(`code`,null,`pf-masthead-brand`),c(` wraps `),n(`code`,null,`pf-masthead-logo`),c(`. The masthead also contains the page's header toolbar within `),n(`code`,null,`pf-masthead-content`),c(`.`)])],-1),a(y,{title:`Basic`,source:`<pf-masthead id="basic-example">
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
</pf-masthead>`},{default:t(()=>[a(v,{id:`basic-example`},{default:t(()=>[a(g,null,{default:t(()=>[a(p,null,{default:t(()=>[a(f,{variant:`plain`,hamburger:``,"aria-label":`Global navigation`})]),_:1}),a(h,null,{default:t(()=>[a(m,{component:`a`},{default:t(()=>[...u[1]||=[c(`Logo`,-1)]]),_:1})]),_:1})]),_:1}),a(_,null,{default:t(()=>[...u[2]||=[n(`span`,null,`Content`,-1)]]),_:1})]),_:1})]),_:1}),a(y,{title:`Basic with mixed content`,source:`<pf-masthead id="basic-mixed">
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
</pf-masthead>`},{default:t(()=>[a(v,{id:`basic-mixed`},{default:t(()=>[a(g,null,{default:t(()=>[a(p,null,{default:t(()=>[a(f,{variant:`plain`,hamburger:``,"aria-label":`Global navigation`})]),_:1}),a(h,null,{default:t(()=>[a(m,{component:`a`},{default:t(()=>[...u[3]||=[c(`Logo`,-1)]]),_:1})]),_:1})]),_:1}),a(_,null,{default:t(()=>[a(x,null,{default:t(()=>[u[7]||=n(`span`,null,`Content`,-1),a(f,null,{default:t(()=>[...u[4]||=[c(`Primary`,-1)]]),_:1}),a(b,{"align-self":`flex-end`},{default:t(()=>[a(f,{variant:`secondary`},{default:t(()=>[...u[5]||=[c(`Secondary`,-1)]]),_:1})]),_:1}),a(b,{"align-self":`flex-end`},{default:t(()=>[a(f,{variant:`tertiary`},{default:t(()=>[...u[6]||=[c(`Tertiary`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(y,{title:`Display inline`,source:`<pf-masthead id="inline-masthead" display="inline">
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
</pf-masthead>`},{default:t(()=>[a(v,{id:`inline-masthead`,display:`inline`},{default:t(()=>[a(g,null,{default:t(()=>[a(p,null,{default:t(()=>[a(f,{variant:`plain`,hamburger:``,"aria-label":`Global navigation`})]),_:1}),a(h,null,{default:t(()=>[a(m,{component:`a`},{default:t(()=>[...u[8]||=[c(`Logo`,-1)]]),_:1})]),_:1})]),_:1}),a(_,null,{default:t(()=>[...u[9]||=[n(`span`,null,`Content`,-1)]]),_:1})]),_:1})]),_:1}),a(y,{title:`Display stack`,source:`<pf-masthead id="stack-masthead" display="stack">
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
</pf-masthead>`},{default:t(()=>[a(v,{id:`stack-masthead`,display:`stack`},{default:t(()=>[a(g,null,{default:t(()=>[a(p,null,{default:t(()=>[a(f,{variant:`plain`,hamburger:``,"aria-label":`Global navigation`})]),_:1}),a(h,null,{default:t(()=>[a(m,{component:`a`},{default:t(()=>[...u[10]||=[c(`Logo`,-1)]]),_:1})]),_:1})]),_:1}),a(_,null,{default:t(()=>[...u[11]||=[n(`span`,null,`Content`,-1)]]),_:1})]),_:1})]),_:1}),a(y,{title:`Display stack, display inline responsive`,source:`<pf-masthead id="stack-inline-masthead" display="inline" display-lg="stack" display-2xl="inline">
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
</pf-masthead>`},{default:t(()=>[a(v,{id:`stack-inline-masthead`,display:`inline`,"display-lg":`stack`,"display-2xl":`inline`},{default:t(()=>[a(g,null,{default:t(()=>[a(p,null,{default:t(()=>[a(f,{variant:`plain`,hamburger:``,"aria-label":`Global navigation`})]),_:1}),a(h,null,{default:t(()=>[a(m,{component:`a`},{default:t(()=>[...u[12]||=[c(`Logo`,-1)]]),_:1})]),_:1})]),_:1}),a(_,null,{default:t(()=>[...u[13]||=[n(`span`,null,`Content`,-1)]]),_:1})]),_:1})]),_:1}),a(y,{title:`Inset`,source:`<pf-masthead id="inset-masthead" inset="sm">
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
</pf-masthead>`},{default:t(()=>[a(v,{id:`inset-masthead`,inset:`sm`},{default:t(()=>[a(g,null,{default:t(()=>[a(p,null,{default:t(()=>[a(f,{variant:`plain`,hamburger:``,"aria-label":`Global navigation`})]),_:1}),a(h,null,{default:t(()=>[a(m,{component:`a`},{default:t(()=>[...u[14]||=[c(`Logo`,-1)]]),_:1})]),_:1})]),_:1}),a(_,null,{default:t(()=>[...u[15]||=[n(`span`,null,`Content`,-1)]]),_:1})]),_:1})]),_:1}),a(y,{title:`Custom logo component`,source:`<pf-masthead id="icon-router-link">
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
</pf-masthead>`},{intro:t(()=>[...u[16]||=[n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[n(`code`,null,`pf-masthead-logo`),c(` renders an anchor with `),n(`code`,null,`href`),c(`, and a vue-router link with `),n(`code`,null,`to`),c(`, for in-app linking without reloading the page. Any other element or component can be passed to its `),n(`code`,null,`component`),c(` prop.`)])],-1)]]),default:t(()=>[a(v,{id:`icon-router-link`},{default:t(()=>[a(g,null,{default:t(()=>[a(p,null,{default:t(()=>[a(f,{variant:`plain`,hamburger:``,"aria-label":`Global navigation`})]),_:1}),a(h,null,{default:t(()=>[a(m,{to:`/`},{default:t(()=>[a(S,{src:r(l),alt:`PatternFly`,height:`36px`},null,8,[`src`])]),_:1})]),_:1})]),_:1}),a(_,null,{default:t(()=>[...u[17]||=[n(`span`,null,`Content`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})}}});export{u as default};