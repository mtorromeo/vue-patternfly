import{D as e,E as t,I as n,N as r,O as i,S as a,_ as o,j as s,l as c,x as l,z as u}from"./index-mFbvqZfx.js";var d=o({name:`InfoIcon`,height:512,width:192,svgPathData:`M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 224 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-192-32 0c-17.7 0-32-14.3-32-32z`,yOffset:0,xOffset:0}),f=o({name:`QuestionIcon`,height:512,width:320,svgPathData:`M80 160c0-35.3 28.7-64 64-64l32 0c35.3 0 64 28.7 64 64l0 3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74l0 1.4c0 17.7 14.3 32 32 32s32-14.3 32-32l0-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7l0-3.6c0-70.7-57.3-128-128-128l-32 0C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z`,yOffset:0,xOffset:0}),p=o({name:`ExclamationIcon`,height:512,width:128,svgPathData:`M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32L96 64zM64 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z`,yOffset:0,xOffset:0}),m=i({__name:`HelperText.story`,setup(i){return(i,o)=>{let m=r(`component-info`),h=r(`pf-helper-text-item`),g=r(`pf-helper-text`),_=r(`story-canvas`),v=r(`doc-page`);return s(),a(v,{name:`Components/HelperText.story.vue`,title:`Helper Text`},{description:n(()=>[...o[0]||=[l(`b`,null,`Helper text`,-1),t(` is an on-screen field guideline that helps provide context regarding field inputs.`,-1)]]),apidocs:n(()=>[e(m,{name:`PfHelperText`,doc:{name:`PfHelperText`,exportName:`PfHelperText`,displayName:`HelperText`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`component`,required:!1,type:{name:`union`,elements:[{name:`"div"`},{name:`"ul"`}]},defaultValue:{func:!1,value:`'div'`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/HelperText/HelperText.vue`]}}),e(m,{name:`PfHelperTextItem`,doc:{name:`PfHelperTextItem`,exportName:`PfHelperTextItem`,displayName:`HelperTextItem`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`variant`,description:`Variant styling of the helper text item.`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"warning"`},{name:`"success"`},{name:`"error"`},{name:`"indeterminate"`}]},defaultValue:{func:!1,value:`'default'`}},{name:`icon`,description:`Flag indicating the helper text should have an icon. Dynamic helper texts include icons by default while static helper texts do not.`,required:!1,type:{name:`boolean`}},{name:`dynamic`,description:`Flag indicating the helper text item is dynamic.`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`icon`},{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/HelperText/HelperTextItem.vue`]}})]),default:n(()=>[o[21]||=l(`div`,{class:`markdown pf-v6-c-content`},[l(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),e(_,{title:`Static`,source:`<pf-helper-text>
  <pf-helper-text-item>This is default helper text</pf-helper-text-item>
  <pf-helper-text-item variant="indeterminate">This is indeterminate helper text</pf-helper-text-item>
  <pf-helper-text-item variant="warning">This is warning helper text</pf-helper-text-item>
  <pf-helper-text-item variant="success">This is success helper text</pf-helper-text-item>
  <pf-helper-text-item variant="error">This is error helper text</pf-helper-text-item>
</pf-helper-text>`},{default:n(()=>[e(g,null,{default:n(()=>[e(h,null,{default:n(()=>[...o[1]||=[t(`This is default helper text`,-1)]]),_:1}),e(h,{variant:`indeterminate`},{default:n(()=>[...o[2]||=[t(`This is indeterminate helper text`,-1)]]),_:1}),e(h,{variant:`warning`},{default:n(()=>[...o[3]||=[t(`This is warning helper text`,-1)]]),_:1}),e(h,{variant:`success`},{default:n(()=>[...o[4]||=[t(`This is success helper text`,-1)]]),_:1}),e(h,{variant:`error`},{default:n(()=>[...o[5]||=[t(`This is error helper text`,-1)]]),_:1})]),_:1})]),_:1}),e(_,{title:`Static with default icons`,source:`<pf-helper-text>
  <pf-helper-text-item icon>This is default helper text</pf-helper-text-item>
  <pf-helper-text-item icon variant="indeterminate">This is indeterminate helper text</pf-helper-text-item>
  <pf-helper-text-item icon variant="warning">This is warning helper text</pf-helper-text-item>
  <pf-helper-text-item icon variant="success">This is success helper text</pf-helper-text-item>
  <pf-helper-text-item icon variant="error">This is error helper text</pf-helper-text-item>
</pf-helper-text>`},{default:n(()=>[e(g,null,{default:n(()=>[e(h,{icon:``},{default:n(()=>[...o[6]||=[t(`This is default helper text`,-1)]]),_:1}),e(h,{icon:``,variant:`indeterminate`},{default:n(()=>[...o[7]||=[t(`This is indeterminate helper text`,-1)]]),_:1}),e(h,{icon:``,variant:`warning`},{default:n(()=>[...o[8]||=[t(`This is warning helper text`,-1)]]),_:1}),e(h,{icon:``,variant:`success`},{default:n(()=>[...o[9]||=[t(`This is success helper text`,-1)]]),_:1}),e(h,{icon:``,variant:`error`},{default:n(()=>[...o[10]||=[t(`This is error helper text`,-1)]]),_:1})]),_:1})]),_:1}),e(_,{title:`Static with custom icons`,source:`<pf-helper-text>
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
</pf-helper-text>`},{default:n(()=>[e(g,null,{default:n(()=>[e(h,null,{icon:n(()=>[e(u(d))]),default:n(()=>[o[11]||=t(` This is default helper text `,-1)]),_:1}),e(h,{variant:`indeterminate`},{icon:n(()=>[e(u(f))]),default:n(()=>[o[12]||=t(` This is indeterminate helper text `,-1)]),_:1}),e(h,{variant:`warning`},{icon:n(()=>[e(u(p))]),default:n(()=>[o[13]||=t(` This is warning helper text `,-1)]),_:1}),e(h,{variant:`success`},{icon:n(()=>[e(u(c))]),default:n(()=>[o[14]||=t(` This is success helper text `,-1)]),_:1}),e(h,{variant:`error`},{icon:n(()=>[e(u(c))]),default:n(()=>[o[15]||=t(` This is error helper text `,-1)]),_:1})]),_:1})]),_:1}),e(_,{title:`Dynamic list`,source:`<pf-helper-text>
  <pf-helper-text-item icon dynamic>This is default helper text</pf-helper-text-item>
  <pf-helper-text-item icon dynamic variant="indeterminate">This is indeterminate helper text</pf-helper-text-item>
  <pf-helper-text-item icon dynamic variant="warning">This is warning helper text</pf-helper-text-item>
  <pf-helper-text-item icon dynamic variant="success">This is success helper text</pf-helper-text-item>
  <pf-helper-text-item icon dynamic variant="error">This is error helper text</pf-helper-text-item>
</pf-helper-text>`},{default:n(()=>[e(g,null,{default:n(()=>[e(h,{icon:``,dynamic:``},{default:n(()=>[...o[16]||=[t(`This is default helper text`,-1)]]),_:1}),e(h,{icon:``,dynamic:``,variant:`indeterminate`},{default:n(()=>[...o[17]||=[t(`This is indeterminate helper text`,-1)]]),_:1}),e(h,{icon:``,dynamic:``,variant:`warning`},{default:n(()=>[...o[18]||=[t(`This is warning helper text`,-1)]]),_:1}),e(h,{icon:``,dynamic:``,variant:`success`},{default:n(()=>[...o[19]||=[t(`This is success helper text`,-1)]]),_:1}),e(h,{icon:``,dynamic:``,variant:`error`},{default:n(()=>[...o[20]||=[t(`This is error helper text`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})}}});export{m as default};