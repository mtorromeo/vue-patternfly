import{F as e,K as t,Pt as n,U as r,c as i,d as ee,g as a,h as o,it as s,j as c,l,m as u,n as te,p as ne,pt as d,rt as f,u as p}from"./runtime-core.esm-bundler-DO1530YC.js";import{H as m,W as re,Y as ie,j as h}from"./index-CUsetNQE.js";var g=re({name:`TrashIcon`,height:512,width:448,svgPathData:`M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z`,yOffset:0,xOffset:0}),_=a({__name:`Form.story`,setup(a){let[re,_]=h(),v=s(``),y=s(``),b=s(``),x=s(``),S=s(``),C=s(`select one`),w=s(``),ae=s(``),oe=s(``),se=s(``),T=s(`Five`),E=s(`error`);function ce(e){let t=String(e??``);T.value=t,t===``?E.value=`default`:/^\d+$/.test(t)?E.value=`success`:E.value=`error`}let D=s(`Five`),O=s(`default`),k=s(`Enter your age to continue`);function le(e){D.value=String(e??``),O.value=`default`,k.value=`Validating...`}r(D,(e,t,n)=>{let r=setTimeout(()=>{/^\d+$/.test(e)?parseInt(e)>=21?(O.value=`success`,k.value=`Enjoy your stay`):(O.value=`warning`,k.value=`You must be at least 21 years old to continue`):(O.value=`error`,k.value=`Must be a number`)},2e3);n(()=>clearTimeout(r))},{immediate:!0});let ue=s(``),de=s(``),fe=s(``),pe=s(``),me=s(``),he=s(``),A=f({}),j=f({group1:!0,nested1:!0,group3:!0}),M=s(!1),N=s(``),P=s(``);function ge(e){window.alert(e)}return(r,a)=>{let s=e(`pf-form-group-label-help`),f=e(`pf-popover`),h=e(`component-info`),F=e(`pf-text-input`),I=e(`pf-helper-text-item`),L=e(`pf-helper-text`),R=e(`pf-form-helper-text`),z=e(`pf-form-group`),B=e(`pf-checkbox`),V=e(`pf-radio`),H=e(`pf-button`),U=e(`pf-action-list-item`),W=e(`pf-action-list-group`),G=e(`pf-action-list`),K=e(`pf-form`),q=e(`story-canvas`),J=e(`pf-form-select-option`),_e=e(`pf-form-select`),Y=e(`pf-textarea`),ve=e(`pf-alert`),ye=e(`pf-form-alert`),X=e(`pf-form-section`),be=e(`pf-grid-item`),xe=e(`pf-grid`),Z=e(`pf-form-field-group-header`),Q=e(`pf-form-field-group`),$=e(`pf-select-option`),Se=e(`pf-select`),Ce=e(`pf-divider`),we=e(`pf-form-context-provider`),Te=e(`doc-page`);return c(),ee(te,null,[o(d(re),null,{default:t(()=>[o(f,null,{header:t(()=>[...a[44]||=[i(`div`,null,[u(` The `),i(`a`,{href:`https://schema.org/name`,target:`_blank`,rel:`noreferrer`},`name`),u(` of a `),i(`a`,{href:`https://schema.org/Person`,target:`_blank`,rel:`noreferrer`},`Person`)],-1)]]),body:t(()=>[...a[45]||=[i(`div`,null,[u(` Often composed of `),i(`a`,{href:`https://schema.org/givenName`,target:`_blank`,rel:`noreferrer`},`givenName`),u(` and `),i(`a`,{href:`https://schema.org/familyName`,target:`_blank`,rel:`noreferrer`},`familyName`),u(`. `)],-1)]]),default:t(()=>[o(s,{"aria-label":`More info for name field`})]),_:1})]),_:1}),o(Te,{name:`Components/Form.story.vue`,title:`Form`},{description:t(()=>[...a[46]||=[u(`A `,-1),i(`b`,null,`form`,-1),u(` is a group of elements used to collect information from a user in a variety of contexts including in a modal, in a wizard, or on a page. Use cases for forms include tasks reliant on user-inputted information for completion like logging in, registering, configuring settings, or completing surveys.`,-1)]]),apidocs:t(()=>[o(h,{name:`PfActionGroup`,doc:{name:`PfActionGroup`,description:``,tags:{deprecated:[{description:`use PfActionList, PfActionListGroup and PfActionListItem in a PfFormGroup with actionGroup instead.`,title:`deprecated`}]},exportName:`PfActionGroup`,displayName:`ActionGroup`,props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Form/ActionGroup.vue`]}}),o(h,{name:`PfForm`,doc:{name:`PfForm`,exportName:`PfForm`,displayName:`Form`,description:``,tags:{},expose:[{name:`elements`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`component`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Component`}]},defaultValue:{func:!1,value:`'form'`}},{name:`horizontal`,description:`Sets the Form to horizontal.`,required:!1,type:{name:`boolean`}},{name:`widthLimited`,description:`Limits the max-width of the form.`,required:!1,type:{name:`boolean`}},{name:`maxWidth`,description:`Sets a custom max-width for the form.`,required:!1,type:{name:`string`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Form/Form.vue`]}}),o(h,{name:`PfFormGroup`,doc:{name:`PfFormGroup`,exportName:`PfFormGroup`,displayName:`FormGroup`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`fieldset`,required:!1,type:{name:`boolean`}},{name:`label`,description:`Label text before the field.`,required:!1,type:{name:`string`}},{name:`labelInfo`,description:`Additional label information displayed after the label.`,required:!1,type:{name:`string`}},{name:`required`,description:`Sets the FormGroup required.`,required:!1,type:{name:`boolean`}},{name:`validated`,description:`Sets the FormGroup validated. If you set to success, text color of helper text will be modified to indicate valid state.
If set to error, text color of helper text will be modified to indicate error state.
If set to warning, text color of helper text will be modified to indicate warning state.`,required:!1,type:{name:`InputValidateState`}},{name:`inline`,required:!1,type:{name:`boolean`}},{name:`stack`,description:`Sets the FormGroupControl to be stacked`,required:!1,type:{name:`boolean`}},{name:`noPaddingTop`,description:`Removes top spacer from label.`,required:!1,type:{name:`boolean`}},{name:`actionGroup`,description:`Sets the FormGroup action modifier. Used to contain form action buttons.`,required:!1,type:{name:`boolean`}},{name:`helperText`,description:`Helper text regarding the field.`,required:!1,type:{name:`string`}},{name:`helperTextVariant`,description:`Helper text variant.`,required:!1,type:{name:`TSIndexedAccessType`},defaultValue:{func:!1,value:`'default'`}},{name:`helperTextBeforeField`,description:`Flag to position the helper text before the field. False by default`,required:!1,type:{name:`boolean`}},{name:`helperTextInvalid`,description:`Helper text after the field when the field is invalid.`,required:!1,type:{name:`string`}},{name:`fieldId`,description:`ID of an individual field or a group of multiple fields. Generated when not set.
With a label, the label is linked to the first field set up in the group that has no label of its own:
that field gets this id unless it has its own. When it is unmounted, the next eligible field gets linked.`,required:!1,type:{name:`string`}},{name:`role`,description:`Sets the role of the form group. Pass in "radiogroup" when the form group contains multiple
radio inputs, or pass in "group" when the form group contains multiple of any other input type.`,required:!1,type:{name:`string`}}],events:[],slots:[{name:`label`},{name:`label-help`},{name:`label-info`},{name:`default`},{name:`helper-text-invalid`},{name:`helper-text`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Form/FormGroup.vue`]}}),o(h,{name:`PfFormGroupLabelHelp`,doc:{name:`PfFormGroupLabelHelp`,description:"A help button for the `label-help` slot of pf-form-group. It should be wrapped or linked to a pf-popover.",tags:{},exportName:`PfFormGroupLabelHelp`,displayName:`FormGroupLabelHelp`,props:[],events:[],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Form/FormGroupLabelHelp.vue`]}}),o(h,{name:`PfFormSection`,doc:{name:`PfFormSection`,exportName:`PfFormSection`,displayName:`FormSection`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`title`,description:`Title for the section`,required:!1,type:{name:`string`}},{name:`titleElement`,description:`Element to wrap the section title`,required:!1,type:{name:`union`,elements:[{name:`"div"`},{name:`"h1"`},{name:`"h2"`},{name:`"h3"`},{name:`"h4"`},{name:`"h5"`},{name:`"h6"`}]},defaultValue:{func:!1,value:`'div'`}}],events:[],slots:[{name:`title`,description:`Title for the section, overrides the title prop`},{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Form/FormSection.vue`]}}),o(h,{name:`PfFormHelperText`,doc:{name:`PfFormHelperText`,exportName:`PfFormHelperText`,displayName:`FormHelperText`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Form/FormHelperText.vue`]}}),o(h,{name:`PfFormFieldGroup`,doc:{name:`PfFormFieldGroup`,exportName:`PfFormFieldGroup`,displayName:`FormFieldGroup`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`fieldset`,description:`Renders the group as a fieldset`,required:!1,type:{name:`boolean`}},{name:`expandable`,description:`Flag indicating if the field group is expandable`,required:!1,type:{name:`boolean`}},{name:`toggleAriaLabel`,description:`Aria-label to use on the form field group toggle button`,required:!1,type:{name:`string`}},{name:`animations`,description:`Flag indicating whether an expandable form field group has animations. This will always render nested field group content rather than dynamically rendering it.`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`header`,description:`Form field group header, typically a pf-form-field-group-header`},{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Form/FormFieldGroup.vue`]}}),o(h,{name:`PfFormFieldGroupHeader`,doc:{name:`PfFormFieldGroupHeader`,exportName:`PfFormFieldGroupHeader`,displayName:`FormFieldGroupHeader`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`title`,description:`Header title text`,required:!1,type:{name:`string`}},{name:`titleId`,description:`Id of the title, which labels the field group. Generated when not set.`,required:!1,type:{name:`string`}},{name:`description`,description:`Header title description`,required:!1,type:{name:`string`}}],events:[],slots:[{name:`title`,description:`Header title, overrides the title prop`},{name:`description`,description:`Header title description, overrides the description prop`},{name:`actions`,description:`Field group header actions`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Form/FormFieldGroupHeader.vue`]}}),o(h,{name:`PfFormAlert`,doc:{name:`PfFormAlert`,exportName:`PfFormAlert`,displayName:`FormAlert`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Form/FormAlert.vue`]}}),o(h,{name:`PfFormContextProvider`,doc:{name:`PfFormContextProvider`,description:"Provides the form state to its descendants, read with `useFormContext()` or the default slot props.",tags:{},exportName:`PfFormContextProvider`,displayName:`FormContextProvider`,props:[{name:`initialValues`,description:`Record of initial values`,required:!1,type:{name:`Record`,elements:[{name:`string`},{name:`string`}]}}],events:[],slots:[{name:`default`,scoped:!0,bindings:[]}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Form/FormContextProvider.vue`]}})]),default:t(()=>[a[71]||=i(`div`,{class:`markdown pf-v6-c-content`},[i(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),i(`ul`,null,[i(`li`,null,[u(`The `),i(`code`,null,`novalidate`),u(` attribute is not implicitly applied to the form but you can still add it yourself. This makes `),i(`code`,null,`pf-form`),u(` usable with the native form validation technique.`)]),i(`li`,null,[u(`Allowed overriding the `),i(`code`,null,`component`),u(` used by the form. A typical use-case is when you have a parent form tag already present and you only need `),i(`code`,null,`pf-form`),u(` to apply the patternfly layout to its children.`)]),i(`li`,null,[i(`code`,null,`pf-form-group`),u(` embeds a `),i(`code`,null,`pf-form-helper-text`),u(`: use the `),i(`code`,null,`helper-text`),u(` and `),i(`code`,null,`helper-text-invalid`),u(` props or the slots with the same name. The invalid text is shown when the group is validated as `),i(`code`,null,`error`),u(`, which is derived from the inputs it contains unless the `),i(`code`,null,`validated`),u(` prop is set.`)]),i(`li`,null,[u(`The `),i(`code`,null,`labelHelp`),u(` prop of `),i(`code`,null,`pf-form-group`),u(` is replaced by the `),i(`code`,null,`label-help`),u(` slot, and the `),i(`code`,null,`label`),u(` and `),i(`code`,null,`labelInfo`),u(` props have slots with the same name.`)]),i(`li`,null,[i(`code`,null,`pf-form-group`),u(` and `),i(`code`,null,`pf-form-field-group`),u(` can be rendered as a `),i(`code`,null,`fieldset`),u(` with the `),i(`code`,null,`fieldset`),u(` prop.`)]),i(`li`,null,[i(`code`,null,`FormFieldGroupExpandable`),u(` is replaced by `),i(`code`,null,`pf-form-field-group`),u(` with the `),i(`code`,null,`expandable`),u(` prop, or with `),i(`code`,null,`v-model:expanded`),u(`; `),i(`code`,null,`hasAnimations`),u(` is replaced by `),i(`code`,null,`animations`),u(`.`)]),i(`li`,null,[u(`The `),i(`code`,null,`header`),u(` prop of `),i(`code`,null,`pf-form-field-group`),u(` is replaced by the `),i(`code`,null,`header`),u(` slot. The `),i(`code`,null,`titleText`),u(`, `),i(`code`,null,`titleDescription`),u(` and `),i(`code`,null,`actions`),u(` props of `),i(`code`,null,`pf-form-field-group-header`),u(` are replaced by the `),i(`code`,null,`title`),u(` (with `),i(`code`,null,`title-id`),u(`) and `),i(`code`,null,`description`),u(` props or slots and the `),i(`code`,null,`actions`),u(` slot: the title id is generated when not set, and labels the group and its toggle.`)]),i(`li`,null,[u(`The `),i(`code`,null,`title`),u(` of `),i(`code`,null,`pf-form-section`),u(` can also be passed as a slot.`)]),i(`li`,null,[i(`code`,null,`FormContextProvider`),u(` is `),i(`code`,null,`pf-form-context-provider`),u(`, whose default slot receives the form context; `),i(`code`,null,`useFormContext()`),u(` reads it from a descendant component. `),i(`code`,null,`FormContextConsumer`),u(` is not needed. See `),i(`a`,{href:`#/`},`common differences from patternfly-react`),u(`.`)])]),i(`h2`,{class:`pf-v6-c-title`},`Examples`),i(`p`,null,[u(`When using helper text inside a `),i(`code`,null,`pf-form-group`),u(`, the `),i(`code`,null,`pf-helper-text`),u(` component should be wrapped with the `),i(`code`,null,`pf-form-helper-text`),u(` component to provide additional spacing.`)])],-1),o(q,{title:`Basic`,source:`<pf-form>
  <pf-form-group label="Full name" required field-id="simple-form-name-01">
    <template #label-help>
      <name-help />
    </template>
    <pf-text-input
      id="simple-form-name-01"
      v-model="basicName"
      required
      type="text"
      name="simple-form-name-01"
      aria-describedby="simple-form-name-01-helper" />
    <pf-form-helper-text>
      <pf-helper-text>
        <pf-helper-text-item>Include your middle name if you have one.</pf-helper-text-item>
      </pf-helper-text>
    </pf-form-helper-text>
  </pf-form-group>
  <pf-form-group label="Email" required field-id="simple-form-email-01">
    <pf-text-input
      id="simple-form-email-01"
      v-model="basicEmail"
      required
      type="email"
      name="simple-form-email-01" />
  </pf-form-group>
  <pf-form-group label="Phone number" required field-id="simple-form-phone-01">
    <pf-text-input
      id="simple-form-phone-01"
      v-model="basicPhone"
      required
      type="tel"
      name="simple-form-phone-01"
      placeholder="555-555-5555" />
  </pf-form-group>
  <pf-form-group role="group" inline field-id="basic-form-checkbox-group" label="How can we contact you?">
    <pf-checkbox id="inlinecheck01" label="Email" aria-label="Email" />
    <pf-checkbox id="inlinecheck02" label="Phone" aria-label="Phone" />
    <pf-checkbox id="inlinecheck03" label="Mail" aria-label="Mail" />
  </pf-form-group>
  <pf-form-group role="radiogroup" inline field-id="basic-form-radio-group" label="Time zone">
    <pf-radio id="basic-inline-radio-01" name="basic-inline-radio" label="Eastern" />
    <pf-radio id="basic-inline-radio-02" name="basic-inline-radio" label="Central" />
    <pf-radio id="basic-inline-radio-03" name="basic-inline-radio" label="Pacific" />
  </pf-form-group>
  <pf-form-group label="Additional note" field-id="simple-form-note-01">
    <pf-text-input
      id="simple-form-note-01"
      disabled
      type="text"
      name="simple-form-number"
      model-value="disabled" />
  </pf-form-group>
  <pf-form-group field-id="checkbox01">
    <pf-checkbox
      id="checkbox01"
      label="I'd like updates via email."
      name="checkbox01"
      aria-label="Update via email" />
  </pf-form-group>
  <pf-form-group action-group>
    <pf-action-list>
      <pf-action-list-group>
        <pf-action-list-item>
          <pf-button variant="primary">Submit</pf-button>
        </pf-action-list-item>
        <pf-action-list-item>
          <pf-button variant="link">Cancel</pf-button>
        </pf-action-list-item>
      </pf-action-list-group>
    </pf-action-list>
  </pf-form-group>
</pf-form>`},{default:t(()=>[o(K,null,{default:t(()=>[o(z,{label:`Full name`,required:``,"field-id":`simple-form-name-01`},{"label-help":t(()=>[o(d(_))]),default:t(()=>[o(F,{id:`simple-form-name-01`,modelValue:v.value,"onUpdate:modelValue":a[0]||=e=>v.value=e,required:``,type:`text`,name:`simple-form-name-01`,"aria-describedby":`simple-form-name-01-helper`},null,8,[`modelValue`]),o(R,null,{default:t(()=>[o(L,null,{default:t(()=>[o(I,null,{default:t(()=>[...a[47]||=[u(`Include your middle name if you have one.`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),o(z,{label:`Email`,required:``,"field-id":`simple-form-email-01`},{default:t(()=>[o(F,{id:`simple-form-email-01`,modelValue:y.value,"onUpdate:modelValue":a[1]||=e=>y.value=e,required:``,type:`email`,name:`simple-form-email-01`},null,8,[`modelValue`])]),_:1}),o(z,{label:`Phone number`,required:``,"field-id":`simple-form-phone-01`},{default:t(()=>[o(F,{id:`simple-form-phone-01`,modelValue:b.value,"onUpdate:modelValue":a[2]||=e=>b.value=e,required:``,type:`tel`,name:`simple-form-phone-01`,placeholder:`555-555-5555`},null,8,[`modelValue`])]),_:1}),o(z,{role:`group`,inline:``,"field-id":`basic-form-checkbox-group`,label:`How can we contact you?`},{default:t(()=>[o(B,{id:`inlinecheck01`,label:`Email`,"aria-label":`Email`}),o(B,{id:`inlinecheck02`,label:`Phone`,"aria-label":`Phone`}),o(B,{id:`inlinecheck03`,label:`Mail`,"aria-label":`Mail`})]),_:1}),o(z,{role:`radiogroup`,inline:``,"field-id":`basic-form-radio-group`,label:`Time zone`},{default:t(()=>[o(V,{id:`basic-inline-radio-01`,name:`basic-inline-radio`,label:`Eastern`}),o(V,{id:`basic-inline-radio-02`,name:`basic-inline-radio`,label:`Central`}),o(V,{id:`basic-inline-radio-03`,name:`basic-inline-radio`,label:`Pacific`})]),_:1}),o(z,{label:`Additional note`,"field-id":`simple-form-note-01`},{default:t(()=>[o(F,{id:`simple-form-note-01`,disabled:``,type:`text`,name:`simple-form-number`,"model-value":`disabled`})]),_:1}),o(z,{"field-id":`checkbox01`},{default:t(()=>[o(B,{id:`checkbox01`,label:`I'd like updates via email.`,name:`checkbox01`,"aria-label":`Update via email`})]),_:1}),o(z,{"action-group":``},{default:t(()=>[o(G,null,{default:t(()=>[o(W,null,{default:t(()=>[o(U,null,{default:t(()=>[o(H,{variant:`primary`},{default:t(()=>[...a[48]||=[u(`Submit`,-1)]]),_:1})]),_:1}),o(U,null,{default:t(()=>[o(H,{variant:`link`},{default:t(()=>[...a[49]||=[u(`Cancel`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(q,{title:`Horizontal`,source:`<pf-form horizontal>
  <pf-form-group label="Full name" required field-id="horizontal-form-name">
    <pf-text-input
      id="horizontal-form-name"
      v-model="horizontalName"
      required
      type="text"
      aria-describedby="horizontal-form-name-helper"
      name="horizontal-form-name" />
    <pf-form-helper-text>
      <pf-helper-text>
        <pf-helper-text-item>Include your middle name if you have one.</pf-helper-text-item>
      </pf-helper-text>
    </pf-form-helper-text>
  </pf-form-group>
  <pf-form-group label="Email" required field-id="horizontal-form-email">
    <pf-text-input
      id="horizontal-form-email"
      v-model="horizontalEmail"
      required
      type="email"
      name="horizontal-form-email" />
  </pf-form-group>
  <pf-form-group label="Your title" field-id="horizontal-form-title">
    <pf-form-select
      id="horizontal-form-title"
      v-model="horizontalTitle"
      name="horizontal-form-title"
      aria-label="Your title"
    >
      <pf-form-select-option value="select one" label="Select one" />
      <pf-form-select-option value="mr" label="Mr" />
      <pf-form-select-option value="miss" label="Miss" />
      <pf-form-select-option value="mrs" label="Mrs" />
      <pf-form-select-option value="ms" label="Ms" />
      <pf-form-select-option value="dr" label="Dr" />
      <pf-form-select-option value="other" label="Other" />
    </pf-form-select>
  </pf-form-group>
  <pf-form-group label="Your experience" field-id="horizontal-form-exp">
    <pf-textarea id="horizontal-form-exp" v-model="horizontalExperience" name="horizontal-form-exp" />
  </pf-form-group>
  <pf-form-group
    label="How can we contact you?"
    stack
    field-id="horizontal-form-checkbox-group"
    no-padding-top
    role="group"
  >
    <pf-checkbox id="alt-form-checkbox-1" label="Email" name="alt-form-checkbox-1" />
    <pf-checkbox id="alt-form-checkbox-2" label="Phone" name="alt-form-checkbox-2" />
    <pf-checkbox id="alt-form-checkbox-3" label="Mail" name="alt-form-checkbox-3" />
  </pf-form-group>
  <pf-form-group role="radiogroup" stack field-id="horizontal-form-radio-group" no-padding-top label="Time zone">
    <pf-radio id="horizontal-inline-radio-01" name="horizontal-inline-radio" label="Eastern" />
    <pf-radio id="horizontal-inline-radio-02" name="horizontal-inline-radio" label="Central" />
    <pf-radio id="horizontal-inline-radio-03" name="horizontal-inline-radio" label="Pacific" />
  </pf-form-group>
  <pf-form-group action-group>
    <pf-action-list>
      <pf-action-list-group>
        <pf-action-list-item>
          <pf-button variant="primary">Submit</pf-button>
        </pf-action-list-item>
        <pf-action-list-item>
          <pf-button variant="link">Cancel</pf-button>
        </pf-action-list-item>
      </pf-action-list-group>
    </pf-action-list>
  </pf-form-group>
</pf-form>`},{default:t(()=>[o(K,{horizontal:``},{default:t(()=>[o(z,{label:`Full name`,required:``,"field-id":`horizontal-form-name`},{default:t(()=>[o(F,{id:`horizontal-form-name`,modelValue:x.value,"onUpdate:modelValue":a[3]||=e=>x.value=e,required:``,type:`text`,"aria-describedby":`horizontal-form-name-helper`,name:`horizontal-form-name`},null,8,[`modelValue`]),o(R,null,{default:t(()=>[o(L,null,{default:t(()=>[o(I,null,{default:t(()=>[...a[50]||=[u(`Include your middle name if you have one.`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),o(z,{label:`Email`,required:``,"field-id":`horizontal-form-email`},{default:t(()=>[o(F,{id:`horizontal-form-email`,modelValue:S.value,"onUpdate:modelValue":a[4]||=e=>S.value=e,required:``,type:`email`,name:`horizontal-form-email`},null,8,[`modelValue`])]),_:1}),o(z,{label:`Your title`,"field-id":`horizontal-form-title`},{default:t(()=>[o(_e,{id:`horizontal-form-title`,modelValue:C.value,"onUpdate:modelValue":a[5]||=e=>C.value=e,name:`horizontal-form-title`,"aria-label":`Your title`},{default:t(()=>[o(J,{value:`select one`,label:`Select one`}),o(J,{value:`mr`,label:`Mr`}),o(J,{value:`miss`,label:`Miss`}),o(J,{value:`mrs`,label:`Mrs`}),o(J,{value:`ms`,label:`Ms`}),o(J,{value:`dr`,label:`Dr`}),o(J,{value:`other`,label:`Other`})]),_:1},8,[`modelValue`])]),_:1}),o(z,{label:`Your experience`,"field-id":`horizontal-form-exp`},{default:t(()=>[o(Y,{id:`horizontal-form-exp`,modelValue:w.value,"onUpdate:modelValue":a[6]||=e=>w.value=e,name:`horizontal-form-exp`},null,8,[`modelValue`])]),_:1}),o(z,{label:`How can we contact you?`,stack:``,"field-id":`horizontal-form-checkbox-group`,"no-padding-top":``,role:`group`},{default:t(()=>[o(B,{id:`alt-form-checkbox-1`,label:`Email`,name:`alt-form-checkbox-1`}),o(B,{id:`alt-form-checkbox-2`,label:`Phone`,name:`alt-form-checkbox-2`}),o(B,{id:`alt-form-checkbox-3`,label:`Mail`,name:`alt-form-checkbox-3`})]),_:1}),o(z,{role:`radiogroup`,stack:``,"field-id":`horizontal-form-radio-group`,"no-padding-top":``,label:`Time zone`},{default:t(()=>[o(V,{id:`horizontal-inline-radio-01`,name:`horizontal-inline-radio`,label:`Eastern`}),o(V,{id:`horizontal-inline-radio-02`,name:`horizontal-inline-radio`,label:`Central`}),o(V,{id:`horizontal-inline-radio-03`,name:`horizontal-inline-radio`,label:`Pacific`})]),_:1}),o(z,{"action-group":``},{default:t(()=>[o(G,null,{default:t(()=>[o(W,null,{default:t(()=>[o(U,null,{default:t(()=>[o(H,{variant:`primary`},{default:t(()=>[...a[51]||=[u(`Submit`,-1)]]),_:1})]),_:1}),o(U,null,{default:t(()=>[o(H,{variant:`link`},{default:t(()=>[...a[52]||=[u(`Cancel`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(q,{title:`Limit width`,source:`<pf-form width-limited>
  <pf-form-group label="Full name" required field-id="simple-form-name-02">
    <template #label-help>
      <name-help />
    </template>
    <pf-text-input
      id="simple-form-name-02"
      v-model="limitName"
      required
      type="text"
      name="simple-form-name-02"
      aria-describedby="simple-form-name-02-helper" />
    <pf-form-helper-text>
      <pf-helper-text>
        <pf-helper-text-item>Include your middle name if you have one.</pf-helper-text-item>
      </pf-helper-text>
    </pf-form-helper-text>
  </pf-form-group>
  <pf-form-group label="Email" required field-id="simple-form-email-02">
    <pf-text-input
      id="simple-form-email-02"
      v-model="limitEmail"
      required
      type="email"
      name="simple-form-email-02" />
  </pf-form-group>
  <pf-form-group label="Phone number" required field-id="simple-form-number">
    <pf-text-input
      id="simple-form-number"
      v-model="limitPhone"
      required
      type="tel"
      placeholder="555-555-5555"
      name="simple-form-number" />
  </pf-form-group>
  <pf-form-group role="group" inline field-id="limit-width-form-checkbox-group" label="How can we contact you?">
    <pf-checkbox id="inlinecheck04" label="Email" aria-label="Email" />
    <pf-checkbox id="inlinecheck05" label="Phone" aria-label="Phone" />
    <pf-checkbox id="inlinecheck06" label="Mail" aria-label="Mail" />
  </pf-form-group>
  <pf-form-group role="radiogroup" inline field-id="limit-width-form-radio-group" label="Time zone">
    <pf-radio id="limit-width-inline-radio-01" name="limit-width-radio" label="Eastern" />
    <pf-radio id="limit-width-inline-radio-02" name="limit-width-radio" label="Central" />
    <pf-radio id="limit-width-inline-radio-03" name="limit-width-radio" label="Pacific" />
  </pf-form-group>
  <pf-form-group label="Additional note" field-id="simple-form-note-02">
    <pf-text-input
      id="simple-form-note-02"
      disabled
      type="text"
      name="simple-form-number"
      model-value="disabled" />
  </pf-form-group>
  <pf-form-group field-id="checkbox02">
    <pf-checkbox
      id="checkbox02"
      label="I'd like updates via email."
      name="checkbox02"
      aria-label="Update via email" />
  </pf-form-group>
  <pf-form-group action-group>
    <pf-action-list>
      <pf-action-list-group>
        <pf-action-list-item>
          <pf-button variant="primary">Submit</pf-button>
        </pf-action-list-item>
        <pf-action-list-item>
          <pf-button variant="link">Cancel</pf-button>
        </pf-action-list-item>
      </pf-action-list-group>
    </pf-action-list>
  </pf-form-group>
</pf-form>`},{default:t(()=>[o(K,{"width-limited":``},{default:t(()=>[o(z,{label:`Full name`,required:``,"field-id":`simple-form-name-02`},{"label-help":t(()=>[o(d(_))]),default:t(()=>[o(F,{id:`simple-form-name-02`,modelValue:ae.value,"onUpdate:modelValue":a[7]||=e=>ae.value=e,required:``,type:`text`,name:`simple-form-name-02`,"aria-describedby":`simple-form-name-02-helper`},null,8,[`modelValue`]),o(R,null,{default:t(()=>[o(L,null,{default:t(()=>[o(I,null,{default:t(()=>[...a[53]||=[u(`Include your middle name if you have one.`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),o(z,{label:`Email`,required:``,"field-id":`simple-form-email-02`},{default:t(()=>[o(F,{id:`simple-form-email-02`,modelValue:oe.value,"onUpdate:modelValue":a[8]||=e=>oe.value=e,required:``,type:`email`,name:`simple-form-email-02`},null,8,[`modelValue`])]),_:1}),o(z,{label:`Phone number`,required:``,"field-id":`simple-form-number`},{default:t(()=>[o(F,{id:`simple-form-number`,modelValue:se.value,"onUpdate:modelValue":a[9]||=e=>se.value=e,required:``,type:`tel`,placeholder:`555-555-5555`,name:`simple-form-number`},null,8,[`modelValue`])]),_:1}),o(z,{role:`group`,inline:``,"field-id":`limit-width-form-checkbox-group`,label:`How can we contact you?`},{default:t(()=>[o(B,{id:`inlinecheck04`,label:`Email`,"aria-label":`Email`}),o(B,{id:`inlinecheck05`,label:`Phone`,"aria-label":`Phone`}),o(B,{id:`inlinecheck06`,label:`Mail`,"aria-label":`Mail`})]),_:1}),o(z,{role:`radiogroup`,inline:``,"field-id":`limit-width-form-radio-group`,label:`Time zone`},{default:t(()=>[o(V,{id:`limit-width-inline-radio-01`,name:`limit-width-radio`,label:`Eastern`}),o(V,{id:`limit-width-inline-radio-02`,name:`limit-width-radio`,label:`Central`}),o(V,{id:`limit-width-inline-radio-03`,name:`limit-width-radio`,label:`Pacific`})]),_:1}),o(z,{label:`Additional note`,"field-id":`simple-form-note-02`},{default:t(()=>[o(F,{id:`simple-form-note-02`,disabled:``,type:`text`,name:`simple-form-number`,"model-value":`disabled`})]),_:1}),o(z,{"field-id":`checkbox02`},{default:t(()=>[o(B,{id:`checkbox02`,label:`I'd like updates via email.`,name:`checkbox02`,"aria-label":`Update via email`})]),_:1}),o(z,{"action-group":``},{default:t(()=>[o(G,null,{default:t(()=>[o(W,null,{default:t(()=>[o(U,null,{default:t(()=>[o(H,{variant:`primary`},{default:t(()=>[...a[54]||=[u(`Submit`,-1)]]),_:1})]),_:1}),o(U,null,{default:t(()=>[o(H,{variant:`link`},{default:t(()=>[...a[55]||=[u(`Cancel`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(q,{title:`Invalid`,source:`<pf-form>
  <pf-form-group label="Age" field-id="age-1">
    <pf-text-input
      id="age-1"
      :model-value="invalidAge"
      :validated="invalidValidated"
      aria-describedby="age-1-helper"
      @update:model-value="onInvalidAgeChange" />
    <pf-form-helper-text v-if="invalidValidated !== 'success'">
      <pf-helper-text>
        <pf-helper-text-item :variant="invalidValidated">
          <template #icon>
            <circle-exclamation-icon />
          </template>
          {{ invalidValidated === 'error' ? 'Must be a number' : 'Please enter your age' }}
        </pf-helper-text-item>
      </pf-helper-text>
    </pf-form-helper-text>
  </pf-form-group>
</pf-form>`},{default:t(()=>[o(K,null,{default:t(()=>[o(z,{label:`Age`,"field-id":`age-1`},{default:t(()=>[o(F,{id:`age-1`,"model-value":T.value,validated:E.value,"aria-describedby":`age-1-helper`,"onUpdate:modelValue":ce},null,8,[`model-value`,`validated`]),E.value===`success`?p(``,!0):(c(),l(R,{key:0},{default:t(()=>[o(L,null,{default:t(()=>[o(I,{variant:E.value},{icon:t(()=>[o(d(m))]),default:t(()=>[u(` `+n(E.value===`error`?`Must be a number`:`Please enter your age`),1)]),_:1},8,[`variant`])]),_:1})]),_:1}))]),_:1})]),_:1})]),_:1}),o(q,{title:`Invalid with form alert`,source:`<pf-form>
  <pf-form-alert v-if="invalidValidated === 'error'">
    <pf-alert
      variant="danger"
      title="Fill out all required fields before continuing."
      aria-live="polite"
      inline />
  </pf-form-alert>
  <pf-form-group label="Age" field-id="age-2">
    <pf-text-input
      id="age-2"
      :model-value="invalidAge"
      :validated="invalidValidated"
      aria-describedby="age-2-helper"
      @update:model-value="onInvalidAgeChange" />
    <pf-form-helper-text v-if="invalidValidated !== 'success'">
      <pf-helper-text>
        <pf-helper-text-item :variant="invalidValidated">
          <template #icon>
            <circle-exclamation-icon />
          </template>
          {{ invalidValidated === 'error' ? 'Must be a number' : 'Please enter your age' }}
        </pf-helper-text-item>
      </pf-helper-text>
    </pf-form-helper-text>
  </pf-form-group>
</pf-form>`},{default:t(()=>[o(K,null,{default:t(()=>[E.value===`error`?(c(),l(ye,{key:0},{default:t(()=>[o(ve,{variant:`danger`,title:`Fill out all required fields before continuing.`,"aria-live":`polite`,inline:``})]),_:1})):p(``,!0),o(z,{label:`Age`,"field-id":`age-2`},{default:t(()=>[o(F,{id:`age-2`,"model-value":T.value,validated:E.value,"aria-describedby":`age-2-helper`,"onUpdate:modelValue":ce},null,8,[`model-value`,`validated`]),E.value===`success`?p(``,!0):(c(),l(R,{key:0},{default:t(()=>[o(L,null,{default:t(()=>[o(I,{variant:E.value},{icon:t(()=>[o(d(m))]),default:t(()=>[u(` `+n(E.value===`error`?`Must be a number`:`Please enter your age`),1)]),_:1},8,[`variant`])]),_:1})]),_:1}))]),_:1})]),_:1})]),_:1}),o(q,{title:`Validated`,source:`<pf-form>
  <pf-form-group label="Age" field-id="age-3">
    <pf-text-input
      id="age-3"
      :model-value="validatedAge"
      :validated="validatedState"
      aria-describedby="age-3-helper"
      @update:model-value="onValidatedAgeChange" />
    <pf-form-helper-text>
      <pf-helper-text>
        <pf-helper-text-item :variant="validatedState">
          <template v-if="validatedState === 'error'" #icon>
            <circle-exclamation-icon />
          </template>
          {{ validatedHelperText }}
        </pf-helper-text-item>
      </pf-helper-text>
    </pf-form-helper-text>
  </pf-form-group>
</pf-form>`},{default:t(()=>[o(K,null,{default:t(()=>[o(z,{label:`Age`,"field-id":`age-3`},{default:t(()=>[o(F,{id:`age-3`,"model-value":D.value,validated:O.value,"aria-describedby":`age-3-helper`,"onUpdate:modelValue":le},null,8,[`model-value`,`validated`]),o(R,null,{default:t(()=>[o(L,null,{default:t(()=>[o(I,{variant:O.value},ne({default:t(()=>[u(` `+n(k.value),1)]),_:2},[O.value===`error`?{name:`icon`,fn:t(()=>[o(d(m))]),key:`0`}:void 0]),1032,[`variant`])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(q,{title:`Horizontal stacked no padding top`,source:`<pf-form horizontal>
  <pf-form-group role="group" label="Label" no-padding-top field-id="horizontal-form-stacked-options" stack>
    <pf-checkbox id="option-01" label="option 1" />
    <pf-checkbox id="option-02" label="option 2" />
  </pf-form-group>
</pf-form>`},{default:t(()=>[o(K,{horizontal:``},{default:t(()=>[o(z,{role:`group`,label:`Label`,"no-padding-top":``,"field-id":`horizontal-form-stacked-options`,stack:``},{default:t(()=>[o(B,{id:`option-01`,label:`option 1`}),o(B,{id:`option-02`,label:`option 2`})]),_:1})]),_:1})]),_:1}),o(q,{title:`Horizontal stacked helper text on top`,source:`<pf-form horizontal>
  <pf-form-group label="Label" no-padding-top stack field-id="horizontal-form-helper-options" role="group">
    <pf-form-helper-text>
      <pf-helper-text>
        <pf-helper-text-item>Select all that apply:</pf-helper-text-item>
      </pf-helper-text>
    </pf-form-helper-text>
    <pf-checkbox id="option-03" label="Option 1" />
    <pf-checkbox id="option-04" label="Option 2" />
  </pf-form-group>
</pf-form>`},{default:t(()=>[o(K,{horizontal:``},{default:t(()=>[o(z,{label:`Label`,"no-padding-top":``,stack:``,"field-id":`horizontal-form-helper-options`,role:`group`},{default:t(()=>[o(R,null,{default:t(()=>[o(L,null,{default:t(()=>[o(I,null,{default:t(()=>[...a[56]||=[u(`Select all that apply:`,-1)]]),_:1})]),_:1})]),_:1}),o(B,{id:`option-03`,label:`Option 1`}),o(B,{id:`option-04`,label:`Option 2`})]),_:1})]),_:1})]),_:1}),o(q,{title:`Form group with additional label info`,source:`<pf-form>
  <pf-form-group label="Full name" label-info="Additional label info" required field-id="form-group-label-info">
    <template #label-help>
      <name-help />
    </template>
    <pf-text-input
      id="form-group-label-info"
      v-model="labelInfoName"
      required
      type="text"
      name="form-group-label-info"
      aria-describedby="form-group-label-info-helper" />
    <pf-form-helper-text>
      <pf-helper-text>
        <pf-helper-text-item>Include your middle name if you have one.</pf-helper-text-item>
      </pf-helper-text>
    </pf-form-helper-text>
  </pf-form-group>
</pf-form>`},{default:t(()=>[o(K,null,{default:t(()=>[o(z,{label:`Full name`,"label-info":`Additional label info`,required:``,"field-id":`form-group-label-info`},{"label-help":t(()=>[o(d(_))]),default:t(()=>[o(F,{id:`form-group-label-info`,modelValue:ue.value,"onUpdate:modelValue":a[10]||=e=>ue.value=e,required:``,type:`text`,name:`form-group-label-info`,"aria-describedby":`form-group-label-info-helper`},null,8,[`modelValue`]),o(R,null,{default:t(()=>[o(L,null,{default:t(()=>[o(I,null,{default:t(()=>[...a[57]||=[u(`Include your middle name if you have one.`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(q,{title:`Form Sections`,source:`<pf-form>
  <pf-form-section>
    <pf-form-group label="Form section 1 input" required field-id="simple-form-section-1-input">
      <pf-text-input
        id="simple-form-section-1-input"
        v-model="sectionInput1"
        required
        type="text"
        name="simple-form-section-1-input" />
    </pf-form-group>
  </pf-form-section>
  <pf-form-section title="Form section 2 (optional title)" title-element="h2">
    <pf-form-group label="Form section 2 input" required field-id="simple-form-section-2-input">
      <pf-text-input
        id="simple-form-section-2-input"
        v-model="sectionInput2"
        required
        type="text"
        name="simple-form-section-2-input" />
    </pf-form-group>
  </pf-form-section>
</pf-form>`},{default:t(()=>[o(K,null,{default:t(()=>[o(X,null,{default:t(()=>[o(z,{label:`Form section 1 input`,required:``,"field-id":`simple-form-section-1-input`},{default:t(()=>[o(F,{id:`simple-form-section-1-input`,modelValue:de.value,"onUpdate:modelValue":a[11]||=e=>de.value=e,required:``,type:`text`,name:`simple-form-section-1-input`},null,8,[`modelValue`])]),_:1})]),_:1}),o(X,{title:`Form section 2 (optional title)`,"title-element":`h2`},{default:t(()=>[o(z,{label:`Form section 2 input`,required:``,"field-id":`simple-form-section-2-input`},{default:t(()=>[o(F,{id:`simple-form-section-2-input`,modelValue:fe.value,"onUpdate:modelValue":a[12]||=e=>fe.value=e,required:``,type:`text`,name:`simple-form-section-2-input`},null,8,[`modelValue`])]),_:1})]),_:1})]),_:1})]),_:1}),o(q,{title:`Grid form`,source:`<pf-form>
  <pf-grid gutter md="6">
    <pf-grid-item span="12">
      <pf-form-group label="Full name" required field-id="grid-form-name-01">
        <pf-text-input
          id="grid-form-name-01"
          v-model="gridName"
          required
          type="text"
          name="grid-form-name-01"
          aria-describedby="grid-form-name-01-helper" />
        <pf-form-helper-text>
          <pf-helper-text>
            <pf-helper-text-item>Include your middle name if you have one.</pf-helper-text-item>
          </pf-helper-text>
        </pf-form-helper-text>
      </pf-form-group>
    </pf-grid-item>
    <pf-form-group label="Email" required field-id="grid-form-email-01">
      <pf-text-input
        id="grid-form-email-01"
        v-model="gridEmail"
        required
        type="email"
        name="grid-form-email-01" />
    </pf-form-group>
    <pf-form-group label="Phone number" required field-id="grid-form-number-01">
      <pf-text-input
        id="grid-form-number-01"
        v-model="gridPhone"
        required
        type="tel"
        placeholder="555-555-5555"
        name="grid-form-number-01" />
    </pf-form-group>
  </pf-grid>
</pf-form>`},{default:t(()=>[o(K,null,{default:t(()=>[o(xe,{gutter:``,md:`6`},{default:t(()=>[o(be,{span:`12`},{default:t(()=>[o(z,{label:`Full name`,required:``,"field-id":`grid-form-name-01`},{default:t(()=>[o(F,{id:`grid-form-name-01`,modelValue:pe.value,"onUpdate:modelValue":a[13]||=e=>pe.value=e,required:``,type:`text`,name:`grid-form-name-01`,"aria-describedby":`grid-form-name-01-helper`},null,8,[`modelValue`]),o(R,null,{default:t(()=>[o(L,null,{default:t(()=>[o(I,null,{default:t(()=>[...a[58]||=[u(`Include your middle name if you have one.`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(z,{label:`Email`,required:``,"field-id":`grid-form-email-01`},{default:t(()=>[o(F,{id:`grid-form-email-01`,modelValue:me.value,"onUpdate:modelValue":a[14]||=e=>me.value=e,required:``,type:`email`,name:`grid-form-email-01`},null,8,[`modelValue`])]),_:1}),o(z,{label:`Phone number`,required:``,"field-id":`grid-form-number-01`},{default:t(()=>[o(F,{id:`grid-form-number-01`,modelValue:he.value,"onUpdate:modelValue":a[15]||=e=>he.value=e,required:``,type:`tel`,placeholder:`555-555-5555`,name:`grid-form-number-01`},null,8,[`modelValue`])]),_:1})]),_:1})]),_:1})]),_:1}),o(q,{title:`Field Groups`,source:`<pf-form>
  <pf-form-group label="Label 1" required field-id="0-label1">
    <pf-text-input id="0-label1" v-model="fieldGroupValues['0-label1']" required name="0-label1" />
  </pf-form-group>
  <pf-form-group label="Label 2" required field-id="0-label2">
    <pf-text-input id="0-label2" v-model="fieldGroupValues['0-label2']" required name="0-label2" />
  </pf-form-group>
  <pf-form-field-group animations v-model:expanded="fieldGroupsExpanded.group1" toggle-aria-label="Details">
    <template #header>
      <pf-form-field-group-header
        title="Field group 1"
        title-id="field-group1-titleText-id"
        description="Field group 1 description text."
      >
        <template #actions>
          <pf-button variant="link">Delete all</pf-button>
          <pf-button variant="secondary">Add parameter</pf-button>
        </template>
      </pf-form-field-group-header>
    </template>
    <pf-form-field-group animations v-model:expanded="fieldGroupsExpanded.nested1" toggle-aria-label="Details">
      <template #header>
        <pf-form-field-group-header
          title="Nested field group 1"
          title-id="nested-field-group1-titleText-id"
          description="Nested field group 1 description text."
        >
          <template #actions>
            <pf-button variant="plain" aria-label="Remove">
              <template #icon>
                <trash-icon />
              </template>
            </pf-button>
          </template>
        </pf-form-field-group-header>
      </template>
      <pf-form-group label="Label 1" required field-id="1-expanded-group1-label1">
        <pf-text-input
          id="1-expanded-group1-label1"
          v-model="fieldGroupValues['1-expanded-group1-label1']"
          required
          name="1-expanded-group1-label1" />
      </pf-form-group>
      <pf-form-group label="Label 2" required field-id="1-expanded-group1-label2">
        <pf-text-input
          id="1-expanded-group1-label2"
          v-model="fieldGroupValues['1-expanded-group1-label2']"
          required
          name="1-expanded-group1-label2" />
      </pf-form-group>
    </pf-form-field-group>
    <pf-form-field-group animations expandable toggle-aria-label="Details">
      <template #header>
        <pf-form-field-group-header title="Nested field group 2" title-id="nested-field-group2-titleText-id">
          <template #actions>
            <pf-button variant="plain" aria-label="Remove">
              <template #icon>
                <trash-icon />
              </template>
            </pf-button>
          </template>
        </pf-form-field-group-header>
      </template>
      <pf-form-group label="Label 1" required field-id="1-expanded-group2-label1">
        <pf-text-input
          id="1-expanded-group2-label1"
          v-model="fieldGroupValues['1-expanded-group2-label1']"
          required
          name="1-expanded-group2-label1" />
      </pf-form-group>
      <pf-form-group label="Label 2" required field-id="1-expanded-group2-label2">
        <pf-text-input
          id="1-expanded-group2-label2"
          v-model="fieldGroupValues['1-expanded-group2-label2']"
          required
          name="1-expanded-group2-label2" />
      </pf-form-group>
    </pf-form-field-group>
    <pf-form-field-group animations expandable toggle-aria-label="Details">
      <template #header>
        <pf-form-field-group-header
          title="Nested field group 3"
          title-id="nested-field-group3-titleText-id"
          description="Field group 3 description text."
        >
          <template #actions>
            <pf-button variant="plain" aria-label="Remove">
              <template #icon>
                <trash-icon />
              </template>
            </pf-button>
          </template>
        </pf-form-field-group-header>
      </template>
      <pf-form-group label="Label 1" required field-id="1-expanded-group3-label1">
        <pf-text-input
          id="1-expanded-group3-label1"
          v-model="fieldGroupValues['1-expanded-group3-label1']"
          required
          name="1-expanded-group3-label1" />
      </pf-form-group>
      <pf-form-group label="Label 2" required field-id="1-expanded-group3-label2">
        <pf-text-input
          id="1-expanded-group3-label2"
          v-model="fieldGroupValues['1-expanded-group3-label2']"
          required
          name="1-expanded-group3-label2" />
      </pf-form-group>
    </pf-form-field-group>
    <pf-form-group label="Label 1" required field-id="1-group1-label1">
      <pf-text-input
        id="1-group1-label1"
        v-model="fieldGroupValues['1-group1-label1']"
        required
        name="1-group1-label1" />
    </pf-form-group>
    <pf-form-group label="Label 2" required field-id="1-group1-label2">
      <pf-text-input
        id="1-group1-label2"
        v-model="fieldGroupValues['1-group1-label2']"
        required
        name="1-group1-label2" />
    </pf-form-group>
  </pf-form-field-group>
  <pf-form-field-group animations expandable toggle-aria-label="Details">
    <template #header>
      <pf-form-field-group-header
        title="Field group 2"
        title-id="field-group2-titleText-id"
        description="Field group 2 description text."
      >
        <template #actions>
          <pf-button variant="link">Delete all</pf-button>
          <pf-button variant="secondary">Add parameter</pf-button>
        </template>
      </pf-form-field-group-header>
    </template>
    <pf-form-group label="Label 1" required field-id="2-label1">
      <pf-text-input id="2-label1" v-model="fieldGroupValues['2-label1']" required name="2-label1" />
    </pf-form-group>
    <pf-form-group label="Label 2" required field-id="2-label2">
      <pf-text-input id="2-label2" v-model="fieldGroupValues['2-label2']" required name="2-label2" />
    </pf-form-group>
  </pf-form-field-group>
  <pf-form-field-group animations v-model:expanded="fieldGroupsExpanded.group3" toggle-aria-label="Details">
    <template #header>
      <pf-form-field-group-header
        title="Field group 3"
        title-id="field-group3-titleText-id"
        description="Field group 3 description text." />
    </template>
    <pf-form-group label="Label 1" required field-id="3-label1">
      <pf-text-input id="3-label1" v-model="fieldGroupValues['3-label1']" required name="3-label1" />
    </pf-form-group>
    <pf-form-group label="Label 2" required field-id="3-label2">
      <pf-text-input id="3-label2" v-model="fieldGroupValues['3-label2']" required name="3-label2" />
    </pf-form-group>
    <pf-form-field-group>
      <template #header>
        <pf-form-field-group-header
          title="Nested field group 1 (non-expandable)"
          title-id="nested-field-group1-non-expandable-titleText-id" />
      </template>
      <pf-form-group label="Label 1" required field-id="3-nonexpand-group1-label1">
        <pf-text-input
          id="3-nonexpand-group1-label1"
          v-model="fieldGroupValues['3-nonexpand-group1-label1']"
          required
          name="3-nonexpand-group1-label1" />
      </pf-form-group>
      <pf-form-group label="Label 2" required field-id="3-nonexpand-group1-label2">
        <pf-text-input
          id="3-nonexpand-group1-label2"
          v-model="fieldGroupValues['3-nonexpand-group1-label2']"
          required
          name="3-nonexpand-group1-label2" />
      </pf-form-group>
    </pf-form-field-group>
    <pf-form-field-group>
      <template #header>
        <pf-form-field-group-header
          title="Nested field group 2 (non-expandable)"
          title-id="nested-field-group2-non-expandable-titleText-id"
          description="Field group 2 description text." />
      </template>
      <pf-form-group label="Label 1" required field-id="3-nonexpand-group2-label1">
        <pf-text-input
          id="3-nonexpand-group2-label1"
          v-model="fieldGroupValues['3-nonexpand-group2-label1']"
          required
          name="3-nonexpand-group2-label1" />
      </pf-form-group>
      <pf-form-group label="Label 2" required field-id="3-nonexpand-group2-label2">
        <pf-text-input
          id="3-nonexpand-group2-label2"
          v-model="fieldGroupValues['3-nonexpand-group2-label2']"
          required
          name="3-nonexpand-group2-label2" />
      </pf-form-group>
    </pf-form-field-group>
  </pf-form-field-group>
  <pf-form-field-group>
    <template #header>
      <pf-form-field-group-header
        title="Field group 4 (non-expandable)"
        title-id="field-group4-non-expandable-titleText-id"
        description="Field group 4 description text."
      >
        <template #actions>
          <pf-button variant="link">Delete all</pf-button>
          <pf-button variant="secondary">Add parameter</pf-button>
        </template>
      </pf-form-field-group-header>
    </template>
    <pf-form-group label="Label 1" required field-id="4-nonexpand-label1">
      <pf-text-input
        id="4-nonexpand-label1"
        v-model="fieldGroupValues['4-nonexpand-label1']"
        required
        name="4-nonexpand-label1" />
    </pf-form-group>
    <pf-form-group label="Label 2" required field-id="4-nonexpand-label2">
      <pf-text-input
        id="4-nonexpand-label2"
        v-model="fieldGroupValues['4-nonexpand-label2']"
        required
        name="4-nonexpand-label2" />
    </pf-form-group>
  </pf-form-field-group>
  <pf-form-group label="Label 3" required field-id="0-label3">
    <pf-text-input id="0-label3" v-model="fieldGroupValues['0-label3']" required name="0-label3" />
  </pf-form-group>
  <pf-form-group label="Label 4" required field-id="0-label4">
    <pf-text-input id="0-label4" v-model="fieldGroupValues['0-label4']" required name="0-label4" />
  </pf-form-group>
</pf-form>`},{default:t(()=>[o(K,null,{default:t(()=>[o(z,{label:`Label 1`,required:``,"field-id":`0-label1`},{default:t(()=>[o(F,{id:`0-label1`,modelValue:A[`0-label1`],"onUpdate:modelValue":a[16]||=e=>A[`0-label1`]=e,required:``,name:`0-label1`},null,8,[`modelValue`])]),_:1}),o(z,{label:`Label 2`,required:``,"field-id":`0-label2`},{default:t(()=>[o(F,{id:`0-label2`,modelValue:A[`0-label2`],"onUpdate:modelValue":a[17]||=e=>A[`0-label2`]=e,required:``,name:`0-label2`},null,8,[`modelValue`])]),_:1}),o(Q,{animations:``,expanded:j.group1,"onUpdate:expanded":a[27]||=e=>j.group1=e,"toggle-aria-label":`Details`},{header:t(()=>[o(Z,{title:`Field group 1`,"title-id":`field-group1-titleText-id`,description:`Field group 1 description text.`},{actions:t(()=>[o(H,{variant:`link`},{default:t(()=>[...a[59]||=[u(`Delete all`,-1)]]),_:1}),o(H,{variant:`secondary`},{default:t(()=>[...a[60]||=[u(`Add parameter`,-1)]]),_:1})]),_:1})]),default:t(()=>[o(Q,{animations:``,expanded:j.nested1,"onUpdate:expanded":a[20]||=e=>j.nested1=e,"toggle-aria-label":`Details`},{header:t(()=>[o(Z,{title:`Nested field group 1`,"title-id":`nested-field-group1-titleText-id`,description:`Nested field group 1 description text.`},{actions:t(()=>[o(H,{variant:`plain`,"aria-label":`Remove`},{icon:t(()=>[o(d(g))]),_:1})]),_:1})]),default:t(()=>[o(z,{label:`Label 1`,required:``,"field-id":`1-expanded-group1-label1`},{default:t(()=>[o(F,{id:`1-expanded-group1-label1`,modelValue:A[`1-expanded-group1-label1`],"onUpdate:modelValue":a[18]||=e=>A[`1-expanded-group1-label1`]=e,required:``,name:`1-expanded-group1-label1`},null,8,[`modelValue`])]),_:1}),o(z,{label:`Label 2`,required:``,"field-id":`1-expanded-group1-label2`},{default:t(()=>[o(F,{id:`1-expanded-group1-label2`,modelValue:A[`1-expanded-group1-label2`],"onUpdate:modelValue":a[19]||=e=>A[`1-expanded-group1-label2`]=e,required:``,name:`1-expanded-group1-label2`},null,8,[`modelValue`])]),_:1})]),_:1},8,[`expanded`]),o(Q,{animations:``,expandable:``,"toggle-aria-label":`Details`},{header:t(()=>[o(Z,{title:`Nested field group 2`,"title-id":`nested-field-group2-titleText-id`},{actions:t(()=>[o(H,{variant:`plain`,"aria-label":`Remove`},{icon:t(()=>[o(d(g))]),_:1})]),_:1})]),default:t(()=>[o(z,{label:`Label 1`,required:``,"field-id":`1-expanded-group2-label1`},{default:t(()=>[o(F,{id:`1-expanded-group2-label1`,modelValue:A[`1-expanded-group2-label1`],"onUpdate:modelValue":a[21]||=e=>A[`1-expanded-group2-label1`]=e,required:``,name:`1-expanded-group2-label1`},null,8,[`modelValue`])]),_:1}),o(z,{label:`Label 2`,required:``,"field-id":`1-expanded-group2-label2`},{default:t(()=>[o(F,{id:`1-expanded-group2-label2`,modelValue:A[`1-expanded-group2-label2`],"onUpdate:modelValue":a[22]||=e=>A[`1-expanded-group2-label2`]=e,required:``,name:`1-expanded-group2-label2`},null,8,[`modelValue`])]),_:1})]),_:1}),o(Q,{animations:``,expandable:``,"toggle-aria-label":`Details`},{header:t(()=>[o(Z,{title:`Nested field group 3`,"title-id":`nested-field-group3-titleText-id`,description:`Field group 3 description text.`},{actions:t(()=>[o(H,{variant:`plain`,"aria-label":`Remove`},{icon:t(()=>[o(d(g))]),_:1})]),_:1})]),default:t(()=>[o(z,{label:`Label 1`,required:``,"field-id":`1-expanded-group3-label1`},{default:t(()=>[o(F,{id:`1-expanded-group3-label1`,modelValue:A[`1-expanded-group3-label1`],"onUpdate:modelValue":a[23]||=e=>A[`1-expanded-group3-label1`]=e,required:``,name:`1-expanded-group3-label1`},null,8,[`modelValue`])]),_:1}),o(z,{label:`Label 2`,required:``,"field-id":`1-expanded-group3-label2`},{default:t(()=>[o(F,{id:`1-expanded-group3-label2`,modelValue:A[`1-expanded-group3-label2`],"onUpdate:modelValue":a[24]||=e=>A[`1-expanded-group3-label2`]=e,required:``,name:`1-expanded-group3-label2`},null,8,[`modelValue`])]),_:1})]),_:1}),o(z,{label:`Label 1`,required:``,"field-id":`1-group1-label1`},{default:t(()=>[o(F,{id:`1-group1-label1`,modelValue:A[`1-group1-label1`],"onUpdate:modelValue":a[25]||=e=>A[`1-group1-label1`]=e,required:``,name:`1-group1-label1`},null,8,[`modelValue`])]),_:1}),o(z,{label:`Label 2`,required:``,"field-id":`1-group1-label2`},{default:t(()=>[o(F,{id:`1-group1-label2`,modelValue:A[`1-group1-label2`],"onUpdate:modelValue":a[26]||=e=>A[`1-group1-label2`]=e,required:``,name:`1-group1-label2`},null,8,[`modelValue`])]),_:1})]),_:1},8,[`expanded`]),o(Q,{animations:``,expandable:``,"toggle-aria-label":`Details`},{header:t(()=>[o(Z,{title:`Field group 2`,"title-id":`field-group2-titleText-id`,description:`Field group 2 description text.`},{actions:t(()=>[o(H,{variant:`link`},{default:t(()=>[...a[61]||=[u(`Delete all`,-1)]]),_:1}),o(H,{variant:`secondary`},{default:t(()=>[...a[62]||=[u(`Add parameter`,-1)]]),_:1})]),_:1})]),default:t(()=>[o(z,{label:`Label 1`,required:``,"field-id":`2-label1`},{default:t(()=>[o(F,{id:`2-label1`,modelValue:A[`2-label1`],"onUpdate:modelValue":a[28]||=e=>A[`2-label1`]=e,required:``,name:`2-label1`},null,8,[`modelValue`])]),_:1}),o(z,{label:`Label 2`,required:``,"field-id":`2-label2`},{default:t(()=>[o(F,{id:`2-label2`,modelValue:A[`2-label2`],"onUpdate:modelValue":a[29]||=e=>A[`2-label2`]=e,required:``,name:`2-label2`},null,8,[`modelValue`])]),_:1})]),_:1}),o(Q,{animations:``,expanded:j.group3,"onUpdate:expanded":a[36]||=e=>j.group3=e,"toggle-aria-label":`Details`},{header:t(()=>[o(Z,{title:`Field group 3`,"title-id":`field-group3-titleText-id`,description:`Field group 3 description text.`})]),default:t(()=>[o(z,{label:`Label 1`,required:``,"field-id":`3-label1`},{default:t(()=>[o(F,{id:`3-label1`,modelValue:A[`3-label1`],"onUpdate:modelValue":a[30]||=e=>A[`3-label1`]=e,required:``,name:`3-label1`},null,8,[`modelValue`])]),_:1}),o(z,{label:`Label 2`,required:``,"field-id":`3-label2`},{default:t(()=>[o(F,{id:`3-label2`,modelValue:A[`3-label2`],"onUpdate:modelValue":a[31]||=e=>A[`3-label2`]=e,required:``,name:`3-label2`},null,8,[`modelValue`])]),_:1}),o(Q,null,{header:t(()=>[o(Z,{title:`Nested field group 1 (non-expandable)`,"title-id":`nested-field-group1-non-expandable-titleText-id`})]),default:t(()=>[o(z,{label:`Label 1`,required:``,"field-id":`3-nonexpand-group1-label1`},{default:t(()=>[o(F,{id:`3-nonexpand-group1-label1`,modelValue:A[`3-nonexpand-group1-label1`],"onUpdate:modelValue":a[32]||=e=>A[`3-nonexpand-group1-label1`]=e,required:``,name:`3-nonexpand-group1-label1`},null,8,[`modelValue`])]),_:1}),o(z,{label:`Label 2`,required:``,"field-id":`3-nonexpand-group1-label2`},{default:t(()=>[o(F,{id:`3-nonexpand-group1-label2`,modelValue:A[`3-nonexpand-group1-label2`],"onUpdate:modelValue":a[33]||=e=>A[`3-nonexpand-group1-label2`]=e,required:``,name:`3-nonexpand-group1-label2`},null,8,[`modelValue`])]),_:1})]),_:1}),o(Q,null,{header:t(()=>[o(Z,{title:`Nested field group 2 (non-expandable)`,"title-id":`nested-field-group2-non-expandable-titleText-id`,description:`Field group 2 description text.`})]),default:t(()=>[o(z,{label:`Label 1`,required:``,"field-id":`3-nonexpand-group2-label1`},{default:t(()=>[o(F,{id:`3-nonexpand-group2-label1`,modelValue:A[`3-nonexpand-group2-label1`],"onUpdate:modelValue":a[34]||=e=>A[`3-nonexpand-group2-label1`]=e,required:``,name:`3-nonexpand-group2-label1`},null,8,[`modelValue`])]),_:1}),o(z,{label:`Label 2`,required:``,"field-id":`3-nonexpand-group2-label2`},{default:t(()=>[o(F,{id:`3-nonexpand-group2-label2`,modelValue:A[`3-nonexpand-group2-label2`],"onUpdate:modelValue":a[35]||=e=>A[`3-nonexpand-group2-label2`]=e,required:``,name:`3-nonexpand-group2-label2`},null,8,[`modelValue`])]),_:1})]),_:1})]),_:1},8,[`expanded`]),o(Q,null,{header:t(()=>[o(Z,{title:`Field group 4 (non-expandable)`,"title-id":`field-group4-non-expandable-titleText-id`,description:`Field group 4 description text.`},{actions:t(()=>[o(H,{variant:`link`},{default:t(()=>[...a[63]||=[u(`Delete all`,-1)]]),_:1}),o(H,{variant:`secondary`},{default:t(()=>[...a[64]||=[u(`Add parameter`,-1)]]),_:1})]),_:1})]),default:t(()=>[o(z,{label:`Label 1`,required:``,"field-id":`4-nonexpand-label1`},{default:t(()=>[o(F,{id:`4-nonexpand-label1`,modelValue:A[`4-nonexpand-label1`],"onUpdate:modelValue":a[37]||=e=>A[`4-nonexpand-label1`]=e,required:``,name:`4-nonexpand-label1`},null,8,[`modelValue`])]),_:1}),o(z,{label:`Label 2`,required:``,"field-id":`4-nonexpand-label2`},{default:t(()=>[o(F,{id:`4-nonexpand-label2`,modelValue:A[`4-nonexpand-label2`],"onUpdate:modelValue":a[38]||=e=>A[`4-nonexpand-label2`]=e,required:``,name:`4-nonexpand-label2`},null,8,[`modelValue`])]),_:1})]),_:1}),o(z,{label:`Label 3`,required:``,"field-id":`0-label3`},{default:t(()=>[o(F,{id:`0-label3`,modelValue:A[`0-label3`],"onUpdate:modelValue":a[39]||=e=>A[`0-label3`]=e,required:``,name:`0-label3`},null,8,[`modelValue`])]),_:1}),o(z,{label:`Label 4`,required:``,"field-id":`0-label4`},{default:t(()=>[o(F,{id:`0-label4`,modelValue:A[`0-label4`],"onUpdate:modelValue":a[40]||=e=>A[`0-label4`]=e,required:``,name:`0-label4`},null,8,[`modelValue`])]),_:1})]),_:1})]),_:1}),o(q,{title:`Form state`,source:`<pf-form-context-provider
  v-slot="{ setValue, getValue, setError, values, errors }"
  :initial-values="{ 'select-id': 'Option 1' }"
>
  <pf-form>
    <pf-form-group label="Input value" field-id="input-id" required>
      <pf-text-input
        id="input-id"
        :model-value="getValue('input-id')"
        :validated="errors['input-id'] ? 'error' : 'default'"
        @update:model-value="
          setValue('input-id', String($event ?? ''));
          setError('input-id', undefined);
        " />
      <pf-form-helper-text>
        <pf-helper-text>
          <pf-helper-text-item :variant="errors['input-id'] ? 'error' : 'default'">
            <template v-if="errors['input-id']" #icon>
              <circle-exclamation-icon />
            </template>
            {{ errors['input-id'] }}
          </pf-helper-text-item>
        </pf-helper-text>
      </pf-form-helper-text>
    </pf-form-group>

    <pf-textarea
      id="textarea-id"
      aria-label="Form state TextArea"
      :model-value="getValue('textarea-id')"
      @update:model-value="setValue('textarea-id', String($event ?? ''))" />

    <pf-select
      id="select-id"
      :selected="getValue('select-id')"
      :label="getValue('select-id')"
      @update:selected="setValue('select-id', String($event ?? ''))"
    >
      <pf-select-option value="Option 1">Option 1</pf-select-option>
      <pf-select-option value="Option 2">Option 2</pf-select-option>
      <pf-select-option value="Option 3">Option 3</pf-select-option>
    </pf-select>

    <pf-form-group action-group>
      <pf-action-list>
        <pf-action-list-group>
          <pf-action-list-item>
            <pf-button
              type="submit"
              @click.prevent="
                values['input-id']
                  ? alert(\`Form submitted with: \\n \${JSON.stringify(values)}\`)
                  : setError('input-id', 'Input value is required.')
              "
            >
              Submit
            </pf-button>
          </pf-action-list-item>
          <pf-action-list-item>
            <pf-button variant="link" @click="formStateExpanded = !formStateExpanded">
              {{ formStateExpanded ? 'Hide' : 'Show' }} form state
            </pf-button>
          </pf-action-list-item>
        </pf-action-list-group>
      </pf-action-list>
    </pf-form-group>
    <template v-if="formStateExpanded">
      <pf-divider />
      <pre>{{ JSON.stringify({ values, errors }, null, 2) }}</pre>
    </template>
  </pf-form>
</pf-form-context-provider>`},{intro:t(()=>[...a[65]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[i(`code`,null,`pf-form-context-provider`),u(` keeps the values, errors and touched state of the fields, identified by an id. Its default slot receives the form context, and descendant components can read it with `),i(`code`,null,`useFormContext()`),u(`.`)])],-1)]]),default:t(()=>[o(we,{"initial-values":{"select-id":`Option 1`}},{default:t(({setValue:e,getValue:r,setError:s,values:l,errors:f})=>[o(K,null,{default:t(()=>[o(z,{label:`Input value`,"field-id":`input-id`,required:``},{default:t(()=>[o(F,{id:`input-id`,"model-value":r(`input-id`),validated:f[`input-id`]?`error`:`default`,"onUpdate:modelValue":t=>{e(`input-id`,String(t??``)),s(`input-id`,void 0)}},null,8,[`model-value`,`validated`,`onUpdate:modelValue`]),o(R,null,{default:t(()=>[o(L,null,{default:t(()=>[o(I,{variant:f[`input-id`]?`error`:`default`},ne({default:t(()=>[u(` `+n(f[`input-id`]),1)]),_:2},[f[`input-id`]?{name:`icon`,fn:t(()=>[o(d(m))]),key:`0`}:void 0]),1032,[`variant`])]),_:2},1024)]),_:2},1024)]),_:2},1024),o(Y,{id:`textarea-id`,"aria-label":`Form state TextArea`,"model-value":r(`textarea-id`),"onUpdate:modelValue":t=>e(`textarea-id`,String(t??``))},null,8,[`model-value`,`onUpdate:modelValue`]),o(Se,{id:`select-id`,selected:r(`select-id`),label:r(`select-id`),"onUpdate:selected":t=>e(`select-id`,String(t??``))},{default:t(()=>[o($,{value:`Option 1`},{default:t(()=>[...a[66]||=[u(`Option 1`,-1)]]),_:1}),o($,{value:`Option 2`},{default:t(()=>[...a[67]||=[u(`Option 2`,-1)]]),_:1}),o($,{value:`Option 3`},{default:t(()=>[...a[68]||=[u(`Option 3`,-1)]]),_:1})]),_:1},8,[`selected`,`label`,`onUpdate:selected`]),o(z,{"action-group":``},{default:t(()=>[o(G,null,{default:t(()=>[o(W,null,{default:t(()=>[o(U,null,{default:t(()=>[o(H,{type:`submit`,onClick:ie(e=>l[`input-id`]?ge(`Form submitted with: \n ${JSON.stringify(l)}`):s(`input-id`,`Input value is required.`),[`prevent`])},{default:t(()=>[...a[69]||=[u(` Submit `,-1)]]),_:1},8,[`onClick`])]),_:2},1024),o(U,null,{default:t(()=>[o(H,{variant:`link`,onClick:a[41]||=e=>M.value=!M.value},{default:t(()=>[u(n(M.value?`Hide`:`Show`)+` form state `,1)]),_:1})]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024),M.value?(c(),ee(te,{key:0},[o(Ce),i(`pre`,null,n(JSON.stringify({values:l,errors:f},null,2)),1)],64)):p(``,!0)]),_:2},1024)]),_:1})]),_:1}),o(q,{title:`Built-in helper text and native validation`,source:`<pf-form>
  <pf-form-group
    label="Age"
    field-id="age-native"
    helper-text="Please enter your age"
    helper-text-invalid="Age has to be a number"
  >
    <pf-text-input
      id="age-native"
      v-model="nativeAge"
      pattern="[0-9]+"
      required
      name="age"
      aria-describedby="age-native-helper" />
  </pf-form-group>
  <pf-form-group
    label="Description"
    field-id="description"
    helper-text-invalid="No emails allowed in the description"
  >
    <pf-textarea
      id="description"
      v-model="nativeDescription"
      pattern="(?!.*[A-Za-z0-9]@[A-Za-z].*).*"
      name="description"
      aria-describedby="description-helper"
      spellcheck="false" />
  </pf-form-group>
</pf-form>`},{intro:t(()=>[...a[70]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[i(`code`,null,`pf-form-group`),u(` can render its helper text with the `),i(`code`,null,`helper-text`),u(` and `),i(`code`,null,`helper-text-invalid`),u(` props or slots. Without `),i(`code`,null,`novalidate`),u(`, the inputs are validated natively (here with `),i(`code`,null,`pattern`),u(` and `),i(`code`,null,`required`),u(`), and the invalid helper text is shown when an input of the group is invalid.`)])],-1)]]),default:t(()=>[o(K,null,{default:t(()=>[o(z,{label:`Age`,"field-id":`age-native`,"helper-text":`Please enter your age`,"helper-text-invalid":`Age has to be a number`},{default:t(()=>[o(F,{id:`age-native`,modelValue:N.value,"onUpdate:modelValue":a[42]||=e=>N.value=e,pattern:`[0-9]+`,required:``,name:`age`,"aria-describedby":`age-native-helper`},null,8,[`modelValue`])]),_:1}),o(z,{label:`Description`,"field-id":`description`,"helper-text-invalid":`No emails allowed in the description`},{default:t(()=>[o(Y,{id:`description`,modelValue:P.value,"onUpdate:modelValue":a[43]||=e=>P.value=e,pattern:`(?!.*[A-Za-z0-9]@[A-Za-z].*).*`,name:`description`,"aria-describedby":`description-helper`,spellcheck:`false`},null,8,[`modelValue`])]),_:1})]),_:1})]),_:1})]),_:1})],64)}}});export{_ as default};