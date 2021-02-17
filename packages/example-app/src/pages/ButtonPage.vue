<template>
  <doc-page title="Button">
    <pf-title class="example-heading" h="3">
      Variations
    </pf-title>
    <pf-button variant="primary">
      Primary
    </pf-button> <pf-button variant="secondary">
      Secondary
    </pf-button>{{ ' ' }}
    <pf-button variant="tertiary">
      Tertiary
    </pf-button> <pf-button variant="danger">
      Danger
    </pf-button>{{ ' ' }}
    <pf-button variant="warning">
      Warning
    </pf-button><br><br>
    <pf-button variant="link">
      <template #icon>
        <plus-circle-icon />
      </template>
      Link
    </pf-button>{{ ' ' }}
    <pf-button variant="link" icon-position="right">
      <template #icon>
        <external-link-square-alt-icon />
      </template>
      Link
    </pf-button>
    <pf-button variant="link" inline>
      Inline link
    </pf-button><br><br>
    <pf-button variant="plain" aria-label="Action">
      <times-icon />
    </pf-button><br><br>
    <pf-button variant="control">
      Control
    </pf-button>{{ ' ' }}
    <pf-button variant="control" aria-label="Copy">
      <copy-icon />
    </pf-button>

    <pf-title class="example-heading" h="3">
      Disabled
    </pf-title>
    <pf-button disabled>
      Primary disabled
    </pf-button>{{ ' ' }}
    <pf-button disabled>
      Secondary disabled
    </pf-button>{{ ' ' }}
    <pf-button disabled variant="tertiary">
      Tertiary disabled
    </pf-button>{{ ' ' }}
    <pf-button disabled variant="danger">
      Danger disabled
    </pf-button>{{ ' ' }}
    <pf-button disabled variant="warning">
      Warning disabled
    </pf-button><br><br>
    <pf-button disabled variant="link">
      <template #icon>
        <plus-circle-icon />
      </template>
      Link disabled
    </pf-button>{{ ' ' }}
    <pf-button disabled variant="link" inline>
      Inline link disabled
    </pf-button>{{ ' ' }}
    <pf-button disabled variant="plain" aria-label="Action">
      <times-icon />
    </pf-button>{{ ' ' }}
    <pf-button disabled variant="control">
      Control disabled
    </pf-button>

    <pf-title class="example-heading" h="3">
      Aria disabled
    </pf-title>
    <pf-button aria-disabled>
      Primary aria disabled
    </pf-button>{{ ' ' }}
    <pf-button aria-disabled>
      Secondary aria disabled
    </pf-button>{{ ' ' }}
    <pf-button aria-disabled variant="tertiary">
      Tertiary aria disabled
    </pf-button>{{ ' ' }}
    <pf-button aria-disabled variant="danger">
      Danger disabled
    </pf-button>{{ ' ' }}
    <pf-button aria-disabled variant="warning">
      Warning disabled
    </pf-button><br><br>
    <pf-button aria-disabled variant="link">
      <template #icon>
        <plus-circle-icon />
      </template>
      Link aria disabled
    </pf-button>{{ ' ' }}
    <pf-button aria-disabled variant="link" inline>
      Inline link aria disabled
    </pf-button>{{ ' ' }}
    <pf-button aria-disabled variant="plain" aria-label="Action">
      <times-icon />
    </pf-button>{{ ' ' }}
    <pf-button aria-disabled variant="control">
      Control aria disabled
    </pf-button>

    <pf-title class="example-heading" h="3">
      Aria disabled button with tooltip
    </pf-title>
    <pf-tooltip content="Aria-disabled buttons are like disabled buttons, but focusable. Allows for tooltip support.">
      <pf-button aria-disabled variant="secondary">
        Secondary button to core docs
      </pf-button>
    </pf-tooltip>

    <pf-title class="example-heading" h="3">
      Aria disabled link as button with tooltip
    </pf-title>
    <pf-tooltip content="Aria-disabled link as button with tooltip">
      <pf-button component="a" aria-disabled href="https://pf4.patternfly.org/" target="_blank" variant="tertiary">
        Tertiary link as button to core docs
      </pf-button>
    </pf-tooltip>

    <pf-title class="example-heading" h="3">
      Links as buttons
    </pf-title>
    <pf-button component="a" href="https://pf4.patternfly.org/" target="_blank" variant="primary">
      Link to core docs
    </pf-button>{{ ' ' }}
    <pf-button component="a" href="https://pf4.patternfly.org/" target="_blank" variant="secondary">
      Secondary link to core docs
    </pf-button>{{ ' ' }}
    <pf-button disabled component="a" href="https://pf4.patternfly.org/" target="_blank" variant="tertiary">
      Tertiary link to core docs
    </pf-button>{{ ' ' }}
    <pf-button component="a" href="https://pf4.patternfly.org/contribution/#modifiers" variant="link">
      Jump to modifiers in contribution guidelines
    </pf-button>

    <pf-title class="example-heading" h="3">
      Inline link as span
    </pf-title>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <pf-button variant="link" inline component="span">
        This is long button text that needs to be a span so that it will wrap inline with the text around it.
      </pf-button>
      {{ ' ' }}Sed hendrerit nisi in cursus maximus. Ut malesuada nisi turpis, in condimentum velit elementum non.
    </p>

    <br>

    <p>
      Note that using a <b>span</b> as a button does not fire the <b>onclick</b> event for Enter or Space keys.
      <pf-button variant="link" inline component="span" on-key-down="{handleKeydown}">
        An <b>onKeyDown</b> event listener is needed for Enter and Space key presses to prevent their default behavior and trigger your code.
      </pf-button>
      {{ ' ' }}Pressing the Enter or Space keys on the inline link as span above demonstrates this by triggering an alert.
    </p>

    <pf-title class="example-heading" h="3">
      Block level
    </pf-title>
    <pf-button block>
      Block level button
    </pf-button>

    <pf-title class="example-heading" h="3">
      Types
    </pf-title>
    <pf-button type="submit">
      Submit
    </pf-button>{{ ' ' }}
    <pf-button type="reset">
      Reset
    </pf-button>{{ ' ' }}
    <pf-button>Default</pf-button>

    <pf-title class="example-heading" h="3">
      Small
    </pf-title>
    <pf-button variant="primary" small>
      Primary
    </pf-button>{{ ' ' }}
    <pf-button variant="secondary" small>
      Secondary
    </pf-button>{{ ' ' }}
    <pf-button variant="tertiary" small>
      Tertiary
    </pf-button>{{ ' ' }}
    <pf-button variant="danger" small>
      Danger
    </pf-button>{{ ' ' }}
    <pf-button variant="warning" small>
      Warning
    </pf-button>

    <pf-title class="example-heading" h="3">
      Call to action
    </pf-title>
    <pf-button variant="primary" large>
      Call to action
    </pf-button>{{ ' ' }}
    <pf-button variant="secondary" large>
      Call to action
    </pf-button>{{ ' ' }}
    <pf-button variant="tertiary" large>
      Call to action
    </pf-button>{{ ' ' }}
    <pf-button variant="link" large>
      Call to action <arrow-right-icon />
    </pf-button>

    <pf-title class="example-heading" h="3">
      Progress
    </pf-title>
    <pf-button :spinner-aria-value-text="primaryLoading ? 'Loading' : undefined"
               :loading="primaryLoading"
               variant="primary"
               @click="primaryLoading = !primaryLoading"
    >
      <template v-if="primaryLoading">
        Click to stop loading
      </template>
      <template v-else>
        Click to start loading
      </template>
    </pf-button>{{ ' ' }}
    <pf-button :spinner-aria-value-text="secondaryLoading ? 'Loading' : undefined"
               :loading="secondaryLoading"
               variant="secondary"
               @click="secondaryLoading = !secondaryLoading"
    >
      <template v-if="secondaryLoading">
        Click to stop loading
      </template>
      <template v-else>
        Click to start loading
      </template>
    </pf-button>
  </doc-page>
</template>

<script>
import PlusCircleIcon from '@vue-patternfly4/icons/dist/esm/icons/plus-circle-icon';
import ExternalLinkSquareAltIcon from '@vue-patternfly4/icons/dist/esm/icons/external-link-square-alt-icon';
import CopyIcon from '@vue-patternfly4/icons/dist/esm/icons/copy-icon';
import TimesIcon from '@vue-patternfly4/icons/dist/esm/icons/times-icon';
import ArrowRightIcon from '@vue-patternfly4/icons/dist/esm/icons/arrow-right-icon';

export default {
  name: 'ButtonPage',

  components: {PlusCircleIcon, ExternalLinkSquareAltIcon, CopyIcon, TimesIcon, ArrowRightIcon},

  data() {
    return {
      primaryLoading: false,
      secondaryLoading: false,
    };
  },
};
</script>
