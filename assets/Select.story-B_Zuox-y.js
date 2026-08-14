import{H as e,N as t,Q as n,Tt as r,Z as i,c as a,h as o,j as s,k as c,l,m as u,n as d,p as f,s as p,u as m}from"./runtime-core.esm-bundler-DvxuuL12.js";var h=o({__name:`Select.story`,setup(o){let h=n(!1),g=n(!1),_=n(),v=n([]),y=n(``),b=i({Status:[{value:`Running`,favorite:!1,description:`This is a description.`},{value:`Stopped`,favorite:!1},{value:`Down`,favorite:!1,disabled:!0},{value:`Degraded`,favorite:!1},{value:`Needs maintenance`,favorite:!1}],"Vendor names":[{value:`Dell`,favorite:!1},{value:`Samsung`,favorite:!1},{value:`Hewlett-Packard`,favorite:!1,description:`This is a description.`}]});return(n,i)=>{let o=t(`component-info`),x=t(`pf-checkbox`),S=t(`pf-select-option`),C=t(`pf-select`),w=t(`story-canvas`),T=t(`pf-divider`),E=t(`pf-select-group`),D=t(`pf-badge`),O=t(`pf-search-input`),k=t(`pf-menu-input`),A=t(`doc-page`);return c(),a(A,{name:`Components/Select.story.vue`,title:`Select`},{description:e(()=>[...i[4]||=[f(`A `,-1),p(`b`,null,`select list`,-1),f(` enables users to select one or more items from a list. Use a select list when options are dynamic or variable.`,-1)]]),apidocs:e(()=>[u(o,{name:`PfSelect`,doc:{name:`PfSelect`,exportName:`PfSelect`,displayName:`Select`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`minWidth`,description:`Minimum width of the select menu`,required:!1,type:{name:`string`}},{name:`zIndex`,description:`z-index of the select menu`,required:!1,type:{name:`number`}},{name:`placement`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"bottom"`},{name:`Placement`}]},defaultValue:{func:!1,value:`'bottom'`}},{name:`appendTo`,description:`Element or selector where to render the floating menu`,required:!1,type:{name:`union`,elements:[{name:`"inline"`},{name:`string`},{name:`RendererElement`},{name:`null`},{name:`undefined`}]}},{name:`focusToggleOnSelect`,description:`Flag indicating the toggle should be focused after a selection. If this use case is too restrictive, the optional toggleRef property with a node toggle may be used to control focus.`,required:!1,type:{name:`boolean`}},{name:`noFocusFirstItemOnOpen`,tags:{beta:[{description:`Flag indicating the first menu item should not be focused after opening the menu.`,title:`beta`}]},required:!1,type:{name:`boolean`}},{name:`closeOnKeys`,tags:{beta:[{description:`Keys that trigger menu close, defaults to tab and escape. It is highly recommended to include Escape in the array, while Tab may be omitted if the menu contains non-menu items that are focusable.`,title:`beta`}]},required:!1,type:{name:`Array`,elements:[{name:`string`}]},defaultValue:{func:!1,value:`() => ['Escape', 'Tab']`}},{name:`disabled`,description:`Flag indicating the toggle is disabled`,required:!1,type:{name:`boolean`}},{name:`fullHeight`,description:`Flag indicating the toggle is full height`,required:!1,type:{name:`boolean`}},{name:`fullWidth`,description:`Flag indicating the toggle takes up the full width of its parent`,required:!1,type:{name:`boolean`}},{name:`variant`,description:`Variant styles of the menu toggle`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"plain"`},{name:`"primary"`},{name:`"plainText"`},{name:`"secondary"`},{name:`"typeahead"`}]}},{name:`selected`,defaultValue:{func:!1,value:`undefined`}}],events:[{name:`select`,type:{names:[`Event`]},description:`Callback for updating when item selection changes. You can also specify onClick on the MenuItem.`}],slots:[{name:`toggle`},{name:`label`},{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Select/Select.vue`]}}),u(o,{name:`PfMenuGroup`,doc:{name:`PfMenuGroup`,exportName:`PfSelectGroup`,displayName:`MenuGroup`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`label`,description:`Group label`,required:!1,type:{name:`string`}},{name:`titleId`,description:`ID for title label`,required:!1,type:{name:`string`}},{name:`labelHeadingLevel`,description:`Group label heading level. Default is h1.`,required:!1,type:{name:`union`,elements:[{name:`"h1"`},{name:`"h2"`},{name:`"h3"`},{name:`"h4"`},{name:`"h5"`},{name:`"h6"`}]},defaultValue:{func:!1,value:`'h1'`}}],events:[],slots:[{name:`label`},{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuGroup.vue`]}}),u(o,{name:`PfMenuList`,doc:{name:`PfMenuList`,exportName:`PfSelectList`,displayName:`MenuList`,description:``,tags:{},expose:[{name:`el`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuList.vue`]}}),u(o,{name:`PfMenuItem`,doc:{name:`PfMenuItem`,exportName:`PfSelectOption`,displayName:`MenuItem`,description:``,tags:{},expose:[{name:`focus`},{name:`focused`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`name`,required:!1,type:{name:`string`}},{name:`value`,required:!1,type:{name:`string`}},{name:`to`,description:`Target navigation link`,required:!1,type:{name:`string`}},{name:`check`,tags:{beta:[{description:`Flag indicating the item has a checkbox`,title:`beta`}]},required:!1,type:{name:`boolean`}},{name:`checkName`,tags:{beta:[{description:`Name of the checkbox`,title:`beta`}]},required:!1,type:{name:`string`}},{name:`active`,description:`Flag indicating whether the item is active`,required:!1,type:{name:`boolean`}},{name:`loadButton`,description:`Flag indicating if the item causes a load`,required:!1,type:{name:`boolean`}},{name:`loading`,description:`Flag indicating a loading state`,required:!1,type:{name:`boolean`}},{name:`component`,description:`Component used to render the menu item`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'button'`}},{name:`componentAttrs`,description:`Additional attrs added to the link component`,required:!1,type:{name:`union`,elements:[{name:`Omit`,elements:[{name:`ButtonHTMLAttributes`},{name:`union`,elements:[{name:`"href"`},{name:`"aria-current"`},{name:`"disabled"`},{name:`"role"`},{name:`"for"`},{name:`"aria-disabled"`},{name:`"aria-expanded"`},{name:`"type"`},{name:`"download"`},{name:`"onClick"`}]}]},{name:`Omit`,elements:[{name:`AnchorHTMLAttributes`},{name:`union`,elements:[{name:`"href"`},{name:`"aria-current"`},{name:`"disabled"`},{name:`"role"`},{name:`"for"`},{name:`"aria-disabled"`},{name:`"aria-expanded"`},{name:`"type"`},{name:`"download"`},{name:`"onClick"`},{name:`"target"`},{name:`"referrerpolicy"`}]}]}]}},{name:`disabled`,description:`Render item as disabled option`,required:!1,type:{name:`boolean`}},{name:`description`,description:`Description of the menu item`,required:!1,type:{name:`string`}},{name:`externalLink`,description:`Render external link icon`,required:!1,type:{name:`boolean`}},{name:`selected`,description:`Flag indicating if the option is selected`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`focused`,description:`Flag indicating the item is focused`,required:!1,type:{name:`boolean`}},{name:`danger`,description:`Flag indicating the item is in danger state`,required:!1,type:{name:`boolean`}},{name:`direction`,tags:{beta:[{description:`Sub menu direction`,title:`beta`}]},required:!1,type:{name:`union`,elements:[{name:`"down"`},{name:`"up"`}]}},{name:`onPath`,tags:{beta:[{description:`True if item is on current selection path`,title:`beta`}]},required:!1,type:{name:`boolean`}},{name:`download`,description:`Navigation link download. Only set when the to property is present.`,required:!1,type:{name:`string`}},{name:`target`,description:`Navigation link target.`,required:!1,type:{name:`string`}},{name:`referrerpolicy`,description:`Navigation link referrerpolicy.`,required:!1,type:{name:`TSIndexedAccessType`}}],events:[{name:`click`,type:{names:[`Event`]},description:`Callback for item click`},{name:`showFlyout`,type:{names:[`Event`]},tags:[{title:`beta`,content:`Callback function when mouse leaves trigger`}]},{name:`update:favorited`,type:{names:[`boolean`]}}],slots:[{name:`icon`},{name:`default`},{name:`description`},{name:`flyout-menu`},{name:`actions`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuItem.vue`]}})]),default:e(()=>[i[7]||=p(`div`,{class:`markdown pf-v6-c-content`},[p(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),p(`ul`,null,[p(`li`,null,[f(`There is no `),p(`code`,null,`grouped`),f(` prop since the presence of groups is auto-detected.`)]),p(`li`,null,`A default menu toggle is already included but can be overridden with the "toggle" slot.`)]),p(`p`,null,[f(`See `),p(`a`,{href:`#/`},`common differences from patternfly-react`),f(`.`)]),p(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),u(w,{title:`Single`,source:`<pf-checkbox v-model="disabled" label="Disabled" />

<pf-select :disabled="disabled">
  <pf-select-option disabled>
    Please Choose
  </pf-select-option>
  <pf-select-option value="Mr" />
  <pf-select-option value="Miss" />
  <pf-select-option value="Mrs" />
  <pf-select-option value="Ms" />
  <pf-select-option value="Dr" disabled />
</pf-select>`},{default:e(()=>[u(x,{modelValue:g.value,"onUpdate:modelValue":i[0]||=e=>g.value=e,label:`Disabled`},null,8,[`modelValue`]),u(C,{disabled:g.value},{default:e(()=>[u(S,{disabled:``},{default:e(()=>[...i[5]||=[f(` Please Choose `,-1)]]),_:1}),u(S,{value:`Mr`}),u(S,{value:`Miss`}),u(S,{value:`Mrs`}),u(S,{value:`Ms`}),u(S,{value:`Dr`,disabled:``})]),_:1},8,[`disabled`])]),_:1}),u(w,{title:`Single with description`,source:`<pf-select>
  <pf-select-option value="Active" description="This is a description" />
  <pf-select-option value="Cancelled" />
  <pf-select-option value="Paused" />
  <pf-divider v-if="divider" />
  <pf-select-option value="Warning" />
  <pf-select-option value="Restarted" />
</pf-select>`},{default:e(()=>[u(C,null,{default:e(()=>[u(S,{value:`Active`,description:`This is a description`}),u(S,{value:`Cancelled`}),u(S,{value:`Paused`}),h.value?(c(),a(T,{key:0})):l(``,!0),u(S,{value:`Warning`}),u(S,{value:`Restarted`})]),_:1})]),_:1}),u(w,{title:`Grouped single`,source:`<pf-select>
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
</pf-select>`},{default:e(()=>[u(C,null,{default:e(()=>[u(E,{label:`Status`},{default:e(()=>[u(S,{value:`Running`}),u(S,{value:`Stopped`}),u(S,{value:`Down`}),u(S,{value:`Degraded`}),u(S,{value:`Needs maintenance`})]),_:1}),h.value?(c(),a(T,{key:0})):l(``,!0),u(E,{label:`Vendor names`},{default:e(()=>[u(S,{value:`Dell`}),u(S,{value:`Samsung`,disabled:``}),u(S,{value:`Hewlett-Packard`})]),_:1})]),_:1})]),_:1}),u(w,{title:`Checkbox input`,source:`<pf-select v-model:selected="selectedSingle" placeholder="Filter by status" variant="primary">
  <template #label>{{ selectedSingle ?? 'Select a value' }}</template>
  <pf-select-option check value="Mr" />
  <pf-select-option check value="Miss" />
  <pf-select-option check value="Mrs" />
  <pf-select-option check value="Ms" />
  <pf-select-option check value="Dr" disabled />
</pf-select>`},{default:e(()=>[u(C,{selected:_.value,"onUpdate:selected":i[1]||=e=>_.value=e,placeholder:`Filter by status`,variant:`primary`},{label:e(()=>[f(r(_.value??`Select a value`),1)]),default:e(()=>[u(S,{check:``,value:`Mr`}),u(S,{check:``,value:`Miss`}),u(S,{check:``,value:`Mrs`}),u(S,{check:``,value:`Ms`}),u(S,{check:``,value:`Dr`,disabled:``})]),_:1},8,[`selected`])]),_:1}),u(w,{title:`Checkbox input with counts`,source:`<pf-select v-model:selected="selectedMulti" placeholder="Filter by status" variant="secondary">
  <template #label>
    Filter by status
    <pf-badge>{{ selectedMulti.length }}</pf-badge>
  </template>

  <pf-select-option check value="Debug" />
  <pf-select-option check value="Info" />
  <pf-select-option check value="Warn" />
  <pf-select-option check value="Error" disabled />
</pf-select>`},{default:e(()=>[u(C,{selected:v.value,"onUpdate:selected":i[2]||=e=>v.value=e,placeholder:`Filter by status`,variant:`secondary`},{label:e(()=>[i[6]||=f(` Filter by status `,-1),u(D,null,{default:e(()=>[f(r(v.value.length),1)]),_:1})]),default:e(()=>[u(S,{check:``,value:`Debug`}),u(S,{check:``,value:`Info`}),u(S,{check:``,value:`Warn`}),u(S,{check:``,value:`Error`,disabled:``})]),_:1},8,[`selected`])]),_:1}),u(w,{title:`Grouped single with filtering`,source:`<pf-select placeholder="Filter by status">
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
</pf-select>`},{default:e(()=>[u(C,{placeholder:`Filter by status`},{default:e(()=>[u(k,null,{default:e(()=>[u(O,{modelValue:y.value,"onUpdate:modelValue":i[3]||=e=>y.value=e},null,8,[`modelValue`])]),_:1}),u(T),(c(!0),m(d,null,s(b,(t,n)=>(c(),a(E,{key:n,label:n},{default:e(()=>[(c(!0),m(d,null,s(t.filter(e=>e.value.toLowerCase().includes(y.value.toLowerCase())),e=>(c(),a(S,{key:e.value,favorited:e.favorite,"onUpdate:favorited":t=>e.favorite=t,value:e.value,description:e.description,disabled:e.disabled},null,8,[`favorited`,`onUpdate:favorited`,`value`,`description`,`disabled`]))),128))]),_:2},1032,[`label`]))),128))]),_:1})]),_:1}),u(w,{title:`Favorites`,source:`<pf-select>
  <pf-select-group v-for="(groupOptions, group) of options" :key="group" :label="group">
    <pf-select-option
      v-for="option of groupOptions"
      :key="option.value"
      v-model:favorited="option.favorite"
      :value="option.value"
      :description="option.description"
      :disabled="option.disabled" />
  </pf-select-group>
</pf-select>`},{default:e(()=>[u(C,null,{default:e(()=>[(c(!0),m(d,null,s(b,(t,n)=>(c(),a(E,{key:n,label:n},{default:e(()=>[(c(!0),m(d,null,s(t,e=>(c(),a(S,{key:e.value,favorited:e.favorite,"onUpdate:favorited":t=>e.favorite=t,value:e.value,description:e.description,disabled:e.disabled},null,8,[`favorited`,`onUpdate:favorited`,`value`,`description`,`disabled`]))),128))]),_:2},1032,[`label`]))),128))]),_:1})]),_:1}),u(w,{title:`Typeahead test`,src:`./Select-Typeahead.vue`,source:`<template>
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