import { createApp } from 'vue';
import App from './App.vue';
import VuePatternFly from '@vue-patternfly/core';
import router from './router';

import DocPage from './components/DocPage.vue';

import '@vue-patternfly/core/dist/core.umd.css';
import './index.css';

const app = createApp(App);
app.use(VuePatternFly);
app.use(router);
app.component('DocPage', DocPage);
app.mount('#app');
