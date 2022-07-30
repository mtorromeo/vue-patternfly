import{U as W,B,D as U,S as q,L as N}from"./laptop-icon.be858a58.js";import{e as z,r as w,f as D,a as c,o as s,c as S,w as e,b as t,d as A,t as F,g as d,h as x,F as f,i as Y,u as v,j as l,p as j,k as E,_ as G}from"./index.61b3793e.js";import"./createIcon.e6f94ec4.js";const b=m=>(j("data-v-2b1939fa"),m=m(),E(),m),H=l("View details"),J=l("Ignore"),K=l("View details"),M=l("Ignore"),O=b(()=>A("p",null,"Success alert description. This should tell the user more information about the alert.",-1)),P=l(" This Alert uses the recommended "),Q=b(()=>A("code",null,"live-region",-1)),X=l(" prop to automatically sets ARIA attributes and CSS classes. "),Z=l(" You can alternatively omit the "),tt=b(()=>A("code",null,"live-region",-1)),et=l(" prop to specify ARIA attributes and CSS manually on the containing element. "),it=l(" Add Single Success Alert "),nt=l(" Add Single Info Alert "),at=l(" Add Single Danger Alert "),lt=l("Start Async Info Alerts"),ot=l("Stop Async Info Alerts"),rt=l("0 alerts to show"),st=l("Show 2 alerts"),ct=l(" This alert will dismiss after 8 seconds "),ut=l(" This alert will dismiss after 16 seconds "),pt=z({__name:"Alert.story",setup(m){const T=w("Alert text"),g=D([]),r=I=>window.alert(I),_=()=>new Date().getTime(),y=D([]);let C=null;const R=()=>{clearInterval(C)},$=()=>{C=setInterval(()=>{y.push({title:`This is a async alert number ${y.length+1}`,variant:"info",isLiveRegion:!0,key:_()})},1500)},p=w(!1);return(I,i)=>{const V=c("component-title"),a=c("pf-alert"),o=c("story-canvas"),k=c("pf-alert-action-link"),u=c("pf-button"),h=c("pf-input-group"),L=c("doc-page");return s(),S(L,{title:"Alert"},{default:e(()=>[t(V,{name:"pf-alert"}),t(o,{title:"Types",source:`<pf-alert title="Default alert title" ></pf-alert>
<pf-alert variant="info" title="Info alert title" ></pf-alert>
<pf-alert variant="success" title="Success alert title" ></pf-alert>
<pf-alert variant="warning" title="Warning alert title" ></pf-alert>
<pf-alert variant="danger" title="Danger alert title" ></pf-alert>`},{default:e(()=>[t(a,{title:"Default alert title"}),t(a,{variant:"info",title:"Info alert title"}),t(a,{variant:"success",title:"Success alert title"}),t(a,{variant:"warning",title:"Warning alert title"}),t(a,{variant:"danger",title:"Danger alert title"})]),_:1}),t(o,{title:"With action links",source:`<pf-alert title="Alert title" close @close="alert('Clicked the close button')">
  <template #action-links>
    <pf-alert-action-link @click="alert('Clicked on View details')">View details</pf-alert-action-link>
    <pf-alert-action-link @click="alert('Clicked on Ignore')">Ignore</pf-alert-action-link>
  </template>
  <p>{{ sample_text }}</p>
</pf-alert>`},{default:e(()=>[t(a,{title:"Alert title",close:"",onClose:i[2]||(i[2]=n=>r("Clicked the close button"))},{"action-links":e(()=>[t(k,{onClick:i[0]||(i[0]=n=>r("Clicked on View details"))},{default:e(()=>[H]),_:1}),t(k,{onClick:i[1]||(i[1]=n=>r("Clicked on Ignore"))},{default:e(()=>[J]),_:1})]),default:e(()=>[A("p",null,F(T.value),1)]),_:1})]),_:1}),t(o,{title:"Inline types",source:`<pf-alert variant="default" inline title="Default alert title" ></pf-alert>
<pf-alert variant="info" inline title="Info alert title" ></pf-alert>
<pf-alert variant="success" inline title="Success alert title" ></pf-alert>
<pf-alert variant="warning" inline title="Warning alert title" ></pf-alert>
<pf-alert variant="danger" inline title="Danger alert title" ></pf-alert>`},{default:e(()=>[t(a,{variant:"default",inline:"",title:"Default alert title"}),t(a,{variant:"info",inline:"",title:"Info alert title"}),t(a,{variant:"success",inline:"",title:"Success alert title"}),t(a,{variant:"warning",inline:"",title:"Warning alert title"}),t(a,{variant:"danger",inline:"",title:"Danger alert title"})]),_:1}),t(o,{title:"Inline variations",source:`<pf-alert
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
`},{default:e(()=>[t(a,{inline:"",variant:"success",title:"Success alert title",close:"",onClose:i[5]||(i[5]=n=>r("Clicked the close button"))},{"action-links":e(()=>[t(k,{onClick:i[3]||(i[3]=n=>r("Clicked on View details"))},{default:e(()=>[K]),_:1}),t(k,{onClick:i[4]||(i[4]=n=>r("Clicked on Ignore"))},{default:e(()=>[M]),_:1})]),default:e(()=>[O]),_:1})]),_:1}),t(o,{title:"Static live region",source:`<pf-alert
  live-region
  variant="info"
  title="Default live region configuration"
  close
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
  close
  @close="alert('Clicked the close button')"
>
  You can alternatively omit the
  <code>live-region</code> prop to specify ARIA attributes and CSS manually on
  the containing element.
`},{default:e(()=>[t(a,{"live-region":"",variant:"info",title:"Default live region configuration",close:"",onClose:i[6]||(i[6]=n=>r("Clicked the close button"))},{default:e(()=>[P,Q,X]),_:1}),t(a,{"aria-live":"assertive","aria-relevant":"additions text","aria-atomic":"true",variant:"info",title:"Customized live region",close:"",onClose:i[7]||(i[7]=n=>r("Clicked the close button"))},{default:e(()=>[Z,tt,et]),_:1})]),_:1}),t(o,{title:"Dynamic live region",source:`<pf-input-group style="margin-bottom: 16px">
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
  :aria-atomic="a.ariaAtomic" />`},{default:e(()=>[t(h,{style:{"margin-bottom":"16px"}},{default:e(()=>[t(u,{variant:"secondary",onClick:i[8]||(i[8]=n=>g.push({title:"Single Success Alert",variant:"success",liveRegion:!0,key:_()}))},{default:e(()=>[it]),_:1}),t(u,{variant:"secondary",onClick:i[9]||(i[9]=n=>g.push({title:"Single Info Alert",variant:"info",liveRegion:!0,key:_()}))},{default:e(()=>[nt]),_:1}),t(u,{variant:"secondary",onClick:i[10]||(i[10]=n=>g.push({title:"Single Danger Alert",variant:"danger",ariaLive:"assertive",ariaRelevant:"additions text",ariaAtomic:"false",key:_()}))},{default:e(()=>[at]),_:1})]),_:1}),(s(!0),d(f,null,x(g,n=>(s(),S(a,{key:n.key,variant:n.variant,title:n.title,"live-region":n.liveRegion,"aria-live":n.ariaLive,"aria-relevant":n.ariaRelevant,"aria-atomic":n.ariaAtomic},null,8,["variant","title","live-region","aria-live","aria-relevant","aria-atomic"]))),128))]),_:1}),t(o,{title:"Async live region",source:`<pf-input-group style="margin-bottom: 16px">
  <pf-button variant="secondary" @click="startAsyncAlert">Start Async Info Alerts</pf-button>
  <pf-button variant="secondary" @click="stopAsyncAlert">Stop Async Info Alerts</pf-button>
</pf-input-group>

<pf-alert
  v-for="a of asyncAlerts"
  :key="a.key"
  :variant="a.variant"
  :title="a.title"
  :live-region="a.liveRegion" />`},{default:e(()=>[t(h,{style:{"margin-bottom":"16px"}},{default:e(()=>[t(u,{variant:"secondary",onClick:$},{default:e(()=>[lt]),_:1}),t(u,{variant:"secondary",onClick:R},{default:e(()=>[ot]),_:1})]),_:1}),(s(!0),d(f,null,x(y,n=>(s(),S(a,{key:n.key,variant:n.variant,title:n.title,"live-region":n.liveRegion},null,8,["variant","title","live-region"]))),128))]),_:1}),t(o,{title:"Alert timeout",source:`<pf-input-group style="margin-bottom: 16px">
  <pf-button
    variant="secondary"
    :disabled="showTimeoutAlerts"
    @click="showTimeoutAlerts = !showTimeoutAlerts"
  >
    <template v-if="showTimeoutAlerts">0 alerts to show</template>
    <template v-else>Show 2 alerts</template>
  
</pf-input-group>

<template v-if="showTimeoutAlerts">
  <pf-alert title="Default timeout Alert" timeout>
    This alert will dismiss after 8 seconds
  </pf-alert>
  <pf-alert title="Custom timeout Alert" :timeout="16000">
    This alert will dismiss after 16 seconds
  </pf-alert>
</template>`},{default:e(()=>[t(h,{style:{"margin-bottom":"16px"}},{default:e(()=>[t(u,{variant:"secondary",disabled:p.value,onClick:i[11]||(i[11]=n=>p.value=!p.value)},{default:e(()=>[p.value?(s(),d(f,{key:0},[rt],64)):(s(),d(f,{key:1},[st],64))]),_:1},8,["disabled"])]),_:1}),p.value?(s(),d(f,{key:0},[t(a,{title:"Default timeout Alert",timeout:""},{default:e(()=>[ct]),_:1}),t(a,{title:"Custom timeout Alert",timeout:16e3},{default:e(()=>[ut]),_:1})],64)):Y("",!0)]),_:1}),t(o,{title:"Custom icons",source:`<pf-alert title="Default alert title">
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
</pf-alert>`},{default:e(()=>[t(a,{title:"Default alert title"},{"custom-icon":e(()=>[t(v(W))]),_:1}),t(a,{variant:"info",title:"Info alert title"},{"custom-icon":e(()=>[t(v(B))]),_:1}),t(a,{variant:"success",title:"Success alert title"},{"custom-icon":e(()=>[t(v(U))]),_:1}),t(a,{variant:"warning",title:"Warning alert title"},{"custom-icon":e(()=>[t(v(q))]),_:1}),t(a,{variant:"danger",title:"Danger alert title"},{"custom-icon":e(()=>[t(v(N))]),_:1})]),_:1})]),_:1})}}});const mt=G(pt,[["__scopeId","data-v-2b1939fa"]]);export{mt as default};
