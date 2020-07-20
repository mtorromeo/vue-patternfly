import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/Home.vue';
import Layouts from './components/Layouts.vue';
import Label from './components/Label.vue';
import Title from './components/Title.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [{
    name: 'home',
    path: '/',
    component: Home,
  }, {
    name: 'layouts',
    path: '/layouts',
    component: Layouts,
  }, {
    name: 'label',
    path: '/label',
    component: Label,
  }, {
    name: 'title',
    path: '/title',
    component: Title,
  }],
});
