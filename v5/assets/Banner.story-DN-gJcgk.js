import{B as m}from"./bell-icon-e-5WLhHr.js";import{C as b}from"./circle-info-icon-B01I3St4.js";import{C as x}from"./circle-exclamation-icon-D5WyQ-LF.js";import{C as c,T as _}from"./triangle-exclamation-icon-Br6wKdAf.js";import{g as v,a as o,c as g,o as B,w as a,b as n,d as f,e as t,u as i}from"./index-QrbPWNYK.js";const D=v({__name:"Banner.story",setup(y){return(G,e)=>{const p=o("component-info"),r=o("pf-banner"),u=o("story-canvas"),l=o("pf-flex-item"),s=o("pf-flex"),d=o("doc-page");return B(),g(d,{name:"Components/Banner.story.vue",title:"Banner"},{description:a(()=>e[0]||(e[0]=[t("A "),f("b",null,"banner",-1),t(" is a 1-line, full color, full width container that can be used to communicate short snippets of information to users. Banners are un-intrusive and non-dismissible.")])),apidocs:a(()=>[n(p,{src:"packages/core/src/components/Banner.vue",doc:{name:"PfBanner",exportName:"default",displayName:"Banner",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"sticky",description:"If set to true, the banner sticks to the top of its container",required:!1,type:{name:"boolean"}},{name:"screenReaderText",description:`Text announced by screen readers to indicate the type of banner. This prop should only
be passed in when the banner conveys status/severity.`,required:!1,type:{name:"string"}},{name:"variant",description:"Variant styles for the banner.",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"blue"'},{name:'"red"'},{name:'"green"'},{name:'"gold"'}]},defaultValue:{func:!1,value:"'default'"}}],slots:[{name:"screen-reader-text"},{name:"default"}],sourceFiles:["../../packages/core/src/components/Banner.vue"]}})]),default:a(()=>[n(u,{title:"Basic",source:`<pf-banner>Default banner</pf-banner>
<br>
<pf-banner variant="blue">Blue banner</pf-banner>
<br>
<pf-banner variant="red">Red banner</pf-banner>
<br>
<pf-banner variant="green">Green banner</pf-banner>
<br>
<pf-banner variant="gold">Gold banner</pf-banner>`},{default:a(()=>[n(r,null,{default:a(()=>e[1]||(e[1]=[t("Default banner")])),_:1,__:[1]}),e[6]||(e[6]=f("br",null,null,-1)),n(r,{variant:"blue"},{default:a(()=>e[2]||(e[2]=[t("Blue banner")])),_:1,__:[2]}),e[7]||(e[7]=f("br",null,null,-1)),n(r,{variant:"red"},{default:a(()=>e[3]||(e[3]=[t("Red banner")])),_:1,__:[3]}),e[8]||(e[8]=f("br",null,null,-1)),n(r,{variant:"green"},{default:a(()=>e[4]||(e[4]=[t("Green banner")])),_:1,__:[4]}),e[9]||(e[9]=f("br",null,null,-1)),n(r,{variant:"gold"},{default:a(()=>e[5]||(e[5]=[t("Gold banner")])),_:1,__:[5]})]),_:1,__:[6,7,8,9]}),n(u,{title:"Status",source:`<pf-banner screen-reader-text="Default banner">
  <pf-flex space-items="sm">
    <pf-flex-item>
      <bell-icon />
    </pf-flex-item>
    <pf-flex-item>Default banner</pf-flex-item>
  </pf-flex>
</pf-banner>
<br>
<pf-banner variant="blue" screen-reader-text="Blue banner">
  <pf-flex space-items="sm">
    <pf-flex-item>
      <circle-info-icon />
    </pf-flex-item>
    <pf-flex-item>Blue banner</pf-flex-item>
  </pf-flex>
</pf-banner>
<br>
<pf-banner variant="red" screen-reader-text="Red banner">
  <pf-flex space-items="sm">
    <pf-flex-item>
      <circle-exclamation-icon />
    </pf-flex-item>
    <pf-flex-item>Red banner</pf-flex-item>
  </pf-flex>
</pf-banner>
<br>
<pf-banner variant="green" screen-reader-text="Green banner">
  <pf-flex space-items="sm">
    <pf-flex-item>
      <circle-check-icon />
    </pf-flex-item>
    <pf-flex-item>Green banner</pf-flex-item>
  </pf-flex>
</pf-banner>
<br>
<pf-banner variant="gold" screen-reader-text="Gold banner">
  <pf-flex space-items="sm">
    <pf-flex-item>
      <triangle-exclamation-icon />
    </pf-flex-item>
    <pf-flex-item>Gold banner</pf-flex-item>
  </pf-flex>
</pf-banner>`},{default:a(()=>[n(r,{"screen-reader-text":"Default banner"},{default:a(()=>[n(s,{"space-items":"sm"},{default:a(()=>[n(l,null,{default:a(()=>[n(i(m))]),_:1}),n(l,null,{default:a(()=>e[10]||(e[10]=[t("Default banner")])),_:1,__:[10]})]),_:1})]),_:1}),e[15]||(e[15]=f("br",null,null,-1)),n(r,{variant:"blue","screen-reader-text":"Blue banner"},{default:a(()=>[n(s,{"space-items":"sm"},{default:a(()=>[n(l,null,{default:a(()=>[n(i(b))]),_:1}),n(l,null,{default:a(()=>e[11]||(e[11]=[t("Blue banner")])),_:1,__:[11]})]),_:1})]),_:1}),e[16]||(e[16]=f("br",null,null,-1)),n(r,{variant:"red","screen-reader-text":"Red banner"},{default:a(()=>[n(s,{"space-items":"sm"},{default:a(()=>[n(l,null,{default:a(()=>[n(i(x))]),_:1}),n(l,null,{default:a(()=>e[12]||(e[12]=[t("Red banner")])),_:1,__:[12]})]),_:1})]),_:1}),e[17]||(e[17]=f("br",null,null,-1)),n(r,{variant:"green","screen-reader-text":"Green banner"},{default:a(()=>[n(s,{"space-items":"sm"},{default:a(()=>[n(l,null,{default:a(()=>[n(i(c))]),_:1}),n(l,null,{default:a(()=>e[13]||(e[13]=[t("Green banner")])),_:1,__:[13]})]),_:1})]),_:1}),e[18]||(e[18]=f("br",null,null,-1)),n(r,{variant:"gold","screen-reader-text":"Gold banner"},{default:a(()=>[n(s,{"space-items":"sm"},{default:a(()=>[n(l,null,{default:a(()=>[n(i(_))]),_:1}),n(l,null,{default:a(()=>e[14]||(e[14]=[t("Gold banner")])),_:1,__:[14]})]),_:1})]),_:1})]),_:1,__:[15,16,17,18]})]),_:1})}}});export{D as default};
