<template>
  <doc-page title="Content">
    <template #description>A <b>content</b> component contains a block of styled HTML content.</template>

    <template #apidocs>
      <component-info src="packages/core/src/components/Content.vue" />
    </template>

    <pre v-md>
      ## Examples
    </pre>

    <story-canvas title="Text">
      <pf-content>{{ sample_title }}</pf-content>
    </story-canvas>

    <story-canvas title="Text visited">
      <pf-content>
        <pf-content component="h3">Visited link example</pf-content>
        <pf-content component="p">
          <pf-content component="a" href="#">
            Visited link
          </pf-content>
        </pf-content>
      </pf-content>
      <br>
      <pf-content visited>
        <pf-content component="h3">Visited content example</pf-content>
        <pf-content component="p">
          <pf-content component="a" href="#">
            content link 1
          </pf-content>
        </pf-content>
        <pf-content component="p">
          <pf-content component="a" href="#">
            content link 2
          </pf-content>
        </pf-content>
        <pf-content component="p">
          <pf-content component="a" href="#">
            content link 3
          </pf-content>
        </pf-content>
      </pf-content>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const sample_title = ref('Title text');
</script>
