import{B as x}from"./bell-icon-DxU0ZX_c.js";import{C as V}from"./cubes-icon-D0ftzX_H.js";import{m as I,f as C,n as M,r,o as G,c as T,w as n,a as o,b as e,u as f,d as F,e as s}from"./index-CXcl0Ekg.js";import{E as N}from"./ellipsis-vertical-icon-Br2JCUFj.js";const H={name:"TableCellsIcon",height:512,width:512,svgPath:"M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 64v64H64V96h88zm56 0h88v64H208V96zm240 0v64H360V96h88zM64 224h88v64H64V224zm232 0v64H208V224h88zm64 0h88v64H360V224zM152 352v64H64V352h88zm56 0h88v64H208V352zm240 0v64H360V352h88z",yOffset:0,xOffset:0},z=I(H),O=z,U=F("b",null,"dropdown",-1),$=C({__name:"Dropdown.story",setup(B){const S=M();function m(c){c.target instanceof HTMLElement&&S.add({title:`Clicked "${c.target.innerText}"`})}const w=r(!1),g=r(!1),v=r(!1),_=r(!1),k=r(!1),y=r(!1),h=r(!1),D=r(!1),A=r(!1);return(c,a)=>{const u=s("component-info"),t=s("pf-dropdown-item"),i=s("pf-divider"),p=s("pf-dropdown"),l=s("story-canvas"),L=s("pf-menu-toggle"),b=s("pf-dropdown-group"),q=s("doc-page");return G(),T(q,{name:"Components/Dropdown.story.vue",title:"Dropdown"},{description:n(()=>[o("A "),U,o(" presents a menu of actions or links in a constrained space that will trigger a process or navigate to a new location. See select component guidelines for more information about making one or more selections from a list of items in a value list.")]),apidocs:n(()=>[e(u,{src:"packages/core/src/components/Dropdown/Dropdown.vue",doc:{name:"PfDropdown",exportName:"default",displayName:"Dropdown",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"id",required:!1,type:{name:"string"}},{name:"position",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'}]},defaultValue:{func:!1,value:"'left'"}},{name:"appendTo",description:"Element or selector where to render the floating menu",required:!1,type:{name:"union",elements:[{name:'"inline"'},{name:"string"},{name:"RendererElement"},{name:"null"},{name:"undefined"}]},defaultValue:{func:!1,value:"'inline'"}},{name:"text",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"open",description:"Flag to indicate if menu is opened.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"autoFocus",description:"Flag indicating the toggle should be focused after a selection.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"noCloseOnSelect",description:"Flag indicating that the dropdown should not automatically close on select.",required:!1,type:{name:"boolean"}},{name:"zIndex",description:"z-index of the dropdown menu",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"9999"}},{name:"placement",required:!1,type:{name:"Placement"},defaultValue:{func:!1,value:"'bottom'"}},{name:"splitButton",description:"Variant of split button toggle",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:'"default"'},{name:'"action"'},{name:'"checkbox"'}]}},{name:"variant",description:"Variant styles of the menu toggle",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"plain"'},{name:'"primary"'},{name:'"plainText"'},{name:'"secondary"'},{name:'"typeahead"'}]}}],events:[{name:"update:open",type:{names:["boolean"]}},{name:"select",type:{names:["Event"]}}],slots:[{name:"default"},{name:"toggle"}],sourceFiles:["../../packages/core/src/components/Dropdown/Dropdown.vue"]}},null,8,["doc"]),e(u,{src:"packages/core/src/components/Menu/MenuGroup.vue",doc:{name:"PfMenuGroup",exportName:"default",displayName:"MenuGroup",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"label",description:"Group label",required:!1,type:{name:"string"}},{name:"titleId",description:"ID for title label",required:!1,type:{name:"string"}},{name:"labelHeadingLevel",description:"Group label heading level. Default is h1.",required:!1,type:{name:"union",elements:[{name:'"h1"'},{name:'"h2"'},{name:'"h3"'},{name:'"h4"'},{name:'"h5"'},{name:'"h6"'}]},defaultValue:{func:!1,value:"'h1'"}}],slots:[{name:"label"},{name:"default"}],sourceFiles:["../../packages/core/src/components/Menu/MenuGroup.vue"]},alias:"DropdownGroup"},null,8,["doc"]),e(u,{src:"packages/core/src/components/Menu/MenuItem.vue",doc:{name:"PfMenuItem",exportName:"default",displayName:"MenuItem",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"name",required:!1,type:{name:"string"}},{name:"value",required:!1,type:{name:"string"}},{name:"to",description:"Target navigation link",required:!1,type:{name:"string"}},{name:"check",tags:{beta:[{description:"Flag indicating the item has a checkbox",title:"beta"}]},required:!1,type:{name:"boolean"}},{name:"checkName",tags:{beta:[{description:"Name of the checkbox",title:"beta"}]},required:!1,type:{name:"string"}},{name:"active",description:"Flag indicating whether the item is active",required:!1,type:{name:"boolean"}},{name:"favorited",description:"Flag indicating if the item is favorited",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"loadButton",description:"Flag indicating if the item causes a load",required:!1,type:{name:"boolean"}},{name:"loading",description:"Flag indicating a loading state",required:!1,type:{name:"boolean"}},{name:"component",description:"Component used to render the menu item",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"disabled",description:"Render item as disabled option",required:!1,type:{name:"boolean"}},{name:"description",description:"Description of the menu item",required:!1,type:{name:"string"}},{name:"externalLink",description:"Render external link icon",required:!1,type:{name:"boolean"}},{name:"selected",description:"Flag indicating if the option is selected",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"focused",description:"Flag indicating the item is focused",required:!1,type:{name:"boolean"}},{name:"danger",description:"Flag indicating the item is in danger state",required:!1,type:{name:"boolean"}},{name:"direction",tags:{beta:[{description:"Sub menu direction",title:"beta"}]},required:!1,type:{name:"union",elements:[{name:'"down"'},{name:'"up"'}]}},{name:"onPath",tags:{beta:[{description:"True if item is on current selection path",title:"beta"}]},required:!1,type:{name:"boolean"}},{name:"download",description:"Navigation link download. Only set when the to property is present.",required:!1,type:{name:"string"}}],events:[{name:"update:favorited",type:{names:["boolean"]}},{name:"click",type:{names:["Event"]},description:"Callback for item click"},{name:"show-flyout",type:{names:["Event"]},tags:[{title:"beta",content:"Callback function when mouse leaves trigger"}]}],slots:[{name:"icon"},{name:"default"},{name:"description"},{name:"flyoutMenu"},{name:"actions"}],sourceFiles:["../../packages/core/src/components/Menu/MenuItem.vue"]},alias:"DropdownItem"},null,8,["doc"]),e(u,{src:"packages/core/src/components/Menu/MenuList.vue",doc:{name:"PfMenuList",exportName:"default",displayName:"MenuList",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Menu/MenuList.vue"]},alias:"DropdownList"},null,8,["doc"])]),default:n(()=>[e(l,{title:"Basic",source:`<pf-dropdown v-model:open="open1" text="Dropdown">
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
</pf-dropdown>`},{default:n(()=>[e(p,{open:w.value,"onUpdate:open":a[0]||(a[0]=d=>w.value=d),text:"Dropdown"},{default:n(()=>[e(t,{onClick:m},{default:n(()=>[o("Link")]),_:1}),e(t,{component:"button",onClick:m},{default:n(()=>[o(" Action ")]),_:1}),e(t,{disabled:"",onClick:m},{default:n(()=>[o(" Disabled Link ")]),_:1}),e(t,{disabled:"",component:"button",onClick:m},{default:n(()=>[o(" Disabled Action ")]),_:1}),e(i),e(t,{onClick:m},{default:n(()=>[o("Separated Link")]),_:1}),e(t,{component:"button",onClick:m},{default:n(()=>[o(" Separated Action ")]),_:1})]),_:1},8,["open"])]),_:1}),e(l,{title:"With initial selection",source:`<pf-dropdown v-model:open="open2" text="Dropdown">
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button" focused>Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-divider />
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[e(p,{open:g.value,"onUpdate:open":a[1]||(a[1]=d=>g.value=d),text:"Dropdown"},{default:n(()=>[e(t,null,{default:n(()=>[o("Link")]),_:1}),e(t,{component:"button",focused:""},{default:n(()=>[o("Action")]),_:1}),e(t,{disabled:""},{default:n(()=>[o("Disabled Link")]),_:1}),e(t,{disabled:"",component:"button"},{default:n(()=>[o("Disabled Action")]),_:1}),e(i),e(t,null,{default:n(()=>[o("Separated Link")]),_:1}),e(t,{component:"button"},{default:n(()=>[o("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1}),e(l,{title:"Disabled",source:`<pf-dropdown v-model:open="open3" text="Dropdown" disabled>
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-divider />
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[e(p,{open:v.value,"onUpdate:open":a[2]||(a[2]=d=>v.value=d),text:"Dropdown",disabled:""},{default:n(()=>[e(t,null,{default:n(()=>[o("Link")]),_:1}),e(t,{component:"button"},{default:n(()=>[o("Action")]),_:1}),e(t,{disabled:""},{default:n(()=>[o("Disabled Link")]),_:1}),e(t,{disabled:"",component:"button"},{default:n(()=>[o("Disabled Action")]),_:1}),e(i),e(t,null,{default:n(()=>[o("Separated Link")]),_:1}),e(t,{component:"button"},{default:n(()=>[o("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1}),e(l,{title:"Primary toggle",source:`<pf-dropdown v-model:open="open4" text="Dropdown" variant="primary">
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-divider />
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[e(p,{open:_.value,"onUpdate:open":a[3]||(a[3]=d=>_.value=d),text:"Dropdown",variant:"primary"},{default:n(()=>[e(t,null,{default:n(()=>[o("Link")]),_:1}),e(t,{component:"button"},{default:n(()=>[o("Action")]),_:1}),e(t,{disabled:""},{default:n(()=>[o("Disabled Link")]),_:1}),e(t,{disabled:"",component:"button"},{default:n(()=>[o("Disabled Action")]),_:1}),e(i),e(t,null,{default:n(()=>[o("Separated Link")]),_:1}),e(t,{component:"button"},{default:n(()=>[o("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1}),e(l,{title:"Direction up",source:`<pf-dropdown v-model:open="open6" text="Dropdown" placement="top">
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-divider />
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[e(p,{open:k.value,"onUpdate:open":a[4]||(a[4]=d=>k.value=d),text:"Dropdown",placement:"top"},{default:n(()=>[e(t,null,{default:n(()=>[o("Link")]),_:1}),e(t,{component:"button"},{default:n(()=>[o("Action")]),_:1}),e(t,{disabled:""},{default:n(()=>[o("Disabled Link")]),_:1}),e(t,{disabled:"",component:"button"},{default:n(()=>[o("Disabled Action")]),_:1}),e(i),e(t,null,{default:n(()=>[o("Separated Link")]),_:1}),e(t,{component:"button"},{default:n(()=>[o("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1}),e(l,{title:"With kebab",source:`<pf-dropdown v-model:open="open7">
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
</pf-dropdown>`},{default:n(()=>[e(p,{open:y.value,"onUpdate:open":a[5]||(a[5]=d=>y.value=d)},{toggle:n(()=>[e(L,{variant:"plain"},{default:n(()=>[e(f(N))]),_:1})]),default:n(()=>[e(t,null,{default:n(()=>[o("Link")]),_:1}),e(t,{component:"button"},{default:n(()=>[o("Action")]),_:1}),e(t,{disabled:""},{default:n(()=>[o("Disabled Link")]),_:1}),e(t,{disabled:"",component:"button"},{default:n(()=>[o("Disabled Action")]),_:1}),e(i),e(t,null,{default:n(()=>[o("Separated Link")]),_:1}),e(t,{component:"button"},{default:n(()=>[o("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1}),e(l,{title:"Icon only",source:`<pf-dropdown v-model:open="open8">
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
</pf-dropdown>`},{default:n(()=>[e(p,{open:h.value,"onUpdate:open":a[6]||(a[6]=d=>h.value=d)},{toggle:n(()=>[e(L,{"aria-label":"Applications",variant:"plain"},{default:n(()=>[e(f(O))]),_:1})]),default:n(()=>[e(t,null,{default:n(()=>[o("Link")]),_:1}),e(t,{component:"button"},{default:n(()=>[o("Action")]),_:1}),e(t,{disabled:""},{default:n(()=>[o("Disabled Link")]),_:1}),e(t,{disabled:"",component:"button"},{default:n(()=>[o("Disabled Action")]),_:1}),e(i),e(t,null,{default:n(()=>[o("Separated Link")]),_:1}),e(t,{component:"button"},{default:n(()=>[o("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1}),e(l,{title:"With groups",source:`<pf-dropdown v-model:open="open9" text="Dropdown">
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
</pf-dropdown>`},{default:n(()=>[e(p,{open:D.value,"onUpdate:open":a[7]||(a[7]=d=>D.value=d),text:"Dropdown"},{default:n(()=>[e(b,null,{default:n(()=>[e(t,null,{default:n(()=>[o("Link")]),_:1}),e(t,{component:"button"},{default:n(()=>[o(" Action ")]),_:1})]),_:1}),e(i,{component:"li"}),e(b,null,{label:n(()=>[o("Group 2")]),default:n(()=>[e(t,null,{default:n(()=>[o(" Group 2 Link ")]),_:1}),e(t,{component:"button"},{default:n(()=>[o(" Group 2 Action ")]),_:1})]),_:1}),e(i,{component:"li"}),e(b,null,{label:n(()=>[o("Group 3")]),default:n(()=>[e(t,null,{default:n(()=>[o("Group 3 Link")]),_:1}),e(t,{component:"button"},{default:n(()=>[o(" Group 3 Action Action ")]),_:1})]),_:1})]),_:1},8,["open"])]),_:1}),e(l,{title:"With descriptions",source:`<pf-dropdown v-model:open="open10" text="Dropdown">
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
</pf-dropdown>`},{default:n(()=>[e(p,{open:A.value,"onUpdate:open":a[8]||(a[8]=d=>A.value=d),text:"Dropdown"},{default:n(()=>[e(t,{description:"This is a description"},{icon:n(()=>[e(f(V))]),default:n(()=>[o(" Link ")]),_:1}),e(t,{component:"button",description:"This is a very long description that describes the menu item"},{icon:n(()=>[e(f(x))]),default:n(()=>[o(" Action ")]),_:1}),e(t,{disabled:"",description:"Disabled link description"},{default:n(()=>[o(" Disabled Link ")]),_:1}),e(t,{disabled:"",component:"button",description:"This is a description"},{default:n(()=>[o(" Disabled Action ")]),_:1})]),_:1},8,["open"])]),_:1}),e(l,{title:"Menu teleported in body",source:`<pf-dropdown text="Dropdown" append-to="body">
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
</pf-dropdown>`},{default:n(()=>[e(p,{text:"Dropdown","append-to":"body"},{default:n(()=>[e(t,null,{default:n(()=>[o("Link")]),_:1}),e(t,{component:"button"},{default:n(()=>[o(" Action ")]),_:1}),e(t,{disabled:""},{default:n(()=>[o(" Disabled Link ")]),_:1}),e(t,{disabled:"",component:"button"},{default:n(()=>[o(" Disabled Action ")]),_:1}),e(i),e(t,null,{default:n(()=>[o("Separated Link")]),_:1}),e(t,{component:"button"},{default:n(()=>[o(" Separated Action ")]),_:1})]),_:1})]),_:1})]),_:1},8,["name"])}}});export{$ as default};
