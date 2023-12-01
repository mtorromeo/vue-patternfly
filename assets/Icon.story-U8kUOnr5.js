import{m as r,f as w,r as _,a as l,o as y,c as b,w as e,b as t,d as n,u as i,e as c}from"./index-LULJ9ZOK.js";import{G as P}from"./gear-icon-sVJT-rAU.js";import{C as s}from"./circle-plus-icon-sLCdv-6T.js";import{C as S}from"./circle-exclamation-icon-OLEv4a7T.js";import{C as k}from"./circle-info-icon-icAcipUt.js";import{B as A}from"./bell-icon-gh47LV3m.js";const L={name:"ArrowDownLongIcon",height:512,width:384,svgPath:"M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z",yOffset:0,xOffset:0},T=r(L),O=T,V={name:"AngleRightIcon",height:512,width:320,svgPath:"M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z",yOffset:0,xOffset:0},q=r(V),D=q,B={name:"AngleDownIcon",height:512,width:448,svgPath:"M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z",yOffset:0,xOffset:0},E=r(B),M=E,R={name:"TriangleExclamationIcon",height:512,width:512,svgPath:"M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z",yOffset:0,xOffset:0},N=r(R),$=N,G={name:"CircleCheckIcon",height:512,width:512,svgPath:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z",yOffset:0,xOffset:0},H=r(G),g=H,F=c("b",null,"icon",-1),Q=c("div",{class:"markdown pf-v5-c-content"},[c("h2",{class:"pf-v5-c-title"},"Examples")],-1),U=c("div",{class:"markdown pf-v5-c-content"},[c("p",null,"The following example demonstrates the various status variants of an icon. Keep in mind that these icons are displayed out of a typical context, and that you should not rely on color alone to convey status to users.")],-1),K=c("div",{class:"markdown pf-v5-c-content"},[c("p",null,"Providing both size and iconSize properties allows the icon container to maintain a consistent size, even if the icon changes in size.")],-1),j=c("div",{class:"markdown pf-v5-c-content"},[c("p",null,[t("Passing the "),c("code",null,"isInProgress"),t(" property will swap the icon to a progress icon. By default this progress icon will be a "),c("code",null,"Spinner"),t(" but may be customized or overriden using the "),c("code",null,"progressIcon"),t(" property.")])],-1),J={style:{"margin-bottom":"12px"}},W={style:{"margin-bottom":"12px"}},cn=w({__name:"Icon.story",setup(X){const f=_(!1),m=_(!1);return(Y,p)=>{const I=l("component-title"),x=l("component-info"),o=l("pf-icon"),a=l("story-canvas"),u=l("pf-text"),z=l("pf-text-content"),h=l("pf-checkbox"),C=l("pf-spinner"),v=l("doc-page");return y(),b(v,{title:"Icon"},{description:e(()=>[t("An "),F,t(" component is a container that allows for icons of varying dimensions, as well as spinners, to seamlessly replace each other without shifting surrounding content.")]),apidocs:e(()=>[n(x,{src:"packages/core/src/components/Icon.vue",doc:{name:"PfNotificationBadge",exportName:"default",displayName:"Icon",description:"",tags:{},props:[{name:"size",description:"Size of the icon component container and icon.",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'}]}},{name:"iconSize",description:"Size of icon. Overrides the icon size set by the size property.",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'}]}},{name:"progressIconSize",description:"Size of progress icon. Overrides the icon size set by the size property.",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'}]}},{name:"status",description:"Status color of the icon",required:!1,type:{name:"union",elements:[{name:'"custom"'},{name:'"info"'},{name:'"success"'},{name:'"warning"'},{name:'"danger"'}]}},{name:"inline",description:"Indicates the icon is inline and should inherit the text font size and color. Overriden by size and iconSize properties.",required:!1,type:{name:"boolean"}},{name:"inProgress",description:"Indicates the icon is in progress. Setting this property to true will swap the icon with the progressIcon.",required:!1,type:{name:"boolean"}},{name:"defaultProgressArialabel",description:"Aria-label for the default progress icon",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Loading...'"}},{name:"shouldMirrorRTL",tags:{beta:[{description:`Flag indicating whether the icon passed as children should be mirrored for
right to left (RTL) languages. This will not mirror the icon passed to progressIcon.`,title:"beta"}]},required:!1,type:{name:"boolean"}}],slots:[{name:"default"},{name:"progressIcon"}],sourceFiles:["../../packages/core/src/components/Icon.vue"]}},null,8,["doc"])]),default:e(()=>[n(I,{name:"pf-icon"}),Q,n(a,{title:"Basic",source:`<pf-icon>
  <ArrowDownLongIcon />
</pf-icon>
<pf-icon>
  <AngleRightIcon />
</pf-icon>
<pf-icon>
  <AngleDownIcon />
</pf-icon>
<pf-icon>
  <GearIcon />
</pf-icon>`},{default:e(()=>[n(o,null,{default:e(()=>[n(i(O))]),_:1}),n(o,null,{default:e(()=>[n(i(D))]),_:1}),n(o,null,{default:e(()=>[n(i(M))]),_:1}),n(o,null,{default:e(()=>[n(i(P))]),_:1})]),_:1}),n(a,{title:"Size",source:`<pf-icon size="sm">
  <CirclePlusIcon />
</pf-icon>
<pf-icon size="md">
  <CirclePlusIcon />
</pf-icon>
<pf-icon size="lg">
  <CirclePlusIcon />
</pf-icon>
<pf-icon size="xl">
  <CirclePlusIcon />
</pf-icon>`},{default:e(()=>[n(o,{size:"sm"},{default:e(()=>[n(i(s))]),_:1}),n(o,{size:"md"},{default:e(()=>[n(i(s))]),_:1}),n(o,{size:"lg"},{default:e(()=>[n(i(s))]),_:1}),n(o,{size:"xl"},{default:e(()=>[n(i(s))]),_:1})]),_:1}),n(a,{title:"Status color",source:`<pf-icon status="danger">
  <CircleExclamationIcon />
</pf-icon>
<pf-icon status="warning">
  <TriangleExclamationIcon />
</pf-icon>
<pf-icon status="success">
  <CircleCheckIcon />
</pf-icon>
<pf-icon status="info">
  <CircleInfoIcon />
</pf-icon>
<pf-icon status="custom">
  <BellIcon />
</pf-icon>`},{intro:e(()=>[U]),default:e(()=>[n(o,{status:"danger"},{default:e(()=>[n(i(S))]),_:1}),n(o,{status:"warning"},{default:e(()=>[n(i($))]),_:1}),n(o,{status:"success"},{default:e(()=>[n(i(g))]),_:1}),n(o,{status:"info"},{default:e(()=>[n(i(k))]),_:1}),n(o,{status:"custom"},{default:e(()=>[n(i(A))]),_:1})]),_:1}),n(a,{title:"Sizing an icon within the icon container",source:`<pf-icon size="xl" icon-size="sm">
  <CirclePlusIcon />
</pf-icon>
<pf-icon size="xl" icon-size="md">
  <CirclePlusIcon />
</pf-icon>
<pf-icon size="xl" icon-size="lg">
  <CirclePlusIcon />
</pf-icon>
<pf-icon size="xl">
  <CirclePlusIcon />
</pf-icon>`},{intro:e(()=>[K]),default:e(()=>[n(o,{size:"xl","icon-size":"sm"},{default:e(()=>[n(i(s))]),_:1}),n(o,{size:"xl","icon-size":"md"},{default:e(()=>[n(i(s))]),_:1}),n(o,{size:"xl","icon-size":"lg"},{default:e(()=>[n(i(s))]),_:1}),n(o,{size:"xl"},{default:e(()=>[n(i(s))]),_:1})]),_:1}),n(a,{title:"Inline",source:`<pf-text-content>
  <pf-text component="h1">
    Heading
    <pf-icon inline>
      <CirclePlusIcon />
    </pf-icon>
  </pf-text>
  <pf-text component="p">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed hendrerit nisi in cursus maximus.
  </pf-text>
  <pf-text component="h2">
    Second level
    <pf-icon inline>
      <CirclePlusIcon />
    </pf-icon>
  </pf-text>
  <pf-text component="p">
    <pf-icon inline>
      <CirclePlusIcon />
    </pf-icon>
    Curabitur accumsan turpis pharetra
    <strong>
      augue tincidunt
      <pf-icon inline>
        <CirclePlusIcon />
      </pf-icon>
    </strong>
    blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus
    venenatis. Suspendisse potenti.
  </pf-text>
  <small>
    Sometimes you need small text
    <pf-icon inline>
      <CirclePlusIcon />
    </pf-icon>
  </small>
  Inline with size specified:
  <pf-icon size="sm" inline>
    <CirclePlusIcon />
  </pf-icon>
  small,
  <pf-icon size="md" inline>
    <CirclePlusIcon />
  </pf-icon>
  medium,
  <pf-icon size="lg" inline>
    <CirclePlusIcon />
  </pf-icon>
  large,
  <pf-icon size="xl" inline>
    <CirclePlusIcon />
  </pf-icon>
  extra large
</pf-text-content>`},{default:e(()=>[n(z,null,{default:e(()=>[n(u,{component:"h1"},{default:e(()=>[t(" Heading "),n(o,{inline:""},{default:e(()=>[n(i(s))]),_:1})]),_:1}),n(u,{component:"p"},{default:e(()=>[t(" Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed hendrerit nisi in cursus maximus. ")]),_:1}),n(u,{component:"h2"},{default:e(()=>[t(" Second level "),n(o,{inline:""},{default:e(()=>[n(i(s))]),_:1})]),_:1}),n(u,{component:"p"},{default:e(()=>[n(o,{inline:""},{default:e(()=>[n(i(s))]),_:1}),t(" Curabitur accumsan turpis pharetra "),c("strong",null,[t(" augue tincidunt "),n(o,{inline:""},{default:e(()=>[n(i(s))]),_:1})]),t(" blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. ")]),_:1}),c("small",null,[t(" Sometimes you need small text "),n(o,{inline:""},{default:e(()=>[n(i(s))]),_:1})]),t(" Inline with size specified: "),n(o,{size:"sm",inline:""},{default:e(()=>[n(i(s))]),_:1}),t(" small, "),n(o,{size:"md",inline:""},{default:e(()=>[n(i(s))]),_:1}),t(" medium, "),n(o,{size:"lg",inline:""},{default:e(()=>[n(i(s))]),_:1}),t(" large, "),n(o,{size:"xl",inline:""},{default:e(()=>[n(i(s))]),_:1}),t(" extra large ")]),_:1})]),_:1}),n(a,{title:"In progress",source:`<div style="margin-bottom: 12px">
  <pf-checkbox
    v-model="inProgress"
    label="Toggle in progress state"
    aria-label="Set icon progress state" />
</div>

<pf-icon :in-progress="inProgress">
  <CircleCheckIcon />
</pf-icon>`},{intro:e(()=>[j]),default:e(()=>[c("div",J,[n(h,{modelValue:f.value,"onUpdate:modelValue":p[0]||(p[0]=d=>f.value=d),label:"Toggle in progress state","aria-label":"Set icon progress state"},null,8,["modelValue"])]),n(o,{"in-progress":f.value},{default:e(()=>[n(i(g))]),_:1},8,["in-progress"])]),_:1}),n(a,{title:"Custom in progress icon",source:`<div style="margin-bottom: 12px">
  <pf-checkbox
    v-model="inProgress2"
    label="Toggle in progress state"
    aria-label="Set icon progress state" />
</div>

<pf-icon :in-progress="inProgress2">
  <CircleCheckIcon />

  <template #progressIcon>
    <pf-spinner diameter="2em" aria-label="Loading..." />
  </template>
</pf-icon>`},{default:e(()=>[c("div",W,[n(h,{modelValue:m.value,"onUpdate:modelValue":p[1]||(p[1]=d=>m.value=d),label:"Toggle in progress state","aria-label":"Set icon progress state"},null,8,["modelValue"])]),n(o,{"in-progress":m.value},{progressIcon:e(()=>[n(C,{diameter:"2em","aria-label":"Loading..."})]),default:e(()=>[n(i(g))]),_:1},8,["in-progress"])]),_:1})]),_:1})}}});export{cn as default};