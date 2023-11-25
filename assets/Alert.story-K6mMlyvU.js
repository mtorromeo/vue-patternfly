import{U as W,B,D as U,S as q,L as N}from"./laptop-icon-5Qmq3S0m.js";import{e as z,r as h,f as x,a as c,o as s,c as S,w as e,b as t,g as l,d as y,t as F,h as f,i as D,F as d,j as Y,u as v,p as j,k as E,_ as G}from"./index-aHpSD51e.js";const b=m=>(j("data-v-f376ebbe"),m=m(),E(),m),H=b(()=>y("p",null,"Success alert description. This should tell the user more information about the alert.",-1)),J=b(()=>y("code",null,"live-region",-1)),K=b(()=>y("code",null,"live-region",-1)),M=z({__name:"Alert.story",setup(m){const R=h("Alert text"),g=x([]),o=w=>window.alert(w),k=()=>new Date().getTime(),_=x([]);let I;const T=()=>{clearInterval(I)},$=()=>{I=setInterval(()=>{_.push({title:`This is a async alert number ${_.length+1}`,variant:"info",liveRegion:!0,key:k()})},1500)},p=h(!1);return(w,i)=>{const V=c("component-title"),a=c("pf-alert"),r=c("story-canvas"),A=c("pf-alert-action-link"),u=c("pf-button"),C=c("pf-input-group"),L=c("doc-page");return s(),S(L,{title:"Alert"},{default:e(()=>[t(V,{name:"pf-alert"}),t(r,{title:"Types",source:`<pf-alert title="Custom alert title" />
<pf-alert variant="info" title="Info alert title" />
<pf-alert variant="success" title="Success alert title" />
<pf-alert variant="warning" title="Warning alert title" />
<pf-alert variant="danger" title="Danger alert title" />`},{default:e(()=>[t(a,{title:"Custom alert title"}),t(a,{variant:"info",title:"Info alert title"}),t(a,{variant:"success",title:"Success alert title"}),t(a,{variant:"warning",title:"Warning alert title"}),t(a,{variant:"danger",title:"Danger alert title"})]),_:1}),t(r,{title:"With action links",source:`<pf-alert title="Alert title" @close="alert('Clicked the close button')">
  <template #action-links>
    <pf-alert-action-link @click="alert('Clicked on View details')">View details</pf-alert-action-link>
    <pf-alert-action-link @click="alert('Clicked on Ignore')">Ignore</pf-alert-action-link>
  </template>
  <p>{{ sample_text }}</p>
</pf-alert>`},{default:e(()=>[t(a,{title:"Alert title",onClose:i[2]||(i[2]=n=>o("Clicked the close button"))},{"action-links":e(()=>[t(A,{onClick:i[0]||(i[0]=n=>o("Clicked on View details"))},{default:e(()=>[l("View details")]),_:1}),t(A,{onClick:i[1]||(i[1]=n=>o("Clicked on Ignore"))},{default:e(()=>[l("Ignore")]),_:1})]),default:e(()=>[y("p",null,F(R.value),1)]),_:1})]),_:1}),t(r,{title:"Inline types",source:`<pf-alert variant="custom" inline title="Custom alert title" />
<pf-alert variant="info" inline title="Info alert title" />
<pf-alert variant="success" inline title="Success alert title" />
<pf-alert variant="warning" inline title="Warning alert title" />
<pf-alert variant="danger" inline title="Danger alert title" />`},{default:e(()=>[t(a,{variant:"custom",inline:"",title:"Custom alert title"}),t(a,{variant:"info",inline:"",title:"Info alert title"}),t(a,{variant:"success",inline:"",title:"Success alert title"}),t(a,{variant:"warning",inline:"",title:"Warning alert title"}),t(a,{variant:"danger",inline:"",title:"Danger alert title"})]),_:1}),t(r,{title:"Inline variations",source:`<pf-alert
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
</pf-alert>`},{default:e(()=>[t(a,{inline:"",variant:"success",title:"Success alert title",onClose:i[5]||(i[5]=n=>o("Clicked the close button"))},{"action-links":e(()=>[t(A,{onClick:i[3]||(i[3]=n=>o("Clicked on View details"))},{default:e(()=>[l("View details")]),_:1}),t(A,{onClick:i[4]||(i[4]=n=>o("Clicked on Ignore"))},{default:e(()=>[l("Ignore")]),_:1})]),default:e(()=>[H]),_:1})]),_:1}),t(r,{title:"Static live region",source:`<pf-alert
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
</pf-alert>`},{default:e(()=>[t(a,{"live-region":"",variant:"info",title:"Default live region configuration",onClose:i[6]||(i[6]=n=>o("Clicked the close button"))},{default:e(()=>[l(" This Alert uses the recommended "),J,l(" prop to automatically sets ARIA attributes and CSS classes. ")]),_:1}),t(a,{"aria-live":"assertive","aria-relevant":"additions text","aria-atomic":"true",variant:"info",title:"Customized live region",onClose:i[7]||(i[7]=n=>o("Clicked the close button"))},{default:e(()=>[l(" You can alternatively omit the "),K,l(" prop to specify ARIA attributes and CSS manually on the containing element. ")]),_:1})]),_:1}),t(r,{title:"Dynamic live region",source:`<pf-input-group style="margin-bottom: 16px">
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
  :aria-atomic="a.ariaAtomic" />`},{default:e(()=>[t(C,{style:{"margin-bottom":"16px"}},{default:e(()=>[t(u,{variant:"secondary",onClick:i[8]||(i[8]=n=>g.push({title:"Single Success Alert",variant:"success",liveRegion:!0,key:k()}))},{default:e(()=>[l(" Add Single Success Alert ")]),_:1}),t(u,{variant:"secondary",onClick:i[9]||(i[9]=n=>g.push({title:"Single Info Alert",variant:"info",liveRegion:!0,key:k()}))},{default:e(()=>[l(" Add Single Info Alert ")]),_:1}),t(u,{variant:"secondary",onClick:i[10]||(i[10]=n=>g.push({title:"Single Danger Alert",variant:"danger",ariaLive:"assertive",ariaRelevant:"additions text",ariaAtomic:"false",key:k()}))},{default:e(()=>[l(" Add Single Danger Alert ")]),_:1})]),_:1}),(s(!0),f(d,null,D(g,n=>(s(),S(a,{key:n.key,variant:n.variant,title:n.title,"live-region":n.liveRegion,"aria-live":n.ariaLive,"aria-relevant":n.ariaRelevant,"aria-atomic":n.ariaAtomic},null,8,["variant","title","live-region","aria-live","aria-relevant","aria-atomic"]))),128))]),_:1}),t(r,{title:"Async live region",source:`<pf-input-group style="margin-bottom: 16px">
  <pf-button variant="secondary" @click="startAsyncAlert">Start Async Info Alerts</pf-button>
  <pf-button variant="secondary" @click="stopAsyncAlert">Stop Async Info Alerts</pf-button>
</pf-input-group>

<pf-alert
  v-for="a of asyncAlerts"
  :key="a.key"
  :variant="a.variant"
  :title="a.title"
  :live-region="a.liveRegion" />`},{default:e(()=>[t(C,{style:{"margin-bottom":"16px"}},{default:e(()=>[t(u,{variant:"secondary",onClick:$},{default:e(()=>[l("Start Async Info Alerts")]),_:1}),t(u,{variant:"secondary",onClick:T},{default:e(()=>[l("Stop Async Info Alerts")]),_:1})]),_:1}),(s(!0),f(d,null,D(_,n=>(s(),S(a,{key:n.key,variant:n.variant,title:n.title,"live-region":n.liveRegion},null,8,["variant","title","live-region"]))),128))]),_:1}),t(r,{title:"Alert timeout",source:`<pf-input-group style="margin-bottom: 16px">
  <pf-button
    variant="secondary"
    :disabled="showTimeoutAlerts"
    @click="showTimeoutAlerts = !showTimeoutAlerts"
  >
    <template v-if="showTimeoutAlerts">0 alerts to show</template>
    <template v-else>Show 2 alerts</template>
  </pf-button>
</pf-input-group>`},{default:e(()=>[t(C,{style:{"margin-bottom":"16px"}},{default:e(()=>[t(u,{variant:"secondary",disabled:p.value,onClick:i[11]||(i[11]=n=>p.value=!p.value)},{default:e(()=>[p.value?(s(),f(d,{key:0},[l("0 alerts to show")],64)):(s(),f(d,{key:1},[l("Show 2 alerts")],64))]),_:1},8,["disabled"])]),_:1}),p.value?(s(),f(d,{key:0},[t(a,{title:"Default timeout Alert",timeout:""},{default:e(()=>[l(" This alert will dismiss after 8 seconds ")]),_:1}),t(a,{title:"Custom timeout Alert",timeout:16e3},{default:e(()=>[l(" This alert will dismiss after 16 seconds ")]),_:1})],64)):Y("",!0)]),_:1}),t(r,{title:"Custom icons",source:`<pf-alert title="Custom alert title">
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
</pf-alert>`},{default:e(()=>[t(a,{title:"Custom alert title"},{"custom-icon":e(()=>[t(v(W))]),_:1}),t(a,{variant:"info",title:"Info alert title"},{"custom-icon":e(()=>[t(v(B))]),_:1}),t(a,{variant:"success",title:"Success alert title"},{"custom-icon":e(()=>[t(v(U))]),_:1}),t(a,{variant:"warning",title:"Warning alert title"},{"custom-icon":e(()=>[t(v(q))]),_:1}),t(a,{variant:"danger",title:"Danger alert title"},{"custom-icon":e(()=>[t(v(N))]),_:1})]),_:1})]),_:1})}}}),Q=G(M,[["__scopeId","data-v-f376ebbe"]]);export{Q as default};
