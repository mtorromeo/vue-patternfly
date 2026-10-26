<template>
  <doc-page title="Empty State">
    <template #description
      >An <b>empty state</b> is a screen that is not yet populated with data or information. Empty states typically
      contain a short message and next steps for the user.</template
    >

    <template #apidocs>
      <component-info name="PfEmptyState" />
      <component-info name="PfEmptyStateBody" />
      <component-info name="PfEmptyStateFooter" />
      <component-info name="PfEmptyStateActions" />
      <component-info name="PfEmptyStateHeader" />
      <component-info name="PfEmptyStateIcon" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The `titleText` prop is replaced by the `title` prop or the `title` slot.
      - The `icon` prop is replaced by the `icon` slot, which also takes a `pf-spinner`; with a `status` it defaults to the status icon.
      - The `headerClassName` and `titleClassName` props are replaced by `header-class` and `title-class`.
      - The header is rendered only when there is a title, an icon or a status, instead of always being rendered empty.
      - `pf-empty-state-header` and `pf-empty-state-icon`, internal upstream, are exported to build a header by hand:
        - the `default` slot of `pf-empty-state-header` is rendered in the title wrapper, after the heading;
        - the `color` prop of `pf-empty-state-icon` sets a custom icon color.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-empty-state title="Empty state" heading-level="h4">
        <template #icon>
          <cubes-icon />
        </template>
        <pf-empty-state-body>
          This represents the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough
          to meet a variety of needs.
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
    <story-canvas title="Extra small">
      <pf-empty-state variant="xs" title="Empty state" heading-level="h4">
        <template #icon>
          <cubes-icon />
        </template>
        <pf-empty-state-body>
          This represents an the empty state pattern in PatternFly. The icon is optional.
        </pf-empty-state-body>
        <pf-empty-state-footer>
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
    <story-canvas title="Small">
      <pf-empty-state variant="sm" title="Empty state" heading-level="h4">
        <template #icon>
          <cubes-icon />
        </template>
        <pf-empty-state-body>
          This represents the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough
          to meet a variety of needs.
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
    <story-canvas title="Large">
      <pf-empty-state variant="lg" title="Empty state" heading-level="h4">
        <template #icon>
          <cubes-icon />
        </template>
        <pf-empty-state-body>
          This represents the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough
          to meet a variety of needs.
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
    <story-canvas title="Extra large">
      <pf-empty-state variant="xl" title="Empty state" heading-level="h4">
        <template #icon>
          <cubes-icon />
        </template>
        <pf-empty-state-body>
          This represents the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough
          to meet a variety of needs.
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
    <story-canvas title="With status">
      <pf-empty-state :status="status" :title="titleMap[status]" heading-level="h4">
        <pf-empty-state-body>
          This represents an the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible
          enough to meet a variety of needs.
        </pf-empty-state-body>
        <pf-empty-state-footer>
          <pf-empty-state-actions>
            <pf-button variant="primary" @click="toggleStatus">Toggle status</pf-button>
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
      <pf-empty-state title="Loading" heading-level="h4">
        <template #icon>
          <pf-spinner />
        </template>
      </pf-empty-state>
    </story-canvas>

    <story-canvas title="No match found">
      <pf-empty-state title="No results found" heading-level="h4">
        <template #icon>
          <magnifying-glass-icon />
        </template>
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
      <template #intro>
        <pre v-md>
          Wrap the icon in a `pf-empty-state-icon` to give it a custom `color`.
        </pre>
      </template>
      <pf-empty-state title="Custom icon color" heading-level="h4">
        <template #icon>
          <pf-empty-state-icon color="var(--pf-t--global--icon--color--status--success--default)">
            <check-icon />
          </pf-empty-state-icon>
        </template>
        <pf-empty-state-body>
          This represents the empty state pattern in PatternFly with a custom icon color. Hopefully it's simple enough
          to use but flexible enough to meet a variety of needs.
        </pf-empty-state-body>
      </pf-empty-state>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import CubesIcon from '@vue-patternfly/icons/cubes-icon';
import CheckIcon from '@vue-patternfly/icons/check-icon';
import MagnifyingGlassIcon from '@vue-patternfly/icons/magnifying-glass-icon';

type Status = 'success' | 'danger' | 'warning' | 'info' | 'custom';

const status = ref<Status>('success');

const statusToggleMap: Record<Status, Status> = {
  success: 'danger',
  danger: 'warning',
  warning: 'info',
  info: 'custom',
  custom: 'success',
};

const titleMap: Record<Status, string> = {
  success: "You're all set",
  danger: "You're not set",
  warning: "You're probably not set",
  info: 'You might be set',
  custom: "You're custom",
};

function toggleStatus() {
  status.value = statusToggleMap[status.value];
}
</script>
