<template>
  <doc-page title="List">
    <template #description>A <b>list</b> component embeds a formatted list (bulleted or numbered list) into page content.</template>

    <template #apidocs>
      <component-info name="PfList" />
      <component-info name="PfListItem" />
    </template>

    <pre v-md>
      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-list>
        <pf-list-item>First</pf-list-item>
        <pf-list-item>Second</pf-list-item>
        <pf-list-item>Third</pf-list-item>
      </pf-list>
    </story-canvas>

    <story-canvas title="Inline">
      <pf-list variant="inline">
        <pf-list-item>First</pf-list-item>
        <pf-list-item>Second</pf-list-item>
        <pf-list-item>Third</pf-list-item>
      </pf-list>
    </story-canvas>

    <story-canvas title="Ordered">
      <pf-list component="ol">
        <pf-list-item>First</pf-list-item>
        <pf-list-item>Second</pf-list-item>
        <pf-list-item>Third</pf-list-item>
      </pf-list>
    </story-canvas>

    <story-canvas title="Plain">
      <pf-list plain>
        <pf-list-item>First</pf-list-item>
        <pf-list-item>Second</pf-list-item>
        <pf-list-item>Third</pf-list-item>
      </pf-list>
    </story-canvas>

    <story-canvas title="With horizontal rules">
      <pf-list plain bordered>
        <pf-list-item>First</pf-list-item>
        <pf-list-item>Second</pf-list-item>
        <pf-list-item>Third</pf-list-item>
      </pf-list>
    </story-canvas>

    <story-canvas title="With icons">
      <pf-list plain>
        <pf-list-item><template #icon><book-open-icon /></template> First</pf-list-item>
        <pf-list-item><template #icon><key-icon /></template> Second</pf-list-item>
        <pf-list-item><template #icon><desktop-icon /></template> Third</pf-list-item>
      </pf-list>
    </story-canvas>

    <story-canvas title="With large icons">
      <pf-list plain icon-size="large">
        <pf-list-item><template #icon><book-open-icon /></template> First</pf-list-item>
        <pf-list-item><template #icon><key-icon /></template> Second</pf-list-item>
        <pf-list-item><template #icon><desktop-icon /></template> Third</pf-list-item>
      </pf-list>
    </story-canvas>
  </doc-page>
</template>

<script setup lang="ts">
import BookOpenIcon from '@vue-patternfly/icons/book-open-icon';
import KeyIcon from '@vue-patternfly/icons/key-icon';
import DesktopIcon from '@vue-patternfly/icons/desktop-icon';
</script>
