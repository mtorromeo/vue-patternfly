import{F as e,G as t,H as n,c as r,ft as i,g as a,h as o,j as s,l as c,m as l,rt as u}from"./runtime-core.esm-bundler-DKmYt4j6.js";import{W as d}from"./index-Cl3hMFDe.js";var f=d({name:`CalendarIcon`,height:512,width:448,svgPathData:`M128 0C110.3 0 96 14.3 96 32l0 32-32 0C28.7 64 0 92.7 0 128l0 48 448 0 0-48c0-35.3-28.7-64-64-64l-32 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32-128 0 0-32c0-17.7-14.3-32-32-32zM0 224L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192-448 0z`,yOffset:0,xOffset:0}),p=d({name:`ClockIcon`,height:512,width:512,svgPathData:`M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z`,yOffset:0,xOffset:0}),m={style:{"margin-bottom":`12px`}},h=a({__name:`TextInput.story`,setup(a){let d=u(``),h=u(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`),g=u(!1),_=u(``),v=u(`select all on click`),y=n(`selectInput`),b=u(``),x=u(``),S=u(``),C=u(0);return(n,a)=>{let u=e(`component-info`),w=e(`pf-text-input`),T=e(`story-canvas`),E=e(`pf-checkbox`),D=e(`doc-page`);return s(),c(D,{name:`Components/TextInput.story.vue`,title:`Text input`},{description:t(()=>[...a[10]||=[l(`A `,-1),r(`b`,null,`text input`,-1),l(` is used to gather free-form text from a user.`,-1)]]),apidocs:t(()=>[o(u,{name:`PfTextInput`,doc:{name:`PfTextInput`,exportName:`PfTextInput`,displayName:`TextInput`,description:``,tags:{},expose:[{name:`input`},{name:`focus`},{name:`value`},{name:`effectiveValidated`}],props:[{name:`autocomplete`,required:!1,type:{name:`string`}},{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`disabled`,description:`Flag to show if the text input is disabled.`,required:!1,type:{name:`boolean`}},{name:`expanded`,description:`Flag to apply expanded styling`,required:!1,type:{name:`boolean`}},{name:`expandedControls`,description:`Id of the element the text input controls the expansion of, such as a menu. The input becomes a combobox with aria-expanded set from expanded.`,required:!1,type:{name:`string`}},{name:`readonly`,description:`Flag to make the input read only, without the read only styling`,required:!1,type:{name:`boolean`}},{name:`readOnlyVariant`,description:`Read only variant.`,required:!1,type:{name:`union`,elements:[{name:`"plain"`},{name:`"default"`}]}},{name:`validated`,description:`Value to indicate if the text input is modified to show that validation state.
If set to success, text input will be modified to indicate valid state.
If set to error, text input will be modified to indicate error state.`,required:!1,type:{name:`InputValidateState`}},{name:`type`,description:`Type that the text input accepts.`,required:!1,type:{name:`T`}},{name:`modelValue`,description:`Value of the text input.`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`number`},{name:`null`}]},defaultValue:{func:!1,value:`undefined`}},{name:`modelModifiers`,required:!1,type:{name:`{
  number?: N;
  trim?: boolean;
  lazy?: boolean;
}`}},{name:`ariaLabel`,description:`Aria-label. The text input requires an associated id or aria-label.`,required:!1,type:{name:`string`}},{name:`startTruncated`,description:`Truncates the text at its start while the input is not focused, keeping its end in view`,required:!1,type:{name:`boolean`}},{name:`autoValidate`,description:`When to validate the input with the browser constraint validation, true for enter or submit`,required:!1,type:{name:`union`,elements:[{name:`""`},{name:`"blur"`},{name:`"input"`},{name:`"change"`},{name:`"enter"`},{name:`boolean`}]},defaultValue:{func:!1,value:`true`}},{name:`noStatusIcon`,description:`Disables validation status icon`,required:!1,type:{name:`boolean`}}],events:[{name:`change`,type:{names:[`Event`]},description:`A callback for when the text input value changes.`},{name:`blur`,type:{names:[`FocusEvent`]},description:`Callback function when text input is blurred (focus leaves)`},{name:`focus`,type:{names:[`FocusEvent`]},description:`Callback function when text input is focused`},{name:`input`,type:{names:[`Event`]}},{name:`invalid`,type:{names:[`Event`]}},{name:`keyup`,type:{names:[`KeyboardEvent`]}},{name:`update:modelValue`,type:{names:[`TSConditionalType`]}},{name:`update:validated`,type:{names:[`InputValidateState`]}}],slots:[{name:`icon`,description:`Custom icon to render. With a validated status, it is rendered in addition to the status icon.`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/TextInput.vue`]}})]),default:t(()=>[a[21]||=r(`div`,{class:`markdown pf-v6-c-content`},[r(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),r(`ul`,null,[r(`li`,null,[l(`The value is bound with `),r(`code`,null,`v-model`),l(` (`),r(`code`,null,`value`),l(`, `),r(`code`,null,`onChange`),l(`), which supports the `),r(`code`,null,`number`),l(`, `),r(`code`,null,`trim`),l(` and `),r(`code`,null,`lazy`),l(` modifiers; number inputs emit numbers.`)]),r(`li`,null,[l(`The custom icon is the `),r(`code`,null,`icon`),l(` slot (`),r(`code`,null,`customIcon`),l(`).`)]),r(`li`,null,[r(`code`,null,`expandedProps`),l(` is replaced by `),r(`code`,null,`expanded`),l(` and `),r(`code`,null,`expanded-controls`),l(`: with the id of the controlled element, the input becomes a combobox with `),r(`code`,null,`aria-expanded`),l(`.`)]),r(`li`,null,[r(`code`,null,`isRequired`),l(` is the native `),r(`code`,null,`required`),l(` attribute, and `),r(`code`,null,`readonly`),l(` makes the input read only without the read only styling of `),r(`code`,null,`read-only-variant`),l(`.`)]),r(`li`,null,[r(`code`,null,`auto-validate`),l(` validates the input with the browser constraint validation, and `),r(`code`,null,`no-status-icon`),l(` hides the status icon; the validated state is emitted with `),r(`code`,null,`update:validated`),l(`.`)]),r(`li`,null,[r(`code`,null,`start-truncated`),l(` replaces `),r(`code`,null,`isStartTruncated`),l(` (and the deprecated `),r(`code`,null,`isLeftTruncated`),l(`). See `),r(`a`,{href:`#/`},`common differences from patternfly-react`),l(`.`)])]),r(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),o(T,{title:`Basic`,source:`<pf-text-input v-model="basic" type="text" aria-label="text input example" />`},{default:t(()=>[o(w,{modelValue:d.value,"onUpdate:modelValue":a[0]||=e=>d.value=e,type:`text`,"aria-label":`text input example`},null,8,[`modelValue`])]),_:1}),o(T,{title:`Disabled`,source:`<pf-text-input
model-value="disabled text input example"
type="text"
aria-label="disabled text input example"
disabled />`},{default:t(()=>[o(w,{"model-value":`disabled text input example`,type:`text`,"aria-label":`disabled text input example`,disabled:``})]),_:1}),o(T,{title:`Truncated at start`,source:`<pf-text-input v-model="truncated" start-truncated type="text" aria-label="start-truncated text input example" />`},{default:t(()=>[o(w,{modelValue:h.value,"onUpdate:modelValue":a[1]||=e=>h.value=e,"start-truncated":``,type:`text`,"aria-label":`start-truncated text input example`},null,8,[`modelValue`])]),_:1}),o(T,{title:`Read only`,source:`<div style="margin-bottom: 12px">
  <pf-checkbox id="isPlain" v-model="plain" label="Plain read only variant" />
</div>
<pf-text-input
  model-value="read only text input example"
  type="text"
  :read-only-variant="plain ? 'plain' : 'default'"
  aria-label="readonly input example" />`},{default:t(()=>[r(`div`,m,[o(E,{id:`isPlain`,modelValue:g.value,"onUpdate:modelValue":a[2]||=e=>g.value=e,label:`Plain read only variant`},null,8,[`modelValue`])]),o(w,{"model-value":`read only text input example`,type:`text`,"read-only-variant":g.value?`plain`:`default`,"aria-label":`readonly input example`},null,8,[`read-only-variant`])]),_:1}),o(T,{title:`Invalid`,source:`<pf-text-input
v-model="invalid"
required
validated="error"
:auto-validate="false"
type="text"
aria-label="invalid text input example" />`},{default:t(()=>[o(w,{modelValue:_.value,"onUpdate:modelValue":a[3]||=e=>_.value=e,required:``,validated:`error`,"auto-validate":!1,type:`text`,"aria-label":`invalid text input example`},null,8,[`modelValue`])]),_:1}),o(T,{title:`Select text using ref`,source:`<pf-text-input
ref="selectInput"
v-model="selectAll"
aria-label="select-all"
@focus="selectInput?.input?.select()" />`},{intro:t(()=>[...a[11]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`The input element is exposed as `),r(`code`,null,`input`),l(`, and `),r(`code`,null,`focus`),l(` events are emitted, so the text can be selected when the input gets focus.`)])],-1)]]),default:t(()=>[o(w,{ref_key:`selectInput`,ref:y,modelValue:v.value,"onUpdate:modelValue":a[4]||=e=>v.value=e,"aria-label":`select-all`,onFocus:a[5]||=e=>y.value?.input?.select()},null,8,[`modelValue`])]),_:1}),o(T,{title:`Custom icon`,source:`<pf-text-input v-model="calendar" type="text" aria-label="text input example with calendar icon">
  <template #icon><calendar-icon /></template>
</pf-text-input>
<br>
<br>
<pf-text-input v-model="clock" type="text" aria-label="text input example with clock icon">
  <template #icon><clock-icon /></template>
</pf-text-input>`},{default:t(()=>[o(w,{modelValue:b.value,"onUpdate:modelValue":a[6]||=e=>b.value=e,type:`text`,"aria-label":`text input example with calendar icon`},{icon:t(()=>[o(i(f))]),_:1},8,[`modelValue`]),a[12]||=r(`br`,null,null,-1),a[13]||=r(`br`,null,null,-1),o(w,{modelValue:x.value,"onUpdate:modelValue":a[7]||=e=>x.value=e,type:`text`,"aria-label":`text input example with clock icon`},{icon:t(()=>[o(i(p))]),_:1},8,[`modelValue`])]),_:1}),o(T,{title:`Custom icon and invalid`,source:`<pf-text-input
  v-model="calendarInvalid"
  type="text"
  validated="error"
  :auto-validate="false"
  aria-label="text input example with calendar icon"
>
  <template #icon><calendar-icon /></template>
</pf-text-input>`},{default:t(()=>[o(w,{modelValue:S.value,"onUpdate:modelValue":a[8]||=e=>S.value=e,type:`text`,validated:`error`,"auto-validate":!1,"aria-label":`text input example with calendar icon`},{icon:t(()=>[o(i(f))]),_:1},8,[`modelValue`])]),_:1}),o(T,{title:`Numeric`,source:`<pf-text-input v-model="numeric" type="number" aria-label="numeric text input example" />`},{intro:t(()=>[...a[14]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`With `),r(`code`,null,`type="number"`),l(`, the model value is a number.`)])],-1)]]),default:t(()=>[o(w,{modelValue:C.value,"onUpdate:modelValue":a[9]||=e=>C.value=e,type:`number`,"aria-label":`numeric text input example`},null,8,[`modelValue`])]),_:1}),o(T,{title:`Automatic validation`,source:`<pf-text-input
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
  no-status-icon />`},{intro:t(()=>[...a[15]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[r(`code`,null,`auto-validate`),l(` validates the input against its constraints (`),r(`code`,null,`required`),l(`, `),r(`code`,null,`pattern`),l(`, …) on enter or form submit by default, or on `),r(`code`,null,`blur`),l(`, `),r(`code`,null,`change`),l(` or `),r(`code`,null,`input`),l(`. `),r(`code`,null,`no-status-icon`),l(` hides the status icon.`)])],-1)]]),default:t(()=>[o(w,{required:``,pattern:`[0-9a-f]*`,placeholder:`hexadecimal value (does not validate)`,"aria-label":`does not validate`,"auto-validate":!1}),a[16]||=r(`br`,null,null,-1),o(w,{required:``,pattern:`[0-9a-f]*`,placeholder:`hexadecimal value (validates on enter/submit)`,"aria-label":`validates on enter/submit`,"auto-validate":``}),a[17]||=r(`br`,null,null,-1),o(w,{required:``,pattern:`[0-9a-f]*`,placeholder:`hexadecimal value (validates on blur)`,"aria-label":`validates on blur`,"auto-validate":`blur`}),a[18]||=r(`br`,null,null,-1),o(w,{required:``,pattern:`[0-9a-f]*`,placeholder:`hexadecimal value (validates on change)`,"aria-label":`validates on change`,"auto-validate":`change`}),a[19]||=r(`br`,null,null,-1),o(w,{required:``,pattern:`[0-9a-f]*`,placeholder:`hexadecimal value (validates on input)`,"aria-label":`validates on input`,"auto-validate":`input`}),a[20]||=r(`br`,null,null,-1),o(w,{required:``,pattern:`[0-9a-f]*`,placeholder:`hexadecimal value (no status icon)`,"aria-label":`no status icon`,"auto-validate":`input`,"no-status-icon":``})]),_:1})]),_:1})}}});export{h as default};