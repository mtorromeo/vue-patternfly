import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import IntroductionPage from './pages/IntroductionPage.vue';
import LayoutsPage from './pages/LayoutsPage.vue';

const storyComponents = import.meta.glob('./stories/**/*.story.vue');

type StoryPage = {
  route: string;
  title: string;
};

const routes: RouteRecordRaw[] = [];
export const stories: StoryPage[] = [];

for (const story in storyComponents) {
  const match = story.match(/^\.\/stories\/(.*)\.story\.vue$/);
  if (match) {
    const name = match[1].replace(/[A-Z]/g, m => "-" + m.toLowerCase()).replaceAll(/^-+|-+$/g, '');
    const route = `${name}.story`;

    stories.push({
      route,
      title: match[1].replace(/\B[A-Z]/g, m => " " + m.toLowerCase()),
    });
    routes.push({
      name: route,
      path: `/stories/${name}`,
      component: storyComponents[story],
    });
  }
}

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    ...routes,
    {
      name: 'home',
      path: '/',
      component: IntroductionPage,
    },
    {
      name: 'layouts',
      path: '/layouts',
      component: LayoutsPage,
    },
  ],
});
