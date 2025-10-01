import{g as T,r as u,s as q,v as D,j as C,o as g,t as I,f as N,a as i,c as U,w as a,d as s,b as t,e as n,u as f}from"./index-m4DBuZQx.js";import{U as O,B as _,D as A,S as B,L as V}from"./laptop-icon-Crq8u9I_.js";const S=T({inheritAttrs:!1,__name:"KeepAliveTest",setup(x){const d=u(0),m=u();return q(()=>m.value=setInterval(()=>d.value++,1e3)),D(()=>clearInterval(m.value)),(y,w)=>(g(),C("div",null,"Time alive: "+I(d.value)+"s",1))}}),L={name:"DiagramProjectIcon",height:512,width:576,svgPath:"M0 80C0 53.5 21.5 32 48 32l96 0c26.5 0 48 21.5 48 48l0 16 192 0 0-16c0-26.5 21.5-48 48-48l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-16-192 0 0 16c0 1.7-.1 3.4-.3 5L272 288l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96c0-1.7 .1-3.4 .3-5L144 224l-96 0c-26.5 0-48-21.5-48-48L0 80z",yOffset:0,xOffset:0},P=N(L),F=T({__name:"Tabs.story",setup(x){const d=u(),m=u(),y=u();return(w,e)=>{const r=i("component-info"),o=i("pf-tab"),l=i("pf-tab-title-text"),p=i("pf-tabs"),c=i("story-canvas"),b=i("pf-tab-title-icon"),v=i("pf-tab-content"),k=i("doc-page");return g(),U(k,{name:"Components/Tabs.story.vue",title:"Tabs"},{description:a(()=>[...e[0]||(e[0]=[s("b",null,"Tabs",-1),n(" allow users to navigate between views within the same page or context.",-1)])]),apidocs:a(()=>[t(r,{src:"packages/core/src/components/Tabs/Tabs.vue",doc:{name:"PfTabs",exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"inset2xl",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'}]}},{name:"insetXl",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'}]}},{name:"insetLg",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'}]}},{name:"insetMd",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'}]}},{name:"insetSm",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'}]}},{name:"inset",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'}]}},{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"id",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"() => useId()"}},{name:"variant",description:"Tabs background color variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"light300"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"defaultActiveKey",description:"The index of the default active tab. Set this for uncontrolled Tabs",required:!1,type:{name:"TabKey"}},{name:"filled",description:"Enables the filled tab list layout",required:!1,type:{name:"boolean"}},{name:"secondary",description:"Enables secondary tab styling",required:!1,type:{name:"boolean"}},{name:"box",description:"Enables box styling to the tab component",required:!1,type:{name:"boolean"}},{name:"vertical",description:"Enables vertical tab styling",required:!1,type:{name:"boolean"}},{name:"noBorderBottom",description:"Disables border bottom tab styling on tabs. Defaults to false. To remove the bottom border, set this prop to true.",required:!1,type:{name:"boolean"}},{name:"leftScrollAriaLabel",description:"Aria-label for the left scroll button",required:!1,type:{name:"string"}},{name:"rightScrollAriaLabel",description:"Aria-label for the right scroll button",required:!1,type:{name:"string"}},{name:"component",description:'Determines what tag is used around the tabs. Use "nav" to define the tabs inside a navigation region',required:!1,type:{name:"union",elements:[{name:'"div"'},{name:'"nav"'}]},defaultValue:{func:!1,value:"'div'"}},{name:"ariaLabel",description:"Provides an accessible label for the tabs. Labels should be unique for each set of tabs that are present on a page. When component is set to nav, this prop should be defined to differentiate the tabs from other navigation regions on the page.",required:!1,type:{name:"string"}},{name:"mountOnEnter",description:'Waits until the first "enter" transition to mount tab children (add them to the DOM)',required:!1,type:{name:"boolean"}},{name:"unmountOnExit",description:"Unmounts tab children (removes them from the DOM) when they are no longer visible",required:!1,type:{name:"boolean"}},{name:"pageInsets",description:"Flag indicates that the tabs should use page insets.",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Tabs/Tabs.vue"]}}),t(r,{src:"packages/core/src/components/Tabs/Tab.vue"}),t(r,{src:"packages/core/src/components/Tabs/TabButton.vue",doc:{name:"PfTabButton",exportName:"default",displayName:"TabButton",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"href",description:'URL associated with the Tab. A Tab with an href will render as an <a> instead of a <button>. A Tab inside a <Tabs component="nav"> should have an href.',required:!1,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Tabs/TabButton.vue"]}}),t(r,{src:"packages/core/src/components/Tabs/TabContent.vue",doc:{name:"PfTabContent",exportName:"default",displayName:"TabContent",description:"",tags:{},expose:[{name:"hidden"}],props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Tabs/TabContent.vue"]}}),t(r,{src:"packages/core/src/components/Tabs/TabTitleIcon.vue",doc:{name:"PfTabTitleIcon",exportName:"default",displayName:"TabTitleIcon",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Tabs/TabTitleIcon.vue"]}}),t(r,{src:"packages/core/src/components/Tabs/TabTitleText.vue",doc:{name:"PfTabTitleText",exportName:"default",displayName:"TabTitleText",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Tabs/TabTitleText.vue"]}})]),default:a(()=>[e[46]||(e[46]=s("div",{class:"markdown pf-v5-c-content"},[s("h2",{class:"pf-v5-c-title"},"Usage"),s("p",null,"PatternFly offers a few types of tabs:"),s("ul",null,[s("li",null,"Default tabs (recommended)"),s("li",null,"Boxed tabs"),s("li",null,"Vertical tabs")]),s("p",null,"You can use as many tabs as you want in a page, although it is recommended you keep the total number of tabs to a minimum for a better user experience. If you have more tabs than fit on the page, you may use a default overflow which would allow a user to horizontal scroll through your tabs. The uses of both default and boxed stylings are flexible, so use either according to your needs and preferences."),s("h2",{class:"pf-v5-c-title"},"Examples")],-1)),t(c,{title:"Default",source:`<pf-tabs>
  <pf-tab title="Users"> Users </pf-tab>
  <pf-tab title="Containers" mount-on-enter>
    Containers
    <keep-alive-test />
  </pf-tab>
  <pf-tab title="Database"> Database </pf-tab>
  <pf-tab title="Server" mount-on-enter unmount-on-exit>
    Server
    <keep-alive-test />
  </pf-tab>
  <pf-tab>
    <template #title>
      <pf-tab-title-text>System</pf-tab-title-text>
    </template>
    System
    <keep-alive-test />
  </pf-tab>
  <pf-tab title="Network"> Network </pf-tab>
</pf-tabs>`},{default:a(()=>[t(p,null,{default:a(()=>[t(o,{title:"Users"},{default:a(()=>[...e[1]||(e[1]=[n(" Users ",-1)])]),_:1}),t(o,{title:"Containers","mount-on-enter":""},{default:a(()=>[e[2]||(e[2]=n(" Containers ",-1)),t(S)]),_:1}),t(o,{title:"Database"},{default:a(()=>[...e[3]||(e[3]=[n(" Database ",-1)])]),_:1}),t(o,{title:"Server","mount-on-enter":"","unmount-on-exit":""},{default:a(()=>[e[4]||(e[4]=n(" Server ",-1)),t(S)]),_:1}),t(o,null,{title:a(()=>[t(l,null,{default:a(()=>[...e[5]||(e[5]=[n("System",-1)])]),_:1})]),default:a(()=>[e[6]||(e[6]=n(" System ",-1)),t(S)]),_:1}),t(o,{title:"Network"},{default:a(()=>[...e[7]||(e[7]=[n(" Network ",-1)])]),_:1})]),_:1})]),_:1}),t(c,{title:"Icons and text",source:`<pf-tabs>
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
</pf-tabs>`},{default:a(()=>[t(p,null,{default:a(()=>[t(o,null,{title:a(()=>[t(b,null,{default:a(()=>[t(f(O))]),_:1}),t(l,null,{default:a(()=>[...e[8]||(e[8]=[n("Users",-1)])]),_:1})]),default:a(()=>[e[9]||(e[9]=n(" Users ",-1))]),_:1}),t(o,{key:"containers-tab"},{title:a(()=>[t(b,null,{default:a(()=>[t(f(_))]),_:1}),t(l,null,{default:a(()=>[...e[10]||(e[10]=[n("Containers",-1)])]),_:1})]),default:a(()=>[e[11]||(e[11]=n(" Containers ",-1))]),_:1}),t(o,{disabled:""},{title:a(()=>[t(b,null,{default:a(()=>[t(f(A))]),_:1}),t(l,null,{default:a(()=>[...e[12]||(e[12]=[n("Database",-1)])]),_:1})]),default:a(()=>[e[13]||(e[13]=n(" Database ",-1))]),_:1}),t(o,null,{title:a(()=>[t(b,null,{default:a(()=>[t(f(B))]),_:1}),t(l,null,{default:a(()=>[...e[14]||(e[14]=[n("Server",-1)])]),_:1})]),default:a(()=>[e[15]||(e[15]=n(" Server ",-1))]),_:1}),t(o,null,{title:a(()=>[t(b,null,{default:a(()=>[t(f(V))]),_:1}),t(l,null,{default:a(()=>[...e[16]||(e[16]=[n("System",-1)])]),_:1})]),default:a(()=>[e[17]||(e[17]=n(" System ",-1))]),_:1}),t(o,null,{title:a(()=>[t(b,null,{default:a(()=>[t(f(P))]),_:1}),t(l,null,{default:a(()=>[...e[18]||(e[18]=[n("Network",-1)])]),_:1})]),default:a(()=>[e[19]||(e[19]=n(" Network ",-1))]),_:1})]),_:1})]),_:1}),t(c,{title:"Tabs with sub tabs",source:`<pf-tabs>
  <pf-tab title="Users">
    <pf-tabs secondary default-active-key="1">
      <pf-tab title="Secondary tab item 1"> Secondary tab section 1 </pf-tab>
      <pf-tab title="Secondary tab item 2"> Secondary tab section 2 </pf-tab>
      <pf-tab title="Secondary tab item 3"> Secondary tab section 3 </pf-tab>
      <pf-tab title="Secondary tab item 4"> Secondary tab section 4 </pf-tab>
      <pf-tab disabled title="Secondary tab item 5"> Secondary tab section 5 </pf-tab>
      <pf-tab disabled title="Secondary tab item 6"> Secondary tab section 6 </pf-tab>
      <pf-tab title="Secondary tab item 7"> Secondary tab section 7 </pf-tab>
      <pf-tab title="Secondary tab item 8"> Secondary tab section 8 </pf-tab>
      <pf-tab title="Secondary tab item 9"> Secondary tab section 9 </pf-tab>
      <pf-tab title="Secondary tab item 10"> Secondary tab section 10 </pf-tab>
      <pf-tab title="Secondary tab item 11"> Secondary tab section 11 </pf-tab>
    </pf-tabs>
  </pf-tab>
  <pf-tab title="Containers"> Containers </pf-tab>
  <pf-tab disabled title="Database"> Database </pf-tab>
  <pf-tab title="Server"> Server </pf-tab>
  <pf-tab title="System"> System </pf-tab>
  <pf-tab title="Network"> Network </pf-tab>
  <pf-tab title="Tab item 7"> Tab section 7 </pf-tab>
  <pf-tab title="Tab item 8"> Tab section 8 </pf-tab>
  <pf-tab title="Tab item 9"> Tab section 9 </pf-tab>
  <pf-tab title="Tab item 10"> Tab section 10 </pf-tab>
  <pf-tab title="Tab item 11"> Tab section 11 </pf-tab>
</pf-tabs>`},{default:a(()=>[t(p,null,{default:a(()=>[t(o,{title:"Users"},{default:a(()=>[t(p,{secondary:"","default-active-key":"1"},{default:a(()=>[t(o,{title:"Secondary tab item 1"},{default:a(()=>[...e[20]||(e[20]=[n(" Secondary tab section 1 ",-1)])]),_:1}),t(o,{title:"Secondary tab item 2"},{default:a(()=>[...e[21]||(e[21]=[n(" Secondary tab section 2 ",-1)])]),_:1}),t(o,{title:"Secondary tab item 3"},{default:a(()=>[...e[22]||(e[22]=[n(" Secondary tab section 3 ",-1)])]),_:1}),t(o,{title:"Secondary tab item 4"},{default:a(()=>[...e[23]||(e[23]=[n(" Secondary tab section 4 ",-1)])]),_:1}),t(o,{disabled:"",title:"Secondary tab item 5"},{default:a(()=>[...e[24]||(e[24]=[n(" Secondary tab section 5 ",-1)])]),_:1}),t(o,{disabled:"",title:"Secondary tab item 6"},{default:a(()=>[...e[25]||(e[25]=[n(" Secondary tab section 6 ",-1)])]),_:1}),t(o,{title:"Secondary tab item 7"},{default:a(()=>[...e[26]||(e[26]=[n(" Secondary tab section 7 ",-1)])]),_:1}),t(o,{title:"Secondary tab item 8"},{default:a(()=>[...e[27]||(e[27]=[n(" Secondary tab section 8 ",-1)])]),_:1}),t(o,{title:"Secondary tab item 9"},{default:a(()=>[...e[28]||(e[28]=[n(" Secondary tab section 9 ",-1)])]),_:1}),t(o,{title:"Secondary tab item 10"},{default:a(()=>[...e[29]||(e[29]=[n(" Secondary tab section 10 ",-1)])]),_:1}),t(o,{title:"Secondary tab item 11"},{default:a(()=>[...e[30]||(e[30]=[n(" Secondary tab section 11 ",-1)])]),_:1})]),_:1})]),_:1}),t(o,{title:"Containers"},{default:a(()=>[...e[31]||(e[31]=[n(" Containers ",-1)])]),_:1}),t(o,{disabled:"",title:"Database"},{default:a(()=>[...e[32]||(e[32]=[n(" Database ",-1)])]),_:1}),t(o,{title:"Server"},{default:a(()=>[...e[33]||(e[33]=[n(" Server ",-1)])]),_:1}),t(o,{title:"System"},{default:a(()=>[...e[34]||(e[34]=[n(" System ",-1)])]),_:1}),t(o,{title:"Network"},{default:a(()=>[...e[35]||(e[35]=[n(" Network ",-1)])]),_:1}),t(o,{title:"Tab item 7"},{default:a(()=>[...e[36]||(e[36]=[n(" Tab section 7 ",-1)])]),_:1}),t(o,{title:"Tab item 8"},{default:a(()=>[...e[37]||(e[37]=[n(" Tab section 8 ",-1)])]),_:1}),t(o,{title:"Tab item 9"},{default:a(()=>[...e[38]||(e[38]=[n(" Tab section 9 ",-1)])]),_:1}),t(o,{title:"Tab item 10"},{default:a(()=>[...e[39]||(e[39]=[n(" Tab section 10 ",-1)])]),_:1}),t(o,{title:"Tab item 11"},{default:a(()=>[...e[40]||(e[40]=[n(" Tab section 11 ",-1)])]),_:1})]),_:1})]),_:1}),t(c,{title:"Separate content",source:`<pf-tabs>
  <pf-tab title="Users" :content-ref="tabUsers" />
  <pf-tab title="Containers" :content-ref="tabContainers" />
  <pf-tab title="Database" :content-ref="tabDatabase" />
  <pf-tab title="Server"> Server </pf-tab>
  <pf-tab title="Network"> Network </pf-tab>
</pf-tabs>
<pf-tab-content ref="tabUsers">Users section</pf-tab-content>
<pf-tab-content ref="tabContainers">Containers section</pf-tab-content>
<pf-tab-content ref="tabDatabase">Database section</pf-tab-content>`},{default:a(()=>[t(p,null,{default:a(()=>[t(o,{title:"Users","content-ref":d.value},null,8,["content-ref"]),t(o,{title:"Containers","content-ref":m.value},null,8,["content-ref"]),t(o,{title:"Database","content-ref":y.value},null,8,["content-ref"]),t(o,{title:"Server"},{default:a(()=>[...e[41]||(e[41]=[n(" Server ",-1)])]),_:1}),t(o,{title:"Network"},{default:a(()=>[...e[42]||(e[42]=[n(" Network ",-1)])]),_:1})]),_:1}),t(v,{ref_key:"tabUsers",ref:d},{default:a(()=>[...e[43]||(e[43]=[n("Users section",-1)])]),_:1},512),t(v,{ref_key:"tabContainers",ref:m},{default:a(()=>[...e[44]||(e[44]=[n("Containers section",-1)])]),_:1},512),t(v,{ref_key:"tabDatabase",ref:y},{default:a(()=>[...e[45]||(e[45]=[n("Database section",-1)])]),_:1},512)]),_:1})]),_:1})}}});export{F as default};
