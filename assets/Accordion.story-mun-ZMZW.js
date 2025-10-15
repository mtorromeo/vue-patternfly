import{r as c,a as d,c as f,o as v,w as t,b as a,d as u,e as p}from"./index-Co1KYOzY.js";const q={__name:"Accordion.story",setup(x){const n=c(null);return(g,e)=>{const r=d("component-info"),o=d("pf-accordion-item"),l=d("pf-accordion"),s=d("story-canvas"),m=d("doc-page");return v(),f(m,{name:"Components/Accordion.story.vue",title:"Accordion"},{description:t(()=>[...e[10]||(e[10]=[p("An ",-1),u("b",null,"accordion",-1),p(" is an interactive container that expands and collapses to hide or reveal nested content. It takes advantage of progressive disclosure to help reduce page scrolling, by allowing users to choose whether they want to show or hide more detailed information as needed.",-1)])]),apidocs:t(()=>[a(r,{src:"packages/core/src/components/Accordion/Accordion.vue",doc:{name:"PfAccordion",exportName:"default",displayName:"Accordion",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"level",description:"Heading level to use",required:!1,type:{name:"union",elements:[{name:'"h1"'},{name:'"h2"'},{name:'"h3"'},{name:'"h4"'},{name:'"h5"'},{name:'"h6"'},{name:"number"}]},defaultValue:{func:!1,value:"3"}},{name:"dl",description:"Flag to indicate whether use definition list or div",required:!1,type:{name:"boolean"}},{name:"bordered",description:"Flag to indicate the accordion had a border",required:!1,type:{name:"boolean"}},{name:"large",description:"Large display size variant.",required:!1,type:{name:"boolean"}},{name:"togglePosition",description:"Sets the toggle icon position for all accordion toggles.",required:!1,type:{name:"union",elements:[{name:'"start"'},{name:'"end"'}]},defaultValue:{func:!1,value:"'end'"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Accordion/Accordion.vue"]}}),a(r,{src:"packages/core/src/components/Accordion/AccordionItem.vue",doc:{name:"PfAccordionItem",exportName:"default",displayName:"AccordionItem",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"title",required:!1,type:{name:"string"}},{name:"toggleComponent",required:!1,type:{name:"string"}},{name:"contentComponent",required:!1,type:{name:"string"}},{name:"fixed",required:!1,type:{name:"boolean"}}],events:[{name:"click",type:{names:["PointerEvent"]}}],slots:[{name:"toggle"},{name:"default"}],sourceFiles:["../../packages/core/src/components/Accordion/AccordionItem.vue"]}})]),default:t(()=>[a(s,{title:"Default",source:`<pf-accordion>
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
</pf-accordion>`},{default:t(()=>[a(l,null,{default:t(()=>[a(o,{title:"Item One",expanded:n.value==1,"onUpdate:expanded":e[0]||(e[0]=i=>n.value=i?1:null)},{default:t(()=>[...e[11]||(e[11]=[u("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",-1)])]),_:1},8,["expanded"]),a(o,{title:"Item Two",expanded:n.value==2,"onUpdate:expanded":e[1]||(e[1]=i=>n.value=i?2:null)},{default:t(()=>[...e[12]||(e[12]=[u("p",null," Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam ultrices, faucibus erat id, maximus nunc. ",-1)])]),_:1},8,["expanded"]),a(o,{title:"Item Three",expanded:n.value==3,"onUpdate:expanded":e[2]||(e[2]=i=>n.value=i?3:null)},{default:t(()=>[...e[13]||(e[13]=[u("p",null,"Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.",-1)])]),_:1},8,["expanded"]),a(o,{title:"Item Four",expanded:n.value==4,"onUpdate:expanded":e[3]||(e[3]=i=>n.value=i?4:null)},{default:t(()=>[...e[14]||(e[14]=[u("p",null," Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra, sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris, pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus. Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros. ",-1)])]),_:1},8,["expanded"]),a(o,{title:"Item Five",expanded:n.value==5,"onUpdate:expanded":e[4]||(e[4]=i=>n.value=i?5:null)},{default:t(()=>[...e[15]||(e[15]=[u("p",null,"Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.",-1)])]),_:1},8,["expanded"])]),_:1})]),_:1}),a(s,{title:"Definition List",source:`<pf-accordion dl>
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
</pf-accordion>`},{default:t(()=>[a(l,{dl:""},{default:t(()=>[a(o,{title:"Item One",expanded:n.value==1,"onUpdate:expanded":e[5]||(e[5]=i=>n.value=i?1:null)},{default:t(()=>[...e[16]||(e[16]=[u("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",-1)])]),_:1},8,["expanded"]),a(o,{title:"Item Two",expanded:n.value==2,"onUpdate:expanded":e[6]||(e[6]=i=>n.value=i?2:null)},{default:t(()=>[...e[17]||(e[17]=[u("p",null," Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam ultrices, faucibus erat id, maximus nunc. ",-1)])]),_:1},8,["expanded"]),a(o,{title:"Item Three",expanded:n.value==3,"onUpdate:expanded":e[7]||(e[7]=i=>n.value=i?3:null)},{default:t(()=>[...e[18]||(e[18]=[u("p",null,"Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.",-1)])]),_:1},8,["expanded"]),a(o,{title:"Item Four",expanded:n.value==4,"onUpdate:expanded":e[8]||(e[8]=i=>n.value=i?4:null)},{default:t(()=>[...e[19]||(e[19]=[u("p",null," Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra, sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris, pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus. Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros. ",-1)])]),_:1},8,["expanded"]),a(o,{title:"Item Five",expanded:n.value==5,"onUpdate:expanded":e[9]||(e[9]=i=>n.value=i?5:null)},{default:t(()=>[...e[20]||(e[20]=[u("p",null,"Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.",-1)])]),_:1},8,["expanded"])]),_:1})]),_:1})]),_:1})}}};export{q as default};
