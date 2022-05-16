import{U as W,B,D as U,S as q,L as N}from"./laptop-icon.f5fef2a9.js";import{_ as z,e as F,r as w,f as D,a as u,c as S,w as e,o as c,b as t,d as A,t as Y,u as o,g as f,h as x,F as v,i as j,j as a,p as E,k as G}from"./index.0b6ec288.js";import"./createIcon.327c1c75.js";const b=m=>(E("data-v-0b8c3006"),m=m(),G(),m),H=a("View details"),J=a("Ignore"),K=a("View details"),M=a("Ignore"),O=b(()=>A("p",null,"Success alert description. This should tell the user more information about the alert.",-1)),P=a(" This Alert uses the recommended "),Q=b(()=>A("code",null,"live-region",-1)),X=a(" prop to automatically sets ARIA attributes and CSS classes. "),Z=a(" You can alternatively omit the "),tt=b(()=>A("code",null,"live-region",-1)),et=a(" prop to specify ARIA attributes and CSS manually on the containing element. "),it=a(" Add Single Success Alert "),nt=a(" Add Single Info Alert "),lt=a(" Add Single Danger Alert "),at=a("Start Async Info Alerts"),ot=a("Stop Async Info Alerts"),rt=a("0 alerts to show"),st=a("Show 2 alerts"),ct=a(" This alert will dismiss after 8 seconds "),ut=a(" This alert will dismiss after 16 seconds "),pt=F({setup(m){const T=w("Alert text"),g=D([]),s=I=>window.alert(I),_=()=>new Date().getTime(),y=D([]);let C=null;const R=()=>{clearInterval(C)},$=()=>{C=setInterval(()=>{y.push({title:`This is a async alert number ${y.length+1}`,variant:"info",isLiveRegion:!0,key:_()})},1500)},d=w(!1);return(I,i)=>{const V=u("component-title"),l=u("pf-alert"),r=u("story-canvas"),k=u("pf-alert-action-link"),p=u("pf-button"),h=u("pf-input-group"),L=u("doc-page");return c(),S(L,{title:"Alert"},{default:e(()=>[t(V,{name:"pf-alert"}),t(r,{title:"Types",source:`<pf-alert title="Default alert title" />
<pf-alert variant="info" title="Info alert title" />
<pf-alert variant="success" title="Success alert title" />
<pf-alert variant="warning" title="Warning alert title" />
<pf-alert variant="danger" title="Danger alert title" />`},{default:e(()=>[t(l,{title:"Default alert title"}),t(l,{variant:"info",title:"Info alert title"}),t(l,{variant:"success",title:"Success alert title"}),t(l,{variant:"warning",title:"Warning alert title"}),t(l,{variant:"danger",title:"Danger alert title"})]),_:1}),t(r,{title:"With action links",source:`<pf-alert title="Alert title" close @close="alert('Clicked the close button')">
  <template #action-links>
    <pf-alert-action-link @click="alert('Clicked on View details')">View details</pf-alert-action-link>
    <pf-alert-action-link @click="alert('Clicked on Ignore')">Ignore</pf-alert-action-link>
  </template>
  <p>{{ sample_text }}</p>
</pf-alert>`},{default:e(()=>[t(l,{title:"Alert title",close:"",onClose:i[2]||(i[2]=n=>s("Clicked the close button"))},{"action-links":e(()=>[t(k,{onClick:i[0]||(i[0]=n=>s("Clicked on View details"))},{default:e(()=>[H]),_:1}),t(k,{onClick:i[1]||(i[1]=n=>s("Clicked on Ignore"))},{default:e(()=>[J]),_:1})]),default:e(()=>[A("p",null,Y(T.value),1)]),_:1})]),_:1}),t(r,{title:"Inline types",source:`<pf-alert variant="default" inline title="Default alert title" />
<pf-alert variant="info" inline title="Info alert title" />
<pf-alert variant="success" inline title="Success alert title" />
<pf-alert variant="warning" inline title="Warning alert title" />
<pf-alert variant="danger" inline title="Danger alert title" />`},{default:e(()=>[t(l,{variant:"default",inline:"",title:"Default alert title"}),t(l,{variant:"info",inline:"",title:"Info alert title"}),t(l,{variant:"success",inline:"",title:"Success alert title"}),t(l,{variant:"warning",inline:"",title:"Warning alert title"}),t(l,{variant:"danger",inline:"",title:"Danger alert title"})]),_:1}),t(r,{title:"Inline variations",source:`<pf-alert
  inline
  variant="success"
  title="Success alert title"
  close
  @close="alert('Clicked the close button')"
>
  <template #action-links>
    <pf-alert-action-link @click="alert('Clicked on View details')">View details</pf-alert-action-link>
    <pf-alert-action-link @click="alert('Clicked on Ignore')">Ignore</pf-alert-action-link>
  </template>

  <p>Success alert description. This should tell the user more information about the alert.</p>
</pf-alert>`},{default:e(()=>[t(l,{inline:"",variant:"success",title:"Success alert title",close:"",onClose:i[5]||(i[5]=n=>s("Clicked the close button"))},{"action-links":e(()=>[t(k,{onClick:i[3]||(i[3]=n=>s("Clicked on View details"))},{default:e(()=>[K]),_:1}),t(k,{onClick:i[4]||(i[4]=n=>s("Clicked on Ignore"))},{default:e(()=>[M]),_:1})]),default:e(()=>[O]),_:1})]),_:1}),t(r,{title:"Static live region",source:`<pf-alert
  live-region
  variant="info"
  title="Default live region configuration"
  close
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
  close
  @close="alert('Clicked the close button')"
>
  You can alternatively omit the
  <code>live-region</code> prop to specify ARIA attributes and CSS manually on
  the containing element.
</pf-alert>`},{default:e(()=>[t(l,{"live-region":"",variant:"info",title:"Default live region configuration",close:"",onClose:i[6]||(i[6]=n=>s("Clicked the close button"))},{default:e(()=>[P,Q,X]),_:1}),t(l,{"aria-live":"assertive","aria-relevant":"additions text","aria-atomic":"true",variant:"info",title:"Customized live region",close:"",onClose:i[7]||(i[7]=n=>s("Clicked the close button"))},{default:e(()=>[Z,tt,et]),_:1})]),_:1}),t(r,{title:"Dynamic live region",source:`<pf-input-group style="margin-bottom: 16px">
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
  :aria-atomic="a.ariaAtomic" />`},{default:e(()=>[t(h,{style:{"margin-bottom":"16px"}},{default:e(()=>[t(p,{variant:"secondary",onClick:i[8]||(i[8]=n=>o(g).push({title:"Single Success Alert",variant:"success",liveRegion:!0,key:_()}))},{default:e(()=>[it]),_:1}),t(p,{variant:"secondary",onClick:i[9]||(i[9]=n=>o(g).push({title:"Single Info Alert",variant:"info",liveRegion:!0,key:_()}))},{default:e(()=>[nt]),_:1}),t(p,{variant:"secondary",onClick:i[10]||(i[10]=n=>o(g).push({title:"Single Danger Alert",variant:"danger",ariaLive:"assertive",ariaRelevant:"additions text",ariaAtomic:"false",key:_()}))},{default:e(()=>[lt]),_:1})]),_:1}),(c(!0),f(v,null,x(o(g),n=>(c(),S(l,{key:n.key,variant:n.variant,title:n.title,"live-region":n.liveRegion,"aria-live":n.ariaLive,"aria-relevant":n.ariaRelevant,"aria-atomic":n.ariaAtomic},null,8,["variant","title","live-region","aria-live","aria-relevant","aria-atomic"]))),128))]),_:1}),t(r,{title:"Async live region",source:`<pf-input-group style="margin-bottom: 16px">
  <pf-button variant="secondary" @click="startAsyncAlert">Start Async Info Alerts</pf-button>
  <pf-button variant="secondary" @click="stopAsyncAlert">Stop Async Info Alerts</pf-button>
</pf-input-group>

<pf-alert
  v-for="a of asyncAlerts"
  :key="a.key"
  :variant="a.variant"
  :title="a.title"
  :live-region="a.liveRegion" />`},{default:e(()=>[t(h,{style:{"margin-bottom":"16px"}},{default:e(()=>[t(p,{variant:"secondary",onClick:$},{default:e(()=>[at]),_:1}),t(p,{variant:"secondary",onClick:R},{default:e(()=>[ot]),_:1})]),_:1}),(c(!0),f(v,null,x(o(y),n=>(c(),S(l,{key:n.key,variant:n.variant,title:n.title,"live-region":n.liveRegion},null,8,["variant","title","live-region"]))),128))]),_:1}),t(r,{title:"Alert timeout",source:`<pf-input-group style="margin-bottom: 16px">
  <pf-button
    variant="secondary"
    :disabled="showTimeoutAlerts"
    @click="showTimeoutAlerts = !showTimeoutAlerts"
  >
    <template v-if="showTimeoutAlerts">0 alerts to show</template>
    <template v-else>Show 2 alerts</template>
  </pf-button>
</pf-input-group>

<template v-if="showTimeoutAlerts">
  <pf-alert title="Default timeout Alert" timeout>
    This alert will dismiss after 8 seconds
  </pf-alert>
  <pf-alert title="Custom timeout Alert" :timeout="16000">
    This alert will dismiss after 16 seconds
  </pf-alert>
</template>`},{default:e(()=>[t(h,{style:{"margin-bottom":"16px"}},{default:e(()=>[t(p,{variant:"secondary",disabled:d.value,onClick:i[11]||(i[11]=n=>d.value=!d.value)},{default:e(()=>[d.value?(c(),f(v,{key:0},[rt],64)):(c(),f(v,{key:1},[st],64))]),_:1},8,["disabled"])]),_:1}),d.value?(c(),f(v,{key:0},[t(l,{title:"Default timeout Alert",timeout:""},{default:e(()=>[ct]),_:1}),t(l,{title:"Custom timeout Alert",timeout:16e3},{default:e(()=>[ut]),_:1})],64)):j("",!0)]),_:1}),t(r,{title:"Custom icons",source:`<pf-alert title="Default alert title">
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
</pf-alert>`},{default:e(()=>[t(l,{title:"Default alert title"},{"custom-icon":e(()=>[t(o(W))]),_:1}),t(l,{variant:"info",title:"Info alert title"},{"custom-icon":e(()=>[t(o(B))]),_:1}),t(l,{variant:"success",title:"Success alert title"},{"custom-icon":e(()=>[t(o(U))]),_:1}),t(l,{variant:"warning",title:"Warning alert title"},{"custom-icon":e(()=>[t(o(q))]),_:1}),t(l,{variant:"danger",title:"Danger alert title"},{"custom-icon":e(()=>[t(o(N))]),_:1})]),_:1})]),_:1})}}});var mt=z(pt,[["__scopeId","data-v-0b8c3006"]]);export{mt as default};
