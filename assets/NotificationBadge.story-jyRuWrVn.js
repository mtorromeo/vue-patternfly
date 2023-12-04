import{_ as r,a as o,o as l,c as f,w as e,b as c,d as a,e as t}from"./index-jISOFsdf.js";const p={},u=t("b",null,"notification badge",-1),m=t("div",{class:"markdown pf-v5-c-content"},[t("h2",{class:"pf-v5-c-title"},"Examples")],-1);function g(_,b){const s=o("component-info"),n=o("pf-notification-badge"),i=o("story-canvas"),d=o("doc-page");return l(),f(d,{name:"Components/NotificationBadge.story.vue",title:"Notification Badge"},{description:e(()=>[c("A "),u,c(" is intended to be used with a notification drawer as a visible indicator to alert the user about incoming notifications.")]),apidocs:e(()=>[a(s,{src:"packages/core/src/components/NotificationBadge.vue",doc:{name:"PfNotificationBadge",exportName:"default",displayName:"NotificationBadge",description:"",tags:{},props:[{name:"variant",description:"Determines the variant of the notification badge",required:!1,type:{name:"union",elements:[{name:'"read"'},{name:'"unread"'},{name:'"attention"'}]},defaultValue:{func:!1,value:"'unread'"}},{name:"count",description:"A number displayed in the badge alongside the icon",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"expanded",description:`Flag for applying expanded styling and setting the aria-expanded attribute on the
notification badge.`,required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/NotificationBadge.vue"]}},null,8,["doc"])]),default:e(()=>[m,a(i,{title:"Basic",style:{"background-color":"var(--pf-v5-global--BackgroundColor--dark-100)"},source:"<pf-notification-badge />"},{default:e(()=>[a(n)]),_:1}),a(i,{title:"With count",style:{"background-color":"var(--pf-v5-global--BackgroundColor--dark-100)"},source:'<pf-notification-badge :count="30" />'},{default:e(()=>[a(n,{count:30})]),_:1})]),_:1},8,["name"])}const h=r(p,[["render",g]]);export{h as default};
