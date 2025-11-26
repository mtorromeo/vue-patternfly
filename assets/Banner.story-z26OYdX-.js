import{C as d}from"./circle-info-icon-B7tZWBN_.js";import{C as x}from"./circle-exclamation-icon-AJfHOZx_.js";import{C as c,T as p}from"./triangle-exclamation-icon-27LfqpHd.js";import{g,a as s,c as y,o as w,w as r,b as n,d as l,e as t,u}from"./index-CUPii3Pv.js";const T=g({__name:"Banner.story",setup(C){return(v,e)=>{const m=s("component-info"),a=s("pf-banner"),i=s("story-canvas"),o=s("pf-flex-item"),f=s("pf-flex"),b=s("doc-page");return w(),y(b,{name:"Components/Banner.story.vue",title:"Banner"},{description:r(()=>[...e[0]||(e[0]=[t("A ",-1),l("b",null,"banner",-1),t(" is a 1-line, full color, full width container that can be used to communicate short snippets of information to users. Banners are un-intrusive and non-dismissible.",-1)])]),apidocs:r(()=>[n(m,{src:"packages/core/src/components/Banner.vue",doc:{name:"PfBanner",exportName:"default",displayName:"Banner",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"sticky",description:"If set to true, the banner sticks to the top of its container",required:!1,type:{name:"boolean"}},{name:"screenReaderText",description:`Text announced by screen readers to indicate the type of banner. This prop should only
be passed in when the banner conveys status/severity.`,required:!1,type:{name:"string"}},{name:"color",description:"Color options for the banner, will be overwritten by any applied using the status prop.",required:!1,type:{name:"union",elements:[{name:'"red"'},{name:'"orangered"'},{name:'"orange"'},{name:'"yellow"'},{name:'"green"'},{name:'"teal"'},{name:'"blue"'},{name:'"purple"'}]}},{name:"status",description:"Status style options for the banner, will overwrite any color applied using the color prop.",required:!1,type:{name:"union",elements:[{name:'"success"'},{name:'"warning"'},{name:'"danger"'},{name:'"info"'},{name:'"custom"'}]}}],slots:[{name:"screen-reader-text"},{name:"default"}],sourceFiles:["../../packages/core/src/components/Banner.vue"]}})]),default:r(()=>[n(i,{title:"Basic",source:`<pf-banner>Default banner</pf-banner>
<br>
<pf-banner color="red">Red banner</pf-banner>
<br>
<pf-banner color="orangered">Orangered banner</pf-banner>
<br>
<pf-banner color="orange">Orange banner</pf-banner>
<br>
<pf-banner color="yellow">Yellow banner</pf-banner>
<br>
<pf-banner color="green">Green banner</pf-banner>
<br>
<pf-banner color="teal">Teal banner</pf-banner>
<br>
<pf-banner color="blue">Blue banner</pf-banner>
<br>
<pf-banner color="purple">Purple banner</pf-banner>`},{default:r(()=>[n(a,null,{default:r(()=>[...e[1]||(e[1]=[t("Default banner",-1)])]),_:1}),e[10]||(e[10]=l("br",null,null,-1)),n(a,{color:"red"},{default:r(()=>[...e[2]||(e[2]=[t("Red banner",-1)])]),_:1}),e[11]||(e[11]=l("br",null,null,-1)),n(a,{color:"orangered"},{default:r(()=>[...e[3]||(e[3]=[t("Orangered banner",-1)])]),_:1}),e[12]||(e[12]=l("br",null,null,-1)),n(a,{color:"orange"},{default:r(()=>[...e[4]||(e[4]=[t("Orange banner",-1)])]),_:1}),e[13]||(e[13]=l("br",null,null,-1)),n(a,{color:"yellow"},{default:r(()=>[...e[5]||(e[5]=[t("Yellow banner",-1)])]),_:1}),e[14]||(e[14]=l("br",null,null,-1)),n(a,{color:"green"},{default:r(()=>[...e[6]||(e[6]=[t("Green banner",-1)])]),_:1}),e[15]||(e[15]=l("br",null,null,-1)),n(a,{color:"teal"},{default:r(()=>[...e[7]||(e[7]=[t("Teal banner",-1)])]),_:1}),e[16]||(e[16]=l("br",null,null,-1)),n(a,{color:"blue"},{default:r(()=>[...e[8]||(e[8]=[t("Blue banner",-1)])]),_:1}),e[17]||(e[17]=l("br",null,null,-1)),n(a,{color:"purple"},{default:r(()=>[...e[9]||(e[9]=[t("Purple banner",-1)])]),_:1})]),_:1}),n(i,{title:"Status",source:`<pf-banner status="success" screen-reader-text="Success banner">
  <pf-flex space-items="sm">
    <pf-flex-item>
      <circle-check-icon />
    </pf-flex-item>
    <pf-flex-item>Success banner</pf-flex-item>
  </pf-flex>
</pf-banner>
<br>
<pf-banner status="warning" screen-reader-text="Warning banner">
  <pf-flex space-items="sm">
    <pf-flex-item>
      <triangle-exclamation-icon />
    </pf-flex-item>
    <pf-flex-item>Warning banner</pf-flex-item>
  </pf-flex>
</pf-banner>
<br>
<pf-banner status="danger" screen-reader-text="Danger banner">
  <pf-flex space-items="sm">
    <pf-flex-item>
      <circle-exclamation-icon />
    </pf-flex-item>
    <pf-flex-item>Danger banner</pf-flex-item>
  </pf-flex>
</pf-banner>
<br>
<pf-banner status="info" screen-reader-text="Info banner">
  <pf-flex space-items="sm">
    <pf-flex-item>
      <circle-info-icon />
    </pf-flex-item>
    <pf-flex-item>Info banner</pf-flex-item>
  </pf-flex>
</pf-banner>
<br>
<pf-banner status="custom" screen-reader-text="Custom banner">
  <pf-flex space-items="sm">
    <pf-flex-item>
      <triangle-exclamation-icon />
    </pf-flex-item>
    <pf-flex-item>Custom banner</pf-flex-item>
  </pf-flex>
</pf-banner>`},{default:r(()=>[n(a,{status:"success","screen-reader-text":"Success banner"},{default:r(()=>[n(f,{"space-items":"sm"},{default:r(()=>[n(o,null,{default:r(()=>[n(u(c))]),_:1}),n(o,null,{default:r(()=>[...e[18]||(e[18]=[t("Success banner",-1)])]),_:1})]),_:1})]),_:1}),e[23]||(e[23]=l("br",null,null,-1)),n(a,{status:"warning","screen-reader-text":"Warning banner"},{default:r(()=>[n(f,{"space-items":"sm"},{default:r(()=>[n(o,null,{default:r(()=>[n(u(p))]),_:1}),n(o,null,{default:r(()=>[...e[19]||(e[19]=[t("Warning banner",-1)])]),_:1})]),_:1})]),_:1}),e[24]||(e[24]=l("br",null,null,-1)),n(a,{status:"danger","screen-reader-text":"Danger banner"},{default:r(()=>[n(f,{"space-items":"sm"},{default:r(()=>[n(o,null,{default:r(()=>[n(u(x))]),_:1}),n(o,null,{default:r(()=>[...e[20]||(e[20]=[t("Danger banner",-1)])]),_:1})]),_:1})]),_:1}),e[25]||(e[25]=l("br",null,null,-1)),n(a,{status:"info","screen-reader-text":"Info banner"},{default:r(()=>[n(f,{"space-items":"sm"},{default:r(()=>[n(o,null,{default:r(()=>[n(u(d))]),_:1}),n(o,null,{default:r(()=>[...e[21]||(e[21]=[t("Info banner",-1)])]),_:1})]),_:1})]),_:1}),e[26]||(e[26]=l("br",null,null,-1)),n(a,{status:"custom","screen-reader-text":"Custom banner"},{default:r(()=>[n(f,{"space-items":"sm"},{default:r(()=>[n(o,null,{default:r(()=>[n(u(p))]),_:1}),n(o,null,{default:r(()=>[...e[22]||(e[22]=[t("Custom banner",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{T as default};
