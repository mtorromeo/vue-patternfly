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
      </pf-form>

      <div style="margin-top: 1rem; height: 20rem; width: 100%; overflow: auto; border: 1px dashed red">
        <pf-bullseye style="height: 200%; width: 200%">
          <pf-tooltip :trigger="trigger.join(' ')" :left-aligned="leftAligned">
            <template #content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</template>
            <pf-button ref="buttonRef">I have a tooltip!</pf-button>
          </pf-tooltip>
        </pf-bullseye>
      </div>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { reactive, ref, type Ref, onMounted } from 'vue';
import { PfButton } from '@vue-patternfly/core';

const buttonRef: Ref<InstanceType<typeof PfButton> | undefined> = ref();
const trigger = reactive(['mouseenter', 'focus']);
const leftAligned = ref(false);

onMounted(() => {
  buttonRef.value?.el?.scrollIntoView({
    behavior: 'instant',
    block: 'center',
    inline: 'center',
  });
});

function checkTrigger(value: string, checked: boolean) {
  if (checked) {
    trigger.push(value);
  } else {
    trigger.splice(trigger.indexOf(value), 1);
  }
}
</script>
