import{_ as i,a as n,o as u,c as f,w as s,b as l,d as e,g as o}from"./index-f43cc49b.js";const m={},d=e("div",{class:"markdown pf-c-content"},[e("p",null,[o("A form "),e("strong",null,"select"),o(" embeds browser native select lists into a form.")]),e("h2",{class:"pf-c-title"},"Usage"),e("p",null,[o("If your use case only calls for simple selects, you may opt to use a form select as an field inside a form. However, if your use case requires more customization and capability, use a custom select list. "),e("strong",null,"Note"),o(": Use only custom selects or only form selects in the same context. Mixing them together compromises visual consistency in your UI. "),e("a",{href:"https://www.patternfly.org/v4/components/form-select/design-guidelines"},"View PatternFly design guidelines")]),e("h2",{class:"pf-c-title"},"Differences from patternfly-react"),e("ul",null,[e("li",null,[o("The "),e("code",null,"FormSelectOptionGroup"),o(" component is not implemented as it does not provide any value over native "),e("code",null,"<optgroup>"),o(".")]),e("li",null,[o("The "),e("code",null,"value"),o(" prop is replaced by "),e("code",null,"modelValue"),o(" so that the component can be used with "),e("code",null,"v-model"),o(". See "),e("a",{href:"#/"},"common differences from patternfly-react"),o(".")])]),e("h1",{class:"pf-c-title"},[o("PfFormSelectOption "),e("code",null,"pf-form-select-option")]),e("p",null,[o("Wraps a native "),e("code",null,"<option>"),o(" element and adds a "),e("code",null,"placeholder"),o(" identifier flag. You can either use the default slot or the "),e("code",null,"label"),o(" prop to render the content.")])],-1),_={label:"Group 1"},b={label:"Group 2"},v={label:"Group 3",disabled:""};function h(g,y){const a=n("component-title"),t=n("pf-form-select-option"),r=n("pf-form-select"),p=n("story-canvas"),c=n("doc-page");return u(),f(c,{title:"Form Select"},{default:s(()=>[l(a,{name:"pf-form-select"}),d,l(p,{title:"Example",source:`<pf-form-select required>
  <pf-form-select-option value="" label="Please Choose" placeholder disabled />
  <pf-form-select-option value="mr" label="Mr" />
  <pf-form-select-option value="miss" label="Miss" />
  <pf-form-select-option value="mrs" label="Mrs" />
  <pf-form-select-option value="ms" label="Ms" />
  <pf-form-select-option value="dr" label="Dr" disabled />
  <optgroup label="Group 1">
    <pf-form-select-option value="opt1" label="Option 1" />
    <pf-form-select-option value="opt2" label="Option 2" />
  </optgroup>
  <optgroup label="Group 2">
    <pf-form-select-option value="opt3">Option 3</pf-form-select-option>
    <pf-form-select-option value="opt4">Option 4</pf-form-select-option>
  </optgroup>
  <optgroup label="Group 3" disabled>
    <pf-form-select-option value="other" label="Other" />
  </optgroup>
</pf-form-select>`},{default:s(()=>[l(r,{required:""},{default:s(()=>[l(t,{value:"",label:"Please Choose",placeholder:"",disabled:""}),l(t,{value:"mr",label:"Mr"}),l(t,{value:"miss",label:"Miss"}),l(t,{value:"mrs",label:"Mrs"}),l(t,{value:"ms",label:"Ms"}),l(t,{value:"dr",label:"Dr",disabled:""}),e("optgroup",_,[l(t,{value:"opt1",label:"Option 1"}),l(t,{value:"opt2",label:"Option 2"})]),e("optgroup",b,[l(t,{value:"opt3"},{default:s(()=>[o("Option 3")]),_:1}),l(t,{value:"opt4"},{default:s(()=>[o("Option 4")]),_:1})]),e("optgroup",v,[l(t,{value:"other",label:"Other"})])]),_:1})]),_:1})]),_:1})}const w=i(m,[["render",h]]);export{w as default};
