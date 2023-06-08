import{e as b,f as y,l as $,a as r,o as c,c as A,w as e,b as t,g as i,h as _,i as T,F as m}from"./index-83f95fcd.js";const I=4,h=b({__name:"AlertGroup.story",setup(q){const u=y([]),o=()=>new Date().getTime(),l=y([]),w=()=>console.log("Overflow message clicked"),C=$(()=>{const f=l.length-I;return f>0?`View ${f} more alerts`:""});return(f,n)=>{const D=r("component-title"),p=r("pf-alert"),d=r("pf-alert-group"),v=r("story-canvas"),s=r("pf-button"),k=r("pf-input-group"),S=r("doc-page");return c(),A(S,{title:"Alert Group"},{default:e(()=>[t(D,{name:"pf-alert-group"}),t(v,{title:"Static",source:`<pf-alert-group>
  <pf-alert title="Success Alert" variant="success" inline ></pf-alert>
  <pf-alert title="Info Alert" variant="info" inline ></pf-alert>
</pf-alert-group>`},{default:e(()=>[t(d,null,{default:e(()=>[t(p,{title:"Success Alert",variant:"success",inline:""}),t(p,{title:"Info Alert",variant:"info",inline:""})]),_:1})]),_:1}),t(v,{title:"Toast",source:`<pf-input-group>
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
    @close="alerts.splice(index, 1)" />
</pf-alert-group>`},{default:e(()=>[t(k,null,{default:e(()=>[t(s,{variant:"secondary",onClick:n[0]||(n[0]=a=>u.push({title:"Toast Success Alert",variant:"success",key:o()}))},{default:e(()=>[i(" Add Toast Success Alert ")]),_:1}),t(s,{variant:"secondary",onClick:n[1]||(n[1]=a=>u.push({title:"Toast Info Alert",variant:"info",key:o()}))},{default:e(()=>[i(" Add Toast Info Alert ")]),_:1}),t(s,{variant:"secondary",onClick:n[2]||(n[2]=a=>u.push({title:"Toast Danger Alert",variant:"danger",key:o()}))},{default:e(()=>[i(" Add Toast Danger Alert ")]),_:1})]),_:1}),t(d,{toast:""},{default:e(()=>[(c(!0),_(m,null,T(u,(a,g)=>(c(),A(p,{key:a.key,variant:a.variant,title:a.title,"live-region":"",onClose:x=>u.splice(g,1)},null,8,["variant","title","onClose"]))),128))]),_:1})]),_:1}),t(v,{title:"Toast with overflow capture",source:`<pf-input-group>
  <pf-button
    variant="secondary"
    @click="alerts2.push({
      title: 'Toast Success Alert',
      variant: 'success',
      key: getUniqueId(),
    })"
  >
    Add Toast Success Alert
  
  <pf-button
    variant="secondary"
    @click="alerts2.push({
      title: 'Toast Info Alert',
      variant: 'info',
      key: getUniqueId(),
    })"
  >
    Add Toast Info Alert
  
  <pf-button
    variant="secondary"
    @click="alerts2.push({
      title: 'Toast Danger Alert',
      variant: 'danger',
      key: getUniqueId(),
    })"
  >
    Add Toast Danger Alert
  
</pf-input-group>

<pf-alert-group toast live-region :overflow-message="overflowMessage" @overflow-click="onOverflowClick">
  <pf-alert
    v-for="(a, index) of alerts2.slice(0, maxDisplayed)"
    :key="a.key"
    :variant="a.variant"
    :title="a.title"
    live-region
    @close="alerts2.splice(index, 1)" />
</pf-alert-group>`},{default:e(()=>[t(k,null,{default:e(()=>[t(s,{variant:"secondary",onClick:n[3]||(n[3]=a=>l.push({title:"Toast Success Alert",variant:"success",key:o()}))},{default:e(()=>[i(" Add Toast Success Alert ")]),_:1}),t(s,{variant:"secondary",onClick:n[4]||(n[4]=a=>l.push({title:"Toast Info Alert",variant:"info",key:o()}))},{default:e(()=>[i(" Add Toast Info Alert ")]),_:1}),t(s,{variant:"secondary",onClick:n[5]||(n[5]=a=>l.push({title:"Toast Danger Alert",variant:"danger",key:o()}))},{default:e(()=>[i(" Add Toast Danger Alert ")]),_:1})]),_:1}),t(d,{toast:"","live-region":"","overflow-message":C.value,onOverflowClick:w},{default:e(()=>[(c(!0),_(m,null,T(l.slice(0,I),(a,g)=>(c(),A(p,{key:a.key,variant:a.variant,title:a.title,"live-region":"",onClose:x=>l.splice(g,1)},null,8,["variant","title","onClose"]))),128))]),_:1},8,["overflow-message"])]),_:1})]),_:1})}}});export{h as default};
