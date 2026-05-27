import{D as e,E as t,I as n,N as r,O as i,S as a,_ as o,c as s,j as c,x as l,z as u}from"./index-mFbvqZfx.js";var d=o({name:`XIcon`,height:512,width:384,svgPathData:`M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z`,yOffset:0,xOffset:0}),f=i({__name:`ActionList.story`,setup(i){return(i,o)=>{let f=r(`component-info`),p=r(`pf-button`),m=r(`pf-action-list-item`),h=r(`pf-action-list`),g=r(`story-canvas`),_=r(`pf-menu-toggle`),v=r(`pf-dropdown-item`),y=r(`pf-divider`),b=r(`pf-dropdown`),x=r(`pf-action-list-group`),S=r(`doc-page`);return c(),a(S,{name:`Components/ActionList.story.vue`,title:`Action List`},{description:n(()=>[...o[0]||=[l(`div`,{class:`markdown pf-v6-c-content`},[l(`p`,null,[t(`An `),l(`strong`,null,`action list`),t(` is a group of actions, controls, or buttons with set spacing.`)])],-1)]]),apidocs:n(()=>[e(f,{name:`PfActionList`,doc:{name:`PfActionList`,exportName:`PfActionList`,displayName:`ActionList`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`iconList`,description:`Flag indicating the action list contains multiple icons and item padding should be removed`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/ActionList/ActionList.vue`]}}),e(f,{name:`PfActionListGroup`,doc:{name:`PfActionListGroup`,exportName:`PfActionListGroup`,displayName:`ActionListGroup`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/ActionList/ActionListGroup.vue`]}}),e(f,{name:`PfActionListItem`,doc:{name:`PfActionListItem`,exportName:`PfActionListItem`,displayName:`ActionListItem`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/ActionList/ActionListItem.vue`]}})]),default:n(()=>[e(g,{title:`Action list single group`,source:`<pf-action-list>
  <pf-action-list-item>
    <pf-button variant="primary">Next</pf-button>
  </pf-action-list-item>
  <pf-action-list-item>
    <pf-button variant="secondary">Back</pf-button>
  </pf-action-list-item>
</pf-action-list>`},{default:n(()=>[e(h,null,{default:n(()=>[e(m,null,{default:n(()=>[e(p,{variant:`primary`},{default:n(()=>[...o[1]||=[t(`Next`,-1)]]),_:1})]),_:1}),e(m,null,{default:n(()=>[e(p,{variant:`secondary`},{default:n(()=>[...o[2]||=[t(`Back`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),e(g,{title:`Action list single group with kebab`,source:`<pf-action-list>
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
</pf-action-list>`},{default:n(()=>[e(h,null,{default:n(()=>[e(m,null,{default:n(()=>[e(p,{variant:`primary`},{default:n(()=>[...o[3]||=[t(`Next`,-1)]]),_:1})]),_:1}),e(m,null,{default:n(()=>[e(p,{variant:`secondary`},{default:n(()=>[...o[4]||=[t(`Back`,-1)]]),_:1})]),_:1}),e(m,null,{default:n(()=>[e(b,null,{toggle:n(()=>[e(_,{variant:`plain`})]),default:n(()=>[e(v,null,{default:n(()=>[...o[5]||=[t(`Link`,-1)]]),_:1}),e(v,{component:`button`},{default:n(()=>[...o[6]||=[t(`Action`,-1)]]),_:1}),e(v,{disabled:``},{default:n(()=>[...o[7]||=[t(`Disabled Link`,-1)]]),_:1}),e(v,{disabled:``,component:`button`},{default:n(()=>[...o[8]||=[t(`Disabled Action`,-1)]]),_:1}),e(y),e(v,null,{default:n(()=>[...o[9]||=[t(`Separated Link`,-1)]]),_:1}),e(v,{component:`button`},{default:n(()=>[...o[10]||=[t(`Separated Action`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(g,{title:`Action list with icons`,source:`<pf-action-list icon-list>
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
</pf-action-list>`},{default:n(()=>[e(h,{"icon-list":``},{default:n(()=>[e(m,null,{default:n(()=>[e(p,{variant:`plain`},{icon:n(()=>[e(u(d))]),_:1})]),_:1}),e(m,null,{default:n(()=>[e(p,{variant:`plain`},{icon:n(()=>[e(u(s))]),_:1})]),_:1})]),_:1})]),_:1}),e(g,{title:`Action list multiple groups`,source:`<pf-action-list>
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
</pf-action-list>`},{default:n(()=>[e(h,null,{default:n(()=>[e(x,null,{default:n(()=>[e(m,null,{default:n(()=>[e(p,{variant:`primary`},{default:n(()=>[...o[11]||=[t(`Next`,-1)]]),_:1})]),_:1}),e(m,null,{default:n(()=>[e(p,{variant:`secondary`},{default:n(()=>[...o[12]||=[t(`Back`,-1)]]),_:1})]),_:1})]),_:1}),e(x,null,{default:n(()=>[e(m,null,{default:n(()=>[e(p,{variant:`primary`},{default:n(()=>[...o[13]||=[t(`Submit`,-1)]]),_:1})]),_:1}),e(m,null,{default:n(()=>[e(p,{variant:`secondary`},{default:n(()=>[...o[14]||=[t(`Cancel`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{f as default};