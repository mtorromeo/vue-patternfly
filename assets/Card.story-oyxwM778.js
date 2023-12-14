import{E as h}from"./ellipsis-vertical-icon-wXVxeMKO.js";import{f as x,a as n,o as q,c as F,w as a,b as t,d as e,u as _,e as d}from"./index-c2KwREIM.js";const S=d("b",null,"card",-1),A=d("div",{class:"markdown pf-v5-c-content"},[d("h2",{class:"pf-v5-c-title"},"Differences from patternfly-react"),d("ul",null,[d("li",null,[t("The expanded state is controlled by "),d("code",null,"v-model:expanded"),t(" or managed internally with the prop "),d("code",null,"expandable"),t(". See "),d("a",{href:"#/"},"common differences from patternfly-react"),t(".")])]),d("h2",{class:"pf-v5-c-title"},"Examples")],-1),N=d("img",{src:"https://raw.githubusercontent.com/patternfly/patternfly-react/main/packages/react-core/src/demos/Card/pf-logo-small.svg",alt:"PatternFly logo",style:{width:"27px"}},null,-1),L=d("div",{class:"markdown pf-v5-c-content"},[d("p",null,"Selectable cards can only be selected one at a time, and are intended for use with primary-detail layout.")],-1),M=d("br",null,null,-1),T=d("br",null,null,-1),B=x({__name:"Card.story",setup(V){return(D,I)=>{const i=n("component-info"),s=n("pf-card-title"),r=n("pf-card-body"),p=n("pf-card-footer"),l=n("pf-card"),c=n("story-canvas"),y=n("pf-brand"),v=n("pf-card-header-main"),f=n("pf-menu-toggle"),o=n("pf-dropdown-item"),w=n("pf-divider"),u=n("pf-dropdown"),g=n("pf-checkbox"),m=n("pf-card-actions"),b=n("pf-card-header"),C=n("pf-card-expandable-content"),k=n("doc-page");return q(),F(k,{name:"Components/Card.story.vue",title:"Card"},{description:a(()=>[t("A "),S,t(" is a square or rectangular container that can contain any kind of content. Cards symbolize units of information, and each one acts as an entry point for users to access more details. For example, in dashboards and catalog views, cards function as a preview of a detailed page. Cards may also be used in data displays like card views, or for positioning content on a page.")]),apidocs:a(()=>[e(i,{src:"packages/core/src/components/Card/Card.vue",doc:{name:"PfCard",exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"component",description:"Content rendered inside the Card",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Component"}]},defaultValue:{func:!1,value:"'article'"}},{name:"compact",description:"Modifies the card to include compact styling. Should not be used with isLarge.",required:!1,type:{name:"boolean"}},{name:"selectable",description:"Modifies the card to include selectable styling",required:!1,type:{name:"boolean"}},{name:"selectableRaised",description:"Specifies the card is selectable, and applies the new raised styling on hover and select",required:!1,type:{name:"boolean"}},{name:"selectableInput",description:"Flag indicating that the card should render a hidden input to make it selectable",required:!1,type:{name:"boolean"}},{name:"selectableDisabled",description:"Modifies a raised selectable card to have disabled styling",required:!1,type:{name:"boolean"}},{name:"name",description:"Name of the optional hidden input that tracks the selected status",required:!1,type:{name:"string"}},{name:"selected",description:"Modifies the card to include selected styling",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"flat",description:"Modifies the card to include flat styling",required:!1,type:{name:"boolean"}},{name:"rounded",description:"Modifies the card to include rounded styling",required:!1,type:{name:"boolean"}},{name:"large",description:"Modifies the card to be large. Should not be used with isCompact.",required:!1,type:{name:"boolean"}},{name:"fullHeight",description:"Cause component to consume the available height of its container",required:!1,type:{name:"boolean"}},{name:"plain",description:"Modifies the card to include plain styling; this removes border and background",required:!1,type:{name:"boolean"}},{name:"expandable",description:"Modifies the card to be expandable",required:!1,type:{name:"boolean"}},{name:"expanded",description:"Flag indicating if a card is expanded. Modifies the card to be expandable.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"click",type:{names:["union"],elements:[{name:"MouseEvent"},{name:"TouchEvent"}]}},{name:"change",type:{names:["Event"]}},{name:"update:expanded",type:{names:["boolean"]}},{name:"update:selected",type:{names:["boolean"]}}],slots:[{name:"default"},{name:"icon"},{name:"badge"}],sourceFiles:["../../packages/core/src/components/Card/Card.vue"]}},null,8,["doc"]),e(i,{src:"packages/core/src/components/Card/CardActions.vue",doc:{name:"PfCardActions",exportName:"default",displayName:"CardActions",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"noOffset",description:"Flag indicating that the actions have no offset.",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Card/CardActions.vue"]}},null,8,["doc"]),e(i,{src:"packages/core/src/components/Card/CardExpandableContent.vue",doc:{name:"PfCardExpandableContent",exportName:"default",displayName:"CardExpandableContent",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"noOffset",description:"Flag indicating that the actions have no offset.",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Card/CardExpandableContent.vue"]}},null,8,["doc"]),e(i,{src:"packages/core/src/components/Card/CardFooter.vue",doc:{name:"PfCardFooter",exportName:"default",displayName:"CardFooter",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"component",description:"Sets the base component to render.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Component"}]},defaultValue:{func:!1,value:"'div'"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Card/CardFooter.vue"]}},null,8,["doc"]),e(i,{src:"packages/core/src/components/Card/CardHeader.vue"}),e(i,{src:"packages/core/src/components/Card/CardHeaderMain.vue",doc:{name:"PfCardHeaderMain",exportName:"default",displayName:"CardHeaderMain",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Card/CardHeaderMain.vue"]}},null,8,["doc"]),e(i,{src:"packages/core/src/components/Card/CardTitle.vue",doc:{name:"PfCardTitle",exportName:"default",displayName:"CardTitle",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"component",description:"Sets the base component to render.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Component"}]},defaultValue:{func:!1,value:"'div'"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Card/CardTitle.vue"]}},null,8,["doc"])]),default:a(()=>[A,e(c,{title:"Basic",source:`<pf-card>
  <pf-card-title>Header</pf-card-title>
  <pf-card-body>Body</pf-card-body>
  <pf-card-footer>Footer</pf-card-footer>
</pf-card>`},{default:a(()=>[e(l,null,{default:a(()=>[e(s,null,{default:a(()=>[t("Header")]),_:1}),e(r,null,{default:a(()=>[t("Body")]),_:1}),e(p,null,{default:a(()=>[t("Footer")]),_:1})]),_:1})]),_:1}),e(c,{title:"With image and actions",source:`<pf-card>
  <pf-card-header>
    <pf-card-header-main>
      <pf-brand src="https://www.patternfly.org/assets/images/pf_logo.svg" alt="PatternFly logo" style="height: 50px" />
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
</pf-card>`},{default:a(()=>[e(l,null,{default:a(()=>[e(b,null,{default:a(()=>[e(v,null,{default:a(()=>[e(y,{src:"https://www.patternfly.org/assets/images/pf_logo.svg",alt:"PatternFly logo",style:{height:"50px"}})]),_:1}),e(m,{"no-offset":""},{default:a(()=>[e(u,{position:"right"},{toggle:a(()=>[e(f,{variant:"plain"},{default:a(()=>[e(_(h))]),_:1})]),default:a(()=>[e(o,null,{default:a(()=>[t("Link")]),_:1}),e(o,{component:"button"},{default:a(()=>[t(" Action ")]),_:1}),e(o,{disabled:""},{default:a(()=>[t(" Disabled Link ")]),_:1}),e(o,{disabled:"",component:"button"},{default:a(()=>[t(" Disabled Action ")]),_:1}),e(w,{component:"li"}),e(o,null,{default:a(()=>[t("Separated Link")]),_:1}),e(o,{component:"button"},{default:a(()=>[t(" Separated Action ")]),_:1})]),_:1}),e(g,{"aria-label":"card checkbox example"})]),_:1})]),_:1}),e(s,null,{default:a(()=>[t("Header")]),_:1}),e(r,null,{default:a(()=>[t("Body")]),_:1}),e(p,null,{default:a(()=>[t("Footer")]),_:1})]),_:1})]),_:1}),e(c,{title:"Expandable with icon",source:`<pf-card expandable>
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
</pf-card>`},{default:a(()=>[e(l,{expandable:""},{default:a(()=>[e(b,null,{default:a(()=>[N,e(m,null,{default:a(()=>[e(u,{position:"right"},{toggle:a(()=>[e(f,{variant:"plain"},{default:a(()=>[e(_(h))]),_:1})]),default:a(()=>[e(o,null,{default:a(()=>[t("Link")]),_:1}),e(o,{component:"button"},{default:a(()=>[t(" Action ")]),_:1}),e(o,{disabled:""},{default:a(()=>[t(" Disabled Link ")]),_:1}),e(o,{disabled:"",component:"button"},{default:a(()=>[t(" Disabled Action ")]),_:1})]),_:1}),e(g,{"aria-label":"card checkbox example"})]),_:1})]),_:1}),e(C,null,{default:a(()=>[e(r,null,{default:a(()=>[t("Body")]),_:1}),e(p,null,{default:a(()=>[t("Footer")]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{title:"Selectable cards",source:`<pf-card selectable-raised selectable-input>
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
</pf-card>`},{intro:a(()=>[L]),default:a(()=>[e(l,{"selectable-raised":"","selectable-input":""},{default:a(()=>[e(b,null,{default:a(()=>[e(m,null,{default:a(()=>[e(u,{position:"right"},{toggle:a(()=>[e(f,{variant:"plain"},{default:a(()=>[e(_(h))]),_:1})]),default:a(()=>[e(o,null,{default:a(()=>[t("Link")]),_:1}),e(o,{component:"button"},{default:a(()=>[t(" Action ")]),_:1}),e(o,{disabled:""},{default:a(()=>[t(" Disabled Link ")]),_:1}),e(o,{disabled:"",component:"button"},{default:a(()=>[t(" Disabled Action ")]),_:1})]),_:1})]),_:1})]),_:1}),e(s,null,{default:a(()=>[t("First card")]),_:1}),e(r,null,{default:a(()=>[t("This is a selectable card. Click me to select me. Click again to deselect me.")]),_:1})]),_:1}),M,e(l,{"selectable-raised":"","selectable-input":""},{default:a(()=>[e(s,null,{default:a(()=>[t("Second card")]),_:1}),e(r,null,{default:a(()=>[t("This is a selectable card. Click me to select me. Click again to deselect me.")]),_:1})]),_:1}),T,e(l,{"selectable-raised":"","selectable-input":"","selectable-disabled":""},{default:a(()=>[e(s,null,{default:a(()=>[t("Third card")]),_:1}),e(r,null,{default:a(()=>[t("This is a raised but disabled card.")]),_:1})]),_:1})]),_:1})]),_:1},8,["name"])}}});export{B as default};
