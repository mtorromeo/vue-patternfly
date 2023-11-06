<template>
  <doc-page title="Hint">
    <component-title name="pf-hint" />

    <pre v-md>
      A **hint** is in-app messaging that provides a one-step reminder, explanation, or call to action for a page or modal.
      See full [design guidelines](https://www.patternfly.org/components/hint/design-guidelines) on the official patternfly documentation.

      ## Examples
    </pre>

    <story-canvas title="Example">
      <pf-hint>
        <template #actions>
          <pf-dropdown position="right">
            <template #toggle>
              <pf-menu-toggle variant="plain">
                <ellipsis-vertical-icon />
              </pf-menu-toggle>
            </template>
            <pf-dropdown-item>Action 1</pf-dropdown-item>
            <pf-dropdown-item>Action 2</pf-dropdown-item>
            <pf-divider component="li" />
            <pf-dropdown-item>Action 3</pf-dropdown-item>
          </pf-dropdown>
        </template>
        <pf-hint-title>Do more with Find it Fix it capabilities</pf-hint-title>
        <pf-hint-body>Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.</pf-hint-body>
        <pf-hint-footer>
          <pf-button variant="link" inline>Try it for 90 days</pf-button>
        </pf-hint-footer>
      </pf-hint>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import EllipsisVerticalIcon from '@vue-patternfly/icons/ellipsis-vertical-icon';
</script>
