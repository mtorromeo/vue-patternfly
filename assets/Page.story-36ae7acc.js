import{e as q,r as D,a as o,o as I,c as P,w as e,b as t,u as c,B as C,g as a,d as n}from"./index-a471940d.js";import{B as z}from"./bell-icon-17d77835.js";const E=n("div",{class:"markdown pf-v5-c-content"},[n("p",null,[a("The "),n("strong",null,"page"),a(" component is used to define the basic layout of a page with either vertical or horizontal navigation.")]),n("p",null,[a("See full "),n("a",{href:"https://www.patternfly.org/components/page/design-guidelines"},"design guidelines"),a(" on the official patternfly documentation.")]),n("h2",{class:"pf-v5-c-title"},"Differences from patternfly-react"),n("ul",null,[n("li",null,[n("code",null,"pf-page-breadcrumb"),a(", "),n("code",null,"pf-page-navigation"),a(" and "),n("code",null,"pf-page-section"),a(" can be limited in width by setting their "),n("code",null,"max-width"),a(" prop.")])]),n("h2",{class:"pf-v5-c-title"},"Examples"),n("h3",{class:"pf-v5-c-title"},"Basic page components"),n("p",null,"A page will typically contain the following components:"),n("ul",null,[n("li",null,[a("A "),n("code",null,"<pf-page>"),a(" with a "),n("code",null,"header"),a(" that often contains a "),n("a",{href:"#/stories/components/masthead"},"masthead"),n("ul",null,[n("li",null,[a("Mastheads contain the "),n("code",null,"<pf-page-toggle-button>"),a(", a "),n("code",null,"<pf-masthead-main>"),a(" that contains a "),n("code",null,"<pf-masthead-brand>"),a(", and the page's header toolbar within "),n("code",null,"<pf-masthead-content>"),a(".")])])]),n("li",null,[a("1 or more "),n("code",null,"<pf-page-sidebar-body>"),a(" components inside "),n("code",null,"<pf-page-sidebar>"),a(" for vertical navigation or other sidebar content")]),n("li",null,[a("1 or more "),n("code",null,"<pf-page-section>"),a(" components")])])],-1),$=n("div",{class:"markdown pf-v5-c-content"},[n("p",null,[a("To add a vertical sidebar to a "),n("code",null,"<pf-page>"),a(", pass a "),n("code",null,"<pf-page-sidebar>"),a(" component into the "),n("code",null,"sidebar"),a(" property. To render navigation in the sidebar, pass a "),n("code",null,"<pf-page-sidebar-body>"),a(" component to "),n("code",null,"<pf-page-sidebar>"),a(".")]),n("p",null,[a("The "),n("code",null,"sidebar-open"),a(" property helps facilitate the opening and closing of the sidebar and should be 'true' when the sidebar is visible.")])],-1),j=n("div",{class:"markdown pf-v5-c-content"},[n("p",null,[a("By default, a page section spans the width of the page. To reduce the width of a section, use the "),n("code",null,"width-limited"),a(" property. To center align width-limited page sections, use the "),n("code",null,"center-aligned"),a(" property. When the main content area of a page is wider than the value of a centered, width-limited page section's "),n("code",null,"--pf-v5-c-page--section--m-limit-width--MaxWidth"),a(" custom property, the section will automatically be centered.")]),n("p",null,"The content in this example is placed in a card to better illustrate how the section behaves when it is centered, but a card is not required to center a page section.")],-1),F=n("code",null,"--pf-v5-c-page--section--m-limit-width--MaxWidth",-1),G=n("br",null,null,-1),J=n("br",null,null,-1),X=q({__name:"Page.story",setup(K){const r=D(!1);return(Q,T)=>{const B=o("component-title"),s=o("pf-page-toggle-button"),u=o("pf-masthead-toggle"),m=o("pf-masthead-brand"),h=o("router-link"),_=o("pf-masthead-main"),g=o("pf-toolbar-item"),b=o("pf-toolbar-content"),v=o("pf-toolbar"),w=o("pf-masthead-content"),k=o("pf-masthead"),l=o("pf-nav-item"),i=o("pf-nav-group"),y=o("pf-nav"),x=o("pf-page-sidebar"),f=o("pf-breadcrumb-item"),W=o("pf-breadcrumb"),H=o("pf-page-breadcrumb"),p=o("pf-page-section"),S=o("pf-page"),A=o("story-canvas"),L=o("pf-card-body"),M=o("pf-card"),O=o("pf-notification-badge"),N=o("pf-toolbar-group"),V=o("doc-page");return I(),P(V,{title:"Page"},{default:e(()=>[t(B,{name:"pf-page"}),E,t(A,{title:"Vertical Navigation",style:{height:"500px"},source:`<pf-page managed-sidebar>
  <template #skeleton>
    <pf-masthead>
      <pf-masthead-toggle>
        <pf-page-toggle-button variant="plain">
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
        <pf-toolbar>
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
</pf-page>`},{intro:e(()=>[$]),default:e(()=>[t(S,{"managed-sidebar":""},{skeleton:e(()=>[t(k,null,{default:e(()=>[t(u,null,{default:e(()=>[t(s,{variant:"plain"},{default:e(()=>[t(c(C))]),_:1})]),_:1}),t(_,null,{default:e(()=>[t(h,{to:{name:"introduction"},custom:""},{default:e(({href:d})=>[t(m,{href:d},{default:e(()=>[a(" Logo ")]),_:2},1032,["href"])]),_:1})]),_:1}),t(w,null,{default:e(()=>[t(v,null,{default:e(()=>[t(b,null,{default:e(()=>[t(g,null,{default:e(()=>[a("header-tools")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(x,null,{default:e(()=>[t(y,null,{default:e(()=>[t(i,{title:"Overview"},{default:e(()=>[t(l,null,{default:e(()=>[a("Home")]),_:1})]),_:1}),t(i,{title:"Components"},{default:e(()=>[t(l,null,{default:e(()=>[a("Accordion")]),_:1}),t(l,null,{default:e(()=>[a("Alert")]),_:1})]),_:1})]),_:1})]),_:1})]),default:e(()=>[t(H,{sticky:"top","shadow-bottom":""},{default:e(()=>[t(W,null,{default:e(()=>[t(f,{href:"#"},{default:e(()=>[a("Section home")]),_:1}),t(f,{href:"#"},{default:e(()=>[a("Section title")]),_:1}),t(f,{href:"#"},{default:e(()=>[a("Section title")]),_:1}),t(f,{href:"#",active:""},{default:e(()=>[a("Section landing")]),_:1})]),_:1})]),_:1}),t(p,{variant:"darker"},{default:e(()=>[a("Section with darker background")]),_:1}),t(p,{variant:"dark"},{default:e(()=>[a("Section with dark background")]),_:1}),t(p,{variant:"light"},{default:e(()=>[a("Section with light background")]),_:1}),t(p,{"width-limited":""},{default:e(()=>[a("Section with limited width")]),_:1})]),_:1})]),_:1}),t(A,{title:"Centered",style:{height:"500px"},source:`<pf-page managed-sidebar>
  <template #skeleton>
    <pf-masthead>
      <pf-masthead-toggle>
        <pf-page-toggle-button variant="plain">
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
        <pf-toolbar>
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
</pf-page>`},{intro:e(()=>[j]),default:e(()=>[t(S,{"managed-sidebar":""},{skeleton:e(()=>[t(k,null,{default:e(()=>[t(u,null,{default:e(()=>[t(s,{variant:"plain"},{default:e(()=>[t(c(C))]),_:1})]),_:1}),t(_,null,{default:e(()=>[t(h,{to:{name:"introduction"},custom:""},{default:e(({href:d})=>[t(m,{href:d},{default:e(()=>[a(" Logo ")]),_:2},1032,["href"])]),_:1})]),_:1}),t(w,null,{default:e(()=>[t(v,null,{default:e(()=>[t(b,null,{default:e(()=>[t(g,null,{default:e(()=>[a("header-tools")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(x,null,{default:e(()=>[t(y,null,{default:e(()=>[t(i,{title:"Overview"},{default:e(()=>[t(l,null,{default:e(()=>[a("Home")]),_:1})]),_:1}),t(i,{title:"Components"},{default:e(()=>[t(l,null,{default:e(()=>[a("Accordion")]),_:1}),t(l,null,{default:e(()=>[a("Alert")]),_:1})]),_:1})]),_:1})]),_:1})]),default:e(()=>[t(p,{"max-width":"20rem","center-aligned":"","sticky-sm":"bottom"},{default:e(()=>[t(M,null,{default:e(()=>[t(L,null,{default:e(()=>[a(" When a width limited page section is wider than the value of "),F,a(", the section will be centered in the main section. "),G,J,a(" The content in this example is placed in a card to better illustrate how the section behaves when it is centered. A card is not required to center a page section. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(A,{title:"With notification drawer",style:{height:"500px"},source:`<pf-page managed-sidebar :drawer-expanded="expanded">
  <template #skeleton>
    <pf-masthead>
      <pf-masthead-toggle>
        <pf-page-toggle-button variant="plain">
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
        <pf-toolbar>
          <pf-toolbar-content>
            <pf-toolbar-group space-items="none" align="right">
              <pf-toolbar-item visibility="visible" :selected="expanded">
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
    Drawer content
  </template>

  <pf-page-section>
    Main section
  </pf-page-section>
</pf-page>`},{default:e(()=>[t(S,{"managed-sidebar":"","drawer-expanded":r.value},{skeleton:e(()=>[t(k,null,{default:e(()=>[t(u,null,{default:e(()=>[t(s,{variant:"plain"},{default:e(()=>[t(c(C))]),_:1})]),_:1}),t(_,null,{default:e(()=>[t(h,{to:{name:"introduction"},custom:""},{default:e(({href:d})=>[t(m,{href:d},{default:e(()=>[a(" Logo ")]),_:2},1032,["href"])]),_:1})]),_:1}),t(w,null,{default:e(()=>[t(v,null,{default:e(()=>[t(b,null,{default:e(()=>[t(N,{"space-items":"none",align:"right"},{default:e(()=>[t(g,{visibility:"visible",selected:r.value},{default:e(()=>[t(O,{variant:"unread",expanded:r.value,onClick:T[0]||(T[0]=d=>r.value=!r.value)},{default:e(()=>[t(c(z))]),_:1},8,["expanded"])]),_:1},8,["selected"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(x,null,{default:e(()=>[t(y,null,{default:e(()=>[t(i,{title:"Overview"},{default:e(()=>[t(l,null,{default:e(()=>[a("Home")]),_:1})]),_:1}),t(i,{title:"Components"},{default:e(()=>[t(l,null,{default:e(()=>[a("Accordion")]),_:1}),t(l,null,{default:e(()=>[a("Alert")]),_:1})]),_:1})]),_:1})]),_:1})]),drawer:e(()=>[a(" Drawer content ")]),default:e(()=>[t(p,null,{default:e(()=>[a(" Main section ")]),_:1})]),_:1},8,["drawer-expanded"])]),_:1})]),_:1})}}});export{X as default};
