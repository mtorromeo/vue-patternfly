import{H as b}from"./help-icon.40e59fb8.js";import{e as g,r as u,a as p,c as k,w as e,o as C,b as o,j as l,t as f,u as w}from"./index.7a97aefb.js";import"./createIcon.06684db3.js";const y=l("Toggle Modal"),T=l("Toggle Modal"),x=l(" A description is used when you want to provide more info about the modal than the title is able to describe. The content in the description is static and will not scroll with the rest of the modal body. "),M=l(" Confirm "),S=l(" Cancel "),q=l("Toggle Modal"),$=l(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis. "),B=g({setup(N){const s=u(!1),a=u(!1),d=u(!1),r=u(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
    est laborum.`);return(U,t)=>{const v=p("component-title"),i=p("pf-button"),m=p("pf-modal"),c=p("story-canvas"),_=p("pf-tooltip"),h=p("doc-page");return C(),k(h,{title:"Modal"},{default:e(()=>[o(v,{name:"pf-modal"}),o(c,{title:"Default",source:`<pf-button @click="open1 = !open1">Toggle Modal</pf-button>
<pf-modal v-model:open="open1" title="Simple modal header">
  {{ sample_content }}
</pf-modal>`},{default:e(()=>[o(i,{onClick:t[0]||(t[0]=n=>s.value=!s.value)},{default:e(()=>[y]),_:1}),o(m,{open:s.value,"onUpdate:open":t[1]||(t[1]=n=>s.value=n),title:"Simple modal header"},{default:e(()=>[l(f(r.value),1)]),_:1},8,["open"])]),_:1}),o(c,{title:"With description",source:`<pf-button @click="open2 = !open2">Toggle Modal</pf-button>
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
</pf-modal>`},{default:e(()=>[o(i,{onClick:t[2]||(t[2]=n=>a.value=!a.value)},{default:e(()=>[T]),_:1}),o(m,{open:a.value,"onUpdate:open":t[5]||(t[5]=n=>a.value=n),title:"Simple modal header"},{description:e(()=>[x]),footer:e(()=>[o(i,{variant:"primary",onClick:t[3]||(t[3]=n=>a.value=!a.value)},{default:e(()=>[M]),_:1}),o(i,{variant:"link",onClick:t[4]||(t[4]=n=>a.value=!a.value)},{default:e(()=>[S]),_:1})]),default:e(()=>[l(f(r.value)+" ",1)]),_:1},8,["open"])]),_:1}),o(c,{title:"With help",source:`<pf-button @click="open3 = !open3">Toggle Modal</pf-button>
<pf-modal v-model:open="open3" title="Simple modal header">
  {{ sample_content }}
  <template #help>
    <pf-tooltip>
      <pf-button variant="plain" aria-help="help">
        <help-icon />
      </pf-button>
      <template #content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla
        turpis.
      </template>
    </pf-tooltip>
  </template>
</pf-modal>`},{default:e(()=>[o(i,{onClick:t[6]||(t[6]=n=>d.value=!d.value)},{default:e(()=>[q]),_:1}),o(m,{open:d.value,"onUpdate:open":t[7]||(t[7]=n=>d.value=n),title:"Simple modal header"},{help:e(()=>[o(_,null,{content:e(()=>[$]),default:e(()=>[o(i,{variant:"plain","aria-help":"help"},{default:e(()=>[o(w(b))]),_:1})]),_:1})]),default:e(()=>[l(f(r.value)+" ",1)]),_:1},8,["open"])]),_:1})]),_:1})}}});export{B as default};
