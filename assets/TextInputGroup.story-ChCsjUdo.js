import{$ as e,N as t,Ot as n,U as r,c as i,et as a,f as o,h as s,j as c,k as l,l as u,m as d,n as f,p,s as m,st as h,u as g}from"./runtime-core.esm-bundler-C7C7Sr-n.js";import{D as _,y as v}from"./index-DoPLe3sE.js";var y=s({__name:`TextInputGroup.story`,setup(s){let y=a(``),b=a(``),x=a(`Success validation`),S=a(`Warning validation with custom non-status icon at start`),C=a(`Error validation with custom non-status icon at start and utilities`),w=a(``),T=e([`chip one`,`chip two`,`chip three`,`chip four`,`chip five`,`chip six`,`chip seven`,`chip eight`,`chip nine`,`chip ten`,`chip eleven`,`chip twelve`,`chip thirteen`,`chip fourteen`]);return(e,a)=>{let s=t(`component-info`),E=t(`pf-text-input-group-main`),D=t(`pf-text-input-group`),O=t(`story-canvas`),k=t(`pf-button`),A=t(`pf-text-input-group-utilities`),j=t(`pf-flex-item`),M=t(`pf-flex`),N=t(`pf-label`),P=t(`pf-label-group`),F=t(`doc-page`);return l(),i(F,{name:`Components/TextInputGroup.story.vue`,title:`Text input group`},{description:r(()=>[...a[9]||=[m(`div`,{class:`markdown pf-v6-c-content`},[m(`p`,null,[p(`A `),m(`strong`,null,`text input group`),p(` is a more flexible composable version of a `),m(`a`,{href:`#/stories/components/text-input`},`text input`),p(`. It enables consumers of PatternFly to build custom inputs for filtering and similar use cases by placing elements like icons, chips groups and buttons within a text input.`)])],-1)]]),apidocs:r(()=>[d(s,{name:`PfTextInputGroup`,doc:{name:`PfTextInputGroup`,exportName:`PfTextInputGroup`,displayName:`TextInputGroup`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`disabled`,description:`Adds disabled styling and a disabled context value which text input group main hooks into for the input itself`,required:!1,type:{name:`boolean`}},{name:`plain`,description:`Flag to indicate the toggle has no border or background`,required:!1,type:{name:`boolean`}},{name:`validated`,description:`Value to indicate if the text input group is modified to show that validation state.
If set to success, warning, or error, the group will show that state and the main input a status icon.
If set to default, no validation styling is applied (use to clear a prior validation state).`,required:!1,type:{name:`InputValidateState`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/TextInputGroup/TextInputGroup.vue`]}}),d(s,{name:`PfTextInputGroupMain`,doc:{name:`PfTextInputGroupMain`,exportName:`PfTextInputGroupMain`,displayName:`TextInputGroupMain`,description:``,tags:{},expose:[{name:`input`},{name:`focus`}],props:[{name:`autocomplete`,required:!1,type:{name:`string`}},{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`ariaLabel`,description:`Accessibility label for the input`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'Type to filter'`}},{name:`inputClass`,description:`Additional classes added to the input.`,required:!1,type:{name:`TSIndexedAccessType`}},{name:`type`,description:`Type that the text input accepts.`,required:!1,type:{name:`T`}},{name:`modelValue`,description:`Value of the text input.`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`number`},{name:`null`}]},defaultValue:{func:!1,value:`undefined`}},{name:`modelModifiers`,required:!1,type:{name:`{
  number?: N;
  trim?: boolean;
  lazy?: boolean;
}`}},{name:`hint`,description:`Suggestion that will show up like a placeholder even with text in the input`,required:!1,type:{name:`string`}}],events:[{name:`change`,type:{names:[`Event`]},description:`Callback for when there is a change in the input field`},{name:`focus`,type:{names:[`FocusEvent`]},description:`Callback for when the input field is focused`},{name:`blur`,type:{names:[`FocusEvent`]},description:`Callback for when focus is lost on the input field`},{name:`input`,type:{names:[`Event`]},description:`Callback for every keystroke in the input field`},{name:`update:modelValue`,type:{names:[`TSConditionalType`]},description:`Callback for when the model value changes`}],slots:[{name:`default`},{name:`icon`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/TextInputGroup/TextInputGroupMain.vue`]}}),d(s,{name:`PfTextInputGroupUtilities`,doc:{name:`PfTextInputGroupUtilities`,exportName:`PfTextInputGroupUtilities`,displayName:`TextInputGroupUtilities`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/TextInputGroup/TextInputGroupUtilities.vue`]}})]),default:r(()=>[a[15]||=m(`div`,{class:`markdown pf-v6-c-content`},[m(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),m(`ul`,null,[m(`li`,null,[p(`The value of `),m(`code`,null,`pf-text-input-group-main`),p(` is bound with `),m(`code`,null,`v-model`),p(` (`),m(`code`,null,`value`),p(` + `),m(`code`,null,`onChange`),p(`), and the input events are emitted as `),m(`code`,null,`@input`),p(`, `),m(`code`,null,`@change`),p(`, `),m(`code`,null,`@focus`),p(` and `),m(`code`,null,`@blur`),p(`.`)]),m(`li`,null,[p(`The `),m(`code`,null,`icon`),p(` prop of `),m(`code`,null,`pf-text-input-group-main`),p(` is replaced by the `),m(`code`,null,`icon`),p(` slot.`)]),m(`li`,null,[p(`The attributes of `),m(`code`,null,`pf-text-input-group-main`),p(` other than `),m(`code`,null,`class`),p(` go to the input instead of the root element, which replaces the `),m(`code`,null,`inputId`),p(` (`),m(`code`,null,`id`),p(`), `),m(`code`,null,`inputProps`),p(` and `),m(`code`,null,`isExpanded`),p(` (`),m(`code`,null,`aria-expanded`),p(`) props.`)]),m(`li`,null,[m(`code`,null,`pf-text-input-group-main`),p(` has an `),m(`code`,null,`input-class`),p(` prop for the classes of the input.`)]),m(`li`,null,[p(`The hint input of `),m(`code`,null,`pf-text-input-group-main`),p(` does not repeat the input id.`)]),m(`li`,null,[m(`code`,null,`pf-text-input-group-main`),p(` exposes the input element as `),m(`code`,null,`input`),p(` and a `),m(`code`,null,`focus()`),p(` method instead of forwarding its ref.`)])]),m(`p`,null,[p(`See `),m(`a`,{href:`#/`},`common differences from patternfly-react`),p(`.`)]),m(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),d(O,{title:`Basic text input group`,source:`<pf-text-input-group>
  <pf-text-input-group-main v-model="basicValue" />
</pf-text-input-group>`},{intro:r(()=>[...a[10]||=[m(`div`,{class:`markdown pf-v6-c-content`},[m(`p`,null,`A basic text input group updates its contents as users enter text.`)],-1)]]),default:r(()=>[d(D,null,{default:r(()=>[d(E,{modelValue:y.value,"onUpdate:modelValue":a[0]||=e=>y.value=e},null,8,[`modelValue`])]),_:1})]),_:1}),d(O,{title:`Disabled text input group`,source:`<pf-text-input-group disabled>
  <pf-text-input-group-main
    model-value="Disabled"
    type="text"
    aria-label="Disabled text input group example input" />
</pf-text-input-group>`},{intro:r(()=>[...a[11]||=[m(`div`,{class:`markdown pf-v6-c-content`},[m(`p`,null,[p(`To prevent users from making edits to a text input group, you can disable it using `),m(`code`,null,`disabled`),p(`.`)])],-1)]]),default:r(()=>[d(D,{disabled:``},{default:r(()=>[d(E,{"model-value":`Disabled`,type:`text`,"aria-label":`Disabled text input group example input`})]),_:1})]),_:1}),d(O,{title:`With icon and utilities`,source:`<pf-text-input-group>
  <pf-text-input-group-main v-model="utilitiesValue">
    <template #icon>
      <magnifying-glass-icon />
    </template>
  </pf-text-input-group-main>
  <pf-text-input-group-utilities v-if="!!utilitiesValue">
    <pf-button variant="plain" aria-label="Clear button and input" @click="utilitiesValue = ''">
      <template #icon>
        <xmark-icon />
      </template>
    </pf-button>
  </pf-text-input-group-utilities>
</pf-text-input-group>`},{intro:r(()=>[...a[12]||=[m(`div`,{class:`markdown pf-v6-c-content`},[m(`p`,null,[p(`To help users identify the purpose of an input group, you can add an icon. To do this, import your icon and pass it to the `),m(`code`,null,`icon`),p(` slot of `),m(`code`,null,`pf-text-input-group-main`),p(`.`)]),m(`p`,null,[p(`You can also add additional actions or utilities via `),m(`code`,null,`pf-text-input-group-utilities`),p(`. The following example includes a clear button that allows users to remove their previous input.`)])],-1)]]),default:r(()=>[d(D,null,{default:r(()=>[d(E,{modelValue:b.value,"onUpdate:modelValue":a[1]||=e=>b.value=e},{icon:r(()=>[d(h(v))]),_:1},8,[`modelValue`]),b.value?(l(),i(A,{key:0},{default:r(()=>[d(k,{variant:`plain`,"aria-label":`Clear button and input`,onClick:a[2]||=e=>b.value=``},{icon:r(()=>[d(h(_))]),_:1})]),_:1})):u(``,!0)]),_:1})]),_:1}),d(O,{title:`With validation`,source:`<pf-flex direction="column" row-gap="sm">
  <pf-flex-item>
    <pf-text-input-group validated="success">
      <pf-text-input-group-main v-model="successValue" />
    </pf-text-input-group>
  </pf-flex-item>
  <pf-flex-item>
    <pf-text-input-group validated="warning">
      <pf-text-input-group-main v-model="warningValue">
        <template #icon>
          <magnifying-glass-icon />
        </template>
      </pf-text-input-group-main>
    </pf-text-input-group>
  </pf-flex-item>
  <pf-flex-item>
    <pf-text-input-group validated="error">
      <pf-text-input-group-main v-model="errorValue">
        <template #icon>
          <magnifying-glass-icon />
        </template>
      </pf-text-input-group-main>
      <pf-text-input-group-utilities v-if="!!errorValue">
        <pf-button variant="plain" aria-label="Clear button and input" @click="errorValue = ''">
          <template #icon>
            <xmark-icon />
          </template>
        </pf-button>
      </pf-text-input-group-utilities>
    </pf-text-input-group>
  </pf-flex-item>
</pf-flex>`},{intro:r(()=>[...a[13]||=[m(`div`,{class:`markdown pf-v6-c-content`},[m(`p`,null,[p(`You can add a validation status to a `),m(`code`,null,`pf-text-input-group`),p(` by passing the `),m(`code`,null,`validated`),p(` property with a value of either "success", "warning", or "error".`)])],-1)]]),default:r(()=>[d(M,{direction:`column`,"row-gap":`sm`},{default:r(()=>[d(j,null,{default:r(()=>[d(D,{validated:`success`},{default:r(()=>[d(E,{modelValue:x.value,"onUpdate:modelValue":a[3]||=e=>x.value=e},null,8,[`modelValue`])]),_:1})]),_:1}),d(j,null,{default:r(()=>[d(D,{validated:`warning`},{default:r(()=>[d(E,{modelValue:S.value,"onUpdate:modelValue":a[4]||=e=>S.value=e},{icon:r(()=>[d(h(v))]),_:1},8,[`modelValue`])]),_:1})]),_:1}),d(j,null,{default:r(()=>[d(D,{validated:`error`},{default:r(()=>[d(E,{modelValue:C.value,"onUpdate:modelValue":a[5]||=e=>C.value=e},{icon:r(()=>[d(h(v))]),_:1},8,[`modelValue`]),C.value?(l(),i(A,{key:0},{default:r(()=>[d(k,{variant:`plain`,"aria-label":`Clear button and input`,onClick:a[6]||=e=>C.value=``},{icon:r(()=>[d(h(_))]),_:1})]),_:1})):u(``,!0)]),_:1})]),_:1})]),_:1})]),_:1}),d(O,{title:`With filters`,source:`<pf-text-input-group>
  <pf-text-input-group-main v-model="filtersValue">
    <template v-if="!chips.length" #icon>
      <magnifying-glass-icon />
    </template>
    <pf-label-group>
      <pf-label v-for="(chip, index) in chips" :key="chip" variant="outline" @close="chips.splice(index, 1)">{{
        chip
      }}</pf-label>
    </pf-label-group>
  </pf-text-input-group-main>
  <pf-text-input-group-utilities v-if="!!filtersValue || !!chips.length">
    <pf-button
      variant="plain"
      aria-label="Clear button and input"
      @click="
        filtersValue = '';
        chips.splice(0);
      "
    >
      <template #icon>
        <xmark-icon />
      </template>
    </pf-button>
  </pf-text-input-group-utilities>
</pf-text-input-group>`},{intro:r(()=>[...a[14]||=[m(`div`,{class:`markdown pf-v6-c-content`},[m(`p`,null,[p(`When a text input group is used within a data view, like a table, you can nest filter labels within the group. To do this, pass a `),m(`code`,null,`pf-label-group`),p(` to the default slot of `),m(`code`,null,`pf-text-input-group-main`),p(`, with all of the labels that a user has selected. Users can interact with these labels as needed.`)])],-1)]]),default:r(()=>[d(D,null,{default:r(()=>[d(E,{modelValue:w.value,"onUpdate:modelValue":a[7]||=e=>w.value=e},o({default:r(()=>[d(P,null,{default:r(()=>[(l(!0),g(f,null,c(T,(e,t)=>(l(),i(N,{key:e,variant:`outline`,onClose:e=>T.splice(t,1)},{default:r(()=>[p(n(e),1)]),_:2},1032,[`onClose`]))),128))]),_:1})]),_:2},[T.length?void 0:{name:`icon`,fn:r(()=>[d(h(v))]),key:`0`}]),1032,[`modelValue`]),w.value||T.length?(l(),i(A,{key:0},{default:r(()=>[d(k,{variant:`plain`,"aria-label":`Clear button and input`,onClick:a[8]||=e=>{w.value=``,T.splice(0)}},{icon:r(()=>[d(h(_))]),_:1})]),_:1})):u(``,!0)]),_:1})]),_:1})]),_:1})}}});export{y as default};