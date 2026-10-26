<template>
  <div v-bind="ouiaProps" :class="styles.formFieldGroupHeader">
    <div :class="styles.formFieldGroupHeaderMain">
      <div v-if="title || $slots.title" :class="styles.formFieldGroupHeaderTitle">
        <div :id="effectiveTitleId" :class="styles.formFieldGroupHeaderTitleText">
          <slot name="title">{{ title }}</slot>
        </div>
      </div>
      <div v-if="description || $slots.description" :class="styles.formFieldGroupHeaderDescription">
        <slot name="description">{{ description }}</slot>
      </div>
    </div>
    <div :class="styles.formFieldGroupHeaderActions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Header title text */
  title?: string;

  /** Id of the title, which labels the field group. Generated when not set. */
  titleId?: string;

  /** Header title description */
  description?: string;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Form/form';
import { computed, inject, onBeforeUnmount, useId, watchEffect, type HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { FormFieldGroupKey } from './common';

defineOptions({
  name: 'PfFormFieldGroupHeader',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

const slots = defineSlots<{
  /** Header title, overrides the title prop */
  title?: (props?: Record<never, never>) => any;
  /** Header title description, overrides the description prop */
  description?: (props?: Record<never, never>) => any;
  /** Field group header actions */
  actions?: (props?: Record<never, never>) => any;
}>();

const generatedId = useId();
const effectiveTitleId = computed(() => props.titleId ?? `form-field-group-title-${generatedId}`);

const group = inject(FormFieldGroupKey, undefined);
if (group) {
  watchEffect(() => {
    group.titleId.value = props.title || slots.title ? effectiveTitleId.value : undefined;
  });
  onBeforeUnmount(() => (group.titleId.value = undefined));
}
</script>
