import{c as s}from"./createIcon.9b30fa3a.js";import{M as r}from"./magnifying-glass-icon.14196ef1.js";import{e as l,a as p,c as _,w as n,o as g,b as t,u as i,j as m}from"./index.697aafd2.js";const x={name:"AtIcon",height:512,width:512,svgPath:"M207.8 20.73c-93.45 18.32-168.7 93.66-187 187.1c-27.64 140.9 68.65 266.2 199.1 285.1c19.01 2.888 36.17-12.26 36.17-31.49l.0001-.6631c0-15.74-11.44-28.88-26.84-31.24c-84.35-12.98-149.2-86.13-149.2-174.2c0-102.9 88.61-185.5 193.4-175.4c91.54 8.869 158.6 91.25 158.6 183.2l0 16.16c0 22.09-17.94 40.05-40 40.05s-40.01-17.96-40.01-40.05v-120.1c0-8.847-7.161-16.02-16.01-16.02l-31.98 .0036c-7.299 0-13.2 4.992-15.12 11.68c-24.85-12.15-54.24-16.38-86.06-5.106c-38.75 13.73-68.12 48.91-73.72 89.64c-9.483 69.01 43.81 128 110.9 128c26.44 0 50.43-9.544 69.59-24.88c24 31.3 65.23 48.69 109.4 37.49C465.2 369.3 496 324.1 495.1 277.2V256.3C495.1 107.1 361.2-9.332 207.8 20.73zM239.1 304.3c-26.47 0-48-21.56-48-48.05s21.53-48.05 48-48.05s48 21.56 48 48.05S266.5 304.3 239.1 304.3z",yOffset:0,xOffset:0},d=s(x),y=d,h=m("@example.com"),G=l({__name:"InputGroup.story",setup(I){return(C,v)=>{const a=p("component-title"),e=p("pf-text-input"),o=p("pf-input-group-text"),u=p("pf-input-group"),c=p("story-canvas"),f=p("doc-page");return g(),_(f,{title:"Input Group"},{default:n(()=>[t(a,{name:"pf-input-group"}),t(c,{title:"Default",source:`<pf-input-group>
  <pf-text-input type="email" ></pf-text-input>
  <pf-input-group-text>@example.com</pf-input-group-text>
</pf-input-group>`},{default:n(()=>[t(u,null,{default:n(()=>[t(e,{type:"email"}),t(o,null,{default:n(()=>[h]),_:1})]),_:1})]),_:1}),t(c,{title:"With pre icon",source:`<pf-input-group>
  <pf-input-group-text>
    <at-icon></at-icon>
  </pf-input-group-text>
  <pf-text-input type="email" ></pf-text-input>
</pf-input-group>`},{default:n(()=>[t(u,null,{default:n(()=>[t(o,null,{default:n(()=>[t(i(y))]),_:1}),t(e,{type:"email"})]),_:1})]),_:1}),t(c,{title:"With post icon",source:`<pf-input-group>
  <pf-text-input type="search" ></pf-text-input>
  <pf-input-group-text>
    <magnifying-glass-icon></magnifying-glass-icon>
  </pf-input-group-text>
</pf-input-group>`},{default:n(()=>[t(u,null,{default:n(()=>[t(e,{type:"search"}),t(o,null,{default:n(()=>[t(i(r))]),_:1})]),_:1})]),_:1})]),_:1})}}});export{G as default};
