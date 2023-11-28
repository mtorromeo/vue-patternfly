import{f as w,r as x,g as F,a as o,o as c,c as p,w as a,b as n,d as e,k as h,i as b,j as g,F as k,e as i}from"./index-9IxByHgl.js";const I=i("b",null,"select list",-1),D=i("div",{class:"markdown pf-v5-c-content"},[i("h2",{class:"pf-v5-c-title"},"Differences from patternfly-react"),i("ul",null,[i("li",null,[n("There is no "),i("code",null,"grouped"),n(" prop since the presence of groups is auto-detected. See "),i("a",{href:"#/"},"common differences from patternfly-react"),n(".")])]),i("h2",{class:"pf-v5-c-title"},"Examples")],-1),A=w({__name:"Select.story",setup(C){const m=x(!1),y=F({Status:[{value:"Running",favorite:!1,description:"This is a description."},{value:"Stopped",favorite:!1},{value:"Down",favorite:!1,disabled:!0},{value:"Degraded",favorite:!1},{value:"Needs maintenance",favorite:!1}],"Vendor names":[{value:"Dell",favorite:!1},{value:"Samsung",favorite:!1},{value:"Hewlett-Packard",favorite:!1,description:"This is a description."}]});return(P,N)=>{const d=o("component-info"),t=o("pf-select-option"),l=o("pf-select"),s=o("story-canvas"),f=o("pf-divider"),u=o("pf-select-group"),_=o("pf-text-input"),M=o("doc-page");return c(),p(M,{title:"Select"},{description:a(()=>[n("A "),I,n(" enables users to select one or more items from a list. Use a select list when options are dynamic or variable.")]),apidocs:a(()=>[e(d,{src:"packages/core/src/components/Select/Select.vue",doc:{name:"PfSelect",exportName:"default",displayName:"Select",description:"",tags:{},props:[{name:"open",description:"Flag to indicate if select is open",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"selected",description:"Single itemId for single select menus, or array of itemIds for multi select. You can also specify isSelected on the SelectOption.",required:!1,type:{name:"union",elements:[{name:"MenuItemId"},{name:"Array",elements:[{name:"MenuItemId"}]},{name:"null"}]},defaultValue:{func:!1,value:"undefined"}},{name:"plain",description:"Indicates if the select should be without the outer box-shadow",required:!1,type:{name:"boolean"}},{name:"minWidth",description:"Minimum width of the select menu",required:!1,type:{name:"string"}},{name:"zIndex",description:"z-index of the select menu",required:!1,type:{name:"number"}},{name:"containsFlyout",tags:{beta:[{description:"Indicates if menu contains a flyout menu",title:"beta"}]},required:!1,type:{name:"boolean"}},{name:"navFlyout",tags:{beta:[{description:"Indicating that the menu should have nav flyout styling",title:"beta"}]},required:!1,type:{name:"boolean"}},{name:"activeItemId",tags:{beta:[{description:"itemId of the currently active item. You can also specify isActive on the MenuItem.",title:"beta"}]},required:!1,type:{name:"MenuItemId"}},{name:"rootMenu",description:"Internal flag indicating if the Menu is the root of a menu tree",required:!1,type:{name:"boolean"}},{name:"scrollable",description:"Indicates if the menu should be srollable",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"onActionClick",description:"Callback called when an MenuItems's action button is clicked. You can also specify it within a MenuItemAction.",required:!1,type:{name:"TSFunctionType"}}],events:[{name:"search-input-change",type:{names:["Event"]},description:"A callback for when the input value changes."},{name:"select",type:{names:["Event"]},description:"Callback for updating when item selection changes. You can also specify onClick on the MenuItem."},{name:"update:open",type:{names:["boolean"]}},{name:"update:selected",type:{names:["union"],elements:[{name:"MenuItemId"},{name:"Array",elements:[{name:"MenuItemId"}]},{name:"null"}]}}],slots:[{name:"toggle"},{name:"label"},{name:"default"}],sourceFiles:["../../packages/core/src/components/Select/Select.vue"]}},null,8,["doc"]),e(d,{src:"packages/core/src/components/Select/SelectGroup.ts",doc:{name:"PfMenuGroup",exportName:"default",displayName:"MenuGroup",description:"",tags:{},props:[{name:"label",description:"Group label",required:!1,type:{name:"string"}},{name:"titleId",description:"ID for title label",required:!1,type:{name:"string"}},{name:"labelHeadingLevel",description:"Group label heading level. Default is h1.",required:!1,type:{name:"union",elements:[{name:'"h1"'},{name:'"h2"'},{name:'"h3"'},{name:'"h4"'},{name:'"h5"'},{name:'"h6"'}]},defaultValue:{func:!1,value:"'h1'"}}],slots:[{name:"label"},{name:"default"}],sourceFiles:["/home/runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuGroup.vue"]}},null,8,["doc"]),e(d,{src:"packages/core/src/components/Select/SelectList.ts",doc:{name:"PfMenuList",exportName:"default",displayName:"MenuList",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuList.vue"]}},null,8,["doc"]),e(d,{src:"packages/core/src/components/Select/SelectOption.ts",doc:{name:"PfMenuItem",exportName:"default",displayName:"MenuItem",description:"",tags:{},props:[{name:"name",required:!1,type:{name:"string"}},{name:"value",required:!1,type:{name:"string"}},{name:"to",description:"Target navigation link",required:!1,type:{name:"string"}},{name:"check",tags:{beta:[{description:"Flag indicating the item has a checkbox",title:"beta"}]},required:!1,type:{name:"boolean"}},{name:"checkName",tags:{beta:[{description:"Name of the checkbox",title:"beta"}]},required:!1,type:{name:"string"}},{name:"active",description:"Flag indicating whether the item is active",required:!1,type:{name:"boolean"}},{name:"favorited",description:"Flag indicating if the item is favorited",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"loadButton",description:"Flag indicating if the item causes a load",required:!1,type:{name:"boolean"}},{name:"loading",description:"Flag indicating a loading state",required:!1,type:{name:"boolean"}},{name:"component",description:"Component used to render the menu item",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"disabled",description:"Render item as disabled option",required:!1,type:{name:"boolean"}},{name:"description",description:"Description of the menu item",required:!1,type:{name:"string"}},{name:"externalLink",description:"Render external link icon",required:!1,type:{name:"boolean"}},{name:"selected",description:"Flag indicating if the option is selected",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"focused",description:"Flag indicating the item is focused",required:!1,type:{name:"boolean"}},{name:"danger",description:"Flag indicating the item is in danger state",required:!1,type:{name:"boolean"}},{name:"direction",tags:{beta:[{description:"Sub menu direction",title:"beta"}]},required:!1,type:{name:"union",elements:[{name:'"down"'},{name:'"up"'}]}},{name:"onPath",tags:{beta:[{description:"True if item is on current selection path",title:"beta"}]},required:!1,type:{name:"boolean"}}],events:[{name:"update:favorited",type:{names:["boolean"]}},{name:"click",type:{names:["Event"]},description:"Callback for item click"},{name:"show-flyout",type:{names:["Event"]},tags:[{title:"beta",content:"Callback function when mouse leaves trigger"}]}],slots:[{name:"icon"},{name:"default"},{name:"description"},{name:"flyoutMenu"},{name:"actions"}],sourceFiles:["/home/runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuItem.vue"]}},null,8,["doc"])]),default:a(()=>[D,e(s,{title:"Single",source:`<pf-select>
  <pf-select-option disabled>
    Please Choose
  </pf-select-option>
  <pf-select-option value="Mr" />
  <pf-select-option value="Miss" />
  <pf-select-option value="Mrs" />
  <pf-select-option value="Ms" />
  <pf-select-option value="Dr" disabled />
</pf-select>`},{default:a(()=>[e(l,null,{default:a(()=>[e(t,{disabled:""},{default:a(()=>[n(" Please Choose ")]),_:1}),e(t,{value:"Mr"}),e(t,{value:"Miss"}),e(t,{value:"Mrs"}),e(t,{value:"Ms"}),e(t,{value:"Dr",disabled:""})]),_:1})]),_:1}),e(s,{title:"Single with description",source:`<pf-select>
  <pf-select-option value="Active" description="This is a description" />
  <pf-select-option value="Cancelled" />
  <pf-select-option value="Paused" />
  <pf-divider v-if="divider" />
  <pf-select-option value="Warning" />
  <pf-select-option value="Restarted" />
</pf-select>`},{default:a(()=>[e(l,null,{default:a(()=>[e(t,{value:"Active",description:"This is a description"}),e(t,{value:"Cancelled"}),e(t,{value:"Paused"}),m.value?(c(),p(f,{key:0})):h("",!0),e(t,{value:"Warning"}),e(t,{value:"Restarted"})]),_:1})]),_:1}),e(s,{title:"Grouped single",source:`<pf-select>
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
</pf-select>`},{default:a(()=>[e(l,null,{default:a(()=>[e(u,{label:"Status"},{default:a(()=>[e(t,{value:"Running"}),e(t,{value:"Stopped"}),e(t,{value:"Down"}),e(t,{value:"Degraded"}),e(t,{value:"Needs maintenance"})]),_:1}),m.value?(c(),p(f,{key:0})):h("",!0),e(u,{label:"Vendor names"},{default:a(()=>[e(t,{value:"Dell"}),e(t,{value:"Samsung",disabled:""}),e(t,{value:"Hewlett-Packard"})]),_:1})]),_:1})]),_:1}),e(s,{title:"Checkbox input",source:`<pf-select placeholder="Filter by status" variant="checkbox">
  <pf-select-option disabled>
    Please Choose
  </pf-select-option>
  <pf-select-option check value="Mr" />
  <pf-select-option check value="Miss" />
  <pf-select-option check value="Mrs" />
  <pf-select-option check value="Ms" />
  <pf-select-option check value="Dr" disabled />
</pf-select>`},{default:a(()=>[e(l,{placeholder:"Filter by status",variant:"checkbox"},{default:a(()=>[e(t,{disabled:""},{default:a(()=>[n(" Please Choose ")]),_:1}),e(t,{check:"",value:"Mr"}),e(t,{check:"",value:"Miss"}),e(t,{check:"",value:"Mrs"}),e(t,{check:"",value:"Ms"}),e(t,{check:"",value:"Dr",disabled:""})]),_:1})]),_:1}),e(s,{title:"Checkbox input with counts",source:`<pf-select placeholder="Filter by status" variant="checkbox">
  <pf-select-option disabled>
    Please Choose
  </pf-select-option>
  <pf-select-option check value="Mr" />
  <pf-select-option check value="Miss" />
  <pf-select-option check value="Mrs" />
  <pf-select-option check value="Ms" />
  <pf-select-option check value="Dr" disabled />
</pf-select>`},{default:a(()=>[e(l,{placeholder:"Filter by status",variant:"checkbox"},{default:a(()=>[e(t,{disabled:""},{default:a(()=>[n(" Please Choose ")]),_:1}),e(t,{check:"",value:"Mr"}),e(t,{check:"",value:"Miss"}),e(t,{check:"",value:"Mrs"}),e(t,{check:"",value:"Ms"}),e(t,{check:"",value:"Dr",disabled:""})]),_:1})]),_:1}),e(s,{title:"Checkbox input no badge",source:`<pf-select placeholder="Filter by status" variant="checkbox" selection-badge-hidden>
  <pf-select-option disabled>
    Please Choose
  </pf-select-option>
  <pf-select-option check value="Mr" />
  <pf-select-option check value="Miss" />
  <pf-select-option check value="Mrs" />
  <pf-select-option check value="Ms" />
  <pf-select-option check value="Dr" disabled />
</pf-select>`},{default:a(()=>[e(l,{placeholder:"Filter by status",variant:"checkbox","selection-badge-hidden":""},{default:a(()=>[e(t,{disabled:""},{default:a(()=>[n(" Please Choose ")]),_:1}),e(t,{check:"",value:"Mr"}),e(t,{check:"",value:"Miss"}),e(t,{check:"",value:"Mrs"}),e(t,{check:"",value:"Ms"}),e(t,{check:"",value:"Dr",disabled:""})]),_:1})]),_:1}),e(s,{title:"Grouped checkbox input",source:`<pf-select placeholder="Filter by status" variant="checkbox">
  <pf-select-option disabled>
    Please Choose
  </pf-select-option>
  <pf-select-option check value="Mr" />
  <pf-select-option check value="Miss" />
  <pf-select-option check value="Mrs" />
  <pf-select-option check value="Ms" />
  <pf-select-option check value="Dr" disabled />
</pf-select>`},{default:a(()=>[e(l,{placeholder:"Filter by status",variant:"checkbox"},{default:a(()=>[e(t,{disabled:""},{default:a(()=>[n(" Please Choose ")]),_:1}),e(t,{check:"",value:"Mr"}),e(t,{check:"",value:"Miss"}),e(t,{check:"",value:"Mrs"}),e(t,{check:"",value:"Ms"}),e(t,{check:"",value:"Dr",disabled:""})]),_:1})]),_:1}),e(s,{title:"Grouped single with filtering",source:`<pf-select placeholder="Filter by status" variant="checkbox">
  <pf-text-input :auto-validate="false" aria-label="Filter menu items" type="search" icon-variant="search" />
  <pf-divider />
  <pf-select-group label="Status">
    <pf-select-option value="Running" />
    <pf-select-option value="Stopped" />
    <pf-select-option value="Down" />
    <pf-select-option value="Degraded" />
    <pf-select-option value="Needs maintenance" />
  </pf-select-group>
  <pf-select-group label="Vendor names">
    <pf-select-option value="Dell" />
    <pf-select-option value="Samsung" disabled />
    <pf-select-option value="Hewlett-Packard" />
  </pf-select-group>
</pf-select>`},{default:a(()=>[e(l,{placeholder:"Filter by status",variant:"checkbox"},{default:a(()=>[e(_,{"auto-validate":!1,"aria-label":"Filter menu items",type:"search","icon-variant":"search"}),e(f),e(u,{label:"Status"},{default:a(()=>[e(t,{value:"Running"}),e(t,{value:"Stopped"}),e(t,{value:"Down"}),e(t,{value:"Degraded"}),e(t,{value:"Needs maintenance"})]),_:1}),e(u,{label:"Vendor names"},{default:a(()=>[e(t,{value:"Dell"}),e(t,{value:"Samsung",disabled:""}),e(t,{value:"Hewlett-Packard"})]),_:1})]),_:1})]),_:1}),e(s,{title:"Favorites",source:`<pf-select>
  <pf-select-group v-for="(groupOptions, group) of options" :key="group" :label="group">
    <pf-select-option
      v-for="option of groupOptions"
      :key="option.value"
      v-model:favorited="option.favorite"
      :value="option.value"
      :description="option.description"
      :disabled="option.disabled" />
  </pf-select-group>
</pf-select>`},{default:a(()=>[e(l,null,{default:a(()=>[(c(!0),b(k,null,g(y,(S,v)=>(c(),p(u,{key:v,label:v},{default:a(()=>[(c(!0),b(k,null,g(S,r=>(c(),p(t,{key:r.value,favorited:r.favorite,"onUpdate:favorited":q=>r.favorite=q,value:r.value,description:r.description,disabled:r.disabled},null,8,["favorited","onUpdate:favorited","value","description","disabled"]))),128))]),_:2},1032,["label"]))),128))]),_:1})]),_:1})]),_:1})}}});export{A as default};
