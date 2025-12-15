import{f as g,g as y,a,c as A,o as w,w as n,b as t,e as o,u as c,d as f}from"./index-CiyZyzwL.js";import{C as L}from"./check-icon-Bm0-1vAR.js";const k={name:"XIcon",height:512,width:384,svgPath:"M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z",yOffset:0,xOffset:0},I=g(k),P=y({__name:"ActionList.story",setup(x){return(N,e)=>{const u=a("component-info"),s=a("pf-button"),i=a("pf-action-list-item"),l=a("pf-action-list"),r=a("story-canvas"),m=a("pf-menu-toggle"),p=a("pf-dropdown-item"),_=a("pf-divider"),v=a("pf-dropdown"),d=a("pf-action-list-group"),b=a("doc-page");return w(),A(b,{name:"Components/ActionList.story.vue",title:"Action List"},{description:n(()=>[...e[0]||(e[0]=[f("div",{class:"markdown pf-v6-c-content"},[f("p",null,[o("An "),f("strong",null,"action list"),o(" is a group of actions, controls, or buttons with set spacing.")])],-1)])]),apidocs:n(()=>[t(u,{name:"PfActionList",doc:{name:"PfActionList",exportName:"PfActionList",displayName:"ActionList",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"iconList",description:"Flag indicating the action list contains multiple icons and item padding should be removed",required:!1,type:{name:"boolean"}}],events:[],slots:[{name:"default"}],sourceFiles:["runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/ActionList/ActionList.vue"]}}),t(u,{name:"PfActionListGroup",doc:{name:"PfActionListGroup",exportName:"PfActionListGroup",displayName:"ActionListGroup",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],events:[],slots:[{name:"default"}],sourceFiles:["runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/ActionList/ActionListGroup.vue"]}}),t(u,{name:"PfActionListItem",doc:{name:"PfActionListItem",exportName:"PfActionListItem",displayName:"ActionListItem",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],events:[],slots:[{name:"default"}],sourceFiles:["runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/ActionList/ActionListItem.vue"]}})]),default:n(()=>[t(r,{title:"Action list single group",source:`<pf-action-list>
  <pf-action-list-item>
    <pf-button variant="primary">Next</pf-button>
  </pf-action-list-item>
  <pf-action-list-item>
    <pf-button variant="secondary">Back</pf-button>
  </pf-action-list-item>
</pf-action-list>`},{default:n(()=>[t(l,null,{default:n(()=>[t(i,null,{default:n(()=>[t(s,{variant:"primary"},{default:n(()=>[...e[1]||(e[1]=[o("Next",-1)])]),_:1})]),_:1}),t(i,null,{default:n(()=>[t(s,{variant:"secondary"},{default:n(()=>[...e[2]||(e[2]=[o("Back",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),t(r,{title:"Action list single group with kebab",source:`<pf-action-list>
  <pf-action-list-item>
    <pf-button variant="primary">Next</pf-button>
  </pf-action-list-item>
  <pf-action-list-item>
    <pf-button variant="secondary">Back</pf-button>
  </pf-action-list-item>
  <pf-action-list-item>
    <pf-dropdown>
      <template #toggle>
        <pf-menu-toggle variant="plain" />
      </template>

      <pf-dropdown-item>Link</pf-dropdown-item>
      <pf-dropdown-item component="button">Action</pf-dropdown-item>
      <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
      <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
      <pf-divider />
      <pf-dropdown-item>Separated Link</pf-dropdown-item>
      <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
    </pf-dropdown>
  </pf-action-list-item>
</pf-action-list>`},{default:n(()=>[t(l,null,{default:n(()=>[t(i,null,{default:n(()=>[t(s,{variant:"primary"},{default:n(()=>[...e[3]||(e[3]=[o("Next",-1)])]),_:1})]),_:1}),t(i,null,{default:n(()=>[t(s,{variant:"secondary"},{default:n(()=>[...e[4]||(e[4]=[o("Back",-1)])]),_:1})]),_:1}),t(i,null,{default:n(()=>[t(v,null,{toggle:n(()=>[t(m,{variant:"plain"})]),default:n(()=>[t(p,null,{default:n(()=>[...e[5]||(e[5]=[o("Link",-1)])]),_:1}),t(p,{component:"button"},{default:n(()=>[...e[6]||(e[6]=[o("Action",-1)])]),_:1}),t(p,{disabled:""},{default:n(()=>[...e[7]||(e[7]=[o("Disabled Link",-1)])]),_:1}),t(p,{disabled:"",component:"button"},{default:n(()=>[...e[8]||(e[8]=[o("Disabled Action",-1)])]),_:1}),t(_),t(p,null,{default:n(()=>[...e[9]||(e[9]=[o("Separated Link",-1)])]),_:1}),t(p,{component:"button"},{default:n(()=>[...e[10]||(e[10]=[o("Separated Action",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(r,{title:"Action list with icons",source:`<pf-action-list icon-list>
  <pf-action-list-item>
    <pf-button variant="plain">
      <template #icon>
        <x-icon />
      </template>
    </pf-button>
  </pf-action-list-item>
  <pf-action-list-item>
    <pf-button variant="plain">
      <template #icon>
        <check-icon />
      </template>
    </pf-button>
  </pf-action-list-item>
</pf-action-list>`},{default:n(()=>[t(l,{"icon-list":""},{default:n(()=>[t(i,null,{default:n(()=>[t(s,{variant:"plain"},{icon:n(()=>[t(c(I))]),_:1})]),_:1}),t(i,null,{default:n(()=>[t(s,{variant:"plain"},{icon:n(()=>[t(c(L))]),_:1})]),_:1})]),_:1})]),_:1}),t(r,{title:"Action list multiple groups",source:`<pf-action-list>
  <pf-action-list-group>
    <pf-action-list-item>
      <pf-button variant="primary">Next</pf-button>
    </pf-action-list-item>
    <pf-action-list-item>
      <pf-button variant="secondary">Back</pf-button>
    </pf-action-list-item>
  </pf-action-list-group>
  <pf-action-list-group>
    <pf-action-list-item>
      <pf-button variant="primary">Submit</pf-button>
    </pf-action-list-item>
    <pf-action-list-item>
      <pf-button variant="secondary">Cancel</pf-button>
    </pf-action-list-item>
  </pf-action-list-group>
</pf-action-list>`},{default:n(()=>[t(l,null,{default:n(()=>[t(d,null,{default:n(()=>[t(i,null,{default:n(()=>[t(s,{variant:"primary"},{default:n(()=>[...e[11]||(e[11]=[o("Next",-1)])]),_:1})]),_:1}),t(i,null,{default:n(()=>[t(s,{variant:"secondary"},{default:n(()=>[...e[12]||(e[12]=[o("Back",-1)])]),_:1})]),_:1})]),_:1}),t(d,null,{default:n(()=>[t(i,null,{default:n(()=>[t(s,{variant:"primary"},{default:n(()=>[...e[13]||(e[13]=[o("Submit",-1)])]),_:1})]),_:1}),t(i,null,{default:n(()=>[t(s,{variant:"secondary"},{default:n(()=>[...e[14]||(e[14]=[o("Cancel",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{P as default};
