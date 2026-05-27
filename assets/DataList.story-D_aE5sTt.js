import{D as e,E as t,I as n,N as r,O as i,S as a,j as o,n as s,x as c,z as l}from"./index-mFbvqZfx.js";import{t as u}from"./code-branch-icon-Dm4adbKF.js";var d=s(i({__name:`DataList.story`,setup(i){let s=console.log;return(i,d)=>{let f=r(`component-info`),p=r(`pf-data-list-cell`),m=r(`pf-data-list-item`),h=r(`pf-data-list`),g=r(`story-canvas`),_=r(`pf-data-list-item-cells`),v=r(`pf-data-list-item-row`),y=r(`pf-data-list-check`),b=r(`pf-menu-toggle`),x=r(`pf-dropdown-item`),S=r(`pf-dropdown`),C=r(`pf-data-list-action`),w=r(`pf-button`),T=r(`pf-data-list-content`),E=r(`doc-page`);return o(),a(E,{name:`Components/DataList.story.vue`,title:`Data list`},{description:n(()=>[...d[0]||=[t(`A `,-1),c(`b`,null,`data list`,-1),t(` is used to display large data sets when you need a flexible layout or need to include interactive content like charts.`,-1)]]),apidocs:n(()=>[e(f,{name:`PfDataList`,doc:{name:`PfDataList`,exportName:`PfDataList`,displayName:`DataList`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`selectionInputName`,description:`Name of the item input (radio or checkbox) when item selection is enabled`,required:!1,type:{name:`string`}},{name:`selectionInputValue`,description:`Defines the value for the input (radio or checkbox)`,required:!1,type:{name:`string`}},{name:`selectionMultiple`,description:`Flag indicating if multiple pf-data-list-items are selectable`,required:!1,type:{name:`boolean`}},{name:`compact`,description:`Flag indicating if pf-data-list should have compact styling`,required:!1,type:{name:`boolean`}},{name:`expandable`,description:`Flag indicating if pf-data-list-items should have expandable styling`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`gridBreakpoint`,description:`Specifies the grid breakpoints`,required:!1,type:{name:`union`,elements:[{name:`"none"`},{name:`"always"`},{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`"xl"`},{name:`"2xl"`}]},defaultValue:{func:!1,value:`'md'`}},{name:`wrapModifier`,description:`Determines which wrapping modifier to apply to the pf-data-list`,required:!1,type:{name:`union`,elements:[{name:`DataListWrapModifier`},{name:`"nowrap"`},{name:`"truncate"`},{name:`"breakWord"`}]}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataList.vue`]}}),e(f,{name:`PfDataListAction`,doc:{name:`PfDataListAction`,exportName:`PfDataListAction`,displayName:`DataListAction`,description:``,tags:{},props:[{name:`visibility2xl`,required:!1,type:{name:`union`,elements:[{name:`"hidden"`},{name:`"visible"`}]}},{name:`visibilityXl`,required:!1,type:{name:`union`,elements:[{name:`"hidden"`},{name:`"visible"`}]}},{name:`visibilityLg`,required:!1,type:{name:`union`,elements:[{name:`"hidden"`},{name:`"visible"`}]}},{name:`visibilityMd`,required:!1,type:{name:`union`,elements:[{name:`"hidden"`},{name:`"visible"`}]}},{name:`visibilitySm`,required:!1,type:{name:`union`,elements:[{name:`"hidden"`},{name:`"visible"`}]}},{name:`visibility`,required:!1,type:{name:`union`,elements:[{name:`"hidden"`},{name:`"visible"`}]}},{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListAction.vue`]}}),e(f,{name:`PfDataListCell`,doc:{name:`PfDataListCell`,exportName:`PfDataListCell`,displayName:`DataListCell`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`noFill`,required:!1,type:{name:`boolean`}},{name:`width`,required:!1,type:{name:`union`,elements:[{name:`1`},{name:`2`},{name:`3`},{name:`4`},{name:`5`}]}},{name:`alignRight`,required:!1,type:{name:`boolean`}},{name:`icon`,required:!1,type:{name:`boolean`}},{name:`wrapModifier`,required:!1,type:{name:`DataListWrapModifier`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListCell.vue`]}}),e(f,{name:`PfDataListCheck`,doc:{name:`PfDataListCheck`,exportName:`PfDataListCheck`,displayName:`DataListCheck`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`otherControls`,required:!1,type:{name:`boolean`}}],events:[],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListCheck.vue`]}}),e(f,{name:`PfDataListContent`,doc:{name:`PfDataListContent`,exportName:`PfDataListContent`,displayName:`DataListContent`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`noPadding`,required:!1,type:{name:`boolean`}},{name:`hidden`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListContent.vue`]}}),e(f,{name:`PfDataListItem`,doc:{name:`PfDataListItem`,exportName:`PfDataListItem`,displayName:`DataListItem`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`selected`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`selectionInputName`,description:`Name of the item inputs (radio or checkbox) when item selection is enabled`,required:!1,type:{name:`string`}},{name:`selectionInputValue`,description:`Defines the value for the inputs (radio or checkbox) of the pf-data-list-item`,required:!1,type:{name:`string`}},{name:`expandable`,description:`Flag indicating if the pf-data-list-item is expandable`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}}],events:[{name:`click`,type:{names:[`PointerEvent`]}},{name:`update:selected`,type:{names:[`boolean`]}}],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListItem.vue`]}}),e(f,{name:`PfDataListItemCells`,doc:{name:`PfDataListItemCells`,exportName:`PfDataListItemCells`,displayName:`DataListItemCells`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListItemCells.vue`]}}),e(f,{name:`PfDataListItemRow`,doc:{name:`PfDataListItemRow`,exportName:`PfDataListItemRow`,displayName:`DataListItemRow`,description:``,tags:{},expose:[{name:`toggle`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`wrapModifier`,required:!1,type:{name:`DataListWrapModifier`}}],events:[],slots:[{name:`toggle`},{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListItemRow.vue`]}}),e(f,{name:`PfDataListToggle`,doc:{name:`PfDataListToggle`,exportName:`PfDataListToggle`,displayName:`DataListToggle`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`id`,required:!1,type:{name:`string`}},{name:`expanded`,required:!1,type:{name:`boolean`}},{name:`noPadding`,required:!1,type:{name:`boolean`}},{name:`ariaLabelledby`,required:!1,type:{name:`string`}},{name:`ariaLabel`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'Details'`}},{name:`ariaControls`,required:!1,type:{name:`string`}}],events:[{name:`click`,type:{names:[`Event`]}}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListToggle.vue`]}})]),default:n(()=>[d[82]||=c(`div`,{class:`markdown pf-v6-c-content`},[c(`p`,null,`Use data lists when:`),c(`ul`,null,[c(`li`,null,`A flexible layout is more important than arranging information in a grid.`),c(`li`,null,`You want to include active content like a chart.`),c(`li`,null,`Content displayed may vary between rows.`)]),c(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),c(`ul`,null,[c(`li`,null,[t(`The `),c(`code`,null,`filled`),t(` prop of `),c(`code`,null,`pf-data-list-cell`),t(` is renamed to `),c(`code`,null,`no-fill`),t(` with inverted behavior.`)]),c(`li`,null,[t(`The `),c(`code`,null,`isPlainButtonAction`),t(` prop of `),c(`code`,null,`pf-data-list-action`),t(` is renamed to `),c(`code`,null,`plain-button`),t(`.`)]),c(`li`,null,[t(`The `),c(`code`,null,`isValid`),t(` prop of `),c(`code`,null,`pf-data-list-check`),t(` is renamed to `),c(`code`,null,`invalid`),t(` with inverted behavior.`)]),c(`li`,null,[t(`The `),c(`code`,null,`pf-data-list-item-row`),t(` and `),c(`code`,null,`pf-data-list-item-cells`),t(` components are optional and are only required if you need to change their attributes or when you have to control the order of sibling components.`)])]),c(`p`,null,[t(`See `),c(`a`,{href:`#/`},`common differences from patternfly-react`),t(`.`)]),c(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),e(g,{title:`Basic`,source:`<pf-data-list aria-label="Simple data list example">
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
    <pf-data-list-cell no-fill align-right> Secondary content (pf-m-align-right pf-m-no-fill) </pf-data-list-cell>
  </pf-data-list-item>
</pf-data-list>`},{default:n(()=>[e(h,{"aria-label":`Simple data list example`},{default:n(()=>[e(m,{"aria-labelledby":`simple-item1`},{default:n(()=>[e(p,null,{default:n(()=>[...d[1]||=[c(`span`,{id:`simple-item1`},`Primary content`,-1)]]),_:1}),e(p,null,{default:n(()=>[...d[2]||=[t(`Secondary content`,-1)]]),_:1})]),_:1}),e(m,{"aria-labelledby":`simple-item2`},{default:n(()=>[e(p,{"no-fill":``},{default:n(()=>[...d[3]||=[c(`span`,{id:`simple-item2`},`Secondary content (pf-m-no-fill)`,-1)]]),_:1}),e(p,{"no-fill":``,"align-right":``},{default:n(()=>[...d[4]||=[t(` Secondary content (pf-m-align-right pf-m-no-fill) `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),e(g,{title:`Compact`,source:`<pf-data-list aria-label="Compact data list example" compact>
  <pf-data-list-item aria-labelledby="simple-item3">
    <pf-data-list-item-row>
      <pf-data-list-item-cells>
        <pf-data-list-cell>
          <span id="simple-item3">Primary content (explicit row and cells)</span>
        </pf-data-list-cell>
        <pf-data-list-cell> Secondary content </pf-data-list-cell>
      </pf-data-list-item-cells>
    </pf-data-list-item-row>
  </pf-data-list-item>

  <pf-data-list-item aria-labelledby="simple-item4">
    <pf-data-list-cell no-fill>
      <span id="simple-item4">Secondary content (pf-m-no-fill)</span>
    </pf-data-list-cell>
    <pf-data-list-cell no-fill align-right> Secondary content (pf-m-align-right pf-m-no-fill) </pf-data-list-cell>
  </pf-data-list-item>
</pf-data-list>`},{default:n(()=>[e(h,{"aria-label":`Compact data list example`,compact:``},{default:n(()=>[e(m,{"aria-labelledby":`simple-item3`},{default:n(()=>[e(v,null,{default:n(()=>[e(_,null,{default:n(()=>[e(p,null,{default:n(()=>[...d[5]||=[c(`span`,{id:`simple-item3`},`Primary content (explicit row and cells)`,-1)]]),_:1}),e(p,null,{default:n(()=>[...d[6]||=[t(` Secondary content `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),e(m,{"aria-labelledby":`simple-item4`},{default:n(()=>[e(p,{"no-fill":``},{default:n(()=>[...d[7]||=[c(`span`,{id:`simple-item4`},`Secondary content (pf-m-no-fill)`,-1)]]),_:1}),e(p,{"no-fill":``,"align-right":``},{default:n(()=>[...d[8]||=[t(` Secondary content (pf-m-align-right pf-m-no-fill) `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),e(g,{title:`Checkboxes, actions and additional cells`,source:`<pf-data-list aria-label="Checkbox and action data list example">
  <pf-data-list-item aria-labelledby="check-action-item1">
    <pf-data-list-check aria-labelledby="check-action-item1" name="check-action-check1" />

    <pf-data-list-cell> <span id="check-action-item1">Primary content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. </pf-data-list-cell>
    <pf-data-list-cell> Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. </pf-data-list-cell>
    <pf-data-list-cell> <span>Tertiary content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. </pf-data-list-cell>
    <pf-data-list-cell> <span>More content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. </pf-data-list-cell>
    <pf-data-list-cell> <span>More content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. </pf-data-list-cell>

    <pf-data-list-action id="check-action-action1" aria-labelledby="check-action-item1 check-action-action1" aria-label="Actions">
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

    <pf-data-list-cell> <span id="check-action-item2">Primary content - Lorem ipsum</span> dolor sit amet, consectetur adipisicing elit, sed do eiusmod. </pf-data-list-cell>
    <pf-data-list-cell> Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. </pf-data-list-cell>

    <pf-data-list-action id="check-action-action2" aria-labelledby="check-action-item2 check-action-action2" aria-label="Actions" visibility-lg="hidden">
      <pf-dropdown position="right">
        <template #toggle>
          <pf-menu-toggle variant="plain" />
        </template>

        <pf-dropdown-item component="button">Primary</pf-dropdown-item>
        <pf-dropdown-item component="button">Secondary</pf-dropdown-item>
      </pf-dropdown>
    </pf-data-list-action>

    <pf-data-list-action id="check-action-action3" aria-labelledby="check-action-item2 check-action-action3" aria-label="Actions" visibility="hidden" visibility-lg="visible">
      <pf-button variant="primary">Primary</pf-button>
      <pf-button variant="secondary">Secondary</pf-button>
    </pf-data-list-action>
  </pf-data-list-item>

  <pf-data-list-item aria-labelledby="check-action-item3">
    <pf-data-list-check aria-labelledby="check-action-item3" name="check-action-check1" />

    <pf-data-list-cell> <span id="check-action-item3">Primary content - Lorem ipsum</span> dolor sit amet, consectetur adipisicing elit, sed do eiusmod. </pf-data-list-cell>
    <pf-data-list-cell> Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. </pf-data-list-cell>

    <pf-data-list-action id="check-action-action3" aria-labelledby="check-action-item3 check-action-action3" aria-label="Actions" visibility-xl="hidden">
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

    <pf-data-list-action id="check-action-action3" aria-labelledby="check-action-item3 check-action-action3" aria-label="Actions" visibility="hidden" visibility-xl="visible">
      <pf-button variant="primary">Primary</pf-button>
      <pf-button variant="secondary">Secondary</pf-button>
      <pf-button variant="secondary">Secondary</pf-button>
      <pf-button variant="secondary">Secondary</pf-button>
    </pf-data-list-action>
  </pf-data-list-item>
</pf-data-list>`},{default:n(()=>[e(h,{"aria-label":`Checkbox and action data list example`},{default:n(()=>[e(m,{"aria-labelledby":`check-action-item1`},{default:n(()=>[e(y,{"aria-labelledby":`check-action-item1`,name:`check-action-check1`}),e(p,null,{default:n(()=>[...d[9]||=[c(`span`,{id:`check-action-item1`},`Primary content`,-1),t(` Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),e(p,null,{default:n(()=>[...d[10]||=[t(` Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),e(p,null,{default:n(()=>[...d[11]||=[c(`span`,null,`Tertiary content`,-1),t(` Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),e(p,null,{default:n(()=>[...d[12]||=[c(`span`,null,`More content`,-1),t(` Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),e(p,null,{default:n(()=>[...d[13]||=[c(`span`,null,`More content`,-1),t(` Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),e(C,{id:`check-action-action1`,"aria-labelledby":`check-action-item1 check-action-action1`,"aria-label":`Actions`},{default:n(()=>[e(S,{position:`right`},{toggle:n(()=>[e(b,{variant:`plain`})]),default:n(()=>[e(x,null,{default:n(()=>[...d[14]||=[t(`Link`,-1)]]),_:1}),e(x,{component:`button`},{default:n(()=>[...d[15]||=[t(`Action`,-1)]]),_:1}),e(x,{disabled:``},{default:n(()=>[...d[16]||=[t(`Disabled Link`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),e(m,{"aria-labelledby":`check-action-item2`},{default:n(()=>[e(y,{"aria-labelledby":`check-action-item2`,name:`check-action-check1`}),e(p,null,{default:n(()=>[...d[17]||=[c(`span`,{id:`check-action-item2`},`Primary content - Lorem ipsum`,-1),t(` dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),e(p,null,{default:n(()=>[...d[18]||=[t(` Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),e(C,{id:`check-action-action2`,"aria-labelledby":`check-action-item2 check-action-action2`,"aria-label":`Actions`,"visibility-lg":`hidden`},{default:n(()=>[e(S,{position:`right`},{toggle:n(()=>[e(b,{variant:`plain`})]),default:n(()=>[e(x,{component:`button`},{default:n(()=>[...d[19]||=[t(`Primary`,-1)]]),_:1}),e(x,{component:`button`},{default:n(()=>[...d[20]||=[t(`Secondary`,-1)]]),_:1})]),_:1})]),_:1}),e(C,{id:`check-action-action3`,"aria-labelledby":`check-action-item2 check-action-action3`,"aria-label":`Actions`,visibility:`hidden`,"visibility-lg":`visible`},{default:n(()=>[e(w,{variant:`primary`},{default:n(()=>[...d[21]||=[t(`Primary`,-1)]]),_:1}),e(w,{variant:`secondary`},{default:n(()=>[...d[22]||=[t(`Secondary`,-1)]]),_:1})]),_:1})]),_:1}),e(m,{"aria-labelledby":`check-action-item3`},{default:n(()=>[e(y,{"aria-labelledby":`check-action-item3`,name:`check-action-check1`}),e(p,null,{default:n(()=>[...d[23]||=[c(`span`,{id:`check-action-item3`},`Primary content - Lorem ipsum`,-1),t(` dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),e(p,null,{default:n(()=>[...d[24]||=[t(` Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),e(C,{id:`check-action-action3`,"aria-labelledby":`check-action-item3 check-action-action3`,"aria-label":`Actions`,"visibility-xl":`hidden`},{default:n(()=>[e(S,{position:`right`},{toggle:n(()=>[e(b,{variant:`plain`})]),default:n(()=>[e(x,{component:`button`},{default:n(()=>[...d[25]||=[t(`Primary`,-1)]]),_:1}),e(x,{component:`button`},{default:n(()=>[...d[26]||=[t(`Secondary`,-1)]]),_:1}),e(x,{component:`button`},{default:n(()=>[...d[27]||=[t(`Secondary`,-1)]]),_:1}),e(x,{component:`button`},{default:n(()=>[...d[28]||=[t(`Secondary`,-1)]]),_:1})]),_:1})]),_:1}),e(C,{id:`check-action-action3`,"aria-labelledby":`check-action-item3 check-action-action3`,"aria-label":`Actions`,visibility:`hidden`,"visibility-xl":`visible`},{default:n(()=>[e(w,{variant:`primary`},{default:n(()=>[...d[29]||=[t(`Primary`,-1)]]),_:1}),e(w,{variant:`secondary`},{default:n(()=>[...d[30]||=[t(`Secondary`,-1)]]),_:1}),e(w,{variant:`secondary`},{default:n(()=>[...d[31]||=[t(`Secondary`,-1)]]),_:1}),e(w,{variant:`secondary`},{default:n(()=>[...d[32]||=[t(`Secondary`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(g,{title:`Selectable rows`,source:`<pf-data-list aria-label="selectable data list example" @update:selected="log">
  <pf-data-list-item id="item1" aria-labelledby="selectable-action-item1">
    <pf-data-list-cell>
      <span id="selectable-action-item1">Single actionable Primary content</span>
    </pf-data-list-cell>
    <pf-data-list-cell>Single actionable Secondary content</pf-data-list-cell>

    <pf-data-list-action id="selectable-action-action1" aria-labelledby="selectable-action-item1 selectable-action-action1" aria-label="Actions">
      <pf-dropdown position="right">
        <template #toggle>
          <pf-menu-toggle variant="plain" />
        </template>
        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button"> Action </pf-dropdown-item>
        <pf-dropdown-item disabled> Disabled Link </pf-dropdown-item>
      </pf-dropdown>
    </pf-data-list-action>
  </pf-data-list-item>

  <pf-data-list-item id="item2" aria-labelledby="selectable-actions-item2">
    <pf-data-list-cell>
      <span id="selectable-actions-item2">Selectable actions Primary content</span>
    </pf-data-list-cell>
    <pf-data-list-cell>Selectable actions Secondary content</pf-data-list-cell>

    <pf-data-list-action id="selectable-actions-action2" aria-labelledby="selectable-actions-item2 selectable-actions-action2" aria-label="Actions">
      <pf-dropdown position="right">
        <template #toggle>
          <pf-menu-toggle variant="plain" />
        </template>

        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button"> Action </pf-dropdown-item>
        <pf-dropdown-item disabled> Disabled Link </pf-dropdown-item>
      </pf-dropdown>
    </pf-data-list-action>
  </pf-data-list-item>
</pf-data-list>`},{default:n(()=>[e(h,{"aria-label":`selectable data list example`,"onUpdate:selected":l(s)},{default:n(()=>[e(m,{id:`item1`,"aria-labelledby":`selectable-action-item1`},{default:n(()=>[e(p,null,{default:n(()=>[...d[33]||=[c(`span`,{id:`selectable-action-item1`},`Single actionable Primary content`,-1)]]),_:1}),e(p,null,{default:n(()=>[...d[34]||=[t(`Single actionable Secondary content`,-1)]]),_:1}),e(C,{id:`selectable-action-action1`,"aria-labelledby":`selectable-action-item1 selectable-action-action1`,"aria-label":`Actions`},{default:n(()=>[e(S,{position:`right`},{toggle:n(()=>[e(b,{variant:`plain`})]),default:n(()=>[e(x,null,{default:n(()=>[...d[35]||=[t(`Link`,-1)]]),_:1}),e(x,{component:`button`},{default:n(()=>[...d[36]||=[t(` Action `,-1)]]),_:1}),e(x,{disabled:``},{default:n(()=>[...d[37]||=[t(` Disabled Link `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),e(m,{id:`item2`,"aria-labelledby":`selectable-actions-item2`},{default:n(()=>[e(p,null,{default:n(()=>[...d[38]||=[c(`span`,{id:`selectable-actions-item2`},`Selectable actions Primary content`,-1)]]),_:1}),e(p,null,{default:n(()=>[...d[39]||=[t(`Selectable actions Secondary content`,-1)]]),_:1}),e(C,{id:`selectable-actions-action2`,"aria-labelledby":`selectable-actions-item2 selectable-actions-action2`,"aria-label":`Actions`},{default:n(()=>[e(S,{position:`right`},{toggle:n(()=>[e(b,{variant:`plain`})]),default:n(()=>[e(x,null,{default:n(()=>[...d[40]||=[t(`Link`,-1)]]),_:1}),e(x,{component:`button`},{default:n(()=>[...d[41]||=[t(` Action `,-1)]]),_:1}),e(x,{disabled:``},{default:n(()=>[...d[42]||=[t(` Disabled Link `,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,[`onUpdate:selected`])]),_:1}),e(g,{title:`Expandable`,source:`<pf-data-list aria-label="Expandable data list example" expandable>
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

    <pf-data-list-action id="ex-action1" aria-labelledby="ex-item1 ex-action1" aria-label="Actions">
      <pf-dropdown position="right">
        <template #toggle>
          <pf-menu-toggle variant="plain" />
        </template>

        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button"> Action </pf-dropdown-item>
        <pf-dropdown-item disabled> Disabled Link </pf-dropdown-item>
      </pf-dropdown>
    </pf-data-list-action>

    <pf-data-list-content>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </pf-data-list-content>
  </pf-data-list-item>

  <pf-data-list-item aria-labelledby="ex-item2" :expandable="false">
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

      <pf-data-list-action id="ex-action2" aria-labelledby="ex-item2 ex-action2" aria-label="Actions">
        <pf-dropdown position="right">
          <template #toggle>
            <pf-menu-toggle variant="plain" />
          </template>

          <pf-dropdown-item>Link</pf-dropdown-item>
          <pf-dropdown-item component="button"> Action </pf-dropdown-item>
          <pf-dropdown-item disabled> Disabled Link </pf-dropdown-item>
        </pf-dropdown>
      </pf-data-list-action>
    </pf-data-list-item-row>

    <pf-data-list-content>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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

    <pf-data-list-action id="ex-action3" aria-labelledby="ex-item3 ex-action3" aria-label="Actions">
      <pf-dropdown position="right">
        <template #toggle>
          <pf-menu-toggle variant="plain" />
        </template>

        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button"> Action </pf-dropdown-item>
        <pf-dropdown-item disabled> Disabled Link </pf-dropdown-item>
      </pf-dropdown>
    </pf-data-list-action>

    <pf-data-list-content no-padding> This expanded section has no padding. </pf-data-list-content>
  </pf-data-list-item>
</pf-data-list>`},{default:n(()=>[e(h,{"aria-label":`Expandable data list example`,expandable:``},{default:n(()=>[e(m,{"aria-labelledby":`ex-item1`},{default:n(()=>[e(p,{icon:``},{default:n(()=>[e(l(u))]),_:1}),e(p,null,{default:n(()=>[...d[43]||=[c(`div`,{id:`ex-item1`},`Primary content`,-1),c(`span`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1),c(`a`,{href:`#`},`link`,-1)]]),_:1}),e(p,null,{default:n(()=>[...d[44]||=[c(`span`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]]),_:1}),e(p,null,{default:n(()=>[...d[45]||=[c(`span`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]]),_:1}),e(C,{id:`ex-action1`,"aria-labelledby":`ex-item1 ex-action1`,"aria-label":`Actions`},{default:n(()=>[e(S,{position:`right`},{toggle:n(()=>[e(b,{variant:`plain`})]),default:n(()=>[e(x,null,{default:n(()=>[...d[46]||=[t(`Link`,-1)]]),_:1}),e(x,{component:`button`},{default:n(()=>[...d[47]||=[t(` Action `,-1)]]),_:1}),e(x,{disabled:``},{default:n(()=>[...d[48]||=[t(` Disabled Link `,-1)]]),_:1})]),_:1})]),_:1}),e(T,null,{default:n(()=>[...d[49]||=[c(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,-1)]]),_:1})]),_:1}),e(m,{"aria-labelledby":`ex-item2`,expandable:!1},{default:n(()=>[e(v,null,{default:n(()=>[e(_,null,{default:n(()=>[e(p,{icon:``},{default:n(()=>[e(l(u))]),_:1}),e(p,null,{default:n(()=>[...d[50]||=[c(`div`,{id:`ex-item2`},`Secondary content`,-1),c(`span`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]]),_:1}),e(p,null,{default:n(()=>[...d[51]||=[c(`span`,null,`Lorem ipsum dolor sit amet.`,-1)]]),_:1}),e(p,null,{default:n(()=>[...d[52]||=[c(`span`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]]),_:1})]),_:1}),e(C,{id:`ex-action2`,"aria-labelledby":`ex-item2 ex-action2`,"aria-label":`Actions`},{default:n(()=>[e(S,{position:`right`},{toggle:n(()=>[e(b,{variant:`plain`})]),default:n(()=>[e(x,null,{default:n(()=>[...d[53]||=[t(`Link`,-1)]]),_:1}),e(x,{component:`button`},{default:n(()=>[...d[54]||=[t(` Action `,-1)]]),_:1}),e(x,{disabled:``},{default:n(()=>[...d[55]||=[t(` Disabled Link `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),e(T,null,{default:n(()=>[...d[56]||=[c(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,-1)]]),_:1})]),_:1}),e(m,{"aria-labelledby":`ex-item3`},{default:n(()=>[e(p,{icon:``},{default:n(()=>[e(l(u))]),_:1}),e(p,null,{default:n(()=>[...d[57]||=[c(`div`,{id:`ex-item3`},`Tertiary content`,-1),c(`span`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]]),_:1}),e(p,null,{default:n(()=>[...d[58]||=[c(`span`,null,`Lorem ipsum dolor sit amet.`,-1)]]),_:1}),e(p,null,{default:n(()=>[...d[59]||=[c(`span`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]]),_:1}),e(C,{id:`ex-action3`,"aria-labelledby":`ex-item3 ex-action3`,"aria-label":`Actions`},{default:n(()=>[e(S,{position:`right`},{toggle:n(()=>[e(b,{variant:`plain`})]),default:n(()=>[e(x,null,{default:n(()=>[...d[60]||=[t(`Link`,-1)]]),_:1}),e(x,{component:`button`},{default:n(()=>[...d[61]||=[t(` Action `,-1)]]),_:1}),e(x,{disabled:``},{default:n(()=>[...d[62]||=[t(` Disabled Link `,-1)]]),_:1})]),_:1})]),_:1}),e(T,{"no-padding":``},{default:n(()=>[...d[63]||=[t(` This expanded section has no padding. `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),e(g,{title:`Width modifiers - Default fitting example 1`,source:`<pf-data-list aria-label="Width modifier data list example 1">
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
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </pf-data-list-cell>
  </pf-data-list-item>
</pf-data-list>`},{default:n(()=>[e(h,{"aria-label":`Width modifier data list example 1`},{default:n(()=>[e(m,{"aria-labelledby":`width-ex1-item1`},{default:n(()=>[e(y,{"aria-labelledby":`width-ex1-item1`,name:`width-ex1-item1`}),e(p,null,{default:n(()=>[...d[64]||=[c(`div`,{class:`preview-placeholder`},[c(`b`,{id:`width-ex1-item1`},`default`),c(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipisicing elit.`)],-1)]]),_:1}),e(p,null,{default:n(()=>[...d[65]||=[c(`div`,{class:`preview-placeholder`},[c(`b`,null,`default`),c(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`)],-1)]]),_:1})]),_:1})]),_:1})]),_:1}),e(g,{title:`Width modifiers - Flex modifiers - example 2`,source:`<pf-data-list aria-label="Width modifier data list example 2">
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
    <pf-data-list-action aria-labelledby="width-ex2-item1 width-ex2-action1" aria-label="Actions">
      <pf-dropdown position="right">
        <template #toggle>
          <pf-menu-toggle variant="plain" />
        </template>

        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button"> Action </pf-dropdown-item>
        <pf-dropdown-item disabled> Disabled Link </pf-dropdown-item>
      </pf-dropdown>
    </pf-data-list-action>
  </pf-data-list-item>
</pf-data-list>`},{default:n(()=>[e(h,{"aria-label":`Width modifier data list example 2`},{default:n(()=>[e(m,{"aria-labelledby":`width-ex2-item1`},{default:n(()=>[e(y,{"aria-labelledby":`width-ex2-item1`,name:`width-ex2-item1`}),e(p,{width:2},{default:n(()=>[...d[66]||=[c(`div`,{class:`preview-placeholder`},[c(`b`,{id:`width-ex2-item1`},`width 2`),c(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.`)],-1)]]),_:1}),e(p,{width:4},{default:n(()=>[...d[67]||=[c(`div`,{class:`preview-placeholder`},[c(`b`,null,`width 4`),c(`p`,null,`Lorem ipsum dolor sit amet.`)],-1)]]),_:1}),e(C,{"aria-labelledby":`width-ex2-item1 width-ex2-action1`,"aria-label":`Actions`},{default:n(()=>[e(S,{position:`right`},{toggle:n(()=>[e(b,{variant:`plain`})]),default:n(()=>[e(x,null,{default:n(()=>[...d[68]||=[t(`Link`,-1)]]),_:1}),e(x,{component:`button`},{default:n(()=>[...d[69]||=[t(` Action `,-1)]]),_:1}),e(x,{disabled:``},{default:n(()=>[...d[70]||=[t(` Disabled Link `,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(g,{title:`Width modifiers - Flex modifiers - example 3`,source:`<pf-data-list aria-label="Width modifier data list example 3" expandable>
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

    <pf-data-list-action id="width-ex3-action1" aria-labelledby="width-ex3-item1 width-ex3-action1" aria-label="Actions">
      <pf-dropdown position="right">
        <template #toggle>
          <pf-menu-toggle variant="plain" />
        </template>

        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button"> Action </pf-dropdown-item>
        <pf-dropdown-item disabled> Disabled Link </pf-dropdown-item>
      </pf-dropdown>
    </pf-data-list-action>

    <pf-data-list-content aria-label="Primary Content Details">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </pf-data-list-content>
  </pf-data-list-item>
</pf-data-list>`},{default:n(()=>[e(h,{"aria-label":`Width modifier data list example 3`,expandable:``},{default:n(()=>[e(m,{"aria-labelledby":`width-ex3-item1`},{default:n(()=>[e(y,{"aria-labelledby":`width-ex3-item1`,name:`width-ex3-item1`}),e(p,{width:5},{default:n(()=>[...d[71]||=[c(`div`,{class:`preview-placeholder`},[c(`b`,{id:`width-ex3-item1`},`width 5`),c(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipisicing elit.`)],-1)]]),_:1}),e(p,{width:2},{default:n(()=>[...d[72]||=[c(`div`,{class:`preview-placeholder`},[c(`b`,null,`width 2`),c(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipisicing elit.`)],-1)]]),_:1}),e(p,null,{default:n(()=>[...d[73]||=[c(`div`,{class:`preview-placeholder`},`default`,-1)]]),_:1}),e(C,{id:`width-ex3-action1`,"aria-labelledby":`width-ex3-item1 width-ex3-action1`,"aria-label":`Actions`},{default:n(()=>[e(S,{position:`right`},{toggle:n(()=>[e(b,{variant:`plain`})]),default:n(()=>[e(x,null,{default:n(()=>[...d[74]||=[t(`Link`,-1)]]),_:1}),e(x,{component:`button`},{default:n(()=>[...d[75]||=[t(` Action `,-1)]]),_:1}),e(x,{disabled:``},{default:n(()=>[...d[76]||=[t(` Disabled Link `,-1)]]),_:1})]),_:1})]),_:1}),e(T,{"aria-label":`Primary Content Details`},{default:n(()=>[...d[77]||=[c(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),e(g,{title:`Controlling text`,source:`<pf-data-list aria-label="Simple data list example">
  <pf-data-list-item aria-labelledby="simple-item5">
    <pf-data-list-cell wrap-modifier="breakWord">
      <span id="simple-item5">Primary content</span>
    </pf-data-list-cell>
    <pf-data-list-cell wrap-modifier="truncate"> Really really really really really really really really really really really really really really long description that should be truncated before it ends </pf-data-list-cell>
  </pf-data-list-item>
</pf-data-list>`},{default:n(()=>[e(h,{"aria-label":`Simple data list example`},{default:n(()=>[e(m,{"aria-labelledby":`simple-item5`},{default:n(()=>[e(p,{"wrap-modifier":`breakWord`},{default:n(()=>[...d[78]||=[c(`span`,{id:`simple-item5`},`Primary content`,-1)]]),_:1}),e(p,{"wrap-modifier":`truncate`},{default:n(()=>[...d[79]||=[t(` Really really really really really really really really really really really really really really long description that should be truncated before it ends `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),e(g,{title:`Small grid breakpoint`,source:`<pf-data-list aria-label="Simple data list example" grid-breakpoint="sm">
  <pf-data-list-item>
    <pf-data-list-cell> Primary content </pf-data-list-cell>
    <pf-data-list-cell> Really really really really really really really really really really really really really really long description that should be truncated before it ends </pf-data-list-cell>
  </pf-data-list-item>
</pf-data-list>`},{default:n(()=>[e(h,{"aria-label":`Simple data list example`,"grid-breakpoint":`sm`},{default:n(()=>[e(m,null,{default:n(()=>[e(p,null,{default:n(()=>[...d[80]||=[t(` Primary content `,-1)]]),_:1}),e(p,null,{default:n(()=>[...d[81]||=[t(` Really really really really really really really really really really really really really really long description that should be truncated before it ends `,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),[[`__scopeId`,`data-v-7f2eb163`]]);export{d as default};