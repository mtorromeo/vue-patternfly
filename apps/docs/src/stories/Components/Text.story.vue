<template>
  <doc-page title="Text">
    <component-title name="pf-text" />

    <pre v-md>
      ## Examples
    </pre>

    <story-canvas title="Text">
      <pf-text>{{ sample_title }}</pf-text>
    </story-canvas>

    <story-canvas title="Text visited">
      <pf-text-content>
        <pf-text component="h3">Visited link example</pf-text>
        <pf-text component="p">
          <pf-text component="a" href="#">
            Visited link
          </pf-text>
        </pf-text>
      </pf-text-content>
      <br>
      <pf-text-content visited>
        <pf-text component="h3">Visited content example</pf-text>
        <pf-text component="p">
          <pf-text component="a" href="#">
            content link 1
          </pf-text>
        </pf-text>
        <pf-text component="p">
          <pf-text component="a" href="#">
            content link 2
          </pf-text>
        </pf-text>
        <pf-text component="p">
          <pf-text component="a" href="#">
            content link 3
          </pf-text>
        </pf-text>
      </pf-text-content>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const sample_title = ref('Title text');
</script>
