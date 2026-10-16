import{N as e,U as t,c as n,et as r,h as i,k as a,m as o,p as s,s as c,st as l}from"./runtime-core.esm-bundler-wvQKcJ7_.js";import{a as u,f as d}from"./index-JVD46Mu3.js";var f=i({__name:`Page.story`,setup(i){let f=r(!1);return(r,i)=>{let p=e(`component-info`),m=e(`pf-page-toggle-button`),h=e(`pf-masthead-toggle`),g=e(`pf-masthead-brand`),_=e(`router-link`),v=e(`pf-masthead-main`),y=e(`pf-toolbar-item`),b=e(`pf-toolbar-content`),x=e(`pf-toolbar`),S=e(`pf-masthead-content`),C=e(`pf-masthead`),w=e(`pf-nav-item`),T=e(`pf-nav-group`),E=e(`pf-nav`),D=e(`pf-page-sidebar`),O=e(`pf-breadcrumb-item`),k=e(`pf-breadcrumb`),A=e(`pf-page-breadcrumb`),j=e(`pf-page-section`),M=e(`pf-page`),N=e(`story-canvas`),P=e(`pf-card-body`),F=e(`pf-card`),I=e(`pf-notification-badge`),L=e(`pf-toolbar-group`),R=e(`pf-menu-toggle`),z=e(`pf-dropdown-item`),B=e(`pf-dropdown`),V=e(`pf-notification-drawer-header`),H=e(`pf-notification-drawer-list-item-header`),U=e(`pf-notification-drawer-list-item-body`),W=e(`pf-notification-drawer-list-item`),G=e(`pf-notification-drawer-list`),K=e(`pf-notification-drawer-group`),q=e(`pf-empty-state-header`),J=e(`pf-empty-state-body`),Y=e(`pf-button`),X=e(`pf-empty-state-actions`),Z=e(`pf-empty-state-footer`),Q=e(`pf-empty-state`),$=e(`pf-notification-drawer-group-list`),ee=e(`pf-notification-drawer-body`),te=e(`pf-notification-drawer`),ne=e(`doc-page`);return a(),n(ne,{name:`Components/Page.story.vue`,title:`Page`},{description:t(()=>[...i[1]||=[s(`The `,-1),c(`b`,null,`page`,-1),s(` component is used to define the basic layout of a page with either vertical or horizontal navigation.`,-1)]]),apidocs:t(()=>[o(p,{name:`PfPage`,doc:{name:`PfPage`,exportName:`PfPage`,displayName:`Page`,description:``,tags:{},expose:[{name:`navToggle`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`role`,description:`Sets the value for role on the <main> element`,required:!1,type:{name:`string`}},{name:`mainContainerId`,description:`an id to use for the [role="main"] element`,required:!1,type:{name:`string`}},{name:`mainTabIndex`,description:`tabIndex to use for the [role="main"] element, null to unset it`,required:!1,type:{name:`number`}},{name:`managedSidebar`,description:`If true, manages the sidebar open/close state and there is no need to pass the isSidebarOpen boolean into
the sidebar component or add a callback onNavToggle function into the PageHeader component`,required:!1,type:{name:`boolean`}},{name:`tertiaryNavWidthLimited`,description:`Flag indicating if tertiary nav width should be limited`,required:!1,type:{name:`boolean`}},{name:`notificationDrawerExpanded`,description:`Flag indicating Notification drawer in expanded`,required:!1,type:{name:`boolean`}},{name:`defaultManagedSidebarOpen`,description:`If true, the managed sidebar is initially open for desktop view`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`mainAriaLabel`,description:`Accessible label, can be used to name main section`,required:!1,type:{name:`string`}},{name:`drawerExpanded`,description:`Flag indicating Notification drawer in expanded`,required:!1,type:{name:`boolean`}},{name:`mainComponent`,description:`HTML component used as main component of the page. Defaults to 'main', only pass in 'div' if another 'main' element already exists.`,required:!1,type:{name:`union`,elements:[{name:`"main"`},{name:`"div"`}]},defaultValue:{func:!1,value:`"main"`}},{name:`contentFilled`,description:`Enables children to fill the available vertical space. Child page sections or groups that should fill should be passed the isFilled property.`,required:!1,type:{name:`boolean`}},{name:`variant`,description:`Indicates the layout variant`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"docked"`}]}},{name:`dockExpanded`,description:`Flag indicating the docked nav is expanded on mobile. Only applies when variant is docked.`,required:!1,type:{name:`boolean`}},{name:`dockTextExpanded`,description:`Flag indicating the docked nav should display text on desktop. Only applies when variant is docked, and will handle setting isTextExpanded on individual isDocked components.`,required:!1,type:{name:`boolean`}}],events:[{name:`pageResize`,type:{names:[`{ mobileView: boolean; windowSize: number }`]}}],slots:[{name:`default`},{name:`skip-to-content`},{name:`masthead`},{name:`dock-content`},{name:`sidebar`},{name:`drawer`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Page/Page.vue`]}}),o(p,{name:`PfPageBreadcrumb`,doc:{name:`PfPageBreadcrumb`,exportName:`PfPageBreadcrumb`,displayName:`PageBreadcrumb`,description:``,tags:{},props:[{name:`sticky2xl`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyXl`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyLg`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyMd`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickySm`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`sticky`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`widthLimited`,description:`Limits the width of the breadcrumb`,required:!1,type:{name:`boolean`}},{name:`maxWidth`,description:`Limits the width of the section and sets the --pf-v6-c-page--section--m-limit-width--MaxWidth variable to this value`,required:!1,type:{name:`string`}},{name:`shadowTop`,description:`Flag indicating if PageBreadcrumb should have a shadow at the top`,required:!1,type:{name:`boolean`}},{name:`shadowBottom`,description:`Flag indicating if PageBreadcrumb should have a shadow at the bottom`,required:!1,type:{name:`boolean`}},{name:`overflowScroll`,description:`Flag indicating if the PageBreadcrumb has a scrolling overflow`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Page/PageBreadcrumb.vue`]}}),o(p,{name:`PfPageGroup`,doc:{name:`PfPageGroup`,exportName:`PfPageGroup`,displayName:`PageGroup`,description:``,tags:{},props:[{name:`sticky2xl`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyXl`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyLg`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyMd`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickySm`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`sticky`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`stickyBase`,description:`Applies the base sticky positioning to the top or bottom of the scroll parent container.`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyStuck`,description:`Flag indicating if the group has stuck styling, applied when the group is not at the edge of the scroll parent container.`,required:!1,type:{name:`boolean`}},{name:`filled`,description:`Enables the page group to fill the available vertical space if true, or disable filling if false.`,required:!1,type:{name:`boolean`}},{name:`shadowTop`,description:`Flag indicating if PageBreadcrumb should have a shadow at the top`,required:!1,type:{name:`boolean`}},{name:`shadowBottom`,description:`Flag indicating if PageBreadcrumb should have a shadow at the bottom`,required:!1,type:{name:`boolean`}},{name:`overflowScroll`,description:`Flag indicating if the PageBreadcrumb has a scrolling overflow`,required:!1,type:{name:`boolean`}},{name:`plain`,description:`Adds plain styling to the page group.`,required:!1,type:{name:`boolean`}},{name:`noPlainOnGlass`,description:`Prevents the page group from automatically applying plain styling when glass theme is enabled.`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Page/PageGroup.vue`]}}),o(p,{name:`PfPageSection`,doc:{name:`PfPageSection`,exportName:`PfPageSection`,displayName:`PageSection`,description:``,tags:{},props:[{name:`sticky2xl`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyXl`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyLg`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyMd`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickySm`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`sticky`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`padding2xl`,required:!1,type:{name:`union`,elements:[{name:`"padding"`},{name:`"no-padding"`}]}},{name:`paddingXl`,required:!1,type:{name:`union`,elements:[{name:`"padding"`},{name:`"no-padding"`}]}},{name:`paddingLg`,required:!1,type:{name:`union`,elements:[{name:`"padding"`},{name:`"no-padding"`}]}},{name:`paddingMd`,required:!1,type:{name:`union`,elements:[{name:`"padding"`},{name:`"no-padding"`}]}},{name:`paddingSm`,required:!1,type:{name:`union`,elements:[{name:`"padding"`},{name:`"no-padding"`}]}},{name:`padding`,required:!1,type:{name:`union`,elements:[{name:`"padding"`},{name:`"no-padding"`}]}},{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`variant`,description:`Section background color variant`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"secondary"`}]},defaultValue:{func:!1,value:`'default'`}},{name:`type`,description:`Section type variant`,required:!1,type:{name:`TSTypeOperator`},defaultValue:{func:!1,value:`'default'`}},{name:`filled`,description:`Enables the page section to fill the available vertical space`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`widthLimited`,description:`Limits the width of the section`,required:!1,type:{name:`boolean`}},{name:`maxWidth`,description:`Limits the width of the section and sets the --pf-v6-c-page--section--m-limit-width--MaxWidth variable to this value`,required:!1,type:{name:`string`}},{name:`centerAligned`,description:`Flag indicating if the section content is center aligned. Either widthLimited or maxWidth must be set for this to work`,required:!1,type:{name:`boolean`}},{name:`shadowTop`,description:`Modifier indicating if PageSection should have a shadow at the top`,required:!1,type:{name:`boolean`}},{name:`shadowBottom`,description:`Modifier indicating if PageSection should have a shadow at the bottom`,required:!1,type:{name:`boolean`}},{name:`overflowScroll`,description:`Flag indicating if the PageSection has a scrolling overflow`,required:!1,type:{name:`boolean`}},{name:`component`,description:`Sets the base component to render. Defaults to section`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Component`}]},defaultValue:{func:!1,value:`'section' as any`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Page/PageSection.vue`]}}),o(p,{name:`PfPageSidebar`,doc:{name:`PfPageSidebar`,exportName:`PfPageSidebar`,displayName:`PageSidebar`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`id`,description:`Sidebar id`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'page-sidebar'`}},{name:`sidebarOpen`,description:`Programmatically manage if the side nav is shown, if managedSidebar is set to true in the PfPage component, this prop is managed`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Page/PageSidebar.vue`]}}),o(p,{name:`PfPageSidebarBody`,doc:{name:`PfPageSidebarBody`,exportName:`PfPageSidebarBody`,displayName:`PageSidebarBody`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`insets`,description:`Flag indicating that the page sidebar body should use page insets.`,required:!1,type:{name:`boolean`}},{name:`filled`,description:`Flag indicating that the page sidebar body should fill the available vertical space.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Page/PageSidebarBody.vue`]}}),o(p,{name:`PfPageToggleButton`,doc:{name:`PfPageToggleButton`,exportName:`PfPageToggleButton`,displayName:`PageToggleButton`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`id`,description:`Sidebar id`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"nav-toggle"`}},{name:`sidebarOpen`,description:`Programmatically manage if the side nav is shown, if managedSidebar is set to true in the PfPage component, this prop is managed`,required:!1,type:{name:`boolean`}},{name:`hamburger`,description:`Flag indicating the button is a hamburger button. This will override the icon property.`,required:!1,type:{name:`boolean`}}],events:[{name:`update:sidebarOpen`,type:{names:[`boolean`]}}],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Page/PageToggleButton.vue`]}})]),default:t(()=>[i[46]||=c(`div`,{class:`markdown pf-v6-c-content`},[c(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),c(`ul`,null,[c(`li`,null,[c(`code`,null,`pf-page-breadcrumb`),s(` and `),c(`code`,null,`pf-page-section`),s(` can be limited in width by setting their `),c(`code`,null,`max-width`),s(` prop.`)])]),c(`h2`,{class:`pf-v6-c-title`},`Examples`),c(`h3`,{class:`pf-v6-c-title`},`Basic page components`),c(`p`,null,`A page will typically contain the following components:`),c(`ul`,null,[c(`li`,null,[s(`A `),c(`code`,null,`<pf-page>`),s(` with a `),c(`code`,null,`header`),s(` that often contains a `),c(`a`,{href:`#/stories/components/masthead`},`masthead`),c(`ul`,null,[c(`li`,null,[s(`Mastheads contain the `),c(`code`,null,`<pf-page-toggle-button>`),s(`, a `),c(`code`,null,`<pf-masthead-main>`),s(` that contains a `),c(`code`,null,`<pf-masthead-brand>`),s(`, and the page's header toolbar within `),c(`code`,null,`<pf-masthead-content>`),s(`.`)])])]),c(`li`,null,[s(`1 or more `),c(`code`,null,`<pf-page-sidebar-body>`),s(` components inside `),c(`code`,null,`<pf-page-sidebar>`),s(` for vertical navigation or other sidebar content`)]),c(`li`,null,[s(`1 or more `),c(`code`,null,`<pf-page-section>`),s(` components`)])])],-1),o(N,{title:`Vertical Navigation`,source:`<pf-page managed-sidebar style="height: 500px">
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
</pf-page>`},{intro:t(()=>[...i[2]||=[c(`div`,{class:`markdown pf-v6-c-content`},[c(`p`,null,[s(`To add a vertical sidebar to a `),c(`code`,null,`<pf-page>`),s(`, pass a `),c(`code`,null,`<pf-page-sidebar>`),s(` component into the `),c(`code`,null,`sidebar`),s(` property. To render navigation in the sidebar, pass a `),c(`code`,null,`<pf-page-sidebar-body>`),s(` component to `),c(`code`,null,`<pf-page-sidebar>`),s(`.`)]),c(`p`,null,[s(`The `),c(`code`,null,`sidebar-open`),s(` property helps facilitate the opening and closing of the sidebar and should be 'true' when the sidebar is visible.`)])],-1)]]),default:t(()=>[o(M,{"managed-sidebar":``,style:{height:`500px`}},{masthead:t(()=>[o(C,null,{default:t(()=>[o(v,null,{default:t(()=>[o(h,null,{default:t(()=>[o(m,{hamburger:``})]),_:1}),o(_,{to:{name:`introduction`},custom:``},{default:t(({href:e})=>[o(g,{href:e},{default:t(()=>[...i[3]||=[s(` Logo `,-1)]]),_:1},8,[`href`])]),_:1})]),_:1}),o(S,null,{default:t(()=>[o(x,{"full-height":``},{default:t(()=>[o(b,null,{default:t(()=>[o(y,null,{default:t(()=>[...i[4]||=[s(`header-tools`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),sidebar:t(()=>[o(D,null,{default:t(()=>[o(E,null,{default:t(()=>[o(T,{title:`Overview`},{default:t(()=>[o(w,null,{default:t(()=>[...i[5]||=[s(`Home`,-1)]]),_:1})]),_:1}),o(T,{title:`Components`},{default:t(()=>[o(w,null,{default:t(()=>[...i[6]||=[s(`Accordion`,-1)]]),_:1}),o(w,null,{default:t(()=>[...i[7]||=[s(`Alert`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),default:t(()=>[o(A,{sticky:`top`,"shadow-bottom":``},{default:t(()=>[o(k,null,{default:t(()=>[o(O,{href:`#`},{default:t(()=>[...i[8]||=[s(`Section home`,-1)]]),_:1}),o(O,{href:`#`},{default:t(()=>[...i[9]||=[s(`Section title`,-1)]]),_:1}),o(O,{href:`#`},{default:t(()=>[...i[10]||=[s(`Section title`,-1)]]),_:1}),o(O,{href:`#`,active:``},{default:t(()=>[...i[11]||=[s(`Section landing`,-1)]]),_:1})]),_:1})]),_:1}),o(j,null,{default:t(()=>[...i[12]||=[s(`Section 1`,-1)]]),_:1}),o(j,{variant:`secondary`},{default:t(()=>[...i[13]||=[s(`Section 2 with secondary styling`,-1)]]),_:1}),o(j,null,{default:t(()=>[...i[14]||=[s(`Section 3`,-1)]]),_:1})]),_:1})]),_:1}),o(N,{title:`Centered`,style:{height:`500px`},source:`<pf-page managed-sidebar style="height: 500px">
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
</pf-page>`},{intro:t(()=>[...i[15]||=[c(`div`,{class:`markdown pf-v6-c-content`},[c(`p`,null,[s(`By default, a page section spans the width of the page. To reduce the width of a section, use the `),c(`code`,null,`width-limited`),s(` property. To center align width-limited page sections, use the `),c(`code`,null,`center-aligned`),s(` property. When the main content area of a page is wider than the value of a centered, width-limited page section's `),c(`code`,null,`--pf-v6-c-page--section--m-limit-width--MaxWidth`),s(` custom property, the section will automatically be centered.`)]),c(`p`,null,`The content in this example is placed in a card to better illustrate how the section behaves when it is centered, but a card is not required to center a page section.`)],-1)]]),default:t(()=>[o(M,{"managed-sidebar":``,style:{height:`500px`}},{masthead:t(()=>[o(C,null,{default:t(()=>[o(v,null,{default:t(()=>[o(h,null,{default:t(()=>[o(m,{hamburger:``})]),_:1}),o(_,{to:{name:`introduction`},custom:``},{default:t(({href:e})=>[o(g,{href:e},{default:t(()=>[...i[16]||=[s(` Logo `,-1)]]),_:1},8,[`href`])]),_:1})]),_:1}),o(S,null,{default:t(()=>[o(x,{"full-height":``},{default:t(()=>[o(b,null,{default:t(()=>[o(y,null,{default:t(()=>[...i[17]||=[s(`header-tools`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),sidebar:t(()=>[o(D,null,{default:t(()=>[o(E,null,{default:t(()=>[o(T,{title:`Overview`},{default:t(()=>[o(w,null,{default:t(()=>[...i[18]||=[s(`Home`,-1)]]),_:1})]),_:1}),o(T,{title:`Components`},{default:t(()=>[o(w,null,{default:t(()=>[...i[19]||=[s(`Accordion`,-1)]]),_:1}),o(w,null,{default:t(()=>[...i[20]||=[s(`Alert`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),default:t(()=>[o(j,{"max-width":`20rem`,"center-aligned":``,"sticky-sm":`bottom`},{default:t(()=>[o(F,null,{default:t(()=>[o(P,null,{default:t(()=>[...i[21]||=[s(` When a width limited page section is wider than the value of `,-1),c(`code`,null,`--pf-v6-c-page--section--m-limit-width--MaxWidth`,-1),s(`, the section will be centered in the main section. `,-1),c(`br`,null,null,-1),c(`br`,null,null,-1),s(` The content in this example is placed in a card to better illustrate how the section behaves when it is centered. A card is not required to center a page section. `,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(N,{title:`With notification drawer`,source:`<pf-page managed-sidebar :drawer-expanded="expanded" style="height: 500px">
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
</pf-page>`},{default:t(()=>[o(M,{"managed-sidebar":``,"drawer-expanded":f.value,style:{height:`500px`}},{masthead:t(()=>[o(C,null,{default:t(()=>[o(v,null,{default:t(()=>[o(h,null,{default:t(()=>[o(m,{hamburger:``})]),_:1}),o(_,{to:{name:`introduction`},custom:``},{default:t(({href:e})=>[o(g,{href:e},{default:t(()=>[...i[22]||=[s(` Logo `,-1)]]),_:1},8,[`href`])]),_:1})]),_:1}),o(S,null,{default:t(()=>[o(x,{"full-height":``},{default:t(()=>[o(b,null,{default:t(()=>[o(L,{align:`end`},{default:t(()=>[o(y,{visibility:`visible`},{default:t(()=>[o(I,{variant:`read`,expanded:f.value,onClick:i[0]||=e=>f.value=!f.value},{default:t(()=>[o(l(d))]),_:1},8,[`expanded`])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),sidebar:t(()=>[o(D,null,{default:t(()=>[o(E,null,{default:t(()=>[o(T,{title:`Overview`},{default:t(()=>[o(w,null,{default:t(()=>[...i[23]||=[s(`Home`,-1)]]),_:1})]),_:1}),o(T,{title:`Components`},{default:t(()=>[o(w,null,{default:t(()=>[...i[24]||=[s(`Accordion`,-1)]]),_:1}),o(w,null,{default:t(()=>[...i[25]||=[s(`Alert`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),drawer:t(()=>[o(te,null,{default:t(()=>[o(V,{count:`4`},{default:t(()=>[o(B,{position:`right`},{toggle:t(()=>[o(R,{variant:`plain`})]),default:t(()=>[o(z,null,{default:t(()=>[...i[26]||=[s(`Action`,-1)]]),_:1})]),_:1})]),_:1}),o(ee,null,{default:t(()=>[o($,null,{default:t(()=>[o(K,{title:`First notification group`,count:`2`},{default:t(()=>[o(G,{"aria-label":`Notifications in the basic example`},{default:t(()=>[o(W,{variant:`info`},{default:t(()=>[o(H,{variant:`info`,title:`Unread info notification title`,"sr-title":`Info notification:`},{default:t(()=>[o(B,{position:`right`},{toggle:t(()=>[o(R,{variant:`plain`})]),default:t(()=>[o(z,null,{default:t(()=>[...i[27]||=[s(`Action`,-1)]]),_:1})]),_:1})]),_:1}),o(U,{timestamp:`5 minutes ago`},{default:t(()=>[...i[28]||=[s(` This is an info notification description. `,-1)]]),_:1})]),_:1}),o(W,{variant:`danger`},{default:t(()=>[o(H,{variant:`danger`,title:`Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.`,"sr-title":`Danger notification:`},{default:t(()=>[o(B,{position:`right`},{toggle:t(()=>[o(R,{variant:`plain`})]),default:t(()=>[o(z,null,{default:t(()=>[...i[29]||=[s(`Action`,-1)]]),_:1})]),_:1})]),_:1}),o(U,{timestamp:`10 minutes ago`},{default:t(()=>[...i[30]||=[s(` This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines. `,-1)]]),_:1})]),_:1}),o(W,{variant:`warning`,read:``},{default:t(()=>[o(H,{variant:`warning`,title:`Read warning notification title`,"sr-title":`Warning notification:`},{default:t(()=>[o(B,{position:`right`},{toggle:t(()=>[o(R,{variant:`plain`})]),default:t(()=>[o(z,null,{default:t(()=>[...i[31]||=[s(`Action`,-1)]]),_:1})]),_:1})]),_:1}),o(U,{timestamp:`10 minutes ago`},{default:t(()=>[...i[32]||=[s(` This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines. `,-1)]]),_:1})]),_:1}),o(W,{variant:`success`,read:``},{default:t(()=>[o(H,{variant:`success`,title:`Read success notification title`,"sr-title":`Success notification:`},{default:t(()=>[o(B,{position:`right`},{toggle:t(()=>[o(R,{variant:`plain`})]),default:t(()=>[o(z,null,{default:t(()=>[...i[33]||=[s(`Action`,-1)]]),_:1})]),_:1})]),_:1}),o(U,{timestamp:`30 minutes ago`},{default:t(()=>[...i[34]||=[s(` This is a success notification description. `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),o(K,{title:`Second notification group`,count:`2`},{default:t(()=>[o(G,{"aria-label":`Notifications in the second group`},{default:t(()=>[o(W,{variant:`info`},{default:t(()=>[o(H,{variant:`info`,title:`Unread info notification title`,"sr-title":`Info notification:`},{default:t(()=>[o(B,{position:`right`},{toggle:t(()=>[o(R,{variant:`plain`})]),default:t(()=>[o(z,null,{default:t(()=>[...i[35]||=[s(`Action`,-1)]]),_:1})]),_:1})]),_:1}),o(U,{timestamp:`5 minutes ago`},{default:t(()=>[...i[36]||=[s(` This is an info notification description. `,-1)]]),_:1})]),_:1}),o(W,{variant:`danger`},{default:t(()=>[o(H,{variant:`danger`,title:`Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.`,"sr-title":`Danger notification:`},{default:t(()=>[o(B,{position:`right`},{toggle:t(()=>[o(R,{variant:`plain`})]),default:t(()=>[o(z,null,{default:t(()=>[...i[37]||=[s(`Action`,-1)]]),_:1})]),_:1})]),_:1}),o(U,{timestamp:`10 minutes ago`},{default:t(()=>[...i[38]||=[s(` This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines. `,-1)]]),_:1})]),_:1}),o(W,{variant:`warning`,read:``},{default:t(()=>[o(H,{variant:`warning`,title:`Read warning notification title`,"sr-title":`Warning notification:`},{default:t(()=>[o(B,{position:`right`},{toggle:t(()=>[o(R,{variant:`plain`})]),default:t(()=>[o(z,null,{default:t(()=>[...i[39]||=[s(`Action`,-1)]]),_:1})]),_:1})]),_:1}),o(U,{timestamp:`20 minutes ago`},{default:t(()=>[...i[40]||=[s(` This is a warning notification description. `,-1)]]),_:1})]),_:1}),o(W,{variant:`success`,read:``},{default:t(()=>[o(H,{variant:`success`,title:`Read success notification title`,"sr-title":`Success notification:`},{default:t(()=>[o(B,{position:`right`},{toggle:t(()=>[o(R,{variant:`plain`})]),default:t(()=>[o(z,null,{default:t(()=>[...i[41]||=[s(`Action`,-1)]]),_:1})]),_:1})]),_:1}),o(U,{timestamp:`30 minutes ago`},{default:t(()=>[...i[42]||=[s(` This is a success notification description. `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),o(K,{title:`Third notification group. This is a long title to show how the title will be truncated if it is long and will be shown in a single line.`,count:`0`,"truncate-title":1,read:``},{default:t(()=>[o(G,{"aria-label":`Notifications in the third group`},{default:t(()=>[o(Q,{variant:`full`},{default:t(()=>[o(q,{"heading-level":`h2`,title:`No alerts found`},{icon:t(()=>[o(l(u))]),_:1}),o(J,null,{default:t(()=>[...i[43]||=[s(` There are currently no critical alerts firing. There may be firing alerts of other severities or silenced critical alerts however. `,-1)]]),_:1}),o(Z,null,{default:t(()=>[o(X,null,{default:t(()=>[o(Y,{variant:`link`},{default:t(()=>[...i[44]||=[s(`Action`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),default:t(()=>[o(j,null,{default:t(()=>[...i[45]||=[s(` Main section `,-1)]]),_:1})]),_:1},8,[`drawer-expanded`])]),_:1})]),_:1})}}});export{f as default};