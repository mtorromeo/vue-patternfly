<template>
  <doc-page title="Expandable Section">
    <component-title name="pf-expandable-section" />

    <story-canvas title="Basic">
      <pf-expandable-section v-model:expanded="expanded1" toggle-text-expanded="Show less" toggle-text-collapsed="Show more">
        This content is visible only when the component is expanded.
      </pf-expandable-section>
    </story-canvas>

    <story-canvas title="Managed">
      <pf-expandable-section toggle-text-expanded="Show less" toggle-text-collapsed="Show more">
        This content is visible only when the component is expanded.
      </pf-expandable-section>
    </story-canvas>

    <story-canvas title="Detached">
      <pf-stack gutter>
        <pf-stack-item>
          <pf-expandable-section v-model:expanded="expanded2" detached content-id="detached-toggle-content">
            This content is visible only when the component is expanded.
          </pf-expandable-section>
        </pf-stack-item>
        <pf-stack-item>
          <pf-expandable-section-toggle v-model:expanded="expanded2" direction="up" content-id="detached-toggle-content">
            <template v-if="expanded2">Show less</template>
            <template v-else>Show more</template>
          </pf-expandable-section-toggle>
        </pf-stack-item>
      </pf-stack>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const expanded1 = ref(false);
const expanded2 = ref(false);
</script>
