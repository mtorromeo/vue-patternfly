<template>
  <div v-bind="ouiaProps" :class="styles.formFieldGroupHeader">
    <div :class="styles.formFieldGroupHeaderMain">
      <div v-if="title" :class="styles.formFieldGroupHeaderTitle">
        <div :class="styles.formFieldGroupHeaderTitleText">{{ title }}</div>
      </div>
      <div v-if="description" :class="styles.formFieldGroupHeaderDescription">{{ description }}</div>
    </div>
    <div v-if="$slots.default" :class="styles.formFieldGroupHeaderActions">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Form/form';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfFormFieldGroupHeader',
});

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Header title */
  title?: string;

  /** Header description */
  description?: string;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});
</script>
