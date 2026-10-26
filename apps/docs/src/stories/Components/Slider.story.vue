<template>
  <doc-page title="Slider">
    <template #description>
      A <b>slider</b> provides a quick and effective way for users to set and adjust a numeric value from a defined
      range of values.
    </template>

    <template #apidocs>
      <component-info name="PfSlider" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The value is bound with `v-model` (`value`, `onChange`). Without an input model, the value input edits the value directly, clamped between `min` and `max`.
      - Binding `v-model:input-value` (`inputValue`) makes the value input independent from the slider value: the `change` event then carries the input value, to map it to the slider value (`setLocalInputValue` is replaced by updating the bound input value).
      - `startActions` and `endActions` are the `start-actions` and `end-actions` slots, the custom tooltip content can also be the `tooltip` slot and `tooltipProps` is `tooltip-attrs`.
      - `inputPosition="aboveThumb"` is `input-above-thumb`; `showBoundaries` is inverted into `hide-boundaries`.
      - Boolean props drop their prefix: `disabled`, `input-visible`, `input-live`, `tooltip-over-thumb`, `custom-steps-continuous` (`areCustomStepsContinuous`), and `labelHidden` in the custom steps (`isLabelHidden`).
      - `aria-labelledby` and `aria-describedby` are set on the thumb, as `aria-labelledby` and `aria-describedby` props.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Discrete">
      <pf-content component="h3">Slider value is: {{ discrete.value1 }}</pf-content>
      <pf-slider v-model="discrete.value1" :custom-steps="steps" />
      <br />
      <pf-content component="h3">Slider value is: {{ discrete.value2 }}</pf-content>
      <pf-content component="small">(min = 0, max = 200, step = 50)</pf-content>
      <pf-slider v-model="discrete.value2" :max="200" :step="50" show-ticks />
      <br />
      <pf-content component="h3">Slider value is: {{ Math.floor(discrete.value3) }}</pf-content>
      <pf-content component="small">(min = -25, max = 75, step = 10, boundaries not shown)</pf-content>
      <pf-slider v-model="discrete.value3" :min="-25" :max="75" :step="10" show-ticks hide-boundaries />
      <br />
      <pf-content component="h3">Slider value is: {{ Math.floor(discrete.value4) }}</pf-content>
      <pf-content component="small">(min = -25, max = 75, step = 10, boundaries shown)</pf-content>
      <pf-slider v-model="discrete.value4" :min="-25" :max="75" :step="10" show-ticks />
      <br />
      <pf-content component="h3">Slider value is: {{ Math.floor(discrete.value5) }}</pf-content>
      <pf-content component="small">(min = -25, max = 75, step = 10, boundaries shown, ticks not shown)</pf-content>
      <pf-slider v-model="discrete.value5" :min="-25" :max="75" :step="10" />
      <br />
      <pf-content component="h3">Slider value is: {{ Math.floor(discrete.value6) }}</pf-content>
      <pf-content component="small">(max = 5, custom steps)</pf-content>
      <pf-slider v-model="discrete.value6" show-ticks :max="5" :custom-steps="stepsDiscreteWithMax" />
      <br />
      <pf-content component="h3">Slider value is: {{ Math.floor(discrete.value7) }}</pf-content>
      <pf-content component="small">(min = 12, max = 86, custom steps with non linear data)</pf-content>
      <pf-slider v-model="discrete.value7" show-ticks :custom-steps="stepsDiscreteNoLinear" :min="12" :max="86" />
    </story-canvas>

    <story-canvas title="Continuous">
      <pf-checkbox
        id="thumb-has-tooltip"
        v-model="continuous.tooltip"
        label="tooltip-over-thumb"
        style="margin-bottom: 20px"
      />
      <pf-content component="h3">Slider value is: {{ continuous.value }}</pf-content>
      <pf-slider v-model="continuous.value" :tooltip-over-thumb="continuous.tooltip" />
      <br />
      <pf-content component="h3">Slider value is: {{ continuous.valueCustom }}</pf-content>
      <pf-slider
        v-model="continuous.valueCustom"
        custom-steps-continuous
        :tooltip-over-thumb="continuous.tooltip"
        :custom-steps="[
          { value: 0, label: '0%' },
          { value: 100, label: '100%' },
        ]"
      />
    </story-canvas>

    <story-canvas title="Value input">
      <template #intro>
        <pre v-md>
          With `input-visible` the slider shows a value input. When its value differs from the slider value, like the label of a custom step, bind `v-model:input-value` and map it to the slider value in the `change` event.
        </pre>
      </template>

      <pf-checkbox id="isInputLiveCheckbox" v-model="valueInput.live" label="input-live" style="margin-bottom: 20px" />
      <pf-slider
        v-model="valueInput.discrete"
        v-model:input-value="valueInput.discreteInput"
        input-visible
        :input-live="valueInput.live"
        :custom-steps="steps"
        @change="(_event, value, inputValue) => onStepsChange(steps, 'discrete', value, inputValue)"
      />
      <br />
      <pf-slider
        v-model="valueInput.percent"
        v-model:input-value="valueInput.percentInput"
        input-visible
        :input-live="valueInput.live"
        input-label="%"
        :custom-steps="stepsPercent"
        @change="(_event, value, inputValue) => onStepsChange(stepsPercent, 'percent', value, inputValue)"
      />
      <br />
      <pf-slider v-model="valueInput.continuous" input-visible :input-live="valueInput.live" input-label="%" />
    </story-canvas>

    <story-canvas title="Thumb value input">
      <pf-slider v-model="thumbInput" input-visible input-label="%" input-above-thumb />
    </story-canvas>

    <story-canvas title="Actions">
      <pf-content component="h3">Slider value is: {{ actions.value1 }}</pf-content>
      <pf-slider v-model="actions.value1">
        <template #start-actions>
          <pf-button variant="plain" aria-label="Minus" @click="actions.value1 = Math.max(actions.value1 - 1, 0)">
            <template #icon><minus-icon /></template>
          </pf-button>
        </template>
        <template #end-actions>
          <pf-button variant="plain" aria-label="Plus" @click="actions.value1 = Math.min(actions.value1 + 1, 100)">
            <template #icon><plus-icon /></template>
          </pf-button>
        </template>
      </pf-slider>
      <br />
      <br />
      <pf-slider v-model="actions.value2" input-visible input-label="%" :disabled="actions.locked">
        <template #end-actions>
          <pf-button
            variant="plain"
            :aria-label="actions.locked ? 'Lock' : 'Unlock'"
            @click="actions.locked = !actions.locked"
          >
            <template #icon>
              <lock-icon v-if="actions.locked" />
              <lock-open-icon v-else />
            </template>
          </pf-button>
        </template>
      </pf-slider>
    </story-canvas>

    <story-canvas title="Disabled">
      <pf-content component="h3">Slider value is: {{ stepLabel(steps, disabledValue) }}</pf-content>
      <pf-slider v-model="disabledValue" disabled :custom-steps="steps" />
    </story-canvas>

    <story-canvas title="Custom step tooltip">
      <template #intro>
        <pre v-md>
          You can customize the content of the tooltip with the `tooltip-content` property or the `tooltip` slot. By default this tooltip will act as a description to the slider thumb, and thus shouldn't include critical information about the current slider step unless that information is part of the step's aria-valuetext.

          If instead you want the tooltip to act as the human-readable value of the slider step - such as when all slider step labels are hidden - you must also pass the `thumb-aria-value-text` property with the same string value as the tooltip content. Additionally, you should pass `{ aria: 'none', ariaLive: 'off' }` to `tooltip-attrs` in order to help prevent duplicate announcement from assistive technologies.
        </pre>
      </template>

      <pf-slider v-model="customTooltip" tooltip-over-thumb :custom-steps="steps">
        <template #tooltip>
          <div>Custom tooltip content for step: {{ stepLabel(steps, customTooltip) }}</div>
        </template>
      </pf-slider>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import type { SliderStepObject } from '@vue-patternfly/core/components/Slider/Slider.vue';
