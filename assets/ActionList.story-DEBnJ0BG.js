import{H as e,N as t,c as n,h as r,it as i,k as a,m as o,p as s,s as c}from"./runtime-core.esm-bundler-DvxuuL12.js";import{c as l}from"./index-Dwl70BjG.js";import{t as u}from"./x-icon-CGZ9Mfal.js";var d=r({__name:`ActionList.story`,setup(r){return(r,d)=>{let f=t(`component-info`),p=t(`pf-button`),m=t(`pf-action-list-item`),h=t(`pf-action-list`),g=t(`story-canvas`),_=t(`pf-menu-toggle`),v=t(`pf-dropdown-item`),y=t(`pf-divider`),b=t(`pf-dropdown`),x=t(`pf-action-list-group`),S=t(`doc-page`);return a(),n(S,{name:`Components/ActionList.story.vue`,title:`Action List`},{description:e(()=>[...d[0]||=[c(`div`,{class:`markdown pf-v6-c-content`},[c(`p`,null,[s(`An `),c(`strong`,null,`action list`),s(` is a group of actions, controls, or buttons with set spacing.`)])],-1)]]),apidocs:e(()=>[o(f,{name:`PfActionList`,doc:{name:`PfActionList`,exportName:`PfActionList`,displayName:`ActionList`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`iconList`,description:`Flag indicating the action list contains multiple icons and item padding should be removed`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/ActionList/ActionList.vue`]}}),o(f,{name:`PfActionListGroup`,doc:{name:`PfActionListGroup`,exportName:`PfActionListGroup`,displayName:`ActionListGroup`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/ActionList/ActionListGroup.vue`]}}),o(f,{name:`PfActionListItem`,doc:{name:`PfActionListItem`,exportName:`PfActionListItem`,displayName:`ActionListItem`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/ActionList/ActionListItem.vue`]}})]),default:e(()=>[o(g,{title:`Action list single group`,source:`<pf-action-list>
  <pf-action-list-item>
    <pf-button variant="primary">Next</pf-button>
  </pf-action-list-item>
  <pf-action-list-item>
    <pf-button variant="secondary">Back</pf-button>
  </pf-action-list-item>
</pf-action-list>`},{default:e(()=>[o(h,null,{default:e(()=>[o(m,null,{default:e(()=>[o(p,{variant:`primary`},{default:e(()=>[...d[1]||=[s(`Next`,-1)]]),_:1})]),_:1}),o(m,null,{default:e(()=>[o(p,{variant:`secondary`},{default:e(()=>[...d[2]||=[s(`Back`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),o(g,{title:`Action list single group with kebab`,source:`<pf-action-list>
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
</pf-action-list>`},{default:e(()=>[o(h,null,{default:e(()=>[o(m,null,{default:e(()=>[o(p,{variant:`primary`},{default:e(()=>[...d[3]||=[s(`Next`,-1)]]),_:1})]),_:1}),o(m,null,{default:e(()=>[o(p,{variant:`secondary`},{default:e(()=>[...d[4]||=[s(`Back`,-1)]]),_:1})]),_:1}),o(m,null,{default:e(()=>[o(b,null,{toggle:e(()=>[o(_,{variant:`plain`})]),default:e(()=>[o(v,null,{default:e(()=>[...d[5]||=[s(`Link`,-1)]]),_:1}),o(v,{component:`button`},{default:e(()=>[...d[6]||=[s(`Action`,-1)]]),_:1}),o(v,{disabled:``},{default:e(()=>[...d[7]||=[s(`Disabled Link`,-1)]]),_:1}),o(v,{disabled:``,component:`button`},{default:e(()=>[...d[8]||=[s(`Disabled Action`,-1)]]),_:1}),o(y),o(v,null,{default:e(()=>[...d[9]||=[s(`Separated Link`,-1)]]),_:1}),o(v,{component:`button`},{default:e(()=>[...d[10]||=[s(`Separated Action`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(g,{title:`Action list with icons`,source:`<pf-action-list icon-list>
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
</pf-action-list>`},{default:e(()=>[o(h,{"icon-list":``},{default:e(()=>[o(m,null,{default:e(()=>[o(p,{variant:`plain`},{icon:e(()=>[o(i(u))]),_:1})]),_:1}),o(m,null,{default:e(()=>[o(p,{variant:`plain`},{icon:e(()=>[o(i(l))]),_:1})]),_:1})]),_:1})]),_:1}),o(g,{title:`Action list multiple groups`,source:`<pf-action-list>
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
</pf-action-list>`},{default:e(()=>[o(h,null,{default:e(()=>[o(x,null,{default:e(()=>[o(m,null,{default:e(()=>[o(p,{variant:`primary`},{default:e(()=>[...d[11]||=[s(`Next`,-1)]]),_:1})]),_:1}),o(m,null,{default:e(()=>[o(p,{variant:`secondary`},{default:e(()=>[...d[12]||=[s(`Back`,-1)]]),_:1})]),_:1})]),_:1}),o(x,null,{default:e(()=>[o(m,null,{default:e(()=>[o(p,{variant:`primary`},{default:e(()=>[...d[13]||=[s(`Submit`,-1)]]),_:1})]),_:1}),o(m,null,{default:e(()=>[o(p,{variant:`secondary`},{default:e(()=>[...d[14]||=[s(`Cancel`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{d as default};