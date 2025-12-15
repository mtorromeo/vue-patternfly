import{U as O,B as W,D as B,S as E,L as M}from"./laptop-icon-BK050FZj.js";import{g as z,r as $,h as T,i as Y,a as d,c as b,o as s,w as n,b as t,d as I,t as j,e as l,j as f,F as c,k as q,l as H,u as w,_ as J}from"./index-CiyZyzwL.js";const R=4,K=z({__name:"Alert.story",setup(Q){const P=$("Alert text"),S=T([]),m=T([]),v=T([]),p=y=>window.alert(y),u=()=>new Date().getTime(),x=T([]);let V;const L=()=>{clearInterval(V)},N=()=>{V=setInterval(()=>{x.push({title:`This is a async alert number ${x.length+1}`,variant:"info",liveRegion:!0,key:u()})},1500)},g=$(!1),_=()=>console.log("Overflow message clicked"),U=Y(()=>{const y=m.length-R;return y>0?`View ${y} more alerts`:""});return(y,e)=>{const A=d("component-info"),i=d("pf-alert"),r=d("story-canvas"),C=d("pf-alert-action-link"),o=d("pf-button"),k=d("pf-input-group"),h=d("pf-alert-group"),F=d("doc-page");return s(),b(F,{name:"Components/Alert.story.vue",title:"Alert"},{description:n(()=>[...e[18]||(e[18]=[l("An ",-1),I("b",null,"alert",-1),l(" is a notification that provides brief information to the user without blocking their workflow.",-1)])]),apidocs:n(()=>[t(A,{name:"PfAlert",doc:{name:"PfAlert",exportName:"PfAlert",displayName:"Alert",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"ariaLabel",description:"Adds accessible text to the alert.",required:!1,type:{name:"string"}},{name:"id",description:"Uniquely identifies the alert.",required:!1,type:{name:"string"}},{name:"expandable",description:"Flag indicating that the alert is expandable.",required:!1,type:{name:"boolean"}},{name:"onClose",description:"Show close button",required:!1,type:{name:"TSFunctionType"}},{name:"inline",description:"Flag to indicate if the alert is inline.",required:!1,type:{name:"boolean"}},{name:"liveRegion",description:"Flag to indicate if the alert is in a live region.",required:!1,type:{name:"boolean"}},{name:"plain",description:"Flag to indicate if the alert is plain.",required:!1,type:{name:"boolean"}},{name:"timeout",description:`If set to true, the timeout is 8000 milliseconds. If a number is provided, alert will
be dismissed after that amount of time in milliseconds.`,required:!1,type:{name:"union",elements:[{name:"number"},{name:"boolean"}]}},{name:"timeoutAnimation",description:"If the user hovers over the alert and `timeout` expires, this is how long to wait\nbefore finally dismissing the alert.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"3000"}},{name:"title",description:"Title of the alert.",required:!1,type:{name:"string"}},{name:"component",description:"Sets the element to use as the alert title. Default is h4.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Component"}]},defaultValue:{func:!1,value:"'h4'"}},{name:"toggleAriaLabel",description:"Adds accessible text to the alert toggle.",required:!1,type:{name:"string"}},{name:"tooltipPosition",description:"Position of the tooltip which is displayed if text is truncated.",required:!1,type:{name:"Placement"},defaultValue:{func:!1,value:"'auto'"}},{name:"truncateTitle",description:"Truncate title to number of lines.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"variant",description:"Adds alert variant styles.",required:!1,type:{name:"TSTypeOperator"},defaultValue:{func:!1,value:"'custom'"}},{name:"variantLabel",description:"Variant label text for screen readers.",required:!1,type:{name:"string"}}],events:[{name:"mouseenter",type:{names:["Event"]}},{name:"mouseleave",type:{names:["Event"]}},{name:"timeout"}],slots:[{name:"custom-icon"},{name:"default"},{name:"action-links"}],sourceFiles:["runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Alert/Alert.vue"]}}),t(A,{name:"PfAlertActionLink",doc:{name:"PfAlertActionLink",exportName:"PfAlertActionLink",displayName:"AlertActionLink",description:"",tags:{},props:[],events:[],slots:[{name:"default"}],sourceFiles:["runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Alert/AlertActionLink.vue"]}}),t(A,{name:"PfAlertGroup",doc:{name:"PfAlertGroup",exportName:"PfAlertGroup",displayName:"AlertGroup",description:"",tags:{},props:[{name:"toast",description:"Toast notifications are positioned at the top right corner of the viewport",required:!1,type:{name:"boolean"}},{name:"appendTo",description:"Determine where the alert is appended to",required:!1,type:{name:"union",elements:[{name:"string"},{name:"RendererElement"},{name:"null"},{name:"undefined"}]},defaultValue:{func:!1,value:"'body'"}}],events:[],slots:[{name:"default"}],sourceFiles:["runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Alert/AlertGroup.vue"]}}),t(A,{name:"PfAlertGroupInline",doc:{name:"PfAlertGroupInline",exportName:"PfAlertGroupInline",displayName:"AlertGroupInline",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"toast",required:!1,type:{name:"boolean"}},{name:"liveRegion",required:!1,type:{name:"boolean"}},{name:"overflowMessage",required:!1,type:{name:"string"}}],events:[{name:"overflowClick",type:{names:["PointerEvent"]}}],slots:[{name:"default"}],sourceFiles:["runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Alert/AlertGroupInline.vue"]}}),t(A,{name:"PfAlertIcon",doc:{name:"PfAlertIcon",exportName:"PfAlertIcon",displayName:"AlertIcon",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"variant",required:!1,type:{name:"TSTypeOperator"},defaultValue:{func:!1,value:"'custom'"}}],events:[],slots:[{name:"default"}],sourceFiles:["runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Alert/AlertIcon.vue"]}})]),default:n(()=>[t(r,{title:"Types",source:`<pf-alert title="Custom alert title" />
<pf-alert variant="info" title="Info alert title" />
<pf-alert variant="success" title="Success alert title" />
<pf-alert variant="warning" title="Warning alert title" />
<pf-alert variant="danger" title="Danger alert title" />`},{default:n(()=>[t(i,{title:"Custom alert title"}),t(i,{variant:"info",title:"Info alert title"}),t(i,{variant:"success",title:"Success alert title"}),t(i,{variant:"warning",title:"Warning alert title"}),t(i,{variant:"danger",title:"Danger alert title"})]),_:1}),t(r,{title:"With action links",source:`<pf-alert title="Alert title" @close="alert('Clicked the close button')">
  <template #action-links>
    <pf-alert-action-link @click="alert('Clicked on View details')">View details</pf-alert-action-link>
    <pf-alert-action-link @click="alert('Clicked on Ignore')">Ignore</pf-alert-action-link>
  </template>
  <p>{{ sample_text }}</p>
</pf-alert>`},{default:n(()=>[t(i,{title:"Alert title",onClose:e[2]||(e[2]=a=>p("Clicked the close button"))},{"action-links":n(()=>[t(C,{onClick:e[0]||(e[0]=a=>p("Clicked on View details"))},{default:n(()=>[...e[19]||(e[19]=[l("View details",-1)])]),_:1}),t(C,{onClick:e[1]||(e[1]=a=>p("Clicked on Ignore"))},{default:n(()=>[...e[20]||(e[20]=[l("Ignore",-1)])]),_:1})]),default:n(()=>[I("p",null,j(P.value),1)]),_:1})]),_:1}),t(r,{title:"Inline types",source:`<pf-alert variant="custom" inline title="Custom alert title" />
<pf-alert variant="info" inline title="Info alert title" />
<pf-alert variant="success" inline title="Success alert title" />
<pf-alert variant="warning" inline title="Warning alert title" />
<pf-alert variant="danger" inline title="Danger alert title" />`},{default:n(()=>[t(i,{variant:"custom",inline:"",title:"Custom alert title"}),t(i,{variant:"info",inline:"",title:"Info alert title"}),t(i,{variant:"success",inline:"",title:"Success alert title"}),t(i,{variant:"warning",inline:"",title:"Warning alert title"}),t(i,{variant:"danger",inline:"",title:"Danger alert title"})]),_:1}),t(r,{title:"Inline variations",source:`<pf-alert
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
</pf-alert>`},{default:n(()=>[t(i,{inline:"",variant:"success",title:"Success alert title",onClose:e[5]||(e[5]=a=>p("Clicked the close button"))},{"action-links":n(()=>[t(C,{onClick:e[3]||(e[3]=a=>p("Clicked on View details"))},{default:n(()=>[...e[21]||(e[21]=[l("View details",-1)])]),_:1}),t(C,{onClick:e[4]||(e[4]=a=>p("Clicked on Ignore"))},{default:n(()=>[...e[22]||(e[22]=[l("Ignore",-1)])]),_:1})]),default:n(()=>[e[23]||(e[23]=I("p",null,"Success alert description. This should tell the user more information about the alert.",-1))]),_:1})]),_:1}),t(r,{title:"Static live region",source:`<pf-alert
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
</pf-alert>`},{default:n(()=>[t(i,{"live-region":"",variant:"info",title:"Default live region configuration",onClose:e[6]||(e[6]=a=>p("Clicked the close button"))},{default:n(()=>[...e[24]||(e[24]=[l(" This Alert uses the recommended ",-1),I("code",null,"live-region",-1),l(" prop to automatically sets ARIA attributes and CSS classes. ",-1)])]),_:1}),t(i,{"aria-live":"assertive","aria-relevant":"additions text","aria-atomic":"true",variant:"info",title:"Customized live region",onClose:e[7]||(e[7]=a=>p("Clicked the close button"))},{default:n(()=>[...e[25]||(e[25]=[l(" You can alternatively omit the ",-1),I("code",null,"live-region",-1),l(" prop to specify ARIA attributes and CSS manually on the containing element. ",-1)])]),_:1})]),_:1}),t(r,{title:"Dynamic live region",source:`<pf-input-group style="margin-bottom: 16px">
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
  :aria-atomic="a.ariaAtomic" />`},{default:n(()=>[t(k,{style:{"margin-bottom":"16px"}},{default:n(()=>[t(o,{variant:"secondary",onClick:e[8]||(e[8]=a=>S.push({title:"Single Success Alert",variant:"success",liveRegion:!0,key:u()}))},{default:n(()=>[...e[26]||(e[26]=[l(" Add Single Success Alert ",-1)])]),_:1}),t(o,{variant:"secondary",onClick:e[9]||(e[9]=a=>S.push({title:"Single Info Alert",variant:"info",liveRegion:!0,key:u()}))},{default:n(()=>[...e[27]||(e[27]=[l(" Add Single Info Alert ",-1)])]),_:1}),t(o,{variant:"secondary",onClick:e[10]||(e[10]=a=>S.push({title:"Single Danger Alert",variant:"danger",ariaLive:"assertive",ariaRelevant:"additions text",ariaAtomic:"false",key:u()}))},{default:n(()=>[...e[28]||(e[28]=[l(" Add Single Danger Alert ",-1)])]),_:1})]),_:1}),(s(!0),f(c,null,q(S,a=>(s(),b(i,{key:a.key,variant:a.variant,title:a.title,"live-region":a.liveRegion,"aria-live":a.ariaLive,"aria-relevant":a.ariaRelevant,"aria-atomic":a.ariaAtomic},null,8,["variant","title","live-region","aria-live","aria-relevant","aria-atomic"]))),128))]),_:1}),t(r,{title:"Async live region",source:`<pf-input-group style="margin-bottom: 16px">
  <pf-button variant="secondary" @click="startAsyncAlert">Start Async Info Alerts</pf-button>
  <pf-button variant="secondary" @click="stopAsyncAlert">Stop Async Info Alerts</pf-button>
</pf-input-group>

<pf-alert
  v-for="a of asyncAlerts"
  :key="a.key"
  :variant="a.variant"
  :title="a.title"
  :live-region="a.liveRegion" />`},{default:n(()=>[t(k,{style:{"margin-bottom":"16px"}},{default:n(()=>[t(o,{variant:"secondary",onClick:N},{default:n(()=>[...e[29]||(e[29]=[l("Start Async Info Alerts",-1)])]),_:1}),t(o,{variant:"secondary",onClick:L},{default:n(()=>[...e[30]||(e[30]=[l("Stop Async Info Alerts",-1)])]),_:1})]),_:1}),(s(!0),f(c,null,q(x,a=>(s(),b(i,{key:a.key,variant:a.variant,title:a.title,"live-region":a.liveRegion},null,8,["variant","title","live-region"]))),128))]),_:1}),t(r,{title:"Alert timeout",source:`<pf-input-group style="margin-bottom: 16px">
  <pf-button
    variant="secondary"
    :disabled="showTimeoutAlerts"
    @click="showTimeoutAlerts = !showTimeoutAlerts"
  >
    <template v-if="showTimeoutAlerts">0 alerts to show</template>
    <template v-else>Show 2 alerts</template>
  </pf-button>
</pf-input-group>`},{default:n(()=>[t(k,{style:{"margin-bottom":"16px"}},{default:n(()=>[t(o,{variant:"secondary",disabled:g.value,onClick:e[11]||(e[11]=a=>g.value=!g.value)},{default:n(()=>[g.value?(s(),f(c,{key:0},[l("0 alerts to show")],64)):(s(),f(c,{key:1},[l("Show 2 alerts")],64))]),_:1},8,["disabled"])]),_:1}),g.value?(s(),f(c,{key:0},[t(i,{title:"Default timeout Alert",timeout:""},{default:n(()=>[...e[31]||(e[31]=[l(" This alert will dismiss after 8 seconds ",-1)])]),_:1}),t(i,{title:"Custom timeout Alert",timeout:16e3},{default:n(()=>[...e[32]||(e[32]=[l(" This alert will dismiss after 16 seconds ",-1)])]),_:1})],64)):H("",!0)]),_:1}),t(r,{title:"Custom icons",source:`<pf-alert title="Custom alert title">
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
</pf-alert>`},{default:n(()=>[t(i,{title:"Custom alert title"},{"custom-icon":n(()=>[t(w(O))]),_:1}),t(i,{variant:"info",title:"Info alert title"},{"custom-icon":n(()=>[t(w(W))]),_:1}),t(i,{variant:"success",title:"Success alert title"},{"custom-icon":n(()=>[t(w(B))]),_:1}),t(i,{variant:"warning",title:"Warning alert title"},{"custom-icon":n(()=>[t(w(E))]),_:1}),t(i,{variant:"danger",title:"Danger alert title"},{"custom-icon":n(()=>[t(w(M))]),_:1})]),_:1}),t(r,{title:"Static Alert Group",source:`<pf-alert-group>
  <pf-alert title="Success Alert" variant="success" inline />
  <pf-alert title="Info Alert" variant="info" inline />
</pf-alert-group>`},{default:n(()=>[t(h,null,{default:n(()=>[t(i,{title:"Success Alert",variant:"success",inline:""}),t(i,{title:"Info Alert",variant:"info",inline:""})]),_:1})]),_:1}),t(r,{title:"Toast",source:`<pf-input-group>
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
</pf-alert-group>`},{default:n(()=>[t(k,null,{default:n(()=>[t(o,{variant:"secondary",onClick:e[12]||(e[12]=a=>v.push({title:"Toast Success Alert",variant:"success",key:u()}))},{default:n(()=>[...e[33]||(e[33]=[l(" Add Toast Success Alert ",-1)])]),_:1}),t(o,{variant:"secondary",onClick:e[13]||(e[13]=a=>v.push({title:"Toast Info Alert",variant:"info",key:u()}))},{default:n(()=>[...e[34]||(e[34]=[l(" Add Toast Info Alert ",-1)])]),_:1}),t(o,{variant:"secondary",onClick:e[14]||(e[14]=a=>v.push({title:"Toast Danger Alert",variant:"danger",key:u()}))},{default:n(()=>[...e[35]||(e[35]=[l(" Add Toast Danger Alert ",-1)])]),_:1})]),_:1}),t(h,{toast:""},{default:n(()=>[(s(!0),f(c,null,q(v,(a,D)=>(s(),b(i,{key:a.key,variant:a.variant,title:a.title,"live-region":"",onClose:G=>v.splice(D,1)},null,8,["variant","title","onClose"]))),128))]),_:1})]),_:1}),t(r,{title:"Toast with overflow capture",source:`<pf-input-group>
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
</pf-alert-group>`},{default:n(()=>[t(k,null,{default:n(()=>[t(o,{variant:"secondary",onClick:e[15]||(e[15]=a=>m.push({title:"Toast Success Alert",variant:"success",key:u()}))},{default:n(()=>[...e[36]||(e[36]=[l(" Add Toast Success Alert ",-1)])]),_:1}),t(o,{variant:"secondary",onClick:e[16]||(e[16]=a=>m.push({title:"Toast Info Alert",variant:"info",key:u()}))},{default:n(()=>[...e[37]||(e[37]=[l(" Add Toast Info Alert ",-1)])]),_:1}),t(o,{variant:"secondary",onClick:e[17]||(e[17]=a=>m.push({title:"Toast Danger Alert",variant:"danger",key:u()}))},{default:n(()=>[...e[38]||(e[38]=[l(" Add Toast Danger Alert ",-1)])]),_:1})]),_:1}),t(h,{toast:"","live-region":"","overflow-message":U.value,onOverflowClick:_},{default:n(()=>[(s(!0),f(c,null,q(m.slice(0,R),(a,D)=>(s(),b(i,{key:a.key,variant:a.variant,title:a.title,"live-region":"",onClose:G=>m.splice(D,1)},null,8,["variant","title","onClose"]))),128))]),_:1},8,["overflow-message"])]),_:1})]),_:1})}}}),ee=J(K,[["__scopeId","data-v-cf2ce1bd"]]);export{ee as default};
