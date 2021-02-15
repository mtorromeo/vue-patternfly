<template>
  <pf-page-section variant="light">
    <pf-title>Switch</pf-title>

    <pf-title class="example-heading" h="3">
      Basic
    </pf-title>
    <pf-switch v-model:checked="checked1" label="Message when on" label-off="Message when off" />

    <pf-title class="example-heading" h="3">
      Without label
    </pf-title>
    <pf-switch v-model:checked="checked2" />

    <pf-title class="example-heading" h="3">
      Disabled
    </pf-title>
    <pf-switch disabled checked label="Message when on" label-off="Message when off" /> <br>
    <pf-switch disabled label="Message when on" label-off="Message when off" /> <br>
    <pf-switch disabled checked /> <br>
    <pf-switch disabled /> <br>
  </pf-page-section>
</template>

<script>
export default {
  name: 'SwitchPage',

  data() {
    return {
      test: '',
      checked1: false,
      checked2: false,
    };
  },
};
</script>
