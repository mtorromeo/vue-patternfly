import '@patternfly/patternfly/patternfly.css';
import './index.css';

import { createApp } from 'vue';
import VuePatternFly from '@vue-patternfly/core';

import router from './router';
import appGlobals from './app-globals';
import App from './App.vue';

const app = createApp(App);
app.use(VuePatternFly);
app.use(router);
app.use(appGlobals);
app.mount('#app');
