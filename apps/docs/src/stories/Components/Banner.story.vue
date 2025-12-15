<template>
  <doc-page title="Banner">
    <template #description>A <b>banner</b> is a 1-line, full color, full width container that can be used to communicate short snippets of information to users. Banners are un-intrusive and non-dismissible.</template>

    <template #apidocs>
      <component-info name="PfBanner" />
    </template>

    <story-canvas title="Basic">
      <pf-banner>Default banner</pf-banner>
      <br>
      <pf-banner color="red">Red banner</pf-banner>
      <br>
      <pf-banner color="orangered">Orangered banner</pf-banner>
      <br>
      <pf-banner color="orange">Orange banner</pf-banner>
      <br>
      <pf-banner color="yellow">Yellow banner</pf-banner>
      <br>
      <pf-banner color="green">Green banner</pf-banner>
      <br>
      <pf-banner color="teal">Teal banner</pf-banner>
      <br>
      <pf-banner color="blue">Blue banner</pf-banner>
      <br>
      <pf-banner color="purple">Purple banner</pf-banner>
    </story-canvas>

    <story-canvas title="Status">
      <pf-banner status="success" screen-reader-text="Success banner">
        <pf-flex space-items="sm">
          <pf-flex-item>
            <circle-check-icon />
          </pf-flex-item>
          <pf-flex-item>Success banner</pf-flex-item>
        </pf-flex>
      </pf-banner>
      <br>
      <pf-banner status="warning" screen-reader-text="Warning banner">
        <pf-flex space-items="sm">
          <pf-flex-item>
            <triangle-exclamation-icon />
          </pf-flex-item>
          <pf-flex-item>Warning banner</pf-flex-item>
        </pf-flex>
      </pf-banner>
      <br>
      <pf-banner status="danger" screen-reader-text="Danger banner">
        <pf-flex space-items="sm">
          <pf-flex-item>
            <circle-exclamation-icon />
          </pf-flex-item>
          <pf-flex-item>Danger banner</pf-flex-item>
        </pf-flex>
      </pf-banner>
      <br>
      <pf-banner status="info" screen-reader-text="Info banner">
        <pf-flex space-items="sm">
          <pf-flex-item>
            <circle-info-icon />
          </pf-flex-item>
          <pf-flex-item>Info banner</pf-flex-item>
        </pf-flex>
      </pf-banner>
      <br>
      <pf-banner status="custom" screen-reader-text="Custom banner">
        <pf-flex space-items="sm">
          <pf-flex-item>
            <triangle-exclamation-icon />
          </pf-flex-item>
          <pf-flex-item>Custom banner</pf-flex-item>
        </pf-flex>
      </pf-banner>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import CircleInfoIcon from '@vue-patternfly/icons/circle-info-icon';
import CircleExclamationIcon from '@vue-patternfly/icons/circle-exclamation-icon';
import CircleCheckIcon from '@vue-patternfly/icons/circle-check-icon';
import TriangleExclamationIcon from '@vue-patternfly/icons/triangle-exclamation-icon';
</script>
