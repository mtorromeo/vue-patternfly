import{H as e,N as t,Q as n,c as r,h as i,it as a,k as o,m as s,p as c,s as l}from"./runtime-core.esm-bundler-Ce-wEYeq.js";import{f as u,o as d}from"./index-D0FMr6Cn.js";var f=i({__name:`Page.story`,setup(i){let f=n(!1);return(n,i)=>{let p=t(`component-info`),m=t(`pf-page-toggle-button`),h=t(`pf-masthead-toggle`),g=t(`pf-masthead-brand`),_=t(`router-link`),v=t(`pf-masthead-main`),y=t(`pf-toolbar-item`),b=t(`pf-toolbar-content`),x=t(`pf-toolbar`),S=t(`pf-masthead-content`),C=t(`pf-masthead`),w=t(`pf-nav-item`),T=t(`pf-nav-group`),E=t(`pf-nav`),D=t(`pf-page-sidebar`),O=t(`pf-breadcrumb-item`),k=t(`pf-breadcrumb`),A=t(`pf-page-breadcrumb`),j=t(`pf-page-section`),M=t(`pf-page`),N=t(`story-canvas`),P=t(`pf-card-body`),F=t(`pf-card`),I=t(`pf-notification-badge`),L=t(`pf-toolbar-group`),R=t(`pf-menu-toggle`),z=t(`pf-dropdown-item`),B=t(`pf-dropdown`),V=t(`pf-notification-drawer-header`),H=t(`pf-notification-drawer-list-item-header`),U=t(`pf-notification-drawer-list-item-body`),W=t(`pf-notification-drawer-list-item`),G=t(`pf-notification-drawer-list`),K=t(`pf-notification-drawer-group`),q=t(`pf-empty-state-header`),J=t(`pf-empty-state-body`),Y=t(`pf-button`),X=t(`pf-empty-state-actions`),Z=t(`pf-empty-state-footer`),Q=t(`pf-empty-state`),$=t(`pf-notification-drawer-group-list`),ee=t(`pf-notification-drawer-body`),te=t(`pf-notification-drawer`),ne=t(`doc-page`);return o(),r(ne,{name:`Components/Page.story.vue`,title:`Page`},{description:e(()=>[...i[1]||=[c(`The `,-1),l(`b`,null,`page`,-1),c(` component is used to define the basic layout of a page with either vertical or horizontal navigation.`,-1)]]),apidocs:e(()=>[s(p,{name:`PfPage`,doc:{name:`PfPage`,exportName:`PfPage`,displayName:`Page`,description:``,tags:{},expose:[{name:`navToggle`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`role`,description:`Sets the value for role on the <main> element`,required:!1,type:{name:`string`}},{name:`mainContainerId`,description:`an id to use for the [role="main"] element`,required:!1,type:{name:`string`}},{name:`mainTabIndex`,description:`tabIndex to use for the [role="main"] element, null to unset it`,required:!1,type:{name:`number`}},{name:`managedSidebar`,description:`If true, manages the sidebar open/close state and there is no need to pass the isSidebarOpen boolean into
the sidebar component or add a callback onNavToggle function into the PageHeader component`,required:!1,type:{name:`boolean`}},{name:`tertiaryNavWidthLimited`,description:`Flag indicating if tertiary nav width should be limited`,required:!1,type:{name:`boolean`}},{name:`notificationDrawerExpanded`,description:`Flag indicating Notification drawer in expanded`,required:!1,type:{name:`boolean`}},{name:`defaultManagedSidebarOpen`,description:`If true, the managed sidebar is initially open for desktop view`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`mainAriaLabel`,description:`Accessible label, can be used to name main section`,required:!1,type:{name:`string`}},{name:`drawerExpanded`,description:`Flag indicating Notification drawer in expanded`,required:!1,type:{name:`boolean`}},{name:`mainComponent`,description:`HTML component used as main component of the page. Defaults to 'main', only pass in 'div' if another 'main' element already exists.`,required:!1,type:{name:`union`,elements:[{name:`"main"`},{name:`"div"`}]},defaultValue:{func:!1,value:`'main'`}},{name:`contentFilled`,description:`Enables children to fill the available vertical space. Child page sections or groups that should fill should be passed the isFilled property.`,required:!1,type:{name:`boolean`}}],events:[{name:`pageResize`,type:{names:[`{ mobileView: boolean, windowSize: number }`]}}],slots:[{name:`default`},{name:`skeleton`},{name:`drawer`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Page/Page.vue`]}}),s(p,{name:`PfPageBreadcrumb`,doc:{name:`PfPageBreadcrumb`,exportName:`PfPageBreadcrumb`,displayName:`PageBreadcrumb`,description:``,tags:{},props:[{name:`sticky2xl`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyXl`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyLg`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyMd`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickySm`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`sticky`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`widthLimited`,description:`Limits the width of the breadcrumb`,required:!1,type:{name:`boolean`}},{name:`maxWidth`,description:`Limits the width of the section and sets the --pf-v6-c-page--section--m-limit-width--MaxWidth variable to this value`,required:!1,type:{name:`string`}},{name:`shadowTop`,description:`Flag indicating if PageBreadcrumb should have a shadow at the top`,required:!1,type:{name:`boolean`}},{name:`shadowBottom`,description:`Flag indicating if PageBreadcrumb should have a shadow at the bottom`,required:!1,type:{name:`boolean`}},{name:`overflowScroll`,description:`Flag indicating if the PageBreadcrumb has a scrolling overflow`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Page/PageBreadcrumb.vue`]}}),s(p,{name:`PfPageGroup`,doc:{name:`PfPageGroup`,exportName:`PfPageGroup`,displayName:`PageGroup`,description:``,tags:{},props:[{name:`sticky2xl`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyXl`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyLg`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyMd`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickySm`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`sticky`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`shadowTop`,description:`Flag indicating if PageBreadcrumb should have a shadow at the top`,required:!1,type:{name:`boolean`}},{name:`shadowBottom`,description:`Flag indicating if PageBreadcrumb should have a shadow at the bottom`,required:!1,type:{name:`boolean`}},{name:`overflowScroll`,description:`Flag indicating if the PageBreadcrumb has a scrolling overflow`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Page/PageGroup.vue`]}}),s(p,{name:`PfPageSection`,doc:{name:`PfPageSection`,exportName:`PfPageSection`,displayName:`PageSection`,description:``,tags:{},props:[{name:`sticky2xl`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyXl`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyLg`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyMd`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickySm`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`sticky`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`padding2xl`,required:!1,type:{name:`union`,elements:[{name:`"padding"`},{name:`"no-padding"`}]}},{name:`paddingXl`,required:!1,type:{name:`union`,elements:[{name:`"padding"`},{name:`"no-padding"`}]}},{name:`paddingLg`,required:!1,type:{name:`union`,elements:[{name:`"padding"`},{name:`"no-padding"`}]}},{name:`paddingMd`,required:!1,type:{name:`union`,elements:[{name:`"padding"`},{name:`"no-padding"`}]}},{name:`paddingSm`,required:!1,type:{name:`union`,elements:[{name:`"padding"`},{name:`"no-padding"`}]}},{name:`padding`,required:!1,type:{name:`union`,elements:[{name:`"padding"`},{name:`"no-padding"`}]}},{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`variant`,description:`Section background color variant`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"secondary"`}]},defaultValue:{func:!1,value:`'default'`}},{name:`type`,description:`Section type variant`,required:!1,type:{name:`TSTypeOperator`},defaultValue:{func:!1,value:`'default'`}},{name:`filled`,description:`Enables the page section to fill the available vertical space`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`widthLimited`,description:`Limits the width of the section`,required:!1,type:{name:`boolean`}},{name:`maxWidth`,description:`Limits the width of the section and sets the --pf-v6-c-page--section--m-limit-width--MaxWidth variable to this value`,required:!1,type:{name:`string`}},{name:`centerAligned`,description:`Flag indicating if the section content is center aligned. Either widthLimited or maxWidth must be set for this to work`,required:!1,type:{name:`boolean`}},{name:`shadowTop`,description:`Modifier indicating if PageSection should have a shadow at the top`,required:!1,type:{name:`boolean`}},{name:`shadowBottom`,description:`Modifier indicating if PageSection should have a shadow at the bottom`,required:!1,type:{name:`boolean`}},{name:`overflowScroll`,description:`Flag indicating if the PageSection has a scrolling overflow`,required:!1,type:{name:`boolean`}},{name:`component`,description:`Sets the base component to render. Defaults to section`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Component`}]},defaultValue:{func:!1,value:`'section' as any`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Page/PageSection.vue`]}}),s(p,{name:`PfPageSidebar`,doc:{name:`PfPageSidebar`,exportName:`PfPageSidebar`,displayName:`PageSidebar`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`id`,description:`Sidebar id`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'page-sidebar'`}},{name:`sidebarOpen`,description:`Programmatically manage if the side nav is shown, if managedSidebar is set to true in the PfPage component, this prop is managed`,required:!1,type:{name:`boolean`}},{name:`theme`,description:`Indicates the color scheme of the sidebar`,required:!1,type:{name:`union`,elements:[{name:`"light"`},{name:`"dark"`}]},defaultValue:{func:!1,value:`'dark'`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Page/PageSidebar.vue`]}}),s(p,{name:`PfPageSidebarBody`,doc:{name:`PfPageSidebarBody`,exportName:`PfPageSidebarBody`,displayName:`PageSidebarBody`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`insets`,description:`Flag indicating that the page sidebar body should use page insets.`,required:!1,type:{name:`boolean`}},{name:`filled`,description:`Flag indicating that the page sidebar body should fill the available vertical space.`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Page/PageSidebarBody.vue`]}}),s(p,{name:`PfPageToggleButton`,doc:{name:`PfPageToggleButton`,exportName:`PfPageToggleButton`,displayName:`PageToggleButton`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`id`,description:`Sidebar id`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'nav-toggle'`}},{name:`sidebarOpen`,description:`Programmatically manage if the side nav is shown, if managedSidebar is set to true in the PfPage component, this prop is managed`,required:!1,type:{name:`boolean`}}],events:[{name:`update:sidebarOpen`,type:{names:[`boolean`]}}],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Page/PageToggleButton.vue`]}})]),default:e(()=>[i[46]||=l(`div`,{class:`markdown pf-v6-c-content`},[l(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),l(`ul`,null,[l(`li`,null,[l(`code`,null,`pf-page-breadcrumb`),c(` and `),l(`code`,null,`pf-page-section`),c(` can be limited in width by setting their `),l(`code`,null,`max-width`),c(` prop.`)])]),l(`h2`,{class:`pf-v6-c-title`},`Examples`),l(`h3`,{class:`pf-v6-c-title`},`Basic page components`),l(`p`,null,`A page will typically contain the following components:`),l(`ul`,null,[l(`li`,null,[c(`A `),l(`code`,null,`<pf-page>`),c(` with a `),l(`code`,null,`header`),c(` that often contains a `),l(`a`,{href:`#/stories/components/masthead`},`masthead`),l(`ul`,null,[l(`li`,null,[c(`Mastheads contain the `),l(`code`,null,`<pf-page-toggle-button>`),c(`, a `),l(`code`,null,`<pf-masthead-main>`),c(` that contains a `),l(`code`,null,`<pf-masthead-brand>`),c(`, and the page's header toolbar within `),l(`code`,null,`<pf-masthead-content>`),c(`.`)])])]),l(`li`,null,[c(`1 or more `),l(`code`,null,`<pf-page-sidebar-body>`),c(` components inside `),l(`code`,null,`<pf-page-sidebar>`),c(` for vertical navigation or other sidebar content`)]),l(`li`,null,[c(`1 or more `),l(`code`,null,`<pf-page-section>`),c(` components`)])])],-1),s(N,{title:`Vertical Navigation`,source:`<pf-page managed-sidebar style="height:500px">
  <template #skeleton>
    <pf-masthead>
      <pf-masthead-main>
        <pf-masthead-toggle>
          <pf-page-toggle-button hamburger />
        </pf-masthead-toggle>

        <router-link v-slot="{ href }" :to="{ name: 'introduction' }" custom>
          <pf-masthead-brand :href="href">
            Logo
          </pf-masthead-brand>
        </router-link>
      </pf-masthead-main>

      <pf-masthead-content>
        <pf-toolbar full-height>
          <pf-toolbar-content>
            <pf-toolbar-item>header-tools</pf-toolbar-item>
          </pf-toolbar-content>
        </pf-toolbar>
      </pf-masthead-content>
    </pf-masthead>

    <pf-page-sidebar>
      <pf-nav>
        <pf-nav-group title="Overview">
          <pf-nav-item>Home</pf-nav-item>
        </pf-nav-group>
        <pf-nav-group title="Components">
          <pf-nav-item>Accordion</pf-nav-item>
          <pf-nav-item>Alert</pf-nav-item>
        </pf-nav-group>
      </pf-nav>
    </pf-page-sidebar>
  </template>

  <pf-page-breadcrumb sticky="top" shadow-bottom>
    <pf-breadcrumb>
      <pf-breadcrumb-item href="#">Section home</pf-breadcrumb-item>
      <pf-breadcrumb-item href="#">Section title</pf-breadcrumb-item>
      <pf-breadcrumb-item href="#">Section title</pf-breadcrumb-item>
      <pf-breadcrumb-item href="#" active>Section landing</pf-breadcrumb-item>
    </pf-breadcrumb>
  </pf-page-breadcrumb>

  <pf-page-section>Section 1</pf-page-section>
  <pf-page-section variant="secondary">Section 2 with secondary styling</pf-page-section>
  <pf-page-section>Section 3</pf-page-section>
</pf-page>`},{intro:e(()=>[...i[2]||=[l(`div`,{class:`markdown pf-v6-c-content`},[l(`p`,null,[c(`To add a vertical sidebar to a `),l(`code`,null,`<pf-page>`),c(`, pass a `),l(`code`,null,`<pf-page-sidebar>`),c(` component into the `),l(`code`,null,`sidebar`),c(` property. To render navigation in the sidebar, pass a `),l(`code`,null,`<pf-page-sidebar-body>`),c(` component to `),l(`code`,null,`<pf-page-sidebar>`),c(`.`)]),l(`p`,null,[c(`The `),l(`code`,null,`sidebar-open`),c(` property helps facilitate the opening and closing of the sidebar and should be 'true' when the sidebar is visible.`)])],-1)]]),default:e(()=>[s(M,{"managed-sidebar":``,style:{height:`500px`}},{skeleton:e(()=>[s(C,null,{default:e(()=>[s(v,null,{default:e(()=>[s(h,null,{default:e(()=>[s(m,{hamburger:``})]),_:1}),s(_,{to:{name:`introduction`},custom:``},{default:e(({href:t})=>[s(g,{href:t},{default:e(()=>[...i[3]||=[c(` Logo `,-1)]]),_:1},8,[`href`])]),_:1})]),_:1}),s(S,null,{default:e(()=>[s(x,{"full-height":``},{default:e(()=>[s(b,null,{default:e(()=>[s(y,null,{default:e(()=>[...i[4]||=[c(`header-tools`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(D,null,{default:e(()=>[s(E,null,{default:e(()=>[s(T,{title:`Overview`},{default:e(()=>[s(w,null,{default:e(()=>[...i[5]||=[c(`Home`,-1)]]),_:1})]),_:1}),s(T,{title:`Components`},{default:e(()=>[s(w,null,{default:e(()=>[...i[6]||=[c(`Accordion`,-1)]]),_:1}),s(w,null,{default:e(()=>[...i[7]||=[c(`Alert`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),default:e(()=>[s(A,{sticky:`top`,"shadow-bottom":``},{default:e(()=>[s(k,null,{default:e(()=>[s(O,{href:`#`},{default:e(()=>[...i[8]||=[c(`Section home`,-1)]]),_:1}),s(O,{href:`#`},{default:e(()=>[...i[9]||=[c(`Section title`,-1)]]),_:1}),s(O,{href:`#`},{default:e(()=>[...i[10]||=[c(`Section title`,-1)]]),_:1}),s(O,{href:`#`,active:``},{default:e(()=>[...i[11]||=[c(`Section landing`,-1)]]),_:1})]),_:1})]),_:1}),s(j,null,{default:e(()=>[...i[12]||=[c(`Section 1`,-1)]]),_:1}),s(j,{variant:`secondary`},{default:e(()=>[...i[13]||=[c(`Section 2 with secondary styling`,-1)]]),_:1}),s(j,null,{default:e(()=>[...i[14]||=[c(`Section 3`,-1)]]),_:1})]),_:1})]),_:1}),s(N,{title:`Centered`,style:{height:`500px`},source:`<pf-page managed-sidebar style="height:500px">
  <template #skeleton>
    <pf-masthead>
      <pf-masthead-main>
        <pf-masthead-toggle>
          <pf-page-toggle-button hamburger />
        </pf-masthead-toggle>

        <router-link v-slot="{ href }" :to="{ name: 'introduction' }" custom>
          <pf-masthead-brand :href="href">
            Logo
          </pf-masthead-brand>
        </router-link>
      </pf-masthead-main>

      <pf-masthead-content>
        <pf-toolbar full-height>
          <pf-toolbar-content>
            <pf-toolbar-item>header-tools</pf-toolbar-item>
          </pf-toolbar-content>
        </pf-toolbar>
      </pf-masthead-content>
    </pf-masthead>

    <pf-page-sidebar>
      <pf-nav>
        <pf-nav-group title="Overview">
          <pf-nav-item>Home</pf-nav-item>
        </pf-nav-group>
        <pf-nav-group title="Components">
          <pf-nav-item>Accordion</pf-nav-item>
          <pf-nav-item>Alert</pf-nav-item>
        </pf-nav-group>
      </pf-nav>
    </pf-page-sidebar>
  </template>

  <pf-page-section max-width="20rem" center-aligned sticky-sm="bottom">
    <pf-card>
      <pf-card-body>
        When a width limited page section is wider than the value of
        <code>--pf-v6-c-page--section--m-limit-width--MaxWidth</code>, the section will be centered in the main
        section.
        <br>
        <br>
        The content in this example is placed in a card to better illustrate how the section behaves when it is
        centered. A card is not required to center a page section.
      </pf-card-body>
    </pf-card>
  </pf-page-section>
</pf-page>`},{intro:e(()=>[...i[15]||=[l(`div`,{class:`markdown pf-v6-c-content`},[l(`p`,null,[c(`By default, a page section spans the width of the page. To reduce the width of a section, use the `),l(`code`,null,`width-limited`),c(` property. To center align width-limited page sections, use the `),l(`code`,null,`center-aligned`),c(` property. When the main content area of a page is wider than the value of a centered, width-limited page section's `),l(`code`,null,`--pf-v6-c-page--section--m-limit-width--MaxWidth`),c(` custom property, the section will automatically be centered.`)]),l(`p`,null,`The content in this example is placed in a card to better illustrate how the section behaves when it is centered, but a card is not required to center a page section.`)],-1)]]),default:e(()=>[s(M,{"managed-sidebar":``,style:{height:`500px`}},{skeleton:e(()=>[s(C,null,{default:e(()=>[s(v,null,{default:e(()=>[s(h,null,{default:e(()=>[s(m,{hamburger:``})]),_:1}),s(_,{to:{name:`introduction`},custom:``},{default:e(({href:t})=>[s(g,{href:t},{default:e(()=>[...i[16]||=[c(` Logo `,-1)]]),_:1},8,[`href`])]),_:1})]),_:1}),s(S,null,{default:e(()=>[s(x,{"full-height":``},{default:e(()=>[s(b,null,{default:e(()=>[s(y,null,{default:e(()=>[...i[17]||=[c(`header-tools`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(D,null,{default:e(()=>[s(E,null,{default:e(()=>[s(T,{title:`Overview`},{default:e(()=>[s(w,null,{default:e(()=>[...i[18]||=[c(`Home`,-1)]]),_:1})]),_:1}),s(T,{title:`Components`},{default:e(()=>[s(w,null,{default:e(()=>[...i[19]||=[c(`Accordion`,-1)]]),_:1}),s(w,null,{default:e(()=>[...i[20]||=[c(`Alert`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),default:e(()=>[s(j,{"max-width":`20rem`,"center-aligned":``,"sticky-sm":`bottom`},{default:e(()=>[s(F,null,{default:e(()=>[s(P,null,{default:e(()=>[...i[21]||=[c(` When a width limited page section is wider than the value of `,-1),l(`code`,null,`--pf-v6-c-page--section--m-limit-width--MaxWidth`,-1),c(`, the section will be centered in the main section. `,-1),l(`br`,null,null,-1),l(`br`,null,null,-1),c(` The content in this example is placed in a card to better illustrate how the section behaves when it is centered. A card is not required to center a page section. `,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(N,{title:`With notification drawer`,source:`<pf-page managed-sidebar :drawer-expanded="expanded" style="height:500px">
  <template #skeleton>
    <pf-masthead>
      <pf-masthead-main>
        <pf-masthead-toggle>
          <pf-page-toggle-button hamburger />
        </pf-masthead-toggle>

        <router-link v-slot="{ href }" :to="{ name: 'introduction' }" custom>
          <pf-masthead-brand :href="href">
            Logo
          </pf-masthead-brand>
        </router-link>
      </pf-masthead-main>

      <pf-masthead-content>
        <pf-toolbar full-height>
          <pf-toolbar-content>
            <pf-toolbar-group align="end">
              <pf-toolbar-item visibility="visible">
                <pf-notification-badge variant="read" :expanded="expanded" @click="expanded = !expanded">
                  <bell-icon />
                </pf-notification-badge>
              </pf-toolbar-item>
            </pf-toolbar-group>
          </pf-toolbar-content>
        </pf-toolbar>
      </pf-masthead-content>
    </pf-masthead>

    <pf-page-sidebar>
      <pf-nav>
        <pf-nav-group title="Overview">
          <pf-nav-item>Home</pf-nav-item>
        </pf-nav-group>
        <pf-nav-group title="Components">
          <pf-nav-item>Accordion</pf-nav-item>
          <pf-nav-item>Alert</pf-nav-item>
        </pf-nav-group>
      </pf-nav>
    </pf-page-sidebar>
  </template>

  <template #drawer>
    <pf-notification-drawer>
      <pf-notification-drawer-header count="4">
        <pf-dropdown position="right">
          <template #toggle>
            <pf-menu-toggle variant="plain" />
          </template>

          <pf-dropdown-item>Action</pf-dropdown-item>
        </pf-dropdown>
      </pf-notification-drawer-header>

      <pf-notification-drawer-body>
        <pf-notification-drawer-group-list>
          <pf-notification-drawer-group
            title="First notification group"
            count="2"
          >
            <pf-notification-drawer-list aria-label="Notifications in the basic example">
              <pf-notification-drawer-list-item variant="info">
                <pf-notification-drawer-list-item-header
                  variant="info"
                  title="Unread info notification title"
                  sr-title="Info notification:"
                >
                  <pf-dropdown position="right">
                    <template #toggle>
                      <pf-menu-toggle variant="plain" />
                    </template>

                    <pf-dropdown-item>Action</pf-dropdown-item>
                  </pf-dropdown>
                </pf-notification-drawer-list-item-header>
                <pf-notification-drawer-list-item-body timestamp="5 minutes ago">
                  This is an info notification description.
                </pf-notification-drawer-list-item-body>
              </pf-notification-drawer-list-item>

              <pf-notification-drawer-list-item variant="danger">
                <pf-notification-drawer-list-item-header
                  variant="danger"
                  title="Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines."
                  sr-title="Danger notification:"
                >
                  <pf-dropdown position="right">
                    <template #toggle>
                      <pf-menu-toggle variant="plain" />
                    </template>

                    <pf-dropdown-item>Action</pf-dropdown-item>
                  </pf-dropdown>
                </pf-notification-drawer-list-item-header>
                <pf-notification-drawer-list-item-body timestamp="10 minutes ago">
                  This is a danger notification description. This is a long description to show how the title will wrap if
                  it is long and wraps to multiple lines.
                </pf-notification-drawer-list-item-body>
              </pf-notification-drawer-list-item>

              <pf-notification-drawer-list-item variant="warning" read>
                <pf-notification-drawer-list-item-header
                  variant="warning"
                  title="Read warning notification title"
                  sr-title="Warning notification:"
                >
                  <pf-dropdown position="right">
                    <template #toggle>
                      <pf-menu-toggle variant="plain" />
                    </template>

                    <pf-dropdown-item>Action</pf-dropdown-item>
                  </pf-dropdown>
                </pf-notification-drawer-list-item-header>
                <pf-notification-drawer-list-item-body timestamp="10 minutes ago">
                  This is a danger notification description. This is a long description to show how the title will wrap if
                  it is long and wraps to multiple lines.
                </pf-notification-drawer-list-item-body>
              </pf-notification-drawer-list-item>

              <pf-notification-drawer-list-item variant="success" read>
                <pf-notification-drawer-list-item-header
                  variant="success"
                  title="Read success notification title"
                  sr-title="Success notification:"
                >
                  <pf-dropdown position="right">
                    <template #toggle>
                      <pf-menu-toggle variant="plain" />
                    </template>

                    <pf-dropdown-item>Action</pf-dropdown-item>
                  </pf-dropdown>
                </pf-notification-drawer-list-item-header>
                <pf-notification-drawer-list-item-body timestamp="30 minutes ago">
                  This is a success notification description.
                </pf-notification-drawer-list-item-body>
              </pf-notification-drawer-list-item>
            </pf-notification-drawer-list>
          </pf-notification-drawer-group>


          <pf-notification-drawer-group
            title="Second notification group"
            count="2"
          >
            <pf-notification-drawer-list aria-label="Notifications in the second group">
              <pf-notification-drawer-list-item variant="info">
                <pf-notification-drawer-list-item-header
                  variant="info"
                  title="Unread info notification title"
                  sr-title="Info notification:"
                >
                  <pf-dropdown position="right">
                    <template #toggle>
                      <pf-menu-toggle variant="plain" />
                    </template>

                    <pf-dropdown-item>Action</pf-dropdown-item>
                  </pf-dropdown>
                </pf-notification-drawer-list-item-header>
                <pf-notification-drawer-list-item-body timestamp="5 minutes ago">
                  This is an info notification description.
                </pf-notification-drawer-list-item-body>
              </pf-notification-drawer-list-item>

              <pf-notification-drawer-list-item variant="danger">
                <pf-notification-drawer-list-item-header
                  variant="danger"
                  title="Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines."
                  sr-title="Danger notification:"
                >
                  <pf-dropdown position="right">
                    <template #toggle>
                      <pf-menu-toggle variant="plain" />
                    </template>

                    <pf-dropdown-item>Action</pf-dropdown-item>
                  </pf-dropdown>
                </pf-notification-drawer-list-item-header>
                <pf-notification-drawer-list-item-body timestamp="10 minutes ago">
                  This is a danger notification description. This is a long description to show how the title will wrap
                  if it is long and wraps to multiple lines.
                </pf-notification-drawer-list-item-body>
              </pf-notification-drawer-list-item>

              <pf-notification-drawer-list-item variant="warning" read>
                <pf-notification-drawer-list-item-header
                  variant="warning"
                  title="Read warning notification title"
                  sr-title="Warning notification:"
                >
                  <pf-dropdown position="right">
                    <template #toggle>
                      <pf-menu-toggle variant="plain" />
                    </template>

                    <pf-dropdown-item>Action</pf-dropdown-item>
                  </pf-dropdown>
                </pf-notification-drawer-list-item-header>
                <pf-notification-drawer-list-item-body timestamp="20 minutes ago">
                  This is a warning notification description.
                </pf-notification-drawer-list-item-body>
              </pf-notification-drawer-list-item>

              <pf-notification-drawer-list-item variant="success" read>
                <pf-notification-drawer-list-item-header
                  variant="success"
                  title="Read success notification title"
                  sr-title="Success notification:"
                >
                  <pf-dropdown position="right">
                    <template #toggle>
                      <pf-menu-toggle variant="plain" />
                    </template>

                    <pf-dropdown-item>Action</pf-dropdown-item>
                  </pf-dropdown>
                </pf-notification-drawer-list-item-header>
                <pf-notification-drawer-list-item-body timestamp="30 minutes ago">
                  This is a success notification description.
                </pf-notification-drawer-list-item-body>
              </pf-notification-drawer-list-item>
            </pf-notification-drawer-list>
          </pf-notification-drawer-group>

          <pf-notification-drawer-group
            title="Third notification group. This is a long title to show how the title will be truncated if it is long and will be shown in a single line."
            count="0"
            :truncate-title="1"
            read
          >
            <pf-notification-drawer-list aria-label="Notifications in the third group">
              <pf-empty-state variant="full">
                <pf-empty-state-header heading-level="h2" title="No alerts found">
                  <template #icon>
                    <magnifying-glass-icon />
                  </template>
                </pf-empty-state-header>
                <pf-empty-state-body>
                  There are currently no critical alerts firing. There may be firing alerts of other severities or
                  silenced critical alerts however.
                </pf-empty-state-body>
                <pf-empty-state-footer>
                  <pf-empty-state-actions>
                    <pf-button variant="link">Action</pf-button>
                  </pf-empty-state-actions>
                </pf-empty-state-footer>
              </pf-empty-state>
            </pf-notification-drawer-list>
          </pf-notification-drawer-group>

        </pf-notification-drawer-group-list>
      </pf-notification-drawer-body>
    </pf-notification-drawer>
  </template>

  <pf-page-section>
    Main section
  </pf-page-section>
</pf-page>`},{default:e(()=>[s(M,{"managed-sidebar":``,"drawer-expanded":f.value,style:{height:`500px`}},{skeleton:e(()=>[s(C,null,{default:e(()=>[s(v,null,{default:e(()=>[s(h,null,{default:e(()=>[s(m,{hamburger:``})]),_:1}),s(_,{to:{name:`introduction`},custom:``},{default:e(({href:t})=>[s(g,{href:t},{default:e(()=>[...i[22]||=[c(` Logo `,-1)]]),_:1},8,[`href`])]),_:1})]),_:1}),s(S,null,{default:e(()=>[s(x,{"full-height":``},{default:e(()=>[s(b,null,{default:e(()=>[s(L,{align:`end`},{default:e(()=>[s(y,{visibility:`visible`},{default:e(()=>[s(I,{variant:`read`,expanded:f.value,onClick:i[0]||=e=>f.value=!f.value},{default:e(()=>[s(a(u))]),_:1},8,[`expanded`])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(D,null,{default:e(()=>[s(E,null,{default:e(()=>[s(T,{title:`Overview`},{default:e(()=>[s(w,null,{default:e(()=>[...i[23]||=[c(`Home`,-1)]]),_:1})]),_:1}),s(T,{title:`Components`},{default:e(()=>[s(w,null,{default:e(()=>[...i[24]||=[c(`Accordion`,-1)]]),_:1}),s(w,null,{default:e(()=>[...i[25]||=[c(`Alert`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),drawer:e(()=>[s(te,null,{default:e(()=>[s(V,{count:`4`},{default:e(()=>[s(B,{position:`right`},{toggle:e(()=>[s(R,{variant:`plain`})]),default:e(()=>[s(z,null,{default:e(()=>[...i[26]||=[c(`Action`,-1)]]),_:1})]),_:1})]),_:1}),s(ee,null,{default:e(()=>[s($,null,{default:e(()=>[s(K,{title:`First notification group`,count:`2`},{default:e(()=>[s(G,{"aria-label":`Notifications in the basic example`},{default:e(()=>[s(W,{variant:`info`},{default:e(()=>[s(H,{variant:`info`,title:`Unread info notification title`,"sr-title":`Info notification:`},{default:e(()=>[s(B,{position:`right`},{toggle:e(()=>[s(R,{variant:`plain`})]),default:e(()=>[s(z,null,{default:e(()=>[...i[27]||=[c(`Action`,-1)]]),_:1})]),_:1})]),_:1}),s(U,{timestamp:`5 minutes ago`},{default:e(()=>[...i[28]||=[c(` This is an info notification description. `,-1)]]),_:1})]),_:1}),s(W,{variant:`danger`},{default:e(()=>[s(H,{variant:`danger`,title:`Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.`,"sr-title":`Danger notification:`},{default:e(()=>[s(B,{position:`right`},{toggle:e(()=>[s(R,{variant:`plain`})]),default:e(()=>[s(z,null,{default:e(()=>[...i[29]||=[c(`Action`,-1)]]),_:1})]),_:1})]),_:1}),s(U,{timestamp:`10 minutes ago`},{default:e(()=>[...i[30]||=[c(` This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines. `,-1)]]),_:1})]),_:1}),s(W,{variant:`warning`,read:``},{default:e(()=>[s(H,{variant:`warning`,title:`Read warning notification title`,"sr-title":`Warning notification:`},{default:e(()=>[s(B,{position:`right`},{toggle:e(()=>[s(R,{variant:`plain`})]),default:e(()=>[s(z,null,{default:e(()=>[...i[31]||=[c(`Action`,-1)]]),_:1})]),_:1})]),_:1}),s(U,{timestamp:`10 minutes ago`},{default:e(()=>[...i[32]||=[c(` This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines. `,-1)]]),_:1})]),_:1}),s(W,{variant:`success`,read:``},{default:e(()=>[s(H,{variant:`success`,title:`Read success notification title`,"sr-title":`Success notification:`},{default:e(()=>[s(B,{position:`right`},{toggle:e(()=>[s(R,{variant:`plain`})]),default:e(()=>[s(z,null,{default:e(()=>[...i[33]||=[c(`Action`,-1)]]),_:1})]),_:1})]),_:1}),s(U,{timestamp:`30 minutes ago`},{default:e(()=>[...i[34]||=[c(` This is a success notification description. `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),s(K,{title:`Second notification group`,count:`2`},{default:e(()=>[s(G,{"aria-label":`Notifications in the second group`},{default:e(()=>[s(W,{variant:`info`},{default:e(()=>[s(H,{variant:`info`,title:`Unread info notification title`,"sr-title":`Info notification:`},{default:e(()=>[s(B,{position:`right`},{toggle:e(()=>[s(R,{variant:`plain`})]),default:e(()=>[s(z,null,{default:e(()=>[...i[35]||=[c(`Action`,-1)]]),_:1})]),_:1})]),_:1}),s(U,{timestamp:`5 minutes ago`},{default:e(()=>[...i[36]||=[c(` This is an info notification description. `,-1)]]),_:1})]),_:1}),s(W,{variant:`danger`},{default:e(()=>[s(H,{variant:`danger`,title:`Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.`,"sr-title":`Danger notification:`},{default:e(()=>[s(B,{position:`right`},{toggle:e(()=>[s(R,{variant:`plain`})]),default:e(()=>[s(z,null,{default:e(()=>[...i[37]||=[c(`Action`,-1)]]),_:1})]),_:1})]),_:1}),s(U,{timestamp:`10 minutes ago`},{default:e(()=>[...i[38]||=[c(` This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines. `,-1)]]),_:1})]),_:1}),s(W,{variant:`warning`,read:``},{default:e(()=>[s(H,{variant:`warning`,title:`Read warning notification title`,"sr-title":`Warning notification:`},{default:e(()=>[s(B,{position:`right`},{toggle:e(()=>[s(R,{variant:`plain`})]),default:e(()=>[s(z,null,{default:e(()=>[...i[39]||=[c(`Action`,-1)]]),_:1})]),_:1})]),_:1}),s(U,{timestamp:`20 minutes ago`},{default:e(()=>[...i[40]||=[c(` This is a warning notification description. `,-1)]]),_:1})]),_:1}),s(W,{variant:`success`,read:``},{default:e(()=>[s(H,{variant:`success`,title:`Read success notification title`,"sr-title":`Success notification:`},{default:e(()=>[s(B,{position:`right`},{toggle:e(()=>[s(R,{variant:`plain`})]),default:e(()=>[s(z,null,{default:e(()=>[...i[41]||=[c(`Action`,-1)]]),_:1})]),_:1})]),_:1}),s(U,{timestamp:`30 minutes ago`},{default:e(()=>[...i[42]||=[c(` This is a success notification description. `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),s(K,{title:`Third notification group. This is a long title to show how the title will be truncated if it is long and will be shown in a single line.`,count:`0`,"truncate-title":1,read:``},{default:e(()=>[s(G,{"aria-label":`Notifications in the third group`},{default:e(()=>[s(Q,{variant:`full`},{default:e(()=>[s(q,{"heading-level":`h2`,title:`No alerts found`},{icon:e(()=>[s(a(d))]),_:1}),s(J,null,{default:e(()=>[...i[43]||=[c(` There are currently no critical alerts firing. There may be firing alerts of other severities or silenced critical alerts however. `,-1)]]),_:1}),s(Z,null,{default:e(()=>[s(X,null,{default:e(()=>[s(Y,{variant:`link`},{default:e(()=>[...i[44]||=[c(`Action`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),default:e(()=>[s(j,null,{default:e(()=>[...i[45]||=[c(` Main section `,-1)]]),_:1})]),_:1},8,[`drawer-expanded`])]),_:1})]),_:1})}}});export{f as default};