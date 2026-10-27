import{F as e,G as t,c as n,ft as r,g as i,h as a,j as o,l as s,m as c}from"./runtime-core.esm-bundler-DKmYt4j6.js";import{A as l,D as u,F as d,Y as f}from"./index-Cl3hMFDe.js";var p=i({__name:`ActionList.story`,setup(i){return(i,p)=>{let m=e(`component-info`),h=e(`pf-button`),g=e(`pf-action-list-item`),_=e(`pf-action-list-group`),v=e(`pf-action-list`),y=e(`pf-menu-toggle`),b=e(`pf-dropdown-item`),x=e(`pf-divider`),S=e(`pf-dropdown`),C=e(`story-canvas`),w=e(`doc-page`);return o(),s(w,{name:`Components/ActionList.story.vue`,title:`Action list`},{description:t(()=>[...p[3]||=[n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[c(`An `),n(`strong`,null,`action list`),c(` is a group of actions, controls, or buttons with set spacing.`)])],-1)]]),apidocs:t(()=>[a(m,{name:`PfActionList`,doc:{name:`PfActionList`,exportName:`PfActionList`,displayName:`ActionList`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`iconList`,description:`Flag indicating the action list contains multiple icons and item padding should be removed`,required:!1,type:{name:`boolean`}},{name:`vertical`,tags:{beta:[{description:`Flag to lay the children out vertically instead of horizontally`,title:`beta`}]},required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/ActionList/ActionList.vue`]}}),a(m,{name:`PfActionListGroup`,doc:{name:`PfActionListGroup`,exportName:`PfActionListGroup`,displayName:`ActionListGroup`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`iconGroup`,description:`Flag indicating the action list group contains multiple icons and item padding should be removed`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/ActionList/ActionListGroup.vue`]}}),a(m,{name:`PfActionListItem`,doc:{name:`PfActionListItem`,exportName:`PfActionListItem`,displayName:`ActionListItem`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/ActionList/ActionListItem.vue`]}})]),default:t(()=>[p[38]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),n(`p`,null,[c(`See `),n(`a`,{href:`#/`},`common differences from patternfly-react`),c(`.`)]),n(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),a(C,{title:`Action list single group`,source:`<pf-action-list>
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
      <pf-dropdown close-on-select>
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
</pf-action-list>`},{default:t(()=>[a(v,null,{default:t(()=>[a(_,null,{default:t(()=>[a(g,null,{default:t(()=>[a(h,{id:`single-group-next-button`,variant:`primary`},{default:t(()=>[...p[4]||=[c(`Next`,-1)]]),_:1})]),_:1}),a(g,null,{default:t(()=>[a(h,{id:`single-group-back-button`,variant:`secondary`},{default:t(()=>[...p[5]||=[c(`Back`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),p[14]||=n(`br`,null,null,-1),p[15]||=c(` With kebab `,-1),a(v,null,{default:t(()=>[a(_,null,{default:t(()=>[a(g,null,{default:t(()=>[a(h,{id:`single-group-next-button2`,variant:`primary`},{default:t(()=>[...p[6]||=[c(`Next`,-1)]]),_:1})]),_:1}),a(g,null,{default:t(()=>[a(h,{id:`single-group-back-button2`,variant:`secondary`},{default:t(()=>[...p[7]||=[c(`Back`,-1)]]),_:1})]),_:1}),a(g,null,{default:t(()=>[a(S,{"close-on-select":``},{toggle:t(()=>[a(y,{variant:`plain`,"aria-label":`Action list single group kebab`},{icon:t(()=>[a(r(u))]),_:1})]),default:t(()=>[a(b,{to:`#`,onClick:p[0]||=f(()=>{},[`prevent`])},{default:t(()=>[...p[8]||=[c(`Link`,-1)]]),_:1}),a(b,{component:`button`},{default:t(()=>[...p[9]||=[c(`Action`,-1)]]),_:1}),a(b,{to:`#`,disabled:``,onClick:p[1]||=f(()=>{},[`prevent`])},{default:t(()=>[...p[10]||=[c(`Disabled Link`,-1)]]),_:1}),a(b,{component:`button`,disabled:``},{default:t(()=>[...p[11]||=[c(`Disabled Action`,-1)]]),_:1}),a(x,{component:`li`}),a(b,{to:`#`,onClick:p[2]||=f(()=>{},[`prevent`])},{default:t(()=>[...p[12]||=[c(`Separated Link`,-1)]]),_:1}),a(b,{component:`button`},{default:t(()=>[...p[13]||=[c(`Separated Action`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(C,{title:`Action list with icons`,source:`<h4>With list icons wrapper</h4>
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
</pf-action-list>`},{default:t(()=>[p[16]||=n(`h4`,null,`With list icons wrapper`,-1),a(v,{"icon-list":``},{default:t(()=>[a(g,null,{default:t(()=>[a(h,{id:`with-icons-times-button`,variant:`plain`,"aria-label":`times icon button`},{icon:t(()=>[a(r(d))]),_:1})]),_:1}),a(g,null,{default:t(()=>[a(h,{id:`with-icons-check-button`,variant:`plain`,"aria-label":`check icon button`},{icon:t(()=>[a(r(l))]),_:1})]),_:1})]),_:1}),p[17]||=n(`br`,null,null,-1),p[18]||=n(`h4`,null,`With group icons wrapper`,-1),a(v,null,{default:t(()=>[a(_,{"icon-group":``},{default:t(()=>[a(g,null,{default:t(()=>[a(h,{id:`with-icons-list-times-button`,variant:`plain`,"aria-label":`times icon button`},{icon:t(()=>[a(r(d))]),_:1})]),_:1}),a(g,null,{default:t(()=>[a(h,{id:`with-icons-list-check-button`,variant:`plain`,"aria-label":`check icon button`},{icon:t(()=>[a(r(l))]),_:1})]),_:1})]),_:1}),a(_,{"icon-group":``},{default:t(()=>[a(g,null,{default:t(()=>[a(h,{id:`with-icons-group-times-button`,variant:`plain`,"aria-label":`times icon button`},{icon:t(()=>[a(r(d))]),_:1})]),_:1}),a(g,null,{default:t(()=>[a(h,{id:`with-icons-group-check-button`,variant:`plain`,"aria-label":`check icon button`},{icon:t(()=>[a(r(l))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(C,{title:`Action list multiple groups`,source:`<pf-action-list>
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
</pf-action-list>`},{default:t(()=>[a(v,null,{default:t(()=>[a(_,null,{default:t(()=>[a(g,null,{default:t(()=>[a(h,{id:`multi-group-next-button`,variant:`primary`},{default:t(()=>[...p[19]||=[c(`Next`,-1)]]),_:1})]),_:1}),a(g,null,{default:t(()=>[a(h,{id:`multi-group-back-button`,variant:`secondary`},{default:t(()=>[...p[20]||=[c(`Back`,-1)]]),_:1})]),_:1})]),_:1}),a(_,null,{default:t(()=>[a(g,null,{default:t(()=>[a(h,{id:`multi-group-submit-button`,variant:`primary`},{default:t(()=>[...p[21]||=[c(`Submit`,-1)]]),_:1})]),_:1}),a(g,null,{default:t(()=>[a(h,{id:`multi-group-cancel-button`,variant:`link`},{default:t(()=>[...p[22]||=[c(`Cancel`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(C,{title:`Action list with cancel button`,source:`In modals, forms, data lists
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
</pf-action-list>`},{default:t(()=>[p[28]||=c(` In modals, forms, data lists `,-1),a(v,null,{default:t(()=>[a(_,null,{default:t(()=>[a(g,null,{default:t(()=>[a(h,{id:`with-cancel-save-button`,variant:`primary`},{default:t(()=>[...p[23]||=[c(`Save`,-1)]]),_:1})]),_:1}),a(g,null,{default:t(()=>[a(h,{id:`with-cancel-cancel-button`,variant:`link`},{default:t(()=>[...p[24]||=[c(`Cancel`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),p[29]||=n(`br`,null,null,-1),p[30]||=c(` In wizards `,-1),a(v,null,{default:t(()=>[a(_,null,{default:t(()=>[a(g,null,{default:t(()=>[a(h,{id:`with-cancel-next-button`,variant:`primary`},{default:t(()=>[...p[25]||=[c(`Next`,-1)]]),_:1})]),_:1}),a(g,null,{default:t(()=>[a(h,{id:`with-cancel-back-button`,variant:`secondary`},{default:t(()=>[...p[26]||=[c(`Back`,-1)]]),_:1})]),_:1})]),_:1}),a(_,null,{default:t(()=>[a(g,null,{default:t(()=>[a(h,{id:`with-cancel-cancel-button2`,variant:`link`},{default:t(()=>[...p[27]||=[c(`Cancel`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(C,{title:`Vertical action list`,source:`<h4>Multiple groups</h4>
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
</pf-action-list>`},{intro:t(()=>[...p[31]||=[n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[c(`The `),n(`code`,null,`vertical`),c(` prop lays the groups and items out vertically. This is a beta feature.`)])],-1)]]),default:t(()=>[p[36]||=n(`h4`,null,`Multiple groups`,-1),a(v,{vertical:``},{default:t(()=>[a(_,null,{default:t(()=>[a(g,null,{default:t(()=>[a(h,null,{default:t(()=>[...p[32]||=[c(`Next`,-1)]]),_:1})]),_:1}),a(g,null,{default:t(()=>[a(h,{variant:`secondary`},{default:t(()=>[...p[33]||=[c(`Back`,-1)]]),_:1})]),_:1})]),_:1}),a(_,null,{default:t(()=>[a(g,null,{default:t(()=>[a(h,null,{default:t(()=>[...p[34]||=[c(`Submit`,-1)]]),_:1})]),_:1}),a(g,null,{default:t(()=>[a(h,{variant:`link`},{default:t(()=>[...p[35]||=[c(`Cancel`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),p[37]||=n(`h4`,null,`Icons, in two groups`,-1),a(v,{vertical:``},{default:t(()=>[a(_,null,{default:t(()=>[a(g,null,{default:t(()=>[a(h,{"aria-label":`Close vertical action list group 1`,variant:`plain`},{icon:t(()=>[a(r(d))]),_:1})]),_:1}),a(g,null,{default:t(()=>[a(h,{"aria-label":`Toggle vertical action list example group 1`,variant:`plain`},{icon:t(()=>[a(r(l))]),_:1})]),_:1})]),_:1}),a(_,null,{default:t(()=>[a(g,null,{default:t(()=>[a(h,{"aria-label":`Close vertical action list group 2`,variant:`plain`},{icon:t(()=>[a(r(d))]),_:1})]),_:1}),a(g,null,{default:t(()=>[a(h,{"aria-label":`Toggle vertical action list example group 2`,variant:`plain`},{icon:t(()=>[a(r(l))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{p as default};