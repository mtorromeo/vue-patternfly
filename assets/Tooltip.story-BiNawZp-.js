import{f as U,r,g as O,s as S,a as i,c as E,o as F,w as o,d,b as t,u as q,G as A,e as n}from"./index-ChC2jNXX.js";const L={style:{margin:"6rem"}},P={style:{"margin-top":"1rem",height:"20rem",width:"100%",overflow:"auto",position:"relative",border:"1px dashed red"}},M=U({__name:"Tooltip.story",setup(B){const T=r(),u=O(["mouseenter","focus"]),c=r(!1),g=r(!0),v=r("auto"),b=r(300),y=r(300),h=r(0),V=r(15);S(()=>{var p,e;(e=(p=T.value)==null?void 0:p.el)==null||e.scrollIntoView({behavior:"instant",block:"center",inline:"center"})});function x(p,e){e?u.push(p):u.splice(u.indexOf(p),1)}return(p,e)=>{const w=i("component-info"),k=i("pf-tooltip"),_=i("story-canvas"),f=i("pf-checkbox"),s=i("pf-form-group"),a=i("pf-form-select-option"),D=i("pf-form-select"),m=i("pf-text-input"),I=i("pf-form"),N=i("pf-bullseye"),C=i("doc-page");return F(),E(C,{name:"Components/Tooltip.story.vue",title:"Tooltip"},{description:o(()=>e[10]||(e[10]=[n("A "),d("b",null,"tooltip",-1),n(" is in-app messaging used to identify elements on a page with short, clarifying text.")])),apidocs:o(()=>[t(w,{src:"packages/core/src/components/Tooltip/Tooltip.vue",doc:{name:"PfTooltip",exportName:"default",displayName:"Tooltip",description:"",tags:{},expose:[{name:"el"},{name:"show"},{name:"hide"}],props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"appendTo",description:"Element or selector where to render the floating menu",required:!1,type:{name:"union",elements:[{name:'"inline"'},{name:"string"},{name:"RendererElement"},{name:"null"},{name:"undefined"}]}},{name:"position",description:"Tooltip position",required:!1,type:{name:"Placement"},defaultValue:{func:!1,value:"'top'"}},{name:"trigger",description:"A combination of the strings 'mouseenter', 'focus' and 'click'",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'mouseenter focus'"}},{name:"leftAligned",description:"Flag to indicate that the text content is left aligned",required:!1,type:{name:"boolean"}},{name:"entryDelay",description:"Delay in ms before the tooltip appears",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"1000"}},{name:"exitDelay",description:`Delay in ms before the tooltip disappears, Avoid passing in a value of "0", as users should
be given ample time to move their mouse from the trigger to the tooltip content without the content
being hidden.`,required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"distance",description:"Distance of the tooltip to its target",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]},defaultValue:{func:!1,value:"15"}},{name:"aria",description:`aria-labelledby or aria-describedby for tooltip.
The trigger will be cloned to add the aria attribute, and the corresponding id in the form of 'pf-tooltip-#' is added to the content container.
If you don't want that or prefer to add the aria attribute yourself on the trigger, set aria to 'none'.`,required:!1,type:{name:"union",elements:[{name:'"describedby"'},{name:'"labelledby"'},{name:'"none"'}]},defaultValue:{func:!1,value:"'describedby'"}},{name:"animationDuration",description:"CSS fade transition animation duration",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"300"}},{name:"minWidth",description:'Minimum width of the tooltip. If set to "trigger", the minimum width will be set to the reference element width.',required:!1,type:{name:"union",elements:[{name:"string"},{name:'"trigger"'},{name:'"auto"'}]}},{name:"maxWidth",description:"Maximum width of the tooltip",required:!1,type:{name:"number"}},{name:"content",description:"Tooltip content",required:!1,type:{name:"string"}},{name:"flip",description:`The desired position to flip the tooltip to if the initial position is not possible.
By setting this prop to 'flip' it attempts to flip the tooltip to the opposite side if there is no space.`,required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"visible",description:"value for visibility when trigger is 'manual'",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"update:visible",type:{names:["boolean"]}}],slots:[{name:"default"},{name:"content"}],sourceFiles:["../../packages/core/src/components/Tooltip/Tooltip.vue"]}}),t(w,{src:"packages/core/src/components/Tooltip/TooltipArrow.vue",doc:{name:"PfTooltipArrow",exportName:"default",displayName:"TooltipArrow",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Tooltip/TooltipArrow.vue"]}}),t(w,{src:"packages/core/src/components/Tooltip/TooltipContent.vue",doc:{name:"PfTooltipContent",exportName:"default",displayName:"TooltipContent",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"leftAligned",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Tooltip/TooltipContent.vue"]}})]),default:o(()=>[e[28]||(e[28]=d("div",{class:"markdown pf-v5-c-content"},[d("h2",{class:"pf-v5-c-title"},"Examples")],-1)),t(_,{title:"Basic",source:`<div style="margin: 6rem">
  <pf-tooltip>
    <template #content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</template>
    <pf-button>I have a tooltip!</pf-button>
  </pf-tooltip>
</div>`},{default:o(()=>[d("div",L,[t(k,null,{content:o(()=>e[11]||(e[11]=[n("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.")])),default:o(()=>[t(q(A),null,{default:o(()=>e[12]||(e[12]=[n("I have a tooltip!")])),_:1})]),_:1})])]),_:1}),t(_,{title:"Options",source:`<pf-form horizontal>
  <pf-form-group label="Trigger">
    <pf-checkbox label="mouseenter" :model-value="trigger.includes('mouseenter')" @update:model-value="checkTrigger('mouseenter', $event)" />
    <pf-checkbox label="focus" :model-value="trigger.includes('focus')" @update:model-value="checkTrigger('focus', $event)" />
    <pf-checkbox label="click" :model-value="trigger.includes('click')" @update:model-value="checkTrigger('click', $event)" />
  </pf-form-group>

  <pf-form-group label="Content">
    <pf-checkbox v-model="leftAligned" label="Left aligned" />
  </pf-form-group>

  <pf-form-group label="Position">
    <pf-checkbox v-model="flip" label="Flip (used only with position != 'auto')" />

    <pf-form-select v-model="position">
      <pf-form-select-option value="auto">auto</pf-form-select-option>
      <pf-form-select-option value="top">top</pf-form-select-option>
      <pf-form-select-option value="bottom">bottom</pf-form-select-option>
      <pf-form-select-option value="left">left</pf-form-select-option>
      <pf-form-select-option value="right">right</pf-form-select-option>
      <pf-form-select-option value="top-start">top-start</pf-form-select-option>
      <pf-form-select-option value="top-end">top-end</pf-form-select-option>
      <pf-form-select-option value="bottom-start">bottom-start</pf-form-select-option>
      <pf-form-select-option value="bottom-end">bottom-end</pf-form-select-option>
      <pf-form-select-option value="left-start">left-start</pf-form-select-option>
      <pf-form-select-option value="left-end">left-end</pf-form-select-option>
      <pf-form-select-option value="right-start">right-start</pf-form-select-option>
      <pf-form-select-option value="right-end">right-end</pf-form-select-option>
    </pf-form-select>
  </pf-form-group>

  <pf-form-group label="Animation duration">
    <pf-text-input v-model="animationDuration" type="number" />
  </pf-form-group>

  <pf-form-group label="Entry delay">
    <pf-text-input v-model="entryDelay" type="number" />
  </pf-form-group>

  <pf-form-group label="Exit delay">
    <pf-text-input v-model="exitDelay" type="number" />
  </pf-form-group>

  <pf-form-group label="Distance">
    <pf-text-input v-model="distance" type="number" />
  </pf-form-group>
</pf-form>

<div style="margin-top: 1rem; height: 20rem; width: 100%; overflow: auto; position: relative; border: 1px dashed red">
  <pf-bullseye style="height: 200%; width: 200%">
    <pf-tooltip
      :trigger="trigger.join(' ')"
      :left-aligned="leftAligned"
      :position="position"
      :flip="flip"
      :animation-duration="animationDuration"
      :entry-delay="entryDelay"
      :exit-delay="exitDelay"
      :distance="distance"
    >
      <template #content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</template>
      <pf-button ref="buttonRef">I have a tooltip!</pf-button>
    </pf-tooltip>
  </pf-bullseye>
</div>`},{default:o(()=>[t(I,{horizontal:""},{default:o(()=>[t(s,{label:"Trigger"},{default:o(()=>[t(f,{label:"mouseenter","model-value":u.includes("mouseenter"),"onUpdate:modelValue":e[0]||(e[0]=l=>x("mouseenter",l))},null,8,["model-value"]),t(f,{label:"focus","model-value":u.includes("focus"),"onUpdate:modelValue":e[1]||(e[1]=l=>x("focus",l))},null,8,["model-value"]),t(f,{label:"click","model-value":u.includes("click"),"onUpdate:modelValue":e[2]||(e[2]=l=>x("click",l))},null,8,["model-value"])]),_:1}),t(s,{label:"Content"},{default:o(()=>[t(f,{modelValue:c.value,"onUpdate:modelValue":e[3]||(e[3]=l=>c.value=l),label:"Left aligned"},null,8,["modelValue"])]),_:1}),t(s,{label:"Position"},{default:o(()=>[t(f,{modelValue:g.value,"onUpdate:modelValue":e[4]||(e[4]=l=>g.value=l),label:"Flip (used only with position != 'auto')"},null,8,["modelValue"]),t(D,{modelValue:v.value,"onUpdate:modelValue":e[5]||(e[5]=l=>v.value=l)},{default:o(()=>[t(a,{value:"auto"},{default:o(()=>e[13]||(e[13]=[n("auto")])),_:1}),t(a,{value:"top"},{default:o(()=>e[14]||(e[14]=[n("top")])),_:1}),t(a,{value:"bottom"},{default:o(()=>e[15]||(e[15]=[n("bottom")])),_:1}),t(a,{value:"left"},{default:o(()=>e[16]||(e[16]=[n("left")])),_:1}),t(a,{value:"right"},{default:o(()=>e[17]||(e[17]=[n("right")])),_:1}),t(a,{value:"top-start"},{default:o(()=>e[18]||(e[18]=[n("top-start")])),_:1}),t(a,{value:"top-end"},{default:o(()=>e[19]||(e[19]=[n("top-end")])),_:1}),t(a,{value:"bottom-start"},{default:o(()=>e[20]||(e[20]=[n("bottom-start")])),_:1}),t(a,{value:"bottom-end"},{default:o(()=>e[21]||(e[21]=[n("bottom-end")])),_:1}),t(a,{value:"left-start"},{default:o(()=>e[22]||(e[22]=[n("left-start")])),_:1}),t(a,{value:"left-end"},{default:o(()=>e[23]||(e[23]=[n("left-end")])),_:1}),t(a,{value:"right-start"},{default:o(()=>e[24]||(e[24]=[n("right-start")])),_:1}),t(a,{value:"right-end"},{default:o(()=>e[25]||(e[25]=[n("right-end")])),_:1})]),_:1},8,["modelValue"])]),_:1}),t(s,{label:"Animation duration"},{default:o(()=>[t(m,{modelValue:b.value,"onUpdate:modelValue":e[6]||(e[6]=l=>b.value=l),type:"number"},null,8,["modelValue"])]),_:1}),t(s,{label:"Entry delay"},{default:o(()=>[t(m,{modelValue:y.value,"onUpdate:modelValue":e[7]||(e[7]=l=>y.value=l),type:"number"},null,8,["modelValue"])]),_:1}),t(s,{label:"Exit delay"},{default:o(()=>[t(m,{modelValue:h.value,"onUpdate:modelValue":e[8]||(e[8]=l=>h.value=l),type:"number"},null,8,["modelValue"])]),_:1}),t(s,{label:"Distance"},{default:o(()=>[t(m,{modelValue:V.value,"onUpdate:modelValue":e[9]||(e[9]=l=>V.value=l),type:"number"},null,8,["modelValue"])]),_:1})]),_:1}),d("div",P,[t(N,{style:{height:"200%",width:"200%"}},{default:o(()=>[t(k,{trigger:u.join(" "),"left-aligned":c.value,position:v.value,flip:g.value,"animation-duration":b.value,"entry-delay":y.value,"exit-delay":h.value,distance:V.value},{content:o(()=>e[26]||(e[26]=[n("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.")])),default:o(()=>[t(q(A),{ref_key:"buttonRef",ref:T},{default:o(()=>e[27]||(e[27]=[n("I have a tooltip!")])),_:1},512)]),_:1},8,["trigger","left-aligned","position","flip","animation-duration","entry-delay","exit-delay","distance"])]),_:1})])]),_:1})]),_:1})}}});export{M as default};
