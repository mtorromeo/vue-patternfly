import{g as c,r,a as l,c as f,o as u,w as n,d as i,b as t,e as a,t as _}from"./index-DCKv16MW.js";const b=c({__name:"Content.story",setup(v){const s=r("Title text");return(h,e)=>{const d=l("component-info"),o=l("pf-content"),p=l("story-canvas"),m=l("doc-page");return u(),f(m,{name:"Components/Content.story.vue",title:"Content"},{description:n(()=>e[0]||(e[0]=[i("b",null,"PfText",-1),a(" and "),i("b",null,"PfTextList",-1),a(" components are always wrapped in "),i("b",null,"PfTextContent",-1),a(" and provide correct formatting to a number of standard HTML tags.")])),apidocs:n(()=>[t(d,{src:"packages/core/src/components/Content.vue",doc:{name:"PfContent",exportName:"default",displayName:"Content",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"component",description:"The content component. If none provided, it will be a 'div' and styling will be applied to all its child components.",required:!1,type:{name:"union",elements:[{name:'"div"'},{name:'"h1"'},{name:'"h2"'},{name:'"h3"'},{name:'"h4"'},{name:'"h5"'},{name:'"h6"'},{name:'"p"'},{name:'"a"'},{name:'"small"'},{name:'"blockquote"'},{name:'"pre"'},{name:'"hr"'},{name:'"ul"'},{name:'"ol"'},{name:'"dl"'},{name:'"li"'},{name:'"dt"'},{name:'"dd"'}]},defaultValue:{func:!1,value:"'div'"}},{name:"plainList",description:"Modifies the list (ul, ol and dl components) to have plain styling.",required:!1,type:{name:"boolean"}},{name:"visited",description:"Flag to indicate the link (or all links within the content) has visited styles applied if the browser determines the link has been visited.",required:!1,type:{name:"boolean"}},{name:"editorial",description:"Flag to indicate the content has editorial styling. This styling increases the font size of body text and small text by one tier, increasing body text to large and small text to the previous body text size.",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Content.vue"]}})]),default:n(()=>[e[8]||(e[8]=i("div",{class:"markdown pf-v6-c-content"},[i("h2",{class:"pf-v6-c-title"},"Examples")],-1)),t(p,{title:"Text",source:"<pf-content>{{ sample_title }}</pf-content>"},{default:n(()=>[t(o,null,{default:n(()=>[a(_(s.value),1)]),_:1})]),_:1}),t(p,{title:"Text visited",source:`<pf-content>
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
</pf-content>`},{default:n(()=>[t(o,null,{default:n(()=>[t(o,{component:"h3"},{default:n(()=>e[1]||(e[1]=[a("Visited link example")])),_:1,__:[1]}),t(o,{component:"p"},{default:n(()=>[t(o,{component:"a",href:"#"},{default:n(()=>e[2]||(e[2]=[a(" Visited link ")])),_:1,__:[2]})]),_:1})]),_:1}),e[7]||(e[7]=i("br",null,null,-1)),t(o,{visited:""},{default:n(()=>[t(o,{component:"h3"},{default:n(()=>e[3]||(e[3]=[a("Visited content example")])),_:1,__:[3]}),t(o,{component:"p"},{default:n(()=>[t(o,{component:"a",href:"#"},{default:n(()=>e[4]||(e[4]=[a(" content link 1 ")])),_:1,__:[4]})]),_:1}),t(o,{component:"p"},{default:n(()=>[t(o,{component:"a",href:"#"},{default:n(()=>e[5]||(e[5]=[a(" content link 2 ")])),_:1,__:[5]})]),_:1}),t(o,{component:"p"},{default:n(()=>[t(o,{component:"a",href:"#"},{default:n(()=>e[6]||(e[6]=[a(" content link 3 ")])),_:1,__:[6]})]),_:1})]),_:1})]),_:1,__:[7]})]),_:1,__:[8]})}}});export{b as default};
