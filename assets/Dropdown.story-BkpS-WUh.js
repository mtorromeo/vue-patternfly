import{B as M}from"./bell-icon-DSijOHUB.js";import{C}from"./cubes-icon-HAhAslA6.js";import{f as T,g as G,m as F,r as l,a as s,c as V,o as N,w as o,b as n,e as t,u as f,d as O}from"./index-D5wXQzcQ.js";import{E as z}from"./ellipsis-vertical-icon-Mqg59a4Z.js";const B={name:"TableCellsIcon",height:512,width:512,svgPath:"M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 64l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0zM64 224l88 0 0 64-88 0 0-64zm232 0l0 64-88 0 0-64 88 0zm64 0l88 0 0 64-88 0 0-64zM152 352l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0z",yOffset:0,xOffset:0},U=T(B),$=G({__name:"Dropdown.story",setup(E){const x=F();function m(b){b.target instanceof HTMLElement&&x.add({title:`Clicked "${b.target.innerText}"`})}const c=l(!1),g=l(!1),k=l(!1),v=l(!1),y=l(!1),A=l(!1),D=l(!1),L=l(!1),q=l(!1);return(b,e)=>{const u=s("component-info"),i=s("pf-dropdown-item"),a=s("pf-divider"),p=s("pf-dropdown"),r=s("story-canvas"),S=s("pf-menu-toggle"),w=s("pf-dropdown-group"),I=s("doc-page");return N(),V(I,{name:"Components/Dropdown.story.vue",title:"Dropdown"},{description:o(()=>[...e[9]||(e[9]=[t("A ",-1),O("b",null,"dropdown",-1),t(" presents a menu of actions or links in a constrained space that will trigger a process or navigate to a new location. See select component guidelines for more information about making one or more selections from a list of items in a value list.",-1)])]),apidocs:o(()=>[n(u,{src:"packages/core/src/components/Dropdown/Dropdown.vue",doc:{name:"PfDropdown",exportName:"default",displayName:"Dropdown",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"id",required:!1,type:{name:"string"}},{name:"position",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'}]},defaultValue:{func:!1,value:"'left'"}},{name:"appendTo",description:"Element or selector where to render the floating menu",required:!1,type:{name:"union",elements:[{name:'"inline"'},{name:"string"},{name:"RendererElement"},{name:"null"},{name:"undefined"}]}},{name:"text",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"autoFocus",description:"Flag indicating the toggle should be focused after a selection.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"noCloseOnSelect",description:"Flag indicating that the dropdown should not automatically close on select.",required:!1,type:{name:"boolean"}},{name:"zIndex",description:"z-index of the dropdown menu",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"9999"}},{name:"placement",required:!1,type:{name:"Placement"},defaultValue:{func:!1,value:"'bottom'"}},{name:"splitButton",description:"Variant of split button toggle",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:'"default"'},{name:'"action"'},{name:'"checkbox"'}]}},{name:"variant",description:"Variant styles of the menu toggle",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"plain"'},{name:'"primary"'},{name:'"plainText"'},{name:'"secondary"'},{name:'"typeahead"'}]}},{name:"scrollable",description:"Indicates if the dropdown menu should be scrollable",required:!1,type:{name:"boolean"}},{name:"menuHeight",description:"Height of the dropdown menu",required:!1,type:{name:"string"}},{name:"maxMenuHeight",description:"Maximum height of dropdown menu",required:!1,type:{name:"string"}},{name:"shouldFocusFirstItemOnOpen",tags:{beta:[{description:"Flag indicating the first menu item should be focused after opening the dropdown.",title:"beta"}]},required:!1,type:{name:"boolean"}}],events:[{name:"select",type:{names:["Event"]}}],slots:[{name:"default"},{name:"toggle"}],sourceFiles:["../../packages/core/src/components/Dropdown/Dropdown.vue"]}}),n(u,{src:"packages/core/src/components/Menu/MenuGroup.vue",doc:{name:"PfMenuGroup",exportName:"default",displayName:"MenuGroup",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"label",description:"Group label",required:!1,type:{name:"string"}},{name:"titleId",description:"ID for title label",required:!1,type:{name:"string"}},{name:"labelHeadingLevel",description:"Group label heading level. Default is h1.",required:!1,type:{name:"union",elements:[{name:'"h1"'},{name:'"h2"'},{name:'"h3"'},{name:'"h4"'},{name:'"h5"'},{name:'"h6"'}]},defaultValue:{func:!1,value:"'h1'"}}],slots:[{name:"label"},{name:"default"}],sourceFiles:["../../packages/core/src/components/Menu/MenuGroup.vue"]},alias:"DropdownGroup"}),n(u,{src:"packages/core/src/components/Menu/MenuItem.vue",doc:{name:"PfMenuItem",exportName:"default",displayName:"MenuItem",description:"",tags:{},expose:[{name:"focus"},{name:"focused"}],props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"name",required:!1,type:{name:"string"}},{name:"value",required:!1,type:{name:"string"}},{name:"to",description:"Target navigation link",required:!1,type:{name:"string"}},{name:"check",tags:{beta:[{description:"Flag indicating the item has a checkbox",title:"beta"}]},required:!1,type:{name:"boolean"}},{name:"checkName",tags:{beta:[{description:"Name of the checkbox",title:"beta"}]},required:!1,type:{name:"string"}},{name:"active",description:"Flag indicating whether the item is active",required:!1,type:{name:"boolean"}},{name:"loadButton",description:"Flag indicating if the item causes a load",required:!1,type:{name:"boolean"}},{name:"loading",description:"Flag indicating a loading state",required:!1,type:{name:"boolean"}},{name:"component",description:"Component used to render the menu item",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"componentAttrs",description:"Additional attrs added to the link component",required:!1,type:{name:"union",elements:[{name:"Omit",elements:[{name:"ButtonHTMLAttributes"},{name:"union",elements:[{name:'"href"'},{name:'"aria-current"'},{name:'"disabled"'},{name:'"role"'},{name:'"for"'},{name:'"aria-disabled"'},{name:'"aria-expanded"'},{name:'"type"'},{name:'"download"'},{name:'"onClick"'}]}]},{name:"Omit",elements:[{name:"AnchorHTMLAttributes"},{name:"union",elements:[{name:'"href"'},{name:'"aria-current"'},{name:'"disabled"'},{name:'"role"'},{name:'"for"'},{name:'"aria-disabled"'},{name:'"aria-expanded"'},{name:'"type"'},{name:'"download"'},{name:'"onClick"'},{name:'"target"'},{name:'"referrerpolicy"'}]}]}]}},{name:"disabled",description:"Render item as disabled option",required:!1,type:{name:"boolean"}},{name:"description",description:"Description of the menu item",required:!1,type:{name:"string"}},{name:"externalLink",description:"Render external link icon",required:!1,type:{name:"boolean"}},{name:"selected",description:"Flag indicating if the option is selected",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"focused",description:"Flag indicating the item is focused",required:!1,type:{name:"boolean"}},{name:"danger",description:"Flag indicating the item is in danger state",required:!1,type:{name:"boolean"}},{name:"direction",tags:{beta:[{description:"Sub menu direction",title:"beta"}]},required:!1,type:{name:"union",elements:[{name:'"down"'},{name:'"up"'}]}},{name:"onPath",tags:{beta:[{description:"True if item is on current selection path",title:"beta"}]},required:!1,type:{name:"boolean"}},{name:"download",description:"Navigation link download. Only set when the to property is present.",required:!1,type:{name:"string"}},{name:"target",description:"Navigation link target.",required:!1,type:{name:"string"}},{name:"referrerpolicy",description:"Navigation link referrerpolicy.",required:!1,type:{name:"TSIndexedAccessType"}}],events:[{name:"click",type:{names:["Event"]},description:"Callback for item click"},{name:"showFlyout",type:{names:["Event"]},tags:[{title:"beta",content:"Callback function when mouse leaves trigger"}]}],slots:[{name:"icon"},{name:"default"},{name:"description"},{name:"flyout-menu"},{name:"actions"}],sourceFiles:["../../packages/core/src/components/Menu/MenuItem.vue"]},alias:"DropdownItem"}),n(u,{src:"packages/core/src/components/Menu/MenuList.vue",doc:{name:"PfMenuList",exportName:"default",displayName:"MenuList",description:"",tags:{},expose:[{name:"el"}],props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Menu/MenuList.vue"]},alias:"DropdownList"})]),default:o(()=>[n(r,{title:"Basic",source:`<pf-dropdown v-model:open="open1" text="Dropdown" should-focus-first-item-on-open>
  <pf-dropdown-item @click="onClick">Link</pf-dropdown-item>
  <pf-dropdown-item component="button" @click="onClick">
    Action
  </pf-dropdown-item>
  <pf-dropdown-item disabled @click="onClick">
    Disabled Link
  </pf-dropdown-item>
  <pf-dropdown-item disabled component="button" @click="onClick">
    Disabled Action
  </pf-dropdown-item>
  <pf-divider />
  <pf-dropdown-item @click="onClick">Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button" @click="onClick">
    Separated Action
  </pf-dropdown-item>
</pf-dropdown>`},{default:o(()=>[n(p,{open:c.value,"onUpdate:open":e[0]||(e[0]=d=>c.value=d),text:"Dropdown","should-focus-first-item-on-open":""},{default:o(()=>[n(i,{onClick:m},{default:o(()=>[...e[10]||(e[10]=[t("Link",-1)])]),_:1}),n(i,{component:"button",onClick:m},{default:o(()=>[...e[11]||(e[11]=[t(" Action ",-1)])]),_:1}),n(i,{disabled:"",onClick:m},{default:o(()=>[...e[12]||(e[12]=[t(" Disabled Link ",-1)])]),_:1}),n(i,{disabled:"",component:"button",onClick:m},{default:o(()=>[...e[13]||(e[13]=[t(" Disabled Action ",-1)])]),_:1}),n(a),n(i,{onClick:m},{default:o(()=>[...e[14]||(e[14]=[t("Separated Link",-1)])]),_:1}),n(i,{component:"button",onClick:m},{default:o(()=>[...e[15]||(e[15]=[t(" Separated Action ",-1)])]),_:1})]),_:1},8,["open"])]),_:1}),n(r,{title:"With initial selection",source:`<pf-dropdown v-model:open="open2" text="Dropdown">
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button" focused>Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-divider />
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:o(()=>[n(p,{open:g.value,"onUpdate:open":e[1]||(e[1]=d=>g.value=d),text:"Dropdown"},{default:o(()=>[n(i,null,{default:o(()=>[...e[16]||(e[16]=[t("Link",-1)])]),_:1}),n(i,{component:"button",focused:""},{default:o(()=>[...e[17]||(e[17]=[t("Action",-1)])]),_:1}),n(i,{disabled:""},{default:o(()=>[...e[18]||(e[18]=[t("Disabled Link",-1)])]),_:1}),n(i,{disabled:"",component:"button"},{default:o(()=>[...e[19]||(e[19]=[t("Disabled Action",-1)])]),_:1}),n(a),n(i,null,{default:o(()=>[...e[20]||(e[20]=[t("Separated Link",-1)])]),_:1}),n(i,{component:"button"},{default:o(()=>[...e[21]||(e[21]=[t("Separated Action",-1)])]),_:1})]),_:1},8,["open"])]),_:1}),n(r,{title:"Disabled",source:`<pf-dropdown v-model:open="open3" text="Dropdown" disabled>
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-divider />
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:o(()=>[n(p,{open:k.value,"onUpdate:open":e[2]||(e[2]=d=>k.value=d),text:"Dropdown",disabled:""},{default:o(()=>[n(i,null,{default:o(()=>[...e[22]||(e[22]=[t("Link",-1)])]),_:1}),n(i,{component:"button"},{default:o(()=>[...e[23]||(e[23]=[t("Action",-1)])]),_:1}),n(i,{disabled:""},{default:o(()=>[...e[24]||(e[24]=[t("Disabled Link",-1)])]),_:1}),n(i,{disabled:"",component:"button"},{default:o(()=>[...e[25]||(e[25]=[t("Disabled Action",-1)])]),_:1}),n(a),n(i,null,{default:o(()=>[...e[26]||(e[26]=[t("Separated Link",-1)])]),_:1}),n(i,{component:"button"},{default:o(()=>[...e[27]||(e[27]=[t("Separated Action",-1)])]),_:1})]),_:1},8,["open"])]),_:1}),n(r,{title:"Primary toggle",source:`<pf-dropdown v-model:open="open4" text="Dropdown" variant="primary">
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-divider />
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:o(()=>[n(p,{open:v.value,"onUpdate:open":e[3]||(e[3]=d=>v.value=d),text:"Dropdown",variant:"primary"},{default:o(()=>[n(i,null,{default:o(()=>[...e[28]||(e[28]=[t("Link",-1)])]),_:1}),n(i,{component:"button"},{default:o(()=>[...e[29]||(e[29]=[t("Action",-1)])]),_:1}),n(i,{disabled:""},{default:o(()=>[...e[30]||(e[30]=[t("Disabled Link",-1)])]),_:1}),n(i,{disabled:"",component:"button"},{default:o(()=>[...e[31]||(e[31]=[t("Disabled Action",-1)])]),_:1}),n(a),n(i,null,{default:o(()=>[...e[32]||(e[32]=[t("Separated Link",-1)])]),_:1}),n(i,{component:"button"},{default:o(()=>[...e[33]||(e[33]=[t("Separated Action",-1)])]),_:1})]),_:1},8,["open"])]),_:1}),n(r,{title:"Direction up",source:`<pf-dropdown v-model:open="open6" text="Dropdown" placement="top">
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-divider />
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:o(()=>[n(p,{open:y.value,"onUpdate:open":e[4]||(e[4]=d=>y.value=d),text:"Dropdown",placement:"top"},{default:o(()=>[n(i,null,{default:o(()=>[...e[34]||(e[34]=[t("Link",-1)])]),_:1}),n(i,{component:"button"},{default:o(()=>[...e[35]||(e[35]=[t("Action",-1)])]),_:1}),n(i,{disabled:""},{default:o(()=>[...e[36]||(e[36]=[t("Disabled Link",-1)])]),_:1}),n(i,{disabled:"",component:"button"},{default:o(()=>[...e[37]||(e[37]=[t("Disabled Action",-1)])]),_:1}),n(a),n(i,null,{default:o(()=>[...e[38]||(e[38]=[t("Separated Link",-1)])]),_:1}),n(i,{component:"button"},{default:o(()=>[...e[39]||(e[39]=[t("Separated Action",-1)])]),_:1})]),_:1},8,["open"])]),_:1}),n(r,{title:"With kebab",source:`<pf-dropdown v-model:open="open7">
  <template #toggle>
    <pf-menu-toggle variant="plain">
      <ellipsis-vertical-icon />
    </pf-menu-toggle>
  </template>

  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-divider />
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:o(()=>[n(p,{open:A.value,"onUpdate:open":e[5]||(e[5]=d=>A.value=d)},{toggle:o(()=>[n(S,{variant:"plain"},{default:o(()=>[n(f(z))]),_:1})]),default:o(()=>[n(i,null,{default:o(()=>[...e[40]||(e[40]=[t("Link",-1)])]),_:1}),n(i,{component:"button"},{default:o(()=>[...e[41]||(e[41]=[t("Action",-1)])]),_:1}),n(i,{disabled:""},{default:o(()=>[...e[42]||(e[42]=[t("Disabled Link",-1)])]),_:1}),n(i,{disabled:"",component:"button"},{default:o(()=>[...e[43]||(e[43]=[t("Disabled Action",-1)])]),_:1}),n(a),n(i,null,{default:o(()=>[...e[44]||(e[44]=[t("Separated Link",-1)])]),_:1}),n(i,{component:"button"},{default:o(()=>[...e[45]||(e[45]=[t("Separated Action",-1)])]),_:1})]),_:1},8,["open"])]),_:1}),n(r,{title:"Icon only",source:`<pf-dropdown v-model:open="open8">
  <template #toggle>
    <pf-menu-toggle aria-label="Applications" variant="plain">
      <table-cells-icon />
    </pf-menu-toggle>
  </template>

  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-divider />
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:o(()=>[n(p,{open:D.value,"onUpdate:open":e[6]||(e[6]=d=>D.value=d)},{toggle:o(()=>[n(S,{"aria-label":"Applications",variant:"plain"},{default:o(()=>[n(f(U))]),_:1})]),default:o(()=>[n(i,null,{default:o(()=>[...e[46]||(e[46]=[t("Link",-1)])]),_:1}),n(i,{component:"button"},{default:o(()=>[...e[47]||(e[47]=[t("Action",-1)])]),_:1}),n(i,{disabled:""},{default:o(()=>[...e[48]||(e[48]=[t("Disabled Link",-1)])]),_:1}),n(i,{disabled:"",component:"button"},{default:o(()=>[...e[49]||(e[49]=[t("Disabled Action",-1)])]),_:1}),n(a),n(i,null,{default:o(()=>[...e[50]||(e[50]=[t("Separated Link",-1)])]),_:1}),n(i,{component:"button"},{default:o(()=>[...e[51]||(e[51]=[t("Separated Action",-1)])]),_:1})]),_:1},8,["open"])]),_:1}),n(r,{title:"With groups",source:`<pf-dropdown v-model:open="open9" text="Dropdown">
  <pf-dropdown-group>
    <pf-dropdown-item>Link</pf-dropdown-item>
    <pf-dropdown-item component="button">
      Action
    </pf-dropdown-item>
  </pf-dropdown-group>
  <pf-divider component="li" />
  <pf-dropdown-group>
    <template #label>Group 2</template>
    <pf-dropdown-item>
      Group 2 Link
    </pf-dropdown-item>
    <pf-dropdown-item component="button">
      Group 2 Action
    </pf-dropdown-item>
  </pf-dropdown-group>
  <pf-divider component="li" />
  <pf-dropdown-group>
    <template #label>Group 3</template>
    <pf-dropdown-item>Group 3 Link</pf-dropdown-item>
    <pf-dropdown-item component="button">
      Group 3 Action Action
    </pf-dropdown-item>
  </pf-dropdown-group>
</pf-dropdown>`},{default:o(()=>[n(p,{open:L.value,"onUpdate:open":e[7]||(e[7]=d=>L.value=d),text:"Dropdown"},{default:o(()=>[n(w,null,{default:o(()=>[n(i,null,{default:o(()=>[...e[52]||(e[52]=[t("Link",-1)])]),_:1}),n(i,{component:"button"},{default:o(()=>[...e[53]||(e[53]=[t(" Action ",-1)])]),_:1})]),_:1}),n(a,{component:"li"}),n(w,null,{label:o(()=>[...e[54]||(e[54]=[t("Group 2",-1)])]),default:o(()=>[n(i,null,{default:o(()=>[...e[55]||(e[55]=[t(" Group 2 Link ",-1)])]),_:1}),n(i,{component:"button"},{default:o(()=>[...e[56]||(e[56]=[t(" Group 2 Action ",-1)])]),_:1})]),_:1}),n(a,{component:"li"}),n(w,null,{label:o(()=>[...e[57]||(e[57]=[t("Group 3",-1)])]),default:o(()=>[n(i,null,{default:o(()=>[...e[58]||(e[58]=[t("Group 3 Link",-1)])]),_:1}),n(i,{component:"button"},{default:o(()=>[...e[59]||(e[59]=[t(" Group 3 Action Action ",-1)])]),_:1})]),_:1})]),_:1},8,["open"])]),_:1}),n(r,{title:"With descriptions",source:`<pf-dropdown v-model:open="open10" text="Dropdown">
  <pf-dropdown-item description="This is a description">
    <template #icon>
      <cubes-icon />
    </template>
    Link
  </pf-dropdown-item>
  <pf-dropdown-item component="button" description="This is a very long description that describes the menu item">
    <template #icon>
      <bell-icon />
    </template>
    Action
  </pf-dropdown-item>
  <pf-dropdown-item disabled description="Disabled link description">
    Disabled Link
  </pf-dropdown-item>
  <pf-dropdown-item disabled component="button" description="This is a description">
    Disabled Action
  </pf-dropdown-item>
</pf-dropdown>`},{default:o(()=>[n(p,{open:q.value,"onUpdate:open":e[8]||(e[8]=d=>q.value=d),text:"Dropdown"},{default:o(()=>[n(i,{description:"This is a description"},{icon:o(()=>[n(f(C))]),default:o(()=>[e[60]||(e[60]=t(" Link ",-1))]),_:1}),n(i,{component:"button",description:"This is a very long description that describes the menu item"},{icon:o(()=>[n(f(M))]),default:o(()=>[e[61]||(e[61]=t(" Action ",-1))]),_:1}),n(i,{disabled:"",description:"Disabled link description"},{default:o(()=>[...e[62]||(e[62]=[t(" Disabled Link ",-1)])]),_:1}),n(i,{disabled:"",component:"button",description:"This is a description"},{default:o(()=>[...e[63]||(e[63]=[t(" Disabled Action ",-1)])]),_:1})]),_:1},8,["open"])]),_:1}),n(r,{title:"Menu teleported in body",source:`<pf-dropdown text="Dropdown" append-to="body">
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button">
    Action
  </pf-dropdown-item>
  <pf-dropdown-item disabled>
    Disabled Link
  </pf-dropdown-item>
  <pf-dropdown-item disabled component="button">
    Disabled Action
  </pf-dropdown-item>
  <pf-divider />
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">
    Separated Action
  </pf-dropdown-item>
</pf-dropdown>`},{default:o(()=>[n(p,{text:"Dropdown","append-to":"body"},{default:o(()=>[n(i,null,{default:o(()=>[...e[64]||(e[64]=[t("Link",-1)])]),_:1}),n(i,{component:"button"},{default:o(()=>[...e[65]||(e[65]=[t(" Action ",-1)])]),_:1}),n(i,{disabled:""},{default:o(()=>[...e[66]||(e[66]=[t(" Disabled Link ",-1)])]),_:1}),n(i,{disabled:"",component:"button"},{default:o(()=>[...e[67]||(e[67]=[t(" Disabled Action ",-1)])]),_:1}),n(a),n(i,null,{default:o(()=>[...e[68]||(e[68]=[t("Separated Link",-1)])]),_:1}),n(i,{component:"button"},{default:o(()=>[...e[69]||(e[69]=[t(" Separated Action ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})}}});export{$ as default};
