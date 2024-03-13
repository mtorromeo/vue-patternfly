import{f as L,r as d,o as y,c as _,w as a,a as t,b as e,d as N,e as s}from"./index-DvV8UPZZ.js";const h=N("b",null,"navigation",-1),b=L({__name:"Navigation.story",setup(q){const i=d("link1"),u=d("dark"),v=d("default");function l(f,k,o){i.value=o}return(f,k)=>{const o=s("component-info"),n=s("pf-nav-item"),m=s("pf-nav-list"),c=s("pf-nav"),p=s("story-canvas"),r=s("pf-nav-group"),g=s("doc-page");return y(),_(g,{name:"Components/Navigation.story.vue",title:"Navigation"},{description:a(()=>[t("A "),h,t(" organizes an application's structure and content, making it easy to find information and accomplish tasks. Navigation communicates relationships, context, and actions a user can take within an application.")]),apidocs:a(()=>[e(o,{src:"packages/core/src/components/Nav/Nav.vue",doc:{name:"PfNav",exportName:"default",displayName:"Nav",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"theme",required:!1,type:{name:"union",elements:[{name:'"dark"'},{name:'"light"'}]},defaultValue:{func:!1,value:"'dark'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"horizontal"'},{name:'"tertiary"'},{name:'"horizontal-subnav"'},{name:'"subnav"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"ariaLabel",required:!1,type:{name:"string"}}],events:[{name:"select",type:{names:["Event"]}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Nav/Nav.vue"]}},null,8,["doc"]),e(o,{src:"packages/core/src/components/Nav/NavExpandable.vue",doc:{name:"PfNavExpandable",exportName:"default",displayName:"NavExpandable",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"title",required:!1,type:{name:"string"}},{name:"srText",required:!1,type:{name:"string"}},{name:"groupId",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"id",required:!1,type:{name:"string"}},{name:"active",required:!1,type:{name:"boolean"}},{name:"managed",required:!1,type:{name:"boolean"}},{name:"expanded",required:!1,type:{name:"boolean"}}],events:[{name:"update:expanded",type:{names:["boolean"]}}],slots:[{name:"title"},{name:"default"}],sourceFiles:["../../packages/core/src/components/Nav/NavExpandable.vue"]}},null,8,["doc"]),e(o,{src:"packages/core/src/components/Nav/NavGroup.vue",doc:{name:"PfNavGroup",exportName:"default",displayName:"NavGroup",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"title",required:!0,type:{name:"string"}},{name:"id",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"() => getUniqueId()"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Nav/NavGroup.vue"]}},null,8,["doc"]),e(o,{src:"packages/core/src/components/Nav/NavItem.vue",doc:{name:"PfNavItem",exportName:"default",displayName:"NavItem",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"component",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'li'"}},{name:"linkComponent",required:!1,type:{name:"string"}},{name:"groupId",required:!1,type:{name:"string"}},{name:"itemId",required:!1,type:{name:"string"}},{name:"active",required:!1,type:{name:"boolean"}},{name:"preventDefault",required:!1,type:{name:"boolean"}},{name:"itemClass",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"any"}]},{name:"Record",elements:[{name:"string"},{name:"boolean"}]}]}},{name:"itemAttrs",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"any"}]}},{name:"to",required:!1,type:{name:"RouteLocationRaw"}},{name:"tabindex",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}}],events:[{name:"showflyout"},{name:"select",type:{names:["Event"]}}],slots:[{name:"default"},{name:"flyout"}],sourceFiles:["../../packages/core/src/components/Nav/NavItem.vue"]}},null,8,["doc"]),e(o,{src:"packages/core/src/components/Nav/NavItemSeparator.vue",doc:{name:"PfNavItemSeparator",exportName:"default",displayName:"NavItemSeparator",description:"",tags:{},sourceFiles:["../../packages/core/src/components/Nav/NavItemSeparator.vue"]}},null,8,["doc"]),e(o,{src:"packages/core/src/components/Nav/NavList.vue",doc:{name:"PfNavList",exportName:"default",displayName:"NavList",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"ariaLeftScroll",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Scroll left'"}},{name:"ariaRightScroll",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Scroll right'"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Nav/NavList.vue"]}},null,8,["doc"])]),default:a(()=>[e(p,{title:"Default",dark:u.value!=="light"&&v.value!=="tertiary","max-width":"300px",source:`<pf-nav>
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
</pf-nav>`},{default:a(()=>[e(c,null,{default:a(()=>[e(m,null,{default:a(()=>[e(n,{"item-id":"link1",active:i.value=="link1",onSelect:l},{default:a(()=>[t(" Link 1 ")]),_:1},8,["active"]),e(n,{"item-id":"link2",active:i.value=="link2",onSelect:l},{default:a(()=>[t(" Link 2 ")]),_:1},8,["active"]),e(n,{"item-id":"link3",active:i.value=="link3",onSelect:l},{default:a(()=>[t(" Link 3 ")]),_:1},8,["active"]),e(n,{"item-id":"link4",active:i.value=="link4",onSelect:l},{default:a(()=>[t(" Link 4 ")]),_:1},8,["active"]),e(n,{"item-id":"link5",active:i.value=="link5",onSelect:l},{default:a(()=>[t(" Link 5 ")]),_:1},8,["active"])]),_:1})]),_:1})]),_:1},8,["dark"]),e(p,{title:"Grouped",dark:u.value!=="light"&&v.value!=="tertiary","max-width":"300px",source:`<pf-nav @select="selectLink">
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
</pf-nav>`},{default:a(()=>[e(c,{onSelect:l},{default:a(()=>[e(m,null,{default:a(()=>[e(r,{title:"Section title 1"},{default:a(()=>[e(n,{"item-id":"link1",active:i.value=="link1"},{default:a(()=>[t(" Link 1 ")]),_:1},8,["active"]),e(n,{"item-id":"link2",active:i.value=="link2"},{default:a(()=>[t(" Link 2 ")]),_:1},8,["active"]),e(n,{"item-id":"link3",active:i.value=="link3"},{default:a(()=>[t(" Link 3 ")]),_:1},8,["active"])]),_:1}),e(r,{title:"Section title 2"},{default:a(()=>[e(n,{"item-id":"link4",active:i.value=="link4"},{default:a(()=>[t(" Link 4 ")]),_:1},8,["active"]),e(n,{"item-id":"link5",active:i.value=="link5"},{default:a(()=>[t(" Link 5 ")]),_:1},8,["active"]),e(n,{"item-id":"link6",active:i.value=="link6"},{default:a(()=>[t(" Link 6 ")]),_:1},8,["active"])]),_:1})]),_:1})]),_:1})]),_:1},8,["dark"]),e(p,{title:"Flyout",dark:u.value!=="light"&&v.value!=="tertiary","max-width":"300px",source:`<pf-nav @select="selectLink">
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
</pf-nav>`},{default:a(()=>[e(c,{onSelect:l},{default:a(()=>[e(c,{onSelect:l},{default:a(()=>[e(m,null,{default:a(()=>[e(r,{title:"Section title 1"},{default:a(()=>[e(n,{"item-id":"link1",active:i.value=="link1"},{default:a(()=>[t(" Link 1 ")]),_:1},8,["active"]),e(n,{"item-id":"link2",active:i.value=="link2"},{default:a(()=>[t(" Link 2 ")]),_:1},8,["active"]),e(n,{"item-id":"link3",active:i.value=="link3"},{flyout:a(()=>[e(c,{variant:"subnav"},{default:a(()=>[e(m,null,{default:a(()=>[e(n,{"item-id":"link7",active:i.value=="link7"},{default:a(()=>[t(" Link 7 ")]),_:1},8,["active"])]),_:1})]),_:1})]),default:a(()=>[t(" Link 3 ")]),_:1},8,["active"])]),_:1}),e(r,{title:"Section title 2"},{default:a(()=>[e(n,{"item-id":"link4",active:i.value=="link4"},{default:a(()=>[t(" Link 4 ")]),_:1},8,["active"]),e(n,{"item-id":"link5",active:i.value=="link5"},{default:a(()=>[t(" Link 5 ")]),_:1},8,["active"]),e(n,{"item-id":"link6",active:i.value=="link6"},{default:a(()=>[t(" Link 6 ")]),_:1},8,["active"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["dark"])]),_:1},8,["name"])}}});export{b as default};
