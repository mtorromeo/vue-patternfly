import{e as it,r as at,a as n,o as nt,c as ot,w as t,b as e,u as w,B as L,g as i,d as a}from"./index-aHpSD51e.js";import{B as lt}from"./bell-icon-AI43jolk.js";const rt=a("div",{class:"markdown pf-v5-c-content"},[a("p",null,[i("The "),a("strong",null,"page"),i(" component is used to define the basic layout of a page with either vertical or horizontal navigation.")]),a("p",null,[i("See full "),a("a",{href:"https://www.patternfly.org/components/page/design-guidelines"},"design guidelines"),i(" on the official patternfly documentation.")]),a("h2",{class:"pf-v5-c-title"},"Differences from patternfly-react"),a("ul",null,[a("li",null,[a("code",null,"pf-page-breadcrumb"),i(", "),a("code",null,"pf-page-navigation"),i(" and "),a("code",null,"pf-page-section"),i(" can be limited in width by setting their "),a("code",null,"max-width"),i(" prop.")])]),a("h2",{class:"pf-v5-c-title"},"Examples"),a("h3",{class:"pf-v5-c-title"},"Basic page components"),a("p",null,"A page will typically contain the following components:"),a("ul",null,[a("li",null,[i("A "),a("code",null,"<pf-page>"),i(" with a "),a("code",null,"header"),i(" that often contains a "),a("a",{href:"#/stories/components/masthead"},"masthead"),a("ul",null,[a("li",null,[i("Mastheads contain the "),a("code",null,"<pf-page-toggle-button>"),i(", a "),a("code",null,"<pf-masthead-main>"),i(" that contains a "),a("code",null,"<pf-masthead-brand>"),i(", and the page's header toolbar within "),a("code",null,"<pf-masthead-content>"),i(".")])])]),a("li",null,[i("1 or more "),a("code",null,"<pf-page-sidebar-body>"),i(" components inside "),a("code",null,"<pf-page-sidebar>"),i(" for vertical navigation or other sidebar content")]),a("li",null,[i("1 or more "),a("code",null,"<pf-page-section>"),i(" components")])])],-1),pt=a("div",{class:"markdown pf-v5-c-content"},[a("p",null,[i("To add a vertical sidebar to a "),a("code",null,"<pf-page>"),i(", pass a "),a("code",null,"<pf-page-sidebar>"),i(" component into the "),a("code",null,"sidebar"),i(" property. To render navigation in the sidebar, pass a "),a("code",null,"<pf-page-sidebar-body>"),i(" component to "),a("code",null,"<pf-page-sidebar>"),i(".")]),a("p",null,[i("The "),a("code",null,"sidebar-open"),i(" property helps facilitate the opening and closing of the sidebar and should be 'true' when the sidebar is visible.")])],-1),dt=a("div",{class:"markdown pf-v5-c-content"},[a("p",null,[i("By default, a page section spans the width of the page. To reduce the width of a section, use the "),a("code",null,"width-limited"),i(" property. To center align width-limited page sections, use the "),a("code",null,"center-aligned"),i(" property. When the main content area of a page is wider than the value of a centered, width-limited page section's "),a("code",null,"--pf-v5-c-page--section--m-limit-width--MaxWidth"),i(" custom property, the section will automatically be centered.")]),a("p",null,"The content in this example is placed in a card to better illustrate how the section behaves when it is centered, but a card is not required to center a page section.")],-1),ft=a("code",null,"--pf-v5-c-page--section--m-limit-width--MaxWidth",-1),st=a("br",null,null,-1),ct=a("br",null,null,-1),_t=it({__name:"Page.story",setup(ut){const h=at(!1);return(mt,M)=>{const O=n("component-title"),b=n("pf-page-toggle-button"),v=n("pf-masthead-toggle"),y=n("pf-masthead-brand"),T=n("router-link"),k=n("pf-masthead-main"),A=n("pf-toolbar-item"),x=n("pf-toolbar-content"),S=n("pf-toolbar"),N=n("pf-masthead-content"),C=n("pf-masthead"),o=n("pf-nav-item"),u=n("pf-nav-group"),W=n("pf-nav"),B=n("pf-page-sidebar"),_=n("pf-breadcrumb-item"),D=n("pf-breadcrumb"),V=n("pf-page-breadcrumb"),m=n("pf-page-section"),R=n("pf-page"),U=n("story-canvas"),q=n("pf-card-body"),F=n("pf-card"),P=n("pf-notification-badge"),z=n("pf-toolbar-group"),l=n("ellipsis-vertical-icon"),r=n("pf-menu-toggle"),p=n("pf-dropdown-item"),d=n("pf-dropdown"),E=n("pf-notification-drawer-header"),f=n("pf-notification-drawer-list-item-header"),s=n("pf-notification-drawer-list-item-body"),c=n("pf-notification-drawer-list-item"),H=n("pf-notification-drawer-list"),I=n("pf-notification-drawer-group"),$=n("magnifying-glass-icon"),j=n("pf-empty-state-header"),G=n("pf-empty-state-body"),J=n("pf-button"),K=n("pf-empty-state-actions"),Q=n("pf-empty-state-footer"),X=n("pf-empty-state"),Y=n("pf-notification-drawer-group-list"),Z=n("pf-notification-drawer-body"),tt=n("pf-notification-drawer"),et=n("doc-page");return nt(),ot(et,{title:"Page"},{default:t(()=>[e(O,{name:"pf-page"}),rt,e(U,{title:"Vertical Navigation",style:{height:"500px"},source:`<pf-page managed-sidebar>
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
</pf-page>`},{intro:t(()=>[pt]),default:t(()=>[e(R,{"managed-sidebar":""},{skeleton:t(()=>[e(C,null,{default:t(()=>[e(v,null,{default:t(()=>[e(b,null,{default:t(()=>[e(w(L))]),_:1})]),_:1}),e(k,null,{default:t(()=>[e(T,{to:{name:"introduction"},custom:""},{default:t(({href:g})=>[e(y,{href:g},{default:t(()=>[i(" Logo ")]),_:2},1032,["href"])]),_:1})]),_:1}),e(N,null,{default:t(()=>[e(S,{"full-height":""},{default:t(()=>[e(x,null,{default:t(()=>[e(A,null,{default:t(()=>[i("header-tools")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(B,null,{default:t(()=>[e(W,null,{default:t(()=>[e(u,{title:"Overview"},{default:t(()=>[e(o,null,{default:t(()=>[i("Home")]),_:1})]),_:1}),e(u,{title:"Components"},{default:t(()=>[e(o,null,{default:t(()=>[i("Accordion")]),_:1}),e(o,null,{default:t(()=>[i("Alert")]),_:1})]),_:1})]),_:1})]),_:1})]),default:t(()=>[e(V,{sticky:"top","shadow-bottom":""},{default:t(()=>[e(D,null,{default:t(()=>[e(_,{href:"#"},{default:t(()=>[i("Section home")]),_:1}),e(_,{href:"#"},{default:t(()=>[i("Section title")]),_:1}),e(_,{href:"#"},{default:t(()=>[i("Section title")]),_:1}),e(_,{href:"#",active:""},{default:t(()=>[i("Section landing")]),_:1})]),_:1})]),_:1}),e(m,{variant:"darker"},{default:t(()=>[i("Section with darker background")]),_:1}),e(m,{variant:"dark"},{default:t(()=>[i("Section with dark background")]),_:1}),e(m,{variant:"light"},{default:t(()=>[i("Section with light background")]),_:1}),e(m,{"width-limited":""},{default:t(()=>[i("Section with limited width")]),_:1})]),_:1})]),_:1}),e(U,{title:"Centered",style:{height:"500px"},source:`<pf-page managed-sidebar>
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
</pf-page>`},{intro:t(()=>[dt]),default:t(()=>[e(R,{"managed-sidebar":""},{skeleton:t(()=>[e(C,null,{default:t(()=>[e(v,null,{default:t(()=>[e(b,null,{default:t(()=>[e(w(L))]),_:1})]),_:1}),e(k,null,{default:t(()=>[e(T,{to:{name:"introduction"},custom:""},{default:t(({href:g})=>[e(y,{href:g},{default:t(()=>[i(" Logo ")]),_:2},1032,["href"])]),_:1})]),_:1}),e(N,null,{default:t(()=>[e(S,{"full-height":""},{default:t(()=>[e(x,null,{default:t(()=>[e(A,null,{default:t(()=>[i("header-tools")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(B,null,{default:t(()=>[e(W,null,{default:t(()=>[e(u,{title:"Overview"},{default:t(()=>[e(o,null,{default:t(()=>[i("Home")]),_:1})]),_:1}),e(u,{title:"Components"},{default:t(()=>[e(o,null,{default:t(()=>[i("Accordion")]),_:1}),e(o,null,{default:t(()=>[i("Alert")]),_:1})]),_:1})]),_:1})]),_:1})]),default:t(()=>[e(m,{"max-width":"20rem","center-aligned":"","sticky-sm":"bottom"},{default:t(()=>[e(F,null,{default:t(()=>[e(q,null,{default:t(()=>[i(" When a width limited page section is wider than the value of "),ft,i(", the section will be centered in the main section. "),st,ct,i(" The content in this example is placed in a card to better illustrate how the section behaves when it is centered. A card is not required to center a page section. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(U,{title:"With notification drawer",style:{height:"500px"},source:`<pf-page managed-sidebar :drawer-expanded="expanded">
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
</pf-page>`},{default:t(()=>[e(R,{"managed-sidebar":"","drawer-expanded":h.value},{skeleton:t(()=>[e(C,null,{default:t(()=>[e(v,null,{default:t(()=>[e(b,null,{default:t(()=>[e(w(L))]),_:1})]),_:1}),e(k,null,{default:t(()=>[e(T,{to:{name:"introduction"},custom:""},{default:t(({href:g})=>[e(y,{href:g},{default:t(()=>[i(" Logo ")]),_:2},1032,["href"])]),_:1})]),_:1}),e(N,null,{default:t(()=>[e(S,{"full-height":""},{default:t(()=>[e(x,null,{default:t(()=>[e(z,{"space-items":"none",align:"right"},{default:t(()=>[e(A,{visibility:"visible"},{default:t(()=>[e(P,{variant:"unread",expanded:h.value,onClick:M[0]||(M[0]=g=>h.value=!h.value)},{default:t(()=>[e(w(lt))]),_:1},8,["expanded"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(B,null,{default:t(()=>[e(W,null,{default:t(()=>[e(u,{title:"Overview"},{default:t(()=>[e(o,null,{default:t(()=>[i("Home")]),_:1})]),_:1}),e(u,{title:"Components"},{default:t(()=>[e(o,null,{default:t(()=>[i("Accordion")]),_:1}),e(o,null,{default:t(()=>[i("Alert")]),_:1})]),_:1})]),_:1})]),_:1})]),drawer:t(()=>[e(tt,null,{default:t(()=>[e(E,{count:"4"},{default:t(()=>[e(d,{position:"right"},{toggle:t(()=>[e(r,{variant:"plain"},{default:t(()=>[e(l,{"aria-hidden":"true"})]),_:1})]),default:t(()=>[e(p,null,{default:t(()=>[i("Action")]),_:1})]),_:1})]),_:1}),e(Z,null,{default:t(()=>[e(Y,null,{default:t(()=>[e(I,{title:"First notification group",count:"2"},{default:t(()=>[e(H,{"aria-label":"Notifications in the basic example"},{default:t(()=>[e(c,{variant:"info"},{default:t(()=>[e(f,{variant:"info",title:"Unread info notification title","sr-title":"Info notification:"},{default:t(()=>[e(d,{position:"right"},{toggle:t(()=>[e(r,{variant:"plain"},{default:t(()=>[e(l,{"aria-hidden":"true"})]),_:1})]),default:t(()=>[e(p,null,{default:t(()=>[i("Action")]),_:1})]),_:1})]),_:1}),e(s,{timestamp:"5 minutes ago"},{default:t(()=>[i(" This is an info notification description. ")]),_:1})]),_:1}),e(c,{variant:"danger"},{default:t(()=>[e(f,{variant:"danger",title:"Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.","sr-title":"Danger notification:"},{default:t(()=>[e(d,{position:"right"},{toggle:t(()=>[e(r,{variant:"plain"},{default:t(()=>[e(l,{"aria-hidden":"true"})]),_:1})]),default:t(()=>[e(p,null,{default:t(()=>[i("Action")]),_:1})]),_:1})]),_:1}),e(s,{timestamp:"10 minutes ago"},{default:t(()=>[i(" This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines. ")]),_:1})]),_:1}),e(c,{variant:"warning",read:""},{default:t(()=>[e(f,{variant:"warning",title:"Read warning notification title","sr-title":"Warning notification:"},{default:t(()=>[e(d,{position:"right"},{toggle:t(()=>[e(r,{variant:"plain"},{default:t(()=>[e(l,{"aria-hidden":"true"})]),_:1})]),default:t(()=>[e(p,null,{default:t(()=>[i("Action")]),_:1})]),_:1})]),_:1}),e(s,{timestamp:"10 minutes ago"},{default:t(()=>[i(" This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines. ")]),_:1})]),_:1}),e(c,{variant:"success",read:""},{default:t(()=>[e(f,{variant:"success",title:"Read success notification title","sr-title":"Success notification:"},{default:t(()=>[e(d,{position:"right"},{toggle:t(()=>[e(r,{variant:"plain"},{default:t(()=>[e(l,{"aria-hidden":"true"})]),_:1})]),default:t(()=>[e(p,null,{default:t(()=>[i("Action")]),_:1})]),_:1})]),_:1}),e(s,{timestamp:"30 minutes ago"},{default:t(()=>[i(" This is a success notification description. ")]),_:1})]),_:1})]),_:1})]),_:1}),e(I,{title:"Second notification group",count:"2"},{default:t(()=>[e(H,{"aria-label":"Notifications in the second group"},{default:t(()=>[e(c,{variant:"info"},{default:t(()=>[e(f,{variant:"info",title:"Unread info notification title","sr-title":"Info notification:"},{default:t(()=>[e(d,{position:"right"},{toggle:t(()=>[e(r,{variant:"plain"},{default:t(()=>[e(l,{"aria-hidden":"true"})]),_:1})]),default:t(()=>[e(p,null,{default:t(()=>[i("Action")]),_:1})]),_:1})]),_:1}),e(s,{timestamp:"5 minutes ago"},{default:t(()=>[i(" This is an info notification description. ")]),_:1})]),_:1}),e(c,{variant:"danger"},{default:t(()=>[e(f,{variant:"danger",title:"Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.","sr-title":"Danger notification:"},{default:t(()=>[e(d,{position:"right"},{toggle:t(()=>[e(r,{variant:"plain"},{default:t(()=>[e(l,{"aria-hidden":"true"})]),_:1})]),default:t(()=>[e(p,null,{default:t(()=>[i("Action")]),_:1})]),_:1})]),_:1}),e(s,{timestamp:"10 minutes ago"},{default:t(()=>[i(" This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines. ")]),_:1})]),_:1}),e(c,{variant:"warning",read:""},{default:t(()=>[e(f,{variant:"warning",title:"Read warning notification title","sr-title":"Warning notification:"},{default:t(()=>[e(d,{position:"right"},{toggle:t(()=>[e(r,{variant:"plain"},{default:t(()=>[e(l,{"aria-hidden":"true"})]),_:1})]),default:t(()=>[e(p,null,{default:t(()=>[i("Action")]),_:1})]),_:1})]),_:1}),e(s,{timestamp:"20 minutes ago"},{default:t(()=>[i(" This is a warning notification description. ")]),_:1})]),_:1}),e(c,{variant:"success",read:""},{default:t(()=>[e(f,{variant:"success",title:"Read success notification title","sr-title":"Success notification:"},{default:t(()=>[e(d,{position:"right"},{toggle:t(()=>[e(r,{variant:"plain"},{default:t(()=>[e(l,{"aria-hidden":"true"})]),_:1})]),default:t(()=>[e(p,null,{default:t(()=>[i("Action")]),_:1})]),_:1})]),_:1}),e(s,{timestamp:"30 minutes ago"},{default:t(()=>[i(" This is a success notification description. ")]),_:1})]),_:1})]),_:1})]),_:1}),e(I,{title:"Third notification group. This is a long title to show how the title will be truncated if it is long and will be shown in a single line.",count:"0","truncate-title":1,read:""},{default:t(()=>[e(H,{"aria-label":"Notifications in the third group"},{default:t(()=>[e(X,{variant:"full"},{default:t(()=>[e(j,{"heading-level":"h2",title:"No alerts found"},{icon:t(()=>[e($)]),_:1}),e(G,null,{default:t(()=>[i(" There are currently no critical alerts firing. There may be firing alerts of other severities or silenced critical alerts however. ")]),_:1}),e(Q,null,{default:t(()=>[e(K,null,{default:t(()=>[e(J,{variant:"link"},{default:t(()=>[i("Action")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),default:t(()=>[e(m,null,{default:t(()=>[i(" Main section ")]),_:1})]),_:1},8,["drawer-expanded"])]),_:1})]),_:1})}}});export{_t as default};
