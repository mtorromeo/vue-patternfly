import{H as e,N as t,Q as n,c as r,h as i,it as a,k as o,m as s,p as c,s as l}from"./runtime-core.esm-bundler-DvxuuL12.js";import{_ as u}from"./index-CYysyUN8.js";var d=u({name:`ClockIcon`,height:512,width:512,svgPathData:`M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z`,yOffset:0,xOffset:0}),f=i({__name:`TextInput.story`,setup(i){let u=n(null),f=n(``),p=n(0);return(n,i)=>{let m=t(`component-info`),h=t(`pf-text-input`),g=t(`story-canvas`),_=t(`doc-page`);return o(),r(_,{name:`Components/TextInput.story.vue`,title:`Text Input`},{description:e(()=>[...i[4]||=[c(`A `,-1),l(`b`,null,`text input`,-1),c(` is used to gather free-form text from a user.`,-1)]]),apidocs:e(()=>[s(m,{name:`PfTextInput`,doc:{name:`PfTextInput`,exportName:`PfTextInput`,displayName:`TextInput`,description:``,tags:{},expose:[{name:`input`},{name:`focus`},{name:`value`},{name:`effectiveValidated`}],props:[{name:`autocomplete`,required:!1,type:{name:`string`}},{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`disabled`,description:`Flag to show if the text input is disabled.`,required:!1,type:{name:`boolean`}},{name:`expanded`,description:`Flag to apply expanded styling`,required:!1,type:{name:`boolean`}},{name:`readonly`,required:!1,type:{name:`boolean`}},{name:`readOnlyVariant`,description:`Read only variant.`,required:!1,type:{name:`union`,elements:[{name:`"plain"`},{name:`"default"`}]}},{name:`validated`,description:`Value to indicate if the text input is modified to show that validation state.
If set to success, text input will be modified to indicate valid state.
If set to error, text input will be modified to indicate error state.`,required:!1,type:{name:`InputValidateState`}},{name:`type`,description:`Type that the text input accepts.`,required:!1,type:{name:`T`}},{name:`modelValue`,description:`Value of the text input.`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`number`},{name:`null`}]},defaultValue:{func:!1,value:`undefined`}},{name:`modelModifiers`,required:!1,type:{name:`{
  number?: N;
  trim?: boolean;
  lazy?: boolean;
}`}},{name:`ariaLabel`,description:`Aria-label. The text input requires an associated id or aria-label.`,required:!1,type:{name:`string`}},{name:`startTruncated`,description:`Trim text at start`,required:!1,type:{name:`boolean`}},{name:`autoValidate`,required:!1,type:{name:`union`,elements:[{name:`""`},{name:`"blur"`},{name:`"input"`},{name:`"change"`},{name:`"enter"`},{name:`boolean`}]},defaultValue:{func:!1,value:`true`}},{name:`noStatusIcon`,description:`Disables validation status icon`,required:!1,type:{name:`boolean`}}],events:[{name:`change`,type:{names:[`Event`]},description:`A callback for when the text input value changes.`},{name:`blur`,type:{names:[`FocusEvent`]},description:`Callback function when text input is blurred (focus leaves)`},{name:`input`,type:{names:[`Event`]}},{name:`invalid`,type:{names:[`Event`]}},{name:`keyup`,type:{names:[`KeyboardEvent`]}},{name:`update:modelValue`,type:{names:[`TSConditionalType`]}},{name:`update:validated`,type:{names:[`InputValidateState`]}}],slots:[{name:`icon`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/TextInput.vue`]}})]),default:e(()=>[s(g,{title:`Basic`,source:`<pf-text-input v-model="text1" aria-label="text input example" />`},{default:e(()=>[s(h,{modelValue:u.value,"onUpdate:modelValue":i[0]||=e=>u.value=e,"aria-label":`text input example`},null,8,[`modelValue`])]),_:1}),s(g,{title:`Numeric`,source:`<pf-text-input v-model="number1" type="number" aria-label="text input example" />`},{default:e(()=>[s(h,{modelValue:p.value,"onUpdate:modelValue":i[1]||=e=>p.value=e,type:`number`,"aria-label":`text input example`},null,8,[`modelValue`])]),_:1}),s(g,{title:`Disabled`,source:`<pf-text-input
disabled
model-value="disabled text input example"
aria-label="disabled text input example" />`},{default:e(()=>[s(h,{disabled:``,"model-value":`disabled text input example`,"aria-label":`disabled text input example`})]),_:1}),s(g,{title:`Read only`,source:`<pf-text-input
readonly
model-value="read only text input example"
aria-label="read only text input example" />`},{default:e(()=>[s(h,{readonly:``,"model-value":`read only text input example`,"aria-label":`read only text input example`})]),_:1}),s(g,{title:`Validation`,source:`<pf-text-input
  required
  pattern="[0-9a-f]*"
  placeholder="hexadecimal value (does not validate)"
  aria-label="does not validate"
  :auto-validate="false" />
<br>
<pf-text-input
  required
  pattern="[0-9a-f]*"
  placeholder="hexadecimal value (validates on enter/submit)"
  aria-label="validates on enter/submit"
  auto-validate />
<br>
<pf-text-input
  required
  pattern="[0-9a-f]*"
  placeholder="hexadecimal value (validates on blur)"
  aria-label="validates on blur"
  auto-validate="blur" />
<br>
<pf-text-input
  v-model="text2"
  required
  pattern="[0-9a-f]*"
  placeholder="hexadecimal value (validates on change)"
  aria-label="validates on change"
  auto-validate="change" />
<br>
<pf-text-input
  required
  pattern="[0-9a-f]*"
  placeholder="hexadecimal value (validates on input)"
  aria-label="validates on input"
  auto-validate="input" />
<br>
<pf-text-input
  required
  pattern="[0-9a-f]*"
  placeholder="hexadecimal value (no status icon)"
  aria-label="no status icon"
  auto-validate="input"
  no-status-icon />`},{default:e(()=>[s(h,{required:``,pattern:`[0-9a-f]*`,placeholder:`hexadecimal value (does not validate)`,"aria-label":`does not validate`,"auto-validate":!1}),i[5]||=l(`br`,null,null,-1),s(h,{required:``,pattern:`[0-9a-f]*`,placeholder:`hexadecimal value (validates on enter/submit)`,"aria-label":`validates on enter/submit`,"auto-validate":``}),i[6]||=l(`br`,null,null,-1),s(h,{required:``,pattern:`[0-9a-f]*`,placeholder:`hexadecimal value (validates on blur)`,"aria-label":`validates on blur`,"auto-validate":`blur`}),i[7]||=l(`br`,null,null,-1),s(h,{modelValue:f.value,"onUpdate:modelValue":i[2]||=e=>f.value=e,required:``,pattern:`[0-9a-f]*`,placeholder:`hexadecimal value (validates on change)`,"aria-label":`validates on change`,"auto-validate":`change`},null,8,[`modelValue`]),i[8]||=l(`br`,null,null,-1),s(h,{required:``,pattern:`[0-9a-f]*`,placeholder:`hexadecimal value (validates on input)`,"aria-label":`validates on input`,"auto-validate":`input`}),i[9]||=l(`br`,null,null,-1),s(h,{required:``,pattern:`[0-9a-f]*`,placeholder:`hexadecimal value (no status icon)`,"aria-label":`no status icon`,"auto-validate":`input`,"no-status-icon":``})]),_:1}),s(g,{title:`Truncated on left`,source:`<pf-text-input start-truncated model-value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />`},{default:e(()=>[s(h,{"start-truncated":``,"model-value":`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`})]),_:1}),s(g,{title:`Select all`,source:`<pf-text-input
model-value="select all on click"
aria-label="select-all"
@focus="($event.currentTarget as HTMLInputElement).select()" />`},{default:e(()=>[s(h,{"model-value":`select all on click`,"aria-label":`select-all`,onFocus:i[3]||=e=>e.currentTarget.select()})]),_:1}),s(g,{title:`Custom icon`,source:`<pf-text-input aria-label="text input example">
  <template #icon>
    <clock-icon />
  </template>
</pf-text-input>`},{default:e(()=>[s(h,{"aria-label":`text input example`},{icon:e(()=>[s(a(d))]),_:1})]),_:1})]),_:1})}}});export{f as default};