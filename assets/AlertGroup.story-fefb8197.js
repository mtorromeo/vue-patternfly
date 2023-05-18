import{e as b,f as y,l as $,a as o,o as u,c as A,w as t,b as e,g as i,h as _,i as T,F as m}from"./index-da50a540.js";const I=4,h=b({__name:"AlertGroup.story",setup(q){const c=y([]),r=()=>new Date().getTime(),l=y([]),w=()=>console.log("Overflow message clicked"),C=$(()=>{const f=l.length-I;return f>0?`View ${f} more alerts`:""});return(f,n)=>{const D=o("component-title"),p=o("pf-alert"),d=o("pf-alert-group"),v=o("story-canvas"),s=o("pf-button"),k=o("pf-input-group"),S=o("doc-page");return u(),A(S,{title:"Alert Group"},{default:t(()=>[e(D,{name:"pf-alert-group"}),e(v,{title:"Static",source:`<pf-alert-group>
  <pf-alert title="Success Alert" variant="success" inline ></pf-alert>
  <pf-alert title="Info Alert" variant="info" inline ></pf-alert>
</pf-alert-group>`},{default:t(()=>[e(d,null,{default:t(()=>[e(p,{title:"Success Alert",variant:"success",inline:""}),e(p,{title:"Info Alert",variant:"info",inline:""})]),_:1})]),_:1}),e(v,{title:"Toast",source:`<pf-input-group>
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
</pf-alert-group>`},{default:t(()=>[e(k,null,{default:t(()=>[e(s,{variant:"secondary",onClick:n[0]||(n[0]=a=>c.push({title:"Toast Success Alert",variant:"success",key:r()}))},{default:t(()=>[i(" Add Toast Success Alert ")]),_:1}),e(s,{variant:"secondary",onClick:n[1]||(n[1]=a=>c.push({title:"Toast Info Alert",variant:"info",key:r()}))},{default:t(()=>[i(" Add Toast Info Alert ")]),_:1}),e(s,{variant:"secondary",onClick:n[2]||(n[2]=a=>c.push({title:"Toast Danger Alert",variant:"danger",key:r()}))},{default:t(()=>[i(" Add Toast Danger Alert ")]),_:1})]),_:1}),e(d,{toast:""},{default:t(()=>[(u(!0),_(m,null,T(c,(a,g)=>(u(),A(p,{key:a.key,variant:a.variant,title:a.title,"live-region":"",close:"",onClose:x=>c.splice(g,1)},null,8,["variant","title","onClose"]))),128))]),_:1})]),_:1}),e(v,{title:"Toast with overflow capture",source:`<pf-input-group>
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
    close
    @close="alerts2.splice(index, 1)" />
</pf-alert-group>`},{default:t(()=>[e(k,null,{default:t(()=>[e(s,{variant:"secondary",onClick:n[3]||(n[3]=a=>l.push({title:"Toast Success Alert",variant:"success",key:r()}))},{default:t(()=>[i(" Add Toast Success Alert ")]),_:1}),e(s,{variant:"secondary",onClick:n[4]||(n[4]=a=>l.push({title:"Toast Info Alert",variant:"info",key:r()}))},{default:t(()=>[i(" Add Toast Info Alert ")]),_:1}),e(s,{variant:"secondary",onClick:n[5]||(n[5]=a=>l.push({title:"Toast Danger Alert",variant:"danger",key:r()}))},{default:t(()=>[i(" Add Toast Danger Alert ")]),_:1})]),_:1}),e(d,{toast:"","live-region":"","overflow-message":C.value,onOverflowClick:w},{default:t(()=>[(u(!0),_(m,null,T(l.slice(0,I),(a,g)=>(u(),A(p,{key:a.key,variant:a.variant,title:a.title,"live-region":"",close:"",onClose:x=>l.splice(g,1)},null,8,["variant","title","onClose"]))),128))]),_:1},8,["overflow-message"])]),_:1})]),_:1})}}});export{h as default};
