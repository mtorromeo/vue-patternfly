import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from './components/HomePage.vue';
import LayoutsPage from './components/LayoutsPage.vue';

import BadgePage from './components/BadgePage.vue';
import ChipGroupPage from './components/ChipGroupPage.vue';
import DropdownPage from './components/DropdownPage.vue';
import LabelPage from './components/LabelPage.vue';
import SpinnerPage from './components/SpinnerPage.vue';
import TitlePage from './components/TitlePage.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [{
    name: 'home',
    path: '/',
    component: HomePage,
  }, {
    name: 'layouts',
    path: '/layouts',
    component: LayoutsPage,
  }, {
    name: 'badge',
    path: '/badge',
    component: BadgePage,
  }, {
    name: 'chipgroup',
    path: '/chipgroup',
    component: ChipGroupPage,
  }, {
    name: 'dropdown',
    path: '/dropdown',
    component: DropdownPage,
  }, {
    name: 'label',
    path: '/label',
    component: LabelPage,
  }, {
    name: 'spinner',
    path: '/spinner',
    component: SpinnerPage,
  }, {
    name: 'title',
    path: '/title',
    component: TitlePage,
  }],
});
