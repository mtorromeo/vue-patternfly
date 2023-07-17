import{U as W,B,D as U,S as q,L as N}from"./laptop-icon-39e8a11f.js";import{e as z,r as h,f as D,a as c,o as s,c as S,w as e,b as t,g as l,d as _,t as F,h as f,i as x,F as d,j as Y,u as v,p as j,k as E,_ as G}from"./index-b5bb220a.js";import"./createIcon-501ae3dd.js";const I=m=>(j("data-v-1b7be3b4"),m=m(),E(),m),H=I(()=>_("p",null,"Success alert description. This should tell the user more information about the alert.",-1)),J=I(()=>_("code",null,"live-region",-1)),K=I(()=>_("code",null,"live-region",-1)),M=z({__name:"Alert.story",setup(m){const R=h("Alert text"),g=D([]),o=w=>window.alert(w),k=()=>new Date().getTime(),A=D([]);let C;const T=()=>{clearInterval(C)},$=()=>{C=setInterval(()=>{A.push({title:`This is a async alert number ${A.length+1}`,variant:"info",liveRegion:!0,key:k()})},1500)},p=h(!1);return(w,a)=>{const V=c("component-title"),n=c("pf-alert"),r=c("story-canvas"),y=c("pf-alert-action-link"),u=c("pf-button"),b=c("pf-input-group"),L=c("doc-page");return s(),S(L,{title:"Alert"},{default:e(()=>[t(V,{name:"pf-alert"}),t(r,{title:"Types",source:`<pf-alert title="Default alert title" ></pf-alert>
<pf-alert variant="info" title="Info alert title" ></pf-alert>
<pf-alert variant="success" title="Success alert title" ></pf-alert>
<pf-alert variant="warning" title="Warning alert title" ></pf-alert>
<pf-alert variant="danger" title="Danger alert title" ></pf-alert>`},{default:e(()=>[t(n,{title:"Default alert title"}),t(n,{variant:"info",title:"Info alert title"}),t(n,{variant:"success",title:"Success alert title"}),t(n,{variant:"warning",title:"Warning alert title"}),t(n,{variant:"danger",title:"Danger alert title"})]),_:1}),t(r,{title:"With action links",source:`<pf-alert title="Alert title" @close="alert('Clicked the close button')">
  <template #action-links>
    <pf-alert-action-link @click="alert('Clicked on View details')">View details</pf-alert-action-link>
    <pf-alert-action-link @click="alert('Clicked on Ignore')">Ignore</pf-alert-action-link>
  </template>
  <p>{{ sample_text }}</p>
</pf-alert>`},{default:e(()=>[t(n,{title:"Alert title",onClose:a[2]||(a[2]=i=>o("Clicked the close button"))},{"action-links":e(()=>[t(y,{onClick:a[0]||(a[0]=i=>o("Clicked on View details"))},{default:e(()=>[l("View details")]),_:1}),t(y,{onClick:a[1]||(a[1]=i=>o("Clicked on Ignore"))},{default:e(()=>[l("Ignore")]),_:1})]),default:e(()=>[_("p",null,F(R.value),1)]),_:1})]),_:1}),t(r,{title:"Inline types",source:`<pf-alert variant="default" inline title="Default alert title" ></pf-alert>
<pf-alert variant="info" inline title="Info alert title" ></pf-alert>
<pf-alert variant="success" inline title="Success alert title" ></pf-alert>
<pf-alert variant="warning" inline title="Warning alert title" ></pf-alert>
<pf-alert variant="danger" inline title="Danger alert title" ></pf-alert>`},{default:e(()=>[t(n,{variant:"default",inline:"",title:"Default alert title"}),t(n,{variant:"info",inline:"",title:"Info alert title"}),t(n,{variant:"success",inline:"",title:"Success alert title"}),t(n,{variant:"warning",inline:"",title:"Warning alert title"}),t(n,{variant:"danger",inline:"",title:"Danger alert title"})]),_:1}),t(r,{title:"Inline variations",source:`<pf-alert
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
`},{default:e(()=>[t(n,{inline:"",variant:"success",title:"Success alert title",onClose:a[5]||(a[5]=i=>o("Clicked the close button"))},{"action-links":e(()=>[t(y,{onClick:a[3]||(a[3]=i=>o("Clicked on View details"))},{default:e(()=>[l("View details")]),_:1}),t(y,{onClick:a[4]||(a[4]=i=>o("Clicked on Ignore"))},{default:e(()=>[l("Ignore")]),_:1})]),default:e(()=>[H]),_:1})]),_:1}),t(r,{title:"Static live region",source:`<pf-alert
  live-region
  variant="info"
  title="Default live region configuration"
  @close="alert('Clicked the close button')"
>
  This Alert uses the recommended
  <code>live-region</code> prop to automatically sets ARIA attributes and CSS
  classes.


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
`},{default:e(()=>[t(n,{"live-region":"",variant:"info",title:"Default live region configuration",onClose:a[6]||(a[6]=i=>o("Clicked the close button"))},{default:e(()=>[l(" This Alert uses the recommended "),J,l(" prop to automatically sets ARIA attributes and CSS classes. ")]),_:1}),t(n,{"aria-live":"assertive","aria-relevant":"additions text","aria-atomic":"true",variant:"info",title:"Customized live region",onClose:a[7]||(a[7]=i=>o("Clicked the close button"))},{default:e(()=>[l(" You can alternatively omit the "),K,l(" prop to specify ARIA attributes and CSS manually on the containing element. ")]),_:1})]),_:1}),t(r,{title:"Dynamic live region",source:`<pf-input-group style="margin-bottom: 16px">
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
  
</pf-input-group>

<pf-alert
  v-for="a of alerts"
  :key="a.key"
  :variant="a.variant"
  :title="a.title"
  :live-region="a.liveRegion"
  :aria-live="a.ariaLive"
  :aria-relevant="a.ariaRelevant"
  :aria-atomic="a.ariaAtomic" />`},{default:e(()=>[t(b,{style:{"margin-bottom":"16px"}},{default:e(()=>[t(u,{variant:"secondary",onClick:a[8]||(a[8]=i=>g.push({title:"Single Success Alert",variant:"success",liveRegion:!0,key:k()}))},{default:e(()=>[l(" Add Single Success Alert ")]),_:1}),t(u,{variant:"secondary",onClick:a[9]||(a[9]=i=>g.push({title:"Single Info Alert",variant:"info",liveRegion:!0,key:k()}))},{default:e(()=>[l(" Add Single Info Alert ")]),_:1}),t(u,{variant:"secondary",onClick:a[10]||(a[10]=i=>g.push({title:"Single Danger Alert",variant:"danger",ariaLive:"assertive",ariaRelevant:"additions text",ariaAtomic:"false",key:k()}))},{default:e(()=>[l(" Add Single Danger Alert ")]),_:1})]),_:1}),(s(!0),f(d,null,x(g,i=>(s(),S(n,{key:i.key,variant:i.variant,title:i.title,"live-region":i.liveRegion,"aria-live":i.ariaLive,"aria-relevant":i.ariaRelevant,"aria-atomic":i.ariaAtomic},null,8,["variant","title","live-region","aria-live","aria-relevant","aria-atomic"]))),128))]),_:1}),t(r,{title:"Async live region",source:`<pf-input-group style="margin-bottom: 16px">
  <pf-button variant="secondary" @click="startAsyncAlert">Start Async Info Alerts</pf-button>
  <pf-button variant="secondary" @click="stopAsyncAlert">Stop Async Info Alerts</pf-button>
</pf-input-group>

<pf-alert
  v-for="a of asyncAlerts"
  :key="a.key"
  :variant="a.variant"
  :title="a.title"
  :live-region="a.liveRegion" />`},{default:e(()=>[t(b,{style:{"margin-bottom":"16px"}},{default:e(()=>[t(u,{variant:"secondary",onClick:$},{default:e(()=>[l("Start Async Info Alerts")]),_:1}),t(u,{variant:"secondary",onClick:T},{default:e(()=>[l("Stop Async Info Alerts")]),_:1})]),_:1}),(s(!0),f(d,null,x(A,i=>(s(),S(n,{key:i.key,variant:i.variant,title:i.title,"live-region":i.liveRegion},null,8,["variant","title","live-region"]))),128))]),_:1}),t(r,{title:"Alert timeout",source:`<pf-input-group style="margin-bottom: 16px">
  <pf-button
    variant="secondary"
    :disabled="showTimeoutAlerts"
    @click="showTimeoutAlerts = !showTimeoutAlerts"
  >
    <template v-if="showTimeoutAlerts">0 alerts to show</template>
    <template v-else>Show 2 alerts</template>
  
</pf-input-group>`},{default:e(()=>[t(b,{style:{"margin-bottom":"16px"}},{default:e(()=>[t(u,{variant:"secondary",disabled:p.value,onClick:a[11]||(a[11]=i=>p.value=!p.value)},{default:e(()=>[p.value?(s(),f(d,{key:0},[l("0 alerts to show")],64)):(s(),f(d,{key:1},[l("Show 2 alerts")],64))]),_:1},8,["disabled"])]),_:1}),p.value?(s(),f(d,{key:0},[t(n,{title:"Default timeout Alert",timeout:""},{default:e(()=>[l(" This alert will dismiss after 8 seconds ")]),_:1}),t(n,{title:"Custom timeout Alert",timeout:16e3},{default:e(()=>[l(" This alert will dismiss after 16 seconds ")]),_:1})],64)):Y("",!0)]),_:1}),t(r,{title:"Custom icons",source:`<pf-alert title="Default alert title">
  <template #custom-icon>
    <users-icon></users-icon>
  </template>
</pf-alert>
<pf-alert variant="info" title="Info alert title">
  <template #custom-icon>
    <box-icon></box-icon>
  </template>
</pf-alert>
<pf-alert variant="success" title="Success alert title">
  <template #custom-icon>
    <database-icon></database-icon>
  </template>
</pf-alert>
<pf-alert variant="warning" title="Warning alert title">
  <template #custom-icon>
    <server-icon></server-icon>
  </template>
</pf-alert>
<pf-alert variant="danger" title="Danger alert title">
  <template #custom-icon>
    <laptop-icon></laptop-icon>
  </template>
</pf-alert>`},{default:e(()=>[t(n,{title:"Default alert title"},{"custom-icon":e(()=>[t(v(W))]),_:1}),t(n,{variant:"info",title:"Info alert title"},{"custom-icon":e(()=>[t(v(B))]),_:1}),t(n,{variant:"success",title:"Success alert title"},{"custom-icon":e(()=>[t(v(U))]),_:1}),t(n,{variant:"warning",title:"Warning alert title"},{"custom-icon":e(()=>[t(v(q))]),_:1}),t(n,{variant:"danger",title:"Danger alert title"},{"custom-icon":e(()=>[t(v(N))]),_:1})]),_:1})]),_:1})}}});const X=G(M,[["__scopeId","data-v-1b7be3b4"]]);export{X as default};
