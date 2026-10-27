import{F as e,K as t,c as n,g as r,h as i,it as a,j as o,l as s,m as c,rt as l}from"./runtime-core.esm-bundler-DO1530YC.js";var u=r({__name:`NotificationBadge.story`,setup(r){let u=l({read:!1,unread:!1,attention:!1}),d=l({read:!1,unread:!1,attention:!1}),f=a(0),p=a(!1);function m(){f.value++,p.value=!0}return(r,a)=>{let l=e(`component-info`),h=e(`pf-notification-badge`),g=e(`story-canvas`),_=e(`pf-stack-item`),v=e(`pf-button`),y=e(`pf-stack`),b=e(`doc-page`);return o(),s(b,{name:`Components/NotificationBadge.story.vue`,title:`Notification Badge`},{description:t(()=>[...a[9]||=[c(`A `,-1),n(`b`,null,`notification badge`,-1),c(` is intended to be used with a notification drawer as a visible indicator to alert the user about incoming notifications.`,-1)]]),apidocs:t(()=>[i(l,{name:`PfNotificationBadge`,doc:{name:`PfNotificationBadge`,exportName:`PfNotificationBadge`,displayName:`NotificationBadge`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`variant`,description:`Determines the variant of the notification badge`,required:!1,type:{name:`union`,elements:[{name:`"read"`},{name:`"unread"`},{name:`"attention"`},{name:`"plain"`}]},defaultValue:{func:!1,value:`'read'`}},{name:`count`,description:`A number displayed in the badge alongside the icon`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`0`}},{name:`expanded`,description:`Flag for applying expanded styling and setting the aria-expanded attribute on the
notification badge.`,required:!1,type:{name:`boolean`}},{name:`shouldNotify`,description:`Flag indicating whether the notification badge animation should be triggered. Each
time this prop is true, the animation will be triggered a single time.`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`attention-icon`},{name:`icon`,description:`Icon of the read, unread and plain variants`},{name:`default`,description:`Content shown when there is no count`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/NotificationBadge.vue`]}})]),default:t(()=>[a[15]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),n(`ul`,null,[n(`li`,null,[c(`The `),n(`code`,null,`icon`),c(` and `),n(`code`,null,`attentionIcon`),c(` props are the `),n(`code`,null,`icon`),c(` and `),n(`code`,null,`attention-icon`),c(` slots.`)]),n(`li`,null,[c(`The `),n(`code`,null,`onAnimationEnd`),c(` callback is the `),n(`code`,null,`animationend`),c(` event. See `),n(`a`,{href:`#/`},`common differences from patternfly-react`),c(`.`)])]),n(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),i(g,{title:`Basic`,source:`<pf-notification-badge
  variant="read"
  aria-label="Basic notification badge with read variant"
  :expanded="expanded.read"
  @click="expanded.read = !expanded.read" />
<pf-notification-badge
  variant="unread"
  aria-label="Basic notification badge with unread variant"
  :expanded="expanded.unread"
  @click="expanded.unread = !expanded.unread" />
<pf-notification-badge
  variant="attention"
  aria-label="Basic notification badge with attention variant"
  :expanded="expanded.attention"
  @click="expanded.attention = !expanded.attention" />`},{intro:t(()=>[...a[10]||=[n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,`The following example demonstrates the three variants of notification badge that are available: "read", "unread", and "attention".`),n(`p`,null,[c(`The `),n(`code`,null,`expanded`),c(` property is also passed in to:`)]),n(`ul`,null,[n(`li`,null,[c(`set the `),n(`code`,null,`aria-expanded`),c(` attribute on the notification badge,`)]),n(`li`,null,`apply visual styling on the notification badge, and`),n(`li`,null,[c(`to indicate that a notification drawer is expanded, for use-cases as seen in the `),n(`a`,{href:`#/stories/components/notification-drawer`},`notification drawer`),c(`.`)])])],-1)]]),default:t(()=>[i(h,{variant:`read`,"aria-label":`Basic notification badge with read variant`,expanded:u.read,onClick:a[0]||=e=>u.read=!u.read},null,8,[`expanded`]),i(h,{variant:`unread`,"aria-label":`Basic notification badge with unread variant`,expanded:u.unread,onClick:a[1]||=e=>u.unread=!u.unread},null,8,[`expanded`]),i(h,{variant:`attention`,"aria-label":`Basic notification badge with attention variant`,expanded:u.attention,onClick:a[2]||=e=>u.attention=!u.attention},null,8,[`expanded`])]),_:1}),i(g,{title:`With count`,source:`<pf-notification-badge
  variant="read"
  aria-label="Notification badge with count and read variant"
  :expanded="expandedCount.read"
  :count="10"
  @click="expandedCount.read = !expandedCount.read" />
<pf-notification-badge
  variant="unread"
  aria-label="Notification badge with count and unread variant"
  :expanded="expandedCount.unread"
  :count="10"
  @click="expandedCount.unread = !expandedCount.unread" />
<pf-notification-badge
  variant="attention"
  aria-label="Notification badge with count and attention variant"
  :expanded="expandedCount.attention"
  :count="10"
  @click="expandedCount.attention = !expandedCount.attention" />`},{intro:t(()=>[...a[11]||=[n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[c(`You can display a number within the notification badge by passing in the `),n(`code`,null,`count`),c(` property, to indicate how many read, unread, or attention notifications there are. The `),n(`code`,null,`expanded`),c(` property is also passed in, similar to the basic example.`)])],-1)]]),default:t(()=>[i(h,{variant:`read`,"aria-label":`Notification badge with count and read variant`,expanded:d.read,count:10,onClick:a[3]||=e=>d.read=!d.read},null,8,[`expanded`]),i(h,{variant:`unread`,"aria-label":`Notification badge with count and unread variant`,expanded:d.unread,count:10,onClick:a[4]||=e=>d.unread=!d.unread},null,8,[`expanded`]),i(h,{variant:`attention`,"aria-label":`Notification badge with count and attention variant`,expanded:d.attention,count:10,onClick:a[5]||=e=>d.attention=!d.attention},null,8,[`expanded`])]),_:1}),i(g,{title:`With animation`,source:`<pf-stack gutter>
  <pf-stack-item>
    <pf-notification-badge
      variant="read"
      aria-label="Notification badge with read variant and no count"
      :count="count"
      :should-notify="notify"
      @animationend="notify = false" />
    <pf-notification-badge
      variant="unread"
      aria-label="Notification badge animation with unread variant and count"
      :count="count"
      :should-notify="notify"
      @animationend="notify = false" />
    <pf-notification-badge
      variant="attention"
      aria-label="Notification badge animation with attention variant and count"
      :count="count"
      :should-notify="notify"
      @animationend="notify = false" />
  </pf-stack-item>
  <pf-stack-item>
    <pf-button @click="addNotification">Add Notification</pf-button>
  </pf-stack-item>
</pf-stack>`},{intro:t(()=>[...a[12]||=[n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[c(`To animate the icon within the notification badge, use the `),n(`code`,null,`should-notify`),c(` property. In this example, the notification badge icon will only animate if the notification count is greater than 0.`)])],-1)]]),default:t(()=>[i(y,{gutter:``},{default:t(()=>[i(_,null,{default:t(()=>[i(h,{variant:`read`,"aria-label":`Notification badge with read variant and no count`,count:f.value,"should-notify":p.value,onAnimationend:a[6]||=e=>p.value=!1},null,8,[`count`,`should-notify`]),i(h,{variant:`unread`,"aria-label":`Notification badge animation with unread variant and count`,count:f.value,"should-notify":p.value,onAnimationend:a[7]||=e=>p.value=!1},null,8,[`count`,`should-notify`]),i(h,{variant:`attention`,"aria-label":`Notification badge animation with attention variant and count`,count:f.value,"should-notify":p.value,onAnimationend:a[8]||=e=>p.value=!1},null,8,[`count`,`should-notify`])]),_:1}),i(_,null,{default:t(()=>[i(v,{onClick:m},{default:t(()=>[...a[13]||=[c(`Add Notification`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),i(g,{title:`Plain variant`,source:`<pf-notification-badge variant="plain" aria-label="Plain notification badge" />
<pf-notification-badge variant="plain" aria-label="Plain notification badge with count" :count="30" />`},{intro:t(()=>[...a[14]||=[n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,`The "plain" variant renders the notification badge as a plain button, without the read, unread or attention styling.`)],-1)]]),default:t(()=>[i(h,{variant:`plain`,"aria-label":`Plain notification badge`}),i(h,{variant:`plain`,"aria-label":`Plain notification badge with count`,count:30})]),_:1})]),_:1})}}});export{u as default};