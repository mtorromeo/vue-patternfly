import{C as h}from"./code-branch-icon-DsljMJEB.js";import{E as b}from"./ellipsis-vertical-icon-CaFlybdt.js";import{g as S,a as s,c as _,o as q,w as t,d as i,b as e,e as n,u as p,_ as A}from"./index-DK9vAQUq.js";const P=S({__name:"DataList.story",setup(I){const L=console.log;return(C,a)=>{const y=s("component-info"),l=s("pf-data-list-cell"),d=s("pf-data-list-item"),m=s("pf-data-list"),c=s("story-canvas"),k=s("pf-data-list-item-cells"),x=s("pf-data-list-item-row"),g=s("pf-data-list-check"),u=s("pf-menu-toggle"),o=s("pf-dropdown-item"),f=s("pf-dropdown"),r=s("pf-data-list-action"),w=s("pf-button"),v=s("pf-data-list-content"),D=s("doc-page");return q(),_(D,{name:"Components/DataList.story.vue",title:"Data list"},{description:t(()=>a[0]||(a[0]=[n("A "),i("b",null,"data list",-1),n(" is used to display large data sets when you need a flexible layout or need to include interactive content like charts.")])),apidocs:t(()=>[e(y,{src:"packages/core/src/components/DataList/DataList.vue",doc:{name:"PfDataList",exportName:"default",displayName:"DataList",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"selected",description:"Array for multiple selection, single value for single selection, undefined to disable selection",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"symbol"},{name:"Array",elements:[{name:"TSParenthesizedType"}]}]},defaultValue:{func:!1,value:"undefined"}},{name:"selectionInputName",description:"Name of the item input (radio or checkbox) when item selection is enabled",required:!1,type:{name:"string"}},{name:"selectionInputValue",description:"Defines the value for the input (radio or checkbox)",required:!1,type:{name:"string"}},{name:"selectionMultiple",description:"Flag indicating if multiple pf-data-list-items are selectable",required:!1,type:{name:"boolean"}},{name:"compact",description:"Flag indicating if pf-data-list should have compact styling",required:!1,type:{name:"boolean"}},{name:"expandable",description:"Flag indicating if pf-data-list-items should have expandable styling",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"gridBreakpoint",description:"Specifies the grid breakpoints",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"always"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"wrapModifier",description:"Determines which wrapping modifier to apply to the pf-data-list",required:!1,type:{name:"union",elements:[{name:"DataListWrapModifier"},{name:'"nowrap"'},{name:'"truncate"'},{name:'"breakWord"'}]}}],events:[{name:"update:selected",type:{names:["any"]}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/DataList/DataList.vue"]}}),e(y,{src:"packages/core/src/components/DataList/DataListAction.vue",doc:{name:"PfDataListAction",exportName:"default",displayName:"DataListAction",description:"",tags:{},props:[{name:"visibility2xl",required:!1,type:{name:"union",elements:[{name:'"hidden"'},{name:'"visible"'}]}},{name:"visibilityXl",required:!1,type:{name:"union",elements:[{name:'"hidden"'},{name:'"visible"'}]}},{name:"visibilityLg",required:!1,type:{name:"union",elements:[{name:'"hidden"'},{name:'"visible"'}]}},{name:"visibilityMd",required:!1,type:{name:"union",elements:[{name:'"hidden"'},{name:'"visible"'}]}},{name:"visibilitySm",required:!1,type:{name:"union",elements:[{name:'"hidden"'},{name:'"visible"'}]}},{name:"visibility",required:!1,type:{name:"union",elements:[{name:'"hidden"'},{name:'"visible"'}]}},{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"plainButton",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/DataList/DataListAction.vue"]}}),e(y,{src:"packages/core/src/components/DataList/DataListCell.vue",doc:{name:"PfDataListCell",exportName:"default",displayName:"DataListCell",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"noFill",required:!1,type:{name:"boolean"}},{name:"width",required:!1,type:{name:"union",elements:[{name:"1"},{name:"2"},{name:"3"},{name:"4"},{name:"5"}]}},{name:"alignRight",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"boolean"}},{name:"wrapModifier",required:!1,type:{name:"DataListWrapModifier"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/DataList/DataListCell.vue"]}}),e(y,{src:"packages/core/src/components/DataList/DataListCheck.vue",doc:{name:"PfDataListCheck",exportName:"default",displayName:"DataListCheck",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"otherControls",required:!1,type:{name:"boolean"}},{name:"checked",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"update:checked",type:{names:["boolean"]}}],sourceFiles:["../../packages/core/src/components/DataList/DataListCheck.vue"]}}),e(y,{src:"packages/core/src/components/DataList/DataListContent.vue",doc:{name:"PfDataListContent",exportName:"default",displayName:"DataListContent",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"noPadding",required:!1,type:{name:"boolean"}},{name:"hidden",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/DataList/DataListContent.vue"]}}),e(y,{src:"packages/core/src/components/DataList/DataListItem.vue",doc:{name:"PfDataListItem",exportName:"default",displayName:"DataListItem",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"selected",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"selectionInputName",description:"Name of the item inputs (radio or checkbox) when item selection is enabled",required:!1,type:{name:"string"}},{name:"selectionInputValue",description:"Defines the value for the inputs (radio or checkbox) of the pf-data-list-item",required:!1,type:{name:"string"}},{name:"expandable",description:"Flag indicating if the pf-data-list-item is expandable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"expanded",description:"Flag to show if the expanded content of the pf-data-list-item is visible",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"click",type:{names:["PointerEvent"]}},{name:"update:selected",type:{names:["boolean"]}},{name:"update:expanded",type:{names:["boolean"]}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/DataList/DataListItem.vue"]}}),e(y,{src:"packages/core/src/components/DataList/DataListItemCells.vue",doc:{name:"PfDataListItemCells",exportName:"default",displayName:"DataListItemCells",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/DataList/DataListItemCells.vue"]}}),e(y,{src:"packages/core/src/components/DataList/DataListItemRow.vue",doc:{name:"PfDataListItemRow",exportName:"default",displayName:"DataListItemRow",description:"",tags:{},expose:[{name:"toggle"}],props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"wrapModifier",required:!1,type:{name:"DataListWrapModifier"}}],slots:[{name:"toggle"},{name:"default"}],sourceFiles:["../../packages/core/src/components/DataList/DataListItemRow.vue"]}}),e(y,{src:"packages/core/src/components/DataList/DataListToggle.vue",doc:{name:"PfDataListToggle",exportName:"default",displayName:"DataListToggle",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"id",required:!1,type:{name:"string"}},{name:"expanded",required:!1,type:{name:"boolean"}},{name:"noPadding",required:!1,type:{name:"boolean"}},{name:"ariaLabelledby",required:!1,type:{name:"string"}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Details'"}},{name:"ariaControls",required:!1,type:{name:"string"}}],events:[{name:"click",type:{names:["Event"]}}],sourceFiles:["../../packages/core/src/components/DataList/DataListToggle.vue"]}})]),default:t(()=>[a[82]||(a[82]=i("div",{class:"markdown pf-v5-c-content"},[i("p",null,"Use data lists when:"),i("ul",null,[i("li",null,"A flexible layout is more important than arranging information in a grid."),i("li",null,"You want to include active content like a chart."),i("li",null,"Content displayed may vary between rows.")]),i("h2",{class:"pf-v5-c-title"},"Differences from patternfly-react"),i("ul",null,[i("li",null,[n("The "),i("code",null,"filled"),n(" prop of "),i("code",null,"pf-data-list-cell"),n(" is renamed to "),i("code",null,"no-fill"),n(" with inverted behavior.")]),i("li",null,[n("The "),i("code",null,"isPlainButtonAction"),n(" prop of "),i("code",null,"pf-data-list-action"),n(" is renamed to "),i("code",null,"plain-button"),n(".")]),i("li",null,[n("The "),i("code",null,"isValid"),n(" prop of "),i("code",null,"pf-data-list-check"),n(" is renamed to "),i("code",null,"invalid"),n(" with inverted behavior.")]),i("li",null,[n("The "),i("code",null,"pf-data-list-item-row"),n(" and "),i("code",null,"pf-data-list-item-cells"),n(" components are optional and are only required if you need to change their attributes or when you have to control the order of sibling components.")])]),i("p",null,[n("See "),i("a",{href:"#/"},"common differences from patternfly-react"),n(".")]),i("h2",{class:"pf-v5-c-title"},"Examples")],-1)),e(c,{title:"Basic",source:`<pf-data-list aria-label="Simple data list example">
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
</pf-data-list>`},{default:t(()=>[e(m,{"aria-label":"Simple data list example"},{default:t(()=>[e(d,{"aria-labelledby":"simple-item1"},{default:t(()=>[e(l,null,{default:t(()=>a[1]||(a[1]=[i("span",{id:"simple-item1"},"Primary content",-1)])),_:1}),e(l,null,{default:t(()=>a[2]||(a[2]=[n("Secondary content")])),_:1})]),_:1}),e(d,{"aria-labelledby":"simple-item2"},{default:t(()=>[e(l,{"no-fill":""},{default:t(()=>a[3]||(a[3]=[i("span",{id:"simple-item2"},"Secondary content (pf-m-no-fill)",-1)])),_:1}),e(l,{"no-fill":"","align-right":""},{default:t(()=>a[4]||(a[4]=[n(" Secondary content (pf-m-align-right pf-m-no-fill) ")])),_:1})]),_:1})]),_:1})]),_:1}),e(c,{title:"Compact",source:`<pf-data-list aria-label="Compact data list example" compact>
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
</pf-data-list>`},{default:t(()=>[e(m,{"aria-label":"Compact data list example",compact:""},{default:t(()=>[e(d,{"aria-labelledby":"simple-item3"},{default:t(()=>[e(x,null,{default:t(()=>[e(k,null,{default:t(()=>[e(l,null,{default:t(()=>a[5]||(a[5]=[i("span",{id:"simple-item3"},"Primary content (explicit row and cells)",-1)])),_:1}),e(l,null,{default:t(()=>a[6]||(a[6]=[n(" Secondary content ")])),_:1})]),_:1})]),_:1})]),_:1}),e(d,{"aria-labelledby":"simple-item4"},{default:t(()=>[e(l,{"no-fill":""},{default:t(()=>a[7]||(a[7]=[i("span",{id:"simple-item4"},"Secondary content (pf-m-no-fill)",-1)])),_:1}),e(l,{"no-fill":"","align-right":""},{default:t(()=>a[8]||(a[8]=[n(" Secondary content (pf-m-align-right pf-m-no-fill) ")])),_:1})]),_:1})]),_:1})]),_:1}),e(c,{title:"Checkboxes, actions and additional cells",source:`<pf-data-list aria-label="Checkbox and action data list example">
  <pf-data-list-item aria-labelledby="check-action-item1">
    <pf-data-list-check aria-labelledby="check-action-item1" name="check-action-check1" />

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
      <pf-dropdown position="right">
        <template #toggle>
          <pf-menu-toggle variant="plain">
            <ellipsis-vertical-icon />
          </pf-menu-toggle>
        </template>

        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button">Action</pf-dropdown-item>
        <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
      </pf-dropdown>
    </pf-data-list-action>
  </pf-data-list-item>

  <pf-data-list-item aria-labelledby="check-action-item2">
    <pf-data-list-check aria-labelledby="check-action-item2" name="check-action-check1" />

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
      <pf-dropdown position="right">
        <template #toggle>
          <pf-menu-toggle variant="plain">
            <ellipsis-vertical-icon />
          </pf-menu-toggle>
        </template>

        <pf-dropdown-item component="button">Primary</pf-dropdown-item>
        <pf-dropdown-item component="button">Secondary</pf-dropdown-item>
      </pf-dropdown>
    </pf-data-list-action>

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
    </pf-data-list-action>
  </pf-data-list-item>

  <pf-data-list-item aria-labelledby="check-action-item3">
    <pf-data-list-check aria-labelledby="check-action-item3" name="check-action-check1" />

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
      <pf-dropdown position="right">
        <template #toggle>
          <pf-menu-toggle variant="plain">
            <ellipsis-vertical-icon />
          </pf-menu-toggle>
        </template>

        <pf-dropdown-item component="button">Primary</pf-dropdown-item>
        <pf-dropdown-item component="button">Secondary</pf-dropdown-item>
        <pf-dropdown-item component="button">Secondary</pf-dropdown-item>
        <pf-dropdown-item component="button">Secondary</pf-dropdown-item>
      </pf-dropdown>
    </pf-data-list-action>

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
    </pf-data-list-action>
  </pf-data-list-item>
</pf-data-list>`},{default:t(()=>[e(m,{"aria-label":"Checkbox and action data list example"},{default:t(()=>[e(d,{"aria-labelledby":"check-action-item1"},{default:t(()=>[e(g,{"aria-labelledby":"check-action-item1",name:"check-action-check1"}),e(l,null,{default:t(()=>a[9]||(a[9]=[i("span",{id:"check-action-item1"},"Primary content",-1),n(" Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. ")])),_:1}),e(l,null,{default:t(()=>a[10]||(a[10]=[n(" Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. ")])),_:1}),e(l,null,{default:t(()=>a[11]||(a[11]=[i("span",null,"Tertiary content",-1),n(" Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. ")])),_:1}),e(l,null,{default:t(()=>a[12]||(a[12]=[i("span",null,"More content",-1),n(" Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. ")])),_:1}),e(l,null,{default:t(()=>a[13]||(a[13]=[i("span",null,"More content",-1),n(" Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. ")])),_:1}),e(r,{id:"check-action-action1","aria-labelledby":"check-action-item1 check-action-action1","aria-label":"Actions","plain-button":""},{default:t(()=>[e(f,{position:"right"},{toggle:t(()=>[e(u,{variant:"plain"},{default:t(()=>[e(p(b))]),_:1})]),default:t(()=>[e(o,null,{default:t(()=>a[14]||(a[14]=[n("Link")])),_:1}),e(o,{component:"button"},{default:t(()=>a[15]||(a[15]=[n("Action")])),_:1}),e(o,{disabled:""},{default:t(()=>a[16]||(a[16]=[n("Disabled Link")])),_:1})]),_:1})]),_:1})]),_:1}),e(d,{"aria-labelledby":"check-action-item2"},{default:t(()=>[e(g,{"aria-labelledby":"check-action-item2",name:"check-action-check1"}),e(l,null,{default:t(()=>a[17]||(a[17]=[i("span",{id:"check-action-item2"},"Primary content - Lorem ipsum",-1),n(" dolor sit amet, consectetur adipisicing elit, sed do eiusmod. ")])),_:1}),e(l,null,{default:t(()=>a[18]||(a[18]=[n(" Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. ")])),_:1}),e(r,{id:"check-action-action2","aria-labelledby":"check-action-item2 check-action-action2","aria-label":"Actions","plain-button":"","visibility-lg":"hidden"},{default:t(()=>[e(f,{position:"right"},{toggle:t(()=>[e(u,{variant:"plain"},{default:t(()=>[e(p(b))]),_:1})]),default:t(()=>[e(o,{component:"button"},{default:t(()=>a[19]||(a[19]=[n("Primary")])),_:1}),e(o,{component:"button"},{default:t(()=>a[20]||(a[20]=[n("Secondary")])),_:1})]),_:1})]),_:1}),e(r,{id:"check-action-action3","aria-labelledby":"check-action-item2 check-action-action3","aria-label":"Actions","plain-button":"",visibility:"hidden","visibility-lg":"visible"},{default:t(()=>[e(w,{variant:"primary"},{default:t(()=>a[21]||(a[21]=[n("Primary")])),_:1}),e(w,{variant:"secondary"},{default:t(()=>a[22]||(a[22]=[n("Secondary")])),_:1})]),_:1})]),_:1}),e(d,{"aria-labelledby":"check-action-item3"},{default:t(()=>[e(g,{"aria-labelledby":"check-action-item3",name:"check-action-check1"}),e(l,null,{default:t(()=>a[23]||(a[23]=[i("span",{id:"check-action-item3"},"Primary content - Lorem ipsum",-1),n(" dolor sit amet, consectetur adipisicing elit, sed do eiusmod. ")])),_:1}),e(l,null,{default:t(()=>a[24]||(a[24]=[n(" Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. ")])),_:1}),e(r,{id:"check-action-action3","aria-labelledby":"check-action-item3 check-action-action3","aria-label":"Actions","plain-button":"","visibility-xl":"hidden"},{default:t(()=>[e(f,{position:"right"},{toggle:t(()=>[e(u,{variant:"plain"},{default:t(()=>[e(p(b))]),_:1})]),default:t(()=>[e(o,{component:"button"},{default:t(()=>a[25]||(a[25]=[n("Primary")])),_:1}),e(o,{component:"button"},{default:t(()=>a[26]||(a[26]=[n("Secondary")])),_:1}),e(o,{component:"button"},{default:t(()=>a[27]||(a[27]=[n("Secondary")])),_:1}),e(o,{component:"button"},{default:t(()=>a[28]||(a[28]=[n("Secondary")])),_:1})]),_:1})]),_:1}),e(r,{id:"check-action-action3","aria-labelledby":"check-action-item3 check-action-action3","aria-label":"Actions","plain-button":"",visibility:"hidden","visibility-xl":"visible"},{default:t(()=>[e(w,{variant:"primary"},{default:t(()=>a[29]||(a[29]=[n("Primary")])),_:1}),e(w,{variant:"secondary"},{default:t(()=>a[30]||(a[30]=[n("Secondary")])),_:1}),e(w,{variant:"secondary"},{default:t(()=>a[31]||(a[31]=[n("Secondary")])),_:1}),e(w,{variant:"secondary"},{default:t(()=>a[32]||(a[32]=[n("Secondary")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{title:"Selectable rows",source:`<pf-data-list
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
      </pf-dropdown>
    </pf-data-list-action>
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
      </pf-dropdown>
    </pf-data-list-action>
  </pf-data-list-item>
</pf-data-list>`},{default:t(()=>[e(m,{"aria-label":"selectable data list example","onUpdate:selected":p(L)},{default:t(()=>[e(d,{id:"item1","aria-labelledby":"selectable-action-item1"},{default:t(()=>[e(l,null,{default:t(()=>a[33]||(a[33]=[i("span",{id:"selectable-action-item1"},"Single actionable Primary content",-1)])),_:1}),e(l,null,{default:t(()=>a[34]||(a[34]=[n("Single actionable Secondary content")])),_:1}),e(r,{id:"selectable-action-action1","aria-labelledby":"selectable-action-item1 selectable-action-action1","aria-label":"Actions","plain-button":""},{default:t(()=>[e(f,{position:"right"},{toggle:t(()=>[e(u,{variant:"plain"},{default:t(()=>[e(p(b))]),_:1})]),default:t(()=>[e(o,null,{default:t(()=>a[35]||(a[35]=[n("Link")])),_:1}),e(o,{component:"button"},{default:t(()=>a[36]||(a[36]=[n(" Action ")])),_:1}),e(o,{disabled:""},{default:t(()=>a[37]||(a[37]=[n(" Disabled Link ")])),_:1})]),_:1})]),_:1})]),_:1}),e(d,{id:"item2","aria-labelledby":"selectable-actions-item2"},{default:t(()=>[e(l,null,{default:t(()=>a[38]||(a[38]=[i("span",{id:"selectable-actions-item2"},"Selectable actions Primary content",-1)])),_:1}),e(l,null,{default:t(()=>a[39]||(a[39]=[n("Selectable actions Secondary content")])),_:1}),e(r,{id:"selectable-actions-action2","aria-labelledby":"selectable-actions-item2 selectable-actions-action2","aria-label":"Actions","plain-button":""},{default:t(()=>[e(f,{position:"right"},{toggle:t(()=>[e(u,{variant:"plain"},{default:t(()=>[e(p(b))]),_:1})]),default:t(()=>[e(o,null,{default:t(()=>a[40]||(a[40]=[n("Link")])),_:1}),e(o,{component:"button"},{default:t(()=>a[41]||(a[41]=[n(" Action ")])),_:1}),e(o,{disabled:""},{default:t(()=>a[42]||(a[42]=[n(" Disabled Link ")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["onUpdate:selected"])]),_:1}),e(c,{title:"Expandable",source:`<pf-data-list aria-label="Expandable data list example" expandable>
  <pf-data-list-item aria-labelledby="ex-item1">
    <pf-data-list-cell icon>
      <CodeBranchIcon />
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
      </pf-dropdown>
    </pf-data-list-action>

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
          <CodeBranchIcon />
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
        </pf-dropdown>
      </pf-data-list-action>
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
      <CodeBranchIcon />
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
      </pf-dropdown>
    </pf-data-list-action>

    <pf-data-list-content no-padding>
      This expanded section has no padding.
    </pf-data-list-content>
  </pf-data-list-item>
</pf-data-list>`},{default:t(()=>[e(m,{"aria-label":"Expandable data list example",expandable:""},{default:t(()=>[e(d,{"aria-labelledby":"ex-item1"},{default:t(()=>[e(l,{icon:""},{default:t(()=>[e(p(h))]),_:1}),e(l,null,{default:t(()=>a[43]||(a[43]=[i("div",{id:"ex-item1"},"Primary content",-1),i("span",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",-1),i("a",{href:"#"},"link",-1)])),_:1}),e(l,null,{default:t(()=>a[44]||(a[44]=[i("span",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",-1)])),_:1}),e(l,null,{default:t(()=>a[45]||(a[45]=[i("span",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",-1)])),_:1}),e(r,{id:"ex-action1","aria-labelledby":"ex-item1 ex-action1","aria-label":"Actions","plain-button":""},{default:t(()=>[e(f,{position:"right"},{toggle:t(()=>[e(u,{variant:"plain"},{default:t(()=>[e(p(b))]),_:1})]),default:t(()=>[e(o,null,{default:t(()=>a[46]||(a[46]=[n("Link")])),_:1}),e(o,{component:"button"},{default:t(()=>a[47]||(a[47]=[n(" Action ")])),_:1}),e(o,{disabled:""},{default:t(()=>a[48]||(a[48]=[n(" Disabled Link ")])),_:1})]),_:1})]),_:1}),e(v,null,{default:t(()=>a[49]||(a[49]=[i("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",-1)])),_:1})]),_:1}),e(d,{"aria-labelledby":"ex-item2"},{default:t(()=>[e(x,null,{default:t(()=>[e(k,null,{default:t(()=>[e(l,{icon:""},{default:t(()=>[e(p(h))]),_:1}),e(l,null,{default:t(()=>a[50]||(a[50]=[i("div",{id:"ex-item2"},"Secondary content",-1),i("span",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",-1)])),_:1}),e(l,null,{default:t(()=>a[51]||(a[51]=[i("span",null,"Lorem ipsum dolor sit amet.",-1)])),_:1}),e(l,null,{default:t(()=>a[52]||(a[52]=[i("span",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",-1)])),_:1})]),_:1}),e(r,{id:"ex-action2","aria-labelledby":"ex-item2 ex-action2","aria-label":"Actions","plain-button":""},{default:t(()=>[e(f,{position:"right"},{toggle:t(()=>[e(u,{variant:"plain"},{default:t(()=>[e(p(b))]),_:1})]),default:t(()=>[e(o,null,{default:t(()=>a[53]||(a[53]=[n("Link")])),_:1}),e(o,{component:"button"},{default:t(()=>a[54]||(a[54]=[n(" Action ")])),_:1}),e(o,{disabled:""},{default:t(()=>a[55]||(a[55]=[n(" Disabled Link ")])),_:1})]),_:1})]),_:1})]),_:1}),e(v,null,{default:t(()=>a[56]||(a[56]=[i("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",-1)])),_:1})]),_:1}),e(d,{"aria-labelledby":"ex-item3"},{default:t(()=>[e(l,{icon:""},{default:t(()=>[e(p(h))]),_:1}),e(l,null,{default:t(()=>a[57]||(a[57]=[i("div",{id:"ex-item3"},"Tertiary content",-1),i("span",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",-1)])),_:1}),e(l,null,{default:t(()=>a[58]||(a[58]=[i("span",null,"Lorem ipsum dolor sit amet.",-1)])),_:1}),e(l,null,{default:t(()=>a[59]||(a[59]=[i("span",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",-1)])),_:1}),e(r,{id:"ex-action3","aria-labelledby":"ex-item3 ex-action3","aria-label":"Actions","plain-button":""},{default:t(()=>[e(f,{position:"right"},{toggle:t(()=>[e(u,{variant:"plain"},{default:t(()=>[e(p(b))]),_:1})]),default:t(()=>[e(o,null,{default:t(()=>a[60]||(a[60]=[n("Link")])),_:1}),e(o,{component:"button"},{default:t(()=>a[61]||(a[61]=[n(" Action ")])),_:1}),e(o,{disabled:""},{default:t(()=>a[62]||(a[62]=[n(" Disabled Link ")])),_:1})]),_:1})]),_:1}),e(v,{"no-padding":""},{default:t(()=>a[63]||(a[63]=[n(" This expanded section has no padding. ")])),_:1})]),_:1})]),_:1})]),_:1}),e(c,{title:"Width modifiers - Default fitting example 1",source:`<pf-data-list aria-label="Width modifier data list example 1">
  <pf-data-list-item aria-labelledby="width-ex1-item1">
    <pf-data-list-check aria-labelledby="width-ex1-item1" name="width-ex1-item1" />

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
</pf-data-list>`},{default:t(()=>[e(m,{"aria-label":"Width modifier data list example 1"},{default:t(()=>[e(d,{"aria-labelledby":"width-ex1-item1"},{default:t(()=>[e(g,{"aria-labelledby":"width-ex1-item1",name:"width-ex1-item1"}),e(l,null,{default:t(()=>a[64]||(a[64]=[i("div",{class:"preview-placeholder"},[i("b",{id:"width-ex1-item1"},"default"),i("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit.")],-1)])),_:1}),e(l,null,{default:t(()=>a[65]||(a[65]=[i("div",{class:"preview-placeholder"},[i("b",null,"default"),i("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")],-1)])),_:1})]),_:1})]),_:1})]),_:1}),e(c,{title:"Width modifiers - Flex modifiers - example 2",source:`<pf-data-list aria-label="Width modifier data list example 2">
  <pf-data-list-item aria-labelledby="width-ex2-item1">
    <pf-data-list-check aria-labelledby="width-ex2-item1" name="width-ex2-item1" />

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
      </pf-dropdown>
    </pf-data-list-action>
  </pf-data-list-item>
</pf-data-list>`},{default:t(()=>[e(m,{"aria-label":"Width modifier data list example 2"},{default:t(()=>[e(d,{"aria-labelledby":"width-ex2-item1"},{default:t(()=>[e(g,{"aria-labelledby":"width-ex2-item1",name:"width-ex2-item1"}),e(l,{width:2},{default:t(()=>a[66]||(a[66]=[i("div",{class:"preview-placeholder"},[i("b",{id:"width-ex2-item1"},"width 2"),i("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.")],-1)])),_:1}),e(l,{width:4},{default:t(()=>a[67]||(a[67]=[i("div",{class:"preview-placeholder"},[i("b",null,"width 4"),i("p",null,"Lorem ipsum dolor sit amet.")],-1)])),_:1}),e(r,{"aria-labelledby":"width-ex2-item1 width-ex2-action1","aria-label":"Actions","plain-button":""},{default:t(()=>[e(f,{position:"right"},{toggle:t(()=>[e(u,{variant:"plain"},{default:t(()=>[e(p(b))]),_:1})]),default:t(()=>[e(o,null,{default:t(()=>a[68]||(a[68]=[n("Link")])),_:1}),e(o,{component:"button"},{default:t(()=>a[69]||(a[69]=[n(" Action ")])),_:1}),e(o,{disabled:""},{default:t(()=>a[70]||(a[70]=[n(" Disabled Link ")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{title:"Width modifiers - Flex modifiers - example 3",source:`<pf-data-list aria-label="Width modifier data list example 3" expandable>
  <pf-data-list-item aria-labelledby="width-ex3-item1">
    <pf-data-list-check aria-labelledby="width-ex3-item1" name="width-ex3-item1" />

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
      </pf-dropdown>
    </pf-data-list-action>

    <pf-data-list-content aria-label="Primary Content Details">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.
      </p>
    </pf-data-list-content>
  </pf-data-list-item>
</pf-data-list>`},{default:t(()=>[e(m,{"aria-label":"Width modifier data list example 3",expandable:""},{default:t(()=>[e(d,{"aria-labelledby":"width-ex3-item1"},{default:t(()=>[e(g,{"aria-labelledby":"width-ex3-item1",name:"width-ex3-item1"}),e(l,{width:5},{default:t(()=>a[71]||(a[71]=[i("div",{class:"preview-placeholder"},[i("b",{id:"width-ex3-item1"},"width 5"),i("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit.")],-1)])),_:1}),e(l,{width:2},{default:t(()=>a[72]||(a[72]=[i("div",{class:"preview-placeholder"},[i("b",null,"width 2"),i("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit.")],-1)])),_:1}),e(l,null,{default:t(()=>a[73]||(a[73]=[i("div",{class:"preview-placeholder"},"default",-1)])),_:1}),e(r,{id:"width-ex3-action1","aria-labelledby":"width-ex3-item1 width-ex3-action1","aria-label":"Actions","plain-button":""},{default:t(()=>[e(f,{position:"right"},{toggle:t(()=>[e(u,{variant:"plain"},{default:t(()=>[e(p(b))]),_:1})]),default:t(()=>[e(o,null,{default:t(()=>a[74]||(a[74]=[n("Link")])),_:1}),e(o,{component:"button"},{default:t(()=>a[75]||(a[75]=[n(" Action ")])),_:1}),e(o,{disabled:""},{default:t(()=>a[76]||(a[76]=[n(" Disabled Link ")])),_:1})]),_:1})]),_:1}),e(v,{"aria-label":"Primary Content Details"},{default:t(()=>a[77]||(a[77]=[i("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",-1)])),_:1})]),_:1})]),_:1})]),_:1}),e(c,{title:"Controlling text",source:`<pf-data-list aria-label="Simple data list example">
  <pf-data-list-item aria-labelledby="simple-item5">
    <pf-data-list-cell wrap-modifier="breakWord">
      <span id="simple-item5">Primary content</span>
    </pf-data-list-cell>
    <pf-data-list-cell wrap-modifier="truncate">
      Really really really really really really really really really really really really really really long
      description that should be truncated before it ends
    </pf-data-list-cell>
  </pf-data-list-item>
</pf-data-list>`},{default:t(()=>[e(m,{"aria-label":"Simple data list example"},{default:t(()=>[e(d,{"aria-labelledby":"simple-item5"},{default:t(()=>[e(l,{"wrap-modifier":"breakWord"},{default:t(()=>a[78]||(a[78]=[i("span",{id:"simple-item5"},"Primary content",-1)])),_:1}),e(l,{"wrap-modifier":"truncate"},{default:t(()=>a[79]||(a[79]=[n(" Really really really really really really really really really really really really really really long description that should be truncated before it ends ")])),_:1})]),_:1})]),_:1})]),_:1}),e(c,{title:"Small grid breakpoint",source:`<pf-data-list aria-label="Simple data list example" grid-breakpoint="sm">
  <pf-data-list-item>
    <pf-data-list-cell>
      Primary content
    </pf-data-list-cell>
    <pf-data-list-cell>
      Really really really really really really really really really really really really really really long
      description that should be truncated before it ends
    </pf-data-list-cell>
  </pf-data-list-item>
</pf-data-list>`},{default:t(()=>[e(m,{"aria-label":"Simple data list example","grid-breakpoint":"sm"},{default:t(()=>[e(d,null,{default:t(()=>[e(l,null,{default:t(()=>a[80]||(a[80]=[n(" Primary content ")])),_:1}),e(l,null,{default:t(()=>a[81]||(a[81]=[n(" Really really really really really really really really really really really really really really long description that should be truncated before it ends ")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),F=A(P,[["__scopeId","data-v-67e8b039"]]);export{F as default};
