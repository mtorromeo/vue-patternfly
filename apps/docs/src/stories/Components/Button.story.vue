<template>
  <doc-page title="Button">
    <template #description
      >A <b>button</b> is a box area or text that communicates and triggers user actions when clicked or selected.
      Buttons can be used to communicate and immediately trigger actions a user can take in an application, like
      submitting a form, canceling a process, or creating a new object. Buttons can also be used to take a user to a new
      location, like another page inside of a web application, or an external site such as help or
      documentation.</template
    >

    <template #apidocs>
      <component-info name="PfButton" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - `small` and `large` replace `size="sm"` and `size="lg"`.
      - The `icon` prop is replaced by the `icon` slot, and `countOptions` by the `badge` slot holding a `pf-badge` (with `badge-class` for the count container).
      - `to` renders the button as a router link and `href` as a link, without passing `component`.
      - `no-padding` replaces `hasNoPadding`.

      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Variant examples">
      <template #intro>
        <pre v-md>
          PatternFly supports several button styling variants to be used in different scenarios as needed. The following button variants can be assigned using the `variant` property.

          | Variant   | Description |
          | --------- | ----------- |
          | Primary   | Primary buttons are the most visually prominent variant. Use for the most important call to action. |
          | Secondary | Secondary buttons are less visually prominant than primary buttons. Use for general actions on a page that require less emphasis than primary buttons. |
          | Tertiary  | Tertiary buttons are the least visually prominent variant. Use to retain a classic button format with less emphasis than primary or secondary buttons. |
          | Danger    | Danger buttons may be used for actions that are potentially destructive or difficult/impossible to undo. Danger is an independent variant, but all button variants may use the `danger` property to apply similar styling. |
          | Warning   | Warning buttons may be used for actions that change an important setting or behavior, but not in a destructive or irreversible way. |
          | Link      | Links are labeled, but have no background or border. Use for actions that require less emphasis, actions that navigate users to another page within the same window, and/or actions that navigate to external pages in a new window. Links may be placed inline with text using the `inline` property. |
          | Plain     | Plain buttons have no styling and are intended to be labeled with icons. |
          | Control   | Control buttons can be labeled with text or icons. Primarily intended to be paired with other controls in an input group. |
          | Stateful  | Stateful buttons are ideal for displaying the state of notifications. They have 3 states: `read`, `unread` and `attention`. |
        </pre>
      </template>

      <pf-flex column-gap="sm">
        <pf-button variant="primary" ouia-id="Primary">Primary</pf-button>
        <pf-button variant="secondary" ouia-id="Secondary">Secondary</pf-button>
        <pf-button variant="secondary" ouia-id="DangerSecondary" danger>Danger Secondary</pf-button>
        <pf-button variant="tertiary" ouia-id="Tertiary">Tertiary</pf-button>
        <pf-button variant="danger" ouia-id="Danger">Danger</pf-button>
        <pf-button variant="warning" ouia-id="Warning">Warning</pf-button>
      </pf-flex>
      <br />
      <pf-flex column-gap="sm">
        <pf-button variant="link">
          <template #icon><circle-plus-icon /></template>
          Link
        </pf-button>
        <pf-button variant="link" icon-position="end">
          <template #icon><square-arrow-up-right-icon /></template>
          Link
        </pf-button>
        <pf-button variant="link" inline>Inline link</pf-button>
        <pf-button variant="link" danger>Danger link</pf-button>
        <pf-button variant="plain" aria-label="Action">
          <template #icon><xmark-icon /></template>
        </pf-button>
      </pf-flex>
      <br />
      <pf-flex column-gap="sm">
        <pf-button variant="control">Control</pf-button>
        <pf-button variant="control" aria-label="Copy">
          <template #icon><copy-icon /></template>
        </pf-button>
      </pf-flex>
      <br />
      <pf-flex column-gap="sm">
        <pf-button variant="stateful" state="read">
          <template #icon><bell-icon /></template>
          Stateful read
        </pf-button>
        <pf-button variant="stateful" state="unread">
          <template #icon><bell-icon /></template>
          Stateful unread
        </pf-button>
        <pf-button variant="stateful" state="attention">
          <template #icon><bell-icon /></template>
          Stateful attention
        </pf-button>
      </pf-flex>
    </story-canvas>

    <story-canvas title="Disabled buttons">
      <template #intro>
        <pre v-md>
          To indicate that an action is currently unavailable, all button variations can be disabled using the `disabled` property.
        </pre>
      </template>

      <pf-flex column-gap="sm">
        <pf-button disabled>Primary</pf-button>
        <pf-button variant="secondary" disabled>Secondary</pf-button>
        <pf-button variant="secondary" danger disabled>Danger secondary</pf-button>
        <pf-button disabled variant="tertiary">Tertiary</pf-button>
        <pf-button disabled variant="danger">Danger</pf-button>
        <pf-button disabled variant="warning">Warning</pf-button>
      </pf-flex>
      <br />
      <pf-flex column-gap="sm">
        <pf-button disabled variant="link">
          <template #icon><circle-plus-icon /></template>
          Link
        </pf-button>
        <pf-button disabled variant="link" inline>Inline link</pf-button>
        <pf-button variant="link" danger disabled>Danger link</pf-button>
        <pf-button disabled variant="plain" aria-label="Action">
          <template #icon><xmark-icon /></template>
        </pf-button>
      </pf-flex>
      <br />
      <pf-flex column-gap="sm">
        <pf-button disabled variant="control">Control</pf-button>
        <pf-button disabled variant="control" aria-label="Copy">
          <template #icon><copy-icon /></template>
        </pf-button>
      </pf-flex>
    </story-canvas>

    <story-canvas title="Small buttons">
      <template #intro>
        <pre v-md>
          To fit into tight spaces, primary, secondary, tertiary, danger, and warning button variations can be made smaller using the `small` property.
        </pre>
      </template>

      <pf-flex column-gap="sm">
        <pf-button variant="primary" small>Primary</pf-button>
        <pf-button variant="secondary" small>Secondary</pf-button>
        <pf-button variant="tertiary" small>Tertiary</pf-button>
        <pf-button variant="danger" small>Danger</pf-button>
        <pf-button variant="warning" small>Warning</pf-button>
      </pf-flex>
    </story-canvas>

    <story-canvas title="Call to action (CTA) buttons">
      <template #intro>
        <pre v-md>
          CTA buttons and links direct users to complete an action. Primary, secondary, tertiary, and link button variants can be styled as CTAs using the `large` property.
        </pre>
      </template>

      <pf-flex column-gap="sm">
        <pf-button variant="primary" large>Call to action</pf-button>
        <pf-button variant="secondary" large>Call to action</pf-button>
        <pf-button variant="tertiary" large>Call to action</pf-button>
        <pf-button variant="link" large icon-position="end">
          <template #icon><angle-right-icon /></template>
          Call to action
        </pf-button>
      </pf-flex>
    </story-canvas>

    <story-canvas title="Block level buttons">
      <template #intro>
        <pre v-md>
          Block level buttons span the full width of the parent element and can be enabled using the `block` property.
        </pre>
      </template>

      <pf-button block>Block level button</pf-button>
    </story-canvas>

    <story-canvas title="Progress indicators">
      <template #intro>
        <pre v-md>
          Progress indicators can be added to buttons to identify that an action is in progress after a click.
        </pre>
      </template>

      <pf-flex column-gap="sm">
        <pf-button
          id="primary-loading-button"
          variant="primary"
          :loading="primaryLoading"
          spinner-aria-value-text="Loading"
          spinner-aria-labelled-by="primary-loading-button"
          @click="primaryLoading = !primaryLoading"
        >
          {{ primaryLoading ? 'Click to stop loading' : 'Click to start loading' }}
        </pf-button>
        <pf-button
          variant="secondary"
          :loading="secondaryLoading"
          spinner-aria-value-text="Loading"
          spinner-aria-label="Content being loaded"
          @click="secondaryLoading = !secondaryLoading"
        >
          {{ secondaryLoading ? 'Click to stop loading' : 'Click to start loading' }}
        </pf-button>
      </pf-flex>
      <br />
      <pf-button
        variant="plain"
        :aria-label="uploading ? undefined : 'Upload'"
        :loading="uploading"
        spinner-aria-value-text="Loading"
        spinner-aria-label="Uploading data"
        @click="uploading = !uploading"
      >
        <template #icon><upload-icon /></template>
      </pf-button>
      <br />
      <br />
      <pf-button
        variant="link"
        inline
        :loading="inlineLoading"
        spinner-aria-value-text="Loading"
        spinner-aria-label="Content being loaded"
        @click="inlineLoading = !inlineLoading"
      >
        {{ inlineLoading ? 'Pause loading logs' : 'Resume loading logs' }}
      </pf-button>
    </story-canvas>

    <story-canvas title="Links as buttons">
      <template #intro>
        <pre v-md>
          Buttons that link to another resource may take the form of primary, secondary, tertiary, or link variants. Set an `href` property to render the button as a link; `component="a"` is implied.
        </pre>
      </template>

      <pf-flex>
        <pf-button href="https://www.patternfly.org/" target="_blank" variant="primary">
          Link to PatternFly home
        </pf-button>
        <pf-button href="https://www.patternfly.org/" target="_blank" variant="secondary">
          Secondary link to PatternFly home
        </pf-button>
        <pf-button disabled href="https://www.patternfly.org/" target="_blank" variant="tertiary">
          Tertiary link to PatternFly home
        </pf-button>
        <pf-button href="https://www.patternfly.org/" variant="link">Jump to PatternFly home</pf-button>
      </pf-flex>
    </story-canvas>

    <story-canvas title="Inline link as span">
      <template #intro>
        <pre v-md>
          Inline links should use `component="span"` and the `inline` property to wrap inline with surrounding text.
        </pre>
      </template>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <pf-button variant="link" inline component="span">
          This is long button text that needs to be a span so that it will wrap inline with the text around it.
        </pf-button>
        Sed hendrerit nisi in cursus maximus. Ut malesuada nisi turpis, in condimentum velit elementum non.
      </p>
      <br />
      <p>
        Note that using a <b>span</b> as a button does not fire the <b>click</b> event for Enter or Space keys.
        <pf-button variant="link" inline component="span" @keydown="handleKeydown">
          A <b>keydown</b> event listener is needed for Enter and Space key presses to prevent their default behavior
          and trigger your code.
        </pf-button>
        Pressing the Enter or Space keys on the inline link as span above demonstrates this by triggering an alert.
      </p>
    </story-canvas>

    <story-canvas title="Custom component">
      <template #intro>
        <pre v-md>
          In addition to being able to pass a string to the `component` property, you can pass a component for more fine-tuned customization.
        </pre>
      </template>

      <pf-button variant="link" :component="CustomLink">Router link</pf-button>
    </story-canvas>

    <story-canvas title="Aria-disabled examples">
      <template #intro>
        <pre v-md>
          [Accessible Rich Internet Applications (ARIA)](https://www.w3.org/WAI/standards-guidelines/aria/) is a set of roles and attributes specified by the World Wide Web Consortium. ARIA defines ways to make web content and web applications more accessible to people with disabilities.

          Buttons that are aria-disabled are similar to normal disabled buttons, except they can receive focus. Every button variant can be aria-disabled using the `aria-disabled` property.

          Unlike normal disabled buttons, aria-disabled buttons can support tooltips. Furthermore, aria-disabled buttons can operate as links, which also support tooltips.
        </pre>
      </template>

      <pf-flex column-gap="sm">
        <pf-button aria-disabled>Primary aria disabled</pf-button>
        <pf-button aria-disabled variant="link">
          <template #icon><circle-plus-icon /></template>
          Link aria disabled
        </pf-button>
        <pf-button aria-disabled variant="link" inline>Inline link aria disabled</pf-button>
      </pf-flex>
      <br />
      <pf-flex column-gap="sm">
        <pf-tooltip
          content="Aria-disabled buttons are like disabled buttons, but focusable. Allows for tooltip support."
        >
          <pf-button aria-disabled>Primary button with tooltip</pf-button>
        </pf-tooltip>
        <pf-tooltip content="Aria-disabled link as button with tooltip">
          <pf-button aria-disabled href="https://www.patternfly.org/" target="_blank" variant="secondary">
            Secondary link as button to PatternFly home
          </pf-button>
        </pf-tooltip>
      </pf-flex>
    </story-canvas>

    <story-canvas title="Button with count">
      <template #intro>
        <pre v-md>
          Buttons can display a count in the form of a badge to indicate some value or number by passing a `pf-badge` in the `badge` slot. The `badge-class` property adds classes to the count container.
        </pre>
      </template>

      <div v-for="group in countGroups" :key="group.title">
        <div>{{ group.title }}</div>
        <pf-flex column-gap="sm">
          <pf-button
            v-for="variant in countVariants"
            :key="variant"
            :variant="variant"
            :disabled="group.disabled"
            :badge-class="group.read ? 'custom-badge-read' : 'custom-badge-unread'"
          >
            Issues
            <template #badge>
              <pf-badge :read="group.read" :disabled="group.disabled">{{ group.read ? 10 : 7 }}</pf-badge>
            </template>
          </pf-button>
        </pf-flex>
        <br />
      </div>
    </story-canvas>

    <story-canvas title="Plain with no padding">
      <template #intro>
        <pre v-md>
          To display a plain/icon button inline with text, use the `no-padding` prop in addition to `variant="plain"`.
        </pre>
      </template>

      <p>
        This is an example of a button
        <pf-button variant="plain" no-padding aria-label="More info">
          <template #icon><circle-question-icon /></template>
        </pf-button>
        which is placed inline with text
      </p>
    </story-canvas>

    <story-canvas title="Stateful">
      <template #intro>
        <pre v-md>
          Stateful buttons are ideal for displaying the state of notifications. Use `variant="stateful"` alongside with the `state` property, which can have these 3 values: `read`, `unread` (used as default) and `attention` (which means unread and requires attention).
        </pre>
      </template>

      <pf-flex>
        <div>
          <div><strong>Read</strong></div>
          <pf-button variant="stateful" state="read">
            <template #icon><bell-icon /></template>
            10 <span class="pf-v6-screen-reader">items</span>
          </pf-button>
        </div>
        <div>
          <div><strong>Unread</strong></div>
          <pf-button variant="stateful" state="unread">
            <template #icon><bell-icon /></template>
            10 <span class="pf-v6-screen-reader">unread items</span>
          </pf-button>
        </div>
        <div>
          <div><strong>Attention</strong></div>
          <pf-button variant="stateful" state="attention">
            <template #icon><bell-icon /></template>
            10 <span class="pf-v6-screen-reader">unread items, needs attention</span>
          </pf-button>
        </div>
      </pf-flex>
    </story-canvas>

    <story-canvas title="Circle buttons">
      <template #intro>
        <pre v-md>
          Pass `circle` to a button to modify its styling from simply rounded corners to complete circles. Circle buttons are intended for buttons that only contain an icon and adequate accessible naming.
        </pre>
      </template>

      <pf-flex column-gap="sm">
        <pf-button
          v-for="variant in circleVariants"
          :key="variant"
          :variant="variant"
          circle
          :aria-label="`Add ${variant} circle variant example`"
        >
          <template #icon><circle-plus-icon /></template>
        </pf-button>
        <pf-button variant="control" circle aria-label="Copy control circle variant example">
          <template #icon><copy-icon /></template>
        </pf-button>
        <pf-button variant="plain" circle aria-label="Remove plain circle variant example">
          <template #icon><xmark-icon /></template>
        </pf-button>
        <pf-button
          v-for="state in ['unread', 'read', 'attention'] as const"
          :key="state"
          variant="stateful"
          :state="state"
          circle
          :aria-label="`Stateful ${state} circle variant example`"
        >
          <template #icon><bell-icon /></template>
        </pf-button>
        <pf-button
          variant="plain"
          circle
          :aria-label="circleUploading ? undefined : 'Upload circle variant example'"
          :loading="circleUploading"
          spinner-aria-value-text="Loading circle variant example"
          spinner-aria-label="Uploading circle variant example data"
          @click="circleUploading = !circleUploading"
        >
          <template #icon><upload-icon /></template>
        </pf-button>
      </pf-flex>
    </story-canvas>

    <pre v-md>
      ## Animated examples

      The following `pf-button` implementations have animations built into them. When using one of the following implementations, the `icon` slot will be overridden due to the animations needing specific icons internally.
    </pre>

    <story-canvas title="Favorite">
      <template #intro>
        <pre v-md>
          You can pass both the `favorite` and `variant="plain"` properties into the `pf-button` to create a favorite button. Passing the `favorited` property will determine the current favorited state and update styling accordingly.
        </pre>
      </template>

      <pf-button
        variant="plain"
        :aria-label="favorited ? 'Favorite example favorited' : 'Favorite example not favorited'"
        favorite
        :favorited="favorited"
        @click="favorited = !favorited"
      />
    </story-canvas>

    <story-canvas title="Settings">
      <template #intro>
        <pre v-md>
          For a "settings" button with animations on hover and focus, you can pass the `settings` property into either a `variant="plain"` or `variant="control"` button.
        </pre>
      </template>

      <pf-flex>
        <pf-button settings variant="plain" aria-label="Settings" />
        <pf-button settings variant="control">Settings</pf-button>
      </pf-flex>
    </story-canvas>

    <story-canvas title="Hamburger">
      <template #intro>
        <pre v-md>
          For a "hamburger" button that will animate based on the `hamburger-variant` property, you can pass the `hamburger` property. This will render the default icon for a hamburger button, and updating the `hamburger-variant` property with a value of either "expand" or "collapse" will change the icon accordingly with an animation on hover and focus.

          When used within a `pf-masthead`, the animations and icon updates will occur automatically.
        </pre>
      </template>

      <pf-flex>
        <pf-button variant="plain" :expanded="false" aria-label="Hamburger example" hamburger />
        <pf-button
          variant="plain"
          :expanded="false"
          aria-label="Hamburger example"
          hamburger
          hamburger-variant="expand"
        />
        <pf-button
          variant="plain"
          :expanded="true"
          aria-label="Hamburger example"
          hamburger
          hamburger-variant="collapse"
        />
      </pf-flex>
    </story-canvas>

    <pre v-md>
      ## Using router links

      Router links can be used for in-app linking to prevent page reloading. Pass the route to the `to` property, and the button renders a `router-link` navigating to it: `&lt;pf-button variant="link" to="/home"&gt;Router link&lt;/pf-button&gt;`.
    </pre>
  </doc-page>
</template>

<script lang="ts" setup>
import CirclePlusIcon from '@vue-patternfly/icons/circle-plus-icon';
import SquareArrowUpRightIcon from '@vue-patternfly/icons/square-arrow-up-right-icon';
import CopyIcon from '@vue-patternfly/icons/copy-icon';
import XmarkIcon from '@vue-patternfly/icons/xmark-icon';
import AngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import UploadIcon from '@vue-patternfly/icons/upload-icon';
import BellIcon from '@vue-patternfly/icons/bell-icon';
import CircleQuestionIcon from '@vue-patternfly/icons/circle-question-icon';
import { h, ref, type FunctionalComponent } from 'vue';
import { useAlertsStore } from '../../store/alerts';

const alerts = useAlertsStore();
const primaryLoading = ref(true);
const secondaryLoading = ref(true);
const inlineLoading = ref(true);
const uploading = ref(false);
const circleUploading = ref(false);
const favorited = ref(false);

const countVariants = ['primary', 'secondary', 'tertiary', 'control', 'link'] as const;
const countGroups = [
  { title: 'Unread:', read: false, disabled: false },
  { title: 'Unread disabled:', read: false, disabled: true },
  { title: 'Read:', read: true, disabled: false },
  { title: 'Read disabled:', read: true, disabled: true },
];
const circleVariants = ['primary', 'secondary', 'tertiary', 'danger', 'warning', 'link'] as const;

const CustomLink: FunctionalComponent = (_, { attrs, slots }) => h('a', { ...attrs, href: '#' }, slots.default?.());

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    alerts.add({
      title: `${event.key === 'Enter' ? 'Enter' : 'Space'} key default behavior stopped by keydown`,
      variant: 'info',
    });
  }
}
</script>