import MinusIcon from '@vue-patternfly/icons/minus-icon';
import PlusIcon from '@vue-patternfly/icons/plus-icon';
import LockIcon from '@vue-patternfly/icons/lock-icon';
import LockOpenIcon from '@vue-patternfly/icons/lock-open-icon';

const steps: SliderStepObject[] = [
  { value: 0, label: '0' },
  { value: 12.5, label: '1', labelHidden: true },
  { value: 25, label: '2' },
  { value: 37.5, label: '3', labelHidden: true },
  { value: 50, label: '4' },
  { value: 62.5, label: '5', labelHidden: true },
  { value: 75, label: '6' },
  { value: 87.5, label: '7', labelHidden: true },
  { value: 100, label: '8' },
];

const stepsPercent: SliderStepObject[] = [
  { value: 0, label: '0%' },
  { value: 25, label: '25%', labelHidden: true },
  { value: 50, label: '50%' },
  { value: 75, label: '75%', labelHidden: true },
  { value: 100, label: '100%' },
];

const stepsDiscreteWithMax = ['A', 'B', 'C', 'D', 'E', 'F'].map((label, value) => ({ value, label }));
const stepsDiscreteNoLinear = [12, 15, 25, 54, 67, 86].map(value => ({ value, label: String(value) }));

const discrete = reactive({ value1: 50, value2: 50, value3: 25, value4: 50, value5: 50, value6: 3, value7: 25 });
const continuous = reactive({ tooltip: false, value: 50, valueCustom: 50 });
const valueInput = reactive<{
  live: boolean;
  discrete: number;
  discreteInput: number | undefined;
  percent: number;
  percentInput: number | undefined;
  continuous: number;
}>({
  live: false,
  discrete: 62.5,
  discreteInput: 5,
  percent: 50,
  percentInput: 50,
  continuous: 50,
});
const thumbInput = ref(50);
const actions = reactive({ value1: 50, value2: 50, locked: false });
const disabledValue = ref(50);
const customTooltip = ref(50);

function stepLabel(stepList: SliderStepObject[], value: number) {
  return stepList.find(step => step.value === value)?.label ?? 0;
}

// the number of a step label, such as "5" or "25%"
const labelNumber = (step: SliderStepObject) => Number(step.label.replace('%', ''));

// maps the input value to the closest custom step, or the slider value to the number of its step label
function onStepsChange(
  stepList: SliderStepObject[],
  name: 'discrete' | 'percent',
  value: number,
  inputValue: number | undefined,
) {
  const inputKey = name === 'discrete' ? 'discreteInput' : 'percentInput';
  if (inputValue === undefined) {
    const step = stepList.find(step => step.value === value);
    valueInput[inputKey] = step ? labelNumber(step) : 0;
    return;
  }
  const first = stepList[0]!;
  const last = stepList[stepList.length - 1]!;
  let closest = stepList.find(step => labelNumber(step) >= inputValue) ?? last;
  const index = stepList.indexOf(closest);
  const previous = stepList[index - 1];
  if (inputValue < labelNumber(first)) {
    closest = first;
  } else if (previous && labelNumber(closest) !== inputValue) {
    const midpoint = (labelNumber(closest) + labelNumber(previous)) / 2;
    if (midpoint > inputValue) {
      closest = previous;
    }
  }
  valueInput[name] = closest.value;
  valueInput[inputKey] = labelNumber(closest);
}
</script>
