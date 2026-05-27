import{C as e,D as t,E as n,I as r,L as i,M as a,N as o,O as s,R as c,S as l,V as u,j as d,w as f,x as p,y as m}from"./index-mFbvqZfx.js";var h=s({__name:`Select.story`,setup(s){let h=c(!1),g=c(!1),_=c(),v=c([]),y=c(``),b=i({Status:[{value:`Running`,favorite:!1,description:`This is a description.`},{value:`Stopped`,favorite:!1},{value:`Down`,favorite:!1,disabled:!0},{value:`Degraded`,favorite:!1},{value:`Needs maintenance`,favorite:!1}],"Vendor names":[{value:`Dell`,favorite:!1},{value:`Samsung`,favorite:!1},{value:`Hewlett-Packard`,favorite:!1,description:`This is a description.`}]});return(i,s)=>{let c=o(`component-info`),x=o(`pf-checkbox`),S=o(`pf-select-option`),C=o(`pf-select`),w=o(`story-canvas`),T=o(`pf-divider`),E=o(`pf-select-group`),D=o(`pf-badge`),O=o(`pf-search-input`),k=o(`pf-menu-input`),A=o(`doc-page`);return d(),l(A,{name:`Components/Select.story.vue`,title:`Select`},{description:r(()=>[...s[4]||=[n(`A `,-1),p(`b`,null,`select list`,-1),n(` enables users to select one or more items from a list. Use a select list when options are dynamic or variable.`,-1)]]),apidocs:r(()=>[t(c,{name:`PfSelect`,doc:{name:`PfSelect`,exportName:`PfSelect`,displayName:`Select`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`minWidth`,description:`Minimum width of the select menu`,required:!1,type:{name:`string`}},{name:`zIndex`,description:`z-index of the select menu`,required:!1,type:{name:`number`}},{name:`placement`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`},{name:`Placement`}]},defaultValue:{func:!1,value:`'bottom'`}},{name:`appendTo`,description:`Element or selector where to render the floating menu`,required:!1,type:{name:`union`,elements:[{name:`"inline"`},{name:`string`},{name:`RendererElement`},{name:`null`},{name:`undefined`}]}},{name:`focusToggleOnSelect`,description:`Flag indicating the toggle should be focused after a selection. If this use case is too restrictive, the optional toggleRef property with a node toggle may be used to control focus.`,required:!1,type:{name:`boolean`}},{name:`noFocusFirstItemOnOpen`,tags:{beta:[{description:`Flag indicating the first menu item should not be focused after opening the menu.`,title:`beta`}]},required:!1,type:{name:`boolean`}},{name:`closeOnKeys`,tags:{beta:[{description:`Keys that trigger menu close, defaults to tab and escape. It is highly recommended to include Escape in the array, while Tab may be omitted if the menu contains non-menu items that are focusable.`,title:`beta`}]},required:!1,type:{name:`Array`,elements:[{name:`string`}]},defaultValue:{func:!1,value:`() => ['Escape', 'Tab']`}},{name:`disabled`,description:`Flag indicating the toggle is disabled`,required:!1,type:{name:`boolean`}},{name:`fullHeight`,description:`Flag indicating the toggle is full height`,required:!1,type:{name:`boolean`}},{name:`fullWidth`,description:`Flag indicating the toggle takes up the full width of its parent`,required:!1,type:{name:`boolean`}},{name:`variant`,description:`Variant styles of the menu toggle`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"plain"`},{name:`"primary"`},{name:`"plainText"`},{name:`"secondary"`},{name:`"typeahead"`}]}},{name:`selected`,defaultValue:{func:!1,value:`undefined`}}],events:[{name:`select`,type:{names:[`Event`]},description:`Callback for updating when item selection changes. You can also specify onClick on the MenuItem.`}],slots:[{name:`toggle`},{name:`label`},{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Select/Select.vue`]}}),t(c,{name:`PfMenuGroup`,doc:{name:`PfMenuGroup`,exportName:`PfSelectGroup`,displayName:`MenuGroup`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`label`,description:`Group label`,required:!1,type:{name:`string`}},{name:`titleId`,description:`ID for title label`,required:!1,type:{name:`string`}},{name:`labelHeadingLevel`,description:`Group label heading level. Default is h1.`,required:!1,type:{name:`union`,elements:[{name:`"h1"`},{name:`"h2"`},{name:`"h3"`},{name:`"h4"`},{name:`"h5"`},{name:`"h6"`}]},defaultValue:{func:!1,value:`'h1'`}}],events:[],slots:[{name:`label`},{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuGroup.vue`]}}),t(c,{name:`PfMenuList`,doc:{name:`PfMenuList`,exportName:`PfSelectList`,displayName:`MenuList`,description:``,tags:{},expose:[{name:`el`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuList.vue`]}}),t(c,{name:`PfMenuItem`,doc:{name:`PfMenuItem`,exportName:`PfSelectOption`,displayName:`MenuItem`,description:``,tags:{},expose:[{name:`focus`},{name:`focused`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`name`,required:!1,type:{name:`string`}},{name:`value`,required:!1,type:{name:`string`}},{name:`to`,description:`Target navigation link`,required:!1,type:{name:`string`}},{name:`check`,tags:{beta:[{description:`Flag indicating the item has a checkbox`,title:`beta`}]},required:!1,type:{name:`boolean`}},{name:`checkName`,tags:{beta:[{description:`Name of the checkbox`,title:`beta`}]},required:!1,type:{name:`string`}},{name:`active`,description:`Flag indicating whether the item is active`,required:!1,type:{name:`boolean`}},{name:`loadButton`,description:`Flag indicating if the item causes a load`,required:!1,type:{name:`boolean`}},{name:`loading`,description:`Flag indicating a loading state`,required:!1,type:{name:`boolean`}},{name:`component`,description:`Component used to render the menu item`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'button'`}},{name:`componentAttrs`,description:`Additional attrs added to the link component`,required:!1,type:{name:`union`,elements:[{name:`Omit`,elements:[{name:`ButtonHTMLAttributes`},{name:`union`,elements:[{name:`"href"`},{name:`"aria-current"`},{name:`"disabled"`},{name:`"role"`},{name:`"for"`},{name:`"aria-disabled"`},{name:`"aria-expanded"`},{name:`"type"`},{name:`"download"`},{name:`"onClick"`}]}]},{name:`Omit`,elements:[{name:`AnchorHTMLAttributes`},{name:`union`,elements:[{name:`"href"`},{name:`"aria-current"`},{name:`"disabled"`},{name:`"role"`},{name:`"for"`},{name:`"aria-disabled"`},{name:`"aria-expanded"`},{name:`"type"`},{name:`"download"`},{name:`"onClick"`},{name:`"target"`},{name:`"referrerpolicy"`}]}]}]}},{name:`disabled`,description:`Render item as disabled option`,required:!1,type:{name:`boolean`}},{name:`description`,description:`Description of the menu item`,required:!1,type:{name:`string`}},{name:`externalLink`,description:`Render external link icon`,required:!1,type:{name:`boolean`}},{name:`selected`,description:`Flag indicating if the option is selected`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`focused`,description:`Flag indicating the item is focused`,required:!1,type:{name:`boolean`}},{name:`danger`,description:`Flag indicating the item is in danger state`,required:!1,type:{name:`boolean`}},{name:`direction`,tags:{beta:[{description:`Sub menu direction`,title:`beta`}]},required:!1,type:{name:`union`,elements:[{name:`"down"`},{name:`"up"`}]}},{name:`onPath`,tags:{beta:[{description:`True if item is on current selection path`,title:`beta`}]},required:!1,type:{name:`boolean`}},{name:`download`,description:`Navigation link download. Only set when the to property is present.`,required:!1,type:{name:`string`}},{name:`target`,description:`Navigation link target.`,required:!1,type:{name:`string`}},{name:`referrerpolicy`,description:`Navigation link referrerpolicy.`,required:!1,type:{name:`TSIndexedAccessType`}}],events:[{name:`click`,type:{names:[`Event`]},description:`Callback for item click`},{name:`showFlyout`,type:{names:[`Event`]},tags:[{title:`beta`,content:`Callback function when mouse leaves trigger`}]},{name:`update:favorited`,type:{names:[`boolean`]}}],slots:[{name:`icon`},{name:`default`},{name:`description`},{name:`flyout-menu`},{name:`actions`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuItem.vue`]}})]),default:r(()=>[s[7]||=p(`div`,{class:`markdown pf-v6-c-content`},[p(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),p(`ul`,null,[p(`li`,null,[n(`There is no `),p(`code`,null,`grouped`),n(` prop since the presence of groups is auto-detected.`)]),p(`li`,null,`A default menu toggle is already included but can be overridden with the "toggle" slot.`)]),p(`p`,null,[n(`See `),p(`a`,{href:`#/`},`common differences from patternfly-react`),n(`.`)]),p(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),t(w,{title:`Single`,source:`<pf-checkbox v-model="disabled" label="Disabled" />

<pf-select :disabled="disabled">
  <pf-select-option disabled>
    Please Choose
  </pf-select-option>
  <pf-select-option value="Mr" />
  <pf-select-option value="Miss" />
  <pf-select-option value="Mrs" />
  <pf-select-option value="Ms" />
  <pf-select-option value="Dr" disabled />
</pf-select>`},{default:r(()=>[t(x,{modelValue:g.value,"onUpdate:modelValue":s[0]||=e=>g.value=e,label:`Disabled`},null,8,[`modelValue`]),t(C,{disabled:g.value},{default:r(()=>[t(S,{disabled:``},{default:r(()=>[...s[5]||=[n(` Please Choose `,-1)]]),_:1}),t(S,{value:`Mr`}),t(S,{value:`Miss`}),t(S,{value:`Mrs`}),t(S,{value:`Ms`}),t(S,{value:`Dr`,disabled:``})]),_:1},8,[`disabled`])]),_:1}),t(w,{title:`Single with description`,source:`<pf-select>
  <pf-select-option value="Active" description="This is a description" />
  <pf-select-option value="Cancelled" />
  <pf-select-option value="Paused" />
  <pf-divider v-if="divider" />
  <pf-select-option value="Warning" />
  <pf-select-option value="Restarted" />
</pf-select>`},{default:r(()=>[t(C,null,{default:r(()=>[t(S,{value:`Active`,description:`This is a description`}),t(S,{value:`Cancelled`}),t(S,{value:`Paused`}),h.value?(d(),l(T,{key:0})):e(``,!0),t(S,{value:`Warning`}),t(S,{value:`Restarted`})]),_:1})]),_:1}),t(w,{title:`Grouped single`,source:`<pf-select>
  <pf-select-group label="Status">
    <pf-select-option value="Running" />
    <pf-select-option value="Stopped" />
    <pf-select-option value="Down" />
    <pf-select-option value="Degraded" />
    <pf-select-option value="Needs maintenance" />
  </pf-select-group>
  <pf-divider v-if="divider" />
  <pf-select-group label="Vendor names">
    <pf-select-option value="Dell" />
    <pf-select-option value="Samsung" disabled />
    <pf-select-option value="Hewlett-Packard" />
  </pf-select-group>
</pf-select>`},{default:r(()=>[t(C,null,{default:r(()=>[t(E,{label:`Status`},{default:r(()=>[t(S,{value:`Running`}),t(S,{value:`Stopped`}),t(S,{value:`Down`}),t(S,{value:`Degraded`}),t(S,{value:`Needs maintenance`})]),_:1}),h.value?(d(),l(T,{key:0})):e(``,!0),t(E,{label:`Vendor names`},{default:r(()=>[t(S,{value:`Dell`}),t(S,{value:`Samsung`,disabled:``}),t(S,{value:`Hewlett-Packard`})]),_:1})]),_:1})]),_:1}),t(w,{title:`Checkbox input`,source:`<pf-select v-model:selected="selectedSingle" placeholder="Filter by status" variant="primary">
  <template #label>{{ selectedSingle ?? 'Select a value' }}</template>
  <pf-select-option check value="Mr" />
  <pf-select-option check value="Miss" />
  <pf-select-option check value="Mrs" />
  <pf-select-option check value="Ms" />
  <pf-select-option check value="Dr" disabled />
</pf-select>`},{default:r(()=>[t(C,{selected:_.value,"onUpdate:selected":s[1]||=e=>_.value=e,placeholder:`Filter by status`,variant:`primary`},{label:r(()=>[n(u(_.value??`Select a value`),1)]),default:r(()=>[t(S,{check:``,value:`Mr`}),t(S,{check:``,value:`Miss`}),t(S,{check:``,value:`Mrs`}),t(S,{check:``,value:`Ms`}),t(S,{check:``,value:`Dr`,disabled:``})]),_:1},8,[`selected`])]),_:1}),t(w,{title:`Checkbox input with counts`,source:`<pf-select v-model:selected="selectedMulti" placeholder="Filter by status" variant="secondary">
  <template #label>
    Filter by status
    <pf-badge>{{ selectedMulti.length }}</pf-badge>
  </template>

  <pf-select-option check value="Debug" />
  <pf-select-option check value="Info" />
  <pf-select-option check value="Warn" />
  <pf-select-option check value="Error" disabled />
</pf-select>`},{default:r(()=>[t(C,{selected:v.value,"onUpdate:selected":s[2]||=e=>v.value=e,placeholder:`Filter by status`,variant:`secondary`},{label:r(()=>[s[6]||=n(` Filter by status `,-1),t(D,null,{default:r(()=>[n(u(v.value.length),1)]),_:1})]),default:r(()=>[t(S,{check:``,value:`Debug`}),t(S,{check:``,value:`Info`}),t(S,{check:``,value:`Warn`}),t(S,{check:``,value:`Error`,disabled:``})]),_:1},8,[`selected`])]),_:1}),t(w,{title:`Grouped single with filtering`,source:`<pf-select placeholder="Filter by status">
  <pf-menu-input>
    <pf-search-input v-model="filter" />
  </pf-menu-input>

  <pf-divider />

  <pf-select-group v-for="(groupOptions, group) of options" :key="group" :label="group">
    <pf-select-option
      v-for="option of groupOptions.filter(o => o.value.toLowerCase().includes(filter.toLowerCase()))"
      :key="option.value"
      v-model:favorited="option.favorite"
      :value="option.value"
      :description="option.description"
      :disabled="option.disabled"
    ></pf-select-option>
  </pf-select-group>
</pf-select>`},{default:r(()=>[t(C,{placeholder:`Filter by status`},{default:r(()=>[t(k,null,{default:r(()=>[t(O,{modelValue:y.value,"onUpdate:modelValue":s[3]||=e=>y.value=e},null,8,[`modelValue`])]),_:1}),t(T),(d(!0),f(m,null,a(b,(e,t)=>(d(),l(E,{key:t,label:t},{default:r(()=>[(d(!0),f(m,null,a(e.filter(e=>e.value.toLowerCase().includes(y.value.toLowerCase())),e=>(d(),l(S,{key:e.value,favorited:e.favorite,"onUpdate:favorited":t=>e.favorite=t,value:e.value,description:e.description,disabled:e.disabled},null,8,[`favorited`,`onUpdate:favorited`,`value`,`description`,`disabled`]))),128))]),_:2},1032,[`label`]))),128))]),_:1})]),_:1}),t(w,{title:`Favorites`,source:`<pf-select>
  <pf-select-group v-for="(groupOptions, group) of options" :key="group" :label="group">
    <pf-select-option
      v-for="option of groupOptions"
      :key="option.value"
      v-model:favorited="option.favorite"
      :value="option.value"
      :description="option.description"
      :disabled="option.disabled" />
  </pf-select-group>
</pf-select>`},{default:r(()=>[t(C,null,{default:r(()=>[(d(!0),f(m,null,a(b,(e,t)=>(d(),l(E,{key:t,label:t},{default:r(()=>[(d(!0),f(m,null,a(e,e=>(d(),l(S,{key:e.value,favorited:e.favorite,"onUpdate:favorited":t=>e.favorite=t,value:e.value,description:e.description,disabled:e.disabled},null,8,[`favorited`,`onUpdate:favorited`,`value`,`description`,`disabled`]))),128))]),_:2},1032,[`label`]))),128))]),_:1})]),_:1}),t(w,{title:`Typeahead test`,src:`./Select-Typeahead.vue`,source:`<template>
  <pf-select v-model:open="open" variant="typeahead" no-focus-first-item-on-open full-width>
    <template #label>
      <pf-text-input-group plain>
        <pf-text-input-group-main
          v-model="input"
          autocomplete="off"
          placeholder="Select a state"
          role="combobox"
          :aria-expanded="open"
          :aria-activedescendant="activeItem"
          aria-controls="select-typeahead-listbox"
          @update:model-value="filter = $event"
          @focus="($event.target as HTMLInputElement).select()"
          @click="open = !open"
          @keydown="handleKeydown"
        />
        <pf-text-input-group-utilities>
          <pf-button v-if="input" variant="plain" @click="handleClick">
            <template #icon>
              <xmark-icon aria-hidden />
            </template>
          </pf-button>
        </pf-text-input-group-utilities>
      </pf-text-input-group>
    </template>

    <pf-select-list id="select-typeahead-listbox">
      <pf-select-option
        v-for="(option, i) of filteredOptions"
        :key="i"
        :value="option.value"
        :focused="focusedItemIndex === i"
        @click="select(option.value)"
      >
        {{ option.label }}
      </pf-select-option>
    </pf-select-list>
  </pf-select>
</template>

<script lang="ts" setup>
import { computed, ref, type Ref } from 'vue';
import XmarkIcon from '@vue-patternfly/icons/xmark-icon';

const open = ref(false);
const filter: Ref<string | number | null> = ref('');
const input = ref('');
const focusedItemIndex: Ref<number | undefined> = ref();
const activeItem: Ref<string | undefined> = ref();
const selected: Ref<string | undefined> = ref();

type OptionItem = { value: string; label: string; };

const allOptions: OptionItem[] = [
  { value: 'Alabama', label: 'Alabama' },
  { value: 'Florida', label: 'Florida' },
  { value: 'New Jersey', label: 'New Jersey' },
  { value: 'New Mexico', label: 'New Mexico' },
  { value: 'New York', label: 'New York' },
  { value: 'North Carolina', label: 'North Carolina' },
];

const filteredOptions = computed(() => {
  let newOptions = allOptions;
  if (!filter.value) {
    return newOptions;
  }

  newOptions = allOptions.filter(item => item.label.toLowerCase().includes(String(filter.value).toLowerCase()));

  if (!newOptions.length) {
    newOptions = [{ value: '', label: \`No results found for \${filter.value}\` }];
  }

  return newOptions;
});

function handleClick() {
  filter.value = '';
  input.value = '';
  selected.value = '';
}

function handleMenuArrowKeys(key: string) {
  let indexToFocus: number | undefined = undefined;

  if (!open.value) {
    return;
  }

  if (key === 'ArrowUp') {
    // When no index is set or at the first index, focus to the last, otherwise decrement focus index
    if (focusedItemIndex.value === undefined || focusedItemIndex.value === 0) {
      indexToFocus = filteredOptions.value.length - 1;
    } else {
      indexToFocus = focusedItemIndex.value - 1;
    }
  }

  if (key === 'ArrowDown') {
    // When no index is set or at the last index, focus to the first, otherwise increment focus index
    if (focusedItemIndex.value === undefined || focusedItemIndex.value === filteredOptions.value.length - 1) {
      indexToFocus = 0;
    } else {
      indexToFocus = focusedItemIndex.value + 1;
    }
  }

  if (indexToFocus === undefined) {
    return;
  }

  focusedItemIndex.value = indexToFocus;
  const focusedItem = filteredOptions.value[indexToFocus];
  activeItem.value = \`select-typeahead-\${focusedItem.value.replace(' ', '-')}\`;
}

function handleKeydown(event: KeyboardEvent) {
  const [firstMenuItem] = filteredOptions.value;
  const focusedItem = focusedItemIndex.value ? filteredOptions.value[focusedItemIndex.value] : firstMenuItem;

  switch (event.key) {
    // Select the first available option
    case 'Enter':
      select(focusedItem.value);
      break;
    case 'Tab':
    case 'Escape':
      open.value = false;
      activeItem.value = undefined;
      break;
    case 'ArrowUp':
    case 'ArrowDown':
      event.preventDefault();
      handleMenuArrowKeys(event.key);
      break;
  }
}

function select(value: string) {
  // eslint-disable-next-line no-console
  console.log('selected', value);

  if (open.value && value) {
    input.value = value;
    filter.value = '';
    selected.value = value;
  }

  open.value = !open.value;
  focusedItemIndex.value = undefined;
  activeItem.value = undefined;
}
<\/script>`})]),_:1})}}});export{h as default};