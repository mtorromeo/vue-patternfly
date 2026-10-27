import{F as e,K as t,c as n,g as r,h as i,j as a,l as o,m as s,pt as c}from"./runtime-core.esm-bundler-DO1530YC.js";import{A as l,D as u,F as d,Y as f}from"./index-CUsetNQE.js";var p=r({__name:`ActionList.story`,setup(r){return(r,p)=>{let m=e(`component-info`),h=e(`pf-button`),g=e(`pf-action-list-item`),_=e(`pf-action-list-group`),v=e(`pf-action-list`),y=e(`pf-menu-toggle`),b=e(`pf-dropdown-item`),x=e(`pf-divider`),S=e(`pf-dropdown`),C=e(`story-canvas`),w=e(`doc-page`);return a(),o(w,{name:`Components/ActionList.story.vue`,title:`Action list`},{description:t(()=>[...p[3]||=[n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[s(`An `),n(`strong`,null,`action list`),s(` is a group of actions, controls, or buttons with set spacing.`)])],-1)]]),apidocs:t(()=>[i(m,{name:`PfActionList`,doc:{name:`PfActionList`,exportName:`PfActionList`,displayName:`ActionList`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`iconList`,description:`Flag indicating the action list contains multiple icons and item padding should be removed`,required:!1,type:{name:`boolean`}},{name:`vertical`,tags:{beta:[{description:`Flag to lay the children out vertically instead of horizontally`,title:`beta`}]},required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/ActionList/ActionList.vue`]}}),i(m,{name:`PfActionListGroup`,doc:{name:`PfActionListGroup`,exportName:`PfActionListGroup`,displayName:`ActionListGroup`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`iconGroup`,description:`Flag indicating the action list group contains multiple icons and item padding should be removed`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/ActionList/ActionListGroup.vue`]}}),i(m,{name:`PfActionListItem`,doc:{name:`PfActionListItem`,exportName:`PfActionListItem`,displayName:`ActionListItem`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/ActionList/ActionListItem.vue`]}})]),default:t(()=>[p[38]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),n(`p`,null,[s(`See `),n(`a`,{href:`#/`},`common differences from patternfly-react`),s(`.`)]),n(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),i(C,{title:`Action list single group`,source:`<pf-action-list>
  <pf-action-list-group>
    <pf-action-list-item>
      <pf-button id="single-group-next-button" variant="primary">Next</pf-button>
    </pf-action-list-item>
    <pf-action-list-item>
      <pf-button id="single-group-back-button" variant="secondary">Back</pf-button>
    </pf-action-list-item>
  </pf-action-list-group>
</pf-action-list>
<br>
With kebab
<pf-action-list>
  <pf-action-list-group>
    <pf-action-list-item>
      <pf-button id="single-group-next-button2" variant="primary">Next</pf-button>
    </pf-action-list-item>
    <pf-action-list-item>
      <pf-button id="single-group-back-button2" variant="secondary">Back</pf-button>
    </pf-action-list-item>
    <pf-action-list-item>
      <pf-dropdown>
        <template #toggle>
          <pf-menu-toggle variant="plain" aria-label="Action list single group kebab">
            <template #icon>
              <ellipsis-vertical-icon />
            </template>
          </pf-menu-toggle>
        </template>
        <pf-dropdown-item to="#" @click.prevent>Link</pf-dropdown-item>
        <pf-dropdown-item component="button">Action</pf-dropdown-item>
        <pf-dropdown-item to="#" disabled @click.prevent>Disabled Link</pf-dropdown-item>
        <pf-dropdown-item component="button" disabled>Disabled Action</pf-dropdown-item>
        <pf-divider component="li" />
        <pf-dropdown-item to="#" @click.prevent>Separated Link</pf-dropdown-item>
        <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
      </pf-dropdown>
    </pf-action-list-item>
  </pf-action-list-group>
</pf-action-list>`},{default:t(()=>[i(v,null,{default:t(()=>[i(_,null,{default:t(()=>[i(g,null,{default:t(()=>[i(h,{id:`single-group-next-button`,variant:`primary`},{default:t(()=>[...p[4]||=[s(`Next`,-1)]]),_:1})]),_:1}),i(g,null,{default:t(()=>[i(h,{id:`single-group-back-button`,variant:`secondary`},{default:t(()=>[...p[5]||=[s(`Back`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),p[14]||=n(`br`,null,null,-1),p[15]||=s(` With kebab `,-1),i(v,null,{default:t(()=>[i(_,null,{default:t(()=>[i(g,null,{default:t(()=>[i(h,{id:`single-group-next-button2`,variant:`primary`},{default:t(()=>[...p[6]||=[s(`Next`,-1)]]),_:1})]),_:1}),i(g,null,{default:t(()=>[i(h,{id:`single-group-back-button2`,variant:`secondary`},{default:t(()=>[...p[7]||=[s(`Back`,-1)]]),_:1})]),_:1}),i(g,null,{default:t(()=>[i(S,null,{toggle:t(()=>[i(y,{variant:`plain`,"aria-label":`Action list single group kebab`},{icon:t(()=>[i(c(u))]),_:1})]),default:t(()=>[i(b,{to:`#`,onClick:p[0]||=f(()=>{},[`prevent`])},{default:t(()=>[...p[8]||=[s(`Link`,-1)]]),_:1}),i(b,{component:`button`},{default:t(()=>[...p[9]||=[s(`Action`,-1)]]),_:1}),i(b,{to:`#`,disabled:``,onClick:p[1]||=f(()=>{},[`prevent`])},{default:t(()=>[...p[10]||=[s(`Disabled Link`,-1)]]),_:1}),i(b,{component:`button`,disabled:``},{default:t(()=>[...p[11]||=[s(`Disabled Action`,-1)]]),_:1}),i(x,{component:`li`}),i(b,{to:`#`,onClick:p[2]||=f(()=>{},[`prevent`])},{default:t(()=>[...p[12]||=[s(`Separated Link`,-1)]]),_:1}),i(b,{component:`button`},{default:t(()=>[...p[13]||=[s(`Separated Action`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),i(C,{title:`Action list with icons`,source:`<h4>With list icons wrapper</h4>
<pf-action-list icon-list>
  <pf-action-list-item>
    <pf-button id="with-icons-times-button" variant="plain" aria-label="times icon button">
      <template #icon>
        <xmark-icon />
      </template>
    </pf-button>
  </pf-action-list-item>
  <pf-action-list-item>
    <pf-button id="with-icons-check-button" variant="plain" aria-label="check icon button">
      <template #icon>
        <check-icon />
      </template>
    </pf-button>
  </pf-action-list-item>
</pf-action-list>
<br>
<h4>With group icons wrapper</h4>
<pf-action-list>
  <pf-action-list-group icon-group>
    <pf-action-list-item>
      <pf-button id="with-icons-list-times-button" variant="plain" aria-label="times icon button">
        <template #icon>
          <xmark-icon />
        </template>
      </pf-button>
    </pf-action-list-item>
    <pf-action-list-item>
      <pf-button id="with-icons-list-check-button" variant="plain" aria-label="check icon button">
        <template #icon>
          <check-icon />
        </template>
      </pf-button>
    </pf-action-list-item>
  </pf-action-list-group>
  <pf-action-list-group icon-group>
    <pf-action-list-item>
      <pf-button id="with-icons-group-times-button" variant="plain" aria-label="times icon button">
        <template #icon>
          <xmark-icon />
        </template>
      </pf-button>
    </pf-action-list-item>
    <pf-action-list-item>
      <pf-button id="with-icons-group-check-button" variant="plain" aria-label="check icon button">
        <template #icon>
          <check-icon />
        </template>
      </pf-button>
    </pf-action-list-item>
  </pf-action-list-group>
</pf-action-list>`},{default:t(()=>[p[16]||=n(`h4`,null,`With list icons wrapper`,-1),i(v,{"icon-list":``},{default:t(()=>[i(g,null,{default:t(()=>[i(h,{id:`with-icons-times-button`,variant:`plain`,"aria-label":`times icon button`},{icon:t(()=>[i(c(d))]),_:1})]),_:1}),i(g,null,{default:t(()=>[i(h,{id:`with-icons-check-button`,variant:`plain`,"aria-label":`check icon button`},{icon:t(()=>[i(c(l))]),_:1})]),_:1})]),_:1}),p[17]||=n(`br`,null,null,-1),p[18]||=n(`h4`,null,`With group icons wrapper`,-1),i(v,null,{default:t(()=>[i(_,{"icon-group":``},{default:t(()=>[i(g,null,{default:t(()=>[i(h,{id:`with-icons-list-times-button`,variant:`plain`,"aria-label":`times icon button`},{icon:t(()=>[i(c(d))]),_:1})]),_:1}),i(g,null,{default:t(()=>[i(h,{id:`with-icons-list-check-button`,variant:`plain`,"aria-label":`check icon button`},{icon:t(()=>[i(c(l))]),_:1})]),_:1})]),_:1}),i(_,{"icon-group":``},{default:t(()=>[i(g,null,{default:t(()=>[i(h,{id:`with-icons-group-times-button`,variant:`plain`,"aria-label":`times icon button`},{icon:t(()=>[i(c(d))]),_:1})]),_:1}),i(g,null,{default:t(()=>[i(h,{id:`with-icons-group-check-button`,variant:`plain`,"aria-label":`check icon button`},{icon:t(()=>[i(c(l))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),i(C,{title:`Action list multiple groups`,source:`<pf-action-list>
  <pf-action-list-group>
    <pf-action-list-item>
      <pf-button id="multi-group-next-button" variant="primary">Next</pf-button>
    </pf-action-list-item>
    <pf-action-list-item>
      <pf-button id="multi-group-back-button" variant="secondary">Back</pf-button>
    </pf-action-list-item>
  </pf-action-list-group>
  <pf-action-list-group>
    <pf-action-list-item>
      <pf-button id="multi-group-submit-button" variant="primary">Submit</pf-button>
    </pf-action-list-item>
    <pf-action-list-item>
      <pf-button id="multi-group-cancel-button" variant="link">Cancel</pf-button>
    </pf-action-list-item>
  </pf-action-list-group>
</pf-action-list>`},{default:t(()=>[i(v,null,{default:t(()=>[i(_,null,{default:t(()=>[i(g,null,{default:t(()=>[i(h,{id:`multi-group-next-button`,variant:`primary`},{default:t(()=>[...p[19]||=[s(`Next`,-1)]]),_:1})]),_:1}),i(g,null,{default:t(()=>[i(h,{id:`multi-group-back-button`,variant:`secondary`},{default:t(()=>[...p[20]||=[s(`Back`,-1)]]),_:1})]),_:1})]),_:1}),i(_,null,{default:t(()=>[i(g,null,{default:t(()=>[i(h,{id:`multi-group-submit-button`,variant:`primary`},{default:t(()=>[...p[21]||=[s(`Submit`,-1)]]),_:1})]),_:1}),i(g,null,{default:t(()=>[i(h,{id:`multi-group-cancel-button`,variant:`link`},{default:t(()=>[...p[22]||=[s(`Cancel`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),i(C,{title:`Action list with cancel button`,source:`In modals, forms, data lists
<pf-action-list>
  <pf-action-list-group>
    <pf-action-list-item>
      <pf-button id="with-cancel-save-button" variant="primary">Save</pf-button>
    </pf-action-list-item>
    <pf-action-list-item>
      <pf-button id="with-cancel-cancel-button" variant="link">Cancel</pf-button>
    </pf-action-list-item>
  </pf-action-list-group>
</pf-action-list>
<br>
In wizards
<pf-action-list>
  <pf-action-list-group>
    <pf-action-list-item>
      <pf-button id="with-cancel-next-button" variant="primary">Next</pf-button>
    </pf-action-list-item>
    <pf-action-list-item>
      <pf-button id="with-cancel-back-button" variant="secondary">Back</pf-button>
    </pf-action-list-item>
  </pf-action-list-group>
  <pf-action-list-group>
    <pf-action-list-item>
      <pf-button id="with-cancel-cancel-button2" variant="link">Cancel</pf-button>
    </pf-action-list-item>
  </pf-action-list-group>
</pf-action-list>`},{default:t(()=>[p[28]||=s(` In modals, forms, data lists `,-1),i(v,null,{default:t(()=>[i(_,null,{default:t(()=>[i(g,null,{default:t(()=>[i(h,{id:`with-cancel-save-button`,variant:`primary`},{default:t(()=>[...p[23]||=[s(`Save`,-1)]]),_:1})]),_:1}),i(g,null,{default:t(()=>[i(h,{id:`with-cancel-cancel-button`,variant:`link`},{default:t(()=>[...p[24]||=[s(`Cancel`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),p[29]||=n(`br`,null,null,-1),p[30]||=s(` In wizards `,-1),i(v,null,{default:t(()=>[i(_,null,{default:t(()=>[i(g,null,{default:t(()=>[i(h,{id:`with-cancel-next-button`,variant:`primary`},{default:t(()=>[...p[25]||=[s(`Next`,-1)]]),_:1})]),_:1}),i(g,null,{default:t(()=>[i(h,{id:`with-cancel-back-button`,variant:`secondary`},{default:t(()=>[...p[26]||=[s(`Back`,-1)]]),_:1})]),_:1})]),_:1}),i(_,null,{default:t(()=>[i(g,null,{default:t(()=>[i(h,{id:`with-cancel-cancel-button2`,variant:`link`},{default:t(()=>[...p[27]||=[s(`Cancel`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),i(C,{title:`Vertical action list`,source:`<h4>Multiple groups</h4>
<pf-action-list vertical>
  <pf-action-list-group>
    <pf-action-list-item>
      <pf-button>Next</pf-button>
    </pf-action-list-item>
    <pf-action-list-item>
      <pf-button variant="secondary">Back</pf-button>
    </pf-action-list-item>
  </pf-action-list-group>
  <pf-action-list-group>
    <pf-action-list-item>
      <pf-button>Submit</pf-button>
    </pf-action-list-item>
    <pf-action-list-item>
      <pf-button variant="link">Cancel</pf-button>
    </pf-action-list-item>
  </pf-action-list-group>
</pf-action-list>
<h4>Icons, in two groups</h4>
<pf-action-list vertical>
  <pf-action-list-group>
    <pf-action-list-item>
      <pf-button aria-label="Close vertical action list group 1" variant="plain">
        <template #icon>
          <xmark-icon />
        </template>
      </pf-button>
    </pf-action-list-item>
    <pf-action-list-item>
      <pf-button aria-label="Toggle vertical action list example group 1" variant="plain">
        <template #icon>
          <check-icon />
        </template>
      </pf-button>
    </pf-action-list-item>
  </pf-action-list-group>
  <pf-action-list-group>
    <pf-action-list-item>
      <pf-button aria-label="Close vertical action list group 2" variant="plain">
        <template #icon>
          <xmark-icon />
        </template>
      </pf-button>
    </pf-action-list-item>
    <pf-action-list-item>
      <pf-button aria-label="Toggle vertical action list example group 2" variant="plain">
        <template #icon>
          <check-icon />
        </template>
      </pf-button>
    </pf-action-list-item>
  </pf-action-list-group>
</pf-action-list>`},{intro:t(()=>[...p[31]||=[n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[s(`The `),n(`code`,null,`vertical`),s(` prop lays the groups and items out vertically. This is a beta feature.`)])],-1)]]),default:t(()=>[p[36]||=n(`h4`,null,`Multiple groups`,-1),i(v,{vertical:``},{default:t(()=>[i(_,null,{default:t(()=>[i(g,null,{default:t(()=>[i(h,null,{default:t(()=>[...p[32]||=[s(`Next`,-1)]]),_:1})]),_:1}),i(g,null,{default:t(()=>[i(h,{variant:`secondary`},{default:t(()=>[...p[33]||=[s(`Back`,-1)]]),_:1})]),_:1})]),_:1}),i(_,null,{default:t(()=>[i(g,null,{default:t(()=>[i(h,null,{default:t(()=>[...p[34]||=[s(`Submit`,-1)]]),_:1})]),_:1}),i(g,null,{default:t(()=>[i(h,{variant:`link`},{default:t(()=>[...p[35]||=[s(`Cancel`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),p[37]||=n(`h4`,null,`Icons, in two groups`,-1),i(v,{vertical:``},{default:t(()=>[i(_,null,{default:t(()=>[i(g,null,{default:t(()=>[i(h,{"aria-label":`Close vertical action list group 1`,variant:`plain`},{icon:t(()=>[i(c(d))]),_:1})]),_:1}),i(g,null,{default:t(()=>[i(h,{"aria-label":`Toggle vertical action list example group 1`,variant:`plain`},{icon:t(()=>[i(c(l))]),_:1})]),_:1})]),_:1}),i(_,null,{default:t(()=>[i(g,null,{default:t(()=>[i(h,{"aria-label":`Close vertical action list group 2`,variant:`plain`},{icon:t(()=>[i(c(d))]),_:1})]),_:1}),i(g,null,{default:t(()=>[i(h,{"aria-label":`Toggle vertical action list example group 2`,variant:`plain`},{icon:t(()=>[i(c(l))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{p as default};