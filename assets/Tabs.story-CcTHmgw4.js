import{f as h,r as p,x,o as v,i as w,d as o,t as k,b as e,w as t,a,F as q,e as s,m as D,c as C,u as c}from"./index-iCE0l_cI.js";import{U as N,B as I,D as U,S as O,L as V}from"./laptop-icon-C9-TYm8C.js";const A=h({inheritAttrs:!1,__name:"KeepAliveTest",setup(S){const b=p(0);return x(()=>console.log("KeepAliveTest mounted")),(u,f)=>{const _=s("pf-button");return v(),w(q,null,[o("div",null," Counter: "+k(b.value),1),e(_,{onClick:f[0]||(f[0]=T=>b.value++)},{default:t(()=>[a("Increment counter")]),_:1})],64)}}}),B={name:"DiagramProjectIcon",height:512,width:576,svgPath:"M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48V96H384V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H432c-26.5 0-48-21.5-48-48V160H192v16c0 1.7-.1 3.4-.3 5L272 288h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V336c0-1.7 .1-3.4 .3-5L144 224H48c-26.5 0-48-21.5-48-48V80z",yOffset:0,xOffset:0},P=D(B),L=P,F=o("b",null,"Tabs",-1),E=o("div",{class:"markdown pf-v5-c-content"},[o("h2",{class:"pf-v5-c-title"},"Usage"),o("p",null,"PatternFly offers a few types of tabs:"),o("ul",null,[o("li",null,"Default tabs (recommended)"),o("li",null,"Boxed tabs"),o("li",null,"Vertical tabs")]),o("p",null,"You can use as many tabs as you want in a page, although it is recommended you keep the total number of tabs to a minimum for a better user experience. If you have more tabs than fit on the page, you may use a default overflow which would allow a user to horizontal scroll through your tabs. The uses of both default and boxed stylings are flexible, so use either according to your needs and preferences."),o("h2",{class:"pf-v5-c-title"},"Examples")],-1),H=h({__name:"Tabs.story",setup(S){const b=p(),u=p(),f=p();return(_,T)=>{const i=s("component-info"),n=s("pf-tab"),d=s("pf-tabs"),m=s("story-canvas"),l=s("pf-tab-title-icon"),r=s("pf-tab-title-text"),y=s("pf-tab-content"),g=s("doc-page");return v(),C(g,{name:"Components/Tabs.story.vue",title:"Tabs"},{description:t(()=>[F,a(" allow users to navigate between views within the same page or context.")]),apidocs:t(()=>[e(i,{src:"packages/core/src/components/Tabs/Tabs.vue",doc:{name:"PfTabs",exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"insetXl2",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'}]}},{name:"insetXl",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'}]}},{name:"insetLg",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'}]}},{name:"insetMd",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'}]}},{name:"insetSm",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'}]}},{name:"inset",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'}]}},{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"id",required:!1,type:{name:"string"}},{name:"variant",description:"Tabs background color variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"light300"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"activeKey",description:"The index of the active tab",required:!1,type:{name:"TabKey"}},{name:"defaultActiveKey",description:"The index of the default active tab. Set this for uncontrolled Tabs",required:!1,type:{name:"TabKey"}},{name:"filled",description:"Enables the filled tab list layout",required:!1,type:{name:"boolean"}},{name:"secondary",description:"Enables secondary tab styling",required:!1,type:{name:"boolean"}},{name:"box",description:"Enables box styling to the tab component",required:!1,type:{name:"boolean"}},{name:"vertical",description:"Enables vertical tab styling",required:!1,type:{name:"boolean"}},{name:"noBorderBottom",description:"Disables border bottom tab styling on tabs. Defaults to false. To remove the bottom border, set this prop to true.",required:!1,type:{name:"boolean"}},{name:"leftScrollAriaLabel",description:"Aria-label for the left scroll button",required:!1,type:{name:"string"}},{name:"rightScrollAriaLabel",description:"Aria-label for the right scroll button",required:!1,type:{name:"string"}},{name:"component",description:'Determines what tag is used around the tabs. Use "nav" to define the tabs inside a navigation region',required:!1,type:{name:"union",elements:[{name:'"div"'},{name:'"nav"'}]},defaultValue:{func:!1,value:"'div'"}},{name:"ariaLabel",description:"Provides an accessible label for the tabs. Labels should be unique for each set of tabs that are present on a page. When component is set to nav, this prop should be defined to differentiate the tabs from other navigation regions on the page.",required:!1,type:{name:"string"}},{name:"mountOnEnter",description:'Waits until the first "enter" transition to mount tab children (add them to the DOM)',required:!1,type:{name:"boolean"}},{name:"unmountOnExit",description:"Unmounts tab children (removes them from the DOM) when they are no longer visible",required:!1,type:{name:"boolean"}},{name:"pageInsets",description:"Flag indicates that the tabs should use page insets.",required:!1,type:{name:"boolean"}}],events:[{name:"update:activeKey",type:{names:["TabKey"]}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Tabs/Tabs.vue"]}},null,8,["doc"]),e(i,{src:"packages/core/src/components/Tabs/Tab.vue"}),e(i,{src:"packages/core/src/components/Tabs/TabButton.vue",doc:{name:"PfTabButton",exportName:"default",displayName:"TabButton",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"href",description:'URL associated with the Tab. A Tab with an href will render as an <a> instead of a <button>. A Tab inside a <Tabs component="nav"> should have an href.',required:!1,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Tabs/TabButton.vue"]}},null,8,["doc"]),e(i,{src:"packages/core/src/components/Tabs/TabContent.vue",doc:{name:"PfTabContent",exportName:"default",displayName:"TabContent",description:"",tags:{},expose:[{name:"hidden"}],props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Tabs/TabContent.vue"]}},null,8,["doc"]),e(i,{src:"packages/core/src/components/Tabs/TabTitleIcon.vue",doc:{name:"PfTabTitleIcon",exportName:"default",displayName:"TabTitleIcon",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Tabs/TabTitleIcon.vue"]}},null,8,["doc"]),e(i,{src:"packages/core/src/components/Tabs/TabTitleText.vue",doc:{name:"PfTabTitleText",exportName:"default",displayName:"TabTitleText",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Tabs/TabTitleText.vue"]}},null,8,["doc"])]),default:t(()=>[E,e(m,{title:"Default",source:`<pf-tabs>
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
    <keep-alive-test />
  </pf-tab>
  <pf-tab>
    <template #title>System</template>
    System
  </pf-tab>
  <pf-tab title="Network">
    Network
  </pf-tab>
</pf-tabs>`},{default:t(()=>[e(d,null,{default:t(()=>[e(n,{title:"Users"},{default:t(()=>[a(" Users ")]),_:1}),e(n,{title:"Containers"},{default:t(()=>[a(" Containers ")]),_:1}),e(n,{title:"Database"},{default:t(()=>[a(" Database ")]),_:1}),e(n,{title:"Server","mount-on-enter":"","unmount-on-exit":""},{default:t(()=>[a(" Server "),e(A)]),_:1}),e(n,null,{title:t(()=>[a("System")]),default:t(()=>[a(" System ")]),_:1}),e(n,{title:"Network"},{default:t(()=>[a(" Network ")]),_:1})]),_:1})]),_:1}),e(m,{title:"Icons and text",source:`<pf-tabs>
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
      <pf-tab-title-icon><diagram-project-icon /></pf-tab-title-icon>
      <pf-tab-title-text>Network</pf-tab-title-text>
    </template>
    Network
  </pf-tab>
</pf-tabs>`},{default:t(()=>[e(d,null,{default:t(()=>[e(n,null,{title:t(()=>[e(l,null,{default:t(()=>[e(c(N))]),_:1}),e(r,null,{default:t(()=>[a("Users")]),_:1})]),default:t(()=>[a(" Users ")]),_:1}),e(n,{key:"containers-tab"},{title:t(()=>[e(l,null,{default:t(()=>[e(c(I))]),_:1}),e(r,null,{default:t(()=>[a("Containers")]),_:1})]),default:t(()=>[a(" Containers ")]),_:1}),e(n,{disabled:""},{title:t(()=>[e(l,null,{default:t(()=>[e(c(U))]),_:1}),e(r,null,{default:t(()=>[a("Database")]),_:1})]),default:t(()=>[a(" Database ")]),_:1}),e(n,null,{title:t(()=>[e(l,null,{default:t(()=>[e(c(O))]),_:1}),e(r,null,{default:t(()=>[a("Server")]),_:1})]),default:t(()=>[a(" Server ")]),_:1}),e(n,null,{title:t(()=>[e(l,null,{default:t(()=>[e(c(V))]),_:1}),e(r,null,{default:t(()=>[a("System")]),_:1})]),default:t(()=>[a(" System ")]),_:1}),e(n,null,{title:t(()=>[e(l,null,{default:t(()=>[e(c(L))]),_:1}),e(r,null,{default:t(()=>[a("Network")]),_:1})]),default:t(()=>[a(" Network ")]),_:1})]),_:1})]),_:1}),e(m,{title:"Tabs with sub tabs",source:`<pf-tabs>
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
</pf-tabs>`},{default:t(()=>[e(d,null,{default:t(()=>[e(n,{title:"Users"},{default:t(()=>[e(d,{secondary:"","default-active-key":"1"},{default:t(()=>[e(n,{title:"Secondary tab item 1"},{default:t(()=>[a(" Secondary tab section 1 ")]),_:1}),e(n,{title:"Secondary tab item 2"},{default:t(()=>[a(" Secondary tab section 2 ")]),_:1}),e(n,{title:"Secondary tab item 3"},{default:t(()=>[a(" Secondary tab section 3 ")]),_:1}),e(n,{title:"Secondary tab item 4"},{default:t(()=>[a(" Secondary tab section 4 ")]),_:1}),e(n,{disabled:"",title:"Secondary tab item 5"},{default:t(()=>[a(" Secondary tab section 5 ")]),_:1}),e(n,{disabled:"",title:"Secondary tab item 6"},{default:t(()=>[a(" Secondary tab section 6 ")]),_:1}),e(n,{title:"Secondary tab item 7"},{default:t(()=>[a(" Secondary tab section 7 ")]),_:1}),e(n,{title:"Secondary tab item 8"},{default:t(()=>[a(" Secondary tab section 8 ")]),_:1}),e(n,{title:"Secondary tab item 9"},{default:t(()=>[a(" Secondary tab section 9 ")]),_:1}),e(n,{title:"Secondary tab item 10"},{default:t(()=>[a(" Secondary tab section 10 ")]),_:1}),e(n,{title:"Secondary tab item 11"},{default:t(()=>[a(" Secondary tab section 11 ")]),_:1})]),_:1})]),_:1}),e(n,{title:"Containers"},{default:t(()=>[a(" Containers ")]),_:1}),e(n,{disabled:"",title:"Database"},{default:t(()=>[a(" Database ")]),_:1}),e(n,{title:"Server"},{default:t(()=>[a(" Server ")]),_:1}),e(n,{title:"System"},{default:t(()=>[a(" System ")]),_:1}),e(n,{title:"Network"},{default:t(()=>[a(" Network ")]),_:1}),e(n,{title:"Tab item 7"},{default:t(()=>[a(" Tab section 7 ")]),_:1}),e(n,{title:"Tab item 8"},{default:t(()=>[a(" Tab section 8 ")]),_:1}),e(n,{title:"Tab item 9"},{default:t(()=>[a(" Tab section 9 ")]),_:1}),e(n,{title:"Tab item 10"},{default:t(()=>[a(" Tab section 10 ")]),_:1}),e(n,{title:"Tab item 11"},{default:t(()=>[a(" Tab section 11 ")]),_:1})]),_:1})]),_:1}),e(m,{title:"Separate content",source:`<pf-tabs>
  <pf-tab title="Users" :content-ref="tabUsers" />
  <pf-tab title="Containers" :content-ref="tabContainers" />
  <pf-tab title="Database" :content-ref="tabDatabase" />
  <pf-tab title="Server">
    Server
  </pf-tab>
  <pf-tab title="Network">
    Network
  </pf-tab>
</pf-tabs>
<pf-tab-content ref="tabUsers">Users section</pf-tab-content>
<pf-tab-content ref="tabContainers">Containers section</pf-tab-content>
<pf-tab-content ref="tabDatabase">Database section</pf-tab-content>`},{default:t(()=>[e(d,null,{default:t(()=>[e(n,{title:"Users","content-ref":b.value},null,8,["content-ref"]),e(n,{title:"Containers","content-ref":u.value},null,8,["content-ref"]),e(n,{title:"Database","content-ref":f.value},null,8,["content-ref"]),e(n,{title:"Server"},{default:t(()=>[a(" Server ")]),_:1}),e(n,{title:"Network"},{default:t(()=>[a(" Network ")]),_:1})]),_:1}),e(y,{ref_key:"tabUsers",ref:b},{default:t(()=>[a("Users section")]),_:1},512),e(y,{ref_key:"tabContainers",ref:u},{default:t(()=>[a("Containers section")]),_:1},512),e(y,{ref_key:"tabDatabase",ref:f},{default:t(()=>[a("Database section")]),_:1},512)]),_:1})]),_:1},8,["name"])}}});export{H as default};
