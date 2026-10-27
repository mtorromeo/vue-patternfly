import{F as e,G as t,N as n,Nt as r,c as i,d as a,g as o,h as s,j as c,l,m as u,n as d,rt as f}from"./runtime-core.esm-bundler-DKmYt4j6.js";var p=o({__name:`Progress.story`,setup(o){let p=[void 0,`success`,`warning`,`danger`],m=f(void 0);function h(e){return e?e[0].toUpperCase()+e.slice(1):`Default`}let g=[`inside`,`outside`,`top`,`none`],_=f(`inside`),v=f(!1);return(o,f)=>{let y=e(`component-info`),b=e(`pf-progress`),x=e(`story-canvas`),S=e(`pf-description-list-term`),C=e(`pf-description-list-description`),w=e(`pf-description-list-group`),T=e(`pf-description-list`),E=e(`pf-radio`),D=e(`pf-helper-text-item`),O=e(`pf-helper-text`),k=e(`pf-form-group`),A=e(`pf-checkbox`),j=e(`pf-form`),M=e(`doc-page`);return c(),l(M,{name:`Components/Progress.story.vue`,title:`Progress`},{description:t(()=>[...f[1]||=[u(`A `,-1),i(`b`,null,`progress`,-1),u(` bar informs users about the completion status of an ongoing process or task.`,-1)]]),apidocs:t(()=>[s(y,{name:`PfProgress`,doc:{name:`PfProgress`,exportName:`PfProgress`,displayName:`Progress`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`id`,description:`Id of the progress component. Generated when not set.`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`() => useId()`}},{name:`value`,description:`Actual value of progress.`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`0`}},{name:`min`,description:`Minimal value of progress.`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`0`}},{name:`max`,description:`Maximum value of progress.`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`100`}},{name:`valueText`,description:`Accessible text description of current progress value, for when value is not a percentage. Use with label.`,required:!1,type:{name:`string`}},{name:`title`,description:`Title above progress, replaced by the title slot. Only a string title is truncated with titleTruncated.`,required:!1,type:{name:`string`}},{name:`label`,description:`Text description of current progress value to display instead of percentage, replaced by the default slot.`,required:!1,type:{name:`string`}},{name:`titleTruncated`,description:`Indicate whether to truncate the string title`,required:!1,type:{name:`boolean`}},{name:`tooltipPosition`,description:`Position of the tooltip which is displayed if title is truncated`,required:!1,type:{name:`union`,elements:[{name:`"auto"`},{name:`"top"`},{name:`"bottom"`},{name:`"left"`},{name:`"right"`}]},defaultValue:{func:!1,value:`'top'`}},{name:`size`,description:`Size variant of progress.`,required:!1,type:{name:`union`,elements:[{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`null`}]}},{name:`measureLocation`,description:`Where the measure percent will be located.`,required:!1,type:{name:`union`,elements:[{name:`"outside"`},{name:`"inside"`},{name:`"top"`},{name:`"none"`}]},defaultValue:{func:!1,value:`'top'`}},{name:`variant`,description:`Status variant of progress.`,required:!1,type:{name:`union`,elements:[{name:`"success"`},{name:`"warning"`},{name:`"danger"`}]}},{name:`helperText`,description:`Content conveying additional information about the progress, replaced by the helper-text slot.`,required:!1,type:{name:`string`}},{name:`hideStatusIcon`,description:`Hides the status icon, helpful when space is limited. The status must then be conveyed in another way.`,required:!1,type:{name:`boolean`}},{name:`ariaLabel`,description:`Adds accessible text to the progress bar. Required when title not used and there is not any label associated with the progress bar`,required:!1,type:{name:`string`}},{name:`ariaLabelledby`,description:`Associates the progress bar with its label for accessibility purposes. Required when title not used`,required:!1,type:{name:`string`}},{name:`ariaDescribedby`,description:`Adds an accessible description to the progress bar via space separated list of ids. Required with a helper text.`,required:!1,type:{name:`string`}}],events:[],slots:[{name:`title`,description:`Title above the progress, replacing the title prop`},{name:`default`,description:`Description of the current progress value, replacing the label prop`},{name:`helper-text`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Progress.vue`]}})]),default:t(()=>[f[4]||=i(`div`,{class:`markdown pf-v6-c-content`},[i(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),i(`ul`,null,[i(`li`,null,[i(`code`,null,`title`),u(`, `),i(`code`,null,`label`),u(` and `),i(`code`,null,`helperText`),u(` can also be the `),i(`code`,null,`title`),u(`, default and `),i(`code`,null,`helper-text`),u(` slots; only a `),i(`code`,null,`title`),u(` prop is truncated with `),i(`code`,null,`title-truncated`),u(` (`),i(`code`,null,`isTitleTruncated`),u(`).`)]),i(`li`,null,[u(`With `),i(`code`,null,`measure-location="inside"`),u(`, the measure shows the `),i(`code`,null,`label`),u(` (or the default slot) when set, rather than always the percentage.`)]),i(`li`,null,[i(`code`,null,`ProgressBar`),u(` and `),i(`code`,null,`ProgressContainer`),u(` are not exported: they are internal parts of `),i(`code`,null,`pf-progress`),u(`. See `),i(`a`,{href:`#/`},`common differences from patternfly-react`),u(`.`)])]),i(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),s(x,{title:`Basic`,source:`<pf-progress :value="33" title="Title" />`},{default:t(()=>[s(b,{value:33,title:`Title`})]),_:1}),s(x,{title:`Small`,source:`<pf-progress :value="33" title="Title" size="sm" />`},{default:t(()=>[s(b,{value:33,title:`Title`,size:`sm`})]),_:1}),s(x,{title:`Large`,source:`<pf-progress :value="33" title="Title" size="lg" />`},{default:t(()=>[s(b,{value:33,title:`Title`,size:`lg`})]),_:1}),s(x,{title:`Outside`,source:`<pf-progress :value="33" title="Title" measure-location="outside" />`},{default:t(()=>[s(b,{value:33,title:`Title`,"measure-location":`outside`})]),_:1}),s(x,{title:`Inside`,source:`<pf-progress :value="33" title="Title" measure-location="inside" />`},{default:t(()=>[s(b,{value:33,title:`Title`,"measure-location":`inside`})]),_:1}),s(x,{title:`Single line`,source:`<pf-progress :value="33" measure-location="outside" aria-label="Title" />`},{default:t(()=>[s(b,{value:33,"measure-location":`outside`,"aria-label":`Title`})]),_:1}),s(x,{title:`Without measure`,source:`<pf-progress :value="33" title="Title" measure-location="none" />`},{default:t(()=>[s(b,{value:33,title:`Title`,"measure-location":`none`})]),_:1}),s(x,{title:`Finite step`,source:`<pf-progress
:value="2"
:min="0"
:max="5"
title="Title"
measure-location="top"
label="2 of 5"
value-text="2 of 5" />`},{default:t(()=>[s(b,{value:2,min:0,max:5,title:`Title`,"measure-location":`top`,label:`2 of 5`,"value-text":`2 of 5`})]),_:1}),s(x,{title:`Progress with step instructions`,source:`<pf-progress
:value="2"
title="Title"
:min="0"
:max="5"
label="Step 2: Copying files"
value-text="Step 2: Copying files" />`},{default:t(()=>[s(b,{value:2,title:`Title`,min:0,max:5,label:`Step 2: Copying files`,"value-text":`Step 2: Copying files`})]),_:1}),s(x,{title:`Truncate title`,source:`<pf-progress
:value="33"
title="Very very very very very very very very very very very long title which should be truncated if it does not fit onto one line above the progress bar"
title-truncated />`},{default:t(()=>[s(b,{value:33,title:`Very very very very very very very very very very very long title which should be truncated if it does not fit onto one line above the progress bar`,"title-truncated":``})]),_:1}),s(x,{title:`Title outside of progress bar`,source:`<pf-description-list aria-label="Progress Title outside of progress bar">
  <pf-description-list-group>
    <pf-description-list-term id="title-outside-progress-example-label">
      Title outside of progress bar
    </pf-description-list-term>
    <pf-description-list-description>
      <pf-progress
        :value="33"
        measure-location="outside"
        aria-labelledby="title-outside-progress-example-label" />
    </pf-description-list-description>
  </pf-description-list-group>
</pf-description-list>`},{default:t(()=>[s(T,{"aria-label":`Progress Title outside of progress bar`},{default:t(()=>[s(w,null,{default:t(()=>[s(S,{id:`title-outside-progress-example-label`},{default:t(()=>[...f[2]||=[u(` Title outside of progress bar `,-1)]]),_:1}),s(C,null,{default:t(()=>[s(b,{value:33,"measure-location":`outside`,"aria-labelledby":`title-outside-progress-example-label`})]),_:1})]),_:1})]),_:1})]),_:1}),s(x,{title:`Helper text`,source:`<pf-radio
  v-for="variant in variants"
  :id="\`progress-helper-text-\${variant ?? 'default'}-selector\`"
  :key="variant ?? 'default'"
  name="Progress variant options"
  :label="\`\${variantName(variant)} variant\`"
  :checked="variant === helperVariant"
  @change="helperVariant = variant" />
<br>
<pf-progress
  aria-describedby="progress-helper-text-example-help-text"
  :value="33"
  title="Title"
  :variant="helperVariant"
>
  <template #helper-text>
    <pf-helper-text id="progress-helper-text-example-help-text">
      <pf-helper-text-item :variant="helperVariant === 'danger' ? 'error' : helperVariant">
        {{ variantName(helperVariant) }} variant is being displayed
      </pf-helper-text-item>
    </pf-helper-text>
  </template>
</pf-progress>`},{default:t(()=>[(c(),a(d,null,n(p,e=>s(E,{id:`progress-helper-text-${e??`default`}-selector`,key:e??`default`,name:`Progress variant options`,label:`${h(e)} variant`,checked:e===m.value,onChange:t=>m.value=e},null,8,[`id`,`label`,`checked`,`onChange`])),64)),f[3]||=i(`br`,null,null,-1),s(b,{"aria-describedby":`progress-helper-text-example-help-text`,value:33,title:`Title`,variant:m.value},{"helper-text":t(()=>[s(O,{id:`progress-helper-text-example-help-text`},{default:t(()=>[s(D,{variant:m.value===`danger`?`error`:m.value},{default:t(()=>[u(r(h(m.value))+` variant is being displayed `,1)]),_:1},8,[`variant`])]),_:1})]),_:1},8,[`variant`])]),_:1}),f[5]||=i(`div`,{class:`markdown pf-v6-c-content`},[i(`h2`,{class:`pf-v6-c-title`},`Status examples`),i(`p`,null,`When conveying status, you should ensure:`),i(`ul`,null,[i(`li`,null,`There is visible helper text that explains the status.`),i(`li`,null,[u(`The helper text includes the status icon, as seen in the `),i(`a`,{href:`#/stories/components/helper-text`},`basic helper text example`),u(`.`)]),i(`li`,null,[u(`The helper text is linked to the `),i(`code`,null,`pf-progress`),u(` component via the `),i(`code`,null,`aria-describedby`),u(` property, as seen in the helper text example above.`)])])],-1),s(x,{title:`Success`,source:`<pf-progress :value="100" title="Title" variant="success" />`},{default:t(()=>[s(b,{value:100,title:`Title`,variant:`success`})]),_:1}),s(x,{title:`Failure`,source:`<pf-progress :value="33" title="Title" variant="danger" />`},{default:t(()=>[s(b,{value:33,title:`Title`,variant:`danger`})]),_:1}),s(x,{title:`Warning`,source:`<pf-progress :value="90" title="Title" variant="warning" />`},{default:t(()=>[s(b,{value:90,title:`Title`,variant:`warning`})]),_:1}),s(x,{title:`Interactive status icon and measure location`,source:`<pf-form>
  <pf-form-group field-id="measure-location" label="Measure location">
    <pf-radio
      v-for="option in measureLocations"
      :id="\`measure-location-\${option}\`"
      :key="option"
      name="measure-location"
      :label="option[0]!.toUpperCase() + option.slice(1)"
      :value="option"
      :checked="measureLocation === option"
      @change="measureLocation = option" />
  </pf-form-group>
  <pf-form-group field-id="hide-status-icon">
    <pf-checkbox id="hide-status-icon" v-model="hideStatusIcon" label="Hide status icon" />
  </pf-form-group>
  <pf-progress
    :value="33"
    title="Title"
    :measure-location="measureLocation"
    variant="danger"
    :hide-status-icon="hideStatusIcon" />
</pf-form>`},{default:t(()=>[s(j,null,{default:t(()=>[s(k,{"field-id":`measure-location`,label:`Measure location`},{default:t(()=>[(c(),a(d,null,n(g,e=>s(E,{id:`measure-location-${e}`,key:e,name:`measure-location`,label:e[0].toUpperCase()+e.slice(1),value:e,checked:_.value===e,onChange:t=>_.value=e},null,8,[`id`,`label`,`value`,`checked`,`onChange`])),64))]),_:1}),s(k,{"field-id":`hide-status-icon`},{default:t(()=>[s(A,{id:`hide-status-icon`,modelValue:v.value,"onUpdate:modelValue":f[0]||=e=>v.value=e,label:`Hide status icon`},null,8,[`modelValue`])]),_:1}),s(b,{value:33,title:`Title`,"measure-location":_.value,variant:`danger`,"hide-status-icon":v.value},null,8,[`measure-location`,`hide-status-icon`])]),_:1})]),_:1})]),_:1})}}});export{p as default};