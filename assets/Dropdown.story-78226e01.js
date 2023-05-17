import{B as N}from"./bell-icon-c9a6fc9c.js";import{C as O}from"./cubes-icon-6cc9d1b7.js";import{c as I}from"./createIcon-1c128e64.js";import{e as P,r as i,a as f,o as E,c as $,w as n,b as o,g as e,u as m}from"./index-583442e7.js";const j={name:"TableCellsIcon",height:512,width:512,svgPath:"M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 64v64H64V96h88zm56 0h88v64H208V96zm240 0v64H360V96h88zM64 224h88v64H64V224zm232 0v64H208V224h88zm64 0h88v64H360V224zM152 352v64H64V352h88zm56 0h88v64H208V352zm240 0v64H360V352h88z",yOffset:0,xOffset:0},q=I(j),F=q,J={name:"AngleLeftIcon",height:512,width:320,svgPath:"M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z",yOffset:0,xOffset:0},K=I(J),w=K,no=P({__name:"Dropdown.story",setup(Q){const b=i(!1),_=i(!1),g=i(!1),k=i(!1),A=i(!1),L=i(!1),D=i(!1),v=i(!1),x=i(!1),S=i(!1),h=i(!1),U=i(!1),y=i(!1),T=i(!1),V=i(!1),C=i(!1),G=i(!1);return(R,p)=>{const z=f("component-title"),t=f("pf-dropdown-item"),r=f("pf-dropdown-separator"),a=f("pf-dropdown"),l=f("story-canvas"),H=f("pf-kebab-toggle"),u=f("pf-dropdown-toggle"),c=f("pf-dropdown-group"),M=f("pf-badge-toggle"),s=f("pf-dropdown-toggle-checkbox"),W=f("pf-avatar"),B=f("doc-page");return E(),$(B,{title:"Dropdown"},{default:n(()=>[o(z,{name:"pf-dropdown"}),o(l,{title:"Basic",source:`<pf-dropdown v-model:open="open1" text="Dropdown">
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
  <pf-dropdown-separator></pf-dropdown-separator>
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">
    Separated Action
  </pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[o(a,{open:b.value,"onUpdate:open":p[0]||(p[0]=d=>b.value=d),text:"Dropdown"},{default:n(()=>[o(t,null,{default:n(()=>[e("Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e(" Action ")]),_:1}),o(t,{disabled:""},{default:n(()=>[e(" Disabled Link ")]),_:1}),o(t,{disabled:"",component:"button"},{default:n(()=>[e(" Disabled Action ")]),_:1}),o(r),o(t,null,{default:n(()=>[e("Separated Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e(" Separated Action ")]),_:1})]),_:1},8,["open"])]),_:1}),o(l,{title:"With initial selection",source:`<pf-dropdown v-model:open="open2" text="Dropdown">
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button" auto-focus>Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-dropdown-separator></pf-dropdown-separator>
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[o(a,{open:_.value,"onUpdate:open":p[1]||(p[1]=d=>_.value=d),text:"Dropdown"},{default:n(()=>[o(t,null,{default:n(()=>[e("Link")]),_:1}),o(t,{component:"button","auto-focus":""},{default:n(()=>[e("Action")]),_:1}),o(t,{disabled:""},{default:n(()=>[e("Disabled Link")]),_:1}),o(t,{disabled:"",component:"button"},{default:n(()=>[e("Disabled Action")]),_:1}),o(r),o(t,null,{default:n(()=>[e("Separated Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1}),o(l,{title:"Disabled",source:`<pf-dropdown v-model:open="open3" text="Dropdown" disabled>
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-dropdown-separator></pf-dropdown-separator>
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[o(a,{open:g.value,"onUpdate:open":p[2]||(p[2]=d=>g.value=d),text:"Dropdown",disabled:""},{default:n(()=>[o(t,null,{default:n(()=>[e("Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e("Action")]),_:1}),o(t,{disabled:""},{default:n(()=>[e("Disabled Link")]),_:1}),o(t,{disabled:"",component:"button"},{default:n(()=>[e("Disabled Action")]),_:1}),o(r),o(t,null,{default:n(()=>[e("Separated Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1}),o(l,{title:"Primary toggle",source:`<pf-dropdown v-model:open="open4" text="Dropdown" primary>
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-dropdown-separator></pf-dropdown-separator>
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[o(a,{open:k.value,"onUpdate:open":p[3]||(p[3]=d=>k.value=d),text:"Dropdown",primary:""},{default:n(()=>[o(t,null,{default:n(()=>[e("Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e("Action")]),_:1}),o(t,{disabled:""},{default:n(()=>[e("Disabled Link")]),_:1}),o(t,{disabled:"",component:"button"},{default:n(()=>[e("Disabled Action")]),_:1}),o(r),o(t,null,{default:n(()=>[e("Separated Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1}),o(l,{title:"Position right",source:`<pf-dropdown v-model:open="open5" text="Dropdown" position="right">
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-dropdown-separator></pf-dropdown-separator>
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[o(a,{open:A.value,"onUpdate:open":p[4]||(p[4]=d=>A.value=d),text:"Dropdown",position:"right"},{default:n(()=>[o(t,null,{default:n(()=>[e("Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e("Action")]),_:1}),o(t,{disabled:""},{default:n(()=>[e("Disabled Link")]),_:1}),o(t,{disabled:"",component:"button"},{default:n(()=>[e("Disabled Action")]),_:1}),o(r),o(t,null,{default:n(()=>[e("Separated Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1}),o(l,{title:"Direction up",source:`<pf-dropdown v-model:open="open6" text="Dropdown" direction="up">
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-dropdown-separator></pf-dropdown-separator>
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[o(a,{open:L.value,"onUpdate:open":p[5]||(p[5]=d=>L.value=d),text:"Dropdown",direction:"up"},{default:n(()=>[o(t,null,{default:n(()=>[e("Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e("Action")]),_:1}),o(t,{disabled:""},{default:n(()=>[e("Disabled Link")]),_:1}),o(t,{disabled:"",component:"button"},{default:n(()=>[e("Disabled Action")]),_:1}),o(r),o(t,null,{default:n(()=>[e("Separated Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1}),o(l,{title:"With kebab",source:`<pf-dropdown v-model:open="open7" plain>
  <template #toggle>
    <pf-kebab-toggle></pf-kebab-toggle>
  </template>

  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-dropdown-separator></pf-dropdown-separator>
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[o(a,{open:D.value,"onUpdate:open":p[6]||(p[6]=d=>D.value=d),plain:""},{toggle:n(()=>[o(H)]),default:n(()=>[o(t,null,{default:n(()=>[e("Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e("Action")]),_:1}),o(t,{disabled:""},{default:n(()=>[e("Disabled Link")]),_:1}),o(t,{disabled:"",component:"button"},{default:n(()=>[e("Disabled Action")]),_:1}),o(r),o(t,null,{default:n(()=>[e("Separated Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1}),o(l,{title:"Icon only",source:`<pf-dropdown v-model:open="open8" plain>
  <template #toggle>
    <pf-dropdown-toggle aria-label="Applications">
      <template #icon>
        <table-cells-icon></table-cells-icon>
      </template>
    </pf-dropdown-toggle>
  </template>

  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-dropdown-separator></pf-dropdown-separator>
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[o(a,{open:v.value,"onUpdate:open":p[7]||(p[7]=d=>v.value=d),plain:""},{toggle:n(()=>[o(u,{"aria-label":"Applications"},{icon:n(()=>[o(m(F))]),_:1})]),default:n(()=>[o(t,null,{default:n(()=>[e("Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e("Action")]),_:1}),o(t,{disabled:""},{default:n(()=>[e("Disabled Link")]),_:1}),o(t,{disabled:"",component:"button"},{default:n(()=>[e("Disabled Action")]),_:1}),o(r),o(t,null,{default:n(()=>[e("Separated Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1}),o(l,{title:"With groups",source:`<pf-dropdown v-model:open="open9" text="Dropdown">
  <pf-dropdown-group>
    <pf-dropdown-item>Link</pf-dropdown-item>
    <pf-dropdown-item component="button">
      Action
    </pf-dropdown-item>
  </pf-dropdown-group>
  <pf-dropdown-group>
    <template #label>Group 2</template>
    <pf-dropdown-item>
      Group 2 Link
    </pf-dropdown-item>
    <pf-dropdown-item component="button">
      Group 2 Action
    </pf-dropdown-item>
  </pf-dropdown-group>
  <pf-dropdown-group>
    <template #label>Group 3</template>
    <pf-dropdown-item>Group 3 Link</pf-dropdown-item>
    <pf-dropdown-item component="button">
      Group 3 Action Action
    </pf-dropdown-item>
  </pf-dropdown-group>
</pf-dropdown>`},{default:n(()=>[o(a,{open:x.value,"onUpdate:open":p[8]||(p[8]=d=>x.value=d),text:"Dropdown"},{default:n(()=>[o(c,null,{default:n(()=>[o(t,null,{default:n(()=>[e("Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e(" Action ")]),_:1})]),_:1}),o(c,null,{label:n(()=>[e("Group 2")]),default:n(()=>[o(t,null,{default:n(()=>[e(" Group 2 Link ")]),_:1}),o(t,{component:"button"},{default:n(()=>[e(" Group 2 Action ")]),_:1})]),_:1}),o(c,null,{label:n(()=>[e("Group 3")]),default:n(()=>[o(t,null,{default:n(()=>[e("Group 3 Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e(" Group 3 Action Action ")]),_:1})]),_:1})]),_:1},8,["open"])]),_:1}),o(l,{title:"With badge",source:`<pf-dropdown v-model:open="open10" text="Dropdown" plain>
  <template #toggle>
    <pf-badge-toggle aria-label="Applications">
      3
    </pf-badge-toggle>
  </template>
  <pf-dropdown-item component="button">
    <template #icon><angle-left-icon></angle-left-icon></template>
    Edit
  </pf-dropdown-item>
  <pf-dropdown-item component="button">
    <template #icon><angle-left-icon></angle-left-icon></template>
    Deployment
  </pf-dropdown-item>
  <pf-dropdown-item component="button">
    <template #icon><angle-left-icon></angle-left-icon></template>
    Applications
  </pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[o(a,{open:S.value,"onUpdate:open":p[9]||(p[9]=d=>S.value=d),text:"Dropdown",plain:""},{toggle:n(()=>[o(M,{"aria-label":"Applications"},{default:n(()=>[e(" 3 ")]),_:1})]),default:n(()=>[o(t,{component:"button"},{icon:n(()=>[o(m(w))]),default:n(()=>[e(" Edit ")]),_:1}),o(t,{component:"button"},{icon:n(()=>[o(m(w))]),default:n(()=>[e(" Deployment ")]),_:1}),o(t,{component:"button"},{icon:n(()=>[o(m(w))]),default:n(()=>[e(" Applications ")]),_:1})]),_:1},8,["open"])]),_:1}),o(l,{title:"Split button",source:`<pf-dropdown v-model:open="open11" text="Dropdown">
  <template #toggle>
    <pf-dropdown-toggle>
      <template #buttons>
        <pf-dropdown-toggle-checkbox v-model:checked="checked1" ></pf-dropdown-toggle-checkbox>
      </template>
    </pf-dropdown-toggle>
  </template>
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
  <pf-dropdown-separator></pf-dropdown-separator>
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">
    Separated Action
  </pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[o(a,{open:h.value,"onUpdate:open":p[11]||(p[11]=d=>h.value=d),text:"Dropdown"},{toggle:n(()=>[o(u,null,{buttons:n(()=>[o(s,{checked:C.value,"onUpdate:checked":p[10]||(p[10]=d=>C.value=d)},null,8,["checked"])]),_:1})]),default:n(()=>[o(t,null,{default:n(()=>[e("Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e(" Action ")]),_:1}),o(t,{disabled:""},{default:n(()=>[e(" Disabled Link ")]),_:1}),o(t,{disabled:"",component:"button"},{default:n(()=>[e(" Disabled Action ")]),_:1}),o(r),o(t,null,{default:n(()=>[e("Separated Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e(" Separated Action ")]),_:1})]),_:1},8,["open"])]),_:1}),o(l,{title:"Split button with text",source:`<pf-dropdown v-model:open="open12" text="Dropdown">
  <template #toggle>
    <pf-dropdown-toggle>
      <template #buttons>
        <pf-dropdown-toggle-checkbox v-model:checked="checked2">
          10 selected
        </pf-dropdown-toggle-checkbox>
      </template>
    </pf-dropdown-toggle>
  </template>
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
  <pf-dropdown-separator></pf-dropdown-separator>
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">
    Separated Action
  </pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[o(a,{open:U.value,"onUpdate:open":p[13]||(p[13]=d=>U.value=d),text:"Dropdown"},{toggle:n(()=>[o(u,null,{buttons:n(()=>[o(s,{checked:G.value,"onUpdate:checked":p[12]||(p[12]=d=>G.value=d)},{default:n(()=>[e(" 10 selected ")]),_:1},8,["checked"])]),_:1})]),default:n(()=>[o(t,null,{default:n(()=>[e("Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e(" Action ")]),_:1}),o(t,{disabled:""},{default:n(()=>[e(" Disabled Link ")]),_:1}),o(t,{disabled:"",component:"button"},{default:n(()=>[e(" Disabled Action ")]),_:1}),o(r),o(t,null,{default:n(()=>[e("Separated Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e(" Separated Action ")]),_:1})]),_:1},8,["open"])]),_:1}),o(l,{title:"Split button third state",source:`<pf-dropdown v-model:open="open13" text="Dropdown">
  <template #toggle>
    <pf-dropdown-toggle>
      <template #buttons>
        <pf-dropdown-toggle-checkbox>
          10 selected
        </pf-dropdown-toggle-checkbox>
      </template>
    </pf-dropdown-toggle>
  </template>
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
  <pf-dropdown-separator></pf-dropdown-separator>
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">
    Separated Action
  </pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[o(a,{open:y.value,"onUpdate:open":p[14]||(p[14]=d=>y.value=d),text:"Dropdown"},{toggle:n(()=>[o(u,null,{buttons:n(()=>[o(s,null,{default:n(()=>[e(" 10 selected ")]),_:1})]),_:1})]),default:n(()=>[o(t,null,{default:n(()=>[e("Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e(" Action ")]),_:1}),o(t,{disabled:""},{default:n(()=>[e(" Disabled Link ")]),_:1}),o(t,{disabled:"",component:"button"},{default:n(()=>[e(" Disabled Action ")]),_:1}),o(r),o(t,null,{default:n(()=>[e("Separated Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e(" Separated Action ")]),_:1})]),_:1},8,["open"])]),_:1}),o(l,{title:"With descriptions",source:`<pf-dropdown v-model:open="open14" text="Dropdown">
  <pf-dropdown-item description="This is a description">
    <template #icon>
      <cubes-icon></cubes-icon>
    </template>
    Link
  </pf-dropdown-item>
  <pf-dropdown-item component="button" description="This is a very long description that describes the menu item">
    <template #icon>
      <bell-icon></bell-icon>
    </template>
    Action
  </pf-dropdown-item>
  <pf-dropdown-item disabled description="Disabled link description">
    Disabled Link
  </pf-dropdown-item>
  <pf-dropdown-item disabled component="button" description="This is a description">
    Disabled Action
  </pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[o(a,{open:T.value,"onUpdate:open":p[15]||(p[15]=d=>T.value=d),text:"Dropdown"},{default:n(()=>[o(t,{description:"This is a description"},{icon:n(()=>[o(m(O))]),default:n(()=>[e(" Link ")]),_:1}),o(t,{component:"button",description:"This is a very long description that describes the menu item"},{icon:n(()=>[o(m(N))]),default:n(()=>[e(" Action ")]),_:1}),o(t,{disabled:"",description:"Disabled link description"},{default:n(()=>[e(" Disabled Link ")]),_:1}),o(t,{disabled:"",component:"button",description:"This is a description"},{default:n(()=>[e(" Disabled Action ")]),_:1})]),_:1},8,["open"])]),_:1}),o(l,{title:"With image and text",source:`<pf-dropdown v-model:open="open15" text="Dropdown">
  <template #toggle>
    <pf-dropdown-toggle indicator>
      <template #icon>
        <pf-avatar src="/avatar.svg" alt="avatar" ></pf-avatar>
      </template>
      Ned Username
    </pf-dropdown-toggle>
  </template>
  <pf-dropdown-group>
    <pf-dropdown-item component="div" plain-text>Text</pf-dropdown-item>
    <pf-dropdown-item component="div" plain-text>More text</pf-dropdown-item>
  </pf-dropdown-group>
  <pf-dropdown-separator></pf-dropdown-separator>
  <pf-dropdown-group>
    <pf-dropdown-item>
      My profile
    </pf-dropdown-item>
    <pf-dropdown-item component="button">
      User management
    </pf-dropdown-item>
    <pf-dropdown-item>
      Logout
    </pf-dropdown-item>
  </pf-dropdown-group>
</pf-dropdown>`},{default:n(()=>[o(a,{open:V.value,"onUpdate:open":p[16]||(p[16]=d=>V.value=d),text:"Dropdown"},{toggle:n(()=>[o(u,{indicator:""},{icon:n(()=>[o(W,{src:"/avatar.svg",alt:"avatar"})]),default:n(()=>[e(" Ned Username ")]),_:1})]),default:n(()=>[o(c,null,{default:n(()=>[o(t,{component:"div","plain-text":""},{default:n(()=>[e("Text")]),_:1}),o(t,{component:"div","plain-text":""},{default:n(()=>[e("More text")]),_:1})]),_:1}),o(r),o(c,null,{default:n(()=>[o(t,null,{default:n(()=>[e(" My profile ")]),_:1}),o(t,{component:"button"},{default:n(()=>[e(" User management ")]),_:1}),o(t,null,{default:n(()=>[e(" Logout ")]),_:1})]),_:1})]),_:1},8,["open"])]),_:1})]),_:1})}}});export{no as default};
