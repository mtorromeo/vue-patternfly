import{l as m,f as c,a,c as h,o as x,w as t,d as o,b as i,e as n,u as s}from"./index-svP4KyG3.js";import{X as d}from"./xmark-icon-BqTUo15O.js";const v={name:"InfoIcon",height:512,width:192,svgPath:"M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 224 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-192-32 0c-17.7 0-32-14.3-32-32z",yOffset:0,xOffset:0},T=m(v),g={name:"QuestionIcon",height:512,width:320,svgPath:"M80 160c0-35.3 28.7-64 64-64l32 0c35.3 0 64 28.7 64 64l0 3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74l0 1.4c0 17.7 14.3 32 32 32s32-14.3 32-32l0-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7l0-3.6c0-70.7-57.3-128-128-128l-32 0C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z",yOffset:0,xOffset:0},y=m(g),w={name:"ExclamationIcon",height:512,width:128,svgPath:"M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32L96 64zM64 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z",yOffset:0,xOffset:0},I=m(w),b=c({__name:"HelperText.story",setup(H){return(_,e)=>{const f=a("component-info"),r=a("pf-helper-text-item"),l=a("pf-helper-text"),p=a("story-canvas"),u=a("doc-page");return x(),h(u,{name:"Components/HelperText.story.vue",title:"Helper Text"},{description:t(()=>e[0]||(e[0]=[o("b",null,"Helper text",-1),n(" is an on-screen field guideline that helps provide context regarding field inputs.")])),apidocs:t(()=>[i(f,{src:"packages/core/src/components/HelperText/HelperText.vue",doc:{name:"PfHelperText",exportName:"default",displayName:"HelperText",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"component",required:!1,type:{name:"union",elements:[{name:'"div"'},{name:'"ul"'}]},defaultValue:{func:!1,value:"'div'"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/HelperText/HelperText.vue"]}}),i(f,{src:"packages/core/src/components/HelperText/HelperTextItem.vue",doc:{name:"PfHelperTextItem",exportName:"default",displayName:"HelperTextItem",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"variant",description:"Variant styling of the helper text item.",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"warning"'},{name:'"success"'},{name:'"error"'},{name:'"indeterminate"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"icon",description:"Flag indicating the helper text should have an icon. Dynamic helper texts include icons by default while static helper texts do not.",required:!1,type:{name:"boolean"}},{name:"dynamic",description:"Flag indicating the helper text item is dynamic.",required:!1,type:{name:"boolean"}}],slots:[{name:"icon"},{name:"default"}],sourceFiles:["../../packages/core/src/components/HelperText/HelperTextItem.vue"]}})]),default:t(()=>[e[21]||(e[21]=o("div",{class:"markdown pf-v5-c-content"},[o("h2",{class:"pf-v5-c-title"},"Examples")],-1)),i(p,{title:"Static",source:`<pf-helper-text>
  <pf-helper-text-item>This is default helper text</pf-helper-text-item>
  <pf-helper-text-item variant="indeterminate">This is indeterminate helper text</pf-helper-text-item>
  <pf-helper-text-item variant="warning">This is warning helper text</pf-helper-text-item>
  <pf-helper-text-item variant="success">This is success helper text</pf-helper-text-item>
  <pf-helper-text-item variant="error">This is error helper text</pf-helper-text-item>
</pf-helper-text>`},{default:t(()=>[i(l,null,{default:t(()=>[i(r,null,{default:t(()=>e[1]||(e[1]=[n("This is default helper text")])),_:1}),i(r,{variant:"indeterminate"},{default:t(()=>e[2]||(e[2]=[n("This is indeterminate helper text")])),_:1}),i(r,{variant:"warning"},{default:t(()=>e[3]||(e[3]=[n("This is warning helper text")])),_:1}),i(r,{variant:"success"},{default:t(()=>e[4]||(e[4]=[n("This is success helper text")])),_:1}),i(r,{variant:"error"},{default:t(()=>e[5]||(e[5]=[n("This is error helper text")])),_:1})]),_:1})]),_:1}),i(p,{title:"Static with default icons",source:`<pf-helper-text>
  <pf-helper-text-item icon>This is default helper text</pf-helper-text-item>
  <pf-helper-text-item icon variant="indeterminate">This is indeterminate helper text</pf-helper-text-item>
  <pf-helper-text-item icon variant="warning">This is warning helper text</pf-helper-text-item>
  <pf-helper-text-item icon variant="success">This is success helper text</pf-helper-text-item>
  <pf-helper-text-item icon variant="error">This is error helper text</pf-helper-text-item>
</pf-helper-text>`},{default:t(()=>[i(l,null,{default:t(()=>[i(r,{icon:""},{default:t(()=>e[6]||(e[6]=[n("This is default helper text")])),_:1}),i(r,{icon:"",variant:"indeterminate"},{default:t(()=>e[7]||(e[7]=[n("This is indeterminate helper text")])),_:1}),i(r,{icon:"",variant:"warning"},{default:t(()=>e[8]||(e[8]=[n("This is warning helper text")])),_:1}),i(r,{icon:"",variant:"success"},{default:t(()=>e[9]||(e[9]=[n("This is success helper text")])),_:1}),i(r,{icon:"",variant:"error"},{default:t(()=>e[10]||(e[10]=[n("This is error helper text")])),_:1})]),_:1})]),_:1}),i(p,{title:"Static with custom icons",source:`<pf-helper-text>
  <pf-helper-text-item>
    <template #icon>
      <info-icon />
    </template>
    This is default helper text
  </pf-helper-text-item>
  <pf-helper-text-item variant="indeterminate">
    <template #icon>
      <question-icon />
    </template>
    This is indeterminate helper text
  </pf-helper-text-item>
  <pf-helper-text-item variant="warning">
    <template #icon>
      <exclamation-icon />
    </template>
    This is warning helper text
  </pf-helper-text-item>
  <pf-helper-text-item variant="success">
    <template #icon>
      <xmark-icon />
    </template>
    This is success helper text
  </pf-helper-text-item>
  <pf-helper-text-item variant="error">
    <template #icon>
      <xmark-icon />
    </template>
    This is error helper text
  </pf-helper-text-item>
</pf-helper-text>`},{default:t(()=>[i(l,null,{default:t(()=>[i(r,null,{icon:t(()=>[i(s(T))]),default:t(()=>[e[11]||(e[11]=n(" This is default helper text "))]),_:1}),i(r,{variant:"indeterminate"},{icon:t(()=>[i(s(y))]),default:t(()=>[e[12]||(e[12]=n(" This is indeterminate helper text "))]),_:1}),i(r,{variant:"warning"},{icon:t(()=>[i(s(I))]),default:t(()=>[e[13]||(e[13]=n(" This is warning helper text "))]),_:1}),i(r,{variant:"success"},{icon:t(()=>[i(s(d))]),default:t(()=>[e[14]||(e[14]=n(" This is success helper text "))]),_:1}),i(r,{variant:"error"},{icon:t(()=>[i(s(d))]),default:t(()=>[e[15]||(e[15]=n(" This is error helper text "))]),_:1})]),_:1})]),_:1}),i(p,{title:"Dynamic list",source:`<pf-helper-text>
  <pf-helper-text-item icon dynamic>This is default helper text</pf-helper-text-item>
  <pf-helper-text-item icon dynamic variant="indeterminate">This is indeterminate helper text</pf-helper-text-item>
  <pf-helper-text-item icon dynamic variant="warning">This is warning helper text</pf-helper-text-item>
  <pf-helper-text-item icon dynamic variant="success">This is success helper text</pf-helper-text-item>
  <pf-helper-text-item icon dynamic variant="error">This is error helper text</pf-helper-text-item>
</pf-helper-text>`},{default:t(()=>[i(l,null,{default:t(()=>[i(r,{icon:"",dynamic:""},{default:t(()=>e[16]||(e[16]=[n("This is default helper text")])),_:1}),i(r,{icon:"",dynamic:"",variant:"indeterminate"},{default:t(()=>e[17]||(e[17]=[n("This is indeterminate helper text")])),_:1}),i(r,{icon:"",dynamic:"",variant:"warning"},{default:t(()=>e[18]||(e[18]=[n("This is warning helper text")])),_:1}),i(r,{icon:"",dynamic:"",variant:"success"},{default:t(()=>e[19]||(e[19]=[n("This is success helper text")])),_:1}),i(r,{icon:"",dynamic:"",variant:"error"},{default:t(()=>e[20]||(e[20]=[n("This is error helper text")])),_:1})]),_:1})]),_:1})]),_:1})}}});export{b as default};
