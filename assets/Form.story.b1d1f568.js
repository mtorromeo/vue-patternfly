import{H as T}from"./help-icon.40e59fb8.js";import{c as v}from"./createIcon.06684db3.js";import{e as w,r as h,a as i,c as C,w as l,o as D,b as e,u as p,m as A,d as o,j as a}from"./index.7a97aefb.js";const F={name:"TrashIcon",height:512,width:448,svgPath:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z",yOffset:0,xOffset:0},S=v(F);var _=S;const z={name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},V=v(z);var b=V;const P=o("div",{class:"markdown pf-c-content"},[o("p",null,[a("A "),o("strong",null,"form"),a(" is a group of elements used to collect information from a user in a variety of contexts including in a modal, in a wizard, or on a page. Use cases for forms include tasks reliant on user-inputted information for completion like logging in, registering, configuring settings, or completing surveys.")]),o("p",null,"Use forms to accomplish tasks reliant on user-inputted information like logging in, registering for accounts or services, configuring settings, or completing surveys."),o("p",null,[a("See full "),o("a",{href:"https://www.patternfly.org/v4/components/form/design-guidelines"},"Design guidelines"),a(" on the official patternfly documentation.")]),o("h2",{class:"pf-c-title"},"Differences from patternfly-react"),o("ul",null,[o("li",null,[a("The "),o("code",null,"novalidate"),a(" attribute is not implicitly applied to the form but you can still add it yourself. This makes "),o("code",null,"pf-form"),a(" usable with the native form validation technique.")]),o("li",null,[a("Allowed overriding the "),o("code",null,"component"),a(" used by the form. A typical use-case is when you have a parent form tag already present and you only need "),o("code",null,"pf-form"),a(" to apply the patternfly layout to its children.")]),o("li",null,[a("There is no FormHelperText component. You can instead use the "),o("code",null,"helper-text"),a(" prop or the "),o("code",null,"helperText"),a(" and "),o("code",null,"helperTextIcon"),a(" slots on "),o("code",null,"pf-form-group"),a(".")])]),o("p",null,[a("See "),o("a",{href:"#/"},"common differences from patternfly-react"),a(".")])],-1),H=a(' Several patterns can be added in Filename mask with "," delimiter. Example: /home/*/mail/,/home/*/tmp,*.php '),E=a("Submit"),U=a("Cancel"),M=a(" Please enter your age "),B=a("Delete all"),O=a("Delete all"),Y=w({setup(R){const u=h("Five"),x=h(`Nice description
my email: mail@mail.com`);return(Z,d)=>{const y=i("component-title"),q=i("pf-tooltip"),n=i("pf-text-input"),r=i("pf-form-group"),t=i("pf-button"),k=i("pf-action-group"),s=i("pf-form"),c=i("story-canvas"),I=i("pf-textarea"),f=i("pf-form-field-group-header"),m=i("pf-form-field-group"),N=i("doc-page");return D(),C(N,{title:"Form"},{default:l(()=>[e(y,{name:"pf-form"}),P,e(c,{title:"Basic",source:`<pf-form>
  <pf-form-group label="Name" required field-id="simple-form-name-01" helper-text="Please provide your full name">
    <template #labelIcon>
      <pf-tooltip>
        <template #content>
          Several patterns can be added in Filename mask with "," delimiter.
          Example:
          /home/*/mail/,/home/*/tmp,*.php
        </template>
        <help-icon no-vertical-align />
      </pf-tooltip>
    </template>
    <pf-text-input id="simple-form-name-01" required name="simple-form-name-01" aria-describedby="simple-form-name-01-helper" />
  </pf-form-group>
  <pf-action-group>
    <pf-button variant="primary">Submit</pf-button>
    <pf-button variant="link">Cancel</pf-button>
  </pf-action-group>
</pf-form>`},{default:l(()=>[e(s,null,{default:l(()=>[e(r,{label:"Name",required:"","field-id":"simple-form-name-01","helper-text":"Please provide your full name"},{labelIcon:l(()=>[e(q,null,{content:l(()=>[H]),default:l(()=>[e(p(T),{"no-vertical-align":""})]),_:1})]),default:l(()=>[e(n,{id:"simple-form-name-01",required:"",name:"simple-form-name-01","aria-describedby":"simple-form-name-01-helper"})]),_:1}),e(k,null,{default:l(()=>[e(t,{variant:"primary"},{default:l(()=>[E]),_:1}),e(t,{variant:"link"},{default:l(()=>[U]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{title:"Invalid with form alert",source:`<pf-form>
  <pf-form-group label="Age" label-info="Additional label info" field-id="age" helper-text-invalid="Age has to be a number">
    <template v-if="age === ''" #helperText>
      Please enter your age
    </template>
    <template #helperTextIcon>
      <exclamation-circle-icon />
    </template>
    <template #helperTextInvalidIcon>
      <exclamation-circle-icon />
    </template>
    <pf-text-input id="age" v-model="age" pattern="[0-9]+" required name="age" aria-describedby="age" />
  </pf-form-group>
  <pf-form-group label="Description" field-id="description" helper-text-invalid="No emails allowed in the description">
    <template #helperTextInvalidIcon>
      <exclamation-circle-icon />
    </template>
    <pf-textarea id="description" v-model="description" pattern="(?!.*[A-Za-z0-9]@[A-Za-z].*).*" name="description" aria-describedby="description" spellcheck="false" />
  </pf-form-group>
</pf-form>`},{default:l(()=>[e(s,null,{default:l(()=>[e(r,{label:"Age","label-info":"Additional label info","field-id":"age","helper-text-invalid":"Age has to be a number"},A({helperTextIcon:l(()=>[e(p(b))]),helperTextInvalidIcon:l(()=>[e(p(b))]),default:l(()=>[e(n,{id:"age",modelValue:u.value,"onUpdate:modelValue":d[0]||(d[0]=g=>u.value=g),pattern:"[0-9]+",required:"",name:"age","aria-describedby":"age"},null,8,["modelValue"])]),_:2},[u.value===""?{name:"helperText",fn:l(()=>[M])}:void 0]),1024),e(r,{label:"Description","field-id":"description","helper-text-invalid":"No emails allowed in the description"},{helperTextInvalidIcon:l(()=>[e(p(b))]),default:l(()=>[e(I,{id:"description",modelValue:x.value,"onUpdate:modelValue":d[1]||(d[1]=g=>x.value=g),pattern:"(?!.*[A-Za-z0-9]@[A-Za-z].*).*",name:"description","aria-describedby":"description",spellcheck:"false"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(c,{title:"Field group",source:`<pf-form>
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
</pf-form>`},{default:l(()=>[e(s,null,{default:l(()=>[e(r,{label:"Name",required:"","field-id":"form-expandable-field-groups-label1"},{default:l(()=>[e(n,{id:"form-expandable-field-groups-label1",required:"",name:"form-expandable-field-groups-label1"})]),_:1}),e(m,{expandable:"","toggle-aria-label":"Details"},{header:l(()=>[e(f,{title:"Field group 1",description:"Field group 1 description."},{default:l(()=>[e(t,{variant:"link"},{default:l(()=>[B]),_:1})]),_:1})]),default:l(()=>[e(m,{expandable:"","toggle-aria-label":"Details"},{header:l(()=>[e(f,{title:"Nested field group 1",description:"Nested field group 1 description."},{default:l(()=>[e(t,{variant:"plain","aria-label":"Remove"},{default:l(()=>[e(p(_))]),_:1})]),_:1})]),default:l(()=>[e(r,{label:"City",required:"","field-id":"form-expandable-field-groups-city"},{default:l(()=>[e(n,{id:"form-expandable-field-groups-city",required:"",name:"form-expandable-field-groups-city"})]),_:1}),e(r,{label:"State",required:"","field-id":"form-expandable-field-groups-state"},{default:l(()=>[e(n,{id:"form-expandable-field-groups-state",required:"",name:"form-expandable-field-groups-state"})]),_:1})]),_:1}),e(m,{expandable:"","toggle-aria-label":"Details"},{header:l(()=>[e(f,{title:"Nested field group 2",description:"Nested field group 2 description."},{default:l(()=>[e(t,{variant:"plain","aria-label":"Remove"},{default:l(()=>[e(p(_))]),_:1})]),_:1})]),default:l(()=>[e(r,{label:"City 2",required:"","field-id":"form-expandable-field-groups-city2"},{default:l(()=>[e(n,{id:"form-expandable-field-groups-city2",required:"",name:"form-expandable-field-groups-city2"})]),_:1}),e(r,{label:"State 2",required:"","field-id":"form-expandable-field-groups-state2"},{default:l(()=>[e(n,{id:"form-expandable-field-groups-state2",required:"",name:"form-expandable-field-groups-state2"})]),_:1})]),_:1}),e(r,{label:"Phone",required:"","field-id":"form-expandable-field-groups-phone"},{default:l(()=>[e(n,{id:"form-expandable-field-groups-phone",required:"",name:"form-expandable-field-groups-phone"})]),_:1}),e(r,{label:"Mobile",required:"","field-id":"form-expandable-field-groups-mobile"},{default:l(()=>[e(n,{id:"form-expandable-field-groups-mobile",required:"",name:"form-expandable-field-groups-mobile"})]),_:1})]),_:1}),e(m,{"toggle-aria-label":"Details"},{header:l(()=>[e(f,{title:"Field group 2 (non-expandable)",description:"Field group 2 description."},{default:l(()=>[e(t,{variant:"link"},{default:l(()=>[O]),_:1})]),_:1})]),default:l(()=>[e(r,{label:"Username",required:"","field-id":"form-expandable-field-groups-username"},{default:l(()=>[e(n,{id:"form-expandable-field-groups-username",required:"",name:"form-expandable-field-groups-username"})]),_:1}),e(r,{label:"Nickname",required:"","field-id":"form-expandable-field-groups-nickname"},{default:l(()=>[e(n,{id:"form-expandable-field-groups-nickname",required:"",name:"form-expandable-field-groups-nickname"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{Y as default};
