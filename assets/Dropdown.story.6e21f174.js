import{c as b}from"./createIcon.0c08a3f3.js";import{C as W}from"./cubes-icon.f6f869fc.js";import{e as P,r as i,a as f,c as N,w as n,o as $,b as o,g as e,u as m}from"./index.f6fe9dd1.js";const E={name:"BellIcon",height:1024,width:896,svgPath:"M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z",yOffset:0,xOffset:0},Z=b(E),j=Z,q={name:"TableCellsIcon",height:512,width:512,svgPath:"M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 64v64H64V96h88zm56 0h88v64H208V96zm240 0v64H360V96h88zM64 224h88v64H64V224zm232 0v64H208V224h88zm64 0h88v64H360V224zM152 352v64H64V352h88zm56 0h88v64H208V352zm240 0v64H360V352h88z",yOffset:0,xOffset:0},F=b(q),J=F,K={name:"AngleLeftIcon",height:512,width:320,svgPath:"M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z",yOffset:0,xOffset:0},Q=b(K),w=Q,eo=P({__name:"Dropdown.story",setup(R){const _=i(!1),g=i(!1),k=i(!1),L=i(!1),A=i(!1),v=i(!1),D=i(!1),x=i(!1),S=i(!1),C=i(!1),h=i(!1),U=i(!1),y=i(!1),I=i(!1),T=i(!1),V=i(!1),G=i(!1);return(X,p)=>{const z=f("component-title"),t=f("pf-dropdown-item"),r=f("pf-dropdown-separator"),a=f("pf-dropdown"),l=f("story-canvas"),H=f("pf-kebab-toggle"),u=f("pf-dropdown-toggle"),c=f("pf-dropdown-group"),M=f("pf-badge-toggle"),s=f("pf-dropdown-toggle-checkbox"),B=f("pf-avatar"),O=f("doc-page");return $(),N(O,{title:"Dropdown"},{default:n(()=>[o(z,{name:"pf-dropdown"}),o(l,{title:"Basic",source:`<pf-dropdown v-model:open="open1" text="Dropdown">
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
</pf-dropdown>`},{default:n(()=>[o(a,{open:_.value,"onUpdate:open":p[0]||(p[0]=d=>_.value=d),text:"Dropdown"},{default:n(()=>[o(t,null,{default:n(()=>[e("Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e(" Action ")]),_:1}),o(t,{disabled:""},{default:n(()=>[e(" Disabled Link ")]),_:1}),o(t,{disabled:"",component:"button"},{default:n(()=>[e(" Disabled Action ")]),_:1}),o(r),o(t,null,{default:n(()=>[e("Separated Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e(" Separated Action ")]),_:1})]),_:1},8,["open"])]),_:1}),o(l,{title:"With initial selection",source:`<pf-dropdown v-model:open="open2" text="Dropdown">
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button" auto-focus>Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-dropdown-separator></pf-dropdown-separator>
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[o(a,{open:g.value,"onUpdate:open":p[1]||(p[1]=d=>g.value=d),text:"Dropdown"},{default:n(()=>[o(t,null,{default:n(()=>[e("Link")]),_:1}),o(t,{component:"button","auto-focus":""},{default:n(()=>[e("Action")]),_:1}),o(t,{disabled:""},{default:n(()=>[e("Disabled Link")]),_:1}),o(t,{disabled:"",component:"button"},{default:n(()=>[e("Disabled Action")]),_:1}),o(r),o(t,null,{default:n(()=>[e("Separated Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1}),o(l,{title:"Disabled",source:`<pf-dropdown v-model:open="open3" text="Dropdown" disabled>
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-dropdown-separator></pf-dropdown-separator>
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[o(a,{open:k.value,"onUpdate:open":p[2]||(p[2]=d=>k.value=d),text:"Dropdown",disabled:""},{default:n(()=>[o(t,null,{default:n(()=>[e("Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e("Action")]),_:1}),o(t,{disabled:""},{default:n(()=>[e("Disabled Link")]),_:1}),o(t,{disabled:"",component:"button"},{default:n(()=>[e("Disabled Action")]),_:1}),o(r),o(t,null,{default:n(()=>[e("Separated Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1}),o(l,{title:"Primary toggle",source:`<pf-dropdown v-model:open="open4" text="Dropdown" primary>
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-dropdown-separator></pf-dropdown-separator>
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[o(a,{open:L.value,"onUpdate:open":p[3]||(p[3]=d=>L.value=d),text:"Dropdown",primary:""},{default:n(()=>[o(t,null,{default:n(()=>[e("Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e("Action")]),_:1}),o(t,{disabled:""},{default:n(()=>[e("Disabled Link")]),_:1}),o(t,{disabled:"",component:"button"},{default:n(()=>[e("Disabled Action")]),_:1}),o(r),o(t,null,{default:n(()=>[e("Separated Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1}),o(l,{title:"Position right",source:`<pf-dropdown v-model:open="open5" text="Dropdown" position="right">
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
</pf-dropdown>`},{default:n(()=>[o(a,{open:v.value,"onUpdate:open":p[5]||(p[5]=d=>v.value=d),text:"Dropdown",direction:"up"},{default:n(()=>[o(t,null,{default:n(()=>[e("Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e("Action")]),_:1}),o(t,{disabled:""},{default:n(()=>[e("Disabled Link")]),_:1}),o(t,{disabled:"",component:"button"},{default:n(()=>[e("Disabled Action")]),_:1}),o(r),o(t,null,{default:n(()=>[e("Separated Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1}),o(l,{title:"With kebab",source:`<pf-dropdown v-model:open="open7" plain>
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
</pf-dropdown>`},{default:n(()=>[o(a,{open:x.value,"onUpdate:open":p[7]||(p[7]=d=>x.value=d),plain:""},{toggle:n(()=>[o(u,{"aria-label":"Applications"},{icon:n(()=>[o(m(J))]),_:1})]),default:n(()=>[o(t,null,{default:n(()=>[e("Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e("Action")]),_:1}),o(t,{disabled:""},{default:n(()=>[e("Disabled Link")]),_:1}),o(t,{disabled:"",component:"button"},{default:n(()=>[e("Disabled Action")]),_:1}),o(r),o(t,null,{default:n(()=>[e("Separated Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1}),o(l,{title:"With groups",source:`<pf-dropdown v-model:open="open9" text="Dropdown">
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
</pf-dropdown>`},{default:n(()=>[o(a,{open:S.value,"onUpdate:open":p[8]||(p[8]=d=>S.value=d),text:"Dropdown"},{default:n(()=>[o(c,null,{default:n(()=>[o(t,null,{default:n(()=>[e("Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e(" Action ")]),_:1})]),_:1}),o(c,null,{label:n(()=>[e("Group 2")]),default:n(()=>[o(t,null,{default:n(()=>[e(" Group 2 Link ")]),_:1}),o(t,{component:"button"},{default:n(()=>[e(" Group 2 Action ")]),_:1})]),_:1}),o(c,null,{label:n(()=>[e("Group 3")]),default:n(()=>[o(t,null,{default:n(()=>[e("Group 3 Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e(" Group 3 Action Action ")]),_:1})]),_:1})]),_:1},8,["open"])]),_:1}),o(l,{title:"With badge",source:`<pf-dropdown v-model:open="open10" text="Dropdown" plain>
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
</pf-dropdown>`},{default:n(()=>[o(a,{open:C.value,"onUpdate:open":p[9]||(p[9]=d=>C.value=d),text:"Dropdown",plain:""},{toggle:n(()=>[o(M,{"aria-label":"Applications"},{default:n(()=>[e(" 3 ")]),_:1})]),default:n(()=>[o(t,{component:"button"},{icon:n(()=>[o(m(w))]),default:n(()=>[e(" Edit ")]),_:1}),o(t,{component:"button"},{icon:n(()=>[o(m(w))]),default:n(()=>[e(" Deployment ")]),_:1}),o(t,{component:"button"},{icon:n(()=>[o(m(w))]),default:n(()=>[e(" Applications ")]),_:1})]),_:1},8,["open"])]),_:1}),o(l,{title:"Split button",source:`<pf-dropdown v-model:open="open11" text="Dropdown">
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
</pf-dropdown>`},{default:n(()=>[o(a,{open:h.value,"onUpdate:open":p[11]||(p[11]=d=>h.value=d),text:"Dropdown"},{toggle:n(()=>[o(u,null,{buttons:n(()=>[o(s,{checked:V.value,"onUpdate:checked":p[10]||(p[10]=d=>V.value=d)},null,8,["checked"])]),_:1})]),default:n(()=>[o(t,null,{default:n(()=>[e("Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e(" Action ")]),_:1}),o(t,{disabled:""},{default:n(()=>[e(" Disabled Link ")]),_:1}),o(t,{disabled:"",component:"button"},{default:n(()=>[e(" Disabled Action ")]),_:1}),o(r),o(t,null,{default:n(()=>[e("Separated Link")]),_:1}),o(t,{component:"button"},{default:n(()=>[e(" Separated Action ")]),_:1})]),_:1},8,["open"])]),_:1}),o(l,{title:"Split button with text",source:`<pf-dropdown v-model:open="open12" text="Dropdown">
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
</pf-dropdown>`},{default:n(()=>[o(a,{open:I.value,"onUpdate:open":p[15]||(p[15]=d=>I.value=d),text:"Dropdown"},{default:n(()=>[o(t,{description:"This is a description"},{icon:n(()=>[o(m(W))]),default:n(()=>[e(" Link ")]),_:1}),o(t,{component:"button",description:"This is a very long description that describes the menu item"},{icon:n(()=>[o(m(j))]),default:n(()=>[e(" Action ")]),_:1}),o(t,{disabled:"",description:"Disabled link description"},{default:n(()=>[e(" Disabled Link ")]),_:1}),o(t,{disabled:"",component:"button",description:"This is a description"},{default:n(()=>[e(" Disabled Action ")]),_:1})]),_:1},8,["open"])]),_:1}),o(l,{title:"With image and text",source:`<pf-dropdown v-model:open="open15" text="Dropdown">
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
</pf-dropdown>`},{default:n(()=>[o(a,{open:T.value,"onUpdate:open":p[16]||(p[16]=d=>T.value=d),text:"Dropdown"},{toggle:n(()=>[o(u,{indicator:""},{icon:n(()=>[o(B,{src:"/avatar.svg",alt:"avatar"})]),default:n(()=>[e(" Ned Username ")]),_:1})]),default:n(()=>[o(c,null,{default:n(()=>[o(t,{component:"div","plain-text":""},{default:n(()=>[e("Text")]),_:1}),o(t,{component:"div","plain-text":""},{default:n(()=>[e("More text")]),_:1})]),_:1}),o(r),o(c,null,{default:n(()=>[o(t,null,{default:n(()=>[e(" My profile ")]),_:1}),o(t,{component:"button"},{default:n(()=>[e(" User management ")]),_:1}),o(t,null,{default:n(()=>[e(" Logout ")]),_:1})]),_:1})]),_:1},8,["open"])]),_:1})]),_:1})}}});export{eo as default};
