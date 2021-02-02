<template>
  <pf-page-section variant="light">
    <div class="doc-content">
      <pf-title>Alert group</pf-title>

      <pf-title class="example-heading" h="3">
        Static alert group
      </pf-title>
      <pf-alert-group>
        <pf-alert title="Success Alert" variant="success" inline />
        <pf-alert title="Info Alert" variant="info" inline />
      </pf-alert-group>

      <pf-title class="example-heading" h="3">
        Toast alert group
      </pf-title>
      <pf-input-group style="margin-bottom: 16px">
        <pf-button
          variant="secondary"
          @click="alerts.push({
            title: 'Toast Success Alert',
            variant: 'success',
            key: getUniqueId(),
          })"
        >
          Add Toast Success Alert
        </pf-button>
        <pf-button
          variant="secondary"
          @click="alerts.push({
            title: 'Toast Info Alert',
            variant: 'info',
            key: getUniqueId(),
          })"
        >
          Add Toast Info Alert
        </pf-button>
        <pf-button
          variant="secondary"
          @click="alerts.push({
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
          v-for="(a, index) of alerts"
          :key="a.key"
          :variant="a.variant"
          :title="a.title"
          live-region
          close
          @close="alerts.splice(index, 1)"
        />
      </pf-alert-group>

      <pf-title class="example-heading" h="3">
        Singular dynamic alert group
      </pf-title>

      <pf-title class="example-heading" h="3">
        Multiple dynamic alert group
      </pf-title>

      <pf-title class="example-heading" h="3">
        Async alert group
      </pf-title>
    </div>
  </pf-page-section>
</template>

<script>
export default {
  name: 'AlertGroupPage',

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
