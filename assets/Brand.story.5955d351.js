import{_ as p,a as n,c as d,w as e,o as i,b as o,d as t,g as s}from"./index.f6fe9dd1.js";const g={},_=t("div",{class:"markdown pf-c-content"},[t("p",null,[s("A "),t("strong",null,"brand"),s(" is used to place a product logotype on a screen.")])],-1),w=t("div",{class:"markdown pf-c-content"},[t("p",null,[s("Passing "),t("code",null,"<source>"),s(" elements as children to "),t("code",null,"Brand"),s(" will change the component from an "),t("code",null,"<img>"),s(" to a "),t("code",null,"<picture>"),s(" element. In this form, breakpoint modifiers for width and height may be passed to Brand. The "),t("code",null,"src"),s(" and "),t("code",null,"alt"),s(" properties should still be passed to populate the fallback "),t("code",null,"img"),s(" of the brand.")])],-1),m=t("source",{media:"(min-width: 1200px)",srcset:"https://www.patternfly.org/assets/images/pf-c-brand__logo-on-xl.svg"},null,-1),f=t("source",{media:"(min-width: 992px)",srcset:"https://www.patternfly.org/assets/images/pf-c-brand__logo-on-lg.svg"},null,-1),h=t("source",{media:"(min-width: 768px)",srcset:"https://www.patternfly.org/assets/images/pf-c-brand__logo-on-md.svg"},null,-1),u=t("source",{media:"(min-width: 576px)",srcset:"https://www.patternfly.org/assets/images/pf-c-brand__logo-on-sm.svg"},null,-1),b=t("source",{srcset:"https://www.patternfly.org/assets/images/pf-c-brand__logo.svg"},null,-1);function y(x,v){const l=n("component-title"),a=n("pf-brand"),r=n("story-canvas"),c=n("doc-page");return i(),d(c,{title:"Brand"},{default:e(()=>[o(l,{name:"pf-brand"}),_,o(r,{title:"Basic",source:'<pf-brand src="https://www.patternfly.org/assets/images/pf_logo.svg" alt="Patternfly Logo" />'},{default:e(()=>[o(a,{src:"https://www.patternfly.org/assets/images/pf_logo.svg",alt:"Patternfly Logo"})]),_:1}),o(r,{title:"Responsive",source:`<pf-brand
  src="https://www.patternfly.org/assets/images/pf-c-brand__logo-base.jpg"
  alt="Fallback patternfly default logo"
  width="40px"
  width-sm="60px"
  width-md="220px"
>
  <source media="(min-width: 1200px)" srcset="https://www.patternfly.org/assets/images/pf-c-brand__logo-on-xl.svg">
  <source media="(min-width: 992px)" srcset="https://www.patternfly.org/assets/images/pf-c-brand__logo-on-lg.svg">
  <source media="(min-width: 768px)" srcset="https://www.patternfly.org/assets/images/pf-c-brand__logo-on-md.svg">
  <source media="(min-width: 576px)" srcset="https://www.patternfly.org/assets/images/pf-c-brand__logo-on-sm.svg">
  <source srcset="https://www.patternfly.org/assets/images/pf-c-brand__logo.svg">
</pf-brand>`},{intro:e(()=>[w]),default:e(()=>[o(a,{src:"https://www.patternfly.org/assets/images/pf-c-brand__logo-base.jpg",alt:"Fallback patternfly default logo",width:"40px","width-sm":"60px","width-md":"220px"},{default:e(()=>[m,f,h,u,b]),_:1})]),_:1})]),_:1})}const B=p(g,[["render",y]]);export{B as default};