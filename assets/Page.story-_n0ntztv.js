import{F as e,G as t,H as n,N as r,Nt as ee,c as i,d as a,ft as o,g as s,h as c,j as l,l as te,m as u,n as d,nt as f,rt as p,s as m,u as ne}from"./runtime-core.esm-bundler-DKmYt4j6.js";import{C as re,M as h,N as g,W as _,j as v}from"./index-Cl3hMFDe.js";import{t as ie}from"./cubes-icon-CqiNdIGM.js";import{t as ae}from"./file-icon-BSIOB3lm.js";import{t as oe}from"./cloud-icon-BXWfDcZ7.js";import{t as se}from"./code-icon-DsTR7EwR.js";import{t as ce}from"./folder-icon-DxdCDukg.js";var le=_({name:`TableCellsLargeIcon`,height:512,width:448,svgPathData:`M384 96l-128 0 0 128 128 0 0-128zm64 128l0 192c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 128zM64 288l0 128 128 0 0-128-128 0zm128-64l0-128-128 0 0 128 128 0zm64 64l0 128 128 0 0-128-128 0z`,yOffset:0,xOffset:0}),y=s({__name:`Page.story`,setup(s){let[_,y]=v(),b=f({vertical:!0,multiple:!0,fill:!0,padding:!0,variations:!0,group:!0,centered:!0,plainSections:!0,footer:!0});function x(e){b[e]=!b[e]}let ue=p(!1),S=p(!1),C=p(!1),w=p(!1),T=p(!1),de=n(`dockedPage`),E=m(()=>de.value?.querySelector(`.pf-v6-c-page__dock`));function D(){C.value=!1,w.value=!1}function O(){C.value?D():C.value=!0}function fe(e){C.value?T.value=e:(T.value=!0,w.value=!0,C.value=!0)}function pe(){w.value&&D()}return g(`Escape`,()=>{w.value&&D()}),h(E,()=>{w.value&&D()}),(n,s)=>{let f=e(`pf-page-toggle-button`),p=e(`pf-masthead-toggle`),m=e(`pf-masthead-logo`),h=e(`pf-masthead-brand`),g=e(`pf-masthead-main`),v=e(`pf-toolbar-item`),E=e(`pf-toolbar-content`),D=e(`pf-toolbar`),k=e(`pf-masthead-content`),A=e(`pf-masthead`),j=e(`component-info`),M=e(`pf-page-sidebar-body`),N=e(`pf-page-sidebar`),P=e(`pf-page-section`),F=e(`pf-page`),I=e(`story-canvas`),L=e(`pf-nav-item`),R=e(`pf-nav-list`),z=e(`pf-nav`),B=e(`pf-breadcrumb-item`),V=e(`pf-breadcrumb`),me=e(`pf-page-breadcrumb`),H=e(`pf-page-group`),he=e(`pf-card-body`),ge=e(`pf-card`),U=e(`pf-content`),W=e(`pf-page-header`),_e=e(`pf-page-footer`),ve=e(`pf-notification-badge`),ye=e(`pf-toolbar-group`),be=e(`pf-nav-group`),G=e(`pf-menu-toggle`),K=e(`pf-dropdown-item`),q=e(`pf-dropdown`),xe=e(`pf-notification-drawer-header`),J=e(`pf-notification-drawer-list-item-header`),Y=e(`pf-notification-drawer-list-item-body`),X=e(`pf-notification-drawer-list-item`),Z=e(`pf-notification-drawer-list`),Q=e(`pf-notification-drawer-group`),Se=e(`pf-empty-state-body`),$=e(`pf-button`),Ce=e(`pf-empty-state-actions`),we=e(`pf-empty-state-footer`),Te=e(`pf-empty-state`),Ee=e(`pf-notification-drawer-group-list`),De=e(`pf-notification-drawer-body`),Oe=e(`pf-notification-drawer`),ke=e(`pf-divider`),Ae=e(`pf-nav-expandable`),je=e(`doc-page`);return l(),a(d,null,[c(o(_),null,{default:t(({id:e,sidebarOpen:n,toggle:r})=>[c(A,null,{default:t(()=>[c(g,null,{default:t(()=>[e?(l(),te(p,{key:0},{default:t(()=>[c(f,{id:e,hamburger:``,"aria-label":`Global navigation`,"sidebar-open":n,"onUpdate:sidebarOpen":e=>r?.()},null,8,[`id`,`sidebar-open`,`onUpdate:sidebarOpen`])]),_:2},1024)):ne(``,!0),c(h,null,{default:t(()=>[c(m,{href:`https://patternfly.org`,target:`_blank`},{default:t(()=>[...s[2]||=[u(`Logo`,-1)]]),_:1})]),_:1})]),_:2},1024),c(k,null,{default:t(()=>[c(D,null,{default:t(()=>[c(E,null,{default:t(()=>[c(v,null,{default:t(()=>[...s[3]||=[u(`header-tools`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:2},1024)]),_:1}),c(je,{name:`Components/Page.story.vue`,title:`Page`},{description:t(()=>[...s[4]||=[u(`The `,-1),i(`b`,null,`page`,-1),u(` component is used to define the basic layout of a page with either vertical or horizontal navigation.`,-1)]]),apidocs:t(()=>[c(j,{name:`PfPage`,doc:{name:`PfPage`,exportName:`PfPage`,displayName:`Page`,description:``,tags:{},expose:[{name:`navToggle`},{name:`main`,description:`The main section of the page`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`role`,description:`Sets the value for role on the <main> element`,required:!1,type:{name:`string`}},{name:`mainContainerId`,description:`an id to use for the [role="main"] element`,required:!1,type:{name:`string`}},{name:`mainTabIndex`,description:`tabIndex to use for the [role="main"] element, null to unset it`,required:!1,type:{name:`union`,elements:[{name:`number`},{name:`null`}]},defaultValue:{func:!1,value:`-1`}},{name:`managedSidebar`,description:`If true, manages the sidebar open/close state and there is no need to pass the isSidebarOpen boolean into
the sidebar component or add a callback onNavToggle function into the PageHeader component`,required:!1,type:{name:`boolean`}},{name:`defaultManagedSidebarOpen`,description:`If true, the managed sidebar is initially open for desktop view`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`mainAriaLabel`,description:`Accessible label, can be used to name main section`,required:!1,type:{name:`string`}},{name:`drawerExpanded`,description:`Flag indicating the notification drawer is expanded`,required:!1,type:{name:`boolean`}},{name:`drawerDefaultSize`,description:`Sets the default size of the notification drawer`,required:!1,type:{name:`string`}},{name:`drawerMinSize`,description:`Sets the minimum size of the notification drawer`,required:!1,type:{name:`string`}},{name:`drawerMaxSize`,description:`Sets the maximum size of the notification drawer`,required:!1,type:{name:`string`}},{name:`mainComponent`,description:`HTML component used as main component of the page. Defaults to 'main', only pass in 'div' if another 'main' element already exists.`,required:!1,type:{name:`union`,elements:[{name:`"main"`},{name:`"div"`}]},defaultValue:{func:!1,value:`'main'`}},{name:`contentFilled`,description:`Enables children to fill the available vertical space. Child page sections or groups that should fill should be passed the isFilled property.`,required:!1,type:{name:`boolean`}},{name:`variant`,description:`Indicates the layout variant`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"docked"`}]}},{name:`dockExpanded`,description:`Flag indicating the docked nav is expanded. Only applies when variant is docked.`,required:!1,type:{name:`boolean`}},{name:`dockOverlay`,description:`Flag indicating the docked nav should expand as an overlay instead of the default inline.`,required:!1,type:{name:`boolean`}},{name:`plain`,description:`Flag indicating the page should render without the content area background and overflow scroll.`,required:!1,type:{name:`boolean`}}],events:[{name:`pageResize`,type:{names:[`{ mobileView: boolean; windowSize: number }`]},description:`The page was resized, with whether it is below the xl breakpoint and its width`},{name:`notificationDrawerExpand`,type:{names:[`TransitionEvent`]},description:`The notification drawer finished expanding or collapsing`}],slots:[{name:`default`},{name:`skip-to-content`},{name:`masthead`,description:`The horizontal masthead content (e.g. PfMasthead or PfPageHeader). When using the docked variant, this content will only render at mobile viewports.`},{name:`dock-content`},{name:`sidebar`},{name:`drawer`},{name:`footer`,description:`Content rendered inside the page footer, e.g. PfPageFooter`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Page/Page.vue`]}}),c(j,{name:`PfPageHeader`,doc:{name:`PfPageHeader`,exportName:`PfPageHeader`,displayName:`PageHeader`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`component`,description:`Sets the base component to render. Defaults to header`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Component`}]},defaultValue:{func:!1,value:`'header'`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Page/PageHeader.vue`]}}),c(j,{name:`PfPageSidebar`,doc:{name:`PfPageSidebar`,exportName:`PfPageSidebar`,displayName:`PageSidebar`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`id`,description:`Sidebar id`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'page-sidebar'`}},{name:`sidebarOpen`,description:`Programmatically manage if the side nav is shown, if managedSidebar is set to true in the PfPage component, this prop is managed`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Page/PageSidebar.vue`]}}),c(j,{name:`PfPageSidebarBody`,doc:{name:`PfPageSidebarBody`,exportName:`PfPageSidebarBody`,displayName:`PageSidebarBody`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`insets`,description:`Flag indicating that the page sidebar body should use page insets.`,required:!1,type:{name:`boolean`}},{name:`filled`,description:`Flag indicating that the page sidebar body should fill the available vertical space.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`contextSelector`,description:`Flag indicating that the page sidebar body is for a context selector/perspective switcher`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Page/PageSidebarBody.vue`]}}),c(j,{name:`PfPageSection`,doc:{name:`PfPageSection`,exportName:`PfPageSection`,displayName:`PageSection`,description:``,tags:{},props:[{name:`sticky2xl`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyXl`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyLg`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyMd`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickySm`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`sticky`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`padding2xl`,required:!1,type:{name:`union`,elements:[{name:`"padding"`},{name:`"no-padding"`}]}},{name:`paddingXl`,required:!1,type:{name:`union`,elements:[{name:`"padding"`},{name:`"no-padding"`}]}},{name:`paddingLg`,required:!1,type:{name:`union`,elements:[{name:`"padding"`},{name:`"no-padding"`}]}},{name:`paddingMd`,required:!1,type:{name:`union`,elements:[{name:`"padding"`},{name:`"no-padding"`}]}},{name:`paddingSm`,required:!1,type:{name:`union`,elements:[{name:`"padding"`},{name:`"no-padding"`}]}},{name:`padding`,required:!1,type:{name:`union`,elements:[{name:`"padding"`},{name:`"no-padding"`}]}},{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`variant`,description:`Section background color variant. This will only apply when the type prop has the "default" value.`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"secondary"`}]},defaultValue:{func:!1,value:`'default'`}},{name:`type`,description:`Section type variant`,required:!1,type:{name:`TSTypeOperator`},defaultValue:{func:!1,value:`'default'`}},{name:`filled`,description:`Enables the page section to fill the available vertical space if true, or disable filling if false.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`widthLimited`,description:`Limits the width of the section`,required:!1,type:{name:`boolean`}},{name:`maxWidth`,description:`Limits the width of the section and sets the --pf-v6-c-page--section--m-limit-width--MaxWidth variable to this value`,required:!1,type:{name:`string`}},{name:`centerAligned`,description:`Flag indicating if the section content is center aligned. Either widthLimited or maxWidth must be set for this to work`,required:!1,type:{name:`boolean`}},{name:`stickyBase`,description:`Applies the base sticky positioning to the top or bottom of the scroll parent container.`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyStuck`,description:`Flag indicating if the section has stuck styling, applied when the section is not at the edge of the scroll parent container.`,required:!1,type:{name:`boolean`}},{name:`shadowTop`,description:`Modifier indicating if PageSection should have a shadow at the top`,required:!1,type:{name:`boolean`}},{name:`shadowBottom`,description:`Modifier indicating if PageSection should have a shadow at the bottom`,required:!1,type:{name:`boolean`}},{name:`overflowScroll`,description:`Flag indicating if the PageSection has a scrolling overflow. Requires an aria-label.`,required:!1,type:{name:`boolean`}},{name:`noBodyWrapper`,description:`Renders the content without a PfPageBody wrapper, to pass multiple custom PfPageBody children`,required:!1,type:{name:`boolean`}},{name:`plain`,description:`Adds plain styling to the page section.`,required:!1,type:{name:`boolean`}},{name:`noPlainOnGlass`,description:`Prevents the page section from automatically applying plain styling when glass theme is enabled.`,required:!1,type:{name:`boolean`}},{name:`component`,description:`Sets the base component to render. Defaults to section`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Component`}]},defaultValue:{func:!1,value:`'section'`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Page/PageSection.vue`]}}),c(j,{name:`PfPageGroup`,doc:{name:`PfPageGroup`,exportName:`PfPageGroup`,displayName:`PageGroup`,description:``,tags:{},props:[{name:`sticky2xl`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyXl`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyLg`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyMd`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickySm`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`sticky`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`stickyBase`,description:`Applies the base sticky positioning to the top or bottom of the scroll parent container.`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyStuck`,description:`Flag indicating if the group has stuck styling, applied when the group is not at the edge of the scroll parent container.`,required:!1,type:{name:`boolean`}},{name:`filled`,description:`Enables the page group to fill the available vertical space if true, or disable filling if false.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`shadowTop`,description:`Modifier indicating if PageGroup should have a shadow at the top`,required:!1,type:{name:`boolean`}},{name:`shadowBottom`,description:`Modifier indicating if PageGroup should have a shadow at the bottom`,required:!1,type:{name:`boolean`}},{name:`overflowScroll`,description:`Flag indicating if the PageGroup has a scrolling overflow. Requires an aria-label.`,required:!1,type:{name:`boolean`}},{name:`plain`,description:`Adds plain styling to the page group.`,required:!1,type:{name:`boolean`}},{name:`noPlainOnGlass`,description:`Prevents the page group from automatically applying plain styling when glass theme is enabled.`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Page/PageGroup.vue`]}}),c(j,{name:`PfPageBreadcrumb`,doc:{name:`PfPageBreadcrumb`,exportName:`PfPageBreadcrumb`,displayName:`PageBreadcrumb`,description:``,tags:{},props:[{name:`sticky2xl`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyXl`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyLg`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickyMd`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`stickySm`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`sticky`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`}]}},{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`widthLimited`,description:`Limits the width of the breadcrumb`,required:!1,type:{name:`boolean`}},{name:`maxWidth`,description:`Limits the width of the section and sets the --pf-v6-c-page--section--m-limit-width--MaxWidth variable to this value`,required:!1,type:{name:`string`}},{name:`shadowTop`,description:`Flag indicating if PageBreadcrumb should have a shadow at the top`,required:!1,type:{name:`boolean`}},{name:`shadowBottom`,description:`Flag indicating if PageBreadcrumb should have a shadow at the bottom`,required:!1,type:{name:`boolean`}},{name:`overflowScroll`,description:`Flag indicating if the PageBreadcrumb has a scrolling overflow. Requires an aria-label.`,required:!1,type:{name:`boolean`}},{name:`noBodyWrapper`,description:`Renders the content without a PfPageBody wrapper, to pass multiple custom PfPageBody children`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Page/PageBreadcrumb.vue`]}}),c(j,{name:`PfPageBody`,doc:{name:`PfPageBody`,exportName:`PfPageBody`,displayName:`PageBody`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`,description:`Content of the body, within a section, breadcrumb or group`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Page/PageBody.vue`]}}),c(j,{name:`PfPageToggleButton`,doc:{name:`PfPageToggleButton`,exportName:`PfPageToggleButton`,displayName:`PageToggleButton`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`id`,description:`Sidebar id`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'nav-toggle'`}},{name:`sidebarOpen`,description:`Programmatically manage if the side nav is shown, if managedSidebar is set to true in the PfPage component, this prop is managed`,required:!1,type:{name:`boolean`}},{name:`hamburger`,description:`Flag indicating the button is a hamburger button. This will override the icon property.`,required:!1,type:{name:`boolean`}},{name:`hamburgerVariant`,description:`Adjusts and animates the hamburger icon to indicate what will happen upon clicking the button. Requires hamburger.`,required:!1,type:{name:`union`,elements:[{name:`"expand"`},{name:`"collapse"`}]}}],events:[{name:`update:sidebarOpen`,type:{names:[`boolean`]}}],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Page/PageToggleButton.vue`]}}),c(j,{name:`PfPageFooter`,doc:{name:`PfPageFooter`,exportName:`PfPageFooter`,displayName:`PageFooter`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`component`,description:`Sets the base component to render. Defaults to footer`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Component`}]},defaultValue:{func:!1,value:`'footer'`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Page/PageFooter.vue`]}})]),default:t(()=>[s[121]||=i(`div`,{class:`markdown pf-v6-c-content`},[i(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),i(`ul`,null,[i(`li`,null,[u(`The `),i(`code`,null,`masthead`),u(`, `),i(`code`,null,`sidebar`),u(`, `),i(`code`,null,`footer`),u(`, `),i(`code`,null,`skipToContent`),u(`, `),i(`code`,null,`notificationDrawer`),u(` and `),i(`code`,null,`dockContent`),u(` props of `),i(`code`,null,`pf-page`),u(` are slots (`),i(`code`,null,`drawer`),u(` for the notification drawer); without a `),i(`code`,null,`pf-page-sidebar`),u(`, the page gets the no-sidebar layout.`)]),i(`li`,null,[i(`code`,null,`pf-page`),u(` has no `),i(`code`,null,`breadcrumb`),u(`, `),i(`code`,null,`horizontalSubnav`),u(`, `),i(`code`,null,`banner`),u(` or grouping props: put a `),i(`code`,null,`pf-page-breadcrumb`),u(`, a subnav `),i(`code`,null,`pf-page-section`),u(` or a `),i(`code`,null,`pf-page-group`),u(` in the default slot.`)]),i(`li`,null,[u(`Boolean props drop their prefix (`),i(`code`,null,`managed-sidebar`),u(`, `),i(`code`,null,`content-filled`),u(`, `),i(`code`,null,`plain`),u(`, `),i(`code`,null,`width-limited`),u(`, `),i(`code`,null,`filled`),u(`, `),i(`code`,null,`sticky-stuck`),u(`…); `),i(`code`,null,`hasBodyWrapper`),u(` is `),i(`code`,null,`no-body-wrapper`),u(` and `),i(`code`,null,`usePageInsets`),u(` is `),i(`code`,null,`insets`),u(`.`)]),i(`li`,null,[u(`The open state of an unmanaged sidebar is bound with `),i(`code`,null,`v-model:sidebar-open`),u(` on `),i(`code`,null,`pf-page-toggle-button`),u(`, and `),i(`code`,null,`isNotificationDrawerExpanded`),u(` is `),i(`code`,null,`drawer-expanded`),u(`; `),i(`code`,null,`onPageResize`),u(` and `),i(`code`,null,`onNotificationDrawerExpand`),u(` are the `),i(`code`,null,`page-resize`),u(` and `),i(`code`,null,`notification-drawer-expand`),u(` events.`)]),i(`li`,null,[i(`code`,null,`padding`),u(` and `),i(`code`,null,`stickyOnBreakpoint`),u(` are flat breakpoint props (`),i(`code`,null,`padding`),u(`, `),i(`code`,null,`padding-md`),u(`, `),i(`code`,null,`sticky`),u(`, `),i(`code`,null,`sticky-lg`),u(`…).`)]),i(`li`,null,[i(`code`,null,`pf-page-breadcrumb`),u(` and `),i(`code`,null,`pf-page-section`),u(` can be limited in width by setting their `),i(`code`,null,`max-width`),u(` prop.`)]),i(`li`,null,[u(`A `),i(`code`,null,`pf-page-sidebar`),u(` wraps loose content in a `),i(`code`,null,`pf-page-sidebar-body`),u(`. See `),i(`a`,{href:`#/`},`common differences from patternfly-react`),u(`.`)])]),i(`h2`,{class:`pf-v6-c-title`},`Examples`),i(`h3`,{class:`pf-v6-c-title`},`Basic page components`),i(`p`,null,`A page will typically contain the following components:`),i(`ul`,null,[i(`li`,null,[u(`A `),i(`code`,null,`<pf-page>`),u(` with a `),i(`code`,null,`masthead`),u(` slot that often contains a `),i(`a`,{href:`#/stories/components/masthead`},`masthead`),u(` or a `),i(`code`,null,`<pf-page-header>`),i(`ul`,null,[i(`li`,null,[u(`Mastheads contain a `),i(`code`,null,`<pf-masthead-main>`),u(` component, which includes the `),i(`code`,null,`<pf-masthead-toggle>`),u(`, a `),i(`code`,null,`<pf-masthead-logo>`),u(`, and the page's toolbar (via `),i(`code`,null,`<pf-masthead-content>`),u(`). The `),i(`code`,null,`<pf-masthead-toggle>`),u(` component contains a `),i(`code`,null,`<pf-page-toggle-button>`),u(`, and the `),i(`code`,null,`<pf-masthead-logo>`),u(` component contains a `),i(`code`,null,`<pf-masthead-brand>`),u(`.`)])])]),i(`li`,null,[u(`1 or more `),i(`code`,null,`<pf-page-sidebar-body>`),u(` components inside `),i(`code`,null,`<pf-page-sidebar>`),u(` for vertical navigation or other sidebar content`)]),i(`li`,null,[u(`1 or more `),i(`code`,null,`<pf-page-section>`),u(` components`)])])],-1),c(I,{title:`Vertical navigation`,source:`<pf-page style="height: 400px">
  <template #masthead>
    <masthead id="vertical-nav-toggle" :sidebar-open="open.vertical" :toggle="() => toggle('vertical')" ></masthead>
  </template>
  <template #sidebar>
    <pf-page-sidebar id="vertical-sidebar" :sidebar-open="open.vertical">
      <pf-page-sidebar-body>Navigation</pf-page-sidebar-body>
    </pf-page-sidebar>
  </template>
  <pf-page-section aria-labelledby="section-1">
    <h2 id="section-1">Vertical nav example section 1</h2>
  </pf-page-section>
  <pf-page-section variant="secondary" aria-labelledby="section-2">
    <h2 id="section-2">Vertical nav example section 2 with secondary variant styling</h2>
  </pf-page-section>
  <pf-page-section aria-labelledby="section-3">
    <h2 id="section-3">Vertical nav example section 3</h2>
  </pf-page-section>
</pf-page>`},{intro:t(()=>[...s[5]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[u(`To add a vertical sidebar to a `),i(`code`,null,`<pf-page>`),u(`, pass a `),i(`code`,null,`<pf-page-sidebar>`),u(` component into the `),i(`code`,null,`sidebar`),u(` slot. To render navigation in the sidebar, pass a `),i(`code`,null,`<pf-page-sidebar-body>`),u(` component to `),i(`code`,null,`<pf-page-sidebar>`),u(`.`)]),i(`p`,null,[u(`The `),i(`code`,null,`sidebar-open`),u(` property helps facilitate the opening and closing of the sidebar and should be `),i(`code`,null,`true`),u(` when the sidebar is visible.`)])],-1)]]),default:t(()=>[c(F,{style:{height:`400px`}},{masthead:t(()=>[c(o(y),{id:`vertical-nav-toggle`,"sidebar-open":b.vertical,toggle:()=>x(`vertical`)},null,8,[`sidebar-open`,`toggle`])]),sidebar:t(()=>[c(N,{id:`vertical-sidebar`,"sidebar-open":b.vertical},{default:t(()=>[c(M,null,{default:t(()=>[...s[6]||=[u(`Navigation`,-1)]]),_:1})]),_:1},8,[`sidebar-open`])]),default:t(()=>[c(P,{"aria-labelledby":`section-1`},{default:t(()=>[...s[7]||=[i(`h2`,{id:`section-1`},`Vertical nav example section 1`,-1)]]),_:1}),c(P,{variant:`secondary`,"aria-labelledby":`section-2`},{default:t(()=>[...s[8]||=[i(`h2`,{id:`section-2`},`Vertical nav example section 2 with secondary variant styling`,-1)]]),_:1}),c(P,{"aria-labelledby":`section-3`},{default:t(()=>[...s[9]||=[i(`h2`,{id:`section-3`},`Vertical nav example section 3`,-1)]]),_:1})]),_:1})]),_:1}),c(I,{title:`Multiple sidebar body`,source:`<pf-page style="height: 400px">
  <template #masthead>
    <masthead
      id="multiple-sidebar-body-nav-toggle"
      :sidebar-open="open.multiple"
      :toggle="() => toggle('multiple')"
    ></masthead>
  </template>
  <template #sidebar>
    <pf-page-sidebar id="multiple-sidebar-body-sidebar" :sidebar-open="open.multiple">
      <pf-page-sidebar-body context-selector>
        First sidebar body (for a context selector/perspective switcher)
      </pf-page-sidebar-body>
      <pf-page-sidebar-body insets>Second sidebar body (with insets)</pf-page-sidebar-body>
      <pf-page-sidebar-body :filled="true">Third sidebar body (with fill)</pf-page-sidebar-body>
      <pf-page-sidebar-body :filled="false" insets>
        Fourth sidebar body (with insets and no fill)
      </pf-page-sidebar-body>
    </pf-page-sidebar>
  </template>
  <pf-page-section aria-labelledby="multiple-section-1">
    <h2 id="multiple-section-1">Multiple sidebar body example section 1</h2>
  </pf-page-section>
  <pf-page-section aria-labelledby="multiple-section-2">
    <h2 id="multiple-section-2">Multiple sidebar body example section 2</h2>
  </pf-page-section>
  <pf-page-section aria-labelledby="multiple-section-3">
    <h2 id="multiple-section-3">Multiple sidebar body example section 3</h2>
  </pf-page-section>
</pf-page>`},{intro:t(()=>[...s[10]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[u(`You can have multiple `),i(`code`,null,`<pf-page-sidebar-body>`),u(` components inside the `),i(`code`,null,`<pf-page-sidebar>`),u(` for more customization. You can modify the `),i(`code`,null,`<pf-page-sidebar-body>`),u(` further by passing the following properties:`)]),i(`ul`,null,[i(`li`,null,[i(`code`,null,`insets`),u(` will modify the component's insets to match page insets`)]),i(`li`,null,[i(`code`,null,`:filled="true"`),u(` will cause the component to grow to fill the available vertical space`)]),i(`li`,null,[i(`code`,null,`:filled="false"`),u(` will cause the component to `),i(`strong`,null,`not`),u(` grow to fill the available vertical space`)])]),i(`p`,null,[u(`By default, the last `),i(`code`,null,`<pf-page-sidebar-body>`),u(` will grow to fill the available vertical space. This can be changed by passing `),i(`code`,null,`:filled="false"`),u(` as demonstrated in the following example.`)])],-1)]]),default:t(()=>[c(F,{style:{height:`400px`}},{masthead:t(()=>[c(o(y),{id:`multiple-sidebar-body-nav-toggle`,"sidebar-open":b.multiple,toggle:()=>x(`multiple`)},null,8,[`sidebar-open`,`toggle`])]),sidebar:t(()=>[c(N,{id:`multiple-sidebar-body-sidebar`,"sidebar-open":b.multiple},{default:t(()=>[c(M,{"context-selector":``},{default:t(()=>[...s[11]||=[u(` First sidebar body (for a context selector/perspective switcher) `,-1)]]),_:1}),c(M,{insets:``},{default:t(()=>[...s[12]||=[u(`Second sidebar body (with insets)`,-1)]]),_:1}),c(M,{filled:!0},{default:t(()=>[...s[13]||=[u(`Third sidebar body (with fill)`,-1)]]),_:1}),c(M,{filled:!1,insets:``},{default:t(()=>[...s[14]||=[u(` Fourth sidebar body (with insets and no fill) `,-1)]]),_:1})]),_:1},8,[`sidebar-open`])]),default:t(()=>[c(P,{"aria-labelledby":`multiple-section-1`},{default:t(()=>[...s[15]||=[i(`h2`,{id:`multiple-section-1`},`Multiple sidebar body example section 1`,-1)]]),_:1}),c(P,{"aria-labelledby":`multiple-section-2`},{default:t(()=>[...s[16]||=[i(`h2`,{id:`multiple-section-2`},`Multiple sidebar body example section 2`,-1)]]),_:1}),c(P,{"aria-labelledby":`multiple-section-3`},{default:t(()=>[...s[17]||=[i(`h2`,{id:`multiple-section-3`},`Multiple sidebar body example section 3`,-1)]]),_:1})]),_:1})]),_:1}),c(I,{title:`Horizontal navigation`,source:`<pf-page style="height: 400px">
  <template #masthead>
    <pf-masthead inset="xs">
      <pf-masthead-main>
        <pf-masthead-brand>
          <pf-masthead-logo href="https://patternfly.org" target="_blank">Logo</pf-masthead-logo>
        </pf-masthead-brand>
      </pf-masthead-main>
      <pf-masthead-content>
        <pf-toolbar id="horizontal-toolbar">
          <pf-toolbar-content>
            <pf-toolbar-item>Navigation</pf-toolbar-item>
            <pf-toolbar-item>header-tools</pf-toolbar-item>
          </pf-toolbar-content>
        </pf-toolbar>
      </pf-masthead-content>
    </pf-masthead>
  </template>
  <pf-page-section aria-labelledby="horizontal-section-1">
    <h2 id="horizontal-section-1">Horizontal nav example section 1</h2>
  </pf-page-section>
  <pf-page-section variant="secondary" aria-labelledby="horizontal-section-2">
    <h2 id="horizontal-section-2">Horizontal nav example section 2 with secondary variant styling</h2>
  </pf-page-section>
  <pf-page-section aria-labelledby="horizontal-section-3">
    <h2 id="horizontal-section-3">Horizontal nav example section 3</h2>
  </pf-page-section>
</pf-page>`},{intro:t(()=>[...s[18]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[u(`To add horizontal navigation to the top of a `),i(`code`,null,`<pf-page>`),u(`, add the navigation inside of a `),i(`code`,null,`<pf-toolbar-item>`),u(` in the `),i(`code`,null,`<pf-toolbar>`),u(` that is passed to the `),i(`code`,null,`<pf-masthead-content>`),u(` of the `),i(`code`,null,`<pf-masthead>`),u(`.`)])],-1)]]),default:t(()=>[c(F,{style:{height:`400px`}},{masthead:t(()=>[c(A,{inset:`xs`},{default:t(()=>[c(g,null,{default:t(()=>[c(h,null,{default:t(()=>[c(m,{href:`https://patternfly.org`,target:`_blank`},{default:t(()=>[...s[19]||=[u(`Logo`,-1)]]),_:1})]),_:1})]),_:1}),c(k,null,{default:t(()=>[c(D,{id:`horizontal-toolbar`},{default:t(()=>[c(E,null,{default:t(()=>[c(v,null,{default:t(()=>[...s[20]||=[u(`Navigation`,-1)]]),_:1}),c(v,null,{default:t(()=>[...s[21]||=[u(`header-tools`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),default:t(()=>[c(P,{"aria-labelledby":`horizontal-section-1`},{default:t(()=>[...s[22]||=[i(`h2`,{id:`horizontal-section-1`},`Horizontal nav example section 1`,-1)]]),_:1}),c(P,{variant:`secondary`,"aria-labelledby":`horizontal-section-2`},{default:t(()=>[...s[23]||=[i(`h2`,{id:`horizontal-section-2`},`Horizontal nav example section 2 with secondary variant styling`,-1)]]),_:1}),c(P,{"aria-labelledby":`horizontal-section-3`},{default:t(()=>[...s[24]||=[i(`h2`,{id:`horizontal-section-3`},`Horizontal nav example section 3`,-1)]]),_:1})]),_:1})]),_:1}),c(I,{title:`Uncontrolled navigation`,source:`<pf-page managed-sidebar style="height: 400px">
  <template #masthead>
    <masthead id="uncontrolled-nav-toggle" />
  </template>
  <template #sidebar>
    <pf-page-sidebar id="uncontrolled-sidebar">
      <pf-page-sidebar-body>Navigation</pf-page-sidebar-body>
    </pf-page-sidebar>
  </template>
  <pf-page-section aria-labelledby="uncontrolled-section-1">
    <h2 id="uncontrolled-section-1">Uncontrolled nav example section 1</h2>
  </pf-page-section>
  <pf-page-section aria-labelledby="uncontrolled-section-2">
    <h2 id="uncontrolled-section-2">Uncontrolled nav example section 2</h2>
  </pf-page-section>
  <pf-page-section aria-labelledby="uncontrolled-section-3">
    <h2 id="uncontrolled-section-3">Uncontrolled nav example section 3</h2>
  </pf-page-section>
</pf-page>`},{intro:t(()=>[...s[25]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[u(`When the `),i(`code`,null,`managed-sidebar`),u(` property is true, it manages the sidebar open/close state, removing the need to pass `),i(`code`,null,`sidebar-open`),u(` into the `),i(`code`,null,`<pf-page-sidebar>`),u(` and to bind it on the `),i(`code`,null,`<pf-page-toggle-button>`),u(`.`)])],-1)]]),default:t(()=>[c(F,{"managed-sidebar":``,style:{height:`400px`}},{masthead:t(()=>[c(o(y),{id:`uncontrolled-nav-toggle`})]),sidebar:t(()=>[c(N,{id:`uncontrolled-sidebar`},{default:t(()=>[c(M,null,{default:t(()=>[...s[26]||=[u(`Navigation`,-1)]]),_:1})]),_:1})]),default:t(()=>[c(P,{"aria-labelledby":`uncontrolled-section-1`},{default:t(()=>[...s[27]||=[i(`h2`,{id:`uncontrolled-section-1`},`Uncontrolled nav example section 1`,-1)]]),_:1}),c(P,{"aria-labelledby":`uncontrolled-section-2`},{default:t(()=>[...s[28]||=[i(`h2`,{id:`uncontrolled-section-2`},`Uncontrolled nav example section 2`,-1)]]),_:1}),c(P,{"aria-labelledby":`uncontrolled-section-3`},{default:t(()=>[...s[29]||=[i(`h2`,{id:`uncontrolled-section-3`},`Uncontrolled nav example section 3`,-1)]]),_:1})]),_:1})]),_:1}),c(I,{title:`Filled page sections`,source:`<pf-page content-filled style="height: 400px">
  <template #masthead>
    <masthead id="fill-nav-toggle" :sidebar-open="open.fill" :toggle="() => toggle('fill')" ></masthead>
  </template>
  <template #sidebar>
    <pf-page-sidebar id="fill-sidebar" :sidebar-open="open.fill">
      <pf-page-sidebar-body>Navigation</pf-page-sidebar-body>
    </pf-page-sidebar>
  </template>
  <pf-page-section aria-labelledby="fill-section-1">
    <h2 id="fill-section-1">Section without fill</h2>
  </pf-page-section>
  <pf-page-section :filled="true" variant="secondary" aria-labelledby="fill-section-2">
    <h2 id="fill-section-2">Section with fill</h2>
  </pf-page-section>
  <pf-page-section aria-labelledby="fill-section-3">
    <h2 id="fill-section-3">Another section without fill</h2>
  </pf-page-section>
</pf-page>`},{intro:t(()=>[...s[30]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,`By default, page sections will not expand to fill in the available vertical space in a page.`),i(`p`,null,[u(`To change this default behavior, pass `),i(`code`,null,`content-filled`),u(` to the `),i(`code`,null,`<pf-page>`),u(` component and `),i(`code`,null,`:filled="true"`),u(` to any child `),i(`code`,null,`<pf-page-section>`),u(` or `),i(`code`,null,`<pf-page-group>`),u(` component that you want to fill the space. If multiple components are set to fill, then the available space will be split equally between them.`)])],-1)]]),default:t(()=>[c(F,{"content-filled":``,style:{height:`400px`}},{masthead:t(()=>[c(o(y),{id:`fill-nav-toggle`,"sidebar-open":b.fill,toggle:()=>x(`fill`)},null,8,[`sidebar-open`,`toggle`])]),sidebar:t(()=>[c(N,{id:`fill-sidebar`,"sidebar-open":b.fill},{default:t(()=>[c(M,null,{default:t(()=>[...s[31]||=[u(`Navigation`,-1)]]),_:1})]),_:1},8,[`sidebar-open`])]),default:t(()=>[c(P,{"aria-labelledby":`fill-section-1`},{default:t(()=>[...s[32]||=[i(`h2`,{id:`fill-section-1`},`Section without fill`,-1)]]),_:1}),c(P,{filled:!0,variant:`secondary`,"aria-labelledby":`fill-section-2`},{default:t(()=>[...s[33]||=[i(`h2`,{id:`fill-section-2`},`Section with fill`,-1)]]),_:1}),c(P,{"aria-labelledby":`fill-section-3`},{default:t(()=>[...s[34]||=[i(`h2`,{id:`fill-section-3`},`Another section without fill`,-1)]]),_:1})]),_:1})]),_:1}),c(I,{title:`Main section padding`,source:`<pf-page style="height: 400px">
  <template #masthead>
    <masthead id="main-padding-nav-toggle" :sidebar-open="open.padding" :toggle="() => toggle('padding')" ></masthead>
  </template>
  <template #sidebar>
    <pf-page-sidebar id="main-padding-sidebar" :sidebar-open="open.padding">
      <pf-page-sidebar-body>Navigation</pf-page-sidebar-body>
    </pf-page-sidebar>
  </template>
  <pf-page-section aria-labelledby="padding-section-1">
    <h2 id="padding-section-1">Section with default padding</h2>
  </pf-page-section>
  <pf-page-section padding="no-padding" aria-labelledby="padding-section-2">
    <h2 id="padding-section-2">Section with no padding</h2>
  </pf-page-section>
  <pf-page-section padding="no-padding" padding-md="padding" aria-labelledby="padding-section-3">
    <h2 id="padding-section-3">Section with padding on medium</h2>
  </pf-page-section>
  <pf-page-section padding-md="no-padding" aria-labelledby="padding-section-4">
    <h2 id="padding-section-4">Section with no padding on medium</h2>
  </pf-page-section>
</pf-page>`},{intro:t(()=>[...s[35]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[u(`To adjust the padding of a `),i(`code`,null,`<pf-page-section>`),u(`, you can pass in different values to the `),i(`code`,null,`padding`),u(` property and to its breakpoint variants `),i(`code`,null,`padding-sm`),u(`, `),i(`code`,null,`padding-md`),u(`, `),i(`code`,null,`padding-lg`),u(`, `),i(`code`,null,`padding-xl`),u(` and `),i(`code`,null,`padding-2xl`),u(`. Each property should be given a value of either "padding" or "no-padding".`)]),i(`p`,null,[u(`As the page's viewport width increases, breakpoints inherit the padding behavior of the previous breakpoint. For example, padding that is set on `),i(`code`,null,`lg`),u(` also applies to `),i(`code`,null,`xl`),u(` and `),i(`code`,null,`2xl`),u(`.`)]),i(`p`,null,[u(`To remove padding entirely, pass "no-padding" to `),i(`code`,null,`padding`),u(`. For example, the second section in this example passes in `),i(`code`,null,`padding="no-padding"`),u(`. Since no specific breakpoints are mentioned, every breakpoint will have no padding.`)]),i(`p`,null,[u(`To add padding at specific breakpoints, pass in "padding" at those breakpoints. For example, the third section in this example passes in `),i(`code`,null,`padding="no-padding" padding-md="padding"`),u(`. At `),i(`code`,null,`md`),u(`, `),i(`code`,null,`lg`),u(`, `),i(`code`,null,`xl`),u(`, and `),i(`code`,null,`2xl`),u(` breakpoints, the default value will be overwritten, and padding will be added.`)]),i(`p`,null,[u(`To remove padding at specific breakpoints, pass in "no-padding" at those breakpoints. For example, the fourth section in this example passes in `),i(`code`,null,`padding-md="no-padding"`),u(`, which means that `),i(`code`,null,`md`),u(`, `),i(`code`,null,`lg`),u(`, `),i(`code`,null,`xl`),u(`, and `),i(`code`,null,`2xl`),u(` breakpoints will have no padding.`)])],-1)]]),default:t(()=>[c(F,{style:{height:`400px`}},{masthead:t(()=>[c(o(y),{id:`main-padding-nav-toggle`,"sidebar-open":b.padding,toggle:()=>x(`padding`)},null,8,[`sidebar-open`,`toggle`])]),sidebar:t(()=>[c(N,{id:`main-padding-sidebar`,"sidebar-open":b.padding},{default:t(()=>[c(M,null,{default:t(()=>[...s[36]||=[u(`Navigation`,-1)]]),_:1})]),_:1},8,[`sidebar-open`])]),default:t(()=>[c(P,{"aria-labelledby":`padding-section-1`},{default:t(()=>[...s[37]||=[i(`h2`,{id:`padding-section-1`},`Section with default padding`,-1)]]),_:1}),c(P,{padding:`no-padding`,"aria-labelledby":`padding-section-2`},{default:t(()=>[...s[38]||=[i(`h2`,{id:`padding-section-2`},`Section with no padding`,-1)]]),_:1}),c(P,{padding:`no-padding`,"padding-md":`padding`,"aria-labelledby":`padding-section-3`},{default:t(()=>[...s[39]||=[i(`h2`,{id:`padding-section-3`},`Section with padding on medium`,-1)]]),_:1}),c(P,{"padding-md":`no-padding`,"aria-labelledby":`padding-section-4`},{default:t(()=>[...s[40]||=[i(`h2`,{id:`padding-section-4`},`Section with no padding on medium`,-1)]]),_:1})]),_:1})]),_:1}),c(I,{title:`Main section variations`,source:`<pf-page style="height: 400px">
  <template #masthead>
    <masthead id="variations-nav-toggle" :sidebar-open="open.variations" :toggle="() => toggle('variations')" ></masthead>
  </template>
  <template #sidebar>
    <pf-page-sidebar id="variations-sidebar" :sidebar-open="open.variations">
      <pf-page-sidebar-body>Navigation</pf-page-sidebar-body>
    </pf-page-sidebar>
  </template>
  <pf-page-section type="subnav" aria-label="With subnav type">
    Section with <code>type="subnav"</code> for horizontal subnav navigation
  </pf-page-section>
  <pf-page-section type="tabs" aria-label="With tabs type">
    Section with <code>type="tabs"</code> for tabs
  </pf-page-section>
  <pf-page-section type="breadcrumb" aria-label="With breadcrumb type">
    Section with <code>type="breadcrumb"</code> for breadcrumbs
  </pf-page-section>
  <pf-page-section aria-label="With default type">
    Section without <code>type</code> prop or <code>type="default"</code> for main sections
  </pf-page-section>
  <pf-page-section type="wizard" aria-label="With wizard type">
    Section with <code>type="wizard"</code> for wizards
  </pf-page-section>
</pf-page>`},{intro:t(()=>[...s[41]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,`This example shows all types of page sections.`)],-1)]]),default:t(()=>[c(F,{style:{height:`400px`}},{masthead:t(()=>[c(o(y),{id:`variations-nav-toggle`,"sidebar-open":b.variations,toggle:()=>x(`variations`)},null,8,[`sidebar-open`,`toggle`])]),sidebar:t(()=>[c(N,{id:`variations-sidebar`,"sidebar-open":b.variations},{default:t(()=>[c(M,null,{default:t(()=>[...s[42]||=[u(`Navigation`,-1)]]),_:1})]),_:1},8,[`sidebar-open`])]),default:t(()=>[c(P,{type:`subnav`,"aria-label":`With subnav type`},{default:t(()=>[...s[43]||=[u(` Section with `,-1),i(`code`,null,`type="subnav"`,-1),u(` for horizontal subnav navigation `,-1)]]),_:1}),c(P,{type:`tabs`,"aria-label":`With tabs type`},{default:t(()=>[...s[44]||=[u(` Section with `,-1),i(`code`,null,`type="tabs"`,-1),u(` for tabs `,-1)]]),_:1}),c(P,{type:`breadcrumb`,"aria-label":`With breadcrumb type`},{default:t(()=>[...s[45]||=[u(` Section with `,-1),i(`code`,null,`type="breadcrumb"`,-1),u(` for breadcrumbs `,-1)]]),_:1}),c(P,{"aria-label":`With default type`},{default:t(()=>[...s[46]||=[u(` Section without `,-1),i(`code`,null,`type`,-1),u(` prop or `,-1),i(`code`,null,`type="default"`,-1),u(` for main sections `,-1)]]),_:1}),c(P,{type:`wizard`,"aria-label":`With wizard type`},{default:t(()=>[...s[47]||=[u(` Section with `,-1),i(`code`,null,`type="wizard"`,-1),u(` for wizards `,-1)]]),_:1})]),_:1})]),_:1}),c(I,{title:`Group section`,source:`<pf-page style="height: 400px">
  <template #masthead>
    <masthead id="group-nav-toggle" :sidebar-open="open.group" :toggle="() => toggle('group')" ></masthead>
  </template>
  <template #sidebar>
    <pf-page-sidebar id="group-sidebar" :sidebar-open="open.group">
      <pf-page-sidebar-body>Navigation</pf-page-sidebar-body>
    </pf-page-sidebar>
  </template>
  <pf-page-group>
    <pf-nav aria-label="Group section navigation" variant="horizontal-subnav">
      <pf-nav-list>
        <pf-nav-item href="#" :item-id="0" active>System panel</pf-nav-item>
        <pf-nav-item href="#" :item-id="1">Policy</pf-nav-item>
        <pf-nav-item href="#" :item-id="2">Authentication</pf-nav-item>
        <pf-nav-item href="#" :item-id="3">Network services</pf-nav-item>
        <pf-nav-item href="#" :item-id="4">Server</pf-nav-item>
      </pf-nav-list>
    </pf-nav>
    <pf-page-breadcrumb>
      <pf-breadcrumb>
        <pf-breadcrumb-item>Section home</pf-breadcrumb-item>
        <pf-breadcrumb-item href="#">Section title</pf-breadcrumb-item>
        <pf-breadcrumb-item href="#">Section title</pf-breadcrumb-item>
        <pf-breadcrumb-item href="#" active>Section landing</pf-breadcrumb-item>
      </pf-breadcrumb>
    </pf-page-breadcrumb>
    <pf-page-section aria-labelledby="grouped-section">
      <h2 id="grouped-section">Grouped section</h2>
    </pf-page-section>
  </pf-page-group>
  <pf-page-section aria-labelledby="group-section-1">
    <h2 id="group-section-1">Grouped example section 1</h2>
  </pf-page-section>
  <pf-page-section aria-labelledby="group-section-2">
    <h2 id="group-section-2">Grouped example section 2</h2>
  </pf-page-section>
</pf-page>`},{intro:t(()=>[...s[48]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[u(`To group page content sections, add 1 or more `),i(`code`,null,`<pf-page-group>`),u(` components to a `),i(`code`,null,`<pf-page>`),u(`.`)]),i(`p`,null,[u(`The following example adds a group containing `),i(`code`,null,`<pf-page-breadcrumb>`),u(` and `),i(`code`,null,`<pf-page-section>`),u(` components.`)])],-1)]]),default:t(()=>[c(F,{style:{height:`400px`}},{masthead:t(()=>[c(o(y),{id:`group-nav-toggle`,"sidebar-open":b.group,toggle:()=>x(`group`)},null,8,[`sidebar-open`,`toggle`])]),sidebar:t(()=>[c(N,{id:`group-sidebar`,"sidebar-open":b.group},{default:t(()=>[c(M,null,{default:t(()=>[...s[49]||=[u(`Navigation`,-1)]]),_:1})]),_:1},8,[`sidebar-open`])]),default:t(()=>[c(H,null,{default:t(()=>[c(z,{"aria-label":`Group section navigation`,variant:`horizontal-subnav`},{default:t(()=>[c(R,null,{default:t(()=>[c(L,{href:`#`,"item-id":0,active:``},{default:t(()=>[...s[50]||=[u(`System panel`,-1)]]),_:1}),c(L,{href:`#`,"item-id":1},{default:t(()=>[...s[51]||=[u(`Policy`,-1)]]),_:1}),c(L,{href:`#`,"item-id":2},{default:t(()=>[...s[52]||=[u(`Authentication`,-1)]]),_:1}),c(L,{href:`#`,"item-id":3},{default:t(()=>[...s[53]||=[u(`Network services`,-1)]]),_:1}),c(L,{href:`#`,"item-id":4},{default:t(()=>[...s[54]||=[u(`Server`,-1)]]),_:1})]),_:1})]),_:1}),c(me,null,{default:t(()=>[c(V,null,{default:t(()=>[c(B,null,{default:t(()=>[...s[55]||=[u(`Section home`,-1)]]),_:1}),c(B,{href:`#`},{default:t(()=>[...s[56]||=[u(`Section title`,-1)]]),_:1}),c(B,{href:`#`},{default:t(()=>[...s[57]||=[u(`Section title`,-1)]]),_:1}),c(B,{href:`#`,active:``},{default:t(()=>[...s[58]||=[u(`Section landing`,-1)]]),_:1})]),_:1})]),_:1}),c(P,{"aria-labelledby":`grouped-section`},{default:t(()=>[...s[59]||=[i(`h2`,{id:`grouped-section`},`Grouped section`,-1)]]),_:1})]),_:1}),c(P,{"aria-labelledby":`group-section-1`},{default:t(()=>[...s[60]||=[i(`h2`,{id:`group-section-1`},`Grouped example section 1`,-1)]]),_:1}),c(P,{"aria-labelledby":`group-section-2`},{default:t(()=>[...s[61]||=[i(`h2`,{id:`group-section-2`},`Grouped example section 2`,-1)]]),_:1})]),_:1})]),_:1}),c(I,{title:`Centered section`,source:`<pf-page style="height: 400px">
  <template #masthead>
    <masthead id="centered-nav-toggle" :sidebar-open="open.centered" :toggle="() => toggle('centered')" ></masthead>
  </template>
  <template #sidebar>
    <pf-page-sidebar id="centered-sidebar" :sidebar-open="open.centered">
      <pf-page-sidebar-body>Navigation</pf-page-sidebar-body>
    </pf-page-sidebar>
  </template>
  <pf-page-section width-limited center-aligned aria-label="width limited page section">
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
</pf-page>`},{intro:t(()=>[...s[62]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[u(`By default, a page section spans the width of the page. To reduce the width of a section, use the `),i(`code`,null,`width-limited`),u(` property. To center align width-limited page sections, use the `),i(`code`,null,`center-aligned`),u(` property. When the main content area of a page is wider than the value of a centered, width-limited page section's `),i(`code`,null,`--pf-v6-c-page--section--m-limit-width--MaxWidth`),u(` custom property, the section will automatically be centered.`)]),i(`p`,null,`The content in this example is placed in a card to better illustrate how the section behaves when it is centered, but a card is not required to center a page section.`)],-1)]]),default:t(()=>[c(F,{style:{height:`400px`}},{masthead:t(()=>[c(o(y),{id:`centered-nav-toggle`,"sidebar-open":b.centered,toggle:()=>x(`centered`)},null,8,[`sidebar-open`,`toggle`])]),sidebar:t(()=>[c(N,{id:`centered-sidebar`,"sidebar-open":b.centered},{default:t(()=>[c(M,null,{default:t(()=>[...s[63]||=[u(`Navigation`,-1)]]),_:1})]),_:1},8,[`sidebar-open`])]),default:t(()=>[c(P,{"width-limited":``,"center-aligned":``,"aria-label":`width limited page section`},{default:t(()=>[c(ge,null,{default:t(()=>[c(he,null,{default:t(()=>[...s[64]||=[u(` When a width limited page section is wider than the value of `,-1),i(`code`,null,`--pf-v6-c-page--section--m-limit-width--MaxWidth`,-1),u(`, the section will be centered in the main section. `,-1),i(`br`,null,null,-1),i(`br`,null,null,-1),u(` The content in this example is placed in a card to better illustrate how the section behaves when it is centered. A card is not required to center a page section. `,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),c(I,{title:`Plain sections and groups`,source:`<pf-page style="height: 500px">
  <template #masthead>
    <masthead
      id="plain-sections-nav-toggle"
      :sidebar-open="open.plainSections"
      :toggle="() => toggle('plainSections')"
    ></masthead>
  </template>
  <template #sidebar>
    <pf-page-sidebar id="plain-sections-sidebar" :sidebar-open="open.plainSections">
      <pf-page-sidebar-body>Navigation</pf-page-sidebar-body>
    </pf-page-sidebar>
  </template>
  <pf-page-section plain aria-label="Plain section example">
    <h2>Plain PageSection</h2>
    <p>This section uses <code>plain</code> to apply plain styling with no background color.</p>
  </pf-page-section>
  <pf-page-section aria-label="Default section example">
    <h2>Default PageSection</h2>
    <p>This section has the default styling with a background color.</p>
  </pf-page-section>
  <pf-page-group plain>
    <pf-page-section aria-label="Section in plain group">
      <h2>PageSection inside Plain PageGroup</h2>
      <p>This section is inside a PageGroup with <code>plain</code> applied.</p>
    </pf-page-section>
    <pf-page-section aria-label="Another section in plain group">
      <h2>Another Section in Plain Group</h2>
      <p>Both sections are grouped with plain styling.</p>
    </pf-page-section>
  </pf-page-group>
  <pf-page-section variant="secondary" aria-label="Secondary variant section">
    <h2>Secondary Variant Section</h2>
    <p>This section uses the secondary variant for contrast.</p>
  </pf-page-section>
</pf-page>`},{intro:t(()=>[...s[65]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[u(`To remove the default background color from a page section or group, use the `),i(`code`,null,`plain`),u(` property on `),i(`code`,null,`<pf-page-section>`),u(` or `),i(`code`,null,`<pf-page-group>`),u(` components.`)])],-1)]]),default:t(()=>[c(F,{style:{height:`500px`}},{masthead:t(()=>[c(o(y),{id:`plain-sections-nav-toggle`,"sidebar-open":b.plainSections,toggle:()=>x(`plainSections`)},null,8,[`sidebar-open`,`toggle`])]),sidebar:t(()=>[c(N,{id:`plain-sections-sidebar`,"sidebar-open":b.plainSections},{default:t(()=>[c(M,null,{default:t(()=>[...s[66]||=[u(`Navigation`,-1)]]),_:1})]),_:1},8,[`sidebar-open`])]),default:t(()=>[c(P,{plain:``,"aria-label":`Plain section example`},{default:t(()=>[...s[67]||=[i(`h2`,null,`Plain PageSection`,-1),i(`p`,null,[u(`This section uses `),i(`code`,null,`plain`),u(` to apply plain styling with no background color.`)],-1)]]),_:1}),c(P,{"aria-label":`Default section example`},{default:t(()=>[...s[68]||=[i(`h2`,null,`Default PageSection`,-1),i(`p`,null,`This section has the default styling with a background color.`,-1)]]),_:1}),c(H,{plain:``},{default:t(()=>[c(P,{"aria-label":`Section in plain group`},{default:t(()=>[...s[69]||=[i(`h2`,null,`PageSection inside Plain PageGroup`,-1),i(`p`,null,[u(`This section is inside a PageGroup with `),i(`code`,null,`plain`),u(` applied.`)],-1)]]),_:1}),c(P,{"aria-label":`Another section in plain group`},{default:t(()=>[...s[70]||=[i(`h2`,null,`Another Section in Plain Group`,-1),i(`p`,null,`Both sections are grouped with plain styling.`,-1)]]),_:1})]),_:1}),c(P,{variant:`secondary`,"aria-label":`Secondary variant section`},{default:t(()=>[...s[71]||=[i(`h2`,null,`Secondary Variant Section`,-1),i(`p`,null,`This section uses the secondary variant for contrast.`,-1)]]),_:1})]),_:1})]),_:1}),c(I,{title:`Dynamic sticky section`,source:`<pf-page style="height: 400px">
  <template #masthead>
    <masthead />
  </template>
  <div
    style="overflow-y: auto; height: 100%"
    @scroll.passive="stuck = ($event.target as HTMLElement).scrollTop > 0"
  >
    <pf-page-section type="breadcrumb" sticky-base="top" :sticky-stuck="stuck">
      <pf-breadcrumb>
        <pf-breadcrumb-item>Section home</pf-breadcrumb-item>
        <pf-breadcrumb-item href="#">Section title</pf-breadcrumb-item>
        <pf-breadcrumb-item href="#" active>Section landing</pf-breadcrumb-item>
      </pf-breadcrumb>
    </pf-page-section>
    <pf-page-section>
      <pf-content>
        <h1>Main title</h1>
        <p>
          Scroll the container to see the breadcrumb section above dynamically apply its stuck styling. The
          section uses <code>sticky-base="top"</code> to remain fixed at the top of the scroll parent, and
          <code>sticky-stuck</code> is toggled via a scroll event listener to apply visual styling when the
          section is no longer at the top edge.
        </p>
      </pf-content>
    </pf-page-section>
    <pf-page-section v-for="i in 30" :key="i" :variant="i % 2 === 1 ? 'default' : 'secondary'">
      <pf-content>
        <p>Section {{ i }} content</p>
      </pf-content>
    </pf-page-section>
  </div>
</pf-page>`},{intro:t(()=>[...s[72]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[u(`A page section may be made sticky with separate control of its sticky positioning and stuck styling using the `),i(`code`,null,`sticky-base`),u(` and `),i(`code`,null,`sticky-stuck`),u(` properties. The `),i(`code`,null,`sticky-base`),u(` property accepts a value of "top" or "bottom" and applies the base sticky positioning in the given direction. The `),i(`code`,null,`sticky-stuck`),u(` property applies visual "stuck" styling such as a background, box shadow, and border, and should be toggled based on the scroll position of the scroll parent container.`)]),i(`p`,null,[u(`In this example, a scroll event listener on the scroll parent container toggles `),i(`code`,null,`sticky-stuck`),u(` when its `),i(`code`,null,`scrollTop`),u(` is greater than 0, so the stuck styling appears only when the content is scrolled.`)])],-1)]]),default:t(()=>[c(F,{style:{height:`400px`}},{masthead:t(()=>[c(o(y))]),default:t(()=>[i(`div`,{style:{"overflow-y":`auto`,height:`100%`},onScrollPassive:s[0]||=e=>ue.value=e.target.scrollTop>0},[c(P,{type:`breadcrumb`,"sticky-base":`top`,"sticky-stuck":ue.value},{default:t(()=>[c(V,null,{default:t(()=>[c(B,null,{default:t(()=>[...s[73]||=[u(`Section home`,-1)]]),_:1}),c(B,{href:`#`},{default:t(()=>[...s[74]||=[u(`Section title`,-1)]]),_:1}),c(B,{href:`#`,active:``},{default:t(()=>[...s[75]||=[u(`Section landing`,-1)]]),_:1})]),_:1})]),_:1},8,[`sticky-stuck`]),c(P,null,{default:t(()=>[c(U,null,{default:t(()=>[...s[76]||=[i(`h1`,null,`Main title`,-1),i(`p`,null,[u(` Scroll the container to see the breadcrumb section above dynamically apply its stuck styling. The section uses `),i(`code`,null,`sticky-base="top"`),u(` to remain fixed at the top of the scroll parent, and `),i(`code`,null,`sticky-stuck`),u(` is toggled via a scroll event listener to apply visual styling when the section is no longer at the top edge. `)],-1)]]),_:1})]),_:1}),(l(),a(d,null,r(30,e=>c(P,{key:e,variant:e%2==1?`default`:`secondary`},{default:t(()=>[c(U,null,{default:t(()=>[i(`p`,null,`Section `+ee(e)+` content`,1)]),_:2},1024)]),_:2},1032,[`variant`])),64))],32)]),_:1})]),_:1}),c(I,{title:`Custom header`,source:`<pf-page style="height: 300px">
  <template #masthead>
    <pf-page-header>Custom page header</pf-page-header>
  </template>
  <template #sidebar>
    <pf-page-sidebar id="custom-header-vertical-sidebar">
      <pf-page-sidebar-body>Navigation</pf-page-sidebar-body>
    </pf-page-sidebar>
  </template>
  <pf-page-section aria-labelledby="custom-header-section">
    <h2 id="custom-header-section">Page content</h2>
  </pf-page-section>
</pf-page>`},{intro:t(()=>[...s[77]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[u(`To use a page header instead of passing a `),i(`a`,{href:`#/stories/components/masthead`},`masthead`),u(` directly, pass a `),i(`code`,null,`<pf-page-header>`),u(` to the `),i(`code`,null,`masthead`),u(` slot. `),i(`code`,null,`<pf-page-header>`),u(` should only be used to wrap custom header content.`)])],-1)]]),default:t(()=>[c(F,{style:{height:`300px`}},{masthead:t(()=>[c(W,null,{default:t(()=>[...s[78]||=[u(`Custom page header`,-1)]]),_:1})]),sidebar:t(()=>[c(N,{id:`custom-header-vertical-sidebar`},{default:t(()=>[c(M,null,{default:t(()=>[...s[79]||=[u(`Navigation`,-1)]]),_:1})]),_:1})]),default:t(()=>[c(P,{"aria-labelledby":`custom-header-section`},{default:t(()=>[...s[80]||=[i(`h2`,{id:`custom-header-section`},`Page content`,-1)]]),_:1})]),_:1})]),_:1}),c(I,{title:`Footer`,source:`<pf-page style="height: 300px">
  <template #masthead>
    <masthead id="custom-footer-body-nav-toggle" :sidebar-open="open.footer" :toggle="() => toggle('footer')" ></masthead>
  </template>
  <template #sidebar>
    <pf-page-sidebar id="custom-footer-vertical-sidebar" :sidebar-open="open.footer">
      <pf-page-sidebar-body>Navigation</pf-page-sidebar-body>
    </pf-page-sidebar>
  </template>
  <pf-page-section aria-labelledby="custom-footer-section">
    <h2 id="custom-footer-section">Page content</h2>
  </pf-page-section>
  <template #footer>
    <pf-page-footer>Page footer</pf-page-footer>
  </template>
</pf-page>`},{intro:t(()=>[...s[81]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[i(`code`,null,`<pf-page-footer>`),u(` can be passed to the `),i(`code`,null,`footer`),u(` slot, and should be used to wrap custom footer content.`)])],-1)]]),default:t(()=>[c(F,{style:{height:`300px`}},{masthead:t(()=>[c(o(y),{id:`custom-footer-body-nav-toggle`,"sidebar-open":b.footer,toggle:()=>x(`footer`)},null,8,[`sidebar-open`,`toggle`])]),sidebar:t(()=>[c(N,{id:`custom-footer-vertical-sidebar`,"sidebar-open":b.footer},{default:t(()=>[c(M,null,{default:t(()=>[...s[82]||=[u(`Navigation`,-1)]]),_:1})]),_:1},8,[`sidebar-open`])]),footer:t(()=>[c(_e,null,{default:t(()=>[...s[84]||=[u(`Page footer`,-1)]]),_:1})]),default:t(()=>[c(P,{"aria-labelledby":`custom-footer-section`},{default:t(()=>[...s[83]||=[i(`h2`,{id:`custom-footer-section`},`Page content`,-1)]]),_:1})]),_:1})]),_:1}),c(I,{title:`Plain`,source:`<pf-page plain style="height: 200px">
  <template #masthead>
    <pf-page-header>Custom header</pf-page-header>
  </template>
  <pf-page-section aria-labelledby="plain-page-section">
    <h2 id="plain-page-section">Page content</h2>
  </pf-page-section>
</pf-page>`},{intro:t(()=>[...s[85]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[u(`When a page should not have the default content area background or overflow scrolling, pass the `),i(`code`,null,`plain`),u(` property to `),i(`code`,null,`<pf-page>`),u(`.`)])],-1)]]),default:t(()=>[c(F,{plain:``,style:{height:`200px`}},{masthead:t(()=>[c(W,null,{default:t(()=>[...s[86]||=[u(`Custom header`,-1)]]),_:1})]),default:t(()=>[c(P,{"aria-labelledby":`plain-page-section`},{default:t(()=>[...s[87]||=[i(`h2`,{id:`plain-page-section`},`Page content`,-1)]]),_:1})]),_:1})]),_:1}),c(I,{title:`With notification drawer`,source:`<pf-page managed-sidebar :drawer-expanded="expanded" style="height: 500px">
  <template #masthead>
    <pf-masthead>
      <pf-masthead-main>
        <pf-masthead-toggle>
          <pf-page-toggle-button hamburger />
        </pf-masthead-toggle>

        <pf-masthead-brand>
          <pf-masthead-logo :to="{ name: 'introduction' }">Logo</pf-masthead-logo>
        </pf-masthead-brand>
      </pf-masthead-main>

      <pf-masthead-content>
        <pf-toolbar full-height>
          <pf-toolbar-content>
            <pf-toolbar-group align="end">
              <pf-toolbar-item visibility="visible">
                <pf-notification-badge
                  variant="read"
                  aria-label="Notifications"
                  :expanded="expanded"
                  @click="expanded = !expanded" />
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
        <pf-dropdown close-on-select position="right">
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
                <pf-notification-drawer-list-item-header
                  variant="info"
                  title="Unread info notification title"
                  sr-title="Info notification:"
                >
                  <pf-dropdown close-on-select position="right">
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
                  <pf-dropdown close-on-select position="right">
                    <template #toggle>
                      <pf-menu-toggle variant="plain" />
                    </template>

                    <pf-dropdown-item>Action</pf-dropdown-item>
                  </pf-dropdown>
                </pf-notification-drawer-list-item-header>
                <pf-notification-drawer-list-item-body timestamp="10 minutes ago">
                  This is a danger notification description. This is a long description to show how the title will
                  wrap if it is long and wraps to multiple lines.
                </pf-notification-drawer-list-item-body>
              </pf-notification-drawer-list-item>

              <pf-notification-drawer-list-item variant="warning" read>
                <pf-notification-drawer-list-item-header
                  variant="warning"
                  title="Read warning notification title"
                  sr-title="Warning notification:"
                >
                  <pf-dropdown close-on-select position="right">
                    <template #toggle>
                      <pf-menu-toggle variant="plain" />
                    </template>

                    <pf-dropdown-item>Action</pf-dropdown-item>
                  </pf-dropdown>
                </pf-notification-drawer-list-item-header>
                <pf-notification-drawer-list-item-body timestamp="10 minutes ago">
                  This is a danger notification description. This is a long description to show how the title will
                  wrap if it is long and wraps to multiple lines.
                </pf-notification-drawer-list-item-body>
              </pf-notification-drawer-list-item>

              <pf-notification-drawer-list-item variant="success" read>
                <pf-notification-drawer-list-item-header
                  variant="success"
                  title="Read success notification title"
                  sr-title="Success notification:"
                >
                  <pf-dropdown close-on-select position="right">
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

          <pf-notification-drawer-group title="Second notification group" count="2">
            <pf-notification-drawer-list aria-label="Notifications in the second group">
              <pf-notification-drawer-list-item variant="info">
                <pf-notification-drawer-list-item-header
                  variant="info"
                  title="Unread info notification title"
                  sr-title="Info notification:"
                >
                  <pf-dropdown close-on-select position="right">
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
                  <pf-dropdown close-on-select position="right">
                    <template #toggle>
                      <pf-menu-toggle variant="plain" />
                    </template>

                    <pf-dropdown-item>Action</pf-dropdown-item>
                  </pf-dropdown>
                </pf-notification-drawer-list-item-header>
                <pf-notification-drawer-list-item-body timestamp="10 minutes ago">
                  This is a danger notification description. This is a long description to show how the title will
                  wrap if it is long and wraps to multiple lines.
                </pf-notification-drawer-list-item-body>
              </pf-notification-drawer-list-item>

              <pf-notification-drawer-list-item variant="warning" read>
                <pf-notification-drawer-list-item-header
                  variant="warning"
                  title="Read warning notification title"
                  sr-title="Warning notification:"
                >
                  <pf-dropdown close-on-select position="right">
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
                  <pf-dropdown close-on-select position="right">
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
              <pf-empty-state title="No alerts found" heading-level="h2">
                <template #icon>
                  <magnifying-glass-icon />
                </template>
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

  <pf-page-section> Main section </pf-page-section>
</pf-page>`},{default:t(()=>[c(F,{"managed-sidebar":``,"drawer-expanded":S.value,style:{height:`500px`}},{masthead:t(()=>[c(A,null,{default:t(()=>[c(g,null,{default:t(()=>[c(p,null,{default:t(()=>[c(f,{hamburger:``})]),_:1}),c(h,null,{default:t(()=>[c(m,{to:{name:`introduction`}},{default:t(()=>[...s[88]||=[u(`Logo`,-1)]]),_:1})]),_:1})]),_:1}),c(k,null,{default:t(()=>[c(D,{"full-height":``},{default:t(()=>[c(E,null,{default:t(()=>[c(ye,{align:`end`},{default:t(()=>[c(v,{visibility:`visible`},{default:t(()=>[c(ve,{variant:`read`,"aria-label":`Notifications`,expanded:S.value,onClick:s[1]||=e=>S.value=!S.value},null,8,[`expanded`])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),sidebar:t(()=>[c(N,null,{default:t(()=>[c(z,null,{default:t(()=>[c(be,{title:`Overview`},{default:t(()=>[c(L,null,{default:t(()=>[...s[89]||=[u(`Home`,-1)]]),_:1})]),_:1}),c(be,{title:`Components`},{default:t(()=>[c(L,null,{default:t(()=>[...s[90]||=[u(`Accordion`,-1)]]),_:1}),c(L,null,{default:t(()=>[...s[91]||=[u(`Alert`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),drawer:t(()=>[c(Oe,null,{default:t(()=>[c(xe,{count:`4`},{default:t(()=>[c(q,{"close-on-select":``,position:`right`},{toggle:t(()=>[c(G,{variant:`plain`})]),default:t(()=>[c(K,null,{default:t(()=>[...s[92]||=[u(`Action`,-1)]]),_:1})]),_:1})]),_:1}),c(De,null,{default:t(()=>[c(Ee,null,{default:t(()=>[c(Q,{title:`First notification group`,count:`2`},{default:t(()=>[c(Z,{"aria-label":`Notifications in the basic example`},{default:t(()=>[c(X,{variant:`info`},{default:t(()=>[c(J,{variant:`info`,title:`Unread info notification title`,"sr-title":`Info notification:`},{default:t(()=>[c(q,{"close-on-select":``,position:`right`},{toggle:t(()=>[c(G,{variant:`plain`})]),default:t(()=>[c(K,null,{default:t(()=>[...s[93]||=[u(`Action`,-1)]]),_:1})]),_:1})]),_:1}),c(Y,{timestamp:`5 minutes ago`},{default:t(()=>[...s[94]||=[u(` This is an info notification description. `,-1)]]),_:1})]),_:1}),c(X,{variant:`danger`},{default:t(()=>[c(J,{variant:`danger`,title:`Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.`,"sr-title":`Danger notification:`},{default:t(()=>[c(q,{"close-on-select":``,position:`right`},{toggle:t(()=>[c(G,{variant:`plain`})]),default:t(()=>[c(K,null,{default:t(()=>[...s[95]||=[u(`Action`,-1)]]),_:1})]),_:1})]),_:1}),c(Y,{timestamp:`10 minutes ago`},{default:t(()=>[...s[96]||=[u(` This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines. `,-1)]]),_:1})]),_:1}),c(X,{variant:`warning`,read:``},{default:t(()=>[c(J,{variant:`warning`,title:`Read warning notification title`,"sr-title":`Warning notification:`},{default:t(()=>[c(q,{"close-on-select":``,position:`right`},{toggle:t(()=>[c(G,{variant:`plain`})]),default:t(()=>[c(K,null,{default:t(()=>[...s[97]||=[u(`Action`,-1)]]),_:1})]),_:1})]),_:1}),c(Y,{timestamp:`10 minutes ago`},{default:t(()=>[...s[98]||=[u(` This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines. `,-1)]]),_:1})]),_:1}),c(X,{variant:`success`,read:``},{default:t(()=>[c(J,{variant:`success`,title:`Read success notification title`,"sr-title":`Success notification:`},{default:t(()=>[c(q,{"close-on-select":``,position:`right`},{toggle:t(()=>[c(G,{variant:`plain`})]),default:t(()=>[c(K,null,{default:t(()=>[...s[99]||=[u(`Action`,-1)]]),_:1})]),_:1})]),_:1}),c(Y,{timestamp:`30 minutes ago`},{default:t(()=>[...s[100]||=[u(` This is a success notification description. `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),c(Q,{title:`Second notification group`,count:`2`},{default:t(()=>[c(Z,{"aria-label":`Notifications in the second group`},{default:t(()=>[c(X,{variant:`info`},{default:t(()=>[c(J,{variant:`info`,title:`Unread info notification title`,"sr-title":`Info notification:`},{default:t(()=>[c(q,{"close-on-select":``,position:`right`},{toggle:t(()=>[c(G,{variant:`plain`})]),default:t(()=>[c(K,null,{default:t(()=>[...s[101]||=[u(`Action`,-1)]]),_:1})]),_:1})]),_:1}),c(Y,{timestamp:`5 minutes ago`},{default:t(()=>[...s[102]||=[u(` This is an info notification description. `,-1)]]),_:1})]),_:1}),c(X,{variant:`danger`},{default:t(()=>[c(J,{variant:`danger`,title:`Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.`,"sr-title":`Danger notification:`},{default:t(()=>[c(q,{"close-on-select":``,position:`right`},{toggle:t(()=>[c(G,{variant:`plain`})]),default:t(()=>[c(K,null,{default:t(()=>[...s[103]||=[u(`Action`,-1)]]),_:1})]),_:1})]),_:1}),c(Y,{timestamp:`10 minutes ago`},{default:t(()=>[...s[104]||=[u(` This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines. `,-1)]]),_:1})]),_:1}),c(X,{variant:`warning`,read:``},{default:t(()=>[c(J,{variant:`warning`,title:`Read warning notification title`,"sr-title":`Warning notification:`},{default:t(()=>[c(q,{"close-on-select":``,position:`right`},{toggle:t(()=>[c(G,{variant:`plain`})]),default:t(()=>[c(K,null,{default:t(()=>[...s[105]||=[u(`Action`,-1)]]),_:1})]),_:1})]),_:1}),c(Y,{timestamp:`20 minutes ago`},{default:t(()=>[...s[106]||=[u(` This is a warning notification description. `,-1)]]),_:1})]),_:1}),c(X,{variant:`success`,read:``},{default:t(()=>[c(J,{variant:`success`,title:`Read success notification title`,"sr-title":`Success notification:`},{default:t(()=>[c(q,{"close-on-select":``,position:`right`},{toggle:t(()=>[c(G,{variant:`plain`})]),default:t(()=>[c(K,null,{default:t(()=>[...s[107]||=[u(`Action`,-1)]]),_:1})]),_:1})]),_:1}),c(Y,{timestamp:`30 minutes ago`},{default:t(()=>[...s[108]||=[u(` This is a success notification description. `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),c(Q,{title:`Third notification group. This is a long title to show how the title will be truncated if it is long and will be shown in a single line.`,count:`0`,"truncate-title":1,read:``},{default:t(()=>[c(Z,{"aria-label":`Notifications in the third group`},{default:t(()=>[c(Te,{title:`No alerts found`,"heading-level":`h2`},{icon:t(()=>[c(o(re))]),default:t(()=>[c(Se,null,{default:t(()=>[...s[109]||=[u(` There are currently no critical alerts firing. There may be firing alerts of other severities or silenced critical alerts however. `,-1)]]),_:1}),c(we,null,{default:t(()=>[c(Ce,null,{default:t(()=>[c($,{variant:`link`},{default:t(()=>[...s[110]||=[u(`Action`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),default:t(()=>[c(P,null,{default:t(()=>[...s[111]||=[u(` Main section `,-1)]]),_:1})]),_:1},8,[`drawer-expanded`])]),_:1}),c(I,{title:`Docked navigation`,source:`<div ref="dockedPage">
  <pf-page
    variant="docked"
    :dock-expanded="dockExpanded"
    :dock-overlay="dockOverlay"
    style="height: 500px; transform: translateZ(0)"
  >
    <template #masthead>
      <pf-masthead>
        <pf-masthead-main>
          <pf-masthead-toggle>
            <pf-button
              variant="plain"
              hamburger
              :expanded="dockExpanded"
              aria-label="Global navigation"
              @click="toggleDock" />
          </pf-masthead-toggle>
          <pf-masthead-brand>
            <pf-masthead-logo href="#">Logo</pf-masthead-logo>
          </pf-masthead-brand>
        </pf-masthead-main>
      </pf-masthead>
    </template>

    <template #dock-content>
      <pf-masthead variant="docked">
        <pf-masthead-main>
          <pf-masthead-toggle>
            <pf-button
              variant="plain"
              hamburger
              :expanded="dockExpanded"
              aria-label="Global navigation"
              @click="toggleDock" />
          </pf-masthead-toggle>
        </pf-masthead-main>
        <pf-divider />
        <pf-masthead-content>
          <pf-toolbar vertical>
            <pf-toolbar-content>
              <pf-toolbar-item>
                <pf-nav
                  variant="docked"
                  :expanded="dockExpanded"
                  aria-label="Docked global"
                  @select="onDockSelect"
                >
                  <pf-nav-list>
                    <pf-nav-item active>
                      <template #icon><cubes-icon /></template>
                      System panel
                    </pf-nav-item>
                    <pf-nav-expandable
                      title="Folder"
                      expandable-icon
                      :expanded="folderExpanded"
                      @update:expanded="toggleFolder"
                    >
                      <template #icon><folder-icon /></template>
                      <pf-nav-item>
                        <template #icon><file-icon /></template>
                        Subnav link 1
                      </pf-nav-item>
                    </pf-nav-expandable>
                    <pf-nav-item>
                      <template #icon><cloud-icon /></template>
                      Authentication
                    </pf-nav-item>
                    <pf-nav-item>
                      <template #icon><code-icon /></template>
                      Network services
                    </pf-nav-item>
                  </pf-nav-list>
                </pf-nav>
              </pf-toolbar-item>
              <pf-toolbar-group variant="action-group-plain" align="end" gap="none" gap-md="md">
                <pf-toolbar-item>
                  <pf-menu-toggle variant="plain" docked aria-label="Applications">
                    <template #icon><table-cells-large-icon /></template>
                    Applications
                  </pf-menu-toggle>
                </pf-toolbar-item>
                <pf-toolbar-item>
                  <pf-button variant="plain" docked settings aria-label="Settings">Settings</pf-button>
                </pf-toolbar-item>
              </pf-toolbar-group>
            </pf-toolbar-content>
          </pf-toolbar>
        </pf-masthead-content>
      </pf-masthead>
    </template>

    <pf-page-section>Main section</pf-page-section>
  </pf-page>
</div>`},{intro:t(()=>[...s[112]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[u(`With the `),i(`code`,null,`docked`),u(` variant, the content of the `),i(`code`,null,`dock-content`),u(` slot is rendered in a vertical dock, while the `),i(`code`,null,`masthead`),u(` slot is only rendered at mobile viewports. The docked components (`),i(`code`,null,`pf-nav`),u(`, `),i(`code`,null,`pf-button`),u(` and `),i(`code`,null,`pf-menu-toggle`),u(`) only display their text when the dock is expanded.`)]),i(`p`,null,[u(`Set `),i(`code`,null,`dock-expanded`),u(` to expand the dock inline, pushing the page content aside.`)]),i(`p`,null,[u(`With `),i(`code`,null,`dock-overlay`),u(` the expanded dock is instead positioned on top of the page content, like it always is at mobile viewports; while not expanded, an overlay dock is hidden. In this example the overlay is used when a nav group is opened from the collapsed dock: try expanding "Folder" while the dock is collapsed. Selecting an item, pressing Escape or clicking outside the dock closes the overlay.`)]),i(`p`,null,[u(`The dock is fixed to the viewport, so the page in this example uses `),i(`code`,null,`transform`),u(` to keep it inside the example frame.`)])],-1)]]),default:t(()=>[i(`div`,{ref_key:`dockedPage`,ref:de},[c(F,{variant:`docked`,"dock-expanded":C.value,"dock-overlay":w.value,style:{height:`500px`,transform:`translateZ(0)`}},{masthead:t(()=>[c(A,null,{default:t(()=>[c(g,null,{default:t(()=>[c(p,null,{default:t(()=>[c($,{variant:`plain`,hamburger:``,expanded:C.value,"aria-label":`Global navigation`,onClick:O},null,8,[`expanded`])]),_:1}),c(h,null,{default:t(()=>[c(m,{href:`#`},{default:t(()=>[...s[113]||=[u(`Logo`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),"dock-content":t(()=>[c(A,{variant:`docked`},{default:t(()=>[c(g,null,{default:t(()=>[c(p,null,{default:t(()=>[c($,{variant:`plain`,hamburger:``,expanded:C.value,"aria-label":`Global navigation`,onClick:O},null,8,[`expanded`])]),_:1})]),_:1}),c(ke),c(k,null,{default:t(()=>[c(D,{vertical:``},{default:t(()=>[c(E,null,{default:t(()=>[c(v,null,{default:t(()=>[c(z,{variant:`docked`,expanded:C.value,"aria-label":`Docked global`,onSelect:pe},{default:t(()=>[c(R,null,{default:t(()=>[c(L,{active:``},{icon:t(()=>[c(o(ie))]),default:t(()=>[s[114]||=u(` System panel `,-1)]),_:1}),c(Ae,{title:`Folder`,"expandable-icon":``,expanded:T.value,"onUpdate:expanded":fe},{icon:t(()=>[c(o(ce))]),default:t(()=>[c(L,null,{icon:t(()=>[c(o(ae))]),default:t(()=>[s[115]||=u(` Subnav link 1 `,-1)]),_:1})]),_:1},8,[`expanded`]),c(L,null,{icon:t(()=>[c(o(oe))]),default:t(()=>[s[116]||=u(` Authentication `,-1)]),_:1}),c(L,null,{icon:t(()=>[c(o(se))]),default:t(()=>[s[117]||=u(` Network services `,-1)]),_:1})]),_:1})]),_:1},8,[`expanded`])]),_:1}),c(ye,{variant:`action-group-plain`,align:`end`,gap:`none`,"gap-md":`md`},{default:t(()=>[c(v,null,{default:t(()=>[c(G,{variant:`plain`,docked:``,"aria-label":`Applications`},{icon:t(()=>[c(o(le))]),default:t(()=>[s[118]||=u(` Applications `,-1)]),_:1})]),_:1}),c(v,null,{default:t(()=>[c($,{variant:`plain`,docked:``,settings:``,"aria-label":`Settings`},{default:t(()=>[...s[119]||=[u(`Settings`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),default:t(()=>[c(P,null,{default:t(()=>[...s[120]||=[u(`Main section`,-1)]]),_:1})]),_:1},8,[`dock-expanded`,`dock-overlay`])],512)]),_:1})]),_:1})],64)}}});export{y as default};