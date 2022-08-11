import{H as N}from"./help-icon.a44d73ae.js";import{c as v}from"./createIcon.5cfab69a.js";import{e as T,r as h,a as t,c as w,w as l,o as D,b as e,u as p,m as F,d as o,j as a}from"./index.d06ccf2e.js";const A={name:"TrashIcon",height:512,width:448,svgPath:"M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z",yOffset:0,xOffset:0},S=v(A),_=S,z={name:"CircleExclamationIcon",height:512,width:512,svgPath:"M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z",yOffset:0,xOffset:0},V=v(z),b=V,H=o("div",{class:"markdown pf-c-content"},[o("p",null,[a("A "),o("strong",null,"form"),a(" is a group of elements used to collect information from a user in a variety of contexts including in a modal, in a wizard, or on a page. Use cases for forms include tasks reliant on user-inputted information for completion like logging in, registering, configuring settings, or completing surveys.")]),o("p",null,"Use forms to accomplish tasks reliant on user-inputted information like logging in, registering for accounts or services, configuring settings, or completing surveys."),o("p",null,[a("See full "),o("a",{href:"https://www.patternfly.org/v4/components/form/design-guidelines"},"Design guidelines"),a(" on the official patternfly documentation.")]),o("h2",{class:"pf-c-title"},"Differences from patternfly-react"),o("ul",null,[o("li",null,[a("The "),o("code",null,"novalidate"),a(" attribute is not implicitly applied to the form but you can still add it yourself. This makes "),o("code",null,"pf-form"),a(" usable with the native form validation technique.")]),o("li",null,[a("Allowed overriding the "),o("code",null,"component"),a(" used by the form. A typical use-case is when you have a parent form tag already present and you only need "),o("code",null,"pf-form"),a(" to apply the patternfly layout to its children.")]),o("li",null,[a("There is no FormHelperText component. You can instead use the "),o("code",null,"helper-text"),a(" prop or the "),o("code",null,"helperText"),a(" and "),o("code",null,"helperTextIcon"),a(" slots on "),o("code",null,"pf-form-group"),a(".")])]),o("p",null,[a("See "),o("a",{href:"#/"},"common differences from patternfly-react"),a(".")])],-1),P=a(' Several patterns can be added in Filename mask with "," delimiter. Example: /home/*/mail/,/home/*/tmp,*.php '),M=a("Submit"),E=a("Cancel"),U=a(" Please enter your age "),B=a("Delete all"),L=a("Delete all"),Y=T({__name:"Form.story",setup(O){const m=h("Five"),x=h(`Nice description
my email: mail@mail.com`);return(R,d)=>{const y=t("component-title"),q=t("pf-tooltip"),r=t("pf-text-input"),i=t("pf-form-group"),n=t("pf-button"),k=t("pf-action-group"),s=t("pf-form"),c=t("story-canvas"),C=t("pf-textarea"),f=t("pf-form-field-group-header"),u=t("pf-form-field-group"),I=t("doc-page");return D(),w(I,{title:"Form"},{default:l(()=>[e(y,{name:"pf-form"}),H,e(c,{title:"Basic",source:`<pf-form>
  <pf-form-group label="Name" required field-id="simple-form-name-01" helper-text="Please provide your full name">
    <template #labelIcon>
      <pf-tooltip>
        <template #content>
          Several patterns can be added in Filename mask with "," delimiter.
          Example:
          /home/*/mail/,/home/*/tmp,*.php
        </template>
        <help-icon no-vertical-align ></help-icon>
      </pf-tooltip>
    </template>
    <pf-text-input id="simple-form-name-01" required name="simple-form-name-01" aria-describedby="simple-form-name-01-helper" ></pf-text-input>
  </pf-form-group>
  <pf-action-group>
    <pf-button variant="primary">Submit</pf-button>
    <pf-button variant="link">Cancel</pf-button>
  </pf-action-group>
</pf-form>`},{default:l(()=>[e(s,null,{default:l(()=>[e(i,{label:"Name",required:"","field-id":"simple-form-name-01","helper-text":"Please provide your full name"},{labelIcon:l(()=>[e(q,null,{content:l(()=>[P]),default:l(()=>[e(p(N),{"no-vertical-align":""})]),_:1})]),default:l(()=>[e(r,{id:"simple-form-name-01",required:"",name:"simple-form-name-01","aria-describedby":"simple-form-name-01-helper"})]),_:1}),e(k,null,{default:l(()=>[e(n,{variant:"primary"},{default:l(()=>[M]),_:1}),e(n,{variant:"link"},{default:l(()=>[E]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{title:"Invalid with form alert",source:`<pf-form>
  <pf-form-group label="Age" label-info="Additional label info" field-id="age" helper-text-invalid="Age has to be a number">
    <template v-if="age === ''" #helperText>
      Please enter your age
    </template>
    <template #helperTextIcon>
      <circle-exclamation-icon></circle-exclamation-icon>
    </template>
    <template #helperTextInvalidIcon>
      <circle-exclamation-icon></circle-exclamation-icon>
    </template>
    <pf-text-input id="age" v-model="age" pattern="[0-9]+" required name="age" aria-describedby="age" ></pf-text-input>
  </pf-form-group>
  <pf-form-group label="Description" field-id="description" helper-text-invalid="No emails allowed in the description">
    <template #helperTextInvalidIcon>
      <circle-exclamation-icon></circle-exclamation-icon>
    </template>
    <pf-textarea id="description" v-model="description" pattern="(?!.*[A-Za-z0-9]@[A-Za-z].*).*" name="description" aria-describedby="description" spellcheck="false" ></pf-textarea>
  </pf-form-group>
</pf-form>`},{default:l(()=>[e(s,null,{default:l(()=>[e(i,{label:"Age","label-info":"Additional label info","field-id":"age","helper-text-invalid":"Age has to be a number"},F({helperTextIcon:l(()=>[e(p(b))]),helperTextInvalidIcon:l(()=>[e(p(b))]),default:l(()=>[e(r,{id:"age",modelValue:m.value,"onUpdate:modelValue":d[0]||(d[0]=g=>m.value=g),pattern:"[0-9]+",required:"",name:"age","aria-describedby":"age"},null,8,["modelValue"])]),_:2},[m.value===""?{name:"helperText",fn:l(()=>[U])}:void 0]),1024),e(i,{label:"Description","field-id":"description","helper-text-invalid":"No emails allowed in the description"},{helperTextInvalidIcon:l(()=>[e(p(b))]),default:l(()=>[e(C,{id:"description",modelValue:x.value,"onUpdate:modelValue":d[1]||(d[1]=g=>x.value=g),pattern:"(?!.*[A-Za-z0-9]@[A-Za-z].*).*",name:"description","aria-describedby":"description",spellcheck:"false"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(c,{title:"Field group",source:`<pf-form>
  <pf-form-group label="Name" required field-id="form-expandable-field-groups-label1">
    <pf-text-input id="form-expandable-field-groups-label1" required name="form-expandable-field-groups-label1" ></pf-text-input>
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
            <trash-icon></trash-icon>
          </pf-button>
        </pf-form-field-group-header>
      </template>
      <pf-form-group label="City" required field-id="form-expandable-field-groups-city">
        <pf-text-input id="form-expandable-field-groups-city" required name="form-expandable-field-groups-city" ></pf-text-input>
      </pf-form-group>
      <pf-form-group label="State" required field-id="form-expandable-field-groups-state">
        <pf-text-input id="form-expandable-field-groups-state" required name="form-expandable-field-groups-state" ></pf-text-input>
      </pf-form-group>
    </pf-form-field-group>
    <pf-form-field-group expandable toggle-aria-label="Details">
      <template #header>
        <pf-form-field-group-header title="Nested field group 2" description="Nested field group 2 description.">
          <pf-button variant="plain" aria-label="Remove">
            <trash-icon></trash-icon>
          </pf-button>
        </pf-form-field-group-header>
      </template>
      <pf-form-group label="City 2" required field-id="form-expandable-field-groups-city2">
        <pf-text-input id="form-expandable-field-groups-city2" required name="form-expandable-field-groups-city2" ></pf-text-input>
      </pf-form-group>
      <pf-form-group label="State 2" required field-id="form-expandable-field-groups-state2">
        <pf-text-input id="form-expandable-field-groups-state2" required name="form-expandable-field-groups-state2" ></pf-text-input>
      </pf-form-group>
    </pf-form-field-group>
    <pf-form-group label="Phone" required field-id="form-expandable-field-groups-phone">
      <pf-text-input id="form-expandable-field-groups-phone" required name="form-expandable-field-groups-phone" ></pf-text-input>
    </pf-form-group>
    <pf-form-group label="Mobile" required field-id="form-expandable-field-groups-mobile">
      <pf-text-input id="form-expandable-field-groups-mobile" required name="form-expandable-field-groups-mobile" ></pf-text-input>
    </pf-form-group>
  </pf-form-field-group>
  <pf-form-field-group toggle-aria-label="Details">
    <template #header>
      <pf-form-field-group-header title="Field group 2 (non-expandable)" description="Field group 2 description.">
        <pf-button variant="link">Delete all</pf-button>
      </pf-form-field-group-header>
    </template>
    <pf-form-group label="Username" required field-id="form-expandable-field-groups-username">
      <pf-text-input id="form-expandable-field-groups-username" required name="form-expandable-field-groups-username" ></pf-text-input>
    </pf-form-group>
    <pf-form-group label="Nickname" required field-id="form-expandable-field-groups-nickname">
      <pf-text-input id="form-expandable-field-groups-nickname" required name="form-expandable-field-groups-nickname" ></pf-text-input>
    </pf-form-group>
  </pf-form-field-group>
</pf-form>`},{default:l(()=>[e(s,null,{default:l(()=>[e(i,{label:"Name",required:"","field-id":"form-expandable-field-groups-label1"},{default:l(()=>[e(r,{id:"form-expandable-field-groups-label1",required:"",name:"form-expandable-field-groups-label1"})]),_:1}),e(u,{expandable:"","toggle-aria-label":"Details"},{header:l(()=>[e(f,{title:"Field group 1",description:"Field group 1 description."},{default:l(()=>[e(n,{variant:"link"},{default:l(()=>[B]),_:1})]),_:1})]),default:l(()=>[e(u,{expandable:"","toggle-aria-label":"Details"},{header:l(()=>[e(f,{title:"Nested field group 1",description:"Nested field group 1 description."},{default:l(()=>[e(n,{variant:"plain","aria-label":"Remove"},{default:l(()=>[e(p(_))]),_:1})]),_:1})]),default:l(()=>[e(i,{label:"City",required:"","field-id":"form-expandable-field-groups-city"},{default:l(()=>[e(r,{id:"form-expandable-field-groups-city",required:"",name:"form-expandable-field-groups-city"})]),_:1}),e(i,{label:"State",required:"","field-id":"form-expandable-field-groups-state"},{default:l(()=>[e(r,{id:"form-expandable-field-groups-state",required:"",name:"form-expandable-field-groups-state"})]),_:1})]),_:1}),e(u,{expandable:"","toggle-aria-label":"Details"},{header:l(()=>[e(f,{title:"Nested field group 2",description:"Nested field group 2 description."},{default:l(()=>[e(n,{variant:"plain","aria-label":"Remove"},{default:l(()=>[e(p(_))]),_:1})]),_:1})]),default:l(()=>[e(i,{label:"City 2",required:"","field-id":"form-expandable-field-groups-city2"},{default:l(()=>[e(r,{id:"form-expandable-field-groups-city2",required:"",name:"form-expandable-field-groups-city2"})]),_:1}),e(i,{label:"State 2",required:"","field-id":"form-expandable-field-groups-state2"},{default:l(()=>[e(r,{id:"form-expandable-field-groups-state2",required:"",name:"form-expandable-field-groups-state2"})]),_:1})]),_:1}),e(i,{label:"Phone",required:"","field-id":"form-expandable-field-groups-phone"},{default:l(()=>[e(r,{id:"form-expandable-field-groups-phone",required:"",name:"form-expandable-field-groups-phone"})]),_:1}),e(i,{label:"Mobile",required:"","field-id":"form-expandable-field-groups-mobile"},{default:l(()=>[e(r,{id:"form-expandable-field-groups-mobile",required:"",name:"form-expandable-field-groups-mobile"})]),_:1})]),_:1}),e(u,{"toggle-aria-label":"Details"},{header:l(()=>[e(f,{title:"Field group 2 (non-expandable)",description:"Field group 2 description."},{default:l(()=>[e(n,{variant:"link"},{default:l(()=>[L]),_:1})]),_:1})]),default:l(()=>[e(i,{label:"Username",required:"","field-id":"form-expandable-field-groups-username"},{default:l(()=>[e(r,{id:"form-expandable-field-groups-username",required:"",name:"form-expandable-field-groups-username"})]),_:1}),e(i,{label:"Nickname",required:"","field-id":"form-expandable-field-groups-nickname"},{default:l(()=>[e(r,{id:"form-expandable-field-groups-nickname",required:"",name:"form-expandable-field-groups-nickname"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{Y as default};
