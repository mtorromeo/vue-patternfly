<template>
  <doc-page title="Alert">
    <template #description>An <b>alert</b> is a notification that provides brief information to the user without blocking their workflow.</template>

    <template #apidocs>
      <component-info name="PfAlert" />
      <component-info name="PfAlertActionLink" />
      <component-info name="PfAlertGroup" />
      <component-info name="PfAlertGroupInline" />
      <component-info name="PfAlertIcon" />
    </template>

    <story-canvas title="Types">
      <pf-alert title="Custom alert title" />
      <pf-alert variant="info" title="Info alert title" />
      <pf-alert variant="success" title="Success alert title" />
      <pf-alert variant="warning" title="Warning alert title" />
      <pf-alert variant="danger" title="Danger alert title" />
    </story-canvas>

    <story-canvas title="With action links">
      <pf-alert title="Alert title" @close="alert('Clicked the close button')">
        <template #action-links>
          <pf-alert-action-link @click="alert('Clicked on View details')">View details</pf-alert-action-link>
          <pf-alert-action-link @click="alert('Clicked on Ignore')">Ignore</pf-alert-action-link>
        </template>
        <p>{{ sample_text }}</p>
      </pf-alert>
    </story-canvas>

    <story-canvas title="Inline types">
      <pf-alert variant="custom" inline title="Custom alert title" />
      <pf-alert variant="info" inline title="Info alert title" />
      <pf-alert variant="success" inline title="Success alert title" />
      <pf-alert variant="warning" inline title="Warning alert title" />
      <pf-alert variant="danger" inline title="Danger alert title" />
    </story-canvas>

    <story-canvas title="Inline variations">
      <pf-alert
        inline
        variant="success"
        title="Success alert title"
        @close="alert('Clicked the close button')"
      >
        <template #action-links>
          <pf-alert-action-link @click="alert('Clicked on View details')">View details</pf-alert-action-link>
          <pf-alert-action-link @click="alert('Clicked on Ignore')">Ignore</pf-alert-action-link>
        </template>

        <p>Success alert description. This should tell the user more information about the alert.</p>
      </pf-alert>
    </story-canvas>

    <story-canvas title="Static live region">
      <pf-alert
        live-region
        variant="info"
        title="Default live region configuration"
        @close="alert('Clicked the close button')"
      >
        This Alert uses the recommended
        <code>live-region</code> prop to automatically sets ARIA attributes and CSS
        classes.
      </pf-alert>

      <pf-alert
        aria-live="assertive"
        aria-relevant="additions text"
        aria-atomic="true"
        variant="info"
        title="Customized live region"
        @close="alert('Clicked the close button')"
      >
        You can alternatively omit the
        <code>live-region</code> prop to specify ARIA attributes and CSS manually on
        the containing element.
      </pf-alert>
    </story-canvas>

    <story-canvas title="Dynamic live region">
      <pf-input-group style="margin-bottom: 16px">
        <pf-button
          variant="secondary"
          @click="alerts.push({
            title: 'Single Success Alert',
            variant: 'success',
            liveRegion: true,
            key: getUniqueId(),
          })"
        >
          Add Single Success Alert
        </pf-button>
        <pf-button
          variant="secondary"
          @click="alerts.push({
            title: 'Single Info Alert',
            variant: 'info',
            liveRegion: true,
            key: getUniqueId(),
          })"
        >
          Add Single Info Alert
        </pf-button>
        <pf-button
          variant="secondary"
          @click="alerts.push({
            title: 'Single Danger Alert',
            variant: 'danger',
            ariaLive: 'assertive',
            ariaRelevant: 'additions text',
            ariaAtomic: 'false',
            key: getUniqueId(),
          })"
        >
          Add Single Danger Alert
        </pf-button>
      </pf-input-group>

      <pf-alert
        v-for="a of alerts"
        :key="a.key"
        :variant="a.variant"
        :title="a.title"
        :live-region="a.liveRegion"
        :aria-live="a.ariaLive"
        :aria-relevant="a.ariaRelevant"
        :aria-atomic="a.ariaAtomic"
      />
    </story-canvas>

    <story-canvas title="Async live region">
      <pf-input-group style="margin-bottom: 16px">
        <pf-button variant="secondary" @click="startAsyncAlert">Start Async Info Alerts</pf-button>
        <pf-button variant="secondary" @click="stopAsyncAlert">Stop Async Info Alerts</pf-button>
      </pf-input-group>

      <pf-alert
        v-for="a of asyncAlerts"
        :key="a.key"
        :variant="a.variant"
        :title="a.title"
        :live-region="a.liveRegion"
      />
    </story-canvas>

    <story-canvas title="Alert timeout">
      <pf-input-group style="margin-bottom: 16px">
        <pf-button
          variant="secondary"
          :disabled="showTimeoutAlerts"
          @click="showTimeoutAlerts = !showTimeoutAlerts"
        >
          <template v-if="showTimeoutAlerts">0 alerts to show</template>
          <template v-else>Show 2 alerts</template>
        </pf-button>
      </pf-input-group>

      <template v-if="showTimeoutAlerts">
        <pf-alert title="Default timeout Alert" timeout>
          This alert will dismiss after 8 seconds
        </pf-alert>
        <pf-alert title="Custom timeout Alert" :timeout="16000">
          This alert will dismiss after 16 seconds
        </pf-alert>
      </template>
    </story-canvas>

    <story-canvas title="Custom icons">
      <pf-alert title="Custom alert title">
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

    <story-canvas title="Static Alert Group">
      <pf-alert-group>
        <pf-alert title="Success Alert" variant="success" inline />
        <pf-alert title="Info Alert" variant="info" inline />
      </pf-alert-group>
    </story-canvas>

    <story-canvas title="Toast">
      <pf-input-group>
        <pf-button
          variant="secondary"
          @click="alerts3.push({
            title: 'Toast Success Alert',
            variant: 'success',
            key: getUniqueId(),
          })"
        >
          Add Toast Success Alert
        </pf-button>
        <pf-button
          variant="secondary"
          @click="alerts3.push({
            title: 'Toast Info Alert',
            variant: 'info',
            key: getUniqueId(),
          })"
        >
          Add Toast Info Alert
        </pf-button>
        <pf-button
          variant="secondary"
          @click="alerts3.push({
            title: 'Toast Danger Alert',
            variant: 'danger',
            key: getUniqueId(),
          })"
        >
          Add Toast Danger Alert
        </pf-button>
      </pf-input-group>

      <pf-alert-group toast>
        <pf-alert
          v-for="(a, index) of alerts3"
          :key="a.key"
          :variant="a.variant"
          :title="a.title"
          live-region
          @close="alerts3.splice(index, 1)"
        />
      </pf-alert-group>
    </story-canvas>

    <story-canvas title="Toast with overflow capture">
      <pf-input-group>
        <pf-button
          variant="secondary"
          @click="alerts2.push({
            title: 'Toast Success Alert',
            variant: 'success',
            key: getUniqueId(),
          })"
        >
          Add Toast Success Alert
        </pf-button>
        <pf-button
          variant="secondary"
          @click="alerts2.push({
            title: 'Toast Info Alert',
            variant: 'info',
            key: getUniqueId(),
          })"
        >
          Add Toast Info Alert
        </pf-button>
        <pf-button
          variant="secondary"
          @click="alerts2.push({
            title: 'Toast Danger Alert',
            variant: 'danger',
            key: getUniqueId(),
          })"
        >
          Add Toast Danger Alert
        </pf-button>
      </pf-input-group>

      <pf-alert-group toast live-region :overflow-message="overflowMessage" @overflow-click="onOverflowClick">
        <pf-alert
          v-for="(a, index) of alerts2.slice(0, maxDisplayed)"
          :key="a.key"
          :variant="a.variant"
          :title="a.title"
          live-region
          @close="alerts2.splice(index, 1)"
        />
      </pf-alert-group>
    </story-canvas>
  </doc-page>
