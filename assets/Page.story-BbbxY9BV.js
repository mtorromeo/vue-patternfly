import{B as Z}from"./bell-icon-TfBd8FD8.js";import{M as ee}from"./magnifying-glass-icon-Byy0RCby.js";import{g as te,r as ae,a as o,c as ie,o as ne,w as t,d as n,b as e,e as i,u as L}from"./index-Coy-oaSw.js";const pe=te({__name:"Page.story",setup(oe){const b=ae(!1);return(re,a)=>{const u=o("component-info"),v=o("pf-page-toggle-button"),y=o("pf-masthead-toggle"),_=o("pf-masthead-brand"),q=o("router-link"),S=o("pf-masthead-main"),P=o("pf-toolbar-item"),k=o("pf-toolbar-content"),x=o("pf-toolbar"),T=o("pf-masthead-content"),A=o("pf-masthead"),r=o("pf-nav-item"),c=o("pf-nav-group"),N=o("pf-nav"),B=o("pf-page-sidebar"),w=o("pf-breadcrumb-item"),M=o("pf-breadcrumb"),W=o("pf-page-breadcrumb"),h=o("pf-page-section"),I=o("pf-page"),O=o("story-canvas"),C=o("pf-card-body"),R=o("pf-card"),D=o("pf-notification-badge"),H=o("pf-toolbar-group"),l=o("pf-menu-toggle"),s=o("pf-dropdown-item"),d=o("pf-dropdown"),U=o("pf-notification-drawer-header"),p=o("pf-notification-drawer-list-item-header"),f=o("pf-notification-drawer-list-item-body"),m=o("pf-notification-drawer-list-item"),F=o("pf-notification-drawer-list"),V=o("pf-notification-drawer-group"),E=o("pf-empty-state-header"),G=o("pf-empty-state-body"),X=o("pf-button"),z=o("pf-empty-state-actions"),$=o("pf-empty-state-footer"),j=o("pf-empty-state"),J=o("pf-notification-drawer-group-list"),K=o("pf-notification-drawer-body"),Q=o("pf-notification-drawer"),Y=o("doc-page");return ne(),ie(Y,{name:"Components/Page.story.vue",title:"Page"},{description:t(()=>[...a[1]||(a[1]=[i("The ",-1),n("b",null,"page",-1),i(" component is used to define the basic layout of a page with either vertical or horizontal navigation.",-1)])]),apidocs:t(()=>[e(u,{src:"packages/core/src/components/Page/Page.vue",doc:{name:"PfPage",exportName:"default",displayName:"Page",description:"",tags:{},expose:[{name:"navToggle"}],props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"role",description:"Sets the value for role on the <main> element",required:!1,type:{name:"string"}},{name:"mainContainerId",description:'an id to use for the [role="main"] element',required:!1,type:{name:"string"}},{name:"mainTabIndex",description:'tabIndex to use for the [role="main"] element, null to unset it',required:!1,type:{name:"number"}},{name:"managedSidebar",description:`If true, manages the sidebar open/close state and there is no need to pass the isSidebarOpen boolean into
the sidebar component or add a callback onNavToggle function into the PageHeader component`,required:!1,type:{name:"boolean"}},{name:"tertiaryNavWidthLimited",description:"Flag indicating if tertiary nav width should be limited",required:!1,type:{name:"boolean"}},{name:"notificationDrawerExpanded",description:"Flag indicating Notification drawer in expanded",required:!1,type:{name:"boolean"}},{name:"defaultManagedSidebarOpen",description:"If true, the managed sidebar is initially open for desktop view",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"mainAriaLabel",description:"Accessible label, can be used to name main section",required:!1,type:{name:"string"}},{name:"drawerExpanded",description:"Flag indicating Notification drawer in expanded",required:!1,type:{name:"boolean"}},{name:"mainComponent",description:"HTML component used as main component of the page. Defaults to 'main', only pass in 'div' if another 'main' element already exists.",required:!1,type:{name:"union",elements:[{name:'"main"'},{name:'"div"'}]},defaultValue:{func:!1,value:"'main'"}},{name:"contentFilled",description:"Enables children to fill the available vertical space. Child page sections or groups that should fill should be passed the isFilled property.",required:!1,type:{name:"boolean"}}],events:[{name:"pageResize",type:{names:["{ mobileView: boolean, windowSize: number }"]}}],slots:[{name:"default"},{name:"skeleton"},{name:"drawer"}],sourceFiles:["../../packages/core/src/components/Page/Page.vue"]}}),e(u,{src:"packages/core/src/components/Page/PageBreadcrumb.vue",doc:{name:"PfPageBreadcrumb",exportName:"default",displayName:"PageBreadcrumb",description:"",tags:{},props:[{name:"sticky2xl",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyXl",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyLg",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyMd",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickySm",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"sticky",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"widthLimited",description:"Limits the width of the breadcrumb",required:!1,type:{name:"boolean"}},{name:"maxWidth",description:"Limits the width of the section and sets the --pf-v6-c-page--section--m-limit-width--MaxWidth variable to this value",required:!1,type:{name:"string"}},{name:"shadowTop",description:"Flag indicating if PageBreadcrumb should have a shadow at the top",required:!1,type:{name:"boolean"}},{name:"shadowBottom",description:"Flag indicating if PageBreadcrumb should have a shadow at the bottom",required:!1,type:{name:"boolean"}},{name:"overflowScroll",description:"Flag indicating if the PageBreadcrumb has a scrolling overflow",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Page/PageBreadcrumb.vue"]}}),e(u,{src:"packages/core/src/components/Page/PageGroup.vue",doc:{name:"PfPageGroup",exportName:"default",displayName:"PageGroup",description:"",tags:{},props:[{name:"sticky2xl",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyXl",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyLg",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyMd",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickySm",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"sticky",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"shadowTop",description:"Flag indicating if PageBreadcrumb should have a shadow at the top",required:!1,type:{name:"boolean"}},{name:"shadowBottom",description:"Flag indicating if PageBreadcrumb should have a shadow at the bottom",required:!1,type:{name:"boolean"}},{name:"overflowScroll",description:"Flag indicating if the PageBreadcrumb has a scrolling overflow",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Page/PageGroup.vue"]}}),e(u,{src:"packages/core/src/components/Page/PageSection.vue",doc:{name:"PfPageSection",exportName:"default",displayName:"PageSection",description:"",tags:{},props:[{name:"sticky2xl",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyXl",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyLg",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickyMd",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"stickySm",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"sticky",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"padding2xl",required:!1,type:{name:"union",elements:[{name:'"padding"'},{name:'"no-padding"'}]}},{name:"paddingXl",required:!1,type:{name:"union",elements:[{name:'"padding"'},{name:'"no-padding"'}]}},{name:"paddingLg",required:!1,type:{name:"union",elements:[{name:'"padding"'},{name:'"no-padding"'}]}},{name:"paddingMd",required:!1,type:{name:"union",elements:[{name:'"padding"'},{name:'"no-padding"'}]}},{name:"paddingSm",required:!1,type:{name:"union",elements:[{name:'"padding"'},{name:'"no-padding"'}]}},{name:"padding",required:!1,type:{name:"union",elements:[{name:'"padding"'},{name:'"no-padding"'}]}},{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"variant",description:"Section background color variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"secondary"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"type",description:"Section type variant",required:!1,type:{name:"TSTypeOperator"},defaultValue:{func:!1,value:"'default'"}},{name:"filled",description:"Enables the page section to fill the available vertical space",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"widthLimited",description:"Limits the width of the section",required:!1,type:{name:"boolean"}},{name:"maxWidth",description:"Limits the width of the section and sets the --pf-v6-c-page--section--m-limit-width--MaxWidth variable to this value",required:!1,type:{name:"string"}},{name:"centerAligned",description:"Flag indicating if the section content is center aligned. Either widthLimited or maxWidth must be set for this to work",required:!1,type:{name:"boolean"}},{name:"shadowTop",description:"Modifier indicating if PageSection should have a shadow at the top",required:!1,type:{name:"boolean"}},{name:"shadowBottom",description:"Modifier indicating if PageSection should have a shadow at the bottom",required:!1,type:{name:"boolean"}},{name:"overflowScroll",description:"Flag indicating if the PageSection has a scrolling overflow",required:!1,type:{name:"boolean"}},{name:"component",description:"Sets the base component to render. Defaults to section",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Component"}]},defaultValue:{func:!1,value:"'section' as any"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Page/PageSection.vue"]}}),e(u,{src:"packages/core/src/components/Page/PageSidebar.vue",doc:{name:"PfPageSidebar",exportName:"default",displayName:"PageSidebar",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"id",description:"Sidebar id",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'page-sidebar'"}},{name:"sidebarOpen",description:"Programmatically manage if the side nav is shown, if managedSidebar is set to true in the PfPage component, this prop is managed",required:!1,type:{name:"boolean"}},{name:"theme",description:"Indicates the color scheme of the sidebar",required:!1,type:{name:"union",elements:[{name:'"light"'},{name:'"dark"'}]},defaultValue:{func:!1,value:"'dark'"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Page/PageSidebar.vue"]}}),e(u,{src:"packages/core/src/components/Page/PageSidebarBody.vue",doc:{name:"PfPageSidebarBody",exportName:"default",displayName:"PageSidebarBody",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"insets",description:"Flag indicating that the page sidebar body should use page insets.",required:!1,type:{name:"boolean"}},{name:"filled",description:"Flag indicating that the page sidebar body should fill the available vertical space.",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Page/PageSidebarBody.vue"]}}),e(u,{src:"packages/core/src/components/Page/PageToggleButton.vue",doc:{name:"PfPageToggleButton",exportName:"default",displayName:"PageToggleButton",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"id",description:"Sidebar id",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'nav-toggle'"}},{name:"sidebarOpen",description:"Programmatically manage if the side nav is shown, if managedSidebar is set to true in the PfPage component, this prop is managed",required:!1,type:{name:"boolean"}}],events:[{name:"update:sidebarOpen",type:{names:["boolean"]}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Page/PageToggleButton.vue"]}})]),default:t(()=>[a[46]||(a[46]=n("div",{class:"markdown pf-v6-c-content"},[n("h2",{class:"pf-v6-c-title"},"Differences from patternfly-react"),n("ul",null,[n("li",null,[n("code",null,"pf-page-breadcrumb"),i(" and "),n("code",null,"pf-page-section"),i(" can be limited in width by setting their "),n("code",null,"max-width"),i(" prop.")])]),n("h2",{class:"pf-v6-c-title"},"Examples"),n("h3",{class:"pf-v6-c-title"},"Basic page components"),n("p",null,"A page will typically contain the following components:"),n("ul",null,[n("li",null,[i("A "),n("code",null,"<pf-page>"),i(" with a "),n("code",null,"header"),i(" that often contains a "),n("a",{href:"#/stories/components/masthead"},"masthead"),n("ul",null,[n("li",null,[i("Mastheads contain the "),n("code",null,"<pf-page-toggle-button>"),i(", a "),n("code",null,"<pf-masthead-main>"),i(" that contains a "),n("code",null,"<pf-masthead-brand>"),i(", and the page's header toolbar within "),n("code",null,"<pf-masthead-content>"),i(".")])])]),n("li",null,[i("1 or more "),n("code",null,"<pf-page-sidebar-body>"),i(" components inside "),n("code",null,"<pf-page-sidebar>"),i(" for vertical navigation or other sidebar content")]),n("li",null,[i("1 or more "),n("code",null,"<pf-page-section>"),i(" components")])])],-1)),e(O,{title:"Vertical Navigation",source:`<pf-page managed-sidebar style="height:500px">
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
</pf-page>`},{intro:t(()=>[...a[2]||(a[2]=[n("div",{class:"markdown pf-v6-c-content"},[n("p",null,[i("To add a vertical sidebar to a "),n("code",null,"<pf-page>"),i(", pass a "),n("code",null,"<pf-page-sidebar>"),i(" component into the "),n("code",null,"sidebar"),i(" property. To render navigation in the sidebar, pass a "),n("code",null,"<pf-page-sidebar-body>"),i(" component to "),n("code",null,"<pf-page-sidebar>"),i(".")]),n("p",null,[i("The "),n("code",null,"sidebar-open"),i(" property helps facilitate the opening and closing of the sidebar and should be 'true' when the sidebar is visible.")])],-1)])]),default:t(()=>[e(I,{"managed-sidebar":"",style:{height:"500px"}},{skeleton:t(()=>[e(A,null,{default:t(()=>[e(S,null,{default:t(()=>[e(y,null,{default:t(()=>[e(v,{hamburger:""})]),_:1}),e(q,{to:{name:"introduction"},custom:""},{default:t(({href:g})=>[e(_,{href:g},{default:t(()=>[...a[3]||(a[3]=[i(" Logo ",-1)])]),_:1},8,["href"])]),_:1})]),_:1}),e(T,null,{default:t(()=>[e(x,{"full-height":""},{default:t(()=>[e(k,null,{default:t(()=>[e(P,null,{default:t(()=>[...a[4]||(a[4]=[i("header-tools",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(B,null,{default:t(()=>[e(N,null,{default:t(()=>[e(c,{title:"Overview"},{default:t(()=>[e(r,null,{default:t(()=>[...a[5]||(a[5]=[i("Home",-1)])]),_:1})]),_:1}),e(c,{title:"Components"},{default:t(()=>[e(r,null,{default:t(()=>[...a[6]||(a[6]=[i("Accordion",-1)])]),_:1}),e(r,null,{default:t(()=>[...a[7]||(a[7]=[i("Alert",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),default:t(()=>[e(W,{sticky:"top","shadow-bottom":""},{default:t(()=>[e(M,null,{default:t(()=>[e(w,{href:"#"},{default:t(()=>[...a[8]||(a[8]=[i("Section home",-1)])]),_:1}),e(w,{href:"#"},{default:t(()=>[...a[9]||(a[9]=[i("Section title",-1)])]),_:1}),e(w,{href:"#"},{default:t(()=>[...a[10]||(a[10]=[i("Section title",-1)])]),_:1}),e(w,{href:"#",active:""},{default:t(()=>[...a[11]||(a[11]=[i("Section landing",-1)])]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[...a[12]||(a[12]=[i("Section 1",-1)])]),_:1}),e(h,{variant:"secondary"},{default:t(()=>[...a[13]||(a[13]=[i("Section 2 with secondary styling",-1)])]),_:1}),e(h,null,{default:t(()=>[...a[14]||(a[14]=[i("Section 3",-1)])]),_:1})]),_:1})]),_:1}),e(O,{title:"Centered",style:{height:"500px"},source:`<pf-page managed-sidebar style="height:500px">
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
</pf-page>`},{intro:t(()=>[...a[15]||(a[15]=[n("div",{class:"markdown pf-v6-c-content"},[n("p",null,[i("By default, a page section spans the width of the page. To reduce the width of a section, use the "),n("code",null,"width-limited"),i(" property. To center align width-limited page sections, use the "),n("code",null,"center-aligned"),i(" property. When the main content area of a page is wider than the value of a centered, width-limited page section's "),n("code",null,"--pf-v6-c-page--section--m-limit-width--MaxWidth"),i(" custom property, the section will automatically be centered.")]),n("p",null,"The content in this example is placed in a card to better illustrate how the section behaves when it is centered, but a card is not required to center a page section.")],-1)])]),default:t(()=>[e(I,{"managed-sidebar":"",style:{height:"500px"}},{skeleton:t(()=>[e(A,null,{default:t(()=>[e(S,null,{default:t(()=>[e(y,null,{default:t(()=>[e(v,{hamburger:""})]),_:1}),e(q,{to:{name:"introduction"},custom:""},{default:t(({href:g})=>[e(_,{href:g},{default:t(()=>[...a[16]||(a[16]=[i(" Logo ",-1)])]),_:1},8,["href"])]),_:1})]),_:1}),e(T,null,{default:t(()=>[e(x,{"full-height":""},{default:t(()=>[e(k,null,{default:t(()=>[e(P,null,{default:t(()=>[...a[17]||(a[17]=[i("header-tools",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(B,null,{default:t(()=>[e(N,null,{default:t(()=>[e(c,{title:"Overview"},{default:t(()=>[e(r,null,{default:t(()=>[...a[18]||(a[18]=[i("Home",-1)])]),_:1})]),_:1}),e(c,{title:"Components"},{default:t(()=>[e(r,null,{default:t(()=>[...a[19]||(a[19]=[i("Accordion",-1)])]),_:1}),e(r,null,{default:t(()=>[...a[20]||(a[20]=[i("Alert",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),default:t(()=>[e(h,{"max-width":"20rem","center-aligned":"","sticky-sm":"bottom"},{default:t(()=>[e(R,null,{default:t(()=>[e(C,null,{default:t(()=>[...a[21]||(a[21]=[i(" When a width limited page section is wider than the value of ",-1),n("code",null,"--pf-v6-c-page--section--m-limit-width--MaxWidth",-1),i(", the section will be centered in the main section. ",-1),n("br",null,null,-1),n("br",null,null,-1),i(" The content in this example is placed in a card to better illustrate how the section behaves when it is centered. A card is not required to center a page section. ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(O,{title:"With notification drawer",source:`<pf-page managed-sidebar :drawer-expanded="expanded" style="height:500px">
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
</pf-page>`},{default:t(()=>[e(I,{"managed-sidebar":"","drawer-expanded":b.value,style:{height:"500px"}},{skeleton:t(()=>[e(A,null,{default:t(()=>[e(S,null,{default:t(()=>[e(y,null,{default:t(()=>[e(v,{hamburger:""})]),_:1}),e(q,{to:{name:"introduction"},custom:""},{default:t(({href:g})=>[e(_,{href:g},{default:t(()=>[...a[22]||(a[22]=[i(" Logo ",-1)])]),_:1},8,["href"])]),_:1})]),_:1}),e(T,null,{default:t(()=>[e(x,{"full-height":""},{default:t(()=>[e(k,null,{default:t(()=>[e(H,{align:"end"},{default:t(()=>[e(P,{visibility:"visible"},{default:t(()=>[e(D,{variant:"read",expanded:b.value,onClick:a[0]||(a[0]=g=>b.value=!b.value)},{default:t(()=>[e(L(Z))]),_:1},8,["expanded"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(B,null,{default:t(()=>[e(N,null,{default:t(()=>[e(c,{title:"Overview"},{default:t(()=>[e(r,null,{default:t(()=>[...a[23]||(a[23]=[i("Home",-1)])]),_:1})]),_:1}),e(c,{title:"Components"},{default:t(()=>[e(r,null,{default:t(()=>[...a[24]||(a[24]=[i("Accordion",-1)])]),_:1}),e(r,null,{default:t(()=>[...a[25]||(a[25]=[i("Alert",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),drawer:t(()=>[e(Q,null,{default:t(()=>[e(U,{count:"4"},{default:t(()=>[e(d,{position:"right"},{toggle:t(()=>[e(l,{variant:"plain"})]),default:t(()=>[e(s,null,{default:t(()=>[...a[26]||(a[26]=[i("Action",-1)])]),_:1})]),_:1})]),_:1}),e(K,null,{default:t(()=>[e(J,null,{default:t(()=>[e(V,{title:"First notification group",count:"2"},{default:t(()=>[e(F,{"aria-label":"Notifications in the basic example"},{default:t(()=>[e(m,{variant:"info"},{default:t(()=>[e(p,{variant:"info",title:"Unread info notification title","sr-title":"Info notification:"},{default:t(()=>[e(d,{position:"right"},{toggle:t(()=>[e(l,{variant:"plain"})]),default:t(()=>[e(s,null,{default:t(()=>[...a[27]||(a[27]=[i("Action",-1)])]),_:1})]),_:1})]),_:1}),e(f,{timestamp:"5 minutes ago"},{default:t(()=>[...a[28]||(a[28]=[i(" This is an info notification description. ",-1)])]),_:1})]),_:1}),e(m,{variant:"danger"},{default:t(()=>[e(p,{variant:"danger",title:"Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.","sr-title":"Danger notification:"},{default:t(()=>[e(d,{position:"right"},{toggle:t(()=>[e(l,{variant:"plain"})]),default:t(()=>[e(s,null,{default:t(()=>[...a[29]||(a[29]=[i("Action",-1)])]),_:1})]),_:1})]),_:1}),e(f,{timestamp:"10 minutes ago"},{default:t(()=>[...a[30]||(a[30]=[i(" This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines. ",-1)])]),_:1})]),_:1}),e(m,{variant:"warning",read:""},{default:t(()=>[e(p,{variant:"warning",title:"Read warning notification title","sr-title":"Warning notification:"},{default:t(()=>[e(d,{position:"right"},{toggle:t(()=>[e(l,{variant:"plain"})]),default:t(()=>[e(s,null,{default:t(()=>[...a[31]||(a[31]=[i("Action",-1)])]),_:1})]),_:1})]),_:1}),e(f,{timestamp:"10 minutes ago"},{default:t(()=>[...a[32]||(a[32]=[i(" This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines. ",-1)])]),_:1})]),_:1}),e(m,{variant:"success",read:""},{default:t(()=>[e(p,{variant:"success",title:"Read success notification title","sr-title":"Success notification:"},{default:t(()=>[e(d,{position:"right"},{toggle:t(()=>[e(l,{variant:"plain"})]),default:t(()=>[e(s,null,{default:t(()=>[...a[33]||(a[33]=[i("Action",-1)])]),_:1})]),_:1})]),_:1}),e(f,{timestamp:"30 minutes ago"},{default:t(()=>[...a[34]||(a[34]=[i(" This is a success notification description. ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),e(V,{title:"Second notification group",count:"2"},{default:t(()=>[e(F,{"aria-label":"Notifications in the second group"},{default:t(()=>[e(m,{variant:"info"},{default:t(()=>[e(p,{variant:"info",title:"Unread info notification title","sr-title":"Info notification:"},{default:t(()=>[e(d,{position:"right"},{toggle:t(()=>[e(l,{variant:"plain"})]),default:t(()=>[e(s,null,{default:t(()=>[...a[35]||(a[35]=[i("Action",-1)])]),_:1})]),_:1})]),_:1}),e(f,{timestamp:"5 minutes ago"},{default:t(()=>[...a[36]||(a[36]=[i(" This is an info notification description. ",-1)])]),_:1})]),_:1}),e(m,{variant:"danger"},{default:t(()=>[e(p,{variant:"danger",title:"Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.","sr-title":"Danger notification:"},{default:t(()=>[e(d,{position:"right"},{toggle:t(()=>[e(l,{variant:"plain"})]),default:t(()=>[e(s,null,{default:t(()=>[...a[37]||(a[37]=[i("Action",-1)])]),_:1})]),_:1})]),_:1}),e(f,{timestamp:"10 minutes ago"},{default:t(()=>[...a[38]||(a[38]=[i(" This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines. ",-1)])]),_:1})]),_:1}),e(m,{variant:"warning",read:""},{default:t(()=>[e(p,{variant:"warning",title:"Read warning notification title","sr-title":"Warning notification:"},{default:t(()=>[e(d,{position:"right"},{toggle:t(()=>[e(l,{variant:"plain"})]),default:t(()=>[e(s,null,{default:t(()=>[...a[39]||(a[39]=[i("Action",-1)])]),_:1})]),_:1})]),_:1}),e(f,{timestamp:"20 minutes ago"},{default:t(()=>[...a[40]||(a[40]=[i(" This is a warning notification description. ",-1)])]),_:1})]),_:1}),e(m,{variant:"success",read:""},{default:t(()=>[e(p,{variant:"success",title:"Read success notification title","sr-title":"Success notification:"},{default:t(()=>[e(d,{position:"right"},{toggle:t(()=>[e(l,{variant:"plain"})]),default:t(()=>[e(s,null,{default:t(()=>[...a[41]||(a[41]=[i("Action",-1)])]),_:1})]),_:1})]),_:1}),e(f,{timestamp:"30 minutes ago"},{default:t(()=>[...a[42]||(a[42]=[i(" This is a success notification description. ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),e(V,{title:"Third notification group. This is a long title to show how the title will be truncated if it is long and will be shown in a single line.",count:"0","truncate-title":1,read:""},{default:t(()=>[e(F,{"aria-label":"Notifications in the third group"},{default:t(()=>[e(j,{variant:"full"},{default:t(()=>[e(E,{"heading-level":"h2",title:"No alerts found"},{icon:t(()=>[e(L(ee))]),_:1}),e(G,null,{default:t(()=>[...a[43]||(a[43]=[i(" There are currently no critical alerts firing. There may be firing alerts of other severities or silenced critical alerts however. ",-1)])]),_:1}),e($,null,{default:t(()=>[e(z,null,{default:t(()=>[e(X,{variant:"link"},{default:t(()=>[...a[44]||(a[44]=[i("Action",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),default:t(()=>[e(h,null,{default:t(()=>[...a[45]||(a[45]=[i(" Main section ",-1)])]),_:1})]),_:1},8,["drawer-expanded"])]),_:1})]),_:1})}}});export{pe as default};
