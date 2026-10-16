import{N as e,U as t,c as n,h as r,k as i,m as a,p as o,s,st as c}from"./runtime-core.esm-bundler-wvQKcJ7_.js";import{c as l}from"./index-JVD46Mu3.js";import{t as u}from"./x-icon-C_LdQfAs.js";var d=r({__name:`ActionList.story`,setup(r){return(r,d)=>{let f=e(`component-info`),p=e(`pf-button`),m=e(`pf-action-list-item`),h=e(`pf-action-list`),g=e(`story-canvas`),_=e(`pf-menu-toggle`),v=e(`pf-dropdown-item`),y=e(`pf-divider`),b=e(`pf-dropdown`),x=e(`pf-action-list-group`),S=e(`doc-page`);return i(),n(S,{name:`Components/ActionList.story.vue`,title:`Action List`},{description:t(()=>[...d[0]||=[s(`div`,{class:`markdown pf-v6-c-content`},[s(`p`,null,[o(`An `),s(`strong`,null,`action list`),o(` is a group of actions, controls, or buttons with set spacing.`)])],-1)]]),apidocs:t(()=>[a(f,{name:`PfActionList`,doc:{name:`PfActionList`,exportName:`PfActionList`,displayName:`ActionList`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`iconList`,description:`Flag indicating the action list contains multiple icons and item padding should be removed`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/ActionList/ActionList.vue`]}}),a(f,{name:`PfActionListGroup`,doc:{name:`PfActionListGroup`,exportName:`PfActionListGroup`,displayName:`ActionListGroup`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/ActionList/ActionListGroup.vue`]}}),a(f,{name:`PfActionListItem`,doc:{name:`PfActionListItem`,exportName:`PfActionListItem`,displayName:`ActionListItem`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/ActionList/ActionListItem.vue`]}})]),default:t(()=>[a(g,{title:`Action list single group`,source:`<pf-action-list>
  <pf-action-list-item>
    <pf-button variant="primary">Next</pf-button>
  </pf-action-list-item>
  <pf-action-list-item>
    <pf-button variant="secondary">Back</pf-button>
  </pf-action-list-item>
</pf-action-list>`},{default:t(()=>[a(h,null,{default:t(()=>[a(m,null,{default:t(()=>[a(p,{variant:`primary`},{default:t(()=>[...d[1]||=[o(`Next`,-1)]]),_:1})]),_:1}),a(m,null,{default:t(()=>[a(p,{variant:`secondary`},{default:t(()=>[...d[2]||=[o(`Back`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(g,{title:`Action list single group with kebab`,source:`<pf-action-list>
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
</pf-action-list>`},{default:t(()=>[a(h,null,{default:t(()=>[a(m,null,{default:t(()=>[a(p,{variant:`primary`},{default:t(()=>[...d[3]||=[o(`Next`,-1)]]),_:1})]),_:1}),a(m,null,{default:t(()=>[a(p,{variant:`secondary`},{default:t(()=>[...d[4]||=[o(`Back`,-1)]]),_:1})]),_:1}),a(m,null,{default:t(()=>[a(b,null,{toggle:t(()=>[a(_,{variant:`plain`})]),default:t(()=>[a(v,null,{default:t(()=>[...d[5]||=[o(`Link`,-1)]]),_:1}),a(v,{component:`button`},{default:t(()=>[...d[6]||=[o(`Action`,-1)]]),_:1}),a(v,{disabled:``},{default:t(()=>[...d[7]||=[o(`Disabled Link`,-1)]]),_:1}),a(v,{disabled:``,component:`button`},{default:t(()=>[...d[8]||=[o(`Disabled Action`,-1)]]),_:1}),a(y),a(v,null,{default:t(()=>[...d[9]||=[o(`Separated Link`,-1)]]),_:1}),a(v,{component:`button`},{default:t(()=>[...d[10]||=[o(`Separated Action`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(g,{title:`Action list with icons`,source:`<pf-action-list icon-list>
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
</pf-action-list>`},{default:t(()=>[a(h,{"icon-list":``},{default:t(()=>[a(m,null,{default:t(()=>[a(p,{variant:`plain`},{icon:t(()=>[a(c(u))]),_:1})]),_:1}),a(m,null,{default:t(()=>[a(p,{variant:`plain`},{icon:t(()=>[a(c(l))]),_:1})]),_:1})]),_:1})]),_:1}),a(g,{title:`Action list multiple groups`,source:`<pf-action-list>
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
</pf-action-list>`},{default:t(()=>[a(h,null,{default:t(()=>[a(x,null,{default:t(()=>[a(m,null,{default:t(()=>[a(p,{variant:`primary`},{default:t(()=>[...d[11]||=[o(`Next`,-1)]]),_:1})]),_:1}),a(m,null,{default:t(()=>[a(p,{variant:`secondary`},{default:t(()=>[...d[12]||=[o(`Back`,-1)]]),_:1})]),_:1})]),_:1}),a(x,null,{default:t(()=>[a(m,null,{default:t(()=>[a(p,{variant:`primary`},{default:t(()=>[...d[13]||=[o(`Submit`,-1)]]),_:1})]),_:1}),a(m,null,{default:t(()=>[a(p,{variant:`secondary`},{default:t(()=>[...d[14]||=[o(`Cancel`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{d as default};