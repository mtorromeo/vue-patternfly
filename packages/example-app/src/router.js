import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from './components/HomePage.vue';
import LayoutsPage from './components/LayoutsPage.vue';

import AlertGroupPage from './components/AlertGroupPage.vue';
import AlertPage from './components/AlertPage.vue';
import BadgePage from './components/BadgePage.vue';
import ButtonPage from './components/ButtonPage.vue';
import ChipGroupPage from './components/ChipGroupPage.vue';
import DropdownPage from './components/DropdownPage.vue';
import LabelPage from './components/LabelPage.vue';
import PaginationPage from './components/PaginationPage.vue';
import SpinnerPage from './components/SpinnerPage.vue';
import SwitchPage from './components/SwitchPage.vue';
import TitlePage from './components/TitlePage.vue';
import ToolbarPage from './components/ToolbarPage.vue';

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
    name: 'alert-group',
    path: '/alert-group',
    component: AlertGroupPage,
  }, {
    name: 'alert',
    path: '/alert',
    component: AlertPage,
  }, {
    name: 'badge',
    path: '/badge',
    component: BadgePage,
  }, {
    name: 'button',
    path: '/button',
    component: ButtonPage,
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
    name: 'pagination',
    path: '/pagination',
    component: PaginationPage,
  }, {
    name: 'spinner',
    path: '/spinner',
    component: SpinnerPage,
  }, {
    name: 'switch',
    path: '/switch',
    component: SwitchPage,
  }, {
    name: 'title',
    path: '/title',
    component: TitlePage,
  }, {
    name: 'toolbar',
    path: '/toolbar',
    component: ToolbarPage,
  }],
});
