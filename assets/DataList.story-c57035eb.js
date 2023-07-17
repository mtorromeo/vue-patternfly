import{C as g}from"./code-branch-icon-9f9503b3.js";import{e as S,a as c,o as A,c as D,w as e,b as t,g as i,u as y,p as P,k as C,d as a,_ as B}from"./index-4fece356.js";import"./createIcon-3261221b.js";const n=_=>(P("data-v-dd9c9ac0"),_=_(),C(),_),I=n(()=>a("div",{class:"markdown pf-c-content"},[a("p",null,[i("A "),a("strong",null,"data list"),i(" is used to display large data sets when you need a flexible layout or need to include interactive content like charts.")]),a("p",null,"Use data lists when:"),a("ul",null,[a("li",null,"A flexible layout is more important than arranging information in a grid."),a("li",null,"You want to include active content like a chart."),a("li",null,"Content displayed may vary between rows.")]),a("h2",{class:"pf-c-title"},"Differences from patternfly-react"),a("ul",null,[a("li",null,[i("The "),a("code",null,"filled"),i(" prop of "),a("code",null,"pf-data-list-cell"),i(" is renamed to "),a("code",null,"no-fill"),i(" with inverted behavior.")]),a("li",null,[i("The "),a("code",null,"isPlainButtonAction"),i(" prop of "),a("code",null,"pf-data-list-action"),i(" is renamed to "),a("code",null,"plain-button"),i(".")]),a("li",null,[i("The "),a("code",null,"isValid"),i(" prop of "),a("code",null,"pf-data-list-check"),i(" is renamed to "),a("code",null,"invalid"),i(" with inverted behavior.")]),a("li",null,[i("The "),a("code",null,"pf-data-list-item-row"),i(" and "),a("code",null,"pf-data-list-item-cells"),i(" components are optional and are only required if you need to change their attributes or when you have to control the order of sibling components.")])]),a("p",null,[i("See "),a("a",{href:"#/"},"common differences from patternfly-react"),i(".")])],-1)),T=n(()=>a("span",{id:"simple-item1"},"Primary content",-1)),W=n(()=>a("span",{id:"simple-item2"},"Secondary content (pf-m-no-fill)",-1)),q=n(()=>a("span",{id:"simple-item3"},"Primary content (explicit row and cells)",-1)),M=n(()=>a("span",{id:"simple-item4"},"Secondary content (pf-m-no-fill)",-1)),R=n(()=>a("span",{id:"check-action-item1"},"Primary content",-1)),V=n(()=>a("span",null,"Tertiary content",-1)),E=n(()=>a("span",null,"More content",-1)),N=n(()=>a("span",null,"More content",-1)),U=n(()=>a("span",{id:"check-action-item2"},"Primary content - Lorem ipsum",-1)),F=n(()=>a("span",{id:"check-action-item3"},"Primary content - Lorem ipsum",-1)),Y=n(()=>a("span",{id:"selectable-action-item1"},"Single actionable Primary content",-1)),j=n(()=>a("span",{id:"selectable-actions-item2"},"Selectable actions Primary content",-1)),z=n(()=>a("div",{id:"ex-item1"},"Primary content",-1)),G=n(()=>a("span",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",-1)),H=n(()=>a("a",{href:"#"},"link",-1)),J=n(()=>a("span",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",-1)),K=n(()=>a("span",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",-1)),O=n(()=>a("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",-1)),Q=n(()=>a("div",{id:"ex-item2"},"Secondary content",-1)),X=n(()=>a("span",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",-1)),Z=n(()=>a("span",null,"Lorem ipsum dolor sit amet.",-1)),$=n(()=>a("span",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",-1)),tt=n(()=>a("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",-1)),et=n(()=>a("div",{id:"ex-item3"},"Tertiary content",-1)),at=n(()=>a("span",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",-1)),it=n(()=>a("span",null,"Lorem ipsum dolor sit amet.",-1)),lt=n(()=>a("span",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",-1)),nt=n(()=>a("div",{class:"preview-placeholder"},[a("b",{id:"width-ex1-item1"},"default"),a("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit.")],-1)),ot=n(()=>a("div",{class:"preview-placeholder"},[a("b",null,"default"),a("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")],-1)),dt=n(()=>a("div",{class:"preview-placeholder"},[a("b",{id:"width-ex2-item1"},"width 2"),a("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.")],-1)),ct=n(()=>a("div",{class:"preview-placeholder"},[a("b",null,"width 4"),a("p",null,"Lorem ipsum dolor sit amet.")],-1)),st=n(()=>a("div",{class:"preview-placeholder"},[a("b",{id:"width-ex3-item1"},"width 5"),a("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit.")],-1)),pt=n(()=>a("div",{class:"preview-placeholder"},[a("b",null,"width 2"),a("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit.")],-1)),rt=n(()=>a("div",{class:"preview-placeholder"},"default",-1)),mt=n(()=>a("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",-1)),ft=n(()=>a("span",{id:"simple-item5"},"Primary content",-1)),ut=S({__name:"DataList.story",setup(_){const x=console.log;return(bt,_t)=>{const v=c("component-title"),l=c("pf-data-list-cell"),d=c("pf-data-list-item"),p=c("pf-data-list"),r=c("story-canvas"),w=c("pf-data-list-item-cells"),k=c("pf-data-list-item-row"),u=c("pf-data-list-check"),m=c("pf-kebab-toggle"),o=c("pf-dropdown-item"),f=c("pf-dropdown"),s=c("pf-data-list-action"),b=c("pf-button"),h=c("pf-data-list-content"),L=c("doc-page");return A(),D(L,{title:"Data list"},{default:e(()=>[t(v,{name:"pf-data-list"}),I,t(r,{title:"Basic",source:`<pf-data-list aria-label="Simple data list example">
  <pf-data-list-item aria-labelledby="simple-item1">
    <pf-data-list-cell>
      <span id="simple-item1">Primary content</span>
    </pf-data-list-cell>
    <pf-data-list-cell>Secondary content</pf-data-list-cell>
  </pf-data-list-item>

  <pf-data-list-item aria-labelledby="simple-item2">
    <pf-data-list-cell no-fill>
      <span id="simple-item2">Secondary content (pf-m-no-fill)</span>
    </pf-data-list-cell>
    <pf-data-list-cell no-fill align-right>
      Secondary content (pf-m-align-right pf-m-no-fill)
    </pf-data-list-cell>
  </pf-data-list-item>
</pf-data-list>`},{default:e(()=>[t(p,{"aria-label":"Simple data list example"},{default:e(()=>[t(d,{"aria-labelledby":"simple-item1"},{default:e(()=>[t(l,null,{default:e(()=>[T]),_:1}),t(l,null,{default:e(()=>[i("Secondary content")]),_:1})]),_:1}),t(d,{"aria-labelledby":"simple-item2"},{default:e(()=>[t(l,{"no-fill":""},{default:e(()=>[W]),_:1}),t(l,{"no-fill":"","align-right":""},{default:e(()=>[i(" Secondary content (pf-m-align-right pf-m-no-fill) ")]),_:1})]),_:1})]),_:1})]),_:1}),t(r,{title:"Compact",source:`<pf-data-list aria-label="Compact data list example" compact>
  <pf-data-list-item aria-labelledby="simple-item3">
    <pf-data-list-item-row>
      <pf-data-list-item-cells>
        <pf-data-list-cell>
          <span id="simple-item3">Primary content (explicit row and cells)</span>
        </pf-data-list-cell>
        <pf-data-list-cell>
          Secondary content
        </pf-data-list-cell>
      </pf-data-list-item-cells>
    </pf-data-list-item-row>
  </pf-data-list-item>

  <pf-data-list-item aria-labelledby="simple-item4">
    <pf-data-list-cell no-fill>
      <span id="simple-item4">Secondary content (pf-m-no-fill)</span>
    </pf-data-list-cell>
    <pf-data-list-cell no-fill align-right>
      Secondary content (pf-m-align-right pf-m-no-fill)
    </pf-data-list-cell>
  </pf-data-list-item>
</pf-data-list>`},{default:e(()=>[t(p,{"aria-label":"Compact data list example",compact:""},{default:e(()=>[t(d,{"aria-labelledby":"simple-item3"},{default:e(()=>[t(k,null,{default:e(()=>[t(w,null,{default:e(()=>[t(l,null,{default:e(()=>[q]),_:1}),t(l,null,{default:e(()=>[i(" Secondary content ")]),_:1})]),_:1})]),_:1})]),_:1}),t(d,{"aria-labelledby":"simple-item4"},{default:e(()=>[t(l,{"no-fill":""},{default:e(()=>[M]),_:1}),t(l,{"no-fill":"","align-right":""},{default:e(()=>[i(" Secondary content (pf-m-align-right pf-m-no-fill) ")]),_:1})]),_:1})]),_:1})]),_:1}),t(r,{title:"Checkboxes, actions and additional cells",source:`<pf-data-list aria-label="Checkbox and action data list example">
  <pf-data-list-item aria-labelledby="check-action-item1">
    <pf-data-list-check aria-labelledby="check-action-item1" name="check-action-check1" ></pf-data-list-check>

    <pf-data-list-cell>
      <span id="check-action-item1">Primary content</span> Dolor sit amet, consectetur adipisicing elit, sed
      do eiusmod.
    </pf-data-list-cell>
    <pf-data-list-cell>
      Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
    </pf-data-list-cell>
    <pf-data-list-cell>
      <span>Tertiary content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
    </pf-data-list-cell>
    <pf-data-list-cell>
      <span>More content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
    </pf-data-list-cell>
    <pf-data-list-cell>
      <span>More content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
    </pf-data-list-cell>

    <pf-data-list-action
      id="check-action-action1"
      aria-labelledby="check-action-item1 check-action-action1"
      aria-label="Actions"
      plain-button
    >
      <pf-dropdown plain position="right">
        <template #toggle>
          <pf-kebab-toggle></pf-kebab-toggle>
        </template>

        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button">Action</pf-dropdown-item>
        <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
      </pf-dropdown>
    
  </pf-data-list-item>

  <pf-data-list-item aria-labelledby="check-action-item2">
    <pf-data-list-check aria-labelledby="check-action-item2" name="check-action-check1" ></pf-data-list-check>

    <pf-data-list-cell>
      <span id="check-action-item2">Primary content - Lorem ipsum</span> dolor sit amet, consectetur
      adipisicing elit, sed do eiusmod.
    </pf-data-list-cell>
    <pf-data-list-cell>
      Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
    </pf-data-list-cell>

    <pf-data-list-action
      id="check-action-action2"
      aria-labelledby="check-action-item2 check-action-action2"
      aria-label="Actions"
      plain-button
      visibility-lg="hidden"
    >
      <pf-dropdown plain position="right">
        <template #toggle>
          <pf-kebab-toggle></pf-kebab-toggle>
        </template>

        <pf-dropdown-item component="button">Primary</pf-dropdown-item>
        <pf-dropdown-item component="button">Secondary</pf-dropdown-item>
      </pf-dropdown>
    

    <pf-data-list-action
      id="check-action-action3"
      aria-labelledby="check-action-item2 check-action-action3"
      aria-label="Actions"
      plain-button
      visibility="hidden"
      visibility-lg="visible"
    >
      <pf-button variant="primary">Primary</pf-button>
      <pf-button variant="secondary">Secondary</pf-button>
    
  </pf-data-list-item>

  <pf-data-list-item aria-labelledby="check-action-item3">
    <pf-data-list-check aria-labelledby="check-action-item3" name="check-action-check1" ></pf-data-list-check>

    <pf-data-list-cell>
      <span id="check-action-item3">Primary content - Lorem ipsum</span> dolor sit amet, consectetur
      adipisicing elit, sed do eiusmod.
    </pf-data-list-cell>
    <pf-data-list-cell>
      Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
    </pf-data-list-cell>

    <pf-data-list-action
      id="check-action-action3"
      aria-labelledby="check-action-item3 check-action-action3"
      aria-label="Actions"
      plain-button
      visibility-xl="hidden"
    >
      <pf-dropdown plain position="right">
        <template #toggle>
          <pf-kebab-toggle></pf-kebab-toggle>
        </template>

        <pf-dropdown-item component="button">Primary</pf-dropdown-item>
        <pf-dropdown-item component="button">Secondary</pf-dropdown-item>
        <pf-dropdown-item component="button">Secondary</pf-dropdown-item>
        <pf-dropdown-item component="button">Secondary</pf-dropdown-item>
      </pf-dropdown>
    

    <pf-data-list-action
      id="check-action-action3"
      aria-labelledby="check-action-item3 check-action-action3"
      aria-label="Actions"
      plain-button
      visibility="hidden"
      visibility-xl="visible"
    >
      <pf-button variant="primary">Primary</pf-button>
      <pf-button variant="secondary">Secondary</pf-button>
      <pf-button variant="secondary">Secondary</pf-button>
      <pf-button variant="secondary">Secondary</pf-button>
    
  </pf-data-list-item>
</pf-data-list>`},{default:e(()=>[t(p,{"aria-label":"Checkbox and action data list example"},{default:e(()=>[t(d,{"aria-labelledby":"check-action-item1"},{default:e(()=>[t(u,{"aria-labelledby":"check-action-item1",name:"check-action-check1"}),t(l,null,{default:e(()=>[R,i(" Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. ")]),_:1}),t(l,null,{default:e(()=>[i(" Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. ")]),_:1}),t(l,null,{default:e(()=>[V,i(" Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. ")]),_:1}),t(l,null,{default:e(()=>[E,i(" Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. ")]),_:1}),t(l,null,{default:e(()=>[N,i(" Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. ")]),_:1}),t(s,{id:"check-action-action1","aria-labelledby":"check-action-item1 check-action-action1","aria-label":"Actions","plain-button":""},{default:e(()=>[t(f,{plain:"",position:"right"},{toggle:e(()=>[t(m)]),default:e(()=>[t(o,null,{default:e(()=>[i("Link")]),_:1}),t(o,{component:"button"},{default:e(()=>[i("Action")]),_:1}),t(o,{disabled:""},{default:e(()=>[i("Disabled Link")]),_:1})]),_:1})]),_:1})]),_:1}),t(d,{"aria-labelledby":"check-action-item2"},{default:e(()=>[t(u,{"aria-labelledby":"check-action-item2",name:"check-action-check1"}),t(l,null,{default:e(()=>[U,i(" dolor sit amet, consectetur adipisicing elit, sed do eiusmod. ")]),_:1}),t(l,null,{default:e(()=>[i(" Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. ")]),_:1}),t(s,{id:"check-action-action2","aria-labelledby":"check-action-item2 check-action-action2","aria-label":"Actions","plain-button":"","visibility-lg":"hidden"},{default:e(()=>[t(f,{plain:"",position:"right"},{toggle:e(()=>[t(m)]),default:e(()=>[t(o,{component:"button"},{default:e(()=>[i("Primary")]),_:1}),t(o,{component:"button"},{default:e(()=>[i("Secondary")]),_:1})]),_:1})]),_:1}),t(s,{id:"check-action-action3","aria-labelledby":"check-action-item2 check-action-action3","aria-label":"Actions","plain-button":"",visibility:"hidden","visibility-lg":"visible"},{default:e(()=>[t(b,{variant:"primary"},{default:e(()=>[i("Primary")]),_:1}),t(b,{variant:"secondary"},{default:e(()=>[i("Secondary")]),_:1})]),_:1})]),_:1}),t(d,{"aria-labelledby":"check-action-item3"},{default:e(()=>[t(u,{"aria-labelledby":"check-action-item3",name:"check-action-check1"}),t(l,null,{default:e(()=>[F,i(" dolor sit amet, consectetur adipisicing elit, sed do eiusmod. ")]),_:1}),t(l,null,{default:e(()=>[i(" Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. ")]),_:1}),t(s,{id:"check-action-action3","aria-labelledby":"check-action-item3 check-action-action3","aria-label":"Actions","plain-button":"","visibility-xl":"hidden"},{default:e(()=>[t(f,{plain:"",position:"right"},{toggle:e(()=>[t(m)]),default:e(()=>[t(o,{component:"button"},{default:e(()=>[i("Primary")]),_:1}),t(o,{component:"button"},{default:e(()=>[i("Secondary")]),_:1}),t(o,{component:"button"},{default:e(()=>[i("Secondary")]),_:1}),t(o,{component:"button"},{default:e(()=>[i("Secondary")]),_:1})]),_:1})]),_:1}),t(s,{id:"check-action-action3","aria-labelledby":"check-action-item3 check-action-action3","aria-label":"Actions","plain-button":"",visibility:"hidden","visibility-xl":"visible"},{default:e(()=>[t(b,{variant:"primary"},{default:e(()=>[i("Primary")]),_:1}),t(b,{variant:"secondary"},{default:e(()=>[i("Secondary")]),_:1}),t(b,{variant:"secondary"},{default:e(()=>[i("Secondary")]),_:1}),t(b,{variant:"secondary"},{default:e(()=>[i("Secondary")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(r,{title:"Selectable rows",source:`<pf-data-list
  aria-label="selectable data list example"
  @update:selected="log"
>
  <pf-data-list-item id="item1" aria-labelledby="selectable-action-item1">
    <pf-data-list-cell>
      <span id="selectable-action-item1">Single actionable Primary content</span>
    </pf-data-list-cell>
    <pf-data-list-cell>Single actionable Secondary content</pf-data-list-cell>

    <pf-data-list-action
      id="selectable-action-action1"
      aria-labelledby="selectable-action-item1 selectable-action-action1"
      aria-label="Actions"
      plain-button
    >
      <pf-dropdown plain position="right">
        <template #toggle>
          <pf-kebab-toggle></pf-kebab-toggle>
        </template>
        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button">
          Action
        </pf-dropdown-item>
        <pf-dropdown-item disabled>
          Disabled Link
        </pf-dropdown-item>
      </pf-dropdown>
    
  </pf-data-list-item>

  <pf-data-list-item id="item2" aria-labelledby="selectable-actions-item2">
    <pf-data-list-cell>
      <span id="selectable-actions-item2">Selectable actions Primary content</span>
    </pf-data-list-cell>
    <pf-data-list-cell>Selectable actions Secondary content</pf-data-list-cell>

    <pf-data-list-action
      id="selectable-actions-action2"
      aria-labelledby="selectable-actions-item2 selectable-actions-action2"
      aria-label="Actions"
      plain-button
    >
      <pf-dropdown plain position="right">
        <template #toggle>
          <pf-kebab-toggle></pf-kebab-toggle>
        </template>

        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button">
          Action
        </pf-dropdown-item>
        <pf-dropdown-item disabled>
          Disabled Link
        </pf-dropdown-item>
      </pf-dropdown>
    
  </pf-data-list-item>
`},{default:e(()=>[t(p,{"aria-label":"selectable data list example","onUpdate:selected":y(x)},{default:e(()=>[t(d,{id:"item1","aria-labelledby":"selectable-action-item1"},{default:e(()=>[t(l,null,{default:e(()=>[Y]),_:1}),t(l,null,{default:e(()=>[i("Single actionable Secondary content")]),_:1}),t(s,{id:"selectable-action-action1","aria-labelledby":"selectable-action-item1 selectable-action-action1","aria-label":"Actions","plain-button":""},{default:e(()=>[t(f,{plain:"",position:"right"},{toggle:e(()=>[t(m)]),default:e(()=>[t(o,null,{default:e(()=>[i("Link")]),_:1}),t(o,{component:"button"},{default:e(()=>[i(" Action ")]),_:1}),t(o,{disabled:""},{default:e(()=>[i(" Disabled Link ")]),_:1})]),_:1})]),_:1})]),_:1}),t(d,{id:"item2","aria-labelledby":"selectable-actions-item2"},{default:e(()=>[t(l,null,{default:e(()=>[j]),_:1}),t(l,null,{default:e(()=>[i("Selectable actions Secondary content")]),_:1}),t(s,{id:"selectable-actions-action2","aria-labelledby":"selectable-actions-item2 selectable-actions-action2","aria-label":"Actions","plain-button":""},{default:e(()=>[t(f,{plain:"",position:"right"},{toggle:e(()=>[t(m)]),default:e(()=>[t(o,null,{default:e(()=>[i("Link")]),_:1}),t(o,{component:"button"},{default:e(()=>[i(" Action ")]),_:1}),t(o,{disabled:""},{default:e(()=>[i(" Disabled Link ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["onUpdate:selected"])]),_:1}),t(r,{title:"Expandable",source:`<pf-data-list aria-label="Expandable data list example" expandable>
  <pf-data-list-item aria-labelledby="ex-item1">
    <pf-data-list-cell icon>
      <CodeBranchIcon></CodeBranchIcon>
    </pf-data-list-cell>
    <pf-data-list-cell>
      <div id="ex-item1">Primary content</div>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
      <a href="#">link</a>
    </pf-data-list-cell>
    <pf-data-list-cell>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
    </pf-data-list-cell>
    <pf-data-list-cell>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
    </pf-data-list-cell>

    <pf-data-list-action
      id="ex-action1"
      aria-labelledby="ex-item1 ex-action1"
      aria-label="Actions"
      plain-button
    >
      <pf-dropdown plain position="right">
        <template #toggle>
          <pf-kebab-toggle></pf-kebab-toggle>
        </template>

        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button">
          Action
        </pf-dropdown-item>
        <pf-dropdown-item disabled>
          Disabled Link
        </pf-dropdown-item>
      </pf-dropdown>
    

    <pf-data-list-content>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.
      </p>
    </pf-data-list-content>
  </pf-data-list-item>

  <pf-data-list-item aria-labelledby="ex-item2">
    <pf-data-list-item-row>
      <pf-data-list-item-cells>
        <pf-data-list-cell icon>
          <CodeBranchIcon></CodeBranchIcon>
        </pf-data-list-cell>
        <pf-data-list-cell>
          <div id="ex-item2">Secondary content</div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </pf-data-list-cell>
        <pf-data-list-cell>
          <span>Lorem ipsum dolor sit amet.</span>
        </pf-data-list-cell>
        <pf-data-list-cell>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </pf-data-list-cell>
      </pf-data-list-item-cells>

      <pf-data-list-action
        id="ex-action2"
        aria-labelledby="ex-item2 ex-action2"
        aria-label="Actions"
        plain-button
      >
        <pf-dropdown plain position="right">
          <template #toggle>
            <pf-kebab-toggle></pf-kebab-toggle>
          </template>

          <pf-dropdown-item>Link</pf-dropdown-item>
          <pf-dropdown-item component="button">
            Action
          </pf-dropdown-item>
          <pf-dropdown-item disabled>
            Disabled Link
          </pf-dropdown-item>
        </pf-dropdown>
      
    </pf-data-list-item-row>

    <pf-data-list-content>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.
      </p>
    </pf-data-list-content>
  </pf-data-list-item>

  <pf-data-list-item aria-labelledby="ex-item3">
    <pf-data-list-cell icon>
      <CodeBranchIcon></CodeBranchIcon>
    </pf-data-list-cell>
    <pf-data-list-cell>
      <div id="ex-item3">Tertiary content</div>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
    </pf-data-list-cell>
    <pf-data-list-cell>
      <span>Lorem ipsum dolor sit amet.</span>
    </pf-data-list-cell>
    <pf-data-list-cell>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
    </pf-data-list-cell>

    <pf-data-list-action
      id="ex-action3"
      aria-labelledby="ex-item3 ex-action3"
      aria-label="Actions"
      plain-button
    >
      <pf-dropdown plain position="right">
        <template #toggle>
          <pf-kebab-toggle></pf-kebab-toggle>
        </template>

        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button">
          Action
        </pf-dropdown-item>
        <pf-dropdown-item disabled>
          Disabled Link
        </pf-dropdown-item>
      </pf-dropdown>
    

    <pf-data-list-content no-padding>
      This expanded section has no padding.
    </pf-data-list-content>
  </pf-data-list-item>
</pf-data-list>`},{default:e(()=>[t(p,{"aria-label":"Expandable data list example",expandable:""},{default:e(()=>[t(d,{"aria-labelledby":"ex-item1"},{default:e(()=>[t(l,{icon:""},{default:e(()=>[t(y(g))]),_:1}),t(l,null,{default:e(()=>[z,G,H]),_:1}),t(l,null,{default:e(()=>[J]),_:1}),t(l,null,{default:e(()=>[K]),_:1}),t(s,{id:"ex-action1","aria-labelledby":"ex-item1 ex-action1","aria-label":"Actions","plain-button":""},{default:e(()=>[t(f,{plain:"",position:"right"},{toggle:e(()=>[t(m)]),default:e(()=>[t(o,null,{default:e(()=>[i("Link")]),_:1}),t(o,{component:"button"},{default:e(()=>[i(" Action ")]),_:1}),t(o,{disabled:""},{default:e(()=>[i(" Disabled Link ")]),_:1})]),_:1})]),_:1}),t(h,null,{default:e(()=>[O]),_:1})]),_:1}),t(d,{"aria-labelledby":"ex-item2"},{default:e(()=>[t(k,null,{default:e(()=>[t(w,null,{default:e(()=>[t(l,{icon:""},{default:e(()=>[t(y(g))]),_:1}),t(l,null,{default:e(()=>[Q,X]),_:1}),t(l,null,{default:e(()=>[Z]),_:1}),t(l,null,{default:e(()=>[$]),_:1})]),_:1}),t(s,{id:"ex-action2","aria-labelledby":"ex-item2 ex-action2","aria-label":"Actions","plain-button":""},{default:e(()=>[t(f,{plain:"",position:"right"},{toggle:e(()=>[t(m)]),default:e(()=>[t(o,null,{default:e(()=>[i("Link")]),_:1}),t(o,{component:"button"},{default:e(()=>[i(" Action ")]),_:1}),t(o,{disabled:""},{default:e(()=>[i(" Disabled Link ")]),_:1})]),_:1})]),_:1})]),_:1}),t(h,null,{default:e(()=>[tt]),_:1})]),_:1}),t(d,{"aria-labelledby":"ex-item3"},{default:e(()=>[t(l,{icon:""},{default:e(()=>[t(y(g))]),_:1}),t(l,null,{default:e(()=>[et,at]),_:1}),t(l,null,{default:e(()=>[it]),_:1}),t(l,null,{default:e(()=>[lt]),_:1}),t(s,{id:"ex-action3","aria-labelledby":"ex-item3 ex-action3","aria-label":"Actions","plain-button":""},{default:e(()=>[t(f,{plain:"",position:"right"},{toggle:e(()=>[t(m)]),default:e(()=>[t(o,null,{default:e(()=>[i("Link")]),_:1}),t(o,{component:"button"},{default:e(()=>[i(" Action ")]),_:1}),t(o,{disabled:""},{default:e(()=>[i(" Disabled Link ")]),_:1})]),_:1})]),_:1}),t(h,{"no-padding":""},{default:e(()=>[i(" This expanded section has no padding. ")]),_:1})]),_:1})]),_:1})]),_:1}),t(r,{title:"Width modifiers - Default fitting example 1",source:`<pf-data-list aria-label="Width modifier data list example 1">
  <pf-data-list-item aria-labelledby="width-ex1-item1">
    <pf-data-list-check aria-labelledby="width-ex1-item1" name="width-ex1-item1" ></pf-data-list-check>

    <pf-data-list-cell>
      <div class="preview-placeholder">
        <b id="width-ex1-item1">default</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </pf-data-list-cell>
    <pf-data-list-cell>
      <div class="preview-placeholder">
        <b>default</b>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
      </div>
    </pf-data-list-cell>
  </pf-data-list-item>
</pf-data-list>`},{default:e(()=>[t(p,{"aria-label":"Width modifier data list example 1"},{default:e(()=>[t(d,{"aria-labelledby":"width-ex1-item1"},{default:e(()=>[t(u,{"aria-labelledby":"width-ex1-item1",name:"width-ex1-item1"}),t(l,null,{default:e(()=>[nt]),_:1}),t(l,null,{default:e(()=>[ot]),_:1})]),_:1})]),_:1})]),_:1}),t(r,{title:"Width modifiers - Flex modifiers - example 2",source:`<pf-data-list aria-label="Width modifier data list example 2">
  <pf-data-list-item aria-labelledby="width-ex2-item1">
    <pf-data-list-check aria-labelledby="width-ex2-item1" name="width-ex2-item1" ></pf-data-list-check>

    <pf-data-list-cell :width="2">
      <div class="preview-placeholder">
        <b id="width-ex2-item1">width 2</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
      </div>
    </pf-data-list-cell>
    <pf-data-list-cell :width="4">
      <div class="preview-placeholder">
        <b>width 4</b>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </pf-data-list-cell>
    <pf-data-list-action
      aria-labelledby="width-ex2-item1 width-ex2-action1"
      aria-label="Actions"
      plain-button
    >
      <pf-dropdown plain position="right">
        <template #toggle>
          <pf-kebab-toggle></pf-kebab-toggle>
        </template>

        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button">
          Action
        </pf-dropdown-item>
        <pf-dropdown-item disabled>
          Disabled Link
        </pf-dropdown-item>
      </pf-dropdown>
    
  </pf-data-list-item>
</pf-data-list>`},{default:e(()=>[t(p,{"aria-label":"Width modifier data list example 2"},{default:e(()=>[t(d,{"aria-labelledby":"width-ex2-item1"},{default:e(()=>[t(u,{"aria-labelledby":"width-ex2-item1",name:"width-ex2-item1"}),t(l,{width:2},{default:e(()=>[dt]),_:1}),t(l,{width:4},{default:e(()=>[ct]),_:1}),t(s,{"aria-labelledby":"width-ex2-item1 width-ex2-action1","aria-label":"Actions","plain-button":""},{default:e(()=>[t(f,{plain:"",position:"right"},{toggle:e(()=>[t(m)]),default:e(()=>[t(o,null,{default:e(()=>[i("Link")]),_:1}),t(o,{component:"button"},{default:e(()=>[i(" Action ")]),_:1}),t(o,{disabled:""},{default:e(()=>[i(" Disabled Link ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(r,{title:"Width modifiers - Flex modifiers - example 3",source:`<pf-data-list aria-label="Width modifier data list example 3" expandable>
  <pf-data-list-item aria-labelledby="width-ex3-item1">
    <pf-data-list-check aria-labelledby="width-ex3-item1" name="width-ex3-item1" ></pf-data-list-check>

    <pf-data-list-cell :width="5">
      <div class="preview-placeholder">
        <b id="width-ex3-item1">width 5</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </pf-data-list-cell>
    <pf-data-list-cell :width="2">
      <div class="preview-placeholder">
        <b>width 2</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </pf-data-list-cell>
    <pf-data-list-cell>
      <div class="preview-placeholder">default</div>
    </pf-data-list-cell>

    <pf-data-list-action
      id="width-ex3-action1"
      aria-labelledby="width-ex3-item1 width-ex3-action1"
      aria-label="Actions"
      plain-button
    >
      <pf-dropdown plain position="right">
        <template #toggle>
          <pf-kebab-toggle></pf-kebab-toggle>
        </template>

        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button">
          Action
        </pf-dropdown-item>
        <pf-dropdown-item disabled>
          Disabled Link
        </pf-dropdown-item>
      </pf-dropdown>
    

    <pf-data-list-content aria-label="Primary Content Details">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.
      </p>
    </pf-data-list-content>
  </pf-data-list-item>
</pf-data-list>`},{default:e(()=>[t(p,{"aria-label":"Width modifier data list example 3",expandable:""},{default:e(()=>[t(d,{"aria-labelledby":"width-ex3-item1"},{default:e(()=>[t(u,{"aria-labelledby":"width-ex3-item1",name:"width-ex3-item1"}),t(l,{width:5},{default:e(()=>[st]),_:1}),t(l,{width:2},{default:e(()=>[pt]),_:1}),t(l,null,{default:e(()=>[rt]),_:1}),t(s,{id:"width-ex3-action1","aria-labelledby":"width-ex3-item1 width-ex3-action1","aria-label":"Actions","plain-button":""},{default:e(()=>[t(f,{plain:"",position:"right"},{toggle:e(()=>[t(m)]),default:e(()=>[t(o,null,{default:e(()=>[i("Link")]),_:1}),t(o,{component:"button"},{default:e(()=>[i(" Action ")]),_:1}),t(o,{disabled:""},{default:e(()=>[i(" Disabled Link ")]),_:1})]),_:1})]),_:1}),t(h,{"aria-label":"Primary Content Details"},{default:e(()=>[mt]),_:1})]),_:1})]),_:1})]),_:1}),t(r,{title:"Controlling text",source:`<pf-data-list aria-label="Simple data list example">
  <pf-data-list-item aria-labelledby="simple-item5">
    <pf-data-list-cell wrap-modifier="breakWord">
      <span id="simple-item5">Primary content</span>
    </pf-data-list-cell>
    <pf-data-list-cell wrap-modifier="truncate">
      Really really really really really really really really really really really really really really long
      description that should be truncated before it ends
    </pf-data-list-cell>
  </pf-data-list-item>
</pf-data-list>`},{default:e(()=>[t(p,{"aria-label":"Simple data list example"},{default:e(()=>[t(d,{"aria-labelledby":"simple-item5"},{default:e(()=>[t(l,{"wrap-modifier":"breakWord"},{default:e(()=>[ft]),_:1}),t(l,{"wrap-modifier":"truncate"},{default:e(()=>[i(" Really really really really really really really really really really really really really really long description that should be truncated before it ends ")]),_:1})]),_:1})]),_:1})]),_:1}),t(r,{title:"Small grid breakpoint",source:`<pf-data-list aria-label="Simple data list example" grid-breakpoint="sm">
  <pf-data-list-item>
    <pf-data-list-cell>
      Primary content
    </pf-data-list-cell>
    <pf-data-list-cell>
      Really really really really really really really really really really really really really really long
      description that should be truncated before it ends
    </pf-data-list-cell>
  </pf-data-list-item>
</pf-data-list>`},{default:e(()=>[t(p,{"aria-label":"Simple data list example","grid-breakpoint":"sm"},{default:e(()=>[t(d,null,{default:e(()=>[t(l,null,{default:e(()=>[i(" Primary content ")]),_:1}),t(l,null,{default:e(()=>[i(" Really really really really really really really really really really really really really really long description that should be truncated before it ends ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});const wt=B(ut,[["__scopeId","data-v-dd9c9ac0"]]);export{wt as default};
