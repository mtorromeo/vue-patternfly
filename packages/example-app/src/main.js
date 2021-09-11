import '@patternfly/patternfly/patternfly.css';
import './index.css';

import { createApp } from 'vue';
import VuePatternfly4 from '@vue-patternfly/core';

import router from './router';
import App from './App.vue';
import DocPage from './components/DocPage.vue';

const app = createApp(App);
app.use(VuePatternfly4);
app.use(router);
app.component('DocPage', DocPage);
app.mount('#app');
