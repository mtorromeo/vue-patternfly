import{g as v,a as t,c as x,o as M,w as a,d as o,b as e,u as h,B as g,e as s}from"./index-DCKv16MW.js";const C=v({__name:"Masthead.story",setup(q){return(k,n)=>{const l=t("component-info"),i=t("pf-button"),m=t("pf-masthead-toggle"),d=t("pf-masthead-logo"),p=t("pf-masthead-brand"),r=t("pf-masthead-main"),u=t("pf-masthead-content"),f=t("pf-masthead"),c=t("story-canvas"),_=t("pf-flex-item"),y=t("pf-flex"),b=t("doc-page");return M(),x(b,{name:"Components/Masthead.story.vue",title:"Masthead"},{description:a(()=>n[0]||(n[0]=[s("A "),o("b",null,"masthead",-1),s(" contains global properties such as logotype, navigation and settings in an organized fashion and it is accessible from all parts of the application. All pages should share a common masthead.")])),apidocs:a(()=>[e(l,{src:"packages/core/src/components/Masthead/Masthead.vue",doc:{name:"PfMasthead",exportName:"default",displayName:"Masthead",description:"",tags:{},props:[{name:"inset2xl",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'}]}},{name:"insetXl",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'}]}},{name:"insetLg",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'}]}},{name:"insetMd",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'}]}},{name:"insetSm",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'}]}},{name:"inset",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'}]}},{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"display",description:"Display type at various breakpoints",required:!1,type:{name:"union",elements:[{name:'"inline"'},{name:'"stack"'}]},defaultValue:{func:!1,value:"'inline'"}},{name:"displaySm",required:!1,type:{name:"union",elements:[{name:'"inline"'},{name:'"stack"'}]}},{name:"displayMd",required:!1,type:{name:"union",elements:[{name:'"inline"'},{name:'"stack"'}]}},{name:"displayLg",required:!1,type:{name:"union",elements:[{name:'"inline"'},{name:'"stack"'}]}},{name:"displayXl",required:!1,type:{name:"union",elements:[{name:'"inline"'},{name:'"stack"'}]}},{name:"display2xl",required:!1,type:{name:"union",elements:[{name:'"inline"'},{name:'"stack"'}]}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Masthead/Masthead.vue"]}}),e(l,{src:"packages/core/src/components/Masthead/MastheadBrand.vue",doc:{name:"PfMastheadBrand",exportName:"default",displayName:"MastheadBrand",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"component",required:!1,type:{name:"string"}},{name:"href",required:!1,type:{name:"string"}},{name:"to",required:!1,type:{name:"RouteLocationRaw"}},{name:"replace",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Masthead/MastheadBrand.vue"]}}),e(l,{src:"packages/core/src/components/Masthead/MastheadContent.vue",doc:{name:"PfMastheadContent",exportName:"default",displayName:"MastheadContent",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Masthead/MastheadContent.vue"]}}),e(l,{src:"packages/core/src/components/Masthead/MastheadLogo.vue",doc:{name:"PfMastheadLogo",exportName:"default",displayName:"MastheadLogo",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"component",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Component"}]}},{name:"href",required:!1,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Masthead/MastheadLogo.vue"]}}),e(l,{src:"packages/core/src/components/Masthead/MastheadMain.vue",doc:{name:"PfMastheadMain",exportName:"default",displayName:"MastheadMain",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Masthead/MastheadMain.vue"]}}),e(l,{src:"packages/core/src/components/Masthead/MastheadToggle.vue",doc:{name:"PfMastheadToggle",exportName:"default",displayName:"MastheadToggle",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Masthead/MastheadToggle.vue"]}})]),default:a(()=>[n[11]||(n[11]=o("div",{class:"markdown pf-v6-c-content"},[o("h2",{class:"pf-v6-c-title"},"Examples")],-1)),e(c,{title:"Basic",source:`<pf-masthead>
  <pf-masthead-main>
    <pf-masthead-toggle>
      <pf-button variant="plain" aria-label="Global navigation">
        <bars-icon />
      </pf-button>
    </pf-masthead-toggle>
    <pf-masthead-brand>
      <pf-masthead-logo component="a">Logo</pf-masthead-logo>
    </pf-masthead-brand>
  </pf-masthead-main>
  <pf-masthead-content>
    <span>Content</span>
  </pf-masthead-content>
</pf-masthead>`},{default:a(()=>[e(f,null,{default:a(()=>[e(r,null,{default:a(()=>[e(m,null,{default:a(()=>[e(i,{variant:"plain","aria-label":"Global navigation"},{default:a(()=>[e(h(g))]),_:1})]),_:1}),e(p,null,{default:a(()=>[e(d,{component:"a"},{default:a(()=>n[1]||(n[1]=[s("Logo")])),_:1,__:[1]})]),_:1})]),_:1}),e(u,null,{default:a(()=>n[2]||(n[2]=[o("span",null,"Content",-1)])),_:1,__:[2]})]),_:1})]),_:1}),e(c,{title:"Basic with mixed content",source:`<pf-masthead>
  <pf-masthead-main>
    <pf-masthead-toggle>
      <pf-button variant="plain" aria-label="Global navigation">
        <bars-icon />
      </pf-button>
    </pf-masthead-toggle>
    <pf-masthead-brand>
      <pf-masthead-logo component="a">Logo</pf-masthead-logo>
    </pf-masthead-brand>
  </pf-masthead-main>
  <pf-masthead-content>
    <pf-flex>
      <span>Testing text color</span>
      <pf-button>testing</pf-button>
      <pf-flex-item align-self="flex-end">
        <pf-button>testing</pf-button>
      </pf-flex-item>
    </pf-flex>
  </pf-masthead-content>
</pf-masthead>`},{default:a(()=>[e(f,null,{default:a(()=>[e(r,null,{default:a(()=>[e(m,null,{default:a(()=>[e(i,{variant:"plain","aria-label":"Global navigation"},{default:a(()=>[e(h(g))]),_:1})]),_:1}),e(p,null,{default:a(()=>[e(d,{component:"a"},{default:a(()=>n[3]||(n[3]=[s("Logo")])),_:1,__:[3]})]),_:1})]),_:1}),e(u,null,{default:a(()=>[e(y,null,{default:a(()=>[n[6]||(n[6]=o("span",null,"Testing text color",-1)),e(i,null,{default:a(()=>n[4]||(n[4]=[s("testing")])),_:1,__:[4]}),e(_,{"align-self":"flex-end"},{default:a(()=>[e(i,null,{default:a(()=>n[5]||(n[5]=[s("testing")])),_:1,__:[5]})]),_:1})]),_:1,__:[6]})]),_:1})]),_:1})]),_:1}),e(c,{title:"Display stack, display inline responsive",source:`<pf-masthead display="inline" display-lg="stack" display-2xl="inline">
  <pf-masthead-main>
    <pf-masthead-toggle>
      <pf-button variant="plain" aria-label="Global navigation">
        <bars-icon />
      </pf-button>
    </pf-masthead-toggle>
    <pf-masthead-brand>
      <pf-masthead-logo>Logo</pf-masthead-logo>
    </pf-masthead-brand>
  </pf-masthead-main>
  <pf-masthead-content>
    <span>Content</span>
  </pf-masthead-content>
</pf-masthead>`},{default:a(()=>[e(f,{display:"inline","display-lg":"stack","display-2xl":"inline"},{default:a(()=>[e(r,null,{default:a(()=>[e(m,null,{default:a(()=>[e(i,{variant:"plain","aria-label":"Global navigation"},{default:a(()=>[e(h(g))]),_:1})]),_:1}),e(p,null,{default:a(()=>[e(d,null,{default:a(()=>n[7]||(n[7]=[s("Logo")])),_:1,__:[7]})]),_:1})]),_:1}),e(u,null,{default:a(()=>n[8]||(n[8]=[o("span",null,"Content",-1)])),_:1,__:[8]})]),_:1})]),_:1}),e(c,{title:"Inset",source:`<pf-masthead inset="sm">
  <pf-masthead-main>
    <pf-masthead-toggle>
      <pf-button variant="plain" aria-label="Global navigation">
        <bars-icon />
      </pf-button>
    </pf-masthead-toggle>
    <pf-masthead-brand>
      <pf-masthead-logo>Logo</pf-masthead-logo>
    </pf-masthead-brand>
  </pf-masthead-main>
  <pf-masthead-content>
    <span>Content</span>
  </pf-masthead-content>
</pf-masthead>`},{default:a(()=>[e(f,{inset:"sm"},{default:a(()=>[e(r,null,{default:a(()=>[e(m,null,{default:a(()=>[e(i,{variant:"plain","aria-label":"Global navigation"},{default:a(()=>[e(h(g))]),_:1})]),_:1}),e(p,null,{default:a(()=>[e(d,null,{default:a(()=>n[9]||(n[9]=[s("Logo")])),_:1,__:[9]})]),_:1})]),_:1}),e(u,null,{default:a(()=>n[10]||(n[10]=[o("span",null,"Content",-1)])),_:1,__:[10]})]),_:1})]),_:1})]),_:1,__:[11]})}}});export{C as default};
