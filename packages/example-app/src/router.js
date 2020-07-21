import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './components/HomePage.vue';
import LayoutsPage from './components/LayoutsPage.vue';
import LabelPage from './components/LabelPage.vue';
import DropdownPage from './components/DropdownPage.vue';
import TitlePage from './components/TitlePage.vue';
import SpinnerPage from './components/SpinnerPage.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [{
    name: 'home',
    path: '/',
    component: HomePage,
  }, {
    name: 'layouts',
    path: '/layouts',
    component: LayoutsPage,
  }, {
    name: 'dropdown',
    path: '/dropdown',
    component: DropdownPage,
  }, {
    name: 'label',
    path: '/label',
    component: LabelPage,
  }, {
    name: 'title',
    path: '/title',
    component: TitlePage,
  }, {
    name: 'spinner',
    path: '/spinner',
    component: SpinnerPage,
  }],
});
