<template>
  <doc-page title="Tooltip">
    <template #description>A <b>tooltip</b> is in-app messaging used to identify elements on a page with short, clarifying text.</template>

    <template #apidocs>
      <component-info src="packages/core/src/components/Tooltip/Tooltip.vue" />
      <component-info src="packages/core/src/components/Tooltip/TooltipArrow.vue" />
      <component-info src="packages/core/src/components/Tooltip/TooltipContent.vue" />
    </template>

    <pre v-md>
      ## Examples
    </pre>

    <story-canvas title="Basic">
      <div style="margin: 6rem">
        <pf-tooltip>
          <template #content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</template>
          <pf-button>I have a tooltip!</pf-button>
        </pf-tooltip>
      </div>
    </story-canvas>

    <story-canvas title="Options">
      <pf-form horizontal>
        <pf-form-group label="Trigger">
          <pf-checkbox label="mouseenter" :model-value="trigger.includes('mouseenter')" @update:model-value="checkTrigger('mouseenter', $event)" />
          <pf-checkbox label="focus" :model-value="trigger.includes('focus')" @update:model-value="checkTrigger('focus', $event)" />
          <pf-checkbox label="click" :model-value="trigger.includes('click')" @update:model-value="checkTrigger('click', $event)" />
        </pf-form-group>

        <pf-form-group label="Content">
          <pf-checkbox v-model="leftAligned" label="Left aligned" />
        </pf-form-group>

        <pf-form-group label="Position">
          <pf-checkbox v-model="flip" label="Flip (used only with position != 'auto')" />

          <pf-form-select v-model="position">
            <pf-form-select-option value="auto">auto</pf-form-select-option>
            <pf-form-select-option value="top">top</pf-form-select-option>
            <pf-form-select-option value="bottom">bottom</pf-form-select-option>
            <pf-form-select-option value="left">left</pf-form-select-option>
            <pf-form-select-option value="right">right</pf-form-select-option>
            <pf-form-select-option value="top-start">top-start</pf-form-select-option>
            <pf-form-select-option value="top-end">top-end</pf-form-select-option>
            <pf-form-select-option value="bottom-start">bottom-start</pf-form-select-option>
            <pf-form-select-option value="bottom-end">bottom-end</pf-form-select-option>
            <pf-form-select-option value="left-start">left-start</pf-form-select-option>
            <pf-form-select-option value="left-end">left-end</pf-form-select-option>
            <pf-form-select-option value="right-start">right-start</pf-form-select-option>
            <pf-form-select-option value="right-end">right-end</pf-form-select-option>
          </pf-form-select>
        </pf-form-group>

        <pf-form-group label="Animation duration">
          <pf-text-input v-model="animationDuration" type="number" />
        </pf-form-group>

        <pf-form-group label="Entry delay">
          <pf-text-input v-model="entryDelay" type="number" />
        </pf-form-group>

        <pf-form-group label="Exit delay">
          <pf-text-input v-model="exitDelay" type="number" />
        </pf-form-group>

        <pf-form-group label="Distance">
          <pf-text-input v-model="distance" type="number" />
        </pf-form-group>
      </pf-form>

      <div style="margin-top: 1rem; height: 20rem; width: 100%; overflow: auto; position: relative; border: 1px dashed red">
        <pf-bullseye style="height: 200%; width: 200%">
          <pf-tooltip
            :trigger="trigger.join(' ')"
            :left-aligned="leftAligned"
            :position="position"
            :flip="flip"
            :animation-duration="animationDuration"
            :entry-delay="entryDelay"
            :exit-delay="exitDelay"
            :distance="distance"
          >
            <template #content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</template>
            <pf-button ref="buttonRef">I have a tooltip!</pf-button>
          </pf-tooltip>
        </pf-bullseye>
      </div>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { reactive, ref, type Ref, onMounted, useTemplateRef } from 'vue';
import { PfButton } from '@vue-patternfly/core';
import type { Placement } from '@vue-patternfly/core/helpers/FloatingUi.vue';

const button = useTemplateRef('buttonRef');
const trigger = reactive(['mouseenter', 'focus']);
const leftAligned = ref(false);
const flip = ref(true);
const position: Ref<Placement> = ref('auto');
const animationDuration = ref(300);
const entryDelay = ref(300);
const exitDelay = ref(0);
const distance = ref(15);

onMounted(() => {
  if (button.value?.el instanceof HTMLElement) {
    button.value.el.scrollIntoView({
      behavior: 'instant',
      block: 'center',
      inline: 'center',
    });
  }
});

function checkTrigger(value: string, checked: boolean) {
  if (checked) {
    trigger.push(value);
  } else {
    trigger.splice(trigger.indexOf(value), 1);
  }
}
</script>
