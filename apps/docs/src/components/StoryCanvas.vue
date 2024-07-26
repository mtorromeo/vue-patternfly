<template>
  <pf-title v-if="title" :h="3">{{ title }}</pf-title>

  <slot name="intro" />

  <section class="story-canvas">
    <div class="canvas" :class="{ dark }">
      <div class="inner-canvas" v-bind="$attrs" :style="{ 'max-width': maxWidth, 'height': iframeRoute?.name && !$slots.default ? height ?? '450px' : height }">
        <slot>
          <iframe v-if="iframeRoute?.name" :style="{ width: '800px', height: '100%' }" :src="$router.resolve({name: iframeRoute.name}).href" />
          <component :is="ExampleComponent" v-else-if="ExampleComponent" />
        </slot>
      </div>
    </div>

    <!-- eslint-disable-next-line vue/no-v-html -->
    <div style="position: relative">
      <div v-if="src" class="source-link">
        <pf-button :href="`https://github.com/mtorromeo/vue-patternfly/tree/master/apps/docs/src/${storySrc}`" variant="link" title="Full source code" target="_blank">
          <github-icon />
        </pf-button>
      </div>
      <div class="language-vue" v-html="highlighted" />
    </div>
  </section>
</template>

<style>
.story-canvas {
  margin: 25px 0 40px;
}

.story-canvas .canvas {
  padding: 30px 20px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: var(--pf-v5-c-page__main-section--m-light-100--BackgroundColor);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: none;
}

.story-canvas .canvas.dark {
  background-color: var(--pf-v5-global--BackgroundColor--dark-300);
}

.story-canvas .language-vue {
  margin: 0;
}

.story-canvas .shiki {
  padding: 1.25rem 1.5rem;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  overflow-x: auto;
}

.story-canvas .source-link {
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--pf-v5-c-page__main-section--m-light-100--BackgroundColor);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 6px;
}

.inner-canvas > pre {
  white-space: pre-line;
}
</style>

<script lang="ts">
let highlighter: Highlighter;
</script>

<script lang="ts" setup>
import { computedAsync } from '@vueuse/core';
import { createHighlighter, type Highlighter } from 'shiki';
import { shallowRef, type HTMLAttributes } from 'vue';
import { useRouter } from 'vue-router';
import GithubIcon from '@vue-patternfly/icons/github-icon';

defineOptions({
  inheritAttrs: false,
});

interface Props extends /* @vue-ignore */ HTMLAttributes {
  src?: string;
  source?: string;
  title?: string;
  dark?: boolean;
  maxWidth?: string;
  height?: string;
}

const props = defineProps<Props>();

const ExampleComponent = shallowRef(undefined);
let storySrc = props.src;
if (storySrc) {
  const matches = /\.\/([^/]+)\.vue/.exec(storySrc);
  if (matches) {
    storySrc = `stories/Components/${matches[1]}.vue`;
    (async() => {
      ExampleComponent.value = (await import(`../stories/Components/${matches[1]}.vue`))['default'];
    })();
  }
}

const router = useRouter();
const iframeRoute = storySrc?.endsWith('.iframe.vue') ? router.getRoutes().find(r => r.meta.sourcePath === `./${storySrc}`) : undefined;

const highlighted = computedAsync(async() => {
  if (!props.source) {
    return '';
  }

  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ['nord'],
      langs: ['vue', 'vue-html'],
    });
  }

  return highlighter.codeToHtml(props.source.replaceAll('\\n', '\n').trim(), { lang: props.src ? 'vue' : 'vue-html', theme: 'nord' });
});
</script>
