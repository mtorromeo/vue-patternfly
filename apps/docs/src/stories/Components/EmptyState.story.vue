<template>
  <doc-page title="Empty State">
    <template #description>An <b>empty state</b> is a screen that is not yet populated with data or information. Empty states typically contain a short message and next steps for the user.</template>

    <template #apidocs>
      <component-info src="packages/core/src/components/EmptyState/EmptyState.vue" />
      <component-info src="packages/core/src/components/EmptyState/EmptyStateActions.vue" />
      <component-info src="packages/core/src/components/EmptyState/EmptyStateBody.vue" />
      <component-info src="packages/core/src/components/EmptyState/EmptyStateFooter.vue" />
      <component-info src="packages/core/src/components/EmptyState/EmptyStateHeader.vue" />
      <component-info src="packages/core/src/components/EmptyState/EmptyStateIcon.vue" />
    </template>

    <story-canvas title="Example">
      <pf-empty-state>
        <pf-empty-state-header title="Empty state">
          <template #icon>
            <cubes-icon />
          </template>
        </pf-empty-state-header>
        <pf-empty-state-body>
          This represents an the empty state pattern in Patternfly 5. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.
        </pf-empty-state-body>
        <pf-empty-state-footer>
          <pf-empty-state-actions>
            <pf-button variant="primary">Primary action</pf-button>
          </pf-empty-state-actions>
          <pf-empty-state-actions>
            <pf-button variant="link">Multiple</pf-button>
            <pf-button variant="link">Action Buttons</pf-button>
            <pf-button variant="link">Can</pf-button>
            <pf-button variant="link">Go here</pf-button>
            <pf-button variant="link">In the secondary</pf-button>
            <pf-button variant="link">Action area</pf-button>
          </pf-empty-state-actions>
        </pf-empty-state-footer>
      </pf-empty-state>
    </story-canvas>

    <story-canvas title="Spinner">
      <pf-empty-state>
        <pf-empty-state-header title="Loading" heading-level="h4">
          <template #icon>
            <pf-empty-state-icon>
              <pf-spinner />
            </pf-empty-state-icon>
          </template>
        </pf-empty-state-header>
      </pf-empty-state>
    </story-canvas>

    <story-canvas title="No match found">
      <pf-empty-state>
        <pf-empty-state-header title="No results found" heading-level="h4">
          <template #icon>
            <magnifying-glass-icon />
          </template>
        </pf-empty-state-header>
        <pf-empty-state-body>
          No results match the filter criteria. Clear all filters and try again.
        </pf-empty-state-body>
        <pf-empty-state-footer>
          <pf-empty-state-actions>
            <pf-button variant="link">Clear all filters</pf-button>
          </pf-empty-state-actions>
        </pf-empty-state-footer>
      </pf-empty-state>
    </story-canvas>

    <story-canvas title="Custom icon color">
      <pf-empty-state>
        <pf-empty-state-header title="Custom icon color" heading-level="h4">
          <template #icon>
            <pf-empty-state-icon color="var(--pf-v5-global--success-color--100)">
              <check-icon />
            </pf-empty-state-icon>
          </template>
        </pf-empty-state-header>
        <pf-empty-state-body>
          This represents the empty state pattern in PatternFly with a custom icon color. Hopefully it's simple enough to use but flexible enough to meet a variety of needs
        </pf-empty-state-body>
      </pf-empty-state>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import CubesIcon from "@vue-patternfly/icons/cubes-icon";
import CheckIcon from "@vue-patternfly/icons/check-icon";
import MagnifyingGlassIcon from "@vue-patternfly/icons/magnifying-glass-icon";
</script>
