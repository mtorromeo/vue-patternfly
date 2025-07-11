<template>
  <doc-page title="Button">
    <template #description>A <b>button</b> is a box area or text that communicates and triggers user actions when clicked or selected. Buttons can be used to communicate and immediately trigger actions a user can take in an application, like submitting a form, canceling a process, or creating a new object. Buttons can also be used to take a user to a new location, like another page inside of a web application, or an external site such as help or documentation.</template>

    <template #apidocs>
      <component-info src="packages/core/src/components/Button.vue" />
    </template>

    <story-canvas title="Variations">
      <pf-button variant="primary">Primary</pf-button>
      <pf-button variant="secondary">Secondary</pf-button>
      <pf-button variant="tertiary">Tertiary</pf-button>
      <pf-button variant="danger">Danger</pf-button>
      <pf-button variant="warning">Warning</pf-button>
      <br>
      <br>
      <pf-button variant="link">
        <template #icon>
          <circle-plus-icon />
        </template>
        Link
      </pf-button>
      <pf-button variant="link" icon-position="end">
        <template #icon>
          <square-arrow-up-right-icon />
        </template>
        Link
      </pf-button>
      <pf-button variant="link" inline>Inline link</pf-button>
      <br>
      <br>
      <pf-button variant="plain" aria-label="Action">
        <template #icon>
          <xmark-icon />
        </template>
      </pf-button>
      <br>
      <br>
      <pf-button variant="control">Control</pf-button>
      <pf-button variant="control" aria-label="Copy">
        <template #icon>
          <copy-icon />
        </template>
      </pf-button>
    </story-canvas>

    <story-canvas title="Disabled">
      <pf-button disabled>Primary disabled</pf-button>
      <pf-button disabled>Secondary disabled</pf-button>
      <pf-button disabled variant="tertiary">Tertiary disabled</pf-button>
      <pf-button disabled variant="danger">Danger disabled</pf-button>
      <pf-button disabled variant="warning">Warning disabled</pf-button>
      <br>
      <br>
      <pf-button disabled variant="link">
        <template #icon>
          <circle-plus-icon />
        </template>
        Link disabled
      </pf-button>
      <pf-button disabled variant="link" inline>Inline link disabled</pf-button>
      <pf-button disabled variant="plain" aria-label="Action">
        <template #icon>
          <xmark-icon />
        </template>
      </pf-button>
      <pf-button disabled variant="control">Control disabled</pf-button>
    </story-canvas>

    <story-canvas title="Aria disabled">
      <pf-button aria-disabled>Primary aria disabled</pf-button>
      <pf-button aria-disabled>Secondary aria disabled</pf-button>
      <pf-button aria-disabled variant="tertiary">Tertiary aria disabled</pf-button>
      <pf-button aria-disabled variant="danger">Danger aria disabled</pf-button>
      <pf-button aria-disabled variant="warning">Warning aria disabled</pf-button>
      <br>
      <br>
      <pf-button aria-disabled variant="link">
        <template #icon>
          <circle-plus-icon />
        </template>
        Link aria disabled
      </pf-button>
      <pf-button aria-disabled variant="link" inline>Inline link aria disabled</pf-button>
      <pf-button aria-disabled variant="plain" aria-label="Action">
        <template #icon>
          <xmark-icon />
        </template>
      </pf-button>
      <pf-button aria-disabled variant="control">Control aria disabled</pf-button>
    </story-canvas>

    <story-canvas title="Aria disable with tooltip">
      <pf-tooltip
        content="Aria-disabled buttons are like disabled buttons, but focusable. Allows for tooltip support."
      >
        <pf-button aria-disabled variant="secondary">Secondary button to core docs</pf-button>
      </pf-tooltip>
    </story-canvas>

    <story-canvas title="Aria disabled link as button with tooltip">
      <pf-tooltip content="Aria-disabled link as button with tooltip">
        <pf-button
          component="a"
          aria-disabled
          href="https://www.patternfly.org/"
          target="_blank"
          variant="tertiary"
        >
          Tertiary link as button to core docs
        </pf-button>
      </pf-tooltip>
    </story-canvas>

    <story-canvas title="Links as buttons">
      <pf-button
        component="a"
        href="https://www.patternfly.org/"
        target="_blank"
        variant="primary"
      >
        Link to core docs
      </pf-button>
      <pf-button
        component="a"
        href="https://www.patternfly.org/"
        target="_blank"
        variant="secondary"
      >
        Secondary link to core docs
      </pf-button>
      <pf-button
        disabled
        component="a"
        href="https://www.patternfly.org/"
        target="_blank"
        variant="tertiary"
      >
        Tertiary link to core docs
      </pf-button>
      <pf-button
        component="a"
        href="https://www.patternfly.org/contribution/#modifiers"
        variant="link"
      >
        Jump to modifiers in contribution guidelines
      </pf-button>
    </story-canvas>

    <story-canvas title="Inline link as span">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <pf-button
          variant="link"
          inline
          component="span"
        >
          This is long button text that needs to be a span so that it will wrap inline with the text around it.
        </pf-button>
        Sed hendrerit nisi in cursus maximus. Ut malesuada nisi turpis, in condimentum velit elementum non.
      </p>

      <br>

      <p>
        Note that using a
        <b>span</b> as a button does not fire the
        <b>click</b> event for Enter or Space keys.
        <pf-button variant="link" inline component="span" @keydown.prevent="handleKeydown">
          An
          <b>keydown</b> event listener is needed for Enter and Space key presses to prevent their default behavior and trigger your code.
        </pf-button>
        Pressing the Enter or Space keys on the inline link as span above demonstrates this by triggering an alert.
      </p>
    </story-canvas>

    <story-canvas title="Block level">
      <pf-button block>Block level button</pf-button>
    </story-canvas>

    <story-canvas title="Types">
      <pf-button type="submit">Submit</pf-button>
      <pf-button type="reset">Reset</pf-button>
      <pf-button>Default</pf-button>
    </story-canvas>

    <story-canvas title="Small">
      <pf-button variant="primary" small>Primary</pf-button>
      <pf-button variant="secondary" small>Secondary</pf-button>
      <pf-button variant="tertiary" small>Tertiary</pf-button>
      <pf-button variant="danger" small>Danger</pf-button>
      <pf-button variant="warning" small>Warning</pf-button>
    </story-canvas>

    <story-canvas title="Call to action">
      <pf-button variant="primary" large>Call to action</pf-button>
      <pf-button variant="secondary" large>Call to action</pf-button>
      <pf-button variant="tertiary" large>Call to action</pf-button>
      <pf-button variant="link" large icon-position="end">
        <template #icon>
          <arrow-right-icon />
        </template>
        Call to action
      </pf-button>
    </story-canvas>

    <story-canvas title="Progress">
      <pf-button
        :spinner-aria-value-text="primaryLoading ? 'Loading' : undefined"
        :loading="primaryLoading"
        variant="primary"
        @click="primaryLoading = true"
      >
        <template v-if="primaryLoading">Loading...</template>
        <template v-else>Click to start loading</template>
      </pf-button>
      <pf-button v-if="primaryLoading" @click="primaryLoading = false">Stop</pf-button>

      <br>
      <br>

      <pf-button
        :spinner-aria-value-text="secondaryLoading ? 'Loading' : undefined"
        :loading="secondaryLoading"
        variant="secondary"
        @click="secondaryLoading = true"
      >
        <template v-if="secondaryLoading">Loading...</template>
        <template v-else>Click to start loading</template>
      </pf-button>
      <pf-button v-if="secondaryLoading" @click="secondaryLoading = false">Stop</pf-button>
    </story-canvas>

    <story-canvas title="With count">
      <p>Unread:</p>
      <pf-button variant="primary">View issues <template #badge><pf-badge>7</pf-badge></template></pf-button>
      <pf-button variant="secondary">View issues <template #badge><pf-badge>7</pf-badge></template></pf-button>
      <pf-button variant="tertiary">View issues <template #badge><pf-badge>7</pf-badge></template></pf-button>
      <pf-button variant="link">View issues <template #badge><pf-badge>7</pf-badge></template></pf-button>
      <p>Unread disabled:</p>
      <pf-button disabled variant="primary">View issues <template #badge><pf-badge>7</pf-badge></template></pf-button>
      <pf-button disabled variant="secondary">View issues <template #badge><pf-badge>7</pf-badge></template></pf-button>
      <pf-button disabled variant="tertiary">View issues <template #badge><pf-badge>7</pf-badge></template></pf-button>
      <pf-button disabled variant="link">View issues <template #badge><pf-badge>7</pf-badge></template></pf-button>
      <p>Read:</p>
      <pf-button variant="primary">View issues <template #badge><pf-badge read>7</pf-badge></template></pf-button>
      <pf-button variant="secondary">View issues <template #badge><pf-badge read>7</pf-badge></template></pf-button>
      <pf-button variant="tertiary">View issues <template #badge><pf-badge read>7</pf-badge></template></pf-button>
      <pf-button variant="link">View issues <template #badge><pf-badge read>7</pf-badge></template></pf-button>
      <p>Read disabled:</p>
      <pf-button disabled variant="primary">View issues <template #badge><pf-badge read>7</pf-badge></template></pf-button>
      <pf-button disabled variant="secondary">View issues <template #badge><pf-badge read>7</pf-badge></template></pf-button>
      <pf-button disabled variant="tertiary">View issues <template #badge><pf-badge read>7</pf-badge></template></pf-button>
      <pf-button disabled variant="link">View issues <template #badge><pf-badge read>7</pf-badge></template></pf-button>
    </story-canvas>
  </doc-page>
</template>

<style>
.story-canvas .pf-v6-c-button + .pf-v6-c-button {
  margin-left: .2rem;
}
</style>

<script lang="ts" setup>
import CirclePlusIcon from '@vue-patternfly/icons/circle-plus-icon';
import SquareArrowUpRightIcon from '@vue-patternfly/icons/square-arrow-up-right-icon';
import CopyIcon from '@vue-patternfly/icons/copy-icon';
import XmarkIcon from '@vue-patternfly/icons/xmark-icon';
import ArrowRightIcon from '@vue-patternfly/icons/arrow-right-icon';
import { ref } from 'vue';
import { useAlertsStore } from '../../store/alerts';

const alerts = useAlertsStore();
const primaryLoading = ref(false);
const secondaryLoading = ref(false);

function handleKeydown() {
  alerts.add({
    title: 'clicked span pf-button',
    variant: 'info',
  });
}
</script>
