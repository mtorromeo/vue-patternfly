import{f as S,r as l,a as r,o as b,c as _,w as a,b as d,d as e,s as C,k as N,e as n}from"./index--IecKmBV.js";const F=n("b",null,"drawer",-1),I=n("div",{class:"markdown pf-v5-c-content"},[n("h2",{class:"pf-v5-c-title"},"Demo")],-1),L=n("br",null,null,-1),T=n("br",null,null,-1),U=n("br",null,null,-1),j=n("br",null,null,-1),H=n("br",null,null,-1),Q=n("br",null,null,-1),R=n("br",null,null,-1),$=n("br",null,null,-1),O=n("br",null,null,-1),W=n("br",null,null,-1),E=n("br",null,null,-1),G=n("br",null,null,-1),J=["tabindex"],K=["tabindex"],ee=S({__name:"Drawer.story",setup(X){const s=l(!1),u=l("right"),p=l(!1),m=l(!0),f=l(!1),w=l(!1),v=l(!1);return(Y,t)=>{const i=r("component-info"),h=r("pf-form-select-option"),V=r("pf-form-select"),c=r("pf-switch"),A=r("pf-button"),g=r("pf-drawer-section"),D=r("pf-drawer-content-body"),x=r("pf-drawer-close-button"),y=r("pf-drawer-actions"),q=r("pf-drawer-head"),k=r("pf-drawer-panel-content"),B=r("pf-drawer-content"),P=r("pf-drawer"),z=r("story-canvas"),M=r("doc-page");return b(),_(M,{title:"Drawer"},{description:a(()=>[d("A "),F,d(" is a sliding panel that enters from the right edge of the viewport. It can be configured to either overlay content on a page or create a sidebar by pushing that content to the left.")]),apidocs:a(()=>[e(i,{src:"packages/core/src/components/Drawer/Drawer.vue",doc:{name:"PfDrawer",exportName:"default",displayName:"Drawer",description:"",tags:{},props:[{name:"expanded",description:"Indicates if the drawer is expanded",required:!1,type:{name:"boolean"}},{name:"inline",description:"Indicates if the content element and panel element are displayed side by side.",required:!1,type:{name:"boolean"}},{name:"static",description:"Indicates if the drawer will always show both content and panel.",required:!1,type:{name:"boolean"}},{name:"position",description:"Position of the drawer panel",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'},{name:'"bottom"'}]},defaultValue:{func:!1,value:"'right'"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Drawer/Drawer.vue"]}},null,8,["doc"]),e(i,{src:"packages/core/src/components/Drawer/DrawerActions.vue",doc:{name:"PfDrawerActions",exportName:"default",displayName:"DrawerActions",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Drawer/DrawerActions.vue"]}},null,8,["doc"]),e(i,{src:"packages/core/src/components/Drawer/DrawerCloseButton.vue",doc:{name:"PfDrawerCloseButton",exportName:"default",displayName:"DrawerCloseButton",description:"",tags:{},props:[{name:"ariaLabel",description:"Accessible label for the drawer close button",required:!1,type:{name:"string"}}],events:[{name:"close",description:"A callback for when the close button is clicked"}],sourceFiles:["../../packages/core/src/components/Drawer/DrawerCloseButton.vue"]}},null,8,["doc"]),e(i,{src:"packages/core/src/components/Drawer/DrawerContent.vue",doc:{name:"PfDrawerContent",exportName:"default",displayName:"DrawerContent",description:"",tags:{},props:[{name:"colorVariant",description:"Color variant of the background of the drawer panel",required:!1,type:{name:"union",elements:[{name:"DrawerColorVariant"},{name:'"light-200"'},{name:'"no-background"'},{name:'"default"'}]},defaultValue:{func:!1,value:"DrawerColorVariant.default"}}],slots:[{name:"default"},{name:"content"}],sourceFiles:["../../packages/core/src/components/Drawer/DrawerContent.vue"]}},null,8,["doc"]),e(i,{src:"packages/core/src/components/Drawer/DrawerContentBody.vue",doc:{name:"PfDrawerContentBody",exportName:"default",displayName:"DrawerContentBody",description:"",tags:{},props:[{name:"padding",description:"Indicates if there should be padding around the drawer content body",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Drawer/DrawerContentBody.vue"]}},null,8,["doc"]),e(i,{src:"packages/core/src/components/Drawer/DrawerHead.vue",doc:{name:"PfDrawerHead",exportName:"default",displayName:"DrawerHead",description:"",tags:{},props:[{name:"noPadding",description:"Indicates if there should be no padding around the drawer panel body of the head",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Drawer/DrawerHead.vue"]}},null,8,["doc"]),e(i,{src:"packages/core/src/components/Drawer/DrawerMain.vue",doc:{name:"PfDrawerMain",exportName:"default",displayName:"DrawerMain",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Drawer/DrawerMain.vue"]}},null,8,["doc"]),e(i,{src:"packages/core/src/components/Drawer/DrawerPanelBody.vue",doc:{name:"PfDrawerPanelBody",exportName:"default",displayName:"DrawerPanelBody",description:"",tags:{},props:[{name:"noPadding",description:"Indicates if there should be no padding around the drawer panel body",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Drawer/DrawerPanelBody.vue"]}},null,8,["doc"]),e(i,{src:"packages/core/src/components/Drawer/DrawerPanelContent.vue",doc:{name:"PfDrawerPanelContent",exportName:"default",displayName:"DrawerPanelContent",description:"",tags:{},expose:[{name:"expanded"}],props:[{name:"id",description:"ID of the drawer panel",required:!1,type:{name:"string"}},{name:"noBorder",description:"Flag indicating that the drawer panel should not have a border.",required:!1,type:{name:"boolean"}},{name:"resizable",description:"Flag indicating that the drawer panel should be resizable.",required:!1,type:{name:"boolean"}},{name:"minSize",description:"The minimum size of a drawer, in either pixels or percentage.",required:!1,type:{name:"string"}},{name:"defaultSize",description:"The starting size of a resizable drawer, in either pixels or percentage.",required:!1,type:{name:"string"}},{name:"maxSize",description:"The maximum size of a drawer, in either pixels or percentage.",required:!1,type:{name:"string"}},{name:"increment",description:"The increment amount for keyboard drawer resizing, in pixels.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"5"}},{name:"resizeAriaLabel",description:"Aria label for the resizable drawer splitter.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Resize'"}},{name:"widths",description:"Width for drawer panel at various breakpoints. Overriden by resizable drawer minSize and defaultSize.",required:!1,type:{name:`{
  default?: 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';
  lg?: 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';
  xl?: 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';
  '2xl'?: 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';
}`}},{name:"colorVariant",description:"Color variant of the background of the drawer panel",required:!1,type:{name:"union",elements:[{name:"DrawerColorVariant"},{name:'"light-200"'},{name:'"default"'}]}}],events:[{name:"resize",type:{names:["number"]},description:"Callback for resize end."}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Drawer/DrawerPanelContent.vue"]}},null,8,["doc"]),e(i,{src:"packages/core/src/components/Drawer/DrawerSection.vue",doc:{name:"PfDrawerSection",exportName:"default",displayName:"DrawerSection",description:"",tags:{},props:[{name:"colorVariant",description:"Color variant of the background of the drawer Section",required:!1,type:{name:"union",elements:[{name:"DrawerColorVariant"},{name:'"light-200"'},{name:'"default"'}]},defaultValue:{func:!1,value:"DrawerColorVariant.default"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Drawer/DrawerSection.vue"]}},null,8,["doc"])]),default:a(()=>[I,e(V,{modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=o=>u.value=o),required:""},{default:a(()=>[e(h,{value:"right",label:"right"}),e(h,{value:"left",label:"left"}),e(h,{value:"bottom",label:"bottom"})]),_:1},8,["modelValue"]),L,T,e(c,{checked:p.value,"onUpdate:checked":t[1]||(t[1]=o=>p.value=o),label:"Inline"},null,8,["checked"]),U,j,e(c,{checked:m.value,"onUpdate:checked":t[2]||(t[2]=o=>m.value=o),label:"Content padding"},null,8,["checked"]),H,Q,e(c,{checked:f.value,"onUpdate:checked":t[3]||(t[3]=o=>f.value=o),label:"No panel padding"},null,8,["checked"]),R,$,e(c,{checked:w.value,"onUpdate:checked":t[4]||(t[4]=o=>w.value=o),label:"Show additional section above content"},null,8,["checked"]),O,W,e(c,{checked:v.value,"onUpdate:checked":t[5]||(t[5]=o=>v.value=o),label:"Resizable"},null,8,["checked"]),E,G,e(A,{"aria-expanded":s.value,onClick:t[6]||(t[6]=o=>s.value=!s.value)},{default:a(()=>[d("Toggle drawer")]),_:1},8,["aria-expanded"]),e(z,{source:`<pf-drawer
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
</pf-drawer>`},{default:a(()=>[e(P,{expanded:s.value,position:u.value,inline:p.value,style:C({height:u.value==="bottom"?"500px":void 0})},{default:a(()=>[w.value?(b(),_(g,{key:0},{default:a(()=>[d("drawer-section")]),_:1})):N("",!0),e(B,null,{content:a(()=>[e(k,{resizable:v.value,"default-size":"350px","min-size":"150px"},{default:a(()=>[e(q,{"no-padding":f.value},{default:a(()=>[n("span",{tabindex:s.value?0:-1}," drawer-panel ",8,J),e(y,null,{default:a(()=>[e(x,{onClick:t[7]||(t[7]=o=>s.value=!1)})]),_:1})]),_:1},8,["no-padding"])]),_:1},8,["resizable"])]),default:a(()=>[e(D,{padding:m.value},{default:a(()=>[d(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate. ")]),_:1},8,["padding"])]),_:1})]),_:1},8,["expanded","position","inline","style"])]),_:1}),e(z,{title:"Reduced number of tags",source:`<pf-drawer
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
</pf-drawer>`},{default:a(()=>[e(P,{expanded:s.value,position:u.value,inline:p.value,style:C({height:u.value==="bottom"?"500px":void 0})},{default:a(()=>[w.value?(b(),_(g,{key:0},{default:a(()=>[d("drawer-section")]),_:1})):N("",!0),e(D,{padding:m.value},{default:a(()=>[d(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate. ")]),_:1},8,["padding"]),e(k,{resizable:v.value,"default-size":"350px","min-size":"150px"},{default:a(()=>[e(q,{"no-padding":f.value},{default:a(()=>[n("span",{tabindex:s.value?0:-1}," drawer-panel ",8,K),e(y,null,{default:a(()=>[e(x,{onClick:t[8]||(t[8]=o=>s.value=!1)})]),_:1})]),_:1},8,["no-padding"])]),_:1},8,["resizable"])]),_:1},8,["expanded","position","inline","style"])]),_:1})]),_:1})}}});export{ee as default};
