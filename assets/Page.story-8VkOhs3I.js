import{f as te,r as ae,o as ie,c as ne,w as t,a,b as e,u as o,B as M,d as i,e as n}from"./index-uqmLQRfI.js";import{B as oe}from"./bell-icon-I1CnNtyz.js";import{E as p}from"./ellipsis-vertical-icon-5ev5J4eP.js";import{M as re}from"./magnifying-glass-icon-pWCsuY9d.js";const le=i("b",null,"page",-1),de=i("div",{class:"markdown pf-v5-c-content"},[i("h2",{class:"pf-v5-c-title"},"Differences from patternfly-react"),i("ul",null,[i("li",null,[i("code",null,"pf-page-breadcrumb"),a(", "),i("code",null,"pf-page-navigation"),a(" and "),i("code",null,"pf-page-section"),a(" can be limited in width by setting their "),i("code",null,"max-width"),a(" prop.")])]),i("h2",{class:"pf-v5-c-title"},"Examples"),i("h3",{class:"pf-v5-c-title"},"Basic page components"),i("p",null,"A page will typically contain the following components:"),i("ul",null,[i("li",null,[a("A "),i("code",null,"<pf-page>"),a(" with a "),i("code",null,"header"),a(" that often contains a "),i("a",{href:"#/stories/components/masthead"},"masthead"),i("ul",null,[i("li",null,[a("Mastheads contain the "),i("code",null,"<pf-page-toggle-button>"),a(", a "),i("code",null,"<pf-masthead-main>"),a(" that contains a "),i("code",null,"<pf-masthead-brand>"),a(", and the page's header toolbar within "),i("code",null,"<pf-masthead-content>"),a(".")])])]),i("li",null,[a("1 or more "),i("code",null,"<pf-page-sidebar-body>"),a(" components inside "),i("code",null,"<pf-page-sidebar>"),a(" for vertical navigation or other sidebar content")]),i("li",null,[a("1 or more "),i("code",null,"<pf-page-section>"),a(" components")])])],-1),se=i("div",{class:"markdown pf-v5-c-content"},[i("p",null,[a("To add a vertical sidebar to a "),i("code",null,"<pf-page>"),a(", pass a "),i("code",null,"<pf-page-sidebar>"),a(" component into the "),i("code",null,"sidebar"),a(" property. To render navigation in the sidebar, pass a "),i("code",null,"<pf-page-sidebar-body>"),a(" component to "),i("code",null,"<pf-page-sidebar>"),a(".")]),i("p",null,[a("The "),i("code",null,"sidebar-open"),a(" property helps facilitate the opening and closing of the sidebar and should be 'true' when the sidebar is visible.")])],-1),pe=i("div",{class:"markdown pf-v5-c-content"},[i("p",null,[a("By default, a page section spans the width of the page. To reduce the width of a section, use the "),i("code",null,"width-limited"),a(" property. To center align width-limited page sections, use the "),i("code",null,"center-aligned"),a(" property. When the main content area of a page is wider than the value of a centered, width-limited page section's "),i("code",null,"--pf-v5-c-page--section--m-limit-width--MaxWidth"),a(" custom property, the section will automatically be centered.")]),i("p",null,"The content in this example is placed in a card to better illustrate how the section behaves when it is centered, but a card is not required to center a page section.")],-1),fe=i("code",null,"--pf-v5-c-page--section--m-limit-width--MaxWidth",-1),ce=i("br",null,null,-1),me=i("br",null,null,-1),ve=te({__name:"Page.story",setup(ue){const b=ae(!1);return(ge,W)=>{const f=n("component-info"),v=n("pf-page-toggle-button"),y=n("pf-masthead-toggle"),q=n("pf-masthead-brand"),k=n("router-link"),P=n("pf-masthead-main"),S=n("pf-toolbar-item"),T=n("pf-toolbar-content"),x=n("pf-toolbar"),A=n("pf-masthead-content"),N=n("pf-masthead"),r=n("pf-nav-item"),g=n("pf-nav-group"),B=n("pf-nav"),I=n("pf-page-sidebar"),w=n("pf-breadcrumb-item"),C=n("pf-breadcrumb"),X=n("pf-page-breadcrumb"),h=n("pf-page-section"),O=n("pf-page"),F=n("story-canvas"),D=n("pf-card-body"),H=n("pf-card"),R=n("pf-notification-badge"),U=n("pf-toolbar-group"),l=n("pf-menu-toggle"),d=n("pf-dropdown-item"),s=n("pf-dropdown"),E=n("pf-notification-drawer-header"),c=n("pf-notification-drawer-list-item-header"),m=n("pf-notification-drawer-list-item-body"),u=n("pf-notification-drawer-list-item"),L=n("pf-notification-drawer-list"),V=n("pf-notification-drawer-group"),G=n("pf-empty-state-header"),z=n("pf-empty-state-body"),$=n("pf-button"),j=n("pf-empty-state-actions"),J=n("pf-empty-state-footer"),K=n("pf-empty-state"),Q=n("pf-notification-drawer-group-list"),Y=n("pf-notification-drawer-body"),Z=n("pf-notification-drawer"),ee=n("doc-page");return ie(),ne(ee,{name:"Components/Page.story.vue",title:"Page"},{description:t(()=>[a("The "),le,a(" component is used to define the basic layout of a page with either vertical or horizontal navigation.")]),apidocs:t(()=>[e(f,{src:"packages/core/src/components/Page/Page.vue",doc:{name:"PfPage",exportName:"default",displayName:"Page",description:"",tags:{},expose:[{name:"navToggle"}],props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"role",description:"Sets the value for role on the <main> element",required:!1,type:{name:"string"}},{name:"mainContainerId",description:'an id to use for the [role="main"] element',required:!1,type:{name:"string"}},{name:"mainTabIndex",description:'tabIndex to use for the [role="main"] element, null to unset it',required:!1,type:{name:"number"}},{name:"managedSidebar",description:`If true, manages the sidebar open/close state and there is no need to pass the isSidebarOpen boolean into
the sidebar component or add a callback onNavToggle function into the PageHeader component`,required:!1,type:{name:"boolean"}},{name:"tertiaryNavWidthLimited",description:"Flag indicating if tertiary nav width should be limited",required:!1,type:{name:"boolean"}},{name:"notificationDrawerExpanded",description:"Flag indicating Notification drawer in expanded",required:!1,type:{name:"boolean"}},{name:"defaultManagedSidebarOpen",description:"If true, the managed sidebar is initially open for desktop view",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"mainAriaLabel",description:"Accessible label, can be used to name main section",required:!1,type:{name:"string"}},{name:"drawerExpanded",description:"Flag indicating Notification drawer in expanded",required:!1,type:{name:"boolean"}},{name:"mainComponent",description:"HTML component used as main component of the page. Defaults to 'main', only pass in 'div' if another 'main' element already exists.",required:!1,type:{name:"union",elements:[{name:'"main"'},{name:'"div"'}]},defaultValue:{func:!1,value:"'main'"}}],events:[{name:"page-resize",type:{names:["{ mobileView: boolean, windowSize: number }"]}}],slots:[{name:"skeleton"},{name:"drawer"},{name:"default"}],sourceFiles:["../../packages/core/src/components/Page/Page.vue"]}},null,8,["doc"]),e(f,{src:"packages/core/src/components/Page/PageBreadcrumb.vue",doc:{name:"PfPageBreadcrumb",exportName:"default",displayName:"PageBreadcrumb",description:"",tags:{},props:[{name:"stickyXl2",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyXl",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyLg",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyMd",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickySm",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"sticky",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"widthLimited",description:"Limits the width of the breadcrumb",required:!1,type:{name:"boolean"}},{name:"maxWidth",description:"Limits the width of the section and sets the --pf-v5-c-page--section--m-limit-width--MaxWidth variable to this value",required:!1,type:{name:"string"}},{name:"shadowTop",description:"Flag indicating if PageBreadcrumb should have a shadow at the top",required:!1,type:{name:"boolean"}},{name:"shadowBottom",description:"Flag indicating if PageBreadcrumb should have a shadow at the bottom",required:!1,type:{name:"boolean"}},{name:"overflowScroll",description:"Flag indicating if the PageBreadcrumb has a scrolling overflow",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Page/PageBreadcrumb.vue"]}},null,8,["doc"]),e(f,{src:"packages/core/src/components/Page/PageGroup.vue",doc:{name:"PfPageGroup",exportName:"default",displayName:"PageGroup",description:"",tags:{},props:[{name:"stickyXl2",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyXl",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyLg",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyMd",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickySm",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"sticky",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"shadowTop",description:"Flag indicating if PageBreadcrumb should have a shadow at the top",required:!1,type:{name:"boolean"}},{name:"shadowBottom",description:"Flag indicating if PageBreadcrumb should have a shadow at the bottom",required:!1,type:{name:"boolean"}},{name:"overflowScroll",description:"Flag indicating if the PageBreadcrumb has a scrolling overflow",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Page/PageGroup.vue"]}},null,8,["doc"]),e(f,{src:"packages/core/src/components/Page/PageNavigation.vue",doc:{name:"PfPageNavigation",exportName:"default",displayName:"PageNavigation",description:"",tags:{},props:[{name:"stickyXl2",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyXl",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyLg",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyMd",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickySm",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"sticky",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"widthLimited",description:"Limits the width of the breadcrumb",required:!1,type:{name:"boolean"}},{name:"maxWidth",description:"Limits the width of the section and sets the --pf-v5-c-page--section--m-limit-width--MaxWidth variable to this value",required:!1,type:{name:"string"}},{name:"shadowTop",description:"Flag indicating if PageBreadcrumb should have a shadow at the top",required:!1,type:{name:"boolean"}},{name:"shadowBottom",description:"Flag indicating if PageBreadcrumb should have a shadow at the bottom",required:!1,type:{name:"boolean"}},{name:"overflowScroll",description:"Flag indicating if the PageBreadcrumb has a scrolling overflow",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Page/PageNavigation.vue"]}},null,8,["doc"]),e(f,{src:"packages/core/src/components/Page/PageSection.vue",doc:{name:"PfPageSection",exportName:"default",displayName:"PageSection",description:"",tags:{},props:[{name:"stickyXl2",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyXl",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyLg",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyMd",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickySm",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"sticky",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"paddingXl2",required:!1,type:{name:"union",elements:[{name:'"padding"'},{name:'"no-padding"'}]}},{name:"paddingXl",required:!1,type:{name:"union",elements:[{name:'"padding"'},{name:'"no-padding"'}]}},{name:"paddingLg",required:!1,type:{name:"union",elements:[{name:'"padding"'},{name:'"no-padding"'}]}},{name:"paddingMd",required:!1,type:{name:"union",elements:[{name:'"padding"'},{name:'"no-padding"'}]}},{name:"paddingSm",required:!1,type:{name:"union",elements:[{name:'"padding"'},{name:'"no-padding"'}]}},{name:"padding",required:!1,type:{name:"union",elements:[{name:'"padding"'},{name:'"no-padding"'}]}},{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"variant",description:"Section background color variant",required:!1,type:{name:"TSTypeOperator"},defaultValue:{func:!1,value:"'default'"}},{name:"type",description:"Section type variant",required:!1,type:{name:"TSTypeOperator"},defaultValue:{func:!1,value:"'default'"}},{name:"filled",description:"Enables the page section to fill the available vertical space",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"widthLimited",description:"Limits the width of the section",required:!1,type:{name:"boolean"}},{name:"maxWidth",description:"Limits the width of the section and sets the --pf-v5-c-page--section--m-limit-width--MaxWidth variable to this value",required:!1,type:{name:"string"}},{name:"centerAligned",description:"Flag indicating if the section content is center aligned. Either widthLimited or maxWidth must be set for this to work",required:!1,type:{name:"boolean"}},{name:"shadowTop",description:"Modifier indicating if PageSection should have a shadow at the top",required:!1,type:{name:"boolean"}},{name:"shadowBottom",description:"Modifier indicating if PageSection should have a shadow at the bottom",required:!1,type:{name:"boolean"}},{name:"overflowScroll",description:"Flag indicating if the PageSection has a scrolling overflow",required:!1,type:{name:"boolean"}},{name:"component",description:"Sets the base component to render. Defaults to section",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Component"}]},defaultValue:{func:!1,value:"'section' as any"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Page/PageSection.vue"]}},null,8,["doc"]),e(f,{src:"packages/core/src/components/Page/PageSidebar.vue",doc:{name:"PfPageSidebar",exportName:"default",displayName:"PageSidebar",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"id",description:"Sidebar id",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'page-sidebar'"}},{name:"sidebarOpen",description:"Programmatically manage if the side nav is shown, if managedSidebar is set to true in the PfPage component, this prop is managed",required:!1,type:{name:"boolean"}},{name:"theme",description:"Indicates the color scheme of the sidebar",required:!1,type:{name:"union",elements:[{name:'"light"'},{name:'"dark"'}]},defaultValue:{func:!1,value:"'dark'"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Page/PageSidebar.vue"]}},null,8,["doc"]),e(f,{src:"packages/core/src/components/Page/PageSidebarBody.vue",doc:{name:"PfPageSidebarBody",exportName:"default",displayName:"PageSidebarBody",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"insets",description:"Flag indicating that the page sidebar body should use page insets.",required:!1,type:{name:"boolean"}},{name:"filled",description:"Flag indicating that the page sidebar body should fill the available vertical space.",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Page/PageSidebarBody.vue"]}},null,8,["doc"]),e(f,{src:"packages/core/src/components/Page/PageToggleButton.vue",doc:{name:"PfPageToggleButton",exportName:"default",displayName:"PageToggleButton",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"id",description:"Sidebar id",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'nav-toggle'"}},{name:"sidebarOpen",description:"Programmatically manage if the side nav is shown, if managedSidebar is set to true in the PfPage component, this prop is managed",required:!1,type:{name:"boolean"}}],events:[{name:"update:sidebar-open",type:{names:["boolean"]}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Page/PageToggleButton.vue"]}},null,8,["doc"])]),default:t(()=>[de,e(F,{title:"Vertical Navigation",style:{height:"500px"},source:`<pf-page managed-sidebar>
  <template #skeleton>
    <pf-masthead>
      <pf-masthead-toggle>
        <pf-page-toggle-button>
          <bars-icon />
        </pf-page-toggle-button>
      </pf-masthead-toggle>
      <pf-masthead-main>
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

  <pf-page-section variant="darker">Section with darker background</pf-page-section>
  <pf-page-section variant="dark">Section with dark background</pf-page-section>
  <pf-page-section variant="light">Section with light background</pf-page-section>
  <pf-page-section width-limited>Section with limited width</pf-page-section>
</pf-page>`},{intro:t(()=>[se]),default:t(()=>[e(O,{"managed-sidebar":""},{skeleton:t(()=>[e(N,null,{default:t(()=>[e(y,null,{default:t(()=>[e(v,null,{default:t(()=>[e(o(M))]),_:1})]),_:1}),e(P,null,{default:t(()=>[e(k,{to:{name:"introduction"},custom:""},{default:t(({href:_})=>[e(q,{href:_},{default:t(()=>[a(" Logo ")]),_:2},1032,["href"])]),_:1})]),_:1}),e(A,null,{default:t(()=>[e(x,{"full-height":""},{default:t(()=>[e(T,null,{default:t(()=>[e(S,null,{default:t(()=>[a("header-tools")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(I,null,{default:t(()=>[e(B,null,{default:t(()=>[e(g,{title:"Overview"},{default:t(()=>[e(r,null,{default:t(()=>[a("Home")]),_:1})]),_:1}),e(g,{title:"Components"},{default:t(()=>[e(r,null,{default:t(()=>[a("Accordion")]),_:1}),e(r,null,{default:t(()=>[a("Alert")]),_:1})]),_:1})]),_:1})]),_:1})]),default:t(()=>[e(X,{sticky:"top","shadow-bottom":""},{default:t(()=>[e(C,null,{default:t(()=>[e(w,{href:"#"},{default:t(()=>[a("Section home")]),_:1}),e(w,{href:"#"},{default:t(()=>[a("Section title")]),_:1}),e(w,{href:"#"},{default:t(()=>[a("Section title")]),_:1}),e(w,{href:"#",active:""},{default:t(()=>[a("Section landing")]),_:1})]),_:1})]),_:1}),e(h,{variant:"darker"},{default:t(()=>[a("Section with darker background")]),_:1}),e(h,{variant:"dark"},{default:t(()=>[a("Section with dark background")]),_:1}),e(h,{variant:"light"},{default:t(()=>[a("Section with light background")]),_:1}),e(h,{"width-limited":""},{default:t(()=>[a("Section with limited width")]),_:1})]),_:1})]),_:1}),e(F,{title:"Centered",style:{height:"500px"},source:`<pf-page managed-sidebar>
  <template #skeleton>
    <pf-masthead>
      <pf-masthead-toggle>
        <pf-page-toggle-button>
          <bars-icon />
        </pf-page-toggle-button>
      </pf-masthead-toggle>
      <pf-masthead-main>
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
        <code>--pf-v5-c-page--section--m-limit-width--MaxWidth</code>, the section will be centered in the main
        section.
        <br>
        <br>
        The content in this example is placed in a card to better illustrate how the section behaves when it is
        centered. A card is not required to center a page section.
      </pf-card-body>
    </pf-card>
  </pf-page-section>
</pf-page>`},{intro:t(()=>[pe]),default:t(()=>[e(O,{"managed-sidebar":""},{skeleton:t(()=>[e(N,null,{default:t(()=>[e(y,null,{default:t(()=>[e(v,null,{default:t(()=>[e(o(M))]),_:1})]),_:1}),e(P,null,{default:t(()=>[e(k,{to:{name:"introduction"},custom:""},{default:t(({href:_})=>[e(q,{href:_},{default:t(()=>[a(" Logo ")]),_:2},1032,["href"])]),_:1})]),_:1}),e(A,null,{default:t(()=>[e(x,{"full-height":""},{default:t(()=>[e(T,null,{default:t(()=>[e(S,null,{default:t(()=>[a("header-tools")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(I,null,{default:t(()=>[e(B,null,{default:t(()=>[e(g,{title:"Overview"},{default:t(()=>[e(r,null,{default:t(()=>[a("Home")]),_:1})]),_:1}),e(g,{title:"Components"},{default:t(()=>[e(r,null,{default:t(()=>[a("Accordion")]),_:1}),e(r,null,{default:t(()=>[a("Alert")]),_:1})]),_:1})]),_:1})]),_:1})]),default:t(()=>[e(h,{"max-width":"20rem","center-aligned":"","sticky-sm":"bottom"},{default:t(()=>[e(H,null,{default:t(()=>[e(D,null,{default:t(()=>[a(" When a width limited page section is wider than the value of "),fe,a(", the section will be centered in the main section. "),ce,me,a(" The content in this example is placed in a card to better illustrate how the section behaves when it is centered. A card is not required to center a page section. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(F,{title:"With notification drawer",style:{height:"500px"},source:`<pf-page managed-sidebar :drawer-expanded="expanded">
  <template #skeleton>
    <pf-masthead>
      <pf-masthead-toggle>
        <pf-page-toggle-button>
          <bars-icon />
        </pf-page-toggle-button>
      </pf-masthead-toggle>
      <pf-masthead-main>
        <router-link v-slot="{ href }" :to="{ name: 'introduction' }" custom>
          <pf-masthead-brand :href="href">
            Logo
          </pf-masthead-brand>
        </router-link>
      </pf-masthead-main>
      <pf-masthead-content>
        <pf-toolbar full-height>
          <pf-toolbar-content>
            <pf-toolbar-group space-items="none" align="right">
              <pf-toolbar-item visibility="visible">
                <pf-notification-badge variant="unread" :expanded="expanded" @click="expanded = !expanded">
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
            <pf-menu-toggle variant="plain">
              <ellipsis-vertical-icon aria-hidden="true" />
            </pf-menu-toggle>
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
                      <pf-menu-toggle variant="plain">
                        <ellipsis-vertical-icon aria-hidden="true" />
                      </pf-menu-toggle>
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
                      <pf-menu-toggle variant="plain">
                        <ellipsis-vertical-icon aria-hidden="true" />
                      </pf-menu-toggle>
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
                      <pf-menu-toggle variant="plain">
                        <ellipsis-vertical-icon aria-hidden="true" />
                      </pf-menu-toggle>
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
                      <pf-menu-toggle variant="plain">
                        <ellipsis-vertical-icon aria-hidden="true" />
                      </pf-menu-toggle>
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
                      <pf-menu-toggle variant="plain">
                        <ellipsis-vertical-icon aria-hidden="true" />
                      </pf-menu-toggle>
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
                      <pf-menu-toggle variant="plain">
                        <ellipsis-vertical-icon aria-hidden="true" />
                      </pf-menu-toggle>
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
                      <pf-menu-toggle variant="plain">
                        <ellipsis-vertical-icon aria-hidden="true" />
                      </pf-menu-toggle>
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
                      <pf-menu-toggle variant="plain">
                        <ellipsis-vertical-icon aria-hidden="true" />
                      </pf-menu-toggle>
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
</pf-page>`},{default:t(()=>[e(O,{"managed-sidebar":"","drawer-expanded":b.value},{skeleton:t(()=>[e(N,null,{default:t(()=>[e(y,null,{default:t(()=>[e(v,null,{default:t(()=>[e(o(M))]),_:1})]),_:1}),e(P,null,{default:t(()=>[e(k,{to:{name:"introduction"},custom:""},{default:t(({href:_})=>[e(q,{href:_},{default:t(()=>[a(" Logo ")]),_:2},1032,["href"])]),_:1})]),_:1}),e(A,null,{default:t(()=>[e(x,{"full-height":""},{default:t(()=>[e(T,null,{default:t(()=>[e(U,{"space-items":"none",align:"right"},{default:t(()=>[e(S,{visibility:"visible"},{default:t(()=>[e(R,{variant:"unread",expanded:b.value,onClick:W[0]||(W[0]=_=>b.value=!b.value)},{default:t(()=>[e(o(oe))]),_:1},8,["expanded"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(I,null,{default:t(()=>[e(B,null,{default:t(()=>[e(g,{title:"Overview"},{default:t(()=>[e(r,null,{default:t(()=>[a("Home")]),_:1})]),_:1}),e(g,{title:"Components"},{default:t(()=>[e(r,null,{default:t(()=>[a("Accordion")]),_:1}),e(r,null,{default:t(()=>[a("Alert")]),_:1})]),_:1})]),_:1})]),_:1})]),drawer:t(()=>[e(Z,null,{default:t(()=>[e(E,{count:"4"},{default:t(()=>[e(s,{position:"right"},{toggle:t(()=>[e(l,{variant:"plain"},{default:t(()=>[e(o(p),{"aria-hidden":"true"})]),_:1})]),default:t(()=>[e(d,null,{default:t(()=>[a("Action")]),_:1})]),_:1})]),_:1}),e(Y,null,{default:t(()=>[e(Q,null,{default:t(()=>[e(V,{title:"First notification group",count:"2"},{default:t(()=>[e(L,{"aria-label":"Notifications in the basic example"},{default:t(()=>[e(u,{variant:"info"},{default:t(()=>[e(c,{variant:"info",title:"Unread info notification title","sr-title":"Info notification:"},{default:t(()=>[e(s,{position:"right"},{toggle:t(()=>[e(l,{variant:"plain"},{default:t(()=>[e(o(p),{"aria-hidden":"true"})]),_:1})]),default:t(()=>[e(d,null,{default:t(()=>[a("Action")]),_:1})]),_:1})]),_:1}),e(m,{timestamp:"5 minutes ago"},{default:t(()=>[a(" This is an info notification description. ")]),_:1})]),_:1}),e(u,{variant:"danger"},{default:t(()=>[e(c,{variant:"danger",title:"Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.","sr-title":"Danger notification:"},{default:t(()=>[e(s,{position:"right"},{toggle:t(()=>[e(l,{variant:"plain"},{default:t(()=>[e(o(p),{"aria-hidden":"true"})]),_:1})]),default:t(()=>[e(d,null,{default:t(()=>[a("Action")]),_:1})]),_:1})]),_:1}),e(m,{timestamp:"10 minutes ago"},{default:t(()=>[a(" This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines. ")]),_:1})]),_:1}),e(u,{variant:"warning",read:""},{default:t(()=>[e(c,{variant:"warning",title:"Read warning notification title","sr-title":"Warning notification:"},{default:t(()=>[e(s,{position:"right"},{toggle:t(()=>[e(l,{variant:"plain"},{default:t(()=>[e(o(p),{"aria-hidden":"true"})]),_:1})]),default:t(()=>[e(d,null,{default:t(()=>[a("Action")]),_:1})]),_:1})]),_:1}),e(m,{timestamp:"10 minutes ago"},{default:t(()=>[a(" This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines. ")]),_:1})]),_:1}),e(u,{variant:"success",read:""},{default:t(()=>[e(c,{variant:"success",title:"Read success notification title","sr-title":"Success notification:"},{default:t(()=>[e(s,{position:"right"},{toggle:t(()=>[e(l,{variant:"plain"},{default:t(()=>[e(o(p),{"aria-hidden":"true"})]),_:1})]),default:t(()=>[e(d,null,{default:t(()=>[a("Action")]),_:1})]),_:1})]),_:1}),e(m,{timestamp:"30 minutes ago"},{default:t(()=>[a(" This is a success notification description. ")]),_:1})]),_:1})]),_:1})]),_:1}),e(V,{title:"Second notification group",count:"2"},{default:t(()=>[e(L,{"aria-label":"Notifications in the second group"},{default:t(()=>[e(u,{variant:"info"},{default:t(()=>[e(c,{variant:"info",title:"Unread info notification title","sr-title":"Info notification:"},{default:t(()=>[e(s,{position:"right"},{toggle:t(()=>[e(l,{variant:"plain"},{default:t(()=>[e(o(p),{"aria-hidden":"true"})]),_:1})]),default:t(()=>[e(d,null,{default:t(()=>[a("Action")]),_:1})]),_:1})]),_:1}),e(m,{timestamp:"5 minutes ago"},{default:t(()=>[a(" This is an info notification description. ")]),_:1})]),_:1}),e(u,{variant:"danger"},{default:t(()=>[e(c,{variant:"danger",title:"Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.","sr-title":"Danger notification:"},{default:t(()=>[e(s,{position:"right"},{toggle:t(()=>[e(l,{variant:"plain"},{default:t(()=>[e(o(p),{"aria-hidden":"true"})]),_:1})]),default:t(()=>[e(d,null,{default:t(()=>[a("Action")]),_:1})]),_:1})]),_:1}),e(m,{timestamp:"10 minutes ago"},{default:t(()=>[a(" This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines. ")]),_:1})]),_:1}),e(u,{variant:"warning",read:""},{default:t(()=>[e(c,{variant:"warning",title:"Read warning notification title","sr-title":"Warning notification:"},{default:t(()=>[e(s,{position:"right"},{toggle:t(()=>[e(l,{variant:"plain"},{default:t(()=>[e(o(p),{"aria-hidden":"true"})]),_:1})]),default:t(()=>[e(d,null,{default:t(()=>[a("Action")]),_:1})]),_:1})]),_:1}),e(m,{timestamp:"20 minutes ago"},{default:t(()=>[a(" This is a warning notification description. ")]),_:1})]),_:1}),e(u,{variant:"success",read:""},{default:t(()=>[e(c,{variant:"success",title:"Read success notification title","sr-title":"Success notification:"},{default:t(()=>[e(s,{position:"right"},{toggle:t(()=>[e(l,{variant:"plain"},{default:t(()=>[e(o(p),{"aria-hidden":"true"})]),_:1})]),default:t(()=>[e(d,null,{default:t(()=>[a("Action")]),_:1})]),_:1})]),_:1}),e(m,{timestamp:"30 minutes ago"},{default:t(()=>[a(" This is a success notification description. ")]),_:1})]),_:1})]),_:1})]),_:1}),e(V,{title:"Third notification group. This is a long title to show how the title will be truncated if it is long and will be shown in a single line.",count:"0","truncate-title":1,read:""},{default:t(()=>[e(L,{"aria-label":"Notifications in the third group"},{default:t(()=>[e(K,{variant:"full"},{default:t(()=>[e(G,{"heading-level":"h2",title:"No alerts found"},{icon:t(()=>[e(o(re))]),_:1}),e(z,null,{default:t(()=>[a(" There are currently no critical alerts firing. There may be firing alerts of other severities or silenced critical alerts however. ")]),_:1}),e(J,null,{default:t(()=>[e(j,null,{default:t(()=>[e($,{variant:"link"},{default:t(()=>[a("Action")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),default:t(()=>[e(h,null,{default:t(()=>[a(" Main section ")]),_:1})]),_:1},8,["drawer-expanded"])]),_:1})]),_:1},8,["name"])}}});export{ve as default};
