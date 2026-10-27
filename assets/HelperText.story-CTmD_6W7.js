import{F as e,G as t,c as n,ft as r,g as i,h as a,j as o,l as s,m as c}from"./runtime-core.esm-bundler-DKmYt4j6.js";import{A as l,F as u,W as d}from"./index-Cl3hMFDe.js";var f=d({name:`InfoIcon`,height:512,width:192,svgPathData:`M48 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM0 192c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 256 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-224-32 0c-17.7 0-32-14.3-32-32z`,yOffset:0,xOffset:0}),p=d({name:`QuestionIcon`,height:512,width:320,svgPathData:`M64 160c0-53 43-96 96-96s96 43 96 96c0 42.7-27.9 78.9-66.5 91.4-28.4 9.2-61.5 35.3-61.5 76.6l0 24c0 17.7 14.3 32 32 32s32-14.3 32-32l0-24c0-1.7 .6-4.1 3.5-7.3 3-3.3 7.9-6.5 13.7-8.4 64.3-20.7 110.8-81 110.8-152.3 0-88.4-71.6-160-160-160S0 71.6 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm96 352c22.1 0 40-17.9 40-40s-17.9-40-40-40-40 17.9-40 40 17.9 40 40 40z`,yOffset:0,xOffset:0}),m=d({name:`ExclamationIcon`,height:512,width:128,svgPathData:`M64 432c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40c0-22.1 17.9-40 40-40zM64 0c26.5 0 48 21.5 48 48 0 .6 0 1.1 0 1.7l-16 304c-.9 17-15 30.3-32 30.3S33 370.7 32 353.7L16 49.7c0-.6 0-1.1 0-1.7 0-26.5 21.5-48 48-48z`,yOffset:0,xOffset:0}),h=i({__name:`HelperText.story`,setup(i){return(i,d)=>{let h=e(`component-info`),g=e(`pf-helper-text-item`),_=e(`pf-helper-text`),v=e(`story-canvas`),y=e(`doc-page`);return o(),s(y,{name:`Components/HelperText.story.vue`,title:`Helper Text`},{description:t(()=>[...d[0]||=[n(`b`,null,`Helper text`,-1),c(` is an on-screen field guideline that helps provide context regarding field inputs.`,-1)]]),apidocs:t(()=>[a(h,{name:`PfHelperText`,doc:{name:`PfHelperText`,exportName:`PfHelperText`,displayName:`HelperText`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`component`,description:`Component type of the helper text container`,required:!1,type:{name:`union`,elements:[{name:`"div"`},{name:`"ul"`}]},defaultValue:{func:!1,value:`'div'`}},{name:`liveRegion`,description:`Flag for indicating whether the helper text container is a live region. Use this prop when you
expect or intend for any helper text items within the container to be dynamically updated.`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/HelperText/HelperText.vue`]}}),a(h,{name:`PfHelperTextItem`,doc:{name:`PfHelperTextItem`,exportName:`PfHelperTextItem`,displayName:`HelperTextItem`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`variant`,description:`Variant styling of the helper text item. Will also render a default icon, which can be overridden with the icon slot.`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"warning"`},{name:`"success"`},{name:`"error"`},{name:`"indeterminate"`}]},defaultValue:{func:!1,value:`'default'`}},{name:`component`,description:`Sets the component type of the helper text item. Defaults to li inside a ul helper text, div otherwise.`,required:!1,type:{name:`union`,elements:[{name:`"div"`},{name:`"li"`}]}},{name:`screenReaderText`,description:`Text that is only accessible to screen readers in order to announce the variant of a helper text item.
It is only rendered when the variant is not "default", and defaults to "<variant> status".`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:"(props: Props) => `${props.variant ?? 'default'} status`"}}],events:[],slots:[{name:`icon`,description:`Custom icon prefixing the helper text, overriding the default icon of the variant`},{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/HelperText/HelperTextItem.vue`]}})]),default:t(()=>[d[15]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),n(`ul`,null,[n(`li`,null,[c(`The `),n(`code`,null,`isLiveRegion`),c(` prop is replaced by `),n(`code`,null,`live-region`),c(`.`)]),n(`li`,null,[c(`The `),n(`code`,null,`icon`),c(` prop of `),n(`code`,null,`pf-helper-text-item`),c(` is replaced by the `),n(`code`,null,`icon`),c(` slot.`)]),n(`li`,null,[n(`code`,null,`pf-helper-text-item`),c(` renders as an `),n(`code`,null,`li`),c(` inside a `),n(`code`,null,`pf-helper-text`),c(` with `),n(`code`,null,`component="ul"`),c(`, unless its `),n(`code`,null,`component`),c(` prop is set.`)]),n(`li`,null,[c(`The `),n(`code`,null,`aria-label`),c(` of `),n(`code`,null,`pf-helper-text`),c(` is forwarded with any component, not only `),n(`code`,null,`ul`),c(`. See `),n(`a`,{href:`#/`},`common differences from patternfly-react`),c(`.`)])]),n(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),a(v,{title:`Basic`,source:`<pf-helper-text>
  <pf-helper-text-item>This is default helper text</pf-helper-text-item>
</pf-helper-text>
<pf-helper-text>
  <pf-helper-text-item variant="indeterminate">This is indeterminate helper text</pf-helper-text-item>
</pf-helper-text>
<pf-helper-text>
  <pf-helper-text-item variant="warning">This is warning helper text</pf-helper-text-item>
</pf-helper-text>
<pf-helper-text>
  <pf-helper-text-item variant="success">This is success helper text</pf-helper-text-item>
</pf-helper-text>
<pf-helper-text>
  <pf-helper-text-item variant="error">This is error helper text</pf-helper-text-item>
</pf-helper-text>`},{default:t(()=>[a(_,null,{default:t(()=>[a(g,null,{default:t(()=>[...d[1]||=[c(`This is default helper text`,-1)]]),_:1})]),_:1}),a(_,null,{default:t(()=>[a(g,{variant:`indeterminate`},{default:t(()=>[...d[2]||=[c(`This is indeterminate helper text`,-1)]]),_:1})]),_:1}),a(_,null,{default:t(()=>[a(g,{variant:`warning`},{default:t(()=>[...d[3]||=[c(`This is warning helper text`,-1)]]),_:1})]),_:1}),a(_,null,{default:t(()=>[a(g,{variant:`success`},{default:t(()=>[...d[4]||=[c(`This is success helper text`,-1)]]),_:1})]),_:1}),a(_,null,{default:t(()=>[a(g,{variant:`error`},{default:t(()=>[...d[5]||=[c(`This is error helper text`,-1)]]),_:1})]),_:1})]),_:1}),a(v,{title:`With custom icons`,source:`<pf-helper-text>
  <pf-helper-text-item>
    <template #icon>
      <info-icon />
    </template>
    This is default helper text
  </pf-helper-text-item>
</pf-helper-text>
<pf-helper-text>
  <pf-helper-text-item variant="indeterminate">
    <template #icon>
      <question-icon />
    </template>
    This is indeterminate helper text
  </pf-helper-text-item>
</pf-helper-text>
<pf-helper-text>
  <pf-helper-text-item variant="warning">
    <template #icon>
      <exclamation-icon />
    </template>
    This is warning helper text
  </pf-helper-text-item>
</pf-helper-text>
<pf-helper-text>
  <pf-helper-text-item variant="success">
    <template #icon>
      <check-icon />
    </template>
    This is success helper text
  </pf-helper-text-item>
</pf-helper-text>
<pf-helper-text>
  <pf-helper-text-item variant="error">
    <template #icon>
      <xmark-icon />
    </template>
    This is error helper text
  </pf-helper-text-item>
</pf-helper-text>`},{default:t(()=>[a(_,null,{default:t(()=>[a(g,null,{icon:t(()=>[a(r(f))]),default:t(()=>[d[6]||=c(` This is default helper text `,-1)]),_:1})]),_:1}),a(_,null,{default:t(()=>[a(g,{variant:`indeterminate`},{icon:t(()=>[a(r(p))]),default:t(()=>[d[7]||=c(` This is indeterminate helper text `,-1)]),_:1})]),_:1}),a(_,null,{default:t(()=>[a(g,{variant:`warning`},{icon:t(()=>[a(r(m))]),default:t(()=>[d[8]||=c(` This is warning helper text `,-1)]),_:1})]),_:1}),a(_,null,{default:t(()=>[a(g,{variant:`success`},{icon:t(()=>[a(r(l))]),default:t(()=>[d[9]||=c(` This is success helper text `,-1)]),_:1})]),_:1}),a(_,null,{default:t(()=>[a(g,{variant:`error`},{icon:t(()=>[a(r(u))]),default:t(()=>[d[10]||=c(` This is error helper text `,-1)]),_:1})]),_:1})]),_:1}),a(v,{title:`Multiple items`,source:`<pf-helper-text component="ul">
  <pf-helper-text-item>This is default helper text</pf-helper-text-item>
  <pf-helper-text-item>This is another default helper text in the same HelperText block</pf-helper-text-item>
  <pf-helper-text-item>And this is more default text in the same HelperText block</pf-helper-text-item>
</pf-helper-text>`},{intro:t(()=>[...d[11]||=[n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[c(`You can pass multiple `),n(`code`,null,`pf-helper-text-item`),c(` components inside a single `),n(`code`,null,`pf-helper-text`),c(` container. With `),n(`code`,null,`component="ul"`),c(` the items render as list items.`)])],-1)]]),default:t(()=>[a(_,{component:`ul`},{default:t(()=>[a(g,null,{default:t(()=>[...d[12]||=[c(`This is default helper text`,-1)]]),_:1}),a(g,null,{default:t(()=>[...d[13]||=[c(`This is another default helper text in the same HelperText block`,-1)]]),_:1}),a(g,null,{default:t(()=>[...d[14]||=[c(`And this is more default text in the same HelperText block`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})}}});export{h as default};