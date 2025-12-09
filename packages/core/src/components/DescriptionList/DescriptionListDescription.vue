<template>
  <dd v-bind="ouiaProps" :class="styles.descriptionListDescription">
    <div :class="styles.descriptionListText">
      <slot />
    </div>
  </dd>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DescriptionList/description-list';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfDescriptionListDescription',
});

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
