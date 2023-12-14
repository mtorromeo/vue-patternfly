import{U as B,B as E,D as M,S as z,L as Y}from"./laptop-icon-qoE8Pg8r.js";import{f as j,r as R,g as w,h as H,a as p,o as s,c as b,w as t,b as l,d as e,e as I,t as J,i as d,j as T,F as f,k as K,u as h,p as Q,l as X,_ as Z}from"./index-fFxFGDOb.js";const q=S=>(Q("data-v-09a44d8c"),S=S(),X(),S),ee=q(()=>I("b",null,"alert",-1)),te=q(()=>I("p",null,"Success alert description. This should tell the user more information about the alert.",-1)),ae=q(()=>I("code",null,"live-region",-1)),ne=q(()=>I("code",null,"live-region",-1)),L=4,ie=j({__name:"Alert.story",setup(S){const N=R("Alert text"),_=w([]),m=w([]),v=w([]),c=y=>window.alert(y),u=()=>new Date().getTime(),x=w([]);let $;const F=()=>{clearInterval($)},U=()=>{$=setInterval(()=>{x.push({title:`This is a async alert number ${x.length+1}`,variant:"info",liveRegion:!0,key:u()})},1500)},g=R(!1),O=()=>console.log("Overflow message clicked"),G=H(()=>{const y=m.length-L;return y>0?`View ${y} more alerts`:""});return(y,n)=>{const A=p("component-info"),i=p("pf-alert"),r=p("story-canvas"),C=p("pf-alert-action-link"),o=p("pf-button"),k=p("pf-input-group"),D=p("pf-alert-group"),P=p("doc-page");return s(),b(P,{name:"Components/Alert.story.vue",title:"Alert"},{description:t(()=>[l("An "),ee,l(" is a notification that provides brief information to the user without blocking their workflow.")]),apidocs:t(()=>[e(A,{src:"packages/core/src/components/Alert/Alert.vue",doc:{name:"PfAlert",exportName:"default",displayName:"Alert",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"ariaLabel",description:"Adds accessible text to the alert.",required:!1,type:{name:"string"}},{name:"id",description:"Uniquely identifies the alert.",required:!1,type:{name:"string"}},{name:"expandable",description:"Flag indicating that the alert is expandable.",required:!1,type:{name:"boolean"}},{name:"expanded",description:"Flag indicating that the alert is expanded",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"onClose",description:"Show close button",required:!1,type:{name:"TSFunctionType"}},{name:"inline",description:"Flag to indicate if the alert is inline.",required:!1,type:{name:"boolean"}},{name:"liveRegion",description:"Flag to indicate if the alert is in a live region.",required:!1,type:{name:"boolean"}},{name:"plain",description:"Flag to indicate if the alert is plain.",required:!1,type:{name:"boolean"}},{name:"timeout",description:`If set to true, the timeout is 8000 milliseconds. If a number is provided, alert will
be dismissed after that amount of time in milliseconds.`,required:!1,type:{name:"union",elements:[{name:"number"},{name:"boolean"}]}},{name:"timeoutAnimation",description:"If the user hovers over the alert and `timeout` expires, this is how long to wait\nbefore finally dismissing the alert.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"3000"}},{name:"title",description:"Title of the alert.",required:!1,type:{name:"string"}},{name:"component",description:"Sets the element to use as the alert title. Default is h4.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Component"}]},defaultValue:{func:!1,value:"'h4'"}},{name:"toggleAriaLabel",description:"Adds accessible text to the alert toggle.",required:!1,type:{name:"string"}},{name:"tooltipPosition",description:"Position of the tooltip which is displayed if text is truncated.",required:!1,type:{name:"TooltipPosition"},defaultValue:{func:!1,value:"'auto'"}},{name:"truncateTitle",description:"Truncate title to number of lines.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"variant",description:"Adds alert variant styles.",required:!1,type:{name:"TSTypeOperator"},defaultValue:{func:!1,value:"'custom'"}},{name:"variantLabel",description:"Variant label text for screen readers.",required:!1,type:{name:"string"}}],events:[{name:"mouseenter",type:{names:["Event"]}},{name:"mouseleave",type:{names:["Event"]}},{name:"timeout"}],slots:[{name:"custom-icon"},{name:"default"},{name:"action-links"}],sourceFiles:["../../packages/core/src/components/Alert/Alert.vue"]}},null,8,["doc"]),e(A,{src:"packages/core/src/components/Alert/AlertActionLink.vue",doc:{name:"PfAlertActionLink",exportName:"default",displayName:"AlertActionLink",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Alert/AlertActionLink.vue"]}},null,8,["doc"]),e(A,{src:"packages/core/src/components/Alert/AlertGroup.vue",doc:{name:"PfAlertGroup",exportName:"default",displayName:"AlertGroup",description:"",tags:{},props:[{name:"toast",description:"Toast notifications are positioned at the top right corner of the viewport",required:!1,type:{name:"boolean"}},{name:"appendTo",description:"Determine where the alert is appended to",required:!1,type:{name:"union",elements:[{name:"string"},{name:"RendererElement"},{name:"null"},{name:"undefined"}]},defaultValue:{func:!1,value:"'body'"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Alert/AlertGroup.vue"]}},null,8,["doc"]),e(A,{src:"packages/core/src/components/Alert/AlertGroupInline.vue",doc:{name:"PfAlertGroupInline",exportName:"default",displayName:"AlertGroupInline",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"toast",required:!1,type:{name:"boolean"}},{name:"liveRegion",required:!1,type:{name:"boolean"}},{name:"overflowMessage",required:!1,type:{name:"string"}}],events:[{name:"overflow-click",type:{names:["union"],elements:[{name:"MouseEvent"},{name:"TouchEvent"}]}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Alert/AlertGroupInline.vue"]}},null,8,["doc"]),e(A,{src:"packages/core/src/components/Alert/AlertIcon.vue",doc:{name:"PfAlertIcon",exportName:"default",displayName:"AlertIcon",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"variant",required:!1,type:{name:"TSTypeOperator"},defaultValue:{func:!1,value:"'custom'"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Alert/AlertIcon.vue"]}},null,8,["doc"])]),default:t(()=>[e(r,{title:"Types",source:`<pf-alert title="Custom alert title" />
<pf-alert variant="info" title="Info alert title" />
<pf-alert variant="success" title="Success alert title" />
<pf-alert variant="warning" title="Warning alert title" />
<pf-alert variant="danger" title="Danger alert title" />`},{default:t(()=>[e(i,{title:"Custom alert title"}),e(i,{variant:"info",title:"Info alert title"}),e(i,{variant:"success",title:"Success alert title"}),e(i,{variant:"warning",title:"Warning alert title"}),e(i,{variant:"danger",title:"Danger alert title"})]),_:1}),e(r,{title:"With action links",source:`<pf-alert title="Alert title" @close="alert('Clicked the close button')">
  <template #action-links>
    <pf-alert-action-link @click="alert('Clicked on View details')">View details</pf-alert-action-link>
    <pf-alert-action-link @click="alert('Clicked on Ignore')">Ignore</pf-alert-action-link>
  </template>
  <p>{{ sample_text }}</p>
</pf-alert>`},{default:t(()=>[e(i,{title:"Alert title",onClose:n[2]||(n[2]=a=>c("Clicked the close button"))},{"action-links":t(()=>[e(C,{onClick:n[0]||(n[0]=a=>c("Clicked on View details"))},{default:t(()=>[l("View details")]),_:1}),e(C,{onClick:n[1]||(n[1]=a=>c("Clicked on Ignore"))},{default:t(()=>[l("Ignore")]),_:1})]),default:t(()=>[I("p",null,J(N.value),1)]),_:1})]),_:1}),e(r,{title:"Inline types",source:`<pf-alert variant="custom" inline title="Custom alert title" />
<pf-alert variant="info" inline title="Info alert title" />
<pf-alert variant="success" inline title="Success alert title" />
<pf-alert variant="warning" inline title="Warning alert title" />
<pf-alert variant="danger" inline title="Danger alert title" />`},{default:t(()=>[e(i,{variant:"custom",inline:"",title:"Custom alert title"}),e(i,{variant:"info",inline:"",title:"Info alert title"}),e(i,{variant:"success",inline:"",title:"Success alert title"}),e(i,{variant:"warning",inline:"",title:"Warning alert title"}),e(i,{variant:"danger",inline:"",title:"Danger alert title"})]),_:1}),e(r,{title:"Inline variations",source:`<pf-alert
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
</pf-alert>`},{default:t(()=>[e(i,{inline:"",variant:"success",title:"Success alert title",onClose:n[5]||(n[5]=a=>c("Clicked the close button"))},{"action-links":t(()=>[e(C,{onClick:n[3]||(n[3]=a=>c("Clicked on View details"))},{default:t(()=>[l("View details")]),_:1}),e(C,{onClick:n[4]||(n[4]=a=>c("Clicked on Ignore"))},{default:t(()=>[l("Ignore")]),_:1})]),default:t(()=>[te]),_:1})]),_:1}),e(r,{title:"Static live region",source:`<pf-alert
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
</pf-alert>`},{default:t(()=>[e(i,{"live-region":"",variant:"info",title:"Default live region configuration",onClose:n[6]||(n[6]=a=>c("Clicked the close button"))},{default:t(()=>[l(" This Alert uses the recommended "),ae,l(" prop to automatically sets ARIA attributes and CSS classes. ")]),_:1}),e(i,{"aria-live":"assertive","aria-relevant":"additions text","aria-atomic":"true",variant:"info",title:"Customized live region",onClose:n[7]||(n[7]=a=>c("Clicked the close button"))},{default:t(()=>[l(" You can alternatively omit the "),ne,l(" prop to specify ARIA attributes and CSS manually on the containing element. ")]),_:1})]),_:1}),e(r,{title:"Dynamic live region",source:`<pf-input-group style="margin-bottom: 16px">
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
  :aria-atomic="a.ariaAtomic" />`},{default:t(()=>[e(k,{style:{"margin-bottom":"16px"}},{default:t(()=>[e(o,{variant:"secondary",onClick:n[8]||(n[8]=a=>_.push({title:"Single Success Alert",variant:"success",liveRegion:!0,key:u()}))},{default:t(()=>[l(" Add Single Success Alert ")]),_:1}),e(o,{variant:"secondary",onClick:n[9]||(n[9]=a=>_.push({title:"Single Info Alert",variant:"info",liveRegion:!0,key:u()}))},{default:t(()=>[l(" Add Single Info Alert ")]),_:1}),e(o,{variant:"secondary",onClick:n[10]||(n[10]=a=>_.push({title:"Single Danger Alert",variant:"danger",ariaLive:"assertive",ariaRelevant:"additions text",ariaAtomic:"false",key:u()}))},{default:t(()=>[l(" Add Single Danger Alert ")]),_:1})]),_:1}),(s(!0),d(f,null,T(_,a=>(s(),b(i,{key:a.key,variant:a.variant,title:a.title,"live-region":a.liveRegion,"aria-live":a.ariaLive,"aria-relevant":a.ariaRelevant,"aria-atomic":a.ariaAtomic},null,8,["variant","title","live-region","aria-live","aria-relevant","aria-atomic"]))),128))]),_:1}),e(r,{title:"Async live region",source:`<pf-input-group style="margin-bottom: 16px">
  <pf-button variant="secondary" @click="startAsyncAlert">Start Async Info Alerts</pf-button>
  <pf-button variant="secondary" @click="stopAsyncAlert">Stop Async Info Alerts</pf-button>
</pf-input-group>

<pf-alert
  v-for="a of asyncAlerts"
  :key="a.key"
  :variant="a.variant"
  :title="a.title"
  :live-region="a.liveRegion" />`},{default:t(()=>[e(k,{style:{"margin-bottom":"16px"}},{default:t(()=>[e(o,{variant:"secondary",onClick:U},{default:t(()=>[l("Start Async Info Alerts")]),_:1}),e(o,{variant:"secondary",onClick:F},{default:t(()=>[l("Stop Async Info Alerts")]),_:1})]),_:1}),(s(!0),d(f,null,T(x,a=>(s(),b(i,{key:a.key,variant:a.variant,title:a.title,"live-region":a.liveRegion},null,8,["variant","title","live-region"]))),128))]),_:1}),e(r,{title:"Alert timeout",source:`<pf-input-group style="margin-bottom: 16px">
  <pf-button
    variant="secondary"
    :disabled="showTimeoutAlerts"
    @click="showTimeoutAlerts = !showTimeoutAlerts"
  >
    <template v-if="showTimeoutAlerts">0 alerts to show</template>
    <template v-else>Show 2 alerts</template>
  </pf-button>
</pf-input-group>`},{default:t(()=>[e(k,{style:{"margin-bottom":"16px"}},{default:t(()=>[e(o,{variant:"secondary",disabled:g.value,onClick:n[11]||(n[11]=a=>g.value=!g.value)},{default:t(()=>[g.value?(s(),d(f,{key:0},[l("0 alerts to show")],64)):(s(),d(f,{key:1},[l("Show 2 alerts")],64))]),_:1},8,["disabled"])]),_:1}),g.value?(s(),d(f,{key:0},[e(i,{title:"Default timeout Alert",timeout:""},{default:t(()=>[l(" This alert will dismiss after 8 seconds ")]),_:1}),e(i,{title:"Custom timeout Alert",timeout:16e3},{default:t(()=>[l(" This alert will dismiss after 16 seconds ")]),_:1})],64)):K("",!0)]),_:1}),e(r,{title:"Custom icons",source:`<pf-alert title="Custom alert title">
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
</pf-alert>`},{default:t(()=>[e(i,{title:"Custom alert title"},{"custom-icon":t(()=>[e(h(B))]),_:1}),e(i,{variant:"info",title:"Info alert title"},{"custom-icon":t(()=>[e(h(E))]),_:1}),e(i,{variant:"success",title:"Success alert title"},{"custom-icon":t(()=>[e(h(M))]),_:1}),e(i,{variant:"warning",title:"Warning alert title"},{"custom-icon":t(()=>[e(h(z))]),_:1}),e(i,{variant:"danger",title:"Danger alert title"},{"custom-icon":t(()=>[e(h(Y))]),_:1})]),_:1}),e(r,{title:"Static Alert Group",source:`<pf-alert-group>
  <pf-alert title="Success Alert" variant="success" inline />
  <pf-alert title="Info Alert" variant="info" inline />
</pf-alert-group>`},{default:t(()=>[e(D,null,{default:t(()=>[e(i,{title:"Success Alert",variant:"success",inline:""}),e(i,{title:"Info Alert",variant:"info",inline:""})]),_:1})]),_:1}),e(r,{title:"Toast",source:`<pf-input-group>
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
</pf-alert-group>`},{default:t(()=>[e(k,null,{default:t(()=>[e(o,{variant:"secondary",onClick:n[12]||(n[12]=a=>v.push({title:"Toast Success Alert",variant:"success",key:u()}))},{default:t(()=>[l(" Add Toast Success Alert ")]),_:1}),e(o,{variant:"secondary",onClick:n[13]||(n[13]=a=>v.push({title:"Toast Info Alert",variant:"info",key:u()}))},{default:t(()=>[l(" Add Toast Info Alert ")]),_:1}),e(o,{variant:"secondary",onClick:n[14]||(n[14]=a=>v.push({title:"Toast Danger Alert",variant:"danger",key:u()}))},{default:t(()=>[l(" Add Toast Danger Alert ")]),_:1})]),_:1}),e(D,{toast:""},{default:t(()=>[(s(!0),d(f,null,T(v,(a,V)=>(s(),b(i,{key:a.key,variant:a.variant,title:a.title,"live-region":"",onClose:W=>v.splice(V,1)},null,8,["variant","title","onClose"]))),128))]),_:1})]),_:1}),e(r,{title:"Toast with overflow capture",source:`<pf-input-group>
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
</pf-alert-group>`},{default:t(()=>[e(k,null,{default:t(()=>[e(o,{variant:"secondary",onClick:n[15]||(n[15]=a=>m.push({title:"Toast Success Alert",variant:"success",key:u()}))},{default:t(()=>[l(" Add Toast Success Alert ")]),_:1}),e(o,{variant:"secondary",onClick:n[16]||(n[16]=a=>m.push({title:"Toast Info Alert",variant:"info",key:u()}))},{default:t(()=>[l(" Add Toast Info Alert ")]),_:1}),e(o,{variant:"secondary",onClick:n[17]||(n[17]=a=>m.push({title:"Toast Danger Alert",variant:"danger",key:u()}))},{default:t(()=>[l(" Add Toast Danger Alert ")]),_:1})]),_:1}),e(D,{toast:"","live-region":"","overflow-message":G.value,onOverflowClick:O},{default:t(()=>[(s(!0),d(f,null,T(m.slice(0,L),(a,V)=>(s(),b(i,{key:a.key,variant:a.variant,title:a.title,"live-region":"",onClose:W=>m.splice(V,1)},null,8,["variant","title","onClose"]))),128))]),_:1},8,["overflow-message"])]),_:1})]),_:1},8,["name"])}}}),oe=Z(ie,[["__scopeId","data-v-09a44d8c"]]);export{oe as default};
