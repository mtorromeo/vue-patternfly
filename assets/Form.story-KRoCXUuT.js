import{H as N}from"./help-icon-G_O0gF4P.js";import{m as A,f as H,r as y,a as t,o as T,c as w,w as a,b as r,d as e,u as d,v as G,e as o}from"./index-0yq5x7pK.js";import{C as x}from"./circle-exclamation-icon-pnXGqcox.js";const S={name:"TrashIcon",height:512,width:448,svgPath:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z",yOffset:0,xOffset:0},I=A(S),v=I,C=o("b",null,"form",-1),D=o("div",{class:"markdown pf-v5-c-content"},[o("p",null,"Use forms to accomplish tasks reliant on user-inputted information like logging in, registering for accounts or services, configuring settings, or completing surveys."),o("h2",{class:"pf-v5-c-title"},"Differences from patternfly-react"),o("ul",null,[o("li",null,[r("The "),o("code",null,"novalidate"),r(" attribute is not implicitly applied to the form but you can still add it yourself. This makes "),o("code",null,"pf-form"),r(" usable with the native form validation technique.")]),o("li",null,[r("Allowed overriding the "),o("code",null,"component"),r(" used by the form. A typical use-case is when you have a parent form tag already present and you only need "),o("code",null,"pf-form"),r(" to apply the patternfly layout to its children.")]),o("li",null,[r("There is no FormHelperText component. You can instead use the "),o("code",null,"helper-text"),r(" prop or the "),o("code",null,"helperText"),r(" and "),o("code",null,"helperTextIcon"),r(" slots on "),o("code",null,"pf-form-group"),r(".")])]),o("p",null,[r("See "),o("a",{href:"#/"},"common differences from patternfly-react"),r(".")]),o("h2",{class:"pf-v5-c-title"},"Examples")],-1),B=H({__name:"Form.story",setup(P){const u=y("Five"),h=y(`Nice description
my email: mail@mail.com`);return(V,f)=>{const n=t("component-info"),_=t("pf-tooltip"),i=t("pf-text-input"),l=t("pf-form-group"),p=t("pf-button"),F=t("pf-action-group"),c=t("pf-form"),g=t("story-canvas"),q=t("pf-textarea"),m=t("pf-form-field-group-header"),s=t("pf-form-field-group"),k=t("doc-page");return T(),w(k,{title:"Form"},{description:a(()=>[r("A "),C,r(" is a group of elements used to collect information from a user in a variety of contexts including in a modal, in a wizard, or on a page. Use cases for forms include tasks reliant on user-inputted information for completion like logging in, registering, configuring settings, or completing surveys.")]),apidocs:a(()=>[e(n,{src:"packages/core/src/components/Form/ActionGroup.vue",doc:{name:"PfActionGroup",exportName:"default",displayName:"ActionGroup",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Form/ActionGroup.vue"]}},null,8,["doc"]),e(n,{src:"packages/core/src/components/Form/Form.vue",doc:{name:"PfForm",exportName:"default",displayName:"Form",description:"",tags:{},props:[{name:"component",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Component"}]},defaultValue:{func:!1,value:"'form'"}},{name:"horizontal",required:!1,type:{name:"boolean"}},{name:"widthLimited",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Form/Form.vue"]}},null,8,["doc"]),e(n,{src:"packages/core/src/components/Form/FormAlert.vue",doc:{name:"PfFormAlert",exportName:"default",displayName:"FormAlert",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Form/FormAlert.vue"]}},null,8,["doc"]),e(n,{src:"packages/core/src/components/Form/FormFieldGroup.vue",doc:{name:"PfFormFieldGroup",exportName:"default",displayName:"FormFieldGroup",description:"",tags:{},props:[{name:"fieldset",required:!1,type:{name:"boolean"}},{name:"expandable",description:"Flag indicating if the field group is expandable",required:!1,type:{name:"boolean"}},{name:"expanded",description:"Flag indicate if the form field group is expanded. Modifies the card to be expandable.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"toggleAriaLabel",description:"Aria-label to use on the form filed group toggle button",required:!1,type:{name:"string"}}],events:[{name:"update:expanded",type:{names:["boolean"]}}],slots:[{name:"header"},{name:"default"}],sourceFiles:["../../packages/core/src/components/Form/FormFieldGroup.vue"]}},null,8,["doc"]),e(n,{src:"packages/core/src/components/Form/FormFieldGroupHeader.vue",doc:{name:"PfFormFieldGroupHeader",exportName:"default",displayName:"FormFieldGroupHeader",description:"",tags:{},props:[{name:"title",description:"Header title",required:!1,type:{name:"string"}},{name:"description",description:"Header description",required:!1,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Form/FormFieldGroupHeader.vue"]}},null,8,["doc"]),e(n,{src:"packages/core/src/components/Form/FormGroup.vue",doc:{name:"PfFormGroup",exportName:"default",displayName:"FormGroup",description:"",tags:{},props:[{name:"fieldset",required:!1,type:{name:"boolean"}},{name:"label",description:"Label text before the field.",required:!1,type:{name:"string"}},{name:"labelInfo",description:"Additional label information displayed after the label.",required:!1,type:{name:"string"}},{name:"required",description:"Sets the FormGroup required.",required:!1,type:{name:"boolean"}},{name:"validated",description:`Sets the FormGroup validated. If you set to success, text color of helper text will be modified to indicate valid state.
If set to error, text color of helper text will be modified to indicate error state.
If set to warning, text color of helper text will be modified to indicate warning state.`,required:!1,type:{name:"InputValidateState"}},{name:"inline",required:!1,type:{name:"boolean"}},{name:"stack",description:"Sets the FormGroupControl to be stacked",required:!1,type:{name:"boolean"}},{name:"noPaddingTop",description:"Removes top spacer from label.",required:!1,type:{name:"boolean"}},{name:"helperText",description:"Helper text regarding the field.",required:!1,type:{name:"string"}},{name:"helperTextBeforeField",description:"Flag to position the helper text before the field. False by default",required:!1,type:{name:"boolean"}},{name:"helperTextInvalid",description:"Helper text after the field when the field is invalid.",required:!1,type:{name:"string"}},{name:"fieldId",description:"ID of the included field. It has to be the same for proper working.",required:!1,type:{name:"string"}}],slots:[{name:"label"},{name:"label-icon"},{name:"label-info"},{name:"default"},{name:"helper-text-invalid-icon"},{name:"helper-text-invalid"},{name:"helper-text-icon"},{name:"helper-text"}],sourceFiles:["../../packages/core/src/components/Form/FormGroup.vue"]}},null,8,["doc"]),e(n,{src:"packages/core/src/components/Form/FormHelperText.vue",doc:{name:"PfFormHelperText",exportName:"default",displayName:"FormHelperText",description:"",tags:{},props:[{name:"error",description:"Adds error styling to the Helper Text  *",required:!1,type:{name:"boolean"}},{name:"hidden",description:"Hides the helper text *",required:!1,type:{name:"boolean"}},{name:"component",description:"Component type of the form helper text",required:!1,type:{name:"union",elements:[{name:'"p"'},{name:'"div"'}]},defaultValue:{func:!1,value:"'p'"}}],slots:[{name:"icon"},{name:"default"}],sourceFiles:["../../packages/core/src/components/Form/FormHelperText.vue"]}},null,8,["doc"]),e(n,{src:"packages/core/src/components/Form/FormSection.vue",doc:{name:"PfFormSection",exportName:"default",displayName:"FormSection",description:"",tags:{},props:[{name:"title",description:"Title for the section",required:!1,type:{name:"string"}},{name:"titleElement",description:"Header description",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'div'"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Form/FormSection.vue"]}},null,8,["doc"])]),default:a(()=>[D,e(g,{title:"Basic",source:`<pf-form>
  <pf-form-group label="Name" required field-id="simple-form-name-01" helper-text="Please provide your full name">
    <template #label-icon>
      <pf-tooltip>
        <template #content>
          Several patterns can be added in Filename mask with "," delimiter.
          Example:
          /home/*/mail/,/home/*/tmp,*.php
        </template>
        <help-icon />
      </pf-tooltip>
    </template>
    <pf-text-input id="simple-form-name-01" required name="simple-form-name-01" aria-describedby="simple-form-name-01-helper" />
  </pf-form-group>
  <pf-action-group>
    <pf-button type="submit" variant="primary">Submit</pf-button>
    <pf-button variant="link">Cancel</pf-button>
  </pf-action-group>
</pf-form>`},{default:a(()=>[e(c,null,{default:a(()=>[e(l,{label:"Name",required:"","field-id":"simple-form-name-01","helper-text":"Please provide your full name"},{"label-icon":a(()=>[e(_,null,{content:a(()=>[r(' Several patterns can be added in Filename mask with "," delimiter. Example: /home/*/mail/,/home/*/tmp,*.php ')]),default:a(()=>[e(d(N))]),_:1})]),default:a(()=>[e(i,{id:"simple-form-name-01",required:"",name:"simple-form-name-01","aria-describedby":"simple-form-name-01-helper"})]),_:1}),e(F,null,{default:a(()=>[e(p,{type:"submit",variant:"primary"},{default:a(()=>[r("Submit")]),_:1}),e(p,{variant:"link"},{default:a(()=>[r("Cancel")]),_:1})]),_:1})]),_:1})]),_:1}),e(g,{title:"Invalid with form alert",source:`<pf-form>
  <pf-form-group label="Age" label-info="Additional label info" field-id="age" helper-text-invalid="Age has to be a number">
    <template v-if="age === ''" #helperText>
      Please enter your age
    </template>
    <template #helper-text-icon>
      <circle-exclamation-icon />
    </template>
    <template #helper-text-invalid-icon>
      <circle-exclamation-icon />
    </template>
    <pf-text-input id="age" v-model="age" pattern="[0-9]+" required name="age" aria-describedby="age" />
  </pf-form-group>
  <pf-form-group label="Description" field-id="description" helper-text-invalid="No emails allowed in the description">
    <template #helper-text-invalid-icon>
      <circle-exclamation-icon />
    </template>
    <pf-textarea id="description" v-model="description" pattern="(?!.*[A-Za-z0-9]@[A-Za-z].*).*" name="description" aria-describedby="description" spellcheck="false" />
  </pf-form-group>
</pf-form>`},{default:a(()=>[e(c,null,{default:a(()=>[e(l,{label:"Age","label-info":"Additional label info","field-id":"age","helper-text-invalid":"Age has to be a number"},G({"helper-text-icon":a(()=>[e(d(x))]),"helper-text-invalid-icon":a(()=>[e(d(x))]),default:a(()=>[e(i,{id:"age",modelValue:u.value,"onUpdate:modelValue":f[0]||(f[0]=b=>u.value=b),pattern:"[0-9]+",required:"",name:"age","aria-describedby":"age"},null,8,["modelValue"])]),_:2},[u.value===""?{name:"helperText",fn:a(()=>[r(" Please enter your age ")]),key:"0"}:void 0]),1024),e(l,{label:"Description","field-id":"description","helper-text-invalid":"No emails allowed in the description"},{"helper-text-invalid-icon":a(()=>[e(d(x))]),default:a(()=>[e(q,{id:"description",modelValue:h.value,"onUpdate:modelValue":f[1]||(f[1]=b=>h.value=b),pattern:"(?!.*[A-Za-z0-9]@[A-Za-z].*).*",name:"description","aria-describedby":"description",spellcheck:"false"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(g,{title:"Field group",source:`<pf-form>
  <pf-form-group label="Name" required field-id="form-expandable-field-groups-label1">
    <pf-text-input id="form-expandable-field-groups-label1" required name="form-expandable-field-groups-label1" />
  </pf-form-group>
  <pf-form-field-group expandable toggle-aria-label="Details">
    <template #header>
      <pf-form-field-group-header title="Field group 1" description="Field group 1 description.">
        <pf-button variant="link">Delete all</pf-button>
      </pf-form-field-group-header>
    </template>
    <pf-form-field-group expandable toggle-aria-label="Details">
      <template #header>
        <pf-form-field-group-header title="Nested field group 1" description="Nested field group 1 description.">
          <pf-button variant="plain" aria-label="Remove">
            <trash-icon />
          </pf-button>
        </pf-form-field-group-header>
      </template>
      <pf-form-group label="City" required field-id="form-expandable-field-groups-city">
        <pf-text-input id="form-expandable-field-groups-city" required name="form-expandable-field-groups-city" />
      </pf-form-group>
      <pf-form-group label="State" required field-id="form-expandable-field-groups-state">
        <pf-text-input id="form-expandable-field-groups-state" required name="form-expandable-field-groups-state" />
      </pf-form-group>
    </pf-form-field-group>
    <pf-form-field-group expandable toggle-aria-label="Details">
      <template #header>
        <pf-form-field-group-header title="Nested field group 2" description="Nested field group 2 description.">
          <pf-button variant="plain" aria-label="Remove">
            <trash-icon />
          </pf-button>
        </pf-form-field-group-header>
      </template>
      <pf-form-group label="City 2" required field-id="form-expandable-field-groups-city2">
        <pf-text-input id="form-expandable-field-groups-city2" required name="form-expandable-field-groups-city2" />
      </pf-form-group>
      <pf-form-group label="State 2" required field-id="form-expandable-field-groups-state2">
        <pf-text-input id="form-expandable-field-groups-state2" required name="form-expandable-field-groups-state2" />
      </pf-form-group>
    </pf-form-field-group>
    <pf-form-group label="Phone" required field-id="form-expandable-field-groups-phone">
      <pf-text-input id="form-expandable-field-groups-phone" required name="form-expandable-field-groups-phone" />
    </pf-form-group>
    <pf-form-group label="Mobile" required field-id="form-expandable-field-groups-mobile">
      <pf-text-input id="form-expandable-field-groups-mobile" required name="form-expandable-field-groups-mobile" />
    </pf-form-group>
  </pf-form-field-group>
  <pf-form-field-group toggle-aria-label="Details">
    <template #header>
      <pf-form-field-group-header title="Field group 2 (non-expandable)" description="Field group 2 description.">
        <pf-button variant="link">Delete all</pf-button>
      </pf-form-field-group-header>
    </template>
    <pf-form-group label="Username" required field-id="form-expandable-field-groups-username">
      <pf-text-input id="form-expandable-field-groups-username" required name="form-expandable-field-groups-username" />
    </pf-form-group>
    <pf-form-group label="Nickname" required field-id="form-expandable-field-groups-nickname">
      <pf-text-input id="form-expandable-field-groups-nickname" required name="form-expandable-field-groups-nickname" />
    </pf-form-group>
  </pf-form-field-group>
</pf-form>`},{default:a(()=>[e(c,null,{default:a(()=>[e(l,{label:"Name",required:"","field-id":"form-expandable-field-groups-label1"},{default:a(()=>[e(i,{id:"form-expandable-field-groups-label1",required:"",name:"form-expandable-field-groups-label1"})]),_:1}),e(s,{expandable:"","toggle-aria-label":"Details"},{header:a(()=>[e(m,{title:"Field group 1",description:"Field group 1 description."},{default:a(()=>[e(p,{variant:"link"},{default:a(()=>[r("Delete all")]),_:1})]),_:1})]),default:a(()=>[e(s,{expandable:"","toggle-aria-label":"Details"},{header:a(()=>[e(m,{title:"Nested field group 1",description:"Nested field group 1 description."},{default:a(()=>[e(p,{variant:"plain","aria-label":"Remove"},{default:a(()=>[e(d(v))]),_:1})]),_:1})]),default:a(()=>[e(l,{label:"City",required:"","field-id":"form-expandable-field-groups-city"},{default:a(()=>[e(i,{id:"form-expandable-field-groups-city",required:"",name:"form-expandable-field-groups-city"})]),_:1}),e(l,{label:"State",required:"","field-id":"form-expandable-field-groups-state"},{default:a(()=>[e(i,{id:"form-expandable-field-groups-state",required:"",name:"form-expandable-field-groups-state"})]),_:1})]),_:1}),e(s,{expandable:"","toggle-aria-label":"Details"},{header:a(()=>[e(m,{title:"Nested field group 2",description:"Nested field group 2 description."},{default:a(()=>[e(p,{variant:"plain","aria-label":"Remove"},{default:a(()=>[e(d(v))]),_:1})]),_:1})]),default:a(()=>[e(l,{label:"City 2",required:"","field-id":"form-expandable-field-groups-city2"},{default:a(()=>[e(i,{id:"form-expandable-field-groups-city2",required:"",name:"form-expandable-field-groups-city2"})]),_:1}),e(l,{label:"State 2",required:"","field-id":"form-expandable-field-groups-state2"},{default:a(()=>[e(i,{id:"form-expandable-field-groups-state2",required:"",name:"form-expandable-field-groups-state2"})]),_:1})]),_:1}),e(l,{label:"Phone",required:"","field-id":"form-expandable-field-groups-phone"},{default:a(()=>[e(i,{id:"form-expandable-field-groups-phone",required:"",name:"form-expandable-field-groups-phone"})]),_:1}),e(l,{label:"Mobile",required:"","field-id":"form-expandable-field-groups-mobile"},{default:a(()=>[e(i,{id:"form-expandable-field-groups-mobile",required:"",name:"form-expandable-field-groups-mobile"})]),_:1})]),_:1}),e(s,{"toggle-aria-label":"Details"},{header:a(()=>[e(m,{title:"Field group 2 (non-expandable)",description:"Field group 2 description."},{default:a(()=>[e(p,{variant:"link"},{default:a(()=>[r("Delete all")]),_:1})]),_:1})]),default:a(()=>[e(l,{label:"Username",required:"","field-id":"form-expandable-field-groups-username"},{default:a(()=>[e(i,{id:"form-expandable-field-groups-username",required:"",name:"form-expandable-field-groups-username"})]),_:1}),e(l,{label:"Nickname",required:"","field-id":"form-expandable-field-groups-nickname"},{default:a(()=>[e(i,{id:"form-expandable-field-groups-nickname",required:"",name:"form-expandable-field-groups-nickname"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{B as default};
