import{f as g,g as w,a,c as k,o as y,w as n,b as t,e as i,u as c,d as u}from"./index-Duu062da.js";import{C as A}from"./check-icon-BDpQyjY9.js";const L={name:"XIcon",height:512,width:384,svgPath:"M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z",yOffset:0,xOffset:0},x=g(L),I=w({__name:"ActionList.story",setup(C){return(B,o)=>{const r=a("component-info"),p=a("pf-button"),e=a("pf-action-list-item"),s=a("pf-action-list"),f=a("story-canvas"),m=a("pf-menu-toggle"),l=a("pf-dropdown-item"),_=a("pf-divider"),b=a("pf-dropdown"),d=a("pf-action-list-group"),v=a("doc-page");return y(),k(v,{name:"Components/ActionList.story.vue",title:"Action List"},{description:n(()=>[...o[0]||(o[0]=[u("div",{class:"markdown pf-v6-c-content"},[u("p",null,[i("An "),u("strong",null,"action list"),i(" is a group of actions, controls, or buttons with set spacing.")])],-1)])]),apidocs:n(()=>[t(r,{src:"packages/core/src/components/ActionList.vue"}),t(r,{src:"packages/core/src/components/ActionListGroup.vue"}),t(r,{src:"packages/core/src/components/ActionListItem.vue"})]),default:n(()=>[t(f,{title:"Action list single group",source:`<pf-action-list>
  <pf-action-list-item>
    <pf-button variant="primary">Next</pf-button>
  </pf-action-list-item>
  <pf-action-list-item>
    <pf-button variant="secondary">Back</pf-button>
  </pf-action-list-item>
</pf-action-list>`},{default:n(()=>[t(s,null,{default:n(()=>[t(e,null,{default:n(()=>[t(p,{variant:"primary"},{default:n(()=>[...o[1]||(o[1]=[i("Next",-1)])]),_:1})]),_:1}),t(e,null,{default:n(()=>[t(p,{variant:"secondary"},{default:n(()=>[...o[2]||(o[2]=[i("Back",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),t(f,{title:"Action list single group with kebab",source:`<pf-action-list>
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
</pf-action-list>`},{default:n(()=>[t(s,null,{default:n(()=>[t(e,null,{default:n(()=>[t(p,{variant:"primary"},{default:n(()=>[...o[3]||(o[3]=[i("Next",-1)])]),_:1})]),_:1}),t(e,null,{default:n(()=>[t(p,{variant:"secondary"},{default:n(()=>[...o[4]||(o[4]=[i("Back",-1)])]),_:1})]),_:1}),t(e,null,{default:n(()=>[t(b,null,{toggle:n(()=>[t(m,{variant:"plain"})]),default:n(()=>[t(l,null,{default:n(()=>[...o[5]||(o[5]=[i("Link",-1)])]),_:1}),t(l,{component:"button"},{default:n(()=>[...o[6]||(o[6]=[i("Action",-1)])]),_:1}),t(l,{disabled:""},{default:n(()=>[...o[7]||(o[7]=[i("Disabled Link",-1)])]),_:1}),t(l,{disabled:"",component:"button"},{default:n(()=>[...o[8]||(o[8]=[i("Disabled Action",-1)])]),_:1}),t(_),t(l,null,{default:n(()=>[...o[9]||(o[9]=[i("Separated Link",-1)])]),_:1}),t(l,{component:"button"},{default:n(()=>[...o[10]||(o[10]=[i("Separated Action",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(f,{title:"Action list with icons",source:`<pf-action-list icon-list>
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
</pf-action-list>`},{default:n(()=>[t(s,{"icon-list":""},{default:n(()=>[t(e,null,{default:n(()=>[t(p,{variant:"plain"},{icon:n(()=>[t(c(x))]),_:1})]),_:1}),t(e,null,{default:n(()=>[t(p,{variant:"plain"},{icon:n(()=>[t(c(A))]),_:1})]),_:1})]),_:1})]),_:1}),t(f,{title:"Action list multiple groups",source:`<pf-action-list>
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
</pf-action-list>`},{default:n(()=>[t(s,null,{default:n(()=>[t(d,null,{default:n(()=>[t(e,null,{default:n(()=>[t(p,{variant:"primary"},{default:n(()=>[...o[11]||(o[11]=[i("Next",-1)])]),_:1})]),_:1}),t(e,null,{default:n(()=>[t(p,{variant:"secondary"},{default:n(()=>[...o[12]||(o[12]=[i("Back",-1)])]),_:1})]),_:1})]),_:1}),t(d,null,{default:n(()=>[t(e,null,{default:n(()=>[t(p,{variant:"primary"},{default:n(()=>[...o[13]||(o[13]=[i("Submit",-1)])]),_:1})]),_:1}),t(e,null,{default:n(()=>[t(p,{variant:"secondary"},{default:n(()=>[...o[14]||(o[14]=[i("Cancel",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{I as default};
