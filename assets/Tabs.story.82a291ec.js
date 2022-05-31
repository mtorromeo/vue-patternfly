import{U as u,B as m,D as h,S as y,L as S}from"./laptop-icon.c72ccad7.js";import{c as v}from"./createIcon.d9096a91.js";import{e as w,c as D,w as e,a as s,o as C,b as t,u as b,d as o,j as a}from"./index.adfcb1e2.js";const T={name:"ProjectDiagramIcon",height:512,width:640,svgPath:"M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z",yOffset:0,xOffset:0},g=v(T);var k=g;const x=o("div",{class:"markdown pf-c-content"},[o("p",null,[o("strong",null,"Tabs"),a(" allow users to navigate between views within the same page or context.")]),o("h2",{class:"pf-c-title"},"Usage"),o("p",null,"PatternFly offers a few types of tabs:"),o("ul",null,[o("li",null,"Default tabs (recommended)"),o("li",null,"Boxed tabs"),o("li",null,"Vertical tabs")]),o("p",null,"You can use as many tabs as you want in a page, although it is recommended you keep the total number of tabs to a minimum for a better user experience. If you have more tabs than fit on the page, you may use a default overflow which would allow a user to horizontal scroll through your tabs. The uses of both default and boxed stylings are flexible, so use either according to your needs and preferences."),o("p",null,[a("See full "),o("a",{href:"https://www.patternfly.org/v4/components/tabs/design-guidelines"},"Design guidelines"),a(" on the official patternfly documentation.")])],-1),U=a(" Users "),N=a(" Containers "),I=a(" Database "),V=a(" Server "),$=a("System"),j=a(" System "),B=a(" Network "),P=a("Users"),z=a(" Users "),H=a("Containers"),L=a(" Containers "),M=a("Database"),O=a(" Database "),F=a("Server"),Y=a(" Server "),q=a("System"),A=a(" System "),E=a("Network"),G=a(" Network "),J=a(" Secondary tab section 1 "),K=a(" Secondary tab section 2 "),Q=a(" Secondary tab section 3 "),R=a(" Secondary tab section 4 "),W=a(" Secondary tab section 5 "),X=a(" Secondary tab section 6 "),Z=a(" Secondary tab section 7 "),tt=a(" Secondary tab section 8 "),et=a(" Secondary tab section 9 "),at=a(" Secondary tab section 10 "),nt=a(" Secondary tab section 11 "),ot=a(" Containers "),st=a(" Database "),it=a(" Server "),lt=a(" System "),bt=a(" Network "),ct=a(" Tab section 7 "),ft=a(" Tab section 8 "),rt=a(" Tab section 9 "),dt=a(" Tab section 10 "),pt=a(" Tab section 11 "),_t=a(" Server "),ut=a(" Network "),mt=a("Users section"),ht=a("Containers section"),yt=a("Database section"),Tt=w({name:"Tabs.story",setup(St){return(r,vt)=>{const p=s("component-title"),n=s("pf-tab"),c=s("pf-tabs"),f=s("story-canvas"),i=s("pf-tab-title-icon"),l=s("pf-tab-title-text"),d=s("pf-tab-content"),_=s("doc-page");return C(),D(_,{title:"Tabs"},{default:e(()=>[t(p,{name:"pf-tabs"}),x,t(f,{title:"Default",source:`<pf-tabs>
  <pf-tab title="Users">
    Users
  </pf-tab>
  <pf-tab title="Containers">
    Containers
  </pf-tab>
  <pf-tab title="Database">
    Database
  </pf-tab>
  <pf-tab title="Server" hidden>
    Server
  </pf-tab>
  <pf-tab>
    <template #title>System</template>
    System
  </pf-tab>
  <pf-tab title="Network">
    Network
  </pf-tab>
</pf-tabs>`},{default:e(()=>[t(c,null,{default:e(()=>[t(n,{title:"Users"},{default:e(()=>[U]),_:1}),t(n,{title:"Containers"},{default:e(()=>[N]),_:1}),t(n,{title:"Database"},{default:e(()=>[I]),_:1}),t(n,{title:"Server",hidden:""},{default:e(()=>[V]),_:1}),t(n,null,{title:e(()=>[$]),default:e(()=>[j]),_:1}),t(n,{title:"Network"},{default:e(()=>[B]),_:1})]),_:1})]),_:1}),t(f,{title:"Icons and text",source:`<pf-tabs>
  <pf-tab>
    <template #title>
      <pf-tab-title-icon><users-icon /></pf-tab-title-icon>
      <pf-tab-title-text>Users</pf-tab-title-text>
    </template>
    Users
  </pf-tab>
  <pf-tab key="containers-tab">
    <template #title>
      <pf-tab-title-icon><box-icon /></pf-tab-title-icon>
      <pf-tab-title-text>Containers</pf-tab-title-text>
    </template>
    Containers
  </pf-tab>
  <pf-tab disabled>
    <template #title>
      <pf-tab-title-icon><database-icon /></pf-tab-title-icon>
      <pf-tab-title-text>Database</pf-tab-title-text>
    </template>
    Database
  </pf-tab>
  <pf-tab>
    <template #title>
      <pf-tab-title-icon><server-icon /></pf-tab-title-icon>
      <pf-tab-title-text>Server</pf-tab-title-text>
    </template>
    Server
  </pf-tab>
  <pf-tab>
    <template #title>
      <pf-tab-title-icon><laptop-icon /></pf-tab-title-icon>
      <pf-tab-title-text>System</pf-tab-title-text>
    </template>
    System
  </pf-tab>
  <pf-tab>
    <template #title>
      <pf-tab-title-icon><project-diagram-icon /></pf-tab-title-icon>
      <pf-tab-title-text>Network</pf-tab-title-text>
    </template>
    Network
  </pf-tab>
</pf-tabs>`},{default:e(()=>[t(c,null,{default:e(()=>[t(n,null,{title:e(()=>[t(i,null,{default:e(()=>[t(b(u))]),_:1}),t(l,null,{default:e(()=>[P]),_:1})]),default:e(()=>[z]),_:1}),t(n,{key:"containers-tab"},{title:e(()=>[t(i,null,{default:e(()=>[t(b(m))]),_:1}),t(l,null,{default:e(()=>[H]),_:1})]),default:e(()=>[L]),_:1}),t(n,{disabled:""},{title:e(()=>[t(i,null,{default:e(()=>[t(b(h))]),_:1}),t(l,null,{default:e(()=>[M]),_:1})]),default:e(()=>[O]),_:1}),t(n,null,{title:e(()=>[t(i,null,{default:e(()=>[t(b(y))]),_:1}),t(l,null,{default:e(()=>[F]),_:1})]),default:e(()=>[Y]),_:1}),t(n,null,{title:e(()=>[t(i,null,{default:e(()=>[t(b(S))]),_:1}),t(l,null,{default:e(()=>[q]),_:1})]),default:e(()=>[A]),_:1}),t(n,null,{title:e(()=>[t(i,null,{default:e(()=>[t(b(k))]),_:1}),t(l,null,{default:e(()=>[E]),_:1})]),default:e(()=>[G]),_:1})]),_:1})]),_:1}),t(f,{title:"Tabs with sub tabs",source:`<pf-tabs>
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
</pf-tabs>`},{default:e(()=>[t(c,null,{default:e(()=>[t(n,{title:"Users"},{default:e(()=>[t(c,{secondary:"","default-active-key":"1"},{default:e(()=>[t(n,{title:"Secondary tab item 1"},{default:e(()=>[J]),_:1}),t(n,{title:"Secondary tab item 2"},{default:e(()=>[K]),_:1}),t(n,{title:"Secondary tab item 3"},{default:e(()=>[Q]),_:1}),t(n,{title:"Secondary tab item 4"},{default:e(()=>[R]),_:1}),t(n,{disabled:"",title:"Secondary tab item 5"},{default:e(()=>[W]),_:1}),t(n,{disabled:"",title:"Secondary tab item 6"},{default:e(()=>[X]),_:1}),t(n,{title:"Secondary tab item 7"},{default:e(()=>[Z]),_:1}),t(n,{title:"Secondary tab item 8"},{default:e(()=>[tt]),_:1}),t(n,{title:"Secondary tab item 9"},{default:e(()=>[et]),_:1}),t(n,{title:"Secondary tab item 10"},{default:e(()=>[at]),_:1}),t(n,{title:"Secondary tab item 11"},{default:e(()=>[nt]),_:1})]),_:1})]),_:1}),t(n,{title:"Containers"},{default:e(()=>[ot]),_:1}),t(n,{disabled:"",title:"Database"},{default:e(()=>[st]),_:1}),t(n,{title:"Server"},{default:e(()=>[it]),_:1}),t(n,{title:"System"},{default:e(()=>[lt]),_:1}),t(n,{title:"Network"},{default:e(()=>[bt]),_:1}),t(n,{title:"Tab item 7"},{default:e(()=>[ct]),_:1}),t(n,{title:"Tab item 8"},{default:e(()=>[ft]),_:1}),t(n,{title:"Tab item 9"},{default:e(()=>[rt]),_:1}),t(n,{title:"Tab item 10"},{default:e(()=>[dt]),_:1}),t(n,{title:"Tab item 11"},{default:e(()=>[pt]),_:1})]),_:1})]),_:1}),t(f,{title:"Separate content",source:`<pf-tabs>
  <pf-tab title="Users" :content-ref="$refs.tabUsers" />
  <pf-tab title="Containers" :content-ref="$refs.tabContainers" />
  <pf-tab title="Database" :content-ref="$refs.tabDatabase" />
  <pf-tab title="Server" hidden>
    Server
  </pf-tab>
  <pf-tab title="Network">
    Network
  </pf-tab>
</pf-tabs>
<pf-tab-content ref="tabUsers">Users section</pf-tab-content>
<pf-tab-content ref="tabContainers">Containers section</pf-tab-content>
<pf-tab-content ref="tabDatabase">Database section</pf-tab-content>`},{default:e(()=>[t(c,null,{default:e(()=>[t(n,{title:"Users","content-ref":r.$refs.tabUsers},null,8,["content-ref"]),t(n,{title:"Containers","content-ref":r.$refs.tabContainers},null,8,["content-ref"]),t(n,{title:"Database","content-ref":r.$refs.tabDatabase},null,8,["content-ref"]),t(n,{title:"Server",hidden:""},{default:e(()=>[_t]),_:1}),t(n,{title:"Network"},{default:e(()=>[ut]),_:1})]),_:1}),t(d,{ref:"tabUsers"},{default:e(()=>[mt]),_:1},512),t(d,{ref:"tabContainers"},{default:e(()=>[ht]),_:1},512),t(d,{ref:"tabDatabase"},{default:e(()=>[yt]),_:1},512)]),_:1})]),_:1})}}});export{Tt as default};
