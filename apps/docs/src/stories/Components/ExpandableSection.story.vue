<template>
  <doc-page title="Expandable Section">
    <template #description>An <b>expandable section</b> component is used to support progressive disclosure in a form or page by hiding additional content when you don't want it to be shown by default. An expandable section can contain any type of content such as plain text, form inputs, and charts.</template>

    <template #apidocs>
      <component-info name="PfExpandableSection" />
      <component-info name="PfExpandableSectionToggle" />
    </template>

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

    <story-canvas title="Truncate expansion">
      <pf-expandable-section toggle-text-expanded="Show less" toggle-text-collapsed="Show more" :truncate="3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec dignissim turpis, et tristique purus.
        Phasellus efficitur ante quis dolor viverra imperdiet. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Pellentesque laoreet, sem ac elementum semper, lectus mauris vestibulum nulla,
        eget volutpat massa neque vel turpis. Donec finibus enim eu leo accumsan consectetur. Praesent massa diam,
        tincidunt eu dui ac, ullamcorper elementum est. Phasellus metus felis, venenatis vitae semper nec, porta a metus.
        Vestibulum justo nisi, imperdiet id eleifend at, varius nec lorem. Fusce porttitor mollis nibh, ut elementum ante
        commodo tincidunt. Integer tincidunt at ipsum non aliquet.
      </pf-expandable-section>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const expanded1 = ref(false);
const expanded2 = ref(false);
</script>
