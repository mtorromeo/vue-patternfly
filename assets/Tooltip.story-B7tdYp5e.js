import{f as U,r,g as O,x as S,o as E,c as F,w as t,a as l,b as e,d,u as q,G as A,e as i}from"./index-D1ygUcxc.js";const L=d("b",null,"tooltip",-1),P=d("div",{class:"markdown pf-v5-c-content"},[d("h2",{class:"pf-v5-c-title"},"Examples")],-1),B={style:{margin:"6rem"}},R={style:{"margin-top":"1rem",height:"20rem",width:"100%",overflow:"auto",position:"relative",border:"1px dashed red"}},j=U({__name:"Tooltip.story",setup(M){const w=r(),u=O(["mouseenter","focus"]),c=r(!1),g=r(!0),v=r("auto"),b=r(300),h=r(300),y=r(0),_=r(15);S(()=>{var p,o;(o=(p=w.value)==null?void 0:p.el)==null||o.scrollIntoView({behavior:"instant",block:"center",inline:"center"})});function V(p,o){o?u.push(p):u.splice(u.indexOf(p),1)}return(p,o)=>{const x=i("component-info"),T=i("pf-tooltip"),k=i("story-canvas"),f=i("pf-checkbox"),s=i("pf-form-group"),n=i("pf-form-select-option"),D=i("pf-form-select"),m=i("pf-text-input"),I=i("pf-form"),N=i("pf-bullseye"),C=i("doc-page");return E(),F(C,{name:"Components/Tooltip.story.vue",title:"Tooltip"},{description:t(()=>[l("A "),L,l(" is in-app messaging used to identify elements on a page with short, clarifying text.")]),apidocs:t(()=>[e(x,{src:"packages/core/src/components/Tooltip/Tooltip.vue",doc:{name:"PfTooltip",exportName:"default",displayName:"Tooltip",description:"",tags:{},expose:[{name:"el"},{name:"show"},{name:"hide"}],props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"appendTo",description:"Element or selector where to render the floating menu",required:!1,type:{name:"union",elements:[{name:'"inline"'},{name:"string"},{name:"RendererElement"},{name:"null"},{name:"undefined"}]}},{name:"position",description:"Tooltip position",required:!1,type:{name:"Placement"},defaultValue:{func:!1,value:"'top'"}},{name:"trigger",description:"A combination of the strings 'mouseenter', 'focus' and 'click'",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'mouseenter focus'"}},{name:"leftAligned",description:"Flag to indicate that the text content is left aligned",required:!1,type:{name:"boolean"}},{name:"entryDelay",description:"Delay in ms before the tooltip appears",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"1000"}},{name:"exitDelay",description:`Delay in ms before the tooltip disappears, Avoid passing in a value of "0", as users should
be given ample time to move their mouse from the trigger to the tooltip content without the content
being hidden.`,required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"distance",description:"Distance of the tooltip to its target",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]},defaultValue:{func:!1,value:"15"}},{name:"aria",description:`aria-labelledby or aria-describedby for tooltip.
The trigger will be cloned to add the aria attribute, and the corresponding id in the form of 'pf-tooltip-#' is added to the content container.
If you don't want that or prefer to add the aria attribute yourself on the trigger, set aria to 'none'.`,required:!1,type:{name:"union",elements:[{name:'"describedby"'},{name:'"labelledby"'},{name:'"none"'}]},defaultValue:{func:!1,value:"'describedby'"}},{name:"animationDuration",description:"CSS fade transition animation duration",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"300"}},{name:"minWidth",description:'Minimum width of the tooltip. If set to "trigger", the minimum width will be set to the reference element width.',required:!1,type:{name:"union",elements:[{name:"string"},{name:'"trigger"'},{name:'"auto"'}]}},{name:"maxWidth",description:"Maximum width of the tooltip",required:!1,type:{name:"number"}},{name:"content",description:"Tooltip content",required:!1,type:{name:"string"}},{name:"flip",description:`The desired position to flip the tooltip to if the initial position is not possible.
By setting this prop to 'flip' it attempts to flip the tooltip to the opposite side if there is no space.`,required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"visible",description:"value for visibility when trigger is 'manual'",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"update:visible",type:{names:["boolean"]}}],slots:[{name:"default"},{name:"content"}],sourceFiles:["../../packages/core/src/components/Tooltip/Tooltip.vue"]}}),e(x,{src:"packages/core/src/components/Tooltip/TooltipArrow.vue",doc:{name:"PfTooltipArrow",exportName:"default",displayName:"TooltipArrow",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Tooltip/TooltipArrow.vue"]}}),e(x,{src:"packages/core/src/components/Tooltip/TooltipContent.vue",doc:{name:"PfTooltipContent",exportName:"default",displayName:"TooltipContent",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"leftAligned",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Tooltip/TooltipContent.vue"]}})]),default:t(()=>[P,e(k,{title:"Basic",source:`<div style="margin: 6rem">
  <pf-tooltip>
    <template #content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</template>
    <pf-button>I have a tooltip!</pf-button>
  </pf-tooltip>
</div>`},{default:t(()=>[d("div",B,[e(T,null,{content:t(()=>[l("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.")]),default:t(()=>[e(q(A),null,{default:t(()=>[l("I have a tooltip!")]),_:1})]),_:1})])]),_:1}),e(k,{title:"Options",source:`<pf-form horizontal>
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
</div>`},{default:t(()=>[e(I,{horizontal:""},{default:t(()=>[e(s,{label:"Trigger"},{default:t(()=>[e(f,{label:"mouseenter","model-value":u.includes("mouseenter"),"onUpdate:modelValue":o[0]||(o[0]=a=>V("mouseenter",a))},null,8,["model-value"]),e(f,{label:"focus","model-value":u.includes("focus"),"onUpdate:modelValue":o[1]||(o[1]=a=>V("focus",a))},null,8,["model-value"]),e(f,{label:"click","model-value":u.includes("click"),"onUpdate:modelValue":o[2]||(o[2]=a=>V("click",a))},null,8,["model-value"])]),_:1}),e(s,{label:"Content"},{default:t(()=>[e(f,{modelValue:c.value,"onUpdate:modelValue":o[3]||(o[3]=a=>c.value=a),label:"Left aligned"},null,8,["modelValue"])]),_:1}),e(s,{label:"Position"},{default:t(()=>[e(f,{modelValue:g.value,"onUpdate:modelValue":o[4]||(o[4]=a=>g.value=a),label:"Flip (used only with position != 'auto')"},null,8,["modelValue"]),e(D,{modelValue:v.value,"onUpdate:modelValue":o[5]||(o[5]=a=>v.value=a)},{default:t(()=>[e(n,{value:"auto"},{default:t(()=>[l("auto")]),_:1}),e(n,{value:"top"},{default:t(()=>[l("top")]),_:1}),e(n,{value:"bottom"},{default:t(()=>[l("bottom")]),_:1}),e(n,{value:"left"},{default:t(()=>[l("left")]),_:1}),e(n,{value:"right"},{default:t(()=>[l("right")]),_:1}),e(n,{value:"top-start"},{default:t(()=>[l("top-start")]),_:1}),e(n,{value:"top-end"},{default:t(()=>[l("top-end")]),_:1}),e(n,{value:"bottom-start"},{default:t(()=>[l("bottom-start")]),_:1}),e(n,{value:"bottom-end"},{default:t(()=>[l("bottom-end")]),_:1}),e(n,{value:"left-start"},{default:t(()=>[l("left-start")]),_:1}),e(n,{value:"left-end"},{default:t(()=>[l("left-end")]),_:1}),e(n,{value:"right-start"},{default:t(()=>[l("right-start")]),_:1}),e(n,{value:"right-end"},{default:t(()=>[l("right-end")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"Animation duration"},{default:t(()=>[e(m,{modelValue:b.value,"onUpdate:modelValue":o[6]||(o[6]=a=>b.value=a),type:"number"},null,8,["modelValue"])]),_:1}),e(s,{label:"Entry delay"},{default:t(()=>[e(m,{modelValue:h.value,"onUpdate:modelValue":o[7]||(o[7]=a=>h.value=a),type:"number"},null,8,["modelValue"])]),_:1}),e(s,{label:"Exit delay"},{default:t(()=>[e(m,{modelValue:y.value,"onUpdate:modelValue":o[8]||(o[8]=a=>y.value=a),type:"number"},null,8,["modelValue"])]),_:1}),e(s,{label:"Distance"},{default:t(()=>[e(m,{modelValue:_.value,"onUpdate:modelValue":o[9]||(o[9]=a=>_.value=a),type:"number"},null,8,["modelValue"])]),_:1})]),_:1}),d("div",R,[e(N,{style:{height:"200%",width:"200%"}},{default:t(()=>[e(T,{trigger:u.join(" "),"left-aligned":c.value,position:v.value,flip:g.value,"animation-duration":b.value,"entry-delay":h.value,"exit-delay":y.value,distance:_.value},{content:t(()=>[l("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.")]),default:t(()=>[e(q(A),{ref_key:"buttonRef",ref:w},{default:t(()=>[l("I have a tooltip!")]),_:1},512)]),_:1},8,["trigger","left-aligned","position","flip","animation-duration","entry-delay","exit-delay","distance"])]),_:1})])]),_:1})]),_:1})}}});export{j as default};
