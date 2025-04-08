import{E as g}from"./ellipsis-vertical-icon-C32PbOl4.js";import{f as w,g as k,a as e,c as y,o as A,w as n,b as t,e as i,u,d}from"./index-C7IOHyGY.js";import{C as L}from"./check-icon-DyXqFLfK.js";const x={name:"XIcon",height:512,width:384,svgPath:"M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z",yOffset:0,xOffset:0},C=w(x),V=k({__name:"ActionList.story",setup(B){return(N,o)=>{const r=e("component-info"),p=e("pf-button"),a=e("pf-action-list-item"),s=e("pf-action-list"),f=e("story-canvas"),m=e("pf-menu-toggle"),l=e("pf-dropdown-item"),_=e("pf-divider"),b=e("pf-dropdown"),c=e("pf-action-list-group"),v=e("doc-page");return A(),y(v,{name:"Components/ActionList.story.vue",title:"Action List"},{description:n(()=>o[0]||(o[0]=[d("div",{class:"markdown pf-v5-c-content"},[d("p",null,[i("An "),d("strong",null,"action list"),i(" is a group of actions, controls, or buttons with set spacing.")])],-1)])),apidocs:n(()=>[t(r,{src:"packages/core/src/components/ActionList.vue"}),t(r,{src:"packages/core/src/components/ActionListGroup.vue"}),t(r,{src:"packages/core/src/components/ActionListItem.vue"})]),default:n(()=>[t(f,{title:"Action list single group",source:`<pf-action-list>
  <pf-action-list-item>
    <pf-button variant="primary">Next</pf-button>
  </pf-action-list-item>
  <pf-action-list-item>
    <pf-button variant="secondary">Back</pf-button>
  </pf-action-list-item>
</pf-action-list>`},{default:n(()=>[t(s,null,{default:n(()=>[t(a,null,{default:n(()=>[t(p,{variant:"primary"},{default:n(()=>o[1]||(o[1]=[i("Next")])),_:1})]),_:1}),t(a,null,{default:n(()=>[t(p,{variant:"secondary"},{default:n(()=>o[2]||(o[2]=[i("Back")])),_:1})]),_:1})]),_:1})]),_:1}),t(f,{title:"Action list single group with kebab",source:`<pf-action-list>
  <pf-action-list-item>
    <pf-button variant="primary">Next</pf-button>
  </pf-action-list-item>
  <pf-action-list-item>
    <pf-button variant="secondary">Back</pf-button>
  </pf-action-list-item>
  <pf-action-list-item>
    <pf-dropdown>
      <template #toggle>
        <pf-menu-toggle variant="plain">
          <ellipsis-vertical-icon />
        </pf-menu-toggle>
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
</pf-action-list>`},{default:n(()=>[t(s,null,{default:n(()=>[t(a,null,{default:n(()=>[t(p,{variant:"primary"},{default:n(()=>o[3]||(o[3]=[i("Next")])),_:1})]),_:1}),t(a,null,{default:n(()=>[t(p,{variant:"secondary"},{default:n(()=>o[4]||(o[4]=[i("Back")])),_:1})]),_:1}),t(a,null,{default:n(()=>[t(b,null,{toggle:n(()=>[t(m,{variant:"plain"},{default:n(()=>[t(u(g))]),_:1})]),default:n(()=>[t(l,null,{default:n(()=>o[5]||(o[5]=[i("Link")])),_:1}),t(l,{component:"button"},{default:n(()=>o[6]||(o[6]=[i("Action")])),_:1}),t(l,{disabled:""},{default:n(()=>o[7]||(o[7]=[i("Disabled Link")])),_:1}),t(l,{disabled:"",component:"button"},{default:n(()=>o[8]||(o[8]=[i("Disabled Action")])),_:1}),t(_),t(l,null,{default:n(()=>o[9]||(o[9]=[i("Separated Link")])),_:1}),t(l,{component:"button"},{default:n(()=>o[10]||(o[10]=[i("Separated Action")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(f,{title:"Action list with icons",source:`<pf-action-list icon-list>
  <pf-action-list-item>
    <pf-button variant="plain"><x-icon /></pf-button>
  </pf-action-list-item>
  <pf-action-list-item>
    <pf-button variant="plain"><check-icon /></pf-button>
  </pf-action-list-item>
</pf-action-list>`},{default:n(()=>[t(s,{"icon-list":""},{default:n(()=>[t(a,null,{default:n(()=>[t(p,{variant:"plain"},{default:n(()=>[t(u(C))]),_:1})]),_:1}),t(a,null,{default:n(()=>[t(p,{variant:"plain"},{default:n(()=>[t(u(L))]),_:1})]),_:1})]),_:1})]),_:1}),t(f,{title:"Action list multiple groups",source:`<pf-action-list>
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
</pf-action-list>`},{default:n(()=>[t(s,null,{default:n(()=>[t(c,null,{default:n(()=>[t(a,null,{default:n(()=>[t(p,{variant:"primary"},{default:n(()=>o[11]||(o[11]=[i("Next")])),_:1})]),_:1}),t(a,null,{default:n(()=>[t(p,{variant:"secondary"},{default:n(()=>o[12]||(o[12]=[i("Back")])),_:1})]),_:1})]),_:1}),t(c,null,{default:n(()=>[t(a,null,{default:n(()=>[t(p,{variant:"primary"},{default:n(()=>o[13]||(o[13]=[i("Submit")])),_:1})]),_:1}),t(a,null,{default:n(()=>[t(p,{variant:"secondary"},{default:n(()=>o[14]||(o[14]=[i("Cancel")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{V as default};
