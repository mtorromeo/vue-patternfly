<template>
  <PageSection variant="light">
    <Title class="example-heading" h="3">Label</Title>

    <Label>Grey</Label>
    {{ ' ' }}
    <Label>
      <template #icon>
        <InfoCircleIcon />
      </template>Grey icon
    </Label>
    {{ ' ' }}
    <Label close @close="log">Grey removeable</Label>
    {{ ' ' }}
    <Label close @close="log">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Grey icon removeable
    </Label>
    {{ ' ' }}
    <Label href="#filled">Grey link</Label>
    {{ ' ' }}
    <Label href="#filled" close @close="log">Grey link removeable</Label>
    <br>
    <br>
    <Label color="blue">Blue</Label>
    {{ ' ' }}
    <Label color="blue">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Blue icon
    </Label>
    <Label color="blue" close @close="log">Blue removeable</Label>
    {{ ' ' }}
    <Label color="blue" close @close="log">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Blue icon removeable
    </Label>
    {{ ' ' }}
    <Label color="blue" href="#filled">Blue link</Label>
    {{ ' ' }}
    <Label color="blue" href="#filled" close @close="log">Blue link removeable</Label>
    <br>
    <br>
    <Label color="green">Green</Label>
    {{ ' ' }}
    <Label color="green">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Green icon
    </Label>
    {{ ' ' }}
    <Label color="green" close @close="log">Green removeable</Label>
    {{ ' ' }}
    <Label color="green" close @close="log">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Green icon removeable
    </Label>
    {{ ' ' }}
    <Label color="green" href="#filled">Green link</Label>
    {{ ' ' }}
    <Label color="green" href="#filled" close @close="log">Green link removeable</Label>
    <br>
    <br>
    <Label color="orange">Orange</Label>
    {{ ' ' }}
    <Label color="orange">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Orange icon
    </Label>
    {{ ' ' }}
    <Label color="orange" close @close="log">Orange removeable</Label>
    {{ ' ' }}
    <Label color="orange" close @close="log">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Orange icon removeable
    </Label>
    {{ ' ' }}
    <Label color="orange" href="#filled">Orange link</Label>
    {{ ' ' }}
    <Label color="orange" href="#filled" close @close="log">Orange link removeable</Label>
    <br>
    <br>
    <Label color="red">Red</Label>
    {{ ' ' }}
    <Label color="red">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Red icon
    </Label>
    {{ ' ' }}
    <Label color="red" close @close="log">Red removeable</Label>
    {{ ' ' }}
    <Label color="red" close @close="log">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Red icon removeable
    </Label>
    {{ ' ' }}
    <Label color="red" href="#filled">Red link</Label>
    {{ ' ' }}
    <Label color="red" href="#filled" close @close="log">Red link removeable</Label>
    <br>
    <br>
    <Label color="purple">Purple</Label>
    {{ ' ' }}
    <Label color="purple">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Purple icon
    </Label>
    {{ ' ' }}
    <Label color="purple" close @close="log">Purple removeable</Label>
    {{ ' ' }}
    <Label color="purple" close @close="log">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Purple icon removeable
    </Label>
    {{ ' ' }}
    <Label color="purple" href="#filled">Purple link</Label>
    {{ ' ' }}
    <Label color="purple" href="#filled" close @close="log">Purple link removeable</Label>
    <br>
    <br>
    <Label color="cyan">Cyan</Label>
    {{ ' ' }}
    <Label color="cyan">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Cyan icon
    </Label>
    {{ ' ' }}
    <Label color="cyan" close @close="log">Cyan removeable</Label>
    {{ ' ' }}
    <Label color="cyan" close @close="log">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Cyan icon removeable
    </Label>
    {{ ' ' }}
    <Label color="cyan" href="#filled">Cyan link</Label>
    {{ ' ' }}
    <Label color="cyan" href="#filled" close @close="log">Cyan link removeable</Label>
  </PageSection>

  <PageSection variant="light">
    <Title class="example-heading" h="3">Outline</Title>

    <Label outline>Grey</Label>
    {{ ' ' }}
    <Label outline>
      <template #icon>
        <InfoCircleIcon />
      </template>Grey icon
    </Label>
    {{ ' ' }}
    <Label outline close @close="log">Grey removeable</Label>
    {{ ' ' }}
    <Label outline close @close="log">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Grey icon removeable
    </Label>
    {{ ' ' }}
    <Label outline href="#filled">Grey link</Label>
    {{ ' ' }}
    <Label outline href="#filled" close @close="log">Grey link removeable</Label>
    <br>
    <br>
    <Label outline color="blue">Blue</Label>
    {{ ' ' }}
    <Label outline color="blue">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Blue icon
    </Label>
    <Label outline color="blue" close @close="log">Blue removeable</Label>
    {{ ' ' }}
    <Label outline color="blue" close @close="log">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Blue icon removeable
    </Label>
    {{ ' ' }}
    <Label outline color="blue" href="#filled">Blue link</Label>
    {{ ' ' }}
    <Label outline color="blue" href="#filled" close @close="log">Blue link removeable</Label>
    <br>
    <br>
    <Label outline color="green">Green</Label>
    {{ ' ' }}
    <Label outline color="green">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Green icon
    </Label>
    {{ ' ' }}
    <Label outline color="green" close @close="log">Green removeable</Label>
    {{ ' ' }}
    <Label outline color="green" close @close="log">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Green icon removeable
    </Label>
    {{ ' ' }}
    <Label outline color="green" href="#filled">Green link</Label>
    {{ ' ' }}
    <Label outline color="green" href="#filled" close @close="log">Green link removeable</Label>
    <br>
    <br>
    <Label outline color="orange">Orange</Label>
    {{ ' ' }}
    <Label outline color="orange">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Orange icon
    </Label>
    {{ ' ' }}
    <Label outline color="orange" close @close="log">Orange removeable</Label>
    {{ ' ' }}
    <Label outline color="orange" close @close="log">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Orange icon removeable
    </Label>
    {{ ' ' }}
    <Label outline color="orange" href="#filled">Orange link</Label>
    {{ ' ' }}
    <Label outline color="orange" href="#filled" close @close="log">Orange link removeable</Label>
    <br>
    <br>
    <Label outline color="red">Red</Label>
    {{ ' ' }}
    <Label outline color="red">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Red icon
    </Label>
    {{ ' ' }}
    <Label outline color="red" close @close="log">Red removeable</Label>
    {{ ' ' }}
    <Label outline color="red" close @close="log">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Red icon removeable
    </Label>
    {{ ' ' }}
    <Label outline color="red" href="#filled">Red link</Label>
    {{ ' ' }}
    <Label outline color="red" href="#filled" close @close="log">Red link removeable</Label>
    <br>
    <br>
    <Label outline color="purple">Purple</Label>
    {{ ' ' }}
    <Label outline color="purple">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Purple icon
    </Label>
    {{ ' ' }}
    <Label outline color="purple" close @close="log">Purple removeable</Label>
    {{ ' ' }}
    <Label outline color="purple" close @close="log">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Purple icon removeable
    </Label>
    {{ ' ' }}
    <Label outline color="purple" href="#filled">Purple link</Label>
    {{ ' ' }}
    <Label outline color="purple" href="#filled" close @close="log">Purple link removeable</Label>
    <br>
    <br>
    <Label outline color="cyan">Cyan</Label>
    {{ ' ' }}
    <Label outline color="cyan">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Cyan icon
    </Label>
    {{ ' ' }}
    <Label outline color="cyan" close @close="log">Cyan removeable</Label>
    {{ ' ' }}
    <Label outline color="cyan" close @close="log">
      <template #icon>
        <InfoCircleIcon />
      </template>
      Cyan icon removeable
    </Label>
    {{ ' ' }}
    <Label outline color="cyan" href="#filled">Cyan link</Label>
    {{ ' ' }}
    <Label outline color="cyan" href="#filled" close @close="log">Cyan link removeable</Label>
  </PageSection>
</template>

<script>
import { InfoCircleIcon } from "@vue-patternfly4/icons";

export default {
  name: "Label",

  components: {
    InfoCircleIcon,
  },

  methods: {
    log(...args) {
      console.log(args);
    },
  },
};
</script>
