import{g as L,r as c,a as r,c as y,o as N,w as t,b as e,e as i,d as q}from"./index-BXH-RqvU.js";const _=L({__name:"Navigation.story",setup(S){const n=c("link1"),p=c("dark"),d=c("default");function o(k,a,s){n.value=s}return(k,a)=>{const s=r("component-info"),l=r("pf-nav-item"),u=r("pf-nav-list"),m=r("pf-nav"),f=r("story-canvas"),v=r("pf-nav-group"),g=r("doc-page");return N(),y(g,{name:"Components/Navigation.story.vue",title:"Navigation"},{description:t(()=>a[0]||(a[0]=[i("A "),q("b",null,"navigation",-1),i(" organizes an application's structure and content, making it easy to find information and accomplish tasks. Navigation communicates relationships, context, and actions a user can take within an application.")])),apidocs:t(()=>[e(s,{src:"packages/core/src/components/Nav/Nav.vue",doc:{name:"PfNav",exportName:"default",displayName:"Nav",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"theme",required:!1,type:{name:"union",elements:[{name:'"dark"'},{name:'"light"'}]},defaultValue:{func:!1,value:"'dark'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"horizontal"'},{name:'"tertiary"'},{name:'"horizontal-subnav"'},{name:'"subnav"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"ariaLabel",required:!1,type:{name:"string"}}],events:[{name:"select",type:{names:["Event"]}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Nav/Nav.vue"]}}),e(s,{src:"packages/core/src/components/Nav/NavExpandable.vue",doc:{name:"PfNavExpandable",exportName:"default",displayName:"NavExpandable",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"title",required:!1,type:{name:"string"}},{name:"srText",required:!1,type:{name:"string"}},{name:"groupId",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"id",required:!1,type:{name:"string"}},{name:"active",required:!1,type:{name:"boolean"}},{name:"managed",required:!1,type:{name:"boolean"}},{name:"expanded",required:!1,type:{name:"boolean"}}],events:[{name:"update:expanded",type:{names:["boolean"]}}],slots:[{name:"title"},{name:"default"}],sourceFiles:["../../packages/core/src/components/Nav/NavExpandable.vue"]}}),e(s,{src:"packages/core/src/components/Nav/NavGroup.vue",doc:{name:"PfNavGroup",exportName:"default",displayName:"NavGroup",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"title",required:!0,type:{name:"string"}},{name:"id",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"() => getUniqueId()"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Nav/NavGroup.vue"]}}),e(s,{src:"packages/core/src/components/Nav/NavItem.vue",doc:{name:"PfNavItem",exportName:"default",displayName:"NavItem",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"component",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'li'"}},{name:"linkComponent",required:!1,type:{name:"string"}},{name:"groupId",required:!1,type:{name:"string"}},{name:"itemId",required:!1,type:{name:"string"}},{name:"active",required:!1,type:{name:"boolean"}},{name:"preventDefault",required:!1,type:{name:"boolean"}},{name:"itemClass",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"any"}]},{name:"Record",elements:[{name:"string"},{name:"boolean"}]}]}},{name:"itemAttrs",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"any"}]}},{name:"to",required:!1,type:{name:"RouteLocationRaw"}},{name:"tabindex",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}}],events:[{name:"showflyout"},{name:"select",type:{names:["Event"]}}],slots:[{name:"default"},{name:"flyout"}],sourceFiles:["../../packages/core/src/components/Nav/NavItem.vue"]}}),e(s,{src:"packages/core/src/components/Nav/NavItemSeparator.vue",doc:{name:"PfNavItemSeparator",exportName:"default",displayName:"NavItemSeparator",description:"",tags:{},sourceFiles:["../../packages/core/src/components/Nav/NavItemSeparator.vue"]}}),e(s,{src:"packages/core/src/components/Nav/NavList.vue",doc:{name:"PfNavList",exportName:"default",displayName:"NavList",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"ariaLeftScroll",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Scroll left'"}},{name:"ariaRightScroll",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Scroll right'"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Nav/NavList.vue"]}})]),default:t(()=>[e(f,{title:"Default",dark:p.value!=="light"&&d.value!=="tertiary","max-width":"300px",source:`<pf-nav>
  <pf-nav-list>
    <pf-nav-item item-id="link1" :active="activeLink == 'link1'" @select="selectLink">
      Link 1
    </pf-nav-item>
    <pf-nav-item item-id="link2" :active="activeLink == 'link2'" @select="selectLink">
      Link 2
    </pf-nav-item>
    <pf-nav-item item-id="link3" :active="activeLink == 'link3'" @select="selectLink">
      Link 3
    </pf-nav-item>
    <pf-nav-item item-id="link4" :active="activeLink == 'link4'" @select="selectLink">
      Link 4
    </pf-nav-item>
    <pf-nav-item item-id="link5" :active="activeLink == 'link5'" @select="selectLink">
      Link 5
    </pf-nav-item>
  </pf-nav-list>
</pf-nav>`},{default:t(()=>[e(m,null,{default:t(()=>[e(u,null,{default:t(()=>[e(l,{"item-id":"link1",active:n.value=="link1",onSelect:o},{default:t(()=>a[1]||(a[1]=[i(" Link 1 ")])),_:1},8,["active"]),e(l,{"item-id":"link2",active:n.value=="link2",onSelect:o},{default:t(()=>a[2]||(a[2]=[i(" Link 2 ")])),_:1},8,["active"]),e(l,{"item-id":"link3",active:n.value=="link3",onSelect:o},{default:t(()=>a[3]||(a[3]=[i(" Link 3 ")])),_:1},8,["active"]),e(l,{"item-id":"link4",active:n.value=="link4",onSelect:o},{default:t(()=>a[4]||(a[4]=[i(" Link 4 ")])),_:1},8,["active"]),e(l,{"item-id":"link5",active:n.value=="link5",onSelect:o},{default:t(()=>a[5]||(a[5]=[i(" Link 5 ")])),_:1},8,["active"])]),_:1})]),_:1})]),_:1},8,["dark"]),e(f,{title:"Grouped",dark:p.value!=="light"&&d.value!=="tertiary","max-width":"300px",source:`<pf-nav @select="selectLink">
  <pf-nav-list>
    <pf-nav-group title="Section title 1">
      <pf-nav-item item-id="link1" :active="activeLink == 'link1'">
        Link 1
      </pf-nav-item>
      <pf-nav-item item-id="link2" :active="activeLink == 'link2'">
        Link 2
      </pf-nav-item>
      <pf-nav-item item-id="link3" :active="activeLink == 'link3'">
        Link 3
      </pf-nav-item>
    </pf-nav-group>
    <pf-nav-group title="Section title 2">
      <pf-nav-item item-id="link4" :active="activeLink == 'link4'">
        Link 4
      </pf-nav-item>
      <pf-nav-item item-id="link5" :active="activeLink == 'link5'">
        Link 5
      </pf-nav-item>
      <pf-nav-item item-id="link6" :active="activeLink == 'link6'">
        Link 6
      </pf-nav-item>
    </pf-nav-group>
  </pf-nav-list>
</pf-nav>`},{default:t(()=>[e(m,{onSelect:o},{default:t(()=>[e(u,null,{default:t(()=>[e(v,{title:"Section title 1"},{default:t(()=>[e(l,{"item-id":"link1",active:n.value=="link1"},{default:t(()=>a[6]||(a[6]=[i(" Link 1 ")])),_:1},8,["active"]),e(l,{"item-id":"link2",active:n.value=="link2"},{default:t(()=>a[7]||(a[7]=[i(" Link 2 ")])),_:1},8,["active"]),e(l,{"item-id":"link3",active:n.value=="link3"},{default:t(()=>a[8]||(a[8]=[i(" Link 3 ")])),_:1},8,["active"])]),_:1}),e(v,{title:"Section title 2"},{default:t(()=>[e(l,{"item-id":"link4",active:n.value=="link4"},{default:t(()=>a[9]||(a[9]=[i(" Link 4 ")])),_:1},8,["active"]),e(l,{"item-id":"link5",active:n.value=="link5"},{default:t(()=>a[10]||(a[10]=[i(" Link 5 ")])),_:1},8,["active"]),e(l,{"item-id":"link6",active:n.value=="link6"},{default:t(()=>a[11]||(a[11]=[i(" Link 6 ")])),_:1},8,["active"])]),_:1})]),_:1})]),_:1})]),_:1},8,["dark"]),e(f,{title:"Flyout",dark:p.value!=="light"&&d.value!=="tertiary","max-width":"300px",source:`<pf-nav @select="selectLink">
  <pf-nav @select="selectLink">
    <pf-nav-list>
      <pf-nav-group title="Section title 1">
        <pf-nav-item item-id="link1" :active="activeLink == 'link1'">
          Link 1
        </pf-nav-item>
        <pf-nav-item item-id="link2" :active="activeLink == 'link2'">
          Link 2
        </pf-nav-item>
        <pf-nav-item item-id="link3" :active="activeLink == 'link3'">
          Link 3
          <template #flyout>
            <pf-nav variant="subnav">
              <pf-nav-list>
                <pf-nav-item item-id="link7" :active="activeLink == 'link7'">
                  Link 7
                </pf-nav-item>
              </pf-nav-list>
            </pf-nav>
          </template>
        </pf-nav-item>
      </pf-nav-group>
      <pf-nav-group title="Section title 2">
        <pf-nav-item item-id="link4" :active="activeLink == 'link4'">
          Link 4
        </pf-nav-item>
        <pf-nav-item item-id="link5" :active="activeLink == 'link5'">
          Link 5
        </pf-nav-item>
        <pf-nav-item item-id="link6" :active="activeLink == 'link6'">
          Link 6
        </pf-nav-item>
      </pf-nav-group>
    </pf-nav-list>
  </pf-nav>
</pf-nav>`},{default:t(()=>[e(m,{onSelect:o},{default:t(()=>[e(m,{onSelect:o},{default:t(()=>[e(u,null,{default:t(()=>[e(v,{title:"Section title 1"},{default:t(()=>[e(l,{"item-id":"link1",active:n.value=="link1"},{default:t(()=>a[12]||(a[12]=[i(" Link 1 ")])),_:1},8,["active"]),e(l,{"item-id":"link2",active:n.value=="link2"},{default:t(()=>a[13]||(a[13]=[i(" Link 2 ")])),_:1},8,["active"]),e(l,{"item-id":"link3",active:n.value=="link3"},{flyout:t(()=>[e(m,{variant:"subnav"},{default:t(()=>[e(u,null,{default:t(()=>[e(l,{"item-id":"link7",active:n.value=="link7"},{default:t(()=>a[14]||(a[14]=[i(" Link 7 ")])),_:1},8,["active"])]),_:1})]),_:1})]),default:t(()=>[a[15]||(a[15]=i(" Link 3 "))]),_:1},8,["active"])]),_:1}),e(v,{title:"Section title 2"},{default:t(()=>[e(l,{"item-id":"link4",active:n.value=="link4"},{default:t(()=>a[16]||(a[16]=[i(" Link 4 ")])),_:1},8,["active"]),e(l,{"item-id":"link5",active:n.value=="link5"},{default:t(()=>a[17]||(a[17]=[i(" Link 5 ")])),_:1},8,["active"]),e(l,{"item-id":"link6",active:n.value=="link6"},{default:t(()=>a[18]||(a[18]=[i(" Link 6 ")])),_:1},8,["active"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["dark"])]),_:1})}}});export{_ as default};
