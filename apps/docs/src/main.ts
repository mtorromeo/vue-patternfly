import '@patternfly/patternfly/patternfly.css';
import '@patternfly/patternfly/patternfly-addons.css';
import '@patternfly/patternfly/patternfly-charts.css';
import './index.css';

import { createApp } from 'vue';
import VuePatternFly from '@vue-patternfly/core';
import VuePatternFlyTable from '@vue-patternfly/table';
import VuePatternFlyCharts from '@vue-patternfly/charts';
import VuePatternFlyDragDrop from '@vue-patternfly/drag-drop';

import router from './router';
import appGlobals from './app-globals';
import App from './App.vue';
import { createPinia } from 'pinia';

const app = createApp(App);
app.use(createPinia());
app.use(VuePatternFly);
app.use(VuePatternFlyTable);
app.use(VuePatternFlyCharts);
app.use(VuePatternFlyDragDrop);
app.use(router);
app.use(appGlobals);
app.mount('#app');
