<template>
  <doc-page title="Empty State">
    <component-title name="pf-empty-state" />

    <story-canvas title="Example">
      <pf-empty-state>
        <pf-empty-state-icon>
          <cubes-icon />
        </pf-empty-state-icon>
        <pf-title size="lg">Empty state</pf-title>
        <pf-empty-state-body>
          This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.
        </pf-empty-state-body>
        <pf-button variant="primary">Primary action</pf-button>
        <pf-empty-state-secondary-actions>
          <pf-button variant="link">Multiple</pf-button>
          <pf-button variant="link">Action Buttons</pf-button>
          <pf-button variant="link">Can</pf-button>
          <pf-button variant="link">Go here</pf-button>
          <pf-button variant="link">In the secondary</pf-button>
          <pf-button variant="link">Action area</pf-button>
        </pf-empty-state-secondary-actions>
      </pf-empty-state>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import CubesIcon from "@vue-patternfly/icons/cubes-icon";
</script>
