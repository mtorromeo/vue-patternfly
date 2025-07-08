import{g as te,r as ae,a as o,c as ie,o as ne,w as t,d as n,b as e,e as i,u as r,B as W}from"./index-QrbPWNYK.js";import{B as oe}from"./bell-icon-e-5WLhHr.js";import{E as f}from"./ellipsis-vertical-icon-BIeYaNTa.js";import{M as re}from"./magnifying-glass-icon-BNbDc_Ob.js";const ue=te({__name:"Page.story",setup(le){const _=ae(!1);return(de,a)=>{const m=o("component-info"),y=o("pf-page-toggle-button"),q=o("pf-masthead-toggle"),k=o("pf-masthead-brand"),P=o("router-link"),S=o("pf-masthead-main"),T=o("pf-toolbar-item"),x=o("pf-toolbar-content"),A=o("pf-toolbar"),N=o("pf-masthead-content"),B=o("pf-masthead"),l=o("pf-nav-item"),h=o("pf-nav-group"),I=o("pf-nav"),O=o("pf-page-sidebar"),v=o("pf-breadcrumb-item"),C=o("pf-breadcrumb"),D=o("pf-page-breadcrumb"),b=o("pf-page-section"),F=o("pf-page"),L=o("story-canvas"),H=o("pf-card-body"),R=o("pf-card"),U=o("pf-notification-badge"),E=o("pf-toolbar-group"),d=o("pf-menu-toggle"),s=o("pf-dropdown-item"),p=o("pf-dropdown"),G=o("pf-notification-drawer-header"),u=o("pf-notification-drawer-list-item-header"),c=o("pf-notification-drawer-list-item-body"),g=o("pf-notification-drawer-list-item"),V=o("pf-notification-drawer-list"),M=o("pf-notification-drawer-group"),X=o("pf-empty-state-header"),z=o("pf-empty-state-body"),$=o("pf-button"),j=o("pf-empty-state-actions"),J=o("pf-empty-state-footer"),K=o("pf-empty-state"),Q=o("pf-notification-drawer-group-list"),Y=o("pf-notification-drawer-body"),Z=o("pf-notification-drawer"),ee=o("doc-page");return ne(),ie(ee,{name:"Components/Page.story.vue",title:"Page"},{description:t(()=>a[1]||(a[1]=[i("The "),n("b",null,"page",-1),i(" component is used to define the basic layout of a page with either vertical or horizontal navigation.")])),apidocs:t(()=>[e(m,{src:"packages/core/src/components/Page/Page.vue",doc:{name:"PfPage",exportName:"default",displayName:"Page",description:"",tags:{},expose:[{name:"navToggle"}],props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"role",description:"Sets the value for role on the <main> element",required:!1,type:{name:"string"}},{name:"mainContainerId",description:'an id to use for the [role="main"] element',required:!1,type:{name:"string"}},{name:"mainTabIndex",description:'tabIndex to use for the [role="main"] element, null to unset it',required:!1,type:{name:"number"}},{name:"managedSidebar",description:`If true, manages the sidebar open/close state and there is no need to pass the isSidebarOpen boolean into
the sidebar component or add a callback onNavToggle function into the PageHeader component`,required:!1,type:{name:"boolean"}},{name:"tertiaryNavWidthLimited",description:"Flag indicating if tertiary nav width should be limited",required:!1,type:{name:"boolean"}},{name:"notificationDrawerExpanded",description:"Flag indicating Notification drawer in expanded",required:!1,type:{name:"boolean"}},{name:"defaultManagedSidebarOpen",description:"If true, the managed sidebar is initially open for desktop view",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"mainAriaLabel",description:"Accessible label, can be used to name main section",required:!1,type:{name:"string"}},{name:"drawerExpanded",description:"Flag indicating Notification drawer in expanded",required:!1,type:{name:"boolean"}},{name:"mainComponent",description:"HTML component used as main component of the page. Defaults to 'main', only pass in 'div' if another 'main' element already exists.",required:!1,type:{name:"union",elements:[{name:'"main"'},{name:'"div"'}]},defaultValue:{func:!1,value:"'main'"}}],events:[{name:"page-resize",type:{names:["{ mobileView: boolean, windowSize: number }"]}}],slots:[{name:"skeleton"},{name:"drawer"},{name:"default"}],sourceFiles:["../../packages/core/src/components/Page/Page.vue"]}}),e(m,{src:"packages/core/src/components/Page/PageBreadcrumb.vue",doc:{name:"PfPageBreadcrumb",exportName:"default",displayName:"PageBreadcrumb",description:"",tags:{},props:[{name:"sticky2xl",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyXl",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyLg",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyMd",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickySm",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"sticky",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"widthLimited",description:"Limits the width of the breadcrumb",required:!1,type:{name:"boolean"}},{name:"maxWidth",description:"Limits the width of the section and sets the --pf-v5-c-page--section--m-limit-width--MaxWidth variable to this value",required:!1,type:{name:"string"}},{name:"shadowTop",description:"Flag indicating if PageBreadcrumb should have a shadow at the top",required:!1,type:{name:"boolean"}},{name:"shadowBottom",description:"Flag indicating if PageBreadcrumb should have a shadow at the bottom",required:!1,type:{name:"boolean"}},{name:"overflowScroll",description:"Flag indicating if the PageBreadcrumb has a scrolling overflow",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Page/PageBreadcrumb.vue"]}}),e(m,{src:"packages/core/src/components/Page/PageGroup.vue",doc:{name:"PfPageGroup",exportName:"default",displayName:"PageGroup",description:"",tags:{},props:[{name:"sticky2xl",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyXl",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyLg",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyMd",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickySm",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"sticky",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"shadowTop",description:"Flag indicating if PageBreadcrumb should have a shadow at the top",required:!1,type:{name:"boolean"}},{name:"shadowBottom",description:"Flag indicating if PageBreadcrumb should have a shadow at the bottom",required:!1,type:{name:"boolean"}},{name:"overflowScroll",description:"Flag indicating if the PageBreadcrumb has a scrolling overflow",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Page/PageGroup.vue"]}}),e(m,{src:"packages/core/src/components/Page/PageNavigation.vue",doc:{name:"PfPageNavigation",exportName:"default",displayName:"PageNavigation",description:"",tags:{},props:[{name:"sticky2xl",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyXl",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyLg",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyMd",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickySm",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"sticky",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"widthLimited",description:"Limits the width of the breadcrumb",required:!1,type:{name:"boolean"}},{name:"maxWidth",description:"Limits the width of the section and sets the --pf-v5-c-page--section--m-limit-width--MaxWidth variable to this value",required:!1,type:{name:"string"}},{name:"shadowTop",description:"Flag indicating if PageBreadcrumb should have a shadow at the top",required:!1,type:{name:"boolean"}},{name:"shadowBottom",description:"Flag indicating if PageBreadcrumb should have a shadow at the bottom",required:!1,type:{name:"boolean"}},{name:"overflowScroll",description:"Flag indicating if the PageBreadcrumb has a scrolling overflow",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Page/PageNavigation.vue"]}}),e(m,{src:"packages/core/src/components/Page/PageSection.vue",doc:{name:"PfPageSection",exportName:"default",displayName:"PageSection",description:"",tags:{},props:[{name:"sticky2xl",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyXl",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyLg",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyMd",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickySm",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"sticky",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"padding2xl",required:!1,type:{name:"union",elements:[{name:'"padding"'},{name:'"no-padding"'}]}},{name:"paddingXl",required:!1,type:{name:"union",elements:[{name:'"padding"'},{name:'"no-padding"'}]}},{name:"paddingLg",required:!1,type:{name:"union",elements:[{name:'"padding"'},{name:'"no-padding"'}]}},{name:"paddingMd",required:!1,type:{name:"union",elements:[{name:'"padding"'},{name:'"no-padding"'}]}},{name:"paddingSm",required:!1,type:{name:"union",elements:[{name:'"padding"'},{name:'"no-padding"'}]}},{name:"padding",required:!1,type:{name:"union",elements:[{name:'"padding"'},{name:'"no-padding"'}]}},{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"variant",description:"Section background color variant",required:!1,type:{name:"TSTypeOperator"},defaultValue:{func:!1,value:"'default'"}},{name:"type",description:"Section type variant",required:!1,type:{name:"TSTypeOperator"},defaultValue:{func:!1,value:"'default'"}},{name:"filled",description:"Enables the page section to fill the available vertical space",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"widthLimited",description:"Limits the width of the section",required:!1,type:{name:"boolean"}},{name:"maxWidth",description:"Limits the width of the section and sets the --pf-v5-c-page--section--m-limit-width--MaxWidth variable to this value",required:!1,type:{name:"string"}},{name:"centerAligned",description:"Flag indicating if the section content is center aligned. Either widthLimited or maxWidth must be set for this to work",required:!1,type:{name:"boolean"}},{name:"shadowTop",description:"Modifier indicating if PageSection should have a shadow at the top",required:!1,type:{name:"boolean"}},{name:"shadowBottom",description:"Modifier indicating if PageSection should have a shadow at the bottom",required:!1,type:{name:"boolean"}},{name:"overflowScroll",description:"Flag indicating if the PageSection has a scrolling overflow",required:!1,type:{name:"boolean"}},{name:"component",description:"Sets the base component to render. Defaults to section",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Component"}]},defaultValue:{func:!1,value:"'section' as any"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Page/PageSection.vue"]}}),e(m,{src:"packages/core/src/components/Page/PageSidebar.vue",doc:{name:"PfPageSidebar",exportName:"default",displayName:"PageSidebar",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"id",description:"Sidebar id",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'page-sidebar'"}},{name:"sidebarOpen",description:"Programmatically manage if the side nav is shown, if managedSidebar is set to true in the PfPage component, this prop is managed",required:!1,type:{name:"boolean"}},{name:"theme",description:"Indicates the color scheme of the sidebar",required:!1,type:{name:"union",elements:[{name:'"light"'},{name:'"dark"'}]},defaultValue:{func:!1,value:"'dark'"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Page/PageSidebar.vue"]}}),e(m,{src:"packages/core/src/components/Page/PageSidebarBody.vue",doc:{name:"PfPageSidebarBody",exportName:"default",displayName:"PageSidebarBody",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"insets",description:"Flag indicating that the page sidebar body should use page insets.",required:!1,type:{name:"boolean"}},{name:"filled",description:"Flag indicating that the page sidebar body should fill the available vertical space.",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Page/PageSidebarBody.vue"]}}),e(m,{src:"packages/core/src/components/Page/PageToggleButton.vue",doc:{name:"PfPageToggleButton",exportName:"default",displayName:"PageToggleButton",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"id",description:"Sidebar id",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'nav-toggle'"}},{name:"sidebarOpen",description:"Programmatically manage if the side nav is shown, if managedSidebar is set to true in the PfPage component, this prop is managed",required:!1,type:{name:"boolean"}}],events:[{name:"update:sidebar-open",type:{names:["boolean"]}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Page/PageToggleButton.vue"]}})]),default:t(()=>[a[47]||(a[47]=n("div",{class:"markdown pf-v5-c-content"},[n("h2",{class:"pf-v5-c-title"},"Differences from patternfly-react"),n("ul",null,[n("li",null,[n("code",null,"pf-page-breadcrumb"),i(", "),n("code",null,"pf-page-navigation"),i(" and "),n("code",null,"pf-page-section"),i(" can be limited in width by setting their "),n("code",null,"max-width"),i(" prop.")])]),n("h2",{class:"pf-v5-c-title"},"Examples"),n("h3",{class:"pf-v5-c-title"},"Basic page components"),n("p",null,"A page will typically contain the following components:"),n("ul",null,[n("li",null,[i("A "),n("code",null,"<pf-page>"),i(" with a "),n("code",null,"header"),i(" that often contains a "),n("a",{href:"#/stories/components/masthead"},"masthead"),n("ul",null,[n("li",null,[i("Mastheads contain the "),n("code",null,"<pf-page-toggle-button>"),i(", a "),n("code",null,"<pf-masthead-main>"),i(" that contains a "),n("code",null,"<pf-masthead-brand>"),i(", and the page's header toolbar within "),n("code",null,"<pf-masthead-content>"),i(".")])])]),n("li",null,[i("1 or more "),n("code",null,"<pf-page-sidebar-body>"),i(" components inside "),n("code",null,"<pf-page-sidebar>"),i(" for vertical navigation or other sidebar content")]),n("li",null,[i("1 or more "),n("code",null,"<pf-page-section>"),i(" components")])])],-1)),e(L,{title:"Vertical Navigation",style:{height:"500px"},source:`<pf-page managed-sidebar>
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
</pf-page>`},{intro:t(()=>a[2]||(a[2]=[n("div",{class:"markdown pf-v5-c-content"},[n("p",null,[i("To add a vertical sidebar to a "),n("code",null,"<pf-page>"),i(", pass a "),n("code",null,"<pf-page-sidebar>"),i(" component into the "),n("code",null,"sidebar"),i(" property. To render navigation in the sidebar, pass a "),n("code",null,"<pf-page-sidebar-body>"),i(" component to "),n("code",null,"<pf-page-sidebar>"),i(".")]),n("p",null,[i("The "),n("code",null,"sidebar-open"),i(" property helps facilitate the opening and closing of the sidebar and should be 'true' when the sidebar is visible.")])],-1)])),default:t(()=>[e(F,{"managed-sidebar":""},{skeleton:t(()=>[e(B,null,{default:t(()=>[e(q,null,{default:t(()=>[e(y,null,{default:t(()=>[e(r(W))]),_:1})]),_:1}),e(S,null,{default:t(()=>[e(P,{to:{name:"introduction"},custom:""},{default:t(({href:w})=>[e(k,{href:w},{default:t(()=>a[3]||(a[3]=[i(" Logo ")])),_:2,__:[3]},1032,["href"])]),_:1})]),_:1}),e(N,null,{default:t(()=>[e(A,{"full-height":""},{default:t(()=>[e(x,null,{default:t(()=>[e(T,null,{default:t(()=>a[4]||(a[4]=[i("header-tools")])),_:1,__:[4]})]),_:1})]),_:1})]),_:1})]),_:1}),e(O,null,{default:t(()=>[e(I,null,{default:t(()=>[e(h,{title:"Overview"},{default:t(()=>[e(l,null,{default:t(()=>a[5]||(a[5]=[i("Home")])),_:1,__:[5]})]),_:1}),e(h,{title:"Components"},{default:t(()=>[e(l,null,{default:t(()=>a[6]||(a[6]=[i("Accordion")])),_:1,__:[6]}),e(l,null,{default:t(()=>a[7]||(a[7]=[i("Alert")])),_:1,__:[7]})]),_:1})]),_:1})]),_:1})]),default:t(()=>[e(D,{sticky:"top","shadow-bottom":""},{default:t(()=>[e(C,null,{default:t(()=>[e(v,{href:"#"},{default:t(()=>a[8]||(a[8]=[i("Section home")])),_:1,__:[8]}),e(v,{href:"#"},{default:t(()=>a[9]||(a[9]=[i("Section title")])),_:1,__:[9]}),e(v,{href:"#"},{default:t(()=>a[10]||(a[10]=[i("Section title")])),_:1,__:[10]}),e(v,{href:"#",active:""},{default:t(()=>a[11]||(a[11]=[i("Section landing")])),_:1,__:[11]})]),_:1})]),_:1}),e(b,{variant:"darker"},{default:t(()=>a[12]||(a[12]=[i("Section with darker background")])),_:1,__:[12]}),e(b,{variant:"dark"},{default:t(()=>a[13]||(a[13]=[i("Section with dark background")])),_:1,__:[13]}),e(b,{variant:"light"},{default:t(()=>a[14]||(a[14]=[i("Section with light background")])),_:1,__:[14]}),e(b,{"width-limited":""},{default:t(()=>a[15]||(a[15]=[i("Section with limited width")])),_:1,__:[15]})]),_:1})]),_:1}),e(L,{title:"Centered",style:{height:"500px"},source:`<pf-page managed-sidebar>
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
</pf-page>`},{intro:t(()=>a[16]||(a[16]=[n("div",{class:"markdown pf-v5-c-content"},[n("p",null,[i("By default, a page section spans the width of the page. To reduce the width of a section, use the "),n("code",null,"width-limited"),i(" property. To center align width-limited page sections, use the "),n("code",null,"center-aligned"),i(" property. When the main content area of a page is wider than the value of a centered, width-limited page section's "),n("code",null,"--pf-v5-c-page--section--m-limit-width--MaxWidth"),i(" custom property, the section will automatically be centered.")]),n("p",null,"The content in this example is placed in a card to better illustrate how the section behaves when it is centered, but a card is not required to center a page section.")],-1)])),default:t(()=>[e(F,{"managed-sidebar":""},{skeleton:t(()=>[e(B,null,{default:t(()=>[e(q,null,{default:t(()=>[e(y,null,{default:t(()=>[e(r(W))]),_:1})]),_:1}),e(S,null,{default:t(()=>[e(P,{to:{name:"introduction"},custom:""},{default:t(({href:w})=>[e(k,{href:w},{default:t(()=>a[17]||(a[17]=[i(" Logo ")])),_:2,__:[17]},1032,["href"])]),_:1})]),_:1}),e(N,null,{default:t(()=>[e(A,{"full-height":""},{default:t(()=>[e(x,null,{default:t(()=>[e(T,null,{default:t(()=>a[18]||(a[18]=[i("header-tools")])),_:1,__:[18]})]),_:1})]),_:1})]),_:1})]),_:1}),e(O,null,{default:t(()=>[e(I,null,{default:t(()=>[e(h,{title:"Overview"},{default:t(()=>[e(l,null,{default:t(()=>a[19]||(a[19]=[i("Home")])),_:1,__:[19]})]),_:1}),e(h,{title:"Components"},{default:t(()=>[e(l,null,{default:t(()=>a[20]||(a[20]=[i("Accordion")])),_:1,__:[20]}),e(l,null,{default:t(()=>a[21]||(a[21]=[i("Alert")])),_:1,__:[21]})]),_:1})]),_:1})]),_:1})]),default:t(()=>[e(b,{"max-width":"20rem","center-aligned":"","sticky-sm":"bottom"},{default:t(()=>[e(R,null,{default:t(()=>[e(H,null,{default:t(()=>a[22]||(a[22]=[i(" When a width limited page section is wider than the value of "),n("code",null,"--pf-v5-c-page--section--m-limit-width--MaxWidth",-1),i(", the section will be centered in the main section. "),n("br",null,null,-1),n("br",null,null,-1),i(" The content in this example is placed in a card to better illustrate how the section behaves when it is centered. A card is not required to center a page section. ")])),_:1,__:[22]})]),_:1})]),_:1})]),_:1})]),_:1}),e(L,{title:"With notification drawer",style:{height:"500px"},source:`<pf-page managed-sidebar :drawer-expanded="expanded">
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
</pf-page>`},{default:t(()=>[e(F,{"managed-sidebar":"","drawer-expanded":_.value},{skeleton:t(()=>[e(B,null,{default:t(()=>[e(q,null,{default:t(()=>[e(y,null,{default:t(()=>[e(r(W))]),_:1})]),_:1}),e(S,null,{default:t(()=>[e(P,{to:{name:"introduction"},custom:""},{default:t(({href:w})=>[e(k,{href:w},{default:t(()=>a[23]||(a[23]=[i(" Logo ")])),_:2,__:[23]},1032,["href"])]),_:1})]),_:1}),e(N,null,{default:t(()=>[e(A,{"full-height":""},{default:t(()=>[e(x,null,{default:t(()=>[e(E,{"space-items":"none",align:"right"},{default:t(()=>[e(T,{visibility:"visible"},{default:t(()=>[e(U,{variant:"unread",expanded:_.value,onClick:a[0]||(a[0]=w=>_.value=!_.value)},{default:t(()=>[e(r(oe))]),_:1},8,["expanded"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(O,null,{default:t(()=>[e(I,null,{default:t(()=>[e(h,{title:"Overview"},{default:t(()=>[e(l,null,{default:t(()=>a[24]||(a[24]=[i("Home")])),_:1,__:[24]})]),_:1}),e(h,{title:"Components"},{default:t(()=>[e(l,null,{default:t(()=>a[25]||(a[25]=[i("Accordion")])),_:1,__:[25]}),e(l,null,{default:t(()=>a[26]||(a[26]=[i("Alert")])),_:1,__:[26]})]),_:1})]),_:1})]),_:1})]),drawer:t(()=>[e(Z,null,{default:t(()=>[e(G,{count:"4"},{default:t(()=>[e(p,{position:"right"},{toggle:t(()=>[e(d,{variant:"plain"},{default:t(()=>[e(r(f),{"aria-hidden":"true"})]),_:1})]),default:t(()=>[e(s,null,{default:t(()=>a[27]||(a[27]=[i("Action")])),_:1,__:[27]})]),_:1})]),_:1}),e(Y,null,{default:t(()=>[e(Q,null,{default:t(()=>[e(M,{title:"First notification group",count:"2"},{default:t(()=>[e(V,{"aria-label":"Notifications in the basic example"},{default:t(()=>[e(g,{variant:"info"},{default:t(()=>[e(u,{variant:"info",title:"Unread info notification title","sr-title":"Info notification:"},{default:t(()=>[e(p,{position:"right"},{toggle:t(()=>[e(d,{variant:"plain"},{default:t(()=>[e(r(f),{"aria-hidden":"true"})]),_:1})]),default:t(()=>[e(s,null,{default:t(()=>a[28]||(a[28]=[i("Action")])),_:1,__:[28]})]),_:1})]),_:1}),e(c,{timestamp:"5 minutes ago"},{default:t(()=>a[29]||(a[29]=[i(" This is an info notification description. ")])),_:1,__:[29]})]),_:1}),e(g,{variant:"danger"},{default:t(()=>[e(u,{variant:"danger",title:"Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.","sr-title":"Danger notification:"},{default:t(()=>[e(p,{position:"right"},{toggle:t(()=>[e(d,{variant:"plain"},{default:t(()=>[e(r(f),{"aria-hidden":"true"})]),_:1})]),default:t(()=>[e(s,null,{default:t(()=>a[30]||(a[30]=[i("Action")])),_:1,__:[30]})]),_:1})]),_:1}),e(c,{timestamp:"10 minutes ago"},{default:t(()=>a[31]||(a[31]=[i(" This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines. ")])),_:1,__:[31]})]),_:1}),e(g,{variant:"warning",read:""},{default:t(()=>[e(u,{variant:"warning",title:"Read warning notification title","sr-title":"Warning notification:"},{default:t(()=>[e(p,{position:"right"},{toggle:t(()=>[e(d,{variant:"plain"},{default:t(()=>[e(r(f),{"aria-hidden":"true"})]),_:1})]),default:t(()=>[e(s,null,{default:t(()=>a[32]||(a[32]=[i("Action")])),_:1,__:[32]})]),_:1})]),_:1}),e(c,{timestamp:"10 minutes ago"},{default:t(()=>a[33]||(a[33]=[i(" This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines. ")])),_:1,__:[33]})]),_:1}),e(g,{variant:"success",read:""},{default:t(()=>[e(u,{variant:"success",title:"Read success notification title","sr-title":"Success notification:"},{default:t(()=>[e(p,{position:"right"},{toggle:t(()=>[e(d,{variant:"plain"},{default:t(()=>[e(r(f),{"aria-hidden":"true"})]),_:1})]),default:t(()=>[e(s,null,{default:t(()=>a[34]||(a[34]=[i("Action")])),_:1,__:[34]})]),_:1})]),_:1}),e(c,{timestamp:"30 minutes ago"},{default:t(()=>a[35]||(a[35]=[i(" This is a success notification description. ")])),_:1,__:[35]})]),_:1})]),_:1})]),_:1}),e(M,{title:"Second notification group",count:"2"},{default:t(()=>[e(V,{"aria-label":"Notifications in the second group"},{default:t(()=>[e(g,{variant:"info"},{default:t(()=>[e(u,{variant:"info",title:"Unread info notification title","sr-title":"Info notification:"},{default:t(()=>[e(p,{position:"right"},{toggle:t(()=>[e(d,{variant:"plain"},{default:t(()=>[e(r(f),{"aria-hidden":"true"})]),_:1})]),default:t(()=>[e(s,null,{default:t(()=>a[36]||(a[36]=[i("Action")])),_:1,__:[36]})]),_:1})]),_:1}),e(c,{timestamp:"5 minutes ago"},{default:t(()=>a[37]||(a[37]=[i(" This is an info notification description. ")])),_:1,__:[37]})]),_:1}),e(g,{variant:"danger"},{default:t(()=>[e(u,{variant:"danger",title:"Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.","sr-title":"Danger notification:"},{default:t(()=>[e(p,{position:"right"},{toggle:t(()=>[e(d,{variant:"plain"},{default:t(()=>[e(r(f),{"aria-hidden":"true"})]),_:1})]),default:t(()=>[e(s,null,{default:t(()=>a[38]||(a[38]=[i("Action")])),_:1,__:[38]})]),_:1})]),_:1}),e(c,{timestamp:"10 minutes ago"},{default:t(()=>a[39]||(a[39]=[i(" This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines. ")])),_:1,__:[39]})]),_:1}),e(g,{variant:"warning",read:""},{default:t(()=>[e(u,{variant:"warning",title:"Read warning notification title","sr-title":"Warning notification:"},{default:t(()=>[e(p,{position:"right"},{toggle:t(()=>[e(d,{variant:"plain"},{default:t(()=>[e(r(f),{"aria-hidden":"true"})]),_:1})]),default:t(()=>[e(s,null,{default:t(()=>a[40]||(a[40]=[i("Action")])),_:1,__:[40]})]),_:1})]),_:1}),e(c,{timestamp:"20 minutes ago"},{default:t(()=>a[41]||(a[41]=[i(" This is a warning notification description. ")])),_:1,__:[41]})]),_:1}),e(g,{variant:"success",read:""},{default:t(()=>[e(u,{variant:"success",title:"Read success notification title","sr-title":"Success notification:"},{default:t(()=>[e(p,{position:"right"},{toggle:t(()=>[e(d,{variant:"plain"},{default:t(()=>[e(r(f),{"aria-hidden":"true"})]),_:1})]),default:t(()=>[e(s,null,{default:t(()=>a[42]||(a[42]=[i("Action")])),_:1,__:[42]})]),_:1})]),_:1}),e(c,{timestamp:"30 minutes ago"},{default:t(()=>a[43]||(a[43]=[i(" This is a success notification description. ")])),_:1,__:[43]})]),_:1})]),_:1})]),_:1}),e(M,{title:"Third notification group. This is a long title to show how the title will be truncated if it is long and will be shown in a single line.",count:"0","truncate-title":1,read:""},{default:t(()=>[e(V,{"aria-label":"Notifications in the third group"},{default:t(()=>[e(K,{variant:"full"},{default:t(()=>[e(X,{"heading-level":"h2",title:"No alerts found"},{icon:t(()=>[e(r(re))]),_:1}),e(z,null,{default:t(()=>a[44]||(a[44]=[i(" There are currently no critical alerts firing. There may be firing alerts of other severities or silenced critical alerts however. ")])),_:1,__:[44]}),e(J,null,{default:t(()=>[e(j,null,{default:t(()=>[e($,{variant:"link"},{default:t(()=>a[45]||(a[45]=[i("Action")])),_:1,__:[45]})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),default:t(()=>[e(b,null,{default:t(()=>a[46]||(a[46]=[i(" Main section ")])),_:1,__:[46]})]),_:1},8,["drawer-expanded"])]),_:1})]),_:1,__:[47]})}}});export{ue as default};
