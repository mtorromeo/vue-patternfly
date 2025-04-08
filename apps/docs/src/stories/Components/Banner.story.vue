<template>
  <doc-page title="Banner">
    <template #description>A <b>banner</b> is a 1-line, full color, full width container that can be used to communicate short snippets of information to users. Banners are un-intrusive and non-dismissible.</template>

    <template #apidocs>
      <component-info src="packages/core/src/components/Banner.vue" />
    </template>

    <story-canvas title="Basic">
      <pf-banner>Default banner</pf-banner>
      <br>
      <pf-banner variant="blue">Blue banner</pf-banner>
      <br>
      <pf-banner variant="red">Red banner</pf-banner>
      <br>
      <pf-banner variant="green">Green banner</pf-banner>
      <br>
      <pf-banner variant="gold">Gold banner</pf-banner>
    </story-canvas>

    <story-canvas title="Status">
      <pf-banner screen-reader-text="Default banner">
        <pf-flex space-items="sm">
          <pf-flex-item>
            <bell-icon />
          </pf-flex-item>
          <pf-flex-item>Default banner</pf-flex-item>
        </pf-flex>
      </pf-banner>
      <br>
      <pf-banner variant="blue" screen-reader-text="Blue banner">
        <pf-flex space-items="sm">
          <pf-flex-item>
            <circle-info-icon />
          </pf-flex-item>
          <pf-flex-item>Blue banner</pf-flex-item>
        </pf-flex>
      </pf-banner>
      <br>
      <pf-banner variant="red" screen-reader-text="Red banner">
        <pf-flex space-items="sm">
          <pf-flex-item>
            <circle-exclamation-icon />
          </pf-flex-item>
          <pf-flex-item>Red banner</pf-flex-item>
        </pf-flex>
      </pf-banner>
      <br>
      <pf-banner variant="green" screen-reader-text="Green banner">
        <pf-flex space-items="sm">
          <pf-flex-item>
            <circle-check-icon />
          </pf-flex-item>
          <pf-flex-item>Green banner</pf-flex-item>
        </pf-flex>
      </pf-banner>
      <br>
      <pf-banner variant="gold" screen-reader-text="Gold banner">
        <pf-flex space-items="sm">
          <pf-flex-item>
            <triangle-exclamation-icon />
          </pf-flex-item>
          <pf-flex-item>Gold banner</pf-flex-item>
        </pf-flex>
      </pf-banner>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import BellIcon from '@vue-patternfly/icons/bell-icon';
import CircleInfoIcon from '@vue-patternfly/icons/circle-info-icon';
import CircleExclamationIcon from '@vue-patternfly/icons/circle-exclamation-icon';
import CircleCheckIcon from '@vue-patternfly/icons/circle-check-icon';
import TriangleExclamationIcon from '@vue-patternfly/icons/triangle-exclamation-icon';
</script>
