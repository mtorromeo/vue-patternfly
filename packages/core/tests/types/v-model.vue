<!-- Type-only fixture checked by `vue-tsc -p tests`: v-model must accept refs typed with what the component actually emits. -->
<template>
  <pf-form-select v-model="formSelectSingle" />
  <pf-form-select v-model="formSelectMultiple" multiple />
  <pf-form-select v-model="formSelectDirection" />
  <!-- @vue-expect-error a multiple select emits an array -->
  <pf-form-select v-model="formSelectSingle" multiple />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import PfFormSelect from '../../src/components/FormSelect/FormSelect.vue';

const formSelectSingle = ref('');
const formSelectMultiple = ref<string[]>([]);
const formSelectDirection = ref<'row' | 'column' | undefined>();
</script>
