<template>
  <doc-page title="Text input group">
    <template #description>
      <pre v-md>
        A **text input group** is a more flexible composable version of a [text input](#/stories/components/text-input). It enables consumers of PatternFly to build custom inputs for filtering and similar use cases by placing elements like icons, chips groups and buttons within a text input.
      </pre>
    </template>

    <template #apidocs>
      <component-info name="PfTextInputGroup" />
      <component-info name="PfTextInputGroupMain" />
      <component-info name="PfTextInputGroupUtilities" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The value of `pf-text-input-group-main` is bound with `v-model` (`value` + `onChange`), and the input events are emitted as `@input`, `@change`, `@focus` and `@blur`.
      - The `icon` prop of `pf-text-input-group-main` is replaced by the `icon` slot.
      - The attributes of `pf-text-input-group-main` other than `class` go to the input instead of the root element, which replaces the `inputId` (`id`), `inputProps` and `isExpanded` (`aria-expanded`) props.
      - `pf-text-input-group-main` has an `input-class` prop for the classes of the input.
      - The hint input of `pf-text-input-group-main` does not repeat the input id.
      - `pf-text-input-group-main` exposes the input element as `input` and a `focus()` method instead of forwarding its ref.

      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Basic text input group">
      <template #intro>
        <pre v-md>
          A basic text input group updates its contents as users enter text.
        </pre>
      </template>

      <pf-text-input-group>
        <pf-text-input-group-main v-model="basicValue" />
      </pf-text-input-group>
    </story-canvas>

    <story-canvas title="Disabled text input group">
      <template #intro>
        <pre v-md>
          To prevent users from making edits to a text input group, you can disable it using `disabled`.
        </pre>
      </template>

      <pf-text-input-group disabled>
        <pf-text-input-group-main
          model-value="Disabled"
          type="text"
          aria-label="Disabled text input group example input"
        />
      </pf-text-input-group>
    </story-canvas>

    <story-canvas title="With icon and utilities">
      <template #intro>
        <pre v-md>
          To help users identify the purpose of an input group, you can add an icon. To do this, import your icon and pass it to the `icon` slot of `pf-text-input-group-main`.

          You can also add additional actions or utilities via `pf-text-input-group-utilities`. The following example includes a clear button that allows users to remove their previous input.
        </pre>
      </template>

      <pf-text-input-group>
        <pf-text-input-group-main v-model="utilitiesValue">
          <template #icon>
            <magnifying-glass-icon />
          </template>
        </pf-text-input-group-main>
        <pf-text-input-group-utilities v-if="!!utilitiesValue">
          <pf-button variant="plain" aria-label="Clear button and input" @click="utilitiesValue = ''">
            <template #icon>
              <xmark-icon />
            </template>
          </pf-button>
        </pf-text-input-group-utilities>
      </pf-text-input-group>
    </story-canvas>

    <story-canvas title="With validation">
      <template #intro>
        <pre v-md>
          You can add a validation status to a `pf-text-input-group` by passing the `validated` property with a value of either "success", "warning", or "error".
        </pre>
      </template>

      <pf-flex direction="column" row-gap="sm">
        <pf-flex-item>
          <pf-text-input-group validated="success">
            <pf-text-input-group-main v-model="successValue" />
          </pf-text-input-group>
        </pf-flex-item>
        <pf-flex-item>
          <pf-text-input-group validated="warning">
            <pf-text-input-group-main v-model="warningValue">
              <template #icon>
                <magnifying-glass-icon />
              </template>
            </pf-text-input-group-main>
          </pf-text-input-group>
        </pf-flex-item>
        <pf-flex-item>
          <pf-text-input-group validated="error">
            <pf-text-input-group-main v-model="errorValue">
              <template #icon>
                <magnifying-glass-icon />
              </template>
            </pf-text-input-group-main>
            <pf-text-input-group-utilities v-if="!!errorValue">
              <pf-button variant="plain" aria-label="Clear button and input" @click="errorValue = ''">
                <template #icon>
                  <xmark-icon />
                </template>
              </pf-button>
            </pf-text-input-group-utilities>
          </pf-text-input-group>
        </pf-flex-item>
      </pf-flex>
    </story-canvas>

    <story-canvas title="With filters">
      <template #intro>
        <pre v-md>
          When a text input group is used within a data view, like a table, you can nest filter labels within the group. To do this, pass a `pf-label-group` to the default slot of `pf-text-input-group-main`, with all of the labels that a user has selected. Users can interact with these labels as needed.
        </pre>
      </template>

      <pf-text-input-group>
        <pf-text-input-group-main v-model="filtersValue">
          <template v-if="!chips.length" #icon>
            <magnifying-glass-icon />
          </template>
          <pf-label-group>
            <pf-label v-for="(chip, index) in chips" :key="chip" variant="outline" @close="chips.splice(index, 1)">{{
              chip
            }}</pf-label>
          </pf-label-group>
        </pf-text-input-group-main>
        <pf-text-input-group-utilities v-if="!!filtersValue || !!chips.length">
          <pf-button
            variant="plain"
            aria-label="Clear button and input"
            @click="
              filtersValue = '';
              chips.splice(0);
            "
          >
            <template #icon>
              <xmark-icon />
            </template>
          </pf-button>
        </pf-text-input-group-utilities>
      </pf-text-input-group>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import MagnifyingGlassIcon from '@vue-patternfly/icons/magnifying-glass-icon';
import XmarkIcon from '@vue-patternfly/icons/xmark-icon';

const basicValue = ref('');

const utilitiesValue = ref('');

const successValue = ref('Success validation');
const warningValue = ref('Warning validation with custom non-status icon at start');
const errorValue = ref('Error validation with custom non-status icon at start and utilities');

const filtersValue = ref('');
const chips = reactive([
  'chip one',
  'chip two',
  'chip three',
  'chip four',
  'chip five',
  'chip six',
  'chip seven',
  'chip eight',
  'chip nine',
  'chip ten',
  'chip eleven',
  'chip twelve',
  'chip thirteen',
  'chip fourteen',
]);
</script>
