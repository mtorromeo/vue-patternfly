import{r as m,o as f,c as v,w as t,a as c,b as a,d as u,e as d}from"./index-Dls2Hn57.js";const x=u("b",null,"accordion",-1),b=u("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",-1),g=u("p",null," Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam ultrices, faucibus erat id, maximus nunc. ",-1),q=u("p",null,"Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.",-1),h=u("p",null," Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra, sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris, pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus. Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros. ",-1),_=u("p",null,"Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.",-1),A=u("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",-1),I=u("p",null," Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam ultrices, faucibus erat id, maximus nunc. ",-1),y=u("p",null,"Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.",-1),V=u("p",null," Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra, sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris, pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus. Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros. ",-1),M=u("p",null,"Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.",-1),F={__name:"Accordion.story",setup(P){const e=m(null);return(w,n)=>{const l=d("component-info"),o=d("pf-accordion-item"),r=d("pf-accordion"),s=d("story-canvas"),p=d("doc-page");return f(),v(p,{name:"Components/Accordion.story.vue",title:"Accordion"},{description:t(()=>[c("An "),x,c(" is an interactive container that expands and collapses to hide or reveal nested content. It takes advantage of progressive disclosure to help reduce page scrolling, by allowing users to choose whether they want to show or hide more detailed information as needed.")]),apidocs:t(()=>[a(l,{src:"packages/core/src/components/Accordion/Accordion.vue",doc:{name:"PfAccordion",exportName:"default",displayName:"Accordion",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"level",description:"Heading level to use",required:!1,type:{name:"union",elements:[{name:'"h1"'},{name:'"h2"'},{name:'"h3"'},{name:'"h4"'},{name:'"h5"'},{name:'"h6"'},{name:"number"}]},defaultValue:{func:!1,value:"3"}},{name:"dl",description:"Flag to indicate whether use definition list or div",required:!1,type:{name:"boolean"}},{name:"bordered",description:"Flag to indicate the accordion had a border",required:!1,type:{name:"boolean"}},{name:"large",description:"Large display size variant.",required:!1,type:{name:"boolean"}},{name:"togglePosition",description:"Sets the toggle icon position for all accordion toggles.",required:!1,type:{name:"union",elements:[{name:'"start"'},{name:'"end"'}]},defaultValue:{func:!1,value:"'end'"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Accordion/Accordion.vue"]}}),a(l,{src:"packages/core/src/components/Accordion/AccordionItem.vue",doc:{name:"PfAccordionItem",exportName:"default",displayName:"AccordionItem",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"title",required:!1,type:{name:"string"}},{name:"toggleComponent",required:!1,type:{name:"string"}},{name:"contentComponent",required:!1,type:{name:"string"}},{name:"fixed",required:!1,type:{name:"boolean"}},{name:"expanded",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"update:expanded",type:{names:["boolean"]}},{name:"click",type:{names:["PointerEvent"]}}],slots:[{name:"toggle"},{name:"default"}],sourceFiles:["../../packages/core/src/components/Accordion/AccordionItem.vue"]}})]),default:t(()=>[a(s,{title:"Default",source:`<pf-accordion>
  <pf-accordion-item
    title="Item One"
    :expanded="expanded == 1"
    @update:expanded="expanded = $event ? 1 : null"
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua.
    </p>
  </pf-accordion-item>
  <pf-accordion-item
    title="Item Two"
    :expanded="expanded == 2"
    @update:expanded="expanded = $event ? 2 : null"
  >
    <p>
      Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam
      ultrices, faucibus erat id, maximus nunc.
    </p>
  </pf-accordion-item>
  <pf-accordion-item
    title="Item Three"
    :expanded="expanded == 3"
    @update:expanded="expanded = $event ? 3 : null"
  >
    <p>Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.</p>
  </pf-accordion-item>
  <pf-accordion-item
    title="Item Four"
    :expanded="expanded == 4"
    @update:expanded="expanded = $event ? 4 : null"
  >
    <p>
      Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,
      sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
      posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper
      eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis
      parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris,
      pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus.
      Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.
    </p>
  </pf-accordion-item>
  <pf-accordion-item
    title="Item Five"
    :expanded="expanded == 5"
    @update:expanded="expanded = $event ? 5 : null"
  >
    <p>Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.</p>
  </pf-accordion-item>
</pf-accordion>`},{default:t(()=>[a(r,null,{default:t(()=>[a(o,{title:"Item One",expanded:e.value==1,"onUpdate:expanded":n[0]||(n[0]=i=>e.value=i?1:null)},{default:t(()=>[b]),_:1},8,["expanded"]),a(o,{title:"Item Two",expanded:e.value==2,"onUpdate:expanded":n[1]||(n[1]=i=>e.value=i?2:null)},{default:t(()=>[g]),_:1},8,["expanded"]),a(o,{title:"Item Three",expanded:e.value==3,"onUpdate:expanded":n[2]||(n[2]=i=>e.value=i?3:null)},{default:t(()=>[q]),_:1},8,["expanded"]),a(o,{title:"Item Four",expanded:e.value==4,"onUpdate:expanded":n[3]||(n[3]=i=>e.value=i?4:null)},{default:t(()=>[h]),_:1},8,["expanded"]),a(o,{title:"Item Five",expanded:e.value==5,"onUpdate:expanded":n[4]||(n[4]=i=>e.value=i?5:null)},{default:t(()=>[_]),_:1},8,["expanded"])]),_:1})]),_:1}),a(s,{title:"Definition List",source:`<pf-accordion dl>
  <pf-accordion-item
    title="Item One"
    :expanded="expanded == 1"
    @update:expanded="expanded = $event ? 1 : null"
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua.
    </p>
  </pf-accordion-item>
  <pf-accordion-item
    title="Item Two"
    :expanded="expanded == 2"
    @update:expanded="expanded = $event ? 2 : null"
  >
    <p>
      Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam
      ultrices, faucibus erat id, maximus nunc.
    </p>
  </pf-accordion-item>
  <pf-accordion-item
    title="Item Three"
    :expanded="expanded == 3"
    @update:expanded="expanded = $event ? 3 : null"
  >
    <p>Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.</p>
  </pf-accordion-item>
  <pf-accordion-item
    title="Item Four"
    :expanded="expanded == 4"
    @update:expanded="expanded = $event ? 4 : null"
  >
    <p>
      Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,
      sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
      posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper
      eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis
      parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris,
      pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus.
      Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.
    </p>
  </pf-accordion-item>
  <pf-accordion-item
    title="Item Five"
    :expanded="expanded == 5"
    @update:expanded="expanded = $event ? 5 : null"
  >
    <p>Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.</p>
  </pf-accordion-item>
</pf-accordion>`},{default:t(()=>[a(r,{dl:""},{default:t(()=>[a(o,{title:"Item One",expanded:e.value==1,"onUpdate:expanded":n[5]||(n[5]=i=>e.value=i?1:null)},{default:t(()=>[A]),_:1},8,["expanded"]),a(o,{title:"Item Two",expanded:e.value==2,"onUpdate:expanded":n[6]||(n[6]=i=>e.value=i?2:null)},{default:t(()=>[I]),_:1},8,["expanded"]),a(o,{title:"Item Three",expanded:e.value==3,"onUpdate:expanded":n[7]||(n[7]=i=>e.value=i?3:null)},{default:t(()=>[y]),_:1},8,["expanded"]),a(o,{title:"Item Four",expanded:e.value==4,"onUpdate:expanded":n[8]||(n[8]=i=>e.value=i?4:null)},{default:t(()=>[V]),_:1},8,["expanded"]),a(o,{title:"Item Five",expanded:e.value==5,"onUpdate:expanded":n[9]||(n[9]=i=>e.value=i?5:null)},{default:t(()=>[M]),_:1},8,["expanded"])]),_:1})]),_:1})]),_:1})}}};export{F as default};
