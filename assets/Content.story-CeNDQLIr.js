import{g as d,r,a as i,c as f,o as u,w as e,d as l,b as t,e as a,t as h}from"./index-Coy-oaSw.js";const _=d({__name:"Content.story",setup(v){const s=r("Title text");return(y,n)=>{const c=i("component-info"),o=i("pf-content"),p=i("story-canvas"),m=i("doc-page");return u(),f(m,{name:"Components/Content.story.vue",title:"Content"},{description:e(()=>[...n[0]||(n[0]=[a("A ",-1),l("b",null,"content",-1),a(" component contains a block of styled HTML content.",-1)])]),apidocs:e(()=>[t(c,{src:"packages/core/src/components/Content.vue",doc:{name:"PfContent",exportName:"default",displayName:"Content",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"component",description:"The content component. If none provided, it will be a 'div' and styling will be applied to all its child components.",required:!1,type:{name:"union",elements:[{name:'"div"'},{name:'"h1"'},{name:'"h2"'},{name:'"h3"'},{name:'"h4"'},{name:'"h5"'},{name:'"h6"'},{name:'"p"'},{name:'"a"'},{name:'"small"'},{name:'"blockquote"'},{name:'"pre"'},{name:'"hr"'},{name:'"ul"'},{name:'"ol"'},{name:'"dl"'},{name:'"li"'},{name:'"dt"'},{name:'"dd"'}]},defaultValue:{func:!1,value:"'div'"}},{name:"plainList",description:"Modifies the list (ul, ol and dl components) to have plain styling.",required:!1,type:{name:"boolean"}},{name:"visited",description:"Flag to indicate the link (or all links within the content) has visited styles applied if the browser determines the link has been visited.",required:!1,type:{name:"boolean"}},{name:"editorial",description:"Flag to indicate the content has editorial styling. This styling increases the font size of body text and small text by one tier, increasing body text to large and small text to the previous body text size.",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Content.vue"]}})]),default:e(()=>[n[8]||(n[8]=l("div",{class:"markdown pf-v6-c-content"},[l("h2",{class:"pf-v6-c-title"},"Examples")],-1)),t(p,{title:"Text",source:"<pf-content>{{ sample_title }}</pf-content>"},{default:e(()=>[t(o,null,{default:e(()=>[a(h(s.value),1)]),_:1})]),_:1}),t(p,{title:"Text visited",source:`<pf-content>
  <pf-content component="h3">Visited link example</pf-content>
  <pf-content component="p">
    <pf-content component="a" href="#">
      Visited link
    </pf-content>
  </pf-content>
</pf-content>
<br>
<pf-content visited>
  <pf-content component="h3">Visited content example</pf-content>
  <pf-content component="p">
    <pf-content component="a" href="#">
      content link 1
    </pf-content>
  </pf-content>
  <pf-content component="p">
    <pf-content component="a" href="#">
      content link 2
    </pf-content>
  </pf-content>
  <pf-content component="p">
    <pf-content component="a" href="#">
      content link 3
    </pf-content>
  </pf-content>
</pf-content>`},{default:e(()=>[t(o,null,{default:e(()=>[t(o,{component:"h3"},{default:e(()=>[...n[1]||(n[1]=[a("Visited link example",-1)])]),_:1}),t(o,{component:"p"},{default:e(()=>[t(o,{component:"a",href:"#"},{default:e(()=>[...n[2]||(n[2]=[a(" Visited link ",-1)])]),_:1})]),_:1})]),_:1}),n[7]||(n[7]=l("br",null,null,-1)),t(o,{visited:""},{default:e(()=>[t(o,{component:"h3"},{default:e(()=>[...n[3]||(n[3]=[a("Visited content example",-1)])]),_:1}),t(o,{component:"p"},{default:e(()=>[t(o,{component:"a",href:"#"},{default:e(()=>[...n[4]||(n[4]=[a(" content link 1 ",-1)])]),_:1})]),_:1}),t(o,{component:"p"},{default:e(()=>[t(o,{component:"a",href:"#"},{default:e(()=>[...n[5]||(n[5]=[a(" content link 2 ",-1)])]),_:1})]),_:1}),t(o,{component:"p"},{default:e(()=>[t(o,{component:"a",href:"#"},{default:e(()=>[...n[6]||(n[6]=[a(" content link 3 ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{_ as default};
