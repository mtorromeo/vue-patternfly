import{$ as e,N as t,Ot as n,U as r,c as i,et as a,h as o,j as s,k as c,l,m as u,n as d,o as f,p,s as m,st as h,u as g}from"./runtime-core.esm-bundler-Bo9Nr7Z8.js";import{n as _}from"./index-DEZgkdzS.js";import{a as v,i as y,n as b,r as x,t as S}from"./laptop-icon-Omn6CEaA.js";var C=4,w=_(o({__name:`Alert.story`,setup(o){let _=a(`Alert text`),w=e([]),T=e([]),E=e([]),D=e=>window.alert(e),O=()=>new Date().getTime(),k=e([]),A,j=()=>{clearInterval(A)},M=()=>{A=setInterval(()=>{k.push({title:`This is a async alert number ${k.length+1}`,variant:`info`,liveRegion:!0,key:O()})},1500)},N=a(!1),P=()=>console.log(`Overflow message clicked`),F=f(()=>{let e=T.length-C;return e>0?`View ${e} more alerts`:``});return(e,a)=>{let o=t(`component-info`),f=t(`pf-alert`),A=t(`story-canvas`),I=t(`pf-alert-action-link`),L=t(`pf-button`),R=t(`pf-input-group`),z=t(`pf-alert-group`),B=t(`doc-page`);return c(),i(B,{name:`Components/Alert.story.vue`,title:`Alert`},{description:r(()=>[...a[18]||=[p(`An `,-1),m(`b`,null,`alert`,-1),p(` is a notification that provides brief information to the user without blocking their workflow.`,-1)]]),apidocs:r(()=>[u(o,{name:`PfAlert`,doc:{name:`PfAlert`,exportName:`PfAlert`,displayName:`Alert`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`ariaLabel`,description:`Adds accessible text to the alert.`,required:!1,type:{name:`string`}},{name:`id`,description:`Uniquely identifies the alert.`,required:!1,type:{name:`string`}},{name:`expandable`,description:`Flag indicating that the alert is expandable.`,required:!1,type:{name:`boolean`}},{name:`onClose`,description:`Show close button`,required:!1,type:{name:`TSFunctionType`}},{name:`inline`,description:`Flag to indicate if the alert is inline.`,required:!1,type:{name:`boolean`}},{name:`liveRegion`,description:`Flag to indicate if the alert is in a live region.`,required:!1,type:{name:`boolean`}},{name:`plain`,description:`Flag to indicate if the alert is plain.`,required:!1,type:{name:`boolean`}},{name:`timeout`,description:`If set to true, the timeout is 8000 milliseconds. If a number is provided, alert will
be dismissed after that amount of time in milliseconds.`,required:!1,type:{name:`union`,elements:[{name:`number`},{name:`boolean`}]}},{name:`timeoutAnimation`,description:"If the user hovers over the alert and `timeout` expires, this is how long to wait\nbefore finally dismissing the alert.",required:!1,type:{name:`number`},defaultValue:{func:!1,value:`3000`}},{name:`title`,description:`Title of the alert.`,required:!1,type:{name:`string`}},{name:`component`,description:`Sets the element to use as the alert title. Default is h4.`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Component`}]},defaultValue:{func:!1,value:`'h4'`}},{name:`toggleAriaLabel`,description:`Adds accessible text to the alert toggle.`,required:!1,type:{name:`string`}},{name:`tooltipPosition`,description:`Position of the tooltip which is displayed if text is truncated.`,required:!1,type:{name:`Placement`},defaultValue:{func:!1,value:`'auto'`}},{name:`truncateTitle`,description:`Truncate title to number of lines.`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`0`}},{name:`variant`,description:`Adds alert variant styles.`,required:!1,type:{name:`TSTypeOperator`},defaultValue:{func:!1,value:`'custom'`}},{name:`variantLabel`,description:`Variant label text for screen readers.`,required:!1,type:{name:`string`}}],events:[{name:`mouseenter`,type:{names:[`Event`]}},{name:`mouseleave`,type:{names:[`Event`]}},{name:`timeout`}],slots:[{name:`custom-icon`},{name:`default`},{name:`action-links`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Alert/Alert.vue`]}}),u(o,{name:`PfAlertActionLink`,doc:{name:`PfAlertActionLink`,exportName:`PfAlertActionLink`,displayName:`AlertActionLink`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Alert/AlertActionLink.vue`]}}),u(o,{name:`PfAlertGroup`,doc:{name:`PfAlertGroup`,exportName:`PfAlertGroup`,displayName:`AlertGroup`,description:``,tags:{},props:[{name:`toast`,description:`Toast notifications are positioned at the top right corner of the viewport`,required:!1,type:{name:`boolean`}},{name:`appendTo`,description:`Determine where the alert is appended to`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`RendererElement`},{name:`null`},{name:`undefined`}]},defaultValue:{func:!1,value:`'body'`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Alert/AlertGroup.vue`]}}),u(o,{name:`PfAlertGroupInline`,doc:{name:`PfAlertGroupInline`,exportName:`PfAlertGroupInline`,displayName:`AlertGroupInline`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`toast`,required:!1,type:{name:`boolean`}},{name:`liveRegion`,required:!1,type:{name:`boolean`}},{name:`overflowMessage`,required:!1,type:{name:`string`}}],events:[{name:`overflowClick`,type:{names:[`PointerEvent`]}}],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Alert/AlertGroupInline.vue`]}}),u(o,{name:`PfAlertIcon`,doc:{name:`PfAlertIcon`,exportName:`PfAlertIcon`,displayName:`AlertIcon`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`variant`,required:!1,type:{name:`TSTypeOperator`},defaultValue:{func:!1,value:`'custom'`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Alert/AlertIcon.vue`]}})]),default:r(()=>[u(A,{title:`Types`,source:`<pf-alert title="Custom alert title" />
<pf-alert variant="info" title="Info alert title" />
<pf-alert variant="success" title="Success alert title" />
<pf-alert variant="warning" title="Warning alert title" />
<pf-alert variant="danger" title="Danger alert title" />`},{default:r(()=>[u(f,{title:`Custom alert title`}),u(f,{variant:`info`,title:`Info alert title`}),u(f,{variant:`success`,title:`Success alert title`}),u(f,{variant:`warning`,title:`Warning alert title`}),u(f,{variant:`danger`,title:`Danger alert title`})]),_:1}),u(A,{title:`With action links`,source:`<pf-alert title="Alert title" @close="alert('Clicked the close button')">
  <template #action-links>
    <pf-alert-action-link @click="alert('Clicked on View details')">View details</pf-alert-action-link>
    <pf-alert-action-link @click="alert('Clicked on Ignore')">Ignore</pf-alert-action-link>
  </template>
  <p>{{ sample_text }}</p>
</pf-alert>`},{default:r(()=>[u(f,{title:`Alert title`,onClose:a[2]||=e=>D(`Clicked the close button`)},{"action-links":r(()=>[u(I,{onClick:a[0]||=e=>D(`Clicked on View details`)},{default:r(()=>[...a[19]||=[p(`View details`,-1)]]),_:1}),u(I,{onClick:a[1]||=e=>D(`Clicked on Ignore`)},{default:r(()=>[...a[20]||=[p(`Ignore`,-1)]]),_:1})]),default:r(()=>[m(`p`,null,n(_.value),1)]),_:1})]),_:1}),u(A,{title:`Inline types`,source:`<pf-alert variant="custom" inline title="Custom alert title" />
<pf-alert variant="info" inline title="Info alert title" />
<pf-alert variant="success" inline title="Success alert title" />
<pf-alert variant="warning" inline title="Warning alert title" />
<pf-alert variant="danger" inline title="Danger alert title" />`},{default:r(()=>[u(f,{variant:`custom`,inline:``,title:`Custom alert title`}),u(f,{variant:`info`,inline:``,title:`Info alert title`}),u(f,{variant:`success`,inline:``,title:`Success alert title`}),u(f,{variant:`warning`,inline:``,title:`Warning alert title`}),u(f,{variant:`danger`,inline:``,title:`Danger alert title`})]),_:1}),u(A,{title:`Inline variations`,source:`<pf-alert
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
</pf-alert>`},{default:r(()=>[u(f,{inline:``,variant:`success`,title:`Success alert title`,onClose:a[5]||=e=>D(`Clicked the close button`)},{"action-links":r(()=>[u(I,{onClick:a[3]||=e=>D(`Clicked on View details`)},{default:r(()=>[...a[21]||=[p(`View details`,-1)]]),_:1}),u(I,{onClick:a[4]||=e=>D(`Clicked on Ignore`)},{default:r(()=>[...a[22]||=[p(`Ignore`,-1)]]),_:1})]),default:r(()=>[a[23]||=m(`p`,null,`Success alert description. This should tell the user more information about the alert.`,-1)]),_:1})]),_:1}),u(A,{title:`Static live region`,source:`<pf-alert
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
</pf-alert>`},{default:r(()=>[u(f,{"live-region":``,variant:`info`,title:`Default live region configuration`,onClose:a[6]||=e=>D(`Clicked the close button`)},{default:r(()=>[...a[24]||=[p(` This Alert uses the recommended `,-1),m(`code`,null,`live-region`,-1),p(` prop to automatically sets ARIA attributes and CSS classes. `,-1)]]),_:1}),u(f,{"aria-live":`assertive`,"aria-relevant":`additions text`,"aria-atomic":`true`,variant:`info`,title:`Customized live region`,onClose:a[7]||=e=>D(`Clicked the close button`)},{default:r(()=>[...a[25]||=[p(` You can alternatively omit the `,-1),m(`code`,null,`live-region`,-1),p(` prop to specify ARIA attributes and CSS manually on the containing element. `,-1)]]),_:1})]),_:1}),u(A,{title:`Dynamic live region`,source:`<pf-input-group style="margin-bottom: 16px">
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
  :aria-atomic="a.ariaAtomic" />`},{default:r(()=>[u(R,{style:{"margin-bottom":`16px`}},{default:r(()=>[u(L,{variant:`secondary`,onClick:a[8]||=e=>w.push({title:`Single Success Alert`,variant:`success`,liveRegion:!0,key:O()})},{default:r(()=>[...a[26]||=[p(` Add Single Success Alert `,-1)]]),_:1}),u(L,{variant:`secondary`,onClick:a[9]||=e=>w.push({title:`Single Info Alert`,variant:`info`,liveRegion:!0,key:O()})},{default:r(()=>[...a[27]||=[p(` Add Single Info Alert `,-1)]]),_:1}),u(L,{variant:`secondary`,onClick:a[10]||=e=>w.push({title:`Single Danger Alert`,variant:`danger`,ariaLive:`assertive`,ariaRelevant:`additions text`,ariaAtomic:`false`,key:O()})},{default:r(()=>[...a[28]||=[p(` Add Single Danger Alert `,-1)]]),_:1})]),_:1}),(c(!0),g(d,null,s(w,e=>(c(),i(f,{key:e.key,variant:e.variant,title:e.title,"live-region":e.liveRegion,"aria-live":e.ariaLive,"aria-relevant":e.ariaRelevant,"aria-atomic":e.ariaAtomic},null,8,[`variant`,`title`,`live-region`,`aria-live`,`aria-relevant`,`aria-atomic`]))),128))]),_:1}),u(A,{title:`Async live region`,source:`<pf-input-group style="margin-bottom: 16px">
  <pf-button variant="secondary" @click="startAsyncAlert">Start Async Info Alerts</pf-button>
  <pf-button variant="secondary" @click="stopAsyncAlert">Stop Async Info Alerts</pf-button>
</pf-input-group>

<pf-alert
  v-for="a of asyncAlerts"
  :key="a.key"
  :variant="a.variant"
  :title="a.title"
  :live-region="a.liveRegion" />`},{default:r(()=>[u(R,{style:{"margin-bottom":`16px`}},{default:r(()=>[u(L,{variant:`secondary`,onClick:M},{default:r(()=>[...a[29]||=[p(`Start Async Info Alerts`,-1)]]),_:1}),u(L,{variant:`secondary`,onClick:j},{default:r(()=>[...a[30]||=[p(`Stop Async Info Alerts`,-1)]]),_:1})]),_:1}),(c(!0),g(d,null,s(k,e=>(c(),i(f,{key:e.key,variant:e.variant,title:e.title,"live-region":e.liveRegion},null,8,[`variant`,`title`,`live-region`]))),128))]),_:1}),u(A,{title:`Alert timeout`,source:`<pf-input-group style="margin-bottom: 16px">
  <pf-button
    variant="secondary"
    :disabled="showTimeoutAlerts"
    @click="showTimeoutAlerts = !showTimeoutAlerts"
  >
    <template v-if="showTimeoutAlerts">0 alerts to show</template>
    <template v-else>Show 2 alerts</template>
  </pf-button>
</pf-input-group>`},{default:r(()=>[u(R,{style:{"margin-bottom":`16px`}},{default:r(()=>[u(L,{variant:`secondary`,disabled:N.value,onClick:a[11]||=e=>N.value=!N.value},{default:r(()=>[N.value?(c(),g(d,{key:0},[p(`0 alerts to show`)],64)):(c(),g(d,{key:1},[p(`Show 2 alerts`)],64))]),_:1},8,[`disabled`])]),_:1}),N.value?(c(),g(d,{key:0},[u(f,{title:`Default timeout Alert`,timeout:``},{default:r(()=>[...a[31]||=[p(` This alert will dismiss after 8 seconds `,-1)]]),_:1}),u(f,{title:`Custom timeout Alert`,timeout:16e3},{default:r(()=>[...a[32]||=[p(` This alert will dismiss after 16 seconds `,-1)]]),_:1})],64)):l(``,!0)]),_:1}),u(A,{title:`Custom icons`,source:`<pf-alert title="Custom alert title">
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
</pf-alert>`},{default:r(()=>[u(f,{title:`Custom alert title`},{"custom-icon":r(()=>[u(h(v))]),_:1}),u(f,{variant:`info`,title:`Info alert title`},{"custom-icon":r(()=>[u(h(y))]),_:1}),u(f,{variant:`success`,title:`Success alert title`},{"custom-icon":r(()=>[u(h(x))]),_:1}),u(f,{variant:`warning`,title:`Warning alert title`},{"custom-icon":r(()=>[u(h(b))]),_:1}),u(f,{variant:`danger`,title:`Danger alert title`},{"custom-icon":r(()=>[u(h(S))]),_:1})]),_:1}),u(A,{title:`Static Alert Group`,source:`<pf-alert-group>
  <pf-alert title="Success Alert" variant="success" inline />
  <pf-alert title="Info Alert" variant="info" inline />
</pf-alert-group>`},{default:r(()=>[u(z,null,{default:r(()=>[u(f,{title:`Success Alert`,variant:`success`,inline:``}),u(f,{title:`Info Alert`,variant:`info`,inline:``})]),_:1})]),_:1}),u(A,{title:`Toast`,source:`<pf-input-group>
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
</pf-alert-group>`},{default:r(()=>[u(R,null,{default:r(()=>[u(L,{variant:`secondary`,onClick:a[12]||=e=>E.push({title:`Toast Success Alert`,variant:`success`,key:O()})},{default:r(()=>[...a[33]||=[p(` Add Toast Success Alert `,-1)]]),_:1}),u(L,{variant:`secondary`,onClick:a[13]||=e=>E.push({title:`Toast Info Alert`,variant:`info`,key:O()})},{default:r(()=>[...a[34]||=[p(` Add Toast Info Alert `,-1)]]),_:1}),u(L,{variant:`secondary`,onClick:a[14]||=e=>E.push({title:`Toast Danger Alert`,variant:`danger`,key:O()})},{default:r(()=>[...a[35]||=[p(` Add Toast Danger Alert `,-1)]]),_:1})]),_:1}),u(z,{toast:``},{default:r(()=>[(c(!0),g(d,null,s(E,(e,t)=>(c(),i(f,{key:e.key,variant:e.variant,title:e.title,"live-region":``,onClose:e=>E.splice(t,1)},null,8,[`variant`,`title`,`onClose`]))),128))]),_:1})]),_:1}),u(A,{title:`Toast with overflow capture`,source:`<pf-input-group>
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
</pf-alert-group>`},{default:r(()=>[u(R,null,{default:r(()=>[u(L,{variant:`secondary`,onClick:a[15]||=e=>T.push({title:`Toast Success Alert`,variant:`success`,key:O()})},{default:r(()=>[...a[36]||=[p(` Add Toast Success Alert `,-1)]]),_:1}),u(L,{variant:`secondary`,onClick:a[16]||=e=>T.push({title:`Toast Info Alert`,variant:`info`,key:O()})},{default:r(()=>[...a[37]||=[p(` Add Toast Info Alert `,-1)]]),_:1}),u(L,{variant:`secondary`,onClick:a[17]||=e=>T.push({title:`Toast Danger Alert`,variant:`danger`,key:O()})},{default:r(()=>[...a[38]||=[p(` Add Toast Danger Alert `,-1)]]),_:1})]),_:1}),u(z,{toast:``,"live-region":``,"overflow-message":F.value,onOverflowClick:P},{default:r(()=>[(c(!0),g(d,null,s(T.slice(0,C),(e,t)=>(c(),i(f,{key:e.key,variant:e.variant,title:e.title,"live-region":``,onClose:e=>T.splice(t,1)},null,8,[`variant`,`title`,`onClose`]))),128))]),_:1},8,[`overflow-message`])]),_:1})]),_:1})}}}),[[`__scopeId`,`data-v-62420951`]]);export{w as default};