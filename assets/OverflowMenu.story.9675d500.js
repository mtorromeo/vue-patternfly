import{c as d}from"./createIcon.d9096a91.js";import{e as I,r as b,c as y,w as o,a as t,o as z,b as e,u,j as n}from"./index.adfcb1e2.js";const H={name:"AlignLeftIcon",height:512,width:448,svgPath:"M12.83 352h262.34A12.82 12.82 0 0 0 288 339.17v-38.34A12.82 12.82 0 0 0 275.17 288H12.83A12.82 12.82 0 0 0 0 300.83v38.34A12.82 12.82 0 0 0 12.83 352zm0-256h262.34A12.82 12.82 0 0 0 288 83.17V44.83A12.82 12.82 0 0 0 275.17 32H12.83A12.82 12.82 0 0 0 0 44.83v38.34A12.82 12.82 0 0 0 12.83 96zM432 160H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0 256H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z",yOffset:0,xOffset:0},k=d(H);var C=k;const x={name:"AlignCenterIcon",height:512,width:448,svgPath:"M432 160H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0 256H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM108.1 96h231.81A12.09 12.09 0 0 0 352 83.9V44.09A12.09 12.09 0 0 0 339.91 32H108.1A12.09 12.09 0 0 0 96 44.09V83.9A12.1 12.1 0 0 0 108.1 96zm231.81 256A12.09 12.09 0 0 0 352 339.9v-39.81A12.09 12.09 0 0 0 339.91 288H108.1A12.09 12.09 0 0 0 96 300.09v39.81a12.1 12.1 0 0 0 12.1 12.1z",yOffset:0,xOffset:0},O=d(x);var M=O;const P={name:"AlignRightIcon",height:512,width:448,svgPath:"M16 224h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm416 192H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm3.17-384H172.83A12.82 12.82 0 0 0 160 44.83v38.34A12.82 12.82 0 0 0 172.83 96h262.34A12.82 12.82 0 0 0 448 83.17V44.83A12.82 12.82 0 0 0 435.17 32zm0 256H172.83A12.82 12.82 0 0 0 160 300.83v38.34A12.82 12.82 0 0 0 172.83 352h262.34A12.82 12.82 0 0 0 448 339.17v-38.34A12.82 12.82 0 0 0 435.17 288z",yOffset:0,xOffset:0},V=d(P);var T=V;const L=n("Item 1"),R=n("Item 2"),S=n("Item 3"),$=n("Item 4"),B=n("Item 5"),N=n("Item 1"),U=n("Item 2"),j=n("Item 3"),D=n("Item 4"),q=n("Item 5"),E=n("Primary"),F=n("Secondary"),G=n("Tertiary"),J=n("Secondary"),K=n("Tertiary"),Q=n("Action 4"),ee=I({name:"OverflowMenu.story",setup(W){const l=b(!1);return(X,a)=>{const h=t("component-title"),f=t("pf-overflow-menu-item"),m=t("pf-overflow-menu-group"),s=t("pf-overflow-menu-content"),_=t("pf-kebab-toggle"),r=t("pf-overflow-menu-dropdown-item"),v=t("pf-dropdown"),w=t("pf-overflow-menu-control"),c=t("pf-overflow-menu"),g=t("story-canvas"),p=t("pf-button"),A=t("doc-page");return z(),y(A,{title:"Overflow Menu"},{default:o(()=>[e(h,{name:"pf-overflow-menu"}),e(g,{title:"Default",style:{"min-height":"350px"},source:`<pf-overflow-menu breakpoint="lg">
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
        <pf-kebab-toggle />
      </template>
      <pf-overflow-menu-dropdown-item shared>Item 1</pf-overflow-menu-dropdown-item>
      <pf-overflow-menu-dropdown-item shared>Item 2</pf-overflow-menu-dropdown-item>
      <pf-overflow-menu-dropdown-item shared>Item 3</pf-overflow-menu-dropdown-item>
      <pf-overflow-menu-dropdown-item shared>Item 4</pf-overflow-menu-dropdown-item>
      <pf-overflow-menu-dropdown-item shared>Item 5</pf-overflow-menu-dropdown-item>
    </pf-dropdown>
  </pf-overflow-menu-control>
</pf-overflow-menu>`},{default:o(()=>[e(c,{breakpoint:"lg"},{default:o(()=>[e(s,null,{default:o(()=>[e(f,null,{default:o(()=>[L]),_:1}),e(f,null,{default:o(()=>[R]),_:1}),e(m,null,{default:o(()=>[e(f,null,{default:o(()=>[S]),_:1}),e(f,null,{default:o(()=>[$]),_:1}),e(f,null,{default:o(()=>[B]),_:1})]),_:1})]),_:1}),e(w,null,{default:o(()=>[e(v,{open:l.value,"onUpdate:open":a[0]||(a[0]=i=>l.value=i),plain:""},{toggle:o(()=>[e(_)]),default:o(()=>[e(r,{shared:""},{default:o(()=>[N]),_:1}),e(r,{shared:""},{default:o(()=>[U]),_:1}),e(r,{shared:""},{default:o(()=>[j]),_:1}),e(r,{shared:""},{default:o(()=>[D]),_:1}),e(r,{shared:""},{default:o(()=>[q]),_:1})]),_:1},8,["open"])]),_:1})]),_:1})]),_:1}),e(g,{title:"Persistent",style:{"min-height":"350px"},source:`<pf-overflow-menu breakpoint="lg">
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
        <pf-button variant="plain"><align-left-icon /></pf-button>
      </pf-overflow-menu-item>
      <pf-overflow-menu-item persistent>
        <pf-button variant="plain"><align-center-icon /></pf-button>
      </pf-overflow-menu-item>
      <pf-overflow-menu-item persistent>
        <pf-button variant="plain"><align-right-icon /></pf-button>
      </pf-overflow-menu-item>
    </pf-overflow-menu-group>
  </pf-overflow-menu-content>
  <pf-overflow-menu-control additional-options>
    <pf-dropdown v-model:open="open" plain>
      <template #toggle>
        <pf-kebab-toggle />
      </template>
      <pf-overflow-menu-dropdown-item shared>Secondary</pf-overflow-menu-dropdown-item>
      <pf-overflow-menu-dropdown-item shared>Tertiary</pf-overflow-menu-dropdown-item>
      <pf-overflow-menu-dropdown-item>Action 4</pf-overflow-menu-dropdown-item>
    </pf-dropdown>
  </pf-overflow-menu-control>
</pf-overflow-menu>`},{default:o(()=>[e(c,{breakpoint:"lg"},{default:o(()=>[e(s,{persistent:""},{default:o(()=>[e(m,{type:"button",persistent:""},{default:o(()=>[e(f,{persistent:""},{default:o(()=>[e(p,{variant:"primary"},{default:o(()=>[E]),_:1})]),_:1}),e(f,null,{default:o(()=>[e(p,{variant:"secondary"},{default:o(()=>[F]),_:1})]),_:1}),e(f,null,{default:o(()=>[e(p,{variant:"tertiary"},{default:o(()=>[G]),_:1})]),_:1})]),_:1}),e(m,{type:"icon",persistent:""},{default:o(()=>[e(f,{persistent:""},{default:o(()=>[e(p,{variant:"plain"},{default:o(()=>[e(u(C))]),_:1})]),_:1}),e(f,{persistent:""},{default:o(()=>[e(p,{variant:"plain"},{default:o(()=>[e(u(M))]),_:1})]),_:1}),e(f,{persistent:""},{default:o(()=>[e(p,{variant:"plain"},{default:o(()=>[e(u(T))]),_:1})]),_:1})]),_:1})]),_:1}),e(w,{"additional-options":""},{default:o(()=>[e(v,{open:l.value,"onUpdate:open":a[1]||(a[1]=i=>l.value=i),plain:""},{toggle:o(()=>[e(_)]),default:o(()=>[e(r,{shared:""},{default:o(()=>[J]),_:1}),e(r,{shared:""},{default:o(()=>[K]),_:1}),e(r,null,{default:o(()=>[Q]),_:1})]),_:1},8,["open"])]),_:1})]),_:1})]),_:1})]),_:1})}}});export{ee as default};
