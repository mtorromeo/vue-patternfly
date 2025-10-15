import{f,g as y,r as I,a as r,c as w,o as b,w as e,b as n,d as t,u as s,e as l}from"./index-B6ONleoI.js";import{G as P}from"./gear-icon-Bn50JboN.js";import{C as a}from"./circle-plus-icon-BLnh1R91.js";import{C as _}from"./circle-exclamation-icon-acMufQmc.js";import{T as S,C as d}from"./triangle-exclamation-icon-GFAiys_9.js";import{C as k}from"./circle-info-icon-DZReJaB7.js";import{B as A}from"./bell-icon-DoiMbB2s.js";const L={name:"ArrowDownLongIcon",height:512,width:384,svgPath:"M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z",yOffset:0,xOffset:0},q=f(L),T={name:"AngleRightIcon",height:512,width:320,svgPath:"M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z",yOffset:0,xOffset:0},O=f(T),V={name:"AngleDownIcon",height:512,width:448,svgPath:"M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z",yOffset:0,xOffset:0},B=f(V),D={style:{"margin-bottom":"12px"}},R={style:{"margin-bottom":"12px"}},j=y({__name:"Icon.story",setup(E){const p=I(!1),u=I(!1);return(N,o)=>{const h=r("component-title"),z=r("component-info"),i=r("pf-icon"),c=r("story-canvas"),v=r("pf-content"),g=r("pf-checkbox"),x=r("pf-spinner"),C=r("doc-page");return b(),w(C,{name:"Components/Icon.story.vue",title:"Icon"},{description:e(()=>[...o[2]||(o[2]=[l("An ",-1),t("b",null,"icon",-1),l(" component is a container that allows for icons of varying dimensions, as well as spinners, to seamlessly replace each other without shifting surrounding content.",-1)])]),apidocs:e(()=>[n(z,{src:"packages/core/src/components/Icon.vue",doc:{name:"PfIcon",exportName:"default",displayName:"Icon",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"size",description:"Size of the icon component container and icon.",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'}]}},{name:"iconSize",description:"Size of icon. Overrides the icon size set by the size property.",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'}]}},{name:"progressIconSize",description:"Size of progress icon. Overrides the icon size set by the size property.",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'}]}},{name:"status",description:"Status color of the icon",required:!1,type:{name:"union",elements:[{name:'"custom"'},{name:'"info"'},{name:'"success"'},{name:'"warning"'},{name:'"danger"'}]}},{name:"inline",description:"Indicates the icon is inline and should inherit the text font size and color. Overriden by size and iconSize properties.",required:!1,type:{name:"boolean"}},{name:"inProgress",description:"Indicates the icon is in progress. Setting this property to true will swap the icon with the progressIcon.",required:!1,type:{name:"boolean"}},{name:"defaultProgressArialabel",description:"Aria-label for the default progress icon",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Loading...'"}},{name:"shouldMirrorRTL",tags:{beta:[{description:`Flag indicating whether the icon passed as children should be mirrored for
right to left (RTL) languages. This will not mirror the icon passed to progressIcon.`,title:"beta"}]},required:!1,type:{name:"boolean"}}],slots:[{name:"default"},{name:"progress-icon"}],sourceFiles:["../../packages/core/src/components/Icon.vue"]}})]),default:e(()=>[n(h,{name:"pf-icon"}),o[18]||(o[18]=t("div",{class:"markdown pf-v6-c-content"},[t("h2",{class:"pf-v6-c-title"},"Examples")],-1)),n(c,{title:"Basic",source:`<pf-icon>
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
</pf-icon>`},{default:e(()=>[n(i,null,{default:e(()=>[n(s(q))]),_:1}),n(i,null,{default:e(()=>[n(s(O))]),_:1}),n(i,null,{default:e(()=>[n(s(B))]),_:1}),n(i,null,{default:e(()=>[n(s(P))]),_:1})]),_:1}),n(c,{title:"Size",source:`<pf-icon size="sm">
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
</pf-icon>`},{default:e(()=>[n(i,{size:"sm"},{default:e(()=>[n(s(a))]),_:1}),n(i,{size:"md"},{default:e(()=>[n(s(a))]),_:1}),n(i,{size:"lg"},{default:e(()=>[n(s(a))]),_:1}),n(i,{size:"xl"},{default:e(()=>[n(s(a))]),_:1})]),_:1}),n(c,{title:"Status color",source:`<pf-icon status="danger">
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
</pf-icon>`},{intro:e(()=>[...o[3]||(o[3]=[t("div",{class:"markdown pf-v6-c-content"},[t("p",null,"The following example demonstrates the various status variants of an icon. Keep in mind that these icons are displayed out of a typical context, and that you should not rely on color alone to convey status to users.")],-1)])]),default:e(()=>[n(i,{status:"danger"},{default:e(()=>[n(s(_))]),_:1}),n(i,{status:"warning"},{default:e(()=>[n(s(S))]),_:1}),n(i,{status:"success"},{default:e(()=>[n(s(d))]),_:1}),n(i,{status:"info"},{default:e(()=>[n(s(k))]),_:1}),n(i,{status:"custom"},{default:e(()=>[n(s(A))]),_:1})]),_:1}),n(c,{title:"Sizing an icon within the icon container",source:`<pf-icon size="xl" icon-size="sm">
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
</pf-icon>`},{intro:e(()=>[...o[4]||(o[4]=[t("div",{class:"markdown pf-v6-c-content"},[t("p",null,"Providing both size and iconSize properties allows the icon container to maintain a consistent size, even if the icon changes in size.")],-1)])]),default:e(()=>[n(i,{size:"xl","icon-size":"sm"},{default:e(()=>[n(s(a))]),_:1}),n(i,{size:"xl","icon-size":"md"},{default:e(()=>[n(s(a))]),_:1}),n(i,{size:"xl","icon-size":"lg"},{default:e(()=>[n(s(a))]),_:1}),n(i,{size:"xl"},{default:e(()=>[n(s(a))]),_:1})]),_:1}),n(c,{title:"Inline",source:`<pf-content>
  <h1>
    Heading
    <pf-icon inline>
      <CirclePlusIcon />
    </pf-icon>
  </h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed hendrerit nisi in cursus maximus.
  </p>
  <h2>
    Second level
    <pf-icon inline>
      <CirclePlusIcon />
    </pf-icon>
  </h2>
  <p>
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
  </p>
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
</pf-content>`},{default:e(()=>[n(v,null,{default:e(()=>[t("h1",null,[o[5]||(o[5]=l(" Heading ",-1)),n(i,{inline:""},{default:e(()=>[n(s(a))]),_:1})]),o[11]||(o[11]=t("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed hendrerit nisi in cursus maximus. ",-1)),t("h2",null,[o[6]||(o[6]=l(" Second level ",-1)),n(i,{inline:""},{default:e(()=>[n(s(a))]),_:1})]),t("p",null,[n(i,{inline:""},{default:e(()=>[n(s(a))]),_:1}),o[8]||(o[8]=l(" Curabitur accumsan turpis pharetra ",-1)),t("strong",null,[o[7]||(o[7]=l(" augue tincidunt ",-1)),n(i,{inline:""},{default:e(()=>[n(s(a))]),_:1})]),o[9]||(o[9]=l(" blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. ",-1))]),t("small",null,[o[10]||(o[10]=l(" Sometimes you need small text ",-1)),n(i,{inline:""},{default:e(()=>[n(s(a))]),_:1})]),o[12]||(o[12]=l(" Inline with size specified: ",-1)),n(i,{size:"sm",inline:""},{default:e(()=>[n(s(a))]),_:1}),o[13]||(o[13]=l(" small, ",-1)),n(i,{size:"md",inline:""},{default:e(()=>[n(s(a))]),_:1}),o[14]||(o[14]=l(" medium, ",-1)),n(i,{size:"lg",inline:""},{default:e(()=>[n(s(a))]),_:1}),o[15]||(o[15]=l(" large, ",-1)),n(i,{size:"xl",inline:""},{default:e(()=>[n(s(a))]),_:1}),o[16]||(o[16]=l(" extra large ",-1))]),_:1})]),_:1}),n(c,{title:"In progress",source:`<div style="margin-bottom: 12px">
  <pf-checkbox
    v-model="inProgress"
    label="Toggle in progress state"
    aria-label="Set icon progress state" />
</div>

<pf-icon :in-progress="inProgress">
  <CircleCheckIcon />
</pf-icon>`},{intro:e(()=>[...o[17]||(o[17]=[t("div",{class:"markdown pf-v6-c-content"},[t("p",null,[l("Passing the "),t("code",null,"isInProgress"),l(" property will swap the icon to a progress icon. By default this progress icon will be a "),t("code",null,"Spinner"),l(" but may be customized or overriden using the "),t("code",null,"progressIcon"),l(" property.")])],-1)])]),default:e(()=>[t("div",D,[n(g,{modelValue:p.value,"onUpdate:modelValue":o[0]||(o[0]=m=>p.value=m),label:"Toggle in progress state","aria-label":"Set icon progress state"},null,8,["modelValue"])]),n(i,{"in-progress":p.value},{default:e(()=>[n(s(d))]),_:1},8,["in-progress"])]),_:1}),n(c,{title:"Custom in progress icon",source:`<div style="margin-bottom: 12px">
  <pf-checkbox
    v-model="inProgress2"
    label="Toggle in progress state"
    aria-label="Set icon progress state" />
</div>

<pf-icon :in-progress="inProgress2">
  <CircleCheckIcon />

  <template #progress-icon>
    <pf-spinner diameter="2em" aria-label="Loading..." />
  </template>
</pf-icon>`},{default:e(()=>[t("div",R,[n(g,{modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=m=>u.value=m),label:"Toggle in progress state","aria-label":"Set icon progress state"},null,8,["modelValue"])]),n(i,{"in-progress":u.value},{"progress-icon":e(()=>[n(x,{diameter:"2em","aria-label":"Loading..."})]),default:e(()=>[n(s(d))]),_:1},8,["in-progress"])]),_:1})]),_:1})}}});export{j as default};
