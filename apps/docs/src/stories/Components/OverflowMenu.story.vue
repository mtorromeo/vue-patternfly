<template>
  <doc-page title="Overflow Menu">
    <template #description>An <b>overflow menu</b> groups a set of actions in a responsive horizontal list to help declutter an interface. Actions can be set to persist or collapse into a kebab as the viewpoint shrinks. Overflow menus are useful in toolbars or other places where a group of actions is required.</template>

    <template #apidocs>
      <component-info src="packages/core/src/components/OverflowMenu/OverflowMenu.vue" />
      <component-info src="packages/core/src/components/OverflowMenu/OverflowMenuContent.vue" />
      <component-info src="packages/core/src/components/OverflowMenu/OverflowMenuControl.vue" />
      <component-info src="packages/core/src/components/OverflowMenu/OverflowMenuDropdownItem.vue" />
      <component-info src="packages/core/src/components/OverflowMenu/OverflowMenuGroup.vue" />
      <component-info src="packages/core/src/components/OverflowMenu/OverflowMenuItem.vue" />
    </template>

    <story-canvas title="Default" style="min-height: 350px">
      <pf-overflow-menu breakpoint="lg">
        <pf-overflow-menu-content>
          <pf-overflow-menu-item>Item 1</pf-overflow-menu-item>
          <pf-overflow-menu-item>Item 2</pf-overflow-menu-item>
          <pf-overflow-menu-group>
            <pf-overflow-menu-item>Item 3</pf-overflow-menu-item>
            <pf-overflow-menu-item>Item 4</pf-overflow-menu-item>
            <pf-overflow-menu-item>Item 5</pf-overflow-menu-item>
          </pf-overflow-menu-group>
        </pf-overflow-menu-content>
        <pf-overflow-menu-control>
          <pf-dropdown v-model:open="open">
            <template #toggle>
              <pf-menu-toggle variant="plain">
                <ellipsis-vertical-icon />
              </pf-menu-toggle>
            </template>
            <pf-overflow-menu-dropdown-item shared>Item 1</pf-overflow-menu-dropdown-item>
            <pf-overflow-menu-dropdown-item shared>Item 2</pf-overflow-menu-dropdown-item>
            <pf-overflow-menu-dropdown-item shared>Item 3</pf-overflow-menu-dropdown-item>
            <pf-overflow-menu-dropdown-item shared>Item 4</pf-overflow-menu-dropdown-item>
            <pf-overflow-menu-dropdown-item shared>Item 5</pf-overflow-menu-dropdown-item>
          </pf-dropdown>
        </pf-overflow-menu-control>
      </pf-overflow-menu>
    </story-canvas>

    <story-canvas title="Persistent" style="min-height: 350px">
      <pf-overflow-menu breakpoint="lg">
        <pf-overflow-menu-content persistent>
          <pf-overflow-menu-group type="button" persistent>
            <pf-overflow-menu-item persistent>
              <pf-button variant="primary">Primary</pf-button>
            </pf-overflow-menu-item>
            <pf-overflow-menu-item>
              <pf-button variant="secondary">Secondary</pf-button>
            </pf-overflow-menu-item>
            <pf-overflow-menu-item>
              <pf-button variant="tertiary">Tertiary</pf-button>
            </pf-overflow-menu-item>
          </pf-overflow-menu-group>
          <pf-overflow-menu-group type="icon" persistent>
            <pf-overflow-menu-item persistent>
              <pf-button variant="plain"><align-left-icon /></pf-button>
            </pf-overflow-menu-item>
            <pf-overflow-menu-item persistent>
              <pf-button variant="plain"><align-center-icon /></pf-button>
            </pf-overflow-menu-item>
            <pf-overflow-menu-item persistent>
              <pf-button variant="plain"><align-right-icon /></pf-button>
            </pf-overflow-menu-item>
          </pf-overflow-menu-group>
        </pf-overflow-menu-content>
        <pf-overflow-menu-control additional-options>
          <pf-dropdown v-model:open="open">
            <template #toggle>
              <pf-menu-toggle variant="plain">
                <ellipsis-vertical-icon />
              </pf-menu-toggle>
            </template>
            <pf-overflow-menu-dropdown-item shared>Secondary</pf-overflow-menu-dropdown-item>
            <pf-overflow-menu-dropdown-item shared>Tertiary</pf-overflow-menu-dropdown-item>
            <pf-overflow-menu-dropdown-item>Action 4</pf-overflow-menu-dropdown-item>
          </pf-dropdown>
        </pf-overflow-menu-control>
      </pf-overflow-menu>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import AlignLeftIcon from '@vue-patternfly/icons/align-left-icon';
import AlignCenterIcon from "@vue-patternfly/icons/align-center-icon";
import AlignRightIcon from "@vue-patternfly/icons/align-right-icon";
import EllipsisVerticalIcon from '@vue-patternfly/icons/ellipsis-vertical-icon';
import { ref } from "vue";

const open = ref(false);
</script>
