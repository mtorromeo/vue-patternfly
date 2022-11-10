import{c}from"./createIcon.1a216044.js";import{X as o}from"./xmark-icon.1a3c81a0.js";import{e as m,a as r,c as x,w as e,o as d,b as t,g as i,u as a,d as p}from"./index.8c49d723.js";const u={name:"InfoIcon",height:512,width:192,svgPath:"M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z",yOffset:0,xOffset:0},_=c(u),T=_,v={name:"QuestionIcon",height:512,width:320,svgPath:"M96 96c-17.7 0-32 14.3-32 32s-14.3 32-32 32s-32-14.3-32-32C0 75 43 32 96 32h97c70.1 0 127 56.9 127 127c0 52.4-32.2 99.4-81 118.4l-63 24.5 0 18.1c0 17.7-14.3 32-32 32s-32-14.3-32-32V301.9c0-26.4 16.2-50.1 40.8-59.6l63-24.5C240 208.3 256 185 256 159c0-34.8-28.2-63-63-63H96zm48 384c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40z",yOffset:0,xOffset:0},g=c(v),w=g,y={name:"ExclamationIcon",height:512,width:128,svgPath:"M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z",yOffset:0,xOffset:0},I=c(y),k=I,C=p("div",{class:"markdown pf-c-content"},[p("p",null,[i("See full "),p("a",{href:"https://www.patternfly.org/v4/components/helper-text/design-guidelines"},"Design guidelines"),i(" on the official patternfly documentation.")])],-1),E=m({__name:"HelperText.story",setup(V){return(H,z)=>{const h=r("component-title"),n=r("pf-helper-text-item"),s=r("pf-helper-text"),l=r("story-canvas"),f=r("doc-page");return d(),x(f,{title:"Helper Text"},{default:e(()=>[t(h,{name:"pf-helper-text"}),C,t(l,{title:"Static",source:`<pf-helper-text>
  <pf-helper-text-item>This is default helper text</pf-helper-text-item>
  <pf-helper-text-item variant="indeterminate">This is indeterminate helper text</pf-helper-text-item>
  <pf-helper-text-item variant="warning">This is warning helper text</pf-helper-text-item>
  <pf-helper-text-item variant="success">This is success helper text</pf-helper-text-item>
  <pf-helper-text-item variant="error">This is error helper text</pf-helper-text-item>
</pf-helper-text>`},{default:e(()=>[t(s,null,{default:e(()=>[t(n,null,{default:e(()=>[i("This is default helper text")]),_:1}),t(n,{variant:"indeterminate"},{default:e(()=>[i("This is indeterminate helper text")]),_:1}),t(n,{variant:"warning"},{default:e(()=>[i("This is warning helper text")]),_:1}),t(n,{variant:"success"},{default:e(()=>[i("This is success helper text")]),_:1}),t(n,{variant:"error"},{default:e(()=>[i("This is error helper text")]),_:1})]),_:1})]),_:1}),t(l,{title:"Static with default icons",source:`<pf-helper-text>
  <pf-helper-text-item icon>This is default helper text</pf-helper-text-item>
  <pf-helper-text-item icon variant="indeterminate">This is indeterminate helper text</pf-helper-text-item>
  <pf-helper-text-item icon variant="warning">This is warning helper text</pf-helper-text-item>
  <pf-helper-text-item icon variant="success">This is success helper text</pf-helper-text-item>
  <pf-helper-text-item icon variant="error">This is error helper text</pf-helper-text-item>
</pf-helper-text>`},{default:e(()=>[t(s,null,{default:e(()=>[t(n,{icon:""},{default:e(()=>[i("This is default helper text")]),_:1}),t(n,{icon:"",variant:"indeterminate"},{default:e(()=>[i("This is indeterminate helper text")]),_:1}),t(n,{icon:"",variant:"warning"},{default:e(()=>[i("This is warning helper text")]),_:1}),t(n,{icon:"",variant:"success"},{default:e(()=>[i("This is success helper text")]),_:1}),t(n,{icon:"",variant:"error"},{default:e(()=>[i("This is error helper text")]),_:1})]),_:1})]),_:1}),t(l,{title:"Static with custom icons",source:`<pf-helper-text>
  <pf-helper-text-item>
    <template #icon>
      <info-icon></info-icon>
    </template>
    This is default helper text
  </pf-helper-text-item>
  <pf-helper-text-item variant="indeterminate">
    <template #icon>
      <question-icon></question-icon>
    </template>
    This is indeterminate helper text
  </pf-helper-text-item>
  <pf-helper-text-item variant="warning">
    <template #icon>
      <exclamation-icon></exclamation-icon>
    </template>
    This is warning helper text
  </pf-helper-text-item>
  <pf-helper-text-item variant="success">
    <template #icon>
      <xmark-icon></xmark-icon>
    </template>
    This is success helper text
  </pf-helper-text-item>
  <pf-helper-text-item variant="error">
    <template #icon>
      <xmark-icon></xmark-icon>
    </template>
    This is error helper text
  </pf-helper-text-item>
</pf-helper-text>`},{default:e(()=>[t(s,null,{default:e(()=>[t(n,null,{icon:e(()=>[t(a(T))]),default:e(()=>[i(" This is default helper text ")]),_:1}),t(n,{variant:"indeterminate"},{icon:e(()=>[t(a(w))]),default:e(()=>[i(" This is indeterminate helper text ")]),_:1}),t(n,{variant:"warning"},{icon:e(()=>[t(a(k))]),default:e(()=>[i(" This is warning helper text ")]),_:1}),t(n,{variant:"success"},{icon:e(()=>[t(a(o))]),default:e(()=>[i(" This is success helper text ")]),_:1}),t(n,{variant:"error"},{icon:e(()=>[t(a(o))]),default:e(()=>[i(" This is error helper text ")]),_:1})]),_:1})]),_:1}),t(l,{title:"Dynamic list",source:`<pf-helper-text>
  <pf-helper-text-item icon dynamic>This is default helper text</pf-helper-text-item>
  <pf-helper-text-item icon dynamic variant="indeterminate">This is indeterminate helper text</pf-helper-text-item>
  <pf-helper-text-item icon dynamic variant="warning">This is warning helper text</pf-helper-text-item>
  <pf-helper-text-item icon dynamic variant="success">This is success helper text</pf-helper-text-item>
  <pf-helper-text-item icon dynamic variant="error">This is error helper text</pf-helper-text-item>
</pf-helper-text>`},{default:e(()=>[t(s,null,{default:e(()=>[t(n,{icon:"",dynamic:""},{default:e(()=>[i("This is default helper text")]),_:1}),t(n,{icon:"",dynamic:"",variant:"indeterminate"},{default:e(()=>[i("This is indeterminate helper text")]),_:1}),t(n,{icon:"",dynamic:"",variant:"warning"},{default:e(()=>[i("This is warning helper text")]),_:1}),t(n,{icon:"",dynamic:"",variant:"success"},{default:e(()=>[i("This is success helper text")]),_:1}),t(n,{icon:"",dynamic:"",variant:"error"},{default:e(()=>[i("This is error helper text")]),_:1})]),_:1})]),_:1})]),_:1})}}});export{E as default};
