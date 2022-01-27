import '@patternfly/patternfly/patternfly.css';
import './index.css';

import { createApp } from 'vue';
import VuePatternfly4 from '@vue-patternfly/core';

import router from './router';
import App from './App.vue';
import DocPage from './components/DocPage.vue';
import ComponentTitle from './components/ComponentTitle.vue';
import StoryCanvas from './components/StoryCanvas.vue';

const app = createApp(App);
app.use(VuePatternfly4);
app.use(router);
app.component('DocPage', DocPage);
app.component('ComponentTitle', ComponentTitle);
app.component('StoryCanvas', StoryCanvas);
app.mount('#app');
