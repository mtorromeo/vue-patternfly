<template>
  <pf-title v-if="title" h="3">{{ title }}</pf-title>

  <slot name="intro" />

  <section class="story-canvas">
    <div class="canvas" :class="{ dark }">
      <div class="inner-canvas" v-bind="$attrs" :style="{ 'max-width': maxWidth }">
        <slot />
      </div>
    </div>

    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="language-vue" v-html="highlighted" />
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
  background-color: var(--pf-c-page__main-section--m-light-100--BackgroundColor);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: none;
}

.story-canvas .canvas.dark {
  background-color: var(--pf-global--BackgroundColor--dark-300);
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
</style>

<script lang="ts">
import { computedAsync } from '@vueuse/core';
import { getHighlighter, type Highlighter, setWasm } from 'shiki';
import theme from 'shiki/themes/nord.json';
import { defineComponent } from 'vue';

let highlighter: Highlighter;

export default defineComponent({
  name: 'StoryCanvas',

  props: {
    source: String,
    title: String,
    dark: Boolean,
    maxWidth: String,
  },

  setup(props) {
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

    return {
      highlighted,
    };
  },
});
</script>
