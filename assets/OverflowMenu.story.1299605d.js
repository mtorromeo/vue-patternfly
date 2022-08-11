import{c as d}from"./createIcon.5cfab69a.js";import{e as b,r as I,a as t,c as y,w as o,o as H,b as e,u,j as n}from"./index.d06ccf2e.js";const A={name:"AlignLeftIcon",height:512,width:448,svgPath:"M256 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H256C273.7 32 288 46.33 288 64C288 81.67 273.7 96 256 96zM256 352H32C14.33 352 0 337.7 0 320C0 302.3 14.33 288 32 288H256C273.7 288 288 302.3 288 320C288 337.7 273.7 352 256 352zM0 192C0 174.3 14.33 160 32 160H416C433.7 160 448 174.3 448 192C448 209.7 433.7 224 416 224H32C14.33 224 0 209.7 0 192zM416 480H32C14.33 480 0 465.7 0 448C0 430.3 14.33 416 32 416H416C433.7 416 448 430.3 448 448C448 465.7 433.7 480 416 480z",yOffset:0,xOffset:0},M=d(A),k=M,z={name:"AlignCenterIcon",height:512,width:448,svgPath:"M320 96H128C110.3 96 96 81.67 96 64C96 46.33 110.3 32 128 32H320C337.7 32 352 46.33 352 64C352 81.67 337.7 96 320 96zM416 224H32C14.33 224 0 209.7 0 192C0 174.3 14.33 160 32 160H416C433.7 160 448 174.3 448 192C448 209.7 433.7 224 416 224zM0 448C0 430.3 14.33 416 32 416H416C433.7 416 448 430.3 448 448C448 465.7 433.7 480 416 480H32C14.33 480 0 465.7 0 448zM320 352H128C110.3 352 96 337.7 96 320C96 302.3 110.3 288 128 288H320C337.7 288 352 302.3 352 320C352 337.7 337.7 352 320 352z",yOffset:0,xOffset:0},x=d(z),O=x,P={name:"AlignRightIcon",height:512,width:448,svgPath:"M416 96H192C174.3 96 160 81.67 160 64C160 46.33 174.3 32 192 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96zM416 352H192C174.3 352 160 337.7 160 320C160 302.3 174.3 288 192 288H416C433.7 288 448 302.3 448 320C448 337.7 433.7 352 416 352zM0 192C0 174.3 14.33 160 32 160H416C433.7 160 448 174.3 448 192C448 209.7 433.7 224 416 224H32C14.33 224 0 209.7 0 192zM416 480H32C14.33 480 0 465.7 0 448C0 430.3 14.33 416 32 416H416C433.7 416 448 430.3 448 448C448 465.7 433.7 480 416 480z",yOffset:0,xOffset:0},T=d(P),L=T,R=n("Item 1"),S=n("Item 2"),$=n("Item 3"),B=n("Item 4"),N=n("Item 5"),U=n("Item 1"),V=n("Item 2"),j=n("Item 3"),D=n("Item 4"),q=n("Item 5"),E=n("Primary"),F=n("Secondary"),G=n("Tertiary"),J=n("Secondary"),K=n("Tertiary"),Q=n("Action 4"),ee=b({__name:"OverflowMenu.story",setup(W){const p=I(!1);return(X,i)=>{const C=t("component-title"),f=t("pf-overflow-menu-item"),m=t("pf-overflow-menu-group"),s=t("pf-overflow-menu-content"),_=t("pf-kebab-toggle"),r=t("pf-overflow-menu-dropdown-item"),c=t("pf-dropdown"),w=t("pf-overflow-menu-control"),v=t("pf-overflow-menu"),g=t("story-canvas"),l=t("pf-button"),h=t("doc-page");return H(),y(h,{title:"Overflow Menu"},{default:o(()=>[e(C,{name:"pf-overflow-menu"}),e(g,{title:"Default",style:{"min-height":"350px"},source:`<pf-overflow-menu breakpoint="lg">
  <pf-overflow-menu-content>
    <pf-overflow-menu-item>Item 1</pf-overflow-menu-item>
    <pf-overflow-menu-item>Item 2</pf-overflow-menu-item>
    <pf-overflow-menu-group>
      <pf-overflow-menu-item>Item 3</pf-overflow-menu-item>
      <pf-overflow-menu-item>Item 4</pf-overflow-menu-item>
      <pf-overflow-menu-item>Item 5</pf-overflow-menu-item>
    </pf-overflow-menu-group>
  </pf-overflow-menu-content>
  <pf-overflow-menu-control>
    <pf-dropdown v-model:open="open" plain>
      <template #toggle>
        <pf-kebab-toggle></pf-kebab-toggle>
      </template>
      <pf-overflow-menu-dropdown-item shared>Item 1</pf-overflow-menu-dropdown-item>
      <pf-overflow-menu-dropdown-item shared>Item 2</pf-overflow-menu-dropdown-item>
      <pf-overflow-menu-dropdown-item shared>Item 3</pf-overflow-menu-dropdown-item>
      <pf-overflow-menu-dropdown-item shared>Item 4</pf-overflow-menu-dropdown-item>
      <pf-overflow-menu-dropdown-item shared>Item 5</pf-overflow-menu-dropdown-item>
    </pf-dropdown>
  </pf-overflow-menu-control>
</pf-overflow-menu>`},{default:o(()=>[e(v,{breakpoint:"lg"},{default:o(()=>[e(s,null,{default:o(()=>[e(f,null,{default:o(()=>[R]),_:1}),e(f,null,{default:o(()=>[S]),_:1}),e(m,null,{default:o(()=>[e(f,null,{default:o(()=>[$]),_:1}),e(f,null,{default:o(()=>[B]),_:1}),e(f,null,{default:o(()=>[N]),_:1})]),_:1})]),_:1}),e(w,null,{default:o(()=>[e(c,{open:p.value,"onUpdate:open":i[0]||(i[0]=a=>p.value=a),plain:""},{toggle:o(()=>[e(_)]),default:o(()=>[e(r,{shared:""},{default:o(()=>[U]),_:1}),e(r,{shared:""},{default:o(()=>[V]),_:1}),e(r,{shared:""},{default:o(()=>[j]),_:1}),e(r,{shared:""},{default:o(()=>[D]),_:1}),e(r,{shared:""},{default:o(()=>[q]),_:1})]),_:1},8,["open"])]),_:1})]),_:1})]),_:1}),e(g,{title:"Persistent",style:{"min-height":"350px"},source:`<pf-overflow-menu breakpoint="lg">
  <pf-overflow-menu-content persistent>
    <pf-overflow-menu-group type="button" persistent>
      <pf-overflow-menu-item persistent>
        <pf-button variant="primary">Primary</pf-button>
      </pf-overflow-menu-item>
      <pf-overflow-menu-item>
        <pf-button variant="secondary">Secondary</pf-button>
      </pf-overflow-menu-item>
      <pf-overflow-menu-item>
        <pf-button variant="tertiary">Tertiary</pf-button>
      </pf-overflow-menu-item>
    </pf-overflow-menu-group>
    <pf-overflow-menu-group type="icon" persistent>
      <pf-overflow-menu-item persistent>
        <pf-button variant="plain"><align-left-icon></align-left-icon></pf-button>
      </pf-overflow-menu-item>
      <pf-overflow-menu-item persistent>
        <pf-button variant="plain"><align-center-icon></align-center-icon></pf-button>
      </pf-overflow-menu-item>
      <pf-overflow-menu-item persistent>
        <pf-button variant="plain"><align-right-icon></align-right-icon></pf-button>
      </pf-overflow-menu-item>
    </pf-overflow-menu-group>
  </pf-overflow-menu-content>
  <pf-overflow-menu-control additional-options>
    <pf-dropdown v-model:open="open" plain>
      <template #toggle>
        <pf-kebab-toggle></pf-kebab-toggle>
      </template>
      <pf-overflow-menu-dropdown-item shared>Secondary</pf-overflow-menu-dropdown-item>
      <pf-overflow-menu-dropdown-item shared>Tertiary</pf-overflow-menu-dropdown-item>
      <pf-overflow-menu-dropdown-item>Action 4</pf-overflow-menu-dropdown-item>
    </pf-dropdown>
  </pf-overflow-menu-control>
</pf-overflow-menu>`},{default:o(()=>[e(v,{breakpoint:"lg"},{default:o(()=>[e(s,{persistent:""},{default:o(()=>[e(m,{type:"button",persistent:""},{default:o(()=>[e(f,{persistent:""},{default:o(()=>[e(l,{variant:"primary"},{default:o(()=>[E]),_:1})]),_:1}),e(f,null,{default:o(()=>[e(l,{variant:"secondary"},{default:o(()=>[F]),_:1})]),_:1}),e(f,null,{default:o(()=>[e(l,{variant:"tertiary"},{default:o(()=>[G]),_:1})]),_:1})]),_:1}),e(m,{type:"icon",persistent:""},{default:o(()=>[e(f,{persistent:""},{default:o(()=>[e(l,{variant:"plain"},{default:o(()=>[e(u(k))]),_:1})]),_:1}),e(f,{persistent:""},{default:o(()=>[e(l,{variant:"plain"},{default:o(()=>[e(u(O))]),_:1})]),_:1}),e(f,{persistent:""},{default:o(()=>[e(l,{variant:"plain"},{default:o(()=>[e(u(L))]),_:1})]),_:1})]),_:1})]),_:1}),e(w,{"additional-options":""},{default:o(()=>[e(c,{open:p.value,"onUpdate:open":i[1]||(i[1]=a=>p.value=a),plain:""},{toggle:o(()=>[e(_)]),default:o(()=>[e(r,{shared:""},{default:o(()=>[J]),_:1}),e(r,{shared:""},{default:o(()=>[K]),_:1}),e(r,null,{default:o(()=>[Q]),_:1})]),_:1},8,["open"])]),_:1})]),_:1})]),_:1})]),_:1})}}});export{ee as default};
