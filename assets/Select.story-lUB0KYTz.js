import{F as e,G as t,N as n,Nt as r,T as i,c as a,d as o,ft as s,g as c,h as l,j as u,l as d,m as f,n as p,nt as m,rt as h,s as g,u as _}from"./runtime-core.esm-bundler-DKmYt4j6.js";import{Y as v,z as y}from"./index-Cl3hMFDe.js";var b=c({__name:`Select.story`,setup(c){let b=h(!1),x=m({open:!1,selected:null}),S=m({open:!1,selected:null}),C=m({open:!1,selected:null}),w=m({open:!1,selected:null}),T=m({open:!1,selected:null}),E=g(()=>T.selected?.toLowerCase()),D=m({open:!1,selected:[]}),O=[`Option 1`,`Option 2`,`Option 3`,`Option 4`,`Option 5`,`Option 6`,`Option 7`,`Option 8`,`Option 9`,`Final Option 10`],k=m({open:!1,selected:null,count:3,loading:!1});function A(){k.loading=!0,setTimeout(()=>{let e=k.count;k.count=Math.min(k.count+3,O.length),k.loading=!1,i(()=>document.querySelector(`#view-more-option-${e} button`)?.focus())},2e3)}function j(e,t){t!==`loader`&&typeof t==`string`&&(k.selected=t,k.open=!1)}return(i,c)=>{let m=e(`component-info`),h=e(`pf-checkbox`),g=e(`pf-select-option`),M=e(`pf-select-list`),N=e(`pf-select`),P=e(`story-canvas`),F=e(`pf-select-group`),I=e(`pf-divider`),L=e(`pf-menu-toggle`),R=e(`pf-helper-text-item`),z=e(`pf-helper-text`),B=e(`pf-badge`),V=e(`pf-spinner`),H=e(`pf-button`),U=e(`pf-menu-footer`),W=e(`doc-page`);return u(),d(W,{name:`Components/Select.story.vue`,title:`Select`},{description:t(()=>[...c[15]||=[f(`A `,-1),a(`b`,null,`select list`,-1),f(` enables users to select one or more items from a list. Use a select list when options are dynamic or variable.`,-1)]]),apidocs:t(()=>[l(m,{name:`PfSelect`,doc:{name:`PfSelect`,exportName:`PfSelect`,displayName:`Select`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`selected`,description:`Single itemId for single select menus, or array of itemIds for multi select. You can also specify selected on the SelectOption.`,required:!1,type:{name:`union`,elements:[{name:`T`},{name:`null`}]},defaultValue:{func:!1,value:`null`}},{name:`role`,description:`Determines the accessible role of the select. For a checkbox select pass in "menu".`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'listbox'`}},{name:`minWidth`,description:`Minimum width of the select menu`,required:!1,type:{name:`string`}},{name:`zIndex`,description:`z-index of the select menu`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`9999`}},{name:`placement`,description:`Placement of the menu relative to the toggle`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`},{name:`Placement`}]},defaultValue:{func:!1,value:`'bottom'`}},{name:`appendTo`,description:`Element or selector where to render the floating menu`,required:!1,type:{name:`union`,elements:[{name:`"inline"`},{name:`string`},{name:`RendererElement`},{name:`null`},{name:`undefined`}]}},{name:`shouldFocusToggleOnSelect`,description:`Flag indicating the toggle should be focused after a selection.`,required:!1,type:{name:`boolean`}},{name:`closeOnSelect`,description:`Flag indicating that the select should close when an option is selected.`,required:!1,type:{name:`boolean`}},{name:`shouldFocusFirstItemOnOpen`,tags:{beta:[{description:`Flag indicating the first menu item should be focused after opening the menu.`,title:`beta`}]},required:!1,type:{name:`boolean`}},{name:`scrollOnItemFocus`,description:`Flag indicating that focusing the first menu item on open should scroll it into view.`,required:!1,type:{name:`boolean`}},{name:`focusTimeoutDelay`,description:`Time in ms to wait before focusing the first menu item on open.`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`0`}},{name:`openChangeKeys`,description:`Keys that close the menu, defaults to tab and escape. It is highly recommended to include Escape in the array,
while Tab may be omitted if the menu contains non-menu items that are focusable.`,required:!1,type:{name:`Array`,elements:[{name:`string`}]},defaultValue:{func:!1,value:`() => ['Escape', 'Tab']`}},{name:`onToggleKeydown`,description:`Callback to override the toggle keydown behavior. By default, when the toggle has focus and the menu is open,
pressing the up/down arrow keys will focus a valid non-disabled menu item - the first item for the down arrow key
and last item for the up arrow key. The typeahead variant keeps the focus on the toggle.`,required:!1,type:{name:`TSFunctionType`}},{name:`scrollable`,description:`Indicates if the select menu should be scrollable. Defaults to true with menuHeight or maxMenuHeight.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`menuHeight`,description:`Height of the select menu`,required:!1,type:{name:`string`}},{name:`maxMenuHeight`,description:`Maximum height of the select menu`,required:!1,type:{name:`string`}},{name:`disabled`,description:`Flag indicating the toggle is disabled`,required:!1,type:{name:`boolean`}},{name:`fullHeight`,description:`Flag indicating the toggle is full height`,required:!1,type:{name:`boolean`}},{name:`fullWidth`,description:`Flag indicating the toggle takes up the full width of its parent`,required:!1,type:{name:`boolean`}},{name:`variant`,description:`Variant styles of the menu toggle. With typeahead the toggle arrow keys don't move the focus to the menu.`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"plain"`},{name:`"primary"`},{name:`"plainText"`},{name:`"secondary"`},{name:`"typeahead"`}]}},{name:`label`,description:`Label for the menu toggle`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'Select a value'`}}],events:[{name:`select`,type:{names:[`Event`]},description:`Callback for updating when item selection changes. You can also specify onClick on the SelectOption.`},{name:`update:selected`,type:{names:[`TSConditionalType`]}}],slots:[{name:`default`,description:`Options of the select`},{name:`toggle`,description:`Custom toggle, replacing the default menu toggle. It receives the expanded state, click and keydown handlers.`},{name:`icon`,description:`Icon of the default menu toggle`},{name:`label`,description:`Label of the default menu toggle, replacing the label prop`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Select/Select.vue`]}}),l(m,{name:`PfMenuGroup`,doc:{name:`PfMenuGroup`,exportName:`PfSelectGroup`,displayName:`MenuGroup`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`label`,description:`Group label`,required:!1,type:{name:`string`}},{name:`titleId`,description:`ID for title label`,required:!1,type:{name:`string`}},{name:`labelHeadingLevel`,description:`Group label heading level. Default is h1.`,required:!1,type:{name:`union`,elements:[{name:`"h1"`},{name:`"h2"`},{name:`"h3"`},{name:`"h4"`},{name:`"h5"`},{name:`"h6"`}]},defaultValue:{func:!1,value:`'h1'`}}],events:[],slots:[{name:`label`},{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuGroup.vue`]}}),l(m,{name:`PfMenuList`,doc:{name:`PfMenuList`,exportName:`PfSelectList`,displayName:`MenuList`,description:``,tags:{},expose:[{name:`el`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`ariaMultiselectable`,description:`Indicates to assistive technologies whether more than one item can be selected
for a non-checkbox menu. Only applies when the menu's role is "listbox".`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuList.vue`]}}),l(m,{name:`PfMenuItem`,doc:{name:`PfMenuItem`,exportName:`PfSelectOption`,displayName:`MenuItem`,description:``,tags:{},expose:[{name:`focus`},{name:`focused`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`name`,description:`Name of a hidden input submitting the item value with a form`,required:!1,type:{name:`string`}},{name:`value`,description:`Identifies the item in the menu select event`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`number`}]}},{name:`to`,description:`Target navigation link`,required:!1,type:{name:`string`}},{name:`check`,tags:{beta:[{description:`Flag indicating the item has a checkbox`,title:`beta`}]},required:!1,type:{name:`boolean`}},{name:`checkName`,tags:{beta:[{description:`Name of the checkbox`,title:`beta`}]},required:!1,type:{name:`string`}},{name:`active`,description:`Flag indicating whether the item is active`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`loadButton`,description:`Flag indicating if the item causes a load`,required:!1,type:{name:`boolean`}},{name:`loading`,description:`Flag indicating a loading state`,required:!1,type:{name:`boolean`}},{name:`component`,description:`Component used to render the menu item`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'button'`}},{name:`componentAttrs`,description:`Additional attrs added to the link component`,required:!1,type:{name:`union`,elements:[{name:`Omit`,elements:[{name:`ButtonHTMLAttributes`},{name:`union`,elements:[{name:`"href"`},{name:`"aria-current"`},{name:`"disabled"`},{name:`"role"`},{name:`"for"`},{name:`"aria-disabled"`},{name:`"aria-expanded"`},{name:`"type"`},{name:`"download"`},{name:`"onClick"`}]}]},{name:`Omit`,elements:[{name:`AnchorHTMLAttributes`},{name:`union`,elements:[{name:`"href"`},{name:`"aria-current"`},{name:`"disabled"`},{name:`"role"`},{name:`"for"`},{name:`"aria-disabled"`},{name:`"aria-expanded"`},{name:`"type"`},{name:`"download"`},{name:`"onClick"`},{name:`"target"`},{name:`"referrerpolicy"`}]}]}]}},{name:`disabled`,description:`Render item as disabled option`,required:!1,type:{name:`boolean`}},{name:`ariaDisabled`,description:`Render item as aria-disabled option: it stays focusable but cannot be selected`,required:!1,type:{name:`boolean`}},{name:`tooltip`,description:"Content of a tooltip shown on the item. The `tooltip` slot can be used for rich content.",required:!1,type:{name:`string`}},{name:`tooltipAttrs`,description:"Additional attrs passed to the tooltip, such as its `position`",required:!1,type:{name:`Omit`,elements:[{name:`ComponentProps`,elements:[{name:`TSTypeQuery`}]},{name:`"content"`}]}},{name:`description`,description:`Description of the menu item`,required:!1,type:{name:`string`}},{name:`externalLink`,description:`Render external link icon`,required:!1,type:{name:`boolean`}},{name:`selected`,description:`Flag indicating if the option is selected`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`focused`,description:`Flag indicating the item is focused`,required:!1,type:{name:`boolean`}},{name:`danger`,description:`Flag indicating the item is in danger state`,required:!1,type:{name:`boolean`}},{name:`direction`,tags:{beta:[{description:`Sub menu direction`,title:`beta`}]},required:!1,type:{name:`union`,elements:[{name:`"down"`},{name:`"up"`}]}},{name:`onPath`,tags:{beta:[{description:`True if item is on current selection path`,title:`beta`}]},required:!1,type:{name:`boolean`}},{name:`download`,description:`Navigation link download. Only set when the to property is present.`,required:!1,type:{name:`string`}},{name:`target`,description:`Navigation link target.`,required:!1,type:{name:`string`}},{name:`referrerpolicy`,description:`Navigation link referrerpolicy.`,required:!1,type:{name:`TSIndexedAccessType`}}],events:[{name:`click`,type:{names:[`Event`]},description:`Callback for item click`},{name:`showFlyout`,type:{names:[`Event`]},tags:[{title:`beta`,content:`Callback function when mouse leaves trigger`}]},{name:`update:favorited`,type:{names:[`boolean`]}}],slots:[{name:`tooltip`,description:`Content of a tooltip shown on the item`},{name:`icon`},{name:`default`},{name:`description`},{name:`flyout-menu`},{name:`drilldown-menu`},{name:`actions`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuItem.vue`]}})]),default:t(()=>[c[55]||=a(`div`,{class:`markdown pf-v6-c-content`},[a(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),a(`ul`,null,[a(`li`,null,[f(`A default menu toggle is included: its text is the `),a(`code`,null,`label`),f(` prop or slot, its icon the `),a(`code`,null,`icon`),f(` slot, and `),a(`code`,null,`disabled`),f(`, `),a(`code`,null,`variant`),f(`, `),a(`code`,null,`full-width`),f(` and `),a(`code`,null,`full-height`),f(` are passed to it. The `),a(`code`,null,`toggle`),f(` slot replaces it with a custom toggle, which receives the expanded state, the click and the keydown handlers (`),a(`code`,null,`toggle`),f(`).`)]),a(`li`,null,[f(`The open state is bound with `),a(`code`,null,`v-model:open`),f(` (`),a(`code`,null,`isOpen`),f(`, `),a(`code`,null,`onOpenChange`),f(`) and the selection with `),a(`code`,null,`v-model:selected`),f(` (`),a(`code`,null,`selected`),f(`).`)]),a(`li`,null,[a(`code`,null,`close-on-select`),f(` closes the menu on select, like `),a(`code`,null,`pf-dropdown`),f(`.`)]),a(`li`,null,[a(`code`,null,`popperProps`),f(` are the `),a(`code`,null,`placement`),f(`, `),a(`code`,null,`append-to`),f(` and `),a(`code`,null,`z-index`),f(` props, `),a(`code`,null,`min-width`),f(` sets the minimum width of the menu.`)]),a(`li`,null,[a(`code`,null,`shouldPreventScrollOnItemFocus`),f(` is inverted into `),a(`code`,null,`scroll-on-item-focus`),f(`; `),a(`code`,null,`onOpenChangeKeys`),f(` is `),a(`code`,null,`open-change-keys`),f(`.`)]),a(`li`,null,[a(`code`,null,`variant="typeahead"`),f(` is the variant of the default toggle too.`)]),a(`li`,null,[a(`code`,null,`pf-select-option`),f(` is `),a(`code`,null,`pf-menu-item`),f(`: `),a(`code`,null,`has-checkbox`),f(` is `),a(`code`,null,`check`),f(`, `),a(`code`,null,`is-selected`),f(` is `),a(`code`,null,`selected`),f(`. See `),a(`a`,{href:`#/`},`common differences from patternfly-react`),f(`.`)])]),a(`h2`,{class:`pf-v6-c-title`},`Examples`),a(`p`,null,[f(`Select builds off of the menu component suite to adapt commonly used properties and functions to create a select menu. See the `),a(`a`,{href:`#/stories/components/menu`},`menu documentation`),f(` for a full list of properties that may be used to further customize a select menu.`)])],-1),l(P,{title:`Single select`,source:`<pf-checkbox id="toggle-disabled" v-model="disabled" label="disabled" style="margin-bottom: 20px" />
<pf-select
  id="single-select"
  v-model:open="single.open"
  v-model:selected="single.selected"
  :label="single.selected ?? 'Select a value'"
  :disabled="disabled"
  should-focus-toggle-on-select
  close-on-select
>
  <pf-select-list>
    <pf-select-option value="Option 1">Option 1</pf-select-option>
    <pf-select-option value="Option 2">Option 2</pf-select-option>
    <pf-select-option value="Option 3">Option 3</pf-select-option>
  </pf-select-list>
</pf-select>`},{intro:t(()=>[...c[16]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,`To let users select a single item from a list, use a single select menu.`),a(`p`,null,[f(`You can add multiple `),a(`code`,null,`pf-select-option`),f(` components to build out a list of menu items. For each select option, pass a relevant option label to the `),a(`code`,null,`value`),f(` property.`)]),a(`p`,null,[f(`To disable the select menu toggle, use the `),a(`code`,null,`disabled`),f(` property. In the following example, select the checkbox to observe this behavior.`)])],-1)]]),default:t(()=>[l(h,{id:`toggle-disabled`,modelValue:b.value,"onUpdate:modelValue":c[0]||=e=>b.value=e,label:`disabled`,style:{"margin-bottom":`20px`}},null,8,[`modelValue`]),l(N,{id:`single-select`,open:x.open,"onUpdate:open":c[1]||=e=>x.open=e,selected:x.selected,"onUpdate:selected":c[2]||=e=>x.selected=e,label:x.selected??`Select a value`,disabled:b.value,"should-focus-toggle-on-select":``,"close-on-select":``},{default:t(()=>[l(M,null,{default:t(()=>[l(g,{value:`Option 1`},{default:t(()=>[...c[17]||=[f(`Option 1`,-1)]]),_:1}),l(g,{value:`Option 2`},{default:t(()=>[...c[18]||=[f(`Option 2`,-1)]]),_:1}),l(g,{value:`Option 3`},{default:t(()=>[...c[19]||=[f(`Option 3`,-1)]]),_:1})]),_:1})]),_:1},8,[`open`,`selected`,`label`,`disabled`])]),_:1}),l(P,{title:`Select option variants`,source:`<pf-select
  id="option-variations-select"
  v-model:open="variations.open"
  v-model:selected="variations.selected"
  :label="variations.selected ?? 'Select a value'"
  should-focus-toggle-on-select
  close-on-select
>
  <pf-select-list>
    <pf-select-option value="Basic option">Basic option</pf-select-option>
    <pf-select-option value="Option with description" description="This is a description">
      Option with description
    </pf-select-option>
    <pf-select-option to="#" value="Option with link" external-link @click.prevent>
      Option with link
    </pf-select-option>
    <pf-select-option value="Option with icon">
      <template #icon><bell-icon /></template>
      Option with icon
    </pf-select-option>
    <pf-select-option value="Disabled option" disabled>Disabled option</pf-select-option>
    <pf-select-option value="See Menu for additional variations!">
      See Menu for additional variations!
    </pf-select-option>
  </pf-select-list>
</pf-select>`},{intro:t(()=>[...c[20]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,`The following example showcases different option variants and customizations that are commonly used in a select menu.`),a(`p`,null,[f(`To create these variants, you can pass different properties into a `),a(`code`,null,`pf-select-option`),f(` component.`)]),a(`p`,null,`This example provides examples of:`),a(`ul`,null,[a(`li`,null,[f(`An option with a description, which is created by using the `),a(`code`,null,`description`),f(` property.`)]),a(`li`,null,[f(`An option with a link, which is created by passing a URL into the `),a(`code`,null,`to`),f(` property. For external links, use the `),a(`code`,null,`external-link`),f(` property so that the option is styled with an outbound link icon.`)]),a(`li`,null,[f(`An option with an icon, which is created by using the `),a(`code`,null,`icon`),f(` slot.`)]),a(`li`,null,[f(`An option that is disabled by using the `),a(`code`,null,`disabled`),f(` property.`)])])],-1)]]),default:t(()=>[l(N,{id:`option-variations-select`,open:S.open,"onUpdate:open":c[4]||=e=>S.open=e,selected:S.selected,"onUpdate:selected":c[5]||=e=>S.selected=e,label:S.selected??`Select a value`,"should-focus-toggle-on-select":``,"close-on-select":``},{default:t(()=>[l(M,null,{default:t(()=>[l(g,{value:`Basic option`},{default:t(()=>[...c[21]||=[f(`Basic option`,-1)]]),_:1}),l(g,{value:`Option with description`,description:`This is a description`},{default:t(()=>[...c[22]||=[f(` Option with description `,-1)]]),_:1}),l(g,{to:`#`,value:`Option with link`,"external-link":``,onClick:c[3]||=v(()=>{},[`prevent`])},{default:t(()=>[...c[23]||=[f(` Option with link `,-1)]]),_:1}),l(g,{value:`Option with icon`},{icon:t(()=>[l(s(y))]),default:t(()=>[c[24]||=f(` Option with icon `,-1)]),_:1}),l(g,{value:`Disabled option`,disabled:``},{default:t(()=>[...c[25]||=[f(`Disabled option`,-1)]]),_:1}),l(g,{value:`See Menu for additional variations!`},{default:t(()=>[...c[26]||=[f(` See Menu for additional variations! `,-1)]]),_:1})]),_:1})]),_:1},8,[`open`,`selected`,`label`])]),_:1}),l(P,{title:`With grouped items`,source:`<pf-select
  id="single-grouped-select"
  v-model:open="grouped.open"
  v-model:selected="grouped.selected"
  :label="grouped.selected ?? 'Select a value'"
  should-focus-toggle-on-select
  close-on-select
>
  <pf-select-group label="Group 1">
    <pf-select-list>
      <pf-select-option value="Option 1">Option 1</pf-select-option>
      <pf-select-option value="Option 2">Option 2</pf-select-option>
      <pf-select-option value="Option 3">Option 3</pf-select-option>
    </pf-select-list>
  </pf-select-group>
  <pf-divider />
  <pf-select-group label="Group 2">
    <pf-select-list>
      <pf-select-option value="Option 4">Option 4</pf-select-option>
      <pf-select-option value="Option 5">Option 5</pf-select-option>
      <pf-select-option value="Option 6">Option 6</pf-select-option>
    </pf-select-list>
  </pf-select-group>
</pf-select>`},{intro:t(()=>[...c[27]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,[f(`To group related select options together, use 1 or more `),a(`code`,null,`pf-select-group`),f(` components and title each group using the `),a(`code`,null,`label`),f(` property.`)])],-1)]]),default:t(()=>[l(N,{id:`single-grouped-select`,open:C.open,"onUpdate:open":c[6]||=e=>C.open=e,selected:C.selected,"onUpdate:selected":c[7]||=e=>C.selected=e,label:C.selected??`Select a value`,"should-focus-toggle-on-select":``,"close-on-select":``},{default:t(()=>[l(F,{label:`Group 1`},{default:t(()=>[l(M,null,{default:t(()=>[l(g,{value:`Option 1`},{default:t(()=>[...c[28]||=[f(`Option 1`,-1)]]),_:1}),l(g,{value:`Option 2`},{default:t(()=>[...c[29]||=[f(`Option 2`,-1)]]),_:1}),l(g,{value:`Option 3`},{default:t(()=>[...c[30]||=[f(`Option 3`,-1)]]),_:1})]),_:1})]),_:1}),l(I),l(F,{label:`Group 2`},{default:t(()=>[l(M,null,{default:t(()=>[l(g,{value:`Option 4`},{default:t(()=>[...c[31]||=[f(`Option 4`,-1)]]),_:1}),l(g,{value:`Option 5`},{default:t(()=>[...c[32]||=[f(`Option 5`,-1)]]),_:1}),l(g,{value:`Option 6`},{default:t(()=>[...c[33]||=[f(`Option 6`,-1)]]),_:1})]),_:1})]),_:1})]),_:1},8,[`open`,`selected`,`label`])]),_:1}),l(P,{title:`With validation`,source:`<pf-select
  id="validated-select"
  v-model:open="validated.open"
  v-model:selected="validated.selected"
  should-focus-toggle-on-select
  close-on-select
>
  <template #toggle>
    <pf-menu-toggle style="width: 200px" :status="validatedStatus">
      {{ validated.selected ?? 'Select a value' }}
    </pf-menu-toggle>
  </template>

  <pf-select-list>
    <pf-select-option value="Success">Success</pf-select-option>
    <pf-select-option value="Warning">Warning</pf-select-option>
    <pf-select-option value="Danger">Danger</pf-select-option>
  </pf-select-list>
</pf-select>
<pf-helper-text v-if="validatedStatus === 'warning' || validatedStatus === 'danger'" live-region>
  <pf-helper-text-item :variant="validatedStatus === 'warning' ? 'warning' : 'error'">
    <template v-if="validatedStatus === 'warning'">Warning text that explains the issue.</template>
    <template v-else>Danger text that explains the issue.</template>
  </pf-helper-text-item>
</pf-helper-text>`},{intro:t(()=>[...c[34]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,[f(`To create a toggle with a status, pass in `),a(`code`,null,`status`),f(` to the `),a(`code`,null,`pf-menu-toggle`),f(` of the `),a(`code`,null,`toggle`),f(` slot. The default icon associated with each status may be overridden by using the `),a(`code`,null,`status-icon`),f(` slot.`)]),a(`p`,null,`When the status value is "warning" or "danger", you must include helper text that conveys what is causing the warning/error.`)],-1)]]),default:t(()=>[l(N,{id:`validated-select`,open:T.open,"onUpdate:open":c[8]||=e=>T.open=e,selected:T.selected,"onUpdate:selected":c[9]||=e=>T.selected=e,"should-focus-toggle-on-select":``,"close-on-select":``},{toggle:t(()=>[l(L,{style:{width:`200px`},status:E.value},{default:t(()=>[f(r(T.selected??`Select a value`),1)]),_:1},8,[`status`])]),default:t(()=>[l(M,null,{default:t(()=>[l(g,{value:`Success`},{default:t(()=>[...c[35]||=[f(`Success`,-1)]]),_:1}),l(g,{value:`Warning`},{default:t(()=>[...c[36]||=[f(`Warning`,-1)]]),_:1}),l(g,{value:`Danger`},{default:t(()=>[...c[37]||=[f(`Danger`,-1)]]),_:1})]),_:1})]),_:1},8,[`open`,`selected`]),E.value===`warning`||E.value===`danger`?(u(),d(z,{key:0,"live-region":``},{default:t(()=>[l(R,{variant:E.value===`warning`?`warning`:`error`},{default:t(()=>[E.value===`warning`?(u(),o(p,{key:0},[f(`Warning text that explains the issue.`)],64)):(u(),o(p,{key:1},[f(`Danger text that explains the issue.`)],64))]),_:1},8,[`variant`])]),_:1})):_(``,!0)]),_:1}),l(P,{title:`Checkbox select`,source:`<pf-select id="checkbox-select" v-model:open="checkbox.open" v-model:selected="checkbox.selected" role="menu">
  <template #label>
    Filter by status
    <pf-badge v-if="checkbox.selected.length > 0" read>{{ checkbox.selected.length }}</pf-badge>
  </template>

  <pf-select-list>
    <pf-select-option check :value="0">Debug</pf-select-option>
    <pf-select-option check :value="1">Info</pf-select-option>
    <pf-select-option check :value="2">Warn</pf-select-option>
    <pf-select-option check disabled :value="4">Error</pf-select-option>
  </pf-select-list>
</pf-select>`},{intro:t(()=>[...c[38]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,`To let users select multiple list options via checkbox input, use a checkbox select.`),a(`p`,null,[f(`To create a checkbox select, pass `),a(`code`,null,`role="menu"`),f(` to the `),a(`code`,null,`pf-select`),f(`, and `),a(`code`,null,`check`),f(` into each `),a(`code`,null,`pf-select-option`),f(` component. Bind an array with `),a(`code`,null,`v-model:selected`),f(` to toggle the selected options.`)]),a(`p`,null,`By default, the menu toggle will display a badge to indicate the number of items that a user has selected.`)],-1)]]),default:t(()=>[l(N,{id:`checkbox-select`,open:D.open,"onUpdate:open":c[10]||=e=>D.open=e,selected:D.selected,"onUpdate:selected":c[11]||=e=>D.selected=e,role:`menu`},{label:t(()=>[c[39]||=f(` Filter by status `,-1),D.selected.length>0?(u(),d(B,{key:0,read:``},{default:t(()=>[f(r(D.selected.length),1)]),_:1})):_(``,!0)]),default:t(()=>[l(M,null,{default:t(()=>[l(g,{check:``,value:0},{default:t(()=>[...c[40]||=[f(`Debug`,-1)]]),_:1}),l(g,{check:``,value:1},{default:t(()=>[...c[41]||=[f(`Info`,-1)]]),_:1}),l(g,{check:``,value:2},{default:t(()=>[...c[42]||=[f(`Warn`,-1)]]),_:1}),l(g,{check:``,disabled:``,value:4},{default:t(()=>[...c[43]||=[f(`Error`,-1)]]),_:1})]),_:1})]),_:1},8,[`open`,`selected`])]),_:1}),l(P,{title:`Typeahead`,src:`stories/Components/Select-Typeahead.vue`,source:`<template>
  <pf-select
    id="typeahead-select"
    :open="open"
    :selected="selected"
    variant="typeahead"
    @update:open="onOpenChange"
    @select="onSelect"
  >
    <template #toggle>
      <pf-menu-toggle
        variant="typeahead"
        aria-label="Typeahead menu toggle"
        full-width
        @update:expanded="textInput?.focus()"
      >
        <pf-text-input-group plain>
          <pf-text-input-group-main
            id="typeahead-select-input"
            ref="textInput"
            v-model="inputValue"
            autocomplete="off"
            placeholder="Select a state"
            role="combobox"
            :aria-expanded="open"
            :aria-activedescendant="activeItemId"
            aria-controls="select-typeahead-listbox"
            @update:model-value="onTextInputChange"
            @click="onInputClick"
            @keydown="onInputKeyDown"
          />
          <pf-text-input-group-utilities v-show="inputValue">
            <pf-button variant="plain" aria-label="Clear input value" @click="onClearButtonClick">
              <template #icon><xmark-icon /></template>
            </pf-button>
          </pf-text-input-group-utilities>
        </pf-text-input-group>
      </pf-menu-toggle>
    </template>

    <pf-select-list id="select-typeahead-listbox">
      <pf-select-option
        v-for="(option, index) in selectOptions"
        :id="createItemId(option.value)"
        :key="option.value"
        :value="option.value"
        :focused="focusedItemIndex === index"
        :aria-disabled="option.ariaDisabled"
      >
        {{ option.label }}
      </pf-select-option>
    </pf-select-list>
  </pf-select>
</template>

<script lang="ts" setup>
import { computed, ref, useTemplateRef } from 'vue';
import XmarkIcon from '@vue-patternfly/icons/xmark-icon';
import type { MenuItemId } from '@vue-patternfly/core/components/Menu/Menu.vue';

type Option = { value: string; label: string; ariaDisabled?: boolean };

const initialSelectOptions: Option[] = [
  { value: 'Alabama', label: 'Alabama' },
  { value: 'Florida', label: 'Florida' },
  { value: 'New Jersey', label: 'New Jersey' },
  { value: 'New Mexico', label: 'New Mexico' },
  { value: 'New York', label: 'New York' },
  { value: 'North Carolina', label: 'North Carolina' },
];

const NO_RESULTS = 'no results';

const open = ref(false);
const selected = ref('');
const inputValue = ref('');
const filterValue = ref('');
const focusedItemIndex = ref<number | null>(null);
const activeItemId = ref<string>();
const textInput = useTemplateRef('textInput');

// Filter menu items based on the text input value when one exists
const selectOptions = computed((): Option[] => {
  if (!filterValue.value) {
    return initialSelectOptions;
  }
  const options = initialSelectOptions.filter(option =>
    option.label.toLowerCase().includes(filterValue.value.toLowerCase()),
  );
  // When no options are found after filtering, display 'No results found'
  return options.length
    ? options
    : [{ ariaDisabled: true, label: \`No results found for "\${filterValue.value}"\`, value: NO_RESULTS }];
});

const createItemId = (value: string) => \`select-typeahead-\${value.replace(' ', '-')}\`;

function setActiveAndFocusedItem(itemIndex: number) {
  focusedItemIndex.value = itemIndex;
  activeItemId.value = createItemId(selectOptions.value[itemIndex]!.value);
}

function resetActiveAndFocusedItem() {
  focusedItemIndex.value = null;
  activeItemId.value = undefined;
}

function closeMenu() {
  open.value = false;
  resetActiveAndFocusedItem();
}

function onOpenChange(isOpen: boolean) {
  if (isOpen) {
    open.value = true;
  } else {
    closeMenu();
  }
}

function onInputClick() {
  if (!open.value) {
    open.value = true;
  } else if (!inputValue.value) {
    closeMenu();
  }
}

function selectOption(value: string, content: string) {
  // eslint-disable-next-line no-console
  console.log('selected', content);

  inputValue.value = content;
  filterValue.value = '';
  selected.value = value;
  closeMenu();
}

function onSelect(_event: Event, value?: MenuItemId | null) {
  if (typeof value === 'string' && value && value !== NO_RESULTS) {
    const optionText = selectOptions.value.find(option => option.value === value)?.label;
    selectOption(value, optionText ?? value);
  }
}

function onTextInputChange(value: string) {
  filterValue.value = value;
  resetActiveAndFocusedItem();

  if (value !== selected.value) {
    selected.value = '';
  }

  // Open the menu when the input value changes and the new value is not empty
  if (value && !open.value) {
    open.value = true;
  }
}

function handleMenuArrowKeys(key: string) {
  const options = selectOptions.value;
  let indexToFocus = 0;

  if (!open.value) {
    open.value = true;
  }

  if (options.every(option => option.ariaDisabled)) {
    return;
  }

  if (key === 'ArrowUp') {
    // When no index is set or at the first index, focus to the last, otherwise decrement focus index
    indexToFocus =
      focusedItemIndex.value === null || focusedItemIndex.value === 0 ? options.length - 1 : focusedItemIndex.value - 1;
  }

  if (key === 'ArrowDown') {
    // When no index is set or at the last index, focus to the first, otherwise increment focus index
    indexToFocus =
      focusedItemIndex.value === null || focusedItemIndex.value === options.length - 1 ? 0 : focusedItemIndex.value + 1;
  }

  setActiveAndFocusedItem(indexToFocus);
}

function onInputKeyDown(event: KeyboardEvent) {
  const focusedItem = focusedItemIndex.value !== null ? selectOptions.value[focusedItemIndex.value] : null;

  // like upstream, reopen only a menu that was closed before the selection
  const wasOpen = open.value;

  switch (event.key) {
    case 'Enter':
      if (wasOpen && focusedItem && focusedItem.value !== NO_RESULTS && !focusedItem.ariaDisabled) {
        selectOption(focusedItem.value, focusedItem.label);
      }

      if (!wasOpen) {
        open.value = true;
      }
      break;
    case 'ArrowUp':
    case 'ArrowDown':
      event.preventDefault();
      handleMenuArrowKeys(event.key);
      break;
  }
}

function onClearButtonClick() {
  selected.value = '';
  inputValue.value = '';
  filterValue.value = '';
  resetActiveAndFocusedItem();
  textInput.value?.focus();
}
<\/script>`},{intro:t(()=>[...c[44]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,`Typeahead is a select variant that replaces the typical button toggle for opening the select menu with a text input and button toggle combo. As a user enters characters into the text input, the menu options will be filtered to match.`),a(`p`,null,[f(`To make a typeahead, pass `),a(`code`,null,`variant="typeahead"`),f(` into the `),a(`code`,null,`pf-select`),f(` and put a `),a(`code`,null,`pf-text-input-group`),f(` in the `),a(`code`,null,`label`),f(` slot of its toggle.`)])],-1)]]),_:1}),l(P,{title:`Typeahead with create option`,src:`stories/Components/Select-TypeaheadCreatable.vue`,source:`<template>
  <pf-select
    id="create-typeahead-select"
    :open="open"
    :selected="selected"
    variant="typeahead"
    @update:open="onOpenChange"
    @select="onSelect"
  >
    <template #toggle>
      <pf-menu-toggle
        variant="typeahead"
        aria-label="Typeahead creatable menu toggle"
        full-width
        @update:expanded="textInput?.focus()"
      >
        <pf-text-input-group plain>
          <pf-text-input-group-main
            id="create-typeahead-select-input"
            ref="textInput"
            v-model="inputValue"
            autocomplete="off"
            placeholder="Select a state"
            role="combobox"
            :aria-expanded="open"
            :aria-activedescendant="activeItemId"
            aria-controls="select-create-typeahead-listbox"
            @update:model-value="onTextInputChange"
            @click="onInputClick"
            @keydown="onInputKeyDown"
          />
          <pf-text-input-group-utilities v-show="inputValue">
            <pf-button variant="plain" aria-label="Clear input value" @click="onClearButtonClick">
              <template #icon><xmark-icon /></template>
            </pf-button>
          </pf-text-input-group-utilities>
        </pf-text-input-group>
      </pf-menu-toggle>
    </template>

    <pf-select-list id="select-create-typeahead-listbox">
      <pf-select-option
        v-for="(option, index) in selectOptions"
        :id="createItemId(option.value)"
        :key="option.value"
        :value="option.value"
        :focused="focusedItemIndex === index"
        :aria-disabled="option.ariaDisabled"
      >
        {{ option.label }}
      </pf-select-option>
    </pf-select-list>
  </pf-select>
</template>

<script lang="ts" setup>
import { computed, ref, useTemplateRef } from 'vue';
import XmarkIcon from '@vue-patternfly/icons/xmark-icon';
import type { MenuItemId } from '@vue-patternfly/core/components/Menu/Menu.vue';

type Option = { value: string; label: string; ariaDisabled?: boolean };

let initialSelectOptions: Option[] = [
  { value: 'Alabama', label: 'Alabama' },
  { value: 'Florida', label: 'Florida' },
  { value: 'New Jersey', label: 'New Jersey' },
  { value: 'New Mexico', label: 'New Mexico' },
  { value: 'New York', label: 'New York' },
  { value: 'North Carolina', label: 'North Carolina' },
];

const CREATE_NEW = 'create';

const open = ref(false);
const selected = ref('');
const inputValue = ref('');
const filterValue = ref('');
const focusedItemIndex = ref<number | null>(null);
const activeItemId = ref<string>();
const textInput = useTemplateRef('textInput');

// Filter menu items based on the text input value when one exists
const selectOptions = computed((): Option[] => {
  if (!filterValue.value) {
    return initialSelectOptions;
  }
  const options = initialSelectOptions.filter(option =>
    option.label.toLowerCase().includes(filterValue.value.toLowerCase()),
  );
  // If no option matches the filter exactly, display creation option
  if (!initialSelectOptions.some(option => option.value === filterValue.value)) {
    options.push({ label: \`Create new option "\${filterValue.value}"\`, value: CREATE_NEW });
  }
  return options;
});

const createItemId = (value: string) => \`select-create-typeahead-\${value.replace(' ', '-')}\`;

function setActiveAndFocusedItem(itemIndex: number) {
  focusedItemIndex.value = itemIndex;
  activeItemId.value = createItemId(selectOptions.value[itemIndex]!.value);
}

function resetActiveAndFocusedItem() {
  focusedItemIndex.value = null;
  activeItemId.value = undefined;
}

function closeMenu() {
  open.value = false;
  resetActiveAndFocusedItem();
}

function onOpenChange(isOpen: boolean) {
  if (isOpen) {
    open.value = true;
  } else {
    closeMenu();
  }
}

function onInputClick() {
  if (!open.value) {
    open.value = true;
  } else if (!inputValue.value) {
    closeMenu();
  }
}

function selectOption(value: string, content: string) {
  // eslint-disable-next-line no-console
  console.log('selected', content);

  inputValue.value = content;
  filterValue.value = '';
  selected.value = value;
  closeMenu();
}

function onSelect(_event: Event | undefined, value?: MenuItemId | null) {
  if (typeof value !== 'string' || !value) {
    return;
  }
  if (value === CREATE_NEW) {
    if (!initialSelectOptions.some(item => item.label === filterValue.value)) {
      initialSelectOptions = [...initialSelectOptions, { value: filterValue.value, label: filterValue.value }];
    }
    selected.value = filterValue.value;
    filterValue.value = '';
    closeMenu();
  } else {
    const optionText = selectOptions.value.find(option => option.value === value)?.label;
    selectOption(value, optionText ?? value);
  }
}

function onTextInputChange(value: string) {
  filterValue.value = value;
  resetActiveAndFocusedItem();

  if (value !== selected.value) {
    selected.value = '';
  }

  // Open the menu when the input value changes and the new value is not empty
  if (value && !open.value) {
    open.value = true;
  }
}

function handleMenuArrowKeys(key: string) {
  const options = selectOptions.value;
  let indexToFocus = 0;

  if (!open.value) {
    open.value = true;
  }

  if (options.every(option => option.ariaDisabled)) {
    return;
  }

  if (key === 'ArrowUp') {
    // When no index is set or at the first index, focus to the last, otherwise decrement focus index
    indexToFocus =
      focusedItemIndex.value === null || focusedItemIndex.value === 0 ? options.length - 1 : focusedItemIndex.value - 1;
  }

  if (key === 'ArrowDown') {
    // When no index is set or at the last index, focus to the first, otherwise increment focus index
    indexToFocus =
      focusedItemIndex.value === null || focusedItemIndex.value === options.length - 1 ? 0 : focusedItemIndex.value + 1;
  }

  setActiveAndFocusedItem(indexToFocus);
}

function onInputKeyDown(event: KeyboardEvent) {
  const focusedItem = focusedItemIndex.value !== null ? selectOptions.value[focusedItemIndex.value] : null;

  // like upstream, reopen only a menu that was closed before the selection
  const wasOpen = open.value;

  switch (event.key) {
    case 'Enter':
      if (wasOpen && focusedItem && !focusedItem.ariaDisabled) {
        onSelect(undefined, focusedItem.value);
      }

      if (!wasOpen) {
        open.value = true;
      }
      break;
    case 'ArrowUp':
    case 'ArrowDown':
      event.preventDefault();
      handleMenuArrowKeys(event.key);
      break;
  }
}

function onClearButtonClick() {
  selected.value = '';
  inputValue.value = '';
  filterValue.value = '';
  resetActiveAndFocusedItem();
  textInput.value?.focus();
}
<\/script>`},{intro:t(()=>[...c[45]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,`If a user enters a value into a typeahead select menu that does not exist, you can allow them to create an option of that value.`),a(`p`,null,[f(`To enable the creation ability, pass a predetermined `),a(`code`,null,`value`),f(` into a `),a(`code`,null,`pf-select-option`),f(` component. You can use the `),a(`code`,null,`placeholder`),f(` property to change the default text shown in the text input.`)])],-1)]]),_:1}),l(P,{title:`Multiple typeahead with labels`,src:`stories/Components/Select-MultiTypeahead.vue`,source:`<template>
  <pf-select
    id="multi-typeahead-select"
    :open="open"
    :selected="selected"
    variant="typeahead"
    @update:open="onOpenChange"
    @select="(_event, value) => onSelect(value)"
  >
    <template #toggle>
      <pf-menu-toggle
        variant="typeahead"
        aria-label="Multi typeahead menu toggle"
        full-width
        @update:expanded="textInput?.focus()"
      >
        <pf-text-input-group plain>
          <pf-text-input-group-main
            id="multi-typeahead-select-input"
            ref="textInput"
            v-model="inputValue"
            autocomplete="off"
            placeholder="Select a state"
            role="combobox"
            :aria-expanded="open"
            :aria-activedescendant="activeItemId"
            aria-controls="select-multi-typeahead-listbox"
            @update:model-value="onTextInputChange"
            @click="onInputClick"
            @keydown="onInputKeyDown"
          >
            <pf-label-group aria-label="Current selections">
              <pf-label v-for="selection in selected" :key="selection" outline @close.stop="onSelect(selection)">
                {{ selection }}
              </pf-label>
            </pf-label-group>
          </pf-text-input-group-main>
          <pf-text-input-group-utilities v-show="selected.length > 0">
            <pf-button variant="plain" aria-label="Clear input value" @click="onClearButtonClick">
              <template #icon><xmark-icon /></template>
            </pf-button>
          </pf-text-input-group-utilities>
        </pf-text-input-group>
      </pf-menu-toggle>
    </template>

    <pf-select-list id="select-multi-typeahead-listbox" aria-multiselectable>
      <pf-select-option
        v-for="(option, index) in selectOptions"
        :id="createItemId(option.value)"
        :key="option.value"
        :value="option.value"
        :focused="focusedItemIndex === index"
        :aria-disabled="option.ariaDisabled"
      >
        {{ option.label }}
      </pf-select-option>
    </pf-select-list>
  </pf-select>
</template>

<script lang="ts" setup>
import { computed, ref, useTemplateRef } from 'vue';
import XmarkIcon from '@vue-patternfly/icons/xmark-icon';
import type { MenuItemId } from '@vue-patternfly/core/components/Menu/Menu.vue';

type Option = { value: string; label: string; ariaDisabled?: boolean };

const initialSelectOptions: Option[] = [
  { value: 'Alabama', label: 'Alabama' },
  { value: 'Florida', label: 'Florida' },
  { value: 'New Jersey', label: 'New Jersey' },
  { value: 'New Mexico', label: 'New Mexico' },
  { value: 'New York', label: 'New York' },
  { value: 'North Carolina', label: 'North Carolina' },
];

const NO_RESULTS = 'no results';

const open = ref(false);
const inputValue = ref('');
const selected = ref<string[]>([]);
const focusedItemIndex = ref<number | null>(null);
const activeItemId = ref<string>();
const textInput = useTemplateRef('textInput');

// Filter menu items based on the text input value when one exists
const selectOptions = computed((): Option[] => {
  if (!inputValue.value) {
    return initialSelectOptions;
  }
  const options = initialSelectOptions.filter(option =>
    option.label.toLowerCase().includes(inputValue.value.toLowerCase()),
  );
  // When no options are found after filtering, display 'No results found'
  return options.length
    ? options
    : [{ ariaDisabled: true, label: \`No results found for "\${inputValue.value}"\`, value: NO_RESULTS }];
});

const createItemId = (value: string) => \`select-multi-typeahead-\${value.replace(' ', '-')}\`;

function setActiveAndFocusedItem(itemIndex: number) {
  focusedItemIndex.value = itemIndex;
  activeItemId.value = createItemId(selectOptions.value[itemIndex]!.value);
}

function resetActiveAndFocusedItem() {
  focusedItemIndex.value = null;
  activeItemId.value = undefined;
}

function closeMenu() {
  open.value = false;
  resetActiveAndFocusedItem();
}

function onOpenChange(isOpen: boolean) {
  if (isOpen) {
    open.value = true;
  } else {
    closeMenu();
  }
}

function onInputClick() {
  if (!open.value) {
    open.value = true;
  } else if (!inputValue.value) {
    closeMenu();
  }
}

function onSelect(value?: MenuItemId | null) {
  if (typeof value === 'string' && value && value !== NO_RESULTS) {
    // eslint-disable-next-line no-console
    console.log('selected', value);

    selected.value = selected.value.includes(value)
      ? selected.value.filter(selection => selection !== value)
      : [...selected.value, value];
  }

  textInput.value?.focus();
}

function onTextInputChange(value: string) {
  resetActiveAndFocusedItem();

  // Open the menu when the input value changes and the new value is not empty
  if (value && !open.value) {
    open.value = true;
  }
}

function handleMenuArrowKeys(key: string) {
  const options = selectOptions.value;
  let indexToFocus = 0;

  if (!open.value) {
    open.value = true;
  }

  if (options.every(option => option.ariaDisabled)) {
    return;
  }

  if (key === 'ArrowUp') {
    // When no index is set or at the first index, focus to the last, otherwise decrement focus index
    indexToFocus =
      focusedItemIndex.value === null || focusedItemIndex.value === 0 ? options.length - 1 : focusedItemIndex.value - 1;
  }

  if (key === 'ArrowDown') {
    // When no index is set or at the last index, focus to the first, otherwise increment focus index
    indexToFocus =
      focusedItemIndex.value === null || focusedItemIndex.value === options.length - 1 ? 0 : focusedItemIndex.value + 1;
  }

  setActiveAndFocusedItem(indexToFocus);
}

function onInputKeyDown(event: KeyboardEvent) {
  const focusedItem = focusedItemIndex.value !== null ? selectOptions.value[focusedItemIndex.value] : null;

  // like upstream, reopen only a menu that was closed before the selection
  const wasOpen = open.value;

  switch (event.key) {
    case 'Enter':
      if (wasOpen && focusedItem && focusedItem.value !== NO_RESULTS && !focusedItem.ariaDisabled) {
        onSelect(focusedItem.value);
      }

      if (!wasOpen) {
        open.value = true;
      }
      break;
    case 'ArrowUp':
    case 'ArrowDown':
      event.preventDefault();
      handleMenuArrowKeys(event.key);
      break;
  }
}

function onClearButtonClick() {
  selected.value = [];
  inputValue.value = '';
  resetActiveAndFocusedItem();
  textInput.value?.focus();
}
<\/script>`},{intro:t(()=>[...c[46]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,`A multiple typeahead can be used to allow users to select multiple options from a list. Additionally, you can render a label group to be placed in the select toggle.`),a(`p`,null,`When more items than the allowed limit are selected, overflowing items will be hidden under a "more" button. The following example hides items after more than 3 are selected. To show hidden items, select the “more” button. Select "show less" to hide extra items again.`)],-1)]]),_:1}),l(P,{title:`Multiple typeahead with create option`,src:`stories/Components/Select-MultiTypeaheadCreatable.vue`,source:`<template>
  <pf-select
    id="multi-create-typeahead-select"
    :open="open"
    :selected="selected"
    variant="typeahead"
    @update:open="onOpenChange"
    @select="(_event, value) => onSelect(value)"
  >
    <template #toggle>
      <pf-menu-toggle
        variant="typeahead"
        aria-label="Multi typeahead creatable menu toggle"
        full-width
        @update:expanded="textInput?.focus()"
      >
        <pf-text-input-group plain>
          <pf-text-input-group-main
            id="multi-create-typeahead-select-input"
            ref="textInput"
            v-model="inputValue"
            autocomplete="off"
            placeholder="Select a state"
            role="combobox"
            :aria-expanded="open"
            :aria-activedescendant="activeItemId"
            aria-controls="select-multi-create-typeahead-listbox"
            @update:model-value="onTextInputChange"
            @click="onInputClick"
            @keydown="onInputKeyDown"
          >
            <pf-label-group aria-label="Current selections">
              <pf-label v-for="selection in selected" :key="selection" outline @close.stop="onSelect(selection)">
                {{ getLabel(selection) }}
              </pf-label>
            </pf-label-group>
          </pf-text-input-group-main>
          <pf-text-input-group-utilities v-show="selected.length > 0">
            <pf-button variant="plain" aria-label="Clear input value" @click="onClearButtonClick">
              <template #icon><xmark-icon /></template>
            </pf-button>
          </pf-text-input-group-utilities>
        </pf-text-input-group>
      </pf-menu-toggle>
    </template>

    <pf-select-list id="select-multi-create-typeahead-listbox" aria-multiselectable>
      <pf-select-option
        v-for="(option, index) in selectOptions"
        :id="createItemId(option.value)"
        :key="option.value"
        :value="option.value"
        :focused="focusedItemIndex === index"
        :aria-disabled="option.ariaDisabled"
      >
        {{ option.label }}
      </pf-select-option>
    </pf-select-list>
  </pf-select>
</template>

<script lang="ts" setup>
import { computed, ref, useTemplateRef } from 'vue';
import XmarkIcon from '@vue-patternfly/icons/xmark-icon';
import type { MenuItemId } from '@vue-patternfly/core/components/Menu/Menu.vue';

type Option = { value: string; label: string; ariaDisabled?: boolean };

let initialSelectOptions: Option[] = [
  { value: 'Alabama', label: 'Alabama' },
  { value: 'Florida', label: 'Florida' },
  { value: 'New Jersey', label: 'New Jersey' },
  { value: 'New Mexico', label: 'New Mexico' },
  { value: 'New York', label: 'New York' },
  { value: 'North Carolina', label: 'North Carolina' },
];

const CREATE_NEW = 'create';

const open = ref(false);
const inputValue = ref('');
const selected = ref<string[]>([]);
const focusedItemIndex = ref<number | null>(null);
const activeItemId = ref<string>();
// toggled to refresh the filtered options after a new option is created
const onCreation = ref(false);
const textInput = useTemplateRef('textInput');

// Filter menu items based on the text input value when one exists
const selectOptions = computed((): Option[] => {
  void onCreation.value;
  if (!inputValue.value) {
    return initialSelectOptions;
  }
  const options = initialSelectOptions.filter(option =>
    option.label.toLowerCase().includes(inputValue.value.toLowerCase()),
  );
  // If no option matches the filter exactly, display creation option
  if (!initialSelectOptions.some(option => option.value === inputValue.value)) {
    options.push({ label: \`Create new option "\${inputValue.value}"\`, value: CREATE_NEW });
  }
  return options;
});

const getLabel = (value: string) => initialSelectOptions.find(option => option.value === value)?.label;

const createItemId = (value: string) => \`select-multi-create-typeahead-\${value.replace(' ', '-')}\`;

function setActiveAndFocusedItem(itemIndex: number) {
  focusedItemIndex.value = itemIndex;
  activeItemId.value = createItemId(selectOptions.value[itemIndex]!.value);
}

function resetActiveAndFocusedItem() {
  focusedItemIndex.value = null;
  activeItemId.value = undefined;
}

function closeMenu() {
  open.value = false;
  resetActiveAndFocusedItem();
}

function onOpenChange(isOpen: boolean) {
  if (isOpen) {
    open.value = true;
  } else {
    closeMenu();
  }
}

function onInputClick() {
  if (!open.value) {
    open.value = true;
  } else if (!inputValue.value) {
    closeMenu();
  }
}

function onSelect(value?: MenuItemId | null) {
  if (typeof value === 'string' && value) {
    if (value === CREATE_NEW) {
      const newValue = inputValue.value;
      if (!initialSelectOptions.some(item => item.value === newValue)) {
        initialSelectOptions = [...initialSelectOptions, { value: newValue, label: newValue }];
      }
      selected.value = selected.value.includes(newValue)
        ? selected.value.filter(selection => selection !== newValue)
        : [...selected.value, newValue];
      onCreation.value = !onCreation.value;
      resetActiveAndFocusedItem();
    } else {
      // eslint-disable-next-line no-console
      console.log('selected', value);
      selected.value = selected.value.includes(value)
        ? selected.value.filter(selection => selection !== value)
        : [...selected.value, value];
    }
  }

  textInput.value?.focus();
}

function onTextInputChange(value: string) {
  resetActiveAndFocusedItem();

  // Open the menu when the input value changes and the new value is not empty
  if (value && !open.value) {
    open.value = true;
  }
}

function handleMenuArrowKeys(key: string) {
  const options = selectOptions.value;
  let indexToFocus = 0;

  if (!open.value) {
    open.value = true;
  }

  if (options.every(option => option.ariaDisabled)) {
    return;
  }

  if (key === 'ArrowUp') {
    // When no index is set or at the first index, focus to the last, otherwise decrement focus index
    indexToFocus =
      focusedItemIndex.value === null || focusedItemIndex.value === 0 ? options.length - 1 : focusedItemIndex.value - 1;
  }

  if (key === 'ArrowDown') {
    // When no index is set or at the last index, focus to the first, otherwise increment focus index
    indexToFocus =
      focusedItemIndex.value === null || focusedItemIndex.value === options.length - 1 ? 0 : focusedItemIndex.value + 1;
  }

  setActiveAndFocusedItem(indexToFocus);
}

function onInputKeyDown(event: KeyboardEvent) {
  const focusedItem = focusedItemIndex.value !== null ? selectOptions.value[focusedItemIndex.value] : null;

  // like upstream, reopen only a menu that was closed before the selection
  const wasOpen = open.value;

  switch (event.key) {
    case 'Enter':
      if (wasOpen && focusedItem && !focusedItem.ariaDisabled) {
        onSelect(focusedItem.value);
      }

      if (!wasOpen) {
        open.value = true;
      }
      break;
    case 'ArrowUp':
    case 'ArrowDown':
      event.preventDefault();
      handleMenuArrowKeys(event.key);
      break;
  }
}

function onClearButtonClick() {
  selected.value = [];
  inputValue.value = '';
  resetActiveAndFocusedItem();
  textInput.value?.focus();
}
<\/script>`},{intro:t(()=>[...c[47]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,`If the text that is entered into a typeahead doesn't match a menu item, users can choose to create a new option that matches the text input. You can also combine this create functionality with a label group to display created items as labels.`)],-1)]]),_:1}),l(P,{title:`Multiple typeahead with checkboxes`,src:`stories/Components/Select-MultiTypeaheadCheckbox.vue`,source:`<template>
  <pf-select
    id="multi-typeahead-checkbox-select"
    role="menu"
    :open="open"
    :selected="selected"
    variant="typeahead"
    @update:open="onOpenChange"
    @select="(_event, value) => onSelect(value)"
  >
    <template #toggle>
      <pf-menu-toggle
        variant="typeahead"
        aria-label="Multi typeahead checkbox menu toggle"
        full-width
        @update:expanded="textInput?.focus()"
      >
        <pf-text-input-group plain>
          <pf-text-input-group-main
            id="multi-typeahead-select-checkbox-input"
            ref="textInput"
            v-model="inputValue"
            autocomplete="off"
            :placeholder="placeholder"
            role="combobox"
            :aria-expanded="open"
            :aria-activedescendant="activeItemId"
            aria-controls="select-multi-typeahead-checkbox-listbox"
            @update:model-value="onTextInputChange"
            @click="onInputClick"
            @keydown="onInputKeyDown"
          />
          <pf-text-input-group-utilities v-show="selected.length > 0">
            <pf-button variant="plain" aria-label="Clear input value" @click="onClearButtonClick">
              <template #icon><xmark-icon /></template>
            </pf-button>
          </pf-text-input-group-utilities>
        </pf-text-input-group>
      </pf-menu-toggle>
    </template>

    <pf-select-list id="select-multi-typeahead-checkbox-listbox" aria-multiselectable>
      <pf-select-option
        v-for="(option, index) in selectOptions"
        :id="createItemId(option.value)"
        :key="option.value"
        :value="option.value"
        :focused="focusedItemIndex === index"
        :aria-disabled="option.ariaDisabled"
        :check="!option.ariaDisabled"
        :selected="selected.includes(option.value)"
      >
        {{ option.label }}
      </pf-select-option>
    </pf-select-list>
  </pf-select>
</template>

<script lang="ts" setup>
import { computed, ref, useTemplateRef } from 'vue';
import XmarkIcon from '@vue-patternfly/icons/xmark-icon';
import type { MenuItemId } from '@vue-patternfly/core/components/Menu/Menu.vue';

type Option = { value: string; label: string; ariaDisabled?: boolean };

const initialSelectOptions: Option[] = [
  { value: 'Alabama', label: 'Alabama' },
  { value: 'Florida', label: 'Florida' },
  { value: 'New Jersey', label: 'New Jersey' },
  { value: 'New Mexico', label: 'New Mexico' },
  { value: 'New York', label: 'New York' },
  { value: 'North Carolina', label: 'North Carolina' },
];

const NO_RESULTS = 'no results';

const open = ref(false);
const inputValue = ref('');
const selected = ref<string[]>([]);
const focusedItemIndex = ref<number | null>(null);
const activeItemId = ref<string>();
const textInput = useTemplateRef('textInput');

const placeholder = computed(() => \`\${selected.value.length} item\${selected.value.length !== 1 ? 's' : ''} selected\`);

// Filter menu items based on the text input value when one exists
const selectOptions = computed((): Option[] => {
  if (!inputValue.value) {
    return initialSelectOptions;
  }
  const options = initialSelectOptions.filter(option =>
    option.label.toLowerCase().includes(inputValue.value.toLowerCase()),
  );
  // When no options are found after filtering, display 'No results found'
  return options.length
    ? options
    : [{ ariaDisabled: true, label: \`No results found for "\${inputValue.value}"\`, value: NO_RESULTS }];
});

const createItemId = (value: string) => \`select-multi-typeahead-\${value.replace(' ', '-')}\`;

function setActiveAndFocusedItem(itemIndex: number) {
  focusedItemIndex.value = itemIndex;
  activeItemId.value = createItemId(selectOptions.value[itemIndex]!.value);
}

function resetActiveAndFocusedItem() {
  focusedItemIndex.value = null;
  activeItemId.value = undefined;
}

function closeMenu() {
  open.value = false;
  resetActiveAndFocusedItem();
}

function onOpenChange(isOpen: boolean) {
  if (isOpen) {
    open.value = true;
  } else {
    closeMenu();
  }
}

function onInputClick() {
  if (!open.value) {
    open.value = true;
  } else if (!inputValue.value) {
    closeMenu();
  }
}

function onSelect(value?: MenuItemId | null) {
  if (typeof value === 'string' && value && value !== NO_RESULTS) {
    // eslint-disable-next-line no-console
    console.log('selected', value);

    selected.value = selected.value.includes(value)
      ? selected.value.filter(selection => selection !== value)
      : [...selected.value, value];
  }

  textInput.value?.focus();
}

function onTextInputChange(value: string) {
  resetActiveAndFocusedItem();

  // Open the menu when the input value changes and the new value is not empty
  if (value && !open.value) {
    open.value = true;
  }
}

function handleMenuArrowKeys(key: string) {
  const options = selectOptions.value;
  let indexToFocus = 0;

  if (!open.value) {
    open.value = true;
  }

  if (options.every(option => option.ariaDisabled)) {
    return;
  }

  if (key === 'ArrowUp') {
    // When no index is set or at the first index, focus to the last, otherwise decrement focus index
    indexToFocus =
      focusedItemIndex.value === null || focusedItemIndex.value === 0 ? options.length - 1 : focusedItemIndex.value - 1;
  }

  if (key === 'ArrowDown') {
    // When no index is set or at the last index, focus to the first, otherwise increment focus index
    indexToFocus =
      focusedItemIndex.value === null || focusedItemIndex.value === options.length - 1 ? 0 : focusedItemIndex.value + 1;
  }

  setActiveAndFocusedItem(indexToFocus);
}

function onInputKeyDown(event: KeyboardEvent) {
  const focusedItem = focusedItemIndex.value !== null ? selectOptions.value[focusedItemIndex.value] : null;

  // like upstream, reopen only a menu that was closed before the selection
  const wasOpen = open.value;

  switch (event.key) {
    case 'Enter':
      if (wasOpen && focusedItem && focusedItem.value !== NO_RESULTS && !focusedItem.ariaDisabled) {
        onSelect(focusedItem.value);
      }

      if (!wasOpen) {
        open.value = true;
      }
      break;
    case 'ArrowUp':
    case 'ArrowDown':
      event.preventDefault();
      handleMenuArrowKeys(event.key);
      break;
  }
}

function onClearButtonClick() {
  selected.value = [];
  inputValue.value = '';
  resetActiveAndFocusedItem();
  textInput.value?.focus();
}
<\/script>`},{intro:t(()=>[...c[48]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,`By default, a multiple typeahead select allows you to select multiple menu items, placing a checkmark beside selected items. Like basic checkbox select menus, you can add checkboxes to your menu items. This approach may be more accurate and comprehensive for more complex menu scenarios like filtering.`)],-1)]]),_:1}),l(P,{title:`With view more`,source:`<pf-select
  id="single-view-more-select"
  v-model:open="viewMore.open"
  :selected="viewMore.selected"
  :label="viewMore.selected ?? 'Select a value'"
  @select="onViewMoreSelect"
>
  <pf-select-list>
    <pf-select-option
      v-for="(option, i) in viewMoreOptions.slice(0, viewMore.count)"
      :id="\`view-more-option-\${i}\`"
      :key="option"
      :value="option"
    >
      {{ option }}
    </pf-select-option>
    <pf-select-option
      v-if="viewMore.count < viewMoreOptions.length"
      value="loader"
      :load-button="!viewMore.loading"
      :loading="viewMore.loading"
      @click="onViewMoreClick"
    >
      <pf-spinner v-if="viewMore.loading" size="lg" />
      <template v-else>View more</template>
    </pf-select-option>
  </pf-select-list>
</pf-select>`},{intro:t(()=>[...c[49]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,`To reduce the processing load for long select lists, you can add a "View more" action to load additional items.`),a(`p`,null,`The following example shows 3 items before the "View more" link, but you can adjust the number of visible items for your use case.`)],-1)]]),default:t(()=>[l(N,{id:`single-view-more-select`,open:k.open,"onUpdate:open":c[12]||=e=>k.open=e,selected:k.selected,label:k.selected??`Select a value`,onSelect:j},{default:t(()=>[l(M,null,{default:t(()=>[(u(!0),o(p,null,n(O.slice(0,k.count),(e,n)=>(u(),d(g,{id:`view-more-option-${n}`,key:e,value:e},{default:t(()=>[f(r(e),1)]),_:2},1032,[`id`,`value`]))),128)),k.count<O.length?(u(),d(g,{key:0,value:`loader`,"load-button":!k.loading,loading:k.loading,onClick:A},{default:t(()=>[k.loading?(u(),d(V,{key:0,size:`lg`})):(u(),o(p,{key:1},[f(`View more`)],64))]),_:1},8,[`load-button`,`loading`])):_(``,!0)]),_:1})]),_:1},8,[`open`,`selected`,`label`])]),_:1}),l(P,{title:`With a footer`,source:`<pf-select
  id="menu-with-footer"
  v-model:open="footer.open"
  v-model:selected="footer.selected"
  :label="footer.selected ?? 'Select a value'"
  :open-change-keys="['Escape']"
>
  <pf-select-list>
    <pf-select-option value="Option 1">Option 1</pf-select-option>
    <pf-select-option value="Option 2">Option 2</pf-select-option>
    <pf-select-option value="Option 3">Option 3</pf-select-option>
  </pf-select-list>
  <pf-menu-footer>
    <pf-button variant="link" inline>Footer action</pf-button>
  </pf-menu-footer>
</pf-select>`},{intro:t(()=>[...c[50]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,[f(`You can add a `),a(`code`,null,`pf-menu-footer`),f(` component to a select menu to hold additional actions that users can take on menu items, through elements such as link buttons. A footer will be placed beneath a divider at the end of the select menu.`)])],-1)]]),default:t(()=>[l(N,{id:`menu-with-footer`,open:w.open,"onUpdate:open":c[13]||=e=>w.open=e,selected:w.selected,"onUpdate:selected":c[14]||=e=>w.selected=e,label:w.selected??`Select a value`,"open-change-keys":[`Escape`]},{default:t(()=>[l(M,null,{default:t(()=>[l(g,{value:`Option 1`},{default:t(()=>[...c[51]||=[f(`Option 1`,-1)]]),_:1}),l(g,{value:`Option 2`},{default:t(()=>[...c[52]||=[f(`Option 2`,-1)]]),_:1}),l(g,{value:`Option 3`},{default:t(()=>[...c[53]||=[f(`Option 3`,-1)]]),_:1})]),_:1}),l(U,null,{default:t(()=>[l(H,{variant:`link`,inline:``},{default:t(()=>[...c[54]||=[f(`Footer action`,-1)]]),_:1})]),_:1})]),_:1},8,[`open`,`selected`,`label`])]),_:1})]),_:1})}}});export{b as default};