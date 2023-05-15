import{e as y,r as d,v as x,a as l,o as S,h as g,d as o,t as D,b as t,w as e,g as a,F as T,c as C,u as b}from"./index-92e11c35.js";import{U,B as N,D as I,S as V,L as B}from"./laptop-icon-75471569.js";import{c as j}from"./createIcon-d19d910a.js";const P=y({__name:"KeepAliveTest",setup(v){const f=d(0);return x(()=>console.log("KeepAliveTest mounted")),(u,r)=>{const m=l("pf-button");return S(),g(T,null,[o("div",null," Counter: "+D(f.value),1),t(m,{onClick:r[0]||(r[0]=w=>f.value++)},{default:e(()=>[a("Increment counter")]),_:1})],64)}}}),H={name:"DiagramProjectIcon",height:512,width:576,svgPath:"M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48V96H384V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H432c-26.5 0-48-21.5-48-48V160H192v16c0 1.7-.1 3.4-.3 5L272 288h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V336c0-1.7 .1-3.4 .3-5L144 224H48c-26.5 0-48-21.5-48-48V80z",yOffset:0,xOffset:0},L=j(H),F=L,$=o("div",{class:"markdown pf-c-content"},[o("p",null,[o("strong",null,"Tabs"),a(" allow users to navigate between views within the same page or context.")]),o("h2",{class:"pf-c-title"},"Usage"),o("p",null,"PatternFly offers a few types of tabs:"),o("ul",null,[o("li",null,"Default tabs (recommended)"),o("li",null,"Boxed tabs"),o("li",null,"Vertical tabs")]),o("p",null,"You can use as many tabs as you want in a page, although it is recommended you keep the total number of tabs to a minimum for a better user experience. If you have more tabs than fit on the page, you may use a default overflow which would allow a user to horizontal scroll through your tabs. The uses of both default and boxed stylings are flexible, so use either according to your needs and preferences."),o("p",null,[a("See full "),o("a",{href:"https://www.patternfly.org/v4/components/tabs/design-guidelines"},"Design guidelines"),a(" on the official patternfly documentation.")])],-1),M=y({__name:"Tabs.story",setup(v){const f=d(),u=d(),r=d();return(m,w)=>{const h=l("component-title"),n=l("pf-tab"),c=l("pf-tabs"),p=l("story-canvas"),i=l("pf-tab-title-icon"),s=l("pf-tab-title-text"),_=l("pf-tab-content"),k=l("doc-page");return S(),C(k,{title:"Tabs"},{default:e(()=>[t(h,{name:"pf-tabs"}),$,t(p,{title:"Default",source:`<pf-tabs>
  <pf-tab title="Users">
    Users
  </pf-tab>
  <pf-tab title="Containers">
    Containers
  </pf-tab>
  <pf-tab title="Database">
    Database
  </pf-tab>
  <pf-tab title="Server" mount-on-enter unmount-on-exit>
    Server
    <keep-alive-test></keep-alive-test>
  </pf-tab>
  <pf-tab>
    <template #title>System</template>
    System
  </pf-tab>
  <pf-tab title="Network">
    Network
  </pf-tab>
</pf-tabs>`},{default:e(()=>[t(c,null,{default:e(()=>[t(n,{title:"Users"},{default:e(()=>[a(" Users ")]),_:1}),t(n,{title:"Containers"},{default:e(()=>[a(" Containers ")]),_:1}),t(n,{title:"Database"},{default:e(()=>[a(" Database ")]),_:1}),t(n,{title:"Server","mount-on-enter":"","unmount-on-exit":""},{default:e(()=>[a(" Server "),t(P)]),_:1}),t(n,null,{title:e(()=>[a("System")]),default:e(()=>[a(" System ")]),_:1}),t(n,{title:"Network"},{default:e(()=>[a(" Network ")]),_:1})]),_:1})]),_:1}),t(p,{title:"Icons and text",source:`<pf-tabs>
  <pf-tab>
    <template #title>
      <pf-tab-title-icon><users-icon></users-icon></pf-tab-title-icon>
      <pf-tab-title-text>Users</pf-tab-title-text>
    </template>
    Users
  </pf-tab>
  <pf-tab key="containers-tab">
    <template #title>
      <pf-tab-title-icon><box-icon></box-icon></pf-tab-title-icon>
      <pf-tab-title-text>Containers</pf-tab-title-text>
    </template>
    Containers
  </pf-tab>
  <pf-tab disabled>
    <template #title>
      <pf-tab-title-icon><database-icon></database-icon></pf-tab-title-icon>
      <pf-tab-title-text>Database</pf-tab-title-text>
    </template>
    Database
  </pf-tab>
  <pf-tab>
    <template #title>
      <pf-tab-title-icon><server-icon></server-icon></pf-tab-title-icon>
      <pf-tab-title-text>Server</pf-tab-title-text>
    </template>
    Server
  </pf-tab>
  <pf-tab>
    <template #title>
      <pf-tab-title-icon><laptop-icon></laptop-icon></pf-tab-title-icon>
      <pf-tab-title-text>System</pf-tab-title-text>
    </template>
    System
  </pf-tab>
  <pf-tab>
    <template #title>
      <pf-tab-title-icon><diagram-project-icon></diagram-project-icon></pf-tab-title-icon>
      <pf-tab-title-text>Network</pf-tab-title-text>
    </template>
    Network
  </pf-tab>
</pf-tabs>`},{default:e(()=>[t(c,null,{default:e(()=>[t(n,null,{title:e(()=>[t(i,null,{default:e(()=>[t(b(U))]),_:1}),t(s,null,{default:e(()=>[a("Users")]),_:1})]),default:e(()=>[a(" Users ")]),_:1}),t(n,{key:"containers-tab"},{title:e(()=>[t(i,null,{default:e(()=>[t(b(N))]),_:1}),t(s,null,{default:e(()=>[a("Containers")]),_:1})]),default:e(()=>[a(" Containers ")]),_:1}),t(n,{disabled:""},{title:e(()=>[t(i,null,{default:e(()=>[t(b(I))]),_:1}),t(s,null,{default:e(()=>[a("Database")]),_:1})]),default:e(()=>[a(" Database ")]),_:1}),t(n,null,{title:e(()=>[t(i,null,{default:e(()=>[t(b(V))]),_:1}),t(s,null,{default:e(()=>[a("Server")]),_:1})]),default:e(()=>[a(" Server ")]),_:1}),t(n,null,{title:e(()=>[t(i,null,{default:e(()=>[t(b(B))]),_:1}),t(s,null,{default:e(()=>[a("System")]),_:1})]),default:e(()=>[a(" System ")]),_:1}),t(n,null,{title:e(()=>[t(i,null,{default:e(()=>[t(b(F))]),_:1}),t(s,null,{default:e(()=>[a("Network")]),_:1})]),default:e(()=>[a(" Network ")]),_:1})]),_:1})]),_:1}),t(p,{title:"Tabs with sub tabs",source:`<pf-tabs>
  <pf-tab title="Users">
    <pf-tabs secondary default-active-key="1">
      <pf-tab title="Secondary tab item 1">
        Secondary tab section 1
      </pf-tab>
      <pf-tab title="Secondary tab item 2">
        Secondary tab section 2
      </pf-tab>
      <pf-tab title="Secondary tab item 3">
        Secondary tab section 3
      </pf-tab>
      <pf-tab title="Secondary tab item 4">
        Secondary tab section 4
      </pf-tab>
      <pf-tab disabled title="Secondary tab item 5">
        Secondary tab section 5
      </pf-tab>
      <pf-tab disabled title="Secondary tab item 6">
        Secondary tab section 6
      </pf-tab>
      <pf-tab title="Secondary tab item 7">
        Secondary tab section 7
      </pf-tab>
      <pf-tab title="Secondary tab item 8">
        Secondary tab section 8
      </pf-tab>
      <pf-tab title="Secondary tab item 9">
        Secondary tab section 9
      </pf-tab>
      <pf-tab title="Secondary tab item 10">
        Secondary tab section 10
      </pf-tab>
      <pf-tab title="Secondary tab item 11">
        Secondary tab section 11
      </pf-tab>
    </pf-tabs>
  </pf-tab>
  <pf-tab title="Containers">
    Containers
  </pf-tab>
  <pf-tab disabled title="Database">
    Database
  </pf-tab>
  <pf-tab title="Server">
    Server
  </pf-tab>
  <pf-tab title="System">
    System
  </pf-tab>
  <pf-tab title="Network">
    Network
  </pf-tab>
  <pf-tab title="Tab item 7">
    Tab section 7
  </pf-tab>
  <pf-tab title="Tab item 8">
    Tab section 8
  </pf-tab>
  <pf-tab title="Tab item 9">
    Tab section 9
  </pf-tab>
  <pf-tab title="Tab item 10">
    Tab section 10
  </pf-tab>
  <pf-tab title="Tab item 11">
    Tab section 11
  </pf-tab>
</pf-tabs>`},{default:e(()=>[t(c,null,{default:e(()=>[t(n,{title:"Users"},{default:e(()=>[t(c,{secondary:"","default-active-key":"1"},{default:e(()=>[t(n,{title:"Secondary tab item 1"},{default:e(()=>[a(" Secondary tab section 1 ")]),_:1}),t(n,{title:"Secondary tab item 2"},{default:e(()=>[a(" Secondary tab section 2 ")]),_:1}),t(n,{title:"Secondary tab item 3"},{default:e(()=>[a(" Secondary tab section 3 ")]),_:1}),t(n,{title:"Secondary tab item 4"},{default:e(()=>[a(" Secondary tab section 4 ")]),_:1}),t(n,{disabled:"",title:"Secondary tab item 5"},{default:e(()=>[a(" Secondary tab section 5 ")]),_:1}),t(n,{disabled:"",title:"Secondary tab item 6"},{default:e(()=>[a(" Secondary tab section 6 ")]),_:1}),t(n,{title:"Secondary tab item 7"},{default:e(()=>[a(" Secondary tab section 7 ")]),_:1}),t(n,{title:"Secondary tab item 8"},{default:e(()=>[a(" Secondary tab section 8 ")]),_:1}),t(n,{title:"Secondary tab item 9"},{default:e(()=>[a(" Secondary tab section 9 ")]),_:1}),t(n,{title:"Secondary tab item 10"},{default:e(()=>[a(" Secondary tab section 10 ")]),_:1}),t(n,{title:"Secondary tab item 11"},{default:e(()=>[a(" Secondary tab section 11 ")]),_:1})]),_:1})]),_:1}),t(n,{title:"Containers"},{default:e(()=>[a(" Containers ")]),_:1}),t(n,{disabled:"",title:"Database"},{default:e(()=>[a(" Database ")]),_:1}),t(n,{title:"Server"},{default:e(()=>[a(" Server ")]),_:1}),t(n,{title:"System"},{default:e(()=>[a(" System ")]),_:1}),t(n,{title:"Network"},{default:e(()=>[a(" Network ")]),_:1}),t(n,{title:"Tab item 7"},{default:e(()=>[a(" Tab section 7 ")]),_:1}),t(n,{title:"Tab item 8"},{default:e(()=>[a(" Tab section 8 ")]),_:1}),t(n,{title:"Tab item 9"},{default:e(()=>[a(" Tab section 9 ")]),_:1}),t(n,{title:"Tab item 10"},{default:e(()=>[a(" Tab section 10 ")]),_:1}),t(n,{title:"Tab item 11"},{default:e(()=>[a(" Tab section 11 ")]),_:1})]),_:1})]),_:1}),t(p,{title:"Separate content",source:`<pf-tabs>
  <pf-tab title="Users" :content-ref="tabUsers" ></pf-tab>
  <pf-tab title="Containers" :content-ref="tabContainers" ></pf-tab>
  <pf-tab title="Database" :content-ref="tabDatabase" ></pf-tab>
  <pf-tab title="Server">
    Server
  </pf-tab>
  <pf-tab title="Network">
    Network
  </pf-tab>
</pf-tabs>
<pf-tab-content ref="tabUsers">Users section</pf-tab-content>
<pf-tab-content ref="tabContainers">Containers section</pf-tab-content>
<pf-tab-content ref="tabDatabase">Database section</pf-tab-content>`},{default:e(()=>[t(c,null,{default:e(()=>[t(n,{title:"Users","content-ref":f.value},null,8,["content-ref"]),t(n,{title:"Containers","content-ref":u.value},null,8,["content-ref"]),t(n,{title:"Database","content-ref":r.value},null,8,["content-ref"]),t(n,{title:"Server"},{default:e(()=>[a(" Server ")]),_:1}),t(n,{title:"Network"},{default:e(()=>[a(" Network ")]),_:1})]),_:1}),t(_,{ref_key:"tabUsers",ref:f},{default:e(()=>[a("Users section")]),_:1},512),t(_,{ref_key:"tabContainers",ref:u},{default:e(()=>[a("Containers section")]),_:1},512),t(_,{ref_key:"tabDatabase",ref:r},{default:e(()=>[a("Database section")]),_:1},512)]),_:1})]),_:1})}}});export{M as default};
