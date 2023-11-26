import{H as h}from"./help-icon-AEDW_p6X.js";import{f as y,r as p,a as r,o as _,c as M,w as e,b as a,d as n,t as f,u as q,e as w}from"./index--IecKmBV.js";const k=w("b",null,"modal",-1),H=y({__name:"Modal.story",setup(x){const d=p(!1),l=p(!1),s=p(!1),m=p(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
    est laborum.`);return(T,t)=>{const g=r("component-info"),i=r("pf-button"),u=r("pf-modal"),c=r("story-canvas"),b=r("pf-tooltip"),v=r("doc-page");return _(),M(v,{title:"Modal"},{description:e(()=>[a("A "),k,a(" displays important information to a user without requiring them to navigate to a new page.")]),apidocs:e(()=>[n(g,{src:"packages/core/src/components/Modal/Modal.vue",doc:{name:"PfModal",exportName:"default",displayName:"Modal",description:"",tags:{},props:[{name:"open",description:"Flag to show the modal",required:!1,type:{name:"boolean"}},{name:"noClose",description:"Flag to remove the close button in the header area of the modal",required:!1,type:{name:"boolean"}},{name:"noBodyWrapper",description:"Flag indicating if modal content should be placed in a modal box body wrapper",required:!1,type:{name:"boolean"}},{name:"disableFocusTrap",description:"Flag to disable focus trap",required:!1,type:{name:"boolean"}},{name:"elementToFocus",description:`The element to focus when the modal opens. By default the first
focusable element will receive focus.`,required:!1,type:{name:"union",elements:[{name:"HTMLElement"},{name:"SVGElement"},{name:"string"}]}},{name:"title",description:"Simple text content of the Modal Header, also used for aria-label on the body",required:!1,type:{name:"string"}},{name:"titleLabel",description:"Optional title label text for screen readers",required:!1,type:{name:"string"}},{name:"titleIconVariant",description:`Optional alert icon (or other) to show before the title of the Modal Header
When the predefined alert types are used the default styling
will be automatically applied`,required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"success"'},{name:'"danger"'},{name:'"warning"'},{name:'"info"'}]}},{name:"appendTo",required:!1,type:{name:"union",elements:[{name:"HTMLElement"},{name:"string"},{name:"TSParenthesizedType"}]}},{name:"ariaLabel",description:"Accessible descriptor of modal",required:!1,type:{name:"string"}},{name:"ariaDescribedby",description:"Id of Modal Box description",required:!1,type:{name:"string"}},{name:"ariaLabelledby",description:"Id of Modal Box label",required:!1,type:{name:"string"}},{name:"variant",description:"Variant of the modal",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"small"'},{name:'"medium"'},{name:'"large"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"width",description:"Default width of the modal.",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"maxWidth",description:"Maximum width of the modal.",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"position",description:"Alternate position of the modal",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"top"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"positionOffset",description:"Offset from alternate position. Can be any valid CSS length/percentage",required:!1,type:{name:"string"}},{name:"descriptorId",description:"Id of the ModalBoxBody",required:!1,type:{name:"string"}},{name:"component",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Component"}]},defaultValue:{func:!1,value:"'div'"}}],events:[{name:"update:open",type:{names:["boolean"]}}],slots:[{name:"header"},{name:"title-icon"},{name:"description"},{name:"help"},{name:"default"},{name:"footer"}],sourceFiles:["../../packages/core/src/components/Modal/Modal.vue"]}},null,8,["doc"]),n(g,{src:"packages/core/src/components/Modal/ModalHeader.vue",doc:{name:"PfModalHeader",exportName:"default",displayName:"ModalHeader",description:"",tags:{},slots:[{name:"default"},{name:"help"}],sourceFiles:["../../packages/core/src/components/Modal/ModalHeader.vue"]}},null,8,["doc"])]),default:e(()=>[n(c,{title:"Default",source:`<pf-button @click="open1 = !open1">Toggle Modal</pf-button>
<pf-modal v-model:open="open1" title="Simple modal header">
  {{ sample_content }}
</pf-modal>`},{default:e(()=>[n(i,{onClick:t[0]||(t[0]=o=>d.value=!d.value)},{default:e(()=>[a("Toggle Modal")]),_:1}),n(u,{open:d.value,"onUpdate:open":t[1]||(t[1]=o=>d.value=o),title:"Simple modal header"},{default:e(()=>[a(f(m.value),1)]),_:1},8,["open"])]),_:1}),n(c,{title:"With description",source:`<pf-button @click="open2 = !open2">Toggle Modal</pf-button>
<pf-modal v-model:open="open2" title="Simple modal header">
  {{ sample_content }}
  <template #description>
    A description is used when you want to provide more info about the modal than the title is able to describe. The content in the description is static and will not scroll with the rest of the modal body.
  </template>
  <template #footer>
    <pf-button variant="primary" @click="open2 = !open2">
      Confirm
    </pf-button>
    <pf-button variant="link" @click="open2 = !open2">
      Cancel
    </pf-button>
  </template>
</pf-modal>`},{default:e(()=>[n(i,{onClick:t[2]||(t[2]=o=>l.value=!l.value)},{default:e(()=>[a("Toggle Modal")]),_:1}),n(u,{open:l.value,"onUpdate:open":t[5]||(t[5]=o=>l.value=o),title:"Simple modal header"},{description:e(()=>[a(" A description is used when you want to provide more info about the modal than the title is able to describe. The content in the description is static and will not scroll with the rest of the modal body. ")]),footer:e(()=>[n(i,{variant:"primary",onClick:t[3]||(t[3]=o=>l.value=!l.value)},{default:e(()=>[a(" Confirm ")]),_:1}),n(i,{variant:"link",onClick:t[4]||(t[4]=o=>l.value=!l.value)},{default:e(()=>[a(" Cancel ")]),_:1})]),default:e(()=>[a(f(m.value)+" ",1)]),_:1},8,["open"])]),_:1}),n(c,{title:"With help",source:`<pf-button @click="open3 = !open3">Toggle Modal</pf-button>
<pf-modal v-model:open="open3" title="Simple modal header">
  {{ sample_content }}
  <template #help>
    <pf-tooltip>
      <pf-button variant="plain">
        <help-icon />
      </pf-button>
      <template #content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla
        turpis.
      </template>
    </pf-tooltip>
  </template>
</pf-modal>`},{default:e(()=>[n(i,{onClick:t[6]||(t[6]=o=>s.value=!s.value)},{default:e(()=>[a("Toggle Modal")]),_:1}),n(u,{open:s.value,"onUpdate:open":t[7]||(t[7]=o=>s.value=o),title:"Simple modal header"},{help:e(()=>[n(b,null,{content:e(()=>[a(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis. ")]),default:e(()=>[n(i,{variant:"plain"},{default:e(()=>[n(q(h))]),_:1})]),_:1})]),default:e(()=>[a(f(m.value)+" ",1)]),_:1},8,["open"])]),_:1})]),_:1})}}});export{H as default};
