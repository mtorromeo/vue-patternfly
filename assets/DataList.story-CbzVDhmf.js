import{N as e,U as t,c as n,h as r,k as i,m as a,p as o,s,st as c}from"./runtime-core.esm-bundler-wvQKcJ7_.js";import{n as l}from"./index-gkhET_bk.js";import{t as u}from"./code-branch-icon-DZ8qNvpp.js";var d=l(r({__name:`DataList.story`,setup(r){let l=console.log;return(r,d)=>{let f=e(`component-info`),p=e(`pf-data-list-cell`),m=e(`pf-data-list-item`),h=e(`pf-data-list`),g=e(`story-canvas`),_=e(`pf-data-list-item-cells`),v=e(`pf-data-list-item-row`),y=e(`pf-data-list-check`),b=e(`pf-menu-toggle`),x=e(`pf-dropdown-item`),S=e(`pf-dropdown`),C=e(`pf-data-list-action`),w=e(`pf-button`),T=e(`pf-data-list-content`),E=e(`doc-page`);return i(),n(E,{name:`Components/DataList.story.vue`,title:`Data list`},{description:t(()=>[...d[0]||=[o(`A `,-1),s(`b`,null,`data list`,-1),o(` is used to display large data sets when you need a flexible layout or need to include interactive content like charts.`,-1)]]),apidocs:t(()=>[a(f,{name:`PfDataList`,doc:{name:`PfDataList`,exportName:`PfDataList`,displayName:`DataList`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`selectionInputName`,description:`Name of the item input (radio or checkbox) when item selection is enabled`,required:!1,type:{name:`string`}},{name:`selectionInputValue`,description:`Defines the value for the input (radio or checkbox)`,required:!1,type:{name:`string`}},{name:`selectionMultiple`,description:`Flag indicating if multiple pf-data-list-items are selectable`,required:!1,type:{name:`boolean`}},{name:`compact`,description:`Flag indicating if pf-data-list should have compact styling`,required:!1,type:{name:`boolean`}},{name:`expandable`,description:`Flag indicating if pf-data-list-items should have expandable styling`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`gridBreakpoint`,description:`Specifies the grid breakpoints`,required:!1,type:{name:`union`,elements:[{name:`"none"`},{name:`"always"`},{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`"xl"`},{name:`"2xl"`}]},defaultValue:{func:!1,value:`'md'`}},{name:`wrapModifier`,description:`Determines which wrapping modifier to apply to the pf-data-list`,required:!1,type:{name:`union`,elements:[{name:`DataListWrapModifier`},{name:`"nowrap"`},{name:`"truncate"`},{name:`"breakWord"`}]}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataList.vue`]}}),a(f,{name:`PfDataListAction`,doc:{name:`PfDataListAction`,exportName:`PfDataListAction`,displayName:`DataListAction`,description:``,tags:{},props:[{name:`visibility2xl`,required:!1,type:{name:`union`,elements:[{name:`"hidden"`},{name:`"visible"`}]}},{name:`visibilityXl`,required:!1,type:{name:`union`,elements:[{name:`"hidden"`},{name:`"visible"`}]}},{name:`visibilityLg`,required:!1,type:{name:`union`,elements:[{name:`"hidden"`},{name:`"visible"`}]}},{name:`visibilityMd`,required:!1,type:{name:`union`,elements:[{name:`"hidden"`},{name:`"visible"`}]}},{name:`visibilitySm`,required:!1,type:{name:`union`,elements:[{name:`"hidden"`},{name:`"visible"`}]}},{name:`visibility`,required:!1,type:{name:`union`,elements:[{name:`"hidden"`},{name:`"visible"`}]}},{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListAction.vue`]}}),a(f,{name:`PfDataListCell`,doc:{name:`PfDataListCell`,exportName:`PfDataListCell`,displayName:`DataListCell`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`noFill`,required:!1,type:{name:`boolean`}},{name:`width`,required:!1,type:{name:`union`,elements:[{name:`1`},{name:`2`},{name:`3`},{name:`4`},{name:`5`}]}},{name:`alignRight`,required:!1,type:{name:`boolean`}},{name:`icon`,required:!1,type:{name:`boolean`}},{name:`wrapModifier`,required:!1,type:{name:`DataListWrapModifier`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListCell.vue`]}}),a(f,{name:`PfDataListCheck`,doc:{name:`PfDataListCheck`,exportName:`PfDataListCheck`,displayName:`DataListCheck`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`otherControls`,required:!1,type:{name:`boolean`}}],events:[],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListCheck.vue`]}}),a(f,{name:`PfDataListContent`,doc:{name:`PfDataListContent`,exportName:`PfDataListContent`,displayName:`DataListContent`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`noPadding`,required:!1,type:{name:`boolean`}},{name:`hidden`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListContent.vue`]}}),a(f,{name:`PfDataListItem`,doc:{name:`PfDataListItem`,exportName:`PfDataListItem`,displayName:`DataListItem`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`selected`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`selectionInputName`,description:`Name of the item inputs (radio or checkbox) when item selection is enabled`,required:!1,type:{name:`string`}},{name:`selectionInputValue`,description:`Defines the value for the inputs (radio or checkbox) of the pf-data-list-item`,required:!1,type:{name:`string`}},{name:`expandable`,description:`Flag indicating if the pf-data-list-item is expandable`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}}],events:[{name:`click`,type:{names:[`PointerEvent`]}},{name:`update:selected`,type:{names:[`boolean`]}}],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListItem.vue`]}}),a(f,{name:`PfDataListItemCells`,doc:{name:`PfDataListItemCells`,exportName:`PfDataListItemCells`,displayName:`DataListItemCells`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListItemCells.vue`]}}),a(f,{name:`PfDataListItemRow`,doc:{name:`PfDataListItemRow`,exportName:`PfDataListItemRow`,displayName:`DataListItemRow`,description:``,tags:{},expose:[{name:`toggle`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`wrapModifier`,required:!1,type:{name:`DataListWrapModifier`}}],events:[],slots:[{name:`toggle`},{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListItemRow.vue`]}}),a(f,{name:`PfDataListToggle`,doc:{name:`PfDataListToggle`,exportName:`PfDataListToggle`,displayName:`DataListToggle`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`id`,required:!1,type:{name:`string`}},{name:`expanded`,required:!1,type:{name:`boolean`}},{name:`ariaLabelledby`,required:!1,type:{name:`string`}},{name:`ariaLabel`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'Details'`}},{name:`ariaControls`,required:!1,type:{name:`string`}}],events:[{name:`click`,type:{names:[`Event`]}}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListToggle.vue`]}})]),default:t(()=>[d[82]||=s(`div`,{class:`markdown pf-v6-c-content`},[s(`p`,null,`Use data lists when:`),s(`ul`,null,[s(`li`,null,`A flexible layout is more important than arranging information in a grid.`),s(`li`,null,`You want to include active content like a chart.`),s(`li`,null,`Content displayed may vary between rows.`)]),s(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),s(`ul`,null,[s(`li`,null,[o(`The `),s(`code`,null,`filled`),o(` prop of `),s(`code`,null,`pf-data-list-cell`),o(` is renamed to `),s(`code`,null,`no-fill`),o(` with inverted behavior.`)]),s(`li`,null,[o(`The `),s(`code`,null,`isPlainButtonAction`),o(` prop of `),s(`code`,null,`pf-data-list-action`),o(` is renamed to `),s(`code`,null,`plain-button`),o(`.`)]),s(`li`,null,[o(`The `),s(`code`,null,`isValid`),o(` prop of `),s(`code`,null,`pf-data-list-check`),o(` is renamed to `),s(`code`,null,`invalid`),o(` with inverted behavior.`)]),s(`li`,null,[o(`The `),s(`code`,null,`isChecked`),o(` and `),s(`code`,null,`onChange`),o(` props of `),s(`code`,null,`pf-data-list-check`),o(` are replaced by `),s(`code`,null,`v-model:checked`),o(`.`)]),s(`li`,null,[o(`The `),s(`code`,null,`pf-data-list-item-row`),o(` and `),s(`code`,null,`pf-data-list-item-cells`),o(` components are optional and are only required if you need to change their attributes or when you have to control the order of sibling components.`)])]),s(`p`,null,[o(`See `),s(`a`,{href:`#/`},`common differences from patternfly-react`),o(`.`)]),s(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),a(g,{title:`Basic`,source:`<pf-data-list aria-label="Simple data list example">
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
</pf-data-list>`},{default:t(()=>[a(h,{"aria-label":`Simple data list example`},{default:t(()=>[a(m,{"aria-labelledby":`simple-item1`},{default:t(()=>[a(p,null,{default:t(()=>[...d[1]||=[s(`span`,{id:`simple-item1`},`Primary content`,-1)]]),_:1}),a(p,null,{default:t(()=>[...d[2]||=[o(`Secondary content`,-1)]]),_:1})]),_:1}),a(m,{"aria-labelledby":`simple-item2`},{default:t(()=>[a(p,{"no-fill":``},{default:t(()=>[...d[3]||=[s(`span`,{id:`simple-item2`},`Secondary content (pf-m-no-fill)`,-1)]]),_:1}),a(p,{"no-fill":``,"align-right":``},{default:t(()=>[...d[4]||=[o(` Secondary content (pf-m-align-right pf-m-no-fill) `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(g,{title:`Compact`,source:`<pf-data-list aria-label="Compact data list example" compact>
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
</pf-data-list>`},{default:t(()=>[a(h,{"aria-label":`Compact data list example`,compact:``},{default:t(()=>[a(m,{"aria-labelledby":`simple-item3`},{default:t(()=>[a(v,null,{default:t(()=>[a(_,null,{default:t(()=>[a(p,null,{default:t(()=>[...d[5]||=[s(`span`,{id:`simple-item3`},`Primary content (explicit row and cells)`,-1)]]),_:1}),a(p,null,{default:t(()=>[...d[6]||=[o(` Secondary content `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(m,{"aria-labelledby":`simple-item4`},{default:t(()=>[a(p,{"no-fill":``},{default:t(()=>[...d[7]||=[s(`span`,{id:`simple-item4`},`Secondary content (pf-m-no-fill)`,-1)]]),_:1}),a(p,{"no-fill":``,"align-right":``},{default:t(()=>[...d[8]||=[o(` Secondary content (pf-m-align-right pf-m-no-fill) `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(g,{title:`Checkboxes, actions and additional cells`,source:`<pf-data-list aria-label="Checkbox and action data list example">
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
</pf-data-list>`},{default:t(()=>[a(h,{"aria-label":`Checkbox and action data list example`},{default:t(()=>[a(m,{"aria-labelledby":`check-action-item1`},{default:t(()=>[a(y,{"aria-labelledby":`check-action-item1`,name:`check-action-check1`}),a(p,null,{default:t(()=>[...d[9]||=[s(`span`,{id:`check-action-item1`},`Primary content`,-1),o(` Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),a(p,null,{default:t(()=>[...d[10]||=[o(` Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),a(p,null,{default:t(()=>[...d[11]||=[s(`span`,null,`Tertiary content`,-1),o(` Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),a(p,null,{default:t(()=>[...d[12]||=[s(`span`,null,`More content`,-1),o(` Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),a(p,null,{default:t(()=>[...d[13]||=[s(`span`,null,`More content`,-1),o(` Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),a(C,{id:`check-action-action1`,"aria-labelledby":`check-action-item1 check-action-action1`,"aria-label":`Actions`},{default:t(()=>[a(S,{position:`right`},{toggle:t(()=>[a(b,{variant:`plain`})]),default:t(()=>[a(x,null,{default:t(()=>[...d[14]||=[o(`Link`,-1)]]),_:1}),a(x,{component:`button`},{default:t(()=>[...d[15]||=[o(`Action`,-1)]]),_:1}),a(x,{disabled:``},{default:t(()=>[...d[16]||=[o(`Disabled Link`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(m,{"aria-labelledby":`check-action-item2`},{default:t(()=>[a(y,{"aria-labelledby":`check-action-item2`,name:`check-action-check1`}),a(p,null,{default:t(()=>[...d[17]||=[s(`span`,{id:`check-action-item2`},`Primary content - Lorem ipsum`,-1),o(` dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),a(p,null,{default:t(()=>[...d[18]||=[o(` Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),a(C,{id:`check-action-action2`,"aria-labelledby":`check-action-item2 check-action-action2`,"aria-label":`Actions`,"visibility-lg":`hidden`},{default:t(()=>[a(S,{position:`right`},{toggle:t(()=>[a(b,{variant:`plain`})]),default:t(()=>[a(x,{component:`button`},{default:t(()=>[...d[19]||=[o(`Primary`,-1)]]),_:1}),a(x,{component:`button`},{default:t(()=>[...d[20]||=[o(`Secondary`,-1)]]),_:1})]),_:1})]),_:1}),a(C,{id:`check-action-action3`,"aria-labelledby":`check-action-item2 check-action-action3`,"aria-label":`Actions`,visibility:`hidden`,"visibility-lg":`visible`},{default:t(()=>[a(w,{variant:`primary`},{default:t(()=>[...d[21]||=[o(`Primary`,-1)]]),_:1}),a(w,{variant:`secondary`},{default:t(()=>[...d[22]||=[o(`Secondary`,-1)]]),_:1})]),_:1})]),_:1}),a(m,{"aria-labelledby":`check-action-item3`},{default:t(()=>[a(y,{"aria-labelledby":`check-action-item3`,name:`check-action-check1`}),a(p,null,{default:t(()=>[...d[23]||=[s(`span`,{id:`check-action-item3`},`Primary content - Lorem ipsum`,-1),o(` dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),a(p,null,{default:t(()=>[...d[24]||=[o(` Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),a(C,{id:`check-action-action3`,"aria-labelledby":`check-action-item3 check-action-action3`,"aria-label":`Actions`,"visibility-xl":`hidden`},{default:t(()=>[a(S,{position:`right`},{toggle:t(()=>[a(b,{variant:`plain`})]),default:t(()=>[a(x,{component:`button`},{default:t(()=>[...d[25]||=[o(`Primary`,-1)]]),_:1}),a(x,{component:`button`},{default:t(()=>[...d[26]||=[o(`Secondary`,-1)]]),_:1}),a(x,{component:`button`},{default:t(()=>[...d[27]||=[o(`Secondary`,-1)]]),_:1}),a(x,{component:`button`},{default:t(()=>[...d[28]||=[o(`Secondary`,-1)]]),_:1})]),_:1})]),_:1}),a(C,{id:`check-action-action3`,"aria-labelledby":`check-action-item3 check-action-action3`,"aria-label":`Actions`,visibility:`hidden`,"visibility-xl":`visible`},{default:t(()=>[a(w,{variant:`primary`},{default:t(()=>[...d[29]||=[o(`Primary`,-1)]]),_:1}),a(w,{variant:`secondary`},{default:t(()=>[...d[30]||=[o(`Secondary`,-1)]]),_:1}),a(w,{variant:`secondary`},{default:t(()=>[...d[31]||=[o(`Secondary`,-1)]]),_:1}),a(w,{variant:`secondary`},{default:t(()=>[...d[32]||=[o(`Secondary`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(g,{title:`Selectable rows`,source:`<pf-data-list aria-label="selectable data list example" @update:selected="log">
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
</pf-data-list>`},{default:t(()=>[a(h,{"aria-label":`selectable data list example`,"onUpdate:selected":c(l)},{default:t(()=>[a(m,{id:`item1`,"aria-labelledby":`selectable-action-item1`},{default:t(()=>[a(p,null,{default:t(()=>[...d[33]||=[s(`span`,{id:`selectable-action-item1`},`Single actionable Primary content`,-1)]]),_:1}),a(p,null,{default:t(()=>[...d[34]||=[o(`Single actionable Secondary content`,-1)]]),_:1}),a(C,{id:`selectable-action-action1`,"aria-labelledby":`selectable-action-item1 selectable-action-action1`,"aria-label":`Actions`},{default:t(()=>[a(S,{position:`right`},{toggle:t(()=>[a(b,{variant:`plain`})]),default:t(()=>[a(x,null,{default:t(()=>[...d[35]||=[o(`Link`,-1)]]),_:1}),a(x,{component:`button`},{default:t(()=>[...d[36]||=[o(` Action `,-1)]]),_:1}),a(x,{disabled:``},{default:t(()=>[...d[37]||=[o(` Disabled Link `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(m,{id:`item2`,"aria-labelledby":`selectable-actions-item2`},{default:t(()=>[a(p,null,{default:t(()=>[...d[38]||=[s(`span`,{id:`selectable-actions-item2`},`Selectable actions Primary content`,-1)]]),_:1}),a(p,null,{default:t(()=>[...d[39]||=[o(`Selectable actions Secondary content`,-1)]]),_:1}),a(C,{id:`selectable-actions-action2`,"aria-labelledby":`selectable-actions-item2 selectable-actions-action2`,"aria-label":`Actions`},{default:t(()=>[a(S,{position:`right`},{toggle:t(()=>[a(b,{variant:`plain`})]),default:t(()=>[a(x,null,{default:t(()=>[...d[40]||=[o(`Link`,-1)]]),_:1}),a(x,{component:`button`},{default:t(()=>[...d[41]||=[o(` Action `,-1)]]),_:1}),a(x,{disabled:``},{default:t(()=>[...d[42]||=[o(` Disabled Link `,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,[`onUpdate:selected`])]),_:1}),a(g,{title:`Expandable`,source:`<pf-data-list aria-label="Expandable data list example" expandable>
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
</pf-data-list>`},{default:t(()=>[a(h,{"aria-label":`Expandable data list example`,expandable:``},{default:t(()=>[a(m,{"aria-labelledby":`ex-item1`},{default:t(()=>[a(p,{icon:``},{default:t(()=>[a(c(u))]),_:1}),a(p,null,{default:t(()=>[...d[43]||=[s(`div`,{id:`ex-item1`},`Primary content`,-1),s(`span`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1),s(`a`,{href:`#`},`link`,-1)]]),_:1}),a(p,null,{default:t(()=>[...d[44]||=[s(`span`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]]),_:1}),a(p,null,{default:t(()=>[...d[45]||=[s(`span`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]]),_:1}),a(C,{id:`ex-action1`,"aria-labelledby":`ex-item1 ex-action1`,"aria-label":`Actions`},{default:t(()=>[a(S,{position:`right`},{toggle:t(()=>[a(b,{variant:`plain`})]),default:t(()=>[a(x,null,{default:t(()=>[...d[46]||=[o(`Link`,-1)]]),_:1}),a(x,{component:`button`},{default:t(()=>[...d[47]||=[o(` Action `,-1)]]),_:1}),a(x,{disabled:``},{default:t(()=>[...d[48]||=[o(` Disabled Link `,-1)]]),_:1})]),_:1})]),_:1}),a(T,null,{default:t(()=>[...d[49]||=[s(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,-1)]]),_:1})]),_:1}),a(m,{"aria-labelledby":`ex-item2`,expandable:!1},{default:t(()=>[a(v,null,{default:t(()=>[a(_,null,{default:t(()=>[a(p,{icon:``},{default:t(()=>[a(c(u))]),_:1}),a(p,null,{default:t(()=>[...d[50]||=[s(`div`,{id:`ex-item2`},`Secondary content`,-1),s(`span`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]]),_:1}),a(p,null,{default:t(()=>[...d[51]||=[s(`span`,null,`Lorem ipsum dolor sit amet.`,-1)]]),_:1}),a(p,null,{default:t(()=>[...d[52]||=[s(`span`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]]),_:1})]),_:1}),a(C,{id:`ex-action2`,"aria-labelledby":`ex-item2 ex-action2`,"aria-label":`Actions`},{default:t(()=>[a(S,{position:`right`},{toggle:t(()=>[a(b,{variant:`plain`})]),default:t(()=>[a(x,null,{default:t(()=>[...d[53]||=[o(`Link`,-1)]]),_:1}),a(x,{component:`button`},{default:t(()=>[...d[54]||=[o(` Action `,-1)]]),_:1}),a(x,{disabled:``},{default:t(()=>[...d[55]||=[o(` Disabled Link `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(T,null,{default:t(()=>[...d[56]||=[s(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,-1)]]),_:1})]),_:1}),a(m,{"aria-labelledby":`ex-item3`},{default:t(()=>[a(p,{icon:``},{default:t(()=>[a(c(u))]),_:1}),a(p,null,{default:t(()=>[...d[57]||=[s(`div`,{id:`ex-item3`},`Tertiary content`,-1),s(`span`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]]),_:1}),a(p,null,{default:t(()=>[...d[58]||=[s(`span`,null,`Lorem ipsum dolor sit amet.`,-1)]]),_:1}),a(p,null,{default:t(()=>[...d[59]||=[s(`span`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]]),_:1}),a(C,{id:`ex-action3`,"aria-labelledby":`ex-item3 ex-action3`,"aria-label":`Actions`},{default:t(()=>[a(S,{position:`right`},{toggle:t(()=>[a(b,{variant:`plain`})]),default:t(()=>[a(x,null,{default:t(()=>[...d[60]||=[o(`Link`,-1)]]),_:1}),a(x,{component:`button`},{default:t(()=>[...d[61]||=[o(` Action `,-1)]]),_:1}),a(x,{disabled:``},{default:t(()=>[...d[62]||=[o(` Disabled Link `,-1)]]),_:1})]),_:1})]),_:1}),a(T,{"no-padding":``},{default:t(()=>[...d[63]||=[o(` This expanded section has no padding. `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(g,{title:`Width modifiers - Default fitting example 1`,source:`<pf-data-list aria-label="Width modifier data list example 1">
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
</pf-data-list>`},{default:t(()=>[a(h,{"aria-label":`Width modifier data list example 1`},{default:t(()=>[a(m,{"aria-labelledby":`width-ex1-item1`},{default:t(()=>[a(y,{"aria-labelledby":`width-ex1-item1`,name:`width-ex1-item1`}),a(p,null,{default:t(()=>[...d[64]||=[s(`div`,{class:`preview-placeholder`},[s(`b`,{id:`width-ex1-item1`},`default`),s(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipisicing elit.`)],-1)]]),_:1}),a(p,null,{default:t(()=>[...d[65]||=[s(`div`,{class:`preview-placeholder`},[s(`b`,null,`default`),s(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`)],-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(g,{title:`Width modifiers - Flex modifiers - example 2`,source:`<pf-data-list aria-label="Width modifier data list example 2">
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
</pf-data-list>`},{default:t(()=>[a(h,{"aria-label":`Width modifier data list example 2`},{default:t(()=>[a(m,{"aria-labelledby":`width-ex2-item1`},{default:t(()=>[a(y,{"aria-labelledby":`width-ex2-item1`,name:`width-ex2-item1`}),a(p,{width:2},{default:t(()=>[...d[66]||=[s(`div`,{class:`preview-placeholder`},[s(`b`,{id:`width-ex2-item1`},`width 2`),s(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.`)],-1)]]),_:1}),a(p,{width:4},{default:t(()=>[...d[67]||=[s(`div`,{class:`preview-placeholder`},[s(`b`,null,`width 4`),s(`p`,null,`Lorem ipsum dolor sit amet.`)],-1)]]),_:1}),a(C,{"aria-labelledby":`width-ex2-item1 width-ex2-action1`,"aria-label":`Actions`},{default:t(()=>[a(S,{position:`right`},{toggle:t(()=>[a(b,{variant:`plain`})]),default:t(()=>[a(x,null,{default:t(()=>[...d[68]||=[o(`Link`,-1)]]),_:1}),a(x,{component:`button`},{default:t(()=>[...d[69]||=[o(` Action `,-1)]]),_:1}),a(x,{disabled:``},{default:t(()=>[...d[70]||=[o(` Disabled Link `,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(g,{title:`Width modifiers - Flex modifiers - example 3`,source:`<pf-data-list aria-label="Width modifier data list example 3" expandable>
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
</pf-data-list>`},{default:t(()=>[a(h,{"aria-label":`Width modifier data list example 3`,expandable:``},{default:t(()=>[a(m,{"aria-labelledby":`width-ex3-item1`},{default:t(()=>[a(y,{"aria-labelledby":`width-ex3-item1`,name:`width-ex3-item1`}),a(p,{width:5},{default:t(()=>[...d[71]||=[s(`div`,{class:`preview-placeholder`},[s(`b`,{id:`width-ex3-item1`},`width 5`),s(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipisicing elit.`)],-1)]]),_:1}),a(p,{width:2},{default:t(()=>[...d[72]||=[s(`div`,{class:`preview-placeholder`},[s(`b`,null,`width 2`),s(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipisicing elit.`)],-1)]]),_:1}),a(p,null,{default:t(()=>[...d[73]||=[s(`div`,{class:`preview-placeholder`},`default`,-1)]]),_:1}),a(C,{id:`width-ex3-action1`,"aria-labelledby":`width-ex3-item1 width-ex3-action1`,"aria-label":`Actions`},{default:t(()=>[a(S,{position:`right`},{toggle:t(()=>[a(b,{variant:`plain`})]),default:t(()=>[a(x,null,{default:t(()=>[...d[74]||=[o(`Link`,-1)]]),_:1}),a(x,{component:`button`},{default:t(()=>[...d[75]||=[o(` Action `,-1)]]),_:1}),a(x,{disabled:``},{default:t(()=>[...d[76]||=[o(` Disabled Link `,-1)]]),_:1})]),_:1})]),_:1}),a(T,{"aria-label":`Primary Content Details`},{default:t(()=>[...d[77]||=[s(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(g,{title:`Controlling text`,source:`<pf-data-list aria-label="Simple data list example">
  <pf-data-list-item aria-labelledby="simple-item5">
    <pf-data-list-cell wrap-modifier="breakWord">
      <span id="simple-item5">Primary content</span>
    </pf-data-list-cell>
    <pf-data-list-cell wrap-modifier="truncate"> Really really really really really really really really really really really really really really long description that should be truncated before it ends </pf-data-list-cell>
  </pf-data-list-item>
</pf-data-list>`},{default:t(()=>[a(h,{"aria-label":`Simple data list example`},{default:t(()=>[a(m,{"aria-labelledby":`simple-item5`},{default:t(()=>[a(p,{"wrap-modifier":`breakWord`},{default:t(()=>[...d[78]||=[s(`span`,{id:`simple-item5`},`Primary content`,-1)]]),_:1}),a(p,{"wrap-modifier":`truncate`},{default:t(()=>[...d[79]||=[o(` Really really really really really really really really really really really really really really long description that should be truncated before it ends `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(g,{title:`Small grid breakpoint`,source:`<pf-data-list aria-label="Simple data list example" grid-breakpoint="sm">
  <pf-data-list-item>
    <pf-data-list-cell> Primary content </pf-data-list-cell>
    <pf-data-list-cell> Really really really really really really really really really really really really really really long description that should be truncated before it ends </pf-data-list-cell>
  </pf-data-list-item>
</pf-data-list>`},{default:t(()=>[a(h,{"aria-label":`Simple data list example`,"grid-breakpoint":`sm`},{default:t(()=>[a(m,null,{default:t(()=>[a(p,null,{default:t(()=>[...d[80]||=[o(` Primary content `,-1)]]),_:1}),a(p,null,{default:t(()=>[...d[81]||=[o(` Really really really really really really really really really really really really really really long description that should be truncated before it ends `,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),[[`__scopeId`,`data-v-c4b657b0`]]);export{d as default};