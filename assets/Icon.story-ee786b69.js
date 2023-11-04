import{c as r}from"./createIcon-9e81b421.js";import{G as z}from"./gear-icon-daabbe80.js";import{C as c}from"./circle-plus-icon-d9439ab7.js";import{C as v}from"./circle-exclamation-icon-f4d7212d.js";import{C as w}from"./circle-info-icon-5e5903a6.js";import{B as b}from"./bell-icon-6abbe332.js";import{e as y,r as _,a as l,o as k,c as A,w as e,b as n,u as i,g as t,d as s}from"./index-bc10557f.js";const S={name:"ArrowDownLongIcon",height:512,width:384,svgPath:"M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z",yOffset:0,xOffset:0},L=r(S),D=L,T={name:"AngleRightIcon",height:512,width:320,svgPath:"M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z",yOffset:0,xOffset:0},V=r(T),E=V,O={name:"AngleDownIcon",height:512,width:448,svgPath:"M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z",yOffset:0,xOffset:0},B=r(O),M=B,R={name:"TriangleExclamationIcon",height:512,width:512,svgPath:"M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z",yOffset:0,xOffset:0},$=r(R),G=$,H={name:"CircleCheckIcon",height:512,width:512,svgPath:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z",yOffset:0,xOffset:0},N=r(H),g=N,q=s("div",{class:"markdown pf-v5-c-content"},[s("p",null,[t("An "),s("strong",null,"icon"),t(" component is a container that allows for icons of varying dimensions, as well as spinners, to seamlessly replace each other without shifting surrounding content.")]),s("h2",{class:"pf-v5-c-title"},"Examples")],-1),Q=s("div",{class:"markdown pf-v5-c-content"},[s("p",null,"The following example demonstrates the various status variants of an icon. Keep in mind that these icons are displayed out of a typical context, and that you should not rely on color alone to convey status to users.")],-1),U=s("div",{class:"markdown pf-v5-c-content"},[s("p",null,"Providing both size and iconSize properties allows the icon container to maintain a consistent size, even if the icon changes in size.")],-1),K=s("div",{class:"markdown pf-v5-c-content"},[s("p",null,[t("Passing the "),s("code",null,"isInProgress"),t(" property will swap the icon to a progress icon. By default this progress icon will be a "),s("code",null,"Spinner"),t(" but may be customized or overriden using the "),s("code",null,"progressIcon"),t(" property.")])],-1),j={style:{"margin-bottom":"12px"}},F={style:{"margin-bottom":"12px"}},cn=y({__name:"Icon.story",setup(J){const f=_(!1),m=_(!1);return(W,u)=>{const h=l("component-title"),o=l("pf-icon"),a=l("story-canvas"),p=l("pf-text"),C=l("pf-text-content"),I=l("pf-checkbox"),x=l("pf-spinner"),P=l("doc-page");return k(),A(P,{title:"Icon"},{default:e(()=>[n(h,{name:"pf-icon"}),q,n(a,{title:"Basic",source:`<pf-icon>
  <ArrowDownLongIcon></ArrowDownLongIcon>
</pf-icon>
<pf-icon>
  <AngleRightIcon></AngleRightIcon>
</pf-icon>
<pf-icon>
  <AngleDownIcon></AngleDownIcon>
</pf-icon>
<pf-icon>
  <GearIcon></GearIcon>
</pf-icon>`},{default:e(()=>[n(o,null,{default:e(()=>[n(i(D))]),_:1}),n(o,null,{default:e(()=>[n(i(E))]),_:1}),n(o,null,{default:e(()=>[n(i(M))]),_:1}),n(o,null,{default:e(()=>[n(i(z))]),_:1})]),_:1}),n(a,{title:"Size",source:`<pf-icon size="sm">
  <CirclePlusIcon></CirclePlusIcon>
</pf-icon>
<pf-icon size="md">
  <CirclePlusIcon></CirclePlusIcon>
</pf-icon>
<pf-icon size="lg">
  <CirclePlusIcon></CirclePlusIcon>
</pf-icon>
<pf-icon size="xl">
  <CirclePlusIcon></CirclePlusIcon>
</pf-icon>`},{default:e(()=>[n(o,{size:"sm"},{default:e(()=>[n(i(c))]),_:1}),n(o,{size:"md"},{default:e(()=>[n(i(c))]),_:1}),n(o,{size:"lg"},{default:e(()=>[n(i(c))]),_:1}),n(o,{size:"xl"},{default:e(()=>[n(i(c))]),_:1})]),_:1}),n(a,{title:"Status color",source:`<pf-icon status="danger">
  <CircleExclamationIcon></CircleExclamationIcon>
</pf-icon>
<pf-icon status="warning">
  <TriangleExclamationIcon></TriangleExclamationIcon>
</pf-icon>
<pf-icon status="success">
  <CircleCheckIcon></CircleCheckIcon>
</pf-icon>
<pf-icon status="info">
  <CircleInfoIcon></CircleInfoIcon>
</pf-icon>
<pf-icon status="custom">
  <BellIcon></BellIcon>
</pf-icon>`},{intro:e(()=>[Q]),default:e(()=>[n(o,{status:"danger"},{default:e(()=>[n(i(v))]),_:1}),n(o,{status:"warning"},{default:e(()=>[n(i(G))]),_:1}),n(o,{status:"success"},{default:e(()=>[n(i(g))]),_:1}),n(o,{status:"info"},{default:e(()=>[n(i(w))]),_:1}),n(o,{status:"custom"},{default:e(()=>[n(i(b))]),_:1})]),_:1}),n(a,{title:"Sizing an icon within the icon container",source:`<pf-icon size="xl" icon-size="sm">
  <CirclePlusIcon></CirclePlusIcon>
</pf-icon>
<pf-icon size="xl" icon-size="md">
  <CirclePlusIcon></CirclePlusIcon>
</pf-icon>
<pf-icon size="xl" icon-size="lg">
  <CirclePlusIcon></CirclePlusIcon>
</pf-icon>
<pf-icon size="xl">
  <CirclePlusIcon></CirclePlusIcon>
</pf-icon>`},{intro:e(()=>[U]),default:e(()=>[n(o,{size:"xl","icon-size":"sm"},{default:e(()=>[n(i(c))]),_:1}),n(o,{size:"xl","icon-size":"md"},{default:e(()=>[n(i(c))]),_:1}),n(o,{size:"xl","icon-size":"lg"},{default:e(()=>[n(i(c))]),_:1}),n(o,{size:"xl"},{default:e(()=>[n(i(c))]),_:1})]),_:1}),n(a,{title:"Inline",source:`<pf-text-content>
  <pf-text component="h1">
    Heading
    <pf-icon inline>
      <CirclePlusIcon></CirclePlusIcon>
    </pf-icon>
  </pf-text>
  <pf-text component="p">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed hendrerit nisi in cursus maximus.
  </pf-text>
  <pf-text component="h2">
    Second level
    <pf-icon inline>
      <CirclePlusIcon></CirclePlusIcon>
    </pf-icon>
  </pf-text>
  <pf-text component="p">
    <pf-icon inline>
      <CirclePlusIcon></CirclePlusIcon>
    </pf-icon>
    Curabitur accumsan turpis pharetra
    <strong>
      augue tincidunt
      <pf-icon inline>
        <CirclePlusIcon></CirclePlusIcon>
      </pf-icon>
    </strong>
    blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus
    venenatis. Suspendisse potenti.
  </pf-text>
  <small>
    Sometimes you need small text
    <pf-icon inline>
      <CirclePlusIcon></CirclePlusIcon>
    </pf-icon>
  </small>
  Inline with size specified:
  <pf-icon size="sm" inline>
    <CirclePlusIcon></CirclePlusIcon>
  </pf-icon>
  small,
  <pf-icon size="md" inline>
    <CirclePlusIcon></CirclePlusIcon>
  </pf-icon>
  medium,
  <pf-icon size="lg" inline>
    <CirclePlusIcon></CirclePlusIcon>
  </pf-icon>
  large,
  <pf-icon size="xl" inline>
    <CirclePlusIcon></CirclePlusIcon>
  </pf-icon>
  extra large
</pf-text-content>`},{default:e(()=>[n(C,null,{default:e(()=>[n(p,{component:"h1"},{default:e(()=>[t(" Heading "),n(o,{inline:""},{default:e(()=>[n(i(c))]),_:1})]),_:1}),n(p,{component:"p"},{default:e(()=>[t(" Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed hendrerit nisi in cursus maximus. ")]),_:1}),n(p,{component:"h2"},{default:e(()=>[t(" Second level "),n(o,{inline:""},{default:e(()=>[n(i(c))]),_:1})]),_:1}),n(p,{component:"p"},{default:e(()=>[n(o,{inline:""},{default:e(()=>[n(i(c))]),_:1}),t(" Curabitur accumsan turpis pharetra "),s("strong",null,[t(" augue tincidunt "),n(o,{inline:""},{default:e(()=>[n(i(c))]),_:1})]),t(" blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. ")]),_:1}),s("small",null,[t(" Sometimes you need small text "),n(o,{inline:""},{default:e(()=>[n(i(c))]),_:1})]),t(" Inline with size specified: "),n(o,{size:"sm",inline:""},{default:e(()=>[n(i(c))]),_:1}),t(" small, "),n(o,{size:"md",inline:""},{default:e(()=>[n(i(c))]),_:1}),t(" medium, "),n(o,{size:"lg",inline:""},{default:e(()=>[n(i(c))]),_:1}),t(" large, "),n(o,{size:"xl",inline:""},{default:e(()=>[n(i(c))]),_:1}),t(" extra large ")]),_:1})]),_:1}),n(a,{title:"In progress",source:`<div style="margin-bottom: 12px">
  <pf-checkbox
    v-model="inProgress"
    label="Toggle in progress state"
    aria-label="Set icon progress state" />
</div>

<pf-icon :in-progress="inProgress">
  <CircleCheckIcon></CircleCheckIcon>
</pf-icon>`},{intro:e(()=>[K]),default:e(()=>[s("div",j,[n(I,{modelValue:f.value,"onUpdate:modelValue":u[0]||(u[0]=d=>f.value=d),label:"Toggle in progress state","aria-label":"Set icon progress state"},null,8,["modelValue"])]),n(o,{"in-progress":f.value},{default:e(()=>[n(i(g))]),_:1},8,["in-progress"])]),_:1}),n(a,{title:"Custom in progress icon",source:`<div style="margin-bottom: 12px">
  <pf-checkbox
    v-model="inProgress2"
    label="Toggle in progress state"
    aria-label="Set icon progress state" />
</div>

<pf-icon :in-progress="inProgress2">
  <CircleCheckIcon></CircleCheckIcon>

  <template #progressIcon>
    <pf-spinner diameter="2em" aria-label="Loading..." ></pf-spinner>
  </template>
</pf-icon>`},{default:e(()=>[s("div",F,[n(I,{modelValue:m.value,"onUpdate:modelValue":u[1]||(u[1]=d=>m.value=d),label:"Toggle in progress state","aria-label":"Set icon progress state"},null,8,["modelValue"])]),n(o,{"in-progress":m.value},{progressIcon:e(()=>[n(x,{diameter:"2em","aria-label":"Loading..."})]),default:e(()=>[n(i(g))]),_:1},8,["in-progress"])]),_:1})]),_:1})}}});export{cn as default};
