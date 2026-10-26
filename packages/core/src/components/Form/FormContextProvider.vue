<template>
  <slot v-bind="context" />
</template>

<script lang="ts">
interface Props {
  /** Record of initial values */
  initialValues?: Record<string, string>;
}
</script>

<script lang="ts" setup>
import { provide } from 'vue';
import { createFormContext, FormContextKey, type FormContext } from '../../use/form-context';

/** Provides the form state to its descendants, read with `useFormContext()` or the default slot props. */
defineOptions({
  name: 'PfFormContextProvider',
});

const props = defineProps<Props>();

defineSlots<{
  default?: (props: FormContext) => any;
}>();

const context = createFormContext(props.initialValues);
provide(FormContextKey, context);

defineExpose(context);
</script>
