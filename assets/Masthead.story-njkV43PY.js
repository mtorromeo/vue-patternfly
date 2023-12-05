import{f as b,a as n,o as x,c as v,w as e,b as t,d as a,u,B as c,e as l}from"./index-PTSgYYYm.js";const y=l("b",null,"masthead",-1),M=l("div",{class:"markdown pf-v5-c-content"},[l("h2",{class:"pf-v5-c-title"},"Examples")],-1),k=l("span",null,"Content",-1),C=l("span",null,"Testing text color",-1),B=l("span",null,"Content",-1),q=l("span",null,"Content",-1),L=l("span",null,"Content",-1),N=l("span",null,"Content",-1),F=b({__name:"Masthead.story",setup(G){return(I,T)=>{const r=n("component-info"),s=n("pf-button"),o=n("pf-masthead-toggle"),d=n("pf-masthead-brand"),m=n("pf-masthead-main"),i=n("pf-masthead-content"),p=n("pf-masthead"),f=n("story-canvas"),h=n("pf-flex-item"),g=n("pf-flex"),_=n("doc-page");return x(),v(_,{name:"Components/Masthead.story.vue",title:"Masthead"},{description:e(()=>[t("A "),y,t(" contains global properties such as logotype, navigation and settings in an organized fashion and it is accessible from all parts of the application. All pages should share a common masthead.")]),apidocs:e(()=>[a(r,{src:"packages/core/src/components/Masthead/Masthead.vue",doc:{name:"PfMasthead",exportName:"default",displayName:"Masthead",description:"",tags:{},props:[{name:"insetXl2",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'}]}},{name:"insetXl",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'}]}},{name:"insetLg",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'}]}},{name:"insetMd",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'}]}},{name:"insetSm",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'}]}},{name:"inset",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'}]}},{name:"backgroundColor",description:"Background theme color of the masthead",required:!1,type:{name:"union",elements:[{name:'"dark"'},{name:'"light"'},{name:'"light200"'}]},defaultValue:{func:!1,value:"'dark'"}},{name:"display",description:"Display type at various breakpoints",required:!1,type:{name:"union",elements:[{name:'"inline"'},{name:'"stack"'}]},defaultValue:{func:!1,value:"'inline'"}},{name:"displaySm",required:!1,type:{name:"union",elements:[{name:'"inline"'},{name:'"stack"'}]}},{name:"displayMd",required:!1,type:{name:"union",elements:[{name:'"inline"'},{name:'"stack"'}]}},{name:"displayLg",required:!1,type:{name:"union",elements:[{name:'"inline"'},{name:'"stack"'}]}},{name:"displayXl",required:!1,type:{name:"union",elements:[{name:'"inline"'},{name:'"stack"'}]}},{name:"displayXl2",required:!1,type:{name:"union",elements:[{name:'"inline"'},{name:'"stack"'}]}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Masthead/Masthead.vue"]}},null,8,["doc"]),a(r,{src:"packages/core/src/components/Masthead/MastheadBrand.vue",doc:{name:"PfMastheadBrand",exportName:"default",displayName:"MastheadBrand",description:"",tags:{},props:[{name:"component",required:!1,type:{name:"string"}},{name:"href",required:!1,type:{name:"string"}},{name:"to",required:!1,type:{name:"RouteLocationRaw"}},{name:"replace",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Masthead/MastheadBrand.vue"]}},null,8,["doc"]),a(r,{src:"packages/core/src/components/Masthead/MastheadContent.vue",doc:{name:"PfMastheadContent",exportName:"default",displayName:"MastheadContent",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Masthead/MastheadContent.vue"]}},null,8,["doc"]),a(r,{src:"packages/core/src/components/Masthead/MastheadMain.vue",doc:{name:"PfMastheadMain",exportName:"default",displayName:"MastheadMain",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Masthead/MastheadMain.vue"]}},null,8,["doc"]),a(r,{src:"packages/core/src/components/Masthead/MastheadToggle.vue",doc:{name:"PfMastheadToggle",exportName:"default",displayName:"MastheadToggle",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Masthead/MastheadToggle.vue"]}},null,8,["doc"])]),default:e(()=>[M,a(f,{title:"Basic",source:`<pf-masthead>
  <pf-masthead-toggle>
    <pf-button variant="plain" aria-label="Global navigation">
      <BarsIcon />
    </pf-button>
  </pf-masthead-toggle>
  <pf-masthead-main>
    <pf-masthead-brand>Logo</pf-masthead-brand>
  </pf-masthead-main>
  <pf-masthead-content>
    <span>Content</span>
  </pf-masthead-content>
</pf-masthead>`},{default:e(()=>[a(p,null,{default:e(()=>[a(o,null,{default:e(()=>[a(s,{variant:"plain","aria-label":"Global navigation"},{default:e(()=>[a(u(c))]),_:1})]),_:1}),a(m,null,{default:e(()=>[a(d,null,{default:e(()=>[t("Logo")]),_:1})]),_:1}),a(i,null,{default:e(()=>[k]),_:1})]),_:1})]),_:1}),a(f,{title:"Basic with mixed content",source:`<pf-masthead>
  <pf-masthead-toggle>
    <pf-button variant="plain" aria-label="Global navigation">
      <BarsIcon />
    </pf-button>
  </pf-masthead-toggle>
  <pf-masthead-main>
    <pf-masthead-brand>Logo</pf-masthead-brand>
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
</pf-masthead>`},{default:e(()=>[a(p,null,{default:e(()=>[a(o,null,{default:e(()=>[a(s,{variant:"plain","aria-label":"Global navigation"},{default:e(()=>[a(u(c))]),_:1})]),_:1}),a(m,null,{default:e(()=>[a(d,null,{default:e(()=>[t("Logo")]),_:1})]),_:1}),a(i,null,{default:e(()=>[a(g,null,{default:e(()=>[C,a(s,null,{default:e(()=>[t("testing")]),_:1}),a(h,{"align-self":"flex-end"},{default:e(()=>[a(s,null,{default:e(()=>[t("testing")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(f,{title:"Display stack, display inline responsive",source:`<pf-masthead display="inline" display-lg="stack" display-xl2="inline">
  <pf-masthead-toggle>
    <pf-button variant="plain" aria-label="Global navigation">
      <BarsIcon />
    </pf-button>
  </pf-masthead-toggle>
  <pf-masthead-main>
    <pf-masthead-brand>Logo</pf-masthead-brand>
  </pf-masthead-main>
  <pf-masthead-content>
    <span>Content</span>
  </pf-masthead-content>
</pf-masthead>`},{default:e(()=>[a(p,{display:"inline","display-lg":"stack","display-xl2":"inline"},{default:e(()=>[a(o,null,{default:e(()=>[a(s,{variant:"plain","aria-label":"Global navigation"},{default:e(()=>[a(u(c))]),_:1})]),_:1}),a(m,null,{default:e(()=>[a(d,null,{default:e(()=>[t("Logo")]),_:1})]),_:1}),a(i,null,{default:e(()=>[B]),_:1})]),_:1})]),_:1}),a(f,{title:"Light variant",source:`<pf-masthead background-color="light">
  <pf-masthead-toggle>
    <pf-button variant="plain" aria-label="Global navigation">
      <BarsIcon />
    </pf-button>
  </pf-masthead-toggle>
  <pf-masthead-main>
    <pf-masthead-brand>Logo</pf-masthead-brand>
  </pf-masthead-main>
  <pf-masthead-content>
    <span>Content</span>
  </pf-masthead-content>
</pf-masthead>`},{default:e(()=>[a(p,{"background-color":"light"},{default:e(()=>[a(o,null,{default:e(()=>[a(s,{variant:"plain","aria-label":"Global navigation"},{default:e(()=>[a(u(c))]),_:1})]),_:1}),a(m,null,{default:e(()=>[a(d,null,{default:e(()=>[t("Logo")]),_:1})]),_:1}),a(i,null,{default:e(()=>[q]),_:1})]),_:1})]),_:1}),a(f,{title:"Light200 variant",source:`<pf-masthead background-color="light200">
  <pf-masthead-toggle>
    <pf-button variant="plain" aria-label="Global navigation">
      <BarsIcon />
    </pf-button>
  </pf-masthead-toggle>
  <pf-masthead-main>
    <pf-masthead-brand>Logo</pf-masthead-brand>
  </pf-masthead-main>
  <pf-masthead-content>
    <span>Content</span>
  </pf-masthead-content>
</pf-masthead>`},{default:e(()=>[a(p,{"background-color":"light200"},{default:e(()=>[a(o,null,{default:e(()=>[a(s,{variant:"plain","aria-label":"Global navigation"},{default:e(()=>[a(u(c))]),_:1})]),_:1}),a(m,null,{default:e(()=>[a(d,null,{default:e(()=>[t("Logo")]),_:1})]),_:1}),a(i,null,{default:e(()=>[L]),_:1})]),_:1})]),_:1}),a(f,{title:"Inset",source:`<pf-masthead inset="sm">
  <pf-masthead-toggle>
    <pf-button variant="plain" aria-label="Global navigation">
      <BarsIcon />
    </pf-button>
  </pf-masthead-toggle>
  <pf-masthead-main>
    <pf-masthead-brand>Logo</pf-masthead-brand>
  </pf-masthead-main>
  <pf-masthead-content>
    <span>Content</span>
  </pf-masthead-content>
</pf-masthead>`},{default:e(()=>[a(p,{inset:"sm"},{default:e(()=>[a(o,null,{default:e(()=>[a(s,{variant:"plain","aria-label":"Global navigation"},{default:e(()=>[a(u(c))]),_:1})]),_:1}),a(m,null,{default:e(()=>[a(d,null,{default:e(()=>[t("Logo")]),_:1})]),_:1}),a(i,null,{default:e(()=>[N]),_:1})]),_:1})]),_:1})]),_:1},8,["name"])}}});export{F as default};
