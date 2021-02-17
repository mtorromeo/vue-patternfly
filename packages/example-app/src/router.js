import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import LayoutsPage from './pages/LayoutsPage.vue';

import AccordionPage from './pages/AccordionPage.vue';
import AlertGroupPage from './pages/AlertGroupPage.vue';
import AlertPage from './pages/AlertPage.vue';
import BadgePage from './pages/BadgePage.vue';
import ButtonPage from './pages/ButtonPage.vue';
import ChipGroupPage from './pages/ChipGroupPage.vue';
import DropdownPage from './pages/DropdownPage.vue';
import LabelPage from './pages/LabelPage.vue';
import PaginationPage from './pages/PaginationPage.vue';
import SpinnerPage from './pages/SpinnerPage.vue';
import SwitchPage from './pages/SwitchPage.vue';
import TextInputPage from './pages/TextInputPage.vue';
import TitlePage from './pages/TitlePage.vue';
import ToolbarPage from './pages/ToolbarPage.vue';

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
    name: 'accordion',
    path: '/accordion',
    component: AccordionPage,
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
    name: 'text-input',
    path: '/text-input',
    component: TextInputPage,
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
