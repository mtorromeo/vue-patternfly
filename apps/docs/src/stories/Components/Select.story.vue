<template>
  <doc-page title="Select">
    <component-title name="pf-select" />

    <pre v-md>
      A **select list** enables users to select one or more items from a list. Use a select list when options are dynamic or variable.
      [View PatternFly design guidelines](https://www.patternfly.org/v4/components/select/design-guidelines)
      ## Differences from patternfly-react
      - There is no `grouped` prop since the presence of groups is auto-detected.
      See [common differences from patternfly-react](#/).
      ## Examples
    </pre>

    <story-canvas title="Single">
      <pf-select>
        <pf-select-option placeholder disabled>
          Please Choose
        </pf-select-option>
        <pf-select-option value="Mr" />
        <pf-select-option value="Miss" />
        <pf-select-option value="Mrs" />
        <pf-select-option value="Ms" />
        <pf-select-option value="Dr" disabled />
      </pf-select>
    </story-canvas>

    <story-canvas title="Single with description">
      <pf-select>
        <pf-select-option value="Active" description="This is a description" />
        <pf-select-option value="Cancelled" />
        <pf-select-option value="Paused" />
        <pf-divider v-if="divider" />
        <pf-select-option value="Warning" />
        <pf-select-option value="Restarted" />
      </pf-select>
    </story-canvas>

    <story-canvas title="Grouped single">
      <pf-select>
        <pf-select-group label="Status">
          <pf-select-option value="Running" />
          <pf-select-option value="Stopped" />
          <pf-select-option value="Down" />
          <pf-select-option value="Degraded" />
          <pf-select-option value="Needs maintenance" />
        </pf-select-group>
        <pf-divider v-if="divider" />
        <pf-select-group label="Vendor names">
          <pf-select-option value="Dell" />
          <pf-select-option value="Samsung" disabled />
          <pf-select-option value="Hewlett-Packard" />
        </pf-select-group>
      </pf-select>
    </story-canvas>

    <story-canvas title="Checkbox input">
      <pf-select placeholder="Filter by status" variant="checkbox">
        <pf-select-option placeholder disabled>
          Please Choose
        </pf-select-option>
        <pf-select-option check value="Mr" />
        <pf-select-option check value="Miss" />
        <pf-select-option check value="Mrs" />
        <pf-select-option check value="Ms" />
        <pf-select-option check value="Dr" disabled />
      </pf-select>
    </story-canvas>

    <story-canvas title="Checkbox input with counts">
      <pf-select placeholder="Filter by status" variant="checkbox">
        <pf-select-option disabled>
          Please Choose
        </pf-select-option>
        <pf-select-option check value="Mr" />
        <pf-select-option check value="Miss" />
        <pf-select-option check value="Mrs" />
        <pf-select-option check value="Ms" />
        <pf-select-option check value="Dr" disabled />
      </pf-select>
    </story-canvas>

    <story-canvas title="Checkbox input no badge">
      <pf-select placeholder="Filter by status" variant="checkbox" selection-badge-hidden>
        <pf-select-option disabled>
          Please Choose
        </pf-select-option>
        <pf-select-option check value="Mr" />
        <pf-select-option check value="Miss" />
        <pf-select-option check value="Mrs" />
        <pf-select-option check value="Ms" />
        <pf-select-option check value="Dr" disabled />
      </pf-select>
    </story-canvas>

    <story-canvas title="Grouped checkbox input">
      <pf-select placeholder="Filter by status" variant="checkbox">
        <pf-select-option disabled>
          Please Choose
        </pf-select-option>
        <pf-select-option check value="Mr" />
        <pf-select-option check value="Miss" />
        <pf-select-option check value="Mrs" />
        <pf-select-option check value="Ms" />
        <pf-select-option check value="Dr" disabled />
      </pf-select>
    </story-canvas>

    <story-canvas title="Grouped single with filtering">
      <pf-select placeholder="Filter by status" variant="checkbox">
        <pf-text-input :auto-validate="false" aria-label="Filter menu items" type="search" icon-variant="search" />
        <pf-divider />
        <pf-select-group label="Status">
          <pf-select-option value="Running" />
          <pf-select-option value="Stopped" />
          <pf-select-option value="Down" />
          <pf-select-option value="Degraded" />
          <pf-select-option value="Needs maintenance" />
        </pf-select-group>
        <pf-select-group label="Vendor names">
          <pf-select-option value="Dell" />
          <pf-select-option value="Samsung" disabled />
          <pf-select-option value="Hewlett-Packard" />
        </pf-select-group>
      </pf-select>
    </story-canvas>

    <story-canvas title="Favorites">
      <pf-select>
        <pf-select-group v-for="(groupOptions, group) of options" :key="group" :label="group">
          <pf-select-option
            v-for="option of groupOptions"
            :key="option.value"
            v-model:favorited="option.favorite"
            :value="option.value"
            :description="option.description"
            :disabled="option.disabled"
          />
        </pf-select-group>
      </pf-select>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
const divider = ref(false);

type Option = {
  value: string;
  favorite: boolean;
  disabled?: boolean;
  description?: string;
}

const options = reactive({
  Status: [
    {
      value: "Running",
      favorite: false,
      description: "This is a description.",
    },
    { value: "Stopped", favorite: false },
    { value: "Down", favorite: false, disabled: true },
    { value: "Degraded", favorite: false },
    { value: "Needs maintenance", favorite: false },
  ] as Option[],
  "Vendor names": [
    { value: "Dell", favorite: false },
    { value: "Samsung", favorite: false },
    {
      value: "Hewlett-Packard",
      favorite: false,
      description: "This is a description.",
    },
  ] as Option[],
});
</script>
