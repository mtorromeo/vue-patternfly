import{H as e,N as t,c as n,h as r,it as i,k as a,m as o,p as s,s as c}from"./runtime-core.esm-bundler-DvxuuL12.js";import{n as l}from"./index-CYysyUN8.js";import{t as u}from"./code-branch-icon-DEfMmXe2.js";var d=l(r({__name:`DataList.story`,setup(r){let l=console.log;return(r,d)=>{let f=t(`component-info`),p=t(`pf-data-list-cell`),m=t(`pf-data-list-item`),h=t(`pf-data-list`),g=t(`story-canvas`),_=t(`pf-data-list-item-cells`),v=t(`pf-data-list-item-row`),y=t(`pf-data-list-check`),b=t(`pf-menu-toggle`),x=t(`pf-dropdown-item`),S=t(`pf-dropdown`),C=t(`pf-data-list-action`),w=t(`pf-button`),T=t(`pf-data-list-content`),E=t(`doc-page`);return a(),n(E,{name:`Components/DataList.story.vue`,title:`Data list`},{description:e(()=>[...d[0]||=[s(`A `,-1),c(`b`,null,`data list`,-1),s(` is used to display large data sets when you need a flexible layout or need to include interactive content like charts.`,-1)]]),apidocs:e(()=>[o(f,{name:`PfDataList`,doc:{name:`PfDataList`,exportName:`PfDataList`,displayName:`DataList`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`selectionInputName`,description:`Name of the item input (radio or checkbox) when item selection is enabled`,required:!1,type:{name:`string`}},{name:`selectionInputValue`,description:`Defines the value for the input (radio or checkbox)`,required:!1,type:{name:`string`}},{name:`selectionMultiple`,description:`Flag indicating if multiple pf-data-list-items are selectable`,required:!1,type:{name:`boolean`}},{name:`compact`,description:`Flag indicating if pf-data-list should have compact styling`,required:!1,type:{name:`boolean`}},{name:`expandable`,description:`Flag indicating if pf-data-list-items should have expandable styling`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`gridBreakpoint`,description:`Specifies the grid breakpoints`,required:!1,type:{name:`union`,elements:[{name:`"none"`},{name:`"always"`},{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`"xl"`},{name:`"2xl"`}]},defaultValue:{func:!1,value:`'md'`}},{name:`wrapModifier`,description:`Determines which wrapping modifier to apply to the pf-data-list`,required:!1,type:{name:`union`,elements:[{name:`DataListWrapModifier`},{name:`"nowrap"`},{name:`"truncate"`},{name:`"breakWord"`}]}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataList.vue`]}}),o(f,{name:`PfDataListAction`,doc:{name:`PfDataListAction`,exportName:`PfDataListAction`,displayName:`DataListAction`,description:``,tags:{},props:[{name:`visibility2xl`,required:!1,type:{name:`union`,elements:[{name:`"hidden"`},{name:`"visible"`}]}},{name:`visibilityXl`,required:!1,type:{name:`union`,elements:[{name:`"hidden"`},{name:`"visible"`}]}},{name:`visibilityLg`,required:!1,type:{name:`union`,elements:[{name:`"hidden"`},{name:`"visible"`}]}},{name:`visibilityMd`,required:!1,type:{name:`union`,elements:[{name:`"hidden"`},{name:`"visible"`}]}},{name:`visibilitySm`,required:!1,type:{name:`union`,elements:[{name:`"hidden"`},{name:`"visible"`}]}},{name:`visibility`,required:!1,type:{name:`union`,elements:[{name:`"hidden"`},{name:`"visible"`}]}},{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListAction.vue`]}}),o(f,{name:`PfDataListCell`,doc:{name:`PfDataListCell`,exportName:`PfDataListCell`,displayName:`DataListCell`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`noFill`,required:!1,type:{name:`boolean`}},{name:`width`,required:!1,type:{name:`union`,elements:[{name:`1`},{name:`2`},{name:`3`},{name:`4`},{name:`5`}]}},{name:`alignRight`,required:!1,type:{name:`boolean`}},{name:`icon`,required:!1,type:{name:`boolean`}},{name:`wrapModifier`,required:!1,type:{name:`DataListWrapModifier`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListCell.vue`]}}),o(f,{name:`PfDataListCheck`,doc:{name:`PfDataListCheck`,exportName:`PfDataListCheck`,displayName:`DataListCheck`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`otherControls`,required:!1,type:{name:`boolean`}}],events:[],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListCheck.vue`]}}),o(f,{name:`PfDataListContent`,doc:{name:`PfDataListContent`,exportName:`PfDataListContent`,displayName:`DataListContent`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`noPadding`,required:!1,type:{name:`boolean`}},{name:`hidden`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListContent.vue`]}}),o(f,{name:`PfDataListItem`,doc:{name:`PfDataListItem`,exportName:`PfDataListItem`,displayName:`DataListItem`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`selected`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`selectionInputName`,description:`Name of the item inputs (radio or checkbox) when item selection is enabled`,required:!1,type:{name:`string`}},{name:`selectionInputValue`,description:`Defines the value for the inputs (radio or checkbox) of the pf-data-list-item`,required:!1,type:{name:`string`}},{name:`expandable`,description:`Flag indicating if the pf-data-list-item is expandable`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}}],events:[{name:`click`,type:{names:[`PointerEvent`]}},{name:`update:selected`,type:{names:[`boolean`]}}],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListItem.vue`]}}),o(f,{name:`PfDataListItemCells`,doc:{name:`PfDataListItemCells`,exportName:`PfDataListItemCells`,displayName:`DataListItemCells`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListItemCells.vue`]}}),o(f,{name:`PfDataListItemRow`,doc:{name:`PfDataListItemRow`,exportName:`PfDataListItemRow`,displayName:`DataListItemRow`,description:``,tags:{},expose:[{name:`toggle`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`wrapModifier`,required:!1,type:{name:`DataListWrapModifier`}}],events:[],slots:[{name:`toggle`},{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListItemRow.vue`]}}),o(f,{name:`PfDataListToggle`,doc:{name:`PfDataListToggle`,exportName:`PfDataListToggle`,displayName:`DataListToggle`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`id`,required:!1,type:{name:`string`}},{name:`expanded`,required:!1,type:{name:`boolean`}},{name:`noPadding`,required:!1,type:{name:`boolean`}},{name:`ariaLabelledby`,required:!1,type:{name:`string`}},{name:`ariaLabel`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'Details'`}},{name:`ariaControls`,required:!1,type:{name:`string`}}],events:[{name:`click`,type:{names:[`Event`]}}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListToggle.vue`]}})]),default:e(()=>[d[82]||=c(`div`,{class:`markdown pf-v6-c-content`},[c(`p`,null,`Use data lists when:`),c(`ul`,null,[c(`li`,null,`A flexible layout is more important than arranging information in a grid.`),c(`li`,null,`You want to include active content like a chart.`),c(`li`,null,`Content displayed may vary between rows.`)]),c(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),c(`ul`,null,[c(`li`,null,[s(`The `),c(`code`,null,`filled`),s(` prop of `),c(`code`,null,`pf-data-list-cell`),s(` is renamed to `),c(`code`,null,`no-fill`),s(` with inverted behavior.`)]),c(`li`,null,[s(`The `),c(`code`,null,`isPlainButtonAction`),s(` prop of `),c(`code`,null,`pf-data-list-action`),s(` is renamed to `),c(`code`,null,`plain-button`),s(`.`)]),c(`li`,null,[s(`The `),c(`code`,null,`isValid`),s(` prop of `),c(`code`,null,`pf-data-list-check`),s(` is renamed to `),c(`code`,null,`invalid`),s(` with inverted behavior.`)]),c(`li`,null,[s(`The `),c(`code`,null,`pf-data-list-item-row`),s(` and `),c(`code`,null,`pf-data-list-item-cells`),s(` components are optional and are only required if you need to change their attributes or when you have to control the order of sibling components.`)])]),c(`p`,null,[s(`See `),c(`a`,{href:`#/`},`common differences from patternfly-react`),s(`.`)]),c(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),o(g,{title:`Basic`,source:`<pf-data-list aria-label="Simple data list example">
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
</pf-data-list>`},{default:e(()=>[o(h,{"aria-label":`Simple data list example`},{default:e(()=>[o(m,{"aria-labelledby":`simple-item1`},{default:e(()=>[o(p,null,{default:e(()=>[...d[1]||=[c(`span`,{id:`simple-item1`},`Primary content`,-1)]]),_:1}),o(p,null,{default:e(()=>[...d[2]||=[s(`Secondary content`,-1)]]),_:1})]),_:1}),o(m,{"aria-labelledby":`simple-item2`},{default:e(()=>[o(p,{"no-fill":``},{default:e(()=>[...d[3]||=[c(`span`,{id:`simple-item2`},`Secondary content (pf-m-no-fill)`,-1)]]),_:1}),o(p,{"no-fill":``,"align-right":``},{default:e(()=>[...d[4]||=[s(` Secondary content (pf-m-align-right pf-m-no-fill) `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),o(g,{title:`Compact`,source:`<pf-data-list aria-label="Compact data list example" compact>
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
</pf-data-list>`},{default:e(()=>[o(h,{"aria-label":`Compact data list example`,compact:``},{default:e(()=>[o(m,{"aria-labelledby":`simple-item3`},{default:e(()=>[o(v,null,{default:e(()=>[o(_,null,{default:e(()=>[o(p,null,{default:e(()=>[...d[5]||=[c(`span`,{id:`simple-item3`},`Primary content (explicit row and cells)`,-1)]]),_:1}),o(p,null,{default:e(()=>[...d[6]||=[s(` Secondary content `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),o(m,{"aria-labelledby":`simple-item4`},{default:e(()=>[o(p,{"no-fill":``},{default:e(()=>[...d[7]||=[c(`span`,{id:`simple-item4`},`Secondary content (pf-m-no-fill)`,-1)]]),_:1}),o(p,{"no-fill":``,"align-right":``},{default:e(()=>[...d[8]||=[s(` Secondary content (pf-m-align-right pf-m-no-fill) `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),o(g,{title:`Checkboxes, actions and additional cells`,source:`<pf-data-list aria-label="Checkbox and action data list example">
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
</pf-data-list>`},{default:e(()=>[o(h,{"aria-label":`Checkbox and action data list example`},{default:e(()=>[o(m,{"aria-labelledby":`check-action-item1`},{default:e(()=>[o(y,{"aria-labelledby":`check-action-item1`,name:`check-action-check1`}),o(p,null,{default:e(()=>[...d[9]||=[c(`span`,{id:`check-action-item1`},`Primary content`,-1),s(` Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),o(p,null,{default:e(()=>[...d[10]||=[s(` Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),o(p,null,{default:e(()=>[...d[11]||=[c(`span`,null,`Tertiary content`,-1),s(` Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),o(p,null,{default:e(()=>[...d[12]||=[c(`span`,null,`More content`,-1),s(` Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),o(p,null,{default:e(()=>[...d[13]||=[c(`span`,null,`More content`,-1),s(` Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),o(C,{id:`check-action-action1`,"aria-labelledby":`check-action-item1 check-action-action1`,"aria-label":`Actions`},{default:e(()=>[o(S,{position:`right`},{toggle:e(()=>[o(b,{variant:`plain`})]),default:e(()=>[o(x,null,{default:e(()=>[...d[14]||=[s(`Link`,-1)]]),_:1}),o(x,{component:`button`},{default:e(()=>[...d[15]||=[s(`Action`,-1)]]),_:1}),o(x,{disabled:``},{default:e(()=>[...d[16]||=[s(`Disabled Link`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),o(m,{"aria-labelledby":`check-action-item2`},{default:e(()=>[o(y,{"aria-labelledby":`check-action-item2`,name:`check-action-check1`}),o(p,null,{default:e(()=>[...d[17]||=[c(`span`,{id:`check-action-item2`},`Primary content - Lorem ipsum`,-1),s(` dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),o(p,null,{default:e(()=>[...d[18]||=[s(` Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),o(C,{id:`check-action-action2`,"aria-labelledby":`check-action-item2 check-action-action2`,"aria-label":`Actions`,"visibility-lg":`hidden`},{default:e(()=>[o(S,{position:`right`},{toggle:e(()=>[o(b,{variant:`plain`})]),default:e(()=>[o(x,{component:`button`},{default:e(()=>[...d[19]||=[s(`Primary`,-1)]]),_:1}),o(x,{component:`button`},{default:e(()=>[...d[20]||=[s(`Secondary`,-1)]]),_:1})]),_:1})]),_:1}),o(C,{id:`check-action-action3`,"aria-labelledby":`check-action-item2 check-action-action3`,"aria-label":`Actions`,visibility:`hidden`,"visibility-lg":`visible`},{default:e(()=>[o(w,{variant:`primary`},{default:e(()=>[...d[21]||=[s(`Primary`,-1)]]),_:1}),o(w,{variant:`secondary`},{default:e(()=>[...d[22]||=[s(`Secondary`,-1)]]),_:1})]),_:1})]),_:1}),o(m,{"aria-labelledby":`check-action-item3`},{default:e(()=>[o(y,{"aria-labelledby":`check-action-item3`,name:`check-action-check1`}),o(p,null,{default:e(()=>[...d[23]||=[c(`span`,{id:`check-action-item3`},`Primary content - Lorem ipsum`,-1),s(` dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),o(p,null,{default:e(()=>[...d[24]||=[s(` Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),o(C,{id:`check-action-action3`,"aria-labelledby":`check-action-item3 check-action-action3`,"aria-label":`Actions`,"visibility-xl":`hidden`},{default:e(()=>[o(S,{position:`right`},{toggle:e(()=>[o(b,{variant:`plain`})]),default:e(()=>[o(x,{component:`button`},{default:e(()=>[...d[25]||=[s(`Primary`,-1)]]),_:1}),o(x,{component:`button`},{default:e(()=>[...d[26]||=[s(`Secondary`,-1)]]),_:1}),o(x,{component:`button`},{default:e(()=>[...d[27]||=[s(`Secondary`,-1)]]),_:1}),o(x,{component:`button`},{default:e(()=>[...d[28]||=[s(`Secondary`,-1)]]),_:1})]),_:1})]),_:1}),o(C,{id:`check-action-action3`,"aria-labelledby":`check-action-item3 check-action-action3`,"aria-label":`Actions`,visibility:`hidden`,"visibility-xl":`visible`},{default:e(()=>[o(w,{variant:`primary`},{default:e(()=>[...d[29]||=[s(`Primary`,-1)]]),_:1}),o(w,{variant:`secondary`},{default:e(()=>[...d[30]||=[s(`Secondary`,-1)]]),_:1}),o(w,{variant:`secondary`},{default:e(()=>[...d[31]||=[s(`Secondary`,-1)]]),_:1}),o(w,{variant:`secondary`},{default:e(()=>[...d[32]||=[s(`Secondary`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(g,{title:`Selectable rows`,source:`<pf-data-list aria-label="selectable data list example" @update:selected="log">
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
</pf-data-list>`},{default:e(()=>[o(h,{"aria-label":`selectable data list example`,"onUpdate:selected":i(l)},{default:e(()=>[o(m,{id:`item1`,"aria-labelledby":`selectable-action-item1`},{default:e(()=>[o(p,null,{default:e(()=>[...d[33]||=[c(`span`,{id:`selectable-action-item1`},`Single actionable Primary content`,-1)]]),_:1}),o(p,null,{default:e(()=>[...d[34]||=[s(`Single actionable Secondary content`,-1)]]),_:1}),o(C,{id:`selectable-action-action1`,"aria-labelledby":`selectable-action-item1 selectable-action-action1`,"aria-label":`Actions`},{default:e(()=>[o(S,{position:`right`},{toggle:e(()=>[o(b,{variant:`plain`})]),default:e(()=>[o(x,null,{default:e(()=>[...d[35]||=[s(`Link`,-1)]]),_:1}),o(x,{component:`button`},{default:e(()=>[...d[36]||=[s(` Action `,-1)]]),_:1}),o(x,{disabled:``},{default:e(()=>[...d[37]||=[s(` Disabled Link `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),o(m,{id:`item2`,"aria-labelledby":`selectable-actions-item2`},{default:e(()=>[o(p,null,{default:e(()=>[...d[38]||=[c(`span`,{id:`selectable-actions-item2`},`Selectable actions Primary content`,-1)]]),_:1}),o(p,null,{default:e(()=>[...d[39]||=[s(`Selectable actions Secondary content`,-1)]]),_:1}),o(C,{id:`selectable-actions-action2`,"aria-labelledby":`selectable-actions-item2 selectable-actions-action2`,"aria-label":`Actions`},{default:e(()=>[o(S,{position:`right`},{toggle:e(()=>[o(b,{variant:`plain`})]),default:e(()=>[o(x,null,{default:e(()=>[...d[40]||=[s(`Link`,-1)]]),_:1}),o(x,{component:`button`},{default:e(()=>[...d[41]||=[s(` Action `,-1)]]),_:1}),o(x,{disabled:``},{default:e(()=>[...d[42]||=[s(` Disabled Link `,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,[`onUpdate:selected`])]),_:1}),o(g,{title:`Expandable`,source:`<pf-data-list aria-label="Expandable data list example" expandable>
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
</pf-data-list>`},{default:e(()=>[o(h,{"aria-label":`Expandable data list example`,expandable:``},{default:e(()=>[o(m,{"aria-labelledby":`ex-item1`},{default:e(()=>[o(p,{icon:``},{default:e(()=>[o(i(u))]),_:1}),o(p,null,{default:e(()=>[...d[43]||=[c(`div`,{id:`ex-item1`},`Primary content`,-1),c(`span`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1),c(`a`,{href:`#`},`link`,-1)]]),_:1}),o(p,null,{default:e(()=>[...d[44]||=[c(`span`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]]),_:1}),o(p,null,{default:e(()=>[...d[45]||=[c(`span`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]]),_:1}),o(C,{id:`ex-action1`,"aria-labelledby":`ex-item1 ex-action1`,"aria-label":`Actions`},{default:e(()=>[o(S,{position:`right`},{toggle:e(()=>[o(b,{variant:`plain`})]),default:e(()=>[o(x,null,{default:e(()=>[...d[46]||=[s(`Link`,-1)]]),_:1}),o(x,{component:`button`},{default:e(()=>[...d[47]||=[s(` Action `,-1)]]),_:1}),o(x,{disabled:``},{default:e(()=>[...d[48]||=[s(` Disabled Link `,-1)]]),_:1})]),_:1})]),_:1}),o(T,null,{default:e(()=>[...d[49]||=[c(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,-1)]]),_:1})]),_:1}),o(m,{"aria-labelledby":`ex-item2`,expandable:!1},{default:e(()=>[o(v,null,{default:e(()=>[o(_,null,{default:e(()=>[o(p,{icon:``},{default:e(()=>[o(i(u))]),_:1}),o(p,null,{default:e(()=>[...d[50]||=[c(`div`,{id:`ex-item2`},`Secondary content`,-1),c(`span`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]]),_:1}),o(p,null,{default:e(()=>[...d[51]||=[c(`span`,null,`Lorem ipsum dolor sit amet.`,-1)]]),_:1}),o(p,null,{default:e(()=>[...d[52]||=[c(`span`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]]),_:1})]),_:1}),o(C,{id:`ex-action2`,"aria-labelledby":`ex-item2 ex-action2`,"aria-label":`Actions`},{default:e(()=>[o(S,{position:`right`},{toggle:e(()=>[o(b,{variant:`plain`})]),default:e(()=>[o(x,null,{default:e(()=>[...d[53]||=[s(`Link`,-1)]]),_:1}),o(x,{component:`button`},{default:e(()=>[...d[54]||=[s(` Action `,-1)]]),_:1}),o(x,{disabled:``},{default:e(()=>[...d[55]||=[s(` Disabled Link `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),o(T,null,{default:e(()=>[...d[56]||=[c(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,-1)]]),_:1})]),_:1}),o(m,{"aria-labelledby":`ex-item3`},{default:e(()=>[o(p,{icon:``},{default:e(()=>[o(i(u))]),_:1}),o(p,null,{default:e(()=>[...d[57]||=[c(`div`,{id:`ex-item3`},`Tertiary content`,-1),c(`span`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]]),_:1}),o(p,null,{default:e(()=>[...d[58]||=[c(`span`,null,`Lorem ipsum dolor sit amet.`,-1)]]),_:1}),o(p,null,{default:e(()=>[...d[59]||=[c(`span`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]]),_:1}),o(C,{id:`ex-action3`,"aria-labelledby":`ex-item3 ex-action3`,"aria-label":`Actions`},{default:e(()=>[o(S,{position:`right`},{toggle:e(()=>[o(b,{variant:`plain`})]),default:e(()=>[o(x,null,{default:e(()=>[...d[60]||=[s(`Link`,-1)]]),_:1}),o(x,{component:`button`},{default:e(()=>[...d[61]||=[s(` Action `,-1)]]),_:1}),o(x,{disabled:``},{default:e(()=>[...d[62]||=[s(` Disabled Link `,-1)]]),_:1})]),_:1})]),_:1}),o(T,{"no-padding":``},{default:e(()=>[...d[63]||=[s(` This expanded section has no padding. `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),o(g,{title:`Width modifiers - Default fitting example 1`,source:`<pf-data-list aria-label="Width modifier data list example 1">
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
</pf-data-list>`},{default:e(()=>[o(h,{"aria-label":`Width modifier data list example 1`},{default:e(()=>[o(m,{"aria-labelledby":`width-ex1-item1`},{default:e(()=>[o(y,{"aria-labelledby":`width-ex1-item1`,name:`width-ex1-item1`}),o(p,null,{default:e(()=>[...d[64]||=[c(`div`,{class:`preview-placeholder`},[c(`b`,{id:`width-ex1-item1`},`default`),c(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipisicing elit.`)],-1)]]),_:1}),o(p,null,{default:e(()=>[...d[65]||=[c(`div`,{class:`preview-placeholder`},[c(`b`,null,`default`),c(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`)],-1)]]),_:1})]),_:1})]),_:1})]),_:1}),o(g,{title:`Width modifiers - Flex modifiers - example 2`,source:`<pf-data-list aria-label="Width modifier data list example 2">
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
</pf-data-list>`},{default:e(()=>[o(h,{"aria-label":`Width modifier data list example 2`},{default:e(()=>[o(m,{"aria-labelledby":`width-ex2-item1`},{default:e(()=>[o(y,{"aria-labelledby":`width-ex2-item1`,name:`width-ex2-item1`}),o(p,{width:2},{default:e(()=>[...d[66]||=[c(`div`,{class:`preview-placeholder`},[c(`b`,{id:`width-ex2-item1`},`width 2`),c(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.`)],-1)]]),_:1}),o(p,{width:4},{default:e(()=>[...d[67]||=[c(`div`,{class:`preview-placeholder`},[c(`b`,null,`width 4`),c(`p`,null,`Lorem ipsum dolor sit amet.`)],-1)]]),_:1}),o(C,{"aria-labelledby":`width-ex2-item1 width-ex2-action1`,"aria-label":`Actions`},{default:e(()=>[o(S,{position:`right`},{toggle:e(()=>[o(b,{variant:`plain`})]),default:e(()=>[o(x,null,{default:e(()=>[...d[68]||=[s(`Link`,-1)]]),_:1}),o(x,{component:`button`},{default:e(()=>[...d[69]||=[s(` Action `,-1)]]),_:1}),o(x,{disabled:``},{default:e(()=>[...d[70]||=[s(` Disabled Link `,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(g,{title:`Width modifiers - Flex modifiers - example 3`,source:`<pf-data-list aria-label="Width modifier data list example 3" expandable>
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
</pf-data-list>`},{default:e(()=>[o(h,{"aria-label":`Width modifier data list example 3`,expandable:``},{default:e(()=>[o(m,{"aria-labelledby":`width-ex3-item1`},{default:e(()=>[o(y,{"aria-labelledby":`width-ex3-item1`,name:`width-ex3-item1`}),o(p,{width:5},{default:e(()=>[...d[71]||=[c(`div`,{class:`preview-placeholder`},[c(`b`,{id:`width-ex3-item1`},`width 5`),c(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipisicing elit.`)],-1)]]),_:1}),o(p,{width:2},{default:e(()=>[...d[72]||=[c(`div`,{class:`preview-placeholder`},[c(`b`,null,`width 2`),c(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipisicing elit.`)],-1)]]),_:1}),o(p,null,{default:e(()=>[...d[73]||=[c(`div`,{class:`preview-placeholder`},`default`,-1)]]),_:1}),o(C,{id:`width-ex3-action1`,"aria-labelledby":`width-ex3-item1 width-ex3-action1`,"aria-label":`Actions`},{default:e(()=>[o(S,{position:`right`},{toggle:e(()=>[o(b,{variant:`plain`})]),default:e(()=>[o(x,null,{default:e(()=>[...d[74]||=[s(`Link`,-1)]]),_:1}),o(x,{component:`button`},{default:e(()=>[...d[75]||=[s(` Action `,-1)]]),_:1}),o(x,{disabled:``},{default:e(()=>[...d[76]||=[s(` Disabled Link `,-1)]]),_:1})]),_:1})]),_:1}),o(T,{"aria-label":`Primary Content Details`},{default:e(()=>[...d[77]||=[c(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),o(g,{title:`Controlling text`,source:`<pf-data-list aria-label="Simple data list example">
  <pf-data-list-item aria-labelledby="simple-item5">
    <pf-data-list-cell wrap-modifier="breakWord">
      <span id="simple-item5">Primary content</span>
    </pf-data-list-cell>
    <pf-data-list-cell wrap-modifier="truncate"> Really really really really really really really really really really really really really really long description that should be truncated before it ends </pf-data-list-cell>
  </pf-data-list-item>
</pf-data-list>`},{default:e(()=>[o(h,{"aria-label":`Simple data list example`},{default:e(()=>[o(m,{"aria-labelledby":`simple-item5`},{default:e(()=>[o(p,{"wrap-modifier":`breakWord`},{default:e(()=>[...d[78]||=[c(`span`,{id:`simple-item5`},`Primary content`,-1)]]),_:1}),o(p,{"wrap-modifier":`truncate`},{default:e(()=>[...d[79]||=[s(` Really really really really really really really really really really really really really really long description that should be truncated before it ends `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),o(g,{title:`Small grid breakpoint`,source:`<pf-data-list aria-label="Simple data list example" grid-breakpoint="sm">
  <pf-data-list-item>
    <pf-data-list-cell> Primary content </pf-data-list-cell>
    <pf-data-list-cell> Really really really really really really really really really really really really really really long description that should be truncated before it ends </pf-data-list-cell>
  </pf-data-list-item>
</pf-data-list>`},{default:e(()=>[o(h,{"aria-label":`Simple data list example`,"grid-breakpoint":`sm`},{default:e(()=>[o(m,null,{default:e(()=>[o(p,null,{default:e(()=>[...d[80]||=[s(` Primary content `,-1)]]),_:1}),o(p,null,{default:e(()=>[...d[81]||=[s(` Really really really really really really really really really really really really really really long description that should be truncated before it ends `,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),[[`__scopeId`,`data-v-7f2eb163`]]);export{d as default};