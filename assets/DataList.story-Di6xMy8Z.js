import{C as v}from"./code-branch-icon-Bm6mev5t.js";import{g as D,a as s,c as S,o as _,w as a,d as i,b as e,e as n,u as w,_ as q}from"./index-D59LwWSZ.js";const A=D({__name:"DataList.story",setup(P){const x=console.log;return(I,t)=>{const f=s("component-info"),l=s("pf-data-list-cell"),d=s("pf-data-list-item"),p=s("pf-data-list"),m=s("story-canvas"),k=s("pf-data-list-item-cells"),h=s("pf-data-list-item-row"),b=s("pf-data-list-check"),c=s("pf-menu-toggle"),o=s("pf-dropdown-item"),u=s("pf-dropdown"),r=s("pf-data-list-action"),y=s("pf-button"),g=s("pf-data-list-content"),L=s("doc-page");return _(),S(L,{name:"Components/DataList.story.vue",title:"Data list"},{description:a(()=>[...t[0]||(t[0]=[n("A ",-1),i("b",null,"data list",-1),n(" is used to display large data sets when you need a flexible layout or need to include interactive content like charts.",-1)])]),apidocs:a(()=>[e(f,{src:"packages/core/src/components/DataList/DataList.vue",doc:{name:"PfDataList",exportName:"default",displayName:"DataList",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"selectionInputName",description:"Name of the item input (radio or checkbox) when item selection is enabled",required:!1,type:{name:"string"}},{name:"selectionInputValue",description:"Defines the value for the input (radio or checkbox)",required:!1,type:{name:"string"}},{name:"selectionMultiple",description:"Flag indicating if multiple pf-data-list-items are selectable",required:!1,type:{name:"boolean"}},{name:"compact",description:"Flag indicating if pf-data-list should have compact styling",required:!1,type:{name:"boolean"}},{name:"expandable",description:"Flag indicating if pf-data-list-items should have expandable styling",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"gridBreakpoint",description:"Specifies the grid breakpoints",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"always"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"wrapModifier",description:"Determines which wrapping modifier to apply to the pf-data-list",required:!1,type:{name:"union",elements:[{name:"DataListWrapModifier"},{name:'"nowrap"'},{name:'"truncate"'},{name:'"breakWord"'}]}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/DataList/DataList.vue"]}}),e(f,{src:"packages/core/src/components/DataList/DataListAction.vue",doc:{name:"PfDataListAction",exportName:"default",displayName:"DataListAction",description:"",tags:{},props:[{name:"visibility2xl",required:!1,type:{name:"union",elements:[{name:'"hidden"'},{name:'"visible"'}]}},{name:"visibilityXl",required:!1,type:{name:"union",elements:[{name:'"hidden"'},{name:'"visible"'}]}},{name:"visibilityLg",required:!1,type:{name:"union",elements:[{name:'"hidden"'},{name:'"visible"'}]}},{name:"visibilityMd",required:!1,type:{name:"union",elements:[{name:'"hidden"'},{name:'"visible"'}]}},{name:"visibilitySm",required:!1,type:{name:"union",elements:[{name:'"hidden"'},{name:'"visible"'}]}},{name:"visibility",required:!1,type:{name:"union",elements:[{name:'"hidden"'},{name:'"visible"'}]}},{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/DataList/DataListAction.vue"]}}),e(f,{src:"packages/core/src/components/DataList/DataListCell.vue",doc:{name:"PfDataListCell",exportName:"default",displayName:"DataListCell",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"noFill",required:!1,type:{name:"boolean"}},{name:"width",required:!1,type:{name:"union",elements:[{name:"1"},{name:"2"},{name:"3"},{name:"4"},{name:"5"}]}},{name:"alignRight",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"boolean"}},{name:"wrapModifier",required:!1,type:{name:"DataListWrapModifier"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/DataList/DataListCell.vue"]}}),e(f,{src:"packages/core/src/components/DataList/DataListCheck.vue",doc:{name:"PfDataListCheck",exportName:"default",displayName:"DataListCheck",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"otherControls",required:!1,type:{name:"boolean"}}],sourceFiles:["../../packages/core/src/components/DataList/DataListCheck.vue"]}}),e(f,{src:"packages/core/src/components/DataList/DataListContent.vue",doc:{name:"PfDataListContent",exportName:"default",displayName:"DataListContent",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"noPadding",required:!1,type:{name:"boolean"}},{name:"hidden",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/DataList/DataListContent.vue"]}}),e(f,{src:"packages/core/src/components/DataList/DataListItem.vue",doc:{name:"PfDataListItem",exportName:"default",displayName:"DataListItem",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"selected",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"selectionInputName",description:"Name of the item inputs (radio or checkbox) when item selection is enabled",required:!1,type:{name:"string"}},{name:"selectionInputValue",description:"Defines the value for the inputs (radio or checkbox) of the pf-data-list-item",required:!1,type:{name:"string"}},{name:"expandable",description:"Flag indicating if the pf-data-list-item is expandable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"click",type:{names:["PointerEvent"]}},{name:"update:selected",type:{names:["boolean"]}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/DataList/DataListItem.vue"]}}),e(f,{src:"packages/core/src/components/DataList/DataListItemCells.vue",doc:{name:"PfDataListItemCells",exportName:"default",displayName:"DataListItemCells",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/DataList/DataListItemCells.vue"]}}),e(f,{src:"packages/core/src/components/DataList/DataListItemRow.vue",doc:{name:"PfDataListItemRow",exportName:"default",displayName:"DataListItemRow",description:"",tags:{},expose:[{name:"toggle"}],props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"wrapModifier",required:!1,type:{name:"DataListWrapModifier"}}],slots:[{name:"toggle"},{name:"default"}],sourceFiles:["../../packages/core/src/components/DataList/DataListItemRow.vue"]}}),e(f,{src:"packages/core/src/components/DataList/DataListToggle.vue",doc:{name:"PfDataListToggle",exportName:"default",displayName:"DataListToggle",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"id",required:!1,type:{name:"string"}},{name:"expanded",required:!1,type:{name:"boolean"}},{name:"noPadding",required:!1,type:{name:"boolean"}},{name:"ariaLabelledby",required:!1,type:{name:"string"}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Details'"}},{name:"ariaControls",required:!1,type:{name:"string"}}],events:[{name:"click",type:{names:["Event"]}}],sourceFiles:["../../packages/core/src/components/DataList/DataListToggle.vue"]}})]),default:a(()=>[t[82]||(t[82]=i("div",{class:"markdown pf-v6-c-content"},[i("p",null,"Use data lists when:"),i("ul",null,[i("li",null,"A flexible layout is more important than arranging information in a grid."),i("li",null,"You want to include active content like a chart."),i("li",null,"Content displayed may vary between rows.")]),i("h2",{class:"pf-v6-c-title"},"Differences from patternfly-react"),i("ul",null,[i("li",null,[n("The "),i("code",null,"filled"),n(" prop of "),i("code",null,"pf-data-list-cell"),n(" is renamed to "),i("code",null,"no-fill"),n(" with inverted behavior.")]),i("li",null,[n("The "),i("code",null,"isPlainButtonAction"),n(" prop of "),i("code",null,"pf-data-list-action"),n(" is renamed to "),i("code",null,"plain-button"),n(".")]),i("li",null,[n("The "),i("code",null,"isValid"),n(" prop of "),i("code",null,"pf-data-list-check"),n(" is renamed to "),i("code",null,"invalid"),n(" with inverted behavior.")]),i("li",null,[n("The "),i("code",null,"pf-data-list-item-row"),n(" and "),i("code",null,"pf-data-list-item-cells"),n(" components are optional and are only required if you need to change their attributes or when you have to control the order of sibling components.")])]),i("p",null,[n("See "),i("a",{href:"#/"},"common differences from patternfly-react"),n(".")]),i("h2",{class:"pf-v6-c-title"},"Examples")],-1)),e(m,{title:"Basic",source:`<pf-data-list aria-label="Simple data list example">
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
</pf-data-list>`},{default:a(()=>[e(p,{"aria-label":"Simple data list example"},{default:a(()=>[e(d,{"aria-labelledby":"simple-item1"},{default:a(()=>[e(l,null,{default:a(()=>[...t[1]||(t[1]=[i("span",{id:"simple-item1"},"Primary content",-1)])]),_:1}),e(l,null,{default:a(()=>[...t[2]||(t[2]=[n("Secondary content",-1)])]),_:1})]),_:1}),e(d,{"aria-labelledby":"simple-item2"},{default:a(()=>[e(l,{"no-fill":""},{default:a(()=>[...t[3]||(t[3]=[i("span",{id:"simple-item2"},"Secondary content (pf-m-no-fill)",-1)])]),_:1}),e(l,{"no-fill":"","align-right":""},{default:a(()=>[...t[4]||(t[4]=[n(" Secondary content (pf-m-align-right pf-m-no-fill) ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),e(m,{title:"Compact",source:`<pf-data-list aria-label="Compact data list example" compact>
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
</pf-data-list>`},{default:a(()=>[e(p,{"aria-label":"Compact data list example",compact:""},{default:a(()=>[e(d,{"aria-labelledby":"simple-item3"},{default:a(()=>[e(h,null,{default:a(()=>[e(k,null,{default:a(()=>[e(l,null,{default:a(()=>[...t[5]||(t[5]=[i("span",{id:"simple-item3"},"Primary content (explicit row and cells)",-1)])]),_:1}),e(l,null,{default:a(()=>[...t[6]||(t[6]=[n(" Secondary content ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),e(d,{"aria-labelledby":"simple-item4"},{default:a(()=>[e(l,{"no-fill":""},{default:a(()=>[...t[7]||(t[7]=[i("span",{id:"simple-item4"},"Secondary content (pf-m-no-fill)",-1)])]),_:1}),e(l,{"no-fill":"","align-right":""},{default:a(()=>[...t[8]||(t[8]=[n(" Secondary content (pf-m-align-right pf-m-no-fill) ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),e(m,{title:"Checkboxes, actions and additional cells",source:`<pf-data-list aria-label="Checkbox and action data list example">
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
    >
      <pf-dropdown position="right">
        <template #toggle>
          <pf-menu-toggle variant="plain" />
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
      visibility-lg="hidden"
    >
      <pf-dropdown position="right">
        <template #toggle>
          <pf-menu-toggle variant="plain" />
        </template>

        <pf-dropdown-item component="button">Primary</pf-dropdown-item>
        <pf-dropdown-item component="button">Secondary</pf-dropdown-item>
      </pf-dropdown>
    </pf-data-list-action>

    <pf-data-list-action
      id="check-action-action3"
      aria-labelledby="check-action-item2 check-action-action3"
      aria-label="Actions"
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
      visibility-xl="hidden"
    >
      <pf-dropdown position="right">
        <template #toggle>
          <pf-menu-toggle variant="plain" />
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
      visibility="hidden"
      visibility-xl="visible"
    >
      <pf-button variant="primary">Primary</pf-button>
      <pf-button variant="secondary">Secondary</pf-button>
      <pf-button variant="secondary">Secondary</pf-button>
      <pf-button variant="secondary">Secondary</pf-button>
    </pf-data-list-action>
  </pf-data-list-item>
</pf-data-list>`},{default:a(()=>[e(p,{"aria-label":"Checkbox and action data list example"},{default:a(()=>[e(d,{"aria-labelledby":"check-action-item1"},{default:a(()=>[e(b,{"aria-labelledby":"check-action-item1",name:"check-action-check1"}),e(l,null,{default:a(()=>[...t[9]||(t[9]=[i("span",{id:"check-action-item1"},"Primary content",-1),n(" Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. ",-1)])]),_:1}),e(l,null,{default:a(()=>[...t[10]||(t[10]=[n(" Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. ",-1)])]),_:1}),e(l,null,{default:a(()=>[...t[11]||(t[11]=[i("span",null,"Tertiary content",-1),n(" Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. ",-1)])]),_:1}),e(l,null,{default:a(()=>[...t[12]||(t[12]=[i("span",null,"More content",-1),n(" Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. ",-1)])]),_:1}),e(l,null,{default:a(()=>[...t[13]||(t[13]=[i("span",null,"More content",-1),n(" Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. ",-1)])]),_:1}),e(r,{id:"check-action-action1","aria-labelledby":"check-action-item1 check-action-action1","aria-label":"Actions"},{default:a(()=>[e(u,{position:"right"},{toggle:a(()=>[e(c,{variant:"plain"})]),default:a(()=>[e(o,null,{default:a(()=>[...t[14]||(t[14]=[n("Link",-1)])]),_:1}),e(o,{component:"button"},{default:a(()=>[...t[15]||(t[15]=[n("Action",-1)])]),_:1}),e(o,{disabled:""},{default:a(()=>[...t[16]||(t[16]=[n("Disabled Link",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),e(d,{"aria-labelledby":"check-action-item2"},{default:a(()=>[e(b,{"aria-labelledby":"check-action-item2",name:"check-action-check1"}),e(l,null,{default:a(()=>[...t[17]||(t[17]=[i("span",{id:"check-action-item2"},"Primary content - Lorem ipsum",-1),n(" dolor sit amet, consectetur adipisicing elit, sed do eiusmod. ",-1)])]),_:1}),e(l,null,{default:a(()=>[...t[18]||(t[18]=[n(" Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. ",-1)])]),_:1}),e(r,{id:"check-action-action2","aria-labelledby":"check-action-item2 check-action-action2","aria-label":"Actions","visibility-lg":"hidden"},{default:a(()=>[e(u,{position:"right"},{toggle:a(()=>[e(c,{variant:"plain"})]),default:a(()=>[e(o,{component:"button"},{default:a(()=>[...t[19]||(t[19]=[n("Primary",-1)])]),_:1}),e(o,{component:"button"},{default:a(()=>[...t[20]||(t[20]=[n("Secondary",-1)])]),_:1})]),_:1})]),_:1}),e(r,{id:"check-action-action3","aria-labelledby":"check-action-item2 check-action-action3","aria-label":"Actions",visibility:"hidden","visibility-lg":"visible"},{default:a(()=>[e(y,{variant:"primary"},{default:a(()=>[...t[21]||(t[21]=[n("Primary",-1)])]),_:1}),e(y,{variant:"secondary"},{default:a(()=>[...t[22]||(t[22]=[n("Secondary",-1)])]),_:1})]),_:1})]),_:1}),e(d,{"aria-labelledby":"check-action-item3"},{default:a(()=>[e(b,{"aria-labelledby":"check-action-item3",name:"check-action-check1"}),e(l,null,{default:a(()=>[...t[23]||(t[23]=[i("span",{id:"check-action-item3"},"Primary content - Lorem ipsum",-1),n(" dolor sit amet, consectetur adipisicing elit, sed do eiusmod. ",-1)])]),_:1}),e(l,null,{default:a(()=>[...t[24]||(t[24]=[n(" Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. ",-1)])]),_:1}),e(r,{id:"check-action-action3","aria-labelledby":"check-action-item3 check-action-action3","aria-label":"Actions","visibility-xl":"hidden"},{default:a(()=>[e(u,{position:"right"},{toggle:a(()=>[e(c,{variant:"plain"})]),default:a(()=>[e(o,{component:"button"},{default:a(()=>[...t[25]||(t[25]=[n("Primary",-1)])]),_:1}),e(o,{component:"button"},{default:a(()=>[...t[26]||(t[26]=[n("Secondary",-1)])]),_:1}),e(o,{component:"button"},{default:a(()=>[...t[27]||(t[27]=[n("Secondary",-1)])]),_:1}),e(o,{component:"button"},{default:a(()=>[...t[28]||(t[28]=[n("Secondary",-1)])]),_:1})]),_:1})]),_:1}),e(r,{id:"check-action-action3","aria-labelledby":"check-action-item3 check-action-action3","aria-label":"Actions",visibility:"hidden","visibility-xl":"visible"},{default:a(()=>[e(y,{variant:"primary"},{default:a(()=>[...t[29]||(t[29]=[n("Primary",-1)])]),_:1}),e(y,{variant:"secondary"},{default:a(()=>[...t[30]||(t[30]=[n("Secondary",-1)])]),_:1}),e(y,{variant:"secondary"},{default:a(()=>[...t[31]||(t[31]=[n("Secondary",-1)])]),_:1}),e(y,{variant:"secondary"},{default:a(()=>[...t[32]||(t[32]=[n("Secondary",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(m,{title:"Selectable rows",source:`<pf-data-list
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
    >
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
    >
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
      </pf-dropdown>
    </pf-data-list-action>
  </pf-data-list-item>
</pf-data-list>`},{default:a(()=>[e(p,{"aria-label":"selectable data list example","onUpdate:selected":w(x)},{default:a(()=>[e(d,{id:"item1","aria-labelledby":"selectable-action-item1"},{default:a(()=>[e(l,null,{default:a(()=>[...t[33]||(t[33]=[i("span",{id:"selectable-action-item1"},"Single actionable Primary content",-1)])]),_:1}),e(l,null,{default:a(()=>[...t[34]||(t[34]=[n("Single actionable Secondary content",-1)])]),_:1}),e(r,{id:"selectable-action-action1","aria-labelledby":"selectable-action-item1 selectable-action-action1","aria-label":"Actions"},{default:a(()=>[e(u,{position:"right"},{toggle:a(()=>[e(c,{variant:"plain"})]),default:a(()=>[e(o,null,{default:a(()=>[...t[35]||(t[35]=[n("Link",-1)])]),_:1}),e(o,{component:"button"},{default:a(()=>[...t[36]||(t[36]=[n(" Action ",-1)])]),_:1}),e(o,{disabled:""},{default:a(()=>[...t[37]||(t[37]=[n(" Disabled Link ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),e(d,{id:"item2","aria-labelledby":"selectable-actions-item2"},{default:a(()=>[e(l,null,{default:a(()=>[...t[38]||(t[38]=[i("span",{id:"selectable-actions-item2"},"Selectable actions Primary content",-1)])]),_:1}),e(l,null,{default:a(()=>[...t[39]||(t[39]=[n("Selectable actions Secondary content",-1)])]),_:1}),e(r,{id:"selectable-actions-action2","aria-labelledby":"selectable-actions-item2 selectable-actions-action2","aria-label":"Actions"},{default:a(()=>[e(u,{position:"right"},{toggle:a(()=>[e(c,{variant:"plain"})]),default:a(()=>[e(o,null,{default:a(()=>[...t[40]||(t[40]=[n("Link",-1)])]),_:1}),e(o,{component:"button"},{default:a(()=>[...t[41]||(t[41]=[n(" Action ",-1)])]),_:1}),e(o,{disabled:""},{default:a(()=>[...t[42]||(t[42]=[n(" Disabled Link ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["onUpdate:selected"])]),_:1}),e(m,{title:"Expandable",source:`<pf-data-list aria-label="Expandable data list example" expandable>
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
    >
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
      >
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
    >
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
      </pf-dropdown>
    </pf-data-list-action>

    <pf-data-list-content no-padding>
      This expanded section has no padding.
    </pf-data-list-content>
  </pf-data-list-item>
</pf-data-list>`},{default:a(()=>[e(p,{"aria-label":"Expandable data list example",expandable:""},{default:a(()=>[e(d,{"aria-labelledby":"ex-item1"},{default:a(()=>[e(l,{icon:""},{default:a(()=>[e(w(v))]),_:1}),e(l,null,{default:a(()=>[...t[43]||(t[43]=[i("div",{id:"ex-item1"},"Primary content",-1),i("span",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",-1),i("a",{href:"#"},"link",-1)])]),_:1}),e(l,null,{default:a(()=>[...t[44]||(t[44]=[i("span",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",-1)])]),_:1}),e(l,null,{default:a(()=>[...t[45]||(t[45]=[i("span",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",-1)])]),_:1}),e(r,{id:"ex-action1","aria-labelledby":"ex-item1 ex-action1","aria-label":"Actions"},{default:a(()=>[e(u,{position:"right"},{toggle:a(()=>[e(c,{variant:"plain"})]),default:a(()=>[e(o,null,{default:a(()=>[...t[46]||(t[46]=[n("Link",-1)])]),_:1}),e(o,{component:"button"},{default:a(()=>[...t[47]||(t[47]=[n(" Action ",-1)])]),_:1}),e(o,{disabled:""},{default:a(()=>[...t[48]||(t[48]=[n(" Disabled Link ",-1)])]),_:1})]),_:1})]),_:1}),e(g,null,{default:a(()=>[...t[49]||(t[49]=[i("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",-1)])]),_:1})]),_:1}),e(d,{"aria-labelledby":"ex-item2"},{default:a(()=>[e(h,null,{default:a(()=>[e(k,null,{default:a(()=>[e(l,{icon:""},{default:a(()=>[e(w(v))]),_:1}),e(l,null,{default:a(()=>[...t[50]||(t[50]=[i("div",{id:"ex-item2"},"Secondary content",-1),i("span",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",-1)])]),_:1}),e(l,null,{default:a(()=>[...t[51]||(t[51]=[i("span",null,"Lorem ipsum dolor sit amet.",-1)])]),_:1}),e(l,null,{default:a(()=>[...t[52]||(t[52]=[i("span",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",-1)])]),_:1})]),_:1}),e(r,{id:"ex-action2","aria-labelledby":"ex-item2 ex-action2","aria-label":"Actions"},{default:a(()=>[e(u,{position:"right"},{toggle:a(()=>[e(c,{variant:"plain"})]),default:a(()=>[e(o,null,{default:a(()=>[...t[53]||(t[53]=[n("Link",-1)])]),_:1}),e(o,{component:"button"},{default:a(()=>[...t[54]||(t[54]=[n(" Action ",-1)])]),_:1}),e(o,{disabled:""},{default:a(()=>[...t[55]||(t[55]=[n(" Disabled Link ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),e(g,null,{default:a(()=>[...t[56]||(t[56]=[i("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",-1)])]),_:1})]),_:1}),e(d,{"aria-labelledby":"ex-item3"},{default:a(()=>[e(l,{icon:""},{default:a(()=>[e(w(v))]),_:1}),e(l,null,{default:a(()=>[...t[57]||(t[57]=[i("div",{id:"ex-item3"},"Tertiary content",-1),i("span",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",-1)])]),_:1}),e(l,null,{default:a(()=>[...t[58]||(t[58]=[i("span",null,"Lorem ipsum dolor sit amet.",-1)])]),_:1}),e(l,null,{default:a(()=>[...t[59]||(t[59]=[i("span",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",-1)])]),_:1}),e(r,{id:"ex-action3","aria-labelledby":"ex-item3 ex-action3","aria-label":"Actions"},{default:a(()=>[e(u,{position:"right"},{toggle:a(()=>[e(c,{variant:"plain"})]),default:a(()=>[e(o,null,{default:a(()=>[...t[60]||(t[60]=[n("Link",-1)])]),_:1}),e(o,{component:"button"},{default:a(()=>[...t[61]||(t[61]=[n(" Action ",-1)])]),_:1}),e(o,{disabled:""},{default:a(()=>[...t[62]||(t[62]=[n(" Disabled Link ",-1)])]),_:1})]),_:1})]),_:1}),e(g,{"no-padding":""},{default:a(()=>[...t[63]||(t[63]=[n(" This expanded section has no padding. ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),e(m,{title:"Width modifiers - Default fitting example 1",source:`<pf-data-list aria-label="Width modifier data list example 1">
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
</pf-data-list>`},{default:a(()=>[e(p,{"aria-label":"Width modifier data list example 1"},{default:a(()=>[e(d,{"aria-labelledby":"width-ex1-item1"},{default:a(()=>[e(b,{"aria-labelledby":"width-ex1-item1",name:"width-ex1-item1"}),e(l,null,{default:a(()=>[...t[64]||(t[64]=[i("div",{class:"preview-placeholder"},[i("b",{id:"width-ex1-item1"},"default"),i("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit.")],-1)])]),_:1}),e(l,null,{default:a(()=>[...t[65]||(t[65]=[i("div",{class:"preview-placeholder"},[i("b",null,"default"),i("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")],-1)])]),_:1})]),_:1})]),_:1})]),_:1}),e(m,{title:"Width modifiers - Flex modifiers - example 2",source:`<pf-data-list aria-label="Width modifier data list example 2">
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
    >
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
      </pf-dropdown>
    </pf-data-list-action>
  </pf-data-list-item>
</pf-data-list>`},{default:a(()=>[e(p,{"aria-label":"Width modifier data list example 2"},{default:a(()=>[e(d,{"aria-labelledby":"width-ex2-item1"},{default:a(()=>[e(b,{"aria-labelledby":"width-ex2-item1",name:"width-ex2-item1"}),e(l,{width:2},{default:a(()=>[...t[66]||(t[66]=[i("div",{class:"preview-placeholder"},[i("b",{id:"width-ex2-item1"},"width 2"),i("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.")],-1)])]),_:1}),e(l,{width:4},{default:a(()=>[...t[67]||(t[67]=[i("div",{class:"preview-placeholder"},[i("b",null,"width 4"),i("p",null,"Lorem ipsum dolor sit amet.")],-1)])]),_:1}),e(r,{"aria-labelledby":"width-ex2-item1 width-ex2-action1","aria-label":"Actions"},{default:a(()=>[e(u,{position:"right"},{toggle:a(()=>[e(c,{variant:"plain"})]),default:a(()=>[e(o,null,{default:a(()=>[...t[68]||(t[68]=[n("Link",-1)])]),_:1}),e(o,{component:"button"},{default:a(()=>[...t[69]||(t[69]=[n(" Action ",-1)])]),_:1}),e(o,{disabled:""},{default:a(()=>[...t[70]||(t[70]=[n(" Disabled Link ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(m,{title:"Width modifiers - Flex modifiers - example 3",source:`<pf-data-list aria-label="Width modifier data list example 3" expandable>
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
    >
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
      </pf-dropdown>
    </pf-data-list-action>

    <pf-data-list-content aria-label="Primary Content Details">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.
      </p>
    </pf-data-list-content>
  </pf-data-list-item>
</pf-data-list>`},{default:a(()=>[e(p,{"aria-label":"Width modifier data list example 3",expandable:""},{default:a(()=>[e(d,{"aria-labelledby":"width-ex3-item1"},{default:a(()=>[e(b,{"aria-labelledby":"width-ex3-item1",name:"width-ex3-item1"}),e(l,{width:5},{default:a(()=>[...t[71]||(t[71]=[i("div",{class:"preview-placeholder"},[i("b",{id:"width-ex3-item1"},"width 5"),i("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit.")],-1)])]),_:1}),e(l,{width:2},{default:a(()=>[...t[72]||(t[72]=[i("div",{class:"preview-placeholder"},[i("b",null,"width 2"),i("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit.")],-1)])]),_:1}),e(l,null,{default:a(()=>[...t[73]||(t[73]=[i("div",{class:"preview-placeholder"},"default",-1)])]),_:1}),e(r,{id:"width-ex3-action1","aria-labelledby":"width-ex3-item1 width-ex3-action1","aria-label":"Actions"},{default:a(()=>[e(u,{position:"right"},{toggle:a(()=>[e(c,{variant:"plain"})]),default:a(()=>[e(o,null,{default:a(()=>[...t[74]||(t[74]=[n("Link",-1)])]),_:1}),e(o,{component:"button"},{default:a(()=>[...t[75]||(t[75]=[n(" Action ",-1)])]),_:1}),e(o,{disabled:""},{default:a(()=>[...t[76]||(t[76]=[n(" Disabled Link ",-1)])]),_:1})]),_:1})]),_:1}),e(g,{"aria-label":"Primary Content Details"},{default:a(()=>[...t[77]||(t[77]=[i("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),e(m,{title:"Controlling text",source:`<pf-data-list aria-label="Simple data list example">
  <pf-data-list-item aria-labelledby="simple-item5">
    <pf-data-list-cell wrap-modifier="breakWord">
      <span id="simple-item5">Primary content</span>
    </pf-data-list-cell>
    <pf-data-list-cell wrap-modifier="truncate">
      Really really really really really really really really really really really really really really long
      description that should be truncated before it ends
    </pf-data-list-cell>
  </pf-data-list-item>
</pf-data-list>`},{default:a(()=>[e(p,{"aria-label":"Simple data list example"},{default:a(()=>[e(d,{"aria-labelledby":"simple-item5"},{default:a(()=>[e(l,{"wrap-modifier":"breakWord"},{default:a(()=>[...t[78]||(t[78]=[i("span",{id:"simple-item5"},"Primary content",-1)])]),_:1}),e(l,{"wrap-modifier":"truncate"},{default:a(()=>[...t[79]||(t[79]=[n(" Really really really really really really really really really really really really really really long description that should be truncated before it ends ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),e(m,{title:"Small grid breakpoint",source:`<pf-data-list aria-label="Simple data list example" grid-breakpoint="sm">
  <pf-data-list-item>
    <pf-data-list-cell>
      Primary content
    </pf-data-list-cell>
    <pf-data-list-cell>
      Really really really really really really really really really really really really really really long
      description that should be truncated before it ends
    </pf-data-list-cell>
  </pf-data-list-item>
</pf-data-list>`},{default:a(()=>[e(p,{"aria-label":"Simple data list example","grid-breakpoint":"sm"},{default:a(()=>[e(d,null,{default:a(()=>[e(l,null,{default:a(()=>[...t[80]||(t[80]=[n(" Primary content ",-1)])]),_:1}),e(l,null,{default:a(()=>[...t[81]||(t[81]=[n(" Really really really really really really really really really really really really really really long description that should be truncated before it ends ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),V=q(A,[["__scopeId","data-v-87926f04"]]);export{V as default};
