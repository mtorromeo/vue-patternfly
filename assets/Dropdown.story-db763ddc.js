import{B as y}from"./bell-icon-17d77835.js";import{C as T}from"./cubes-icon-b9ce39a5.js";import{m as G,e as H,n as h,r,a as f,o as z,c as I,w as o,b as n,g as e,u}from"./index-a471940d.js";import{E as U}from"./ellipsis-vertical-icon-1d55abce.js";const B={name:"TableCellsIcon",height:512,width:512,svgPath:"M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 64v64H64V96h88zm56 0h88v64H208V96zm240 0v64H360V96h88zM64 224h88v64H64V224zm232 0v64H208V224h88zm64 0h88v64H360V224zM152 352v64H64V352h88zm56 0h88v64H208V352zm240 0v64H360V352h88z",yOffset:0,xOffset:0},M=G(B),W=M,j=H({__name:"Dropdown.story",setup(E){const x=h();function m(c){c.target instanceof HTMLElement&&x.add({title:`Clicked "${c.target.innerText}"`})}const w=r(!1),b=r(!1),_=r(!1),k=r(!1),A=r(!1),v=r(!1),L=r(!1),D=r(!1),g=r(!1);return(c,d)=>{const C=f("component-title"),t=f("pf-dropdown-item"),i=f("pf-divider"),l=f("pf-dropdown"),a=f("story-canvas"),S=f("pf-menu-toggle"),s=f("pf-dropdown-group"),V=f("doc-page");return z(),I(V,{title:"Dropdown"},{default:o(()=>[n(C,{name:"pf-dropdown"}),n(a,{title:"Basic",source:`<pf-dropdown v-model:open="open1" text="Dropdown">
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
</pf-dropdown>`},{default:o(()=>[n(l,{open:w.value,"onUpdate:open":d[0]||(d[0]=p=>w.value=p),text:"Dropdown"},{default:o(()=>[n(t,{onClick:m},{default:o(()=>[e("Link")]),_:1}),n(t,{component:"button",onClick:m},{default:o(()=>[e(" Action ")]),_:1}),n(t,{disabled:"",onClick:m},{default:o(()=>[e(" Disabled Link ")]),_:1}),n(t,{disabled:"",component:"button",onClick:m},{default:o(()=>[e(" Disabled Action ")]),_:1}),n(i),n(t,{onClick:m},{default:o(()=>[e("Separated Link")]),_:1}),n(t,{component:"button",onClick:m},{default:o(()=>[e(" Separated Action ")]),_:1})]),_:1},8,["open"])]),_:1}),n(a,{title:"With initial selection",source:`<pf-dropdown v-model:open="open2" text="Dropdown">
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button" focused>Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-divider />
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:o(()=>[n(l,{open:b.value,"onUpdate:open":d[1]||(d[1]=p=>b.value=p),text:"Dropdown"},{default:o(()=>[n(t,null,{default:o(()=>[e("Link")]),_:1}),n(t,{component:"button",focused:""},{default:o(()=>[e("Action")]),_:1}),n(t,{disabled:""},{default:o(()=>[e("Disabled Link")]),_:1}),n(t,{disabled:"",component:"button"},{default:o(()=>[e("Disabled Action")]),_:1}),n(i),n(t,null,{default:o(()=>[e("Separated Link")]),_:1}),n(t,{component:"button"},{default:o(()=>[e("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1}),n(a,{title:"Disabled",source:`<pf-dropdown v-model:open="open3" text="Dropdown" disabled>
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-divider />
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:o(()=>[n(l,{open:_.value,"onUpdate:open":d[2]||(d[2]=p=>_.value=p),text:"Dropdown",disabled:""},{default:o(()=>[n(t,null,{default:o(()=>[e("Link")]),_:1}),n(t,{component:"button"},{default:o(()=>[e("Action")]),_:1}),n(t,{disabled:""},{default:o(()=>[e("Disabled Link")]),_:1}),n(t,{disabled:"",component:"button"},{default:o(()=>[e("Disabled Action")]),_:1}),n(i),n(t,null,{default:o(()=>[e("Separated Link")]),_:1}),n(t,{component:"button"},{default:o(()=>[e("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1}),n(a,{title:"Primary toggle",source:`<pf-dropdown v-model:open="open4" text="Dropdown" variant="primary">
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-divider />
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:o(()=>[n(l,{open:k.value,"onUpdate:open":d[3]||(d[3]=p=>k.value=p),text:"Dropdown",variant:"primary"},{default:o(()=>[n(t,null,{default:o(()=>[e("Link")]),_:1}),n(t,{component:"button"},{default:o(()=>[e("Action")]),_:1}),n(t,{disabled:""},{default:o(()=>[e("Disabled Link")]),_:1}),n(t,{disabled:"",component:"button"},{default:o(()=>[e("Disabled Action")]),_:1}),n(i),n(t,null,{default:o(()=>[e("Separated Link")]),_:1}),n(t,{component:"button"},{default:o(()=>[e("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1}),n(a,{title:"Direction up",source:`<pf-dropdown v-model:open="open6" text="Dropdown" placement="top">
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-divider />
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:o(()=>[n(l,{open:A.value,"onUpdate:open":d[4]||(d[4]=p=>A.value=p),text:"Dropdown",placement:"top"},{default:o(()=>[n(t,null,{default:o(()=>[e("Link")]),_:1}),n(t,{component:"button"},{default:o(()=>[e("Action")]),_:1}),n(t,{disabled:""},{default:o(()=>[e("Disabled Link")]),_:1}),n(t,{disabled:"",component:"button"},{default:o(()=>[e("Disabled Action")]),_:1}),n(i),n(t,null,{default:o(()=>[e("Separated Link")]),_:1}),n(t,{component:"button"},{default:o(()=>[e("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1}),n(a,{title:"With kebab",source:`<pf-dropdown v-model:open="open7">
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
</pf-dropdown>`},{default:o(()=>[n(l,{open:v.value,"onUpdate:open":d[5]||(d[5]=p=>v.value=p)},{toggle:o(()=>[n(S,{variant:"plain"},{default:o(()=>[n(u(U))]),_:1})]),default:o(()=>[n(t,null,{default:o(()=>[e("Link")]),_:1}),n(t,{component:"button"},{default:o(()=>[e("Action")]),_:1}),n(t,{disabled:""},{default:o(()=>[e("Disabled Link")]),_:1}),n(t,{disabled:"",component:"button"},{default:o(()=>[e("Disabled Action")]),_:1}),n(i),n(t,null,{default:o(()=>[e("Separated Link")]),_:1}),n(t,{component:"button"},{default:o(()=>[e("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1}),n(a,{title:"Icon only",source:`<pf-dropdown v-model:open="open8">
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
</pf-dropdown>`},{default:o(()=>[n(l,{open:L.value,"onUpdate:open":d[6]||(d[6]=p=>L.value=p)},{toggle:o(()=>[n(S,{"aria-label":"Applications",variant:"plain"},{default:o(()=>[n(u(W))]),_:1})]),default:o(()=>[n(t,null,{default:o(()=>[e("Link")]),_:1}),n(t,{component:"button"},{default:o(()=>[e("Action")]),_:1}),n(t,{disabled:""},{default:o(()=>[e("Disabled Link")]),_:1}),n(t,{disabled:"",component:"button"},{default:o(()=>[e("Disabled Action")]),_:1}),n(i),n(t,null,{default:o(()=>[e("Separated Link")]),_:1}),n(t,{component:"button"},{default:o(()=>[e("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1}),n(a,{title:"With groups",source:`<pf-dropdown v-model:open="open9" text="Dropdown">
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
</pf-dropdown>`},{default:o(()=>[n(l,{open:D.value,"onUpdate:open":d[7]||(d[7]=p=>D.value=p),text:"Dropdown"},{default:o(()=>[n(s,null,{default:o(()=>[n(t,null,{default:o(()=>[e("Link")]),_:1}),n(t,{component:"button"},{default:o(()=>[e(" Action ")]),_:1})]),_:1}),n(i,{component:"li"}),n(s,null,{label:o(()=>[e("Group 2")]),default:o(()=>[n(t,null,{default:o(()=>[e(" Group 2 Link ")]),_:1}),n(t,{component:"button"},{default:o(()=>[e(" Group 2 Action ")]),_:1})]),_:1}),n(i,{component:"li"}),n(s,null,{label:o(()=>[e("Group 3")]),default:o(()=>[n(t,null,{default:o(()=>[e("Group 3 Link")]),_:1}),n(t,{component:"button"},{default:o(()=>[e(" Group 3 Action Action ")]),_:1})]),_:1})]),_:1},8,["open"])]),_:1}),n(a,{title:"With descriptions",source:`<pf-dropdown v-model:open="open10" text="Dropdown">
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
</pf-dropdown>`},{default:o(()=>[n(l,{open:g.value,"onUpdate:open":d[8]||(d[8]=p=>g.value=p),text:"Dropdown"},{default:o(()=>[n(t,{description:"This is a description"},{icon:o(()=>[n(u(T))]),default:o(()=>[e(" Link ")]),_:1}),n(t,{component:"button",description:"This is a very long description that describes the menu item"},{icon:o(()=>[n(u(y))]),default:o(()=>[e(" Action ")]),_:1}),n(t,{disabled:"",description:"Disabled link description"},{default:o(()=>[e(" Disabled Link ")]),_:1}),n(t,{disabled:"",component:"button",description:"This is a description"},{default:o(()=>[e(" Disabled Action ")]),_:1})]),_:1},8,["open"])]),_:1}),n(a,{title:"Menu teleported in body",source:`<pf-dropdown text="Dropdown" append-to="body">
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
</pf-dropdown>`},{default:o(()=>[n(l,{text:"Dropdown","append-to":"body"},{default:o(()=>[n(t,null,{default:o(()=>[e("Link")]),_:1}),n(t,{component:"button"},{default:o(()=>[e(" Action ")]),_:1}),n(t,{disabled:""},{default:o(()=>[e(" Disabled Link ")]),_:1}),n(t,{disabled:"",component:"button"},{default:o(()=>[e(" Disabled Action ")]),_:1}),n(i),n(t,null,{default:o(()=>[e("Separated Link")]),_:1}),n(t,{component:"button"},{default:o(()=>[e(" Separated Action ")]),_:1})]),_:1})]),_:1})]),_:1})}}});export{j as default};