</template>

<style scoped>
.pf-v6-c-alert + .pf-v6-c-alert {
  margin-top: 20px;
}
</style>

<script lang="ts" setup>
import { computed, reactive, ref, type HTMLAttributes } from 'vue';
import type { PfAlert } from '@vue-patternfly/core';
import type { ComponentProps } from 'vue-component-type-helpers';
import UsersIcon from '@vue-patternfly/icons/users-icon';
import BoxIcon from '@vue-patternfly/icons/box-icon';
import DatabaseIcon from '@vue-patternfly/icons/database-icon';
import ServerIcon from '@vue-patternfly/icons/server-icon';
import LaptopIcon from '@vue-patternfly/icons/laptop-icon';

type AlertData = {
  title: string;
  variant: ComponentProps<(typeof PfAlert)>['variant'];
  liveRegion?: boolean;
  key: number;
  ariaLive?: HTMLAttributes['aria-live'];
  ariaRelevant?: HTMLAttributes['aria-relevant'];
  ariaAtomic?: HTMLAttributes['aria-atomic'];
};

const sample_text = ref("Alert text");

const alerts: AlertData[] = reactive([]);
const alerts2: AlertData[] = reactive([]);
const alerts3: AlertData[] = reactive([]);
const alert = (msg: string) => window.alert(msg);

const getUniqueId = () => new Date().getTime();

const asyncAlerts: AlertData[] = reactive([]);
let timer: number | undefined = undefined;

const stopAsyncAlert = () => {
  clearInterval(timer);
};

const startAsyncAlert = () => {
  timer = setInterval(() => {
    asyncAlerts.push({
      title: `This is a async alert number ${asyncAlerts.length + 1}`,
      variant: 'info',
      liveRegion: true,
      key: getUniqueId(),
    });
  }, 1500);
};

const showTimeoutAlerts = ref(false);

const onOverflowClick = () => console.log('Overflow message clicked');
const maxDisplayed = 4;
const overflowMessage = computed(() => {
  const overflow = alerts2.length - maxDisplayed;
  if (overflow > 0) {
    return `View ${overflow} more alerts`;
  }
  return '';
});
</script>
