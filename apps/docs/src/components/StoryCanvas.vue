<template>
  <pf-title v-if="title" :h="3">{{ title }}</pf-title>

  <slot name="intro" />

  <section class="story-canvas">
    <div class="canvas" :class="{ dark }">
      <div class="inner-canvas" v-bind="$attrs" :style="{ 'max-width': maxWidth }">
        <slot>
          <iframe v-if="iframeRoute?.name" style="width: 800px; height: 450px" :src="$router.resolve({name: iframeRoute.name}).href" />
        </slot>
      </div>
    </div>

    <!-- eslint-disable-next-line vue/no-v-html -->
    <div style="position: relative">
      <div v-if="src" class="source-link">
        <pf-button :href="`https://github.com/mtorromeo/vue-patternfly/tree/master/apps/docs/src/${src}`" variant="link" title="Full source code" target="_blank">
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

<script lang="ts" setup>
import { computedAsync } from '@vueuse/core';
import { getHighlighter, type Highlighter, setWasm } from 'shiki';
import theme from 'shiki/themes/nord.json';
import type { HTMLAttributes } from 'vue';
import { useRouter } from 'vue-router';
import GithubIcon from '@vue-patternfly/icons/github-icon';

let highlighter: Highlighter;

defineOptions({
  inheritAttrs: false,
});

interface Props extends /* @vue-ignore */ HTMLAttributes {
  src?: string;
  source?: string;
  title?: string;
  dark?: boolean;
  maxWidth?: string;
}

const props = defineProps<Props>();

const router = useRouter();
const iframeRoute = router.getRoutes().find(r => r.meta.sourcePath === `./${props.src}`);

const highlighted = computedAsync(async() => {
  if (!props.source) {
    return '';
  }

  if (!highlighter) {
    setWasm(await fetch('./shiki/onig.wasm'));
    highlighter = await getHighlighter({
      themes: [theme as any],
      langs: ['vue-html'],
      paths: {
        languages: './shiki/',
      },
    });
  }

  return highlighter.codeToHtml(props.source.replaceAll('\\n', '\n').trim(), { lang: 'vue-html' });
});
</script>
