<template>
  <doc-page title="Progress">
    <template #description
      >A <b>progress</b> bar informs users about the completion status of an ongoing process or task.</template
    >

    <template #apidocs>
      <component-info name="PfProgress" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - `title`, `label` and `helperText` can also be the `title`, default and `helper-text` slots; only a `title` prop is truncated with `title-truncated` (`isTitleTruncated`).
      - With `measure-location="inside"`, the measure shows the `label` (or the default slot) when set, rather than always the percentage.
      - `ProgressBar` and `ProgressContainer` are not exported: they are internal parts of `pf-progress`.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-progress :value="33" title="Title" />
    </story-canvas>

    <story-canvas title="Small">
      <pf-progress :value="33" title="Title" size="sm" />
    </story-canvas>

    <story-canvas title="Large">
      <pf-progress :value="33" title="Title" size="lg" />
    </story-canvas>

    <story-canvas title="Outside">
      <pf-progress :value="33" title="Title" measure-location="outside" />
    </story-canvas>

    <story-canvas title="Inside">
      <pf-progress :value="33" title="Title" measure-location="inside" />
    </story-canvas>

    <story-canvas title="Single line">
      <pf-progress :value="33" measure-location="outside" aria-label="Title" />
    </story-canvas>

    <story-canvas title="Without measure">
      <pf-progress :value="33" title="Title" measure-location="none" />
    </story-canvas>

    <story-canvas title="Finite step">
      <pf-progress
        :value="2"
        :min="0"
        :max="5"
        title="Title"
        measure-location="top"
        label="2 of 5"
        value-text="2 of 5"
      />
    </story-canvas>

    <story-canvas title="Progress with step instructions">
      <pf-progress
        :value="2"
        title="Title"
        :min="0"
        :max="5"
        label="Step 2: Copying files"
        value-text="Step 2: Copying files"
      />
    </story-canvas>

    <story-canvas title="Truncate title">
      <pf-progress
        :value="33"
        title="Very very very very very very very very very very very long title which should be truncated if it does not fit onto one line above the progress bar"
        title-truncated
      />
    </story-canvas>

    <story-canvas title="Title outside of progress bar">
      <pf-description-list aria-label="Progress Title outside of progress bar">
        <pf-description-list-group>
          <pf-description-list-term id="title-outside-progress-example-label">
            Title outside of progress bar
          </pf-description-list-term>
          <pf-description-list-description>
            <pf-progress
              :value="33"
              measure-location="outside"
              aria-labelledby="title-outside-progress-example-label"
            />
          </pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>

    <story-canvas title="Helper text">
      <pf-radio
        v-for="variant in variants"
        :id="`progress-helper-text-${variant ?? 'default'}-selector`"
        :key="variant ?? 'default'"
        name="Progress variant options"
        :label="`${variantName(variant)} variant`"
        :checked="variant === helperVariant"
        @change="helperVariant = variant"
      />
      <br />
      <pf-progress
        aria-describedby="progress-helper-text-example-help-text"
        :value="33"
        title="Title"
        :variant="helperVariant"
      >
        <template #helper-text>
          <pf-helper-text id="progress-helper-text-example-help-text">
            <pf-helper-text-item :variant="helperVariant === 'danger' ? 'error' : helperVariant">
              {{ variantName(helperVariant) }} variant is being displayed
            </pf-helper-text-item>
          </pf-helper-text>
        </template>
      </pf-progress>
    </story-canvas>

    <pre v-md>
      ## Status examples
      When conveying status, you should ensure:

      - There is visible helper text that explains the status.
      - The helper text includes the status icon, as seen in the [basic helper text example](#/stories/components/helper-text).
      - The helper text is linked to the `pf-progress` component via the `aria-describedby` property, as seen in the helper text example above.
    </pre>

    <story-canvas title="Success">
      <pf-progress :value="100" title="Title" variant="success" />
    </story-canvas>

    <story-canvas title="Failure">
      <pf-progress :value="33" title="Title" variant="danger" />
    </story-canvas>

    <story-canvas title="Warning">
      <pf-progress :value="90" title="Title" variant="warning" />
    </story-canvas>

    <story-canvas title="Interactive status icon and measure location">
      <pf-form>
        <pf-form-group field-id="measure-location" label="Measure location">
          <pf-radio
            v-for="option in measureLocations"
            :id="`measure-location-${option}`"
            :key="option"
            name="measure-location"
            :label="option[0]!.toUpperCase() + option.slice(1)"
            :value="option"
            :checked="measureLocation === option"
            @change="measureLocation = option"
          />
        </pf-form-group>
        <pf-form-group field-id="hide-status-icon">
          <pf-checkbox id="hide-status-icon" v-model="hideStatusIcon" label="Hide status icon" />
        </pf-form-group>
        <pf-progress
          :value="33"
          title="Title"
          :measure-location="measureLocation"
          variant="danger"
          :hide-status-icon="hideStatusIcon"
        />
      </pf-form>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

type Variant = 'success' | 'warning' | 'danger' | undefined;

const variants: Variant[] = [undefined, 'success', 'warning', 'danger'];
const helperVariant = ref<Variant>(undefined);

function variantName(variant: Variant) {
  return variant ? variant[0]!.toUpperCase() + variant.slice(1) : 'Default';
}

const measureLocations = ['inside', 'outside', 'top', 'none'] as const;
const measureLocation = ref<(typeof measureLocations)[number]>('inside');
const hideStatusIcon = ref(false);
</script>
