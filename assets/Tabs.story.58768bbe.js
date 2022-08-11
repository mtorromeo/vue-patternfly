import{U as u,B as m,D as y,S as h,L as S}from"./laptop-icon.2bc2a95f.js";import{c as C}from"./createIcon.5cfab69a.js";import{e as w,a as s,c as v,w as e,o as D,b as t,u as b,d as o,j as a}from"./index.d06ccf2e.js";const g={name:"DiagramProjectIcon",height:512,width:576,svgPath:"M0 80C0 53.49 21.49 32 48 32H144C170.5 32 192 53.49 192 80V96H384V80C384 53.49 405.5 32 432 32H528C554.5 32 576 53.49 576 80V176C576 202.5 554.5 224 528 224H432C405.5 224 384 202.5 384 176V160H192V176C192 177.7 191.9 179.4 191.7 180.1L272 288H368C394.5 288 416 309.5 416 336V432C416 458.5 394.5 480 368 480H272C245.5 480 224 458.5 224 432V336C224 334.3 224.1 332.6 224.3 331L144 224H48C21.49 224 0 202.5 0 176V80z",yOffset:0,xOffset:0},T=C(g),x=T,k=o("div",{class:"markdown pf-c-content"},[o("p",null,[o("strong",null,"Tabs"),a(" allow users to navigate between views within the same page or context.")]),o("h2",{class:"pf-c-title"},"Usage"),o("p",null,"PatternFly offers a few types of tabs:"),o("ul",null,[o("li",null,"Default tabs (recommended)"),o("li",null,"Boxed tabs"),o("li",null,"Vertical tabs")]),o("p",null,"You can use as many tabs as you want in a page, although it is recommended you keep the total number of tabs to a minimum for a better user experience. If you have more tabs than fit on the page, you may use a default overflow which would allow a user to horizontal scroll through your tabs. The uses of both default and boxed stylings are flexible, so use either according to your needs and preferences."),o("p",null,[a("See full "),o("a",{href:"https://www.patternfly.org/v4/components/tabs/design-guidelines"},"Design guidelines"),a(" on the official patternfly documentation.")])],-1),U=a(" Users "),N=a(" Containers "),I=a(" Database "),V=a(" Server "),H=a("System"),j=a(" System "),$=a(" Network "),B=a("Users"),P=a(" Users "),L=a("Containers"),z=a(" Containers "),O=a("Database"),F=a(" Database "),M=a("Server"),Y=a(" Server "),q=a("System"),A=a(" System "),E=a("Network"),G=a(" Network "),J=a(" Secondary tab section 1 "),K=a(" Secondary tab section 2 "),Q=a(" Secondary tab section 3 "),R=a(" Secondary tab section 4 "),W=a(" Secondary tab section 5 "),X=a(" Secondary tab section 6 "),Z=a(" Secondary tab section 7 "),tt=a(" Secondary tab section 8 "),et=a(" Secondary tab section 9 "),at=a(" Secondary tab section 10 "),nt=a(" Secondary tab section 11 "),ot=a(" Containers "),st=a(" Database "),it=a(" Server "),lt=a(" System "),bt=a(" Network "),ct=a(" Tab section 7 "),ft=a(" Tab section 8 "),rt=a(" Tab section 9 "),dt=a(" Tab section 10 "),pt=a(" Tab section 11 "),_t=a(" Server "),ut=a(" Network "),mt=a("Users section"),yt=a("Containers section"),ht=a("Database section"),gt=w({__name:"Tabs.story",setup(St){return(r,Ct)=>{const p=s("component-title"),n=s("pf-tab"),c=s("pf-tabs"),f=s("story-canvas"),i=s("pf-tab-title-icon"),l=s("pf-tab-title-text"),d=s("pf-tab-content"),_=s("doc-page");return D(),v(_,{title:"Tabs"},{default:e(()=>[t(p,{name:"pf-tabs"}),k,t(f,{title:"Default",source:`<pf-tabs>
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
</pf-tabs>`},{default:e(()=>[t(c,null,{default:e(()=>[t(n,{title:"Users"},{default:e(()=>[U]),_:1}),t(n,{title:"Containers"},{default:e(()=>[N]),_:1}),t(n,{title:"Database"},{default:e(()=>[I]),_:1}),t(n,{title:"Server",hidden:""},{default:e(()=>[V]),_:1}),t(n,null,{title:e(()=>[H]),default:e(()=>[j]),_:1}),t(n,{title:"Network"},{default:e(()=>[$]),_:1})]),_:1})]),_:1}),t(f,{title:"Icons and text",source:`<pf-tabs>
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
</pf-tabs>`},{default:e(()=>[t(c,null,{default:e(()=>[t(n,null,{title:e(()=>[t(i,null,{default:e(()=>[t(b(u))]),_:1}),t(l,null,{default:e(()=>[B]),_:1})]),default:e(()=>[P]),_:1}),t(n,{key:"containers-tab"},{title:e(()=>[t(i,null,{default:e(()=>[t(b(m))]),_:1}),t(l,null,{default:e(()=>[L]),_:1})]),default:e(()=>[z]),_:1}),t(n,{disabled:""},{title:e(()=>[t(i,null,{default:e(()=>[t(b(y))]),_:1}),t(l,null,{default:e(()=>[O]),_:1})]),default:e(()=>[F]),_:1}),t(n,null,{title:e(()=>[t(i,null,{default:e(()=>[t(b(h))]),_:1}),t(l,null,{default:e(()=>[M]),_:1})]),default:e(()=>[Y]),_:1}),t(n,null,{title:e(()=>[t(i,null,{default:e(()=>[t(b(S))]),_:1}),t(l,null,{default:e(()=>[q]),_:1})]),default:e(()=>[A]),_:1}),t(n,null,{title:e(()=>[t(i,null,{default:e(()=>[t(b(x))]),_:1}),t(l,null,{default:e(()=>[E]),_:1})]),default:e(()=>[G]),_:1})]),_:1})]),_:1}),t(f,{title:"Tabs with sub tabs",source:`<pf-tabs>
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
  <pf-tab title="Users" :content-ref="$refs.tabUsers" ></pf-tab>
  <pf-tab title="Containers" :content-ref="$refs.tabContainers" ></pf-tab>
  <pf-tab title="Database" :content-ref="$refs.tabDatabase" ></pf-tab>
  <pf-tab title="Server" hidden>
    Server
  </pf-tab>
  <pf-tab title="Network">
    Network
  </pf-tab>
</pf-tabs>
<pf-tab-content ref="tabUsers">Users section</pf-tab-content>
<pf-tab-content ref="tabContainers">Containers section</pf-tab-content>
<pf-tab-content ref="tabDatabase">Database section</pf-tab-content>`},{default:e(()=>[t(c,null,{default:e(()=>[t(n,{title:"Users","content-ref":r.$refs.tabUsers},null,8,["content-ref"]),t(n,{title:"Containers","content-ref":r.$refs.tabContainers},null,8,["content-ref"]),t(n,{title:"Database","content-ref":r.$refs.tabDatabase},null,8,["content-ref"]),t(n,{title:"Server",hidden:""},{default:e(()=>[_t]),_:1}),t(n,{title:"Network"},{default:e(()=>[ut]),_:1})]),_:1}),t(d,{ref:"tabUsers"},{default:e(()=>[mt]),_:1},512),t(d,{ref:"tabContainers"},{default:e(()=>[yt]),_:1},512),t(d,{ref:"tabDatabase"},{default:e(()=>[ht]),_:1},512)]),_:1})]),_:1})}}});export{gt as default};
