<template>
  <pf-page-section variant="light">
    <div class="doc-content">
      <pf-title>Alert</pf-title>

      <pf-title class="example-heading" h="3">
        Types
      </pf-title>
      <pf-alert title="Default alert title" />
      <pf-alert variant="info" title="Info alert title" />
      <pf-alert variant="success" title="Success alert title" />
      <pf-alert variant="warning" title="Warning alert title" />
      <pf-alert variant="danger" title="Danger alert title" />

      <pf-title class="example-heading" h="3">
        Variations
      </pf-title>
      <pf-alert
        variant="success"
        title="Success alert title"
        close
        @close="alert('Clicked the close button')"
      >
        <template #action-links>
          <pf-alert-action-link @click="alert('Clicked on View details')">
            View details
          </pf-alert-action-link>
          <pf-alert-action-link @click="alert('Clicked on Ignore')">
            Ignore
          </pf-alert-action-link>
        </template>

        <p>Success alert description. This should tell the user more information about the alert.</p>
      </pf-alert>
      <pf-alert variant="success" title="Success alert title" close @close="alert('Clicked the close button')">
        <p>
          Success alert description. This should tell the user more information about the alert.{{ ' ' }}
          <a href="#">This is a link.</a>
        </p>
      </pf-alert>
      <pf-alert
        variant="success"
        title="Success alert title"
        close
        @close="alert('Clicked the close button')"
      >
        <template #action-links>
          <pf-alert-action-link @click="alert('Clicked on View details')">
            View details
          </pf-alert-action-link>
          <pf-alert-action-link @click="alert('Clicked on Ignore')">
            Ignore
          </pf-alert-action-link>
        </template>
      </pf-alert>
      <pf-alert variant="success" title="Success alert title" close @close="alert('Clicked the close button')" />
      <pf-alert variant="success" title="Success alert title" />

      <pf-title class="example-heading" h="3">
        Inline types
      </pf-title>
      <pf-alert variant="default" inline title="Default alert title" />
      <pf-alert variant="info" inline title="Info alert title" />
      <pf-alert variant="success" inline title="Success alert title" />
      <pf-alert variant="warning" inline title="Warning alert title" />
      <pf-alert variant="danger" inline title="Danger alert title" />

      <pf-title class="example-heading" h="3">
        Inline variations
      </pf-title>
      <pf-alert
        inline
        variant="success"
        title="Success alert title"
        close
        @close="alert('Clicked the close button')"
      >
        <template #action-links>
          <pf-alert-action-link @click="alert('Clicked on View details')">
            View details
          </pf-alert-action-link>
          <pf-alert-action-link @click="alert('Clicked on Ignore')">
            Ignore
          </pf-alert-action-link>
        </template>

        <p>Success alert description. This should tell the user more information about the alert.</p>
      </pf-alert>
      <pf-alert inline variant="success" title="Success alert title"
                close @close="alert('Clicked the close button')"
      >
        <p>
          Success alert description. This should tell the user more information about the alert.{{ ' ' }}
          <a href="#">This is a link.</a>
        </p>
      </pf-alert>
      <pf-alert
        inline
        variant="success"
        title="Success alert title"
        close
        @close="alert('Clicked the close button')"
      >
        <template #action-links>
          <pf-alert-action-link @click="alert('Clicked on View details')">
            View details
          </pf-alert-action-link>
          <pf-alert-action-link @click="alert('Clicked on Ignore')">
            Ignore
          </pf-alert-action-link>
        </template>
      </pf-alert>
      <pf-alert
        inline
        variant="success"
        title="Success alert title"
        close
        @close="alert('Clicked the close button')"
      />
      <pf-alert inline variant="success" title="Success alert title" />

      <pf-title class="example-heading" h="3">
        Static live region alert
      </pf-title>
      <pf-alert
        live-region
        variant="info"
        title="Default live region configuration"
        close
        @close="alert('Clicked the close button')"
      >
        This Alert uses the recommended <code>live-region</code> prop to automatically sets ARIA attributes and CSS
        classes.
      </pf-alert>
      <pf-alert
        aria-live="assertive"
        aria-relevant="additions text"
        aria-atomic="true"
        variant="info"
        title="Customized live region"
        close
        @close="alert('Clicked the close button')"
      >
        You can alternatively omit the <code>live-region</code> prop to specify ARIA attributes and CSS manually on
        the containing element.
      </pf-alert>

      <pf-title class="example-heading" h="3">
        Dynamic live region alert
      </pf-title>
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

      <pf-title class="example-heading" h="3">
        Async live region alert
      </pf-title>
      <pf-input-group style="margin-bottom: 16px">
        <pf-button variant="secondary" @click="startAsyncAlert">
          Start Async Info Alerts
        </pf-button>
        <pf-button variant="secondary" @click="stopAsyncAlert">
          Stop Async Info Alerts
        </pf-button>
      </pf-input-group>

      <pf-alert
        v-for="a of asyncAlerts"
        :key="a.key"
        :variant="a.variant"
        :title="a.title"
        :live-region="a.liveRegion"
      />

      <pf-title class="example-heading" h="3">
        Alert timeout
      </pf-title>
      <pf-input-group style="margin-bottom: 16px">
        <pf-button variant="secondary" :disabled="showTimeoutAlerts" @click="showTimeoutAlerts = !showTimeoutAlerts">
          <template v-if="showTimeoutAlerts">
            0 alerts to show
          </template>
          <template v-else>
            Show 2 alerts
          </template>
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

      <pf-title class="example-heading" h="3">
        Custom icons
      </pf-title>
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
    </div>
  </pf-page-section>
</template>

<script>
import UsersIcon from '@vue-patternfly4/icons/dist/esm/icons/users-icon';
import BoxIcon from '@vue-patternfly4/icons/dist/esm/icons/box-icon';
import DatabaseIcon from '@vue-patternfly4/icons/dist/esm/icons/database-icon';
import ServerIcon from '@vue-patternfly4/icons/dist/esm/icons/server-icon';
import LaptopIcon from '@vue-patternfly4/icons/dist/esm/icons/laptop-icon';

export default {
  name: 'AlertPage',

  components: {UsersIcon, BoxIcon, DatabaseIcon, ServerIcon, LaptopIcon},

  data() {
    return {
      alerts: [],
      asyncAlerts: [],
      showTimeoutAlerts: false,
      timer: null,
    };
  },

  beforeUnmount() {
    this.stopAsyncAlert();
  },

  methods: {
    alert: message => alert(message),

    getUniqueId: () => new Date().getTime(),

    stopAsyncAlert() {
      clearInterval(this.timer);
    },

    startAsyncAlert() {
      this.timer = setInterval(() => {
        this.asyncAlerts.push({
          title: `This is a async alert number ${this.asyncAlerts.length + 1}`,
          variant: 'info',
          isLiveRegion: true,
          key: this.getUniqueId(),
        });
      }, 1500);
    },
  },
};
</script>

<style scoped>
.pf-c-alert {
  margin-bottom: 21px;
}

.doc-content {
  max-width: 832px;
}
</style>
