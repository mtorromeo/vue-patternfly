import{H as w}from"./help-icon-39174c3d.js";import{c as D}from"./createIcon-9e81b421.js";import{C as b}from"./circle-exclamation-icon-f4d7212d.js";import{e as F,r as h,a as t,o as C,c as A,w as l,b as e,g as a,u as p,s as T,d as i}from"./index-bc10557f.js";const S={name:"TrashIcon",height:512,width:448,svgPath:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z",yOffset:0,xOffset:0},H=D(S),_=H,I=i("div",{class:"markdown pf-v5-c-content"},[i("p",null,[a("A "),i("strong",null,"form"),a(" is a group of elements used to collect information from a user in a variety of contexts including in a modal, in a wizard, or on a page. Use cases for forms include tasks reliant on user-inputted information for completion like logging in, registering, configuring settings, or completing surveys.")]),i("p",null,"Use forms to accomplish tasks reliant on user-inputted information like logging in, registering for accounts or services, configuring settings, or completing surveys."),i("p",null,[a("See full "),i("a",{href:"https://www.patternfly.org/v4/components/form/design-guidelines"},"Design guidelines"),a(" on the official patternfly documentation.")]),i("h2",{class:"pf-v5-c-title"},"Differences from patternfly-react"),i("ul",null,[i("li",null,[a("The "),i("code",null,"novalidate"),a(" attribute is not implicitly applied to the form but you can still add it yourself. This makes "),i("code",null,"pf-form"),a(" usable with the native form validation technique.")]),i("li",null,[a("Allowed overriding the "),i("code",null,"component"),a(" used by the form. A typical use-case is when you have a parent form tag already present and you only need "),i("code",null,"pf-form"),a(" to apply the patternfly layout to its children.")]),i("li",null,[a("There is no FormHelperText component. You can instead use the "),i("code",null,"helper-text"),a(" prop or the "),i("code",null,"helperText"),a(" and "),i("code",null,"helperTextIcon"),a(" slots on "),i("code",null,"pf-form-group"),a(".")])]),i("p",null,[a("See "),i("a",{href:"#/"},"common differences from patternfly-react"),a(".")]),i("h2",{class:"pf-v5-c-title"},"Examples")],-1),M=F({__name:"Form.story",setup(V){const m=h("Five"),x=h(`Nice description
my email: mail@mail.com`);return(z,d)=>{const v=t("component-title"),y=t("pf-tooltip"),o=t("pf-text-input"),r=t("pf-form-group"),n=t("pf-button"),q=t("pf-action-group"),s=t("pf-form"),c=t("story-canvas"),k=t("pf-textarea"),f=t("pf-form-field-group-header"),u=t("pf-form-field-group"),N=t("doc-page");return C(),A(N,{title:"Form"},{default:l(()=>[e(v,{name:"pf-form"}),I,e(c,{title:"Basic",source:`<pf-form>
  <pf-form-group label="Name" required field-id="simple-form-name-01" helper-text="Please provide your full name">
    <template #label-icon>
      <pf-tooltip>
        <template #content>
          Several patterns can be added in Filename mask with "," delimiter.
          Example:
          /home/*/mail/,/home/*/tmp,*.php
        </template>
        <help-icon></help-icon>
      </pf-tooltip>
    </template>
    <pf-text-input id="simple-form-name-01" required name="simple-form-name-01" aria-describedby="simple-form-name-01-helper" ></pf-text-input>
  </pf-form-group>
  <pf-action-group>
    <pf-button type="submit" variant="primary">Submit</pf-button>
    <pf-button variant="link">Cancel</pf-button>
  </pf-action-group>
</pf-form>`},{default:l(()=>[e(s,null,{default:l(()=>[e(r,{label:"Name",required:"","field-id":"simple-form-name-01","helper-text":"Please provide your full name"},{"label-icon":l(()=>[e(y,null,{content:l(()=>[a(' Several patterns can be added in Filename mask with "," delimiter. Example: /home/*/mail/,/home/*/tmp,*.php ')]),default:l(()=>[e(p(w))]),_:1})]),default:l(()=>[e(o,{id:"simple-form-name-01",required:"",name:"simple-form-name-01","aria-describedby":"simple-form-name-01-helper"})]),_:1}),e(q,null,{default:l(()=>[e(n,{type:"submit",variant:"primary"},{default:l(()=>[a("Submit")]),_:1}),e(n,{variant:"link"},{default:l(()=>[a("Cancel")]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{title:"Invalid with form alert",source:`<pf-form>
  <pf-form-group label="Age" label-info="Additional label info" field-id="age" helper-text-invalid="Age has to be a number">
    <template v-if="age === ''" #helperText>
      Please enter your age
    </template>
    <template #helper-text-icon>
      <circle-exclamation-icon></circle-exclamation-icon>
    </template>
    <template #helper-text-invalid-icon>
      <circle-exclamation-icon></circle-exclamation-icon>
    </template>
    <pf-text-input id="age" v-model="age" pattern="[0-9]+" required name="age" aria-describedby="age" ></pf-text-input>
  </pf-form-group>
  <pf-form-group label="Description" field-id="description" helper-text-invalid="No emails allowed in the description">
    <template #helper-text-invalid-icon>
      <circle-exclamation-icon></circle-exclamation-icon>
    </template>
    <pf-textarea id="description" v-model="description" pattern="(?!.*[A-Za-z0-9]@[A-Za-z].*).*" name="description" aria-describedby="description" spellcheck="false" ></pf-textarea>
  </pf-form-group>
</pf-form>`},{default:l(()=>[e(s,null,{default:l(()=>[e(r,{label:"Age","label-info":"Additional label info","field-id":"age","helper-text-invalid":"Age has to be a number"},T({"helper-text-icon":l(()=>[e(p(b))]),"helper-text-invalid-icon":l(()=>[e(p(b))]),default:l(()=>[e(o,{id:"age",modelValue:m.value,"onUpdate:modelValue":d[0]||(d[0]=g=>m.value=g),pattern:"[0-9]+",required:"",name:"age","aria-describedby":"age"},null,8,["modelValue"])]),_:2},[m.value===""?{name:"helperText",fn:l(()=>[a(" Please enter your age ")]),key:"0"}:void 0]),1024),e(r,{label:"Description","field-id":"description","helper-text-invalid":"No emails allowed in the description"},{"helper-text-invalid-icon":l(()=>[e(p(b))]),default:l(()=>[e(k,{id:"description",modelValue:x.value,"onUpdate:modelValue":d[1]||(d[1]=g=>x.value=g),pattern:"(?!.*[A-Za-z0-9]@[A-Za-z].*).*",name:"description","aria-describedby":"description",spellcheck:"false"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(c,{title:"Field group",source:`<pf-form>
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
</pf-form>`},{default:l(()=>[e(s,null,{default:l(()=>[e(r,{label:"Name",required:"","field-id":"form-expandable-field-groups-label1"},{default:l(()=>[e(o,{id:"form-expandable-field-groups-label1",required:"",name:"form-expandable-field-groups-label1"})]),_:1}),e(u,{expandable:"","toggle-aria-label":"Details"},{header:l(()=>[e(f,{title:"Field group 1",description:"Field group 1 description."},{default:l(()=>[e(n,{variant:"link"},{default:l(()=>[a("Delete all")]),_:1})]),_:1})]),default:l(()=>[e(u,{expandable:"","toggle-aria-label":"Details"},{header:l(()=>[e(f,{title:"Nested field group 1",description:"Nested field group 1 description."},{default:l(()=>[e(n,{variant:"plain","aria-label":"Remove"},{default:l(()=>[e(p(_))]),_:1})]),_:1})]),default:l(()=>[e(r,{label:"City",required:"","field-id":"form-expandable-field-groups-city"},{default:l(()=>[e(o,{id:"form-expandable-field-groups-city",required:"",name:"form-expandable-field-groups-city"})]),_:1}),e(r,{label:"State",required:"","field-id":"form-expandable-field-groups-state"},{default:l(()=>[e(o,{id:"form-expandable-field-groups-state",required:"",name:"form-expandable-field-groups-state"})]),_:1})]),_:1}),e(u,{expandable:"","toggle-aria-label":"Details"},{header:l(()=>[e(f,{title:"Nested field group 2",description:"Nested field group 2 description."},{default:l(()=>[e(n,{variant:"plain","aria-label":"Remove"},{default:l(()=>[e(p(_))]),_:1})]),_:1})]),default:l(()=>[e(r,{label:"City 2",required:"","field-id":"form-expandable-field-groups-city2"},{default:l(()=>[e(o,{id:"form-expandable-field-groups-city2",required:"",name:"form-expandable-field-groups-city2"})]),_:1}),e(r,{label:"State 2",required:"","field-id":"form-expandable-field-groups-state2"},{default:l(()=>[e(o,{id:"form-expandable-field-groups-state2",required:"",name:"form-expandable-field-groups-state2"})]),_:1})]),_:1}),e(r,{label:"Phone",required:"","field-id":"form-expandable-field-groups-phone"},{default:l(()=>[e(o,{id:"form-expandable-field-groups-phone",required:"",name:"form-expandable-field-groups-phone"})]),_:1}),e(r,{label:"Mobile",required:"","field-id":"form-expandable-field-groups-mobile"},{default:l(()=>[e(o,{id:"form-expandable-field-groups-mobile",required:"",name:"form-expandable-field-groups-mobile"})]),_:1})]),_:1}),e(u,{"toggle-aria-label":"Details"},{header:l(()=>[e(f,{title:"Field group 2 (non-expandable)",description:"Field group 2 description."},{default:l(()=>[e(n,{variant:"link"},{default:l(()=>[a("Delete all")]),_:1})]),_:1})]),default:l(()=>[e(r,{label:"Username",required:"","field-id":"form-expandable-field-groups-username"},{default:l(()=>[e(o,{id:"form-expandable-field-groups-username",required:"",name:"form-expandable-field-groups-username"})]),_:1}),e(r,{label:"Nickname",required:"","field-id":"form-expandable-field-groups-nickname"},{default:l(()=>[e(o,{id:"form-expandable-field-groups-nickname",required:"",name:"form-expandable-field-groups-nickname"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{M as default};
