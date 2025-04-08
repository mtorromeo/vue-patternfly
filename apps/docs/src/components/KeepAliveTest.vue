<template>
  <div>Time alive: {{ counter }}s</div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, type Ref } from "vue";

defineOptions({
  inheritAttrs: false,
});

const counter = ref(0);
const interval: Ref<number | undefined> = ref();

onMounted(() => (interval.value = setInterval(() => counter.value++, 1000)));

onUnmounted(() => clearInterval(interval.value));
</script>
