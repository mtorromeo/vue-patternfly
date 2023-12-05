import{f as L,r as v,g as A,a as o,o as i,c as p,w as n,b as u,d as e,k as D,t as C,i as g,j as h,F as y,e as s}from"./index-PTSgYYYm.js";const P=s("b",null,"select list",-1),R=s("div",{class:"markdown pf-v5-c-content"},[s("h2",{class:"pf-v5-c-title"},"Differences from patternfly-react"),s("ul",null,[s("li",null,[u("There is no "),s("code",null,"grouped"),u(" prop since the presence of groups is auto-detected.")]),s("li",null,'A default menu toggle is already included but can be overridden with the "toggle" slot.')]),s("p",null,[u("See "),s("a",{href:"#/"},"common differences from patternfly-react"),u(".")]),s("h2",{class:"pf-v5-c-title"},"Examples")],-1),W=L({__name:"Select.story",setup(U){const F=v(!1),k=v(!1),_=v(),x=v([]),w=v(""),S=A({Status:[{value:"Running",favorite:!1,description:"This is a description."},{value:"Stopped",favorite:!1},{value:"Down",favorite:!1,disabled:!0},{value:"Degraded",favorite:!1},{value:"Needs maintenance",favorite:!1}],"Vendor names":[{value:"Dell",favorite:!1},{value:"Samsung",favorite:!1},{value:"Hewlett-Packard",favorite:!1,description:"This is a description."}]});return(E,r)=>{const m=o("component-info"),N=o("pf-checkbox"),t=o("pf-select-option"),d=o("pf-select"),c=o("story-canvas"),I=o("pf-divider"),b=o("pf-select-group"),O=o("pf-badge"),q=o("pf-search-input"),T=o("pf-menu-input"),V=o("doc-page");return i(),p(V,{name:"Components/Select.story.vue",title:"Select"},{description:n(()=>[u("A "),P,u(" enables users to select one or more items from a list. Use a select list when options are dynamic or variable.")]),apidocs:n(()=>[e(m,{src:"packages/core/src/components/Select/Select.vue"}),e(m,{src:"packages/core/src/components/Menu/MenuGroup.vue",doc:{name:"PfMenuGroup",exportName:"default",displayName:"MenuGroup",description:"",tags:{},props:[{name:"label",description:"Group label",required:!1,type:{name:"string"}},{name:"titleId",description:"ID for title label",required:!1,type:{name:"string"}},{name:"labelHeadingLevel",description:"Group label heading level. Default is h1.",required:!1,type:{name:"union",elements:[{name:'"h1"'},{name:'"h2"'},{name:'"h3"'},{name:'"h4"'},{name:'"h5"'},{name:'"h6"'}]},defaultValue:{func:!1,value:"'h1'"}}],slots:[{name:"label"},{name:"default"}],sourceFiles:["../../packages/core/src/components/Menu/MenuGroup.vue"]},alias:"SelectGroup"},null,8,["doc"]),e(m,{src:"packages/core/src/components/Menu/MenuList.vue",doc:{name:"PfMenuList",exportName:"default",displayName:"MenuList",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Menu/MenuList.vue"]},alias:"SelectList"},null,8,["doc"]),e(m,{src:"packages/core/src/components/Menu/MenuItem.vue",doc:{name:"PfMenuItem",exportName:"default",displayName:"MenuItem",description:"",tags:{},props:[{name:"name",required:!1,type:{name:"string"}},{name:"value",required:!1,type:{name:"string"}},{name:"to",description:"Target navigation link",required:!1,type:{name:"string"}},{name:"check",tags:{beta:[{description:"Flag indicating the item has a checkbox",title:"beta"}]},required:!1,type:{name:"boolean"}},{name:"checkName",tags:{beta:[{description:"Name of the checkbox",title:"beta"}]},required:!1,type:{name:"string"}},{name:"active",description:"Flag indicating whether the item is active",required:!1,type:{name:"boolean"}},{name:"favorited",description:"Flag indicating if the item is favorited",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"loadButton",description:"Flag indicating if the item causes a load",required:!1,type:{name:"boolean"}},{name:"loading",description:"Flag indicating a loading state",required:!1,type:{name:"boolean"}},{name:"component",description:"Component used to render the menu item",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"disabled",description:"Render item as disabled option",required:!1,type:{name:"boolean"}},{name:"description",description:"Description of the menu item",required:!1,type:{name:"string"}},{name:"externalLink",description:"Render external link icon",required:!1,type:{name:"boolean"}},{name:"selected",description:"Flag indicating if the option is selected",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"focused",description:"Flag indicating the item is focused",required:!1,type:{name:"boolean"}},{name:"danger",description:"Flag indicating the item is in danger state",required:!1,type:{name:"boolean"}},{name:"direction",tags:{beta:[{description:"Sub menu direction",title:"beta"}]},required:!1,type:{name:"union",elements:[{name:'"down"'},{name:'"up"'}]}},{name:"onPath",tags:{beta:[{description:"True if item is on current selection path",title:"beta"}]},required:!1,type:{name:"boolean"}}],events:[{name:"update:favorited",type:{names:["boolean"]}},{name:"click",type:{names:["Event"]},description:"Callback for item click"},{name:"show-flyout",type:{names:["Event"]},tags:[{title:"beta",content:"Callback function when mouse leaves trigger"}]}],slots:[{name:"icon"},{name:"default"},{name:"description"},{name:"flyoutMenu"},{name:"actions"}],sourceFiles:["../../packages/core/src/components/Menu/MenuItem.vue"]},alias:"SelectItem"},null,8,["doc"])]),default:n(()=>[R,e(c,{title:"Single",source:`<pf-checkbox v-model="disabled" label="Disabled" />

<pf-select :disabled="disabled">
  <pf-select-option disabled>
    Please Choose
  </pf-select-option>
  <pf-select-option value="Mr" />
  <pf-select-option value="Miss" />
  <pf-select-option value="Mrs" />
  <pf-select-option value="Ms" />
  <pf-select-option value="Dr" disabled />
</pf-select>`},{default:n(()=>[e(N,{modelValue:k.value,"onUpdate:modelValue":r[0]||(r[0]=l=>k.value=l),label:"Disabled"},null,8,["modelValue"]),e(d,{disabled:k.value},{default:n(()=>[e(t,{disabled:""},{default:n(()=>[u(" Please Choose ")]),_:1}),e(t,{value:"Mr"}),e(t,{value:"Miss"}),e(t,{value:"Mrs"}),e(t,{value:"Ms"}),e(t,{value:"Dr",disabled:""})]),_:1},8,["disabled"])]),_:1}),e(c,{title:"Single with description",source:`<pf-select>
  <pf-select-option value="Active" description="This is a description" />
  <pf-select-option value="Cancelled" />
  <pf-select-option value="Paused" />
  <pf-divider v-if="divider" />
  <pf-select-option value="Warning" />
  <pf-select-option value="Restarted" />
</pf-select>`},{default:n(()=>[e(d,null,{default:n(()=>[e(t,{value:"Active",description:"This is a description"}),e(t,{value:"Cancelled"}),e(t,{value:"Paused"}),F.value?(i(),p(I,{key:0})):D("",!0),e(t,{value:"Warning"}),e(t,{value:"Restarted"})]),_:1})]),_:1}),e(c,{title:"Grouped single",source:`<pf-select>
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
</pf-select>`},{default:n(()=>[e(d,null,{default:n(()=>[e(b,{label:"Status"},{default:n(()=>[e(t,{value:"Running"}),e(t,{value:"Stopped"}),e(t,{value:"Down"}),e(t,{value:"Degraded"}),e(t,{value:"Needs maintenance"})]),_:1}),F.value?(i(),p(I,{key:0})):D("",!0),e(b,{label:"Vendor names"},{default:n(()=>[e(t,{value:"Dell"}),e(t,{value:"Samsung",disabled:""}),e(t,{value:"Hewlett-Packard"})]),_:1})]),_:1})]),_:1}),e(c,{title:"Checkbox input",source:`<pf-select v-model:selected="selectedSingle" placeholder="Filter by status" variant="primary">
  <template #label>{{ selectedSingle ?? 'Select a value' }}</template>
  <pf-select-option check value="Mr" />
  <pf-select-option check value="Miss" />
  <pf-select-option check value="Mrs" />
  <pf-select-option check value="Ms" />
  <pf-select-option check value="Dr" disabled />
</pf-select>`},{default:n(()=>[e(d,{selected:_.value,"onUpdate:selected":r[1]||(r[1]=l=>_.value=l),placeholder:"Filter by status",variant:"primary"},{label:n(()=>[u(C(_.value??"Select a value"),1)]),default:n(()=>[e(t,{check:"",value:"Mr"}),e(t,{check:"",value:"Miss"}),e(t,{check:"",value:"Mrs"}),e(t,{check:"",value:"Ms"}),e(t,{check:"",value:"Dr",disabled:""})]),_:1},8,["selected"])]),_:1}),e(c,{title:"Checkbox input with counts",source:`<pf-select v-model:selected="selectedMulti" placeholder="Filter by status" variant="secondary">
  <template #label>
    Filter by status
    <pf-badge>{{ selectedMulti.length }}</pf-badge>
  </template>

  <pf-select-option check value="Debug" />
  <pf-select-option check value="Info" />
  <pf-select-option check value="Warn" />
  <pf-select-option check value="Error" disabled />
</pf-select>`},{default:n(()=>[e(d,{selected:x.value,"onUpdate:selected":r[2]||(r[2]=l=>x.value=l),placeholder:"Filter by status",variant:"secondary"},{label:n(()=>[u(" Filter by status "),e(O,null,{default:n(()=>[u(C(x.value.length),1)]),_:1})]),default:n(()=>[e(t,{check:"",value:"Debug"}),e(t,{check:"",value:"Info"}),e(t,{check:"",value:"Warn"}),e(t,{check:"",value:"Error",disabled:""})]),_:1},8,["selected"])]),_:1}),e(c,{title:"Grouped single with filtering",source:`<pf-select placeholder="Filter by status">
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
</pf-select>`},{default:n(()=>[e(d,{placeholder:"Filter by status"},{default:n(()=>[e(T,null,{default:n(()=>[e(q,{modelValue:w.value,"onUpdate:modelValue":r[3]||(r[3]=l=>w.value=l)},null,8,["modelValue"])]),_:1}),e(I),(i(!0),g(y,null,h(S,(l,f)=>(i(),p(b,{key:f,label:f},{default:n(()=>[(i(!0),g(y,null,h(l.filter(a=>a.value.toLowerCase().includes(w.value.toLowerCase())),a=>(i(),p(t,{key:a.value,favorited:a.favorite,"onUpdate:favorited":M=>a.favorite=M,value:a.value,description:a.description,disabled:a.disabled},null,8,["favorited","onUpdate:favorited","value","description","disabled"]))),128))]),_:2},1032,["label"]))),128))]),_:1})]),_:1}),e(c,{title:"Favorites",source:`<pf-select>
  <pf-select-group v-for="(groupOptions, group) of options" :key="group" :label="group">
    <pf-select-option
      v-for="option of groupOptions"
      :key="option.value"
      v-model:favorited="option.favorite"
      :value="option.value"
      :description="option.description"
      :disabled="option.disabled" />
  </pf-select-group>
</pf-select>`},{default:n(()=>[e(d,null,{default:n(()=>[(i(!0),g(y,null,h(S,(l,f)=>(i(),p(b,{key:f,label:f},{default:n(()=>[(i(!0),g(y,null,h(l,a=>(i(),p(t,{key:a.value,favorited:a.favorite,"onUpdate:favorited":M=>a.favorite=M,value:a.value,description:a.description,disabled:a.disabled},null,8,["favorited","onUpdate:favorited","value","description","disabled"]))),128))]),_:2},1032,["label"]))),128))]),_:1})]),_:1}),e(c,{title:"Typeahead test",src:"./Select-Typeahead.vue",source:`<template>
  <pf-select v-model:open="open" v-model:selected="selected" variant="typeahead" full-width>
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
            <xmark-icon aria-hidden />
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
const filter = ref('');
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

  newOptions = allOptions.filter(item => item.label.toLowerCase().includes(filter.value.toLowerCase()));

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
<\/script>`})]),_:1},8,["name"])}}});export{W as default};
