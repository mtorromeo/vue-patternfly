import{e as N,r as s,a as n,o as b,c as w,w as t,b as e,g as r,s as M,j as V,d as o}from"./index-aHpSD51e.js";const S=o("div",{class:"markdown pf-v5-c-content"},[o("p",null,[r("A "),o("strong",null,"drawer"),r(" is a sliding panel that enters from the right edge of the viewport. It can be configured to either overlay content on a page or create a sidebar by pushing that content to the left.")]),o("h2",{class:"pf-v5-c-title"},"Demo")],-1),L=o("br",null,null,-1),Q=o("br",null,null,-1),B=o("br",null,null,-1),$=o("br",null,null,-1),I=o("br",null,null,-1),R=o("br",null,null,-1),T=o("br",null,null,-1),E=o("br",null,null,-1),F=o("br",null,null,-1),G=o("br",null,null,-1),H=o("br",null,null,-1),J=o("br",null,null,-1),K=["tabindex"],O=["tabindex"],Z=N({__name:"Drawer.story",setup(W){const l=s(!1),u=s("right"),p=s(!1),c=s(!0),m=s(!1),f=s(!1),v=s(!1);return(X,a)=>{const A=n("component-title"),_=n("pf-form-select-option"),C=n("pf-form-select"),d=n("pf-switch"),D=n("pf-button"),h=n("pf-drawer-section"),g=n("pf-drawer-content-body"),x=n("pf-drawer-close-button"),q=n("pf-drawer-actions"),k=n("pf-drawer-head"),y=n("pf-drawer-panel-content"),U=n("pf-drawer-content"),z=n("pf-drawer"),P=n("story-canvas"),j=n("doc-page");return b(),w(j,{title:"Drawer"},{default:t(()=>[e(A,{name:"pf-drawer"}),S,e(C,{modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=i=>u.value=i),required:""},{default:t(()=>[e(_,{value:"right",label:"right"}),e(_,{value:"left",label:"left"}),e(_,{value:"bottom",label:"bottom"})]),_:1},8,["modelValue"]),L,Q,e(d,{checked:p.value,"onUpdate:checked":a[1]||(a[1]=i=>p.value=i),label:"Inline"},null,8,["checked"]),B,$,e(d,{checked:c.value,"onUpdate:checked":a[2]||(a[2]=i=>c.value=i),label:"Content padding"},null,8,["checked"]),I,R,e(d,{checked:m.value,"onUpdate:checked":a[3]||(a[3]=i=>m.value=i),label:"No panel padding"},null,8,["checked"]),T,E,e(d,{checked:f.value,"onUpdate:checked":a[4]||(a[4]=i=>f.value=i),label:"Show additional section above content"},null,8,["checked"]),F,G,e(d,{checked:v.value,"onUpdate:checked":a[5]||(a[5]=i=>v.value=i),label:"Resizable"},null,8,["checked"]),H,J,e(D,{"aria-expanded":l.value,onClick:a[6]||(a[6]=i=>l.value=!l.value)},{default:t(()=>[r("Toggle drawer")]),_:1},8,["aria-expanded"]),e(P,{source:`<pf-drawer
  :expanded="expanded"
  :position="position"
  :inline="inline"
  :style="{height: position === 'bottom' ? '500px' : undefined}"
>
  <pf-drawer-section v-if="showSection">drawer-section</pf-drawer-section>
  <pf-drawer-content>
    <pf-drawer-content-body :padding="contentPadding">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
    </pf-drawer-content-body>

    <template #content>
      <pf-drawer-panel-content :resizable="resizable" default-size="350px" min-size="150px">
        <pf-drawer-head :no-padding="noPanelPadding">
          <span :tabindex="expanded ? 0 : -1">
            drawer-panel
          </span>

          <pf-drawer-actions>
            <pf-drawer-close-button @click="expanded = false" />
          </pf-drawer-actions>
        </pf-drawer-head>
      </pf-drawer-panel-content>
    </template>
  </pf-drawer-content>
</pf-drawer>`},{default:t(()=>[e(z,{expanded:l.value,position:u.value,inline:p.value,style:M({height:u.value==="bottom"?"500px":void 0})},{default:t(()=>[f.value?(b(),w(h,{key:0},{default:t(()=>[r("drawer-section")]),_:1})):V("",!0),e(U,null,{content:t(()=>[e(y,{resizable:v.value,"default-size":"350px","min-size":"150px"},{default:t(()=>[e(k,{"no-padding":m.value},{default:t(()=>[o("span",{tabindex:l.value?0:-1}," drawer-panel ",8,K),e(q,null,{default:t(()=>[e(x,{onClick:a[7]||(a[7]=i=>l.value=!1)})]),_:1})]),_:1},8,["no-padding"])]),_:1},8,["resizable"])]),default:t(()=>[e(g,{padding:c.value},{default:t(()=>[r(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate. ")]),_:1},8,["padding"])]),_:1})]),_:1},8,["expanded","position","inline","style"])]),_:1}),e(P,{title:"Reduced number of tags",source:`<pf-drawer
  :expanded="expanded"
  :position="position"
  :inline="inline"
  :style="{height: position === 'bottom' ? '500px' : undefined}"
>
  <pf-drawer-section v-if="showSection">drawer-section</pf-drawer-section>

  <pf-drawer-content-body :padding="contentPadding">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
  </pf-drawer-content-body>

  <pf-drawer-panel-content :resizable="resizable" default-size="350px" min-size="150px">
    <pf-drawer-head :no-padding="noPanelPadding">
      <span :tabindex="expanded ? 0 : -1">
        drawer-panel
      </span>

      <pf-drawer-actions>
        <pf-drawer-close-button @click="expanded = false" />
      </pf-drawer-actions>
    </pf-drawer-head>
  </pf-drawer-panel-content>
</pf-drawer>`},{default:t(()=>[e(z,{expanded:l.value,position:u.value,inline:p.value,style:M({height:u.value==="bottom"?"500px":void 0})},{default:t(()=>[f.value?(b(),w(h,{key:0},{default:t(()=>[r("drawer-section")]),_:1})):V("",!0),e(g,{padding:c.value},{default:t(()=>[r(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate. ")]),_:1},8,["padding"]),e(y,{resizable:v.value,"default-size":"350px","min-size":"150px"},{default:t(()=>[e(k,{"no-padding":m.value},{default:t(()=>[o("span",{tabindex:l.value?0:-1}," drawer-panel ",8,O),e(q,null,{default:t(()=>[e(x,{onClick:a[8]||(a[8]=i=>l.value=!1)})]),_:1})]),_:1},8,["no-padding"])]),_:1},8,["resizable"])]),_:1},8,["expanded","position","inline","style"])]),_:1})]),_:1})}}});export{Z as default};
