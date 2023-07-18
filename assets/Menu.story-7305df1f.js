import{e as I,f as D,a as u,o as w,c as z,w as n,b as e,g as t,q as v,u as m,d as l}from"./index-2cac8358.js";import{C as s}from"./code-branch-icon-9a02b4f1.js";import{c as h}from"./createIcon-dd1a4b15.js";import{B}from"./bell-icon-a1a5130b.js";const M={name:"LayerGroupIcon",height:512,width:576,svgPath:"M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z",yOffset:0,xOffset:0},H=h(M),O=H,F={name:"CubeIcon",height:512,width:512,svgPath:"M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z",yOffset:0,xOffset:0},G=h(F),T=G,V={name:"ClipboardIcon",height:512,width:384,svgPath:"M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z",yOffset:0,xOffset:0},W=h(V),N=W,P={name:"BarsIcon",height:512,width:448,svgPath:"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z",yOffset:0,xOffset:0},$=h(P),E=$,S=l("div",{class:"markdown pf-c-content"},[l("p",null,[t("A "),l("strong",null,"menu"),t(" is a list of options or actions that users can choose from. It can be used in a variety of contexts whenever the user needs to choose between multiple values, options, or actions. A menu can be opened in a "),l("a",{href:"#/stories/components/dropdown"},"dropdown"),t(" or "),l("a",{href:"#/stories/components/select"},"select"),t(" list, or it can be revealed by right clicking on a specific region within a page.")]),l("h2",{class:"pf-c-title"},"Differences from patternfly-react"),l("ul",null,[l("li",null,[t("The "),l("code",null,"pf-menu-content"),t(", "),l("code",null,"pf-menu-list"),t(" and "),l("code",null,"pf-menu-input"),t(" components are optional.")])]),l("p",null,[t("See "),l("a",{href:"#/"},"common differences from patternfly-react"),t(".")]),l("h2",{class:"pf-c-title"},"Examples")],-1),U=I({__name:"Menu.story",setup(q){const d=D(["item3","item4"]);function C(b){const f=d.indexOf(b);f<0?d.push(b):d.splice(f,1)}return(b,f)=>{const x=u("component-title"),i=u("pf-menu-item"),o=u("pf-menu-list"),p=u("pf-menu-content"),a=u("pf-menu"),c=u("story-canvas"),k=u("pf-divider"),g=u("pf-text-input"),A=u("pf-menu-input"),r=u("pf-menu-group"),_=u("pf-menu-item-action"),y=u("doc-page");return w(),z(y,{title:"Menu"},{default:n(()=>[e(x,{name:"pf-menu"}),S,e(c,{title:"Basic",source:`<pf-menu>
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item>Action</pf-menu-item>
      <pf-menu-item to="#default-link2" @click.prevent>Link</pf-menu-item>
      <pf-menu-item disabled>Disabled action</pf-menu-item>
      <pf-menu-item disabled to="#default-link4">Disabled link</pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{default:n(()=>[e(a,null,{default:n(()=>[e(p,null,{default:n(()=>[e(o,null,{default:n(()=>[e(i,null,{default:n(()=>[t("Action")]),_:1}),e(i,{to:"#default-link2",onClick:f[0]||(f[0]=v(()=>{},["prevent"]))},{default:n(()=>[t("Link")]),_:1}),e(i,{disabled:""},{default:n(()=>[t("Disabled action")]),_:1}),e(i,{disabled:"",to:"#default-link4"},{default:n(()=>[t("Disabled link")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{title:"Basic (simplified)",source:`<pf-menu>
  <pf-menu-item>Action</pf-menu-item>
  <pf-menu-item to="#default-link2" @click.prevent>Link</pf-menu-item>
  <pf-menu-item disabled>Disabled action</pf-menu-item>
  <pf-menu-item disabled to="#default-link4">Disabled link</pf-menu-item>
</pf-menu>`},{default:n(()=>[e(a,null,{default:n(()=>[e(i,null,{default:n(()=>[t("Action")]),_:1}),e(i,{to:"#default-link2",onClick:f[1]||(f[1]=v(()=>{},["prevent"]))},{default:n(()=>[t("Link")]),_:1}),e(i,{disabled:""},{default:n(()=>[t("Disabled action")]),_:1}),e(i,{disabled:"",to:"#default-link4"},{default:n(()=>[t("Disabled link")]),_:1})]),_:1})]),_:1}),e(c,{title:"Danger menu item",source:`<pf-menu>
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item>Action 1</pf-menu-item>
      <pf-menu-item>Action 2</pf-menu-item>
      <pf-divider component="li" ></pf-divider>
      <pf-menu-item danger>Delete</pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{default:n(()=>[e(a,null,{default:n(()=>[e(p,null,{default:n(()=>[e(o,null,{default:n(()=>[e(i,null,{default:n(()=>[t("Action 1")]),_:1}),e(i,null,{default:n(()=>[t("Action 2")]),_:1}),e(k,{component:"li"}),e(i,{danger:""},{default:n(()=>[t("Delete")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{title:"With icons",source:`<pf-menu>
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item>
        <template #icon><code-branch-icon></code-branch-icon></template>
        From git
      </pf-menu-item>
      <pf-menu-item>
        <template #icon><layer-group-icon></layer-group-icon></template>
        Container image
      </pf-menu-item>
      <pf-menu-item>
        <template #icon><cube-icon></cube-icon></template>
        Docker file
      </pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{default:n(()=>[e(a,null,{default:n(()=>[e(p,null,{default:n(()=>[e(o,null,{default:n(()=>[e(i,null,{icon:n(()=>[e(m(s))]),default:n(()=>[t(" From git ")]),_:1}),e(i,null,{icon:n(()=>[e(m(O))]),default:n(()=>[t(" Container image ")]),_:1}),e(i,null,{icon:n(()=>[e(m(T))]),default:n(()=>[t(" Docker file ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{title:"With checkbox",source:`<pf-menu>
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item check>Checkbox 1</pf-menu-item>
      <pf-menu-item check>Checkbox 2</pf-menu-item>
      <pf-menu-item check disabled>Checkbox 3</pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{default:n(()=>[e(a,null,{default:n(()=>[e(p,null,{default:n(()=>[e(o,null,{default:n(()=>[e(i,{check:""},{default:n(()=>[t("Checkbox 1")]),_:1}),e(i,{check:""},{default:n(()=>[t("Checkbox 2")]),_:1}),e(i,{check:"",disabled:""},{default:n(()=>[t("Checkbox 3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{title:"Filtering with text input",source:`<pf-menu>
  <pf-menu-input>
    <pf-text-input :auto-validate="false" aria-label="Filter menu items" type="search" icon-variant="search" ></pf-text-input>
  </pf-menu-input>
  <pf-divider></pf-divider>
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item>Action 1</pf-menu-item>
      <pf-menu-item>Action 2</pf-menu-item>
      <pf-menu-item>Action 3</pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{default:n(()=>[e(a,null,{default:n(()=>[e(A,null,{default:n(()=>[e(g,{"auto-validate":!1,"aria-label":"Filter menu items",type:"search","icon-variant":"search"})]),_:1}),e(k),e(p,null,{default:n(()=>[e(o,null,{default:n(()=>[e(i,null,{default:n(()=>[t("Action 1")]),_:1}),e(i,null,{default:n(()=>[t("Action 2")]),_:1}),e(i,null,{default:n(()=>[t("Action 3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{title:"Filtering with text input (simplified)",source:`<pf-menu>
  <pf-text-input :auto-validate="false" aria-label="Filter menu items" type="search" icon-variant="search" ></pf-text-input>
  <pf-divider></pf-divider>
  <pf-menu-item>Action 1</pf-menu-item>
  <pf-menu-item>Action 2</pf-menu-item>
  <pf-menu-item>Action 3</pf-menu-item>
</pf-menu>`},{default:n(()=>[e(a,null,{default:n(()=>[e(g,{"auto-validate":!1,"aria-label":"Filter menu items",type:"search","icon-variant":"search"}),e(k),e(i,null,{default:n(()=>[t("Action 1")]),_:1}),e(i,null,{default:n(()=>[t("Action 2")]),_:1}),e(i,null,{default:n(()=>[t("Action 3")]),_:1})]),_:1})]),_:1}),e(c,{title:"With links",source:`<pf-menu>
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item to="#default-link-1" external-link>Link 1</pf-menu-item>
      <pf-menu-item to="#default-link-2" external-link>Link 2</pf-menu-item>
      <pf-menu-item to="#default-link-3">Link 3</pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{default:n(()=>[e(a,null,{default:n(()=>[e(p,null,{default:n(()=>[e(o,null,{default:n(()=>[e(i,{to:"#default-link-1","external-link":""},{default:n(()=>[t("Link 1")]),_:1}),e(i,{to:"#default-link-2","external-link":""},{default:n(()=>[t("Link 2")]),_:1}),e(i,{to:"#default-link-3"},{default:n(()=>[t("Link 3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{title:"With titled groups",source:`<pf-menu>
  <pf-menu-content>
    <pf-menu-group>
      <pf-menu-list>
        <pf-menu-item to="#">Link not in group</pf-menu-item>
      </pf-menu-list>
    </pf-menu-group>
    <pf-menu-group label="Group 1" label-heading-level="h3">
      <pf-menu-list>
        <pf-menu-item to="#">Link 1</pf-menu-item>
        <pf-menu-item to="#">Link 2</pf-menu-item>
      </pf-menu-list>
    </pf-menu-group>
    <pf-menu-group label="Group 2" label-heading-level="h3">
      <pf-menu-list>
        <pf-menu-item to="#">Link 1</pf-menu-item>
        <pf-menu-item to="#">Link 2</pf-menu-item>
      </pf-menu-list>
    </pf-menu-group>
  </pf-menu-content>
</pf-menu>`},{default:n(()=>[e(a,null,{default:n(()=>[e(p,null,{default:n(()=>[e(r,null,{default:n(()=>[e(o,null,{default:n(()=>[e(i,{to:"#"},{default:n(()=>[t("Link not in group")]),_:1})]),_:1})]),_:1}),e(r,{label:"Group 1","label-heading-level":"h3"},{default:n(()=>[e(o,null,{default:n(()=>[e(i,{to:"#"},{default:n(()=>[t("Link 1")]),_:1}),e(i,{to:"#"},{default:n(()=>[t("Link 2")]),_:1})]),_:1})]),_:1}),e(r,{label:"Group 2","label-heading-level":"h3"},{default:n(()=>[e(o,null,{default:n(()=>[e(i,{to:"#"},{default:n(()=>[t("Link 1")]),_:1}),e(i,{to:"#"},{default:n(()=>[t("Link 2")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{title:"With description",source:`<pf-menu>
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item description="Description">
        <template #icon><code-branch-icon></code-branch-icon></template>
        Action 1
      </pf-menu-item>
      <pf-menu-item disabled description="Description">
        <template #icon><code-branch-icon></code-branch-icon></template>
        Action 2 disabled
      </pf-menu-item>
      <pf-menu-item
        description="Nunc non ornare ex, et pretium dui. Duis nec augue at urna elementum blandit tincidunt eget metus. Aenean sed metus id urna dignissim interdum. Aenean vel nisl vitae arcu vehicula pulvinar eget nec turpis. Cras sit amet est est."
      >
        <template #icon><code-branch-icon></code-branch-icon></template>
        Action 3
      
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{default:n(()=>[e(a,null,{default:n(()=>[e(p,null,{default:n(()=>[e(o,null,{default:n(()=>[e(i,{description:"Description"},{icon:n(()=>[e(m(s))]),default:n(()=>[t(" Action 1 ")]),_:1}),e(i,{disabled:"",description:"Description"},{icon:n(()=>[e(m(s))]),default:n(()=>[t(" Action 2 disabled ")]),_:1}),e(i,{description:"Nunc non ornare ex, et pretium dui. Duis nec augue at urna elementum blandit tincidunt eget metus. Aenean sed metus id urna dignissim interdum. Aenean vel nisl vitae arcu vehicula pulvinar eget nec turpis. Cras sit amet est est."},{icon:n(()=>[e(m(s))]),default:n(()=>[t(" Action 3 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{title:"With actions",source:`<pf-menu @select="(event: Event, itemKey: string | number | symbol | null | undefined) => toggle(itemKey)">
  <pf-menu-content>
    <pf-menu-group label="Actions" label-heading-level="h3">
      <pf-menu-list>
        <pf-menu-item
          key="item1"
          :selected="selected.includes('item1')"
          description="This is a description"
        >
          Item 1
          <template #actions>
            <pf-menu-item-action action-id="code">
              <code-branch-icon aria-hidden ></code-branch-icon>
            </pf-menu-item-action>
          </template>
        

        <pf-menu-item
          key="item2"
          :selected="selected.includes('item2')"
          disabled
          description="This is a description"
        >
          Item 2
          <template #actions>
            <pf-menu-item-action action-id="alert">
              <bell-icon aria-hidden ></bell-icon>
            </pf-menu-item-action>
          </template>
        

        <pf-menu-item
          key="item3"
          :selected="selected.includes('item3')"
        >
          Item 3
          <template #actions>
            <pf-menu-item-action action-id="copy">
              <clipboard-icon aria-hidden ></clipboard-icon>
            </pf-menu-item-action>
          </template>
        

        <pf-menu-item
          key="item4"
          :selected="selected.includes('item4')"
          description="This is a description"
        >
          Item 4
          <template #actions>
            <pf-menu-item-action action-id="expand">
              <bars-icon aria-hidden ></bars-icon>
            </pf-menu-item-action>
          </template>
        
      </pf-menu-list>
    </pf-menu-group>
  </pf-menu-content>
</pf-menu>`},{default:n(()=>[e(a,{onSelect:f[2]||(f[2]=(K,L)=>C(L))},{default:n(()=>[e(p,null,{default:n(()=>[e(r,{label:"Actions","label-heading-level":"h3"},{default:n(()=>[e(o,null,{default:n(()=>[e(i,{key:"item1",selected:d.includes("item1"),description:"This is a description"},{actions:n(()=>[e(_,{"action-id":"code"},{default:n(()=>[e(m(s),{"aria-hidden":""})]),_:1})]),default:n(()=>[t(" Item 1 ")]),_:1},8,["selected"]),e(i,{key:"item2",selected:d.includes("item2"),disabled:"",description:"This is a description"},{actions:n(()=>[e(_,{"action-id":"alert"},{default:n(()=>[e(m(B),{"aria-hidden":""})]),_:1})]),default:n(()=>[t(" Item 2 ")]),_:1},8,["selected"]),e(i,{key:"item3",selected:d.includes("item3")},{actions:n(()=>[e(_,{"action-id":"copy"},{default:n(()=>[e(m(N),{"aria-hidden":""})]),_:1})]),default:n(()=>[t(" Item 3 ")]),_:1},8,["selected"]),e(i,{key:"item4",selected:d.includes("item4"),description:"This is a description"},{actions:n(()=>[e(_,{"action-id":"expand"},{default:n(()=>[e(m(E),{"aria-hidden":""})]),_:1})]),default:n(()=>[t(" Item 4 ")]),_:1},8,["selected"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{U as default};
