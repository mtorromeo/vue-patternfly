import{g as te,r as ie,a as o,c as ae,o as ne,w as t,d as n,b as e,e as a,u as l,B as W}from"./index-Bro5Nqn3.js";import{B as oe}from"./bell-icon-CEUYIZ4_.js";import{E as f}from"./ellipsis-vertical-icon-BAkpiwLF.js";import{M as le}from"./magnifying-glass-icon-C11r21T4.js";const ue=te({__name:"Page.story",setup(re){const v=ie(!1);return(se,i)=>{const g=o("component-info"),y=o("pf-page-toggle-button"),q=o("pf-masthead-toggle"),S=o("pf-masthead-brand"),P=o("router-link"),k=o("pf-masthead-main"),x=o("pf-toolbar-item"),T=o("pf-toolbar-content"),A=o("pf-toolbar"),B=o("pf-masthead-content"),N=o("pf-masthead"),r=o("pf-nav-item"),h=o("pf-nav-group"),I=o("pf-nav"),O=o("pf-page-sidebar"),_=o("pf-breadcrumb-item"),C=o("pf-breadcrumb"),R=o("pf-page-breadcrumb"),w=o("pf-page-section"),F=o("pf-page"),V=o("story-canvas"),D=o("pf-card-body"),E=o("pf-card"),H=o("pf-notification-badge"),U=o("pf-toolbar-group"),s=o("pf-menu-toggle"),d=o("pf-dropdown-item"),p=o("pf-dropdown"),G=o("pf-notification-drawer-header"),m=o("pf-notification-drawer-list-item-header"),u=o("pf-notification-drawer-list-item-body"),c=o("pf-notification-drawer-list-item"),L=o("pf-notification-drawer-list"),M=o("pf-notification-drawer-group"),X=o("pf-empty-state-header"),z=o("pf-empty-state-body"),$=o("pf-button"),j=o("pf-empty-state-actions"),J=o("pf-empty-state-footer"),K=o("pf-empty-state"),Q=o("pf-notification-drawer-group-list"),Y=o("pf-notification-drawer-body"),Z=o("pf-notification-drawer"),ee=o("doc-page");return ne(),ae(ee,{name:"Components/Page.story.vue",title:"Page"},{description:t(()=>[...i[1]||(i[1]=[a("The ",-1),n("b",null,"page",-1),a(" component is used to define the basic layout of a page with either vertical or horizontal navigation.",-1)])]),apidocs:t(()=>[e(g,{src:"packages/core/src/components/Page/Page.vue",doc:{name:"PfPage",exportName:"default",displayName:"Page",description:"",tags:{},expose:[{name:"navToggle"}],props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"role",description:"Sets the value for role on the <main> element",required:!1,type:{name:"string"}},{name:"mainContainerId",description:'an id to use for the [role="main"] element',required:!1,type:{name:"string"}},{name:"mainTabIndex",description:'tabIndex to use for the [role="main"] element, null to unset it',required:!1,type:{name:"number"}},{name:"managedSidebar",description:`If true, manages the sidebar open/close state and there is no need to pass the isSidebarOpen boolean into
the sidebar component or add a callback onNavToggle function into the PageHeader component`,required:!1,type:{name:"boolean"}},{name:"tertiaryNavWidthLimited",description:"Flag indicating if tertiary nav width should be limited",required:!1,type:{name:"boolean"}},{name:"notificationDrawerExpanded",description:"Flag indicating Notification drawer in expanded",required:!1,type:{name:"boolean"}},{name:"defaultManagedSidebarOpen",description:"If true, the managed sidebar is initially open for desktop view",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"mainAriaLabel",description:"Accessible label, can be used to name main section",required:!1,type:{name:"string"}},{name:"drawerExpanded",description:"Flag indicating Notification drawer in expanded",required:!1,type:{name:"boolean"}},{name:"mainComponent",description:"HTML component used as main component of the page. Defaults to 'main', only pass in 'div' if another 'main' element already exists.",required:!1,type:{name:"union",elements:[{name:'"main"'},{name:'"div"'}]},defaultValue:{func:!1,value:"'main'"}},{name:"contentFilled",description:"Enables children to fill the available vertical space. Child page sections or groups that should fill should be passed the isFilled property.",required:!1,type:{name:"boolean"}}],events:[{name:"pageResize",type:{names:["{ mobileView: boolean, windowSize: number }"]}}],slots:[{name:"default"},{name:"skeleton"},{name:"drawer"}],sourceFiles:["../../packages/core/src/components/Page/Page.vue"]}}),e(g,{src:"packages/core/src/components/Page/PageBreadcrumb.vue",doc:{name:"PfPageBreadcrumb",exportName:"default",displayName:"PageBreadcrumb",description:"",tags:{},props:[{name:"sticky2xl",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyXl",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyLg",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyMd",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickySm",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"sticky",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"widthLimited",description:"Limits the width of the breadcrumb",required:!1,type:{name:"boolean"}},{name:"maxWidth",description:"Limits the width of the section and sets the --pf-v6-c-page--section--m-limit-width--MaxWidth variable to this value",required:!1,type:{name:"string"}},{name:"shadowTop",description:"Flag indicating if PageBreadcrumb should have a shadow at the top",required:!1,type:{name:"boolean"}},{name:"shadowBottom",description:"Flag indicating if PageBreadcrumb should have a shadow at the bottom",required:!1,type:{name:"boolean"}},{name:"overflowScroll",description:"Flag indicating if the PageBreadcrumb has a scrolling overflow",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Page/PageBreadcrumb.vue"]}}),e(g,{src:"packages/core/src/components/Page/PageGroup.vue",doc:{name:"PfPageGroup",exportName:"default",displayName:"PageGroup",description:"",tags:{},props:[{name:"sticky2xl",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyXl",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyLg",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyMd",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickySm",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"sticky",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"shadowTop",description:"Flag indicating if PageBreadcrumb should have a shadow at the top",required:!1,type:{name:"boolean"}},{name:"shadowBottom",description:"Flag indicating if PageBreadcrumb should have a shadow at the bottom",required:!1,type:{name:"boolean"}},{name:"overflowScroll",description:"Flag indicating if the PageBreadcrumb has a scrolling overflow",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Page/PageGroup.vue"]}}),e(g,{src:"packages/core/src/components/Page/PageSection.vue",doc:{name:"PfPageSection",exportName:"default",displayName:"PageSection",description:"",tags:{},props:[{name:"sticky2xl",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyXl",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyLg",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyMd",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickySm",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"sticky",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"padding2xl",required:!1,type:{name:"union",elements:[{name:'"padding"'},{name:'"no-padding"'}]}},{name:"paddingXl",required:!1,type:{name:"union",elements:[{name:'"padding"'},{name:'"no-padding"'}]}},{name:"paddingLg",required:!1,type:{name:"union",elements:[{name:'"padding"'},{name:'"no-padding"'}]}},{name:"paddingMd",required:!1,type:{name:"union",elements:[{name:'"padding"'},{name:'"no-padding"'}]}},{name:"paddingSm",required:!1,type:{name:"union",elements:[{name:'"padding"'},{name:'"no-padding"'}]}},{name:"padding",required:!1,type:{name:"union",elements:[{name:'"padding"'},{name:'"no-padding"'}]}},{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"variant",description:"Section background color variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"secondary"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"type",description:"Section type variant",required:!1,type:{name:"TSTypeOperator"},defaultValue:{func:!1,value:"'default'"}},{name:"filled",description:"Enables the page section to fill the available vertical space",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"widthLimited",description:"Limits the width of the section",required:!1,type:{name:"boolean"}},{name:"maxWidth",description:"Limits the width of the section and sets the --pf-v6-c-page--section--m-limit-width--MaxWidth variable to this value",required:!1,type:{name:"string"}},{name:"centerAligned",description:"Flag indicating if the section content is center aligned. Either widthLimited or maxWidth must be set for this to work",required:!1,type:{name:"boolean"}},{name:"shadowTop",description:"Modifier indicating if PageSection should have a shadow at the top",required:!1,type:{name:"boolean"}},{name:"shadowBottom",description:"Modifier indicating if PageSection should have a shadow at the bottom",required:!1,type:{name:"boolean"}},{name:"overflowScroll",description:"Flag indicating if the PageSection has a scrolling overflow",required:!1,type:{name:"boolean"}},{name:"component",description:"Sets the base component to render. Defaults to section",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Component"}]},defaultValue:{func:!1,value:"'section' as any"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Page/PageSection.vue"]}}),e(g,{src:"packages/core/src/components/Page/PageSidebar.vue",doc:{name:"PfPageSidebar",exportName:"default",displayName:"PageSidebar",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"id",description:"Sidebar id",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'page-sidebar'"}},{name:"sidebarOpen",description:"Programmatically manage if the side nav is shown, if managedSidebar is set to true in the PfPage component, this prop is managed",required:!1,type:{name:"boolean"}},{name:"theme",description:"Indicates the color scheme of the sidebar",required:!1,type:{name:"union",elements:[{name:'"light"'},{name:'"dark"'}]},defaultValue:{func:!1,value:"'dark'"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Page/PageSidebar.vue"]}}),e(g,{src:"packages/core/src/components/Page/PageSidebarBody.vue",doc:{name:"PfPageSidebarBody",exportName:"default",displayName:"PageSidebarBody",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"insets",description:"Flag indicating that the page sidebar body should use page insets.",required:!1,type:{name:"boolean"}},{name:"filled",description:"Flag indicating that the page sidebar body should fill the available vertical space.",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Page/PageSidebarBody.vue"]}}),e(g,{src:"packages/core/src/components/Page/PageToggleButton.vue",doc:{name:"PfPageToggleButton",exportName:"default",displayName:"PageToggleButton",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"id",description:"Sidebar id",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'nav-toggle'"}},{name:"sidebarOpen",description:"Programmatically manage if the side nav is shown, if managedSidebar is set to true in the PfPage component, this prop is managed",required:!1,type:{name:"boolean"}}],events:[{name:"update:sidebarOpen",type:{names:["boolean"]}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Page/PageToggleButton.vue"]}})]),default:t(()=>[i[46]||(i[46]=n("div",{class:"markdown pf-v6-c-content"},[n("h2",{class:"pf-v6-c-title"},"Differences from patternfly-react"),n("ul",null,[n("li",null,[n("code",null,"pf-page-breadcrumb"),a(" and "),n("code",null,"pf-page-section"),a(" can be limited in width by setting their "),n("code",null,"max-width"),a(" prop.")])]),n("h2",{class:"pf-v6-c-title"},"Examples"),n("h3",{class:"pf-v6-c-title"},"Basic page components"),n("p",null,"A page will typically contain the following components:"),n("ul",null,[n("li",null,[a("A "),n("code",null,"<pf-page>"),a(" with a "),n("code",null,"header"),a(" that often contains a "),n("a",{href:"#/stories/components/masthead"},"masthead"),n("ul",null,[n("li",null,[a("Mastheads contain the "),n("code",null,"<pf-page-toggle-button>"),a(", a "),n("code",null,"<pf-masthead-main>"),a(" that contains a "),n("code",null,"<pf-masthead-brand>"),a(", and the page's header toolbar within "),n("code",null,"<pf-masthead-content>"),a(".")])])]),n("li",null,[a("1 or more "),n("code",null,"<pf-page-sidebar-body>"),a(" components inside "),n("code",null,"<pf-page-sidebar>"),a(" for vertical navigation or other sidebar content")]),n("li",null,[a("1 or more "),n("code",null,"<pf-page-section>"),a(" components")])])],-1)),e(V,{title:"Vertical Navigation",source:`<pf-page managed-sidebar style="height:500px">
  <template #skeleton>
    <pf-masthead>
      <pf-masthead-main>
        <pf-masthead-toggle>
          <pf-page-toggle-button>
            <bars-icon />
          </pf-page-toggle-button>
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
</pf-page>`},{intro:t(()=>[...i[2]||(i[2]=[n("div",{class:"markdown pf-v6-c-content"},[n("p",null,[a("To add a vertical sidebar to a "),n("code",null,"<pf-page>"),a(", pass a "),n("code",null,"<pf-page-sidebar>"),a(" component into the "),n("code",null,"sidebar"),a(" property. To render navigation in the sidebar, pass a "),n("code",null,"<pf-page-sidebar-body>"),a(" component to "),n("code",null,"<pf-page-sidebar>"),a(".")]),n("p",null,[a("The "),n("code",null,"sidebar-open"),a(" property helps facilitate the opening and closing of the sidebar and should be 'true' when the sidebar is visible.")])],-1)])]),default:t(()=>[e(F,{"managed-sidebar":"",style:{height:"500px"}},{skeleton:t(()=>[e(N,null,{default:t(()=>[e(k,null,{default:t(()=>[e(q,null,{default:t(()=>[e(y,null,{default:t(()=>[e(l(W))]),_:1})]),_:1}),e(P,{to:{name:"introduction"},custom:""},{default:t(({href:b})=>[e(S,{href:b},{default:t(()=>[...i[3]||(i[3]=[a(" Logo ",-1)])]),_:1},8,["href"])]),_:1})]),_:1}),e(B,null,{default:t(()=>[e(A,{"full-height":""},{default:t(()=>[e(T,null,{default:t(()=>[e(x,null,{default:t(()=>[...i[4]||(i[4]=[a("header-tools",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(O,null,{default:t(()=>[e(I,null,{default:t(()=>[e(h,{title:"Overview"},{default:t(()=>[e(r,null,{default:t(()=>[...i[5]||(i[5]=[a("Home",-1)])]),_:1})]),_:1}),e(h,{title:"Components"},{default:t(()=>[e(r,null,{default:t(()=>[...i[6]||(i[6]=[a("Accordion",-1)])]),_:1}),e(r,null,{default:t(()=>[...i[7]||(i[7]=[a("Alert",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),default:t(()=>[e(R,{sticky:"top","shadow-bottom":""},{default:t(()=>[e(C,null,{default:t(()=>[e(_,{href:"#"},{default:t(()=>[...i[8]||(i[8]=[a("Section home",-1)])]),_:1}),e(_,{href:"#"},{default:t(()=>[...i[9]||(i[9]=[a("Section title",-1)])]),_:1}),e(_,{href:"#"},{default:t(()=>[...i[10]||(i[10]=[a("Section title",-1)])]),_:1}),e(_,{href:"#",active:""},{default:t(()=>[...i[11]||(i[11]=[a("Section landing",-1)])]),_:1})]),_:1})]),_:1}),e(w,null,{default:t(()=>[...i[12]||(i[12]=[a("Section 1",-1)])]),_:1}),e(w,{variant:"secondary"},{default:t(()=>[...i[13]||(i[13]=[a("Section 2 with secondary styling",-1)])]),_:1}),e(w,null,{default:t(()=>[...i[14]||(i[14]=[a("Section 3",-1)])]),_:1})]),_:1})]),_:1}),e(V,{title:"Centered",style:{height:"500px"},source:`<pf-page managed-sidebar style="height:500px">
  <template #skeleton>
    <pf-masthead>
      <pf-masthead-main>
        <pf-masthead-toggle>
          <pf-page-toggle-button>
            <bars-icon />
          </pf-page-toggle-button>
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
</pf-page>`},{intro:t(()=>[...i[15]||(i[15]=[n("div",{class:"markdown pf-v6-c-content"},[n("p",null,[a("By default, a page section spans the width of the page. To reduce the width of a section, use the "),n("code",null,"width-limited"),a(" property. To center align width-limited page sections, use the "),n("code",null,"center-aligned"),a(" property. When the main content area of a page is wider than the value of a centered, width-limited page section's "),n("code",null,"--pf-v6-c-page--section--m-limit-width--MaxWidth"),a(" custom property, the section will automatically be centered.")]),n("p",null,"The content in this example is placed in a card to better illustrate how the section behaves when it is centered, but a card is not required to center a page section.")],-1)])]),default:t(()=>[e(F,{"managed-sidebar":"",style:{height:"500px"}},{skeleton:t(()=>[e(N,null,{default:t(()=>[e(k,null,{default:t(()=>[e(q,null,{default:t(()=>[e(y,null,{default:t(()=>[e(l(W))]),_:1})]),_:1}),e(P,{to:{name:"introduction"},custom:""},{default:t(({href:b})=>[e(S,{href:b},{default:t(()=>[...i[16]||(i[16]=[a(" Logo ",-1)])]),_:1},8,["href"])]),_:1})]),_:1}),e(B,null,{default:t(()=>[e(A,{"full-height":""},{default:t(()=>[e(T,null,{default:t(()=>[e(x,null,{default:t(()=>[...i[17]||(i[17]=[a("header-tools",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(O,null,{default:t(()=>[e(I,null,{default:t(()=>[e(h,{title:"Overview"},{default:t(()=>[e(r,null,{default:t(()=>[...i[18]||(i[18]=[a("Home",-1)])]),_:1})]),_:1}),e(h,{title:"Components"},{default:t(()=>[e(r,null,{default:t(()=>[...i[19]||(i[19]=[a("Accordion",-1)])]),_:1}),e(r,null,{default:t(()=>[...i[20]||(i[20]=[a("Alert",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),default:t(()=>[e(w,{"max-width":"20rem","center-aligned":"","sticky-sm":"bottom"},{default:t(()=>[e(E,null,{default:t(()=>[e(D,null,{default:t(()=>[...i[21]||(i[21]=[a(" When a width limited page section is wider than the value of ",-1),n("code",null,"--pf-v6-c-page--section--m-limit-width--MaxWidth",-1),a(", the section will be centered in the main section. ",-1),n("br",null,null,-1),n("br",null,null,-1),a(" The content in this example is placed in a card to better illustrate how the section behaves when it is centered. A card is not required to center a page section. ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(V,{title:"With notification drawer",source:`<pf-page managed-sidebar :drawer-expanded="expanded" style="height:500px">
  <template #skeleton>
    <pf-masthead>
      <pf-masthead-main>
        <pf-masthead-toggle>
          <pf-page-toggle-button>
            <bars-icon />
          </pf-page-toggle-button>
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
            <pf-menu-toggle variant="plain">
              <ellipsis-vertical-icon />
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
                        <ellipsis-vertical-icon />
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
                        <ellipsis-vertical-icon />
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
                        <ellipsis-vertical-icon />
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
                        <ellipsis-vertical-icon />
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
                        <ellipsis-vertical-icon />
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
                        <ellipsis-vertical-icon />
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
                        <ellipsis-vertical-icon />
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
                        <ellipsis-vertical-icon />
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
</pf-page>`},{default:t(()=>[e(F,{"managed-sidebar":"","drawer-expanded":v.value,style:{height:"500px"}},{skeleton:t(()=>[e(N,null,{default:t(()=>[e(k,null,{default:t(()=>[e(q,null,{default:t(()=>[e(y,null,{default:t(()=>[e(l(W))]),_:1})]),_:1}),e(P,{to:{name:"introduction"},custom:""},{default:t(({href:b})=>[e(S,{href:b},{default:t(()=>[...i[22]||(i[22]=[a(" Logo ",-1)])]),_:1},8,["href"])]),_:1})]),_:1}),e(B,null,{default:t(()=>[e(A,{"full-height":""},{default:t(()=>[e(T,null,{default:t(()=>[e(U,{align:"end"},{default:t(()=>[e(x,{visibility:"visible"},{default:t(()=>[e(H,{variant:"read",expanded:v.value,onClick:i[0]||(i[0]=b=>v.value=!v.value)},{default:t(()=>[e(l(oe))]),_:1},8,["expanded"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(O,null,{default:t(()=>[e(I,null,{default:t(()=>[e(h,{title:"Overview"},{default:t(()=>[e(r,null,{default:t(()=>[...i[23]||(i[23]=[a("Home",-1)])]),_:1})]),_:1}),e(h,{title:"Components"},{default:t(()=>[e(r,null,{default:t(()=>[...i[24]||(i[24]=[a("Accordion",-1)])]),_:1}),e(r,null,{default:t(()=>[...i[25]||(i[25]=[a("Alert",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),drawer:t(()=>[e(Z,null,{default:t(()=>[e(G,{count:"4"},{default:t(()=>[e(p,{position:"right"},{toggle:t(()=>[e(s,{variant:"plain"},{default:t(()=>[e(l(f))]),_:1})]),default:t(()=>[e(d,null,{default:t(()=>[...i[26]||(i[26]=[a("Action",-1)])]),_:1})]),_:1})]),_:1}),e(Y,null,{default:t(()=>[e(Q,null,{default:t(()=>[e(M,{title:"First notification group",count:"2"},{default:t(()=>[e(L,{"aria-label":"Notifications in the basic example"},{default:t(()=>[e(c,{variant:"info"},{default:t(()=>[e(m,{variant:"info",title:"Unread info notification title","sr-title":"Info notification:"},{default:t(()=>[e(p,{position:"right"},{toggle:t(()=>[e(s,{variant:"plain"},{default:t(()=>[e(l(f))]),_:1})]),default:t(()=>[e(d,null,{default:t(()=>[...i[27]||(i[27]=[a("Action",-1)])]),_:1})]),_:1})]),_:1}),e(u,{timestamp:"5 minutes ago"},{default:t(()=>[...i[28]||(i[28]=[a(" This is an info notification description. ",-1)])]),_:1})]),_:1}),e(c,{variant:"danger"},{default:t(()=>[e(m,{variant:"danger",title:"Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.","sr-title":"Danger notification:"},{default:t(()=>[e(p,{position:"right"},{toggle:t(()=>[e(s,{variant:"plain"},{default:t(()=>[e(l(f))]),_:1})]),default:t(()=>[e(d,null,{default:t(()=>[...i[29]||(i[29]=[a("Action",-1)])]),_:1})]),_:1})]),_:1}),e(u,{timestamp:"10 minutes ago"},{default:t(()=>[...i[30]||(i[30]=[a(" This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines. ",-1)])]),_:1})]),_:1}),e(c,{variant:"warning",read:""},{default:t(()=>[e(m,{variant:"warning",title:"Read warning notification title","sr-title":"Warning notification:"},{default:t(()=>[e(p,{position:"right"},{toggle:t(()=>[e(s,{variant:"plain"},{default:t(()=>[e(l(f))]),_:1})]),default:t(()=>[e(d,null,{default:t(()=>[...i[31]||(i[31]=[a("Action",-1)])]),_:1})]),_:1})]),_:1}),e(u,{timestamp:"10 minutes ago"},{default:t(()=>[...i[32]||(i[32]=[a(" This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines. ",-1)])]),_:1})]),_:1}),e(c,{variant:"success",read:""},{default:t(()=>[e(m,{variant:"success",title:"Read success notification title","sr-title":"Success notification:"},{default:t(()=>[e(p,{position:"right"},{toggle:t(()=>[e(s,{variant:"plain"},{default:t(()=>[e(l(f))]),_:1})]),default:t(()=>[e(d,null,{default:t(()=>[...i[33]||(i[33]=[a("Action",-1)])]),_:1})]),_:1})]),_:1}),e(u,{timestamp:"30 minutes ago"},{default:t(()=>[...i[34]||(i[34]=[a(" This is a success notification description. ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),e(M,{title:"Second notification group",count:"2"},{default:t(()=>[e(L,{"aria-label":"Notifications in the second group"},{default:t(()=>[e(c,{variant:"info"},{default:t(()=>[e(m,{variant:"info",title:"Unread info notification title","sr-title":"Info notification:"},{default:t(()=>[e(p,{position:"right"},{toggle:t(()=>[e(s,{variant:"plain"},{default:t(()=>[e(l(f))]),_:1})]),default:t(()=>[e(d,null,{default:t(()=>[...i[35]||(i[35]=[a("Action",-1)])]),_:1})]),_:1})]),_:1}),e(u,{timestamp:"5 minutes ago"},{default:t(()=>[...i[36]||(i[36]=[a(" This is an info notification description. ",-1)])]),_:1})]),_:1}),e(c,{variant:"danger"},{default:t(()=>[e(m,{variant:"danger",title:"Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.","sr-title":"Danger notification:"},{default:t(()=>[e(p,{position:"right"},{toggle:t(()=>[e(s,{variant:"plain"},{default:t(()=>[e(l(f))]),_:1})]),default:t(()=>[e(d,null,{default:t(()=>[...i[37]||(i[37]=[a("Action",-1)])]),_:1})]),_:1})]),_:1}),e(u,{timestamp:"10 minutes ago"},{default:t(()=>[...i[38]||(i[38]=[a(" This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines. ",-1)])]),_:1})]),_:1}),e(c,{variant:"warning",read:""},{default:t(()=>[e(m,{variant:"warning",title:"Read warning notification title","sr-title":"Warning notification:"},{default:t(()=>[e(p,{position:"right"},{toggle:t(()=>[e(s,{variant:"plain"},{default:t(()=>[e(l(f))]),_:1})]),default:t(()=>[e(d,null,{default:t(()=>[...i[39]||(i[39]=[a("Action",-1)])]),_:1})]),_:1})]),_:1}),e(u,{timestamp:"20 minutes ago"},{default:t(()=>[...i[40]||(i[40]=[a(" This is a warning notification description. ",-1)])]),_:1})]),_:1}),e(c,{variant:"success",read:""},{default:t(()=>[e(m,{variant:"success",title:"Read success notification title","sr-title":"Success notification:"},{default:t(()=>[e(p,{position:"right"},{toggle:t(()=>[e(s,{variant:"plain"},{default:t(()=>[e(l(f))]),_:1})]),default:t(()=>[e(d,null,{default:t(()=>[...i[41]||(i[41]=[a("Action",-1)])]),_:1})]),_:1})]),_:1}),e(u,{timestamp:"30 minutes ago"},{default:t(()=>[...i[42]||(i[42]=[a(" This is a success notification description. ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),e(M,{title:"Third notification group. This is a long title to show how the title will be truncated if it is long and will be shown in a single line.",count:"0","truncate-title":1,read:""},{default:t(()=>[e(L,{"aria-label":"Notifications in the third group"},{default:t(()=>[e(K,{variant:"full"},{default:t(()=>[e(X,{"heading-level":"h2",title:"No alerts found"},{icon:t(()=>[e(l(le))]),_:1}),e(z,null,{default:t(()=>[...i[43]||(i[43]=[a(" There are currently no critical alerts firing. There may be firing alerts of other severities or silenced critical alerts however. ",-1)])]),_:1}),e(J,null,{default:t(()=>[e(j,null,{default:t(()=>[e($,{variant:"link"},{default:t(()=>[...i[44]||(i[44]=[a("Action",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),default:t(()=>[e(w,null,{default:t(()=>[...i[45]||(i[45]=[a(" Main section ",-1)])]),_:1})]),_:1},8,["drawer-expanded"])]),_:1})]),_:1})}}});export{ue as default};
