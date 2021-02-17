<template>
  <doc-page title="Label">
    <pf-title class="example-heading" h="3">
      Filled
    </pf-title>

    <pf-label>Grey</pf-label>
    {{ ' ' }}
    <pf-label>
      <template #icon>
        <InfoCircleIcon />
      </template>Grey icon
    </pf-label>
    {{ ' ' }}
    <pf-label close @close="log">
      Grey removeable
    </pf-label>
    {{ ' ' }}
    <pf-label close @close="log">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Grey icon removeable
    </pf-label>
    {{ ' ' }}
    <pf-label href="#filled">
      Grey link
    </pf-label>
    {{ ' ' }}
    <pf-label href="#filled" close @close="log">
      Grey link removeable
    </pf-label>
    <br>
    <br>
    <pf-label color="blue">
      Blue
    </pf-label>
    {{ ' ' }}
    <pf-label color="blue">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Blue icon
    </pf-label>
    <pf-label color="blue" close @close="log">
      Blue removeable
    </pf-label>
    {{ ' ' }}
    <pf-label color="blue" close @close="log">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Blue icon removeable
    </pf-label>
    {{ ' ' }}
    <pf-label color="blue" href="#filled">
      Blue link
    </pf-label>
    {{ ' ' }}
    <pf-label color="blue" href="#filled" close @close="log">
      Blue link removeable
    </pf-label>
    <br>
    <br>
    <pf-label color="green">
      Green
    </pf-label>
    {{ ' ' }}
    <pf-label color="green">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Green icon
    </pf-label>
    {{ ' ' }}
    <pf-label color="green" close @close="log">
      Green removeable
    </pf-label>
    {{ ' ' }}
    <pf-label color="green" close @close="log">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Green icon removeable
    </pf-label>
    {{ ' ' }}
    <pf-label color="green" href="#filled">
      Green link
    </pf-label>
    {{ ' ' }}
    <pf-label color="green" href="#filled" close @close="log">
      Green link removeable
    </pf-label>
    <br>
    <br>
    <pf-label color="orange">
      Orange
    </pf-label>
    {{ ' ' }}
    <pf-label color="orange">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Orange icon
    </pf-label>
    {{ ' ' }}
    <pf-label color="orange" close @close="log">
      Orange removeable
    </pf-label>
    {{ ' ' }}
    <pf-label color="orange" close @close="log">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Orange icon removeable
    </pf-label>
    {{ ' ' }}
    <pf-label color="orange" href="#filled">
      Orange link
    </pf-label>
    {{ ' ' }}
    <pf-label color="orange" href="#filled" close @close="log">
      Orange link removeable
    </pf-label>
    <br>
    <br>
    <pf-label color="red">
      Red
    </pf-label>
    {{ ' ' }}
    <pf-label color="red">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Red icon
    </pf-label>
    {{ ' ' }}
    <pf-label color="red" close @close="log">
      Red removeable
    </pf-label>
    {{ ' ' }}
    <pf-label color="red" close @close="log">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Red icon removeable
    </pf-label>
    {{ ' ' }}
    <pf-label color="red" href="#filled">
      Red link
    </pf-label>
    {{ ' ' }}
    <pf-label color="red" href="#filled" close @close="log">
      Red link removeable
    </pf-label>
    <br>
    <br>
    <pf-label color="purple">
      Purple
    </pf-label>
    {{ ' ' }}
    <pf-label color="purple">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Purple icon
    </pf-label>
    {{ ' ' }}
    <pf-label color="purple" close @close="log">
      Purple removeable
    </pf-label>
    {{ ' ' }}
    <pf-label color="purple" close @close="log">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Purple icon removeable
    </pf-label>
    {{ ' ' }}
    <pf-label color="purple" href="#filled">
      Purple link
    </pf-label>
    {{ ' ' }}
    <pf-label color="purple" href="#filled" close @close="log">
      Purple link removeable
    </pf-label>
    <br>
    <br>
    <pf-label color="cyan">
      Cyan
    </pf-label>
    {{ ' ' }}
    <pf-label color="cyan">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Cyan icon
    </pf-label>
    {{ ' ' }}
    <pf-label color="cyan" close @close="log">
      Cyan removeable
    </pf-label>
    {{ ' ' }}
    <pf-label color="cyan" close @close="log">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Cyan icon removeable
    </pf-label>
    {{ ' ' }}
    <pf-label color="cyan" href="#filled">
      Cyan link
    </pf-label>
    {{ ' ' }}
    <pf-label color="cyan" href="#filled" close @close="log">
      Cyan link removeable
    </pf-label>

    <pf-title class="example-heading" h="3">
      Outline
    </pf-title>

    <pf-label outline>
      Grey
    </pf-label>
    {{ ' ' }}
    <pf-label outline>
      <template #icon>
        <InfoCircleIcon />
      </template>Grey icon
    </pf-label>
    {{ ' ' }}
    <pf-label outline close @close="log">
      Grey removeable
    </pf-label>
    {{ ' ' }}
    <pf-label outline close @close="log">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Grey icon removeable
    </pf-label>
    {{ ' ' }}
    <pf-label outline href="#filled">
      Grey link
    </pf-label>
    {{ ' ' }}
    <pf-label outline href="#filled" close @close="log">
      Grey link removeable
    </pf-label>
    <br>
    <br>
    <pf-label outline color="blue">
      Blue
    </pf-label>
    {{ ' ' }}
    <pf-label outline color="blue">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Blue icon
    </pf-label>
    <pf-label outline color="blue" close @close="log">
      Blue removeable
    </pf-label>
    {{ ' ' }}
    <pf-label outline color="blue" close @close="log">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Blue icon removeable
    </pf-label>
    {{ ' ' }}
    <pf-label outline color="blue" href="#filled">
      Blue link
    </pf-label>
    {{ ' ' }}
    <pf-label outline color="blue" href="#filled" close @close="log">
      Blue link removeable
    </pf-label>
    <br>
    <br>
    <pf-label outline color="green">
      Green
    </pf-label>
    {{ ' ' }}
    <pf-label outline color="green">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Green icon
    </pf-label>
    {{ ' ' }}
    <pf-label outline color="green" close @close="log">
      Green removeable
    </pf-label>
    {{ ' ' }}
    <pf-label outline color="green" close @close="log">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Green icon removeable
    </pf-label>
    {{ ' ' }}
    <pf-label outline color="green" href="#filled">
      Green link
    </pf-label>
    {{ ' ' }}
    <pf-label outline color="green" href="#filled" close @close="log">
      Green link removeable
    </pf-label>
    <br>
    <br>
    <pf-label outline color="orange">
      Orange
    </pf-label>
    {{ ' ' }}
    <pf-label outline color="orange">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Orange icon
    </pf-label>
    {{ ' ' }}
    <pf-label outline color="orange" close @close="log">
      Orange removeable
    </pf-label>
    {{ ' ' }}
    <pf-label outline color="orange" close @close="log">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Orange icon removeable
    </pf-label>
    {{ ' ' }}
    <pf-label outline color="orange" href="#filled">
      Orange link
    </pf-label>
    {{ ' ' }}
    <pf-label outline color="orange" href="#filled" close @close="log">
      Orange link removeable
    </pf-label>
    <br>
    <br>
    <pf-label outline color="red">
      Red
    </pf-label>
    {{ ' ' }}
    <pf-label outline color="red">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Red icon
    </pf-label>
    {{ ' ' }}
    <pf-label outline color="red" close @close="log">
      Red removeable
    </pf-label>
    {{ ' ' }}
    <pf-label outline color="red" close @close="log">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Red icon removeable
    </pf-label>
    {{ ' ' }}
    <pf-label outline color="red" href="#filled">
      Red link
    </pf-label>
    {{ ' ' }}
    <pf-label outline color="red" href="#filled" close @close="log">
      Red link removeable
    </pf-label>
    <br>
    <br>
    <pf-label outline color="purple">
      Purple
    </pf-label>
    {{ ' ' }}
    <pf-label outline color="purple">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Purple icon
    </pf-label>
    {{ ' ' }}
    <pf-label outline color="purple" close @close="log">
      Purple removeable
    </pf-label>
    {{ ' ' }}
    <pf-label outline color="purple" close @close="log">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Purple icon removeable
    </pf-label>
    {{ ' ' }}
    <pf-label outline color="purple" href="#filled">
      Purple link
    </pf-label>
    {{ ' ' }}
    <pf-label outline color="purple" href="#filled" close @close="log">
      Purple link removeable
    </pf-label>
    <br>
    <br>
    <pf-label outline color="cyan">
      Cyan
    </pf-label>
    {{ ' ' }}
    <pf-label outline color="cyan">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Cyan icon
    </pf-label>
    {{ ' ' }}
    <pf-label outline color="cyan" close @close="log">
      Cyan removeable
    </pf-label>
    {{ ' ' }}
    <pf-label outline color="cyan" close @close="log">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Cyan icon removeable
    </pf-label>
    {{ ' ' }}
    <pf-label outline color="cyan" href="#filled">
      Cyan link
    </pf-label>
    {{ ' ' }}
    <pf-label outline color="cyan" href="#filled" close @close="log">
      Cyan link removeable
    </pf-label>
  </doc-page>
</template>

<script>
import { InfoCircleIcon } from "@vue-patternfly4/icons";

export default {
  name: "LabelPage",

  components: {
    InfoCircleIcon,
  },

  methods: {
    log(...args) {
      alert(JSON.stringify(args));
    },
  },
};
</script>
