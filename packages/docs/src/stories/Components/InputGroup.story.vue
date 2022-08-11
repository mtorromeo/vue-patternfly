<template>
  <doc-page title="Input Group">
    <component-title name="pf-input-group" />

    <story-canvas title="Default">
      <pf-input-group>
        <pf-text-input type="email" />
        <pf-input-group-text>@example.com</pf-input-group-text>
      </pf-input-group>
    </story-canvas>

    <story-canvas title="With pre icon">
      <pf-input-group>
        <pf-input-group-text>
          <at-icon />
        </pf-input-group-text>
        <pf-text-input type="email" />
      </pf-input-group>
    </story-canvas>

    <story-canvas title="With post icon">
      <pf-input-group>
        <pf-text-input type="search" />
        <pf-input-group-text>
          <magnifying-glass-icon />
        </pf-input-group-text>
      </pf-input-group>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import AtIcon from "@vue-patternfly/icons/dist/esm/icons/at-icon";
import MagnifyingGlassIcon from "@vue-patternfly/icons/dist/esm/icons/magnifying-glass-icon";
</script>
