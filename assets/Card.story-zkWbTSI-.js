import{E as y}from"./ellipsis-vertical-icon-Bx60FFy1.js";import{g as q,a as o,c as F,o as S,w as t,d as i,b as a,e as n,u as v}from"./index-BD8okTTN.js";const D=q({__name:"Card.story",setup(A){return(N,e)=>{const r=o("component-info"),p=o("pf-card-title"),l=o("pf-card-body"),f=o("pf-card-footer"),s=o("pf-card"),c=o("story-canvas"),C=o("pf-brand"),w=o("pf-card-header-main"),u=o("pf-menu-toggle"),d=o("pf-dropdown-item"),_=o("pf-divider"),m=o("pf-dropdown"),h=o("pf-checkbox"),b=o("pf-card-actions"),g=o("pf-card-header"),k=o("pf-card-expandable-content"),x=o("doc-page");return S(),F(x,{name:"Components/Card.story.vue",title:"Card"},{description:t(()=>e[0]||(e[0]=[n("A "),i("b",null,"card",-1),n(" is a square or rectangular container that can contain any kind of content. Cards symbolize units of information, and each one acts as an entry point for users to access more details. For example, in dashboards and catalog views, cards function as a preview of a detailed page. Cards may also be used in data displays like card views, or for positioning content on a page.")])),apidocs:t(()=>[a(r,{src:"packages/core/src/components/Card/Card.vue",doc:{name:"PfCard",exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"component",description:"Content rendered inside the Card",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Component"}]},defaultValue:{func:!1,value:"'article'"}},{name:"compact",description:"Modifies the card to include compact styling. Should not be used with isLarge.",required:!1,type:{name:"boolean"}},{name:"selectable",description:"Modifies the card to include selectable styling",required:!1,type:{name:"boolean"}},{name:"selectableRaised",description:"Specifies the card is selectable, and applies the new raised styling on hover and select",required:!1,type:{name:"boolean"}},{name:"selectableInput",description:"Flag indicating that the card should render a hidden input to make it selectable",required:!1,type:{name:"boolean"}},{name:"selectableDisabled",description:"Modifies a raised selectable card to have disabled styling",required:!1,type:{name:"boolean"}},{name:"name",description:"Name of the optional hidden input that tracks the selected status",required:!1,type:{name:"string"}},{name:"selected",description:"Modifies the card to include selected styling",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"flat",description:"Modifies the card to include flat styling",required:!1,type:{name:"boolean"}},{name:"rounded",description:"Modifies the card to include rounded styling",required:!1,type:{name:"boolean"}},{name:"large",description:"Modifies the card to be large. Should not be used with isCompact.",required:!1,type:{name:"boolean"}},{name:"fullHeight",description:"Cause component to consume the available height of its container",required:!1,type:{name:"boolean"}},{name:"plain",description:"Modifies the card to include plain styling; this removes border and background",required:!1,type:{name:"boolean"}},{name:"expandable",description:"Modifies the card to be expandable",required:!1,type:{name:"boolean"}},{name:"expanded",description:"Flag indicating if a card is expanded. Modifies the card to be expandable.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"click",type:{names:["PointerEvent"]}},{name:"change",type:{names:["Event"]}},{name:"update:expanded",type:{names:["boolean"]}},{name:"update:selected",type:{names:["boolean"]}}],slots:[{name:"default"},{name:"icon"},{name:"badge"}],sourceFiles:["../../packages/core/src/components/Card/Card.vue"]}}),a(r,{src:"packages/core/src/components/Card/CardActions.vue",doc:{name:"PfCardActions",exportName:"default",displayName:"CardActions",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"noOffset",description:"Flag indicating that the actions have no offset.",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Card/CardActions.vue"]}}),a(r,{src:"packages/core/src/components/Card/CardExpandableContent.vue",doc:{name:"PfCardExpandableContent",exportName:"default",displayName:"CardExpandableContent",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"noOffset",description:"Flag indicating that the actions have no offset.",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Card/CardExpandableContent.vue"]}}),a(r,{src:"packages/core/src/components/Card/CardFooter.vue",doc:{name:"PfCardFooter",exportName:"default",displayName:"CardFooter",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"component",description:"Sets the base component to render.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Component"}]},defaultValue:{func:!1,value:"'div'"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Card/CardFooter.vue"]}}),a(r,{src:"packages/core/src/components/Card/CardHeader.vue"}),a(r,{src:"packages/core/src/components/Card/CardHeaderMain.vue",doc:{name:"PfCardHeaderMain",exportName:"default",displayName:"CardHeaderMain",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Card/CardHeaderMain.vue"]}}),a(r,{src:"packages/core/src/components/Card/CardTitle.vue",doc:{name:"PfCardTitle",exportName:"default",displayName:"CardTitle",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"component",description:"Sets the base component to render.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Component"}]},defaultValue:{func:!1,value:"'div'"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Card/CardTitle.vue"]}})]),default:t(()=>[e[33]||(e[33]=i("div",{class:"markdown pf-v5-c-content"},[i("h2",{class:"pf-v5-c-title"},"Differences from patternfly-react"),i("ul",null,[i("li",null,[n("The expanded state is controlled by "),i("code",null,"v-model:expanded"),n(" or managed internally with the prop "),i("code",null,"expandable"),n(". See "),i("a",{href:"#/"},"common differences from patternfly-react"),n(".")])]),i("h2",{class:"pf-v5-c-title"},"Examples")],-1)),a(c,{title:"Basic",source:`<pf-card>
  <pf-card-title>Header</pf-card-title>
  <pf-card-body>Body</pf-card-body>
  <pf-card-footer>Footer</pf-card-footer>
</pf-card>`},{default:t(()=>[a(s,null,{default:t(()=>[a(p,null,{default:t(()=>e[1]||(e[1]=[n("Header")])),_:1}),a(l,null,{default:t(()=>e[2]||(e[2]=[n("Body")])),_:1}),a(f,null,{default:t(()=>e[3]||(e[3]=[n("Footer")])),_:1})]),_:1})]),_:1}),a(c,{title:"With image and actions",source:`<pf-card>
  <pf-card-header>
    <pf-card-header-main>
      <pf-brand src="https://v5-archive.patternfly.org/assets/images/pf_logo.svg" alt="PatternFly logo" style="height: 50px" />
    </pf-card-header-main>
    <pf-card-actions no-offset>
      <pf-dropdown position="right">
        <template #toggle>
          <pf-menu-toggle variant="plain">
            <ellipsis-vertical-icon />
          </pf-menu-toggle>
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
</pf-card>`},{default:t(()=>[a(s,null,{default:t(()=>[a(g,null,{default:t(()=>[a(w,null,{default:t(()=>[a(C,{src:"https://v5-archive.patternfly.org/assets/images/pf_logo.svg",alt:"PatternFly logo",style:{height:"50px"}})]),_:1}),a(b,{"no-offset":""},{default:t(()=>[a(m,{position:"right"},{toggle:t(()=>[a(u,{variant:"plain"},{default:t(()=>[a(v(y))]),_:1})]),default:t(()=>[a(d,null,{default:t(()=>e[4]||(e[4]=[n("Link")])),_:1}),a(d,{component:"button"},{default:t(()=>e[5]||(e[5]=[n(" Action ")])),_:1}),a(d,{disabled:""},{default:t(()=>e[6]||(e[6]=[n(" Disabled Link ")])),_:1}),a(d,{disabled:"",component:"button"},{default:t(()=>e[7]||(e[7]=[n(" Disabled Action ")])),_:1}),a(_,{component:"li"}),a(d,null,{default:t(()=>e[8]||(e[8]=[n("Separated Link")])),_:1}),a(d,{component:"button"},{default:t(()=>e[9]||(e[9]=[n(" Separated Action ")])),_:1})]),_:1}),a(h,{"aria-label":"card checkbox example"})]),_:1})]),_:1}),a(p,null,{default:t(()=>e[10]||(e[10]=[n("Header")])),_:1}),a(l,null,{default:t(()=>e[11]||(e[11]=[n("Body")])),_:1}),a(f,null,{default:t(()=>e[12]||(e[12]=[n("Footer")])),_:1})]),_:1})]),_:1}),a(c,{title:"Expandable with icon",source:`<pf-card expandable>
  <pf-card-header>
    <img src="https://raw.githubusercontent.com/patternfly/patternfly-react/main/packages/react-core/src/demos/Card/pf-logo-small.svg" alt="PatternFly logo" style="width: 27px">
    <pf-card-actions>
      <pf-dropdown position="right">
        <template #toggle>
          <pf-menu-toggle variant="plain">
            <ellipsis-vertical-icon />
          </pf-menu-toggle>
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
</pf-card>`},{default:t(()=>[a(s,{expandable:""},{default:t(()=>[a(g,null,{default:t(()=>[e[17]||(e[17]=i("img",{src:"https://raw.githubusercontent.com/patternfly/patternfly-react/main/packages/react-core/src/demos/Card/pf-logo-small.svg",alt:"PatternFly logo",style:{width:"27px"}},null,-1)),a(b,null,{default:t(()=>[a(m,{position:"right"},{toggle:t(()=>[a(u,{variant:"plain"},{default:t(()=>[a(v(y))]),_:1})]),default:t(()=>[a(d,null,{default:t(()=>e[13]||(e[13]=[n("Link")])),_:1}),a(d,{component:"button"},{default:t(()=>e[14]||(e[14]=[n(" Action ")])),_:1}),a(d,{disabled:""},{default:t(()=>e[15]||(e[15]=[n(" Disabled Link ")])),_:1}),a(d,{disabled:"",component:"button"},{default:t(()=>e[16]||(e[16]=[n(" Disabled Action ")])),_:1})]),_:1}),a(h,{"aria-label":"card checkbox example"})]),_:1})]),_:1}),a(k,null,{default:t(()=>[a(l,null,{default:t(()=>e[18]||(e[18]=[n("Body")])),_:1}),a(f,null,{default:t(()=>e[19]||(e[19]=[n("Footer")])),_:1})]),_:1})]),_:1})]),_:1}),a(c,{title:"Selectable cards",source:`<pf-card selectable-raised selectable-input>
  <pf-card-header>
    <pf-card-actions>
      <pf-dropdown position="right">
        <template #toggle>
          <pf-menu-toggle variant="plain">
            <ellipsis-vertical-icon />
          </pf-menu-toggle>
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
<pf-card selectable-raised selectable-input>
  <pf-card-title>Second card</pf-card-title>
  <pf-card-body>This is a selectable card. Click me to select me. Click again to deselect me.</pf-card-body>
</pf-card>
<br>
<pf-card selectable-raised selectable-input selectable-disabled>
  <pf-card-title>Third card</pf-card-title>
  <pf-card-body>This is a raised but disabled card.</pf-card-body>
</pf-card>`},{intro:t(()=>e[20]||(e[20]=[i("div",{class:"markdown pf-v5-c-content"},[i("p",null,"Selectable cards can only be selected one at a time, and are intended for use with primary-detail layout.")],-1)])),default:t(()=>[a(s,{"selectable-raised":"","selectable-input":""},{default:t(()=>[a(g,null,{default:t(()=>[a(b,null,{default:t(()=>[a(m,{position:"right"},{toggle:t(()=>[a(u,{variant:"plain"},{default:t(()=>[a(v(y))]),_:1})]),default:t(()=>[a(d,null,{default:t(()=>e[21]||(e[21]=[n("Link")])),_:1}),a(d,{component:"button"},{default:t(()=>e[22]||(e[22]=[n(" Action ")])),_:1}),a(d,{disabled:""},{default:t(()=>e[23]||(e[23]=[n(" Disabled Link ")])),_:1}),a(d,{disabled:"",component:"button"},{default:t(()=>e[24]||(e[24]=[n(" Disabled Action ")])),_:1})]),_:1})]),_:1})]),_:1}),a(p,null,{default:t(()=>e[25]||(e[25]=[n("First card")])),_:1}),a(l,null,{default:t(()=>e[26]||(e[26]=[n("This is a selectable card. Click me to select me. Click again to deselect me.")])),_:1})]),_:1}),e[31]||(e[31]=i("br",null,null,-1)),a(s,{"selectable-raised":"","selectable-input":""},{default:t(()=>[a(p,null,{default:t(()=>e[27]||(e[27]=[n("Second card")])),_:1}),a(l,null,{default:t(()=>e[28]||(e[28]=[n("This is a selectable card. Click me to select me. Click again to deselect me.")])),_:1})]),_:1}),e[32]||(e[32]=i("br",null,null,-1)),a(s,{"selectable-raised":"","selectable-input":"","selectable-disabled":""},{default:t(()=>[a(p,null,{default:t(()=>e[29]||(e[29]=[n("Third card")])),_:1}),a(l,null,{default:t(()=>e[30]||(e[30]=[n("This is a raised but disabled card.")])),_:1})]),_:1})]),_:1})]),_:1})}}});export{D as default};
