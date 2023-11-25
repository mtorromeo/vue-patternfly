import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';

const storyComponents = import.meta.glob('./stories/**/*.story.vue');
const storyFrameComponents = import.meta.glob('./stories/**/*.iframe.vue');

type StoryPage = {
  route: string;
  title: string;
};

const pathToTitle = (path: string) => path.replace(/\B[A-Z]/g, m => " " + m.toLowerCase());
const pathToDashed = (path: string) => path.replace(/[A-Z]/g, m => "-" + m.toLowerCase()).replaceAll(/^-+|-+$/g, '');

export const stories: Record<string, StoryPage[]> = {
  Overview: [],
  Components: [],
  Layouts: [],
};

const defaultRoute = 'introduction';

const routes: RouteRecordRaw[] = [];
for (const story in storyComponents) {
  const match = story.match(/^\.\/stories\/(?:([^/]+)\/)?([^/]+)\.story\.vue$/);
  if (!match) {
    continue;
  }

  const category = match[1];
  const name = pathToDashed(match[2]);

  if (!(category in stories)) {
    stories[category] = [];
  }

  stories[category].push({
    route: name,
    title: pathToTitle(match[2]),
  });
  routes.push({
    name,
    path: name === defaultRoute ? '/' : `/stories/${pathToDashed(category)}/${name}/:mainTab(story|apidocs)?`,
    component: storyComponents[story],
  });
}

for (const frame in storyFrameComponents) {
  const match = frame.match(/^\.\/stories\/(?:([^/]+)\/)?([^/]+)\.iframe\.vue$/);
  if (!match) {
    continue;
  }

  const category = match[1];
  const name = `${pathToDashed(match[2])}.iframe`;

  routes.push({
    name,
    path: name === defaultRoute ? '/' : `/stories/${pathToDashed(category)}/${name}.iframe`,
    component: storyFrameComponents[frame],
    meta: {
      sourcePath: frame,
      iframe: true,
    },
  });
}

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
