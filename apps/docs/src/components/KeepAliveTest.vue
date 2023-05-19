<template>
  <div>
    Counter: {{ counter }}
  </div>
  <pf-button @click="counter++">Increment counter</pf-button>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

defineOptions({
  inheritAttrs: false,
});

const counter = ref(0);

onMounted(() => console.log('KeepAliveTest mounted'));
</script>
