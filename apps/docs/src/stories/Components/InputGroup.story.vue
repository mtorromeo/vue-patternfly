<template>
  <doc-page title="Input Group">
    <component-title name="pf-input-group" />

    <story-canvas title="Default">
      <pf-input-group>
        <pf-input-group-item fill>
          <pf-text-input type="email" />
        </pf-input-group-item>
        <pf-input-group-text>@example.com</pf-input-group-text>
      </pf-input-group>
    </story-canvas>

    <story-canvas title="With pre icon">
      <pf-input-group>
        <pf-input-group-text>
          <at-icon />
        </pf-input-group-text>
        <pf-input-group-item>
          <pf-text-input type="email" />
        </pf-input-group-item>
      </pf-input-group>
    </story-canvas>

    <story-canvas title="With post icon">
      <pf-input-group>
        <pf-input-group-item>
          <pf-text-input type="search" />
        </pf-input-group-item>
        <pf-input-group-text>
          <magnifying-glass-icon />
        </pf-input-group-text>
      </pf-input-group>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import AtIcon from "@vue-patternfly/icons/at-icon";
import MagnifyingGlassIcon from "@vue-patternfly/icons/magnifying-glass-icon";
</script>
