import{H as e,N as t,Q as n,Tt as r,Z as i,c as a,h as o,it as s,j as c,k as l,l as u,m as d,n as f,o as p,p as m,s as h,u as g}from"./runtime-core.esm-bundler-DvxuuL12.js";import{n as _}from"./index-Dwl70BjG.js";import{a as v,i as y,n as b,r as x,t as S}from"./laptop-icon-CAsuZICs.js";var C=4,w=_(o({__name:`Alert.story`,setup(o){let _=n(`Alert text`),w=i([]),T=i([]),E=i([]),D=e=>window.alert(e),O=()=>new Date().getTime(),k=i([]),A,j=()=>{clearInterval(A)},M=()=>{A=setInterval(()=>{k.push({title:`This is a async alert number ${k.length+1}`,variant:`info`,liveRegion:!0,key:O()})},1500)},N=n(!1),P=()=>console.log(`Overflow message clicked`),F=p(()=>{let e=T.length-C;return e>0?`View ${e} more alerts`:``});return(n,i)=>{let o=t(`component-info`),p=t(`pf-alert`),A=t(`story-canvas`),I=t(`pf-alert-action-link`),L=t(`pf-button`),R=t(`pf-input-group`),z=t(`pf-alert-group`),B=t(`doc-page`);return l(),a(B,{name:`Components/Alert.story.vue`,title:`Alert`},{description:e(()=>[...i[18]||=[m(`An `,-1),h(`b`,null,`alert`,-1),m(` is a notification that provides brief information to the user without blocking their workflow.`,-1)]]),apidocs:e(()=>[d(o,{name:`PfAlert`,doc:{name:`PfAlert`,exportName:`PfAlert`,displayName:`Alert`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`ariaLabel`,description:`Adds accessible text to the alert.`,required:!1,type:{name:`string`}},{name:`id`,description:`Uniquely identifies the alert.`,required:!1,type:{name:`string`}},{name:`expandable`,description:`Flag indicating that the alert is expandable.`,required:!1,type:{name:`boolean`}},{name:`onClose`,description:`Show close button`,required:!1,type:{name:`TSFunctionType`}},{name:`inline`,description:`Flag to indicate if the alert is inline.`,required:!1,type:{name:`boolean`}},{name:`liveRegion`,description:`Flag to indicate if the alert is in a live region.`,required:!1,type:{name:`boolean`}},{name:`plain`,description:`Flag to indicate if the alert is plain.`,required:!1,type:{name:`boolean`}},{name:`timeout`,description:`If set to true, the timeout is 8000 milliseconds. If a number is provided, alert will
be dismissed after that amount of time in milliseconds.`,required:!1,type:{name:`union`,elements:[{name:`number`},{name:`boolean`}]}},{name:`timeoutAnimation`,description:"If the user hovers over the alert and `timeout` expires, this is how long to wait\nbefore finally dismissing the alert.",required:!1,type:{name:`number`},defaultValue:{func:!1,value:`3000`}},{name:`title`,description:`Title of the alert.`,required:!1,type:{name:`string`}},{name:`component`,description:`Sets the element to use as the alert title. Default is h4.`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Component`}]},defaultValue:{func:!1,value:`'h4'`}},{name:`toggleAriaLabel`,description:`Adds accessible text to the alert toggle.`,required:!1,type:{name:`string`}},{name:`tooltipPosition`,description:`Position of the tooltip which is displayed if text is truncated.`,required:!1,type:{name:`Placement`},defaultValue:{func:!1,value:`'auto'`}},{name:`truncateTitle`,description:`Truncate title to number of lines.`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`0`}},{name:`variant`,description:`Adds alert variant styles.`,required:!1,type:{name:`TSTypeOperator`},defaultValue:{func:!1,value:`'custom'`}},{name:`variantLabel`,description:`Variant label text for screen readers.`,required:!1,type:{name:`string`}}],events:[{name:`mouseenter`,type:{names:[`Event`]}},{name:`mouseleave`,type:{names:[`Event`]}},{name:`timeout`}],slots:[{name:`custom-icon`},{name:`default`},{name:`action-links`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Alert/Alert.vue`]}}),d(o,{name:`PfAlertActionLink`,doc:{name:`PfAlertActionLink`,exportName:`PfAlertActionLink`,displayName:`AlertActionLink`,description:``,tags:{},props:[],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Alert/AlertActionLink.vue`]}}),d(o,{name:`PfAlertGroup`,doc:{name:`PfAlertGroup`,exportName:`PfAlertGroup`,displayName:`AlertGroup`,description:``,tags:{},props:[{name:`toast`,description:`Toast notifications are positioned at the top right corner of the viewport`,required:!1,type:{name:`boolean`}},{name:`appendTo`,description:`Determine where the alert is appended to`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`RendererElement`},{name:`null`},{name:`undefined`}]},defaultValue:{func:!1,value:`'body'`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Alert/AlertGroup.vue`]}}),d(o,{name:`PfAlertGroupInline`,doc:{name:`PfAlertGroupInline`,exportName:`PfAlertGroupInline`,displayName:`AlertGroupInline`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`toast`,required:!1,type:{name:`boolean`}},{name:`liveRegion`,required:!1,type:{name:`boolean`}},{name:`overflowMessage`,required:!1,type:{name:`string`}}],events:[{name:`overflowClick`,type:{names:[`PointerEvent`]}}],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Alert/AlertGroupInline.vue`]}}),d(o,{name:`PfAlertIcon`,doc:{name:`PfAlertIcon`,exportName:`PfAlertIcon`,displayName:`AlertIcon`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`variant`,required:!1,type:{name:`TSTypeOperator`},defaultValue:{func:!1,value:`'custom'`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Alert/AlertIcon.vue`]}})]),default:e(()=>[d(A,{title:`Types`,source:`<pf-alert title="Custom alert title" />
<pf-alert variant="info" title="Info alert title" />
<pf-alert variant="success" title="Success alert title" />
<pf-alert variant="warning" title="Warning alert title" />
<pf-alert variant="danger" title="Danger alert title" />`},{default:e(()=>[d(p,{title:`Custom alert title`}),d(p,{variant:`info`,title:`Info alert title`}),d(p,{variant:`success`,title:`Success alert title`}),d(p,{variant:`warning`,title:`Warning alert title`}),d(p,{variant:`danger`,title:`Danger alert title`})]),_:1}),d(A,{title:`With action links`,source:`<pf-alert title="Alert title" @close="alert('Clicked the close button')">
  <template #action-links>
    <pf-alert-action-link @click="alert('Clicked on View details')">View details</pf-alert-action-link>
    <pf-alert-action-link @click="alert('Clicked on Ignore')">Ignore</pf-alert-action-link>
  </template>
  <p>{{ sample_text }}</p>
</pf-alert>`},{default:e(()=>[d(p,{title:`Alert title`,onClose:i[2]||=e=>D(`Clicked the close button`)},{"action-links":e(()=>[d(I,{onClick:i[0]||=e=>D(`Clicked on View details`)},{default:e(()=>[...i[19]||=[m(`View details`,-1)]]),_:1}),d(I,{onClick:i[1]||=e=>D(`Clicked on Ignore`)},{default:e(()=>[...i[20]||=[m(`Ignore`,-1)]]),_:1})]),default:e(()=>[h(`p`,null,r(_.value),1)]),_:1})]),_:1}),d(A,{title:`Inline types`,source:`<pf-alert variant="custom" inline title="Custom alert title" />
<pf-alert variant="info" inline title="Info alert title" />
<pf-alert variant="success" inline title="Success alert title" />
<pf-alert variant="warning" inline title="Warning alert title" />
<pf-alert variant="danger" inline title="Danger alert title" />`},{default:e(()=>[d(p,{variant:`custom`,inline:``,title:`Custom alert title`}),d(p,{variant:`info`,inline:``,title:`Info alert title`}),d(p,{variant:`success`,inline:``,title:`Success alert title`}),d(p,{variant:`warning`,inline:``,title:`Warning alert title`}),d(p,{variant:`danger`,inline:``,title:`Danger alert title`})]),_:1}),d(A,{title:`Inline variations`,source:`<pf-alert
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
</pf-alert>`},{default:e(()=>[d(p,{inline:``,variant:`success`,title:`Success alert title`,onClose:i[5]||=e=>D(`Clicked the close button`)},{"action-links":e(()=>[d(I,{onClick:i[3]||=e=>D(`Clicked on View details`)},{default:e(()=>[...i[21]||=[m(`View details`,-1)]]),_:1}),d(I,{onClick:i[4]||=e=>D(`Clicked on Ignore`)},{default:e(()=>[...i[22]||=[m(`Ignore`,-1)]]),_:1})]),default:e(()=>[i[23]||=h(`p`,null,`Success alert description. This should tell the user more information about the alert.`,-1)]),_:1})]),_:1}),d(A,{title:`Static live region`,source:`<pf-alert
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
</pf-alert>`},{default:e(()=>[d(p,{"live-region":``,variant:`info`,title:`Default live region configuration`,onClose:i[6]||=e=>D(`Clicked the close button`)},{default:e(()=>[...i[24]||=[m(` This Alert uses the recommended `,-1),h(`code`,null,`live-region`,-1),m(` prop to automatically sets ARIA attributes and CSS classes. `,-1)]]),_:1}),d(p,{"aria-live":`assertive`,"aria-relevant":`additions text`,"aria-atomic":`true`,variant:`info`,title:`Customized live region`,onClose:i[7]||=e=>D(`Clicked the close button`)},{default:e(()=>[...i[25]||=[m(` You can alternatively omit the `,-1),h(`code`,null,`live-region`,-1),m(` prop to specify ARIA attributes and CSS manually on the containing element. `,-1)]]),_:1})]),_:1}),d(A,{title:`Dynamic live region`,source:`<pf-input-group style="margin-bottom: 16px">
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
  :aria-atomic="a.ariaAtomic" />`},{default:e(()=>[d(R,{style:{"margin-bottom":`16px`}},{default:e(()=>[d(L,{variant:`secondary`,onClick:i[8]||=e=>w.push({title:`Single Success Alert`,variant:`success`,liveRegion:!0,key:O()})},{default:e(()=>[...i[26]||=[m(` Add Single Success Alert `,-1)]]),_:1}),d(L,{variant:`secondary`,onClick:i[9]||=e=>w.push({title:`Single Info Alert`,variant:`info`,liveRegion:!0,key:O()})},{default:e(()=>[...i[27]||=[m(` Add Single Info Alert `,-1)]]),_:1}),d(L,{variant:`secondary`,onClick:i[10]||=e=>w.push({title:`Single Danger Alert`,variant:`danger`,ariaLive:`assertive`,ariaRelevant:`additions text`,ariaAtomic:`false`,key:O()})},{default:e(()=>[...i[28]||=[m(` Add Single Danger Alert `,-1)]]),_:1})]),_:1}),(l(!0),g(f,null,c(w,e=>(l(),a(p,{key:e.key,variant:e.variant,title:e.title,"live-region":e.liveRegion,"aria-live":e.ariaLive,"aria-relevant":e.ariaRelevant,"aria-atomic":e.ariaAtomic},null,8,[`variant`,`title`,`live-region`,`aria-live`,`aria-relevant`,`aria-atomic`]))),128))]),_:1}),d(A,{title:`Async live region`,source:`<pf-input-group style="margin-bottom: 16px">
  <pf-button variant="secondary" @click="startAsyncAlert">Start Async Info Alerts</pf-button>
  <pf-button variant="secondary" @click="stopAsyncAlert">Stop Async Info Alerts</pf-button>
</pf-input-group>

<pf-alert
  v-for="a of asyncAlerts"
  :key="a.key"
  :variant="a.variant"
  :title="a.title"
  :live-region="a.liveRegion" />`},{default:e(()=>[d(R,{style:{"margin-bottom":`16px`}},{default:e(()=>[d(L,{variant:`secondary`,onClick:M},{default:e(()=>[...i[29]||=[m(`Start Async Info Alerts`,-1)]]),_:1}),d(L,{variant:`secondary`,onClick:j},{default:e(()=>[...i[30]||=[m(`Stop Async Info Alerts`,-1)]]),_:1})]),_:1}),(l(!0),g(f,null,c(k,e=>(l(),a(p,{key:e.key,variant:e.variant,title:e.title,"live-region":e.liveRegion},null,8,[`variant`,`title`,`live-region`]))),128))]),_:1}),d(A,{title:`Alert timeout`,source:`<pf-input-group style="margin-bottom: 16px">
  <pf-button
    variant="secondary"
    :disabled="showTimeoutAlerts"
    @click="showTimeoutAlerts = !showTimeoutAlerts"
  >
    <template v-if="showTimeoutAlerts">0 alerts to show</template>
    <template v-else>Show 2 alerts</template>
  </pf-button>
</pf-input-group>`},{default:e(()=>[d(R,{style:{"margin-bottom":`16px`}},{default:e(()=>[d(L,{variant:`secondary`,disabled:N.value,onClick:i[11]||=e=>N.value=!N.value},{default:e(()=>[N.value?(l(),g(f,{key:0},[m(`0 alerts to show`)],64)):(l(),g(f,{key:1},[m(`Show 2 alerts`)],64))]),_:1},8,[`disabled`])]),_:1}),N.value?(l(),g(f,{key:0},[d(p,{title:`Default timeout Alert`,timeout:``},{default:e(()=>[...i[31]||=[m(` This alert will dismiss after 8 seconds `,-1)]]),_:1}),d(p,{title:`Custom timeout Alert`,timeout:16e3},{default:e(()=>[...i[32]||=[m(` This alert will dismiss after 16 seconds `,-1)]]),_:1})],64)):u(``,!0)]),_:1}),d(A,{title:`Custom icons`,source:`<pf-alert title="Custom alert title">
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
</pf-alert>`},{default:e(()=>[d(p,{title:`Custom alert title`},{"custom-icon":e(()=>[d(s(v))]),_:1}),d(p,{variant:`info`,title:`Info alert title`},{"custom-icon":e(()=>[d(s(y))]),_:1}),d(p,{variant:`success`,title:`Success alert title`},{"custom-icon":e(()=>[d(s(x))]),_:1}),d(p,{variant:`warning`,title:`Warning alert title`},{"custom-icon":e(()=>[d(s(b))]),_:1}),d(p,{variant:`danger`,title:`Danger alert title`},{"custom-icon":e(()=>[d(s(S))]),_:1})]),_:1}),d(A,{title:`Static Alert Group`,source:`<pf-alert-group>
  <pf-alert title="Success Alert" variant="success" inline />
  <pf-alert title="Info Alert" variant="info" inline />
</pf-alert-group>`},{default:e(()=>[d(z,null,{default:e(()=>[d(p,{title:`Success Alert`,variant:`success`,inline:``}),d(p,{title:`Info Alert`,variant:`info`,inline:``})]),_:1})]),_:1}),d(A,{title:`Toast`,source:`<pf-input-group>
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
</pf-alert-group>`},{default:e(()=>[d(R,null,{default:e(()=>[d(L,{variant:`secondary`,onClick:i[12]||=e=>E.push({title:`Toast Success Alert`,variant:`success`,key:O()})},{default:e(()=>[...i[33]||=[m(` Add Toast Success Alert `,-1)]]),_:1}),d(L,{variant:`secondary`,onClick:i[13]||=e=>E.push({title:`Toast Info Alert`,variant:`info`,key:O()})},{default:e(()=>[...i[34]||=[m(` Add Toast Info Alert `,-1)]]),_:1}),d(L,{variant:`secondary`,onClick:i[14]||=e=>E.push({title:`Toast Danger Alert`,variant:`danger`,key:O()})},{default:e(()=>[...i[35]||=[m(` Add Toast Danger Alert `,-1)]]),_:1})]),_:1}),d(z,{toast:``},{default:e(()=>[(l(!0),g(f,null,c(E,(e,t)=>(l(),a(p,{key:e.key,variant:e.variant,title:e.title,"live-region":``,onClose:e=>E.splice(t,1)},null,8,[`variant`,`title`,`onClose`]))),128))]),_:1})]),_:1}),d(A,{title:`Toast with overflow capture`,source:`<pf-input-group>
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
</pf-alert-group>`},{default:e(()=>[d(R,null,{default:e(()=>[d(L,{variant:`secondary`,onClick:i[15]||=e=>T.push({title:`Toast Success Alert`,variant:`success`,key:O()})},{default:e(()=>[...i[36]||=[m(` Add Toast Success Alert `,-1)]]),_:1}),d(L,{variant:`secondary`,onClick:i[16]||=e=>T.push({title:`Toast Info Alert`,variant:`info`,key:O()})},{default:e(()=>[...i[37]||=[m(` Add Toast Info Alert `,-1)]]),_:1}),d(L,{variant:`secondary`,onClick:i[17]||=e=>T.push({title:`Toast Danger Alert`,variant:`danger`,key:O()})},{default:e(()=>[...i[38]||=[m(` Add Toast Danger Alert `,-1)]]),_:1})]),_:1}),d(z,{toast:``,"live-region":``,"overflow-message":F.value,onOverflowClick:P},{default:e(()=>[(l(!0),g(f,null,c(T.slice(0,C),(e,t)=>(l(),a(p,{key:e.key,variant:e.variant,title:e.title,"live-region":``,onClose:e=>T.splice(t,1)},null,8,[`variant`,`title`,`onClose`]))),128))]),_:1},8,[`overflow-message`])]),_:1})]),_:1})}}}),[[`__scopeId`,`data-v-cf2ce1bd`]]);export{w as default};