<template>
  <doc-page title="Select">
    <pf-title class="example-heading" h="3">
      Single
    </pf-title>
    <pf-select :disabled="disabled1" :up="up1" :toggle-icon="icon1">
      <template v-if="icon1" #toggle-icon>
        <CubesIcon />
      </template>

      <pf-select-option value="Choose..." placeholder />
      <pf-select-option value="Mr" />
      <pf-select-option value="Miss" />
      <pf-select-option value="Mrs" />
      <pf-select-option value="Ms" />
      <pf-divider component="li" />
      <pf-select-option value="Dr" />
      <pf-select-option value="Other" />
    </pf-select>

    <div>
      <label><input v-model="disabled1" type="checkbox"> disabled</label>
    </div>
    <div>
      <label><input v-model="up1" type="checkbox"> expand up</label>
    </div>
    <div>
      <label><input v-model="icon1" type="checkbox"> show icon</label>
    </div>

    <pf-title class="example-heading" h="3">
      Single with description
    </pf-title>
    <pf-select placeholder="Select an option">
      <pf-select-option value="Mr" description="This is a description" />
      <pf-select-option value="Miss" description="This is a description" />
      <pf-select-option value="Mrs" description="This is a description" />
      <pf-select-option value="Ms" description="This is a description" />
      <pf-divider component="li" />
      <pf-select-option value="Dr" description="This is a description" />
      <pf-select-option value="Other" description="This is a description" />
    </pf-select>

    <pf-title class="example-heading" h="3">
      Grouped single
    </pf-title>
    <pf-select placeholder="Filter by status/vendor">
      <pf-select-group label="Status">
        <pf-select-option value="Running" />
        <pf-select-option value="Stopped" />
        <pf-select-option value="Down" />
        <pf-select-option value="Degraded" />
        <pf-select-option value="Needs Maintenance" />
      </pf-select-group>
      <pf-divider component="li" />
      <pf-select-group label="Status">
        <pf-select-option value="Dell" />
        <pf-select-option value="Samsung" disabled />
        <pf-select-option value="Hewlett-Packard" />
      </pf-select-group>
    </pf-select>

    <pf-title class="example-heading" h="3">
      Checkbox input
    </pf-title>
    <pf-select variant="checkbox" placeholder="Filter by status/vendor">
      <pf-select-option value="Active" description="This is a description" />
      <pf-select-option value="Cancelled" />
      <pf-select-option value="Paused" />
      <pf-divider component="li" />
      <pf-select-option value="Warning" />
      <pf-select-option value="Restarted" />
    </pf-select>

    <pf-title class="example-heading" h="3">
      Checkbox input no badge
    </pf-title>
    <pf-select variant="checkbox" placeholder="Filter by status" selection-badge-hidden>
      <pf-select-option value="Debug" />
      <pf-select-option value="Info" />
      <pf-select-option value="Warn" />
      <pf-select-option value="Error" />
    </pf-select>

    <pf-title class="example-heading" h="3">
      Grouped checkbox input
    </pf-title>
    <pf-select variant="checkbox" placeholder="Filter by status/vendor">
      <pf-select-group label="Status">
        <pf-select-option value="Running" />
        <pf-select-option value="Stopped" />
        <pf-select-option value="Down" />
        <pf-select-option value="Degraded" />
        <pf-select-option value="Needs Maintenance" />
      </pf-select-group>
      <pf-divider component="li" />
      <pf-select-group label="Status">
        <pf-select-option value="Dell" />
        <pf-select-option value="Samsung" disabled />
        <pf-select-option value="Hewlett-Packard" />
      </pf-select-group>
    </pf-select>

    <pf-title class="example-heading" h="3">
      Grouped checkbox input with filtering and placeholder text
    </pf-title>
    <pf-select variant="checkbox" placeholder="Filter by status/vendor" inline-filter inline-filter-placeholder="Filter by status">
      <pf-select-group label="Status">
        <pf-select-option value="Running" />
        <pf-select-option value="Stopped" />
        <pf-select-option value="Down" />
        <pf-select-option value="Degraded" />
        <pf-select-option value="Needs Maintenance" />
      </pf-select-group>
      <pf-divider component="li" />
      <pf-select-group label="Status">
        <pf-select-option value="Dell" />
        <pf-select-option value="Samsung" disabled />
        <pf-select-option value="Hewlett-Packard" />
      </pf-select-group>
    </pf-select>
  </doc-page>
</template>

<script>
import CubesIcon from '@vue-patternfly4/icons/dist/esm/icons/cubes-icon';

export default {
  name: 'SelectPage',

  components: {CubesIcon},

  data() {
    return {
      disabled1: false,
      up1: false,
      icon1: false,
    };
  },
};
</script>
