<template>
  <doc-page title="Tooltip">
    <template #description
      >A <b>tooltip</b> is in-app messaging used to identify elements on a page with short, clarifying text.</template
    >

    <template #apidocs>
      <component-info name="PfTooltip" />
      <component-info name="PfTooltipArrow" />
      <component-info name="PfTooltipContent" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The trigger is the default slot, or `trigger-ref` (an element, a selector or a function returning it).
      - The content is the `content` prop or slot; `isContentLeftAligned` is `left-aligned`.
      - The visibility is bound with `v-model:visible` (`isVisible`) and `onTooltipHidden` is the `hidden` event.
      - `enableFlip` is `flip`; `flipBehavior` is not supported.
      - `max-width` also accepts a number of pixels.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <div style="margin: 6rem">
        <pf-tooltip>
          <template #content
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla
            turpis.</template
          >
          <pf-button>I have a tooltip!</pf-button>
        </pf-tooltip>
      </div>
    </story-canvas>

    <story-canvas title="Tooltip react ref">
      <template #intro>
        <pre v-md>
          The trigger can be passed to `trigger-ref` as an element, such as a template ref, instead of being wrapped by the tooltip.
        </pre>
      </template>

      <div style="margin: 6rem">
        <button ref="tooltipTrigger" aria-describedby="tooltip-ref1">Tooltip attached via template ref</button>
        <pf-tooltip id="tooltip-ref1" :trigger-ref="tooltipTrigger">
          <template #content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
          </template>
        </pf-tooltip>
      </div>
    </story-canvas>

    <story-canvas title="Tooltip selector ref">
      <div style="margin: 6rem">
        <button id="tooltip-selector" aria-describedby="tooltip-ref2">Tooltip attached via selector ref</button>
        <pf-tooltip id="tooltip-ref2" trigger-ref="#tooltip-selector">
          <template #content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
          </template>
        </pf-tooltip>
      </div>
    </story-canvas>

    <story-canvas title="On icon with dynamic content">
      <template #intro>
        <pre v-md>
          When the tooltip is used as a wrapper and its content will dynamically update, the `aria` prop should have a value of "none" passed in. This prevents assistive technologies from announcing the tooltip contents more than once. Additionally, the `aria-live` prop should have a value of "polite" passed in, in order for assistive technologies to announce when the tooltip contents gets updated.

          When using a `trigger-ref` with a tooltip that has dynamic content, the `aria` and `aria-live` props do not need to be manually passed in.
        </pre>
      </template>

      <div style="margin: 6rem">
        <pf-tooltip
          aria="none"
          aria-live="polite"
          :content="copied ? 'Successfully copied to clipboard!' : 'Copy to clipboard'"
        >
          <pf-button id="tt-ref" aria-label="Clipboard" variant="plain" @click="copied = !copied">
            <template #icon><copy-icon /></template>
          </pf-button>
        </pf-tooltip>
      </div>
    </story-canvas>

    <story-canvas title="Options">
      <pf-form horizontal>
        <pf-form-group label="Trigger">
          <pf-checkbox
            label="mouseenter"
            :model-value="trigger.includes('mouseenter')"
            @update:model-value="checkTrigger('mouseenter', $event)"
          />
          <pf-checkbox
            label="focus"
            :model-value="trigger.includes('focus')"
            @update:model-value="checkTrigger('focus', $event)"
          />
          <pf-checkbox
            label="click"
            :model-value="trigger.includes('click')"
            @update:model-value="checkTrigger('click', $event)"
          />
          <pf-checkbox
            label="manual"
            :model-value="trigger.includes('manual')"
            @update:model-value="checkTrigger('manual', $event)"
          />
        </pf-form-group>

        <pf-form-group label="Visibility">
          <pf-checkbox
            v-model="visible"
            label="visible (also set the trigger to only manual to control it programmatically)"
          />
        </pf-form-group>

        <pf-form-group label="Content">
          <pf-checkbox v-model="leftAligned" label="Left aligned" />
        </pf-form-group>

        <pf-form-group label="Position">
          <pf-checkbox v-model="flip" label="Flip (used only with position != 'auto')" />

          <pf-form-select :model-value="position" @update:model-value="position = $event as Placement">
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
          <pf-input-group>
            <pf-input-group-item fill>
              <pf-text-input v-model.number.lazy="animationDuration" type="number" />
            </pf-input-group-item>
            <pf-input-group-text>ms</pf-input-group-text>
          </pf-input-group>
        </pf-form-group>

        <pf-form-group label="Entry delay">
          <pf-input-group>
            <pf-input-group-item fill>
              <pf-text-input v-model.number.lazy="entryDelay" type="number" />
            </pf-input-group-item>
            <pf-input-group-text>ms</pf-input-group-text>
          </pf-input-group>
        </pf-form-group>

        <pf-form-group label="Exit delay">
          <pf-input-group>
            <pf-input-group-item fill>
              <pf-text-input v-model.number.lazy="exitDelay" type="number" />
            </pf-input-group-item>
            <pf-input-group-text>ms</pf-input-group-text>
          </pf-input-group>
        </pf-form-group>

        <pf-form-group label="Distance">
          <pf-text-input v-model.lazy="distance" type="number" />
        </pf-form-group>
      </pf-form>

      <div
        style="margin-top: 1rem; height: 20rem; width: 100%; overflow: auto; position: relative; border: 1px dashed red"
      >
        <pf-bullseye style="height: 200%; width: 200%">
          <pf-tooltip
            v-model:visible="visible"
            :trigger="trigger.join(' ')"
            :left-aligned="leftAligned"
            :position="position"
            :flip="flip"
            :animation-duration="animationDuration"
            :entry-delay="entryDelay"
            :exit-delay="exitDelay"
            :distance="distance"
          >
            <template #content
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla
              turpis.</template
            >
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
import CopyIcon from '@vue-patternfly/icons/copy-icon';

const button = useTemplateRef('buttonRef');
const tooltipTrigger = useTemplateRef<HTMLButtonElement>('tooltipTrigger');
const copied = ref(false);
const visible = ref(true);
const trigger = reactive(['mouseenter', 'focus']);
const leftAligned = ref(false);
const flip = ref(true);
const position: Ref<Placement> = ref('auto');
const animationDuration = ref(300);
const entryDelay = ref(300);
const exitDelay = ref(300);
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

function checkTrigger(value: string, checked: boolean | null) {
  visible.value = false;
  if (checked) {
    trigger.push(value);
  } else {
    trigger.splice(trigger.indexOf(value), 1);
  }
}
</script>
