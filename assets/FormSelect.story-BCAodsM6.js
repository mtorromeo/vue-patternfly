import{F as e,K as t,Pt as n,c as r,g as i,h as a,it as o,j as s,l as c,m as l}from"./runtime-core.esm-bundler-DO1530YC.js";var u=i({__name:`FormSelect.story`,setup(i){let u=o(`mrs`),d=o(`mrs`),f=o(`2`),p=o([]),m=o(``),h=o(``),g=o(`default`);function _(e){let t=typeof e==`string`?e:``;m.value=t,g.value=`default`,h.value=`Validating...`,setTimeout(()=>{t===`3`?(g.value=`success`,h.value=`You chose wisely`):t===``?(g.value=`warning`,h.value=`You must select a value`):(g.value=`error`,h.value=`You must chose Three (thought that was obvious)`)},2e3)}return(i,o)=>{let v=e(`component-info`),y=e(`pf-form-select-option`),b=e(`pf-form-select`),x=e(`story-canvas`),S=e(`pf-helper-text-item`),C=e(`pf-helper-text`),w=e(`pf-form-helper-text`),T=e(`pf-form-group`),E=e(`pf-form`),D=e(`pf-form-select-option-group`),O=e(`doc-page`);return s(),c(O,{name:`Components/FormSelect.story.vue`,title:`Form Select`},{description:t(()=>[...o[4]||=[l(`A `,-1),r(`b`,null,`form select`,-1),l(` embeds browser native select lists into a form.`,-1)]]),apidocs:t(()=>[a(v,{name:`PfFormSelect`,doc:{name:`PfFormSelect`,exportName:`PfFormSelect`,displayName:`FormSelect`,description:``,tags:{},expose:[{name:`input`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`modelValue`,description:`Selected value, or array of selected values when multiple is set.`,required:!1,type:{name:`union`,elements:[{name:`V`},{name:`Array`,elements:[{name:`V`}]},{name:`null`}]}},{name:`multiple`,required:!1,type:{name:`M`}},{name:`disabled`,required:!1,type:{name:`boolean`}},{name:`validated`,description:`Value to indicate if the input is modified to show that validation state.
If set to success, input will be modified to indicate valid state.
If set to error,  input will be modified to indicate error state.`,tags:{values:[{description:`default, success, warning, error`,title:`values`}]},required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"success"`},{name:`"warning"`},{name:`"error"`}]}}],events:[{name:`update:modelValue`,type:{names:[`TSConditionalType`]}}],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/FormSelect/FormSelect.vue`]}}),a(v,{name:`PfFormSelectOption`,doc:{name:`PfFormSelectOption`,exportName:`PfFormSelectOption`,displayName:`FormSelectOption`,description:``,tags:{},props:[{name:`label`,description:`The label for the option, overridden by the default slot`,required:!1,type:{name:`string`}},{name:`placeholder`,description:`Flag indicating if option will have placeholder styling applied when selected`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`,description:`Content of the option, overrides the label prop`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/FormSelect/FormSelectOption.vue`]}}),a(v,{name:`PfFormSelectOptionGroup`,doc:{name:`PfFormSelectOptionGroup`,exportName:`PfFormSelectOptionGroup`,displayName:`FormSelectOptionGroup`,description:``,tags:{},props:[{name:`label`,description:`The label for the option group`,required:!0,type:{name:`string`}},{name:`disabled`,description:`Flag indicating if the option group is disabled`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`,description:`The pf-form-select-option components of the group`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/FormSelect/FormSelectOptionGroup.vue`]}})]),default:t(()=>[o[6]||=r(`div`,{class:`markdown pf-v6-c-content`},[r(`h2`,{class:`pf-v6-c-title`},`Usage`),r(`p`,null,[l(`If your use case only calls for simple selects, you may opt to use a form select as an field inside a form. However, if your use case requires more customization and capability, use a custom select list. `),r(`strong`,null,`Note`),l(`: Use only custom selects or only form selects in the same context. Mixing them together compromises visual consistency in your UI.`)]),r(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),r(`ul`,null,[r(`li`,null,[l(`The `),r(`code`,null,`value`),l(` and `),r(`code`,null,`onChange`),l(` props are replaced by `),r(`code`,null,`v-model`),l(`.`)]),r(`li`,null,[l(`The `),r(`code`,null,`multiple`),l(` prop renders a multiple select, whose `),r(`code`,null,`v-model`),l(` is an array of values.`)]),r(`li`,null,[l(`The content of `),r(`code`,null,`pf-form-select-option`),l(` can also be passed in its default slot, overriding the `),r(`code`,null,`label`),l(` prop.`)]),r(`li`,null,[l(`The placeholder styling also applies to placeholder options nested in a `),r(`code`,null,`pf-form-select-option-group`),l(`. See `),r(`a`,{href:`#/`},`common differences from patternfly-react`),l(`.`)])]),r(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),a(x,{title:`Basic`,source:`<pf-form-select v-model="basic" aria-label="FormSelect Input" ouia-id="BasicFormSelect">
  <pf-form-select-option value="please choose" label="Select one" disabled />
  <pf-form-select-option value="mr" label="Mr" />
  <pf-form-select-option value="miss" label="Miss" />
  <pf-form-select-option value="mrs" label="Mrs" />
  <pf-form-select-option value="ms" label="Ms" />
  <pf-form-select-option value="dr" label="Dr" />
  <pf-form-select-option value="other" label="Other" />
</pf-form-select>`},{default:t(()=>[a(b,{modelValue:u.value,"onUpdate:modelValue":o[0]||=e=>u.value=e,"aria-label":`FormSelect Input`,"ouia-id":`BasicFormSelect`},{default:t(()=>[a(y,{value:`please choose`,label:`Select one`,disabled:``}),a(y,{value:`mr`,label:`Mr`}),a(y,{value:`miss`,label:`Miss`}),a(y,{value:`mrs`,label:`Mrs`}),a(y,{value:`ms`,label:`Ms`}),a(y,{value:`dr`,label:`Dr`}),a(y,{value:`other`,label:`Other`})]),_:1},8,[`modelValue`])]),_:1}),a(x,{title:`Validated`,source:`<pf-form>
  <pf-form-group label="Selection:" field-id="selection">
    <pf-form-select
      id="selection"
      :model-value="validatedValue"
      :validated="validated"
      aria-label="FormSelect Input"
      @update:model-value="onValidatedChange"
    >
      <pf-form-select-option value="" label="Select a number" placeholder />
      <pf-form-select-option value="1" label="One" />
      <pf-form-select-option value="2" label="Two" />
      <pf-form-select-option value="3" label="Three - the only valid option" />
    </pf-form-select>
    <pf-form-helper-text>
      <pf-helper-text>
        <pf-helper-text-item :variant="validated">{{ helperText }}</pf-helper-text-item>
      </pf-helper-text>
    </pf-form-helper-text>
  </pf-form-group>
</pf-form>`},{default:t(()=>[a(E,null,{default:t(()=>[a(T,{label:`Selection:`,"field-id":`selection`},{default:t(()=>[a(b,{id:`selection`,"model-value":m.value,validated:g.value,"aria-label":`FormSelect Input`,"onUpdate:modelValue":_},{default:t(()=>[a(y,{value:``,label:`Select a number`,placeholder:``}),a(y,{value:`1`,label:`One`}),a(y,{value:`2`,label:`Two`}),a(y,{value:`3`,label:`Three - the only valid option`})]),_:1},8,[`model-value`,`validated`]),a(w,null,{default:t(()=>[a(C,null,{default:t(()=>[a(S,{variant:g.value},{default:t(()=>[l(n(h.value),1)]),_:1},8,[`variant`])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(x,{title:`Disabled`,source:`<pf-form-select v-model="disabledValue" disabled aria-label="FormSelect Input">
  <pf-form-select-option value="please choose" label="Select one" disabled />
  <pf-form-select-option value="mr" label="Mr" />
  <pf-form-select-option value="miss" label="Miss" />
  <pf-form-select-option value="mrs" label="Mrs" />
  <pf-form-select-option value="ms" label="Ms" />
  <pf-form-select-option value="dr" label="Dr" />
  <pf-form-select-option value="other" label="Other" />
</pf-form-select>`},{default:t(()=>[a(b,{modelValue:d.value,"onUpdate:modelValue":o[1]||=e=>d.value=e,disabled:``,"aria-label":`FormSelect Input`},{default:t(()=>[a(y,{value:`please choose`,label:`Select one`,disabled:``}),a(y,{value:`mr`,label:`Mr`}),a(y,{value:`miss`,label:`Miss`}),a(y,{value:`mrs`,label:`Mrs`}),a(y,{value:`ms`,label:`Ms`}),a(y,{value:`dr`,label:`Dr`}),a(y,{value:`other`,label:`Other`})]),_:1},8,[`modelValue`])]),_:1}),a(x,{title:`Grouped`,source:`<pf-form-select v-model="grouped" aria-label="FormSelect Input">
  <pf-form-select-option-group label="Group1">
    <pf-form-select-option value="1" label="The first option" />
    <pf-form-select-option value="2" label="Second option is selected by default" />
  </pf-form-select-option-group>
  <pf-form-select-option-group label="Group2">
    <pf-form-select-option value="3" label="The third option" />
    <pf-form-select-option value="4" label="The fourth option" />
  </pf-form-select-option-group>
  <pf-form-select-option-group label="Group3" disabled>
    <pf-form-select-option value="5" label="The fifth option" />
    <pf-form-select-option value="6" label="The sixth option" />
  </pf-form-select-option-group>
</pf-form-select>`},{default:t(()=>[a(b,{modelValue:f.value,"onUpdate:modelValue":o[2]||=e=>f.value=e,"aria-label":`FormSelect Input`},{default:t(()=>[a(D,{label:`Group1`},{default:t(()=>[a(y,{value:`1`,label:`The first option`}),a(y,{value:`2`,label:`Second option is selected by default`})]),_:1}),a(D,{label:`Group2`},{default:t(()=>[a(y,{value:`3`,label:`The third option`}),a(y,{value:`4`,label:`The fourth option`})]),_:1}),a(D,{label:`Group3`,disabled:``},{default:t(()=>[a(y,{value:`5`,label:`The fifth option`}),a(y,{value:`6`,label:`The sixth option`})]),_:1})]),_:1},8,[`modelValue`])]),_:1}),a(x,{title:`Multiple`,source:`<pf-form-select v-model="multipleValues" multiple aria-label="Colors">
  <pf-form-select-option value="white" label="White" />
  <pf-form-select-option value="black" label="Black" />
  <pf-form-select-option value="red" label="Red" />
  <pf-form-select-option value="green" label="Green" />
  <pf-form-select-option value="blue" label="Blue" />
  <pf-form-select-option value="yellow" label="Yellow" />
  <pf-form-select-option value="purple" label="Purple" disabled />
</pf-form-select>
<p>Values: {{ JSON.stringify(multipleValues) }}</p>`},{intro:t(()=>[...o[5]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`With the `),r(`code`,null,`multiple`),l(` prop the form select renders a native multiple select, and its `),r(`code`,null,`v-model`),l(` is the array of the selected values.`)])],-1)]]),default:t(()=>[a(b,{modelValue:p.value,"onUpdate:modelValue":o[3]||=e=>p.value=e,multiple:``,"aria-label":`Colors`},{default:t(()=>[a(y,{value:`white`,label:`White`}),a(y,{value:`black`,label:`Black`}),a(y,{value:`red`,label:`Red`}),a(y,{value:`green`,label:`Green`}),a(y,{value:`blue`,label:`Blue`}),a(y,{value:`yellow`,label:`Yellow`}),a(y,{value:`purple`,label:`Purple`,disabled:``})]),_:1},8,[`modelValue`]),r(`p`,null,`Values: `+n(JSON.stringify(p.value)),1)]),_:1})]),_:1})}}});export{u as default};