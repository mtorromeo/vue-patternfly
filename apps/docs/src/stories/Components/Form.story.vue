<template>
  <doc-page title="Form">
    <component-title name="pf-form" />

    <pre v-md>
      A **form** is a group of elements used to collect information from a user in a variety of contexts including in a modal, in a wizard, or on a page. Use cases for forms include tasks reliant on user-inputted information for completion like logging in, registering, configuring settings, or completing surveys.

      Use forms to accomplish tasks reliant on user-inputted information like logging in, registering for accounts or services, configuring settings, or completing surveys.

      See full [Design guidelines](https://www.patternfly.org/v4/components/form/design-guidelines) on the official patternfly documentation.

      ## Differences from patternfly-react
      - The `novalidate` attribute is not implicitly applied to the form but you can still add it yourself. This makes `pf-form` usable with the native form validation technique.
      - Allowed overriding the `component` used by the form. A typical use-case is when you have a parent form tag already present and you only need `pf-form` to apply the patternfly layout to its children.
      - There is no FormHelperText component. You can instead use the `helper-text` prop or the `helperText` and `helperTextIcon` slots on `pf-form-group`.

      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-form>
        <pf-form-group label="Name" required field-id="simple-form-name-01" helper-text="Please provide your full name">
          <template #label-icon>
            <pf-tooltip>
              <template #content>
                Several patterns can be added in Filename mask with "," delimiter.
                Example:
                /home/*/mail/,/home/*/tmp,*.php
              </template>
              <help-icon />
            </pf-tooltip>
          </template>
          <pf-text-input id="simple-form-name-01" required name="simple-form-name-01" aria-describedby="simple-form-name-01-helper" />
        </pf-form-group>
        <pf-action-group>
          <pf-button type="submit" variant="primary">Submit</pf-button>
          <pf-button variant="link">Cancel</pf-button>
        </pf-action-group>
      </pf-form>
    </story-canvas>

    <story-canvas title="Invalid with form alert">
      <pf-form>
        <pf-form-group label="Age" label-info="Additional label info" field-id="age" helper-text-invalid="Age has to be a number">
          <template v-if="age === ''" #helperText>
            Please enter your age
          </template>
          <template #helper-text-icon>
            <circle-exclamation-icon />
          </template>
          <template #helper-text-invalid-icon>
            <circle-exclamation-icon />
          </template>
          <pf-text-input id="age" v-model="age" pattern="[0-9]+" required name="age" aria-describedby="age" />
        </pf-form-group>
        <pf-form-group label="Description" field-id="description" helper-text-invalid="No emails allowed in the description">
          <template #helper-text-invalid-icon>
            <circle-exclamation-icon />
          </template>
          <pf-textarea id="description" v-model="description" pattern="(?!.*[A-Za-z0-9]@[A-Za-z].*).*" name="description" aria-describedby="description" spellcheck="false" />
        </pf-form-group>
      </pf-form>
    </story-canvas>

    <story-canvas title="Field group">
      <pf-form>
        <pf-form-group label="Name" required field-id="form-expandable-field-groups-label1">
          <pf-text-input id="form-expandable-field-groups-label1" required name="form-expandable-field-groups-label1" />
        </pf-form-group>
        <pf-form-field-group expandable toggle-aria-label="Details">
          <template #header>
            <pf-form-field-group-header title="Field group 1" description="Field group 1 description.">
              <pf-button variant="link">Delete all</pf-button>
            </pf-form-field-group-header>
          </template>
          <pf-form-field-group expandable toggle-aria-label="Details">
            <template #header>
              <pf-form-field-group-header title="Nested field group 1" description="Nested field group 1 description.">
                <pf-button variant="plain" aria-label="Remove">
                  <trash-icon />
                </pf-button>
              </pf-form-field-group-header>
            </template>
            <pf-form-group label="City" required field-id="form-expandable-field-groups-city">
              <pf-text-input id="form-expandable-field-groups-city" required name="form-expandable-field-groups-city" />
            </pf-form-group>
            <pf-form-group label="State" required field-id="form-expandable-field-groups-state">
              <pf-text-input id="form-expandable-field-groups-state" required name="form-expandable-field-groups-state" />
            </pf-form-group>
          </pf-form-field-group>
          <pf-form-field-group expandable toggle-aria-label="Details">
            <template #header>
              <pf-form-field-group-header title="Nested field group 2" description="Nested field group 2 description.">
                <pf-button variant="plain" aria-label="Remove">
                  <trash-icon />
                </pf-button>
              </pf-form-field-group-header>
            </template>
            <pf-form-group label="City 2" required field-id="form-expandable-field-groups-city2">
              <pf-text-input id="form-expandable-field-groups-city2" required name="form-expandable-field-groups-city2" />
            </pf-form-group>
            <pf-form-group label="State 2" required field-id="form-expandable-field-groups-state2">
              <pf-text-input id="form-expandable-field-groups-state2" required name="form-expandable-field-groups-state2" />
            </pf-form-group>
          </pf-form-field-group>
          <pf-form-group label="Phone" required field-id="form-expandable-field-groups-phone">
            <pf-text-input id="form-expandable-field-groups-phone" required name="form-expandable-field-groups-phone" />
          </pf-form-group>
          <pf-form-group label="Mobile" required field-id="form-expandable-field-groups-mobile">
            <pf-text-input id="form-expandable-field-groups-mobile" required name="form-expandable-field-groups-mobile" />
          </pf-form-group>
        </pf-form-field-group>
        <pf-form-field-group toggle-aria-label="Details">
          <template #header>
            <pf-form-field-group-header title="Field group 2 (non-expandable)" description="Field group 2 description.">
              <pf-button variant="link">Delete all</pf-button>
            </pf-form-field-group-header>
          </template>
          <pf-form-group label="Username" required field-id="form-expandable-field-groups-username">
            <pf-text-input id="form-expandable-field-groups-username" required name="form-expandable-field-groups-username" />
          </pf-form-group>
          <pf-form-group label="Nickname" required field-id="form-expandable-field-groups-nickname">
            <pf-text-input id="form-expandable-field-groups-nickname" required name="form-expandable-field-groups-nickname" />
          </pf-form-group>
        </pf-form-field-group>
      </pf-form>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import HelpIcon from "@vue-patternfly/icons/help-icon";
import TrashIcon from "@vue-patternfly/icons/trash-icon";
import CircleExclamationIcon from "@vue-patternfly/icons/circle-exclamation-icon";
import { ref } from "vue";
const age = ref('Five');
const description = ref("Nice description\nmy email: mail@mail.com");
</script>
