import{e as j,r as s,a as n,o as b,c as w,w as a,b as e,g as r,n as P,j as M,d as o}from"./index-64e4c2c8.js";const N=o("div",{class:"markdown pf-c-content"},[o("p",null,[r("A "),o("strong",null,"drawer"),r(" is a sliding panel that enters from the right edge of the viewport. It can be configured to either overlay content on a page or create a sidebar by pushing that content to the left.")]),o("h2",{class:"pf-c-title"},"Demo")],-1),S=o("br",null,null,-1),L=o("br",null,null,-1),Q=o("br",null,null,-1),B=o("br",null,null,-1),$=o("br",null,null,-1),R=o("br",null,null,-1),T=o("br",null,null,-1),E=o("br",null,null,-1),F=o("br",null,null,-1),G=o("br",null,null,-1),H=o("br",null,null,-1),J=o("br",null,null,-1),K=["tabIndex"],O=["tabIndex"],Z=j({__name:"Drawer.story",setup(W){const l=s(!1),u=s("right"),p=s(!1),c=s(!0),v=s(!1),m=s(!1),f=s(!1);return(X,t)=>{const V=n("component-title"),_=n("pf-form-select-option"),A=n("pf-form-select"),d=n("pf-switch"),C=n("pf-button"),h=n("pf-drawer-section"),g=n("pf-drawer-content-body"),x=n("pf-drawer-close-button"),q=n("pf-drawer-actions"),I=n("pf-drawer-head"),k=n("pf-drawer-panel-content"),D=n("pf-drawer-content"),y=n("pf-drawer"),z=n("story-canvas"),U=n("doc-page");return b(),w(U,{title:"Drawer"},{default:a(()=>[e(V,{name:"pf-drawer"}),N,e(A,{modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=i=>u.value=i),required:""},{default:a(()=>[e(_,{value:"right",label:"right"}),e(_,{value:"left",label:"left"}),e(_,{value:"bottom",label:"bottom"})]),_:1},8,["modelValue"]),S,L,e(d,{checked:p.value,"onUpdate:checked":t[1]||(t[1]=i=>p.value=i),label:"Inline"},null,8,["checked"]),Q,B,e(d,{checked:c.value,"onUpdate:checked":t[2]||(t[2]=i=>c.value=i),label:"Content padding"},null,8,["checked"]),$,R,e(d,{checked:v.value,"onUpdate:checked":t[3]||(t[3]=i=>v.value=i),label:"No panel padding"},null,8,["checked"]),T,E,e(d,{checked:m.value,"onUpdate:checked":t[4]||(t[4]=i=>m.value=i),label:"Show additional section above content"},null,8,["checked"]),F,G,e(d,{checked:f.value,"onUpdate:checked":t[5]||(t[5]=i=>f.value=i),label:"Resizable"},null,8,["checked"]),H,J,e(C,{"aria-expanded":l.value,onClick:t[6]||(t[6]=i=>l.value=!l.value)},{default:a(()=>[r("Toggle drawer")]),_:1},8,["aria-expanded"]),e(z,{source:`<pf-drawer
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
`},{default:a(()=>[e(y,{expanded:l.value,position:u.value,inline:p.value,style:P({height:u.value==="bottom"?"500px":void 0})},{default:a(()=>[m.value?(b(),w(h,{key:0},{default:a(()=>[r("drawer-section")]),_:1})):M("",!0),e(D,null,{content:a(()=>[e(k,{resizable:f.value,"default-size":"350px","min-size":"150px"},{default:a(()=>[e(I,{"no-padding":v.value},{default:a(()=>[o("span",{tabIndex:l.value?0:-1}," drawer-panel ",8,K),e(q,null,{default:a(()=>[e(x,{onClick:t[7]||(t[7]=i=>l.value=!1)})]),_:1})]),_:1},8,["no-padding"])]),_:1},8,["resizable"])]),default:a(()=>[e(g,{padding:c.value},{default:a(()=>[r(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate. ")]),_:1},8,["padding"])]),_:1})]),_:1},8,["expanded","position","inline","style"])]),_:1}),e(z,{title:"Reduced number of tags",source:`<pf-drawer
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
    <span :tabIndex="expanded ? 0 : -1">
      drawer-panel
    </span>

    <pf-drawer-actions>
      <pf-drawer-close-button @click="expanded = false" ></pf-drawer-close-button>
    </pf-drawer-actions>
  </pf-drawer-panel-content>
`},{default:a(()=>[e(y,{expanded:l.value,position:u.value,inline:p.value,style:P({height:u.value==="bottom"?"500px":void 0})},{default:a(()=>[m.value?(b(),w(h,{key:0},{default:a(()=>[r("drawer-section")]),_:1})):M("",!0),e(g,{padding:c.value},{default:a(()=>[r(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate. ")]),_:1},8,["padding"]),e(k,{resizable:f.value,"default-size":"350px","min-size":"150px"},{default:a(()=>[o("span",{tabIndex:l.value?0:-1}," drawer-panel ",8,O),e(q,null,{default:a(()=>[e(x,{onClick:t[8]||(t[8]=i=>l.value=!1)})]),_:1})]),_:1},8,["resizable"])]),_:1},8,["expanded","position","inline","style"])]),_:1})]),_:1})}}});export{Z as default};
