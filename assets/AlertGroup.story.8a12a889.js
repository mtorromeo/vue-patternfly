import{e as k,r as m,a as n,c as d,w as e,o as c,b as t,g as y,h as T,F as I,j as u}from"./index.697aafd2.js";const C=u(" Add Toast Success Alert "),S=u(" Add Toast Info Alert "),b=u(" Add Toast Danger Alert "),U=k({__name:"AlertGroup.story",setup(h){const r=m([]),l=()=>new Date().getTime();return(x,a)=>{const _=n("component-title"),s=n("pf-alert"),p=n("pf-alert-group"),f=n("story-canvas"),i=n("pf-button"),v=n("pf-input-group"),g=n("doc-page");return c(),d(g,{title:"Alert Group"},{default:e(()=>[t(_,{name:"pf-alert-group"}),t(f,{title:"Static",source:`<pf-alert-group>
  <pf-alert title="Success Alert" variant="success" inline ></pf-alert>
  <pf-alert title="Info Alert" variant="info" inline ></pf-alert>
</pf-alert-group>`},{default:e(()=>[t(p,null,{default:e(()=>[t(s,{title:"Success Alert",variant:"success",inline:""}),t(s,{title:"Info Alert",variant:"info",inline:""})]),_:1})]),_:1}),t(f,{title:"Toast",source:`<pf-input-group>
  <pf-button
    variant="secondary"
    @click="alerts.push({
      title: 'Toast Success Alert',
      variant: 'success',
      key: getUniqueId(),
    })"
  >
    Add Toast Success Alert
  
  <pf-button
    variant="secondary"
    @click="alerts.push({
      title: 'Toast Info Alert',
      variant: 'info',
      key: getUniqueId(),
    })"
  >
    Add Toast Info Alert
  
  <pf-button
    variant="secondary"
    @click="alerts.push({
      title: 'Toast Danger Alert',
      variant: 'danger',
      key: getUniqueId(),
    })"
  >
    Add Toast Danger Alert
  
</pf-input-group>

<pf-alert-group toast>
  <pf-alert
    v-for="(a, index) of alerts"
    :key="a.key"
    :variant="a.variant"
    :title="a.title"
    live-region
    close
    @close="alerts.splice(index, 1)" />
</pf-alert-group>`},{default:e(()=>[t(v,null,{default:e(()=>[t(i,{variant:"secondary",onClick:a[0]||(a[0]=o=>r.value.push({title:"Toast Success Alert",variant:"success",key:l()}))},{default:e(()=>[C]),_:1}),t(i,{variant:"secondary",onClick:a[1]||(a[1]=o=>r.value.push({title:"Toast Info Alert",variant:"info",key:l()}))},{default:e(()=>[S]),_:1}),t(i,{variant:"secondary",onClick:a[2]||(a[2]=o=>r.value.push({title:"Toast Danger Alert",variant:"danger",key:l()}))},{default:e(()=>[b]),_:1})]),_:1}),t(p,{toast:""},{default:e(()=>[(c(!0),y(I,null,T(r.value,(o,A)=>(c(),d(s,{key:o.key,variant:o.variant,title:o.title,"live-region":"",close:"",onClose:D=>r.value.splice(A,1)},null,8,["variant","title","onClose"]))),128))]),_:1})]),_:1})]),_:1})}}});export{U as default};
