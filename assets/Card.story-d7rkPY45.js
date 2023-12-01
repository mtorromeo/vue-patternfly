import{E as _}from"./ellipsis-vertical-icon-yzg3BCcd.js";import{f as x,a as t,o as F,c as q,w as a,b as n,d as e,u as g,e as d}from"./index-MNvwmWFN.js";const A=d("b",null,"card",-1),N=d("div",{class:"markdown pf-v5-c-content"},[d("h2",{class:"pf-v5-c-title"},"Differences from patternfly-react"),d("ul",null,[d("li",null,[n("The expanded state is controlled by "),d("code",null,"v-model:expanded"),n(" or managed internally with the prop "),d("code",null,"expandable"),n(". See "),d("a",{href:"#/"},"common differences from patternfly-react"),n(".")])]),d("h2",{class:"pf-v5-c-title"},"Examples")],-1),L=d("img",{src:"https://raw.githubusercontent.com/patternfly/patternfly-react/main/packages/react-core/src/demos/Card/pf-logo-small.svg",alt:"PatternFly logo",style:{width:"27px"}},null,-1),M=d("div",{class:"markdown pf-v5-c-content"},[d("p",null,"Selectable cards can only be selected one at a time, and are intended for use with primary-detail layout.")],-1),T=d("br",null,null,-1),D=d("br",null,null,-1),V=x({__name:"Card.story",setup(S){return(E,B)=>{const l=t("component-info"),i=t("pf-card-title"),r=t("pf-card-body"),p=t("pf-card-footer"),c=t("pf-card"),s=t("story-canvas"),y=t("pf-brand"),C=t("pf-card-header-main"),f=t("pf-menu-toggle"),o=t("pf-dropdown-item"),w=t("pf-divider"),u=t("pf-dropdown"),h=t("pf-checkbox"),m=t("pf-card-actions"),b=t("pf-card-header"),v=t("pf-card-expandable-content"),k=t("doc-page");return F(),q(k,{title:"Card"},{description:a(()=>[n("A "),A,n(" is a square or rectangular container that can contain any kind of content. Cards symbolize units of information, and each one acts as an entry point for users to access more details. For example, in dashboards and catalog views, cards function as a preview of a detailed page. Cards may also be used in data displays like card views, or for positioning content on a page.")]),apidocs:a(()=>[e(l,{src:"packages/core/src/components/Card/Card.vue",doc:{name:"PfCard",exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"component",description:"Content rendered inside the Card",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Component"}]},defaultValue:{func:!1,value:"'article'"}},{name:"compact",description:"Modifies the card to include compact styling. Should not be used with isLarge.",required:!1,type:{name:"boolean"}},{name:"selectable",description:"Modifies the card to include selectable styling",required:!1,type:{name:"boolean"}},{name:"selectableRaised",description:"Specifies the card is selectable, and applies the new raised styling on hover and select",required:!1,type:{name:"boolean"}},{name:"selectableInput",description:"Flag indicating that the card should render a hidden input to make it selectable",required:!1,type:{name:"boolean"}},{name:"selectableDisabled",description:"Modifies a raised selectable card to have disabled styling",required:!1,type:{name:"boolean"}},{name:"name",description:"Name of the optional hidden input that tracks the selected status",required:!1,type:{name:"string"}},{name:"selected",description:"Modifies the card to include selected styling",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"flat",description:"Modifies the card to include flat styling",required:!1,type:{name:"boolean"}},{name:"rounded",description:"Modifies the card to include rounded styling",required:!1,type:{name:"boolean"}},{name:"large",description:"Modifies the card to be large. Should not be used with isCompact.",required:!1,type:{name:"boolean"}},{name:"fullHeight",description:"Cause component to consume the available height of its container",required:!1,type:{name:"boolean"}},{name:"plain",description:"Modifies the card to include plain styling; this removes border and background",required:!1,type:{name:"boolean"}},{name:"expandable",description:"Modifies the card to be expandable",required:!1,type:{name:"boolean"}},{name:"expanded",description:"Flag indicating if a card is expanded. Modifies the card to be expandable.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"click",type:{names:["union"],elements:[{name:"MouseEvent"},{name:"TouchEvent"}]}},{name:"change",type:{names:["Event"]}},{name:"update:expanded",type:{names:["boolean"]}},{name:"update:selected",type:{names:["boolean"]}}],slots:[{name:"default"},{name:"icon"},{name:"badge"}],sourceFiles:["../../packages/core/src/components/Card/Card.vue"]}},null,8,["doc"]),e(l,{src:"packages/core/src/components/Card/CardActions.vue",doc:{name:"PfCardActions",exportName:"default",displayName:"CardActions",description:"",tags:{},props:[{name:"noOffset",description:"Flag indicating that the actions have no offset.",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Card/CardActions.vue"]}},null,8,["doc"]),e(l,{src:"packages/core/src/components/Card/CardExpandableContent.vue",doc:{name:"PfCardExpandableContent",exportName:"default",displayName:"CardExpandableContent",description:"",tags:{},props:[{name:"noOffset",description:"Flag indicating that the actions have no offset.",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Card/CardExpandableContent.vue"]}},null,8,["doc"]),e(l,{src:"packages/core/src/components/Card/CardFooter.vue",doc:{name:"PfCardFooter",exportName:"default",displayName:"CardFooter",description:"",tags:{},props:[{name:"component",description:"Sets the base component to render.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Component"}]},defaultValue:{func:!1,value:"'div'"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Card/CardFooter.vue"]}},null,8,["doc"]),e(l,{src:"packages/core/src/components/Card/CardHeader.vue"}),e(l,{src:"packages/core/src/components/Card/CardHeaderMain.vue",doc:{name:"PfCardHeaderMain",exportName:"default",displayName:"CardHeaderMain",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Card/CardHeaderMain.vue"]}},null,8,["doc"]),e(l,{src:"packages/core/src/components/Card/CardTitle.vue",doc:{name:"PfCardTitle",exportName:"default",displayName:"CardTitle",description:"",tags:{},props:[{name:"component",description:"Sets the base component to render.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Component"}]},defaultValue:{func:!1,value:"'div'"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Card/CardTitle.vue"]}},null,8,["doc"])]),default:a(()=>[N,e(s,{title:"Basic",source:`<pf-card>
  <pf-card-title>Header</pf-card-title>
  <pf-card-body>Body</pf-card-body>
  <pf-card-footer>Footer</pf-card-footer>
</pf-card>`},{default:a(()=>[e(c,null,{default:a(()=>[e(i,null,{default:a(()=>[n("Header")]),_:1}),e(r,null,{default:a(()=>[n("Body")]),_:1}),e(p,null,{default:a(()=>[n("Footer")]),_:1})]),_:1})]),_:1}),e(s,{title:"With image and actions",source:`<pf-card>
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
</pf-card>`},{default:a(()=>[e(c,null,{default:a(()=>[e(b,null,{default:a(()=>[e(C,null,{default:a(()=>[e(y,{src:"https://www.patternfly.org/assets/images/pf_logo.svg",alt:"PatternFly logo",style:{height:"50px"}})]),_:1}),e(m,{"no-offset":""},{default:a(()=>[e(u,{position:"right"},{toggle:a(()=>[e(f,{variant:"plain"},{default:a(()=>[e(g(_))]),_:1})]),default:a(()=>[e(o,null,{default:a(()=>[n("Link")]),_:1}),e(o,{component:"button"},{default:a(()=>[n(" Action ")]),_:1}),e(o,{disabled:""},{default:a(()=>[n(" Disabled Link ")]),_:1}),e(o,{disabled:"",component:"button"},{default:a(()=>[n(" Disabled Action ")]),_:1}),e(w,{component:"li"}),e(o,null,{default:a(()=>[n("Separated Link")]),_:1}),e(o,{component:"button"},{default:a(()=>[n(" Separated Action ")]),_:1})]),_:1}),e(h,{"aria-label":"card checkbox example"})]),_:1})]),_:1}),e(i,null,{default:a(()=>[n("Header")]),_:1}),e(r,null,{default:a(()=>[n("Body")]),_:1}),e(p,null,{default:a(()=>[n("Footer")]),_:1})]),_:1})]),_:1}),e(s,{title:"Expandable with icon",source:`<pf-card expandable>
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
</pf-card>`},{default:a(()=>[e(c,{expandable:""},{default:a(()=>[e(b,null,{default:a(()=>[L,e(m,null,{default:a(()=>[e(u,{position:"right"},{toggle:a(()=>[e(f,{variant:"plain"},{default:a(()=>[e(g(_))]),_:1})]),default:a(()=>[e(o,null,{default:a(()=>[n("Link")]),_:1}),e(o,{component:"button"},{default:a(()=>[n(" Action ")]),_:1}),e(o,{disabled:""},{default:a(()=>[n(" Disabled Link ")]),_:1}),e(o,{disabled:"",component:"button"},{default:a(()=>[n(" Disabled Action ")]),_:1})]),_:1}),e(h,{"aria-label":"card checkbox example"})]),_:1})]),_:1}),e(v,null,{default:a(()=>[e(r,null,{default:a(()=>[n("Body")]),_:1}),e(p,null,{default:a(()=>[n("Footer")]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{title:"Selectable cards",source:`<pf-card selectable-raised selectable-input>
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
</pf-card>`},{intro:a(()=>[M]),default:a(()=>[e(c,{"selectable-raised":"","selectable-input":""},{default:a(()=>[e(b,null,{default:a(()=>[e(m,null,{default:a(()=>[e(u,{position:"right"},{toggle:a(()=>[e(f,{variant:"plain"},{default:a(()=>[e(g(_))]),_:1})]),default:a(()=>[e(o,null,{default:a(()=>[n("Link")]),_:1}),e(o,{component:"button"},{default:a(()=>[n(" Action ")]),_:1}),e(o,{disabled:""},{default:a(()=>[n(" Disabled Link ")]),_:1}),e(o,{disabled:"",component:"button"},{default:a(()=>[n(" Disabled Action ")]),_:1})]),_:1})]),_:1})]),_:1}),e(i,null,{default:a(()=>[n("First card")]),_:1}),e(r,null,{default:a(()=>[n("This is a selectable card. Click me to select me. Click again to deselect me.")]),_:1})]),_:1}),T,e(c,{"selectable-raised":"","selectable-input":""},{default:a(()=>[e(i,null,{default:a(()=>[n("Second card")]),_:1}),e(r,null,{default:a(()=>[n("This is a selectable card. Click me to select me. Click again to deselect me.")]),_:1})]),_:1}),D,e(c,{"selectable-raised":"","selectable-input":"","selectable-disabled":""},{default:a(()=>[e(i,null,{default:a(()=>[n("Third card")]),_:1}),e(r,null,{default:a(()=>[n("This is a raised but disabled card.")]),_:1})]),_:1})]),_:1})]),_:1})}}});export{V as default};
