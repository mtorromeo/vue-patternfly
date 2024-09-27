import{l as p,f as w,r as x,o as _,c as b,w as e,a as s,b as a,d as n,u as t,e as r}from"./index-9TsNn5Vt.js";import{G as P}from"./gear-icon-DNIIWxOY.js";import{C as l}from"./circle-plus-icon-DpQy5hnh.js";import{C as S}from"./circle-exclamation-icon-DBAjs8N1.js";import{C as k}from"./circle-info-icon-CIwwf3d4.js";import{B as L}from"./bell-icon-C7pGgpUB.js";const A={name:"ArrowDownLongIcon",height:512,width:384,svgPath:"M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z",yOffset:0,xOffset:0},O=p(A),T={name:"AngleRightIcon",height:512,width:320,svgPath:"M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z",yOffset:0,xOffset:0},q=p(T),V={name:"AngleDownIcon",height:512,width:448,svgPath:"M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z",yOffset:0,xOffset:0},B=p(V),D={name:"TriangleExclamationIcon",height:512,width:512,svgPath:"M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z",yOffset:0,xOffset:0},E=p(D),M={name:"CircleCheckIcon",height:512,width:512,svgPath:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z",yOffset:0,xOffset:0},g=p(M),N={style:{"margin-bottom":"12px"}},R={style:{"margin-bottom":"12px"}},W=w({__name:"Icon.story",setup(G){const m=x(!1),f=x(!1);return(F,o)=>{const h=r("component-title"),z=r("component-info"),i=r("pf-icon"),c=r("story-canvas"),u=r("pf-text"),v=r("pf-text-content"),I=r("pf-checkbox"),C=r("pf-spinner"),y=r("doc-page");return _(),b(y,{name:"Components/Icon.story.vue",title:"Icon"},{description:e(()=>o[2]||(o[2]=[s("An "),a("b",null,"icon",-1),s(" component is a container that allows for icons of varying dimensions, as well as spinners, to seamlessly replace each other without shifting surrounding content.")])),apidocs:e(()=>[n(z,{src:"packages/core/src/components/Icon.vue",doc:{name:"PfNotificationBadge",exportName:"default",displayName:"Icon",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"size",description:"Size of the icon component container and icon.",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'}]}},{name:"iconSize",description:"Size of icon. Overrides the icon size set by the size property.",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'}]}},{name:"progressIconSize",description:"Size of progress icon. Overrides the icon size set by the size property.",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'}]}},{name:"status",description:"Status color of the icon",required:!1,type:{name:"union",elements:[{name:'"custom"'},{name:'"info"'},{name:'"success"'},{name:'"warning"'},{name:'"danger"'}]}},{name:"inline",description:"Indicates the icon is inline and should inherit the text font size and color. Overriden by size and iconSize properties.",required:!1,type:{name:"boolean"}},{name:"inProgress",description:"Indicates the icon is in progress. Setting this property to true will swap the icon with the progressIcon.",required:!1,type:{name:"boolean"}},{name:"defaultProgressArialabel",description:"Aria-label for the default progress icon",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Loading...'"}},{name:"shouldMirrorRTL",tags:{beta:[{description:`Flag indicating whether the icon passed as children should be mirrored for
right to left (RTL) languages. This will not mirror the icon passed to progressIcon.`,title:"beta"}]},required:!1,type:{name:"boolean"}}],slots:[{name:"default"},{name:"progressIcon"}],sourceFiles:["../../packages/core/src/components/Icon.vue"]}})]),default:e(()=>[n(h,{name:"pf-icon"}),o[18]||(o[18]=a("div",{class:"markdown pf-v5-c-content"},[a("h2",{class:"pf-v5-c-title"},"Examples")],-1)),n(c,{title:"Basic",source:`<pf-icon>
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
</pf-icon>`},{default:e(()=>[n(i,null,{default:e(()=>[n(t(O))]),_:1}),n(i,null,{default:e(()=>[n(t(q))]),_:1}),n(i,null,{default:e(()=>[n(t(B))]),_:1}),n(i,null,{default:e(()=>[n(t(P))]),_:1})]),_:1}),n(c,{title:"Size",source:`<pf-icon size="sm">
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
</pf-icon>`},{default:e(()=>[n(i,{size:"sm"},{default:e(()=>[n(t(l))]),_:1}),n(i,{size:"md"},{default:e(()=>[n(t(l))]),_:1}),n(i,{size:"lg"},{default:e(()=>[n(t(l))]),_:1}),n(i,{size:"xl"},{default:e(()=>[n(t(l))]),_:1})]),_:1}),n(c,{title:"Status color",source:`<pf-icon status="danger">
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
</pf-icon>`},{intro:e(()=>o[3]||(o[3]=[a("div",{class:"markdown pf-v5-c-content"},[a("p",null,"The following example demonstrates the various status variants of an icon. Keep in mind that these icons are displayed out of a typical context, and that you should not rely on color alone to convey status to users.")],-1)])),default:e(()=>[n(i,{status:"danger"},{default:e(()=>[n(t(S))]),_:1}),n(i,{status:"warning"},{default:e(()=>[n(t(E))]),_:1}),n(i,{status:"success"},{default:e(()=>[n(t(g))]),_:1}),n(i,{status:"info"},{default:e(()=>[n(t(k))]),_:1}),n(i,{status:"custom"},{default:e(()=>[n(t(L))]),_:1})]),_:1}),n(c,{title:"Sizing an icon within the icon container",source:`<pf-icon size="xl" icon-size="sm">
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
</pf-icon>`},{intro:e(()=>o[4]||(o[4]=[a("div",{class:"markdown pf-v5-c-content"},[a("p",null,"Providing both size and iconSize properties allows the icon container to maintain a consistent size, even if the icon changes in size.")],-1)])),default:e(()=>[n(i,{size:"xl","icon-size":"sm"},{default:e(()=>[n(t(l))]),_:1}),n(i,{size:"xl","icon-size":"md"},{default:e(()=>[n(t(l))]),_:1}),n(i,{size:"xl","icon-size":"lg"},{default:e(()=>[n(t(l))]),_:1}),n(i,{size:"xl"},{default:e(()=>[n(t(l))]),_:1})]),_:1}),n(c,{title:"Inline",source:`<pf-text-content>
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
</pf-text-content>`},{default:e(()=>[n(v,null,{default:e(()=>[n(u,{component:"h1"},{default:e(()=>[o[5]||(o[5]=s(" Heading ")),n(i,{inline:""},{default:e(()=>[n(t(l))]),_:1})]),_:1}),n(u,{component:"p"},{default:e(()=>o[6]||(o[6]=[s(" Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed hendrerit nisi in cursus maximus. ")])),_:1}),n(u,{component:"h2"},{default:e(()=>[o[7]||(o[7]=s(" Second level ")),n(i,{inline:""},{default:e(()=>[n(t(l))]),_:1})]),_:1}),n(u,{component:"p"},{default:e(()=>[n(i,{inline:""},{default:e(()=>[n(t(l))]),_:1}),o[9]||(o[9]=s(" Curabitur accumsan turpis pharetra ")),a("strong",null,[o[8]||(o[8]=s(" augue tincidunt ")),n(i,{inline:""},{default:e(()=>[n(t(l))]),_:1})]),o[10]||(o[10]=s(" blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. "))]),_:1}),a("small",null,[o[11]||(o[11]=s(" Sometimes you need small text ")),n(i,{inline:""},{default:e(()=>[n(t(l))]),_:1})]),o[12]||(o[12]=s(" Inline with size specified: ")),n(i,{size:"sm",inline:""},{default:e(()=>[n(t(l))]),_:1}),o[13]||(o[13]=s(" small, ")),n(i,{size:"md",inline:""},{default:e(()=>[n(t(l))]),_:1}),o[14]||(o[14]=s(" medium, ")),n(i,{size:"lg",inline:""},{default:e(()=>[n(t(l))]),_:1}),o[15]||(o[15]=s(" large, ")),n(i,{size:"xl",inline:""},{default:e(()=>[n(t(l))]),_:1}),o[16]||(o[16]=s(" extra large "))]),_:1})]),_:1}),n(c,{title:"In progress",source:`<div style="margin-bottom: 12px">
  <pf-checkbox
    v-model="inProgress"
    label="Toggle in progress state"
    aria-label="Set icon progress state" />
</div>

<pf-icon :in-progress="inProgress">
  <CircleCheckIcon />
</pf-icon>`},{intro:e(()=>o[17]||(o[17]=[a("div",{class:"markdown pf-v5-c-content"},[a("p",null,[s("Passing the "),a("code",null,"isInProgress"),s(" property will swap the icon to a progress icon. By default this progress icon will be a "),a("code",null,"Spinner"),s(" but may be customized or overriden using the "),a("code",null,"progressIcon"),s(" property.")])],-1)])),default:e(()=>[a("div",N,[n(I,{modelValue:m.value,"onUpdate:modelValue":o[0]||(o[0]=d=>m.value=d),label:"Toggle in progress state","aria-label":"Set icon progress state"},null,8,["modelValue"])]),n(i,{"in-progress":m.value},{default:e(()=>[n(t(g))]),_:1},8,["in-progress"])]),_:1}),n(c,{title:"Custom in progress icon",source:`<div style="margin-bottom: 12px">
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
</pf-icon>`},{default:e(()=>[a("div",R,[n(I,{modelValue:f.value,"onUpdate:modelValue":o[1]||(o[1]=d=>f.value=d),label:"Toggle in progress state","aria-label":"Set icon progress state"},null,8,["modelValue"])]),n(i,{"in-progress":f.value},{progressIcon:e(()=>[n(C,{diameter:"2em","aria-label":"Loading..."})]),default:e(()=>[n(t(g))]),_:1},8,["in-progress"])]),_:1})]),_:1})}}});export{W as default};