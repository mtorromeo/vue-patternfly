<template>
  <define-kebab v-slot="{ label }">
    <pf-dropdown position="right">
      <template #toggle>
        <pf-menu-toggle variant="plain" :aria-label="label">
          <template #icon>
            <ellipsis-vertical-icon />
          </template>
        </pf-menu-toggle>
      </template>
      <pf-dropdown-item component="button">Action</pf-dropdown-item>
      <pf-dropdown-item to="#" @click.prevent>Link</pf-dropdown-item>
      <pf-dropdown-item component="button" disabled>Disabled Action</pf-dropdown-item>
      <pf-dropdown-item to="#" disabled @click.prevent>Disabled Link</pf-dropdown-item>
      <pf-divider component="li" />
      <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
      <pf-dropdown-item to="#" @click.prevent>Separated Link</pf-dropdown-item>
    </pf-dropdown>
  </define-kebab>

  <doc-page title="Hint">
    <template #description
      >A <b>hint</b> is in-app messaging that provides a one-step reminder, explanation, or call to action for a page or
      modal.</template
    >

    <template #apidocs>
      <component-info name="PfHint" />
      <component-info name="PfHintTitle" />
      <component-info name="PfHintBody" />
      <component-info name="PfHintFooter" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The `actions` prop is replaced by the `actions` slot, and `hasNoActionsOffset` by `actions-no-offset`.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Basic with title">
      <pf-hint>
        <template #actions>
          <kebab label="With title example kebab toggle" />
        </template>
        <pf-hint-title>Do more with Find it Fix it capabilities</pf-hint-title>
        <pf-hint-body>
          Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.
        </pf-hint-body>
        <pf-hint-footer>
          <pf-button variant="link" inline>Try it for 90 days</pf-button>
        </pf-hint-footer>
      </pf-hint>
    </story-canvas>

    <story-canvas title="Basic without title">
      <pf-hint>
        <pf-hint-body>
          Welcome to the new documentation experience.
          <pf-button variant="link" inline>Learn more about the improved features.</pf-button>
        </pf-hint-body>
      </pf-hint>
      <br />
      <pf-hint>
        <template #actions>
          <kebab label="Without title example kebab toggle" />
        </template>
        <pf-hint-body>
          Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.
        </pf-hint-body>
        <pf-hint-footer>
          <pf-button variant="link" inline>Try it for 90 days</pf-button>
        </pf-hint-footer>
      </pf-hint>
    </story-canvas>

    <story-canvas title="With actions">
      <template #intro>
        <pre v-md>
          You can add actions to a hint to allow users to respond to suggestions and initiate any related processes.

          When a `pf-hint` contains actions, a negative margin is applied to the actions so that they are better aligned with the hint title. For larger-sized titles or non-plain actions (such as a button), remove this negative margin by setting `actions-no-offset`.

          To illustrate this behavior, select the "actions-no-offset" checkbox in the following example.
        </pre>
      </template>
      <pf-checkbox
        id="toggle-actions-offset"
        v-model="actionsNoOffset"
        label="actions-no-offset"
        aria-label="remove actions offset"
        name="toggle-actions-offset"
      />
      <div style="margin-top: 15px">
        <pf-hint :actions-no-offset="actionsNoOffset">
          <template #actions>
            <pf-button variant="primary">Action</pf-button>
          </template>
          <pf-hint-title>Do more with Find it Fix it capabilities</pf-hint-title>
          <pf-hint-body>
            Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.
          </pf-hint-body>
        </pf-hint>
      </div>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { createReusableTemplate } from '@vueuse/core';
import EllipsisVerticalIcon from '@vue-patternfly/icons/ellipsis-vertical-icon';

const [DefineKebab, Kebab] = createReusableTemplate<{ label: string }>();

const actionsNoOffset = ref(false);
</script>
