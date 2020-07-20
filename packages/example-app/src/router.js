import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/Home.vue';
import Layouts from './components/Layouts.vue';

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
  }],
});
