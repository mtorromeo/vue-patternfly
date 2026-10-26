<template>
  <section
    v-bind="ouiaProps"
    :class="styles.formSection"
    role="group"
    :aria-labelledby="title || $slots.title ? titleId : undefined"
  >
    <component :is="titleElement" v-if="title || $slots.title" :id="titleId" :class="styles.formSectionTitle">
      <slot name="title">{{ title }}</slot>
    </component>
    <slot />
  </section>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Form/form';
import { useId, type HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfFormSection',
});

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Title for the section */
  title?: string;

  /** Element to wrap the section title */
  titleElement?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const props = withDefaults(defineProps<Props>(), {
  titleElement: 'div',
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  /** Title for the section, overrides the title prop */
  title?: (props?: Record<never, never>) => any;
}>();

const titleId = `pf-form-section-title-${useId()}`;
</script>
