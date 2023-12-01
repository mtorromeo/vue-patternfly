import{B as q}from"./bell-icon-gh47LV3m.js";import{C as V}from"./cubes-icon-ILriKpRg.js";import{m as C,f as G,n as M,r,a as m,o as T,c as F,w as n,b as o,d as e,u as f,e as I}from"./index-LULJ9ZOK.js";import{E as H}from"./ellipsis-vertical-icon-r6-NwotS.js";const N={name:"TableCellsIcon",height:512,width:512,svgPath:"M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 64v64H64V96h88zm56 0h88v64H208V96zm240 0v64H360V96h88zM64 224h88v64H64V224zm232 0v64H208V224h88zm64 0h88v64H360V224zM152 352v64H64V352h88zm56 0h88v64H208V352zm240 0v64H360V352h88z",yOffset:0,xOffset:0},z=C(N),U=z,B=I("b",null,"dropdown",-1),$=G({__name:"Dropdown.story",setup(P){const S=M();function s(c){c.target instanceof HTMLElement&&S.add({title:`Clicked "${c.target.innerText}"`})}const w=r(!1),g=r(!1),_=r(!1),k=r(!1),v=r(!1),D=r(!1),y=r(!1),L=r(!1),A=r(!1);return(c,d)=>{const u=m("component-info"),t=m("pf-dropdown-item"),p=m("pf-divider"),a=m("pf-dropdown"),l=m("story-canvas"),h=m("pf-menu-toggle"),b=m("pf-dropdown-group"),x=m("doc-page");return T(),F(x,{title:"Dropdown"},{description:n(()=>[o("A "),B,o(" presents a menu of actions or links in a constrained space that will trigger a process or navigate to a new location. See select component guidelines for more information about making one or more selections from a list of items in a value list.")]),apidocs:n(()=>[e(u,{src:"packages/core/src/components/Dropdown/Dropdown.vue",doc:{name:"PfDropdown",exportName:"default",displayName:"Dropdown",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"position",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'}]},defaultValue:{func:!1,value:"'left'"}},{name:"appendTo",required:!1,type:{name:"union",elements:[{name:'"inline"'},{name:"string"},{name:"RendererElement"},{name:"null"},{name:"undefined"}]},defaultValue:{func:!1,value:"'inline'"}},{name:"text",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"open",description:"Flag to indicate if menu is opened.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"autoFocus",description:"Flag indicating the toggle should be focused after a selection.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"noCloseOnSelect",description:"Flag indicating that the dropdown should not automatically close on select.",required:!1,type:{name:"boolean"}},{name:"zIndex",description:"z-index of the dropdown menu",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"9999"}},{name:"placement",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'},{name:"Placement"}]},defaultValue:{func:!1,value:"'bottom'"}},{name:"splitButton",description:"Variant of split button toggle",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:'"default"'},{name:'"action"'},{name:'"checkbox"'}]}},{name:"variant",description:"Variant styles of the menu toggle",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"plain"'},{name:'"primary"'},{name:'"plainText"'},{name:'"secondary"'},{name:'"typeahead"'}]}}],events:[{name:"update:open",type:{names:["boolean"]}},{name:"select",type:{names:["Event"]}}],slots:[{name:"default"},{name:"toggle"}],sourceFiles:["../../packages/core/src/components/Dropdown/Dropdown.vue"]}},null,8,["doc"]),e(u,{src:"packages/core/src/components/Dropdown/DropdownGroup.ts",doc:{name:"PfMenuGroup",exportName:"default",displayName:"MenuGroup",description:"",tags:{},props:[{name:"label",description:"Group label",required:!1,type:{name:"string"}},{name:"titleId",description:"ID for title label",required:!1,type:{name:"string"}},{name:"labelHeadingLevel",description:"Group label heading level. Default is h1.",required:!1,type:{name:"union",elements:[{name:'"h1"'},{name:'"h2"'},{name:'"h3"'},{name:'"h4"'},{name:'"h5"'},{name:'"h6"'}]},defaultValue:{func:!1,value:"'h1'"}}],slots:[{name:"label"},{name:"default"}],sourceFiles:["/home/runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuGroup.vue"]}},null,8,["doc"]),e(u,{src:"packages/core/src/components/Dropdown/DropdownItem.ts",doc:{name:"PfMenuItem",exportName:"default",displayName:"MenuItem",description:"",tags:{},props:[{name:"name",required:!1,type:{name:"string"}},{name:"value",required:!1,type:{name:"string"}},{name:"to",description:"Target navigation link",required:!1,type:{name:"string"}},{name:"check",tags:{beta:[{description:"Flag indicating the item has a checkbox",title:"beta"}]},required:!1,type:{name:"boolean"}},{name:"checkName",tags:{beta:[{description:"Name of the checkbox",title:"beta"}]},required:!1,type:{name:"string"}},{name:"active",description:"Flag indicating whether the item is active",required:!1,type:{name:"boolean"}},{name:"favorited",description:"Flag indicating if the item is favorited",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"loadButton",description:"Flag indicating if the item causes a load",required:!1,type:{name:"boolean"}},{name:"loading",description:"Flag indicating a loading state",required:!1,type:{name:"boolean"}},{name:"component",description:"Component used to render the menu item",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"disabled",description:"Render item as disabled option",required:!1,type:{name:"boolean"}},{name:"description",description:"Description of the menu item",required:!1,type:{name:"string"}},{name:"externalLink",description:"Render external link icon",required:!1,type:{name:"boolean"}},{name:"selected",description:"Flag indicating if the option is selected",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"focused",description:"Flag indicating the item is focused",required:!1,type:{name:"boolean"}},{name:"danger",description:"Flag indicating the item is in danger state",required:!1,type:{name:"boolean"}},{name:"direction",tags:{beta:[{description:"Sub menu direction",title:"beta"}]},required:!1,type:{name:"union",elements:[{name:'"down"'},{name:'"up"'}]}},{name:"onPath",tags:{beta:[{description:"True if item is on current selection path",title:"beta"}]},required:!1,type:{name:"boolean"}}],events:[{name:"update:favorited",type:{names:["boolean"]}},{name:"click",type:{names:["Event"]},description:"Callback for item click"},{name:"show-flyout",type:{names:["Event"]},tags:[{title:"beta",content:"Callback function when mouse leaves trigger"}]}],slots:[{name:"icon"},{name:"default"},{name:"description"},{name:"flyoutMenu"},{name:"actions"}],sourceFiles:["/home/runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuItem.vue"]}},null,8,["doc"]),e(u,{src:"packages/core/src/components/Dropdown/DropdownList.ts",doc:{name:"PfMenuList",exportName:"default",displayName:"MenuList",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuList.vue"]}},null,8,["doc"])]),default:n(()=>[e(l,{title:"Basic",source:`<pf-dropdown v-model:open="open1" text="Dropdown">
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
</pf-dropdown>`},{default:n(()=>[e(a,{open:w.value,"onUpdate:open":d[0]||(d[0]=i=>w.value=i),text:"Dropdown"},{default:n(()=>[e(t,{onClick:s},{default:n(()=>[o("Link")]),_:1}),e(t,{component:"button",onClick:s},{default:n(()=>[o(" Action ")]),_:1}),e(t,{disabled:"",onClick:s},{default:n(()=>[o(" Disabled Link ")]),_:1}),e(t,{disabled:"",component:"button",onClick:s},{default:n(()=>[o(" Disabled Action ")]),_:1}),e(p),e(t,{onClick:s},{default:n(()=>[o("Separated Link")]),_:1}),e(t,{component:"button",onClick:s},{default:n(()=>[o(" Separated Action ")]),_:1})]),_:1},8,["open"])]),_:1}),e(l,{title:"With initial selection",source:`<pf-dropdown v-model:open="open2" text="Dropdown">
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button" focused>Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-divider />
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[e(a,{open:g.value,"onUpdate:open":d[1]||(d[1]=i=>g.value=i),text:"Dropdown"},{default:n(()=>[e(t,null,{default:n(()=>[o("Link")]),_:1}),e(t,{component:"button",focused:""},{default:n(()=>[o("Action")]),_:1}),e(t,{disabled:""},{default:n(()=>[o("Disabled Link")]),_:1}),e(t,{disabled:"",component:"button"},{default:n(()=>[o("Disabled Action")]),_:1}),e(p),e(t,null,{default:n(()=>[o("Separated Link")]),_:1}),e(t,{component:"button"},{default:n(()=>[o("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1}),e(l,{title:"Disabled",source:`<pf-dropdown v-model:open="open3" text="Dropdown" disabled>
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-divider />
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[e(a,{open:_.value,"onUpdate:open":d[2]||(d[2]=i=>_.value=i),text:"Dropdown",disabled:""},{default:n(()=>[e(t,null,{default:n(()=>[o("Link")]),_:1}),e(t,{component:"button"},{default:n(()=>[o("Action")]),_:1}),e(t,{disabled:""},{default:n(()=>[o("Disabled Link")]),_:1}),e(t,{disabled:"",component:"button"},{default:n(()=>[o("Disabled Action")]),_:1}),e(p),e(t,null,{default:n(()=>[o("Separated Link")]),_:1}),e(t,{component:"button"},{default:n(()=>[o("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1}),e(l,{title:"Primary toggle",source:`<pf-dropdown v-model:open="open4" text="Dropdown" variant="primary">
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-divider />
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[e(a,{open:k.value,"onUpdate:open":d[3]||(d[3]=i=>k.value=i),text:"Dropdown",variant:"primary"},{default:n(()=>[e(t,null,{default:n(()=>[o("Link")]),_:1}),e(t,{component:"button"},{default:n(()=>[o("Action")]),_:1}),e(t,{disabled:""},{default:n(()=>[o("Disabled Link")]),_:1}),e(t,{disabled:"",component:"button"},{default:n(()=>[o("Disabled Action")]),_:1}),e(p),e(t,null,{default:n(()=>[o("Separated Link")]),_:1}),e(t,{component:"button"},{default:n(()=>[o("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1}),e(l,{title:"Direction up",source:`<pf-dropdown v-model:open="open6" text="Dropdown" placement="top">
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-divider />
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[e(a,{open:v.value,"onUpdate:open":d[4]||(d[4]=i=>v.value=i),text:"Dropdown",placement:"top"},{default:n(()=>[e(t,null,{default:n(()=>[o("Link")]),_:1}),e(t,{component:"button"},{default:n(()=>[o("Action")]),_:1}),e(t,{disabled:""},{default:n(()=>[o("Disabled Link")]),_:1}),e(t,{disabled:"",component:"button"},{default:n(()=>[o("Disabled Action")]),_:1}),e(p),e(t,null,{default:n(()=>[o("Separated Link")]),_:1}),e(t,{component:"button"},{default:n(()=>[o("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1}),e(l,{title:"With kebab",source:`<pf-dropdown v-model:open="open7">
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
</pf-dropdown>`},{default:n(()=>[e(a,{open:D.value,"onUpdate:open":d[5]||(d[5]=i=>D.value=i)},{toggle:n(()=>[e(h,{variant:"plain"},{default:n(()=>[e(f(H))]),_:1})]),default:n(()=>[e(t,null,{default:n(()=>[o("Link")]),_:1}),e(t,{component:"button"},{default:n(()=>[o("Action")]),_:1}),e(t,{disabled:""},{default:n(()=>[o("Disabled Link")]),_:1}),e(t,{disabled:"",component:"button"},{default:n(()=>[o("Disabled Action")]),_:1}),e(p),e(t,null,{default:n(()=>[o("Separated Link")]),_:1}),e(t,{component:"button"},{default:n(()=>[o("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1}),e(l,{title:"Icon only",source:`<pf-dropdown v-model:open="open8">
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
</pf-dropdown>`},{default:n(()=>[e(a,{open:y.value,"onUpdate:open":d[6]||(d[6]=i=>y.value=i)},{toggle:n(()=>[e(h,{"aria-label":"Applications",variant:"plain"},{default:n(()=>[e(f(U))]),_:1})]),default:n(()=>[e(t,null,{default:n(()=>[o("Link")]),_:1}),e(t,{component:"button"},{default:n(()=>[o("Action")]),_:1}),e(t,{disabled:""},{default:n(()=>[o("Disabled Link")]),_:1}),e(t,{disabled:"",component:"button"},{default:n(()=>[o("Disabled Action")]),_:1}),e(p),e(t,null,{default:n(()=>[o("Separated Link")]),_:1}),e(t,{component:"button"},{default:n(()=>[o("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1}),e(l,{title:"With groups",source:`<pf-dropdown v-model:open="open9" text="Dropdown">
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
</pf-dropdown>`},{default:n(()=>[e(a,{open:L.value,"onUpdate:open":d[7]||(d[7]=i=>L.value=i),text:"Dropdown"},{default:n(()=>[e(b,null,{default:n(()=>[e(t,null,{default:n(()=>[o("Link")]),_:1}),e(t,{component:"button"},{default:n(()=>[o(" Action ")]),_:1})]),_:1}),e(p,{component:"li"}),e(b,null,{label:n(()=>[o("Group 2")]),default:n(()=>[e(t,null,{default:n(()=>[o(" Group 2 Link ")]),_:1}),e(t,{component:"button"},{default:n(()=>[o(" Group 2 Action ")]),_:1})]),_:1}),e(p,{component:"li"}),e(b,null,{label:n(()=>[o("Group 3")]),default:n(()=>[e(t,null,{default:n(()=>[o("Group 3 Link")]),_:1}),e(t,{component:"button"},{default:n(()=>[o(" Group 3 Action Action ")]),_:1})]),_:1})]),_:1},8,["open"])]),_:1}),e(l,{title:"With descriptions",source:`<pf-dropdown v-model:open="open10" text="Dropdown">
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
</pf-dropdown>`},{default:n(()=>[e(a,{open:A.value,"onUpdate:open":d[8]||(d[8]=i=>A.value=i),text:"Dropdown"},{default:n(()=>[e(t,{description:"This is a description"},{icon:n(()=>[e(f(V))]),default:n(()=>[o(" Link ")]),_:1}),e(t,{component:"button",description:"This is a very long description that describes the menu item"},{icon:n(()=>[e(f(q))]),default:n(()=>[o(" Action ")]),_:1}),e(t,{disabled:"",description:"Disabled link description"},{default:n(()=>[o(" Disabled Link ")]),_:1}),e(t,{disabled:"",component:"button",description:"This is a description"},{default:n(()=>[o(" Disabled Action ")]),_:1})]),_:1},8,["open"])]),_:1}),e(l,{title:"Menu teleported in body",source:`<pf-dropdown text="Dropdown" append-to="body">
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
</pf-dropdown>`},{default:n(()=>[e(a,{text:"Dropdown","append-to":"body"},{default:n(()=>[e(t,null,{default:n(()=>[o("Link")]),_:1}),e(t,{component:"button"},{default:n(()=>[o(" Action ")]),_:1}),e(t,{disabled:""},{default:n(()=>[o(" Disabled Link ")]),_:1}),e(t,{disabled:"",component:"button"},{default:n(()=>[o(" Disabled Action ")]),_:1}),e(p),e(t,null,{default:n(()=>[o("Separated Link")]),_:1}),e(t,{component:"button"},{default:n(()=>[o(" Separated Action ")]),_:1})]),_:1})]),_:1})]),_:1})}}});export{$ as default};
