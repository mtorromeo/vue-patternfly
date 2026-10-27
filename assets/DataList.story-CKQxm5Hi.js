import{F as e,K as t,c as n,d as r,g as i,h as a,it as o,j as s,l as c,m as l,n as u,pt as d,u as f}from"./runtime-core.esm-bundler-DO1530YC.js";import{D as p,Y as m,j as h}from"./index-CUsetNQE.js";import{t as g}from"./code-branch-icon-DB-IWJ4L.js";var _=i({__name:`DataList.story`,setup(i){let[_,v]=h(),y=e=>window.confirm(e),b=o(!1),x=o(!0),S=o(!1),C=o(!0),w=o(!0),T=o(!0),E=o(!0),D=o();return(i,o)=>{let h=e(`pf-menu-toggle`),O=e(`pf-dropdown-item`),k=e(`pf-dropdown`),A=e(`component-info`),j=e(`pf-data-list-cell`),M=e(`pf-data-list-item`),N=e(`pf-data-list`),P=e(`story-canvas`),F=e(`pf-data-list-check`),I=e(`pf-data-list-action`),L=e(`pf-button`),R=e(`pf-data-list-toggle`),z=e(`pf-data-list-item-row`),B=e(`pf-data-list-content`),V=e(`pf-content`),H=e(`doc-page`);return s(),r(u,null,[a(d(_),null,{default:t(({label:e})=>[a(k,{position:`right`},{toggle:t(()=>[a(h,{variant:`plain`,"aria-label":e},{icon:t(()=>[a(d(p))]),_:1},8,[`aria-label`])]),default:t(()=>[a(O,{component:`button`},{default:t(()=>[...o[14]||=[l(`Action`,-1)]]),_:1}),a(O,{to:`#`,onClick:o[0]||=m(()=>{},[`prevent`])},{default:t(()=>[...o[15]||=[l(`Link`,-1)]]),_:1}),a(O,{component:`button`,disabled:``},{default:t(()=>[...o[16]||=[l(`Disabled Action`,-1)]]),_:1}),a(O,{to:`#`,disabled:``,onClick:o[1]||=m(()=>{},[`prevent`])},{default:t(()=>[...o[17]||=[l(`Disabled Link`,-1)]]),_:1})]),_:2},1024)]),_:1}),a(H,{name:`Components/DataList.story.vue`,title:`Data list`},{description:t(()=>[...o[18]||=[l(`A `,-1),n(`b`,null,`data list`,-1),l(` is used to display large data sets when you need a flexible layout or need to include interactive content like charts.`,-1)]]),apidocs:t(()=>[a(A,{name:`PfDataList`,doc:{name:`PfDataList`,exportName:`PfDataList`,displayName:`DataList`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`selectionInputName`,description:`Name of the item input (radio or checkbox) when item selection is enabled`,required:!1,type:{name:`string`}},{name:`selectionInputValue`,description:`Defines the value for the input (radio or checkbox)`,required:!1,type:{name:`string`}},{name:`selectionMultiple`,description:`Flag indicating if multiple pf-data-list-items are selectable`,required:!1,type:{name:`boolean`}},{name:`compact`,description:`Flag indicating if pf-data-list should have compact styling`,required:!1,type:{name:`boolean`}},{name:`plain`,tags:{beta:[{description:`Flag indicating if pf-data-list should have plain styling with a transparent background`,title:`beta`}]},required:!1,type:{name:`boolean`}},{name:`noPlainOnGlass`,tags:{beta:[{description:`Flag to prevent the data list from automatically applying plain styling when glass theme is enabled.`,title:`beta`}]},required:!1,type:{name:`boolean`}},{name:`expandable`,description:`Flag indicating if pf-data-list-items should have expandable styling`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`gridBreakpoint`,description:`Specifies the grid breakpoints`,required:!1,type:{name:`union`,elements:[{name:`"none"`},{name:`"always"`},{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`"xl"`},{name:`"2xl"`}]},defaultValue:{func:!1,value:`'md'`}},{name:`wrapModifier`,description:`Determines which wrapping modifier to apply to the pf-data-list`,required:!1,type:{name:`DataListWrapModifier`}}],events:[],slots:[{name:`default`,description:`pf-data-list-item elements`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataList.vue`]}}),a(A,{name:`PfDataListAction`,doc:{name:`PfDataListAction`,exportName:`PfDataListAction`,displayName:`DataListAction`,description:``,tags:{},props:[{name:`visibility2xl`,required:!1,type:{name:`union`,elements:[{name:`"hidden"`},{name:`"visible"`}]}},{name:`visibilityXl`,required:!1,type:{name:`union`,elements:[{name:`"hidden"`},{name:`"visible"`}]}},{name:`visibilityLg`,required:!1,type:{name:`union`,elements:[{name:`"hidden"`},{name:`"visible"`}]}},{name:`visibilityMd`,required:!1,type:{name:`union`,elements:[{name:`"hidden"`},{name:`"visible"`}]}},{name:`visibilitySm`,required:!1,type:{name:`union`,elements:[{name:`"hidden"`},{name:`"visible"`}]}},{name:`visibility`,required:!1,type:{name:`union`,elements:[{name:`"hidden"`},{name:`"visible"`}]}},{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`,description:`Actions of the item, such as pf-button or pf-dropdown elements`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListAction.vue`]}}),a(A,{name:`PfDataListCell`,doc:{name:`PfDataListCell`,exportName:`PfDataListCell`,displayName:`DataListCell`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`noFill`,description:`Flag to keep the cell from filling the available space (upstream isFilled = false)`,required:!1,type:{name:`boolean`}},{name:`width`,description:`Width (from 1-5) of the cell`,required:!1,type:{name:`union`,elements:[{name:`1`},{name:`2`},{name:`3`},{name:`4`},{name:`5`}]}},{name:`alignRight`,description:`Aligns the cell content to the right of its parent`,required:!1,type:{name:`boolean`}},{name:`icon`,description:`Set to true if the cell content is an icon`,required:!1,type:{name:`boolean`}},{name:`wrapModifier`,description:`Determines which wrapping modifier to apply to the cell. Truncated content is shown in a tooltip.`,required:!1,type:{name:`DataListWrapModifier`}}],events:[],slots:[{name:`default`,description:`Content of the cell`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListCell.vue`]}}),a(A,{name:`PfDataListCheck`,doc:{name:`PfDataListCheck`,exportName:`PfDataListCheck`,displayName:`DataListCheck`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`otherControls`,description:`Flag to indicate if other controls are used in the pf-data-list-item: the check is not wrapped in its own control`,required:!1,type:{name:`boolean`}},{name:`disabled`,description:`Flag to show if the checkbox is disabled`,required:!1,type:{name:`boolean`}},{name:`invalid`,description:`Flag to show if the checkbox selection is invalid`,required:!1,type:{name:`boolean`}}],events:[],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListCheck.vue`]}}),a(A,{name:`PfDataListContent`,doc:{name:`PfDataListContent`,exportName:`PfDataListContent`,displayName:`DataListContent`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`noPadding`,description:`Flag to remove padding from the expandable content`,required:!1,type:{name:`boolean`}},{name:`hidden`,description:`Flag to hide the content. Defaults to hidden unless the item is expandable and expanded.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}}],events:[],slots:[{name:`default`,description:`Expandable content of the item`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListContent.vue`]}}),a(A,{name:`PfDataListControl`,doc:{name:`PfDataListControl`,exportName:`PfDataListControl`,displayName:`DataListControl`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`,description:`Controls of the item, such as pf-data-list-check, pf-data-list-toggle or pf-data-list-drag-button`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListControl.vue`]}}),a(A,{name:`PfDataListDragButton`,doc:{name:`PfDataListDragButton`,exportName:`PfDataListDragButton`,displayName:`DataListDragButton`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`type`,description:`Sets button type`,required:!1,type:{name:`union`,elements:[{name:`"button"`},{name:`"submit"`},{name:`"reset"`}]},defaultValue:{func:!1,value:`'button'`}},{name:`disabled`,description:`Flag indicating if drag is disabled for the item`,required:!1,type:{name:`boolean`}}],events:[],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListDragButton.vue`]}}),a(A,{name:`PfDataListItem`,doc:{name:`PfDataListItem`,exportName:`PfDataListItem`,displayName:`DataListItem`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`selected`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`selectionInputName`,description:`Name of the item inputs (radio or checkbox) when item selection is enabled`,required:!1,type:{name:`string`}},{name:`selectionInputValue`,description:`Defines the value for the inputs (radio or checkbox) of the pf-data-list-item`,required:!1,type:{name:`string`}},{name:`expandable`,description:`Flag indicating if the pf-data-list-item is expandable`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`selectableInputAriaLabel`,description:`Aria label of the hidden selection input, which is otherwise labelled by the aria-labelledby of the item`,required:!1,type:{name:`string`}}],events:[{name:`click`,type:{names:[`PointerEvent`]}},{name:`update:selected`,type:{names:[`boolean`]}}],slots:[{name:`default`,description:`pf-data-list-item-row and pf-data-list-content elements; other content is wrapped in a row`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListItem.vue`]}}),a(A,{name:`PfDataListItemCells`,doc:{name:`PfDataListItemCells`,exportName:`PfDataListItemCells`,displayName:`DataListItemCells`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`,description:`pf-data-list-cell elements`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListItemCells.vue`]}}),a(A,{name:`PfDataListItemRow`,doc:{name:`PfDataListItemRow`,exportName:`PfDataListItemRow`,displayName:`DataListItemRow`,description:``,tags:{},expose:[{name:`toggle`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`wrapModifier`,description:`Determines which wrapping modifier to apply to the row`,required:!1,type:{name:`DataListWrapModifier`}}],events:[],slots:[{name:`toggle`,description:`Toggle of an expandable item, replacing the default pf-data-list-toggle`},{name:`default`,description:`Controls, cells and actions of the row; consecutive pf-data-list-cell elements are wrapped in pf-data-list-item-cells`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListItemRow.vue`]}}),a(A,{name:`PfDataListText`,doc:{name:`PfDataListText`,exportName:`PfDataListText`,displayName:`DataListText`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`component`,description:`Determines which element to render as a data list text. Usually div or span`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Component`}]},defaultValue:{func:!1,value:`'span'`}},{name:`wrapModifier`,description:`Determines which wrapping modifier to apply to the data list text`,required:!1,type:{name:`DataListWrapModifier`}},{name:`tooltip`,description:`Text of the tooltip shown when the text is truncated. Defaults to the text itself.`,required:!1,type:{name:`string`}}],events:[],slots:[{name:`default`,description:`Content of the data list text`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListText.vue`]}}),a(A,{name:`PfDataListToggle`,doc:{name:`PfDataListToggle`,exportName:`PfDataListToggle`,displayName:`DataListToggle`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`id`,description:`Id of the toggle button`,required:!1,type:{name:`string`}},{name:`expanded`,description:`Flag to show if the expanded content of the data list item is visible. Defaults to the state of the item.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`ariaLabelledby`,description:`Adds accessible text to the toggle. Defaults to the ids labelling the item and the toggle.`,required:!1,type:{name:`string`}},{name:`ariaLabel`,description:"Adds accessible text to the toggle. Defaults to the `dataListToggle` message.",required:!1,type:{name:`string`}},{name:`ariaControls`,description:`Id of the content the toggle controls`,required:!1,type:{name:`string`}},{name:`buttonAttrs`,description:`Additional attributes added to the toggle button`,required:!1,type:{name:`Record`,elements:[{name:`string`},{name:`unknown`}]}}],events:[{name:`click`,type:{names:[`Event`]}}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DataList/DataListToggle.vue`]}})]),default:t(()=>[o[90]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,`Use data lists when:`),n(`ul`,null,[n(`li`,null,`A flexible layout is more important than arranging information in a grid.`),n(`li`,null,`You want to include active content like a chart.`),n(`li`,null,`Content displayed may vary between rows.`)]),n(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),n(`ul`,null,[n(`li`,null,[l(`Selectable rows are bound with `),n(`code`,null,`v-model:selected`),l(` on `),n(`code`,null,`pf-data-list`),l(` (`),n(`code`,null,`onSelectDataListItem`),l(`, `),n(`code`,null,`selectedDataListItemId`),l(`), holding the key or `),n(`code`,null,`selection-input-value`),l(` of the selected item, or an array of them with `),n(`code`,null,`selection-multiple`),l(`. A hidden radio or checkbox is always rendered for selectable items (`),n(`code`,null,`onSelectableRowChange`),l(`).`)]),n(`li`,null,[n(`code`,null,`pf-data-list-item`),l(` can be expanded with `),n(`code`,null,`v-model:expanded`),l(` (`),n(`code`,null,`isExpanded`),l(`); with `),n(`code`,null,`expandable`),l(` the row renders its own `),n(`code`,null,`pf-data-list-toggle`),l(` and `),n(`code`,null,`pf-data-list-content`),l(` follows the expanded state.`)]),n(`li`,null,[l(`The `),n(`code`,null,`isFilled`),l(` prop of `),n(`code`,null,`pf-data-list-cell`),l(` is replaced by `),n(`code`,null,`no-fill`),l(` with inverted behavior, and `),n(`code`,null,`isIcon`),l(` by `),n(`code`,null,`icon`),l(`.`)]),n(`li`,null,[l(`The `),n(`code`,null,`isValid`),l(` prop of `),n(`code`,null,`pf-data-list-check`),l(` is replaced by `),n(`code`,null,`invalid`),l(` with inverted behavior, and `),n(`code`,null,`isChecked`),l(`/`),n(`code`,null,`onChange`),l(` by `),n(`code`,null,`v-model:checked`),l(`.`)]),n(`li`,null,[l(`The `),n(`code`,null,`dataListCells`),l(` prop of `),n(`code`,null,`pf-data-list-item-cells`),l(` is replaced by its default slot.`)]),n(`li`,null,[n(`code`,null,`pf-data-list-item-row`),l(` and `),n(`code`,null,`pf-data-list-item-cells`),l(` are optional: consecutive `),n(`code`,null,`pf-data-list-cell`),l(` elements are wrapped in them automatically.`)]),n(`li`,null,[n(`code`,null,`visibility`),l(` of `),n(`code`,null,`pf-data-list-action`),l(` is replaced by the `),n(`code`,null,`visibility`),l(`, `),n(`code`,null,`visibility-sm`),l(`, … breakpoint props.`)]),n(`li`,null,[n(`code`,null,`button-attrs`),l(` replaces `),n(`code`,null,`buttonProps`),l(` on `),n(`code`,null,`pf-data-list-toggle`),l(`, and `),n(`code`,null,`no-padding`),l(` replaces `),n(`code`,null,`hasNoPadding`),l(` on `),n(`code`,null,`pf-data-list-content`),l(`.`)]),n(`li`,null,[l(`The drag and drop examples live in the `),n(`a`,{href:`#/stories/components/drag-and-drop`},`Drag and drop`),l(` page of the `),n(`code`,null,`@vue-patternfly/drag-drop`),l(` package.`)])]),n(`p`,null,[l(`See `),n(`a`,{href:`#/`},`common differences from patternfly-react`),l(`.`)]),n(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),a(P,{title:`Basic`,source:`<pf-data-list aria-label="Simple data list example">
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
    <pf-data-list-cell no-fill align-right>Secondary content (pf-m-align-right pf-m-no-fill)</pf-data-list-cell>
  </pf-data-list-item>
</pf-data-list>`},{default:t(()=>[a(N,{"aria-label":`Simple data list example`},{default:t(()=>[a(M,{"aria-labelledby":`simple-item1`},{default:t(()=>[a(j,null,{default:t(()=>[...o[19]||=[n(`span`,{id:`simple-item1`},`Primary content`,-1)]]),_:1}),a(j,null,{default:t(()=>[...o[20]||=[l(`Secondary content`,-1)]]),_:1})]),_:1}),a(M,{"aria-labelledby":`simple-item2`},{default:t(()=>[a(j,{"no-fill":``},{default:t(()=>[...o[21]||=[n(`span`,{id:`simple-item2`},`Secondary content (pf-m-no-fill)`,-1)]]),_:1}),a(j,{"no-fill":``,"align-right":``},{default:t(()=>[...o[22]||=[l(`Secondary content (pf-m-align-right pf-m-no-fill)`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(P,{title:`Compact`,source:`<pf-data-list aria-label="Compact data list example" compact>
  <pf-data-list-item aria-labelledby="compact-item1">
    <pf-data-list-cell>
      <span id="compact-item1">Primary content</span>
    </pf-data-list-cell>
    <pf-data-list-cell>Secondary content</pf-data-list-cell>
  </pf-data-list-item>
  <pf-data-list-item aria-labelledby="compact-item2">
    <pf-data-list-cell no-fill>
      <span id="compact-item2">Secondary content (pf-m-no-fill)</span>
    </pf-data-list-cell>
    <pf-data-list-cell no-fill align-right>Secondary content (pf-m-align-right pf-m-no-fill)</pf-data-list-cell>
  </pf-data-list-item>
</pf-data-list>`},{default:t(()=>[a(N,{"aria-label":`Compact data list example`,compact:``},{default:t(()=>[a(M,{"aria-labelledby":`compact-item1`},{default:t(()=>[a(j,null,{default:t(()=>[...o[23]||=[n(`span`,{id:`compact-item1`},`Primary content`,-1)]]),_:1}),a(j,null,{default:t(()=>[...o[24]||=[l(`Secondary content`,-1)]]),_:1})]),_:1}),a(M,{"aria-labelledby":`compact-item2`},{default:t(()=>[a(j,{"no-fill":``},{default:t(()=>[...o[25]||=[n(`span`,{id:`compact-item2`},`Secondary content (pf-m-no-fill)`,-1)]]),_:1}),a(j,{"no-fill":``,"align-right":``},{default:t(()=>[...o[26]||=[l(`Secondary content (pf-m-align-right pf-m-no-fill)`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(P,{title:`Plain`,source:`<pf-data-list aria-label="Plain data list example" plain>
  <pf-data-list-item aria-labelledby="plain-item1">
    <pf-data-list-cell>
      <span id="plain-item1">Primary content</span>
    </pf-data-list-cell>
    <pf-data-list-cell>Secondary content</pf-data-list-cell>
  </pf-data-list-item>
  <pf-data-list-item aria-labelledby="plain-item2">
    <pf-data-list-cell no-fill>
      <span id="plain-item2">Secondary content (pf-m-no-fill)</span>
    </pf-data-list-cell>
    <pf-data-list-cell no-fill align-right>Secondary content (pf-m-align-right pf-m-no-fill)</pf-data-list-cell>
  </pf-data-list-item>
</pf-data-list>`},{default:t(()=>[a(N,{"aria-label":`Plain data list example`,plain:``},{default:t(()=>[a(M,{"aria-labelledby":`plain-item1`},{default:t(()=>[a(j,null,{default:t(()=>[...o[27]||=[n(`span`,{id:`plain-item1`},`Primary content`,-1)]]),_:1}),a(j,null,{default:t(()=>[...o[28]||=[l(`Secondary content`,-1)]]),_:1})]),_:1}),a(M,{"aria-labelledby":`plain-item2`},{default:t(()=>[a(j,{"no-fill":``},{default:t(()=>[...o[29]||=[n(`span`,{id:`plain-item2`},`Secondary content (pf-m-no-fill)`,-1)]]),_:1}),a(j,{"no-fill":``,"align-right":``},{default:t(()=>[...o[30]||=[l(`Secondary content (pf-m-align-right pf-m-no-fill)`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(P,{title:`Checkboxes, actions and additional cells`,source:`<pf-data-list aria-label="Checkbox and action data list example">
  <pf-data-list-item aria-labelledby="check-action-item1">
    <pf-data-list-check id="check-item1" aria-labelledby="check-action-item1" name="check-action-check1" />
    <pf-data-list-cell>
      <span id="check-action-item1">Primary content</span> Dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod.
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
      <kebab label="Data list with checkboxes, actions and additional cells example kebab toggle 1" />
    </pf-data-list-action>
  </pf-data-list-item>
  <pf-data-list-item aria-labelledby="check-action-item2">
    <pf-data-list-check id="check-item2" aria-labelledby="check-action-item2" name="check-action-check2" />
    <pf-data-list-cell>
      <span id="check-action-item2">Primary content - Lorem ipsum</span> dolor sit amet, consectetur adipisicing
      elit, sed do eiusmod.
    </pf-data-list-cell>
    <pf-data-list-cell>
      Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
    </pf-data-list-cell>
    <pf-data-list-action
      id="check-action-action2"
      visibility-lg="hidden"
      aria-labelledby="check-action-item2 check-action-action2"
      aria-label="Actions"
    >
      <kebab label="Data list with checkboxes, actions and additional cells example kebab toggle 2" />
    </pf-data-list-action>
    <pf-data-list-action
      id="check-action-action2a"
      visibility="hidden"
      visibility-lg="visible"
      aria-labelledby="check-action-item2 check-action-action2a"
      aria-label="Actions"
    >
      <pf-button variant="primary">Primary</pf-button>
      <pf-button variant="secondary">Secondary</pf-button>
    </pf-data-list-action>
  </pf-data-list-item>
  <pf-data-list-item aria-labelledby="check-action-item3">
    <pf-data-list-check id="check-item3" aria-labelledby="check-action-item3" name="check-action-check3" />
    <pf-data-list-cell>
      <span id="check-action-item3">Primary content - Lorem ipsum</span> dolor sit amet, consectetur adipisicing
      elit, sed do eiusmod.
    </pf-data-list-cell>
    <pf-data-list-cell>
      Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
    </pf-data-list-cell>
    <pf-data-list-action
      id="check-action-action3"
      visibility-xl="hidden"
      aria-labelledby="check-action-item3 check-action-action3"
      aria-label="Actions"
    >
      <kebab label="Data list with checkboxes, actions and additional cells example kebab toggle 3" />
    </pf-data-list-action>
    <pf-data-list-action
      id="check-action-action3a"
      visibility="hidden"
      visibility-xl="visible"
      aria-labelledby="check-action-item3 check-action-action3a"
      aria-label="Actions"
    >
      <pf-button variant="primary">Primary</pf-button>
      <pf-button variant="secondary">Secondary</pf-button>
      <pf-button variant="secondary">Secondary</pf-button>
      <pf-button variant="secondary">Secondary</pf-button>
    </pf-data-list-action>
  </pf-data-list-item>
</pf-data-list>`},{default:t(()=>[a(N,{"aria-label":`Checkbox and action data list example`},{default:t(()=>[a(M,{"aria-labelledby":`check-action-item1`},{default:t(()=>[a(F,{id:`check-item1`,"aria-labelledby":`check-action-item1`,name:`check-action-check1`}),a(j,null,{default:t(()=>[...o[31]||=[n(`span`,{id:`check-action-item1`},`Primary content`,-1),l(` Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),a(j,null,{default:t(()=>[...o[32]||=[l(` Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),a(j,null,{default:t(()=>[...o[33]||=[n(`span`,null,`Tertiary content`,-1),l(` Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),a(j,null,{default:t(()=>[...o[34]||=[n(`span`,null,`More content`,-1),l(` Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),a(j,null,{default:t(()=>[...o[35]||=[n(`span`,null,`More content`,-1),l(` Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),a(I,{id:`check-action-action1`,"aria-labelledby":`check-action-item1 check-action-action1`,"aria-label":`Actions`},{default:t(()=>[a(d(v),{label:`Data list with checkboxes, actions and additional cells example kebab toggle 1`})]),_:1})]),_:1}),a(M,{"aria-labelledby":`check-action-item2`},{default:t(()=>[a(F,{id:`check-item2`,"aria-labelledby":`check-action-item2`,name:`check-action-check2`}),a(j,null,{default:t(()=>[...o[36]||=[n(`span`,{id:`check-action-item2`},`Primary content - Lorem ipsum`,-1),l(` dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),a(j,null,{default:t(()=>[...o[37]||=[l(` Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),a(I,{id:`check-action-action2`,"visibility-lg":`hidden`,"aria-labelledby":`check-action-item2 check-action-action2`,"aria-label":`Actions`},{default:t(()=>[a(d(v),{label:`Data list with checkboxes, actions and additional cells example kebab toggle 2`})]),_:1}),a(I,{id:`check-action-action2a`,visibility:`hidden`,"visibility-lg":`visible`,"aria-labelledby":`check-action-item2 check-action-action2a`,"aria-label":`Actions`},{default:t(()=>[a(L,{variant:`primary`},{default:t(()=>[...o[38]||=[l(`Primary`,-1)]]),_:1}),a(L,{variant:`secondary`},{default:t(()=>[...o[39]||=[l(`Secondary`,-1)]]),_:1})]),_:1})]),_:1}),a(M,{"aria-labelledby":`check-action-item3`},{default:t(()=>[a(F,{id:`check-item3`,"aria-labelledby":`check-action-item3`,name:`check-action-check3`}),a(j,null,{default:t(()=>[...o[40]||=[n(`span`,{id:`check-action-item3`},`Primary content - Lorem ipsum`,-1),l(` dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),a(j,null,{default:t(()=>[...o[41]||=[l(` Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod. `,-1)]]),_:1}),a(I,{id:`check-action-action3`,"visibility-xl":`hidden`,"aria-labelledby":`check-action-item3 check-action-action3`,"aria-label":`Actions`},{default:t(()=>[a(d(v),{label:`Data list with checkboxes, actions and additional cells example kebab toggle 3`})]),_:1}),a(I,{id:`check-action-action3a`,visibility:`hidden`,"visibility-xl":`visible`,"aria-labelledby":`check-action-item3 check-action-action3a`,"aria-label":`Actions`},{default:t(()=>[a(L,{variant:`primary`},{default:t(()=>[...o[42]||=[l(`Primary`,-1)]]),_:1}),a(L,{variant:`secondary`},{default:t(()=>[...o[43]||=[l(`Secondary`,-1)]]),_:1}),a(L,{variant:`secondary`},{default:t(()=>[...o[44]||=[l(`Secondary`,-1)]]),_:1}),a(L,{variant:`secondary`},{default:t(()=>[...o[45]||=[l(`Secondary`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(P,{title:`Actions: single and multiple`,source:`<pf-data-list aria-label="single action data list example">
  <pf-data-list-item v-if="!deleted" aria-labelledby="single-action-item1">
    <pf-data-list-cell>
      <span id="single-action-item1">Single actionable Primary content</span>
    </pf-data-list-cell>
    <pf-data-list-cell>Single actionable Secondary content</pf-data-list-cell>
    <pf-data-list-action
      id="single-action-action1"
      aria-labelledby="single-action-item1 single-action-action1"
      aria-label="Actions"
    >
      <pf-button variant="primary" @click="deleted = confirm('Are you sure?')">Delete</pf-button>
    </pf-data-list-action>
  </pf-data-list-item>
  <pf-data-list-item aria-labelledby="multi-actions-item1">
    <pf-data-list-cell>
      <span id="multi-actions-item1">Multi actions Primary content</span>
    </pf-data-list-cell>
    <pf-data-list-cell>Multi actions Secondary content</pf-data-list-cell>
    <pf-data-list-action
      id="multi-actions-action1"
      aria-labelledby="multi-actions-item1 multi-actions-action1"
      aria-label="Actions"
    >
      <kebab label="Data list with actions example kebab toggle" />
    </pf-data-list-action>
  </pf-data-list-item>
</pf-data-list>`},{default:t(()=>[a(N,{"aria-label":`single action data list example`},{default:t(()=>[b.value?f(``,!0):(s(),c(M,{key:0,"aria-labelledby":`single-action-item1`},{default:t(()=>[a(j,null,{default:t(()=>[...o[46]||=[n(`span`,{id:`single-action-item1`},`Single actionable Primary content`,-1)]]),_:1}),a(j,null,{default:t(()=>[...o[47]||=[l(`Single actionable Secondary content`,-1)]]),_:1}),a(I,{id:`single-action-action1`,"aria-labelledby":`single-action-item1 single-action-action1`,"aria-label":`Actions`},{default:t(()=>[a(L,{variant:`primary`,onClick:o[2]||=e=>b.value=y(`Are you sure?`)},{default:t(()=>[...o[48]||=[l(`Delete`,-1)]]),_:1})]),_:1})]),_:1})),a(M,{"aria-labelledby":`multi-actions-item1`},{default:t(()=>[a(j,null,{default:t(()=>[...o[49]||=[n(`span`,{id:`multi-actions-item1`},`Multi actions Primary content`,-1)]]),_:1}),a(j,null,{default:t(()=>[...o[50]||=[l(`Multi actions Secondary content`,-1)]]),_:1}),a(I,{id:`multi-actions-action1`,"aria-labelledby":`multi-actions-item1 multi-actions-action1`,"aria-label":`Actions`},{default:t(()=>[a(d(v),{label:`Data list with actions example kebab toggle`})]),_:1})]),_:1})]),_:1})]),_:1}),a(P,{title:`Expandable`,source:`<pf-data-list aria-label="Expandable data list example" expandable>
  <pf-data-list-item v-model:expanded="expanded1" aria-labelledby="ex-item1">
    <pf-data-list-item-row>
      <template #toggle>
        <pf-data-list-toggle id="ex-toggle1" aria-controls="ex-expand1" @click="expanded1 = !expanded1" />
      </template>
      <pf-data-list-cell icon>
        <code-branch-icon />
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
        <kebab label="Data list expandable example kebab toggle 1" />
      </pf-data-list-action>
    </pf-data-list-item-row>
    <pf-data-list-content id="ex-expand1" aria-label="First expandable content details">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.
      </p>
    </pf-data-list-content>
  </pf-data-list-item>
  <pf-data-list-item v-model:expanded="expanded2" aria-labelledby="ex-item2">
    <pf-data-list-item-row>
      <template #toggle>
        <pf-data-list-toggle id="ex-toggle2" aria-controls="ex-expand2" @click="expanded2 = !expanded2" />
      </template>
      <pf-data-list-cell icon>
        <code-branch-icon />
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
      <pf-data-list-action id="ex-action2" aria-labelledby="ex-item2 ex-action2" aria-label="Actions">
        <kebab label="Data list expandable example kebab toggle 2" />
      </pf-data-list-action>
    </pf-data-list-item-row>
    <pf-data-list-content id="ex-expand2" aria-label="Second expandable content details">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.
      </p>
    </pf-data-list-content>
  </pf-data-list-item>
  <pf-data-list-item v-model:expanded="expanded3" aria-labelledby="ex-item3">
    <pf-data-list-item-row>
      <template #toggle>
        <pf-data-list-toggle id="ex-toggle3" aria-controls="ex-expand3" @click="expanded3 = !expanded3" />
      </template>
      <pf-data-list-cell icon>
        <code-branch-icon />
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
        <kebab label="Data list expandable example kebab toggle 3" />
      </pf-data-list-action>
    </pf-data-list-item-row>
    <pf-data-list-content id="ex-expand3" aria-label="Third expandable content details" no-padding>
      This expanded section has no padding.
    </pf-data-list-content>
  </pf-data-list-item>
</pf-data-list>`},{default:t(()=>[a(N,{"aria-label":`Expandable data list example`,expandable:``},{default:t(()=>[a(M,{expanded:x.value,"onUpdate:expanded":o[4]||=e=>x.value=e,"aria-labelledby":`ex-item1`},{default:t(()=>[a(z,null,{toggle:t(()=>[a(R,{id:`ex-toggle1`,"aria-controls":`ex-expand1`,onClick:o[3]||=e=>x.value=!x.value})]),default:t(()=>[a(j,{icon:``},{default:t(()=>[a(d(g))]),_:1}),a(j,null,{default:t(()=>[...o[51]||=[n(`div`,{id:`ex-item1`},`Primary content`,-1),n(`span`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1),n(`a`,{href:`#`},`link`,-1)]]),_:1}),a(j,null,{default:t(()=>[...o[52]||=[n(`span`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]]),_:1}),a(j,null,{default:t(()=>[...o[53]||=[n(`span`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]]),_:1}),a(I,{id:`ex-action1`,"aria-labelledby":`ex-item1 ex-action1`,"aria-label":`Actions`},{default:t(()=>[a(d(v),{label:`Data list expandable example kebab toggle 1`})]),_:1})]),_:1}),a(B,{id:`ex-expand1`,"aria-label":`First expandable content details`},{default:t(()=>[...o[54]||=[n(`p`,null,` Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,-1)]]),_:1})]),_:1},8,[`expanded`]),a(M,{expanded:S.value,"onUpdate:expanded":o[6]||=e=>S.value=e,"aria-labelledby":`ex-item2`},{default:t(()=>[a(z,null,{toggle:t(()=>[a(R,{id:`ex-toggle2`,"aria-controls":`ex-expand2`,onClick:o[5]||=e=>S.value=!S.value})]),default:t(()=>[a(j,{icon:``},{default:t(()=>[a(d(g))]),_:1}),a(j,null,{default:t(()=>[...o[55]||=[n(`div`,{id:`ex-item2`},`Secondary content`,-1),n(`span`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]]),_:1}),a(j,null,{default:t(()=>[...o[56]||=[n(`span`,null,`Lorem ipsum dolor sit amet.`,-1)]]),_:1}),a(j,null,{default:t(()=>[...o[57]||=[n(`span`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]]),_:1}),a(I,{id:`ex-action2`,"aria-labelledby":`ex-item2 ex-action2`,"aria-label":`Actions`},{default:t(()=>[a(d(v),{label:`Data list expandable example kebab toggle 2`})]),_:1})]),_:1}),a(B,{id:`ex-expand2`,"aria-label":`Second expandable content details`},{default:t(()=>[...o[58]||=[n(`p`,null,` Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,-1)]]),_:1})]),_:1},8,[`expanded`]),a(M,{expanded:C.value,"onUpdate:expanded":o[8]||=e=>C.value=e,"aria-labelledby":`ex-item3`},{default:t(()=>[a(z,null,{toggle:t(()=>[a(R,{id:`ex-toggle3`,"aria-controls":`ex-expand3`,onClick:o[7]||=e=>C.value=!C.value})]),default:t(()=>[a(j,{icon:``},{default:t(()=>[a(d(g))]),_:1}),a(j,null,{default:t(()=>[...o[59]||=[n(`div`,{id:`ex-item3`},`Tertiary content`,-1),n(`span`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]]),_:1}),a(j,null,{default:t(()=>[...o[60]||=[n(`span`,null,`Lorem ipsum dolor sit amet.`,-1)]]),_:1}),a(j,null,{default:t(()=>[...o[61]||=[n(`span`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]]),_:1}),a(I,{id:`ex-action3`,"aria-labelledby":`ex-item3 ex-action3`,"aria-label":`Actions`},{default:t(()=>[a(d(v),{label:`Data list expandable example kebab toggle 3`})]),_:1})]),_:1}),a(B,{id:`ex-expand3`,"aria-label":`Third expandable content details`,"no-padding":``},{default:t(()=>[...o[62]||=[l(` This expanded section has no padding. `,-1)]]),_:1})]),_:1},8,[`expanded`])]),_:1})]),_:1}),a(P,{title:`Mixed expandable`,source:`<pf-data-list aria-label="Mixed expandable data list example">
  <pf-data-list-item v-model:expanded="mixedExpanded1" expandable aria-labelledby="m-ex-item1">
    <pf-data-list-cell icon>
      <code-branch-icon />
    </pf-data-list-cell>
    <pf-data-list-cell>
      <div id="m-ex-item1">Primary content</div>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
      <a href="#">link</a>
    </pf-data-list-cell>
    <pf-data-list-cell>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
    </pf-data-list-cell>
    <pf-data-list-action id="m-ex-action1" aria-labelledby="m-ex-item1 m-ex-action1" aria-label="Actions">
      <kebab label="Data list mixed expandable example kebab toggle 1" />
    </pf-data-list-action>
    <pf-data-list-content id="m-ex-expand1" aria-label="First expandable content details">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.
      </p>
    </pf-data-list-content>
  </pf-data-list-item>
  <pf-data-list-item aria-labelledby="m-ex-item2">
    <pf-data-list-cell icon>
      <code-branch-icon />
    </pf-data-list-cell>
    <pf-data-list-cell>
      <div id="m-ex-item2">Secondary content</div>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
    </pf-data-list-cell>
    <pf-data-list-cell>
      <span>Lorem ipsum dolor sit amet.</span>
    </pf-data-list-cell>
    <pf-data-list-action id="m-ex-action2" aria-labelledby="m-ex-item2 m-ex-action2" aria-label="Actions">
      <kebab label="Data list mixed expandable example kebab toggle 2" />
    </pf-data-list-action>
  </pf-data-list-item>
  <pf-data-list-item v-model:expanded="mixedExpanded3" expandable aria-labelledby="m-ex-item3">
    <pf-data-list-cell icon>
      <code-branch-icon />
    </pf-data-list-cell>
    <pf-data-list-cell>
      <div id="m-ex-item3">Tertiary content</div>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
    </pf-data-list-cell>
    <pf-data-list-cell>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
    </pf-data-list-cell>
    <pf-data-list-action id="m-ex-action3" aria-labelledby="m-ex-item3 m-ex-action3" aria-label="Actions">
      <kebab label="Data list mixed expandable example kebab toggle 3" />
    </pf-data-list-action>
    <pf-data-list-content id="m-ex-expand3" aria-label="Third expandable content details" no-padding>
      This expanded section has no padding.
    </pf-data-list-content>
  </pf-data-list-item>
</pf-data-list>`},{default:t(()=>[a(N,{"aria-label":`Mixed expandable data list example`},{default:t(()=>[a(M,{expanded:w.value,"onUpdate:expanded":o[9]||=e=>w.value=e,expandable:``,"aria-labelledby":`m-ex-item1`},{default:t(()=>[a(j,{icon:``},{default:t(()=>[a(d(g))]),_:1}),a(j,null,{default:t(()=>[...o[63]||=[n(`div`,{id:`m-ex-item1`},`Primary content`,-1),n(`span`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1),n(`a`,{href:`#`},`link`,-1)]]),_:1}),a(j,null,{default:t(()=>[...o[64]||=[n(`span`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]]),_:1}),a(I,{id:`m-ex-action1`,"aria-labelledby":`m-ex-item1 m-ex-action1`,"aria-label":`Actions`},{default:t(()=>[a(d(v),{label:`Data list mixed expandable example kebab toggle 1`})]),_:1}),a(B,{id:`m-ex-expand1`,"aria-label":`First expandable content details`},{default:t(()=>[...o[65]||=[n(`p`,null,` Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,-1)]]),_:1})]),_:1},8,[`expanded`]),a(M,{"aria-labelledby":`m-ex-item2`},{default:t(()=>[a(j,{icon:``},{default:t(()=>[a(d(g))]),_:1}),a(j,null,{default:t(()=>[...o[66]||=[n(`div`,{id:`m-ex-item2`},`Secondary content`,-1),n(`span`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]]),_:1}),a(j,null,{default:t(()=>[...o[67]||=[n(`span`,null,`Lorem ipsum dolor sit amet.`,-1)]]),_:1}),a(I,{id:`m-ex-action2`,"aria-labelledby":`m-ex-item2 m-ex-action2`,"aria-label":`Actions`},{default:t(()=>[a(d(v),{label:`Data list mixed expandable example kebab toggle 2`})]),_:1})]),_:1}),a(M,{expanded:T.value,"onUpdate:expanded":o[10]||=e=>T.value=e,expandable:``,"aria-labelledby":`m-ex-item3`},{default:t(()=>[a(j,{icon:``},{default:t(()=>[a(d(g))]),_:1}),a(j,null,{default:t(()=>[...o[68]||=[n(`div`,{id:`m-ex-item3`},`Tertiary content`,-1),n(`span`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]]),_:1}),a(j,null,{default:t(()=>[...o[69]||=[n(`span`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]]),_:1}),a(I,{id:`m-ex-action3`,"aria-labelledby":`m-ex-item3 m-ex-action3`,"aria-label":`Actions`},{default:t(()=>[a(d(v),{label:`Data list mixed expandable example kebab toggle 3`})]),_:1}),a(B,{id:`m-ex-expand3`,"aria-label":`Third expandable content details`,"no-padding":``},{default:t(()=>[...o[70]||=[l(` This expanded section has no padding. `,-1)]]),_:1})]),_:1},8,[`expanded`])]),_:1})]),_:1}),a(P,{title:`Width modifiers`,source:`<div>
  <pf-content>
    <h4>Default fitting - example 1</h4>
  </pf-content>
  <pf-data-list aria-label="Width modifier data list example 1">
    <pf-data-list-item aria-labelledby="width-ex1-item1">
      <pf-data-list-check id="check-width-ex1-item1" aria-labelledby="width-ex1-item1" name="width-ex1-item1" />
      <pf-data-list-cell>
        <b id="width-ex1-item1">default</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </pf-data-list-cell>
      <pf-data-list-cell>
        <b>default</b>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </p>
      </pf-data-list-cell>
    </pf-data-list-item>
  </pf-data-list>
</div>
<div>
  <pf-content>
    <h4>Flex modifiers - example 2</h4>
  </pf-content>
  <pf-data-list aria-label="Width modifier data list example 2">
    <pf-data-list-item aria-labelledby="width-ex2-item1">
      <pf-data-list-check id="check-width-ex2-item1" aria-labelledby="width-ex2-item1" name="width-ex2-item1" />
      <pf-data-list-cell :width="2">
        <b id="width-ex2-item1">width 2</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
      </pf-data-list-cell>
      <pf-data-list-cell :width="4">
        <b>width 4</b>
        <p>Lorem ipsum dolor sit amet.</p>
      </pf-data-list-cell>
      <pf-data-list-action
        id="width-ex2-action1"
        aria-labelledby="width-ex2-item1 width-ex2-action1"
        aria-label="Actions"
      >
        <kebab label="Data list width modifiers example kebab toggle 1" />
      </pf-data-list-action>
    </pf-data-list-item>
  </pf-data-list>
</div>
<div>
  <pf-content>
    <h4>Flex modifiers - example 3</h4>
  </pf-content>
  <pf-data-list aria-label="Width modifier data list example 3">
    <pf-data-list-item v-model:expanded="widthExpanded" expandable aria-labelledby="width-ex3-item1">
      <pf-data-list-item-row>
        <template #toggle>
          <pf-data-list-toggle
            id="width-ex3-toggle1"
            aria-controls="width-ex3-expand1"
            @click="widthExpanded = !widthExpanded" />
        </template>
        <pf-data-list-check id="check-width-ex3-item1" aria-labelledby="width-ex3-item1" name="width-ex3-item1" />
        <pf-data-list-cell :width="5">
          <b id="width-ex3-item1">width 5</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </pf-data-list-cell>
        <pf-data-list-cell :width="2">
          <b>width 2</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </pf-data-list-cell>
        <pf-data-list-cell>default</pf-data-list-cell>
        <pf-data-list-action
          id="width-ex3-action1"
          aria-labelledby="width-ex3-item1 width-ex3-action1"
          aria-label="Actions"
        >
          <kebab label="Data list width modifiers example kebab toggle 2" />
        </pf-data-list-action>
      </pf-data-list-item-row>
      <pf-data-list-content id="width-ex3-expand1" aria-label="Primary Content Details">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </p>
      </pf-data-list-content>
    </pf-data-list-item>
  </pf-data-list>
</div>`},{default:t(()=>[n(`div`,null,[a(V,null,{default:t(()=>[...o[71]||=[n(`h4`,null,`Default fitting - example 1`,-1)]]),_:1}),a(N,{"aria-label":`Width modifier data list example 1`},{default:t(()=>[a(M,{"aria-labelledby":`width-ex1-item1`},{default:t(()=>[a(F,{id:`check-width-ex1-item1`,"aria-labelledby":`width-ex1-item1`,name:`width-ex1-item1`}),a(j,null,{default:t(()=>[...o[72]||=[n(`b`,{id:`width-ex1-item1`},`default`,-1),n(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,-1)]]),_:1}),a(j,null,{default:t(()=>[...o[73]||=[n(`b`,null,`default`,-1),n(`p`,null,` Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,-1)]]),_:1})]),_:1})]),_:1})]),n(`div`,null,[a(V,null,{default:t(()=>[...o[74]||=[n(`h4`,null,`Flex modifiers - example 2`,-1)]]),_:1}),a(N,{"aria-label":`Width modifier data list example 2`},{default:t(()=>[a(M,{"aria-labelledby":`width-ex2-item1`},{default:t(()=>[a(F,{id:`check-width-ex2-item1`,"aria-labelledby":`width-ex2-item1`,name:`width-ex2-item1`}),a(j,{width:2},{default:t(()=>[...o[75]||=[n(`b`,{id:`width-ex2-item1`},`width 2`,-1),n(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.`,-1)]]),_:1}),a(j,{width:4},{default:t(()=>[...o[76]||=[n(`b`,null,`width 4`,-1),n(`p`,null,`Lorem ipsum dolor sit amet.`,-1)]]),_:1}),a(I,{id:`width-ex2-action1`,"aria-labelledby":`width-ex2-item1 width-ex2-action1`,"aria-label":`Actions`},{default:t(()=>[a(d(v),{label:`Data list width modifiers example kebab toggle 1`})]),_:1})]),_:1})]),_:1})]),n(`div`,null,[a(V,null,{default:t(()=>[...o[77]||=[n(`h4`,null,`Flex modifiers - example 3`,-1)]]),_:1}),a(N,{"aria-label":`Width modifier data list example 3`},{default:t(()=>[a(M,{expanded:E.value,"onUpdate:expanded":o[12]||=e=>E.value=e,expandable:``,"aria-labelledby":`width-ex3-item1`},{default:t(()=>[a(z,null,{toggle:t(()=>[a(R,{id:`width-ex3-toggle1`,"aria-controls":`width-ex3-expand1`,onClick:o[11]||=e=>E.value=!E.value})]),default:t(()=>[a(F,{id:`check-width-ex3-item1`,"aria-labelledby":`width-ex3-item1`,name:`width-ex3-item1`}),a(j,{width:5},{default:t(()=>[...o[78]||=[n(`b`,{id:`width-ex3-item1`},`width 5`,-1),n(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,-1)]]),_:1}),a(j,{width:2},{default:t(()=>[...o[79]||=[n(`b`,null,`width 2`,-1),n(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,-1)]]),_:1}),a(j,null,{default:t(()=>[...o[80]||=[l(`default`,-1)]]),_:1}),a(I,{id:`width-ex3-action1`,"aria-labelledby":`width-ex3-item1 width-ex3-action1`,"aria-label":`Actions`},{default:t(()=>[a(d(v),{label:`Data list width modifiers example kebab toggle 2`})]),_:1})]),_:1}),a(B,{id:`width-ex3-expand1`,"aria-label":`Primary Content Details`},{default:t(()=>[...o[81]||=[n(`p`,null,` Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,-1)]]),_:1})]),_:1},8,[`expanded`])]),_:1})])]),_:1}),a(P,{title:`Clickable rows`,source:`<pf-data-list v-model:selected="selectedItem" aria-label="clickable data list example">
  <pf-data-list-item key="item1" aria-labelledby="clickable-action-item1">
    <pf-data-list-cell>
      <span id="clickable-action-item1">Single actionable Primary content</span>
    </pf-data-list-cell>
    <pf-data-list-cell>Single actionable Secondary content</pf-data-list-cell>
    <pf-data-list-action
      id="clickable-action-action1"
      aria-labelledby="clickable-action-item1 clickable-action-action1"
      aria-label="Actions"
    >
      <kebab label="Data list clickable rows example kebab toggle 1" />
    </pf-data-list-action>
  </pf-data-list-item>
  <pf-data-list-item key="item2" aria-labelledby="clickable-actions-item2">
    <pf-data-list-cell>
      <span id="clickable-actions-item2">clickable actions Primary content</span>
    </pf-data-list-cell>
    <pf-data-list-cell>clickable actions Secondary content</pf-data-list-cell>
    <pf-data-list-action
      id="clickable-actions-action2"
      aria-labelledby="clickable-actions-item2 clickable-actions-action2"
      aria-label="Actions"
    >
      <kebab label="Data list clickable rows example kebab toggle 2" />
    </pf-data-list-action>
  </pf-data-list-item>
</pf-data-list>`},{default:t(()=>[a(N,{selected:D.value,"onUpdate:selected":o[13]||=e=>D.value=e,"aria-label":`clickable data list example`},{default:t(()=>[a(M,{key:`item1`,"aria-labelledby":`clickable-action-item1`},{default:t(()=>[a(j,null,{default:t(()=>[...o[82]||=[n(`span`,{id:`clickable-action-item1`},`Single actionable Primary content`,-1)]]),_:1}),a(j,null,{default:t(()=>[...o[83]||=[l(`Single actionable Secondary content`,-1)]]),_:1}),a(I,{id:`clickable-action-action1`,"aria-labelledby":`clickable-action-item1 clickable-action-action1`,"aria-label":`Actions`},{default:t(()=>[a(d(v),{label:`Data list clickable rows example kebab toggle 1`})]),_:1})]),_:1}),a(M,{key:`item2`,"aria-labelledby":`clickable-actions-item2`},{default:t(()=>[a(j,null,{default:t(()=>[...o[84]||=[n(`span`,{id:`clickable-actions-item2`},`clickable actions Primary content`,-1)]]),_:1}),a(j,null,{default:t(()=>[...o[85]||=[l(`clickable actions Secondary content`,-1)]]),_:1}),a(I,{id:`clickable-actions-action2`,"aria-labelledby":`clickable-actions-item2 clickable-actions-action2`,"aria-label":`Actions`},{default:t(()=>[a(d(v),{label:`Data list clickable rows example kebab toggle 2`})]),_:1})]),_:1})]),_:1},8,[`selected`])]),_:1}),a(P,{title:`Controlling text`,source:`<pf-data-list aria-label="Controlling text data list example">
  <pf-data-list-item aria-labelledby="controlling-text-item1">
    <pf-data-list-cell wrap-modifier="breakWord">
      <span id="controlling-text-item1">Primary content</span>
    </pf-data-list-cell>
    <pf-data-list-cell wrap-modifier="truncate">
      Really really really really really really really really really really really really really really long
      description that should be truncated before it ends
    </pf-data-list-cell>
  </pf-data-list-item>
</pf-data-list>`},{default:t(()=>[a(N,{"aria-label":`Controlling text data list example`},{default:t(()=>[a(M,{"aria-labelledby":`controlling-text-item1`},{default:t(()=>[a(j,{"wrap-modifier":`breakWord`},{default:t(()=>[...o[86]||=[n(`span`,{id:`controlling-text-item1`},`Primary content`,-1)]]),_:1}),a(j,{"wrap-modifier":`truncate`},{default:t(()=>[...o[87]||=[l(` Really really really really really really really really really really really really really really long description that should be truncated before it ends `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(P,{title:`Small grid breakpoint`,source:`<pf-data-list aria-label="Small grid breakpoint list example" grid-breakpoint="sm">
  <pf-data-list-item aria-labelledby="sm-grid-item1">
    <pf-data-list-cell>
      <span id="sm-grid-item1">Primary content</span>
    </pf-data-list-cell>
    <pf-data-list-cell>
      Really really really really really really really really really really really really really really long
      description that should be truncated before it ends
    </pf-data-list-cell>
  </pf-data-list-item>
</pf-data-list>`},{default:t(()=>[a(N,{"aria-label":`Small grid breakpoint list example`,"grid-breakpoint":`sm`},{default:t(()=>[a(M,{"aria-labelledby":`sm-grid-item1`},{default:t(()=>[a(j,null,{default:t(()=>[...o[88]||=[n(`span`,{id:`sm-grid-item1`},`Primary content`,-1)]]),_:1}),a(j,null,{default:t(()=>[...o[89]||=[l(` Really really really really really really really really really really really really really really long description that should be truncated before it ends `,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}});export{_ as default};