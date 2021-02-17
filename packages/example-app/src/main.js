import { createApp } from 'vue';
import App from './App.vue';
import VuePatternfly4 from '@vue-patternfly4/core';
import router from './router';

import DocPage from './components/DocPage.vue';

import '@vue-patternfly4/core/dist/core.umd.css';
import './index.css';

const app = createApp(App);
app.use(VuePatternfly4);
app.use(router);
app.component('DocPage', DocPage);
app.mount('#app');
