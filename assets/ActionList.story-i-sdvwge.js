import{N as e,U as t,at as n,c as r,h as i,k as a,m as o,p as s,s as c}from"./runtime-core.esm-bundler-DZwyVwFG.js";import{c as l}from"./index-DTEikyYj.js";import{t as u}from"./x-icon-BcQDIzio.js";var d=i({__name:`ActionList.story`,setup(i){return(i,d)=>{let f=e(`component-info`),p=e(`pf-button`),m=e(`pf-action-list-item`),h=e(`pf-action-list`),g=e(`story-canvas`),_=e(`pf-menu-toggle`),v=e(`pf-dropdown-item`),y=e(`pf-divider`),b=e(`pf-dropdown`),x=e(`pf-action-list-group`),S=e(`doc-page`);return a(),r(S,{name:`Components/ActionList.story.vue`,title:`Action List`},{description:t(()=>[...d[0]||=[c(`div`,{class:`markdown pf-v6-c-content`},[c(`p`,null,[s(`An `),c(`strong`,null,`action list`),s(` is a group of actions, controls, or buttons with set spacing.`)])],-1)]]),apidocs:t(()=>[o(f,{name:`PfActionList`,doc:{name:`PfActionList`,exportName:`PfActionList`,displayName:`ActionList`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`iconList`,description:`Flag indicating the action list contains multiple icons and item padding should be removed`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/ActionList/ActionList.vue`]}}),o(f,{name:`PfActionListGroup`,doc:{name:`PfActionListGroup`,exportName:`PfActionListGroup`,displayName:`ActionListGroup`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/ActionList/ActionListGroup.vue`]}}),o(f,{name:`PfActionListItem`,doc:{name:`PfActionListItem`,exportName:`PfActionListItem`,displayName:`ActionListItem`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/ActionList/ActionListItem.vue`]}})]),default:t(()=>[o(g,{title:`Action list single group`,source:`<pf-action-list>
  <pf-action-list-item>
    <pf-button variant="primary">Next</pf-button>
  </pf-action-list-item>
  <pf-action-list-item>
    <pf-button variant="secondary">Back</pf-button>
  </pf-action-list-item>
</pf-action-list>`},{default:t(()=>[o(h,null,{default:t(()=>[o(m,null,{default:t(()=>[o(p,{variant:`primary`},{default:t(()=>[...d[1]||=[s(`Next`,-1)]]),_:1})]),_:1}),o(m,null,{default:t(()=>[o(p,{variant:`secondary`},{default:t(()=>[...d[2]||=[s(`Back`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),o(g,{title:`Action list single group with kebab`,source:`<pf-action-list>
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
</pf-action-list>`},{default:t(()=>[o(h,null,{default:t(()=>[o(m,null,{default:t(()=>[o(p,{variant:`primary`},{default:t(()=>[...d[3]||=[s(`Next`,-1)]]),_:1})]),_:1}),o(m,null,{default:t(()=>[o(p,{variant:`secondary`},{default:t(()=>[...d[4]||=[s(`Back`,-1)]]),_:1})]),_:1}),o(m,null,{default:t(()=>[o(b,null,{toggle:t(()=>[o(_,{variant:`plain`})]),default:t(()=>[o(v,null,{default:t(()=>[...d[5]||=[s(`Link`,-1)]]),_:1}),o(v,{component:`button`},{default:t(()=>[...d[6]||=[s(`Action`,-1)]]),_:1}),o(v,{disabled:``},{default:t(()=>[...d[7]||=[s(`Disabled Link`,-1)]]),_:1}),o(v,{disabled:``,component:`button`},{default:t(()=>[...d[8]||=[s(`Disabled Action`,-1)]]),_:1}),o(y),o(v,null,{default:t(()=>[...d[9]||=[s(`Separated Link`,-1)]]),_:1}),o(v,{component:`button`},{default:t(()=>[...d[10]||=[s(`Separated Action`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(g,{title:`Action list with icons`,source:`<pf-action-list icon-list>
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
</pf-action-list>`},{default:t(()=>[o(h,{"icon-list":``},{default:t(()=>[o(m,null,{default:t(()=>[o(p,{variant:`plain`},{icon:t(()=>[o(n(u))]),_:1})]),_:1}),o(m,null,{default:t(()=>[o(p,{variant:`plain`},{icon:t(()=>[o(n(l))]),_:1})]),_:1})]),_:1})]),_:1}),o(g,{title:`Action list multiple groups`,source:`<pf-action-list>
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
</pf-action-list>`},{default:t(()=>[o(h,null,{default:t(()=>[o(x,null,{default:t(()=>[o(m,null,{default:t(()=>[o(p,{variant:`primary`},{default:t(()=>[...d[11]||=[s(`Next`,-1)]]),_:1})]),_:1}),o(m,null,{default:t(()=>[o(p,{variant:`secondary`},{default:t(()=>[...d[12]||=[s(`Back`,-1)]]),_:1})]),_:1})]),_:1}),o(x,null,{default:t(()=>[o(m,null,{default:t(()=>[o(p,{variant:`primary`},{default:t(()=>[...d[13]||=[s(`Submit`,-1)]]),_:1})]),_:1}),o(m,null,{default:t(()=>[o(p,{variant:`secondary`},{default:t(()=>[...d[14]||=[s(`Cancel`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{d as default};