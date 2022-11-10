import{e as N,r as i,a as o,o as h,c as v,w as l,b as n,g as d,n as S,j as V,d as e}from"./index.96689797.js";const A=e("div",{class:"markdown pf-c-content"},[e("p",null,[d("A "),e("strong",null,"drawer"),d(" is a sliding panel that enters from the right edge of the viewport. It can be configured to either overlay content on a page or create a sidebar by pushing that content to the left.")]),e("h2",{class:"pf-c-title"},"Demo")],-1),D=e("br",null,null,-1),j=e("br",null,null,-1),B=e("br",null,null,-1),T=e("br",null,null,-1),L=e("br",null,null,-1),Q=e("br",null,null,-1),R=e("br",null,null,-1),$=e("br",null,null,-1),E=e("br",null,null,-1),F=e("br",null,null,-1),G=e("br",null,null,-1),H=e("br",null,null,-1),J=e("br",null,null,-1),K=e("br",null,null,-1),O=["tabIndex"],Z=N({__name:"Drawer.story",setup(W){const r=i(!1),u=i(!1),c=i(!1),p=i(!1),m=i(!0),f=i(!1),b=i(!1),_=i(!1);return(X,t)=>{const w=o("component-title"),s=o("pf-switch"),g=o("pf-button"),k=o("pf-drawer-section"),x=o("pf-drawer-content-body"),q=o("pf-drawer-close-button"),P=o("pf-drawer-actions"),y=o("pf-drawer-head"),z=o("pf-drawer-panel-content"),C=o("pf-drawer-content"),U=o("pf-drawer"),I=o("story-canvas"),M=o("doc-page");return h(),v(M,{title:"Drawer"},{default:l(()=>[n(w,{name:"pf-drawer"}),A,n(I,{source:`<pf-switch v-model:checked="left" label="Panel on left" ></pf-switch><br><br>
<pf-switch v-model:checked="bottom" label="Panel on bottom" ></pf-switch><br><br>
<pf-switch v-model:checked="inline" label="Inline" ></pf-switch><br><br>
<pf-switch v-model:checked="contentPadding" label="Content padding" ></pf-switch><br><br>
<pf-switch v-model:checked="noPanelPadding" label="No panel padding" ></pf-switch><br><br>
<pf-switch v-model:checked="showSection" label="Show additional section above content" ></pf-switch><br><br>
<pf-switch v-model:checked="resizable" label="Resizable" ></pf-switch><br><br>
<pf-button :aria-expanded="expanded" @click="expanded = !expanded">Toggle drawer</pf-button>

<pf-drawer
  :expanded="expanded"
  :position="bottom ? 'bottom' : left ? 'left' : 'right'"
  :inline="inline"
  :style="{height: bottom ? '500px' : undefined}"
>
  <pf-drawer-section v-if="showSection">drawer-section</pf-drawer-section>
  <pf-drawer-content>
    <pf-drawer-content-body :padding="contentPadding">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
    </pf-drawer-content-body>

    <template #content>
      <pf-drawer-panel-content :resizable="resizable" default-size="350px" min-size="150px">
        <pf-drawer-head :no-padding="noPanelPadding">
          <span :tabIndex="expanded ? 0 : -1">
            drawer-panel
          </span>

          <pf-drawer-actions>
            <pf-drawer-close-button @click="expanded = false" ></pf-drawer-close-button>
          </pf-drawer-actions>
        </pf-drawer-head>
      </pf-drawer-panel-content>
    </template>
  </pf-drawer-content>
`},{default:l(()=>[n(s,{checked:u.value,"onUpdate:checked":t[0]||(t[0]=a=>u.value=a),label:"Panel on left"},null,8,["checked"]),D,j,n(s,{checked:c.value,"onUpdate:checked":t[1]||(t[1]=a=>c.value=a),label:"Panel on bottom"},null,8,["checked"]),B,T,n(s,{checked:p.value,"onUpdate:checked":t[2]||(t[2]=a=>p.value=a),label:"Inline"},null,8,["checked"]),L,Q,n(s,{checked:m.value,"onUpdate:checked":t[3]||(t[3]=a=>m.value=a),label:"Content padding"},null,8,["checked"]),R,$,n(s,{checked:f.value,"onUpdate:checked":t[4]||(t[4]=a=>f.value=a),label:"No panel padding"},null,8,["checked"]),E,F,n(s,{checked:b.value,"onUpdate:checked":t[5]||(t[5]=a=>b.value=a),label:"Show additional section above content"},null,8,["checked"]),G,H,n(s,{checked:_.value,"onUpdate:checked":t[6]||(t[6]=a=>_.value=a),label:"Resizable"},null,8,["checked"]),J,K,n(g,{"aria-expanded":r.value,onClick:t[7]||(t[7]=a=>r.value=!r.value)},{default:l(()=>[d("Toggle drawer")]),_:1},8,["aria-expanded"]),n(U,{expanded:r.value,position:c.value?"bottom":u.value?"left":"right",inline:p.value,style:S({height:c.value?"500px":void 0})},{default:l(()=>[b.value?(h(),v(k,{key:0},{default:l(()=>[d("drawer-section")]),_:1})):V("",!0),n(C,null,{content:l(()=>[n(z,{resizable:_.value,"default-size":"350px","min-size":"150px"},{default:l(()=>[n(y,{"no-padding":f.value},{default:l(()=>[e("span",{tabIndex:r.value?0:-1}," drawer-panel ",8,O),n(P,null,{default:l(()=>[n(q,{onClick:t[8]||(t[8]=a=>r.value=!1)})]),_:1})]),_:1},8,["no-padding"])]),_:1},8,["resizable"])]),default:l(()=>[n(x,{padding:m.value},{default:l(()=>[d(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate. ")]),_:1},8,["padding"])]),_:1})]),_:1},8,["expanded","position","inline","style"])]),_:1})]),_:1})}}});export{Z as default};
