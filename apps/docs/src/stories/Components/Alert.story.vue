<template>
  <doc-page title="Alert">
    <template #description
      >An <b>alert</b> is a notification that provides brief information to the user without blocking their
      workflow.</template
    >

    <template #apidocs>
      <component-info name="PfAlert" />
      <component-info name="PfAlertActionCloseButton" />
      <component-info name="PfAlertActionLink" />
      <component-info name="PfAlertGroup" />
      <component-info name="PfAlertGroupInline" />
      <component-info name="PfAlertIcon" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The `actionClose`, `actionLinks` and `customIcon` props are replaced by the `action-close`, `action-links` and `custom-icon` slots, and the `title` slot can replace the `title` prop.
      - Setting `@close` on `pf-alert` renders a `pf-alert-action-close-button` without using the `action-close` slot.
      - The default `aria-label` of `pf-alert-action-close-button` uses the variant label of the alert as is ("Close Success alert: Title"), since it already ends with "alert:"; with its own `variant-label` it is built as upstream ("Close success alert: Title").
      - The expanded state of an expandable alert can be bound with `v-model:expanded`.
      - `animations` replaces `hasAnimations` on `pf-alert-group`; there is no animations context.
      - `append-to` takes an element or a selector rather than a function.

      See [common differences from patternfly-react](#/).

      Micro animations have been added for `pf-alert` components within a `pf-alert-group`. By default, you must opt into animations, since they can require updates to tests. To enable them, use the `animations` property. With animations enabled, we recommend you ensure that dynamically-added alerts are prepended to a list of alerts, rather than appended to the end of it.

      Micro animations are turned on for all examples where alerts are dynamically added.

      ## Alert examples
    </pre>

    <story-canvas title="Alert variants">
      <template #intro>
        <pre v-md>
          PatternFly supports several alert variants for different scenarios. Each variant has an associated status icon, background, and alert title coded to communicate the severity of an alert. Use the `variant` property to apply the following styling options. If no `variant` is specified, then the variant will be set to "custom".

          | Variant | Description |
          | ------- | ----------- |
          | Custom  | Use for generic messages that should have a custom color set by the associated CSS variable. Should be used when the message has no associated severity. |
          | Info    | Use for general informational messages |
          | Success | Use to indicate that a task or process has been completed successfully |
          | Warning | Use to indicate that a non-critical error has occurred |
          | Danger  | Use to indicate that a critical or blocking error has occurred |
        </pre>
      </template>

      <pf-alert title="Custom alert title" ouia-id="CustomAlert" />
      <pf-alert variant="info" title="Info alert title" ouia-id="InfoAlert" />
      <pf-alert variant="success" title="Success alert title" ouia-id="SuccessAlert" />
      <pf-alert variant="warning" title="Warning alert title" ouia-id="WarningAlert" />
      <pf-alert variant="danger" title="Danger alert title" ouia-id="DangerAlert" />
    </story-canvas>

    <story-canvas title="Alert variations">
      <template #intro>
        <pre v-md>
          PatternFly supports several properties and variations that can be used to add extra content to an alert.

          - As demonstrated in the 1st variation below, use the `action-links` slot to add one or more `pf-alert-action-link` components that place links beneath the alert message. Pass in `href` and `component="a"` to have a `pf-alert-action-link` act as a proper link, rather than as a button.
          - As demonstrated in the 2nd variation below, use a native HTML `&lt;a&gt;` element to add links within an alert message.
          - As demonstrated in the 3rd variation below, use the `action-close` slot to add a `pf-alert-action-close-button` component, which can be used to manage and customize alert dismissals.
          - As demonstrated in the 4th and 5th variations below, use the `component` property to set the element for an alert title.
            - If there is not a description passed via the default slot, then the `component` prop should be set to a non-heading element such as a `span` or `div`.
            - If there is a description passed via the default slot, then the `component` prop should be a heading element. Headings should be ordered by their level and heading levels should not be skipped. For example, a heading of an `h2` level should not be followed directly by an `h4`.
        </pre>
      </template>

      <pf-alert variant="success" title="Success alert title">
        <template #action-links>
          <pf-alert-action-link component="a" href="#">View details</pf-alert-action-link>
          <pf-alert-action-link @click="log('Clicked on Ignore')">Ignore</pf-alert-action-link>
        </template>
        <p>Success alert description. This should tell the user more information about the alert.</p>
      </pf-alert>
      <pf-alert variant="success" title="Success alert title">
        <p>
          Success alert description. This should tell the user more information about the alert.
          <a href="#">This is a link.</a>
        </p>
      </pf-alert>
      <pf-alert variant="success" title="Success alert title">
        <template #action-close>
          <pf-alert-action-close-button @close="log('Clicked the close button')" />
        </template>
        <p>Short alert description.</p>
      </pf-alert>
      <pf-alert variant="success" title="div success alert title" component="div" />
      <pf-alert variant="success" title="h6 Success alert title" component="h6">
        <p>Short alert description.</p>
      </pf-alert>
    </story-canvas>

    <story-canvas title="Alert timeout">
      <template #intro>
        <pre v-md>
          Use the `timeout` property to automatically dismiss an alert after a period of time. If set to `true`, the `timeout` will be 8000 milliseconds. Provide a specific value to dismiss the alert after a different number of milliseconds.
        </pre>
      </template>

      <pf-button variant="secondary" @click="timeoutAlerts.unshift(nextKey())">Add alert</pf-button>
      <pf-alert-group animations live-region>
        <pf-alert
          v-for="key in timeoutAlerts"
          :key="key"
          title="Default timeout Alert"
          :timeout="8000"
          @timeout="timeoutAlerts.splice(timeoutAlerts.indexOf(key), 1)"
        >
          <template #action-links>
            <pf-alert-action-link component="a" href="#">View details</pf-alert-action-link>
            <pf-alert-action-link @click="log('Clicked on Ignore')">Ignore</pf-alert-action-link>
          </template>
          This alert will dismiss after 8 seconds
        </pf-alert>
      </pf-alert-group>
    </story-canvas>

    <story-canvas title="Expandable alerts">
      <template #intro>
        <pre v-md>
          An alert can contain additional, hidden information that is made visible when users click a caret icon. This information can be expanded and collapsed each time the icon is clicked.

          It is not recommended to use an expandable alert with a `timeout` in a toast alert group because the alert could timeout before users have time to interact with and view the entire alert.
        </pre>
      </template>

      <pf-alert expandable variant="success" title="Success alert title">
        <template #action-close>
          <pf-alert-action-close-button @close="log('Clicked the close button')" />
        </template>
        <p>Success alert description. This should tell the user more information about the alert.</p>
      </pf-alert>
      <pf-alert expandable inline variant="success" title="Success alert title">
        <template #action-links>
          <pf-alert-action-link component="a" href="#">View details</pf-alert-action-link>
          <pf-alert-action-link @click="log('Clicked on Ignore')">Ignore</pf-alert-action-link>
        </template>
        <p>Success alert description. This should tell the user more information about the alert.</p>
      </pf-alert>
    </story-canvas>

    <story-canvas title="Truncated alerts">
      <template #intro>
        <pre v-md>
          Use the `truncate-title` property to shorten a long `title`. Set it to a number to reduce the number of lines of text in the alert's `title`. Users may hover over or tab to a truncated `title` to see the full message in a tooltip.
        </pre>
      </template>

      <pf-alert variant="info" :truncate-title="1" :title="longTitle" />
      <pf-alert variant="warning" :truncate-title="2" :title="longTitle" />
      <pf-alert variant="danger" :truncate-title="3" :title="longTitle" />
    </story-canvas>

    <story-canvas title="Custom icons">
      <template #intro>
        <pre v-md>
          Use the `custom-icon` slot to replace a default alert icon with a custom icon.
        </pre>
      </template>

      <pf-alert title="Default alert title">
        <template #custom-icon>
          <users-icon />
        </template>
      </pf-alert>
      <pf-alert variant="info" title="Info alert title">
        <template #custom-icon>
          <box-icon />
        </template>
      </pf-alert>
      <pf-alert variant="success" title="Success alert title">
        <template #custom-icon>
          <database-icon />
        </template>
      </pf-alert>
      <pf-alert variant="warning" title="Warning alert title">
        <template #custom-icon>
          <server-icon />
        </template>
      </pf-alert>
      <pf-alert variant="danger" title="Danger alert title">
        <template #custom-icon>
          <laptop-icon />
        </template>
      </pf-alert>
    </story-canvas>

    <story-canvas title="Inline alerts variants">
      <template #intro>
        <pre v-md>
          Use inline alerts to display an alert inline with content. All alert variants may use the `inline` property to position alerts in content-heavy areas, such as within forms, wizards, or drawers.
        </pre>
      </template>

      <pf-alert variant="custom" inline title="Custom inline alert title" />
      <pf-alert variant="info" inline title="Info inline alert title" />
      <pf-alert variant="success" inline title="Success inline alert title" />
      <pf-alert variant="warning" inline title="Warning inline alert title" />
      <pf-alert variant="danger" inline title="Danger inline alert title" />
    </story-canvas>

    <story-canvas title="Inline alert variations">
      <template #intro>
        <pre v-md>
          All general alert variations can use the `inline` property to apply inline styling.
        </pre>
      </template>

      <pf-alert inline variant="success" title="Success alert title">
        <template #action-links>
          <pf-alert-action-link component="a" href="#">View details</pf-alert-action-link>
          <pf-alert-action-link @click="log('Clicked on Ignore')">Ignore</pf-alert-action-link>
        </template>
        <p>Success alert description. This should tell the user more information about the alert.</p>
      </pf-alert>
      <pf-alert inline variant="success" title="Success alert title">
        <p>
          Success alert description. This should tell the user more information about the alert.
          <a href="#">This is a link.</a>
        </p>
      </pf-alert>
      <pf-alert inline variant="success" title="Success alert title">
        <template #action-close>
          <pf-alert-action-close-button @close="log('Clicked the close button')" />
        </template>
        <p>Short alert description.</p>
      </pf-alert>
      <pf-alert inline variant="success" title="div success alert title" component="div" />
      <pf-alert inline variant="success" title="h6 Success alert title" component="h6">
        <p>Short alert description.</p>
      </pf-alert>
    </story-canvas>

    <story-canvas title="Plain inline alert variants">
      <template #intro>
        <pre v-md>
          Use the `plain` property to make any inline alert plain. Plain styling removes the colored background but keeps colored text and icons.
        </pre>
      </template>

      <pf-alert variant="custom" inline plain title="Custom inline alert title" />
      <pf-alert variant="info" inline plain title="Info inline alert title" />
      <pf-alert variant="success" inline plain title="Success inline alert title" />
      <pf-alert variant="warning" inline plain title="Warning inline alert title" />
      <pf-alert variant="danger" inline plain title="Danger inline alert title" />
    </story-canvas>

    <story-canvas title="Plain inline alert variations">
      <template #intro>
        <pre v-md>
          It is not recommended to use a plain inline alert with a close button nor action links because these alerts are non-dismissible and should persist until the error or action related to the alert is resolved.
        </pre>
      </template>

      <pf-alert inline plain variant="success" title="Success alert title">
        <p>Success alert description. This should tell the user more information about the alert.</p>
      </pf-alert>
    </story-canvas>

    <story-canvas title="Static live region alerts">
      <template #intro>
        <pre v-md>
          Live region alerts allow you to expose dynamic content changes in a way that can be announced by assistive technologies.

          By default, `live-region` alerts are static.
        </pre>
      </template>

      <pf-alert live-region variant="info" title="Default live region configuration">
        <template #action-close>
          <pf-alert-action-close-button @close="log('Clicked the close button')" />
        </template>
        This alert uses the recommended <code>live-region</code> prop to automatically set ARIA attributes and CSS
        classes.
      </pf-alert>
      <pf-alert
        aria-live="assertive"
        aria-relevant="additions text"
        aria-atomic="true"
        variant="info"
        title="Customized live region"
      >
        <template #action-close>
          <pf-alert-action-close-button @close="log('Clicked the close button')" />
        </template>
        You can alternatively omit the <code>live-region</code> prop to specify ARIA attributes and CSS manually on the
        containing element.
      </pf-alert>
    </story-canvas>

    <story-canvas title="Dynamic live region alerts">
      <template #intro>
        <pre v-md>
          Alerts that are asynchronously appended into dynamic alert groups via the `live-region` property will be announced to assistive technology the moment the change happens, following the strategy used for `aria-atomic`, which defaults to false. This means only changes of type "addition" will be announced.
        </pre>
      </template>

      <pf-flex gap="xs" style="margin-bottom: 16px">
        <pf-button variant="secondary" @click="liveAlerts.unshift(newAlert('Single success alert', 'success'))">
          Add single success alert
        </pf-button>
        <pf-button variant="secondary" @click="liveAlerts.unshift(newAlert('Single info alert', 'info'))">
          Add single info alert
        </pf-button>
        <pf-button variant="secondary" @click="liveAlerts.unshift(newAlert('Single danger alert', 'danger'))">
          Add single danger alert
        </pf-button>
      </pf-flex>
      <pf-alert-group animations live-region aria-live="polite" aria-relevant="additions text" aria-atomic="false">
        <pf-alert v-for="a in liveAlerts" :key="a.key" :variant="a.variant" :title="a.title" />
      </pf-alert-group>
    </story-canvas>

    <story-canvas title="Asynchronous live region alerts">
      <template #intro>
        <pre v-md>
          This example shows how an alert could be triggered by an asynchronous event in the application. Note that you can customize how the alert will be announced to assistive technology.
        </pre>
      </template>

      <pf-toggle-group aria-label="Toggle asynchronous alerts">
        <pf-toggle-group-item v-model:selected="asyncLiveActive" text="Async alerts on" button-id="async-alerts-on" />
      </pf-toggle-group>
      <pf-alert-group animations live-region>
        <pf-alert v-for="a in asyncLiveAlerts" :key="a.key" :variant="a.variant" :title="a.title" />
      </pf-alert-group>
    </story-canvas>

    <pre v-md>
      ## Alert group examples

      An alert group stacks and positions 2 or more alerts in a live region, either in a layer over the main content of a page or inline with the page content. Alert groups should always rank alerts by age, stacking new alerts on top of old ones as they surface.

      ### Alert group variants

      Alert groups can be one of the following variants:

      | Variant       | Description |
      | ------------- | ----------- |
      | Static inline | Static inline alert groups contain alerts that appear when the page loads, and are seen within the normal page content flow. These groups should not contain alerts that will dynamically appear or update. |
      | Toast         | Toast alert groups contain alerts that typically appear in response to an asynchronous event or user action. These groups are positioned on top of other content at the top right of the page. |
      | Dynamic       | Dynamic alert groups contain alerts that typically appear in response to a user action, and are seen within the normal page content flow. |

      Dynamic alerts that are generated after the page initially loads must be appended to either a toast or dynamic `pf-alert-group`, both of which must use the `live-region` property. New alerts appended to a toast or dynamic group will be announced by assistive technologies the moment the change happens.
    </pre>

    <story-canvas title="Static inline alert group">
      <template #intro>
        <pre v-md>
          All alert group variants may combine multiple alert variants. For example, the following static inline alert group includes one "success" alert and one "info" alert.
        </pre>
      </template>

      <pf-alert-group>
        <pf-alert title="Success alert" variant="success" inline />
        <pf-alert title="Info alert" variant="info" inline />
      </pf-alert-group>
    </story-canvas>

    <story-canvas title="Toast alert group">
      <template #intro>
        <pre v-md>
          Toast alert groups are created by passing in the `toast` and `live-region` properties.

          Click the buttons in the example below to add alerts to a toast group.
        </pre>
      </template>

      <pf-flex gap="xs">
        <pf-button variant="secondary" @click="toastAlerts.unshift(newAlert('Toast success alert', 'success'))">
          Add toast success alert
        </pf-button>
        <pf-button variant="secondary" @click="toastAlerts.unshift(newAlert('Toast danger alert', 'danger'))">
          Add toast danger alert
        </pf-button>
        <pf-button variant="secondary" @click="toastAlerts.unshift(newAlert('Toast info alert', 'info'))">
          Add toast info alert
        </pf-button>
      </pf-flex>
      <pf-alert-group animations toast live-region>
        <pf-alert
          v-for="a in toastAlerts"
          :key="a.key"
          :variant="a.variant"
          :title="a.title"
          @close="remove(toastAlerts, a.key)"
        />
      </pf-alert-group>
    </story-canvas>

    <story-canvas title="Toast alert group with overflow capture">
      <template #intro>
        <pre v-md>
          Users will see an overflow message once a predefined number of alerts are displayed. They will not see any alerts beyond the display limit, which must be explicitly set.

          In the following example, an overflow message will appear when more than 4 alerts would be shown. When a 5th alert would appear, an overflow message is shown instead.

          When an overflow message appears in a `pf-alert-group` using the `live-region` property, the "view 1 more alert" text label will be announced, but the alert message will not.

          Users navigating via keyboard or another assistive technology will need a way to navigate to and reveal hidden alerts before they disappear. Alternatively, there should be a place where notifications or alerts are collected to be viewed or read later.
        </pre>
      </template>

      <pf-flex gap="xs" style="margin-bottom: 16px">
        <pf-button variant="secondary" @click="toastOverflowAlerts.unshift(newAlert('Toast success alert', 'success'))">
          Add toast success alert
        </pf-button>
        <pf-button variant="secondary" @click="toastOverflowAlerts.unshift(newAlert('Toast danger alert', 'danger'))">
          Add toast danger alert
        </pf-button>
        <pf-button variant="secondary" @click="toastOverflowAlerts.unshift(newAlert('Toast info alert', 'info'))">
          Add toast info alert
        </pf-button>
      </pf-flex>
      <pf-alert-group
        animations
        toast
        live-region
        :overflow-message="overflowMessage(toastOverflowAlerts.length)"
        @overflow-click="log('Overflow message clicked')"
      >
        <pf-alert
          v-for="a in toastOverflowAlerts.slice(0, maxDisplayed)"
          :key="a.key"
          :variant="a.variant"
          :title="a.title"
          @close="remove(toastOverflowAlerts, a.key)"
        />
      </pf-alert-group>
    </story-canvas>

    <story-canvas title="Asynchronous alert groups">
      <template #intro>
        <pre v-md>
          The following example shows how alerts can be triggered by an asynchronous event in the application. You can customize how an alert will be announced to assistive technology by adjusting the value of the `aria-live` property. Click the "start async alerts" button below and then click the buttons in the above toast examples to demonstrate how asynchronous events add alerts to a group. Click the "stop async alerts" button to halt this behavior.
        </pre>
      </template>

      <pf-input-group style="margin-bottom: 16px">
        <pf-input-group-item>
          <pf-button variant="secondary" @click="asyncGroupActive = true">Start async alerts</pf-button>
        </pf-input-group-item>
        <pf-input-group-item>
          <pf-button variant="secondary" @click="asyncGroupActive = false">Stop async alerts</pf-button>
        </pf-input-group-item>
      </pf-input-group>
      <pf-alert-group animations toast live-region aria-live="assertive">
        <pf-alert
          v-for="a in asyncGroupAlerts"
          :key="a.key"
          :variant="a.variant"
          :title="a.title"
          @close="remove(asyncGroupAlerts, a.key)"
        />
      </pf-alert-group>
    </story-canvas>

    <story-canvas title="Dynamic alert groups">
      <template #intro>
        <pre v-md>
          Click the buttons in the example below to add dynamic alerts to a group.
        </pre>
      </template>

      <pf-flex gap="xs" style="margin-bottom: 16px">
        <pf-button variant="secondary" @click="dynamicAlerts.unshift(newAlert('Success alert', 'success'))">
          Add single success alert
        </pf-button>
        <pf-button variant="secondary" @click="dynamicAlerts.unshift(newAlert('Danger alert', 'danger'))">
          Add single danger alert
        </pf-button>
        <pf-button variant="secondary" @click="dynamicAlerts.unshift(newAlert('Info alert', 'info'))">
          Add single info alert
        </pf-button>
      </pf-flex>
      <pf-alert-group animations live-region>
        <pf-alert
          v-for="a in dynamicAlerts"
          :key="a.key"
          inline
          :variant="a.variant"
          :title="a.title"
          @close="remove(dynamicAlerts, a.key)"
        />
      </pf-alert-group>
    </story-canvas>

    <story-canvas title="Dynamic alert group with overflow message">
      <template #intro>
        <pre v-md>
          In the following example, there can be a maximum of 4 alerts shown at once.
        </pre>
      </template>

      <pf-flex gap="xs" style="margin-bottom: 16px">
        <pf-button variant="secondary" @click="dynamicOverflowAlerts.unshift(newAlert('Success alert', 'success'))">
          Add single success alert
        </pf-button>
        <pf-button variant="secondary" @click="dynamicOverflowAlerts.unshift(newAlert('Danger alert', 'danger'))">
          Add single danger alert
        </pf-button>
        <pf-button variant="secondary" @click="dynamicOverflowAlerts.unshift(newAlert('Info alert', 'info'))">
          Add single info alert
        </pf-button>
      </pf-flex>
      <pf-alert-group
        animations
        live-region
        :overflow-message="overflowMessage(dynamicOverflowAlerts.length)"
        @overflow-click="log('Overflow message clicked')"
      >
        <pf-alert
          v-for="a in dynamicOverflowAlerts.slice(0, maxDisplayed)"
          :key="a.key"
          inline
          :variant="a.variant"
          :title="a.title"
          @close="remove(dynamicOverflowAlerts, a.key)"
        />
      </pf-alert-group>
    </story-canvas>

    <story-canvas title="Multiple dynamic alert groups">
      <template #intro>
        <pre v-md>
          You may add multiple alerts to an alert group at once. Click the "add alert collection" button in the example below to add a batch of 3 toast alerts to a group.
        </pre>
      </template>

      <pf-flex gap="xs">
        <pf-button
          variant="secondary"
          @click="
            multipleAlerts.unshift(
              newAlert('First alert notification.', 'success'),
              newAlert('Second alert notification.', 'warning'),
              newAlert('Third alert notification.', 'danger'),
            )
          "
        >
          Add alert collection
        </pf-button>
      </pf-flex>
      <pf-alert-group animations toast live-region>
        <pf-alert
          v-for="a in multipleAlerts"
          :key="a.key"
          :variant="a.variant"
          :title="a.title"
          @close="remove(multipleAlerts, a.key)"
        />
      </pf-alert-group>
    </story-canvas>
  </doc-page>
</template>

<style scoped>
.pf-v6-c-alert {
  margin-bottom: 21px;
}
.pf-v6-c-alert-group .pf-v6-c-alert {
  margin-bottom: 0;
}
</style>

<script lang="ts" setup>
import { onBeforeUnmount, reactive, ref, watch } from 'vue';
import UsersIcon from '@vue-patternfly/icons/users-icon';
import BoxIcon from '@vue-patternfly/icons/box-icon';
import DatabaseIcon from '@vue-patternfly/icons/database-icon';
import ServerIcon from '@vue-patternfly/icons/server-icon';
import LaptopIcon from '@vue-patternfly/icons/laptop-icon';

type Variant = 'success' | 'danger' | 'warning' | 'info' | 'custom';
type AlertData = { title: string; variant: Variant; key: number };

let lastKey = 0;
const nextKey = () => ++lastKey;
const newAlert = (title: string, variant: Variant): AlertData => ({ title, variant, key: nextKey() });
const remove = (alerts: AlertData[], key: number) => {
  const index = alerts.findIndex(a => a.key === key);
  if (index >= 0) {
    alerts.splice(index, 1);
  }
};
const log = (msg: string) => console.log(msg);

const longTitle =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque cursus enim fringilla tincidunt. Proin lobortis aliquam dictum. Nam vel ullamcorper nulla, nec blandit dolor. Vivamus pellentesque neque justo, nec accumsan nulla rhoncus id. Suspendisse mollis, tortor quis faucibus volutpat, sem leo fringilla turpis, ac lacinia augue metus in nulla. Cras vestibulum lacinia orci. Pellentesque sodales consequat interdum. Sed porttitor tincidunt metus nec iaculis. Pellentesque non commodo justo. Morbi feugiat rhoncus neque, vitae facilisis diam aliquam nec. Sed dapibus vitae quam at tristique. Nunc vel commodo mi. Mauris et rhoncus leo.';

const timeoutAlerts = reactive<number[]>([]);
const liveAlerts = reactive<AlertData[]>([]);
const toastAlerts = reactive<AlertData[]>([]);
const toastOverflowAlerts = reactive<AlertData[]>([]);
const asyncGroupAlerts = reactive<AlertData[]>([]);
const dynamicAlerts = reactive<AlertData[]>([]);
const dynamicOverflowAlerts = reactive<AlertData[]>([]);
const multipleAlerts = reactive<AlertData[]>([]);

const maxDisplayed = 4;
const overflowMessage = (count: number) => (count > maxDisplayed ? `View ${count - maxDisplayed} more alerts` : '');

// adds an alert every 4.5 seconds while active
function useAsyncAlerts(active: { value: boolean }, add: () => void) {
  let timer: ReturnType<typeof setInterval> | undefined;
  watch(
    () => active.value,
    value => {
      clearInterval(timer);
      if (value) {
        timer = setInterval(add, 4500);
      }
    },
  );
  onBeforeUnmount(() => clearInterval(timer));
}

const asyncLiveActive = ref(false);
const asyncLiveAlerts = reactive<AlertData[]>([]);
useAsyncAlerts(asyncLiveActive, () =>
  asyncLiveAlerts.unshift(newAlert(`Async alert number ${asyncLiveAlerts.length + 1}`, 'info')),
);

const asyncGroupActive = ref(false);
useAsyncAlerts(asyncGroupActive, () =>
  asyncGroupAlerts.unshift(
    newAlert(`Async notification ${asyncGroupAlerts.length + 1} was added to the queue.`, 'danger'),
  ),
);
</script>
