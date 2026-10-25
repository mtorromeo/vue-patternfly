<template>
  <doc-page title="Breadcrumb">
    <template #description
      >A <b>breadcrumb</b> provides page context to help users navigate more efficiently and understand where they are
      in the application hierarchy.</template
    >

    <template #apidocs>
      <component-info name="PfBreadcrumb" />
      <component-info name="PfBreadcrumbItem" />
      <component-info name="PfBreadcrumbHeading" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - `href` renders a plain link and `to` a `router-link`: upstream's `to` is the `href` of a link.
      - Class and attributes of `pf-breadcrumb-item` and `pf-breadcrumb-heading` go on their link, or on the list item when there is no link; `li-attrs` sets attributes on the list item.
      - `active` replaces `isActive` and `dropdown` replaces `isDropdown`.
      - The `link` slot, with the `class` and `ariaCurrent` to apply, replaces the `render` prop of `pf-breadcrumb-item`.

      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-breadcrumb ouia-id="BasicBreadcrumb">
        <pf-breadcrumb-item href="#">Section home</pf-breadcrumb-item>
        <pf-breadcrumb-item href="#">Section title</pf-breadcrumb-item>
        <pf-breadcrumb-item href="#">Section title</pf-breadcrumb-item>
        <pf-breadcrumb-item href="#" active>Section landing</pf-breadcrumb-item>
      </pf-breadcrumb>
    </story-canvas>

    <story-canvas title="Without home link">
      <pf-breadcrumb>
        <pf-breadcrumb-item>Section Home</pf-breadcrumb-item>
        <pf-breadcrumb-item href="#">Section title</pf-breadcrumb-item>
        <pf-breadcrumb-item href="#">Section title</pf-breadcrumb-item>
        <pf-breadcrumb-item href="#">Section title</pf-breadcrumb-item>
        <pf-breadcrumb-item href="#">Section title</pf-breadcrumb-item>
        <pf-breadcrumb-item href="#" active>Section landing</pf-breadcrumb-item>
      </pf-breadcrumb>
    </story-canvas>

    <story-canvas title="With heading">
      <pf-breadcrumb>
        <pf-breadcrumb-item href="#">Section home</pf-breadcrumb-item>
        <pf-breadcrumb-item href="#">Section title</pf-breadcrumb-item>
        <pf-breadcrumb-item href="#">Section title</pf-breadcrumb-item>
        <pf-breadcrumb-item href="#">Section title</pf-breadcrumb-item>
        <pf-breadcrumb-heading href="#">Section title</pf-breadcrumb-heading>
      </pf-breadcrumb>
    </story-canvas>

    <story-canvas title="With dropdown">
      <pf-breadcrumb>
        <pf-breadcrumb-item component="button">Section home</pf-breadcrumb-item>
        <pf-breadcrumb-item dropdown>
          <pf-dropdown v-model:open="dropdownOpen">
            <template #toggle>
              <pf-menu-toggle small variant="plainText">
                <template #badge>
                  <pf-badge read screen-reader-text="additional items">{{ dropdownItems.length }}</pf-badge>
                </template>
              </pf-menu-toggle>
            </template>
            <pf-dropdown-item v-for="item in dropdownItems" :key="item">
              <template #icon>
                <pf-icon should-mirror-r-t-l>
                  <angle-left-icon />
                </pf-icon>
              </template>
              {{ item }}
            </pf-dropdown-item>
          </pf-dropdown>
        </pf-breadcrumb-item>
        <pf-breadcrumb-heading component="button">Section title</pf-breadcrumb-heading>
      </pf-breadcrumb>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import AngleLeftIcon from '@vue-patternfly/icons/angle-left-icon';

const dropdownOpen = ref(false);
const dropdownItems = ['Edit', 'Deployment', 'Applications'];
</script>
