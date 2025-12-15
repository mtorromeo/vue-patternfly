import{g as k,a as o,c as x,o as F,w as a,d as r,b as t,e as n,u as v}from"./index-CiyZyzwL.js";const q=""+new URL("PF-HorizontalLogo-Color-Cbap-rZ-.svg",import.meta.url).href,P="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Logo'%3e%3cpath%20id='Rectangle-Copy-17'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M15.6522%200H40V24.3478H37.3913C25.3851%2024.3478%2015.6522%2014.6149%2015.6522%202.6087V0Z'%20fill='%230066CC'/%3e%3cpath%20id='Path-2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M40%200.869568L16.5217%2040H34.9367C37.7331%2040%2040%2037.7331%2040%2034.9367V0.869568Z'%20fill='url(%23paint0_linear_6460_7774)'/%3e%3cpath%20id='Path-2_2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M39.1304%209.53674e-06L-3.8147e-06%2023.4783V5.0633C-3.8147e-06%202.26692%202.26691%209.53674e-06%205.06329%209.53674e-06L39.1304%209.53674e-06Z'%20fill='url(%23paint1_linear_6460_7774)'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_6460_7774'%20x1='1613.04'%20y1='0.869504'%20x2='-337.034'%20y2='3251'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%232B9AF3'/%3e%3cstop%20offset='1'%20stop-color='%2373BCF7'%20stop-opacity='0.502213'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_6460_7774'%20x1='39.1305'%20y1='-1573.04'%20x2='-3211'%20y2='377.033'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%232B9AF3'/%3e%3cstop%20offset='1'%20stop-color='%2373BCF7'%20stop-opacity='0.502213'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",A=["src"],T=k({__name:"Card.story",setup(S){return(L,e)=>{const i=o("component-info"),p=o("pf-card-title"),l=o("pf-card-body"),u=o("pf-card-footer"),s=o("pf-card"),f=o("story-canvas"),C=o("pf-brand"),m=o("pf-menu-toggle"),d=o("pf-dropdown-item"),w=o("pf-divider"),b=o("pf-dropdown"),y=o("pf-checkbox"),g=o("pf-card-actions"),c=o("pf-card-header"),h=o("pf-card-expandable-content"),_=o("doc-page");return F(),x(_,{name:"Components/Card.story.vue",title:"Card"},{description:a(()=>[...e[0]||(e[0]=[n("A ",-1),r("b",null,"card",-1),n(" is a square or rectangular container that can contain any kind of content. Cards symbolize units of information, and each one acts as an entry point for users to access more details. For example, in dashboards and catalog views, cards function as a preview of a detailed page. Cards may also be used in data displays like card views, or for positioning content on a page.",-1)])]),apidocs:a(()=>[t(i,{name:"PfCard",doc:{name:"PfCard",exportName:"PfCard",displayName:"Card",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"component",description:"Content rendered inside the Card",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Component"}]},defaultValue:{func:!1,value:"'div'"}},{name:"compact",description:"Modifies the card to include compact styling. Should not be used with isLarge.",required:!1,type:{name:"boolean"}},{name:"selectable",description:"Modifies the card to include selectable styling",required:!1,type:{name:"boolean"}},{name:"selectableInput",description:"Flag indicating that the card should render a hidden input to make it selectable",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:'"hidden"'},{name:'"visible"'}]}},{name:"name",description:"Name of the optional hidden input that tracks the selected status",required:!1,type:{name:"string"}},{name:"clicked",description:`Flag indicating whether a card that is either only clickable or that is both clickable and selectable
is currently clicked and has clicked styling.`,required:!1,type:{name:"boolean"}},{name:"large",description:"Modifies the card to be large. Should not be used with isCompact.",required:!1,type:{name:"boolean"}},{name:"fullHeight",description:"Cause component to consume the available height of its container",required:!1,type:{name:"boolean"}},{name:"plain",description:"Modifies the card to include plain styling; this removes border and background",required:!1,type:{name:"boolean"}},{name:"expandable",description:"Modifies the card to be expandable",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Flag indicating that a clickable or selectable card is disabled.",required:!1,type:{name:"boolean"}},{name:"variant",description:"Card background color variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"secondary"'}]}},{name:"onClick",required:!1,type:{name:"TSFunctionType"}}],events:[{name:"change",type:{names:["Event"]}}],slots:[{name:"default"},{name:"icon"},{name:"badge"}],sourceFiles:["runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Card/Card.vue"]}}),t(i,{name:"PfCardActions",doc:{name:"PfCardActions",exportName:"PfCardActions",displayName:"CardActions",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"noOffset",description:"Flag indicating that the actions have no offset.",required:!1,type:{name:"boolean"}}],events:[],slots:[{name:"default"}],sourceFiles:["runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Card/CardActions.vue"]}}),t(i,{name:"PfCardExpandableContent",doc:{name:"PfCardExpandableContent",exportName:"PfCardExpandableContent",displayName:"CardExpandableContent",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"noOffset",description:"Flag indicating that the actions have no offset.",required:!1,type:{name:"boolean"}}],events:[],slots:[{name:"default"}],sourceFiles:["runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Card/CardExpandableContent.vue"]}}),t(i,{name:"PfCardFooter",doc:{name:"PfCardFooter",exportName:"PfCardFooter",displayName:"CardFooter",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"component",description:"Sets the base component to render.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Component"}]},defaultValue:{func:!1,value:"'div'"}}],events:[],slots:[{name:"default"}],sourceFiles:["runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Card/CardFooter.vue"]}}),t(i,{name:"PfCardHeader",doc:{name:"PfCardHeader",exportName:"PfCardHeader",displayName:"CardHeader",description:"",tags:{},expose:[{name:"toggle"}],props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"toggleRightAligned",description:"Whether to right-align expandable toggle button",required:!1,type:{name:"boolean"}},{name:"toggleButtonAttrs",description:"Additional props for expandable toggle button",required:!1,type:{name:"ComponentProps",elements:[{name:"TSTypeQuery"}]},defaultValue:{func:!1,value:"() => ({})"}},{name:"wrap",description:"Flag indicating that header wrapping is enabled",required:!1,type:{name:"boolean"}}],events:[],slots:[{name:"default"}],sourceFiles:["runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Card/CardHeader.vue"]}}),t(i,{name:"PfCardHeaderMain",doc:{name:"PfCardHeaderMain",exportName:"PfCardHeaderMain",displayName:"CardHeaderMain",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],events:[],slots:[{name:"default"}],sourceFiles:["runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Card/CardHeaderMain.vue"]}}),t(i,{name:"PfCardTitle",doc:{name:"PfCardTitle",exportName:"PfCardTitle",displayName:"CardTitle",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"component",description:"Sets the base component to render.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Component"}]},defaultValue:{func:!1,value:"'div'"}}],events:[],slots:[{name:"default"}],sourceFiles:["runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Card/CardTitle.vue"]}})]),default:a(()=>[e[35]||(e[35]=r("div",{class:"markdown pf-v6-c-content"},[r("h2",{class:"pf-v6-c-title"},"Differences from patternfly-react"),r("ul",null,[r("li",null,[n("The expanded state is controlled by "),r("code",null,"v-model:expanded"),n(" or managed internally with the prop "),r("code",null,"expandable"),n(". See "),r("a",{href:"#/"},"common differences from patternfly-react"),n(".")])]),r("h2",{class:"pf-v6-c-title"},"Examples")],-1)),t(f,{title:"Basic",source:`<pf-card>
  <pf-card-title>Header</pf-card-title>
  <pf-card-body>Body</pf-card-body>
  <pf-card-footer>Footer</pf-card-footer>
</pf-card>`},{default:a(()=>[t(s,null,{default:a(()=>[t(p,null,{default:a(()=>[...e[1]||(e[1]=[n("Header",-1)])]),_:1}),t(l,null,{default:a(()=>[...e[2]||(e[2]=[n("Body",-1)])]),_:1}),t(u,null,{default:a(()=>[...e[3]||(e[3]=[n("Footer",-1)])]),_:1})]),_:1})]),_:1}),t(f,{title:"Secondary",source:`<pf-card variant="secondary">
  <pf-card-title>Header</pf-card-title>
  <pf-card-body>Body</pf-card-body>
  <pf-card-footer>Footer</pf-card-footer>
</pf-card>`},{default:a(()=>[t(s,{variant:"secondary"},{default:a(()=>[t(p,null,{default:a(()=>[...e[4]||(e[4]=[n("Header",-1)])]),_:1}),t(l,null,{default:a(()=>[...e[5]||(e[5]=[n("Body",-1)])]),_:1}),t(u,null,{default:a(()=>[...e[6]||(e[6]=[n("Footer",-1)])]),_:1})]),_:1})]),_:1}),t(f,{title:"With image and actions",source:`<pf-card>
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
</pf-card>`},{default:a(()=>[t(s,null,{default:a(()=>[t(c,null,{default:a(()=>[t(C,{src:v(q),alt:"PatternFly logo",style:{height:"50px"}},null,8,["src"]),t(g,{"no-offset":""},{default:a(()=>[t(b,{position:"right"},{toggle:a(()=>[t(m,{variant:"plain"})]),default:a(()=>[t(d,null,{default:a(()=>[...e[7]||(e[7]=[n("Link",-1)])]),_:1}),t(d,{component:"button"},{default:a(()=>[...e[8]||(e[8]=[n(" Action ",-1)])]),_:1}),t(d,{disabled:""},{default:a(()=>[...e[9]||(e[9]=[n(" Disabled Link ",-1)])]),_:1}),t(d,{disabled:"",component:"button"},{default:a(()=>[...e[10]||(e[10]=[n(" Disabled Action ",-1)])]),_:1}),t(w,{component:"li"}),t(d,null,{default:a(()=>[...e[11]||(e[11]=[n("Separated Link",-1)])]),_:1}),t(d,{component:"button"},{default:a(()=>[...e[12]||(e[12]=[n(" Separated Action ",-1)])]),_:1})]),_:1}),t(y,{"aria-label":"card checkbox example"})]),_:1})]),_:1}),t(p,null,{default:a(()=>[...e[13]||(e[13]=[n("Header",-1)])]),_:1}),t(l,null,{default:a(()=>[...e[14]||(e[14]=[n("Body",-1)])]),_:1}),t(u,null,{default:a(()=>[...e[15]||(e[15]=[n("Footer",-1)])]),_:1})]),_:1})]),_:1}),t(f,{title:"Expandable with icon",source:`<pf-card expandable>
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
</pf-card>`},{default:a(()=>[t(s,{expandable:""},{default:a(()=>[t(c,null,{default:a(()=>[r("img",{src:v(P),alt:"PatternFly logo",style:{width:"27px"}},null,8,A),t(g,null,{default:a(()=>[t(b,{position:"right"},{toggle:a(()=>[t(m,{variant:"plain"})]),default:a(()=>[t(d,null,{default:a(()=>[...e[16]||(e[16]=[n("Link",-1)])]),_:1}),t(d,{component:"button"},{default:a(()=>[...e[17]||(e[17]=[n(" Action ",-1)])]),_:1}),t(d,{disabled:""},{default:a(()=>[...e[18]||(e[18]=[n(" Disabled Link ",-1)])]),_:1}),t(d,{disabled:"",component:"button"},{default:a(()=>[...e[19]||(e[19]=[n(" Disabled Action ",-1)])]),_:1})]),_:1}),t(y,{"aria-label":"card checkbox example"})]),_:1})]),_:1}),t(h,null,{default:a(()=>[t(l,null,{default:a(()=>[...e[20]||(e[20]=[n("Body",-1)])]),_:1}),t(u,null,{default:a(()=>[...e[21]||(e[21]=[n("Footer",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),t(f,{title:"Selectable cards",source:`<pf-card selectable selectable-input="visible">
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
</pf-card>`},{intro:a(()=>[...e[22]||(e[22]=[r("div",{class:"markdown pf-v6-c-content"},[r("p",null,"Selectable cards can only be selected one at a time, and are intended for use with primary-detail layout.")],-1)])]),default:a(()=>[t(s,{selectable:"","selectable-input":"visible"},{default:a(()=>[t(c,null,{default:a(()=>[t(g,null,{default:a(()=>[t(b,{position:"right"},{toggle:a(()=>[t(m,{variant:"plain"})]),default:a(()=>[t(d,null,{default:a(()=>[...e[23]||(e[23]=[n("Link",-1)])]),_:1}),t(d,{component:"button"},{default:a(()=>[...e[24]||(e[24]=[n(" Action ",-1)])]),_:1}),t(d,{disabled:""},{default:a(()=>[...e[25]||(e[25]=[n(" Disabled Link ",-1)])]),_:1}),t(d,{disabled:"",component:"button"},{default:a(()=>[...e[26]||(e[26]=[n(" Disabled Action ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),t(p,null,{default:a(()=>[...e[27]||(e[27]=[n("First card",-1)])]),_:1}),t(l,null,{default:a(()=>[...e[28]||(e[28]=[n("This is a selectable card. Click me to select me. Click again to deselect me.",-1)])]),_:1})]),_:1}),e[33]||(e[33]=r("br",null,null,-1)),t(s,{selectable:"","selectable-input":""},{default:a(()=>[t(c,null,{default:a(()=>[t(p,null,{default:a(()=>[...e[29]||(e[29]=[n("Second card",-1)])]),_:1})]),_:1}),t(l,null,{default:a(()=>[...e[30]||(e[30]=[n("This is a selectable card. Click me to select me. Click again to deselect me.",-1)])]),_:1})]),_:1}),e[34]||(e[34]=r("br",null,null,-1)),t(s,{selectable:"","selectable-input":"",disabled:""},{default:a(()=>[t(c,null,{default:a(()=>[t(p,null,{default:a(()=>[...e[31]||(e[31]=[n("Third card",-1)])]),_:1})]),_:1}),t(l,null,{default:a(()=>[...e[32]||(e[32]=[n("This is a raised but disabled card.",-1)])]),_:1})]),_:1})]),_:1})]),_:1})}}});export{T as default};
