import{g as V,r as m,h as L,a as i,c as p,o as s,w as a,d as r,b as e,e as u,l as q,t as O,j as g,F as h,k as y}from"./index--PMAKewJ.js";const E=V({__name:"Select.story",setup(P){const S=m(!1),k=m(!1),w=m(),x=m([]),I=m(""),F=L({Status:[{value:"Running",favorite:!1,description:"This is a description."},{value:"Stopped",favorite:!1},{value:"Down",favorite:!1,disabled:!0},{value:"Degraded",favorite:!1},{value:"Needs maintenance",favorite:!1}],"Vendor names":[{value:"Dell",favorite:!1},{value:"Samsung",favorite:!1},{value:"Hewlett-Packard",favorite:!1,description:"This is a description."}]});return(R,n)=>{const v=i("component-info"),N=i("pf-checkbox"),t=i("pf-select-option"),c=i("pf-select"),d=i("story-canvas"),_=i("pf-divider"),b=i("pf-select-group"),C=i("pf-badge"),D=i("pf-search-input"),T=i("pf-menu-input"),A=i("doc-page");return s(),p(A,{name:"Components/Select.story.vue",title:"Select"},{description:a(()=>n[4]||(n[4]=[u("A ",-1),r("b",null,"select list",-1),u(" enables users to select one or more items from a list. Use a select list when options are dynamic or variable.",-1)])),apidocs:a(()=>[e(v,{src:"packages/core/src/components/Select/Select.vue"}),e(v,{src:"packages/core/src/components/Menu/MenuGroup.vue",doc:{name:"PfMenuGroup",exportName:"default",displayName:"MenuGroup",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"label",description:"Group label",required:!1,type:{name:"string"}},{name:"titleId",description:"ID for title label",required:!1,type:{name:"string"}},{name:"labelHeadingLevel",description:"Group label heading level. Default is h1.",required:!1,type:{name:"union",elements:[{name:'"h1"'},{name:'"h2"'},{name:'"h3"'},{name:'"h4"'},{name:'"h5"'},{name:'"h6"'}]},defaultValue:{func:!1,value:"'h1'"}}],slots:[{name:"label"},{name:"default"}],sourceFiles:["../../packages/core/src/components/Menu/MenuGroup.vue"]},alias:"SelectGroup"}),e(v,{src:"packages/core/src/components/Menu/MenuList.vue",doc:{name:"PfMenuList",exportName:"default",displayName:"MenuList",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Menu/MenuList.vue"]},alias:"SelectList"}),e(v,{src:"packages/core/src/components/Menu/MenuItem.vue",doc:{name:"PfMenuItem",exportName:"default",displayName:"MenuItem",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"name",required:!1,type:{name:"string"}},{name:"value",required:!1,type:{name:"string"}},{name:"to",description:"Target navigation link",required:!1,type:{name:"string"}},{name:"check",tags:{beta:[{description:"Flag indicating the item has a checkbox",title:"beta"}]},required:!1,type:{name:"boolean"}},{name:"checkName",tags:{beta:[{description:"Name of the checkbox",title:"beta"}]},required:!1,type:{name:"string"}},{name:"active",description:"Flag indicating whether the item is active",required:!1,type:{name:"boolean"}},{name:"favorited",description:"Flag indicating if the item is favorited",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"loadButton",description:"Flag indicating if the item causes a load",required:!1,type:{name:"boolean"}},{name:"loading",description:"Flag indicating a loading state",required:!1,type:{name:"boolean"}},{name:"component",description:"Component used to render the menu item",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"componentAttrs",description:"Additional attrs added to the link component",required:!1,type:{name:"union",elements:[{name:"Omit",elements:[{name:"ButtonHTMLAttributes"},{name:"union",elements:[{name:'"href"'},{name:'"aria-current"'},{name:'"disabled"'},{name:'"role"'},{name:'"for"'},{name:'"aria-disabled"'},{name:'"aria-expanded"'},{name:'"type"'},{name:'"download"'},{name:'"onClick"'}]}]},{name:"Omit",elements:[{name:"AnchorHTMLAttributes"},{name:"union",elements:[{name:'"href"'},{name:'"aria-current"'},{name:'"disabled"'},{name:'"role"'},{name:'"for"'},{name:'"aria-disabled"'},{name:'"aria-expanded"'},{name:'"type"'},{name:'"download"'},{name:'"onClick"'},{name:'"target"'},{name:'"referrerpolicy"'}]}]}]}},{name:"disabled",description:"Render item as disabled option",required:!1,type:{name:"boolean"}},{name:"description",description:"Description of the menu item",required:!1,type:{name:"string"}},{name:"externalLink",description:"Render external link icon",required:!1,type:{name:"boolean"}},{name:"selected",description:"Flag indicating if the option is selected",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"focused",description:"Flag indicating the item is focused",required:!1,type:{name:"boolean"}},{name:"danger",description:"Flag indicating the item is in danger state",required:!1,type:{name:"boolean"}},{name:"direction",tags:{beta:[{description:"Sub menu direction",title:"beta"}]},required:!1,type:{name:"union",elements:[{name:'"down"'},{name:'"up"'}]}},{name:"onPath",tags:{beta:[{description:"True if item is on current selection path",title:"beta"}]},required:!1,type:{name:"boolean"}},{name:"download",description:"Navigation link download. Only set when the to property is present.",required:!1,type:{name:"string"}},{name:"target",description:"Navigation link target.",required:!1,type:{name:"string"}},{name:"referrerpolicy",description:"Navigation link referrerpolicy.",required:!1,type:{name:"TSIndexedAccessType"}}],events:[{name:"update:favorited",type:{names:["boolean"]}},{name:"click",type:{names:["Event"]},description:"Callback for item click"},{name:"show-flyout",type:{names:["Event"]},tags:[{title:"beta",content:"Callback function when mouse leaves trigger"}]}],slots:[{name:"icon"},{name:"default"},{name:"description"},{name:"flyout-menu"},{name:"actions"}],sourceFiles:["../../packages/core/src/components/Menu/MenuItem.vue"]},alias:"SelectItem"})]),default:a(()=>[n[7]||(n[7]=r("div",{class:"markdown pf-v5-c-content"},[r("h2",{class:"pf-v5-c-title"},"Differences from patternfly-react"),r("ul",null,[r("li",null,[u("There is no "),r("code",null,"grouped"),u(" prop since the presence of groups is auto-detected.")]),r("li",null,'A default menu toggle is already included but can be overridden with the "toggle" slot.')]),r("p",null,[u("See "),r("a",{href:"#/"},"common differences from patternfly-react"),u(".")]),r("h2",{class:"pf-v5-c-title"},"Examples")],-1)),e(d,{title:"Single",source:`<pf-checkbox v-model="disabled" label="Disabled" />

<pf-select :disabled="disabled">
  <pf-select-option disabled>
    Please Choose
  </pf-select-option>
  <pf-select-option value="Mr" />
  <pf-select-option value="Miss" />
  <pf-select-option value="Mrs" />
  <pf-select-option value="Ms" />
  <pf-select-option value="Dr" disabled />
</pf-select>`},{default:a(()=>[e(N,{modelValue:k.value,"onUpdate:modelValue":n[0]||(n[0]=o=>k.value=o),label:"Disabled"},null,8,["modelValue"]),e(c,{disabled:k.value},{default:a(()=>[e(t,{disabled:""},{default:a(()=>n[5]||(n[5]=[u(" Please Choose ",-1)])),_:1,__:[5]}),e(t,{value:"Mr"}),e(t,{value:"Miss"}),e(t,{value:"Mrs"}),e(t,{value:"Ms"}),e(t,{value:"Dr",disabled:""})]),_:1},8,["disabled"])]),_:1}),e(d,{title:"Single with description",source:`<pf-select>
  <pf-select-option value="Active" description="This is a description" />
  <pf-select-option value="Cancelled" />
  <pf-select-option value="Paused" />
  <pf-divider v-if="divider" />
  <pf-select-option value="Warning" />
  <pf-select-option value="Restarted" />
</pf-select>`},{default:a(()=>[e(c,null,{default:a(()=>[e(t,{value:"Active",description:"This is a description"}),e(t,{value:"Cancelled"}),e(t,{value:"Paused"}),S.value?(s(),p(_,{key:0})):q("",!0),e(t,{value:"Warning"}),e(t,{value:"Restarted"})]),_:1})]),_:1}),e(d,{title:"Grouped single",source:`<pf-select>
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
</pf-select>`},{default:a(()=>[e(c,null,{default:a(()=>[e(b,{label:"Status"},{default:a(()=>[e(t,{value:"Running"}),e(t,{value:"Stopped"}),e(t,{value:"Down"}),e(t,{value:"Degraded"}),e(t,{value:"Needs maintenance"})]),_:1}),S.value?(s(),p(_,{key:0})):q("",!0),e(b,{label:"Vendor names"},{default:a(()=>[e(t,{value:"Dell"}),e(t,{value:"Samsung",disabled:""}),e(t,{value:"Hewlett-Packard"})]),_:1})]),_:1})]),_:1}),e(d,{title:"Checkbox input",source:`<pf-select v-model:selected="selectedSingle" placeholder="Filter by status" variant="primary">
  <template #label>{{ selectedSingle ?? 'Select a value' }}</template>
  <pf-select-option check value="Mr" />
  <pf-select-option check value="Miss" />
  <pf-select-option check value="Mrs" />
  <pf-select-option check value="Ms" />
  <pf-select-option check value="Dr" disabled />
</pf-select>`},{default:a(()=>[e(c,{selected:w.value,"onUpdate:selected":n[1]||(n[1]=o=>w.value=o),placeholder:"Filter by status",variant:"primary"},{label:a(()=>[u(O(w.value??"Select a value"),1)]),default:a(()=>[e(t,{check:"",value:"Mr"}),e(t,{check:"",value:"Miss"}),e(t,{check:"",value:"Mrs"}),e(t,{check:"",value:"Ms"}),e(t,{check:"",value:"Dr",disabled:""})]),_:1},8,["selected"])]),_:1}),e(d,{title:"Checkbox input with counts",source:`<pf-select v-model:selected="selectedMulti" placeholder="Filter by status" variant="secondary">
  <template #label>
    Filter by status
    <pf-badge>{{ selectedMulti.length }}</pf-badge>
  </template>

  <pf-select-option check value="Debug" />
  <pf-select-option check value="Info" />
  <pf-select-option check value="Warn" />
  <pf-select-option check value="Error" disabled />
</pf-select>`},{default:a(()=>[e(c,{selected:x.value,"onUpdate:selected":n[2]||(n[2]=o=>x.value=o),placeholder:"Filter by status",variant:"secondary"},{label:a(()=>[n[6]||(n[6]=u(" Filter by status ",-1)),e(C,null,{default:a(()=>[u(O(x.value.length),1)]),_:1})]),default:a(()=>[e(t,{check:"",value:"Debug"}),e(t,{check:"",value:"Info"}),e(t,{check:"",value:"Warn"}),e(t,{check:"",value:"Error",disabled:""})]),_:1},8,["selected"])]),_:1}),e(d,{title:"Grouped single with filtering",source:`<pf-select placeholder="Filter by status">
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
</pf-select>`},{default:a(()=>[e(c,{placeholder:"Filter by status"},{default:a(()=>[e(T,null,{default:a(()=>[e(D,{modelValue:I.value,"onUpdate:modelValue":n[3]||(n[3]=o=>I.value=o)},null,8,["modelValue"])]),_:1}),e(_),(s(!0),g(h,null,y(F,(o,f)=>(s(),p(b,{key:f,label:f},{default:a(()=>[(s(!0),g(h,null,y(o.filter(l=>l.value.toLowerCase().includes(I.value.toLowerCase())),l=>(s(),p(t,{key:l.value,favorited:l.favorite,"onUpdate:favorited":M=>l.favorite=M,value:l.value,description:l.description,disabled:l.disabled},null,8,["favorited","onUpdate:favorited","value","description","disabled"]))),128))]),_:2},1032,["label"]))),128))]),_:1})]),_:1}),e(d,{title:"Favorites",source:`<pf-select>
  <pf-select-group v-for="(groupOptions, group) of options" :key="group" :label="group">
    <pf-select-option
      v-for="option of groupOptions"
      :key="option.value"
      v-model:favorited="option.favorite"
      :value="option.value"
      :description="option.description"
      :disabled="option.disabled" />
  </pf-select-group>
</pf-select>`},{default:a(()=>[e(c,null,{default:a(()=>[(s(!0),g(h,null,y(F,(o,f)=>(s(),p(b,{key:f,label:f},{default:a(()=>[(s(!0),g(h,null,y(o,l=>(s(),p(t,{key:l.value,favorited:l.favorite,"onUpdate:favorited":M=>l.favorite=M,value:l.value,description:l.description,disabled:l.disabled},null,8,["favorited","onUpdate:favorited","value","description","disabled"]))),128))]),_:2},1032,["label"]))),128))]),_:1})]),_:1}),e(d,{title:"Typeahead test",src:"./Select-Typeahead.vue",source:`<template>
  <pf-select v-model:open="open" v-model:selected="selected" variant="typeahead" no-focus-first-item-on-open full-width>
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
<\/script>`})]),_:1,__:[7]})}}});export{E as default};
