import{D as e,E as t,I as n,N as r,O as i,R as a,S as o,f as s,j as c,o as l,x as u,z as d}from"./index-mFbvqZfx.js";var f=i({__name:`Page.story`,setup(i){let f=a(!1);return(i,a)=>{let p=r(`component-info`),m=r(`pf-page-toggle-button`),h=r(`pf-masthead-toggle`),g=r(`pf-masthead-brand`),_=r(`router-link`),v=r(`pf-masthead-main`),y=r(`pf-toolbar-item`),b=r(`pf-toolbar-content`),x=r(`pf-toolbar`),S=r(`pf-masthead-content`),C=r(`pf-masthead`),w=r(`pf-nav-item`),T=r(`pf-nav-group`),E=r(`pf-nav`),D=r(`pf-page-sidebar`),O=r(`pf-breadcrumb-item`),k=r(`pf-breadcrumb`),A=r(`pf-page-breadcrumb`),j=r(`pf-page-section`),M=r(`pf-page`),N=r(`story-canvas`),P=r(`pf-card-body`),F=r(`pf-card`),I=r(`pf-notification-badge`),L=r(`pf-toolbar-group`),R=r(`pf-menu-toggle`),z=r(`pf-dropdown-item`),B=r(`pf-dropdown`),V=r(`pf-notification-drawer-header`),H=r(`pf-notification-drawer-list-item-header`),U=r(`pf-notification-drawer-list-item-body`),W=r(`pf-notification-drawer-list-item`),G=r(`pf-notification-drawer-list`),K=r(`pf-notification-drawer-group`),q=r(`pf-empty-state-header`),J=r(`pf-empty-state-body`),Y=r(`pf-button`),X=r(`pf-empty-state-actions`),Z=r(`pf-empty-state-footer`),Q=r(`pf-empty-state`),$=r(`pf-notification-drawer-group-list`),ee=r(`pf-notification-drawer-body`),te=r(`pf-notification-drawer`),ne=r(`doc-page`);return c(),o(ne,{name:`Components/Page.story.vue`,title:`Page`},{description:n(()=>[...a[1]||=[t(`The `,-1),u(`b`,null,`page`,-1),t(` component is used to define the basic layout of a page with either vertical or horizontal navigation.`,-1)]]),apidocs:n(()=>[e(p,{name:`PfPage`,doc:{name:`PfPage`,exportName:`PfPage`,displayName:`Page`,description:``,tags:{},expose:[{name:`navToggle`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`role`,description:`Sets the value for role on the <main> element`,required:!1,type:{name:`string`}},{name:`mainContainerId`,description:`an id to use for the [role="main"] element`,required:!1,type:{name:`string`}},{name:`mainTabIndex`,description:`tabIndex to use for the [role="main"] element, null to unset it`,required:!1,type:{name:`number`}},{name:`managedSidebar`,description:`If true, manages the sidebar open/close state and there is no need to pass the isSidebarOpen boolean into
the sidebar component or add a callback onNavToggle function into the PageHeader component`,required:!1,type:{name:`boolean`}},{name:`tertiaryNavWidthLimited`,description:`Flag indicating if tertiary nav width should be limited`,required:!1,type:{name:`boolean`}},{name:`notificationDrawerExpanded`,description:`Flag indicating Notification drawer in expanded`,required:!1,type:{name:`boolean`}},{name:`defaultManagedSidebarOpen`,description:`If true, the managed sidebar is initially open for desktop view`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`mainAriaLabel`,description:`Accessible label, can be used to name main section`,required:!1,type:{name:`string`}},{name:`drawerExpanded`,description:`Flag indicating Notification drawer in expanded`,required:!1,type:{name:`boolean`}},{name:`mainComponent`,description:`HTML component used as main component of the page. Defaults to 'main', only pass in 'div' if another 'main' element already exists.`,required:!1,type:{name:`union`,elements:[{name:`"main"`},{name:`"div"`}]},defaultValue:{func:!1,value:`"main"`}},{name:`contentFilled`,description:`Enables children to fill the available vertical space. Child page sections or groups that should fill should be passed the isFilled property.`,required:!1,type:{name:`boolean`}},{name:`variant`,description:`Indicates the layout variant`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"docked"`}]}},{name:`dockExpanded`,description:`Flag indicating the docked nav is expanded on mobile. Only applies when variant is docked.`,required:!1,type:{name:`boolean`}},{name:`dockTextExpanded`,description:`Flag indicating the docked nav should display text on desktop. Only applies when variant is docked, and will handle setting isTextExpanded on individual isDocked components.`,required:!1,type:{name:`boolean`}}],events:[{name:`pageResize`,type:{names:[`{ mobileView: boolean; windowSize: number }`]}}],slots:[{name:`default`},{name:`skip-to-content`},{name:`masthead`},{name:`dock-content`},{name:`sidebar`},{name:`drawer`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Page/Page.vue`]}}),e(p,{name:`PfPageBreadcrumb`,doc:{name:`PfPageBreadcrumb`,exportName:`PfPageBreadcrumb`,displayName:`PageBreadcrumb`,description:``,tags:{},props:[{name:`sticky2xl`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyXl`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyLg`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyMd`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickySm`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`sticky`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`widthLimited`,description:`Limits the width of the breadcrumb`,required:!1,type:{name:`boolean`}},{name:`maxWidth`,description:`Limits the width of the section and sets the --pf-v6-c-page--section--m-limit-width--MaxWidth variable to this value`,required:!1,type:{name:`string`}},{name:`shadowTop`,description:`Flag indicating if PageBreadcrumb should have a shadow at the top`,required:!1,type:{name:`boolean`}},{name:`shadowBottom`,description:`Flag indicating if PageBreadcrumb should have a shadow at the bottom`,required:!1,type:{name:`boolean`}},{name:`overflowScroll`,description:`Flag indicating if the PageBreadcrumb has a scrolling overflow`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Page/PageBreadcrumb.vue`]}}),e(p,{name:`PfPageGroup`,doc:{name:`PfPageGroup`,exportName:`PfPageGroup`,displayName:`PageGroup`,description:``,tags:{},props:[{name:`sticky2xl`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyXl`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyLg`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyMd`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickySm`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`sticky`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`shadowTop`,description:`Flag indicating if PageBreadcrumb should have a shadow at the top`,required:!1,type:{name:`boolean`}},{name:`shadowBottom`,description:`Flag indicating if PageBreadcrumb should have a shadow at the bottom`,required:!1,type:{name:`boolean`}},{name:`overflowScroll`,description:`Flag indicating if the PageBreadcrumb has a scrolling overflow`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Page/PageGroup.vue`]}}),e(p,{name:`PfPageSection`,doc:{name:`PfPageSection`,exportName:`PfPageSection`,displayName:`PageSection`,description:``,tags:{},props:[{name:`sticky2xl`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyXl`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyLg`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyMd`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickySm`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`sticky`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`padding2xl`,required:!1,type:{name:`union`,elements:[{name:`"padding"`},{name:`"no-padding"`}]}},{name:`paddingXl`,required:!1,type:{name:`union`,elements:[{name:`"padding"`},{name:`"no-padding"`}]}},{name:`paddingLg`,required:!1,type:{name:`union`,elements:[{name:`"padding"`},{name:`"no-padding"`}]}},{name:`paddingMd`,required:!1,type:{name:`union`,elements:[{name:`"padding"`},{name:`"no-padding"`}]}},{name:`paddingSm`,required:!1,type:{name:`union`,elements:[{name:`"padding"`},{name:`"no-padding"`}]}},{name:`padding`,required:!1,type:{name:`union`,elements:[{name:`"padding"`},{name:`"no-padding"`}]}},{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`variant`,description:`Section background color variant`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"secondary"`}]},defaultValue:{func:!1,value:`'default'`}},{name:`type`,description:`Section type variant`,required:!1,type:{name:`TSTypeOperator`},defaultValue:{func:!1,value:`'default'`}},{name:`filled`,description:`Enables the page section to fill the available vertical space`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`widthLimited`,description:`Limits the width of the section`,required:!1,type:{name:`boolean`}},{name:`maxWidth`,description:`Limits the width of the section and sets the --pf-v6-c-page--section--m-limit-width--MaxWidth variable to this value`,required:!1,type:{name:`string`}},{name:`centerAligned`,description:`Flag indicating if the section content is center aligned. Either widthLimited or maxWidth must be set for this to work`,required:!1,type:{name:`boolean`}},{name:`shadowTop`,description:`Modifier indicating if PageSection should have a shadow at the top`,required:!1,type:{name:`boolean`}},{name:`shadowBottom`,description:`Modifier indicating if PageSection should have a shadow at the bottom`,required:!1,type:{name:`boolean`}},{name:`overflowScroll`,description:`Flag indicating if the PageSection has a scrolling overflow`,required:!1,type:{name:`boolean`}},{name:`component`,description:`Sets the base component to render. Defaults to section`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Component`}]},defaultValue:{func:!1,value:`'section' as any`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Page/PageSection.vue`]}}),e(p,{name:`PfPageSidebar`,doc:{name:`PfPageSidebar`,exportName:`PfPageSidebar`,displayName:`PageSidebar`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`id`,description:`Sidebar id`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'page-sidebar'`}},{name:`sidebarOpen`,description:`Programmatically manage if the side nav is shown, if managedSidebar is set to true in the PfPage component, this prop is managed`,required:!1,type:{name:`boolean`}},{name:`theme`,description:`Indicates the color scheme of the sidebar`,required:!1,type:{name:`union`,elements:[{name:`"light"`},{name:`"dark"`}]},defaultValue:{func:!1,value:`'dark'`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Page/PageSidebar.vue`]}}),e(p,{name:`PfPageSidebarBody`,doc:{name:`PfPageSidebarBody`,exportName:`PfPageSidebarBody`,displayName:`PageSidebarBody`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`insets`,description:`Flag indicating that the page sidebar body should use page insets.`,required:!1,type:{name:`boolean`}},{name:`filled`,description:`Flag indicating that the page sidebar body should fill the available vertical space.`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Page/PageSidebarBody.vue`]}}),e(p,{name:`PfPageToggleButton`,doc:{name:`PfPageToggleButton`,exportName:`PfPageToggleButton`,displayName:`PageToggleButton`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`id`,description:`Sidebar id`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"nav-toggle"`}},{name:`sidebarOpen`,description:`Programmatically manage if the side nav is shown, if managedSidebar is set to true in the PfPage component, this prop is managed`,required:!1,type:{name:`boolean`}},{name:`hamburger`,description:`Flag indicating the button is a hamburger button. This will override the icon property.`,required:!1,type:{name:`boolean`}}],events:[{name:`update:sidebarOpen`,type:{names:[`boolean`]}}],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Page/PageToggleButton.vue`]}})]),default:n(()=>[a[46]||=u(`div`,{class:`markdown pf-v6-c-content`},[u(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),u(`ul`,null,[u(`li`,null,[u(`code`,null,`pf-page-breadcrumb`),t(` and `),u(`code`,null,`pf-page-section`),t(` can be limited in width by setting their `),u(`code`,null,`max-width`),t(` prop.`)])]),u(`h2`,{class:`pf-v6-c-title`},`Examples`),u(`h3`,{class:`pf-v6-c-title`},`Basic page components`),u(`p`,null,`A page will typically contain the following components:`),u(`ul`,null,[u(`li`,null,[t(`A `),u(`code`,null,`<pf-page>`),t(` with a `),u(`code`,null,`header`),t(` that often contains a `),u(`a`,{href:`#/stories/components/masthead`},`masthead`),u(`ul`,null,[u(`li`,null,[t(`Mastheads contain the `),u(`code`,null,`<pf-page-toggle-button>`),t(`, a `),u(`code`,null,`<pf-masthead-main>`),t(` that contains a `),u(`code`,null,`<pf-masthead-brand>`),t(`, and the page's header toolbar within `),u(`code`,null,`<pf-masthead-content>`),t(`.`)])])]),u(`li`,null,[t(`1 or more `),u(`code`,null,`<pf-page-sidebar-body>`),t(` components inside `),u(`code`,null,`<pf-page-sidebar>`),t(` for vertical navigation or other sidebar content`)]),u(`li`,null,[t(`1 or more `),u(`code`,null,`<pf-page-section>`),t(` components`)])])],-1),e(N,{title:`Vertical Navigation`,source:`<pf-page managed-sidebar style="height: 500px">
  <template #masthead>
    <pf-masthead>
      <pf-masthead-main>
        <pf-masthead-toggle>
          <pf-page-toggle-button hamburger />
        </pf-masthead-toggle>

        <router-link v-slot="{ href }" :to="{ name: 'introduction' }" custom>
          <pf-masthead-brand :href="href"> Logo </pf-masthead-brand>
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
  </template>

  <template #sidebar>
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
</pf-page>`},{intro:n(()=>[...a[2]||=[u(`div`,{class:`markdown pf-v6-c-content`},[u(`p`,null,[t(`To add a vertical sidebar to a `),u(`code`,null,`<pf-page>`),t(`, pass a `),u(`code`,null,`<pf-page-sidebar>`),t(` component into the `),u(`code`,null,`sidebar`),t(` property. To render navigation in the sidebar, pass a `),u(`code`,null,`<pf-page-sidebar-body>`),t(` component to `),u(`code`,null,`<pf-page-sidebar>`),t(`.`)]),u(`p`,null,[t(`The `),u(`code`,null,`sidebar-open`),t(` property helps facilitate the opening and closing of the sidebar and should be 'true' when the sidebar is visible.`)])],-1)]]),default:n(()=>[e(M,{"managed-sidebar":``,style:{height:`500px`}},{masthead:n(()=>[e(C,null,{default:n(()=>[e(v,null,{default:n(()=>[e(h,null,{default:n(()=>[e(m,{hamburger:``})]),_:1}),e(_,{to:{name:`introduction`},custom:``},{default:n(({href:r})=>[e(g,{href:r},{default:n(()=>[...a[3]||=[t(` Logo `,-1)]]),_:1},8,[`href`])]),_:1})]),_:1}),e(S,null,{default:n(()=>[e(x,{"full-height":``},{default:n(()=>[e(b,null,{default:n(()=>[e(y,null,{default:n(()=>[...a[4]||=[t(`header-tools`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),sidebar:n(()=>[e(D,null,{default:n(()=>[e(E,null,{default:n(()=>[e(T,{title:`Overview`},{default:n(()=>[e(w,null,{default:n(()=>[...a[5]||=[t(`Home`,-1)]]),_:1})]),_:1}),e(T,{title:`Components`},{default:n(()=>[e(w,null,{default:n(()=>[...a[6]||=[t(`Accordion`,-1)]]),_:1}),e(w,null,{default:n(()=>[...a[7]||=[t(`Alert`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),default:n(()=>[e(A,{sticky:`top`,"shadow-bottom":``},{default:n(()=>[e(k,null,{default:n(()=>[e(O,{href:`#`},{default:n(()=>[...a[8]||=[t(`Section home`,-1)]]),_:1}),e(O,{href:`#`},{default:n(()=>[...a[9]||=[t(`Section title`,-1)]]),_:1}),e(O,{href:`#`},{default:n(()=>[...a[10]||=[t(`Section title`,-1)]]),_:1}),e(O,{href:`#`,active:``},{default:n(()=>[...a[11]||=[t(`Section landing`,-1)]]),_:1})]),_:1})]),_:1}),e(j,null,{default:n(()=>[...a[12]||=[t(`Section 1`,-1)]]),_:1}),e(j,{variant:`secondary`},{default:n(()=>[...a[13]||=[t(`Section 2 with secondary styling`,-1)]]),_:1}),e(j,null,{default:n(()=>[...a[14]||=[t(`Section 3`,-1)]]),_:1})]),_:1})]),_:1}),e(N,{title:`Centered`,style:{height:`500px`},source:`<pf-page managed-sidebar style="height: 500px">
  <template #masthead>
    <pf-masthead>
      <pf-masthead-main>
        <pf-masthead-toggle>
          <pf-page-toggle-button hamburger />
        </pf-masthead-toggle>

        <router-link v-slot="{ href }" :to="{ name: 'introduction' }" custom>
          <pf-masthead-brand :href="href"> Logo </pf-masthead-brand>
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
  </template>

  <template #sidebar>
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
        <code>--pf-v6-c-page--section--m-limit-width--MaxWidth</code>, the section will be centered in the main section.
        <br>
        <br>
        The content in this example is placed in a card to better illustrate how the section behaves when it is centered. A card is not required to center a page section.
      </pf-card-body>
    </pf-card>
  </pf-page-section>
</pf-page>`},{intro:n(()=>[...a[15]||=[u(`div`,{class:`markdown pf-v6-c-content`},[u(`p`,null,[t(`By default, a page section spans the width of the page. To reduce the width of a section, use the `),u(`code`,null,`width-limited`),t(` property. To center align width-limited page sections, use the `),u(`code`,null,`center-aligned`),t(` property. When the main content area of a page is wider than the value of a centered, width-limited page section's `),u(`code`,null,`--pf-v6-c-page--section--m-limit-width--MaxWidth`),t(` custom property, the section will automatically be centered.`)]),u(`p`,null,`The content in this example is placed in a card to better illustrate how the section behaves when it is centered, but a card is not required to center a page section.`)],-1)]]),default:n(()=>[e(M,{"managed-sidebar":``,style:{height:`500px`}},{masthead:n(()=>[e(C,null,{default:n(()=>[e(v,null,{default:n(()=>[e(h,null,{default:n(()=>[e(m,{hamburger:``})]),_:1}),e(_,{to:{name:`introduction`},custom:``},{default:n(({href:r})=>[e(g,{href:r},{default:n(()=>[...a[16]||=[t(` Logo `,-1)]]),_:1},8,[`href`])]),_:1})]),_:1}),e(S,null,{default:n(()=>[e(x,{"full-height":``},{default:n(()=>[e(b,null,{default:n(()=>[e(y,null,{default:n(()=>[...a[17]||=[t(`header-tools`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),sidebar:n(()=>[e(D,null,{default:n(()=>[e(E,null,{default:n(()=>[e(T,{title:`Overview`},{default:n(()=>[e(w,null,{default:n(()=>[...a[18]||=[t(`Home`,-1)]]),_:1})]),_:1}),e(T,{title:`Components`},{default:n(()=>[e(w,null,{default:n(()=>[...a[19]||=[t(`Accordion`,-1)]]),_:1}),e(w,null,{default:n(()=>[...a[20]||=[t(`Alert`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),default:n(()=>[e(j,{"max-width":`20rem`,"center-aligned":``,"sticky-sm":`bottom`},{default:n(()=>[e(F,null,{default:n(()=>[e(P,null,{default:n(()=>[...a[21]||=[t(` When a width limited page section is wider than the value of `,-1),u(`code`,null,`--pf-v6-c-page--section--m-limit-width--MaxWidth`,-1),t(`, the section will be centered in the main section. `,-1),u(`br`,null,null,-1),u(`br`,null,null,-1),t(` The content in this example is placed in a card to better illustrate how the section behaves when it is centered. A card is not required to center a page section. `,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(N,{title:`With notification drawer`,source:`<pf-page managed-sidebar :drawer-expanded="expanded" style="height: 500px">
  <template #masthead>
    <pf-masthead>
      <pf-masthead-main>
        <pf-masthead-toggle>
          <pf-page-toggle-button hamburger />
        </pf-masthead-toggle>

        <router-link v-slot="{ href }" :to="{ name: 'introduction' }" custom>
          <pf-masthead-brand :href="href"> Logo </pf-masthead-brand>
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
  </template>

  <template #sidebar>
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
          <pf-notification-drawer-group title="First notification group" count="2">
            <pf-notification-drawer-list aria-label="Notifications in the basic example">
              <pf-notification-drawer-list-item variant="info">
                <pf-notification-drawer-list-item-header variant="info" title="Unread info notification title" sr-title="Info notification:">
                  <pf-dropdown position="right">
                    <template #toggle>
                      <pf-menu-toggle variant="plain" />
                    </template>

                    <pf-dropdown-item>Action</pf-dropdown-item>
                  </pf-dropdown>
                </pf-notification-drawer-list-item-header>
                <pf-notification-drawer-list-item-body timestamp="5 minutes ago"> This is an info notification description. </pf-notification-drawer-list-item-body>
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
                  This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.
                </pf-notification-drawer-list-item-body>
              </pf-notification-drawer-list-item>

              <pf-notification-drawer-list-item variant="warning" read>
                <pf-notification-drawer-list-item-header variant="warning" title="Read warning notification title" sr-title="Warning notification:">
                  <pf-dropdown position="right">
                    <template #toggle>
                      <pf-menu-toggle variant="plain" />
                    </template>

                    <pf-dropdown-item>Action</pf-dropdown-item>
                  </pf-dropdown>
                </pf-notification-drawer-list-item-header>
                <pf-notification-drawer-list-item-body timestamp="10 minutes ago">
                  This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.
                </pf-notification-drawer-list-item-body>
              </pf-notification-drawer-list-item>

              <pf-notification-drawer-list-item variant="success" read>
                <pf-notification-drawer-list-item-header variant="success" title="Read success notification title" sr-title="Success notification:">
                  <pf-dropdown position="right">
                    <template #toggle>
                      <pf-menu-toggle variant="plain" />
                    </template>

                    <pf-dropdown-item>Action</pf-dropdown-item>
                  </pf-dropdown>
                </pf-notification-drawer-list-item-header>
                <pf-notification-drawer-list-item-body timestamp="30 minutes ago"> This is a success notification description. </pf-notification-drawer-list-item-body>
              </pf-notification-drawer-list-item>
            </pf-notification-drawer-list>
          </pf-notification-drawer-group>

          <pf-notification-drawer-group title="Second notification group" count="2">
            <pf-notification-drawer-list aria-label="Notifications in the second group">
              <pf-notification-drawer-list-item variant="info">
                <pf-notification-drawer-list-item-header variant="info" title="Unread info notification title" sr-title="Info notification:">
                  <pf-dropdown position="right">
                    <template #toggle>
                      <pf-menu-toggle variant="plain" />
                    </template>

                    <pf-dropdown-item>Action</pf-dropdown-item>
                  </pf-dropdown>
                </pf-notification-drawer-list-item-header>
                <pf-notification-drawer-list-item-body timestamp="5 minutes ago"> This is an info notification description. </pf-notification-drawer-list-item-body>
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
                  This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.
                </pf-notification-drawer-list-item-body>
              </pf-notification-drawer-list-item>

              <pf-notification-drawer-list-item variant="warning" read>
                <pf-notification-drawer-list-item-header variant="warning" title="Read warning notification title" sr-title="Warning notification:">
                  <pf-dropdown position="right">
                    <template #toggle>
                      <pf-menu-toggle variant="plain" />
                    </template>

                    <pf-dropdown-item>Action</pf-dropdown-item>
                  </pf-dropdown>
                </pf-notification-drawer-list-item-header>
                <pf-notification-drawer-list-item-body timestamp="20 minutes ago"> This is a warning notification description. </pf-notification-drawer-list-item-body>
              </pf-notification-drawer-list-item>

              <pf-notification-drawer-list-item variant="success" read>
                <pf-notification-drawer-list-item-header variant="success" title="Read success notification title" sr-title="Success notification:">
                  <pf-dropdown position="right">
                    <template #toggle>
                      <pf-menu-toggle variant="plain" />
                    </template>

                    <pf-dropdown-item>Action</pf-dropdown-item>
                  </pf-dropdown>
                </pf-notification-drawer-list-item-header>
                <pf-notification-drawer-list-item-body timestamp="30 minutes ago"> This is a success notification description. </pf-notification-drawer-list-item-body>
              </pf-notification-drawer-list-item>
            </pf-notification-drawer-list>
          </pf-notification-drawer-group>

          <pf-notification-drawer-group title="Third notification group. This is a long title to show how the title will be truncated if it is long and will be shown in a single line." count="0" :truncate-title="1" read>
            <pf-notification-drawer-list aria-label="Notifications in the third group">
              <pf-empty-state variant="full">
                <pf-empty-state-header heading-level="h2" title="No alerts found">
                  <template #icon>
                    <magnifying-glass-icon />
                  </template>
                </pf-empty-state-header>
                <pf-empty-state-body> There are currently no critical alerts firing. There may be firing alerts of other severities or silenced critical alerts however. </pf-empty-state-body>
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

  <pf-page-section> Main section </pf-page-section>
</pf-page>`},{default:n(()=>[e(M,{"managed-sidebar":``,"drawer-expanded":f.value,style:{height:`500px`}},{masthead:n(()=>[e(C,null,{default:n(()=>[e(v,null,{default:n(()=>[e(h,null,{default:n(()=>[e(m,{hamburger:``})]),_:1}),e(_,{to:{name:`introduction`},custom:``},{default:n(({href:r})=>[e(g,{href:r},{default:n(()=>[...a[22]||=[t(` Logo `,-1)]]),_:1},8,[`href`])]),_:1})]),_:1}),e(S,null,{default:n(()=>[e(x,{"full-height":``},{default:n(()=>[e(b,null,{default:n(()=>[e(L,{align:`end`},{default:n(()=>[e(y,{visibility:`visible`},{default:n(()=>[e(I,{variant:`read`,expanded:f.value,onClick:a[0]||=e=>f.value=!f.value},{default:n(()=>[e(d(s))]),_:1},8,[`expanded`])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),sidebar:n(()=>[e(D,null,{default:n(()=>[e(E,null,{default:n(()=>[e(T,{title:`Overview`},{default:n(()=>[e(w,null,{default:n(()=>[...a[23]||=[t(`Home`,-1)]]),_:1})]),_:1}),e(T,{title:`Components`},{default:n(()=>[e(w,null,{default:n(()=>[...a[24]||=[t(`Accordion`,-1)]]),_:1}),e(w,null,{default:n(()=>[...a[25]||=[t(`Alert`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),drawer:n(()=>[e(te,null,{default:n(()=>[e(V,{count:`4`},{default:n(()=>[e(B,{position:`right`},{toggle:n(()=>[e(R,{variant:`plain`})]),default:n(()=>[e(z,null,{default:n(()=>[...a[26]||=[t(`Action`,-1)]]),_:1})]),_:1})]),_:1}),e(ee,null,{default:n(()=>[e($,null,{default:n(()=>[e(K,{title:`First notification group`,count:`2`},{default:n(()=>[e(G,{"aria-label":`Notifications in the basic example`},{default:n(()=>[e(W,{variant:`info`},{default:n(()=>[e(H,{variant:`info`,title:`Unread info notification title`,"sr-title":`Info notification:`},{default:n(()=>[e(B,{position:`right`},{toggle:n(()=>[e(R,{variant:`plain`})]),default:n(()=>[e(z,null,{default:n(()=>[...a[27]||=[t(`Action`,-1)]]),_:1})]),_:1})]),_:1}),e(U,{timestamp:`5 minutes ago`},{default:n(()=>[...a[28]||=[t(` This is an info notification description. `,-1)]]),_:1})]),_:1}),e(W,{variant:`danger`},{default:n(()=>[e(H,{variant:`danger`,title:`Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.`,"sr-title":`Danger notification:`},{default:n(()=>[e(B,{position:`right`},{toggle:n(()=>[e(R,{variant:`plain`})]),default:n(()=>[e(z,null,{default:n(()=>[...a[29]||=[t(`Action`,-1)]]),_:1})]),_:1})]),_:1}),e(U,{timestamp:`10 minutes ago`},{default:n(()=>[...a[30]||=[t(` This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines. `,-1)]]),_:1})]),_:1}),e(W,{variant:`warning`,read:``},{default:n(()=>[e(H,{variant:`warning`,title:`Read warning notification title`,"sr-title":`Warning notification:`},{default:n(()=>[e(B,{position:`right`},{toggle:n(()=>[e(R,{variant:`plain`})]),default:n(()=>[e(z,null,{default:n(()=>[...a[31]||=[t(`Action`,-1)]]),_:1})]),_:1})]),_:1}),e(U,{timestamp:`10 minutes ago`},{default:n(()=>[...a[32]||=[t(` This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines. `,-1)]]),_:1})]),_:1}),e(W,{variant:`success`,read:``},{default:n(()=>[e(H,{variant:`success`,title:`Read success notification title`,"sr-title":`Success notification:`},{default:n(()=>[e(B,{position:`right`},{toggle:n(()=>[e(R,{variant:`plain`})]),default:n(()=>[e(z,null,{default:n(()=>[...a[33]||=[t(`Action`,-1)]]),_:1})]),_:1})]),_:1}),e(U,{timestamp:`30 minutes ago`},{default:n(()=>[...a[34]||=[t(` This is a success notification description. `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),e(K,{title:`Second notification group`,count:`2`},{default:n(()=>[e(G,{"aria-label":`Notifications in the second group`},{default:n(()=>[e(W,{variant:`info`},{default:n(()=>[e(H,{variant:`info`,title:`Unread info notification title`,"sr-title":`Info notification:`},{default:n(()=>[e(B,{position:`right`},{toggle:n(()=>[e(R,{variant:`plain`})]),default:n(()=>[e(z,null,{default:n(()=>[...a[35]||=[t(`Action`,-1)]]),_:1})]),_:1})]),_:1}),e(U,{timestamp:`5 minutes ago`},{default:n(()=>[...a[36]||=[t(` This is an info notification description. `,-1)]]),_:1})]),_:1}),e(W,{variant:`danger`},{default:n(()=>[e(H,{variant:`danger`,title:`Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.`,"sr-title":`Danger notification:`},{default:n(()=>[e(B,{position:`right`},{toggle:n(()=>[e(R,{variant:`plain`})]),default:n(()=>[e(z,null,{default:n(()=>[...a[37]||=[t(`Action`,-1)]]),_:1})]),_:1})]),_:1}),e(U,{timestamp:`10 minutes ago`},{default:n(()=>[...a[38]||=[t(` This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines. `,-1)]]),_:1})]),_:1}),e(W,{variant:`warning`,read:``},{default:n(()=>[e(H,{variant:`warning`,title:`Read warning notification title`,"sr-title":`Warning notification:`},{default:n(()=>[e(B,{position:`right`},{toggle:n(()=>[e(R,{variant:`plain`})]),default:n(()=>[e(z,null,{default:n(()=>[...a[39]||=[t(`Action`,-1)]]),_:1})]),_:1})]),_:1}),e(U,{timestamp:`20 minutes ago`},{default:n(()=>[...a[40]||=[t(` This is a warning notification description. `,-1)]]),_:1})]),_:1}),e(W,{variant:`success`,read:``},{default:n(()=>[e(H,{variant:`success`,title:`Read success notification title`,"sr-title":`Success notification:`},{default:n(()=>[e(B,{position:`right`},{toggle:n(()=>[e(R,{variant:`plain`})]),default:n(()=>[e(z,null,{default:n(()=>[...a[41]||=[t(`Action`,-1)]]),_:1})]),_:1})]),_:1}),e(U,{timestamp:`30 minutes ago`},{default:n(()=>[...a[42]||=[t(` This is a success notification description. `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),e(K,{title:`Third notification group. This is a long title to show how the title will be truncated if it is long and will be shown in a single line.`,count:`0`,"truncate-title":1,read:``},{default:n(()=>[e(G,{"aria-label":`Notifications in the third group`},{default:n(()=>[e(Q,{variant:`full`},{default:n(()=>[e(q,{"heading-level":`h2`,title:`No alerts found`},{icon:n(()=>[e(d(l))]),_:1}),e(J,null,{default:n(()=>[...a[43]||=[t(` There are currently no critical alerts firing. There may be firing alerts of other severities or silenced critical alerts however. `,-1)]]),_:1}),e(Z,null,{default:n(()=>[e(X,null,{default:n(()=>[e(Y,{variant:`link`},{default:n(()=>[...a[44]||=[t(`Action`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),default:n(()=>[e(j,null,{default:n(()=>[...a[45]||=[t(` Main section `,-1)]]),_:1})]),_:1},8,[`drawer-expanded`])]),_:1})]),_:1})}}});export{f as default};