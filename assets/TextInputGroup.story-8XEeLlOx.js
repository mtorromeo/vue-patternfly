import{F as e,K as t,N as n,Pt as r,c as i,d as a,g as o,h as s,it as c,j as l,l as u,m as d,n as f,p,pt as m,rt as h,u as g}from"./runtime-core.esm-bundler-DO1530YC.js";import{C as _,F as v}from"./index-CUsetNQE.js";var y=o({__name:`TextInputGroup.story`,setup(o){let y=c(``),b=c(``),x=c(`Success validation`),S=c(`Warning validation with custom non-status icon at start`),C=c(`Error validation with custom non-status icon at start and utilities`),w=c(``),T=h([`chip one`,`chip two`,`chip three`,`chip four`,`chip five`,`chip six`,`chip seven`,`chip eight`,`chip nine`,`chip ten`,`chip eleven`,`chip twelve`,`chip thirteen`,`chip fourteen`]);return(o,c)=>{let h=e(`component-info`),E=e(`pf-text-input-group-main`),D=e(`pf-text-input-group`),O=e(`story-canvas`),k=e(`pf-button`),A=e(`pf-text-input-group-utilities`),j=e(`pf-flex-item`),M=e(`pf-flex`),N=e(`pf-label`),P=e(`pf-label-group`),F=e(`doc-page`);return l(),u(F,{name:`Components/TextInputGroup.story.vue`,title:`Text input group`},{description:t(()=>[...c[9]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[d(`A `),i(`strong`,null,`text input group`),d(` is a more flexible composable version of a `),i(`a`,{href:`#/stories/components/text-input`},`text input`),d(`. It enables consumers of PatternFly to build custom inputs for filtering and similar use cases by placing elements like icons, chips groups and buttons within a text input.`)])],-1)]]),apidocs:t(()=>[s(h,{name:`PfTextInputGroup`,doc:{name:`PfTextInputGroup`,exportName:`PfTextInputGroup`,displayName:`TextInputGroup`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`disabled`,description:`Adds disabled styling and a disabled context value which text input group main hooks into for the input itself`,required:!1,type:{name:`boolean`}},{name:`plain`,description:`Flag to indicate the toggle has no border or background`,required:!1,type:{name:`boolean`}},{name:`validated`,description:`Value to indicate if the text input group is modified to show that validation state.
If set to success, warning, or error, the group will show that state and the main input a status icon.
If set to default, no validation styling is applied (use to clear a prior validation state).`,required:!1,type:{name:`InputValidateState`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/TextInputGroup/TextInputGroup.vue`]}}),s(h,{name:`PfTextInputGroupMain`,doc:{name:`PfTextInputGroupMain`,exportName:`PfTextInputGroupMain`,displayName:`TextInputGroupMain`,description:``,tags:{},expose:[{name:`input`},{name:`focus`}],props:[{name:`autocomplete`,required:!1,type:{name:`string`}},{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`ariaLabel`,description:"Accessibility label for the input. Defaults to the `textInputGroupMain` message.",required:!1,type:{name:`string`}},{name:`inputClass`,description:`Additional classes added to the input.`,required:!1,type:{name:`TSIndexedAccessType`}},{name:`type`,description:`Type that the text input accepts.`,required:!1,type:{name:`T`}},{name:`modelValue`,description:`Value of the text input.`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`number`},{name:`null`}]},defaultValue:{func:!1,value:`undefined`}},{name:`modelModifiers`,required:!1,type:{name:`{
  number?: N;
  trim?: boolean;
  lazy?: boolean;
}`}},{name:`hint`,description:`Suggestion that will show up like a placeholder even with text in the input`,required:!1,type:{name:`string`}}],events:[{name:`change`,type:{names:[`Event`]},description:`Callback for when there is a change in the input field`},{name:`focus`,type:{names:[`FocusEvent`]},description:`Callback for when the input field is focused`},{name:`blur`,type:{names:[`FocusEvent`]},description:`Callback for when focus is lost on the input field`},{name:`input`,type:{names:[`Event`]},description:`Callback for every keystroke in the input field`},{name:`update:modelValue`,type:{names:[`TSConditionalType`]},description:`Callback for when the model value changes`}],slots:[{name:`default`},{name:`icon`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/TextInputGroup/TextInputGroupMain.vue`]}}),s(h,{name:`PfTextInputGroupUtilities`,doc:{name:`PfTextInputGroupUtilities`,exportName:`PfTextInputGroupUtilities`,displayName:`TextInputGroupUtilities`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/TextInputGroup/TextInputGroupUtilities.vue`]}})]),default:t(()=>[c[15]||=i(`div`,{class:`markdown pf-v6-c-content`},[i(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),i(`ul`,null,[i(`li`,null,[d(`The value of `),i(`code`,null,`pf-text-input-group-main`),d(` is bound with `),i(`code`,null,`v-model`),d(` (`),i(`code`,null,`value`),d(` + `),i(`code`,null,`onChange`),d(`), and the input events are emitted as `),i(`code`,null,`@input`),d(`, `),i(`code`,null,`@change`),d(`, `),i(`code`,null,`@focus`),d(` and `),i(`code`,null,`@blur`),d(`.`)]),i(`li`,null,[d(`The `),i(`code`,null,`icon`),d(` prop of `),i(`code`,null,`pf-text-input-group-main`),d(` is replaced by the `),i(`code`,null,`icon`),d(` slot.`)]),i(`li`,null,[d(`The attributes of `),i(`code`,null,`pf-text-input-group-main`),d(` other than `),i(`code`,null,`class`),d(` go to the input instead of the root element, which replaces the `),i(`code`,null,`inputId`),d(` (`),i(`code`,null,`id`),d(`), `),i(`code`,null,`inputProps`),d(` and `),i(`code`,null,`isExpanded`),d(` (`),i(`code`,null,`aria-expanded`),d(`) props.`)]),i(`li`,null,[i(`code`,null,`pf-text-input-group-main`),d(` has an `),i(`code`,null,`input-class`),d(` prop for the classes of the input.`)]),i(`li`,null,[d(`The hint input of `),i(`code`,null,`pf-text-input-group-main`),d(` does not repeat the input id.`)]),i(`li`,null,[i(`code`,null,`pf-text-input-group-main`),d(` exposes the input element as `),i(`code`,null,`input`),d(` and a `),i(`code`,null,`focus()`),d(` method instead of forwarding its ref.`)])]),i(`p`,null,[d(`See `),i(`a`,{href:`#/`},`common differences from patternfly-react`),d(`.`)]),i(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),s(O,{title:`Basic text input group`,source:`<pf-text-input-group>
  <pf-text-input-group-main v-model="basicValue" />
</pf-text-input-group>`},{intro:t(()=>[...c[10]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,`A basic text input group updates its contents as users enter text.`)],-1)]]),default:t(()=>[s(D,null,{default:t(()=>[s(E,{modelValue:y.value,"onUpdate:modelValue":c[0]||=e=>y.value=e},null,8,[`modelValue`])]),_:1})]),_:1}),s(O,{title:`Disabled text input group`,source:`<pf-text-input-group disabled>
  <pf-text-input-group-main
    model-value="Disabled"
    type="text"
    aria-label="Disabled text input group example input" />
</pf-text-input-group>`},{intro:t(()=>[...c[11]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[d(`To prevent users from making edits to a text input group, you can disable it using `),i(`code`,null,`disabled`),d(`.`)])],-1)]]),default:t(()=>[s(D,{disabled:``},{default:t(()=>[s(E,{"model-value":`Disabled`,type:`text`,"aria-label":`Disabled text input group example input`})]),_:1})]),_:1}),s(O,{title:`With icon and utilities`,source:`<pf-text-input-group>
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
</pf-text-input-group>`},{intro:t(()=>[...c[12]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[d(`To help users identify the purpose of an input group, you can add an icon. To do this, import your icon and pass it to the `),i(`code`,null,`icon`),d(` slot of `),i(`code`,null,`pf-text-input-group-main`),d(`.`)]),i(`p`,null,[d(`You can also add additional actions or utilities via `),i(`code`,null,`pf-text-input-group-utilities`),d(`. The following example includes a clear button that allows users to remove their previous input.`)])],-1)]]),default:t(()=>[s(D,null,{default:t(()=>[s(E,{modelValue:b.value,"onUpdate:modelValue":c[1]||=e=>b.value=e},{icon:t(()=>[s(m(_))]),_:1},8,[`modelValue`]),b.value?(l(),u(A,{key:0},{default:t(()=>[s(k,{variant:`plain`,"aria-label":`Clear button and input`,onClick:c[2]||=e=>b.value=``},{icon:t(()=>[s(m(v))]),_:1})]),_:1})):g(``,!0)]),_:1})]),_:1}),s(O,{title:`With validation`,source:`<pf-flex direction="column" row-gap="sm">
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
</pf-flex>`},{intro:t(()=>[...c[13]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[d(`You can add a validation status to a `),i(`code`,null,`pf-text-input-group`),d(` by passing the `),i(`code`,null,`validated`),d(` property with a value of either "success", "warning", or "error".`)])],-1)]]),default:t(()=>[s(M,{direction:`column`,"row-gap":`sm`},{default:t(()=>[s(j,null,{default:t(()=>[s(D,{validated:`success`},{default:t(()=>[s(E,{modelValue:x.value,"onUpdate:modelValue":c[3]||=e=>x.value=e},null,8,[`modelValue`])]),_:1})]),_:1}),s(j,null,{default:t(()=>[s(D,{validated:`warning`},{default:t(()=>[s(E,{modelValue:S.value,"onUpdate:modelValue":c[4]||=e=>S.value=e},{icon:t(()=>[s(m(_))]),_:1},8,[`modelValue`])]),_:1})]),_:1}),s(j,null,{default:t(()=>[s(D,{validated:`error`},{default:t(()=>[s(E,{modelValue:C.value,"onUpdate:modelValue":c[5]||=e=>C.value=e},{icon:t(()=>[s(m(_))]),_:1},8,[`modelValue`]),C.value?(l(),u(A,{key:0},{default:t(()=>[s(k,{variant:`plain`,"aria-label":`Clear button and input`,onClick:c[6]||=e=>C.value=``},{icon:t(()=>[s(m(v))]),_:1})]),_:1})):g(``,!0)]),_:1})]),_:1})]),_:1})]),_:1}),s(O,{title:`With filters`,source:`<pf-text-input-group>
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
</pf-text-input-group>`},{intro:t(()=>[...c[14]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[d(`When a text input group is used within a data view, like a table, you can nest filter labels within the group. To do this, pass a `),i(`code`,null,`pf-label-group`),d(` to the default slot of `),i(`code`,null,`pf-text-input-group-main`),d(`, with all of the labels that a user has selected. Users can interact with these labels as needed.`)])],-1)]]),default:t(()=>[s(D,null,{default:t(()=>[s(E,{modelValue:w.value,"onUpdate:modelValue":c[7]||=e=>w.value=e},p({default:t(()=>[s(P,null,{default:t(()=>[(l(!0),a(f,null,n(T,(e,n)=>(l(),u(N,{key:e,variant:`outline`,onClose:e=>T.splice(n,1)},{default:t(()=>[d(r(e),1)]),_:2},1032,[`onClose`]))),128))]),_:1})]),_:2},[T.length?void 0:{name:`icon`,fn:t(()=>[s(m(_))]),key:`0`}]),1032,[`modelValue`]),w.value||T.length?(l(),u(A,{key:0},{default:t(()=>[s(k,{variant:`plain`,"aria-label":`Clear button and input`,onClick:c[8]||=e=>{w.value=``,T.splice(0)}},{icon:t(()=>[s(m(v))]),_:1})]),_:1})):g(``,!0)]),_:1})]),_:1})]),_:1})}}});export{y as default};