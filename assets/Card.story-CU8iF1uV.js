import{g as k,a as o,c as x,o as F,w as t,d as r,b as a,e as n,u as v}from"./index-C75S5Ora.js";const q=""+new URL("PF-HorizontalLogo-Color-Cbap-rZ-.svg",import.meta.url).href,S="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Logo'%3e%3cpath%20id='Rectangle-Copy-17'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M15.6522%200H40V24.3478H37.3913C25.3851%2024.3478%2015.6522%2014.6149%2015.6522%202.6087V0Z'%20fill='%230066CC'/%3e%3cpath%20id='Path-2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M40%200.869568L16.5217%2040H34.9367C37.7331%2040%2040%2037.7331%2040%2034.9367V0.869568Z'%20fill='url(%23paint0_linear_6460_7774)'/%3e%3cpath%20id='Path-2_2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M39.1304%209.53674e-06L-3.8147e-06%2023.4783V5.0633C-3.8147e-06%202.26692%202.26691%209.53674e-06%205.06329%209.53674e-06L39.1304%209.53674e-06Z'%20fill='url(%23paint1_linear_6460_7774)'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_6460_7774'%20x1='1613.04'%20y1='0.869504'%20x2='-337.034'%20y2='3251'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%232B9AF3'/%3e%3cstop%20offset='1'%20stop-color='%2373BCF7'%20stop-opacity='0.502213'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_6460_7774'%20x1='39.1305'%20y1='-1573.04'%20x2='-3211'%20y2='377.033'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%232B9AF3'/%3e%3cstop%20offset='1'%20stop-color='%2373BCF7'%20stop-opacity='0.502213'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",A=["src"],B=k({__name:"Card.story",setup(L){return(H,e)=>{const i=o("component-info"),p=o("pf-card-title"),l=o("pf-card-body"),u=o("pf-card-footer"),s=o("pf-card"),c=o("story-canvas"),C=o("pf-brand"),m=o("pf-menu-toggle"),d=o("pf-dropdown-item"),h=o("pf-divider"),b=o("pf-dropdown"),y=o("pf-checkbox"),g=o("pf-card-actions"),f=o("pf-card-header"),w=o("pf-card-expandable-content"),_=o("doc-page");return F(),x(_,{name:"Components/Card.story.vue",title:"Card"},{description:t(()=>[...e[0]||(e[0]=[n("A ",-1),r("b",null,"card",-1),n(" is a square or rectangular container that can contain any kind of content. Cards symbolize units of information, and each one acts as an entry point for users to access more details. For example, in dashboards and catalog views, cards function as a preview of a detailed page. Cards may also be used in data displays like card views, or for positioning content on a page.",-1)])]),apidocs:t(()=>[a(i,{src:"packages/core/src/components/Card/Card.vue",doc:{name:"PfCard",exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"component",description:"Content rendered inside the Card",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Component"}]},defaultValue:{func:!1,value:"'div'"}},{name:"compact",description:"Modifies the card to include compact styling. Should not be used with isLarge.",required:!1,type:{name:"boolean"}},{name:"selectable",description:"Modifies the card to include selectable styling",required:!1,type:{name:"boolean"}},{name:"selectableInput",description:"Flag indicating that the card should render a hidden input to make it selectable",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:'"hidden"'},{name:'"visible"'}]}},{name:"name",description:"Name of the optional hidden input that tracks the selected status",required:!1,type:{name:"string"}},{name:"clicked",description:`Flag indicating whether a card that is either only clickable or that is both clickable and selectable
is currently clicked and has clicked styling.`,required:!1,type:{name:"boolean"}},{name:"large",description:"Modifies the card to be large. Should not be used with isCompact.",required:!1,type:{name:"boolean"}},{name:"fullHeight",description:"Cause component to consume the available height of its container",required:!1,type:{name:"boolean"}},{name:"plain",description:"Modifies the card to include plain styling; this removes border and background",required:!1,type:{name:"boolean"}},{name:"expandable",description:"Modifies the card to be expandable",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Flag indicating that a clickable or selectable card is disabled.",required:!1,type:{name:"boolean"}},{name:"variant",description:"Card background color variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"secondary"'}]}},{name:"onClick",required:!1,type:{name:"TSFunctionType"}}],events:[{name:"change",type:{names:["Event"]}}],slots:[{name:"default"},{name:"icon"},{name:"badge"}],sourceFiles:["../../packages/core/src/components/Card/Card.vue"]}}),a(i,{src:"packages/core/src/components/Card/CardActions.vue",doc:{name:"PfCardActions",exportName:"default",displayName:"CardActions",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"noOffset",description:"Flag indicating that the actions have no offset.",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Card/CardActions.vue"]}}),a(i,{src:"packages/core/src/components/Card/CardExpandableContent.vue",doc:{name:"PfCardExpandableContent",exportName:"default",displayName:"CardExpandableContent",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"noOffset",description:"Flag indicating that the actions have no offset.",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Card/CardExpandableContent.vue"]}}),a(i,{src:"packages/core/src/components/Card/CardFooter.vue",doc:{name:"PfCardFooter",exportName:"default",displayName:"CardFooter",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"component",description:"Sets the base component to render.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Component"}]},defaultValue:{func:!1,value:"'div'"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Card/CardFooter.vue"]}}),a(i,{src:"packages/core/src/components/Card/CardHeader.vue",doc:{name:"PfCardHeader",exportName:"default",displayName:"CardHeader",description:"",tags:{},expose:[{name:"toggle"}],props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"toggleRightAligned",description:"Whether to right-align expandable toggle button",required:!1,type:{name:"boolean"}},{name:"toggleButtonAttrs",description:"Additional props for expandable toggle button",required:!1,type:{name:"ComponentProps",elements:[{name:"TSTypeQuery"}]},defaultValue:{func:!1,value:"() => ({})"}},{name:"wrap",description:"Flag indicating that header wrapping is enabled",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Card/CardHeader.vue"]}}),a(i,{src:"packages/core/src/components/Card/CardHeaderMain.vue",doc:{name:"PfCardHeaderMain",exportName:"default",displayName:"CardHeaderMain",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Card/CardHeaderMain.vue"]}}),a(i,{src:"packages/core/src/components/Card/CardTitle.vue",doc:{name:"PfCardTitle",exportName:"default",displayName:"CardTitle",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"component",description:"Sets the base component to render.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Component"}]},defaultValue:{func:!1,value:"'div'"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Card/CardTitle.vue"]}})]),default:t(()=>[e[35]||(e[35]=r("div",{class:"markdown pf-v6-c-content"},[r("h2",{class:"pf-v6-c-title"},"Differences from patternfly-react"),r("ul",null,[r("li",null,[n("The expanded state is controlled by "),r("code",null,"v-model:expanded"),n(" or managed internally with the prop "),r("code",null,"expandable"),n(". See "),r("a",{href:"#/"},"common differences from patternfly-react"),n(".")])]),r("h2",{class:"pf-v6-c-title"},"Examples")],-1)),a(c,{title:"Basic",source:`<pf-card>
  <pf-card-title>Header</pf-card-title>
  <pf-card-body>Body</pf-card-body>
  <pf-card-footer>Footer</pf-card-footer>
</pf-card>`},{default:t(()=>[a(s,null,{default:t(()=>[a(p,null,{default:t(()=>[...e[1]||(e[1]=[n("Header",-1)])]),_:1}),a(l,null,{default:t(()=>[...e[2]||(e[2]=[n("Body",-1)])]),_:1}),a(u,null,{default:t(()=>[...e[3]||(e[3]=[n("Footer",-1)])]),_:1})]),_:1})]),_:1}),a(c,{title:"Secondary",source:`<pf-card variant="secondary">
  <pf-card-title>Header</pf-card-title>
  <pf-card-body>Body</pf-card-body>
  <pf-card-footer>Footer</pf-card-footer>
</pf-card>`},{default:t(()=>[a(s,{variant:"secondary"},{default:t(()=>[a(p,null,{default:t(()=>[...e[4]||(e[4]=[n("Header",-1)])]),_:1}),a(l,null,{default:t(()=>[...e[5]||(e[5]=[n("Body",-1)])]),_:1}),a(u,null,{default:t(()=>[...e[6]||(e[6]=[n("Footer",-1)])]),_:1})]),_:1})]),_:1}),a(c,{title:"With image and actions",source:`<pf-card>
  <pf-card-header>
    <pf-brand :src="PfLogo" alt="PatternFly logo" style="height: 50px" />
    <pf-card-actions no-offset>
      <pf-dropdown position="right">
        <template #toggle>
          <pf-menu-toggle variant="plain" />
        </template>
        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button">
          Action
        </pf-dropdown-item>
        <pf-dropdown-item disabled>
          Disabled Link
        </pf-dropdown-item>
        <pf-dropdown-item disabled component="button">
          Disabled Action
        </pf-dropdown-item>
        <pf-divider component="li" />
        <pf-dropdown-item>Separated Link</pf-dropdown-item>
        <pf-dropdown-item component="button">
          Separated Action
        </pf-dropdown-item>
      </pf-dropdown>
      <pf-checkbox aria-label="card checkbox example" />
    </pf-card-actions>
  </pf-card-header>
  <pf-card-title>Header</pf-card-title>
  <pf-card-body>Body</pf-card-body>
  <pf-card-footer>Footer</pf-card-footer>
</pf-card>`},{default:t(()=>[a(s,null,{default:t(()=>[a(f,null,{default:t(()=>[a(C,{src:v(q),alt:"PatternFly logo",style:{height:"50px"}},null,8,["src"]),a(g,{"no-offset":""},{default:t(()=>[a(b,{position:"right"},{toggle:t(()=>[a(m,{variant:"plain"})]),default:t(()=>[a(d,null,{default:t(()=>[...e[7]||(e[7]=[n("Link",-1)])]),_:1}),a(d,{component:"button"},{default:t(()=>[...e[8]||(e[8]=[n(" Action ",-1)])]),_:1}),a(d,{disabled:""},{default:t(()=>[...e[9]||(e[9]=[n(" Disabled Link ",-1)])]),_:1}),a(d,{disabled:"",component:"button"},{default:t(()=>[...e[10]||(e[10]=[n(" Disabled Action ",-1)])]),_:1}),a(h,{component:"li"}),a(d,null,{default:t(()=>[...e[11]||(e[11]=[n("Separated Link",-1)])]),_:1}),a(d,{component:"button"},{default:t(()=>[...e[12]||(e[12]=[n(" Separated Action ",-1)])]),_:1})]),_:1}),a(y,{"aria-label":"card checkbox example"})]),_:1})]),_:1}),a(p,null,{default:t(()=>[...e[13]||(e[13]=[n("Header",-1)])]),_:1}),a(l,null,{default:t(()=>[...e[14]||(e[14]=[n("Body",-1)])]),_:1}),a(u,null,{default:t(()=>[...e[15]||(e[15]=[n("Footer",-1)])]),_:1})]),_:1})]),_:1}),a(c,{title:"Expandable with icon",source:`<pf-card expandable>
  <pf-card-header>
    <img :src="PfIconLogo" alt="PatternFly logo" style="width: 27px">
    <pf-card-actions>
      <pf-dropdown position="right">
        <template #toggle>
          <pf-menu-toggle variant="plain" />
        </template>
        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button">
          Action
        </pf-dropdown-item>
        <pf-dropdown-item disabled>
          Disabled Link
        </pf-dropdown-item>
        <pf-dropdown-item disabled component="button">
          Disabled Action
        </pf-dropdown-item>
      </pf-dropdown>
      <pf-checkbox aria-label="card checkbox example" />
    </pf-card-actions>
  </pf-card-header>
  <pf-card-expandable-content>
    <pf-card-body>Body</pf-card-body>
    <pf-card-footer>Footer</pf-card-footer>
  </pf-card-expandable-content>
</pf-card>`},{default:t(()=>[a(s,{expandable:""},{default:t(()=>[a(f,null,{default:t(()=>[r("img",{src:v(S),alt:"PatternFly logo",style:{width:"27px"}},null,8,A),a(g,null,{default:t(()=>[a(b,{position:"right"},{toggle:t(()=>[a(m,{variant:"plain"})]),default:t(()=>[a(d,null,{default:t(()=>[...e[16]||(e[16]=[n("Link",-1)])]),_:1}),a(d,{component:"button"},{default:t(()=>[...e[17]||(e[17]=[n(" Action ",-1)])]),_:1}),a(d,{disabled:""},{default:t(()=>[...e[18]||(e[18]=[n(" Disabled Link ",-1)])]),_:1}),a(d,{disabled:"",component:"button"},{default:t(()=>[...e[19]||(e[19]=[n(" Disabled Action ",-1)])]),_:1})]),_:1}),a(y,{"aria-label":"card checkbox example"})]),_:1})]),_:1}),a(w,null,{default:t(()=>[a(l,null,{default:t(()=>[...e[20]||(e[20]=[n("Body",-1)])]),_:1}),a(u,null,{default:t(()=>[...e[21]||(e[21]=[n("Footer",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),a(c,{title:"Selectable cards",source:`<pf-card selectable selectable-input="visible">
  <pf-card-header>
    <pf-card-actions>
      <pf-dropdown position="right">
        <template #toggle>
          <pf-menu-toggle variant="plain" />
        </template>
        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button">
          Action
        </pf-dropdown-item>
        <pf-dropdown-item disabled>
          Disabled Link
        </pf-dropdown-item>
        <pf-dropdown-item disabled component="button">
          Disabled Action
        </pf-dropdown-item>
      </pf-dropdown>
    </pf-card-actions>
  </pf-card-header>
  <pf-card-title>First card</pf-card-title>
  <pf-card-body>This is a selectable card. Click me to select me. Click again to deselect me.</pf-card-body>
</pf-card>
<br>
<pf-card selectable selectable-input>
  <pf-card-header>
    <pf-card-title>Second card</pf-card-title>
  </pf-card-header>
  <pf-card-body>This is a selectable card. Click me to select me. Click again to deselect me.</pf-card-body>
</pf-card>
<br>
<pf-card selectable selectable-input disabled>
  <pf-card-header>
    <pf-card-title>Third card</pf-card-title>
  </pf-card-header>
  <pf-card-body>This is a raised but disabled card.</pf-card-body>
</pf-card>`},{intro:t(()=>[...e[22]||(e[22]=[r("div",{class:"markdown pf-v6-c-content"},[r("p",null,"Selectable cards can only be selected one at a time, and are intended for use with primary-detail layout.")],-1)])]),default:t(()=>[a(s,{selectable:"","selectable-input":"visible"},{default:t(()=>[a(f,null,{default:t(()=>[a(g,null,{default:t(()=>[a(b,{position:"right"},{toggle:t(()=>[a(m,{variant:"plain"})]),default:t(()=>[a(d,null,{default:t(()=>[...e[23]||(e[23]=[n("Link",-1)])]),_:1}),a(d,{component:"button"},{default:t(()=>[...e[24]||(e[24]=[n(" Action ",-1)])]),_:1}),a(d,{disabled:""},{default:t(()=>[...e[25]||(e[25]=[n(" Disabled Link ",-1)])]),_:1}),a(d,{disabled:"",component:"button"},{default:t(()=>[...e[26]||(e[26]=[n(" Disabled Action ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),a(p,null,{default:t(()=>[...e[27]||(e[27]=[n("First card",-1)])]),_:1}),a(l,null,{default:t(()=>[...e[28]||(e[28]=[n("This is a selectable card. Click me to select me. Click again to deselect me.",-1)])]),_:1})]),_:1}),e[33]||(e[33]=r("br",null,null,-1)),a(s,{selectable:"","selectable-input":""},{default:t(()=>[a(f,null,{default:t(()=>[a(p,null,{default:t(()=>[...e[29]||(e[29]=[n("Second card",-1)])]),_:1})]),_:1}),a(l,null,{default:t(()=>[...e[30]||(e[30]=[n("This is a selectable card. Click me to select me. Click again to deselect me.",-1)])]),_:1})]),_:1}),e[34]||(e[34]=r("br",null,null,-1)),a(s,{selectable:"","selectable-input":"",disabled:""},{default:t(()=>[a(f,null,{default:t(()=>[a(p,null,{default:t(()=>[...e[31]||(e[31]=[n("Third card",-1)])]),_:1})]),_:1}),a(l,null,{default:t(()=>[...e[32]||(e[32]=[n("This is a raised but disabled card.",-1)])]),_:1})]),_:1})]),_:1})]),_:1})}}});export{B as default};
