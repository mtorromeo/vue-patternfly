import{F as e,G as t,N as n,Nt as r,c as i,d as a,ft as o,g as s,h as c,j as l,l as u,m as d,n as f,nt as p,rt as m,s as h,u as g}from"./runtime-core.esm-bundler-DKmYt4j6.js";import{C as _,D as v,E as y,O as b,W as x,Y as S,b as C,x as w}from"./index-Cl3hMFDe.js";var T=x({name:`ArrowDownShortWideIcon`,height:512,width:576,svgPathData:`M246.6 374.6l-96 96c-12.5 12.5-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L96 370.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 306.7 41.4-41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3zM320 32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z`,yOffset:0,xOffset:0}),E=s({__name:`DualListSelector.story`,setup(s){let x=e=>`${e.filter(e=>e.selected&&e.visible).length} of ${e.filter(e=>e.visible).length} options selected`;function E(e,t=[]){let n=e=>({text:e,selected:!1,visible:!0}),r=p({available:e.map(n),chosen:t.map(n),availableFilter:``,chosenFilter:``,moveSelected(e){let t=e?r.available:r.chosen,n=e?r.chosen:r.available;for(let e of t.filter(e=>e.selected&&e.visible))t.splice(t.indexOf(e),1),e.selected=!1,n.push(e)},moveAll(e){e?(r.chosen=[...r.available.filter(e=>e.visible),...r.chosen],r.available=r.available.filter(e=>!e.visible)):(r.available=[...r.chosen.filter(e=>e.visible),...r.available],r.chosen=r.chosen.filter(e=>!e.visible))},filter(e){let t=(e?r.availableFilter:r.chosenFilter).toLowerCase();for(let n of e?r.available:r.chosen)n.visible=t===``||n.text.toLowerCase().includes(t)},clearFilter(e){e?r.availableFilter=``:r.chosenFilter=``,r.filter(e)},sort(e){(e?r.available:r.chosen).sort((e,t)=>e.text.localeCompare(t.text))},sortChosen(e){r.chosen=e.map(e=>r.chosen.find(t=>t.text===e.id))},setItems(e){let t=[...r.available,...r.chosen],n=e=>t.find(t=>t.text===e.id);r.available=e.available.map(n),r.chosen=e.chosen.map(n)}});return r}let D=[`Option 1`,`Option 2`,`Option 3`,`Option 4`],O=E(D),k=E(D),A=E(D),j=E(D),M=m(!1),N=[`Apple`,`Banana`,`Pineapple`],P=[`Orange`,`Grape`,`Peach`,`Strawberry`],F=E(N,P),I=E(N,P),L=e=>e.map(e=>({id:e.text,content:e.text,attrs:{selected:e.selected,"onUpdate:selected":t=>e.selected=t}})),R=h(()=>({available:L(I.available),chosen:L(I.chosen)})),z=[{id:`fruits`,text:`Fruits`,children:[{id:`apple`,text:`Apple`},{id:`berries`,text:`Berries`,children:[{id:`blueberry`,text:`Blueberry`},{id:`strawberry`,text:`Strawberry`}]},{id:`banana`,text:`Banana`}]},{id:`bread`,text:`Bread`},{id:`vegetables`,text:`Vegetables`,children:[{id:`broccoli`,text:`Broccoli`},{id:`cauliflower`,text:`Cauliflower`}]},{id:`proteins`,text:`Proteins`,children:[{id:`beans`,text:`Beans`},{id:`meats`,text:`Meats`,children:[{id:`beef`,text:`Beef`},{id:`chicken`,text:`Chicken`}]},{id:`tofu`,text:`Tofu`}]}];function B(e){let t=e=>e.children?.length?e.children.flatMap(t):[e.id],n={},r={},i=e=>{n[e.id]=t(e),r[e.id]=e.text,e.children?.forEach(i)};e.forEach(i);let a=(e,t)=>e.toLowerCase().includes(t.trim().toLowerCase()),o=p({allLeaves:e.flatMap(t),checkedLeafIds:[],chosenLeafIds:[`beans`,`beef`,`chicken`,`tofu`],filters:{available:``,chosen:``},leafIds(e){return e?o.chosenLeafIds:o.allLeaves.filter(e=>!o.chosenLeafIds.includes(e))},visibleLeafIds(e){let t=e?o.filters.chosen:o.filters.available,i=new Set(Object.keys(n).filter(e=>a(r[e],t)).flatMap(e=>n[e]));return o.leafIds(e).filter(e=>i.has(e))},status(e){let t=o.visibleLeafIds(e);return`${o.checkedLeafIds.filter(e=>t.includes(e)).length} of ${t.length} options selected`},moveChecked(e){let t=o.checkedLeafIds.filter(t=>o.visibleLeafIds(!e).includes(t));o.chosenLeafIds=e?[...o.chosenLeafIds,...t]:o.chosenLeafIds.filter(e=>!t.includes(e)),o.checkedLeafIds=o.checkedLeafIds.filter(e=>!t.includes(e))},moveAll(e){if(e)o.chosenLeafIds=[...o.chosenLeafIds,...o.visibleLeafIds(!1)];else{let e=o.visibleLeafIds(!0);o.chosenLeafIds=o.chosenLeafIds.filter(t=>!e.includes(t))}},onOptionCheck(e,t,r){let i=o.visibleLeafIds(r),a=n[t.id].filter(e=>i.includes(e)),s=o.checkedLeafIds.filter(e=>!a.includes(e));o.checkedLeafIds=e?[...s,...a]:s},options(t,i=e,s=!1){let c=t?o.filters.chosen:o.filters.available;return i.flatMap(e=>{let i=n[e.id].filter(e=>t?o.chosenLeafIds.includes(e):!o.chosenLeafIds.includes(e)),l=!!c&&i.some(e=>a(r[e],c)),u=!!c&&a(e.text,c)&&i.length>0;return!c&&i.length>0||l||s&&i.length>0||u?[{id:e.id,text:e.text,checked:i.every(e=>o.checkedLeafIds.includes(e)),checkAttrs:{"aria-label":`Select ${e.text}`},badge:!!e.children?.length,badgeAttrs:{read:!0},defaultExpanded:!!c,children:e.children?o.options(t,e.children,u||s):void 0}]:e.children?.length?o.options(t,e.children,s):[]})}});return o}let V=B(z);return(s,p)=>{let m=e(`component-info`),h=e(`pf-dual-list-selector-list-item`),E=e(`pf-dual-list-selector-list`),D=e(`pf-dual-list-selector-pane`),N=e(`pf-dual-list-selector-control`),P=e(`pf-dual-list-selector-controls-wrapper`),z=e(`pf-dual-list-selector`),B=e(`story-canvas`),H=e(`pf-search-input`),U=e(`pf-empty-state-body`),W=e(`pf-button`),G=e(`pf-empty-state-actions`),K=e(`pf-empty-state-footer`),q=e(`pf-empty-state`),J=e(`pf-menu-toggle`),Y=e(`pf-dropdown-item`),X=e(`pf-dropdown`),Z=e(`pf-checkbox`),Q=e(`pf-dual-list-selector-tree`),ee=e(`pf-drag-drop-sort`),$=e(`pf-droppable`),te=e(`pf-drag-drop-container`),ne=e(`doc-page`);return l(),u(ne,{name:`Components/DualListSelector.story.vue`,title:`Dual list selector`},{description:t(()=>[...p[53]||=[d(`A `,-1),i(`b`,null,`dual list selector`,-1),d(` displays two interactive lists: a list of selected items and a list of available, selectable items. Users can move items between the lists.`,-1)]]),apidocs:t(()=>[c(m,{name:`PfDualListSelector`,doc:{name:`PfDualListSelector`,exportName:`PfDualListSelector`,displayName:`DualListSelector`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`id`,description:`ID of the dual list selector, generated if not set`,required:!1,type:{name:`string`}},{name:`tree`,description:`Flag indicating if the dual list selector uses trees instead of simple lists.`,required:!1,type:{name:`boolean`}},{name:`animations`,description:`Flag indicating whether a tree dual list selector has animations. The nested options are always rendered, and inert while collapsed.`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`,description:`Panes and controls wrapper of the dual list selector`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DualListSelector/DualListSelector.vue`]}}),c(m,{name:`PfDualListSelectorPane`,doc:{name:`PfDualListSelectorPane`,exportName:`PfDualListSelectorPane`,displayName:`DualListSelectorPane`,description:``,tags:{},props:[{name:`id`,description:`ID of the pane, generated if not set; it prefixes the id of the status`,required:!1,type:{name:`string`}},{name:`chosen`,description:`Flag indicating if this pane is the chosen pane.`,required:!1,type:{name:`boolean`}},{name:`status`,description:`Status to display above the list of the pane, labelling it.`,required:!1,type:{name:`string`}},{name:`title`,description:`Title of the pane.`,required:!1,type:{name:`string`}},{name:`disabled`,description:`Flag indicating whether the pane is disabled: its list is marked as disabled and its options default to disabled.`,required:!1,type:{name:`boolean`}},{name:`listMinHeight`,description:`Minimum height of the list of options rendered in the pane. *`,required:!1,type:{name:`string`}}],events:[],slots:[{name:`title`,description:"Title of the pane, replacing the `title` prop"},{name:`search-input`},{name:`actions`,description:`Actions placed above the list, e.g. a sort button and a kebab dropdown`},{name:`status`,description:"Status of the pane, replacing the `status` prop"},{name:`default`,description:`A pf-dual-list-selector-list, and possibly an empty state shown in its place`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DualListSelector/DualListSelectorPane.vue`]}}),c(m,{name:`PfDualListSelectorList`,doc:{name:`PfDualListSelectorList`,exportName:`PfDualListSelectorList`,displayName:`DualListSelectorList`,description:``,tags:{},props:[],events:[],slots:[{name:`default`,description:`pf-dual-list-selector-list-item elements, or a pf-dual-list-selector-tree`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DualListSelector/DualListSelectorList.vue`]}}),c(m,{name:`PfDualListSelectorListItem`,doc:{name:`PfDualListSelectorListItem`,exportName:`PfDualListSelectorListItem`,displayName:`DualListSelectorListItem`,description:``,tags:{},props:[{name:`id`,description:`ID of the option, generated if not set`,required:!1,type:{name:`string`}},{name:`draggable`,description:`Flag indicating this item shows a drag handle, for reordering.`,required:!1,type:{name:`boolean`}},{name:`disabled`,description:`Flag indicating the option is disabled; defaults to the disabled state of the pane.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}}],events:[{name:`optionSelect`,type:{names:[`MouseEvent`]},description:`Fired when the option is clicked, or activated with Enter or Space`}],slots:[{name:`default`,description:`Content of the option`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DualListSelector/DualListSelectorListItem.vue`]}}),c(m,{name:`PfDualListSelectorControlsWrapper`,doc:{name:`PfDualListSelectorControlsWrapper`,exportName:`PfDualListSelectorControlsWrapper`,displayName:`DualListSelectorControlsWrapper`,description:``,tags:{},props:[],events:[],slots:[{name:`default`,description:`pf-dual-list-selector-control elements`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DualListSelector/DualListSelectorControlsWrapper.vue`]}}),c(m,{name:`PfDualListSelectorControl`,doc:{name:`PfDualListSelectorControl`,exportName:`PfDualListSelectorControl`,displayName:`DualListSelectorControl`,description:``,tags:{},props:[{name:`disabled`,description:`Flag indicating the control is disabled.`,required:!1,type:{name:`boolean`}},{name:`ariaLabel`,description:`Accessible label of the control button.`,required:!1,type:{name:`string`}},{name:`tooltip`,description:`Content of a tooltip shown on hover of the control.`,required:!1,type:{name:`string`}},{name:`tooltipAttrs`,description:"Additional attributes of the tooltip, e.g. `{ position: 'top' }`",required:!1,type:{name:`Record`,elements:[{name:`string`},{name:`unknown`}]}}],events:[{name:`click`,type:{names:[`PointerEvent`]},description:`Fired when the control is clicked`}],slots:[{name:`icon`,description:`Icon of the control button`},{name:`default`,description:`Content of the control button`},{name:`tooltip`,description:"Content of the tooltip, replacing the `tooltip` prop"}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DualListSelector/DualListSelectorControl.vue`]}}),c(m,{name:`PfDualListSelectorTree`,doc:{name:`PfDualListSelectorTree`,exportName:`PfDualListSelectorTree`,displayName:`DualListSelectorTree`,description:``,tags:{},props:[{name:`data`,description:`Options of the tree, or a function returning them`,required:!0,type:{name:`union`,elements:[{name:`Array`,elements:[{name:`DualListSelectorTreeItemData`}]},{name:`TSParenthesizedType`}]}},{name:`badges`,description:"Flag indicating if all options with children have badges, unless their `badge` is set.",required:!1,type:{name:`boolean`}},{name:`defaultAllExpanded`,description:"Sets the default expanded state of the options, unless their `defaultExpanded` is set.",required:!1,type:{name:`boolean`}},{name:`disabled`,description:`Flag indicating if the tree is disabled; defaults to the disabled state of the pane.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`nested`,tags:{hide:[{description:`Flag indicating if the tree is nested in an option`,title:`hide`}]},required:!1,type:{name:`boolean`}},{name:`inert`,tags:{hide:[{description:`Flag indicating the nested tree is not interactive, as a collapsed list rendered for the animations`,title:`hide`}]},required:!1,type:{name:`boolean`}}],events:[{name:`optionCheck`,type:{names:[`Event`]},description:`Fired when an option is checked or unchecked, with its new checked state and its data`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/DualListSelector/DualListSelectorTree.vue`]}})]),default:t(()=>[p[72]||=i(`div`,{class:`markdown pf-v6-c-content`},[i(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),i(`ul`,null,[i(`li`,null,[i(`code`,null,`tree`),d(` and `),i(`code`,null,`animations`),d(` replace `),i(`code`,null,`isTree`),d(` and `),i(`code`,null,`hasAnimations`),d(` on `),i(`code`,null,`pf-dual-list-selector`),d(`; there is no animations provider, so `),i(`code`,null,`animations`),d(` is off unless set.`)]),i(`li`,null,[d(`The selection of `),i(`code`,null,`pf-dual-list-selector-list-item`),d(` is bound with `),i(`code`,null,`v-model:selected`),d(` (`),i(`code`,null,`isSelected`),d(`), toggled when the option is clicked or activated with Enter or Space; the `),i(`code`,null,`option-select`),d(` event (`),i(`code`,null,`onOptionSelect`),d(`) is still emitted. `),i(`code`,null,`draggable`),d(` replaces `),i(`code`,null,`isDraggable`),d(`; the unused `),i(`code`,null,`draggableButtonAriaLabel`),d(` is dropped.`)]),i(`li`,null,[d(`The `),i(`code`,null,`searchInput`),d(` and `),i(`code`,null,`actions`),d(` props of `),i(`code`,null,`pf-dual-list-selector-pane`),d(` are replaced by the `),i(`code`,null,`#search-input`),d(` and `),i(`code`,null,`#actions`),d(` slots, `),i(`code`,null,`title`),d(` and `),i(`code`,null,`status`),d(` can also be set with slots, `),i(`code`,null,`chosen`),d(` replaces `),i(`code`,null,`isChosen`),d(` and the unused `),i(`code`,null,`onSearch`),d(` is dropped.`)]),i(`li`,null,[i(`code`,null,`disabled`),d(` on `),i(`code`,null,`pf-dual-list-selector-pane`),d(` marks its list with `),i(`code`,null,`aria-disabled`),d(` and disables its options and tree unless they set their own `),i(`code`,null,`disabled`),d(`; upstream only passes it to a default search input that is never rendered.`)]),i(`li`,null,[i(`code`,null,`disabled`),d(` on `),i(`code`,null,`pf-dual-list-selector-control`),d(` defaults to `),i(`code`,null,`false`),d(`, instead of `),i(`code`,null,`isDisabled`),d(` defaulting to `),i(`code`,null,`true`),d(`. The `),i(`code`,null,`icon`),d(` prop is replaced by the `),i(`code`,null,`#icon`),d(` slot, `),i(`code`,null,`tooltipContent`),d(` by `),i(`code`,null,`tooltip`),d(` (or the `),i(`code`,null,`#tooltip`),d(` slot) and `),i(`code`,null,`tooltipProps`),d(` by `),i(`code`,null,`tooltip-attrs`),d(`.`)]),i(`li`,null,[d(`The options of `),i(`code`,null,`pf-dual-list-selector-tree`),d(` are named like those of `),i(`code`,null,`pf-tree-view`),d(`: `),i(`code`,null,`checked`),d(` (`),i(`code`,null,`null`),d(` when indeterminate), `),i(`code`,null,`badge`),d(`, `),i(`code`,null,`check-attrs`),d(`, `),i(`code`,null,`badge-attrs`),d(` and `),i(`code`,null,`disabled`),d(` replace `),i(`code`,null,`isChecked`),d(`, `),i(`code`,null,`hasBadge`),d(`, `),i(`code`,null,`checkProps`),d(`, `),i(`code`,null,`badgeProps`),d(` and `),i(`code`,null,`isDisabled`),d(`. `),i(`code`,null,`badges`),d(` replaces `),i(`code`,null,`hasBadges`),d(`, and the `),i(`code`,null,`option-check`),d(` event replaces `),i(`code`,null,`onOptionCheck`),d(`, with the same arguments.`)]),i(`li`,null,`With the arrow keys, the focus moves to the first or last option when it is on the list itself, instead of skipping the first one.`),i(`li`,null,[d(`The draggable examples use `),i(`a`,{href:`#/stories/components/drag-and-drop`},`@vue-patternfly/drag-drop`),d(` with its `),i(`code`,null,`dual-list-selector`),d(` variant.`)])]),i(`p`,null,[d(`See `),i(`a`,{href:`#/`},`common differences from patternfly-react`),d(`.`)]),i(`h2`,{class:`pf-v6-c-title`},`Examples`),i(`p`,null,`The dual list selector is built in a composable manner to make customization easier. The standard sub-component relationships are arranged as follows:`),i(`pre`,{class:`shiki nord`,style:{"background-color":`#2e3440ff`,color:`#d8dee9ff`},tabindex:`0`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{color:`#81A1C1`}},`<pf-dual-list-selector>`)]),d(`
`),i(`span`,{class:`line`},[i(`span`,{style:{color:`#81A1C1`}},`  <pf-dual-list-selector-pane>`)]),d(`
`),i(`span`,{class:`line`},[i(`span`,{style:{color:`#81A1C1`}},`    <pf-dual-list-selector-list>`)]),d(`
`),i(`span`,{class:`line`},[i(`span`,{style:{color:`#81A1C1`}},`      <pf-dual-list-selector-list-item`),i(`span`,{style:{color:`#81A1C1`}},` />`)]),d(`
`),i(`span`,{class:`line`},[i(`span`,{style:{color:`#81A1C1`}},`    </pf-dual-list-selector-list>`)]),d(`
`),i(`span`,{class:`line`},[i(`span`,{style:{color:`#81A1C1`}},`  </pf-dual-list-selector-pane>`)]),d(`
`),i(`span`,{class:`line`}),d(`
`),i(`span`,{class:`line`},[i(`span`,{style:{color:`#81A1C1`}},`  <pf-dual-list-selector-controls-wrapper>`)]),d(`
`),i(`span`,{class:`line`},[i(`span`,{style:{color:`#81A1C1`}},`    <pf-dual-list-selector-control`),i(`span`,{style:{color:`#81A1C1`}},` />`),i(`span`,{style:{color:`#616E88`}},` <!-- A standard dual list selector has 4 controls -->`)]),d(`
`),i(`span`,{class:`line`},[i(`span`,{style:{color:`#81A1C1`}},`  </pf-dual-list-selector-controls-wrapper>`)]),d(`
`),i(`span`,{class:`line`}),d(`
`),i(`span`,{class:`line`},[i(`span`,{style:{color:`#81A1C1`}},`  <pf-dual-list-selector-pane`),i(`span`,{style:{color:`#8FBCBB`}},` chosen`),i(`span`,{style:{color:`#81A1C1`}},`>`)]),d(`
`),i(`span`,{class:`line`},[i(`span`,{style:{color:`#81A1C1`}},`    <pf-dual-list-selector-list>`)]),d(`
`),i(`span`,{class:`line`},[i(`span`,{style:{color:`#81A1C1`}},`      <pf-dual-list-selector-list-item`),i(`span`,{style:{color:`#81A1C1`}},` />`)]),d(`
`),i(`span`,{class:`line`},[i(`span`,{style:{color:`#81A1C1`}},`    </pf-dual-list-selector-list>`)]),d(`
`),i(`span`,{class:`line`},[i(`span`,{style:{color:`#81A1C1`}},`  </pf-dual-list-selector-pane>`)]),d(`
`),i(`span`,{class:`line`},[i(`span`,{style:{color:`#81A1C1`}},`</pf-dual-list-selector>`)]),d(`
`),i(`span`,{class:`line`})])])],-1),c(B,{title:`Basic`,source:`<pf-dual-list-selector>
  <pf-dual-list-selector-pane title="Available options" :status="status(basic.available)">
    <pf-dual-list-selector-list>
      <template v-for="(option, index) in basic.available" :key="option.text">
        <pf-dual-list-selector-list-item
          v-if="option.visible"
          :id="\`basic-available-option-\${index}\`"
          v-model:selected="option.selected"
        >
          {{ option.text }}
        </pf-dual-list-selector-list-item>
      </template>
    </pf-dual-list-selector-list>
  </pf-dual-list-selector-pane>
  <pf-dual-list-selector-controls-wrapper>
    <pf-dual-list-selector-control
      :disabled="!basic.available.some(option => option.selected)"
      aria-label="Add selected"
      @click="basic.moveSelected(true)"
    >
      <template #icon><angle-right-icon /></template>
    </pf-dual-list-selector-control>
    <pf-dual-list-selector-control
      :disabled="basic.available.length === 0"
      aria-label="Add all"
      @click="basic.moveAll(true)"
    >
      <template #icon><angles-right-icon /></template>
    </pf-dual-list-selector-control>
    <pf-dual-list-selector-control
      :disabled="basic.chosen.length === 0"
      aria-label="Remove all"
      @click="basic.moveAll(false)"
    >
      <template #icon><angles-left-icon /></template>
    </pf-dual-list-selector-control>
    <pf-dual-list-selector-control
      :disabled="!basic.chosen.some(option => option.selected)"
      aria-label="Remove selected"
      @click="basic.moveSelected(false)"
    >
      <template #icon><angle-left-icon /></template>
    </pf-dual-list-selector-control>
  </pf-dual-list-selector-controls-wrapper>
  <pf-dual-list-selector-pane title="Chosen options" :status="status(basic.chosen)" chosen>
    <pf-dual-list-selector-list>
      <template v-for="(option, index) in basic.chosen" :key="option.text">
        <pf-dual-list-selector-list-item
          v-if="option.visible"
          :id="\`composable-basic-chosen-option-\${index}\`"
          v-model:selected="option.selected"
        >
          {{ option.text }}
        </pf-dual-list-selector-list-item>
      </template>
    </pf-dual-list-selector-list>
  </pf-dual-list-selector-pane>
</pf-dual-list-selector>`},{default:t(()=>[c(z,null,{default:t(()=>[c(D,{title:`Available options`,status:x(o(O).available)},{default:t(()=>[c(E,null,{default:t(()=>[(l(!0),a(f,null,n(o(O).available,(e,n)=>(l(),a(f,{key:e.text},[e.visible?(l(),u(h,{key:0,id:`basic-available-option-${n}`,selected:e.selected,"onUpdate:selected":t=>e.selected=t},{default:t(()=>[d(r(e.text),1)]),_:2},1032,[`id`,`selected`,`onUpdate:selected`])):g(``,!0)],64))),128))]),_:1})]),_:1},8,[`status`]),c(P,null,{default:t(()=>[c(N,{disabled:!o(O).available.some(e=>e.selected),"aria-label":`Add selected`,onClick:p[0]||=e=>o(O).moveSelected(!0)},{icon:t(()=>[c(o(b))]),_:1},8,[`disabled`]),c(N,{disabled:o(O).available.length===0,"aria-label":`Add all`,onClick:p[1]||=e=>o(O).moveAll(!0)},{icon:t(()=>[c(o(C))]),_:1},8,[`disabled`]),c(N,{disabled:o(O).chosen.length===0,"aria-label":`Remove all`,onClick:p[2]||=e=>o(O).moveAll(!1)},{icon:t(()=>[c(o(w))]),_:1},8,[`disabled`]),c(N,{disabled:!o(O).chosen.some(e=>e.selected),"aria-label":`Remove selected`,onClick:p[3]||=e=>o(O).moveSelected(!1)},{icon:t(()=>[c(o(y))]),_:1},8,[`disabled`])]),_:1}),c(D,{title:`Chosen options`,status:x(o(O).chosen),chosen:``},{default:t(()=>[c(E,null,{default:t(()=>[(l(!0),a(f,null,n(o(O).chosen,(e,n)=>(l(),a(f,{key:e.text},[e.visible?(l(),u(h,{key:0,id:`composable-basic-chosen-option-${n}`,selected:e.selected,"onUpdate:selected":t=>e.selected=t},{default:t(()=>[d(r(e.text),1)]),_:2},1032,[`id`,`selected`,`onUpdate:selected`])):g(``,!0)],64))),128))]),_:1})]),_:1},8,[`status`])]),_:1})]),_:1}),c(B,{title:`Basic with tooltips`,source:`<pf-dual-list-selector>
  <pf-dual-list-selector-pane title="Available options" :status="status(tooltips.available)">
    <pf-dual-list-selector-list>
      <template v-for="(option, index) in tooltips.available" :key="option.text">
        <pf-dual-list-selector-list-item
          v-if="option.visible"
          :id="\`tooltips-available-option-\${index}\`"
          v-model:selected="option.selected"
        >
          {{ option.text }}
        </pf-dual-list-selector-list-item>
      </template>
    </pf-dual-list-selector-list>
  </pf-dual-list-selector-pane>
  <pf-dual-list-selector-controls-wrapper>
    <pf-dual-list-selector-control
      :disabled="!tooltips.available.some(option => option.selected)"
      aria-label="Add selected"
      tooltip="Add selected"
      :tooltip-attrs="{ position: 'top', ariaLive: 'off' }"
      @click="tooltips.moveSelected(true)"
    >
      <template #icon><angle-right-icon /></template>
    </pf-dual-list-selector-control>
    <pf-dual-list-selector-control
      :disabled="tooltips.available.length === 0"
      aria-label="Add all"
      tooltip="Add all"
      :tooltip-attrs="{ position: 'right', ariaLive: 'off' }"
      @click="tooltips.moveAll(true)"
    >
      <template #icon><angles-right-icon /></template>
    </pf-dual-list-selector-control>
    <pf-dual-list-selector-control
      :disabled="tooltips.chosen.length === 0"
      aria-label="Remove all"
      tooltip="Remove all"
      :tooltip-attrs="{ position: 'left', ariaLive: 'off' }"
      @click="tooltips.moveAll(false)"
    >
      <template #icon><angles-left-icon /></template>
    </pf-dual-list-selector-control>
    <pf-dual-list-selector-control
      :disabled="!tooltips.chosen.some(option => option.selected)"
      aria-label="Remove selected"
      tooltip="Remove selected"
      :tooltip-attrs="{ position: 'bottom', ariaLive: 'off' }"
      @click="tooltips.moveSelected(false)"
    >
      <template #icon><angle-left-icon /></template>
    </pf-dual-list-selector-control>
  </pf-dual-list-selector-controls-wrapper>
  <pf-dual-list-selector-pane title="Chosen options" :status="status(tooltips.chosen)" chosen>
    <pf-dual-list-selector-list>
      <template v-for="(option, index) in tooltips.chosen" :key="option.text">
        <pf-dual-list-selector-list-item
          v-if="option.visible"
          :id="\`composable-tooltips-chosen-option-\${index}\`"
          v-model:selected="option.selected"
        >
          {{ option.text }}
        </pf-dual-list-selector-list-item>
      </template>
    </pf-dual-list-selector-list>
  </pf-dual-list-selector-pane>
</pf-dual-list-selector>`},{default:t(()=>[c(z,null,{default:t(()=>[c(D,{title:`Available options`,status:x(o(k).available)},{default:t(()=>[c(E,null,{default:t(()=>[(l(!0),a(f,null,n(o(k).available,(e,n)=>(l(),a(f,{key:e.text},[e.visible?(l(),u(h,{key:0,id:`tooltips-available-option-${n}`,selected:e.selected,"onUpdate:selected":t=>e.selected=t},{default:t(()=>[d(r(e.text),1)]),_:2},1032,[`id`,`selected`,`onUpdate:selected`])):g(``,!0)],64))),128))]),_:1})]),_:1},8,[`status`]),c(P,null,{default:t(()=>[c(N,{disabled:!o(k).available.some(e=>e.selected),"aria-label":`Add selected`,tooltip:`Add selected`,"tooltip-attrs":{position:`top`,ariaLive:`off`},onClick:p[4]||=e=>o(k).moveSelected(!0)},{icon:t(()=>[c(o(b))]),_:1},8,[`disabled`]),c(N,{disabled:o(k).available.length===0,"aria-label":`Add all`,tooltip:`Add all`,"tooltip-attrs":{position:`right`,ariaLive:`off`},onClick:p[5]||=e=>o(k).moveAll(!0)},{icon:t(()=>[c(o(C))]),_:1},8,[`disabled`]),c(N,{disabled:o(k).chosen.length===0,"aria-label":`Remove all`,tooltip:`Remove all`,"tooltip-attrs":{position:`left`,ariaLive:`off`},onClick:p[6]||=e=>o(k).moveAll(!1)},{icon:t(()=>[c(o(w))]),_:1},8,[`disabled`]),c(N,{disabled:!o(k).chosen.some(e=>e.selected),"aria-label":`Remove selected`,tooltip:`Remove selected`,"tooltip-attrs":{position:`bottom`,ariaLive:`off`},onClick:p[7]||=e=>o(k).moveSelected(!1)},{icon:t(()=>[c(o(y))]),_:1},8,[`disabled`])]),_:1}),c(D,{title:`Chosen options`,status:x(o(k).chosen),chosen:``},{default:t(()=>[c(E,null,{default:t(()=>[(l(!0),a(f,null,n(o(k).chosen,(e,n)=>(l(),a(f,{key:e.text},[e.visible?(l(),u(h,{key:0,id:`composable-tooltips-chosen-option-${n}`,selected:e.selected,"onUpdate:selected":t=>e.selected=t},{default:t(()=>[d(r(e.text),1)]),_:2},1032,[`id`,`selected`,`onUpdate:selected`])):g(``,!0)],64))),128))]),_:1})]),_:1},8,[`status`])]),_:1})]),_:1}),c(B,{title:`Basic with search`,source:`<pf-dual-list-selector>
  <pf-dual-list-selector-pane
    title="Available options"
    :status="status(search.available)"
    list-min-height="300px"
  >
    <template #search-input>
      <pf-search-input
        v-model="search.availableFilter"
        aria-label="Search available options"
        @update:model-value="search.filter(true)" />
    </template>
    <pf-empty-state
      v-if="search.availableFilter !== '' && !search.available.some(option => option.visible)"
      variant="sm"
      title="No results found"
      heading-level="h4"
    >
      <template #icon><magnifying-glass-icon /></template>
      <pf-empty-state-body
        >No results match the filter criteria. Clear all filters and try again.</pf-empty-state-body>
      <pf-empty-state-footer>
        <pf-empty-state-actions>
          <pf-button variant="link" @click="search.clearFilter(true)">Clear all filters</pf-button>
        </pf-empty-state-actions>
      </pf-empty-state-footer>
    </pf-empty-state>
    <pf-dual-list-selector-list>
      <template v-for="(option, index) in search.available" :key="option.text">
        <pf-dual-list-selector-list-item
          v-if="option.visible"
          :id="\`search-available-option-\${index}\`"
          v-model:selected="option.selected"
        >
          {{ option.text }}
        </pf-dual-list-selector-list-item>
      </template>
    </pf-dual-list-selector-list>
  </pf-dual-list-selector-pane>
  <pf-dual-list-selector-controls-wrapper>
    <pf-dual-list-selector-control
      :disabled="!search.available.some(option => option.selected)"
      aria-label="Add selected"
      @click="search.moveSelected(true)"
    >
      <template #icon><angle-right-icon /></template>
    </pf-dual-list-selector-control>
    <pf-dual-list-selector-control
      :disabled="search.available.length === 0"
      aria-label="Add all"
      @click="search.moveAll(true)"
    >
      <template #icon><angles-right-icon /></template>
    </pf-dual-list-selector-control>
    <pf-dual-list-selector-control
      :disabled="search.chosen.length === 0"
      aria-label="Remove all"
      @click="search.moveAll(false)"
    >
      <template #icon><angles-left-icon /></template>
    </pf-dual-list-selector-control>
    <pf-dual-list-selector-control
      :disabled="!search.chosen.some(option => option.selected)"
      aria-label="Remove selected"
      @click="search.moveSelected(false)"
    >
      <template #icon><angle-left-icon /></template>
    </pf-dual-list-selector-control>
  </pf-dual-list-selector-controls-wrapper>
  <pf-dual-list-selector-pane
    title="Chosen options"
    :status="status(search.chosen)"
    list-min-height="300px"
    chosen
  >
    <template #search-input>
      <pf-search-input
        v-model="search.chosenFilter"
        aria-label="Search chosen options"
        @update:model-value="search.filter(false)" />
    </template>
    <pf-empty-state
      v-if="search.chosenFilter !== '' && !search.chosen.some(option => option.visible)"
      variant="sm"
      title="No results found"
      heading-level="h4"
    >
      <template #icon><magnifying-glass-icon /></template>
      <pf-empty-state-body
        >No results match the filter criteria. Clear all filters and try again.</pf-empty-state-body>
      <pf-empty-state-footer>
        <pf-empty-state-actions>
          <pf-button variant="link" @click="search.clearFilter(false)">Clear all filters</pf-button>
        </pf-empty-state-actions>
      </pf-empty-state-footer>
    </pf-empty-state>
    <pf-dual-list-selector-list v-if="search.chosen.some(option => option.visible)">
      <template v-for="(option, index) in search.chosen" :key="option.text">
        <pf-dual-list-selector-list-item
          v-if="option.visible"
          :id="\`composable-search-chosen-option-\${index}\`"
          v-model:selected="option.selected"
        >
          {{ option.text }}
        </pf-dual-list-selector-list-item>
      </template>
    </pf-dual-list-selector-list>
  </pf-dual-list-selector-pane>
</pf-dual-list-selector>`},{default:t(()=>[c(z,null,{default:t(()=>[c(D,{title:`Available options`,status:x(o(A).available),"list-min-height":`300px`},{"search-input":t(()=>[c(H,{modelValue:o(A).availableFilter,"onUpdate:modelValue":[p[8]||=e=>o(A).availableFilter=e,p[9]||=e=>o(A).filter(!0)],"aria-label":`Search available options`},null,8,[`modelValue`])]),default:t(()=>[o(A).availableFilter!==``&&!o(A).available.some(e=>e.visible)?(l(),u(q,{key:0,variant:`sm`,title:`No results found`,"heading-level":`h4`},{icon:t(()=>[c(o(_))]),default:t(()=>[c(U,null,{default:t(()=>[...p[54]||=[d(`No results match the filter criteria. Clear all filters and try again.`,-1)]]),_:1}),c(K,null,{default:t(()=>[c(G,null,{default:t(()=>[c(W,{variant:`link`,onClick:p[10]||=e=>o(A).clearFilter(!0)},{default:t(()=>[...p[55]||=[d(`Clear all filters`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})):g(``,!0),c(E,null,{default:t(()=>[(l(!0),a(f,null,n(o(A).available,(e,n)=>(l(),a(f,{key:e.text},[e.visible?(l(),u(h,{key:0,id:`search-available-option-${n}`,selected:e.selected,"onUpdate:selected":t=>e.selected=t},{default:t(()=>[d(r(e.text),1)]),_:2},1032,[`id`,`selected`,`onUpdate:selected`])):g(``,!0)],64))),128))]),_:1})]),_:1},8,[`status`]),c(P,null,{default:t(()=>[c(N,{disabled:!o(A).available.some(e=>e.selected),"aria-label":`Add selected`,onClick:p[11]||=e=>o(A).moveSelected(!0)},{icon:t(()=>[c(o(b))]),_:1},8,[`disabled`]),c(N,{disabled:o(A).available.length===0,"aria-label":`Add all`,onClick:p[12]||=e=>o(A).moveAll(!0)},{icon:t(()=>[c(o(C))]),_:1},8,[`disabled`]),c(N,{disabled:o(A).chosen.length===0,"aria-label":`Remove all`,onClick:p[13]||=e=>o(A).moveAll(!1)},{icon:t(()=>[c(o(w))]),_:1},8,[`disabled`]),c(N,{disabled:!o(A).chosen.some(e=>e.selected),"aria-label":`Remove selected`,onClick:p[14]||=e=>o(A).moveSelected(!1)},{icon:t(()=>[c(o(y))]),_:1},8,[`disabled`])]),_:1}),c(D,{title:`Chosen options`,status:x(o(A).chosen),"list-min-height":`300px`,chosen:``},{"search-input":t(()=>[c(H,{modelValue:o(A).chosenFilter,"onUpdate:modelValue":[p[15]||=e=>o(A).chosenFilter=e,p[16]||=e=>o(A).filter(!1)],"aria-label":`Search chosen options`},null,8,[`modelValue`])]),default:t(()=>[o(A).chosenFilter!==``&&!o(A).chosen.some(e=>e.visible)?(l(),u(q,{key:0,variant:`sm`,title:`No results found`,"heading-level":`h4`},{icon:t(()=>[c(o(_))]),default:t(()=>[c(U,null,{default:t(()=>[...p[56]||=[d(`No results match the filter criteria. Clear all filters and try again.`,-1)]]),_:1}),c(K,null,{default:t(()=>[c(G,null,{default:t(()=>[c(W,{variant:`link`,onClick:p[17]||=e=>o(A).clearFilter(!1)},{default:t(()=>[...p[57]||=[d(`Clear all filters`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})):g(``,!0),o(A).chosen.some(e=>e.visible)?(l(),u(E,{key:1},{default:t(()=>[(l(!0),a(f,null,n(o(A).chosen,(e,n)=>(l(),a(f,{key:e.text},[e.visible?(l(),u(h,{key:0,id:`composable-search-chosen-option-${n}`,selected:e.selected,"onUpdate:selected":t=>e.selected=t},{default:t(()=>[d(r(e.text),1)]),_:2},1032,[`id`,`selected`,`onUpdate:selected`])):g(``,!0)],64))),128))]),_:1})):g(``,!0)]),_:1},8,[`status`])]),_:1})]),_:1}),c(B,{title:`Using more complex options with actions`,source:`<pf-dual-list-selector>
  <pf-dual-list-selector-pane
    title="Available options"
    :status="status(complex.available)"
    list-min-height="300px"
    :disabled="complexDisabled"
  >
    <template #search-input>
      <pf-search-input
        v-model="complex.availableFilter"
        :disabled="complexDisabled"
        aria-label="Search available options"
        @update:model-value="complex.filter(true)" />
    </template>
    <template #actions>
      <pf-button
        variant="plain"
        aria-label="Sort Available"
        :disabled="complexDisabled"
        @click="complex.sort(true)"
      >
        <template #icon><arrow-down-short-wide-icon /></template>
      </pf-button>
      <pf-dropdown close-on-select>
        <template #toggle>
          <pf-menu-toggle
            id="complex-available-toggle"
            variant="plain"
            :disabled="complexDisabled"
            aria-label="Complex actions example available kebab toggle"
          >
            <template #icon><ellipsis-vertical-icon /></template>
          </pf-menu-toggle>
        </template>
        <pf-dropdown-item component="button">Available Action</pf-dropdown-item>
        <pf-dropdown-item to="#" @click.prevent>Available Link</pf-dropdown-item>
      </pf-dropdown>
    </template>
    <pf-empty-state
      v-if="complex.availableFilter !== '' && !complex.available.some(option => option.visible)"
      variant="sm"
      title="No results found"
      heading-level="h4"
    >
      <template #icon><magnifying-glass-icon /></template>
      <pf-empty-state-body
        >No results match the filter criteria. Clear all filters and try again.</pf-empty-state-body>
      <pf-empty-state-footer>
        <pf-empty-state-actions>
          <pf-button variant="link" @click="complex.clearFilter(true)">Clear all filters</pf-button>
        </pf-empty-state-actions>
      </pf-empty-state-footer>
    </pf-empty-state>
    <pf-dual-list-selector-list>
      <template v-for="(option, index) in complex.available" :key="option.text">
        <pf-dual-list-selector-list-item
          v-if="option.visible"
          :id="\`complex-available-option-\${index}\`"
          v-model:selected="option.selected"
        >
          {{ option.text }}
        </pf-dual-list-selector-list-item>
      </template>
    </pf-dual-list-selector-list>
  </pf-dual-list-selector-pane>
  <pf-dual-list-selector-controls-wrapper>
    <pf-dual-list-selector-control
      :disabled="!complex.available.some(option => option.selected) || complexDisabled"
      aria-label="Add selected"
      @click="complex.moveSelected(true)"
    >
      <template #icon><angle-right-icon /></template>
    </pf-dual-list-selector-control>
    <pf-dual-list-selector-control
      :disabled="complex.available.length === 0 || complexDisabled"
      aria-label="Add all"
      @click="complex.moveAll(true)"
    >
      <template #icon><angles-right-icon /></template>
    </pf-dual-list-selector-control>
    <pf-dual-list-selector-control
      :disabled="complex.chosen.length === 0 || complexDisabled"
      aria-label="Remove all"
      @click="complex.moveAll(false)"
    >
      <template #icon><angles-left-icon /></template>
    </pf-dual-list-selector-control>
    <pf-dual-list-selector-control
      :disabled="!complex.chosen.some(option => option.selected) || complexDisabled"
      aria-label="Remove selected"
      @click="complex.moveSelected(false)"
    >
      <template #icon><angle-left-icon /></template>
    </pf-dual-list-selector-control>
  </pf-dual-list-selector-controls-wrapper>
  <pf-dual-list-selector-pane
    title="Chosen options"
    :status="status(complex.chosen)"
    list-min-height="300px"
    :disabled="complexDisabled"
    chosen
  >
    <template #search-input>
      <pf-search-input
        v-model="complex.chosenFilter"
        :disabled="complexDisabled"
        aria-label="Search chosen options"
        @update:model-value="complex.filter(false)" />
    </template>
    <template #actions>
      <pf-button
        variant="plain"
        aria-label="Sort Chosen"
        :disabled="complexDisabled"
        @click="complex.sort(false)"
      >
        <template #icon><arrow-down-short-wide-icon /></template>
      </pf-button>
      <pf-dropdown close-on-select>
        <template #toggle>
          <pf-menu-toggle
            id="complex-chosen-toggle"
            variant="plain"
            :disabled="complexDisabled"
            aria-label="Complex actions example chosen kebab toggle"
          >
            <template #icon><ellipsis-vertical-icon /></template>
          </pf-menu-toggle>
        </template>
        <pf-dropdown-item component="button">Chosen Action</pf-dropdown-item>
        <pf-dropdown-item to="#" @click.prevent>Chosen Link</pf-dropdown-item>
      </pf-dropdown>
    </template>
    <pf-empty-state
      v-if="complex.chosenFilter !== '' && !complex.chosen.some(option => option.visible)"
      variant="sm"
      title="No results found"
      heading-level="h4"
    >
      <template #icon><magnifying-glass-icon /></template>
      <pf-empty-state-body
        >No results match the filter criteria. Clear all filters and try again.</pf-empty-state-body>
      <pf-empty-state-footer>
        <pf-empty-state-actions>
          <pf-button variant="link" @click="complex.clearFilter(false)">Clear all filters</pf-button>
        </pf-empty-state-actions>
      </pf-empty-state-footer>
    </pf-empty-state>
    <pf-dual-list-selector-list v-if="complex.chosen.some(option => option.visible)">
      <template v-for="(option, index) in complex.chosen" :key="option.text">
        <pf-dual-list-selector-list-item
          v-if="option.visible"
          :id="\`composable-complex-chosen-option-\${index}\`"
          v-model:selected="option.selected"
        >
          {{ option.text }}
        </pf-dual-list-selector-list-item>
      </template>
    </pf-dual-list-selector-list>
  </pf-dual-list-selector-pane>
</pf-dual-list-selector>
<pf-checkbox id="isDisabled" v-model="complexDisabled" label="disabled" aria-label="disabled" />`},{default:t(()=>[c(z,null,{default:t(()=>[c(D,{title:`Available options`,status:x(o(j).available),"list-min-height":`300px`,disabled:M.value},{"search-input":t(()=>[c(H,{modelValue:o(j).availableFilter,"onUpdate:modelValue":[p[18]||=e=>o(j).availableFilter=e,p[19]||=e=>o(j).filter(!0)],disabled:M.value,"aria-label":`Search available options`},null,8,[`modelValue`,`disabled`])]),actions:t(()=>[c(W,{variant:`plain`,"aria-label":`Sort Available`,disabled:M.value,onClick:p[20]||=e=>o(j).sort(!0)},{icon:t(()=>[c(o(T))]),_:1},8,[`disabled`]),c(X,{"close-on-select":``},{toggle:t(()=>[c(J,{id:`complex-available-toggle`,variant:`plain`,disabled:M.value,"aria-label":`Complex actions example available kebab toggle`},{icon:t(()=>[c(o(v))]),_:1},8,[`disabled`])]),default:t(()=>[c(Y,{component:`button`},{default:t(()=>[...p[58]||=[d(`Available Action`,-1)]]),_:1}),c(Y,{to:`#`,onClick:p[21]||=S(()=>{},[`prevent`])},{default:t(()=>[...p[59]||=[d(`Available Link`,-1)]]),_:1})]),_:1})]),default:t(()=>[o(j).availableFilter!==``&&!o(j).available.some(e=>e.visible)?(l(),u(q,{key:0,variant:`sm`,title:`No results found`,"heading-level":`h4`},{icon:t(()=>[c(o(_))]),default:t(()=>[c(U,null,{default:t(()=>[...p[60]||=[d(`No results match the filter criteria. Clear all filters and try again.`,-1)]]),_:1}),c(K,null,{default:t(()=>[c(G,null,{default:t(()=>[c(W,{variant:`link`,onClick:p[22]||=e=>o(j).clearFilter(!0)},{default:t(()=>[...p[61]||=[d(`Clear all filters`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})):g(``,!0),c(E,null,{default:t(()=>[(l(!0),a(f,null,n(o(j).available,(e,n)=>(l(),a(f,{key:e.text},[e.visible?(l(),u(h,{key:0,id:`complex-available-option-${n}`,selected:e.selected,"onUpdate:selected":t=>e.selected=t},{default:t(()=>[d(r(e.text),1)]),_:2},1032,[`id`,`selected`,`onUpdate:selected`])):g(``,!0)],64))),128))]),_:1})]),_:1},8,[`status`,`disabled`]),c(P,null,{default:t(()=>[c(N,{disabled:!o(j).available.some(e=>e.selected)||M.value,"aria-label":`Add selected`,onClick:p[23]||=e=>o(j).moveSelected(!0)},{icon:t(()=>[c(o(b))]),_:1},8,[`disabled`]),c(N,{disabled:o(j).available.length===0||M.value,"aria-label":`Add all`,onClick:p[24]||=e=>o(j).moveAll(!0)},{icon:t(()=>[c(o(C))]),_:1},8,[`disabled`]),c(N,{disabled:o(j).chosen.length===0||M.value,"aria-label":`Remove all`,onClick:p[25]||=e=>o(j).moveAll(!1)},{icon:t(()=>[c(o(w))]),_:1},8,[`disabled`]),c(N,{disabled:!o(j).chosen.some(e=>e.selected)||M.value,"aria-label":`Remove selected`,onClick:p[26]||=e=>o(j).moveSelected(!1)},{icon:t(()=>[c(o(y))]),_:1},8,[`disabled`])]),_:1}),c(D,{title:`Chosen options`,status:x(o(j).chosen),"list-min-height":`300px`,disabled:M.value,chosen:``},{"search-input":t(()=>[c(H,{modelValue:o(j).chosenFilter,"onUpdate:modelValue":[p[27]||=e=>o(j).chosenFilter=e,p[28]||=e=>o(j).filter(!1)],disabled:M.value,"aria-label":`Search chosen options`},null,8,[`modelValue`,`disabled`])]),actions:t(()=>[c(W,{variant:`plain`,"aria-label":`Sort Chosen`,disabled:M.value,onClick:p[29]||=e=>o(j).sort(!1)},{icon:t(()=>[c(o(T))]),_:1},8,[`disabled`]),c(X,{"close-on-select":``},{toggle:t(()=>[c(J,{id:`complex-chosen-toggle`,variant:`plain`,disabled:M.value,"aria-label":`Complex actions example chosen kebab toggle`},{icon:t(()=>[c(o(v))]),_:1},8,[`disabled`])]),default:t(()=>[c(Y,{component:`button`},{default:t(()=>[...p[62]||=[d(`Chosen Action`,-1)]]),_:1}),c(Y,{to:`#`,onClick:p[30]||=S(()=>{},[`prevent`])},{default:t(()=>[...p[63]||=[d(`Chosen Link`,-1)]]),_:1})]),_:1})]),default:t(()=>[o(j).chosenFilter!==``&&!o(j).chosen.some(e=>e.visible)?(l(),u(q,{key:0,variant:`sm`,title:`No results found`,"heading-level":`h4`},{icon:t(()=>[c(o(_))]),default:t(()=>[c(U,null,{default:t(()=>[...p[64]||=[d(`No results match the filter criteria. Clear all filters and try again.`,-1)]]),_:1}),c(K,null,{default:t(()=>[c(G,null,{default:t(()=>[c(W,{variant:`link`,onClick:p[31]||=e=>o(j).clearFilter(!1)},{default:t(()=>[...p[65]||=[d(`Clear all filters`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})):g(``,!0),o(j).chosen.some(e=>e.visible)?(l(),u(E,{key:1},{default:t(()=>[(l(!0),a(f,null,n(o(j).chosen,(e,n)=>(l(),a(f,{key:e.text},[e.visible?(l(),u(h,{key:0,id:`composable-complex-chosen-option-${n}`,selected:e.selected,"onUpdate:selected":t=>e.selected=t},{default:t(()=>[d(r(e.text),1)]),_:2},1032,[`id`,`selected`,`onUpdate:selected`])):g(``,!0)],64))),128))]),_:1})):g(``,!0)]),_:1},8,[`status`,`disabled`])]),_:1}),c(Z,{id:`isDisabled`,modelValue:M.value,"onUpdate:modelValue":p[32]||=e=>M.value=e,label:`disabled`,"aria-label":`disabled`},null,8,[`modelValue`])]),_:1}),c(B,{title:`With tree`,source:`<pf-dual-list-selector animations tree>
  <pf-dual-list-selector-pane title="Available" :status="tree.status(false)" list-min-height="300px">
    <template #search-input>
      <pf-search-input v-model="tree.filters.available" aria-label="Search available items" />
    </template>
    <pf-empty-state
      v-if="tree.filters.available !== '' && tree.options(false).length === 0"
      variant="sm"
      title="No results found"
      heading-level="h4"
    >
      <template #icon><magnifying-glass-icon /></template>
      <pf-empty-state-body
        >No results match the filter criteria. Clear all filters and try again.</pf-empty-state-body>
      <pf-empty-state-footer>
        <pf-empty-state-actions>
          <pf-button variant="link" @click="tree.filters.available = ''">Clear all filters</pf-button>
        </pf-empty-state-actions>
      </pf-empty-state-footer>
    </pf-empty-state>
    <pf-dual-list-selector-list v-if="tree.options(false).length > 0">
      <pf-dual-list-selector-tree
        :data="tree.options(false)"
        @option-check="(_event, checked, itemData) => tree.onOptionCheck(checked, itemData, false)"
      ></pf-dual-list-selector-tree>
    </pf-dual-list-selector-list>
  </pf-dual-list-selector-pane>
  <pf-dual-list-selector-controls-wrapper>
    <pf-dual-list-selector-control
      :disabled="!tree.checkedLeafIds.some(id => tree.visibleLeafIds(false).includes(id))"
      aria-label="Add selected"
      @click="tree.moveChecked(true)"
    >
      <template #icon><angle-right-icon /></template>
    </pf-dual-list-selector-control>
    <pf-dual-list-selector-control
      :disabled="tree.chosenLeafIds.length === tree.allLeaves.length"
      aria-label="Add all"
      @click="tree.moveAll(true)"
    >
      <template #icon><angles-right-icon /></template>
    </pf-dual-list-selector-control>
    <pf-dual-list-selector-control
      :disabled="tree.chosenLeafIds.length === 0"
      aria-label="Remove all"
      @click="tree.moveAll(false)"
    >
      <template #icon><angles-left-icon /></template>
    </pf-dual-list-selector-control>
    <pf-dual-list-selector-control
      :disabled="!tree.checkedLeafIds.some(id => tree.visibleLeafIds(true).includes(id))"
      aria-label="Remove selected"
      @click="tree.moveChecked(false)"
    >
      <template #icon><angle-left-icon /></template>
    </pf-dual-list-selector-control>
  </pf-dual-list-selector-controls-wrapper>
  <pf-dual-list-selector-pane title="Chosen" :status="tree.status(true)" chosen list-min-height="300px">
    <template #search-input>
      <pf-search-input v-model="tree.filters.chosen" aria-label="Search chosen items" />
    </template>
    <pf-empty-state
      v-if="tree.filters.chosen !== '' && tree.options(true).length === 0"
      variant="sm"
      title="No results found"
      heading-level="h4"
    >
      <template #icon><magnifying-glass-icon /></template>
      <pf-empty-state-body
        >No results match the filter criteria. Clear all filters and try again.</pf-empty-state-body>
      <pf-empty-state-footer>
        <pf-empty-state-actions>
          <pf-button variant="link" @click="tree.filters.chosen = ''">Clear all filters</pf-button>
        </pf-empty-state-actions>
      </pf-empty-state-footer>
    </pf-empty-state>
    <pf-dual-list-selector-list v-if="tree.options(true).length > 0">
      <pf-dual-list-selector-tree
        :data="tree.options(true)"
        @option-check="(_event, checked, itemData) => tree.onOptionCheck(checked, itemData, true)"
      ></pf-dual-list-selector-tree>
    </pf-dual-list-selector-list>
  </pf-dual-list-selector-pane>
</pf-dual-list-selector>`},{default:t(()=>[c(z,{animations:``,tree:``},{default:t(()=>[c(D,{title:`Available`,status:o(V).status(!1),"list-min-height":`300px`},{"search-input":t(()=>[c(H,{modelValue:o(V).filters.available,"onUpdate:modelValue":p[33]||=e=>o(V).filters.available=e,"aria-label":`Search available items`},null,8,[`modelValue`])]),default:t(()=>[o(V).filters.available!==``&&o(V).options(!1).length===0?(l(),u(q,{key:0,variant:`sm`,title:`No results found`,"heading-level":`h4`},{icon:t(()=>[c(o(_))]),default:t(()=>[c(U,null,{default:t(()=>[...p[66]||=[d(`No results match the filter criteria. Clear all filters and try again.`,-1)]]),_:1}),c(K,null,{default:t(()=>[c(G,null,{default:t(()=>[c(W,{variant:`link`,onClick:p[34]||=e=>o(V).filters.available=``},{default:t(()=>[...p[67]||=[d(`Clear all filters`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})):g(``,!0),o(V).options(!1).length>0?(l(),u(E,{key:1},{default:t(()=>[c(Q,{data:o(V).options(!1),onOptionCheck:p[35]||=(e,t,n)=>o(V).onOptionCheck(t,n,!1)},null,8,[`data`])]),_:1})):g(``,!0)]),_:1},8,[`status`]),c(P,null,{default:t(()=>[c(N,{disabled:!o(V).checkedLeafIds.some(e=>o(V).visibleLeafIds(!1).includes(e)),"aria-label":`Add selected`,onClick:p[36]||=e=>o(V).moveChecked(!0)},{icon:t(()=>[c(o(b))]),_:1},8,[`disabled`]),c(N,{disabled:o(V).chosenLeafIds.length===o(V).allLeaves.length,"aria-label":`Add all`,onClick:p[37]||=e=>o(V).moveAll(!0)},{icon:t(()=>[c(o(C))]),_:1},8,[`disabled`]),c(N,{disabled:o(V).chosenLeafIds.length===0,"aria-label":`Remove all`,onClick:p[38]||=e=>o(V).moveAll(!1)},{icon:t(()=>[c(o(w))]),_:1},8,[`disabled`]),c(N,{disabled:!o(V).checkedLeafIds.some(e=>o(V).visibleLeafIds(!0).includes(e)),"aria-label":`Remove selected`,onClick:p[39]||=e=>o(V).moveChecked(!1)},{icon:t(()=>[c(o(y))]),_:1},8,[`disabled`])]),_:1}),c(D,{title:`Chosen`,status:o(V).status(!0),chosen:``,"list-min-height":`300px`},{"search-input":t(()=>[c(H,{modelValue:o(V).filters.chosen,"onUpdate:modelValue":p[40]||=e=>o(V).filters.chosen=e,"aria-label":`Search chosen items`},null,8,[`modelValue`])]),default:t(()=>[o(V).filters.chosen!==``&&o(V).options(!0).length===0?(l(),u(q,{key:0,variant:`sm`,title:`No results found`,"heading-level":`h4`},{icon:t(()=>[c(o(_))]),default:t(()=>[c(U,null,{default:t(()=>[...p[68]||=[d(`No results match the filter criteria. Clear all filters and try again.`,-1)]]),_:1}),c(K,null,{default:t(()=>[c(G,null,{default:t(()=>[c(W,{variant:`link`,onClick:p[41]||=e=>o(V).filters.chosen=``},{default:t(()=>[...p[69]||=[d(`Clear all filters`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})):g(``,!0),o(V).options(!0).length>0?(l(),u(E,{key:1},{default:t(()=>[c(Q,{data:o(V).options(!0),onOptionCheck:p[42]||=(e,t,n)=>o(V).onOptionCheck(t,n,!0)},null,8,[`data`])]),_:1})):g(``,!0)]),_:1},8,[`status`])]),_:1})]),_:1}),c(B,{title:`Draggable`,source:`<pf-dual-list-selector>
  <pf-dual-list-selector-pane title="Available" :status="status(draggable.available)">
    <pf-dual-list-selector-list>
      <pf-dual-list-selector-list-item
        v-for="option in draggable.available"
        :id="\`composable-available-option-\${option.text}\`"
        :key="option.text"
        v-model:selected="option.selected"
      >
        {{ option.text }}
      </pf-dual-list-selector-list-item>
    </pf-dual-list-selector-list>
  </pf-dual-list-selector-pane>
  <pf-dual-list-selector-controls-wrapper>
    <pf-dual-list-selector-control
      :disabled="!draggable.available.some(option => option.selected)"
      aria-label="Add selected"
      @click="draggable.moveSelected(true)"
    >
      <template #icon><angle-right-icon /></template>
    </pf-dual-list-selector-control>
    <pf-dual-list-selector-control
      :disabled="draggable.available.length === 0"
      aria-label="Add all"
      @click="draggable.moveAll(true)"
    >
      <template #icon><angles-right-icon /></template>
    </pf-dual-list-selector-control>
    <pf-dual-list-selector-control
      :disabled="draggable.chosen.length === 0"
      aria-label="Remove all"
      @click="draggable.moveAll(false)"
    >
      <template #icon><angles-left-icon /></template>
    </pf-dual-list-selector-control>
    <pf-dual-list-selector-control
      :disabled="!draggable.chosen.some(option => option.selected)"
      aria-label="Remove selected"
      @click="draggable.moveSelected(false)"
    >
      <template #icon><angle-left-icon /></template>
    </pf-dual-list-selector-control>
  </pf-dual-list-selector-controls-wrapper>
  <pf-dual-list-selector-pane title="Chosen" :status="status(draggable.chosen)" chosen>
    <pf-drag-drop-sort
      :items="draggableItems(draggable.chosen)"
      variant="dual-list-selector"
      component="pf-dual-list-selector-list"
      @update:items="items => draggable.sortChosen(items)"
    ></pf-drag-drop-sort>
  </pf-dual-list-selector-pane>
</pf-dual-list-selector>`},{intro:t(()=>[...p[70]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[d(`To enable drag and drop, replace the `),i(`code`,null,`pf-dual-list-selector-list`),d(` with a `),i(`code`,null,`pf-drag-drop-sort`),d(` whose `),i(`code`,null,`component`),d(` is `),i(`code`,null,`pf-dual-list-selector-list`),d(` and whose `),i(`code`,null,`variant`),d(` is `),i(`code`,null,`dual-list-selector`),d(`, and bind the sortable items with `),i(`code`,null,`v-model:items`),d(`. `),i(`code`,null,`pf-drag-drop-sort`),d(` renders the options inside the list from the items, so no options are passed as children; the `),i(`code`,null,`attrs`),d(` of each item are bound to its option, e.g. `),i(`code`,null,`selected`),d(` and `),i(`code`,null,`onUpdate:selected`),d(`.`)]),i(`p`,null,[d(`Full drag and drop details can be found on the `),i(`a`,{href:`#/stories/components/drag-and-drop`},`drag and drop`),d(` component page.`)])],-1)]]),default:t(()=>[c(z,null,{default:t(()=>[c(D,{title:`Available`,status:x(o(F).available)},{default:t(()=>[c(E,null,{default:t(()=>[(l(!0),a(f,null,n(o(F).available,e=>(l(),u(h,{id:`composable-available-option-${e.text}`,key:e.text,selected:e.selected,"onUpdate:selected":t=>e.selected=t},{default:t(()=>[d(r(e.text),1)]),_:2},1032,[`id`,`selected`,`onUpdate:selected`]))),128))]),_:1})]),_:1},8,[`status`]),c(P,null,{default:t(()=>[c(N,{disabled:!o(F).available.some(e=>e.selected),"aria-label":`Add selected`,onClick:p[43]||=e=>o(F).moveSelected(!0)},{icon:t(()=>[c(o(b))]),_:1},8,[`disabled`]),c(N,{disabled:o(F).available.length===0,"aria-label":`Add all`,onClick:p[44]||=e=>o(F).moveAll(!0)},{icon:t(()=>[c(o(C))]),_:1},8,[`disabled`]),c(N,{disabled:o(F).chosen.length===0,"aria-label":`Remove all`,onClick:p[45]||=e=>o(F).moveAll(!1)},{icon:t(()=>[c(o(w))]),_:1},8,[`disabled`]),c(N,{disabled:!o(F).chosen.some(e=>e.selected),"aria-label":`Remove selected`,onClick:p[46]||=e=>o(F).moveSelected(!1)},{icon:t(()=>[c(o(y))]),_:1},8,[`disabled`])]),_:1}),c(D,{title:`Chosen`,status:x(o(F).chosen),chosen:``},{default:t(()=>[c(ee,{items:L(o(F).chosen),variant:`dual-list-selector`,component:`pf-dual-list-selector-list`,"onUpdate:items":p[47]||=e=>o(F).sortChosen(e)},null,8,[`items`])]),_:1},8,[`status`])]),_:1})]),_:1}),c(B,{title:`Draggable with multiple drop zones`,source:`<pf-drag-drop-container
  :items="multiZoneItems"
  variant="dual-list-selector"
  @update:items="items => multiZone.setItems(items)"
>
  <pf-dual-list-selector>
    <pf-dual-list-selector-pane title="Available" :status="status(multiZone.available)">
      <pf-droppable id="available" :items="multiZoneItems.available" component="pf-dual-list-selector-list" />
    </pf-dual-list-selector-pane>
    <pf-dual-list-selector-controls-wrapper aria-label="Selector controls">
      <pf-dual-list-selector-control
        :disabled="!multiZone.available.some(option => option.selected)"
        aria-label="Add selected"
        @click="multiZone.moveSelected(true)"
      >
        <angle-right-icon />
      </pf-dual-list-selector-control>
      <pf-dual-list-selector-control
        :disabled="multiZone.available.length === 0"
        aria-label="Add all"
        @click="multiZone.moveAll(true)"
      >
        <angles-right-icon />
      </pf-dual-list-selector-control>
      <pf-dual-list-selector-control
        :disabled="multiZone.chosen.length === 0"
        aria-label="Remove all"
        @click="multiZone.moveAll(false)"
      >
        <angles-left-icon />
      </pf-dual-list-selector-control>
      <pf-dual-list-selector-control
        :disabled="!multiZone.chosen.some(option => option.selected)"
        aria-label="Remove selected"
        @click="multiZone.moveSelected(false)"
      >
        <angle-left-icon />
      </pf-dual-list-selector-control>
    </pf-dual-list-selector-controls-wrapper>
    <pf-dual-list-selector-pane title="Chosen" :status="status(multiZone.chosen)" chosen>
      <pf-droppable id="chosen" :items="multiZoneItems.chosen" component="pf-dual-list-selector-list" />
    </pf-dual-list-selector-pane>
  </pf-dual-list-selector>
</pf-drag-drop-container>`},{intro:t(()=>[...p[71]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[d(`To enable multiple drop zones, wrap the `),i(`code`,null,`pf-dual-list-selector`),d(` with `),i(`code`,null,`pf-drag-drop-container`),d(`, and place a `),i(`code`,null,`pf-droppable`),d(` where each `),i(`code`,null,`pf-dual-list-selector-list`),d(` would go, with `),i(`code`,null,`component="pf-dual-list-selector-list"`),d(`. Bind all the items to `),i(`code`,null,`pf-drag-drop-container`),d(` with `),i(`code`,null,`v-model:items`),d(`, as a record keyed by the id of each `),i(`code`,null,`pf-droppable`),d(`, and pass each `),i(`code`,null,`pf-droppable`),d(` its own items. Set the `),i(`code`,null,`variant`),d(` of `),i(`code`,null,`pf-drag-drop-container`),d(` to `),i(`code`,null,`dual-list-selector`),d(`.`)]),i(`p`,null,[d(`Full drag and drop details can be found on the `),i(`a`,{href:`#/stories/components/drag-and-drop`},`drag and drop`),d(` component page.`)])],-1)]]),default:t(()=>[c(te,{items:R.value,variant:`dual-list-selector`,"onUpdate:items":p[52]||=e=>o(I).setItems(e)},{default:t(()=>[c(z,null,{default:t(()=>[c(D,{title:`Available`,status:x(o(I).available)},{default:t(()=>[c($,{id:`available`,items:R.value.available,component:`pf-dual-list-selector-list`},null,8,[`items`])]),_:1},8,[`status`]),c(P,{"aria-label":`Selector controls`},{default:t(()=>[c(N,{disabled:!o(I).available.some(e=>e.selected),"aria-label":`Add selected`,onClick:p[48]||=e=>o(I).moveSelected(!0)},{default:t(()=>[c(o(b))]),_:1},8,[`disabled`]),c(N,{disabled:o(I).available.length===0,"aria-label":`Add all`,onClick:p[49]||=e=>o(I).moveAll(!0)},{default:t(()=>[c(o(C))]),_:1},8,[`disabled`]),c(N,{disabled:o(I).chosen.length===0,"aria-label":`Remove all`,onClick:p[50]||=e=>o(I).moveAll(!1)},{default:t(()=>[c(o(w))]),_:1},8,[`disabled`]),c(N,{disabled:!o(I).chosen.some(e=>e.selected),"aria-label":`Remove selected`,onClick:p[51]||=e=>o(I).moveSelected(!1)},{default:t(()=>[c(o(y))]),_:1},8,[`disabled`])]),_:1}),c(D,{title:`Chosen`,status:x(o(I).chosen),chosen:``},{default:t(()=>[c($,{id:`chosen`,items:R.value.chosen,component:`pf-dual-list-selector-list`},null,8,[`items`])]),_:1},8,[`status`])]),_:1})]),_:1},8,[`items`])]),_:1})]),_:1})}}});export{E as default};