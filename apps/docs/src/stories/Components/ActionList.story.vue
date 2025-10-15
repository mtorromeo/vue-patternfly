<template>
  <doc-page title="Action List">
    <template #description>
      <pre v-md>An **action list** is a group of actions, controls, or buttons with set spacing.</pre>
    </template>

    <template #apidocs>
      <component-info src="packages/core/src/components/ActionList.vue" />
      <component-info src="packages/core/src/components/ActionListGroup.vue" />
      <component-info src="packages/core/src/components/ActionListItem.vue" />
    </template>

    <story-canvas title="Action list single group">
      <pf-action-list>
        <pf-action-list-item>
          <pf-button variant="primary">Next</pf-button>
        </pf-action-list-item>
        <pf-action-list-item>
          <pf-button variant="secondary">Back</pf-button>
        </pf-action-list-item>
      </pf-action-list>
    </story-canvas>

    <story-canvas title="Action list single group with kebab">
      <pf-action-list>
        <pf-action-list-item>
          <pf-button variant="primary">Next</pf-button>
        </pf-action-list-item>
        <pf-action-list-item>
          <pf-button variant="secondary">Back</pf-button>
        </pf-action-list-item>
        <pf-action-list-item>
          <pf-dropdown>
            <template #toggle>
              <pf-menu-toggle variant="plain">
                <ellipsis-vertical-icon />
              </pf-menu-toggle>
            </template>

            <pf-dropdown-item>Link</pf-dropdown-item>
            <pf-dropdown-item component="button">Action</pf-dropdown-item>
            <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
            <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
            <pf-divider />
            <pf-dropdown-item>Separated Link</pf-dropdown-item>
            <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
          </pf-dropdown>
        </pf-action-list-item>
      </pf-action-list>
    </story-canvas>

    <story-canvas title="Action list with icons">
      <pf-action-list icon-list>
        <pf-action-list-item>
          <pf-button variant="plain">
            <template #icon>
              <x-icon />
            </template>
          </pf-button>
        </pf-action-list-item>
        <pf-action-list-item>
          <pf-button variant="plain">
            <template #icon>
              <check-icon />
            </template>
          </pf-button>
        </pf-action-list-item>
      </pf-action-list>
    </story-canvas>

    <story-canvas title="Action list multiple groups">
      <pf-action-list>
        <pf-action-list-group>
          <pf-action-list-item>
            <pf-button variant="primary">Next</pf-button>
          </pf-action-list-item>
          <pf-action-list-item>
            <pf-button variant="secondary">Back</pf-button>
          </pf-action-list-item>
        </pf-action-list-group>
        <pf-action-list-group>
          <pf-action-list-item>
            <pf-button variant="primary">Submit</pf-button>
          </pf-action-list-item>
          <pf-action-list-item>
            <pf-button variant="secondary">Cancel</pf-button>
          </pf-action-list-item>
        </pf-action-list-group>
      </pf-action-list>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import EllipsisVerticalIcon from '@vue-patternfly/icons/ellipsis-vertical-icon';
import XIcon from '@vue-patternfly/icons/x-icon';
import CheckIcon from '@vue-patternfly/icons/check-icon';
</script>
