import{C as e,D as t,E as n,I as r,L as i,M as a,N as o,O as s,R as c,S as l,V as u,b as d,j as f,n as p,w as m,x as h,y as g,z as _}from"./index-mFbvqZfx.js";import{a as v,i as y,n as b,r as x,t as S}from"./laptop-icon-Dv8qlZg6.js";var C=4,w=p(s({__name:`Alert.story`,setup(s){let p=c(`Alert text`),w=i([]),T=i([]),E=i([]),D=e=>window.alert(e),O=()=>new Date().getTime(),k=i([]),A,j=()=>{clearInterval(A)},M=()=>{A=setInterval(()=>{k.push({title:`This is a async alert number ${k.length+1}`,variant:`info`,liveRegion:!0,key:O()})},1500)},N=c(!1),P=()=>console.log(`Overflow message clicked`),F=d(()=>{let e=T.length-C;return e>0?`View ${e} more alerts`:``});return(i,s)=>{let c=o(`component-info`),d=o(`pf-alert`),A=o(`story-canvas`),I=o(`pf-alert-action-link`),L=o(`pf-button`),R=o(`pf-input-group`),z=o(`pf-alert-group`),B=o(`doc-page`);return f(),l(B,{name:`Components/Alert.story.vue`,title:`Alert`},{description:r(()=>[...s[18]||=[n(`An `,-1),h(`b`,null,`alert`,-1),n(` is a notification that provides brief information to the user without blocking their workflow.`,-1)]]),apidocs:r(()=>[t(c,{name:`PfAlert`,doc:{name:`PfAlert`,exportName:`PfAlert`,displayName:`Alert`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`ariaLabel`,description:`Adds accessible text to the alert.`,required:!1,type:{name:`string`}},{name:`id`,description:`Uniquely identifies the alert.`,required:!1,type:{name:`string`}},{name:`expandable`,description:`Flag indicating that the alert is expandable.`,required:!1,type:{name:`boolean`}},{name:`onClose`,description:`Show close button`,required:!1,type:{name:`TSFunctionType`}},{name:`inline`,description:`Flag to indicate if the alert is inline.`,required:!1,type:{name:`boolean`}},{name:`liveRegion`,description:`Flag to indicate if the alert is in a live region.`,required:!1,type:{name:`boolean`}},{name:`plain`,description:`Flag to indicate if the alert is plain.`,required:!1,type:{name:`boolean`}},{name:`timeout`,description:`If set to true, the timeout is 8000 milliseconds. If a number is provided, alert will
be dismissed after that amount of time in milliseconds.`,required:!1,type:{name:`union`,elements:[{name:`number`},{name:`boolean`}]}},{name:`timeoutAnimation`,description:"If the user hovers over the alert and `timeout` expires, this is how long to wait\nbefore finally dismissing the alert.",required:!1,type:{name:`number`},defaultValue:{func:!1,value:`3000`}},{name:`title`,description:`Title of the alert.`,required:!1,type:{name:`string`}},{name:`component`,description:`Sets the element to use as the alert title. Default is h4.`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Component`}]},defaultValue:{func:!1,value:`'h4'`}},{name:`toggleAriaLabel`,description:`Adds accessible text to the alert toggle.`,required:!1,type:{name:`string`}},{name:`tooltipPosition`,description:`Position of the tooltip which is displayed if text is truncated.`,required:!1,type:{name:`Placement`},defaultValue:{func:!1,value:`'auto'`}},{name:`truncateTitle`,description:`Truncate title to number of lines.`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`0`}},{name:`variant`,description:`Adds alert variant styles.`,required:!1,type:{name:`TSTypeOperator`},defaultValue:{func:!1,value:`'custom'`}},{name:`variantLabel`,description:`Variant label text for screen readers.`,required:!1,type:{name:`string`}}],events:[{name:`mouseenter`,type:{names:[`Event`]}},{name:`mouseleave`,type:{names:[`Event`]}},{name:`timeout`}],slots:[{name:`custom-icon`},{name:`default`},{name:`action-links`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Alert/Alert.vue`]}}),t(c,{name:`PfAlertActionLink`,doc:{name:`PfAlertActionLink`,exportName:`PfAlertActionLink`,displayName:`AlertActionLink`,description:``,tags:{},props:[],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Alert/AlertActionLink.vue`]}}),t(c,{name:`PfAlertGroup`,doc:{name:`PfAlertGroup`,exportName:`PfAlertGroup`,displayName:`AlertGroup`,description:``,tags:{},props:[{name:`toast`,description:`Toast notifications are positioned at the top right corner of the viewport`,required:!1,type:{name:`boolean`}},{name:`appendTo`,description:`Determine where the alert is appended to`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`RendererElement`},{name:`null`},{name:`undefined`}]},defaultValue:{func:!1,value:`'body'`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Alert/AlertGroup.vue`]}}),t(c,{name:`PfAlertGroupInline`,doc:{name:`PfAlertGroupInline`,exportName:`PfAlertGroupInline`,displayName:`AlertGroupInline`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`toast`,required:!1,type:{name:`boolean`}},{name:`liveRegion`,required:!1,type:{name:`boolean`}},{name:`overflowMessage`,required:!1,type:{name:`string`}}],events:[{name:`overflowClick`,type:{names:[`PointerEvent`]}}],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Alert/AlertGroupInline.vue`]}}),t(c,{name:`PfAlertIcon`,doc:{name:`PfAlertIcon`,exportName:`PfAlertIcon`,displayName:`AlertIcon`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`variant`,required:!1,type:{name:`TSTypeOperator`},defaultValue:{func:!1,value:`'custom'`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Alert/AlertIcon.vue`]}})]),default:r(()=>[t(A,{title:`Types`,source:`<pf-alert title="Custom alert title" />
<pf-alert variant="info" title="Info alert title" />
<pf-alert variant="success" title="Success alert title" />
<pf-alert variant="warning" title="Warning alert title" />
<pf-alert variant="danger" title="Danger alert title" />`},{default:r(()=>[t(d,{title:`Custom alert title`}),t(d,{variant:`info`,title:`Info alert title`}),t(d,{variant:`success`,title:`Success alert title`}),t(d,{variant:`warning`,title:`Warning alert title`}),t(d,{variant:`danger`,title:`Danger alert title`})]),_:1}),t(A,{title:`With action links`,source:`<pf-alert title="Alert title" @close="alert('Clicked the close button')">
  <template #action-links>
    <pf-alert-action-link @click="alert('Clicked on View details')">View details</pf-alert-action-link>
    <pf-alert-action-link @click="alert('Clicked on Ignore')">Ignore</pf-alert-action-link>
  </template>
  <p>{{ sample_text }}</p>
</pf-alert>`},{default:r(()=>[t(d,{title:`Alert title`,onClose:s[2]||=e=>D(`Clicked the close button`)},{"action-links":r(()=>[t(I,{onClick:s[0]||=e=>D(`Clicked on View details`)},{default:r(()=>[...s[19]||=[n(`View details`,-1)]]),_:1}),t(I,{onClick:s[1]||=e=>D(`Clicked on Ignore`)},{default:r(()=>[...s[20]||=[n(`Ignore`,-1)]]),_:1})]),default:r(()=>[h(`p`,null,u(p.value),1)]),_:1})]),_:1}),t(A,{title:`Inline types`,source:`<pf-alert variant="custom" inline title="Custom alert title" />
<pf-alert variant="info" inline title="Info alert title" />
<pf-alert variant="success" inline title="Success alert title" />
<pf-alert variant="warning" inline title="Warning alert title" />
<pf-alert variant="danger" inline title="Danger alert title" />`},{default:r(()=>[t(d,{variant:`custom`,inline:``,title:`Custom alert title`}),t(d,{variant:`info`,inline:``,title:`Info alert title`}),t(d,{variant:`success`,inline:``,title:`Success alert title`}),t(d,{variant:`warning`,inline:``,title:`Warning alert title`}),t(d,{variant:`danger`,inline:``,title:`Danger alert title`})]),_:1}),t(A,{title:`Inline variations`,source:`<pf-alert
  inline
  variant="success"
  title="Success alert title"
  @close="alert('Clicked the close button')"
>
  <template #action-links>
    <pf-alert-action-link @click="alert('Clicked on View details')">View details</pf-alert-action-link>
    <pf-alert-action-link @click="alert('Clicked on Ignore')">Ignore</pf-alert-action-link>
  </template>

  <p>Success alert description. This should tell the user more information about the alert.</p>
</pf-alert>`},{default:r(()=>[t(d,{inline:``,variant:`success`,title:`Success alert title`,onClose:s[5]||=e=>D(`Clicked the close button`)},{"action-links":r(()=>[t(I,{onClick:s[3]||=e=>D(`Clicked on View details`)},{default:r(()=>[...s[21]||=[n(`View details`,-1)]]),_:1}),t(I,{onClick:s[4]||=e=>D(`Clicked on Ignore`)},{default:r(()=>[...s[22]||=[n(`Ignore`,-1)]]),_:1})]),default:r(()=>[s[23]||=h(`p`,null,`Success alert description. This should tell the user more information about the alert.`,-1)]),_:1})]),_:1}),t(A,{title:`Static live region`,source:`<pf-alert
  live-region
  variant="info"
  title="Default live region configuration"
  @close="alert('Clicked the close button')"
>
  This Alert uses the recommended
  <code>live-region</code> prop to automatically sets ARIA attributes and CSS
  classes.
</pf-alert>

<pf-alert
  aria-live="assertive"
  aria-relevant="additions text"
  aria-atomic="true"
  variant="info"
  title="Customized live region"
  @close="alert('Clicked the close button')"
>
  You can alternatively omit the
  <code>live-region</code> prop to specify ARIA attributes and CSS manually on
  the containing element.
</pf-alert>`},{default:r(()=>[t(d,{"live-region":``,variant:`info`,title:`Default live region configuration`,onClose:s[6]||=e=>D(`Clicked the close button`)},{default:r(()=>[...s[24]||=[n(` This Alert uses the recommended `,-1),h(`code`,null,`live-region`,-1),n(` prop to automatically sets ARIA attributes and CSS classes. `,-1)]]),_:1}),t(d,{"aria-live":`assertive`,"aria-relevant":`additions text`,"aria-atomic":`true`,variant:`info`,title:`Customized live region`,onClose:s[7]||=e=>D(`Clicked the close button`)},{default:r(()=>[...s[25]||=[n(` You can alternatively omit the `,-1),h(`code`,null,`live-region`,-1),n(` prop to specify ARIA attributes and CSS manually on the containing element. `,-1)]]),_:1})]),_:1}),t(A,{title:`Dynamic live region`,source:`<pf-input-group style="margin-bottom: 16px">
  <pf-button
    variant="secondary"
    @click="alerts.push({
      title: 'Single Success Alert',
      variant: 'success',
      liveRegion: true,
      key: getUniqueId(),
    })"
  >
    Add Single Success Alert
  </pf-button>
  <pf-button
    variant="secondary"
    @click="alerts.push({
      title: 'Single Info Alert',
      variant: 'info',
      liveRegion: true,
      key: getUniqueId(),
    })"
  >
    Add Single Info Alert
  </pf-button>
  <pf-button
    variant="secondary"
    @click="alerts.push({
      title: 'Single Danger Alert',
      variant: 'danger',
      ariaLive: 'assertive',
      ariaRelevant: 'additions text',
      ariaAtomic: 'false',
      key: getUniqueId(),
    })"
  >
    Add Single Danger Alert
  </pf-button>
</pf-input-group>

<pf-alert
  v-for="a of alerts"
  :key="a.key"
  :variant="a.variant"
  :title="a.title"
  :live-region="a.liveRegion"
  :aria-live="a.ariaLive"
  :aria-relevant="a.ariaRelevant"
  :aria-atomic="a.ariaAtomic" />`},{default:r(()=>[t(R,{style:{"margin-bottom":`16px`}},{default:r(()=>[t(L,{variant:`secondary`,onClick:s[8]||=e=>w.push({title:`Single Success Alert`,variant:`success`,liveRegion:!0,key:O()})},{default:r(()=>[...s[26]||=[n(` Add Single Success Alert `,-1)]]),_:1}),t(L,{variant:`secondary`,onClick:s[9]||=e=>w.push({title:`Single Info Alert`,variant:`info`,liveRegion:!0,key:O()})},{default:r(()=>[...s[27]||=[n(` Add Single Info Alert `,-1)]]),_:1}),t(L,{variant:`secondary`,onClick:s[10]||=e=>w.push({title:`Single Danger Alert`,variant:`danger`,ariaLive:`assertive`,ariaRelevant:`additions text`,ariaAtomic:`false`,key:O()})},{default:r(()=>[...s[28]||=[n(` Add Single Danger Alert `,-1)]]),_:1})]),_:1}),(f(!0),m(g,null,a(w,e=>(f(),l(d,{key:e.key,variant:e.variant,title:e.title,"live-region":e.liveRegion,"aria-live":e.ariaLive,"aria-relevant":e.ariaRelevant,"aria-atomic":e.ariaAtomic},null,8,[`variant`,`title`,`live-region`,`aria-live`,`aria-relevant`,`aria-atomic`]))),128))]),_:1}),t(A,{title:`Async live region`,source:`<pf-input-group style="margin-bottom: 16px">
  <pf-button variant="secondary" @click="startAsyncAlert">Start Async Info Alerts</pf-button>
  <pf-button variant="secondary" @click="stopAsyncAlert">Stop Async Info Alerts</pf-button>
</pf-input-group>

<pf-alert
  v-for="a of asyncAlerts"
  :key="a.key"
  :variant="a.variant"
  :title="a.title"
  :live-region="a.liveRegion" />`},{default:r(()=>[t(R,{style:{"margin-bottom":`16px`}},{default:r(()=>[t(L,{variant:`secondary`,onClick:M},{default:r(()=>[...s[29]||=[n(`Start Async Info Alerts`,-1)]]),_:1}),t(L,{variant:`secondary`,onClick:j},{default:r(()=>[...s[30]||=[n(`Stop Async Info Alerts`,-1)]]),_:1})]),_:1}),(f(!0),m(g,null,a(k,e=>(f(),l(d,{key:e.key,variant:e.variant,title:e.title,"live-region":e.liveRegion},null,8,[`variant`,`title`,`live-region`]))),128))]),_:1}),t(A,{title:`Alert timeout`,source:`<pf-input-group style="margin-bottom: 16px">
  <pf-button
    variant="secondary"
    :disabled="showTimeoutAlerts"
    @click="showTimeoutAlerts = !showTimeoutAlerts"
  >
    <template v-if="showTimeoutAlerts">0 alerts to show</template>
    <template v-else>Show 2 alerts</template>
  </pf-button>
</pf-input-group>`},{default:r(()=>[t(R,{style:{"margin-bottom":`16px`}},{default:r(()=>[t(L,{variant:`secondary`,disabled:N.value,onClick:s[11]||=e=>N.value=!N.value},{default:r(()=>[N.value?(f(),m(g,{key:0},[n(`0 alerts to show`)],64)):(f(),m(g,{key:1},[n(`Show 2 alerts`)],64))]),_:1},8,[`disabled`])]),_:1}),N.value?(f(),m(g,{key:0},[t(d,{title:`Default timeout Alert`,timeout:``},{default:r(()=>[...s[31]||=[n(` This alert will dismiss after 8 seconds `,-1)]]),_:1}),t(d,{title:`Custom timeout Alert`,timeout:16e3},{default:r(()=>[...s[32]||=[n(` This alert will dismiss after 16 seconds `,-1)]]),_:1})],64)):e(``,!0)]),_:1}),t(A,{title:`Custom icons`,source:`<pf-alert title="Custom alert title">
  <template #custom-icon>
    <users-icon />
  </template>
</pf-alert>
<pf-alert variant="info" title="Info alert title">
  <template #custom-icon>
    <box-icon />
  </template>
</pf-alert>
<pf-alert variant="success" title="Success alert title">
  <template #custom-icon>
    <database-icon />
  </template>
</pf-alert>
<pf-alert variant="warning" title="Warning alert title">
  <template #custom-icon>
    <server-icon />
  </template>
</pf-alert>
<pf-alert variant="danger" title="Danger alert title">
  <template #custom-icon>
    <laptop-icon />
  </template>
</pf-alert>`},{default:r(()=>[t(d,{title:`Custom alert title`},{"custom-icon":r(()=>[t(_(v))]),_:1}),t(d,{variant:`info`,title:`Info alert title`},{"custom-icon":r(()=>[t(_(y))]),_:1}),t(d,{variant:`success`,title:`Success alert title`},{"custom-icon":r(()=>[t(_(x))]),_:1}),t(d,{variant:`warning`,title:`Warning alert title`},{"custom-icon":r(()=>[t(_(b))]),_:1}),t(d,{variant:`danger`,title:`Danger alert title`},{"custom-icon":r(()=>[t(_(S))]),_:1})]),_:1}),t(A,{title:`Static Alert Group`,source:`<pf-alert-group>
  <pf-alert title="Success Alert" variant="success" inline />
  <pf-alert title="Info Alert" variant="info" inline />
</pf-alert-group>`},{default:r(()=>[t(z,null,{default:r(()=>[t(d,{title:`Success Alert`,variant:`success`,inline:``}),t(d,{title:`Info Alert`,variant:`info`,inline:``})]),_:1})]),_:1}),t(A,{title:`Toast`,source:`<pf-input-group>
  <pf-button
    variant="secondary"
    @click="alerts3.push({
      title: 'Toast Success Alert',
      variant: 'success',
      key: getUniqueId(),
    })"
  >
    Add Toast Success Alert
  </pf-button>
  <pf-button
    variant="secondary"
    @click="alerts3.push({
      title: 'Toast Info Alert',
      variant: 'info',
      key: getUniqueId(),
    })"
  >
    Add Toast Info Alert
  </pf-button>
  <pf-button
    variant="secondary"
    @click="alerts3.push({
      title: 'Toast Danger Alert',
      variant: 'danger',
      key: getUniqueId(),
    })"
  >
    Add Toast Danger Alert
  </pf-button>
</pf-input-group>

<pf-alert-group toast>
  <pf-alert
    v-for="(a, index) of alerts3"
    :key="a.key"
    :variant="a.variant"
    :title="a.title"
    live-region
    @close="alerts3.splice(index, 1)" />
</pf-alert-group>`},{default:r(()=>[t(R,null,{default:r(()=>[t(L,{variant:`secondary`,onClick:s[12]||=e=>E.push({title:`Toast Success Alert`,variant:`success`,key:O()})},{default:r(()=>[...s[33]||=[n(` Add Toast Success Alert `,-1)]]),_:1}),t(L,{variant:`secondary`,onClick:s[13]||=e=>E.push({title:`Toast Info Alert`,variant:`info`,key:O()})},{default:r(()=>[...s[34]||=[n(` Add Toast Info Alert `,-1)]]),_:1}),t(L,{variant:`secondary`,onClick:s[14]||=e=>E.push({title:`Toast Danger Alert`,variant:`danger`,key:O()})},{default:r(()=>[...s[35]||=[n(` Add Toast Danger Alert `,-1)]]),_:1})]),_:1}),t(z,{toast:``},{default:r(()=>[(f(!0),m(g,null,a(E,(e,t)=>(f(),l(d,{key:e.key,variant:e.variant,title:e.title,"live-region":``,onClose:e=>E.splice(t,1)},null,8,[`variant`,`title`,`onClose`]))),128))]),_:1})]),_:1}),t(A,{title:`Toast with overflow capture`,source:`<pf-input-group>
  <pf-button
    variant="secondary"
    @click="alerts2.push({
      title: 'Toast Success Alert',
      variant: 'success',
      key: getUniqueId(),
    })"
  >
    Add Toast Success Alert
  </pf-button>
  <pf-button
    variant="secondary"
    @click="alerts2.push({
      title: 'Toast Info Alert',
      variant: 'info',
      key: getUniqueId(),
    })"
  >
    Add Toast Info Alert
  </pf-button>
  <pf-button
    variant="secondary"
    @click="alerts2.push({
      title: 'Toast Danger Alert',
      variant: 'danger',
      key: getUniqueId(),
    })"
  >
    Add Toast Danger Alert
  </pf-button>
</pf-input-group>

<pf-alert-group toast live-region :overflow-message="overflowMessage" @overflow-click="onOverflowClick">
  <pf-alert
    v-for="(a, index) of alerts2.slice(0, maxDisplayed)"
    :key="a.key"
    :variant="a.variant"
    :title="a.title"
    live-region
    @close="alerts2.splice(index, 1)" />
</pf-alert-group>`},{default:r(()=>[t(R,null,{default:r(()=>[t(L,{variant:`secondary`,onClick:s[15]||=e=>T.push({title:`Toast Success Alert`,variant:`success`,key:O()})},{default:r(()=>[...s[36]||=[n(` Add Toast Success Alert `,-1)]]),_:1}),t(L,{variant:`secondary`,onClick:s[16]||=e=>T.push({title:`Toast Info Alert`,variant:`info`,key:O()})},{default:r(()=>[...s[37]||=[n(` Add Toast Info Alert `,-1)]]),_:1}),t(L,{variant:`secondary`,onClick:s[17]||=e=>T.push({title:`Toast Danger Alert`,variant:`danger`,key:O()})},{default:r(()=>[...s[38]||=[n(` Add Toast Danger Alert `,-1)]]),_:1})]),_:1}),t(z,{toast:``,"live-region":``,"overflow-message":F.value,onOverflowClick:P},{default:r(()=>[(f(!0),m(g,null,a(T.slice(0,C),(e,t)=>(f(),l(d,{key:e.key,variant:e.variant,title:e.title,"live-region":``,onClose:e=>T.splice(t,1)},null,8,[`variant`,`title`,`onClose`]))),128))]),_:1},8,[`overflow-message`])]),_:1})]),_:1})}}}),[[`__scopeId`,`data-v-cf2ce1bd`]]);export{w as default};