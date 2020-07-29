<template>
  <pf-page-section variant="light">
    <pf-title>Chip group</pf-title>

    <pf-title class="example-heading" h="3">Single</pf-title>
    <pf-chip v-if="chip" @click="chip = null">
      {{ chip.name }}
    </pf-chip>
    <br><br>

    <pf-chip v-if="longchip" @click="longchip = null">
      {{ longchip.name }}
    </pf-chip>
    <br><br>

    <pf-chip v-if="badgechip" @click="badgechip = null">
      {{ badgechip.name }}
      <pf-badge :read="badgechip.read">{{ badgechip.count }}</pf-badge>
    </pf-chip>
    <br><br>

    <pf-chip readonly @click="readonlychip = null">
      {{ readonlychip.name }}
    </pf-chip>
    <br><br>

    <pf-chip v-if="overflowchip" component="button" overflow @click="overflowchip = null">
      {{ overflowchip.name }}
    </pf-chip>
  </pf-page-section>
</template>

<script>
export default {
  name: 'ChipGroupPage',

  data() {
    return {
      chip: {
        name: 'Chip 1',
      },
      longchip: {
        name: 'Really long Chip that goes on and on',
      },
      badgechip: {
        name: 'Chip',
        read: true,
        count: 7,
      },
      readonlychip: {
        name: 'Read-only Chip',
      },
      overflowchip: {
        name: 'Overflow Chip',
      },
    };
  },
};
</script>
