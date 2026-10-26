<template>
  <doc-page title="Notification Badge">
    <template #description
      >A <b>notification badge</b> is intended to be used with a notification drawer as a visible indicator to alert the
      user about incoming notifications.</template
    >

    <template #apidocs>
      <component-info name="PfNotificationBadge" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The `icon` and `attentionIcon` props are the `icon` and `attention-icon` slots.
      - The `onAnimationEnd` callback is the `animationend` event.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <template #intro>
        <pre v-md>
          The following example demonstrates the three variants of notification badge that are available: "read", "unread", and "attention".

          The `expanded` property is also passed in to:

          - set the `aria-expanded` attribute on the notification badge,
          - apply visual styling on the notification badge, and
          - to indicate that a notification drawer is expanded, for use-cases as seen in the [notification drawer](#/stories/components/notification-drawer).
        </pre>
      </template>

      <pf-notification-badge
        variant="read"
        aria-label="Basic notification badge with read variant"
        :expanded="expanded.read"
        @click="expanded.read = !expanded.read"
      />
      <pf-notification-badge
        variant="unread"
        aria-label="Basic notification badge with unread variant"
        :expanded="expanded.unread"
        @click="expanded.unread = !expanded.unread"
      />
      <pf-notification-badge
        variant="attention"
        aria-label="Basic notification badge with attention variant"
        :expanded="expanded.attention"
        @click="expanded.attention = !expanded.attention"
      />
    </story-canvas>

    <story-canvas title="With count">
      <template #intro>
        <pre v-md>
          You can display a number within the notification badge by passing in the `count` property, to indicate how many read, unread, or attention notifications there are. The `expanded` property is also passed in, similar to the basic example.
        </pre>
      </template>

      <pf-notification-badge
        variant="read"
        aria-label="Notification badge with count and read variant"
        :expanded="expandedCount.read"
        :count="10"
        @click="expandedCount.read = !expandedCount.read"
      />
      <pf-notification-badge
        variant="unread"
        aria-label="Notification badge with count and unread variant"
        :expanded="expandedCount.unread"
        :count="10"
        @click="expandedCount.unread = !expandedCount.unread"
      />
      <pf-notification-badge
        variant="attention"
        aria-label="Notification badge with count and attention variant"
        :expanded="expandedCount.attention"
        :count="10"
        @click="expandedCount.attention = !expandedCount.attention"
      />
    </story-canvas>

    <story-canvas title="With animation">
      <template #intro>
        <pre v-md>
          To animate the icon within the notification badge, use the `should-notify` property. In this example, the notification badge icon will only animate if the notification count is greater than 0.
        </pre>
      </template>

      <pf-stack gutter>
        <pf-stack-item>
          <pf-notification-badge
            variant="read"
            aria-label="Notification badge with read variant and no count"
            :count="count"
            :should-notify="notify"
            @animationend="notify = false"
          />
          <pf-notification-badge
            variant="unread"
            aria-label="Notification badge animation with unread variant and count"
            :count="count"
            :should-notify="notify"
            @animationend="notify = false"
          />
          <pf-notification-badge
            variant="attention"
            aria-label="Notification badge animation with attention variant and count"
            :count="count"
            :should-notify="notify"
            @animationend="notify = false"
          />
        </pf-stack-item>
        <pf-stack-item>
          <pf-button @click="addNotification">Add Notification</pf-button>
        </pf-stack-item>
      </pf-stack>
    </story-canvas>

    <story-canvas title="Plain variant">
      <template #intro>
        <pre v-md>
          The "plain" variant renders the notification badge as a plain button, without the read, unread or attention styling.
        </pre>
      </template>

      <pf-notification-badge variant="plain" aria-label="Plain notification badge" />
      <pf-notification-badge variant="plain" aria-label="Plain notification badge with count" :count="30" />
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

const expanded = reactive({ read: false, unread: false, attention: false });
const expandedCount = reactive({ read: false, unread: false, attention: false });

const count = ref(0);
const notify = ref(false);

function addNotification() {
  count.value++;
  notify.value = true;
}
</script>
