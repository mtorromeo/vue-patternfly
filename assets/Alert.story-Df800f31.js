import{E as e,F as t,K as n,N as r,U as i,c as a,d as o,g as s,h as c,it as l,j as u,l as d,m as f,n as p,pt as m,rt as h}from"./runtime-core.esm-bundler-DO1530YC.js";import{n as g}from"./index-CUsetNQE.js";import{t as _}from"./users-icon-GpP_3Cgm.js";import{n as v,r as y,t as b}from"./laptop-icon-CuXnmNKx.js";import{t as x}from"./database-icon-BBh7t1PZ.js";var S=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque cursus enim fringilla tincidunt. Proin lobortis aliquam dictum. Nam vel ullamcorper nulla, nec blandit dolor. Vivamus pellentesque neque justo, nec accumsan nulla rhoncus id. Suspendisse mollis, tortor quis faucibus volutpat, sem leo fringilla turpis, ac lacinia augue metus in nulla. Cras vestibulum lacinia orci. Pellentesque sodales consequat interdum. Sed porttitor tincidunt metus nec iaculis. Pellentesque non commodo justo. Morbi feugiat rhoncus neque, vitae facilisis diam aliquam nec. Sed dapibus vitae quam at tristique. Nunc vel commodo mi. Mauris et rhoncus leo.`,C=4,w=g(s({__name:`Alert.story`,setup(s){let g=0,w=()=>++g,T=(e,t)=>({title:e,variant:t,key:w()}),E=(e,t)=>{let n=e.findIndex(e=>e.key===t);n>=0&&e.splice(n,1)},D=e=>console.log(e),O=h([]),k=h([]),A=h([]),j=h([]),M=h([]),N=h([]),P=h([]),F=h([]),I=e=>e>C?`View ${e-C} more alerts`:``;function L(t,n){let r;i(()=>t.value,e=>{clearInterval(r),e&&(r=setInterval(n,4500))}),e(()=>clearInterval(r))}let R=l(!1),z=h([]);L(R,()=>z.unshift(T(`Async alert number ${z.length+1}`,`info`)));let B=l(!1);return L(B,()=>M.unshift(T(`Async notification ${M.length+1} was added to the queue.`,`danger`))),(e,i)=>{let s=t(`component-info`),l=t(`pf-alert`),h=t(`story-canvas`),g=t(`pf-alert-action-link`),L=t(`pf-alert-action-close-button`),V=t(`pf-button`),H=t(`pf-alert-group`),U=t(`pf-flex`),W=t(`pf-toggle-group-item`),G=t(`pf-toggle-group`),K=t(`pf-input-group-item`),q=t(`pf-input-group`),J=t(`doc-page`);return u(),d(J,{name:`Components/Alert.story.vue`,title:`Alert`},{description:n(()=>[...i[31]||=[f(`An `,-1),a(`b`,null,`alert`,-1),f(` is a notification that provides brief information to the user without blocking their workflow.`,-1)]]),apidocs:n(()=>[c(s,{name:`PfAlert`,doc:{name:`PfAlert`,exportName:`PfAlert`,displayName:`Alert`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`expandable`,description:`Flag indicating that the alert is expandable.`,required:!1,type:{name:`boolean`}},{name:`onClose`,description:`A callback for when the close button is clicked. Setting it renders a pf-alert-action-close-button, unless the
action-close slot is used.`,required:!1,type:{name:`TSFunctionType`}},{name:`inline`,description:`Flag to indicate if the alert is inline.`,required:!1,type:{name:`boolean`}},{name:`liveRegion`,description:`Flag to indicate if the alert is in a live region.`,required:!1,type:{name:`boolean`}},{name:`plain`,description:`Flag to indicate if the alert is plain.`,required:!1,type:{name:`boolean`}},{name:`timeout`,description:`If set to true, the timeout is 8000 milliseconds. If a number is provided, alert will
be dismissed after that amount of time in milliseconds.`,required:!1,type:{name:`union`,elements:[{name:`number`},{name:`boolean`}]}},{name:`timeoutAnimation`,description:"If the user hovers over the alert and `timeout` expires, this is how long to wait\nbefore finally dismissing the alert.",required:!1,type:{name:`number`},defaultValue:{func:!1,value:`3000`}},{name:`title`,description:`Title of the alert.`,required:!1,type:{name:`string`}},{name:`component`,description:`Sets the element to use as the alert title. Default is h4.`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Component`}]},defaultValue:{func:!1,value:`'h4'`}},{name:`toggleAriaLabel`,description:`Adds accessible text to the alert toggle. Defaults to "<Variant> alert details".`,required:!1,type:{name:`string`}},{name:`tooltipPosition`,description:`Position of the tooltip which is displayed if text is truncated.`,required:!1,type:{name:`Placement`},defaultValue:{func:!1,value:`'auto'`}},{name:`truncateTitle`,description:`Truncate title to number of lines.`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`0`}},{name:`variant`,description:`Adds alert variant styles.`,required:!1,type:{name:`TSTypeOperator`},defaultValue:{func:!1,value:`'custom'`}},{name:`variantLabel`,description:`Variant label text for screen readers. Defaults to "<Variant> alert:".`,required:!1,type:{name:`string`}}],events:[{name:`mouseenter`,type:{names:[`MouseEvent`]}},{name:`mouseleave`,type:{names:[`MouseEvent`]}},{name:`timeout`,description:`Called once the alert is dismissed after its timeout.`}],slots:[{name:`custom-icon`},{name:`title`,description:`Title of the alert, replacing the title prop.`},{name:`action-close`},{name:`default`,description:`Description of the alert.`},{name:`action-links`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Alert/Alert.vue`]}}),c(s,{name:`PfAlertActionCloseButton`,doc:{name:`PfAlertActionCloseButton`,exportName:`PfAlertActionCloseButton`,displayName:`AlertActionCloseButton`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`ariaLabel`,description:`Accessible label for the close button. Defaults to "Close <variant label> <title>" from the alert.`,required:!1,type:{name:`string`}},{name:`variantLabel`,description:`Variant label for the default aria-label, replacing the one of the alert: "Close <variantLabel> alert: <title>".`,required:!1,type:{name:`string`}}],events:[{name:`close`,type:{names:[`MouseEvent`]},description:`A callback for when the close button is clicked, after the alert slid out in an animated alert group.`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Alert/AlertActionCloseButton.vue`]}}),c(s,{name:`PfAlertActionLink`,doc:{name:`PfAlertActionLink`,exportName:`PfAlertActionLink`,displayName:`AlertActionLink`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Alert/AlertActionLink.vue`]}}),c(s,{name:`PfAlertGroup`,doc:{name:`PfAlertGroup`,exportName:`PfAlertGroup`,displayName:`AlertGroup`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`animations`,tags:{beta:[{description:`Flag to animate the alerts when they are added and dismissed. Dynamically added alerts should be
prepended to the list.`,title:`beta`}]},required:!1,type:{name:`boolean`}},{name:`toast`,description:`Toast notifications are positioned at the top right corner of the viewport`,required:!1,type:{name:`boolean`}},{name:`liveRegion`,description:`Turns the container into a live region so that changes to content within the alert group, such as appending an
alert, are reliably announced to assistive technology.`,required:!1,type:{name:`boolean`}},{name:`overflowMessage`,description:`Custom text to show for the overflow message`,required:!1,type:{name:`string`}},{name:`appendTo`,description:`Element or selector where a toast alert group is appended to`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`RendererElement`},{name:`null`}]},defaultValue:{func:!1,value:`'body'`}}],events:[{name:`overflowClick`,type:{names:[`PointerEvent`]},description:`Function to call if user clicks on overflow message`}],slots:[{name:`default`,description:`Alerts to be rendered in the alert group`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Alert/AlertGroup.vue`]}}),c(s,{name:`PfAlertGroupInline`,doc:{name:`PfAlertGroupInline`,exportName:`PfAlertGroupInline`,displayName:`AlertGroupInline`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`animations`,tags:{beta:[{description:`Flag to animate the alerts when they are added and dismissed. Dynamically added alerts should be
prepended to the list.`,title:`beta`}]},required:!1,type:{name:`boolean`}},{name:`toast`,description:`Toast notifications are positioned at the top right corner of the viewport`,required:!1,type:{name:`boolean`}},{name:`liveRegion`,description:`Turns the container into a live region so that changes to content within the alert group, such as appending an
alert, are reliably announced to assistive technology.`,required:!1,type:{name:`boolean`}},{name:`overflowMessage`,description:`Custom text to show for the overflow message`,required:!1,type:{name:`string`}}],events:[{name:`overflowClick`,type:{names:[`PointerEvent`]},description:`Function to call if user clicks on overflow message`}],slots:[{name:`default`,description:`Alerts to be rendered in the alert group`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Alert/AlertGroupInline.vue`]}}),c(s,{name:`PfAlertIcon`,doc:{name:`PfAlertIcon`,exportName:`PfAlertIcon`,displayName:`AlertIcon`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`variant`,description:`Variant of the alert icon.`,required:!1,type:{name:`TSTypeOperator`},defaultValue:{func:!1,value:`'custom'`}}],events:[],slots:[{name:`default`,description:`A custom icon, replacing the one of the variant.`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Alert/AlertIcon.vue`]}})]),default:n(()=>[i[97]||=a(`div`,{class:`markdown pf-v6-c-content`},[a(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),a(`ul`,null,[a(`li`,null,[f(`The `),a(`code`,null,`actionClose`),f(`, `),a(`code`,null,`actionLinks`),f(` and `),a(`code`,null,`customIcon`),f(` props are replaced by the `),a(`code`,null,`action-close`),f(`, `),a(`code`,null,`action-links`),f(` and `),a(`code`,null,`custom-icon`),f(` slots, and the `),a(`code`,null,`title`),f(` slot can replace the `),a(`code`,null,`title`),f(` prop.`)]),a(`li`,null,[f(`Setting `),a(`code`,null,`@close`),f(` on `),a(`code`,null,`pf-alert`),f(` renders a `),a(`code`,null,`pf-alert-action-close-button`),f(` without using the `),a(`code`,null,`action-close`),f(` slot.`)]),a(`li`,null,[f(`The default `),a(`code`,null,`aria-label`),f(` of `),a(`code`,null,`pf-alert-action-close-button`),f(` uses the variant label of the alert as is ("Close Success alert: Title"), since it already ends with "alert:"; with its own `),a(`code`,null,`variant-label`),f(` it is built as upstream ("Close success alert: Title").`)]),a(`li`,null,[f(`The expanded state of an expandable alert can be bound with `),a(`code`,null,`v-model:expanded`),f(`.`)]),a(`li`,null,[a(`code`,null,`animations`),f(` replaces `),a(`code`,null,`hasAnimations`),f(` on `),a(`code`,null,`pf-alert-group`),f(`; there is no animations context.`)]),a(`li`,null,[a(`code`,null,`append-to`),f(` takes an element or a selector rather than a function.`)])]),a(`p`,null,[f(`See `),a(`a`,{href:`#/`},`common differences from patternfly-react`),f(`.`)]),a(`p`,null,[f(`Micro animations have been added for `),a(`code`,null,`pf-alert`),f(` components within a `),a(`code`,null,`pf-alert-group`),f(`. By default, you must opt into animations, since they can require updates to tests. To enable them, use the `),a(`code`,null,`animations`),f(` property. With animations enabled, we recommend you ensure that dynamically-added alerts are prepended to a list of alerts, rather than appended to the end of it.`)]),a(`p`,null,`Micro animations are turned on for all examples where alerts are dynamically added.`),a(`h2`,{class:`pf-v6-c-title`},`Alert examples`)],-1),c(h,{title:`Alert variants`,source:`<pf-alert title="Custom alert title" ouia-id="CustomAlert" />
<pf-alert variant="info" title="Info alert title" ouia-id="InfoAlert" />
<pf-alert variant="success" title="Success alert title" ouia-id="SuccessAlert" />
<pf-alert variant="warning" title="Warning alert title" ouia-id="WarningAlert" />
<pf-alert variant="danger" title="Danger alert title" ouia-id="DangerAlert" />`},{intro:n(()=>[...i[32]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,[f(`PatternFly supports several alert variants for different scenarios. Each variant has an associated status icon, background, and alert title coded to communicate the severity of an alert. Use the `),a(`code`,null,`variant`),f(` property to apply the following styling options. If no `),a(`code`,null,`variant`),f(` is specified, then the variant will be set to "custom".`)]),a(`table`,null,[a(`thead`,null,[a(`tr`,null,[a(`th`,null,`Variant`),a(`th`,null,`Description`)])]),a(`tbody`,null,[a(`tr`,null,[a(`td`,null,`Custom`),a(`td`,null,`Use for generic messages that should have a custom color set by the associated CSS variable. Should be used when the message has no associated severity.`)]),a(`tr`,null,[a(`td`,null,`Info`),a(`td`,null,`Use for general informational messages`)]),a(`tr`,null,[a(`td`,null,`Success`),a(`td`,null,`Use to indicate that a task or process has been completed successfully`)]),a(`tr`,null,[a(`td`,null,`Warning`),a(`td`,null,`Use to indicate that a non-critical error has occurred`)]),a(`tr`,null,[a(`td`,null,`Danger`),a(`td`,null,`Use to indicate that a critical or blocking error has occurred`)])])])],-1)]]),default:n(()=>[c(l,{title:`Custom alert title`,"ouia-id":`CustomAlert`}),c(l,{variant:`info`,title:`Info alert title`,"ouia-id":`InfoAlert`}),c(l,{variant:`success`,title:`Success alert title`,"ouia-id":`SuccessAlert`}),c(l,{variant:`warning`,title:`Warning alert title`,"ouia-id":`WarningAlert`}),c(l,{variant:`danger`,title:`Danger alert title`,"ouia-id":`DangerAlert`})]),_:1}),c(h,{title:`Alert variations`,source:`<pf-alert variant="success" title="Success alert title">
  <template #action-links>
    <pf-alert-action-link component="a" href="#">View details</pf-alert-action-link>
    <pf-alert-action-link @click="log('Clicked on Ignore')">Ignore</pf-alert-action-link>
  </template>
  <p>Success alert description. This should tell the user more information about the alert.</p>
</pf-alert>
<pf-alert variant="success" title="Success alert title">
  <p>
    Success alert description. This should tell the user more information about the alert.
    <a href="#">This is a link.</a>
  </p>
</pf-alert>
<pf-alert variant="success" title="Success alert title">
  <template #action-close>
    <pf-alert-action-close-button @close="log('Clicked the close button')" />
  </template>
  <p>Short alert description.</p>
</pf-alert>
<pf-alert variant="success" title="div success alert title" component="div" />
<pf-alert variant="success" title="h6 Success alert title" component="h6">
  <p>Short alert description.</p>
</pf-alert>`},{intro:n(()=>[...i[33]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,`PatternFly supports several properties and variations that can be used to add extra content to an alert.`),a(`ul`,null,[a(`li`,null,[f(`As demonstrated in the 1st variation below, use the `),a(`code`,null,`action-links`),f(` slot to add one or more `),a(`code`,null,`pf-alert-action-link`),f(` components that place links beneath the alert message. Pass in `),a(`code`,null,`href`),f(` and `),a(`code`,null,`component="a"`),f(` to have a `),a(`code`,null,`pf-alert-action-link`),f(` act as a proper link, rather than as a button.`)]),a(`li`,null,[f(`As demonstrated in the 2nd variation below, use a native HTML `),a(`code`,null,`<a>`),f(` element to add links within an alert message.`)]),a(`li`,null,[f(`As demonstrated in the 3rd variation below, use the `),a(`code`,null,`action-close`),f(` slot to add a `),a(`code`,null,`pf-alert-action-close-button`),f(` component, which can be used to manage and customize alert dismissals.`)]),a(`li`,null,[f(`As demonstrated in the 4th and 5th variations below, use the `),a(`code`,null,`component`),f(` property to set the element for an alert title. `),a(`ul`,null,[a(`li`,null,[f(`If there is not a description passed via the default slot, then the `),a(`code`,null,`component`),f(` prop should be set to a non-heading element such as a `),a(`code`,null,`span`),f(` or `),a(`code`,null,`div`),f(`.`)]),a(`li`,null,[f(`If there is a description passed via the default slot, then the `),a(`code`,null,`component`),f(` prop should be a heading element. Headings should be ordered by their level and heading levels should not be skipped. For example, a heading of an `),a(`code`,null,`h2`),f(` level should not be followed directly by an `),a(`code`,null,`h4`),f(`.`)])])])])],-1)]]),default:n(()=>[c(l,{variant:`success`,title:`Success alert title`},{"action-links":n(()=>[c(g,{component:`a`,href:`#`},{default:n(()=>[...i[34]||=[f(`View details`,-1)]]),_:1}),c(g,{onClick:i[0]||=e=>D(`Clicked on Ignore`)},{default:n(()=>[...i[35]||=[f(`Ignore`,-1)]]),_:1})]),default:n(()=>[i[36]||=a(`p`,null,`Success alert description. This should tell the user more information about the alert.`,-1)]),_:1}),c(l,{variant:`success`,title:`Success alert title`},{default:n(()=>[...i[37]||=[a(`p`,null,[f(` Success alert description. This should tell the user more information about the alert. `),a(`a`,{href:`#`},`This is a link.`)],-1)]]),_:1}),c(l,{variant:`success`,title:`Success alert title`},{"action-close":n(()=>[c(L,{onClose:i[1]||=e=>D(`Clicked the close button`)})]),default:n(()=>[i[38]||=a(`p`,null,`Short alert description.`,-1)]),_:1}),c(l,{variant:`success`,title:`div success alert title`,component:`div`}),c(l,{variant:`success`,title:`h6 Success alert title`,component:`h6`},{default:n(()=>[...i[39]||=[a(`p`,null,`Short alert description.`,-1)]]),_:1})]),_:1}),c(h,{title:`Alert timeout`,source:`<pf-button variant="secondary" @click="timeoutAlerts.unshift(nextKey())">Add alert</pf-button>
<pf-alert-group animations live-region>
  <pf-alert
    v-for="key in timeoutAlerts"
    :key="key"
    title="Default timeout Alert"
    :timeout="8000"
    @timeout="timeoutAlerts.splice(timeoutAlerts.indexOf(key), 1)"
  >
    <template #action-links>
      <pf-alert-action-link component="a" href="#">View details</pf-alert-action-link>
      <pf-alert-action-link @click="log('Clicked on Ignore')">Ignore</pf-alert-action-link>
    </template>
    This alert will dismiss after 8 seconds
  </pf-alert>
</pf-alert-group>`},{intro:n(()=>[...i[40]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,[f(`Use the `),a(`code`,null,`timeout`),f(` property to automatically dismiss an alert after a period of time. If set to `),a(`code`,null,`true`),f(`, the `),a(`code`,null,`timeout`),f(` will be 8000 milliseconds. Provide a specific value to dismiss the alert after a different number of milliseconds.`)])],-1)]]),default:n(()=>[c(V,{variant:`secondary`,onClick:i[2]||=e=>O.unshift(w())},{default:n(()=>[...i[41]||=[f(`Add alert`,-1)]]),_:1}),c(H,{animations:``,"live-region":``},{default:n(()=>[(u(!0),o(p,null,r(O,e=>(u(),d(l,{key:e,title:`Default timeout Alert`,timeout:8e3,onTimeout:t=>O.splice(O.indexOf(e),1)},{"action-links":n(()=>[c(g,{component:`a`,href:`#`},{default:n(()=>[...i[42]||=[f(`View details`,-1)]]),_:1}),c(g,{onClick:i[3]||=e=>D(`Clicked on Ignore`)},{default:n(()=>[...i[43]||=[f(`Ignore`,-1)]]),_:1})]),default:n(()=>[i[44]||=f(` This alert will dismiss after 8 seconds `,-1)]),_:1},8,[`onTimeout`]))),128))]),_:1})]),_:1}),c(h,{title:`Expandable alerts`,source:`<pf-alert expandable variant="success" title="Success alert title">
  <template #action-close>
    <pf-alert-action-close-button @close="log('Clicked the close button')" />
  </template>
  <p>Success alert description. This should tell the user more information about the alert.</p>
</pf-alert>
<pf-alert expandable inline variant="success" title="Success alert title">
  <template #action-links>
    <pf-alert-action-link component="a" href="#">View details</pf-alert-action-link>
    <pf-alert-action-link @click="log('Clicked on Ignore')">Ignore</pf-alert-action-link>
  </template>
  <p>Success alert description. This should tell the user more information about the alert.</p>
</pf-alert>`},{intro:n(()=>[...i[45]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,`An alert can contain additional, hidden information that is made visible when users click a caret icon. This information can be expanded and collapsed each time the icon is clicked.`),a(`p`,null,[f(`It is not recommended to use an expandable alert with a `),a(`code`,null,`timeout`),f(` in a toast alert group because the alert could timeout before users have time to interact with and view the entire alert.`)])],-1)]]),default:n(()=>[c(l,{expandable:``,variant:`success`,title:`Success alert title`},{"action-close":n(()=>[c(L,{onClose:i[4]||=e=>D(`Clicked the close button`)})]),default:n(()=>[i[46]||=a(`p`,null,`Success alert description. This should tell the user more information about the alert.`,-1)]),_:1}),c(l,{expandable:``,inline:``,variant:`success`,title:`Success alert title`},{"action-links":n(()=>[c(g,{component:`a`,href:`#`},{default:n(()=>[...i[47]||=[f(`View details`,-1)]]),_:1}),c(g,{onClick:i[5]||=e=>D(`Clicked on Ignore`)},{default:n(()=>[...i[48]||=[f(`Ignore`,-1)]]),_:1})]),default:n(()=>[i[49]||=a(`p`,null,`Success alert description. This should tell the user more information about the alert.`,-1)]),_:1})]),_:1}),c(h,{title:`Truncated alerts`,source:`<pf-alert variant="info" :truncate-title="1" :title="longTitle" />
<pf-alert variant="warning" :truncate-title="2" :title="longTitle" />
<pf-alert variant="danger" :truncate-title="3" :title="longTitle" />`},{intro:n(()=>[...i[50]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,[f(`Use the `),a(`code`,null,`truncate-title`),f(` property to shorten a long `),a(`code`,null,`title`),f(`. Set it to a number to reduce the number of lines of text in the alert's `),a(`code`,null,`title`),f(`. Users may hover over or tab to a truncated `),a(`code`,null,`title`),f(` to see the full message in a tooltip.`)])],-1)]]),default:n(()=>[c(l,{variant:`info`,"truncate-title":1,title:S}),c(l,{variant:`warning`,"truncate-title":2,title:S}),c(l,{variant:`danger`,"truncate-title":3,title:S})]),_:1}),c(h,{title:`Custom icons`,source:`<pf-alert title="Default alert title">
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
</pf-alert>`},{intro:n(()=>[...i[51]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,[f(`Use the `),a(`code`,null,`custom-icon`),f(` slot to replace a default alert icon with a custom icon.`)])],-1)]]),default:n(()=>[c(l,{title:`Default alert title`},{"custom-icon":n(()=>[c(m(_))]),_:1}),c(l,{variant:`info`,title:`Info alert title`},{"custom-icon":n(()=>[c(m(y))]),_:1}),c(l,{variant:`success`,title:`Success alert title`},{"custom-icon":n(()=>[c(m(x))]),_:1}),c(l,{variant:`warning`,title:`Warning alert title`},{"custom-icon":n(()=>[c(m(v))]),_:1}),c(l,{variant:`danger`,title:`Danger alert title`},{"custom-icon":n(()=>[c(m(b))]),_:1})]),_:1}),c(h,{title:`Inline alerts variants`,source:`<pf-alert variant="custom" inline title="Custom inline alert title" />
<pf-alert variant="info" inline title="Info inline alert title" />
<pf-alert variant="success" inline title="Success inline alert title" />
<pf-alert variant="warning" inline title="Warning inline alert title" />
<pf-alert variant="danger" inline title="Danger inline alert title" />`},{intro:n(()=>[...i[52]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,[f(`Use inline alerts to display an alert inline with content. All alert variants may use the `),a(`code`,null,`inline`),f(` property to position alerts in content-heavy areas, such as within forms, wizards, or drawers.`)])],-1)]]),default:n(()=>[c(l,{variant:`custom`,inline:``,title:`Custom inline alert title`}),c(l,{variant:`info`,inline:``,title:`Info inline alert title`}),c(l,{variant:`success`,inline:``,title:`Success inline alert title`}),c(l,{variant:`warning`,inline:``,title:`Warning inline alert title`}),c(l,{variant:`danger`,inline:``,title:`Danger inline alert title`})]),_:1}),c(h,{title:`Inline alert variations`,source:`<pf-alert inline variant="success" title="Success alert title">
  <template #action-links>
    <pf-alert-action-link component="a" href="#">View details</pf-alert-action-link>
    <pf-alert-action-link @click="log('Clicked on Ignore')">Ignore</pf-alert-action-link>
  </template>
  <p>Success alert description. This should tell the user more information about the alert.</p>
</pf-alert>
<pf-alert inline variant="success" title="Success alert title">
  <p>
    Success alert description. This should tell the user more information about the alert.
    <a href="#">This is a link.</a>
  </p>
</pf-alert>
<pf-alert inline variant="success" title="Success alert title">
  <template #action-close>
    <pf-alert-action-close-button @close="log('Clicked the close button')" />
  </template>
  <p>Short alert description.</p>
</pf-alert>
<pf-alert inline variant="success" title="div success alert title" component="div" />
<pf-alert inline variant="success" title="h6 Success alert title" component="h6">
  <p>Short alert description.</p>
</pf-alert>`},{intro:n(()=>[...i[53]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,[f(`All general alert variations can use the `),a(`code`,null,`inline`),f(` property to apply inline styling.`)])],-1)]]),default:n(()=>[c(l,{inline:``,variant:`success`,title:`Success alert title`},{"action-links":n(()=>[c(g,{component:`a`,href:`#`},{default:n(()=>[...i[54]||=[f(`View details`,-1)]]),_:1}),c(g,{onClick:i[6]||=e=>D(`Clicked on Ignore`)},{default:n(()=>[...i[55]||=[f(`Ignore`,-1)]]),_:1})]),default:n(()=>[i[56]||=a(`p`,null,`Success alert description. This should tell the user more information about the alert.`,-1)]),_:1}),c(l,{inline:``,variant:`success`,title:`Success alert title`},{default:n(()=>[...i[57]||=[a(`p`,null,[f(` Success alert description. This should tell the user more information about the alert. `),a(`a`,{href:`#`},`This is a link.`)],-1)]]),_:1}),c(l,{inline:``,variant:`success`,title:`Success alert title`},{"action-close":n(()=>[c(L,{onClose:i[7]||=e=>D(`Clicked the close button`)})]),default:n(()=>[i[58]||=a(`p`,null,`Short alert description.`,-1)]),_:1}),c(l,{inline:``,variant:`success`,title:`div success alert title`,component:`div`}),c(l,{inline:``,variant:`success`,title:`h6 Success alert title`,component:`h6`},{default:n(()=>[...i[59]||=[a(`p`,null,`Short alert description.`,-1)]]),_:1})]),_:1}),c(h,{title:`Plain inline alert variants`,source:`<pf-alert variant="custom" inline plain title="Custom inline alert title" />
<pf-alert variant="info" inline plain title="Info inline alert title" />
<pf-alert variant="success" inline plain title="Success inline alert title" />
<pf-alert variant="warning" inline plain title="Warning inline alert title" />
<pf-alert variant="danger" inline plain title="Danger inline alert title" />`},{intro:n(()=>[...i[60]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,[f(`Use the `),a(`code`,null,`plain`),f(` property to make any inline alert plain. Plain styling removes the colored background but keeps colored text and icons.`)])],-1)]]),default:n(()=>[c(l,{variant:`custom`,inline:``,plain:``,title:`Custom inline alert title`}),c(l,{variant:`info`,inline:``,plain:``,title:`Info inline alert title`}),c(l,{variant:`success`,inline:``,plain:``,title:`Success inline alert title`}),c(l,{variant:`warning`,inline:``,plain:``,title:`Warning inline alert title`}),c(l,{variant:`danger`,inline:``,plain:``,title:`Danger inline alert title`})]),_:1}),c(h,{title:`Plain inline alert variations`,source:`<pf-alert inline plain variant="success" title="Success alert title">
  <p>Success alert description. This should tell the user more information about the alert.</p>
</pf-alert>`},{intro:n(()=>[...i[61]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,`It is not recommended to use a plain inline alert with a close button nor action links because these alerts are non-dismissible and should persist until the error or action related to the alert is resolved.`)],-1)]]),default:n(()=>[c(l,{inline:``,plain:``,variant:`success`,title:`Success alert title`},{default:n(()=>[...i[62]||=[a(`p`,null,`Success alert description. This should tell the user more information about the alert.`,-1)]]),_:1})]),_:1}),c(h,{title:`Static live region alerts`,source:`<pf-alert live-region variant="info" title="Default live region configuration">
  <template #action-close>
    <pf-alert-action-close-button @close="log('Clicked the close button')" />
  </template>
  This alert uses the recommended <code>live-region</code> prop to automatically set ARIA attributes and CSS
  classes.
</pf-alert>
<pf-alert
  aria-live="assertive"
  aria-relevant="additions text"
  aria-atomic="true"
  variant="info"
  title="Customized live region"
>
  <template #action-close>
    <pf-alert-action-close-button @close="log('Clicked the close button')" />
  </template>
  You can alternatively omit the <code>live-region</code> prop to specify ARIA attributes and CSS manually on the
  containing element.
</pf-alert>`},{intro:n(()=>[...i[63]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,`Live region alerts allow you to expose dynamic content changes in a way that can be announced by assistive technologies.`),a(`p`,null,[f(`By default, `),a(`code`,null,`live-region`),f(` alerts are static.`)])],-1)]]),default:n(()=>[c(l,{"live-region":``,variant:`info`,title:`Default live region configuration`},{"action-close":n(()=>[c(L,{onClose:i[8]||=e=>D(`Clicked the close button`)})]),default:n(()=>[i[64]||=f(` This alert uses the recommended `,-1),i[65]||=a(`code`,null,`live-region`,-1),i[66]||=f(` prop to automatically set ARIA attributes and CSS classes. `,-1)]),_:1}),c(l,{"aria-live":`assertive`,"aria-relevant":`additions text`,"aria-atomic":`true`,variant:`info`,title:`Customized live region`},{"action-close":n(()=>[c(L,{onClose:i[9]||=e=>D(`Clicked the close button`)})]),default:n(()=>[i[67]||=f(` You can alternatively omit the `,-1),i[68]||=a(`code`,null,`live-region`,-1),i[69]||=f(` prop to specify ARIA attributes and CSS manually on the containing element. `,-1)]),_:1})]),_:1}),c(h,{title:`Dynamic live region alerts`,source:`<pf-flex gap="xs" style="margin-bottom: 16px">
  <pf-button variant="secondary" @click="liveAlerts.unshift(newAlert('Single success alert', 'success'))">
    Add single success alert
  </pf-button>
  <pf-button variant="secondary" @click="liveAlerts.unshift(newAlert('Single info alert', 'info'))">
    Add single info alert
  </pf-button>
  <pf-button variant="secondary" @click="liveAlerts.unshift(newAlert('Single danger alert', 'danger'))">
    Add single danger alert
  </pf-button>
</pf-flex>
<pf-alert-group animations live-region aria-live="polite" aria-relevant="additions text" aria-atomic="false">
  <pf-alert v-for="a in liveAlerts" :key="a.key" :variant="a.variant" :title="a.title" />
</pf-alert-group>`},{intro:n(()=>[...i[70]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,[f(`Alerts that are asynchronously appended into dynamic alert groups via the `),a(`code`,null,`live-region`),f(` property will be announced to assistive technology the moment the change happens, following the strategy used for `),a(`code`,null,`aria-atomic`),f(`, which defaults to false. This means only changes of type "addition" will be announced.`)])],-1)]]),default:n(()=>[c(U,{gap:`xs`,style:{"margin-bottom":`16px`}},{default:n(()=>[c(V,{variant:`secondary`,onClick:i[10]||=e=>k.unshift(T(`Single success alert`,`success`))},{default:n(()=>[...i[71]||=[f(` Add single success alert `,-1)]]),_:1}),c(V,{variant:`secondary`,onClick:i[11]||=e=>k.unshift(T(`Single info alert`,`info`))},{default:n(()=>[...i[72]||=[f(` Add single info alert `,-1)]]),_:1}),c(V,{variant:`secondary`,onClick:i[12]||=e=>k.unshift(T(`Single danger alert`,`danger`))},{default:n(()=>[...i[73]||=[f(` Add single danger alert `,-1)]]),_:1})]),_:1}),c(H,{animations:``,"live-region":``,"aria-live":`polite`,"aria-relevant":`additions text`,"aria-atomic":`false`},{default:n(()=>[(u(!0),o(p,null,r(k,e=>(u(),d(l,{key:e.key,variant:e.variant,title:e.title},null,8,[`variant`,`title`]))),128))]),_:1})]),_:1}),c(h,{title:`Asynchronous live region alerts`,source:`<pf-toggle-group aria-label="Toggle asynchronous alerts">
  <pf-toggle-group-item v-model:selected="asyncLiveActive" text="Async alerts on" button-id="async-alerts-on" />
</pf-toggle-group>
<pf-alert-group animations live-region>
  <pf-alert v-for="a in asyncLiveAlerts" :key="a.key" :variant="a.variant" :title="a.title" />
</pf-alert-group>`},{intro:n(()=>[...i[74]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,`This example shows how an alert could be triggered by an asynchronous event in the application. Note that you can customize how the alert will be announced to assistive technology.`)],-1)]]),default:n(()=>[c(G,{"aria-label":`Toggle asynchronous alerts`},{default:n(()=>[c(W,{selected:R.value,"onUpdate:selected":i[13]||=e=>R.value=e,text:`Async alerts on`,"button-id":`async-alerts-on`},null,8,[`selected`])]),_:1}),c(H,{animations:``,"live-region":``},{default:n(()=>[(u(!0),o(p,null,r(z,e=>(u(),d(l,{key:e.key,variant:e.variant,title:e.title},null,8,[`variant`,`title`]))),128))]),_:1})]),_:1}),i[98]||=a(`div`,{class:`markdown pf-v6-c-content`},[a(`h2`,{class:`pf-v6-c-title`},`Alert group examples`),a(`p`,null,`An alert group stacks and positions 2 or more alerts in a live region, either in a layer over the main content of a page or inline with the page content. Alert groups should always rank alerts by age, stacking new alerts on top of old ones as they surface.`),a(`h3`,{class:`pf-v6-c-title`},`Alert group variants`),a(`p`,null,`Alert groups can be one of the following variants:`),a(`table`,null,[a(`thead`,null,[a(`tr`,null,[a(`th`,null,`Variant`),a(`th`,null,`Description`)])]),a(`tbody`,null,[a(`tr`,null,[a(`td`,null,`Static inline`),a(`td`,null,`Static inline alert groups contain alerts that appear when the page loads, and are seen within the normal page content flow. These groups should not contain alerts that will dynamically appear or update.`)]),a(`tr`,null,[a(`td`,null,`Toast`),a(`td`,null,`Toast alert groups contain alerts that typically appear in response to an asynchronous event or user action. These groups are positioned on top of other content at the top right of the page.`)]),a(`tr`,null,[a(`td`,null,`Dynamic`),a(`td`,null,`Dynamic alert groups contain alerts that typically appear in response to a user action, and are seen within the normal page content flow.`)])])]),a(`p`,null,[f(`Dynamic alerts that are generated after the page initially loads must be appended to either a toast or dynamic `),a(`code`,null,`pf-alert-group`),f(`, both of which must use the `),a(`code`,null,`live-region`),f(` property. New alerts appended to a toast or dynamic group will be announced by assistive technologies the moment the change happens.`)])],-1),c(h,{title:`Static inline alert group`,source:`<pf-alert-group>
  <pf-alert title="Success alert" variant="success" inline />
  <pf-alert title="Info alert" variant="info" inline />
</pf-alert-group>`},{intro:n(()=>[...i[75]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,`All alert group variants may combine multiple alert variants. For example, the following static inline alert group includes one "success" alert and one "info" alert.`)],-1)]]),default:n(()=>[c(H,null,{default:n(()=>[c(l,{title:`Success alert`,variant:`success`,inline:``}),c(l,{title:`Info alert`,variant:`info`,inline:``})]),_:1})]),_:1}),c(h,{title:`Toast alert group`,source:`<pf-flex gap="xs">
  <pf-button variant="secondary" @click="toastAlerts.unshift(newAlert('Toast success alert', 'success'))">
    Add toast success alert
  </pf-button>
  <pf-button variant="secondary" @click="toastAlerts.unshift(newAlert('Toast danger alert', 'danger'))">
    Add toast danger alert
  </pf-button>
  <pf-button variant="secondary" @click="toastAlerts.unshift(newAlert('Toast info alert', 'info'))">
    Add toast info alert
  </pf-button>
</pf-flex>
<pf-alert-group animations toast live-region>
  <pf-alert
    v-for="a in toastAlerts"
    :key="a.key"
    :variant="a.variant"
    :title="a.title"
    @close="remove(toastAlerts, a.key)" />
</pf-alert-group>`},{intro:n(()=>[...i[76]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,[f(`Toast alert groups are created by passing in the `),a(`code`,null,`toast`),f(` and `),a(`code`,null,`live-region`),f(` properties.`)]),a(`p`,null,`Click the buttons in the example below to add alerts to a toast group.`)],-1)]]),default:n(()=>[c(U,{gap:`xs`},{default:n(()=>[c(V,{variant:`secondary`,onClick:i[14]||=e=>A.unshift(T(`Toast success alert`,`success`))},{default:n(()=>[...i[77]||=[f(` Add toast success alert `,-1)]]),_:1}),c(V,{variant:`secondary`,onClick:i[15]||=e=>A.unshift(T(`Toast danger alert`,`danger`))},{default:n(()=>[...i[78]||=[f(` Add toast danger alert `,-1)]]),_:1}),c(V,{variant:`secondary`,onClick:i[16]||=e=>A.unshift(T(`Toast info alert`,`info`))},{default:n(()=>[...i[79]||=[f(` Add toast info alert `,-1)]]),_:1})]),_:1}),c(H,{animations:``,toast:``,"live-region":``},{default:n(()=>[(u(!0),o(p,null,r(A,e=>(u(),d(l,{key:e.key,variant:e.variant,title:e.title,onClose:t=>E(A,e.key)},null,8,[`variant`,`title`,`onClose`]))),128))]),_:1})]),_:1}),c(h,{title:`Toast alert group with overflow capture`,source:`<pf-flex gap="xs" style="margin-bottom: 16px">
  <pf-button variant="secondary" @click="toastOverflowAlerts.unshift(newAlert('Toast success alert', 'success'))">
    Add toast success alert
  </pf-button>
  <pf-button variant="secondary" @click="toastOverflowAlerts.unshift(newAlert('Toast danger alert', 'danger'))">
    Add toast danger alert
  </pf-button>
  <pf-button variant="secondary" @click="toastOverflowAlerts.unshift(newAlert('Toast info alert', 'info'))">
    Add toast info alert
  </pf-button>
</pf-flex>
<pf-alert-group
  animations
  toast
  live-region
  :overflow-message="overflowMessage(toastOverflowAlerts.length)"
  @overflow-click="log('Overflow message clicked')"
>
  <pf-alert
    v-for="a in toastOverflowAlerts.slice(0, maxDisplayed)"
    :key="a.key"
    :variant="a.variant"
    :title="a.title"
    @close="remove(toastOverflowAlerts, a.key)" />
</pf-alert-group>`},{intro:n(()=>[...i[80]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,`Users will see an overflow message once a predefined number of alerts are displayed. They will not see any alerts beyond the display limit, which must be explicitly set.`),a(`p`,null,`In the following example, an overflow message will appear when more than 4 alerts would be shown. When a 5th alert would appear, an overflow message is shown instead.`),a(`p`,null,[f(`When an overflow message appears in a `),a(`code`,null,`pf-alert-group`),f(` using the `),a(`code`,null,`live-region`),f(` property, the "view 1 more alert" text label will be announced, but the alert message will not.`)]),a(`p`,null,`Users navigating via keyboard or another assistive technology will need a way to navigate to and reveal hidden alerts before they disappear. Alternatively, there should be a place where notifications or alerts are collected to be viewed or read later.`)],-1)]]),default:n(()=>[c(U,{gap:`xs`,style:{"margin-bottom":`16px`}},{default:n(()=>[c(V,{variant:`secondary`,onClick:i[17]||=e=>j.unshift(T(`Toast success alert`,`success`))},{default:n(()=>[...i[81]||=[f(` Add toast success alert `,-1)]]),_:1}),c(V,{variant:`secondary`,onClick:i[18]||=e=>j.unshift(T(`Toast danger alert`,`danger`))},{default:n(()=>[...i[82]||=[f(` Add toast danger alert `,-1)]]),_:1}),c(V,{variant:`secondary`,onClick:i[19]||=e=>j.unshift(T(`Toast info alert`,`info`))},{default:n(()=>[...i[83]||=[f(` Add toast info alert `,-1)]]),_:1})]),_:1}),c(H,{animations:``,toast:``,"live-region":``,"overflow-message":I(j.length),onOverflowClick:i[20]||=e=>D(`Overflow message clicked`)},{default:n(()=>[(u(!0),o(p,null,r(j.slice(0,C),e=>(u(),d(l,{key:e.key,variant:e.variant,title:e.title,onClose:t=>E(j,e.key)},null,8,[`variant`,`title`,`onClose`]))),128))]),_:1},8,[`overflow-message`])]),_:1}),c(h,{title:`Asynchronous alert groups`,source:`<pf-input-group style="margin-bottom: 16px">
  <pf-input-group-item>
    <pf-button variant="secondary" @click="asyncGroupActive = true">Start async alerts</pf-button>
  </pf-input-group-item>
  <pf-input-group-item>
    <pf-button variant="secondary" @click="asyncGroupActive = false">Stop async alerts</pf-button>
  </pf-input-group-item>
</pf-input-group>
<pf-alert-group animations toast live-region aria-live="assertive">
  <pf-alert
    v-for="a in asyncGroupAlerts"
    :key="a.key"
    :variant="a.variant"
    :title="a.title"
    @close="remove(asyncGroupAlerts, a.key)" />
</pf-alert-group>`},{intro:n(()=>[...i[84]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,[f(`The following example shows how alerts can be triggered by an asynchronous event in the application. You can customize how an alert will be announced to assistive technology by adjusting the value of the `),a(`code`,null,`aria-live`),f(` property. Click the "start async alerts" button below and then click the buttons in the above toast examples to demonstrate how asynchronous events add alerts to a group. Click the "stop async alerts" button to halt this behavior.`)])],-1)]]),default:n(()=>[c(q,{style:{"margin-bottom":`16px`}},{default:n(()=>[c(K,null,{default:n(()=>[c(V,{variant:`secondary`,onClick:i[21]||=e=>B.value=!0},{default:n(()=>[...i[85]||=[f(`Start async alerts`,-1)]]),_:1})]),_:1}),c(K,null,{default:n(()=>[c(V,{variant:`secondary`,onClick:i[22]||=e=>B.value=!1},{default:n(()=>[...i[86]||=[f(`Stop async alerts`,-1)]]),_:1})]),_:1})]),_:1}),c(H,{animations:``,toast:``,"live-region":``,"aria-live":`assertive`},{default:n(()=>[(u(!0),o(p,null,r(M,e=>(u(),d(l,{key:e.key,variant:e.variant,title:e.title,onClose:t=>E(M,e.key)},null,8,[`variant`,`title`,`onClose`]))),128))]),_:1})]),_:1}),c(h,{title:`Dynamic alert groups`,source:`<pf-flex gap="xs" style="margin-bottom: 16px">
  <pf-button variant="secondary" @click="dynamicAlerts.unshift(newAlert('Success alert', 'success'))">
    Add single success alert
  </pf-button>
  <pf-button variant="secondary" @click="dynamicAlerts.unshift(newAlert('Danger alert', 'danger'))">
    Add single danger alert
  </pf-button>
  <pf-button variant="secondary" @click="dynamicAlerts.unshift(newAlert('Info alert', 'info'))">
    Add single info alert
  </pf-button>
</pf-flex>
<pf-alert-group animations live-region>
  <pf-alert
    v-for="a in dynamicAlerts"
    :key="a.key"
    inline
    :variant="a.variant"
    :title="a.title"
    @close="remove(dynamicAlerts, a.key)" />
</pf-alert-group>`},{intro:n(()=>[...i[87]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,`Click the buttons in the example below to add dynamic alerts to a group.`)],-1)]]),default:n(()=>[c(U,{gap:`xs`,style:{"margin-bottom":`16px`}},{default:n(()=>[c(V,{variant:`secondary`,onClick:i[23]||=e=>N.unshift(T(`Success alert`,`success`))},{default:n(()=>[...i[88]||=[f(` Add single success alert `,-1)]]),_:1}),c(V,{variant:`secondary`,onClick:i[24]||=e=>N.unshift(T(`Danger alert`,`danger`))},{default:n(()=>[...i[89]||=[f(` Add single danger alert `,-1)]]),_:1}),c(V,{variant:`secondary`,onClick:i[25]||=e=>N.unshift(T(`Info alert`,`info`))},{default:n(()=>[...i[90]||=[f(` Add single info alert `,-1)]]),_:1})]),_:1}),c(H,{animations:``,"live-region":``},{default:n(()=>[(u(!0),o(p,null,r(N,e=>(u(),d(l,{key:e.key,inline:``,variant:e.variant,title:e.title,onClose:t=>E(N,e.key)},null,8,[`variant`,`title`,`onClose`]))),128))]),_:1})]),_:1}),c(h,{title:`Dynamic alert group with overflow message`,source:`<pf-flex gap="xs" style="margin-bottom: 16px">
  <pf-button variant="secondary" @click="dynamicOverflowAlerts.unshift(newAlert('Success alert', 'success'))">
    Add single success alert
  </pf-button>
  <pf-button variant="secondary" @click="dynamicOverflowAlerts.unshift(newAlert('Danger alert', 'danger'))">
    Add single danger alert
  </pf-button>
  <pf-button variant="secondary" @click="dynamicOverflowAlerts.unshift(newAlert('Info alert', 'info'))">
    Add single info alert
  </pf-button>
</pf-flex>
<pf-alert-group
  animations
  live-region
  :overflow-message="overflowMessage(dynamicOverflowAlerts.length)"
  @overflow-click="log('Overflow message clicked')"
>
  <pf-alert
    v-for="a in dynamicOverflowAlerts.slice(0, maxDisplayed)"
    :key="a.key"
    inline
    :variant="a.variant"
    :title="a.title"
    @close="remove(dynamicOverflowAlerts, a.key)" />
</pf-alert-group>`},{intro:n(()=>[...i[91]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,`In the following example, there can be a maximum of 4 alerts shown at once.`)],-1)]]),default:n(()=>[c(U,{gap:`xs`,style:{"margin-bottom":`16px`}},{default:n(()=>[c(V,{variant:`secondary`,onClick:i[26]||=e=>P.unshift(T(`Success alert`,`success`))},{default:n(()=>[...i[92]||=[f(` Add single success alert `,-1)]]),_:1}),c(V,{variant:`secondary`,onClick:i[27]||=e=>P.unshift(T(`Danger alert`,`danger`))},{default:n(()=>[...i[93]||=[f(` Add single danger alert `,-1)]]),_:1}),c(V,{variant:`secondary`,onClick:i[28]||=e=>P.unshift(T(`Info alert`,`info`))},{default:n(()=>[...i[94]||=[f(` Add single info alert `,-1)]]),_:1})]),_:1}),c(H,{animations:``,"live-region":``,"overflow-message":I(P.length),onOverflowClick:i[29]||=e=>D(`Overflow message clicked`)},{default:n(()=>[(u(!0),o(p,null,r(P.slice(0,C),e=>(u(),d(l,{key:e.key,inline:``,variant:e.variant,title:e.title,onClose:t=>E(P,e.key)},null,8,[`variant`,`title`,`onClose`]))),128))]),_:1},8,[`overflow-message`])]),_:1}),c(h,{title:`Multiple dynamic alert groups`,source:`<pf-flex gap="xs">
  <pf-button
    variant="secondary"
    @click="
      multipleAlerts.unshift(
        newAlert('First alert notification.', 'success'),
        newAlert('Second alert notification.', 'warning'),
        newAlert('Third alert notification.', 'danger'),
      )
    "
  >
    Add alert collection
  </pf-button>
</pf-flex>
<pf-alert-group animations toast live-region>
  <pf-alert
    v-for="a in multipleAlerts"
    :key="a.key"
    :variant="a.variant"
    :title="a.title"
    @close="remove(multipleAlerts, a.key)" />
</pf-alert-group>`},{intro:n(()=>[...i[95]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,`You may add multiple alerts to an alert group at once. Click the "add alert collection" button in the example below to add a batch of 3 toast alerts to a group.`)],-1)]]),default:n(()=>[c(U,{gap:`xs`},{default:n(()=>[c(V,{variant:`secondary`,onClick:i[30]||=e=>F.unshift(T(`First alert notification.`,`success`),T(`Second alert notification.`,`warning`),T(`Third alert notification.`,`danger`))},{default:n(()=>[...i[96]||=[f(` Add alert collection `,-1)]]),_:1})]),_:1}),c(H,{animations:``,toast:``,"live-region":``},{default:n(()=>[(u(!0),o(p,null,r(F,e=>(u(),d(l,{key:e.key,variant:e.variant,title:e.title,onClose:t=>E(F,e.key)},null,8,[`variant`,`title`,`onClose`]))),128))]),_:1})]),_:1})]),_:1})}}}),[[`__scopeId`,`data-v-f4073df3`]]);export{w as default};